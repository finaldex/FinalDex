const create_dex = function() {
    const dex = create_element({ Tag: "div", Attribute: { id: "dex" }, Parent: document.body });

    const header = create_element({ Tag: "header", Parent: dex });
    const header_List = create_element({ Tag: "ul", Parent: header });


    const header_Switch = create_element({ Tag: "li", Class: ["dexswitch"], Parent: header_List });
    const header_SwitchContent = create_element({ Tag: "div", Parent: header_Switch });
    const header_SwitchWrap = create_element({ Tag: "span", Parent: header_SwitchContent });
    
    const translateValue = -100 * (header_SwitchContent.dataset.index - 1);
    header_SwitchWrap.style.setProperty('--translate-value', `${translateValue}%`);

    const Pokedex = Data && Data.Pokemon ? Array.from(new Set(Object.keys(Data.Pokemon).flatMap(p => Data.Pokemon[p].Pokedex ? Object.keys(Data.Pokemon[p].Pokedex) : []))) : [];
    if (Pokedex.includes("National Pokédex")) { Pokedex.unshift(Pokedex.splice(Pokedex.indexOf("National Pokédex"), 1)[0]); }

    header_SwitchContent.dataset.index = Pokedex.length > 1 ? 2 : 1;

    Pokedex.forEach((dex, i) => {
        const header_SwitchLabel = create_element({ Tag: "label", Attribute: { name: dex }, Event: {click: event => dex_switch(event)}, Parent: header_SwitchWrap });
        const header_SwitchInput = create_element({ Tag: "input", Attribute: { type: "radio", value: i, name: "finaldex-dexswitch-"+Config.ID, id: "dexswitch-"+dex }, Parent: header_SwitchLabel });
        const header_SwitchText = create_element({ Tag: "strong", Text: dex, Parent: header_SwitchLabel });
    });

    const header_Count = create_element({ Tag: "li", Class: ["count"], Parent: header_List });
    const header_CountWrap = create_element({ Tag: "div", Parent: header_Count });
    const header_CountPre = create_element({ Tag: "span", Text: "0", Parent: header_CountWrap });
    const header_CountDash = create_element({ Tag: "span", Text: "/", Parent: header_CountWrap });
    const header_CountPost = create_element({ Tag: "span", Text: "0", Parent: header_CountWrap });

    const header_Search = create_element({ Tag: "li", Class: ["search"], Parent: header_List });
    const header_SearchInput = create_element({ Tag: "input", Attribute: { type: "search", name: "search", autocomplete: "off", placeholder: "Search...", onfocus: "this.placeholder=''", onblur: "this.placeholder='Search...'" }, Event: {input: event => {search({ Entries: document.querySelectorAll('.dex_list li'), Data: Data.Pokemon, }, event); dex_count()}, keydown: event => search_filter({ Entries: document.querySelectorAll('.dex_list li') }, event), }, Parent: header_Search });

    const header_Game = create_element({ Tag: "li", Class: ["game"], Parent: header_List });
    const header_GameImage = create_element({ Tag: "img", Attribute: { src: get_directory({FirstMatch: true, File: ["Title"], Path: [Path.Game.Title]}) }, Parent: header_Game });

    const dex_List = create_element({ Tag: "ol", Class: ["dex_list"], Parent: dex});
    const Pokemon = Data && Data.Pokemon ? Array.from(new Set(Object.values(Data.Pokemon).map(p => p.Pokemon))) : [];

    Pokemon.forEach((poke, i) => {
        const index = get_pokemonIndex(poke);

        const dex_entry = create_element({ Tag: "li", Data: { index: index, search: [index,Data.Pokemon[index].Pokemon].join(","), ...(Data.Pokemon[index]["Pokedex Color"] && { color: Data.Pokemon[index]["Pokedex Color"] }), }, Parent: dex_List });
        const dex_label = create_element({ Tag: "label", Parent: dex_entry });
        const dex_input = create_element({ Tag: "input", Attribute: { type: "checkbox", id: `${index}`, value: index, name: i }, Event: { change: () => dex_count() }, Parent: dex_label });

        const dex_confirmWrap = create_element({ Tag: "div", Class: ["confirm"], Parent: dex_label });
        const dex_confirm = create_element({ Tag: "span", Parent: dex_confirmWrap });

        const dex_idWrap = create_element({ Tag: "div", Class: ["id"], Parent: dex_label });

        const dex_dataWrap = create_element({ Tag: "div", Class: ["data"], Parent: dex_label });
        const dex_dataButton = create_element({ Tag: "button", Text: "◆", Parent: dex_dataWrap });

        const dex_imgWrap = create_element({ Tag: "div", Class: ["image"], Parent: dex_label });
        const dex_img = create_element({ Tag: "img", Parent: dex_imgWrap });

        const dex_nameWrap = create_element({ Tag: "div", Class: ["name"], Parent: dex_label });
        const dex_name = create_element({ Tag: "span", Text: Data.Pokemon[index].Pokemon, Parent: dex_nameWrap });


        add_card(dex_dataWrap, {catalog:"Pokemon",entry: index,style:"brightness"});

        if (Data.Pokemon[index] && Data.Pokemon[index].Pokedex) {
            Object.keys(Data.Pokemon[index].Pokedex).forEach((dex) => {
                const dex_id = create_element({ Tag: "span", Data: { dex: dex }, Text: `#${Data.Pokemon[index].Pokedex[dex]}`, Parent: dex_idWrap });
            });
        }
    });
   


    dex_update();
    dex_count();
    image_update();

}


