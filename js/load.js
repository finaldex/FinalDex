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

let timeStart = new Date();

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

			let urlid = location.href.replaceAll("%20"," ").replaceAll(/(?<=^)(.*)(?=Game.html)/g,"").replaceAll("Game.html","").replaceAll("#","").replaceAll("_"," ");
			GameID = getGameID(urlid);
			define();
			config();
			if (!(location.href).toLowerCase().includes("random")) {
				location.href = splitStr(location.href,"#")[0]+"#"+GameName.replaceAll(" ","_");
			}
		}

		
		if (i != 0) {
			let request = new XMLHttpRequest();
			request.open('GET', url);
			request.responseType = 'json';
			request.send();
			request.onload = function() {
				let Metadata = request.response;
				let val = loads[i].replace(" Metadata","")
	

				/*
				if (loads[i] == "Directory") {
					let arr = Metadata;
					let origin = Object.keys(arr);
					let keys = Object.keys(arr).map(function(x){return x.replaceAll(PATH,"").split("/")[0].replace(".","");});
					keys = [...new Set(keys)]
					keys = keys.filter(x => x)
			
					finaldata[loads[i]] = []

					for (let q = 0; q < keys.length; q++) {
						for (let r = 0; r < origin.length; r++) {
							if (origin[r].includes(PATH+keys[q])) {
								if (finaldata[loads[i]][keys[q]] == undefined) {
									finaldata[loads[i]][keys[q]] = [];
								}
								finaldata[loads[i]][keys[q]][origin[r]] = Metadata[origin[r]]
							}
						}
					}
				}
				else {
					finaldata[val] = Metadata;	
				}
				*/
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

	let val = initEnd/(initLength-1)*100;
	document.querySelector("#load").style.setProperty("--progress",val+"%");

	loaddescription.innerHTML = "Building Databases<span>.</span><span>.</span><span>.</span>";
	if(new Date() - initTimeStart >= 5000) {
		loaddescription.innerHTML = "Load taking longer than expected<span>.</span><span>.</span><span>.</span>";
	}
	if(initEnd >= initLength - 1) {
		loaddescription.innerHTML = "Complete!";

		console.log(finaldata)

		config2();

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

		memory("Restore","",document.querySelectorAll('#resizer[id][name]'));
		memory("Restore","game",document.querySelectorAll('#pokémon > aside[name="settings"] > span[name="variant"] input[type="checkbox"][id][name]'));

		variantSelector(); /* 1min */

		boxMemory("Restore")
		partyMemory("Restore");
		memoryDexSwitch();

		load();

		console.log("Time to load: "+msToTime(new Date() - timeStart))

	}
}

function getPokémonPath(int) {
	if (isNaN(parseInt(int))) {
		int = getPokémonInt(int);
	}
	let result = []
	let num = finaldata["Pokémon"]["Path"][int]["Number"];
	let txt = finaldata["Pokémon"]["Path"][int]["Text"];
	if (num != undefined) {
		result.push(num);
	}
	if (txt != undefined) {
		result.push(txt);
	}
	return result.join("-")
}