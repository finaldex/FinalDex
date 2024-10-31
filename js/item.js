const create_item = function() {

    const item = create_element({ Tag: "div", Attribute: { id: "item" }, Class: ["layout1"], Parent: document.body, });

    // Catalog
    const item_catalog = create_element({ Tag: "aside", Class: ["catalog"],  Parent: item });
    const item_catalogHeader = create_element({ Tag: "header", Parent: item_catalog });

    // Search
    const item_searchWrap = create_element({ Tag: "div", Class: ["search"], Parent: item_catalogHeader });
    const item_searchInput = create_element({ Tag: "input", Attribute: { type: "search", name: "item_search", autocomplete: "off", placeholder: "Search Items...", onfocus: "this.placeholder=''", onblur: "this.placeholder='Search Items...'" }, Event: {input: event => search({ Entries: document.querySelectorAll('#item .catalog ol li'), Data: Data.Items, }, event), keydown: event => search_filter({ Entries: document.querySelectorAll('#item .catalog ol li') }, event), }, Parent: item_searchWrap });

    // Pocket
    const item_pocketWrap = create_element({ Tag: "div", Class: ["pocket"], Parent: item_catalogHeader });

    const pockets = [...new Set(Object.values(Data.Items).map(item => item.Pocket).filter(Boolean))];
    pockets.forEach(pocket => {
        const item_pocketLabel = create_element({ Tag: "label", Attribute: { for: `item_pocket-${pocket}`, }, Parent: item_pocketWrap });
        const item_pocketInput = create_element({ Tag: "input", Attribute: { type: "checkbox", name: "item_pocket", id: `item_pocket-${pocket}`, value: pocket, checked: "" }, Event: {change: () => pocket_filter() }, Parent: item_pocketLabel });
        const item_pocketImage = create_element({ Tag: "img", Attribute: { src: get_directory({FirstMatch: true, File: [pocket], Path: [Path.Bag.Pocket]}) }, Parent: item_pocketLabel });
        const item_pocketText = create_element({ Tag: "strong", Text: pocket, Parent: item_pocketLabel });
    });

    // List
    const item_catalogList = create_element({ Tag: "ol",  Parent: item_catalog });

    // Item
    const entries = Object.keys(Data.Items);
    entries.forEach((idx, i) => {
        if (Data.Items[idx] && Data.Items[idx].Item) { 
            const machineMove = Object.keys(Data.Moves).find(key => Data.Items[idx].Item.includes(Data.Moves[key].Machine));
            const item_src = get_directory({FirstMatch: true, Exact: true, File: [Data.Items[idx].Image,...Data.Items[idx].Item], Path: [Path.Item.Bag]});
            const machineType = machineMove ? Data.Moves[get_moveIndex(machineMove)].Type : null;

            const item_catalogEntry = create_element({ Tag: "li",  Data: {index: idx, search: [...Data.Items[idx].Item,...(machineMove != null ? [machineMove] : [])].join(",") }, Parent: item_catalogList });
            const item_catalogEntryLabel = create_element({ Tag: "label", Attribute: { for: `item_entry-${idx}`, }, Parent: item_catalogEntry });
            const item_catalogEntryInput = create_element({ Tag: "input", Attribute: { type: "radio", name: "item_entry", id: `item_entry-${idx}`, ...(i === 0 && {checked: ""}) }, Event: {change: () => item_data() }, Parent: item_catalogEntryLabel });
            const item_catalogEntryImage = create_element({ Tag: "img", Attribute: { src: item_src }, Parent: item_catalogEntryLabel });
            const item_catalogEntryText = create_element({ Tag: "strong", HTML: machineMove ? `${Data.Items[idx].Item}<span data-type='${machineType}'>${machineMove}</span>` : Data.Items[idx].Item, Parent: item_catalogEntryLabel });
        }
    });

    // Header
    const item_header = create_element({ Tag: "header", Class: ["header"],  Parent: item });
    const item_titleWrap = create_element({ Tag: "div", Class: ["title"], Parent: item_header });
    const item_id = create_element({ Tag: "h3", Class: ["id_text"], Parent: item_titleWrap });
    const item_title = create_element({ Tag: "h2", Class: ["title_text"], Parent: item_titleWrap });
    const item_gameWrap = create_element({ Tag: "div", Class: ["game"], Parent: item_header });
    const item_gameImage = create_element({ Tag: "img", Attribute: { src: get_directory({FirstMatch: true, File: ["Title"], Path: [Path.Game.Title]}) }, Parent: item_gameWrap });
    const item_priceWrap = create_element({ Tag: "div", Class: ["price"], Parent: item_header });

    // Sidebar
    const item_sidebar = create_element({ Tag: "aside", Class: ["sidebar"], Parent: item });
    const item_sidebarHeader = create_element({ Tag: "header", Parent: item_sidebar });
    const item_sidebarHeaderText = create_element({ Tag: "h3", Text: "Item Location", Parent: item_sidebarHeader });

    // Content
    const item_sidebarContent = create_element({ Tag: "main", Parent: item_sidebar });
    const item_sidebarList = create_element({ Tag: "ul", Parent: item_sidebarContent });

    // Description
    const item_description = create_element({ Tag: "main", Class: ["description"],  Parent: item });

    pockets.length > 0  && (pocket_filter());
    item_data();
}



