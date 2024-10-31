const finaldata = {};

const json_url = {
    ["Game"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Game Dataset.json",
    ["Pokemon"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Pokemon Dataset.json",
    ["Pokemon Learnset"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Pokemon Learnset Dataset.json",
    ["Locations"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Locations Dataset.json",
    ["Location Pokemon"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Location Pokemon Dataset.json",
    ["Location Item"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Location Items Dataset.json",
    ["Location Trainers"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Location Trainers Dataset.json",
    ["Moves"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Moves Dataset.json",
    ["Abilities"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Abilities Dataset.json",
    ["Items"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Items Dataset.json",
    ["Trainers"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Trainers Dataset.json",
    ["Directory"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/Directory.json"
};

let InitialTime = 0;
let LoadProgress = 0;

function load_start() {
	const href_match = location.href.match(/#(.*)/) ? location.href.match(/#(.*)/)[1].replace("%20"," ").replace("_"," ") : "Red";
    const ID = get_gameid(href_match) || 1;
    const Game = get_game(ID) || "N/A";
    document.title = `${Game}`
    load_game(ID);
}


async function load_game(ID) {
    load_clear();

    ID = typeof(ID) === "string" ? (get_gameid(ID) !== null ? get_gameid(ID) : 1) : ID;

    const totalDatasets = Object.keys(json_url).length; // Total number of datasets
    let datasetsLoaded = 0; // Track how many datasets have been loaded
    InitialTime = new Date();

    document.querySelector("#load").className = "active";
    document.querySelector("#load .description > *").innerHTML = "Building Databases<span>.</span><span>.</span><span>.</span>";

    for (const json of Object.keys(json_url)) {
        datasetsLoaded++;
        LoadProgress = Math.min(100, (datasetsLoaded / totalDatasets) * 100); // Calculate progress
        document.querySelector("#load").style.setProperty("--progress", LoadProgress + "%");

        await load_dataset(json_url[json]); // Load the dataset
        //await new Promise(resolve => setTimeout(resolve, 400)); // Makes start animation smoother but increases load time by ~5 seconds
    }

    configure_game(ID);
}

async function load_dataset(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        const json = url.match(/([^\/]+)\.json$/)[1].replace(" Dataset", "");

		finaldata[json] = data;
        

    } catch (error) {
        console.error('Error loading dataset:', error);
    }
}

function load_initialize() {

    document.querySelector("#load").style.setProperty("--progress", "100%");
    document.querySelector("#load .description > *").innerHTML = "Complete!";

    create_card();
    create_console();
    create_fullscreen();
	create_dex();
    create_nav();
	create_location();
    create_item();
	create_ability();
	create_move();
    create_memory();

	//create_tool();

    document.querySelector("#load").classList.remove("active");

    const LoadTime = format_time(new Date() - InitialTime);
	console.log("Load Time: " + LoadTime);

	//console.group("finaldata");
	//console.log(finaldata);
    //console.groupEnd();

    console.group("data");
    console.log(data);
    console.groupEnd();

    console.group("config");
	console.log(config);
    console.groupEnd();

    console.group("memory");
    console.log(memory);
	console.groupEnd();


}


function load_clear() {
    //console.clear();
    const elements = document.querySelectorAll(["#nav", "#setting", "#dex", "#fullscreen", "#location","#ability","#move","#item","#tool", "#editor", "#console"].join(', '));
	elements.forEach(el => { el.remove(); });
}


