async function load_debug() {
    for (const json of Object.keys(json_url)) {
        await load_dataset(json_url[json]);
    }
    document.querySelector("button").style.removeProperty("display");
}
async function start_debug(event) {
    event.target.innerText = "Debugging";
    document.body.style.cursor = "wait";
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";
    await new Promise(resolve => setTimeout(resolve, 1000));
    //await debug_locationDirection()
    //await debug_pokemonImagesBattle();
    await debug_gameProperty();
    document.body.style.removeProperty("cursor");
    event.target.innerText = "Debug";
}

function debug_pokemonImagesBattle() {
    const InitialTime = new Date();

    console.group("Missing Pokémon Images");
    Data.Games.forEach(g => {
        const invalid = [];
        finaldata.Pokemon.File.forEach(d => {
            finaldata.Pokemon.Overview.forEach(v => {
                if (v.Active && v.Pokemon === d.Pokemon && get_applicable(v.Game,g)) {
                    const directory = get_directory({FirstMatch: true, Exact: true, File: [String(d.File)], Path: [Path.Pokemon.Battle.Default.Front.GIF, Path.Pokemon.Battle.Default.Front.PNG, Path.Pokemon.Menu.Default], Game: [g]})
                    if (directory === "") {
                        invalid.push(`${d.Pokemon} (${d.File})`);
                    }
                }
            });
        });
        if (invalid.length > 0) {
            console.log(`${g}:`)
            console.log(invalid)
        }
    });

    const LoadTime = format_time(new Date() - InitialTime);
	console.log("Elapsed Time: " + LoadTime);
    console.groupEnd();

}

function debug_locationDirection() {
    const InitialTime = new Date();

    const directions = ["North", "South", "East", "West"];
    const oppositeDirections = {
        "North": "South",
        "South": "North",
        "East": "West",
        "West": "East",
    };

    console.group("Location Directions");
    const locations = finaldata.Locations.Connection;
    locations.forEach(location => {
        directions.forEach(direction => {
            if (location[direction]) {
                const connectedLocations = location[direction].split(",");
                connectedLocations.forEach(connectedLocation => {
                    const connected = locations.find(loc => loc.Location === connectedLocation.trim());
                    if (connected) {
                        const oppositeDirection = oppositeDirections[direction];
                        const locationGames = location.Game.split(",");
                        const connectedGames = connected.Game.split(",");
                        const commonGames = locationGames.some(game => connectedGames.includes(game));
                        if (commonGames) {
                            if (connected[oppositeDirection]) {
                                const oppositeLocations = connected[oppositeDirection].split(",");
                                if (!oppositeLocations.includes(location.Location)) {
                                    console.log(`Mismatch: ${location.Location} ${direction} -> ${connectedLocation.trim()} but ${connectedLocation.trim()} ${oppositeDirection} -> ${connected[oppositeDirection]}`);
                                }
                            } else {
                                console.log(`Mismatch: ${location.Location} ${direction} -> ${connectedLocation.trim()} but ${connectedLocation.trim()} has no ${oppositeDirection}`);
                            }
                        }
                    } else {
                        console.log(`Mismatch: ${location.Location} ${direction} -> ${connectedLocation.trim()} but ${connectedLocation.trim()} not found`);
                    }
                });
            }
        });
    });
    const LoadTime = format_time(new Date() - InitialTime);
	console.log("Elapsed Time: " + LoadTime);
    console.groupEnd();
}

function debug_gameProperty() {
    const InitialTime = new Date();

    const reference_array = [...(Data.Games),"1","2","3","4","5","6","7","8","9","Battle Revolution","Stadium","Stadium 2","Legend Arceus","Scarlet","Violet","Shining Pearl","Brilliant Diamond","All"];
    
    console.group("Game Properties");
    Object.keys(finaldata).forEach(dataKey => {
        Object.keys(finaldata[dataKey]).forEach(subKey => {
            if (Array.isArray(finaldata[dataKey][subKey])) {
                finaldata[dataKey][subKey].forEach(entry => {
                    if (entry.hasOwnProperty('Game')) {
                        const gameValues = String(entry.Game).split(/[,]/);
                        gameValues.forEach(game => {
                            if (!reference_array.includes(game.replace(/-.*/,''))) {
                                console.log(`${dataKey} -> ${subKey}:\n${game}`);
                            }
                        });
                    }
                });
            }
        });
    });
    const LoadTime = format_time(new Date() - InitialTime);
	console.log("Elapsed Time: " + LoadTime);
    console.groupEnd();

}