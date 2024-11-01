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
*/