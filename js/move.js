const create_move = function() {
    
    const move = create_element({ Tag: "div", Attribute: { id: "move" }, Class: ["layout1"], Parent: document.body, });

    // Catalog
    const move_catalog = create_element({ Tag: "aside", Class: ["catalog"],  Parent: move });
    const move_catalogHeader = create_element({ Tag: "header", Parent: move_catalog });

    // Search
    const move_searchWrap = create_element({ Tag: "div", Class: ["search"], Parent: move_catalogHeader });
    const move_searchInput = create_element({ Tag: "input", Attribute: { type: "search", name: "move_search", autocomplete: "off", placeholder: "Search Moves...", onfocus: "this.placeholder=''", onblur: "this.placeholder='Search Moves...'" }, Event: {input: event => search({ Entries: document.querySelectorAll('#move .catalog ol li'), Data: Data.Moves, }, event), keydown: event => search_filter({ Entries: document.querySelectorAll('#move .catalog ol li') }, event), }, Parent: move_searchWrap });

    // List
    const move_catalogList = create_element({ Tag: "ol",  Parent: move_catalog });

    // Move
    const moves = Data.Moves ? Object.keys(Data.Moves) : [];
    moves.forEach((m, i) => {
        const move_type = Data.Moves[m].Type ? Data.Moves[m].Type : "";
        const move_catalogMove = create_element({ Tag: "li", Data: {index: m, search: Data.Moves[m].Move.join(","), type: move_type}, Parent: move_catalogList });
        const move_catalogMoveLabel = create_element({ Tag: "label", Parent: move_catalogMove });
        const move_catalogMoveInput = create_element({ Tag: "input", Attribute: { type: "radio", name: "move_entry", id: `move_entry-${m}`, ...(i === 0 && {checked: ""}) }, Event: {change: () => move_data(), }, Parent: move_catalogMoveLabel });
        const move_catalogMoveText = create_element({ Tag: "strong", Text: m, Parent: move_catalogMoveLabel });
    });

    // Header
    const move_header = create_element({ Tag: "header", Class: ["header"],  Parent: move });
    const move_titleWrap = create_element({ Tag: "div", Class: ["title"], Parent: move_header });
    const move_id = create_element({ Tag: "h3", Class: ["id_text"], Parent: move_titleWrap });
    const move_title = create_element({ Tag: "h2", Class: ["title_text"], Parent: move_titleWrap });
    const move_gameWrap = create_element({ Tag: "div", Class: ["game"], Parent: move_header });
    const move_gameImage = create_element({ Tag: "img", Attribute: { src: Config.Images.Game.Title }, Parent: move_gameWrap });

    // Sidebar
    const move_sidebar = create_element({ Tag: "aside",Class: ["sidebar"],  Parent: move });
    const move_sidebarHeader = create_element({ Tag: "header", Parent: move_sidebar });
    const move_sidebarHeaderText1 = create_element({ Tag: "h4", Text: "Pokémon Learnset:", Parent: move_sidebarHeader });
    const move_sidebarHeaderText2 = create_element({ Tag: "h3", Text: "Learnset", Parent: move_sidebarHeader });

    // Content
    const move_sidebarContent = create_element({ Tag: "main", Parent: move_sidebar });
    const move_sidebarList = create_element({ Tag: "ul", Parent: move_sidebarContent });

    // Description
    const move_description = create_element({ Tag: "main", Class: ["description"],  Parent: move });

    // Panel
    const move_panel = create_element({ Tag: "footer", Class: ["panel"],  Parent: move });

    const move_ppWrap = create_element({ Tag: "div", Class: ["pp"], Parent: move_panel });
    const move_ppHeader = create_element({ Tag: "h4", Text: "PP", Parent: move_ppWrap });
    const move_ppText = create_element({ Tag: "span",  Parent: move_ppWrap });
    
    const move_priorityWrap = create_element({ Tag: "div", Class: ["priority"], Parent: move_panel });
    const move_priorityHeader = create_element({ Tag: "h4", Text: "Priority", Parent: move_priorityWrap });
    const move_priorityText = create_element({ Tag: "span",  Parent: move_priorityWrap });

    const move_powerWrap = create_element({ Tag: "div", Class: ["power"], Parent: move_panel });
    const move_powerHeader = create_element({ Tag: "h4", Text: "Power", Parent: move_powerWrap });
    const move_powerText = create_element({ Tag: "span",  Parent: move_powerWrap });

    const move_typeWrap = create_element({ Tag: "div", Class: ["type"], Parent: move_panel });
    const move_typeHeader = create_element({ Tag: "h4", Text: "Type", Parent: move_typeWrap });
    const move_typeImage = create_element({ Tag: "img",  Parent: move_typeWrap });
    const move_typeText = create_element({ Tag: "span",  Parent: move_typeWrap });

    const move_accuracyWrap = create_element({ Tag: "div", Class: ["accuracy"], Parent: move_panel });
    const move_accuracyHeader = create_element({ Tag: "h4", Text: "Accuracy", Parent: move_accuracyWrap });
    const move_accuracyText = create_element({ Tag: "span",  Parent: move_accuracyWrap });

    const move_categoryWrap = create_element({ Tag: "div", Class: ["category"],  Parent: move_panel });
    const move_categoryHeader = create_element({ Tag: "h4", Text: "Category", Parent: move_categoryWrap });
    const move_categoryText = create_element({ Tag: "span",  Parent: move_categoryWrap });


    const move_rangeWrap = create_element({ Tag: "div", Class: ["range"], Parent: move_panel });
    const move_rangeHeader = create_element({ Tag: "h4", Text: "Range", Parent: move_rangeWrap });
    const move_rangeEnemy = create_element({ Tag: "span", Class: ["enemy"], Parent: move_rangeWrap });
    const move_rangeFriendly = create_element({ Tag: "span", Class: ["friendly"], Parent: move_rangeWrap });

    Array.from({length: 3}).forEach(() => {
        const move_rangeElement = create_element({ Tag: "span", Text:" ", Parent: move_rangeEnemy });
    });
    Array.from({length: 3}).forEach(() => {
        const move_rangeElement = create_element({ Tag: "span", Text:" ", Parent: move_rangeFriendly });
    });
    

    const move_affectWrap = create_element({ Tag: "ul", Class: ["affect"], Parent: move_panel });
    //const move_affect = create_element({ Tag: "li", Text: "Affected by Protect", Parent: move_affectWrap });


    move_data();
}