function dex_switch(event) {
    const target = event.currentTarget; // The clicked element
    const childElements = target.parentElement.querySelectorAll(":scope > *"); // Get all siblings
    const targetElement = target.parentElement.parentElement; // The element to set the data-index on
    const index = Array.from(childElements).indexOf(target); // Find the index of the clicked element

    // Calculate the new data-index value
    let newIndex;

    // Logic for setting newIndex
    if (index === childElements.length - 1) {
        newIndex = 1; // Last element case
    } else {
        newIndex = index + 2; // +2 for the 1-based index increment
    }

    // Set data-index on targetElement
    targetElement.setAttribute('data-index', newIndex);

    dex_update();
}


function dex_update() {
    const dexSwitch = document.querySelector("#dex header .dexswitch div");
    const elements = dexSwitch.querySelectorAll(":scope label");
    const index = dexSwitch.dataset.index ? dexSwitch.dataset.index : 1;

    Config.Pokedex = elements[index - 1] ? elements[index - 1].getAttribute("name") : undefined;

    const translateValue = -100 * (index - 1);
    dexSwitch.querySelector(":scope span").style.setProperty('--translate-value', `${translateValue}%`);
    
    dex_sort();
    dex_count();
}

function dex_count() {
    const showing = document.querySelectorAll(".dex_list li:not(.hidden_dex):not(.hidden_search):not(.hidden_filter):has(input:checked)");
    const total = document.querySelectorAll(".dex_list li:not(.hidden_dex):not(.hidden_search):not(.hidden_filter)");
    const countFirst = document.querySelector("#dex header .count div > *:first-child");
    const countLast = document.querySelector("#dex header .count div > *:last-child");

    countFirst.innerText = showing.length;
    countLast.innerText = total.length;
}

function dex_sort() {
    const dexswitch = document.querySelector("#dex .dexswitch *[data-index]");
    const dex_lbl = document.querySelectorAll("#dex .dexswitch label");
    const index = dexswitch.dataset.index;

    const dex = Config.Pokedex;

    const listEntries = Array.from(document.querySelectorAll(".dex_list li"));
  
    // Create an array of entries with their IDs
    const sortedEntries = listEntries.map(entry => {
        const default_pokemon = get_defaultPokemon(entry.dataset.index);
        const pokemon = Data.Pokemon[entry.dataset.index] ? entry.dataset.index : Data.Pokemon[default_pokemon] ? default_pokemon : entry.dataset.index;
        const id = Data.Pokemon[pokemon].Pokedex ? (Data.Pokemon[pokemon].Pokedex[dex] ? Data.Pokemon[pokemon].Pokedex[dex] : null) : null;
        return { entry, id };
    });

    // Sort the array based on the IDs
    sortedEntries.sort((a, b) => a.id - b.id);

    // Clear the existing list
    const list = document.querySelector(".dex_list");
    list.innerHTML = '';

    // Append sorted entries back to the list and add class if ID is 0
    sortedEntries.forEach(({ entry, id }) => {
        const ids = entry.querySelectorAll(":scope caption");

        ids.forEach((caption) => {
            // Access the dataset directly from the caption element
            if (caption.dataset.dex === dex) {
                caption.classList.remove("hidden");
            } else {
                caption.classList.add("hidden");
            }
        });

        if (id === null) {
            entry.classList.add("hidden_dex");
        } else {
            entry.classList.remove("hidden_dex");
        }

        // Append entry to the list
        list.appendChild(entry);
    });


    dex_ids();
}

function dex_ids() {
    const dex = Config.Pokedex;
    const base = document.querySelectorAll(`.dex_list .id, #card > aside:first-child > header .id`);

    base.forEach(b => {
        const elements = b.querySelectorAll(`:scope *[data-dex]`)
        const show = b.querySelectorAll(`:scope *[data-dex="${dex}"]`)
    
        elements.forEach(el => {
            el.classList.remove("active");
        });    
        show.forEach(el => {
            el.classList.add("active");
        });

    });

    
}

function image_types() {

}


function image_update() {
    const dex_entries = document.querySelectorAll(".dex_list li");
    
    const img_errors = [];

    dex_entries.forEach((entry) => {
        const img = entry.querySelector(":scope img");
        const index = get_pokemonIndex(entry.dataset.index);
        const file = Data.Pokemon[index] ? (Data.Pokemon[index].File ? String(Data.Pokemon[index].File) : null) : null;
        
        const source = get_directory({FirstMatch: true, Exact: true, File: [file], Path: Config.Image.Pokemon.Battle.Path, });

        img.src = source;

        if (source == "") { img_errors.push(entry.dataset.index) }
    });

    if (img_errors.length > 0) { console.warn(`Missing Pokémon Images`); console.warn(img_errors) }
}