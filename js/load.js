const finaldata = {};

const json_url = {
    ["Game"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Game Dataset.json",
    ["Pokemon"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Pokemon Dataset.json",
    ["Pokemon Learnset"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Pokemon Learnset Dataset.json",
    ["Locations"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Locations Dataset.json",
    ["Location Pokemon"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Location Pokemon Dataset.json",
    ["Location Item"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Location Items Dataset.json",
    ["Location Trainers"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Location Trainers Dataset.json",
    ["Moves"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Moves Dataset.json",
    ["Abilities"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Abilities Dataset.json",
    ["Items"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Items Dataset.json",
    ["Trainers"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Trainers Dataset.json",
    ["Directory"]: "https://raw.githubusercontent.com/finaldex/FinalDex/main/json/Directory.json"
};

let InitialTime = 0;
let LoadProgress = 0;


function load_start() {
	const href_match = location.href.match(/#(.*)/) ? location.href.match(/#(.*)/)[1].replace("%20"," ").replace("_"," ") : "Red";
    const ID = href_match ? (href_match.toLowerCase() == "random" ? Games[Object.keys(Games)[Math.floor(Math.random() * Object.keys(Games).length)]].ID : get_game(href_match) ) : 1;
    const Game = get_game(ID) || null;
    document.title = `${Games[Game].Title}`

    if (Game !== null) {
        load_game(ID)
    }
    else {
        console.error(`Error Occured: ${ID}`);
    }
}


async function load_game(id) {
    load_clear();

    const totalDatasets = Object.keys(json_url).length; // Total number of datasets
    let datasetsLoaded = 0; // Track how many datasets have been loaded
    InitialTime = new Date();

    document.querySelector("#load .description > *").innerHTML = "Loading Data<span>.</span><span>.</span><span>.</span>";

    await load_dataset(json_url["Directory"])
    await load_data(get_game(id))

    document.querySelector("#load .description > *").innerHTML = "Configuring Game<span>.</span><span>.</span><span>.</span>";

    configure_game(id);
}

async function load_data(game) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `./data/${game}.js`;

        script.onload = () => {
            resolve();
        };

        script.onerror = () => {
            reject(new Error(`Failed to load script: ${script.src}`));
        };

        document.head.appendChild(script);
    });
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

    image_configure();
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

    console.group("Data");
    console.log(Data);
    console.groupEnd();

    console.group("Config");
	console.log(Config);
    console.groupEnd();

    console.group("Memory");
    console.log(Memory);
	console.groupEnd();


}


function load_clear() {
    //console.clear();
    const elements = document.querySelectorAll(["#nav", "#setting", "#dex", "#fullscreen", "#location","#ability","#move","#item","#tool", "#editor", "#console"].join(', '));
	elements.forEach(el => { el.remove(); });
}


