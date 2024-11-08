function get_applicable(value, game) {
    const values = Array.isArray(value) ? value : String(value).split(/[,_]/);
    const games = game !== undefined ? (Array.isArray(game) ? game : String(game).split(/[,_]/)) : [Config.Game];

    const checkRange = (start, end, target) => {
        const [gameId1, gameId2] = [get_game(start), get_game(end)];
        const targetId = get_game(target);
        return gameId1 > 0 && gameId2 > 0 && targetId > 0 && (targetId >= Math.min(gameId1, gameId2) && targetId <= Math.max(gameId1, gameId2));
    };

    for (const g of games) {
        if (g === "All") { return true; }

        const game_generation = !parseInt(g) ? get_generation(g) : parseInt(g);
        const game_id = !parseInt(g) ? get_game(g) : null;

        for (const v of values) {
            if (v === "All") { return true; }

            const value_generation = !parseInt(v) ? get_generation(v) : parseInt(v);
            const value_id = !parseInt(v) ? get_game(v) : null;

            // Check if the value is a range
            if (String(v).includes("-")) {
                const [start, end] = v.split("-");
                const [generation_start, generation_end] = [Math.min(start, end), Math.max(start, end)];

                if (!isNaN(generation_start) && !isNaN(generation_end)) {
                    // Example: 5-6 --> Generation 5 to 6
                    if (game_generation >= generation_start && game_generation <= generation_end) {
                        return true;
                    }
                } else {
                    // Example: Ruby-Sun --> Ruby (id: 7) to Sun (id: 27)
                    if (checkRange(start, end, g)) {
                        return true;
                    }
                }
            } else if (String(g).includes("-")) {
                const [start, end] = g.split("-");
                const [generation_start, generation_end] = [Math.min(start, end), Math.max(start, end)];

                if (!isNaN(generation_start) && !isNaN(generation_end)) {
                    // Example: 5-6 --> Generation 5 to 6
                    if (value_generation >= generation_start && value_generation <= generation_end) {
                        return true;
                    }
                } else {
                    // Example: Ruby-Sun --> Ruby (id: 7) to Sun (id: 27)
                    if (checkRange(start, end, v)) {
                        return true;
                    }
                }
            } else {
                // Check if the value is a single generation or game
                if (value_id && game_id && value_id === game_id || g === v) {
                    return true;
                }
                if (parseInt(g) && game_generation == value_generation || parseInt(v) && game_generation == value_generation) {
                    return true;
                }
            }
        }
    }

    return false;
}


function get_directory(parameters = {}) {
    // Default options merged with incoming options
    const options = {
        File: [""],
        Path: [],
        Case: false,
        Exact: false,
        FirstMatch: false,
        Game: [Config.Game],
        ...parameters // Spread operator to merge
    };

    if (!finaldata["Directory"]) { return options.FirstMatch ? "" : [] }

    const results = [];

    const removeExtension = (v) => v.replace(/\.[^.]+$/, ""); // Remove the last extension from the file name
    const removeExtra = (v) => v.replace(/_[^_]+$/, ""); // Remove everything after "_" from the file name
    
    const filteredFiles = options.File.filter(v => v !== undefined && v !== null).map(v => String(v));
    const filteredPaths = options.Path.filter(v => v !== undefined && v !== null).map(v => String(v));

    // Iterate through each file in the order specified
    for (const file of filteredFiles) {
        for (const path of filteredPaths) {
            for (const [key, value] of Object.entries(finaldata["Directory"])) {
                const applicableKey = key.split(/[/]/).pop();
                if (!get_applicable(applicableKey, options.Game)) continue;

                const comparisonKey = options.Case ? key : key.toLowerCase();
                const comparisonPath = options.Case ? path : path.toLowerCase();

                // Remove everything after the last "/" in comparisonKey
                const baseKey = comparisonKey.substring(0, comparisonKey.lastIndexOf('/') + 1);

                // Check if the path matches
                const matchesPath = baseKey.includes(comparisonPath);
                if (!matchesPath) continue;

                const comparisonFile = options.Case ? file : file.toLowerCase();
                const strippedFile = removeExtension(comparisonFile); // Remove extra/extension for matching

                const matchingFiles = value.filter(v => {
                    const comparisonV = options.Case ? v : v.toLowerCase();
                    const strippedV = removeExtension(comparisonV);
                    return options.Exact ? (strippedV === comparisonFile || removeExtra(strippedV) === comparisonFile) : strippedV.includes(comparisonFile) || removeExtra(strippedV).includes(comparisonFile);
                });

                // If matching files found, add to results
                for (const match of matchingFiles) {
                    if (options.FirstMatch) {
                        return `${key}/${match}`;
                    }
                    else {
                        results.push(`${key}/${match}`);
                    }
                }
            }
        }
    }

    return options.FirstMatch ? "" : results; // Return all results if FirstMatch is false
}