function item_data() {
    const active_entry = document.querySelector("#item .catalog ol li:has(input:checked)")
    
    if (!active_entry || !active_entry.dataset.index) { return }
    
    const index = active_entry.dataset.index
    const item = Data.Items[index].Item

    const titleText = document.querySelector("#item > header .title_text")
    titleText.innerText = item[0];

    const idText = document.querySelector("#item > header .id_text")
    idText.innerText = `#${parseInt(index, 16)}`;

    const priceElement = document.querySelector("#item > header .price")
    priceElement.innerHTML = "";

    const item_price = Data.Items[index].Sell ? Data.Items[index].Sell : [];
    item_price.forEach(d => {
        const currency_source = get_directory({FirstMatch: true, File: [d.Currency], Path: [Path.Currency.Icon]});
        const currency = d.Currency == "N/A" ? "" : currency_source !== "" ? ` <img src='${currency_source}' title='${d.Currency}' />` : ` ${d.Currency}`;
        const priceText = create_element({ Tag: "strong", HTML: `Sell Price: ${d.Price}${currency}`, Attribute: {title:`Sold for ${d.Price}${d.Currency !== "N/A" ? ` ${d.Currency}` : ''}${d.Shop ? ` (${d.Shop})` : ''}`}, Parent: priceElement });
    });


    const list = document.querySelector("#item .sidebar > main ul");
    list.innerHTML = ""; // Clear previous data

    const item_location = Object.keys(Data.Locations).reduce((found, index) => (Data.Locations[index].Item && Data.Locations[index].Item.some(i => item.some(it => i.Item && i.Item.includes(it))) ? (found[index] = Data.Locations[index], found) : found), {});
    generate_locationItem({Catalog:"Item", Entry: item, Data: item_location, Parent:list, });

    const item_shop = Object.keys(Data.Locations).reduce((found, index) => (Data.Locations[index].Shop && Data.Locations[index].Shop.some(i => item.some(it => i.Item && i.Item.includes(it))) ? (found[index] = Data.Locations[index], found) : found), {});
    generate_locationShopItem({Catalog:"Item", Entry: item, Data: item_shop, Parent:list, });

    const item_pickup = Data.Abilities && Data.Abilities["Pickup"] ? {"Pickup": Data.Abilities["Pickup"]} : {};
    generate_pickup({Catalog:"Item", Entry: item, Data: item_pickup, Parent: list, })


    const description = document.querySelector("#item > main");
    description.innerHTML = "";

    const descriptionText = Data.Items[index].Description ? create_element({ Tag: "p", Text: Data.Items[index].Description, Class: ["description_text"], Parent: description }) : null;

    const machineMove = Object.keys(Data.Moves).find(key => item.includes(Data.Moves[key].Machine));
    const machineText = machineMove ? create_element({ Tag: "p", HTML: `${item} contains the move <span>${machineMove}</span>.`, Parent: description }) : null;

    const machineElement = machineText ? machineText.querySelector(":scope span") : null
    machineElement && (add_redirect(machineElement,{catalog:"move",entry:machineMove,style:"invert"}));

    const item_effect = Data.Items[index].Effect ? Data.Items[index].Effect : [];
    const effectTitle = item_effect.length > 0 ? create_element({ Tag: "h3", Text:"Effect", Class: ["effect_header"], Parent: description }) : null;
    item_effect.forEach(d => {
        const effectText = create_element({ Tag: "p", Text: d.Effect, Class: ["effect_text"], Parent: description });
    });


}



function pocket_filter() {
    const entries = document.querySelectorAll("#item .catalog ol li[data-index]");
    const pockets = document.querySelectorAll("#item .catalog header .pocket input");

    // Create a Set of active pocket values
    const activePockets = new Set([...pockets].filter(pocket => pocket.checked).map(pocket => pocket.value));

    entries.forEach(entry => {
        const index = entry.dataset.index;
        const pocket = Data.Items[index]?.Pocket;

        if (activePockets.has(pocket)) {
            entry.classList.remove("filtered");
        } else {
            entry.classList.add("filtered");
        }
    });
}