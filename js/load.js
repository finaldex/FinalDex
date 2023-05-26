let finaldata = [];
let dexChecker = [1];
let drag;
let savedtar;
let saveddrag;
let boxDrag;
let loads = ["Game Metadata","Pokémon Metadata","Pokémon Learnset Metadata","Locations Metadata","Location Pokémon Metadata","Location Items Metadata","Location Trainers Metadata","Moves Metadata","Abilities Metadata","Items Metadata","Trainers Metadata","Directory"];
let baseurl = "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/";
let baseextension = "json";

let initStart = 1;
let initLength = loads.length;
let initTimeStart;

for(let i = 0; i < loads.length; i++) {
	let url = baseurl+loads[i]+"."+baseextension;
	requestLoad(i,url);
}

function requestLoad(i,url) {
	let gameRequest = new XMLHttpRequest();
	gameRequest.open('GET', baseurl+loads[0]+"."+baseextension);
	gameRequest.responseType = 'json';
	gameRequest.send();
	gameRequest.onload = function() {
		let Gamedata = gameRequest.response;

		if (loads[i] == "Game Metadata") {
			let val = loads[i].replace(" Metadata","")
			finaldata[val] = Gamedata;

			let urlid = location.href.replaceAll("%20"," ").replaceAll(/(?<=^)(.*)(?=Game.html)/g,"").replaceAll("Game.html","").replaceAll("#","");
			GameID = getGameName("",urlid);
			define();
			config();
		}
		
		if (i != 0) {
			let request = new XMLHttpRequest();
			request.open('GET', url);
			request.responseType = 'json';
			request.send();
			request.onload = function() {
				let Metadata = request.response;
				let val = loads[i].replace(" Metadata","")
				finaldata[val] = Metadata;	
				initialize();
			}
		}
	}
}

function initialize() {
	let initEnd = initStart++;
	let loaddescription = document.getElementById("load-description");
	if(initEnd == 1) {
		initTimeStart = new Date();
	}

	loaddescription.innerHTML = "Building Databases<span>.</span><span>.</span><span>.</span>";
	if(new Date() - initTimeStart >= 5000) {
		loaddescription.innerHTML = "Load taking longer than expected<span>.</span><span>.</span><span>.</span>";
	}
	if(initEnd >= initLength - 1) {
		loaddescription.innerHTML = "Complete!";

		console.log(finaldata)

		console.log(getPokémonName(523))
		console.log(getMediaPath([520,252],['./media/Images/Pokémon/sdaas/PNG/Default/Front/Crystal','./media/Images/Pokémon/Battle/PNG/Default/Front/VI-VII'],[]))
		
		createNav();
		createPokémon();
		createMap();
		createAbility();
		createItem();
		createMove();
		createTool();

		countdown();
		stopwatch();
		RNG();

		window.addEventListener('resize', resize);

		memory("Restore","",[document.querySelector('#resizer')]);
		memory("Restore","",[document.querySelector('#pokémon > aside[name="settings"] > span[name="theme"] input')]);
		memory("Restore","game",document.querySelectorAll('#pokémon > aside[name="settings"] > span[name="variant"] input[type="checkbox"]'));

		variantSelector();

		boxMemory("Restore")
		partyMemory("Restore");
		memoryDexSwitch();

		load();
	}
}