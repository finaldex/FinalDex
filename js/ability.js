const create_ability = function() {
    
    if (!Config.Ability) { return }

    const ability = create_element({ Tag: "div", Attribute: { id: "ability" }, Class: ["layout1"], Parent: document.body, });

    // Catalog
    const ability_catalog = create_element({ Tag: "aside", Class: ["catalog"],  Parent: ability });
    const ability_catalogHeader = create_element({ Tag: "header", Parent: ability_catalog });

    // Search
    const ability_searchWrap = create_element({ Tag: "div", Class: ["search"], Parent: ability_catalogHeader });
    const ability_searchInput = create_element({ Tag: "input", Attribute: { type: "search", name: "ability_search", autocomplete: "off", placeholder: "Search Abilities...", onfocus: "this.placeholder=''", onblur: "this.placeholder='Search Abilities...'" }, Event: {input: event => search({ Entries: document.querySelectorAll('#ability .catalog ol li'), Data: Data.Abilities, }, event), keydown: event => search_filter({ Entries: document.querySelectorAll('#ability .catalog ol li') }, event), }, Parent: ability_searchWrap });

    // List
    const ability_catalogList = create_element({ Tag: "ol",  Parent: ability_catalog });

    // Entry
    const abilities = Data.Abilities ? Object.keys(Data.Abilities) : [];
    abilities.forEach((a, i) => {
        const ability_catalogEntry = create_element({ Tag: "li", Data: { index: a, search: Data.Abilities[a].Ability.join(",") },  Parent: ability_catalogList });
        const ability_catalogEntryLabel = create_element({ Tag: "label", Parent: ability_catalogEntry });
        const ability_catalogEntryInput = create_element({ Tag: "input", Attribute: { type: "radio", name: "ability_entry", id: `ability_entry-${a}`, ...(i === 0 && {checked: ""}) }, Event: {change: () => ability_data()}, Parent: ability_catalogEntryLabel });
        const ability_catalogEntryText = create_element({ Tag: "strong", Text: a, Parent: ability_catalogEntryLabel });
    });

    // Header
    const ability_header = create_element({ Tag: "header", Class: ["header"],  Parent: ability });
    const ability_titleWrap = create_element({ Tag: "div", Class: ["title"], Parent: ability_header });
    const ability_id = create_element({ Tag: "h3", Class: ["id_text"], Parent: ability_titleWrap });
    const ability_title = create_element({ Tag: "h2", Class: ["title_text"], Parent: ability_titleWrap });
    const ability_gameWrap = create_element({ Tag: "div", Class: ["game"], Parent: ability_header });
    const ability_gameImage = create_element({ Tag: "img", Attribute: { src: Config.Images.Game.Title || "" }, Parent: ability_gameWrap });


    // Sidebar
    const ability_sidebar = create_element({ Tag: "aside",Class: ["sidebar"],  Parent: ability });
    const ability_sidebarHeader = create_element({ Tag: "header", Parent: ability_sidebar });
    const ability_sidebarHeaderText1 = create_element({ Tag: "h4", Text: "Pokémon with the Ability:", Parent: ability_sidebarHeader });
    const ability_sidebarHeaderText2 = create_element({ Tag: "h3", Parent: ability_sidebarHeader });

    // Content
    const ability_sidebarContent = create_element({ Tag: "main", Parent: ability_sidebar });
    const ability_sidebarList = create_element({ Tag: "ul", Parent: ability_sidebarContent });

    // Description
    const ability_description = create_element({ Tag: "main", Class: ["description"],  Parent: ability });

    ability_data();
}


