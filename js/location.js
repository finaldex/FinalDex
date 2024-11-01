const create_location = function() {
    const location = create_element({ Tag: "div", Attribute: { id: "location" }, Class: ["layout1"], Parent: document.body, });

    // Catalog
    const location_catalog = create_element({ Tag: "aside", Class: ["catalog"],  Parent: location });
    const location_catalogHeader = create_element({ Tag: "header", Parent: location_catalog });

    // Search
    const location_searchWrap = create_element({ Tag: "div", Class: ["search"], Parent: location_catalogHeader });
    const location_searchInput = create_element({ Tag: "input", Attribute: { type: "search", name: "location_search", autocomplete: "off", placeholder: "Search Locations...", onfocus: "this.placeholder=''", onblur: "this.placeholder='Search Locations...'" }, Event: {input: event => search({ Entries: document.querySelectorAll('#location .catalog ol li'), Data: Data.Locations, }, event), keydown: event => search_filter({ Entries: document.querySelectorAll('#location .catalog ol li') }, event), }, Parent: location_searchWrap });

    // List
    const location_catalogList = create_element({ Tag: "ol",  Parent: location_catalog });

    // Entry
    const locations = Object.keys(Data.Locations).sort((a, b) => (nA = a.match(/\d+/), nB = b.match(/\d+/), c = a.replace(/\d+/, '').trim().localeCompare(b.replace(/\d+/, '').trim()), c !== 0 ? c : (nA ? (nB ? parseInt(nA[0]) - parseInt(nB[0]) : 1) : -1)));

    locations.forEach((l, i) => {
        const location_catalogEntry = create_element({ Tag: "li", Event: {click: location_data }, Data: {index: l, search: Data.Locations[l].Location.join(",") }, Parent: location_catalogList });
        const location_catalogEntryLabel = create_element({ Tag: "label", Parent: location_catalogEntry });
        const location_catalogEntryInput = create_element({ Tag: "input", Attribute: { type: "radio", name: "location_entry", id: `location_entry-${l}`, ...(i === 0 && {checked: ""}) }, Parent: location_catalogEntryLabel });
        const location_catalogEntryText = create_element({ Tag: "strong", Text: l, Parent: location_catalogEntryLabel });
    });

    // Header
    const location_header = create_element({ Tag: "header", Class: ["header"],  Parent: location });
    const location_titleWrap = create_element({ Tag: "div", Class: ["title"], Parent: location_header });
    const location_title = create_element({ Tag: "h2", Parent: location_titleWrap });
    const location_gameWrap = create_element({ Tag: "div", Class: ["game"], Parent: location_header });
    const location_gameImage = create_element({ Tag: "img", Attribute: { src: get_directory({FirstMatch: true, File: ["Title"], Path: [Path.Game.Title]}) }, Parent: location_gameWrap });
    const location_sloganWrap = create_element({ Tag: "div", Class: ["slogan"], Parent: location_header });
    const location_slogan = create_element({ Tag: "h4", Attribute: {title: "Slogan"}, Parent: location_sloganWrap });

    // Sidebar
    const location_sidebar = create_element({ Tag: "aside",Class: ["sidebar"],  Parent: location });
    const location_sidebarHeader = create_element({ Tag: "header", Parent: location_sidebar });
    const location_sidebarHeaderWrap = create_element({ Tag: "div", Parent: location_sidebarHeader });

    const sidebar_options = ["Overview","Pokémon","Item","Trainer","Move Tutor"]
    sidebar_options.forEach((opt, i) => {
        const format_name = (opt.lastIndexOf(" ") !== -1 ? opt.substring(opt.lastIndexOf(" ") + 1).toLowerCase() : opt.toLowerCase()).replace("é","e");
        
        const location_sidebarHeaderLabel = create_element({ Tag: "label", Parent: opt === "Overview" ? location_sidebarHeader : location_sidebarHeaderWrap,Position: opt === "Overview" ? "Top" : undefined, });
        const location_sidebarHeaderInput = create_element({ Tag: "input", Attribute: {type: "radio", name: "location_sidebar_options", id: `location_sidebar_option${i}`, value: format_name, ...(opt === "Overview" && {checked: ""}), }, Event: { change: () => { location_sidebarHeader.dataset.input = format_name; const show = document.querySelectorAll(`#location .sidebar > main > div.${format_name}`); const hide = document.querySelectorAll(`#location .sidebar > main > div:not(.${format_name})`); toggleVisibility(show, hide) } }, Parent: location_sidebarHeaderLabel });
        const location_sidebarHeaderText = create_element({ Tag: "span", Text: opt, Parent: location_sidebarHeaderLabel });    
    });

    // Content
    const location_sidebarContent = create_element({ Tag: "main", Parent: location_sidebar });

    // Overview
    const location_overview = create_element({ Tag: "div", Class: ["overview"], Parent: location_sidebarContent });
    const location_gallery = create_element({ Tag: "header", Parent: location_overview });
    const location_galleryHeader = create_element({ Tag: "div", Parent: location_gallery });
    const location_galleryHeaderText = create_element({ Tag: "strong", Parent: location_galleryHeader });
    const location_galleryContent = create_element({ Tag: "div", Parent: location_gallery });
    const location_galleryLeftButton = create_element({ Tag: "button", Text: "«", Event: { click: () => {overview_move("left")}}, Parent: location_galleryContent });
    const location_galleryListWrap = create_element({ Tag: "div", Parent: location_galleryContent });
    const location_galleryList = create_element({ Tag: "ol", Data: {index: 1}, Event: { click: (event) => {const img = document.querySelectorAll("#location .sidebar > main > .overview > header > *:last-child ol li img"); img.length > 0 && (fullscreen_open(img,event.currentTarget.dataset.index)); }, wheel: (event) => {const dir = event.deltaY < 0 ? "left" : "right"; overview_move(dir)} }, Parent: location_galleryListWrap });
    const location_galleryRightButton = create_element({ Tag: "button", Text: "»", Event: {click: () => {overview_move("right")}}, Parent: location_galleryContent });
    const location_description = create_element({ Tag: "main", Parent: location_overview });

    // Pokemon
    const location_pokemon = create_element({ Tag: "div", Class: ["pokemon"], Parent: location_sidebarContent });
    const location_pokemonNavigatorWrap = create_element({ Tag: "div", Parent: location_pokemon });
    const location_pokemonNavigatorText = create_element({ Tag: "strong", Parent: location_pokemonNavigatorWrap });
    const location_pokemonList = create_element({ Tag: "ul", Parent: location_pokemon });

    // Item
    const location_item = create_element({ Tag: "div", Class: ["item"], Parent: location_sidebarContent });
    const location_itemNavigatorWrap = create_element({ Tag: "div", Parent: location_item });
    const location_itemNavigatorText = create_element({ Tag: "strong", Parent: location_itemNavigatorWrap });
    const location_itemList = create_element({ Tag: "ul", Parent: location_item });

    // Trainer
    const location_trainer = create_element({ Tag: "div", Class: ["trainer"], Parent: location_sidebarContent });
    const location_trainerHeader = create_element({ Tag: "header", Data: { index: 0, }, Parent: location_trainer });
    
    let trainerSearch_focus = false;

    const location_trainerSearchWrap = create_element({ Tag: "div", Class: ["search"], Parent: location_trainerHeader });
    const location_trainerSearch = create_element({ Tag: "input", Attribute: {type:"search", id: "trainer_search_input", autocomplete:"off", placeholder: "Search Trainers...", onfocus: "this.placeholder=''", onblur: "this.placeholder='Search Trainers...'"}, Event: { click: function() { if (trainerSearch_focus) { this.blur(); trainerSearch_focus = false; } else { trainerSearch_focus = true; } }, blur: function() { trainerSearch_focus = false; }, change: trainerSearch, input: trainerSearch }, Parent: location_trainerSearchWrap });
    const location_trainerSearchList = create_element({ Tag: "ol", Parent: location_trainerSearchWrap });

    function trainerSearch() {
        const searchValue = this.value.toLowerCase();
        const items = document.querySelectorAll("#location .sidebar > main > .trainer .search ol > *");
        items.forEach(item => { const searchText = item.dataset.search.toLowerCase();
            if (searchValue === "" || searchText.includes(searchValue)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    const location_trainerTop = create_element({ Tag: "section", Parent: location_trainerHeader });
    const location_trainerCenter = create_element({ Tag: "section", Parent: location_trainerHeader });
    const location_trainerBottom = create_element({ Tag: "section", Parent: location_trainerHeader });

    const location_trainerTopLeft = create_element({ Tag: "div", Parent: location_trainerTop });
    const location_trainerSeasonText = create_element({ Tag: "strong", Class: ["season"], Parent: location_trainerTopLeft });
    const location_trainerDayText = create_element({ Tag: "strong", Class: ["day"], Parent: location_trainerTopLeft });
    const location_trainerTimeText = create_element({ Tag: "strong", Class: ["time"], Parent: location_trainerTopLeft });
    const location_trainerFieldText = create_element({ Tag: "strong", Class: ["field"], Parent: location_trainerTopLeft });
    
    
    const location_trainerTopCenter = create_element({ Tag: "div", Parent: location_trainerTop });
    const location_trainerAreaText = create_element({ Tag: "strong", Class: ["area"], Parent: location_trainerTopCenter });
    const location_trainerHeaderText = create_element({ Tag: "strong", Class: ["header"], Parent: location_trainerTopCenter });
    const location_trainerTitleText = create_element({ Tag: "strong", Class: ["title"], Parent: location_trainerTopCenter });

    const location_trainerTopRight = create_element({ Tag: "div", Parent: location_trainerTop });
    const location_trainerTypeText = create_element({ Tag: "strong", Class: ["type"], Parent: location_trainerTopRight });
    
    const location_trainerPreviousWrap = create_element({ Tag: "div", Class: ["previous"], Parent: location_trainerCenter });
    const location_trainerPreviousImage = create_element({ Tag: "img", Event: {click: () => {location_trainerHeader.dataset.index = parseInt(location_trainerHeader.dataset.index)-1; const location_index = location.querySelector(":scope .catalog ol li:has(input:checked)").dataset.index; trainer_populate(location_index)} }, Parent: location_trainerPreviousWrap });
    const location_trainerCurrentWrap = create_element({ Tag: "div", Class: ["current"], Parent: location_trainerCenter });
    const location_trainerCurrentImage = create_element({ Tag: "img", Parent: location_trainerCurrentWrap });
    const location_trainerNextWrap = create_element({ Tag: "div", Class: ["next"], Parent: location_trainerCenter });
    const location_trainerNextImage = create_element({ Tag: "img", Event: {click: () => {location_trainerHeader.dataset.index = parseInt(location_trainerHeader.dataset.index)+1; const location_index = location.querySelector(":scope .catalog ol li:has(input:checked)").dataset.index; trainer_populate(location_index)} }, Parent: location_trainerNextWrap });

    const location_trainerRewardWrap = create_element({ Tag: "div", Class: ["reward"], Parent: location_trainerBottom });
    const location_trainerRewardHeader = create_element({ Tag: "h4", Text: "Reward", Parent: location_trainerRewardWrap });
    const location_trainerRewardImageWrap = create_element({ Tag: "div", Parent: location_trainerRewardWrap });
    const location_trainerRewardText = create_element({ Tag: "strong", Parent: location_trainerRewardWrap });

    const location_trainerNameWrap = create_element({ Tag: "div", Class: ["name"], Parent: location_trainerBottom });
    const location_trainerNameText = create_element({ Tag: "strong", Parent: location_trainerNameWrap });

    const location_trainerItemWrap = create_element({ Tag: "div", Class: ["item"], Parent: location_trainerBottom });
    const location_trainerItemHeader = create_element({ Tag: "h4", Text: "Item", Parent: location_trainerItemWrap });
    const location_trainerItemImageWrap = create_element({ Tag: "div", Parent: location_trainerItemWrap });
    const location_trainerItemText = create_element({ Tag: "strong", Parent: location_trainerItemWrap });

    const location_trainerPokemonList = create_element({ Tag: "ul", Parent: location_trainer });

    // Tutor
    const location_tutor = create_element({ Tag: "div", Class: ["tutor"], Parent: location_sidebarContent });
    const location_tutorNavigatorWrap = create_element({ Tag: "div", Parent: location_tutor });
    const location_tutorNavigatorText = create_element({ Tag: "strong", Parent: location_tutorNavigatorWrap });
    const location_tutorList = create_element({ Tag: "ul", Parent: location_tutor });
    
    
    // Map
    const location_map = create_element({ Tag: "main", Class: ["map"], Parent: location });
    const location_mapWrap = create_element({ Tag: "div", Event: { mousemove: handleMapMouseMove, wheel: handleMapWheel }, Parent: location_map });

    const location_resetButton = create_element({ Tag: "button", Text: "-", Class: ["reset"], Event: { click: handleMapResetButtonClick }, Parent: location_mapWrap });
    const location_zoomButton = create_element({ Tag: "button", Text: "+", Class: ["zoom"], Event: { click: handleMapZoomButtonClick }, Parent: location_mapWrap });

    /*
    const location_fullscreenButton = create_element({ Tag: "button", Text: "⛶", Class: ["fullscreen"], Parent: location_mapWrap });
    */

    const location_suspendButton = create_element({ Tag: "button", Class: ["suspend"], Event: { click: handleMapSuspendButtonClick }, Parent: location_mapWrap });
    const location_pauseText = create_element({ Tag: "span", Text: "▶", Parent: location_suspendButton });
    const location_playText = create_element({ Tag: "span", Text: "❙❙", Parent: location_suspendButton });

    const location_mapImageWrap = create_element({ Tag: "div", Data: { scale: 1, suspend: false }, Event: { click: handleMapImageWrapClick }, Parent: location_mapWrap });
    const location_mapImage = create_element({ Tag: "img", Attribute: { src: get_directory({ FirstMatch: true, Exact: true, File: ["Map"], Path: [Path.Region.Map] }) }, Parent: location_mapImageWrap });
    const location_mapArea = create_element({ Tag: "map", Parent: location_mapWrap });

    let directions = {West: "⮜", North: "⮝", East: "⮞", South: "⮟"};
    Object.keys(directions).forEach(direction => {
        const location_directionButton = create_element({ Tag: "button", Text: directions[direction], Class: [direction.toLowerCase()], Parent: location_map, ...((direction === "North" || direction === "South") && { Sibling: location_mapWrap }), Position: (direction === "West" || direction === "North") ? "Top" : "Bottom" });
        add_redirect(location_directionButton,{catalog:"location",style:"color"});
    });

    // Panel
    const location_panel = create_element({ Tag: "footer", Class: ["panel"], Parent: location });

    const location_areas = create_element({ Tag: "div", Class: ["area"], Parent: location_panel });
    const location_areasHeader = create_element({ Tag: "h3", Text: "Sub Areas", Parent: location_areas });
    const location_areasWrap = create_element({ Tag: "div", Parent: location_areas });

    const location_navigation = create_element({ Tag: "div", Class: ["navigation"], Parent: location_panel });
    const location_navigationHeader = create_element({ Tag: "h3", Text: "Navigation", Parent: location_navigation });
    const location_navigationWrap = create_element({ Tag: "div", Parent: location_navigation });

    const location_located = create_element({ Tag: "div", Class: ["located"], Parent: location_panel });
    const location_locatedHeader = create_element({ Tag: "h3", Text: "Located", Parent: location_located });
    const location_locatedWrap = create_element({ Tag: "div", Parent: location_located });


    // Event Handlers
    function handleMapMouseMove(event) {
        zoom_move(location_mapImageWrap, event);
    }

    function handleMapWheel(event) {
        const option = event.deltaY < 0;
        zoom_scale(location_mapImageWrap, option, event);
    }

    function handleMapResetButtonClick(event) {
       
        if (location_mapImageWrap) {
            location_mapImageWrap.dataset.scale = 1;
            zoom_move(location_mapImageWrap, event);
        }
    }

    function handleMapZoomButtonClick(event) {
        zoom_scale(location_mapImageWrap, true, event);
    }

    function handleMapSuspendButtonClick() {
        if (location_mapImageWrap.dataset.suspend === "true") {
            location_mapImageWrap.dataset.suspend = "false";
        }
    }

    function handleMapImageWrapClick() {
        if (location_mapImageWrap.dataset.scale !== "1" &&  location_mapImageWrap.dataset.suspend !== "true") {
            location_mapImageWrap.dataset.suspend = "true";
        }
    }

    // Initial call to toggleVisibility based on the checked radio input
    const checkedInput = document.querySelector('#location .sidebar > header input:checked');
    const elShow = document.querySelectorAll(`#location .sidebar > main > .${checkedInput.value}`);
    const elHide = document.querySelectorAll(`#location .sidebar > main > div:not(.${checkedInput.value})`);
    toggleVisibility(elShow, elHide)


    location_data();
}




function overview_move(direction) {
    const ov_list = document.querySelector("#location .sidebar > main > .overview > header > *:last-child ol");
    const ov_li = ov_list.querySelectorAll(":scope li")
    let index = ov_list.dataset.index ? ov_list.dataset.index : 1;

    // Update index based on direction
    if (direction === "left") {
        if (index > 1) {
            index--;
        }
    } else if (direction === "right") {
        if (ov_li && index < ov_li.length) {
            index++;
        }
    }

    ov_list.dataset.index = index;

    overview_update();
}


function overview_update() {
    const ov_list = document.querySelector("#location .sidebar > main > .overview > header > *:last-child ol");
    const ov_header = document.querySelector("#location .sidebar > main > .overview > header > *:first-child > *");
    const ov_img = ov_list.querySelectorAll(":scope li img");
    const ov_leftButton = document.querySelector("#location .sidebar > main > .overview > header > *:last-child button:nth-of-type(1)");
    const ov_rightButton = document.querySelector("#location .sidebar > main > .overview > header > *:last-child button:nth-of-type(2)");
    const index = ov_list.dataset.index ? ov_list.dataset.index : 1;

    const translateValue = -100 * (index - 1);
    ov_list.style.setProperty('--translate-value', `${translateValue}%`);

    ov_header.innerText = ov_img.length > 0 ? ov_img[index-1].title : "";

    ov_leftButton.style.color = (index > 1) ? "" : "transparent";
    ov_leftButton.style.pointerEvents = (index > 1) ? "" : "none";
    ov_rightButton.style.color = (index < ov_img.length) ? "" : "transparent";
    ov_rightButton.style.pointerEvents = (index < ov_img.length) ? "" : "none";
}



function location_data() {

    const active_entry = document.querySelector("#location .catalog ol li:has(input:checked)")

    if (!active_entry || !active_entry.dataset.index) { return }
    
    const location_index = active_entry.dataset.index;

    const titleText = document.querySelector("#location > header .title > *")
    titleText.innerText = Data.Locations[location_index].Location[0];

    const sloganText = document.querySelector("#location > header .slogan > *")
    sloganText.innerText = Data.Locations[location_index].Slogan ? Data.Locations[location_index].Slogan : "";

    const overviewList = document.querySelector("#location .sidebar > main > .overview > header > *:last-child ol");
    overviewList.innerHTML = "";
    overviewList.dataset.index = 1;

    const overviewImages = get_directory({Exact: true, File: [...Data.Locations[location_index].Location], Path: [Path.Location.Load,Path.Location.Overview]})
    overviewImages.forEach(i => {
        const overviewWrap = create_element({ Tag: "li", Parent: overviewList });
        const overviewImage = create_element({ Tag: "img", Attribute: {src: i, title: i.split('/').pop().replace(/\.[^.]+$/, '').replace(/.*_/, '')}, Parent: overviewWrap });
    });

    overview_update();

    const overviewText = document.querySelector("#location .sidebar > header label:has(input[value='overview']) > *:last-child")
    overviewText.innerText = Data.Locations[location_index].Location[0];

    const overview_content = document.querySelector("#location .sidebar .overview > main");
    overview_content.innerHTML = "";

    const descriptionArea = Data.Locations[location_index].Description ? (Data.Locations[location_index].Description.Area ? create_element({ Tag: "h3", Text: Data.Locations[location_index].Description.Area, Class: ["description_header"], Parent: overview_content }) : null) : null;
    const descriptionText = Data.Locations[location_index].Description ? (Data.Locations[location_index].Description.Text ? create_element({ Tag: "p", Text: Data.Locations[location_index].Description.Text, Class: ["description_text"], Parent: overview_content }) : null) : null;

    const location_points = Data.Locations[location_index]["Point of Interest"] ? Data.Locations[location_index]["Point of Interest"] : [];
    location_points.forEach(d => {
        const point_header = (d.Description || d.Located) ? create_element({ Tag: "h4", Text: d.Point, Class: ["point_header"], Parent: overview_content }) : null;
        const point_description = d.Description ? create_element({ Tag: "p", Text: d.Description, Class: ["point_text"], Parent: overview_content }) : null;
        const point_location = d.Located ? create_element({ Tag: "p", Text: d.Located, Class: ["point_location"], Parent: overview_content }) : null;
    });

    const directions = ['west', 'north', 'east', 'south'];
    Data.Locations[location_index].Connection && (directions.forEach(dir => {
        const connection = Data.Locations[location_index].Connection[dir.charAt(0).toUpperCase()+dir.slice(1)];
        const element = document.querySelector(`#location .map > .${dir}`);
        const value = connection ? connection.join("\n") : "";
        element.title = value;
        element.dataset.entry = value.replaceAll("\n",",");
    }));

    const locatedElement = document.querySelector("#location .panel .located > div");
    locatedElement.innerHTML = "";

    const location_located = Data.Locations[location_index].Connection && Data.Locations[location_index].Connection.Located ? Data.Locations[location_index].Connection.Located : [];
    location_located.forEach(d => {
        const locatedText = create_element({ Tag: "span", Text: d, Parent: locatedElement });
        add_redirect(locatedText,{catalog:"location",entry:d,style:"invert"});
    });

    const areaElement = document.querySelector("#location .panel .area > div");
    areaElement.innerHTML = "";

    const location_area = Object.keys(Data.Locations).filter(key => { const area = Data.Locations[key].Connection; return key && (area && area.Located && area.Located.includes(location)); });
    location_area.forEach(d => {
        const areaText = create_element({ Tag: "span", Text: d, Parent: areaElement });
        add_redirect(areaText,{catalog:"location",entry:d,style:"invert"});
    });


    const pokemonElement = document.querySelector("#location .sidebar > main > div.pokemon");
    const pokemonNavText = document.querySelector("#location .sidebar > main > div.pokemon > div > *");
    const pokemonList = document.querySelector("#location .sidebar > main > div.pokemon > ul");
    pokemonNavText.innerHTML = "";
    pokemonList.innerHTML = "";
    generate_locationPokemon({Catalog:"Location", Entry: Data.Locations[location_index].Location, Data: {[location_index]: Data.Locations[location_index]}, Parent:pokemonList, });
    generate_locationShopPokemon({Catalog:"Location", Entry: Data.Locations[location_index].Location, Data: {[location_index]: Data.Locations[location_index]}, Parent:pokemonList, });

    const itemElement = document.querySelector("#location .sidebar > main > div.item");
    const itemNavText = document.querySelector("#location .sidebar > main > div.item > div > *");
    const itemList = document.querySelector("#location .sidebar > main > div.item > ul");
    itemNavText.innerHTML = "";
    itemList.innerHTML = "";

    generate_locationItem({Catalog:"Location", Entry: Data.Locations[location_index].Location, Data: {[location_index]: Data.Locations[location_index]}, Parent:itemList, });
    generate_locationShopItem({Catalog:"Location", Entry: Data.Locations[location_index].Location, Data: {[location_index]: Data.Locations[location_index]}, Parent:itemList, });

    
    
    const trainerElement = document.querySelector("#location .sidebar > main > div.trainer");
    const trainerHeader = document.querySelector("#location .sidebar > main > div.trainer > header");
    const trainerList = document.querySelector("#location .sidebar > main > div.trainer .search ol");
    const trainerPokemon = document.querySelector("#location .sidebar > main > .trainer ul");
    const location_trainer = Data.Locations[location_index]["Trainer"] ? Data.Locations[location_index]["Trainer"] : [];
    trainerPokemon.innerHTML = "";
    trainerList.innerHTML = "";
    trainerHeader.dataset.index = 0;

    location_trainer.forEach((d, i) => {
        const trainer_name = [
            [d.Class, d.Trainer].filter(v => v !== undefined && v !== null).join(" "),
            [d.Area, d.Title, d.Header].filter(v => v !== undefined && v !== null).join(" - ")
        ].filter(v => v !== "").join(" ");
        
        const formatted_trainer_name = [d.Area, d.Title, d.Header].some(v => v !== undefined && v !== null) ? `${[d.Class, d.Trainer].filter(v => v !== undefined && v !== null).join(" ")} (${[d.Area, d.Title, d.Header].filter(v => v !== undefined && v !== null).join(" - ")})` : trainer_name;
        
        const entry = create_element({ Tag: "button", Text: formatted_trainer_name, Event: { click: (event) => { event.currentTarget.blur(); trainerHeader.dataset.index = i; trainer_populate(location_index); } }, Data: {index: i, search: formatted_trainer_name }, Parent: trainerList });
    });
    
    const tutorElement = document.querySelector("#location .sidebar > main > div.tutor");
    const tutorNavText = document.querySelector("#location .sidebar > main > div.tutor > div > *");
    const tutorList = document.querySelector("#location .sidebar > main > div.tutor > ul");
    tutorNavText.innerHTML = "";
    tutorList.innerHTML = "";
    generate_tutor({Catalog:"Location", Entry: Data.Locations[location_index].Location, Data: {[location_index]: Data.Locations[location_index]}, Parent:tutorList, });

    

    trainer_populate(location_index);

    const headerElement = document.querySelector("#location .sidebar > header");
    const checkedInput = document.querySelector("#location .sidebar > header input:checked");
    const header_input = headerElement.dataset.input && document.querySelectorAll(`#location .sidebar > main > .${headerElement.dataset.input}:has(ul:not(:empty))`).length > 0 ? document.querySelector(`#location .sidebar > header input[value='${headerElement.dataset.input}']`) : document.querySelector(`#location .sidebar > header input[value='overview']`);
    const elShow = header_input ? document.querySelectorAll(`#location .sidebar > main > .${header_input.value}`) : document.querySelectorAll(`#location .sidebar > main > .${checkedInput.value}`);
    const elHide = header_input ? document.querySelectorAll(`#location .sidebar > main > div:not(.${header_input.value})`) : document.querySelectorAll(`#location .sidebar > main > div:not(.${checkedInput.value})`);
    header_input && (document.querySelector(`#location .sidebar > header input[value='${header_input.value}']`).checked = true);
    toggleVisibility(elShow, elHide);
}


function trainer_populate(location_index) {

    const trainer_data = Data.Locations[location_index].Trainer ? Data.Locations[location_index].Trainer : [];

    if (!trainer_data.length > 0) { return; }
 
    const header = document.querySelector("#location .sidebar > main > .trainer > header")
    const index = header.dataset.index ? parseInt(header.dataset.index) : 0;

    if (!trainer_data[index]) { return; }
    

    const seasonText = document.querySelector("#location .sidebar > main > .trainer .season");
    seasonText.innerHTML = trainer_data[index].Season ? format_conjunctionSplit(trainer_data[index].Season).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>") : "";
    const timeText = document.querySelector("#location .sidebar > main > .trainer .time");
    timeText.innerHTML = trainer_data[index].Time ? format_conjunctionSplit(trainer_data[index].Time).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>") : "";
    const dayText = document.querySelector("#location .sidebar > main > .trainer .day");
    dayText.innerHTML = trainer_data[index].Day ? format_conjunctionSplit(trainer_data[index].Day).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>") : "";
    const fieldText = document.querySelector("#location .sidebar > main > .trainer .field");
    fieldText.innerHTML = trainer_data[index].Field ? format_conjunctionSplit(trainer_data[index].Field).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>") : "";

    const areaText = document.querySelector("#location .sidebar > main > .trainer .area");
    areaText.innerText = trainer_data[index].Area ? trainer_data[index].Area : "";
    const headerText = document.querySelector("#location .sidebar > main > .trainer .header");
    headerText.innerText = trainer_data[index].Header ? trainer_data[index].Header : "";
    const titleText = document.querySelector("#location .sidebar > main > .trainer .title");
    titleText.innerText = trainer_data[index].Title ? trainer_data[index].Title : "";

    const typeText = document.querySelector("#location .sidebar > main > .trainer .type");
    typeText.innerText = trainer_data[index]["Battle Type"] ? `${trainer_data[index]["Battle Type"]} Battle` : "";
    
    const previousImage = document.querySelector("#location .sidebar > main > .trainer .previous > *");
    previousImage.src = trainer_data[index-1] ? get_directory({FirstMatch: true, Exact: true, File: [trainer_data[index-1].Image,trainer_data[index-1].Trainer,`${trainer_data[index-1].Class}_${trainer_data[index-1].Gender}`,trainer_data[index-1].Class], Path: [Path.Character.VS,Path.Character.Pokestar,Path.Character.Battle.Front.GIF,Path.Character.Battle.Front.PNG,Path.Character.Portrait,Path.Character.PSS,Path.Character.GST,Path.Character.YComm]}) : "";
    previousImage.title = trainer_data[index-1] ? (trainer_data[index-1].Trainer && trainer_data[index-1].Class ? `${trainer_data[index-1].Class}\n${trainer_data[index-1].Trainer}` : trainer_data[index-1].Trainer ? trainer_data[index-1].Trainer : trainer_data[index-1].Class ? trainer_data[index-1].Class : "") : "";

    const currentImage = document.querySelector("#location .sidebar > main > .trainer .current > *");
    currentImage.src = get_directory({FirstMatch: true, Exact: true, File: [trainer_data[index].Image,trainer_data[index].Trainer,`${trainer_data[index].Class}_${trainer_data[index].Gender}`,trainer_data[index].Class], Path: [Path.Character.VS,Path.Character.Pokestar,Path.Character.Battle.Front.GIF,Path.Character.Battle.Front.PNG,Path.Character.Portrait,Path.Character.PSS,Path.Character.GST,Path.Character.YComm]});
    currentImage.title = trainer_data[index].Trainer && trainer_data[index].Class ? `${trainer_data[index].Class}\n${trainer_data[index].Trainer}` : trainer_data[index].Trainer ? trainer_data[index].Trainer : trainer_data[index].Class ? trainer_data[index].Class : "";

    const nextImage = document.querySelector("#location .sidebar > main > .trainer .next > *");
    nextImage.src = trainer_data[index+1] ? get_directory({FirstMatch: true, Exact: true, File: [trainer_data[index+1].Image,trainer_data[index+1].Trainer,`${trainer_data[index+1].Class}_${trainer_data[index+1].Gender}`,trainer_data[index+1].Class], Path: [Path.Character.VS,Path.Character.Pokestar,Path.Character.Battle.Front.GIF,Path.Character.Battle.Front.PNG,Path.Character.Portrait,Path.Character.PSS,Path.Character.GST,Path.Character.YComm]}) : "";
    nextImage.title = trainer_data[index+1] ? (trainer_data[index+1].Trainer && trainer_data[index+1].Class ? `${trainer_data[index+1].Class}\n${trainer_data[index+1].Trainer}` : trainer_data[index+1].Trainer ? trainer_data[index+1].Trainer : trainer_data[index+1].Class ? trainer_data[index+1].Class : "") : "";

    const rewardWrap = document.querySelector("#location .sidebar > main > .trainer .reward > div");
    const rewardText = document.querySelector("#location .sidebar > main > .trainer .reward > *:last-child");
    rewardWrap.innerHTML = "";
    remove_redirect(rewardWrap);
    remove_redirect(rewardText);

    trainer_data[index].Reward && (trainer_data[index].Reward.Quantity = trainer_data[index].Reward.Quantity ? trainer_data[index].Reward.Quantity : 1 );  
    const reward_index = trainer_data[index].Reward ? get_itemIndex(trainer_data[index].Reward.Reward) : null;
    const reward_src = reward_index ? get_directory({FirstMatch: true, Exact: true, File: [Data.Items[reward_index].Image,...(Data.Items[reward_index].Item)], Path: [Path.Item.Bag]}) : trainer_data[index].Reward ? get_directory({FirstMatch: true, Exact: true, File: [trainer_data[index].Reward.Reward], Path: [Path.Currency.Icon]}) : "";
    
    const reward_text = trainer_data[index].Reward ? (reward_index ? `${trainer_data[index].Reward.Quantity}x<br>${trainer_data[index].Reward.Reward}` : reward_src !== "" ? `${trainer_data[index].Reward.Quantity}<img src='${reward_src}' title='${trainer_data[index].Reward.Reward}' />` : trainer_data[index].Reward.Reward.length > 5 ? `${trainer_data[index].Reward.Quantity} <span title='${trainer_data[index].Reward.Reward}'>${trainer_data[index].Reward.Reward.match(/[A-Z]/g).join('')}</span>` : `${trainer_data[index].Reward.Quantity} <span title='${trainer_data[index].Reward.Reward}'>${trainer_data[index].Reward.Reward.match(/[A-Z]/g).join('')}</span>`) : "";
    rewardText.innerHTML = reward_text;

    reward_index && reward_src !== "" && (Array(Math.min(trainer_data[index].Reward.Quantity, 5)).fill().forEach(i => {
        const item_image = create_element({ Tag: "img", Attribute: {src: reward_src, title: trainer_data[index].Reward.Reward }, Parent: rewardWrap });
    }));

    const reward_quantityExtend = reward_index && reward_src !== "" && trainer_data[index].Reward.Quantity > 5 ? create_element({ Tag: "strong", Text: `...`, Attribute: { title: `${trainer_data[index].Reward.Quantity}x\n${trainer_data[index].Reward.Reward}` }, Parent: rewardWrap }) : null;

    reward_index && (add_redirect(rewardWrap,{catalog:"item",entry:trainer_data[index].Reward.Reward,style:"brightness"}));
    reward_index && (add_redirect(rewardText,{catalog:"item",entry:trainer_data[index].Reward.Reward,style:"color"}));

    
    const nameElement = document.querySelector("#location .sidebar > main > .trainer .name");
    nameElement.title = trainer_data[index].Note ? trainer_data[index].Note : "";

    const nameText = document.querySelector("#location .sidebar > main > .trainer .name > *");
    nameText.innerText = trainer_data[index].Trainer && trainer_data[index].Class ? `${trainer_data[index].Class}\n${trainer_data[index].Trainer}` : trainer_data[index].Trainer ? trainer_data[index].Trainer : trainer_data[index].Class ? trainer_data[index].Class : "";

    const itemWrap = document.querySelector("#location .sidebar > main > .trainer .item > div");
    const itemText = document.querySelector("#location .sidebar > main > .trainer .item > *:last-child");
    itemWrap.innerHTML = "";
    remove_redirect(itemWrap);
    remove_redirect(itemText);

    trainer_data[index].Item && (trainer_data[index].Item.Quantity = trainer_data[index].Item.Quantity ? trainer_data[index].Item.Quantity : 1 );  
    const item_index = trainer_data[index].Item ? get_itemIndex(trainer_data[index].Item.Item) : null;
    const item_src = item_index ? get_directory({FirstMatch: true, Exact: true, File: [Data.Items[item_index].Image,...(Data.Items[item_index].Item)], Path: [Path.Item.Bag]}) : "";
    itemText.innerHTML = trainer_data[index].Item ? (item_index ? `${trainer_data[index].Item.Quantity}x<br>${trainer_data[index].Item.Item}` : "") : "";

    item_index && item_src !== "" && (Array(Math.min(trainer_data[index].Item.Quantity, 5)).fill().forEach(i => {
        const item_image = create_element({ Tag: "img", Attribute: {src: item_src, title: trainer_data[index].Item.Item }, Parent: itemWrap });
    }));

    const item_quantityExtend = item_index && item_src !== "" && trainer_data[index].Item.Quantity > 5 ? create_element({ Tag: "strong", Text: `...`, Attribute: { title: `${trainer_data[index].Item.Quantity}x\n${trainer_data[index].Item.Item}` }, Parent: itemWrap }) : null;


    item_index && (add_redirect(itemWrap,{catalog:"item",entry:trainer_data[index].Item.Item,style:"brightness"}));
    item_index && (add_redirect(itemText,{catalog:"item",entry:trainer_data[index].Item.Item,style:"color"}));


    const pokemonList = document.querySelector("#location .sidebar > main > .trainer ul");
    pokemonList.innerHTML = "";
    
    const trainer_pokemon_invalid = [];
    const trainer_move_invalid = [];

    trainer_data[index].Pokemon && trainer_data[index].Pokemon.forEach(p => {
        const pokemon_index = get_pokemonIndex(p.Pokemon);

        if (Data.Pokemon[pokemon_index]) {
            const default_index = get_defaultPokemon(pokemon_index);
            const held_index = p.Item ? get_itemIndex(p.Item) : null;

            const pokemon_file = [Data.Pokemon[pokemon_index].File,Data.Pokemon[default_index].File].filter(v => v !== undefined && v !== null);
            const held_file = [p.Item, ...(held_index ? [Data.Items[held_index].Image, ...Data.Items[held_index].Item] : [])].filter(v => v !== undefined && v !== null);

            const header = p.Header ? p.Header : "";
            const headerElement = pokemonList.querySelector(`:scope ol[data-index="${header}"]`)

            const ol = !headerElement ? create_element({ Tag: "ol", Data: {index: header}, Parent: pokemonList }) : null;
            const entryHeader = !headerElement && header != "" ? create_element({ Tag: "li", Parent: ol }) : null;
            const entryHeaderText = entryHeader ? create_element({ Tag: "h4", HTML: header, Parent: entryHeader }) : null;

            const entry = create_element({ Tag: "li", Parent: ol ? ol : headerElement });


            if (Data.Pokemon[pokemon_index].Type) {
                const type1 = Data.Pokemon[pokemon_index].Type.Primary ? Data.Pokemon[pokemon_index].Type.Primary : "";
                const type2 = Data.Pokemon[pokemon_index].Type.Secondary ? Data.Pokemon[pokemon_index].Type.Secondary : type1;
                
                entry.style.setProperty('--Type2', `var(--Type_${type1})`);
                entry.style.setProperty('--Type1', `var(--Type_${type2})`);
            }

            const leftWrap = create_element({ Tag: "aside", Parent: entry });
            const rightWrap = create_element({ Tag: "aside", Parent: entry });
    
            const upperWrap = create_element({ Tag: "header", Parent: rightWrap });
            const lowerWrap = create_element({ Tag: "main", Parent: rightWrap });

            const lowerLeftWrap = create_element({ Tag: "div", Parent: lowerWrap });
            const lowerRightWrap = create_element({ Tag: "div", Parent: lowerWrap });
            
            const pokemonWrap = create_element({ Tag: "div", Class: ["pokemon"], Parent: leftWrap });

            const heldImage = p.Item ? create_element({ Tag: "img", Class: ["held_image"], Attribute: { title: `Held Item\n${p.Item}`, src: get_directory({FirstMatch: true, Exact: true, File: held_file, Path: [Path.Item.Bag]}), }, Parent: pokemonWrap }) : null;
            p.Item && held_index && (add_redirect(heldImage, { catalog: "item", entry: held_index, style: "brightness" }));
            const genderText = p.Gender ? create_element({ Tag: "strong", Class: ["gender"], Text: p.Gender, Attribute: {title: p.Gender === "♂" ? "Male" : p.Gender === "♀" ? "Female" : ""}, Data: {gender: p.Gender}, Parent: pokemonWrap }) : null;
            
            const pokemonImage = create_element({ Tag: "img", Class: ["pokemon_image"], Attribute: { src: get_directory({FirstMatch: true, Exact: true, File: pokemon_file, Path: [Path.Pokemon.Battle.Default.Front.GIF,Path.Pokemon.Battle.Default.Front.PNG,Path.Pokemon.Box.Default.GIF,Path.Pokemon.Box.Default.PNG,Path.Pokemon.Menu.Default] }) }, Parent: pokemonWrap });
            const pokemonText = create_element({ Tag: "strong", Class: ["pokemon_name"], Text: p.Pokemon, Parent: pokemonWrap });

            const abilityWrap = p.Ability ? create_element({ Tag: "div", Class: ["ability"], Parent: lowerRightWrap }) : null;
            const abilityHeader = p.Ability ? create_element({ Tag: "h3", Text: "Ability", Parent: abilityWrap }) : null;
            p.Ability && p.Ability.forEach((a, i) => {
                const abilityText = create_element({ Tag: "span", Text: a, Parent: abilityWrap });
                add_redirect(abilityText, { catalog: "ability", entry: a, style: "color" });
            });
            
            const natureWrap = p.Nature ? create_element({ Tag: "div", Class: ["nature"], Parent: lowerRightWrap }) : null;
            const natureHeader = p.Nature ? create_element({ Tag: "h3", Text: "Nature", Parent: natureWrap }) : null;
            const natureText = p.Nature ? create_element({ Tag: "span", Text: p.Nature, Parent: natureWrap }) : null;

            const levelWrap = p.Level ? create_element({ Tag: "div", Class: ["level"], Parent: lowerRightWrap }) : null;
            const levelHeader = p.Level ? create_element({ Tag: "h3", Text: "Level", Parent: levelWrap }) : null;
            const levelText = p.Level ? create_element({ Tag: "span", Text: p.Level, Parent: levelWrap }) : null;
            
            p.Move && (p.Move.forEach(m => {
                const move_index = get_moveIndex(m);
                if (Data.Moves[move_index]) {
                    const moveText = create_element({ Tag: "strong", Data: {type: Data.Moves[move_index].Type}, Text: m, Parent: lowerLeftWrap });
                    add_redirect(moveText,{catalog:"move",entry:m,style:"brightness"});
                }
                else {
                    trainer_move_invalid.push(m)
                }
            }));

            const ivWrap = p.IV ? create_element({ Tag: "div", Class: ["iv"], Parent: upperWrap }) : null;
            const ivHeader = p.IV ? create_element({ Tag: "h5", Text: "IVs:", Parent: ivWrap }) : null;
            p.IV && (Object.keys(p.IV).forEach(i => {
                const iv = p.IV[i] !== 0 ? create_element({ Tag: "div", Data: {stat:i}, Parent: ivWrap }) : null;
                const ivStat = p.IV[i] !== 0 ? create_element({ Tag: "h5", Text: i, Parent: iv }) : null;
                const ivText = p.IV[i] !== 0 ? create_element({ Tag: "span", Text: p.IV[i], Parent: iv }) : null;
            }));

            const evWrap = p.EV ? create_element({ Tag: "div", Class: ["ev"], Parent: upperWrap }) : null;
            const evHeader = p.EV ? create_element({ Tag: "h5", Text: "EVs:", Parent: evWrap }) : null;
            p.EV && (Object.keys(p.EV).forEach(i => {
                const ev = p.EV[i] !== 0 ? create_element({ Tag: "div", Data: {stat:i}, Parent: evWrap }) : null;
                const evStat = p.EV[i] !== 0 ? create_element({ Tag: "h5", Text: i, Parent: ev }) : null;
                const evText = p.EV[i] !== 0 ? create_element({ Tag: "span", Text: p.EV[i], Parent: ev }) : null;
            }));
    
        }
        else {
            trainer_pokemon_invalid.push(p.Pokemon)
        }
 
    });

    trainer_pokemon_invalid.length > 0 && (console.warn("Invalid Trainer Pokemon Found"));
    trainer_pokemon_invalid.length > 0 && (console.warn(trainer_pokemon_invalid));

    trainer_move_invalid.length > 0 && (console.warn("Invalid Trainer Pokemon Move Found"));
    trainer_move_invalid.length > 0 && (console.warn(trainer_move_invalid));
}




