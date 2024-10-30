function generate_locationShopItem(parameters = {}) {
    const options = {
        Catalog: undefined,
        Entry: [],
        Data: {},
        Parent: null,
        ...parameters
    };

    if (!options.Catalog || !options.Entry.length > 0 || !Object.keys(options.Data).length > 0 || !options.Parent) { return; }
    
    const invalid_text = "Invalid Item Found (Shop)";
    const invalid = [];

    Object.keys(options.Data).forEach(index => {
        
        const l = data.Locations[index];
        const location_index = index;

        l.Shop && l.Shop.forEach(d => {
            if (d.Item) {
                if (options.Catalog !== "Item" || options.Entry.includes(d.Item)) {
                    d.Quantity = d.Quantity === undefined ? 1 : d.Quantity;
                    
                    const item_index = get_itemIndex(d.Item);
                
                    let currency_source = get_directory({FirstMatch: true, File: [d.Currency], Path: [path.Currency.Icon]});
                    let currency = currency_source !== "" ? `<img src='${currency_source}' title='${d.Currency}' />` : d.Currency.length > 5 ? `<span title='${d.Currency}'>${d.Currency.match(/[A-Z]/g).join('')}</span>` : ` ${d.Currency}`;
                    let text = `Bought for ${d.Cost}${currency}`;
                    text = text !== "" ? text.replaceAll("  "," ").trim()+`.` : "";
            
                    const header = [d.Shop,d.Area,d.Title,d.Header].filter(v => v !== undefined && v !== null).join('<br>');
                    let ol = options.Parent.querySelector(`ol[data-index="${header}"]`);
                    if (!ol && options.Catalog !== "Item") {
                        ol = create_element({ Tag: "ol", Class: ["generated_location_shop_item"], Data: { index: header }, Parent: options.Parent });
                        if (header) {
                            const entryHeader = create_element({ Tag: "li", Parent: ol });
                            const entryHeaderText = create_element({ Tag: "h4", HTML: header, Parent: entryHeader });
                        }
                    }
                    
                    const entry = create_element({ Tag: "li", ...(!ol && {Class: ["generated_location_shop_item"]}), Parent: ol || options.Parent });

                    const leftWrap = create_element({ Tag: "aside", Parent: entry });
                    const centerWrap = create_element({ Tag: "aside", Parent: entry });
                    const rightWrap = create_element({ Tag: "aside", Parent: entry });
            
                    const upperWrap = create_element({ Tag: "header", Parent: centerWrap });
                    const lowerWrap = create_element({ Tag: "main", Parent: centerWrap });
            
                    
                    const itemWrap = create_element({ Tag: "div", Class: ["item"], Parent: leftWrap });
                 
                    if (item_index) {
                        const itemImageWrap = create_element({ Tag: "div", Class: ["image"], Parent: itemWrap });
                
                        Array.from({ length: (d.Quantity > 5 ? 5 : d.Quantity) }).forEach(q => {
                            const itemImage = create_element({ Tag: "img", Attribute: { src: get_directory({FirstMatch: true, File: [d.Image,data.Items[item_index].Image,...data.Items[item_index].Item], Path: [path.Item.Bag]}) }, Parent: itemImageWrap });
                            options.Catalog !== "Item" && (add_redirect(itemImage,{catalog:"item", entry:item_index, style:"brightness"}));
                        });
                        const quantityExtend = d.Quantity > 5 ? create_element({ Tag: "span", Text: `...`, Class:["extend"], Attribute: {  title: `${d.Quantity}x ${d.Item}` }, Parent: itemImageWrap }) : null;
                    }

                    const itemQuantity = create_element({ Tag: "strong", Text: `${d.Quantity}x`, Parent: itemWrap });
                    const itemName = create_element({ Tag: "strong", Text: d.Item, Parent: itemWrap });
                    item_index && (add_redirect(itemName,{catalog:"item",entry:item_index,style:"invert"}));

                    if (options.Catalog === "Item") {
                        const locationWrap = create_element({ Tag: "div", Class: ["location"], Parent: leftWrap });
                        const locationText = create_element({ Tag: "strong", Text: location_index, Parent: locationWrap });
                        const areaText = d.Area ? create_element({ Tag: "span", Class: ["area"], Text: d.Area, Parent: locationWrap }) : null;
                        const headerText = d.Header ? create_element({ Tag: "span", Class: ["header"], Text: d.Header, Parent: locationWrap }) : null;
                        const titleText = d.Title ? create_element({ Tag: "span", Class: ["title"], Text: d.Title, Parent: locationWrap }) : null;
                        add_redirect(locationText,{catalog:"location",entry:location_index,style:"invert"});

                        rightWrap.appendChild(itemWrap)
                    }
            
                    const descriptionWrap = create_element({ Tag: "div", Class: ["description"], Parent: lowerWrap });
                    const descriptionText = create_element({ Tag: "span", HTML: text, Parent: descriptionWrap });
            
                    const weatherText = d.Weather ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Weather).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["weather"], Parent: upperWrap }) : null;
                    const seasonText = d.Season ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Season).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["season"], Parent: upperWrap }) : null;
                    const timeText = d.Time ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Time).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["time"], Parent: upperWrap }) : null;
                    const dayText = d.Day ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Day).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["day"], Parent: upperWrap }) : null;
                    const fieldText = d.Field ? create_element({ Tag: "li", HTML: "Requires: "+format_conjunctionSplit(d.Field).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["field"], Parent: upperWrap }) : null;
                    const criteriaText = d.Criteria ? create_element({ Tag: "li", HTML: d.Criteria, Class: ["criteria"], Parent: upperWrap }) : null;
                    const noteText = d.Note ? create_element({ Tag: "li", HTML: d.Note, Class: ["note"], Parent: upperWrap }) : null;
            

                    if (!item_index) {
                        invalid.push(d.Item)
                    }
                }
            }
        });
    });

    const sort = Array.from(options.Parent.children);
    sort.sort((a, b) => { const aIndex = a.dataset.index || ""; const bIndex = b.dataset.index || ""; if (aIndex === "" && bIndex === "") return 0; if (aIndex === "") return -1; if (bIndex === "") return 1; return aIndex.localeCompare(bIndex); });
    sort.forEach(i => options.Parent.appendChild(i));

    invalid.length > 0 && (console.warn(invalid_text));
    invalid.length > 0 && (console.warn(invalid));
}
function generate_locationShopPokemon(parameters = {}) {
    const options = {
        Catalog: undefined,
        Entry: [],
        Data: {},
        Parent: null,
        ...parameters
    };

    if (!options.Catalog || !options.Entry.length > 0 || !Object.keys(options.Data).length > 0 || !options.Parent) { return; }

    const invalid_text = "Invalid Pokemon Found (Shop)";
    const invalid = [];

    Object.keys(options.Data).forEach(index => {
        
        const l = data.Locations[index];
        const location_index = index;

        l.Shop && l.Shop.forEach(d => {
            if (d.Pokemon) {
                const pokemon_index = get_pokemonIndex(d.Pokemon);
                const default_index = get_defaultPokemon(pokemon_index);
        
                if (options.Catalog !== "Pokemon" || options.Entry.includes(d.Pokemon)) {
                    if (pokemon_index) {
                        d.Cost = d.Cost ? d.Cost : 1;
                        let currency_text = format_conjunctionSplit(d.Currency);
                        let currency_source = get_directory({FirstMatch: true, File: [currency_text], Path: [path.Currency.Icon]});
                        let currency = currency_source !== "" ? `<img src='${currency_source}' title='${currency_text}' />` : currency_text.length > 5 ? `<span title='${currency_text}'>${currency_text.match(/[A-Z]/g).join('')}</span>` : ` ${currency_text}`;
                        let text = data.Pokemon[pokemon_index].Group === "Fossil" ? `Revived with ${d.Cost} ${currency_text}` : `Bought for ${d.Cost} ${currency}`;
                        text = text !== "" ? text.replaceAll("  "," ").trim()+`.` : "";
            
                        const pokemon_file = [data.Pokemon[pokemon_index].File,data.Pokemon[default_index].File];
            
                        const header = [d.Shop,d.Area,d.Title,d.Header].filter(v => v !== undefined && v !== null).join('<br>');
                        let ol = options.Parent.querySelector(`ol[data-index="${header}"]`);
                        if (!ol && options.Catalog !== "Pokemon") {
                            ol = create_element({ Tag: "ol", Class: ["generated_location_shop_pokemon"], Data: { index: header }, Parent: options.Parent });
                            if (header) {
                                const entryHeader = create_element({ Tag: "li", Parent: ol });
                                const entryHeaderText = create_element({ Tag: "h4", HTML: header, Parent: entryHeader });
                            }
                        }
                        
                        const entry = create_element({ Tag: "li", ...(!ol && {Class: ["generated_location_shop_pokemon"]}), Parent: ol || options.Parent });

                        const leftWrap = create_element({ Tag: "aside", Parent: entry });
                        const rightWrap = create_element({ Tag: "aside", Parent: entry });
            
                        const upperWrap = create_element({ Tag: "header", Parent: rightWrap });
                        const lowerWrap = create_element({ Tag: "main", Parent: rightWrap });
            
                        if (options.Catalog === "Location") {
                            const pokemonWrap = create_element({ Tag: "div", Class: ["pokemon"], Parent: leftWrap });
                            const pokemonImage = create_element({ Tag: "img", Class: ["pokemon_image"], Attribute: { src: get_directory({FirstMatch: true, Exact: true, File: pokemon_file, Path: [path.Pokemon.Box.Default.PNG,path.Pokemon.Box.Default.GIF,path.Pokemon.Menu.Default] }),}, Parent: pokemonWrap });
                            const pokemonText = create_element({ Tag: "strong", Text: d.Pokemon, Parent: pokemonWrap });
                            add_card(pokemonImage, {catalog: "Pokemon", entry: d.Pokemon, style: "brightness"});
                            add_card(pokemonText, {catalog: "Pokemon", entry: d.Pokemon, style: "invert"});
                        }
                        else if (options.Catalog === "Pokemon") {
                            const locationWrap = create_element({ Tag: "div", Class: ["location"], Parent: leftWrap });
                            const locationText = create_element({ Tag: "strong", Text: location_index, Parent: locationWrap });
                            const areaText = d.Area ? create_element({ Tag: "span", Class: ["area"], Text: d.Area, Parent: locationWrap }) : null;
                            const headerText = d.Header ? create_element({ Tag: "span", Class: ["header"], Text: d.Header, Parent: locationWrap }) : null;
                            const titleText = d.Title ? create_element({ Tag: "span", Class: ["title"], Text: d.Title, Parent: locationWrap }) : null;
                            add_redirect(locationText,{catalog:"location",entry:location_index,style:"invert"});
                        }
            
                        const descriptionWrap = create_element({ Tag: "div", Class: ["description"], Parent: lowerWrap });
                        const descriptionText = create_element({ Tag: "span", HTML: text, Parent: descriptionWrap });
            
                        const weatherText = d.Weather ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Weather).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["weather"], Parent: upperWrap }) : null;
                        const seasonText = d.Season ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Season).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["season"], Parent: upperWrap }) : null;
                        const timeText = d.Time ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Time).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["time"], Parent: upperWrap }) : null;
                        const dayText = d.Day ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Day).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["day"], Parent: upperWrap }) : null;
                        const fieldText = d.Field ? create_element({ Tag: "li", HTML: "Requires: "+format_conjunctionSplit(d.Field).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["field"], Parent: upperWrap }) : null;
                    }
                    else {
                        invalid.push(d.Pokemon)
                    }
                }
            }
        });
    });

    const sort = Array.from(options.Parent.children);
    sort.sort((a, b) => { const aIndex = a.dataset.index || ""; const bIndex = b.dataset.index || ""; if (aIndex === "" && bIndex === "") return 0; if (aIndex === "") return -1; if (bIndex === "") return 1; return aIndex.localeCompare(bIndex); });
    sort.forEach(i => options.Parent.appendChild(i));

    invalid.length > 0 && (console.warn(invalid_text));
    invalid.length > 0 && (console.warn(invalid));
}
function generate_locationItem(parameters = {}) {

    const options = {
        Catalog: undefined,
        Entry: [],
        Data: {},
        Parent: null,
        ...parameters
    };

    if (!options.Catalog || !options.Entry.length > 0 || !Object.keys(options.Data).length > 0 || !options.Parent) { return; }
    const invalid_text = "Invalid Item Found (Item)";
    const invalid = [];

    Object.keys(options.Data).forEach(index => {
        
        const l = data.Locations[index];
        const location_index = index;

        l.Item && l.Item.forEach(d => {

            if (options.Catalog !== "Item" || options.Entry.includes(d.Item)) {
                d.Quantity = d.Quantity === undefined ? 1 : d.Quantity;

                const item_index = d.Index ? d.Index : get_itemIndex(d.Item);

                const item_file = item_index && data.Items[item_index] ? [d.Image, data.Items[item_index]?.Image, ...(data.Items[item_index]?.Item || []), d.Item].filter(part => part !== undefined && part !== null) : [null];

                const header = [d.Area,d.Title,d.Header].filter(v => v !== undefined && v !== null).join('<br>');
                let ol = options.Parent.querySelector(`ol[data-index="${header}"]`);
                if (!ol && options.Catalog !== "Item") {
                    ol = create_element({ Tag: "ol", Class: ["generated_location_item"], Data: { index: header }, Parent: options.Parent });
                    if (header) {
                        const entryHeader = create_element({ Tag: "li", Parent: ol });
                        const entryHeaderText = create_element({ Tag: "h4", HTML: header, Parent: entryHeader });
                    }
                }
                
                const entry = create_element({ Tag: "li", ...(!ol && {Class:["generated_location_item"]}), Parent: ol || options.Parent });

                const leftWrap = create_element({ Tag: "aside", Parent: entry });
                const centerWrap = create_element({ Tag: "aside", Parent: entry });
                const rightWrap = create_element({ Tag: "aside", Parent: entry });

                const upperWrap = create_element({ Tag: "header", Parent: centerWrap });
                const lowerWrap = create_element({ Tag: "main", Parent: centerWrap });

                const itemWrap = create_element({ Tag: "div", Attribute: { ...(d.Hidden && { title: "Hidden" }), }, Class: ["item"], Parent: leftWrap });

                if (item_index) {
                    const itemImageWrap = create_element({ Tag: "div", Class: ["image"], Parent: itemWrap });
            
                    Array.from({ length: (d.Quantity > 5 ? 5 : d.Quantity) }).forEach(q => {
                        const itemImage = create_element({ Tag: "img", Attribute: { src: get_directory({FirstMatch: true, File: [d.Image,data.Items[item_index].Image,...data.Items[item_index].Item].filter(value => value !== undefined), Path: [path.Item.Bag]}) }, Parent: itemImageWrap });
                        options.Catalog !== "Item" && (add_redirect(itemImage,{catalog:"item", entry:item_index, style:"brightness"}));
                    });
                    const quantityExtend = d.Quantity > 5 ? create_element({ Tag: "span", Text: `...`, Class:["extend"], Attribute: {  title: `${d.Quantity}x ${d.Item}` }, Parent: itemImageWrap }) : null;
                }
        
                const itemQuantity = create_element({ Tag: "strong", Text: `${d.Quantity}x`, Parent: itemWrap });
                const itemName = create_element({ Tag: "strong", Text: d.Item, Parent: itemWrap });
                item_index && options.Catalog !== "Item" && (add_redirect(itemName,{catalog:"item",entry:item_index,style:"invert"}));

                if (options.Catalog === "Item") {
                    const locationWrap = create_element({ Tag: "div", Class: ["location"], Parent: leftWrap });
                    const locationText = create_element({ Tag: "strong", Text: location_index, Parent: locationWrap });
                    const areaText = d.Area ? create_element({ Tag: "span", Class: ["area"], Text: d.Area, Parent: locationWrap }) : null;
                    const headerText = d.Header ? create_element({ Tag: "span", Class: ["header"], Text: d.Header, Parent: locationWrap }) : null;
                    const titleText = d.Title ? create_element({ Tag: "span", Class: ["title"], Text: d.Title, Parent: locationWrap }) : null;
                    add_redirect(locationText,{catalog:"location",entry:location_index,style:"invert"});
                    
                    rightWrap.appendChild(itemWrap)
                }
        
                
                
        
                const descriptionWrap = d.Description ? create_element({ Tag: "div", Class: ["description"], Parent: lowerWrap }) : null;
                const descriptionText = d.Description ? create_element({ Tag: "span", Text: d.Description, Parent: descriptionWrap }) : null;

                const weatherText = d.Weather ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Weather).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["weather"], Parent: upperWrap }) : null;
                const seasonText = d.Season ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Season).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["season"], Parent: upperWrap }) : null;
                const timeText = d.Time ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Time).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["time"], Parent: upperWrap }) : null;
                const dayText = d.Day ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Day).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["day"], Parent: upperWrap }) : null;
                const fieldText = d.Field ? create_element({ Tag: "li", HTML: "Requires: "+format_conjunctionSplit(d.Field).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["field"], Parent: upperWrap }) : null;
        

                if (!item_index) { 
                    invalid.push(d.Item)
                }
            }
        });
    });


    const sort = Array.from(options.Parent.children);
    sort.sort((a, b) => { const aIndex = a.dataset.index || ""; const bIndex = b.dataset.index || ""; if (aIndex === "" && bIndex === "") return 0; if (aIndex === "") return -1; if (bIndex === "") return 1; return aIndex.localeCompare(bIndex); });
    sort.forEach(i => options.Parent.appendChild(i));

    invalid.length > 0 && (console.warn(invalid_text));
    invalid.length > 0 && (console.warn(invalid));

}
function generate_locationPokemon(parameters = {}) {

    const options = {
        Catalog: undefined,
        Entry: [],
        Data: {},
        Parent: null,
        ...parameters
    };

    if (!options.Catalog || !options.Entry.length > 0 || !Object.keys(options.Data).length > 0 || !options.Parent) { return; }

    const invalid_text = "Invalid Pokemon Found (Pokemon)";
    const invalid = [];

    Object.keys(options.Data).forEach(index => {
        
        const l = data.Locations[index];
        const location_index = index;
        
        l.Pokemon && l.Pokemon.forEach(d => {
            const pokemon_index = get_pokemonIndex(d.Pokemon);
            const default_index = get_defaultPokemon(pokemon_index);

            if (options.Catalog !== "Pokemon" || options.Entry.includes(d.Pokemon)) {
                if (pokemon_index) {

                    const defaultPokemon = get_defaultPokemon(pokemon_index);
                    const held_index = d.Held ? get_itemIndex(d.Held) : null;

                    const pokemon_file = [data.Pokemon[pokemon_index].File,data.Pokemon[default_index].File];
                    const held_file = [d.Held, ...(held_index ? [data.Items[held_index].Image, ...data.Items[held_index].Item] : [])];
                    
                    const header = [d.Area,d.Title,d.Header].filter(v => v !== undefined && v !== null).join('<br>');
                    let ol = options.Parent.querySelector(`ol[data-index="${header}"]`);
                    if (!ol && options.Catalog !== "Pokemon") {
                        ol = create_element({ Tag: "ol", Class:["generated_location_pokemon"], Data: { index: header }, Parent: options.Parent });
                        if (header) {
                            const entryHeader = create_element({ Tag: "li", Parent: ol });
                            const entryHeaderText = create_element({ Tag: "h4", HTML: header, Parent: entryHeader });
                        }
                    }
                    
                    const entry = create_element({ Tag: "li", ...(!ol && {Class:["generated_location_pokemon"]}), Parent: ol || options.Parent });

                    const leftWrap = create_element({ Tag: "aside", Parent: entry });
                    const rightWrap = create_element({ Tag: "aside", Parent: entry });

                    const upperWrap = create_element({ Tag: "header", Parent: rightWrap });
                    const lowerWrap = create_element({ Tag: "main", Parent: rightWrap });

                    if (options.Catalog == "Location") {
                        const pokemonWrap = create_element({ Tag: "div", Class: ["pokemon"], Parent: leftWrap });
                        const heldImage = d.Held ? create_element({ Tag: "img", Class: ["held_image"], Attribute: { title: `Held Item\n${d.Held}`, src: get_directory({FirstMatch: true, Exact: true, File: held_file, Path: [path.Item.Bag]}), }, Parent: pokemonWrap }) : null;
                        const pokemonImage = create_element({ Tag: "img", Class: ["pokemon_image"], Attribute: { src: get_directory({FirstMatch: true, Exact: true, File: pokemon_file, Path: [path.Pokemon.Box.Default.PNG,path.Pokemon.Box.Default.GIF,path.Pokemon.Menu.Default] }),}, Parent: pokemonWrap });
                        const pokemonText = create_element({ Tag: "strong", Text: d.Pokemon, Parent: pokemonWrap });
                        d.Held && (add_redirect(heldImage,{catalog:"item",entry:d.Held,style:"brightness"}));
                        
                        const static_src = d.Encounter && d.Encounter === "Static" ? get_directory({FirstMatch: true, Exact: true, File: pokemon_file, Path: [path.Pokemon.Overworld.Default.Front.GIF,path.Pokemon.Overworld.Default.Front.PNG]}) : "";
                        pokemonImage.src = static_src !== "" ? static_src : pokemonImage.src;

                        add_card(pokemonImage, {catalog: "Pokemon", entry: d.Pokemon, style: "brightness"});
                        add_card(pokemonText, {catalog: "Pokemon", entry: d.Pokemon, style: "invert"});
                    }
                    else if (options.Catalog === "Pokemon") {
                        const locationWrap = create_element({ Tag: "div", Class: ["location"], Parent: leftWrap });
                        const locationText = create_element({ Tag: "strong", Text: location_index, Parent: locationWrap });
                        const areaText = d.Area ? create_element({ Tag: "span", Class: ["area"], Text: d.Area, Parent: locationWrap }) : null;
                        const headerText = d.Header ? create_element({ Tag: "span", Class: ["header"], Text: d.Header, Parent: locationWrap }) : null;
                        const titleText = d.Title ? create_element({ Tag: "span", Class: ["title"], Text: d.Title, Parent: locationWrap }) : null;
                        add_redirect(locationText,{catalog:"location",entry:location_index,style:"invert"});

                        //const heldImage = d.Held ? create_element({ Tag: "img", Class: ["held_image"], Attribute: { title: `Held Item\n${d.Held}`, src: get_directory({FirstMatch: true, Exact: true, File: held_file, Path: [path.Item.Bag]}), }, Parent: pokemonWrap }) : null;
                        //d.Held && (add_redirect(heldImage,{catalog:"item",entry:d.Held,style:"brightness"}));
                    }    
                    const weatherText = d.Weather ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Weather).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["weather"], Parent: upperWrap }) : null;
                    const seasonText = d.Season ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Season).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["season"], Parent: upperWrap }) : null;
                    const timeText = d.Time ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Time).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["time"], Parent: upperWrap }) : null;
                    const dayText = d.Day ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Day).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["day"], Parent: upperWrap }) : null;
                    const moveText = d.Move ? create_element({ Tag: "li", HTML: "Moves: "+format_conjunctionSplit(d.Move).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["move"], Parent: upperWrap }) : null;
                    //const fieldText = d.Field ? create_element({ Tag: "li", HTML: "Requires: "+format_conjunctionSplit(d.Field).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["field"], Parent: upperWrap }) : null;
                    const shinyRateText = d["Shiny Rate"] ? create_element({ Tag: "li", HTML: "Shiny Rate: "+d["Shiny Rate"].replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["shinyrate"], Parent: upperWrap }) : null;
                    const catchRateText = d["Catch Rate"] ? create_element({ Tag: "li", HTML: "Catch Rate: "+d["Catch Rate"].replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["catchrate"], Parent: upperWrap }) : null;
                    const genderText = d.Gender ? create_element({ Tag: "li", HTML: "Gender: "+d.Gender.replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-gender='$&'>$&</span>"), Class: ["gender"], Parent: upperWrap }) : null;
                    const abilityText = d.Ability ? create_element({ Tag: "li", HTML: "Ability: "+d.Ability.replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["ability"], Parent: upperWrap }) : null;
                    const criteriaText = d.Criteria ? create_element({ Tag: "li", HTML: d.Criteria, Class: ["criteria"], Parent: upperWrap }) : null;
                    const noteText = d.Note ? create_element({ Tag: "li", HTML: d.Note, Class: ["note"], Parent: upperWrap }) : null;

                    const abilityText_elements = d.Ability ? abilityText.querySelectorAll(":scope span") : [];
                    abilityText_elements.forEach(a => {
                        add_redirect(a,{catalog:"ability",entry:a.dataset.text,style:"invert"});
                    });
                    
                    const levelWrap = d.Level ? create_element({ Tag: "div", Class: ["level"], Parent: lowerWrap }) : null;
                    const levelHeader = d.Level ? create_element({ Tag: "h5", Text: "Level", Parent: levelWrap }) : null;
                    const levelText = d.Level ? create_element({ Tag: "span", Text: unparse_levels(d.Level), Parent: levelWrap }) : null;

                    const rateWrap = d.Rate ? create_element({ Tag: "div", Class: ["rate"], Parent: lowerWrap }) : null;
                    const rateHeader = d.Rate ? create_element({ Tag: "h5", Text: "Rate", Parent: rateWrap }) : null;
                    const rateText = d.Rate ? create_element({ Tag: "span", Text: d.Rate, Parent: rateWrap }) : null;

                    const tileWrap = d.Tile && d.Tile.length > 0 ? create_element({ Tag: "div", Class: ["tile"], Parent: lowerWrap }) : null;
                    const tileHeader = d.Tile && d.Tile.length > 0 ? create_element({ Tag: "h5", Text: "Tile", Parent: tileWrap }) : null;
                    
                    d.Tile ? d.Tile.forEach(t => {
                        t.forEach(tile => {
                            const tileContent = create_element({ Tag: "div", Parent: tileWrap });
                            const tileImage = create_element({ Tag: "img", Attribute: { title: tile, src: get_directory({FirstMatch: true, Exact: true, File: [tile], Path: [path.Object.Overworld.Tile]}), }, Parent: tileContent });
                            const tileText = create_element({ Tag: "span", Text: tile, Parent: tileContent });    
                        });
                    }) : null;

                    const encounterWrap = d.Encounter ? create_element({ Tag: "div", Class: ["encounter"], Parent: lowerWrap }) : null;
                    const encounterHeader = d.Encounter ? create_element({ Tag: "h5", Text: "Encounter", Parent: encounterWrap }) : null;
                    const encounterText = d.Encounter ? create_element({ Tag: "span", Text: d.Encounter, Parent: encounterWrap }) : null;

                    const itemWrap = d.Item && d.Item.length > 0 ? create_element({ Tag: "div", Class: ["required"], Parent: lowerWrap }) : null;
                    const itemHeader = d.Item  && d.Item.length > 0 ? create_element({ Tag: "h5", Text: "Required Item", Parent: itemWrap }) : null;
                    
                    d.Item && d.Item.forEach(it => {
                        it.forEach(i => {
                            const item_index = i ? get_itemIndex(i) : null;
                            const item_file = [i, ...(item_index && data.Items[item_index] ? [data.Items[item_index].Image, ...data.Items[item_index].Item] : [])];

                            const itemContent = create_element({ Tag: "div", Parent: itemWrap });
                            const itemImage = create_element({ Tag: "img", Attribute: { title: `Required Item\n${i}`, src: get_directory({FirstMatch: true, Exact: true, File: item_file, Path: [path.Item.Bag]}), }, Parent: itemContent });
                            const itemText = create_element({ Tag: "span", Text: i, Parent: itemContent });

                            add_redirect(itemContent,{catalog:"item",entry:i,style:"brightness"});
                        });
                    });

                
                    if (options.Catalog !== "Pokemon") {
                        entry.dataset.spoiler = !!(d.Encounter === "Static" && (
                            (data.Pokemon[pokemon_index] && data.Pokemon[pokemon_index].Group && (data.Pokemon[pokemon_index].Group === "Legendary" || data.Pokemon[pokemon_index].Group === "Mythical")) ||
                            (data.Pokemon[defaultPokemon] && data.Pokemon[defaultPokemon].Group && (data.Pokemon[defaultPokemon].Group === "Legendary" || data.Pokemon[defaultPokemon].Group === "Mythical"))
                        ));
                        entry.dataset.spoiler && entry.dataset.spoiler === "true" && (entry.addEventListener("click", function(event) { event.currentTarget.classList.add("active"); }))
                    }
                }
                else {
                    invalid.push(d.Pokemon)
                }
            }
        });
    });

    const sort = Array.from(options.Parent.children);
    sort.sort((a, b) => { const aIndex = a.dataset.index || ""; const bIndex = b.dataset.index || ""; if (aIndex === "" && bIndex === "") return 0; if (aIndex === "") return -1; if (bIndex === "") return 1; return aIndex.localeCompare(bIndex); });
    sort.forEach(i => options.Parent.appendChild(i));

    invalid.length > 0 && (console.warn(invalid_text));
    invalid.length > 0 && (console.warn(invalid));

}
function generate_learnset(parameters = {}) {

    const options = {
        Catalog: undefined,
        Entry: [],
        Data: {},
        Parent: null,
        ...parameters
    };
 
    if (!options.Catalog || !options.Entry.length > 0 || !Object.keys(options.Data).length > 0 || !options.Parent) { return; }

    const invalid_text = "Invalid Move Found (Learnset)";
    const invalid = [];

    Object.keys(options.Data).forEach(index => {
        const d = data.Pokemon[index];

        const pokemon_index = index;
        const default_index = get_defaultPokemon(pokemon_index);
        const pokemon_file = [data.Pokemon[pokemon_index].File,data.Pokemon[default_index].File];

        d.Learnset && d.Learnset.forEach(l => {
            if (options.Catalog !== "Move" || options.Entry.includes(l.Move)) {
                const move_index = get_moveIndex(l.Move);

                if (move_index) {
                    const move_type = data.Moves[move_index].Type;
                    
                    const header = l.Type === "Level Up" ? `Level Up` : l.Type === "Machine" ? `` : l.Type === "Breeding" ? `Parent` : l.Type === "Evolution" ? `Previous Evolution` : l.Type === "Tutor" ? `Move Tutor` : "";
                    const text = l.Type === "Level Up" ? `${l.Factor}` : l.Type === "Machine" ? `${l.Machine}` : l.Type === "Breeding" ? `` : l.Type === "Tutor" ? `${l.Location}` : "";

                    const data_entry = create_element({ Tag: "li", Class: ["generated_learnset"], Data: {index: l.Type}, Parent: options.Parent });


                    if (options.Catalog === "Move") {
                        const pokemonWrap = create_element({ Tag: "div", Class: ["pokemon"], Parent: data_entry });
                        const pokemonImage = create_element({ Tag: "img", Attribute: { src: get_directory({FirstMatch: true, Exact: true, File: pokemon_file, Path: [path.Pokemon.Box.Default.PNG,path.Pokemon.Box.Default.GIF,path.Pokemon.Menu.Default] }), }, Parent: pokemonWrap });
                        const pokemonText = create_element({ Tag: "strong", Text: d.Pokemon, Parent: pokemonWrap });
                        add_card(pokemonImage, {catalog: "Pokemon", entry: d.Pokemon, style: "brightness"});
                        add_card(pokemonText, {catalog: "Pokemon", entry: d.Pokemon, style: "invert"});
                    }
                    else if (options.Catalog === "Pokemon") {
                        const moveWrap = create_element({ Tag: "div", Class: ["move"], Data: { type: move_type}, Parent: data_entry });
                        const moveText = create_element({ Tag: "strong", Text: l.Move, Parent: moveWrap });
                        add_redirect(moveWrap,{catalog:"move",entry:l.Move,style:"brightness"})
                    }
            
                    const summaryWrap = create_element({ Tag: "div", Class: ["summary"], Parent: data_entry });
                    const summaryHeader = header !== "" ? create_element({ Tag: "h4", Text: header, Parent: summaryWrap }) : null;
                    const summaryText = text !== "" ? create_element({ Tag: "strong", Text: text, Parent: summaryWrap }) : null;

                    l.Type === "Tutor" && (add_redirect(summaryText,{catalog:"location",entry:l.Location,style:"invert"}));
                    l.Type === "Machine" && (add_redirect(summaryText,{catalog:"item",entry:l.Machine,style:"invert"}));

                    const pokes = l.Type === "Breeding" ? l.Parent : l.Type === "Evolution" ? l.Evolution : [];

                    const summaryImageWrap = pokes.length > 0 ? create_element({ Tag: "div", Parent: summaryWrap }) : null;

                    pokes.forEach(p => {
                        const poke_index = get_pokemonIndex(p);
                        const def_index = get_defaultPokemon(poke_index);
                        const pok_file = [data.Pokemon[poke_index].File,data.Pokemon[def_index].File];
                
                        const summaryImage = create_element({ Tag: "img", Attribute: { title: p, src: get_directory({FirstMatch: true, Exact: true, File: pok_file, Path: [path.Pokemon.Box.Default.PNG,path.Pokemon.Box.Default.GIF,path.Pokemon.Menu.Default] }), }, Parent: summaryImageWrap });
                        add_card(summaryImage, {catalog: "Pokemon", entry: p, ...(options.Catalog === "Pokemon" && {select: "area"}), style: "brightness"});
                    });
                }
                else {
                    invalid.push(l.Move)
                }

            }
        });
    });

    const order = ["Evolution", "Level Up", "Machine", "Tutor", "Breeding"];
    const sort = Array.from(options.Parent.children);
    sort.sort((a, b) => { const aIndex = a.dataset.index || ""; const bIndex = b.dataset.index || ""; if (aIndex === "" && bIndex === "") return 0; if (aIndex === "") return -1; if (bIndex === "") return 1; const aOrder = order.indexOf(aIndex); const bOrder = order.indexOf(bIndex); if (aOrder === -1 && bOrder === -1) return aIndex.localeCompare(bIndex); if (aOrder === -1) return 1; if (bOrder === -1) return -1; return aOrder - bOrder; });
    sort.sort((a, b) => { const elA = a.querySelector(':scope .summary > *:last-child'); const elB = b.querySelector(':scope .summary > *:last-child');  const levelA = elA ? parseInt(elA.innerText) : 0; const levelB = elB ? parseInt(elB.innerText) : 0; return levelA - levelB; });
    sort.forEach(i => options.Parent.appendChild(i));


    invalid.length > 0 && (console.warn(invalid_text));
    invalid.length > 0 && (console.warn(invalid));
    
}
function generate_pickup(parameters = {}) {
    const options = {
        Catalog: undefined,
        Entry: [],
        Data: {},
        Parent: null,
        ...parameters
    };
 
    if (!options.Catalog || !options.Entry.length > 0 || !Object.keys(options.Data).length > 0 || !options.Parent) { return; }

    const invalid_text = "Invalid Item Found (Pickup)";
    const invalid = [];

    Object.keys(options.Data).forEach(index => {
        const l = data.Abilities[index];
        const ability_index = index;

        l.Item && l.Item.forEach(d => {
            if (options.Catalog !== "Item" || options.Entry.includes(d.Item)) {
                d.Quantity = d.Quantity === undefined ? 1 : d.Quantity;
                const item_index = d.Index ? d.Index : get_itemIndex(d.Item);
            
                const item_file = item_index && data.Items[item_index] ? [d.Image, data.Items[item_index]?.Image, ...(data.Items[item_index]?.Item || []), d.Item].filter(part => part !== undefined && part !== null) : [null];

                const text = `${d.Rate} chance to be held by a${d.Level ? ` Level ${unparse_levels(d.Level)} ` : ''} Pokemon with the ability Pickup after a battle${d.Location ? ` while in the location ${d.Location}` : ''}${d.Area ? ` (${d.Area})` : ''}.`;

                const header = [d.Area,d.Title,d.Header].filter(v => v !== undefined && v !== null).join('<br>');
                let ol = options.Parent.querySelector(`ol[data-index="${header}"]`);
                if (!ol && options.Catalog !== "Item") {
                    ol = create_element({ Tag: "ol", Class:["generated_pickup"], Data: { index: header }, Parent: options.Parent });
                    if (header) {
                        const entryHeader = create_element({ Tag: "li", Parent: ol });
                        const entryHeaderText = create_element({ Tag: "h4", HTML: header, Parent: entryHeader });
                    }
                }
                
                const entry = create_element({ Tag: "li", ...(!ol && {Class:["generated_pickup"]}), Parent: ol || options.Parent });

                const leftWrap = create_element({ Tag: "aside", Parent: entry });
                const centerWrap = create_element({ Tag: "aside", Parent: entry });
                const rightWrap = create_element({ Tag: "aside", Parent: entry });

                const upperWrap = create_element({ Tag: "header", Parent: centerWrap });
                const lowerWrap = create_element({ Tag: "main", Parent: centerWrap });

                const itemWrap = create_element({ Tag: "div", Attribute: { ...(d.Hidden && { title: "Hidden" }), }, Class: ["item"], Parent: rightWrap });

                const itemImageWrap = create_element({ Tag: "div", Class: ["image"], Parent: itemWrap });

                Array.from({ length: (d.Quantity > 5 ? 5 : d.Quantity) }).forEach(q => {
                    const itemImage = create_element({ Tag: "img", Attribute: { src: get_directory({FirstMatch: true, File: [d.Image,data.Items[item_index].Image,...data.Items[item_index].Item].filter(value => value !== undefined), Path: [path.Item.Bag]}) }, Parent: itemImageWrap });
                });
                const quantityExtend = d.Quantity > 5 ? create_element({ Tag: "span", Text: `...`, Class:["extend"], Attribute: {  title: `${d.Quantity}x ${d.Item}` }, Parent: itemImageWrap }) : null;

                const itemQuantity = create_element({ Tag: "strong", Text: `${d.Quantity}x`, Parent: itemWrap });
                const itemName = create_element({ Tag: "strong", Text: d.Item, Parent: itemWrap });

                const pickupWrap = create_element({ Tag: "div", Class: ["pickup"], Parent: leftWrap });
                const pickupText = create_element({ Tag: "strong", Text: "Pickup", Parent: pickupWrap });

                add_redirect(pickupText,{catalog:"ability",entry:"Pickup",style:"invert"});

                

                const descriptionWrap = create_element({ Tag: "div", Class: ["description"], Parent: lowerWrap }) ;
                const descriptionText = create_element({ Tag: "span", Text: text, Parent: descriptionWrap });

                const weatherText = d.Weather ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Weather).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["weather"], Parent: upperWrap }) : null;
                const seasonText = d.Season ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Season).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["season"], Parent: upperWrap }) : null;
                const timeText = d.Time ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Time).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["time"], Parent: upperWrap }) : null;
                const dayText = d.Day ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Day).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["day"], Parent: upperWrap }) : null;
                const fieldText = d.Field ? create_element({ Tag: "li", HTML: "Requires: "+format_conjunctionSplit(d.Field).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["field"], Parent: upperWrap }) : null;


                if (!item_index) {
                    invalid.push(d.Item)
                }
            }
        });
    });

    const sort = Array.from(options.Parent.children);
    sort.sort((a, b) => (!a.dataset.index || !b.dataset.index) ? 0 : a.dataset.index === "" ? -1 : b.dataset.index === "" ? 1 : a.dataset.index.localeCompare(b.dataset.index));
    sort.forEach(i => options.Parent.appendChild(i));

    invalid.length > 0 && (console.warn(invalid_text));
    invalid.length > 0 && (console.warn(invalid));

}
function generate_ability(parameters = {}) {

    const options = {
        Catalog: undefined,
        Entry: [],
        Data: {},
        Parent: null,
        ...parameters
    };
 
    if (!options.Catalog || !options.Entry.length > 0 || !Object.keys(options.Data).length > 0 || !options.Parent) { return; }

    const invalid_text = "Invalid Pokemon Found (Ability)";
    const invalid = [];

    Object.keys(options.Data).forEach(p => {
        const pokemon_index = get_pokemonIndex(p);

        if (pokemon_index) {
            const defaultPokemon = get_defaultPokemon(pokemon_index);
            const file = data.Pokemon[p] ? (data.Pokemon[p].File ? String(data.Pokemon[p].File) : ( data.Pokemon[defaultPokemon] ? (data.Pokemon[defaultPokemon].File ? String(data.Pokemon[defaultPokemon].File) : null) : null ) ) : null;

            const pokemon_primary = data.Pokemon[p].Ability.Primary;
            const pokemon_secondary = data.Pokemon[p].Ability.Secondary;
            const pokemon_hidden = data.Pokemon[p].Ability.Hidden;

            const data_entry = create_element({ Tag: "li", Class:["generated_ability"], Parent: options.Parent });
                
            const pokemonWrap = create_element({ Tag: "div", Class: ["pokemon"], Parent: data_entry });
            const pokemonImage = create_element({ Tag: "img", Attribute: { src: get_directory({FirstMatch: true, Exact: true, File:[file], Path: [path.Pokemon.Box.Default.PNG,path.Pokemon.Box.Default.GIF,path.Pokemon.Menu.Default] }), }, Parent: pokemonWrap });
            const pokemonText = create_element({ Tag: "strong", Text: p, Parent: pokemonWrap });

            add_card(pokemonImage, {catalog: "Pokemon", entry: p, style: "brightness"});
            add_card(pokemonText, {catalog: "Pokemon", entry: p, style: "invert"});


            const headers = config.Ability;
            for (const key of headers) {
                const a = data.Pokemon[pokemon_index].Ability[key] ? data.Pokemon[pokemon_index].Ability[key] : null
                const isAbility = a ? options.Entry.includes(a) : false;
                const abilityWrap = create_element({ Tag: "div", Class: [key], Attribute: { title: `${key} Ability`, }, Parent: data_entry });
                const abilityText = create_element({ Tag: isAbility ? "strong" : "span", Text: a ? a : "None", ...(!a && { Class: ["none"] }), Parent: abilityWrap });
                a && !isAbility && (add_redirect(abilityWrap,{catalog:"ability",entry:a, style:"invert"}))
            }

            
        }
        else {
            invalid.push(p)
        }
    });

    const sort = Array.from(options.Parent.children);
    sort.sort((a, b) => (!a.dataset.index || !b.dataset.index) ? 0 : a.dataset.index === "" ? -1 : b.dataset.index === "" ? 1 : a.dataset.index.localeCompare(b.dataset.index));
    sort.forEach(i => options.Parent.appendChild(i));

    invalid.length > 0 && (console.warn(invalid_text));
    invalid.length > 0 && (console.warn(invalid));
}
function generate_tutor(parameters = {}) {

    const options = {
        Catalog: undefined,
        Entry: [],
        Data: {},
        Parent: null,
        ...parameters
    };

    if (!options.Catalog || !options.Entry.length > 0 || !Object.keys(options.Data).length > 0 || !options.Parent) { return; }

    const invalid_text = "Invalid Pokemon Found (Ability)";
    const invalid = [];

    Object.keys(options.Data).forEach(index => {

        const location_index = index;
        const l = data.Locations[location_index];
        

        l["Move Tutor"] && l["Move Tutor"].forEach(d => {
            if (options.Catalog !== "Move" || options.Entry.includes(d.Move)) {
                const move_index = get_moveIndex(d.Move);

                if (move_index) {

                    let cost_text = d.Cost ? d.Cost.map(({ Cost, Currency }) => {
                        const dir = get_directory({ FirstMatch: true, Exact: true, File: [Currency], Path: [path.Item.Bag, path.Currency.Icon] });
                        return dir !== "" ? `${Cost} <img src='${dir}' title='${Currency}' />` : Currency.length > 5 ? `${Cost} <span title='${Currency}'>${Currency.match(/[A-Z]/g).join('')}</span>` : `${Cost} ${Currency}`;
                    }).join(', ') : null;

                    let text = `Taught${d.Pokemon ? ` to ${d.Pokemon}` : ''}${d.Rate ? ` ${d.Rate}` : ''}${d.Character ? ` by ${d.Character}` : ''}${cost_text ? ` for ${cost_text}` : ''}`.replaceAll("  ", " ").trim() + '.';
                    text = text === "Taught." ? null : text;

                    const header = [d.Area,d.Title,d.Header].filter(v => v !== undefined && v !== null).join('<br>');
                    let ol = options.Parent.querySelector(`ol[data-index="${header}"]`);
                    if (!ol && options.Catalog !== "Item") {
                        ol = create_element({ Tag: "ol", Class:["generated_tutor"], Data: { index: header }, Parent: options.Parent });
                        if (header) {
                            const entryHeader = create_element({ Tag: "li", Parent: ol });
                            const entryHeaderText = create_element({ Tag: "h4", HTML: header, Parent: entryHeader });
                        }
                    }
                    
                    const entry = create_element({ Tag: "li", ...(!ol && {Class:["generated_tutor"]}), Parent: ol || options.Parent });
    
                    const leftWrap = create_element({ Tag: "aside", Parent: entry });
                    const rightWrap = create_element({ Tag: "aside", Parent: entry });
            
                    const upperWrap = create_element({ Tag: "header", Parent: rightWrap });
                    const lowerWrap = create_element({ Tag: "main", Parent: rightWrap });
            
                    const moveWrap = create_element({ Tag: "div", Class: ["move"], Data: {type: data.Moves[move_index].Type}, Parent: leftWrap });
                    const moveText = create_element({ Tag: "strong", Text: d.Move, Parent: moveWrap });

                    add_redirect(moveWrap,{catalog:"move",entry:move_index,style:"brightness"});
            
                    const descriptionWrap = text ? create_element({ Tag: "div", Class: ["description"], Parent: lowerWrap }) : null;
                    const descriptionText = text ? create_element({ Tag: "span", HTML: text, Parent: descriptionWrap }) : null;
            
                    const weatherText = d.Weather ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Weather).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["weather"], Parent: upperWrap }) : null;
                    const seasonText = d.Season ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Season).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["season"], Parent: upperWrap }) : null;
                    const dayText = d.Day ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Day).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["day"], Parent: upperWrap }) : null;
                    const timeText = d.Time ? create_element({ Tag: "li", HTML: format_conjunctionSplit(d.Time).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["time"], Parent: upperWrap }) : null;
                    const fieldText = d.Field ? create_element({ Tag: "li", HTML: "Requires: "+format_conjunctionSplit(d.Field).replace(/(\d{2}:\d{2}-\d{2}:\d{2})|(\w+(?: \w+)?)|([^,\s/]+)/g, "<span data-text='$&'>$&</span>"), Class: ["field"], Parent: upperWrap }) : null;
                    const criteriaText = d.Criteria ? create_element({ Tag: "li", HTML: d.Criteria, Class: ["criteria"], Parent: upperWrap }) : null;
                    const noteText = d.Note ? create_element({ Tag: "li", HTML: d.Note, Class: ["note"], Parent: upperWrap }) : null;
                }
                else {
                    invalid.push(d.Move)
                }
            }
        });
    });

    const sort = Array.from(options.Parent.children);
    sort.sort((a, b) => (!a.dataset.index || !b.dataset.index) ? 0 : a.dataset.index === "" ? -1 : b.dataset.index === "" ? 1 : a.dataset.index.localeCompare(b.dataset.index));
    sort.forEach(i => options.Parent.appendChild(i));

    invalid.length > 0 && (console.warn(invalid_text));
    invalid.length > 0 && (console.warn(invalid));
}