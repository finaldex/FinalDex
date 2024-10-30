const create_fullscreen = function() {

    // Create fullscreen elements
    const fs = create_element({Tag: "div", Attribute: { id: "fullscreen", }, Event: { wheel: event => { fullscreen_move(event.deltaY < 0 ? "left" : "right"); }}, Parent: document.body });
    const fs_btnL = create_element({ Tag: "button", Text: "«", Event: { click: () => fullscreen_move("left") }, Parent: fs });
    const fs_overlay = create_element({ Tag: "span",  Event: { click: () => { document.querySelector("#fullscreen").classList.remove("active"); document.removeEventListener("keyup", fullscreen_handle); } }, Parent: fs });
    const fs_listWrap = create_element({ Tag: "div", Parent: fs });
    const fs_list = create_element({ Tag: "ul", Parent: fs_listWrap });
    const fs_btnR = create_element({ Tag: "button", Text: "»", Event: { click: () => fullscreen_move("right") }, Parent: fs });

    fs.dataset.index = 1;

    const translateValue = -100 * (fs.dataset.index - 1);
    fs_list.style.setProperty('--translate-value', `${translateValue}%`);

    fullscreen_update();

}




function fullscreen_handle(event) {
    if (event.which === 37) fullscreen_move("left");
    else if (event.which === 39) fullscreen_move("right");
}

function fullscreen_open(images,index) {
    const fs = document.querySelector("#fullscreen");
    const fs_list = fs.querySelector(":scope ul");

    fs.className = "active";
    fs_list.innerHTML = "";

    fs.dataset.index = index ? index : images.length ? 1 : 0;
    document.addEventListener("keyup", fullscreen_handle);

    images.forEach((opt, i) => {
        const li = create_element({Tag: "li", Parent: fs_list })
        const wrap = create_element({Tag: "div", Event: {mousemove: (event) => fullscreen_magnify(event)}, Parent: li })
        const img = create_element({Tag:"img", Attribute: {src: opt.src, title: opt.title }, Parent: wrap, })
        const magnify = create_element({Tag:"span", Class:["magnify"], Parent:wrap, })
        const magnifyImg = create_element({Tag:"img", Attribute: {src: opt.src }, Parent:magnify, })
    });

    fullscreen_update();
}
function fullscreen_magnify(event) {
    const parent = event.currentTarget;
    const child = parent.querySelector(":scope > span");
    const rect = parent.getBoundingClientRect();

    // Get half of the magnify element's dimensions
    const halfWidth = child.getBoundingClientRect().width / 2;
    const halfHeight = child.getBoundingClientRect().height / 2;

    // Calculate new position, centered
    let x = event.clientX - rect.left - halfWidth;
    let y = event.clientY - rect.top - halfHeight;

    // Ensure the child stays within the parent
    x = Math.max(0, Math.min(x, rect.width - child.getBoundingClientRect().width));
    y = Math.max(0, Math.min(y, rect.height - child.getBoundingClientRect().height));

    // Set CSS properties for the magnify effect
    child.style.setProperty('--x', x);
    child.style.setProperty('--y', y);

    const parentImg = parent.querySelector(":scope > img");
    const childImg = child.querySelector(":scope > img");

    // Set width and height for the magnified image
    const scale = 2; // Magnify scale factor
    childImg.style.width = parentImg.getBoundingClientRect().width * scale + "px"; 
    childImg.style.height = parentImg.getBoundingClientRect().height * scale + "px"; 

    // Calculate translation for the magnified image
    let translateX = (event.clientX - rect.left) * -1 * scale + (halfWidth*0.5);
    let translateY = (event.clientY - rect.top) * -1 * scale + (halfHeight*0.5);

    // Adjust translate values to keep the image within bounds of the magnify element
    const maxTranslateX = childImg.offsetWidth - (child.getBoundingClientRect().width*0.5);
    const maxTranslateY = childImg.offsetHeight - (child.getBoundingClientRect().height*0.5);

    // Clamp translate values to ensure the image does not overflow
    translateX = Math.max(-maxTranslateX, Math.min(translateX, 0));
    translateY = Math.max(-maxTranslateY, Math.min(translateY, 0));

    // Apply the scaling and translation
    childImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    childImg.style.transformOrigin = 'top left';
}

function fullscreen_move(direction) {
    const fs = document.querySelector("#fullscreen")
    const fs_li = fs.querySelectorAll(":scope ul > li")
    let index = fs.dataset.index ? fs.dataset.index : 1;

    // Update index based on direction
    if (direction === "left") {
        if (index > 1) {
            index--;
        }
    } else if (direction === "right") {
        if (fs_li && index < fs_li.length) {
            index++;
        }
    }

    fs.dataset.index = index;

    fullscreen_update();
}


function fullscreen_update() {
    const fs = document.querySelector("#fullscreen");
    const fs_ul = fs.querySelector(":scope ul");
    const fs_li = fs.querySelectorAll(":scope ul > li")
    const fs_btnL = fs.querySelector(":scope button:nth-of-type(1)");
    const fs_btnR = fs.querySelector(":scope button:nth-of-type(2)");
    const index = fs.dataset.index ? fs.dataset.index : 1;

    const translateValue = -100 * (index - 1);
    fs_ul.style.setProperty('--translate-value', `${translateValue}%`);

    fs_btnL.style.color = (index > 1) ? "" : "transparent";
    fs_btnL.style.pointerEvents = (index > 1) ? "" : "none";
    fs_btnR.style.color = (index < fs_li.length) ? "" : "transparent";
    fs_btnR.style.pointerEvents = (index < fs_li.length) ? "" : "none";
}