function get_game(value) {
    if (typeof value === 'string') {
        for (const [key, val] of Object.entries(Games)) {
            if (key.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()) {
                return val.ID;
            }
        }
    } else if (typeof value === 'number') {
        for (const [key, val] of Object.entries(Games)) {
            if (val.ID === value) {
                return key;
            }
        }
    }
    return null;
}
function get_generation(value) {
    if (typeof value === 'string') {
        for (const [key, val] of Object.entries(Games)) {
            if (key.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()) {
                return val.Generation;
            }
        }
    } else if (typeof value === 'number') {
        for (const [key, val] of Object.entries(Games)) {
            if (val.ID === value) {
                return val.Generation;
            }
        }
    }
    return null;
}


function get_pokemonIndex(pokemon) {
    if (Data.Pokemon[pokemon]) { return pokemon; }

    const search1 = Object.keys(Data.Pokemon).find(key => Data.Pokemon[key].Pokemon && Data.Pokemon[key].Pokemon === pokemon);
    if (search1) { return get_defaultPokemon(search1); }

    const search2 = Object.keys(Data.Pokemon).find(key => Data.Pokemon[key].Pokemon && Data.Pokemon[key].Pokemon.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "") === pokemon.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, ""));
    if (search2) { return get_defaultPokemon(search2); }

    return null;
}

function get_itemIndex(item) {
    if (Data.Items[item]) { return item; }

    const search1 = Object.keys(Data.Items).find(key => Data.Items[key].Item && Data.Items[key].Item.includes(item));
    if (search1) { return search1; }

    const search2 = Object.keys(Data.Items).find(key => Data.Items[key].Item && Data.Items[key].Item.some(i => i.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "") === item.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "")));
    if (search2) { return search2; }

    return null;
}

function get_abilityIndex(ability) {
    if (Data.Abilities[ability]) { return ability; }

    const search1 = Object.keys(Data.Abilities).find(key => Data.Abilities[key].Ability && Data.Abilities[key].Ability.includes(ability));
    if (search1) { return search1; }

    const search2 = Object.keys(Data.Abilities).find(key => Data.Abilities[key].Ability && Data.Abilities[key].Ability.some(i => i.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "") === ability.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "")));
    if (search2) { return search2; }

    return null;
}

function get_locationIndex(location) {
    if (Data.Locations[location]) { return location; }

    const search1 = Object.keys(Data.Locations).find(key => Data.Locations[key].Location && Data.Locations[key].Location.includes(location));
    if (search1) { return search1; }

    const search2 = Object.keys(Data.Locations).find(key => Data.Locations[key].Location && Data.Locations[key].Location.some(i => i.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "") === location.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "")));
    if (search2) { return search2; }

    return null;
}

function get_moveIndex(move) {
    if (Data.Moves[move]) { return move; }

    const search1 = Object.keys(Data.Moves).find(key => Data.Moves[key].Move && Data.Moves[key].Move.includes(move) )
    if (search1) { return search1; }

    const search2 = Object.keys(Data.Moves).find(key => Data.Moves[key].Move && Data.Moves[key].Move.some(i => i.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "") === move.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "") ));
    if (search2) { return search2; }

    return null;
}




function get_defaultPokemon(targetPokemon) {

    let defaultPokemon = null;
    let maxKeys = 0;
    let targetSpecie = Data.Pokemon[targetPokemon] ? Data.Pokemon[targetPokemon].Pokemon : targetPokemon;

    for (const key in Data.Pokemon) {
        const pokemonEntry = Data.Pokemon[key];

        // Check if the Pokemon matches the target
        if (pokemonEntry.Pokemon === targetSpecie) {
            // Count the number of keys in the current pokemonEntry
            const numberOfKeys = Object.keys(pokemonEntry).length;

            // Update if this entry has more keys
            if (numberOfKeys > maxKeys) {
                maxKeys = numberOfKeys;
                defaultPokemon = key;
            }
        }
    }

    return defaultPokemon;
}
