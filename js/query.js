function get_applicable(value, game) {

    const values = Array.isArray(value) ? value : String(value).split(/[,_]/);
    const games = game !== undefined ? (Array.isArray(game) ? game : String(game).split(/[,_]/)) : [Config.Game];

    for (const g of games) {
        const game_generation = !parseInt(g) ? get_generation(g) : g;
        const game_id = !parseInt(g) ? get_gameid(g) : null;

        for (const v of values) {
            if (v === "All" || g === "All" || String(v) === String(g) || String(v) == game_generation || (parseInt(g) && String(v) == g) || (parseInt(g) && get_generation(v) == g)) {
                return true;
            }

            const operator = v[v.length - 1];
            const generation_check = parseInt(v.replaceAll("+", "").replaceAll("-", ""));
            
            // Example: 6+ --> Generation: 6+, if generation of current game is 6 or higher then give true
            if (!isNaN(generation_check) && (operator === "-" || operator === "+")) {
                if ((operator === "-" && game_generation <= generation_check) || 
                    (operator === "+" && game_generation >= generation_check)) {
                    return true;
                }
            } else if (v.includes("-")) {
                const [start, end] = v.split("-");
                const [generation_start, generation_end] = [Math.min(start, end), Math.max(start, end)].map(Number);

                if (!isNaN(generation_start) && !isNaN(generation_end)) { // Example: 5-6 --> Generation 5 to 6, if generation of current game is either 5 or 6 then give true
                    if (game_generation >= generation_start && game_generation <= generation_end) {
                        return true;
                    }
                } else { // Example: Ruby-Sun --> Ruby (id: 7) to Sun (id: 27), if game id of current game is between 7 and 27 then give true
                    const [gameId1, gameId2] = [get_gameid(start), get_gameid(end)];
                    if (gameId1 > 0 && gameId2 > 0 && (game_id >= Math.min(gameId1, gameId2) && game_id <= Math.max(gameId1, gameId2))) {
                        return true;
                    }
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
                const matchesPath = options.Exact ? baseKey === comparisonPath : baseKey.includes(comparisonPath);
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


function get_arraykey(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let keys = Object.keys(arr[i])
     
        for (let k = 0; k < keys.length; k++) {
            if (keys[k].includes("\n")) {
                res.push(keys[k])
            }
        }
    }

    res = [...new Set(res)];

    let result = [];
    for (let i = 0; i < res.length; i++) {
        if (get_applicable(res[i].split("\n")[1])) {
            result[res[i].split("\n")[0]] = res[i]
        }
    }
    return result;

}



function get_gameid(name) {

    if (name.toLowerCase() === "random") {
        return Math.floor(Math.random() * Data.Games.length) + 1;
    }

    const index = Data.Games.map(game => game.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')).indexOf(name.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''));
    if (index !== 0) {
        return index+1;
    }

    return null;
}

function get_game(id) {
    return Data.Games[id - 1] != undefined ? Data.Games[id - 1] : null;
}
function get_generation(game) {
    
    const index = typeof game === 'string' ? get_gameid(game) : game;

    if (index >= 1 && index <= 3) return 1;
	else if (index >= 4 && index <= 6) return 2;
	else if (index >= 7 && index <= 13) return 3;
	else if (index >= 14 && index <= 18) return 4;
	else if (index >= 19 && index <= 22) return 5;
	else if (index >= 23 && index <= 26) return 6;
	else if (index >= 27 && index <= 32) return 7;
	else if (index >= 33 && index <= 34) return 8;
    
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
