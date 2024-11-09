
const create_card = function() {
    const card = create_element({Tag: "div", Attribute: { id: "card", }, Parent: document.body });

    const card_close = (event) => {
        if (!card.contains(event.target) && !event.target.closest(".card_event")) {
            card.classList.remove("active");
            //card.classList.remove("full");
        }
    };
    
    document.addEventListener("click", card_close);
    
}


function add_card(element, options) {
    element.addEventListener("click", card_display)
    element.classList.add("card_event")

    options.catalog && (element.dataset.catalog = options.catalog);
    options.entry && (element.dataset.entry = options.entry);
    options.select && (element.dataset.select = options.select);
    options.style && (element.classList.add(`card_${options.style}`));
}

function card_size(target) {

    const card = document.querySelector("#card");
    
    const padding_x = 5;
    const padding_y = 10;
    const targetRect = target.getBoundingClientRect();
    let left = targetRect.left + targetRect.width + padding_y;
    let top = targetRect.top + padding_x;
    let right = 'auto';
    let bottom = 'auto';

    // Adjust the position to ensure the card grows in the opposite direction if it would overflow
    if (left + card.offsetWidth + padding_y > window.innerWidth) {
        right = window.innerWidth - targetRect.right + padding_y;
        left = 'auto';
        // If it overflows to the left, snap to the left edge
        if (right + card.offsetWidth + padding_y > window.innerWidth) {
            right = padding_y;
        }
    }
    if (top + card.offsetHeight + padding_x > window.innerHeight) {
        bottom = window.innerHeight - targetRect.bottom + padding_x;
        top = 'auto';
        // If it overflows to the top, snap to the top edge
        if (bottom + card.offsetHeight + padding_x > window.innerHeight) {
            bottom = padding_x;
        }
    }
    bottom = bottom !== 'auto' && bottom < 0 ? (0 + padding_x) : bottom;
    top = top !== 'auto' && top < 0 ? (0 + padding_x) : top;

    // Apply the calculated position to the card
    card.style.left = left !== 'auto' ? `${left}px` : 'auto';
    card.style.top = top !== 'auto' ? `${top}px` : 'auto';
    card.style.right = right !== 'auto' ? `${right}px` : 'auto';
    card.style.bottom = bottom !== 'auto' ? `${bottom}px` : 'auto';
}