function move_data() {
    const active_entry = document.querySelector("#move .catalog ol li:has(input:checked)")
    
    if (!active_entry || !active_entry.dataset.index) { return }

    const index = active_entry.dataset.index;
    const move = Data.Moves[index].Move;

    const titleText = document.querySelector("#move > header .title_text")
    titleText.innerText = move[0];

    const headerText = document.querySelector("#move .sidebar > header > *:last-child")
    headerText.innerText = move[0];

    const idText = document.querySelector("#move > header .id_text")
    idText.innerText = Data.Moves[index].ID ? `#${Data.Moves[index].ID}` : "";

    const description = document.querySelector("#move > main");
    description.innerHTML = "";
   
    const list = document.querySelector("#move .sidebar > main ul");
    list.innerHTML = ""; // Clear previous data

    const pokemon_learnset = Object.keys(Data.Pokemon).reduce((found, pokemonName) => { const learnset = Data.Pokemon[pokemonName].Learnset; const hasMove = learnset && learnset.some(learnsetItem => learnsetItem.Move.includes(move)); if (hasMove) { found[pokemonName] = Data.Pokemon[pokemonName]; } return found; }, {})
    generate_learnset({Catalog: "Move", Entry: move, Data: pokemon_learnset, Parent: list})
   
    const rangeText = document.querySelector("#move .panel .range");
    rangeText.setAttribute("title", Data.Moves[index].Range ? Data.Moves[index].Range : "");

    applyRangeAnimation();

    const powerText = document.querySelector("#move .panel .power > *:last-child")
    powerText.innerText = Data.Moves[index].Power ? Data.Moves[index].Power : `N/A`;

    const ppText = document.querySelector("#move .panel .pp > *:last-child")
    ppText.innerText = Data.Moves[index].PP ? `${Data.Moves[index].PP.Min}` : "N/A";

    const accuracyText = document.querySelector("#move .panel .accuracy > *:last-child")
    accuracyText.innerText = Data.Moves[index].Accuracy ? Data.Moves[index].Accuracy : `N/A`;

    const categoryText = document.querySelector("#move .panel .category > *:last-child")
    categoryText.innerText = Data.Moves[index].Category ? Data.Moves[index].Category : "N/A";

    const categoryElement = document.querySelector("#move .panel .category")
    categoryElement.dataset.category = Data.Moves[index].Category ? Data.Moves[index].Category : "";
    

    const priorityText = document.querySelector("#move .panel .priority > *:last-child")
    priorityText.innerText = Data.Moves[index].Priority ? Data.Moves[index].Priority : 0;
    
    const typeText = document.querySelector("#move .panel .type > *:last-child")
    typeText.innerText = Data.Moves[index].Type ? Data.Moves[index].Type : "N/A";

    const typeElement =  document.querySelector("#move .panel .type")
    typeElement.dataset.type = Data.Moves[index].Type ? Data.Moves[index].Type : "";

    const typeImage = document.querySelector("#move .panel .type > img");
    const typeSrc = Data.Moves[index].Type ? Config.Images.Types[Data.Moves[index].Type].Icon : "";
    typeImage.src = typeSrc;

    const affectList = document.querySelector("#move .panel .affect");
    affectList.innerHTML = "";

    const affectField = Data.Moves[index].Field ? create_element({ Tag: "li", Data: {boolean: Data.Moves[index].Field}, HTML: `Is a <b>Field</b> move.`, Parent: affectList }) : null;
    const affectSoundBased = Data.Moves[index].Sound ? create_element({ Tag: "li", Data: {boolean: Data.Moves[index]["Sound"]}, HTML: `Is a <b>Sound-based</b> move.`, Parent: affectList }) : null;
    const affectContact = Data.Moves[index].Contact !== undefined ? create_element({ Tag: "li", Data: {boolean: Data.Moves[index].Contact}, HTML: Data.Moves[index].Contact ? `Makes <b>Contact</b>.` : `Does not make <b>Contact</b>.`, Parent: affectList }) : null;
    const affectProtect = Data.Moves[get_moveIndex("Protect")] && Data.Moves[index].Protect !== undefined ? create_element({ Tag: "li", Data: {boolean: Data.Moves[index].Protect}, HTML: Data.Moves[index].Protect ? `Affected by <b>Protect</b>.` : `Not affected by <b>Protect</b>.`, Parent: affectList }) : null;
    const affectKingsRock = Data.Items[get_itemIndex("King's Rock")] && Data.Moves[index]["King's Rock"] !== undefined ? create_element({ Tag: "li", Data: {boolean: Data.Moves[index]["King's Rock"]}, HTML: Data.Moves[index]["King's Rock"] ? `Affected by <b>King's Rock</b>.` : `Not affected by <b>King's Rock</b>.`, Parent: affectList }) : null;
    const affectMagicCoat = Data.Moves[get_moveIndex("Magic Coat")] && Data.Moves[index]["Magic Coat"] !== undefined ? create_element({ Tag: "li", Data: {boolean: Data.Moves[index]["Magic Coat"]}, HTML: Data.Moves[index]["Magic Coat"] ? `Affected by <b>Magic Coat</b>` : `Not affected by <b>Magic Coat</b>.`, Parent: affectList }) : null;
    const affectMagicBounce = Data.Abilities && Data.Abilities[get_abilityIndex("Magic Bounce")] && Data.Moves[index]["Magic Bounce"] !== undefined ? create_element({ Tag: "li", Data: {boolean: Data.Moves[index]["Magic Bounce"]}, HTML: Data.Moves[index]["Magic Bounce"] ? `Affected by <b>Magic Bounce</b>.` : `Not affected by <b>Magic Bounce</b>.`, Parent: affectList }) : null;
    const affectSnatch = Data.Moves[get_moveIndex("Snatch")] && Data.Moves[index].Snatch !== undefined ? create_element({ Tag: "li", Data: {boolean: Data.Moves[index].Snatch}, HTML: Data.Moves[index].Snatch ? `Affected by <b>Snatch</b>.` : `Not affected by <b>Snatch</b>.`, Parent: affectList }) : null;
    const affectMirrorMove = Data.Moves[get_moveIndex("Mirror Move")] && Data.Moves[index]["Mirror Move"] !== undefined ? create_element({ Tag: "li", Data: {boolean: Data.Moves[index]["Mirror Move"]}, HTML: Data.Moves[index]["Mirror Move"] ? `Affected by <b>Mirror Move</b>.` : `Not affected by <b>Mirror Move</b>.`, Parent: affectList }) : null;

    affectProtect && (add_redirect(affectProtect.querySelector(":scope b"),{catalog:"move",entry:"Protect",style:"brightness"}));
    affectKingsRock && (add_redirect(affectKingsRock.querySelector(":scope b"),{catalog:"item",entry:"King's Rock",style:"brightness"}));
    affectMagicCoat && (add_redirect(affectMagicCoat.querySelector(":scope b"),{catalog:"move",entry:"Magic Coat",style:"brightness"}));
    affectMagicBounce && (add_redirect(affectMagicBounce.querySelector(":scope b"),{catalog:"ability",entry:"Magic Bounce",style:"brightness"}));
    affectSnatch && (add_redirect(affectSnatch.querySelector(":scope b"),{catalog:"move",entry:"Snatch",style:"brightness"}));
    affectMirrorMove && (add_redirect(affectMirrorMove.querySelector(":scope b"),{catalog:"move",entry:"Mirror Move",style:"brightness"}));

    const descriptionText = Data.Moves[index].Description ? create_element({ Tag: "p", Text: Data.Moves[index].Description, Class: ["description_text"], Parent: description }) : null;


    const matchedTutors = Object.keys(Data.Locations).flatMap(key => { const tutor = Data.Locations[key]["Move Tutor"]; return tutor && tutor.filter(t => t && move.includes(t.Move)).map(t => ({ ...t, Location: key, })) || []; });
    const tutorTitle = matchedTutors.length > 0 ? create_element({ Tag: "h3", Text: "Move Tutor", Class: ["tutor_header"], Parent: description }) : null;

    matchedTutors.forEach(d => {
        let cost_text = d.Cost ? d.Cost.map(({ Cost, Currency }) => {
            const dir = get_directory({ FirstMatch: true, Exact: true, File: [Currency], Path: [Path.Item.Bag, Path.Currency.Icon] });
            return dir !== "" ? `${Cost} <img src='${dir}' title='${Currency}' />` : Currency.length > 5 ? `${Cost} <span title='${Currency}'>${Currency.match(/[A-Z]/g).join('')}</span>` : `${Cost} ${Currency}`;
        }).join(', ') : null;
        let text = `${move[0]} can be taught at <b>${d.Location}</b> ${d.Area ? `(${d.Area})` : ''}${d.Pokemon ? ` to ${d.Pokemon}` : ''}${d.Rate ? ` ${d.Rate}` : ''}${d.Character ? ` by ${d.Character}` : ''}${cost_text ? ` for ${cost_text}` : ''}`.replaceAll("  ", " ").trim() + '.';
        text = text === "Taught." ? null : text;
        const tutorText = create_element({ Tag: "p", HTML: text, Class: ["tutor_text"], Parent: description });

        const tutorLocation = tutorText.querySelector(":scope b");
        tutorLocation && (add_redirect(tutorLocation,{catalog:"location",entry:d.Location,style:"invert"}));

        const tutorItems = tutorText.querySelectorAll(":scope img");
        tutorItems.forEach(i => {
            add_redirect(i,{catalog:"item",entry:i.title,style:"brightness"});
        });
      
        
    });


    const move_effect = Data.Moves[index].Effect ? Data.Moves[index].Effect : [];
    const effectTitle = move_effect.length > 0 ? create_element({ Tag: "h3", Text:"Effect", Class: ["effect_header"], Parent: description }) : null;
    move_effect.forEach(d => {
        const effectText = create_element({ Tag: "p", Text: d.Effect, Class: ["effect_text"], Parent: description });
    });


    
 
    
    
}




