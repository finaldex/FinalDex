let finaldata = [];
let dexChecker = [1];
let drag;
let savedtar;
let saveddrag;
let boxDrag;
let loads = ["Game","Pokémon","Pokémon Learnset","Locations","Location Pokémon","Location Items","Location Trainers","Moves","Abilities","Items","Trainers"];
let baseurl = "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/";
let baseextension = "json";
let baseextra = "Metadata"

let initStart = 1;
let initLength = loads.length;
let initTimeStart;

for(let i = 0; i < loads.length; i++) {
	let url = baseurl+loads[i]+" "+baseextra+"."+baseextension;
	requestLoad(i,url);
}

function requestLoad(i,url) {
	let gameRequest = new XMLHttpRequest();
	gameRequest.open('GET', baseurl+loads[0]+" "+baseextra+"."+baseextension);
	gameRequest.responseType = 'json';
	gameRequest.send();
	gameRequest.onload = function() {
		let Gamedata = gameRequest.response;

		if (loads[i] == "Game") {
			finaldata[loads[i]] = Gamedata;

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

				finaldata[loads[i]] = Metadata;	
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

		createNav();
		createPokémon();
		createMap();
		createAbility();
		createItem();
		createMove();
		createTool();

		countdown();
		stopwatch();
		typeSwitch("NORMAL");
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