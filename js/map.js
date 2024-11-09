function svgmap(image,svgdata) {

    if (!svgdata) { console.warn("Could not find map data."); return; }

    let popupLocked = false;
    let currentArea = null;

    const init_retryMax = 20;
    let init_retry = 0;

    const base = image.parentElement;

    const wrap = create_element({ Tag: "div", Class: ['svgmap'], Parent: base });
    wrap.appendChild(image)

    const container = create_element({ Tag: "div", Class: ['container'], Parent: wrap });
    const popup = create_element({ Tag: "div", Class: ['popup'], Event: { mouseover: () => {popup_show()}, mouseout: () => {popup_hide()}}, Parent: container });
    const svg = create_element({ Tag: "svg", Attribute: {"preserveAspectRatio": "xMidYMid meet"}, Parent: container });

    image.addEventListener('load', function() {svg_update(wrap)});
    window.addEventListener('resize', function() {svg_update(wrap)});

    svg_update(wrap);
    svg_init();

    function popup_position(event,override) {

        if (popupLocked && !override) return

        // Define padding for the popup
        const padding = 10;
    
        // Get the dimensions and position of the popup and container
        const popup_rect = popup.getBoundingClientRect();
        const container_rect = container.getBoundingClientRect();
        
        // Get the base element's bounding rectangle
        const base_rect = base.getBoundingClientRect();
    
        // Calculate scale factors based on the current scaling of the base
        const scaleX = base_rect.width / base.offsetWidth;  // Scale factor for width
        const scaleY = base_rect.height / base.offsetHeight; // Scale factor for height
    
        // Calculate the initial position based on mouse click adjusted for scaling
        let popupX = (event.clientX - container_rect.left) / scaleX + padding; // Add padding
        let popupY = (event.clientY - container_rect.top) / scaleY + padding;  // Add padding
    
        // Adjust for overflow on the right
        if (popupX + popup_rect.width > container_rect.width) {
            popupX = (container_rect.width - popup_rect.width) / scaleX - padding;
        }
    
        // Adjust for overflow on the bottom
        if (popupY + popup_rect.height > container_rect.height) {
            popupY = (container_rect.height - popup_rect.height) / scaleY - padding;
        }
        
        // Adjust for overflow on the left
        if (popupX < 0) {
            popupX = padding; // Keep padding on the left
        }
        
        // Adjust for overflow on the top
        if (popupY < 0) {
            popupY = padding; // Keep padding on the top
        }
        
        // Set the calculated position to the popup
        popup.style.left = `${popupX}px`;
        popup.style.top = `${popupY}px`;
        popup.classList.add("active"); // Show the popup
    }
    
    
    function popup_hide() {
        if (popupLocked) return;

        popup.classList.remove("active");
    }

    function popup_show() {
        if (popupLocked) return;

        popup.classList.add("active");

        popup_text(event);
        popup_position(event);
    }

    function popup_text() {

        popup.innerHTML = "";
        const areas = event.target.dataset.entry ? event.target.dataset.entry.split(/[,]/) : [];
        areas.forEach(a => {
            const location_index = get_locationIndex(a.replace("_",""));
            if (location_index) {
                const areaText = create_element({ Tag: a.includes("_") ? "strong" : "span", Text: a.replace("_",""), Parent: popup });
                add_redirect(areaText, { catalog: "location", entry: a.replace("_","") });
            }
            else {
                console.warn(`Found invalid Location: ${a.replace("_","")}`);
            }
        });
    }

    function popup_toggle(event) {

        if (popupLocked && currentArea === event.target) {
            // If clicking the same area, do nothing
            return;
        }

        // Remove active class from previous area
        if (currentArea) {
            currentArea.classList.remove('active');
        }

        popupLocked = true;
        currentArea = event.target;
        event.target.classList.add('active');
        popup_text(event);
        popup_position(event,true);
    }


    function svg_init() {
        // Ensure the image is fully loaded before updating SVG attributes
        if (image.complete) {
        
            // Set viewBox to ensure the SVG content scales correctly
            svg.setAttribute('viewBox', svgdata.viewBox);

            svgdata.paths.forEach(pathData => {
                const location_index = Data.Loctations ? get_locationIndex(pathData.entry) : true;
                if (location_index) {
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.dataset.entry = pathData.entry;
                    path.setAttribute('d', pathData.d);
                    svg.appendChild(path);
                    
                    path.addEventListener("mouseover",function(event) {popup_show(event)});
                    path.addEventListener("mouseout",function(event) {popup_hide()});
                    path.addEventListener("mousemove",function(event) {popup_position(event)});
                    path.addEventListener("click",function(event) {popup_toggle(event)});
                }
            });
            init_retry = 0;
        } else {
            // Retry after a short delay if the image is not yet fully loaded
            if (init_retry < init_retryMax) {
                init_retry++;
                setTimeout(svg_init, 100);
            }
        }
    }

    // Hide popup when clicking outside of interactive areas
    document.addEventListener('click', function(event) {

        if (!event.target.closest('.svgmap path') && !event.target.closest('.svgmap .popup')) {
            popupLocked = false;
            if (currentArea) {
                popup.classList.remove('active');
                currentArea.classList.remove('active');
                currentArea = null;
            }
            popup.classList.remove("active");
        }
    });
}

function map_update() {
    Config.Map.paths.forEach((p,i) => {
        const location = Config.Map.paths[i].entry.split(/[_]/);
        const areas = Data && Data.Locations ? Object.keys(Data.Locations).filter(key => { const area = Data.Locations[key].Connection; return key && area && area.Located && location.some(l => area.Located.includes(l)); }).filter(a => !Config.Map.paths.some(p => { let entries = Array.isArray(p["entry"]) ? p["entry"] : [p["entry"]]; return entries.some(e => e === a); })) : [];
        Config.Map.paths[i].entry = [...location.map(v => "_"+v),...areas];
    });
}
function map_select(map,location) {
    if (!map) { return };

    const paths = map.querySelectorAll(":scope path")
    paths.forEach(p => {
        p.classList.remove("selected");
        
        if (p.dataset.entry.split(/[,]/).some(v => location.includes(v))) {
            p.classList.add("selected");
        }
    });
}

const update_retryMax = 20;
let update_retry = 0;

function svg_update(base) {
    const svg = base.querySelector(":scope svg");

    if (!svg) return;

    const image = base.querySelector(":scope img");
    const container = base.querySelector(":scope .container");

    // Ensure the image is fully loaded before updating SVG attributes
    if (image.complete) {

        // Set SVG width and height to match the image size
        svg.setAttribute('width', image.clientWidth);
        svg.setAttribute('height', image.clientHeight);

        // Set container width and height to match the image size
        container.style.width = `${image.clientWidth}px`;
        container.style.height = `${image.clientHeight}px`;

        update_retry = 0;
    } else {
        // Retry after a short delay if the image is not yet fully loaded
        if (update_retry < update_retryMax) {
            update_retry++;
            setTimeout(() => svg_update(base), 100);
        }
    }
}