function applyRangeAnimation() {
    const rangeElement = document.querySelector("#move .panel .range")

    if (!rangeElement) { return; }
    
    const range = rangeElement.getAttribute("title");
    const enemyElements = rangeElement.querySelectorAll(':scope .enemy > span');
    const friendlyElements = rangeElement.querySelectorAll(':scope .friendly > span');
    const userElement = friendlyElements[0]; // bottom-left

    // Clear previous animations
    enemyElements.forEach(el => el.classList.remove('rangeAnimation1', 'rangeAnimation2', 'rangeAnimation3'));
    friendlyElements.forEach(el => el.classList.remove('rangeAnimation1', 'rangeAnimation2', 'rangeAnimation3'));

    let targetElements = [];

    if (range === 'May affect anyone adjacent to the user') {
        targetElements = [
            enemyElements[0], // top-left
            enemyElements[1], // top-middle
            friendlyElements[1] // bottom-middle
        ];
        targetElements.forEach(el => el.classList.add('rangeAnimation1'));
    } else if (range === 'Affects an adjacent ally') {
        targetElements = [
            friendlyElements[1] // bottom-middle
        ];
        targetElements.forEach(el => el.classList.add('rangeAnimation2'));
    } else if (range === 'Affects all adjacent foes, but not allies') {
        targetElements = [
            enemyElements[0], // top-left
            enemyElements[1], // top-middle
        ];
        targetElements.forEach(el => el.classList.add('rangeAnimation1'));
    } else if (range === 'Affects the user') {
        targetElements = [
            friendlyElements[0] // bottom-left
        ];
        targetElements.forEach(el => el.classList.add('rangeAnimation2'));
    } else if (range === 'May affect anyone but the user') {
        targetElements = [
            enemyElements[0], // top-left
            enemyElements[1], // top-middle
            enemyElements[2], // top-right
            friendlyElements[1], // bottom-middle
            friendlyElements[2]  // bottom-right
        ];
        targetElements.forEach(el => el.classList.add('rangeAnimation1'));
    } else if (range === 'May randomly affect anyone adjacent to the user') {
        targetElements = [
            enemyElements[0], // top-left
            enemyElements[1], // top-middle
            friendlyElements[1] // bottom-middle
        ];
        targetElements.forEach(el => el.classList.add('rangeAnimation1'));
    } else if (range === 'Affects the user and all allies') {
        targetElements = [
            friendlyElements[0], // bottom-left
            friendlyElements[1], // bottom-middle
            friendlyElements[2]  // bottom-right
        ];
        targetElements.forEach(el => el.classList.add('rangeAnimation2'));
    } else if (range === 'Affects all Pokémon adjacent to the user') {
        targetElements = [
            enemyElements[0], // top-left
            enemyElements[1], // top-middle
            friendlyElements[1] // bottom-middle
        ];
        targetElements.forEach(el => el.classList.add('rangeAnimation1'));
    } else if (range === 'Affects all Pokémon on the field') {
        targetElements = [
            enemyElements[0], // top-left
            enemyElements[1], // top-middle
            enemyElements[2], // top-right
            friendlyElements[0], // bottom-left
            friendlyElements[1], // bottom-middle
            friendlyElements[2]  // bottom-right
        ];
        targetElements.forEach(el => el.classList.add('rangeAnimation1'));
    } else if (range === 'Affects all foes') {
        targetElements = [
            enemyElements[0], // top-left
            enemyElements[1], // top-middle
            enemyElements[2]  // top-right
        ];
        targetElements.forEach(el => el.classList.add('rangeAnimation1'));
    }

    // Force reflow to restart animation
    targetElements.forEach(el => {
        el.classList.remove('rangeAnimation1', 'rangeAnimation2');
        void el.offsetWidth; // Trigger reflow
        el.classList.add(range.includes('May') ? 'rangeAnimation1' : 'rangeAnimation2');
    });

    // Always apply rangeAnimation3 to userElement
    userElement.classList.remove('rangeAnimation3');
    void userElement.offsetWidth; // Trigger reflow
    userElement.classList.add('rangeAnimation3');
}


