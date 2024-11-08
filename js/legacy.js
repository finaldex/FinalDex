function parsePokemonData(data) {
    // Split the input data by brackets to separate groups
    const groups = Data.split(/\s*\[\s*/).filter(Boolean).map(group => group.replace(/\]/g, '').trim());
    
    const result = groups.map(group => {
        // Split each group into individual Pokémon entries
        const entries = group.split(/\s*(?=pok:)/);
        
        return entries.map(entry => {
            const obj = {};
            const properties = entry.split('|');

            properties.forEach(property => {
                const [key, value] = property.split(':').map(p => p.trim());
                if (value) {
                    switch (key) {
                        case 'pok':
                            obj.Pokemon = value;
                            break;
                        case 'mo':
                            obj.Moves = value.split(',').filter(Boolean);
                            break;
                        case 'ab':
                            obj.Ability = value.split('/').filter(Boolean);
                            break;
                        case 'ev':
                            obj.EVs = parseStats(value);
                            break;
                        case 'iv':
                            obj.IVs = parseStats(value);
                            break;
                        case 'na':
                            obj.Nature = value;
                            break;
                        case 'lv':
                            obj.Level = parseInt(value, 10);
                            break;
                        case 'ge':
                            obj.Gender = value;
                            break;
                        case 'it':
                            obj.Item = value.split(',').filter(Boolean);
                            break;
                    }
                }
            });

            // Helper function to parse EVs or IVs into the desired format
            function parseStats(statsString) {
                const statsOrder = ['HP', 'Attack', 'Defense', 'SpAtk', 'SpDef', 'Speed'];
                const statsArray = statsString.split(',').map(stat => parseInt(stat.trim(), 10));
                
                // Create an object to hold the final stats
                const statsObject = {};

                // Fill the object with values, respecting the order and only include non-zero values
                statsOrder.forEach((stat, index) => {
                    if (statsArray[index] > 0) {
                        statsObject[stat] = statsArray[index];
                    }
                });

                return statsObject;
            }

            return obj;
        });
    });

    // Return the result as an array of arrays
    return result;
}


const formatInnerArray = inner => { return inner.map(arr => { if (arr.length === 1) { return arr[0]; } else if (arr.length === 2) { return `${arr[0]} and ${arr[1]}`; } else { return `${arr.slice(0, -1).join(", ")}, and ${arr[arr.length - 1]}`; } }).join(" / "); };



function transformString(input) {
    const regex = /(\w+):(\d+)%/g;
    const matches = [...input.matchAll(regex)];

    if (matches.length > 1 && matches.every(match => match[2] === matches[0][2])) {
        const values = matches.map(match => match[1]);
        return `${matches[0][2]}%\t${values.join(',')}`;
    }

    return input; // Return untouched if % don't match
}


function formatString(input) {
    // Updated regex to allow for optional tilde and decimals
    const regex = /(\w+):~?([\d.]+)%/g; 
    const matches = [...input.matchAll(regex)];
    
    const grouped = matches.reduce((acc, match) => {
        const key = match[2]; // percentage
        const name = match[1]; // identifier

        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(name);
        return acc;
    }, {});

    return Object.entries(grouped)
        .map(([key, names]) => `${key}%\t${names.join(',')}`)
        .join('\n');
}

function formatWeatherText(input) {
    const parts = input.split(',');
    const initialPokemons = [];
    const conditionMap = {};

    parts.forEach(part => {
        if (part.includes(':')) {
            const [condition, pokemon] = part.split(':');
            if (!conditionMap[pokemon]) {
                conditionMap[pokemon] = [];
            }
            conditionMap[pokemon].push(condition);
        } else {
            initialPokemons.push(part);
        }
    });

    const result = [];

    if (initialPokemons.length > 0) {
        result.push(initialPokemons.join(','));
    }

    const groupedConditions = {};

    for (const [pokemon, conditions] of Object.entries(conditionMap)) {
        const conditionKey = conditions.join(',');
        if (!groupedConditions[conditionKey]) {
            groupedConditions[conditionKey] = [];
        }
        groupedConditions[conditionKey].push(pokemon);
    }

    for (const [condition, pokemons] of Object.entries(groupedConditions)) {
        result.push(`${pokemons.join(',')} ${condition}`);
    }

    return result.join(' \n');
}

function addDescriptionToPokemon(pokemonArray) {
    return pokemonArray.map(pokemon => ({
        ...pokemon,
        Description: "Possible Pokémon"
    }));
}


function convertPokemonData(jsonString, index) {
    const data = JSON.parse(jsonString);
    const fields = ["Pokemon", "Description", "Gender", "Level", "Ability", "Moves", "IVs", "EVs", "Item", "Nature"];
    const ivOrder = ["HP", "Attack", "Defense", "SpAtk", "SpDef", "Speed"];
    const evOrder = ["HP", "Attack", "Defense", "SpAtk", "SpDef", "Speed"];

    const getField = (obj, field) => {
        switch (field) {
            case "Moves":
                return obj[field] ? obj[field].join(",") : "";
            case "IVs":
                return obj[field] ? ivOrder.map(stat => obj[field][stat] || 0).join(",") : "";
            case "EVs":
                return obj[field] ? evOrder.map(stat => obj[field][stat] || 0).join(",") : "";
            case "Item":
                return obj[field] ? obj[field].join(",") : "";
            default:
                return obj[field] || "";
        }
    };

    const result = Data.map(pokemon => {
        // Check for unexpected fields
        Object.keys(pokemon).forEach(key => {
            if (!fields.includes(key)) {
                console.warn(`Unexpected field found: ${key}`);
            }
        });

        const pokemonFields = fields.map(field => getField(pokemon, field));
        return [index, ...pokemonFields].join("\t");
    }).join("\n");

    return result;
}

function convertMultiplePokemonData(jsonStrings) {
    return jsonStrings.map((jsonString, index) => convertPokemonData(jsonString, index + 1)).join("\n");
}



