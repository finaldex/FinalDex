async function load_debug() {
    for (const json of Object.keys(json_url)) {
        await load_dataset(json_url[json]);
    }
}
async function start_debug(event) {
    await (async (event) => { event.target.innerText = "Debugging"; })(event);
    //await debug_locationDirection()
    await debug_pokemonImagesBattle();
}

function debug_pokemonImagesBattle() {

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
    console.groupEnd();

}

function debug_locationDirection() {

    const directions = ["North", "South", "East", "West"];
    const oppositeDirections = {
        "North": "South",
        "South": "North",
        "East": "West",
        "West": "East",
    };

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
}