function card_display() {

    const target = event.currentTarget;
    if (!target || !target.dataset.catalog || !target.dataset.entry) { return }

    const options = {
        Catalog: target.dataset.catalog,
        Entry: target.dataset.entry,
        Select: target.dataset.select,
    };

    const card = document.querySelector("#card");

    if (card.classList.contains("active") && card.dataset.entry === options.Entry) {
        return;
    }

    if (!card.classList.contains("active") || card.classList.contains("full")) {
        card_size(target)
    }

    window.addEventListener("resize", function() {card_size(target)});

    card.dataset.color = "";
    card.dataset.entry = "";
    card.dataset.catalog = "";

    if (options.Catalog === "Pokemon") {

        const pokemon_index = get_pokemonIndex(options.Entry)
        const default_index = get_defaultPokemon(pokemon_index)

        if (Data.Pokemon[pokemon_index]) {
            card.innerHTML = "";
            card.classList.add("active");

            card.dataset.entry = pokemon_index;
            card.dataset.catalog = options.Catalog;

            const pokemon_type = Data.Pokemon[pokemon_index].Type ? Data.Pokemon[pokemon_index].Type : Data.Pokemon[default_index].Type ? Data.Pokemon[default_index].Type : {};
            const pokemon_dex = Data.Pokemon[pokemon_index].Pokedex ? Data.Pokemon[pokemon_index].Pokedex : Data.Pokemon[default_index].Pokedex ? Data.Pokemon[default_index].Pokedex : {};
            const pokemon_dexColor = Data.Pokemon[pokemon_index]["Pokedex Color"] ? Data.Pokemon[pokemon_index]["Pokedex Color"] : Data.Pokemon[default_index]["Pokedex Color"] ? Data.Pokemon[default_index]["Pokedex Color"] : "";

            const pokemon_abilityPrimary = Data.Pokemon[pokemon_index].Ability && Data.Pokemon[pokemon_index].Ability.Primary ? Data.Pokemon[pokemon_index].Ability.Primary : Data.Pokemon[default_index].Ability && Data.Pokemon[default_index].Ability.Primary ? Data.Pokemon[default_index].Ability.Primary : null
            const pokemon_abilitySecondary = Data.Pokemon[pokemon_index].Ability && Data.Pokemon[pokemon_index].Ability.Secondary ? Data.Pokemon[pokemon_index].Ability.Secondary : Data.Pokemon[default_index].Ability && Data.Pokemon[default_index].Ability.Secondary ? Data.Pokemon[default_index].Ability.Secondary : null
            const pokemon_abilityHidden = Data.Pokemon[pokemon_index].Ability && Data.Pokemon[pokemon_index].Ability.Hidden ? Data.Pokemon[pokemon_index].Ability.Hidden : Data.Pokemon[default_index].Ability && Data.Pokemon[default_index].Ability.Hidden ? Data.Pokemon[default_index].Ability.Hidden : null

            const pokemon_stats = Data.Pokemon[pokemon_index]["Base Stats"] ? Data.Pokemon[pokemon_index]["Base Stats"] : Data.Pokemon[default_index]["Base Stats"] ? Data.Pokemon[default_index]["Base Stats"] : {};

            const leftWrap = create_element({Tag: "aside", Parent: card });
            const rightWrap = create_element({Tag: "aside", Parent: card });
            
            const leftTopWrap = create_element({Tag: "header", Parent: leftWrap });
            const leftCenterWrap = create_element({Tag: "section", Parent: leftWrap });
            const leftBottomWrap = create_element({Tag: "section", Parent: leftWrap });

            const fullscreen = create_element({Tag: "button", Class:["fullscreen"], Text: "🗖", Event: {click: () => { if (card.classList.contains("full")) {card.classList.remove("full")} else { card.classList.add("full") }; card_size(target) }}, Parent: card });

            card.dataset.color = pokemon_dexColor;

            const typeWrap = Object.keys(pokemon_type).length > 0 ? create_element({Tag: "div", Class: ["type"], Parent: card }) : null;
            Object.keys(pokemon_type).forEach(i => {
                const type_src = get_directory({FirstMatch: true, Exact: true, File: [pokemon_type[i]], Path: [Path.Type.Icon]})
                
                const type = create_element({Tag: "div", Class:[i.replaceAll(" ","").toLowerCase()], Data: { type: pokemon_type[i] }, Parent: typeWrap });
                const typeImage = create_element({Tag: "img", Attribute: { src: type_src, title: pokemon_type[i], }, Parent: type });
                const typeText = create_element({Tag: "strong", Text: pokemon_type[i], Parent: type });
            });


            const idWrap = create_element({Tag: "div", Class:["id"], Parent: leftTopWrap });
            Object.keys(pokemon_dex).forEach(i => {
                const id = create_element({Tag: "strong", Data: { dex: i }, Text: `#${pokemon_dex[i]}`, Parent: idWrap });
            });

            const nameWrap = create_element({Tag: "div", Class:["name"], Parent: leftTopWrap });
            const name = create_element({Tag: "strong", Text: pokemon_index, Parent: nameWrap });

            const pokemon_src = get_directory({FirstMatch: true, Exact: true, File: [Data.Pokemon[pokemon_index].File], Path: Config.Image.Pokemon.Battle.Path });
            const pokemonWrap = create_element({Tag: "div", Class:["pokemon"], Parent: leftCenterWrap });
            const pokemonImage = create_element({Tag: "img", Attribute: {src: pokemon_src},  Parent: pokemonWrap });

            const abilityWrap = (pokemon_abilityPrimary || pokemon_abilitySecondary || pokemon_abilityHidden) ? create_element({Tag: "div", Class:["ability"], Parent: leftBottomWrap }) : null;
            const abilityPrimary = pokemon_abilityPrimary ? create_element({Tag: "div", Class:["primary"], Attribute:{title:"Primary Ability"}, Parent: abilityWrap }) : null;
            const abilityPrimaryText = pokemon_abilityPrimary ? create_element({Tag: "strong", Text: pokemon_abilityPrimary, Parent: abilityPrimary }) : null;
            const abilitySecondary = pokemon_abilitySecondary ? create_element({Tag: "div", Class:["secondary"], Attribute:{title:"Secondary Ability"},  Parent: abilityWrap }) : null;
            const abilitySecondaryText = pokemon_abilitySecondary ? create_element({Tag: "strong", Text: pokemon_abilitySecondary, Parent: abilitySecondary }) : null;
            const abilityHidden = pokemon_abilityHidden ? create_element({Tag: "div", Class:["hidden"], Attribute:{title:"Hidden Ability"}, Parent: abilityWrap }) : null;
            const abilityHiddenText = pokemon_abilityHidden ? create_element({Tag: "strong", Text: pokemon_abilityHidden, Parent: abilityHidden }) : null;

            abilityPrimary && (add_redirect(abilityPrimary,{catalog:"ability", entry: pokemon_abilityPrimary, style:"invert"}));
            abilitySecondary && (add_redirect(abilitySecondary,{catalog:"ability", entry: pokemon_abilitySecondary, style:"invert"}));
            abilityHidden && (add_redirect(abilityHidden,{catalog:"ability", entry: pokemon_abilityHidden, style:"invert"}));

            const groupHeader = create_element({Tag: "header", Parent: rightWrap });
            const groupSelect = create_element({Tag: "select", Attribute: { name: "card_select", id: "card_select"}, Event:{change: (event) => {group_select(event.currentTarget.value)}},Parent: groupHeader });

            const groupWrap = create_element({Tag: "section", Parent: rightWrap });

            // Base Stats
            const stats_order = ["HP", "Attack", "Defense", "Special", "SpAtk", "SpDef", "Speed", "Total"];
            const stats_keys = Object.keys(pokemon_stats).sort((a, b) => stats_order.indexOf(a) - stats_order.indexOf(b));
            const stats_wrap = create_element({Tag: "ul", Class: ["stats"], Parent: groupWrap });

            stats_keys.forEach(k => {
                const stats_percentage = (pokemon_stats[k] / Math.max(...Object.values(Data.Pokemon).map(p => p["Base Stats"] && p["Base Stats"][k] !== undefined ? p["Base Stats"][k] : 0))) * 100;

                const stats_entry = create_element({Tag: "li", Class:[k], Parent: stats_wrap });
                const stats_header = create_element({Tag: "strong", Text: k, Parent: stats_entry });
                const stats_bar = create_element({Tag: "div", Parent: stats_entry });
                const stats_barText = create_element({Tag: "strong", Text: pokemon_stats[k], Parent: stats_bar });

                stats_bar.style.setProperty("--Width",`${stats_percentage}%`);
            });

            // Data

            // Ratio
            const data_ratio = ["Gender Ratio"];
            data_ratio.forEach(d => {
                const index = Data.Pokemon[pokemon_index][d] ? pokemon_index : Data.Pokemon[default_index][d] ? default_index : null;

                if (index) {
                    const data_entry = create_element({Tag: "li", Class: [d.replaceAll(" ","").toLowerCase()], Parent: data_wrap });
                    const data_header = create_element({Tag: "section", Parent: data_entry });
                    const data_headerText = create_element({Tag: "strong", Text:d, Parent: data_header });

                    const data_value = create_element({Tag: "section", Parent: data_entry });

                    const data_valueBarWrap = create_element({Tag: "div", Class: ["bar"], Parent: data_value });

                    const ratio = Data.Pokemon[index][d];
                    const ratio_total = Object.values(ratio).reduce((sum, value) => sum + value, 0);

                    Object.keys(ratio).forEach(r => {
                        let ratio_percentage = (ratio[r] / ratio_total) * 100;
                        ratio_percentage = ratio_percentage ? ratio_percentage : 0;

                        const data_valueBar = create_element({ Tag: "span", Class: [r.replaceAll(" ", "").toLowerCase()], Data: { value: ratio[r] }, ...( ratio_total !== 0 && {Attribute: { title: r }}), Parent: data_valueBarWrap });
                        const data_valueBarText = create_element({ Tag: "strong", Text: `${ratio_percentage.toFixed(1)}%`,Parent: data_valueBar });
                        data_valueBar.style.setProperty("--Width", `${ratio_percentage}%`);
                    });
                    
                }
            });
            

            // Keys
            const data_keys = ["Group","Category","Catch Rate","Leveling Rate","Weight","Height","Egg Group","Egg Cycle","Effort Value Yield","Experience Yield","Base Friendship","Shape"];
            const data_wrap = create_element({Tag: "ul", Class:["data"], Parent: groupWrap });

            data_keys.forEach(d => {
                const index = Data.Pokemon[pokemon_index][d] ? pokemon_index : Data.Pokemon[default_index][d] ? default_index : null;

                if (index) {
        
                    const data_entry = create_element({Tag: "li", Class: [d.replaceAll(" ","").toLowerCase()], Parent: data_wrap });
                    const data_header = create_element({Tag: "section", Parent: data_entry });
                    const data_headerText = create_element({Tag: "strong", Text: d, Parent: data_header });

                    const data_value = create_element({Tag: "section", Parent: data_entry });

                    const key = Array.isArray(Data.Pokemon[index][d])
                    ? Data.Pokemon[index][d].map(item => ({ Value: item }))
                    : typeof Data.Pokemon[index][d] === "object"
                    ? Object.keys(Data.Pokemon[index][d]).filter(key => !(typeof Data.Pokemon[index][d][key] === "number" && Data.Pokemon[index][d][key] === 0)).map(key => ({ Header: key, Value: Data.Pokemon[index][d][key] }))
                    : ["string", "number"].includes(typeof Data.Pokemon[index][d])
                    ? [{ Value: Data.Pokemon[index][d] }]
                    : [];

                    key.forEach(k => {
                        const data_valueWrap = create_element({Tag: "div", ...(k.Header && { Class: [k.Header.replaceAll(" ","").toLowerCase()]} ), Parent: data_value });
                        const data_valueHeader = k.Header ? create_element({Tag: "strong", Text: k.Header, Parent: data_valueWrap }) : null;
                        const data_valueText = k.Value ? create_element({Tag: "span", Text: k.Value, Parent: data_valueWrap }) : null;

                        if (d === "Egg Group") {
                            data_valueWrap.dataset.group = k.Value;
                        }
                    });
                }
            })
                
           
      

            // Evolution
            const evolution_wrap = create_element({ Tag: "ul", Class: ["evolution"], Parent: groupWrap });

    
            if (Data.Pokemon[pokemon_index].Evolution) {

                const first_evolution = (function findFirst(pokemon) { return Data.Pokemon[pokemon].Evolution ? (Data.Pokemon[pokemon].Evolution.Previous ? findFirst(Data.Pokemon[pokemon].Evolution.Previous[0]) : pokemon) : null;})(pokemon_index);

                create_evolution(first_evolution);

                function create_evolution(pokemon, evolution_parent = evolution_wrap) {
                    const evolution_text = Data.Pokemon[pokemon].Evolution.Type ? `Evolve ${Data.Pokemon[pokemon].Evolution.Type !== "Item" ? `by ${Data.Pokemon[pokemon].Evolution.Type}` : ``} ${Data.Pokemon[pokemon].Evolution.Level ? `(${Data.Pokemon[pokemon].Evolution.Level})` : ''} ${Data.Pokemon[pokemon].Evolution.Item ? `with <span data-item='${Data.Pokemon[pokemon].Evolution.Item}'>${Data.Pokemon[pokemon].Evolution.Item}</span>` : ''} ${Data.Pokemon[pokemon].Evolution.Extra ? Data.Pokemon[pokemon].Evolution.Extra : ''}  ${Data.Pokemon[pokemon].Evolution.Gender ? `(<span data-gender='${Data.Pokemon[pokemon].Evolution.Gender}'>${Data.Pokemon[pokemon].Evolution.Gender}</span>)` : ''}`.replace(/\s+/g, ' ').trim() : null;

                    const evolution = create_element({ Tag: "li", Parent: evolution_parent });
                    const wrap = create_element({ Tag: "span", Parent: evolution });
                    const image = create_element({ Tag: "img", Attribute:{src: get_directory({FirstMatch: true, Exact: true, File: [Data.Pokemon[pokemon].File], Path: Config.Image.Pokemon.Battle.Path })}, Parent: wrap });
                    const name = create_element({ Tag: "strong", Text: pokemon, Parent: wrap });
                    const description = evolution_text ? create_element({ Tag: "p", HTML: evolution_text, Parent: wrap }) : null;
                    const evolutionData = Data.Pokemon[pokemon].Evolution;

                    if (pokemon !== pokemon_index) {
                        add_card(image, {catalog: "Pokemon", entry: pokemon, select: "evolution", style: "brightness"});
                        add_card(name, {catalog: "Pokemon", entry: pokemon, select: "evolution", style: "invert"});
                    }

                    const item = description ? description.querySelector(":scope *[data-item]") : null;
                    item && (add_redirect(item,{catalog: "item", entry: item.dataset.item, style: "invert" }));

                    if (evolutionData.Next) {
                        const nextEvolutionList = create_element({ Tag: "div", Parent: evolution });
                        
                        evolutionData.Next.forEach(nextPokemon => {
                            create_evolution(nextPokemon, nextEvolutionList);
                        });
                    }
                }
            }



            // Form
            const form_wrap = create_element({Tag: "ul", Class:["form"], Parent: groupWrap });

            const forms = Object.fromEntries(Object.entries(Data.Pokemon).filter(([key, value]) => value.Pokemon === Data.Pokemon[pokemon_index].Pokemon));

     
            Object.keys(forms).length > 1 && (Object.keys(forms).forEach(idx => {
                const form = create_element({Tag: "li", Parent: form_wrap });
                
                /*
                const form_conflictHeader = Data.Pokemon[idx].Form && Data.Pokemon[idx].Form["Conflicting Item"] ? create_element({Tag: "h5", Text: "Conflicting Item", Parent: form }) : null;
                const form_conflictText = Data.Pokemon[idx].Form && Data.Pokemon[idx].Form["Conflicting Item"] ? create_element({Tag: "p", HTML: format_conjunctionSplit(Data.Pokemon[idx].Form["Conflicting Item"]).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Parent: form }) : null;
                const form_requiredHeader = Data.Pokemon[idx].Form && Data.Pokemon[idx].Form["Required Item"] ? create_element({Tag: "h5", Text: "Required Item", Parent: form }) : null;
                const form_requiredText = Data.Pokemon[idx].Form && Data.Pokemon[idx].Form["Required Item"] ? create_element({Tag: "p", HTML: format_conjunctionSplit(Data.Pokemon[idx].Form["Required Item"]).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Parent: form }) : null;
                
                const form_items = [...(form_conflictText ? form_conflictText.querySelectorAll(":scope span") : []), ...(form_requiredText ? form_requiredText.querySelectorAll(":scope span") : [])];
                form_items.forEach(f => {
                    const f_index = get_itemIndex(f.dataset.text)
                    f_index && (add_redirect(f, { catalog:"item", entry:f_index, style:"invert"}));
                });
                */

                const form_image = create_element({Tag: "img", Attribute: { src: get_directory({FirstMatch: true, Exact: true, File: [Data.Pokemon[idx].File], Path: Config.Image.Pokemon.Battle.Path })}, Parent: form });
                const form_name = create_element({Tag: "strong", Text: idx, Parent: form });
                const form_change = Data.Pokemon[idx].Form && Data.Pokemon[idx].Form.Change ? create_element({Tag: "p", Text: Data.Pokemon[idx].Form.Change, Parent: form }) : null;
                

                if (idx !== pokemon_index) {
                    add_card(form_image, {catalog: "Pokemon", entry: idx, select: "form", style: "brightness"});
                    add_card(form_name, {catalog: "Pokemon", entry: idx, select: "form", style: "invert"});
                }
            }));
          

            // Learnset
            const learnset_wrap = create_element({Tag: "ul", Class:["learnset"], Parent: groupWrap });
            generate_learnset({Catalog: "Pokemon", Entry: [pokemon_index,default_index], Data: {[default_index]: Data.Pokemon[pokemon_index],[pokemon_index]: Data.Pokemon[pokemon_index]}, Parent: learnset_wrap});
                
            // Area
            const area_wrap = create_element({Tag: "ul", Class:["area"], Parent: groupWrap });

            const location_pokemon = Object.keys(Data.Locations).reduce((found, index) => (Data.Locations[index].Pokemon && Data.Locations[index].Pokemon.some(i => [pokemon_index,default_index].some(it => i.Pokemon && i.Pokemon.includes(it))) ? (found[index] = Data.Locations[index], found) : found), {});
            generate_locationPokemon({Catalog: "Pokemon", Entry: [pokemon_index,default_index], Data: location_pokemon, Parent: area_wrap});
            const shop_pokemon = Object.keys(Data.Locations).reduce((found, index) => (Data.Locations[index].Shop && Data.Locations[index].Shop.some(i => [pokemon_index,default_index].some(it => i.Pokemon && i.Pokemon.includes(it))) ? (found[index] = Data.Locations[index], found) : found), {});
            generate_locationShopPokemon({Catalog: "Pokemon", Entry: [pokemon_index,default_index], Data: shop_pokemon, Parent:area_wrap, });

            const group = ["Base Stats","Evolution","Form","Data","Learnset","Area"];
            group.forEach(o => {
                const val = o === "Base Stats" ? "stats" : o.toLowerCase();
                const disable = groupWrap.querySelector(`:scope .${val}:empty`) ? true : false
                const opt = create_element({Tag: "option", Text:o, Attribute: { value: val, ...(disable && {disabled:""}) }, Parent: groupSelect });
            })

            
            function group_select(value) {
                
                if (!value) { return }

                const children = groupWrap.children;
                groupSelect.value = value;
            
                // Remove the 'active' class from all children
                Array.from(children).forEach(child => child.classList.remove('active'));
            
                // Add the 'active' class to the selected element
                const activeElement = groupWrap.querySelector(`.${value}`);
                if (activeElement) {
                    activeElement.classList.add('active');
                }
            };

            const element = groupWrap.querySelector(":scope > *:not(:empty)")
            const select_value = options.Select && groupWrap.querySelector(`.${options.Select}:has(> *)`) ? options.Select : element ? element.classList[0] : null
            select_value && (group_select(select_value));


        }
        else {
            console_text({Text:`Could not find the Pokémon: ${options.Entry}.`})
        }

        dex_ids();
    }
}