function formatPokemonData(data) {
    // Clean up the input data by removing unnecessary line breaks
    const cleanedData = Data.trim().replace(/\n\s*\n/g, '\n');

    // Split the cleaned data into individual Pokémon entries
    const entries = cleanedData.split(/\n(?=Spr)/);
    
    // Initialize an array to hold the formatted lines
    const formattedLines = [];

    entries.forEach(entry => {
        // Extract Pokémon details using regex
        const pokemonMatch = entry.match(/^ (\w+)(?=[♂♀ Lv])/gm);
        const genderMatch = entry.match(/♂\/♀|♂|♀/g);
        const levelMatch = entry.match(/Lv\.(\d+)/);
        const abilityMatch = entry.match(/Ability:\s*(.+?)(?=\n)/);
        const movesMatch = [...entry.matchAll(/^(.*?)(?:\s+([A-Za-z]+))\s+(Physical|Special|Status)$/gm)].map(match => (match[1].trim()));
        const itemMatch = entry.match(/^Held item:.*?\s+(\w+(?:\s+\w+)?)\s*$/m)

        const pokemon = pokemonMatch && pokemonMatch[0] ? pokemonMatch[0].trim() : "";
        const gender = genderMatch && genderMatch[0] ? genderMatch[0] : "";
        const level = levelMatch && levelMatch[1] ? levelMatch[1] : "";
        const ability = abilityMatch && abilityMatch[1] ? abilityMatch[1].replaceAll(" or ","/") : "";
        const moves = movesMatch ? movesMatch : "";
        const item = itemMatch && itemMatch[1] ? itemMatch[1] : "";
   

        // Format the line and add it to the array
        formattedLines.push(`${pokemon}\t${""}\t${gender}\t${level}\t${ability}\t${moves}\t${""}\t${""}\t${item}\t${""}`);
    });

    // Join the formatted lines with line breaks and return the result
    return formattedLines.join('\n');
}


/*
Object.fromEntries(
    Object.entries(finaldata.Directory)
        .filter(([key]) => key.includes("/Location/"))
        .map(([key, values]) => [
            key,
            values.filter(value => ![...new Set(finaldata.Locations.Overview.map(item => item.Location))].some(exclude => value.startsWith(exclude)))
        ])
        .filter(([key, values]) => values.length > 0)
);


Object.fromEntries(
    Object.entries(finaldata.Directory)
        .filter(([key]) => key.includes("/Location/"))
        .map(([key, values]) => [
            key,
            values.filter(value => {
                const match = value.match(/^[^_.]+/);
                const baseValue = match ? match[0] : value;
                return ![...new Set(finaldata.Locations.Overview.map(item => item.Location))].includes(baseValue);
            })
        ])
        .filter(([key, values]) => values.length > 0)
);

Object.fromEntries(
    Object.entries(finaldata.Directory)
        .filter(([key]) => key.includes("/Location/"))
        .map(([key, values]) => [
            key,
            values.filter(value => {
                const match = value.match(/^(.*?)(?:_|(?=\.[^.]*$))/);
                const baseValue = match ? match[1] : value;
                return ![...new Set(finaldata.Locations.Overview.map(item => item.Location))].includes(baseValue);
            })
        ])
        .filter(([key, values]) => values.length > 0)
);
*/

