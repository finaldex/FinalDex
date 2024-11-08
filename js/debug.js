const list = document.querySelector("ul");

async function load_debug() {
    for (const json of Object.keys(json_url)) {
        await load_dataset(json_url[json]);
    }
    document.body.classList.add("active")
}
async function start_debug(event,debug) {
    event.target.classList.add("active");
    document.body.style.cursor = "wait";
    await new Promise(resolve => setTimeout(resolve, 1000));
    await debug();
    document.body.style.removeProperty("cursor");
    event.target.classList.remove("active");
}



function debug_imagePokemonBattle() {

    list.innerHTML = "";
    const InitialTime = new Date();

    console.group("Missing Pokémon Battle Images");
    Object.keys(Games).forEach(g => {
        const invalid = [];
        finaldata.Pokemon.File.forEach(d => {
            finaldata.Pokemon.Overview.forEach(v => {
                if (v.Active && v.Pokemon === d.Pokemon && get_applicable(v.Game,g)) {
                    const directory = get_directory({FirstMatch: true, Exact: true, File: [String(d.File)], Path: [Path.Pokemon.Battle.Default.Front.GIF, Path.Pokemon.Battle.Default.Front.PNG,Path.Pokemon.Menu.Default], Game: [g]})
                    if (directory === "") {
                        invalid.push(`${d.Pokemon} (${d.File})`);
                    }
                }
            });
        });
        if (invalid.length > 0) {
            console.log(`${g}:`)
            console.log(invalid)
            list.innerText += `\n${g}:\n`
            invalid.forEach(i => {
                list.innerText += `${i}:\n`
            });
        }
    });

    const LoadTime = format_time(new Date() - InitialTime);
    list.innerText += "\nElapsed Time: " + LoadTime;
	console.log("Elapsed Time: " + LoadTime);
    console.groupEnd();

}

function debug_imagePokemonBox() {

    list.innerHTML = "";
    const InitialTime = new Date();

    console.group("Missing Pokémon Box Images");
    Object.keys(Games).forEach(g => {
        const invalid = [];
        finaldata.Pokemon.File.forEach(d => {
            finaldata.Pokemon.Overview.forEach(v => {
                if (v.Active && v.Pokemon === d.Pokemon && get_applicable(v.Game,g)) {
                    const directory = get_directory({FirstMatch: true, Exact: true, File: [String(d.File)], Path: [Path.Pokemon.Box.Default.PNG,Path.Pokemon.Box.Default.GIF], Game: [g]})
                    if (directory === "") {
                        invalid.push(`${d.Pokemon} (${d.File})`);
                    }
                }
            });
        });
        if (invalid.length > 0) {
            console.log(`${g}:`)
            console.log(invalid)
            list.innerText += `\n${g}:\n`
            invalid.forEach(i => {
                list.innerText += `${i}:\n`
            });
        }
    });

    const LoadTime = format_time(new Date() - InitialTime);
    list.innerText += "\nElapsed Time: " + LoadTime;
	console.log("Elapsed Time: " + LoadTime);
    console.groupEnd();

}

function debug_imageItem() {

    list.innerHTML = "";
    const InitialTime = new Date();

    console.group("Missing Item Images");
    Object.keys(Games).forEach(g => {
        const invalid = [];
        finaldata.Items.Overview.forEach(d => {
            if (d.Active && get_applicable(d.Game,g) && d.File) {
                const directory = get_directory({FirstMatch: true, Exact: true, File: [String(d.File),String(d.Item)], Path: [Path.Item.Bag], Game: [g]})
                if (directory === "") {
                    invalid.push(`${d.Item} (${d.File})`);
                }
            }
        });
        if (invalid.length > 0) {
            console.log(`${g}:`)
            console.log(invalid)
            list.innerText += `\n${g}:\n`
            invalid.forEach(i => {
                list.innerText += `${i}:\n`
            });
        }
    });

    const LoadTime = format_time(new Date() - InitialTime);
    list.innerText += "\nElapsed Time: " + LoadTime;
	console.log("Elapsed Time: " + LoadTime);
    console.groupEnd();

}

function debug_locationDirection() {

    list.innerHTML = "";
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
                    const connected = locations.find(loc => loc.Location === connectedLocation);
                    if (connected) {
                        const oppositeDirection = oppositeDirections[direction];
                        const locationGames = location.Game.split(",");
                        const connectedGames = connected.Game.split(",");
                        const commonGames = locationGames.some(game => connectedGames.includes(game));
                        if (commonGames) {
                            if (connected[oppositeDirection]) {
                                const oppositeLocations = connected[oppositeDirection].split(",");
                                if (!oppositeLocations.includes(location.Location)) {
                                    const txt = `${location.Location}\n${direction} -> ${connectedLocation}\n${connectedLocation} has no ${oppositeDirection}\n${location.Game}`
                                    list.innerText += "\n"+txt+"\n"
                                    console.log(txt);
                                }
                            } else {
                                const txt = `${location.Location}\n${direction} -> ${connectedLocation}\n${connectedLocation} has no ${oppositeDirection}\n${location.Game}`
                                list.innerText += "\n"+txt+"\n"
                                console.log(txt);
                            }
                        }
                    } else {
                        const txt = `${location.Location}\n${direction} -> ${connectedLocation}\n${connectedLocation} not found\n${location.Game}`
                        list.innerText += "\n"+txt+"\n"
                        console.log(txt); 
                    }
                });
            }
        });
    });

    

    const LoadTime = format_time(new Date() - InitialTime);
    list.innerText += "\nElapsed Time: " + LoadTime;
	console.log("Elapsed Time: " + LoadTime);
    console.groupEnd();
}

function debug_gameProperty() {

    list.innerHTML = "";
    const InitialTime = new Date();

    const reference_array = [...(Object.Keys(Games)),"Isle of Armor","Crown Tundra","Green","1","2","3","4","5","6","7","8","9","Battle Revolution","Stadium","Stadium 2","Legend Arceus","Scarlet","Violet","Shining Pearl","Brilliant Diamond","All"];
    
    console.group("Game Properties");

    const invalid = [];
    Object.keys(finaldata).forEach(dataKey => {
        Object.keys(finaldata[dataKey]).forEach(subKey => {
            if (Array.isArray(finaldata[dataKey][subKey])) {
                finaldata[dataKey][subKey].forEach(entry => {
                    if (entry.hasOwnProperty('Game')) {
                        const gameValues = String(entry.Game).split(/[,]/);
                        gameValues.forEach(game => {
                            if (!reference_array.includes(game.replace(/-.*/,''))) {
                                invalid.push(`${dataKey} -> ${subKey}\n${game}`);
                            }
                        });
                    }
                });
            }
        });
    });
    invalid.sort();
    [...new Set(invalid)].forEach(i => {
        list.innerText += `\n${i}\n`
        console.log(i);
    })
    const LoadTime = format_time(new Date() - InitialTime);
    list.innerText += "\nElapsed Time: " + LoadTime;
	console.log("Elapsed Time: " + LoadTime);
    console.groupEnd();

}