function ability_data() {
    const active_entry = document.querySelector("#ability .catalog ol li:has(input:checked)")
    
    if (!active_entry || !active_entry.dataset.index) { return }

    const index = active_entry.dataset.index;
    const ability = Data.Abilities[index].Ability;

    const titleText = document.querySelector("#ability > header .title_text")
    titleText.innerText = ability[0];

    const sidebarHeaderText = document.querySelector("#ability .sidebar > header > *:last-child")
    sidebarHeaderText.innerText = ability[0];

    const idText = document.querySelector("#ability > header .id_text")
    idText.innerText = Data.Abilities[index].ID ? `#${Data.Abilities[index].ID}` : "";

    const description = document.querySelector("#ability > main");
    description.innerHTML = "";
   
    const list = document.querySelector("#ability .sidebar > main ul");
    list.innerHTML = ""; // Clear previous data

    const ability_pokemon = Object.keys(Data.Pokemon).reduce((acc, key) => { const abilities = Data.Pokemon[key].Ability; if (abilities) { if (ability.includes(abilities.Primary)) { acc[key] = { Ability: { Primary: abilities.Primary } }; } else if (ability.includes(abilities.Secondary)) { acc[key] = { Ability: { Secondary: abilities.Secondary } }; } else if (ability.includes(abilities.Hidden)) { acc[key] = { Ability: { Hidden: abilities.Hidden } }; } } return acc; }, {});
    generate_ability({Catalog: "Ability", Entry: ability, Data: ability_pokemon, Parent: list});
 
    const descriptionText = Data.Abilities[index].Description ? create_element({ Tag: "p", Text: Data.Abilities[index].Description, Class: ["description_text"], Parent: description }) : null;

    const ability_effect = Data.Abilities[index].Effect ? Data.Abilities[index].Effect : [];
    const effectTitle = ability_effect.length > 0 ? create_element({ Tag: "h3", Text:"Effect", Class: ["effect_header"], Parent: description }) : null;
    ability_effect.forEach(d => {
        const effectText = create_element({ Tag: "p", Text: d.Effect, Class: ["effect_text"], Parent: description });
    });

    const affectedMoves_true = Data.Abilities[index].Affect ? (Data.Abilities[index].Affect.length > 0 ? Data.Abilities[index].Affect.filter(a => a.Type === "Move" && a.Boolean === true && Data.Moves[get_moveIndex(a.Name)]) : []) : [];
    const affectedMoves_false = Data.Abilities[index].Affect ? (Data.Abilities[index].Affect.length > 0 ? Data.Abilities[index].Affect.filter(a => a.Type === "Move" && a.Boolean === false && Data.Moves[get_moveIndex(a.Name)]) : []) : [];
    const affectedItems_true = Data.Abilities[index].Affect ? (Data.Abilities[index].Affect.length > 0 ? Data.Abilities[index].Affect.filter(a => a.Type === "Item" && a.Boolean === true && Data.Items[get_itemIndex(a.Name)]) : []) : [];
    const affectedItems_false = Data.Abilities[index].Affect ? (Data.Abilities[index].Affect.length > 0 ? Data.Abilities[index].Affect.filter(a => a.Type === "Item" && a.Boolean === false && Data.Items[get_itemIndex(a.Name)]) : []) : [];


    const affectMoveTitle_true = affectedMoves_true.length > 0 ? create_element({ Tag: "h3", Text:"Affected Moves", Class: ["affect_move_header"], Parent: description }) : null;
    const affectMoveList_true = affectedMoves_true.length > 0 ? create_element({ Tag: "ul", Parent: description }) : null;
    affectedMoves_true.forEach(d => {
        const index = get_moveIndex(d.Name);
        const move_type = Data.Moves[index].Type;
        const affect = create_element({ Tag: "li", Text: d.Name, Class: ["affect_move_text"], Data: { ...(move_type && {type: move_type} ) }, Parent: affectMoveList_true });
        add_redirect(affect,{catalog:"move",entry:d.Name,style:"color"});
    });

    const affectMoveTitle_false = affectedMoves_false.length > 0 ? create_element({ Tag: "h3", Text:"Not Affected Moves", Class: ["unaffect_move_header"], Parent: description }) : null;
    const affectMoveList_false = affectedMoves_false.length > 0 ? create_element({ Tag: "ul", Parent: description }) : null;
    affectedMoves_false.forEach(d => {
        const index = get_moveIndex(d.Name);
        const move_type = Data.Moves[index].Type;
        const affect = create_element({ Tag: "li", Text: d.Name, Class: ["unaffect_move_text"], Data: { ...(move_type && {type: move_type} ) }, Parent: affectMoveList_false });
        add_redirect(affect,{catalog:"move",entry:d.Name,style:"color"});
    });

    const affectItemTitle_true = affectedItems_true.length > 0 ? create_element({ Tag: "h3", Text:"Affected Items", Class: ["affect_item_header"], Parent: description }) : null;
    const affectItemList_true = affectedItems_true.length > 0 ? create_element({ Tag: "ul", Parent: description }) : null;
    affectedItems_true.forEach(d => {
        const index = get_itemIndex(d.Name);
        const affect = create_element({ Tag: "li", Text: d.Name, Class: ["affect_item_text"], Parent: affectItemList_true });
        add_redirect(affect,{catalog:"item",entry:d.Name,style:"color"});
    });

    const affectItemTitle_false = affectedItems_false.length > 0 ? create_element({ Tag: "h3", Text:"Not Affected Items", Class: ["unaffect_item_header"], Parent: description }) : null;
    const affectItemList_false = affectedItems_false.length > 0 ? create_element({ Tag: "ul", Parent: description }) : null;
    affectedItems_false.forEach(d => {
        const index = get_itemIndex(d.Name);
        const affect = create_element({ Tag: "li", Text: d.Name, Class: ["unaffect_move_text"], Parent: affectItemList_false });
        add_redirect(affect,{catalog:"item",entry:d.Name,style:"color"});
    });

  
}