function load_data() {

    return
    // Scope for current game only to reduce load
    var arr = finaldata["Pokemon Learnset"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Location Pokemon"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Location Items"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Location Trainers"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Abilities"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Locations"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Moves"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Items"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Pokemon"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Trainers"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));

    // Create Lookup Tables

    // Pokemon
    finaldata["Pokemon"]["Overview"].forEach(({ Game, Pokemon, Active }) => {
        Active && get_applicable(Game) && ((Data.Pokemon ||= {})[Pokemon] = {});
    });
    

    // Specie
    finaldata["Pokemon"]["Specie"].forEach(({ Game, Pokemon, Specie }) => {
        if (get_applicable(Game)) {

            Data.Pokemon[Pokemon] && (Data.Pokemon[Pokemon] = {
                ...Data.Pokemon[Pokemon],
                ...(Specie !== undefined && { ["Pokemon"]: Specie })
            });
        }
    });

    // File
    finaldata["Pokemon"]["File"].forEach(({ Game, Pokemon, File }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(File !== undefined && { File: String(File) })
            });
        }
    });

    // Form Item
    finaldata["Pokemon"]["Form Item"].forEach(({ Game, Pokemon, Required, Conflict }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Form: {
                    ...(Data.Pokemon[pokemon_index]?.Form || {}),
                    ...(Required !== undefined && { ["Required Item"]: Required ? parse_conjunctionSplit(Required) : [] }),
                    ...(Conflict !== undefined && { ["Conflicting Item"]: Conflict ? parse_conjunctionSplit(Conflict) : [] }),
                }
            });
        }
    });

    // Form Change
    finaldata["Pokemon"]["Form Change"].forEach(({ Game, Pokemon, Change }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);
    
            Data.Pokemon[pokemon_index]  && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Form: {
                    ...(Data.Pokemon[pokemon_index]?.Form || {}),
                    ...(Change !== undefined && { Change }),
                }
            });
        }
    });
    

    // Pokédex ID
    finaldata["Pokemon"]["Pokedex ID"].forEach(({ Game, Pokemon, Dex, ID }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = { 
                ...Data.Pokemon[pokemon_index], 
                Pokedex: {
                    ...(Data.Pokemon[pokemon_index]?.Pokedex || {}),
                    ...(ID !== undefined && { [Dex]: ID }),
                } 
            });
        }
    });

    // Pokédex Color
    finaldata["Pokemon"]["Pokedex Color"].forEach(({ Game, Pokemon, Color }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);
 
            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Color !== undefined && { ["Pokedex Color"]: Color })
            });
        }
    });

    // Pokédex Entry
    finaldata["Pokemon"]["Pokedex Entry"].forEach(({ Game, Pokemon, Entry }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Entry !== undefined && { ["Pokedex Entry"]: Entry })
            });
        }
    });

    // Type
    finaldata["Pokemon"]["Type"].forEach(({ Game, Pokemon, Primary, Secondary }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Type: {
                    ...(Data.Pokemon[pokemon_index]?.Type || {}),
                    ...(Primary !== undefined && { Primary }),
                    ...(Secondary !== undefined && { Secondary }),
                }
            });
        }
    });

    // Ability
    finaldata["Pokemon"]["Ability"].forEach(({ Game, Pokemon, Primary, Secondary, Hidden }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Ability: {
                    ...(Data.Pokemon[pokemon_index]?.Ability || {}),
                    ...(Primary !== undefined && { Primary }),
                    ...(Secondary !== undefined && { Secondary }),
                    ...(Hidden !== undefined && { Hidden }),
                }
            });
        }
    });

    // Evolution Specie
    finaldata["Pokemon"]["Evolution Specie"].forEach(({ Game, Pokemon, Previous, Next }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Evolution: {
                    ...(Data.Pokemon[pokemon_index]?.Evolution || {}),
                    ...(Previous !== undefined && { Previous: Previous.split(/[,]/) }),
                    ...(Next !== undefined && { Next: Next.split(/[,]/) })
                }
            });
        }
    });

    // Evolution Method
    finaldata["Pokemon"]["Evolution Method"].forEach(({ Game, Pokemon, Type, Item, Level, Extra, Gender }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Evolution: {
                    ...(Data.Pokemon[pokemon_index]?.Evolution || {}),
                    ...(Type !== undefined && { Type }),
                    ...(Item !== undefined && { Item }),
                    ...(Level !== undefined && { Level }),
                    ...(Extra !== undefined && { Extra }),
                    ...(Gender !== undefined && { Gender }),
                }
            });
        }
    });

    // Offspring
    finaldata["Pokemon"]["Offspring"].forEach(({ Game, Pokemon, Offspring, Factor }) => { 
        if (Config.Egg && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index].Offspring = parse_conjunctionSplit(Offspring).map((v, i) => {
                const factorValue = Factor && parse_conjunctionSplit(Factor)[i];
                return { Offspring: v, ...(factorValue ? { Factor: factorValue } : {}) }; // Only assign Factor if valid
            }));
        }
    });

    // Egg Cycle
    finaldata["Pokemon"]["Egg Cycle"].forEach(({ Game, Pokemon, ["Egg Cycle"]: Cycle }) => { 
        if (Config.Egg && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            const stepsValue = Cycle ? (Config.Generation === 2 || Config.Generation === 3 || Config.Generation === 7 ? Cycle * 256 : Config.Generation === 4 || Config.ID === 35 || Config.ID === 36 ? Cycle * 255 : Config.Generation === 5 || Config.Generation === 6 ? Cycle * 257 : Config.ID === 33 || Config.ID === 34 ? Cycle * 128 : null) : null;

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Cycle !== undefined && { ["Egg Cycle"]: {
                    ["Cycle"]: Cycle,
                    ...(stepsValue !== null && { ["Steps"]: stepsValue })
                } })
            });
        }
    });

    // Egg Group
    finaldata["Pokemon"]["Egg Group"].forEach(({ Game, Pokemon, Primary, Secondary }) => {
        if (Config.Egg && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Egg Group"]: {
                    ...(Data.Pokemon[pokemon_index]?.["Egg Group"] || {}),
                    ...(Primary !== undefined && { Primary }),
                    ...(Secondary !== undefined && { Secondary })
                }
            });
        }
    });

    // Gender Ratio
    finaldata["Pokemon"]["Gender Ratio"].forEach(({ Game, Pokemon, Ratio }) => { 
        if (Config.Gender && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Ratio !== undefined && { ["Gender Ratio"]: { 
                        Female: parseInt(Ratio.split(":")[0]),
                        Male: parseInt(Ratio.split(":")[1]),
                    }
                }),
            });
        }
    });


    // Category
    finaldata["Pokemon"]["Category"].forEach(({ Game, Pokemon, Category }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Category !== undefined && { Category })
            });
        }
    });

    // Group
    finaldata["Pokemon"]["Group"].forEach(({ Game, Pokemon, Group }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Group !== undefined && { Group })
            });
        }
    });

    // Experience Yield
    finaldata["Pokemon"]["Experience Yield"].forEach(({ Game, Pokemon, Yield }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Yield !== undefined && { ["Experience Yield"]: Yield })
            });
        }
    });

    // Experience Yield
    finaldata["Pokemon"]["Experience Yield"].forEach(({ Game, Pokemon, Yield }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Yield !== undefined && { ["Experience Yield"]: Yield })
            });
        }
    });

    // Effort Value Yield
    finaldata["Pokemon"]["Effort Value Yield"].forEach(({ Game, Pokemon, HP, Attack, Defense, Special, SpAtk, SpDef, Speed, Total }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Effort Value Yield"]: {
                    ...(Data.Pokemon[pokemon_index]?.["Effort Value Yield"] || {}),
                    ...(HP !== undefined && { HP }),
                    ...(Attack !== undefined && { Attack }),
                    ...(Defense !== undefined && { Defense }),
                    ...(Special !== undefined && { Special }),
                    ...(SpAtk !== undefined && { SpAtk }),
                    ...(SpDef !== undefined && { SpDef }),
                    ...(Speed !== undefined && { Speed }),
                    /*...(Total !== undefined && { Total }),*/
                }
            });
        }
    });

    // Base Stats
    finaldata["Pokemon"]["Base Stats"].forEach(({ Game, Pokemon, HP, Attack, Defense, Special, SpAtk, SpDef, Speed, Total }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Base Stats"]: {
                    ...(Data.Pokemon[pokemon_index]?.["Base Stats"] || {}),
                    ...(HP !== undefined && { HP }),
                    ...(Attack !== undefined && { Attack }),
                    ...(Defense !== undefined && { Defense }),
                    ...(Special !== undefined && { Special }),
                    ...(SpAtk !== undefined && { SpAtk }),
                    ...(SpDef !== undefined && { SpDef }),
                    ...(Speed !== undefined && { Speed }),
                    ...(Total !== undefined && { Total }),
                }
            });
        }
    });

    // Base Friendship
    finaldata["Pokemon"]["Base Friendship"].forEach(({ Game, Pokemon, Friendship }) => {
        if (Config.Friendship && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Friendship !== undefined && { ["Base Friendship"]: Friendship })
            });
        }
    });


    // Shape
    finaldata["Pokemon"]["Shape"].forEach(({ Game, Pokemon, Shape }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Shape !== undefined && { Shape })
            });
        }
    });

    // Height
    finaldata["Pokemon"]["Height"].forEach(({ Game, Pokemon, Metric, Customary }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Height"]: {
                    ...(Data.Pokemon[pokemon_index]?.["Height"] || {}),
                    ...(Metric !== undefined && { Metric }),
                    ...(Customary !== undefined && { Customary })
                }
            });
        }
    });

    // Weight
    finaldata["Pokemon"]["Weight"].forEach(({ Game, Pokemon, Metric, Customary }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);
        
            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Weight"]: {
                    ...(Data.Pokemon[pokemon_index]?.["Weight"] || {}),
                    ...(Metric !== undefined && { Metric }),
                    ...(Customary !== undefined && { Customary })
                }
            });
        }
    });

    // Leveling Rate
    finaldata["Pokemon"]["Leveling Rate"].forEach(({ Game, Pokemon, ["Leveling Rate"]: Rate }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Rate !== undefined && { ["Leveling Rate"]: Rate })
            });
        }
    });

    // Catch Rate
    finaldata["Pokemon"]["Catch Rate"].forEach(({ Game, Pokemon, ["Catch Rate"]: Rate }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Rate !== undefined && { ["Catch Rate"]: Rate })
            });
        }
    });

    // Held Item
    finaldata["Pokemon"]["Held Item"].forEach(({ Game, Pokemon, Item, Rate }) => {
      if (Config.Held && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index]["Held Item"] = [
                ...(Data.Pokemon[pokemon_index]["Held Item"] || []),
                {
                    ...(Item !== undefined && { Item }),
                    ...(Rate !== undefined && { Rate })
                }
            ]);
        }
    });



    // Items

    // Overview
    finaldata["Items"]["Overview"].forEach(({ Game, Index, Active }) => {
        Active && get_applicable(Game) && ((Data.Items ||= {})[Index] = {} );
    });


    finaldata["Items"]["Overview"].forEach(({ Game, Index, Item, ID, File, Alias, Pocket }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Pokemon);

            Data.Items[item_index] && (Data.Items[item_index] = { 
                ...Data.Items[item_index],
                ...(Index !== undefined && { Index }),
                ...(Item !== undefined && { Item: [Item] }),
                ...(ID !== undefined && { ID }),
                ...(File !== undefined && { File }),
                ...(Alias !== undefined && { Alias }),
                ...(Pocket !== undefined && { Pocket }),
            }); 
        }
    });

    // Description
    finaldata["Items"]["Description"].forEach(({ Game, Index, Item, Description }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);

            Data.Items[item_index] && (Data.Items[item_index] = { 
                ...Data.Items[item_index],
                ...(Description !== undefined && { Description }),
            });
        }
    });

    // Type Enhance
    finaldata["Items"]["Type Enhance"].forEach(({ Game, Item, Type, Value, Pokemon }) => {
        if (get_applicable(Game)) {
            const item_index = get_itemIndex(Item);

            Data.Items[item_index] && (Data.Items[item_index] = {
                ...Data.Items[item_index],
                ["Type Enhance"]: { 
                    ...(Type !== undefined && { Type }),
                    ...(Value !== undefined && { Value }),
                    ...(Pokemon !== undefined && { Pokemon: parse_conjunctionSplit(Pokemon) }),
                }
            }); 
        }
    });


    // Effect
    finaldata["Items"]["Effect"].forEach(({ Game, Index, Item, Effect }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);

            Data.Items[item_index] && (Data.Items[item_index] = { 
                ...Data.Items[item_index],
                Effect: [
                    ...(Data.Items[item_index]?.Effect || []),
                    {
                        ...(Effect !== undefined && { Effect }),
                    }
                ]
            }); 
        }
    });

    // Sell
    finaldata["Items"]["Sell"].forEach(({ Game, Index, Item, Shop, Price, Currency,  }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);
        
            Data.Items[item_index] && (Data.Items[item_index] = { 
                ...Data.Items[item_index],
                ["Sell"]: [
                    ...(Data.Items[item_index]?.["Sell"] || []),
                    {
                        ...(Price !== undefined && { Price }),
                        ...(Currency !== undefined && { Currency }),
                        ...(Shop !== undefined && { Shop }),
                    }
                ]
            });

        }
    });


    // Abilities
    finaldata["Abilities"]["Overview"].forEach(({ Game, Ability, ID }) => {
        Config.Ability && get_applicable(Game) && ((Data.Abilities ||= {})[Ability] = {});
    });

    finaldata["Abilities"]["Overview"].forEach(({ Game, Ability, ID }) => {
        if (Config.Ability && get_applicable(Game)) {
            Data.Abilities[Ability] && (Data.Abilities[Ability] = {
                ...Data.Abilities[Ability],
                ...(ID !== undefined && { ID }),
                ...(Ability !== undefined && { Ability: [Ability] }),
            });
        }
    });


    // Description
    finaldata["Abilities"]["Description"].forEach(({ Game, Ability, Description }) => { 
        if (Config.Ability && get_applicable(Game)) {
            const ability_index = get_abilityIndex(Ability);

            Data.Abilities[ability_index] && (Data.Abilities[ability_index] = {
                ...Data.Abilities[ability_index],
                ...(Description !== undefined && { Description })
            }); 
        }
    });
    

    // Effect
    finaldata["Abilities"]["Effect"].forEach(({ Game, Ability, Effect }) => {
        if (Config.Ability && get_applicable(Game)) {
            const ability_index = get_abilityIndex(Ability);

            Data.Abilities[ability_index] && (Data.Abilities[ability_index] = {
                ...Data.Abilities[ability_index],
                Effect: [
                    ...(Data.Abilities[ability_index]?.Effect || []),
                    {
                        ...(Effect !== undefined && { Effect }),
                    }
                ]
            });
        }
    });
    

    // Category
    finaldata["Abilities"]["Category"].forEach(({ Game, Ability, Category }) => { 
        if (Config.Ability && get_applicable(Game)) {
            const ability_index = get_abilityIndex(Ability);

            Data.Abilities[ability_index] && (Data.Abilities[ability_index] = {
                ...Data.Abilities[ability_index],
                ...(Category !== undefined && { Category })
            });
        }
    });

    // Affect
    finaldata["Abilities"]["Affect"].forEach(({ Game, Ability, Name, Type, Boolean, Extra }) => {
        if (Config.Ability && get_applicable(Game)) {
            const ability_index = get_abilityIndex(Ability);

            Data.Abilities[ability_index] && (Data.Abilities[ability_index] = {
                ...Data.Abilities[ability_index],
                Affect: [
                    ...(Data.Abilities[ability_index]?.Affect || []),
                    {
                        ...(Name !== undefined && { Name }),
                        ...(Type !== undefined && { Type }),
                        ...(Boolean !== undefined && { Boolean }),
                        ...(Extra !== undefined && { Extra }),
                    }
                ]
            });
        }
    });

    // Pickup
    finaldata["Abilities"]["Pickup"].forEach(({ Game, Item, Index, Level, Area, Title, Header, Rate, Location, }) => {
        if (Config.Ability && get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);
            const ability_index = get_abilityIndex("Pickup");
    
            Data.Items[item_index] && Data.Abilities[ability_index] && (Data.Abilities[ability_index] = {
                ...Data.Abilities[ability_index],
                ["Item"]: [
                    ...(Data.Abilities[ability_index]?.["Item"] || []),
                    {
                        ...(Location !== undefined && { Location }),
                        ...(Area !== undefined && { Area }),
                        ...(Header !== undefined && { Header }),
                        ...(Title !== undefined && { Title }),
                        ...(Item !== undefined && { Item }),
                        ...(Level !== undefined && { ["Level"]: parse_levels(Level) }),
                        ...(Rate !== undefined && { Rate }),
                    }
                ]
            });
        }
    });

    // Moves
    finaldata["Moves"]["Overview"].forEach(({ Game, Move, Active }) => {
        Active && get_applicable(Game) && ((Data.Moves ||= {})[Move] = {["Move"]: [Move]} );
    });

    // Names
    finaldata["Moves"]["Alternate Name"].forEach(({ Game, Move, ["Alternate Name"]: Alternate }) => { 
        if (get_applicable(Game)) {
            Data.Moves[Move] && (Data.Moves[Move] = {
                ...Data.Moves[Move],
                Move: [
                    ...(Data.Moves[Move]?.Move || []),
                    ...(Alternate !== undefined ? [Alternate] : [])
                ]
            });
        }
    });


    // Group
    finaldata["Moves"]["Group"].forEach(({ Game, Move, Group }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Group !== undefined && { Group })
            });
        }
    });

    // Description
    finaldata["Moves"]["Description"].forEach(({ Game, Move, Description }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Description !== undefined && { Description })
            });
        }
    });

    // Contest
    finaldata["Moves"]["Contest"].forEach(({ Game, Move, Condition, Appeal, Jam, Description }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ["Contest"]: {
                    ...(Condition !== undefined && { Condition }),
                    ...(Appeal !== undefined && { Appeal }),
                    ...(Jam !== undefined && { Jam }),
                    ...(Description !== undefined && { Description }),
                }
            });
        }
    });


    // Super Contest
    finaldata["Moves"]["Super Contest"].forEach(({ Game, Move, Condition, Appeal, Jam, Description }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ["Super Contest"]: {
                    ...(Condition !== undefined && { Condition }),
                    ...(Appeal !== undefined && { Appeal }),
                    ...(Jam !== undefined && { Jam }),
                    ...(Description !== undefined && { Description }),
                }
            });
        }
    });

    // Contest Spectacular
    finaldata["Moves"]["Contest Spectacular"].forEach(({ Game, Move, Condition, Appeal, Jam, Description }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);
         
            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ["Contest Spectacular"]: {
                    ...(Condition !== undefined && { Condition }),
                    ...(Appeal !== undefined && { Appeal }),
                    ...(Jam !== undefined && { Jam }),
                    ...(Description !== undefined && { Description }),
                }
            });
        }
    });


    // Machine
    finaldata["Moves"]["Machine"].forEach(({ Game, Move, Machine }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Machine !== undefined && { Machine })
            });           
        }
    });


     // Range
     finaldata["Moves"]["Range"].forEach(({ Game, Move, Range }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Range !== undefined && { Range })
            });
        }
    });


    // Affect
    finaldata["Moves"]["Affect"].forEach(({ Game, Move, Contact, Protect, ["Magic Coat"]: MagicCoat, ["Magic Bounce"]: MagicBounce, Snatch, ["Mirror Move"]: MirrorMove, ["King's Rock"]: KingsRock, ["Sound-Based"]: SoundBased, ["Outside Battle"]: OutsideBattle, }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Contact !== undefined && { Contact }),
                ...(Protect !== undefined && { Protect }),
                ...(MagicCoat !== undefined && { ["Magic Coat"]: MagicCoat }),
                ...(MagicBounce !== undefined && { ["Magic Bounce"]: MagicBounce }),
                ...(Snatch !== undefined && { Snatch }),
                ...(MirrorMove !== undefined && { ["Mirror Move"]: MirrorMove }),
                ...(KingsRock !== undefined && { ["King's Rock"]: KingsRock }),
                ...(SoundBased !== undefined && { ["Sound-Based"]: SoundBased }),
                ...(OutsideBattle !== undefined && { ["Outside Battle"]: OutsideBattle }),
            });
        }
    });



    // Accuracy
    finaldata["Moves"]["Accuracy"].forEach(({ Game, Move, Accuracy }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Accuracy !== undefined && { Accuracy })
            });
        }
    });


    // Power
    finaldata["Moves"]["Power"].forEach(({ Game, Move, Power }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Power !== undefined && { Power })
            });
        }
    });

    // PP
    finaldata["Moves"]["PP"].forEach(({ Game, Move, Min, Max, }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ["PP"]: {
                    ...Data.Moves[move_index]?.["PP"],
                    ...(Min !== undefined && { Min }),
                    ...(Max !== undefined && { Max }),                         
                }
            });
        }
    });


    // Category
    finaldata["Moves"]["Category"].forEach(({ Game, Move, Category }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);
 
            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Category !== undefined && { Category })
            });
        }
    });


    // ID
    finaldata["Moves"]["ID"].forEach(({ Game, Move, ID }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);
      
            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(ID !== undefined && { ID })
            });
        }
    });
    

    // Type
    finaldata["Moves"]["Type"].forEach(({ Game, Move, Type }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Type !== undefined && { Type })
            });
        }
    });


    // Priority
    finaldata["Moves"]["Priority"].forEach(({ Game, Move, Priority }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Priority !== undefined && { Priority })
            });
        }
    });


    // Effect
    finaldata["Moves"]["Effect"].forEach(({ Game, Move, Effect }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                
                Effect: [
                    ...(Data.Moves[move_index]?.Effect || []),
                    {
                        ...(Effect !== undefined && { Effect }),
                    }
                ]

            });
        }
    });


    // Call
    finaldata["Moves"]["Call"].forEach(({ Game, Move, Call, Pokemon, Item, Type }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Call !== undefined && { Call }),
                ...(Pokemon !== undefined && { Pokemon }),
                ...(Item !== undefined && { Item }),
                ...(Type !== undefined && { Type }),
            });
        }
    });


    // Locations
    finaldata["Locations"]["Overview"].forEach(({ Game, Location }) => {
        get_applicable(Game) && ((Data.Locations ||= {})[Location] = {Location: [Location]} );
    });

    // Connection
    finaldata["Locations"]["Connection"].forEach(({ Game, Location, West, North, East, South, Located }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Connection"]: {
                    ...(Data.Locations[location_index]?.["Connection"] || {}),
                    ...(West !== undefined && { West: West.split(/[,]/) }),
                    ...(North !== undefined && { North: North.split(/[,]/) }),
                    ...(East !== undefined && { East: East.split(/[,]/) }),
                    ...(South !== undefined && { South: South.split(/[,]/) }),
                    ...(Located !== undefined && { Located: Located.split(/[,]/) }),
                }
            });
        }
    });


    // Navigation
    finaldata["Locations"]["Navigation"].forEach(({ Game, Location, Navigation, }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ...(Navigation !== undefined && { Navigation: Navigation ? parse_conjunctionSplit(Navigation) : [] }),
            });
        }
    });


    // Description
    finaldata["Locations"]["Description"].forEach(({ Game, Location, Area, Description, }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Description"]: {
                    ...(Area !== undefined && { Area }),
                    ...(Description !== undefined && { ["Text"]: Description }),
                }
            });
        }
    });

    // Slogan
    finaldata["Locations"]["Slogan"].forEach(({ Game, Location, Slogan, }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);
            
            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ...(Slogan !== undefined && { Slogan }),
            });
        }
    });


    // Move Tutor
    finaldata["Locations"]["Move Tutor"].forEach(({ Game, Location, Area, Title, Header, Move, Criteria, Note, Character, Cost, Currency, Pokemon, Rate, Field, Weather, Season, Day, Time }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            let cost = [];
            if (Cost !== undefined && Currency !== undefined) {
                const costs = String(Cost).split(/[,]/).map(cost => parseInt(cost.trim()));
                const currencies = String(Currency).split(/[,]/).map(currency => currency.trim());
                const maxLength = Math.max(costs.length, currencies.length);
                cost = Array.from({ length: maxLength }, (_, i) => {
                    return {
                        Cost: costs[i] || 0,
                        Currency: currencies[i] || ""
                    };
                });
            }

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Move Tutor"]: [
                    ...(Data.Locations[location_index]?.["Move Tutor"] || []),
                    {
                    ...(Area !== undefined && { Area }),
                    ...(Title !== undefined && { Title }),
                    ...(Header !== undefined && { Header }),
                    ...(Move !== undefined && { Move }),
                    ...(Criteria !== undefined && { Criteria }),
                    ...(Note !== undefined && { Note }),
                    ...(Character !== undefined && { Character }),
                    ...(cost.length > 0 && { ["Cost"]: cost }),
                    ...(Pokemon !== undefined && { Pokemon: Pokemon ? parse_conjunctionSplit(Pokemon) : [] }),
                    ...(Rate !== undefined && { Rate }),
                    ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                    ...(Weather !== undefined && { Weather: parse_conjunctionSplit(Weather) }),
                    ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                    ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                    ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                    }
                ]
            });
        }
    });


    // Point of Interest
    finaldata["Locations"]["Point of Interest"].forEach(({ Game, Location, Point, Located, Description, }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Point of Interest"]: [
                    ...(Data.Locations[location_index]?.["Point of Interest"] || []),
                    {
                        ...(Point !== undefined && { Point }),
                        ...(Located !== undefined && { Located }),
                        ...(Description !== undefined && { Description }),
                    }
                ]
            });
        }
    });


    // Location Trainers

    // Trainers
    finaldata["Location Trainers"]["Trainers"].forEach(({ Game, Index, Location, Area, Title, Header, Season, Day, Time, Field, Class, Trainer, Gender, Image, ["Battle Type"]: BattleType, Note, Item, ["Item Quantity"]: ItemQuantity, Reward, ["Reward Quantity"]: RewardQuantity, Pokemon  }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Trainer"]: [
                    ...(Data.Locations[location_index]?.["Trainer"] || []),
                    {
                        ...(Index !== undefined && { Index }),
                        ...(Trainer !== undefined && { Trainer }),
                        ...(Class !== undefined && { Class }),
                        ...(Gender !== undefined && { Gender }),
                        ...(BattleType !== undefined && { ["Battle Type"]: BattleType }),
                        ...(Title !== undefined && { Title }),
                        ...(Area !== undefined && { Area }),
                        ...(Header !== undefined && { Header }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Image !== undefined && { Image }),
                        ...(Note !== undefined && { Note }),
                        ...(Item !== undefined && {
                            ["Item"]: {
                                 Item,
                                ...(ItemQuantity !== undefined && { ["Quantity"]: ItemQuantity  }),
                            },
                        }),
                        ...(Reward !== undefined && {
                            ["Reward"]: {
                                Reward,
                                ...(RewardQuantity !== undefined && { ["Quantity"]: RewardQuantity  }),
                            },
                        }),
                    }
                ]
            });
        }
    });


    finaldata["Location Trainers"]["Pokemon"].forEach(({ Game, Trainer, Location, Pokemon, Header, Gender, Level, Ability, Move, IV, EV, Item, Nature }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);
    
            if (Data.Locations[location_index]) {
                const trainers = Data.Locations[location_index]["Trainer"] || [];
    
                // Find the trainer with the matching index
                const trainerIndex = trainers.findIndex(t => t.Index === Trainer);
    
                if (trainerIndex !== -1) {
                    // Add the Pokémon to the existing trainer
                    trainers[trainerIndex]["Pokemon"] = [
                        ...(trainers[trainerIndex]["Pokemon"] || []),
                        {
                            ...(Pokemon !== undefined && { Pokemon }),
                            ...(Header !== undefined && { Header }),
                            ...(Gender !== undefined && { Gender }),
                            ...(Level !== undefined && { Level }),
                            ...(Ability !== undefined && { Ability: Ability.split(/[\/]/) }),
                            ...(Move !== undefined && { Move: Move.split(/[,]/) }),
                            ...(IV !== undefined && { IV: format_V(IV) }),
                            ...(EV !== undefined && { EV: format_V(EV) }),
                            ...(Item !== undefined && { Item }),
                            ...(Nature !== undefined && { Nature }),
                        }
                    ];
                } else {
                    console.warn("Did not find the correct Trainer.")
                }
    
                // Update the location's trainers
                Data.Locations[location_index]["Trainer"] = trainers;
            }
        }
    });



    // Location Items

    // Items
    finaldata["Location Items"]["Items"].forEach(({ Game, Location, Area, Title, Header, Image, Item, Index, Quantity, Description, Season, Day, Time, Field, Hidden,  }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Item"]: [
                    ...(Data.Locations[location_index]?.["Item"] || []),
                    {
                        ...(Item !== undefined && { Item }),
                        ["Quantity"]: Quantity || 1,
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Description !== undefined && { Description }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Hidden !== undefined && { Hidden }),
                        ...(Image !== undefined && { Image }),
                        ...(Index !== undefined && { Index }),
                    }
                ]
            });


            Data.Items[item_index] && (Data.Items[item_index] = {
                ...Data.Items[item_index],
                ["Location"]: [
                    ...(Data.Items[item_index]?.["Location"] || []),
                    {
                        ...(Location !== undefined && { Location }),
                        ["Quantity"]: Quantity || 1,
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Description !== undefined && { Description }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Hidden !== undefined && { Hidden }),
                        ...(Image !== undefined && { Image }),
                    }
                ]
            });
        }
    });



    // Currency
    finaldata["Location Items"]["Currency"].forEach(({ Game, Location, Area, Title, Header, Image, Currency, Quantity, Description, Season, Day, Time, Field, Hidden,  }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Currency"]: [
                    ...(Data.Locations[location_index]?.["Currency"] || []),
                    {
                        ...(Currency !== undefined && { Currency }),
                        ["Quantity"]: Quantity || 1,
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Description !== undefined && { Description }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Hidden !== undefined && { Hidden }),
                        ...(Image !== undefined && { Image }),
                    }
                ]
            });
        }
    });


    // Shop
    finaldata["Location Items"]["Shop"].forEach(({ Game, Location, Area, Title, Header, Shop, Note, Criteria, Item, Index, Cost, Quantity, Currency, Season, Day, Time, Field  }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);
            const location_index = get_locationIndex(Location);
            
            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Shop"]: [
                    ...(Data.Locations[location_index]?.["Shop"] || []),
                    {
                        ...(Item !== undefined && { Item }),
                        ["Quantity"]: Quantity || 1,
                        ...(Shop !== undefined && { Shop }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Cost !== undefined && { Cost }),
                        ...(Currency !== undefined && { Currency }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        
                    }
                ]
            });

            Data.Items[item_index] && (Data.Items[item_index] = {
                ...Data.Items[item_index],
                ["Shop"]: [
                    ...(Data.Items[item_index]?.["Shop"] || []),
                    {
                        ...(Location !== undefined && { Location }),
                        ["Quantity"]: Quantity || 1,
                        ...(Shop !== undefined && { Shop }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Cost !== undefined && { Cost }),
                        ...(Currency !== undefined && { Currency }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                    }
                ]
            });
        }
    });

    // Location Pokemon

    // Pokemon
    finaldata["Location Pokemon"]["Pokemon"].forEach(({ Game, Location, Pokemon, Area, Title, Header, Note, Criteria, Field, Allies, Held, Move, Tile, Encounter, Level, Item, Weather, Day, Season, Time, Rate, ["Shiny Rate"]: ShinyRate, ["Catch Rate"]: CatchRate, Gender, Ability   }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);
            const location_index = get_locationIndex(Location);
            
            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Pokemon"]: [
                    ...(Data.Locations[location_index]?.["Pokemon"] || []),
                    {
                        ...(Pokemon !== undefined && { Pokemon }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Held !== undefined && { Held }),
                        ...(Allies !== undefined && { Allies: Allies.split(/[,]/) }),
                        ...(Tile !== undefined && { Tile: parse_conjunctionSplit(Tile) }),
                        ...(Encounter !== undefined && { Encounter }),
                        ...(Level !== undefined && { ["Level"]: parse_levels(Level) }),
                        ...(Item !== undefined && { Item: parse_conjunctionSplit(Item) }),
                        ...(Move !== undefined && { Move: parse_conjunctionSplit(Move) }),
                        ...(Weather !== undefined && { Weather: parse_conjunctionSplit(Weather) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Rate !== undefined && { Rate }),
                        ...(ShinyRate !== undefined && { ["Shiny Rate"]: ShinyRate }),
                        ...(CatchRate !== undefined && { ["Catch Rate"]: CatchRate }),
                        ...(Gender !== undefined && { Gender }),
                        ...(Ability !== undefined && { Ability }),
                        
                    }
                ]
            });

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Location"]: [
                    ...(Data.Pokemon[pokemon_index]?.["Location"] || []),
                    {
                        ...(Location !== undefined && { Location }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Held !== undefined && { Held }),
                        ...(Allies !== undefined && { Allies: parse_conjunctionSplit(Allies) }),
                        ...(Tile !== undefined && { Tile: parse_conjunctionSplit(Tile) }),
                        ...(Encounter !== undefined && { Encounter }),
                        ...(Level !== undefined && { Level: parse_levels(Level) }),
                        ...(Item !== undefined && { Item: parse_conjunctionSplit(Item) }),
                        ...(Weather !== undefined && { Weather: parse_conjunctionSplit(Weather) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Rate !== undefined && { Rate }),
                        ...(ShinyRate !== undefined && { ["Shiny Rate"]: ShinyRate }),
                        ...(CatchRate !== undefined && { ["Catch Rate"]: CatchRate }),
                        ...(Gender !== undefined && { Gender }),
                        ...(Ability !== undefined && { Ability }),
                        
                    }
                ]
            });

        }
    });


    // Shop
    finaldata["Location Pokemon"]["Shop"].forEach(({ Game, Location, Shop, Area, Title, Header, Note, Criteria, Pokemon, Level, Cost, Currency,  }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);
            const location_index = get_locationIndex(Location);
            
            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Shop"]: [
                    ...(Data.Locations[location_index]?.["Shop"] || []),
                    {
                        ...(Shop !== undefined && { Shop }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Pokemon !== undefined && { Pokemon }),
                        ...(Level !== undefined && { ["Level"]: parse_levels(Level) }),
                        ...(Cost !== undefined && { Cost }),
                        ...(Currency !== undefined && { Currency: parse_conjunctionSplit(Currency) }),
                    }
                ]
            });

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Shop"]: [
                    ...(Data.Pokemon[pokemon_index]?.["Shop"] || []),
                    {
                        ...(Location !== undefined && { Location }),
                        ...(Shop !== undefined && { Shop }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Level !== undefined && { ["Level"]: parse_levels(Level) }),
                        ...(Cost !== undefined && { Cost }),
                        ...(Currency !== undefined && { Currency: parse_conjunctionSplit(Currency) }),
                    }
                ]
            });

        }
    });
    
    // Learnset

    // Evolution
    finaldata["Pokemon Learnset"]["Evolution"].forEach(({ Game, Pokemon, Move, Evolution, Extra }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Learnset: [
                    ...(Data.Pokemon[pokemon_index]?.Learnset || []),
                    {
                        Type: "Evolution",
                        ...(Move !== undefined && { Move }),
                        ...(Evolution !== undefined && { Evolution: Evolution.split(/[,]/) }),
                        ...(Extra !== undefined && { Extra }),
                    }
                ]
            });
        }
    });

    // Level Up
    finaldata["Pokemon Learnset"]["Level Up"].forEach(({ Game, Pokemon, Move, Factor }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Learnset: [
                    ...(Data.Pokemon[pokemon_index]?.Learnset || []),
                    {
                        Type: "Level Up",
                        ...(Move !== undefined && { Move }),
                        ...(Factor !== undefined && { Factor }),
                    }
                ]
            });
        }
    });

    // Machine
    finaldata["Pokemon Learnset"]["Machine"].forEach(({ Game, Pokemon, Move, Machine }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Learnset: [
                    ...(Data.Pokemon[pokemon_index]?.Learnset || []),
                    {
                        Type: "Machine",
                        ...(Move !== undefined && { Move }),
                        ...(Machine !== undefined && { Machine }),
                    }
                ]
            });
        }
    });

    // Breeding
    finaldata["Pokemon Learnset"]["Breeding"].forEach(({ Game, Pokemon, Move, Parent, Item, Extra }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Learnset: [
                    ...(Data.Pokemon[pokemon_index]?.Learnset || []),
                    {
                        Type: "Breeding",
                        ...(Move !== undefined && { Move }),
                        ...(Parent !== undefined && { Parent: Parent.split(/[,]/) }),
                        ...(Item !== undefined && { Item }),
                        ...(Extra !== undefined && { Extra }),
                    }
                ]
            });
        }
    });

    // Tutor
    finaldata["Pokemon Learnset"]["Tutor"].forEach(({ Game, Pokemon, Move }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon); 
            const Location = Object.keys(Data.Locations).reduce((found, location) => { const tutor = Data.Locations[location]["Move Tutor"]; const hasMove = tutor && tutor.some(tutorItem => tutorItem.Move === Move); if (hasMove) { found = location; }  return found; }, null);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Learnset: [
                    ...(Data.Pokemon[pokemon_index]?.Learnset || []),
                    {
                        Type: "Tutor",
                        ...(Move !== undefined && { Move }),
                        ...(Location !== undefined && { Location }),
                    }
                ]
            });
        }
    });


}
