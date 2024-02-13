function getAllIndexes(arr, val) {
	let indexes = [],
		i = -1;
	while((i = arr.indexOf(val, i+1)) != -1) {
		indexes.push(i);
	}
	return indexes;
}

function titleCase(str) {
	if (str == undefined) {
		return str;
	}
	if(isNaN(str)) {
		let splitStr = str.toLowerCase().split(' ');
		for(let i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase()+splitStr[i].substring(1);
		}
		splitStr = splitStr.join(' ');
		return splitStr;
	}
}

function numFormat(num) {
	if (isNaN(num)) {
		num = num.replaceAll(",","");
		num = parseInt(num);
	}
	if (isNaN(num)) {
		return num;
	}
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}





function splitStr(str,selector) {
	if (typeof str != "string") {
		return str;
	}
	else if (str.includes(selector)) {
        return str.split(selector);
    }
    else {
        return [str];
    }
}



function getRandomInt(min,max) {
	return Math.random() * (max - min) + min;
}

function linGradCalc() {
	let Arr = [{Type:"Burn",Value:15},{Type:"Damage",Value:63},{Type:"Bad Poison",Value:44},{Type:"Poison",Value:21},{Type:"Heal",Value:52},{Type:"Seed",Value:11}];
	let MaxHP = 253;
	let Percentage = 100;


	for (let i = 0; i < Arr.length; i++) {
		Arr[i]["Percent"] = (parseInt(Arr[i]["Value"])/MaxHP)*100
	}


	let perArr1 = [];
	let colArr1 = [];

	for (let i = 0; i < Arr.length; i++) {
		if (Arr[i]["Type"] == "Heal") {
			Percentage = Percentage+Arr[i]["Percent"];
			perArr1.push(Math.round(Percentage))
		}
		else {
			Percentage = Percentage-Arr[i]["Percent"];
			perArr1.push(Math.round(Percentage))
		}

		if (Arr[i]["Type"] == "Heal") {
			colArr1.push("Mediumspringgreen")
		}
		else if (Arr[i]["Type"] == "Poison") {
			colArr1.push("Blue")
		}
		else if (Arr[i]["Type"] == "Burn") {
			colArr1.push("Orange")
		}
		else if (Arr[i]["Type"] == "Seed") {
			colArr1.push("Yellow")
		}
		else if (Arr[i]["Type"] == "Bad Poison") {
			colArr1.push("Rebeccapurple")
		}
		else {
			colArr1.push("Orangered")
		}


		if (Percentage <= 0) {
			Percentage = 0;
			break;
		}
	}
	/*
	for (let q = 0; q < 20; q++) {
		for (let i = 0; i < perArr1.length; i++) {
			let x = i+1;
			if (perArr1[x] != undefined) {
				if (perArr1[i] < perArr1[x]) {
					perArr1.splice(i,1);
					colArr1.splice(i,1);
				}
			}
		}
	}
	*/

	let perArr2 = [];
	let colArr2 = [];

	for (let i = 0; i < perArr1.length; i++) {
		for (let q = 0; q < 2; q++) {
			perArr2.push(perArr1[i])
			colArr2.push(colArr1[i])
		}
	}




	colArr2.splice(0,1);
	colArr2.push(colArr2[colArr2.length-1])

	colArr2.splice(colArr2.length-1,1);
	perArr2.splice(perArr2.length-1,1);
	colArr2.splice(0,1);
	perArr2.splice(0,1);


	perArr2.unshift(100);
	perArr2.push(perArr2[perArr2.length-1])
	perArr2.push(0)

	colArr2.unshift(colArr2[0]);
	colArr2.push("Limegreen")
	colArr2.push("Limegreen")


	let tempArr = [];
	for (let i = 0; i < perArr2.length; i++) {
		tempArr.push(" "+colArr2[i]+" "+perArr2[i]+"%")
	}
	tempArr.reverse();

	let tempStr = "linear-gradient(90deg,"+tempArr.join(",")+")";







}




function msToTime(duration) {
	var milliseconds = Math.floor((duration % 1000) / 100),
	  seconds = Math.floor((duration / 1000) % 60),
	  minutes = Math.floor((duration / (1000 * 60)) % 60),
	  hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	let result = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
	result = result.replaceAll("00:","").replaceAll(":00","").replaceAll("00.","0.").replace(/(^0)([0-9])/g,"$2")
  
	return result;
  }


function getMedia(set,userFile,userPath,games) {

	if (userFile == undefined) {
		userFile = [""];
	}
	else if (typeof userFile == "string") {
		userFile = [userFile];
	}

	if (userPath == undefined) {
		userPath = [""];
	}
	else if (typeof userPath == "string") {
		userPath = [userPath];
	}

	if (games == undefined || games.length == 0) {
		games = [GameName];
	}

	let result = [];


	let arr = finaldata["Directory"];
	let keys = Object.keys(arr);


	for(let g = 0; g < games.length; g++) {
		for(let d = 0; d < keys.length; d++) {
			let key = keys[d];
			for(let r = 0; r < userPath.length; r++) {
				if (key.includes(userPath[r]) || userPath[r] == "") {
					let source = key.split("/")[key.split("/").length-1]
					if (getApplicable(source,games[g])) {
						for (let q = 0; q < arr[key].length; q++) {
							let file = arr[key][q];

							if (file.includes(".png") || file.includes(".gif")) {
								for(let t = 0; t < userFile.length; t++) {
									let fileName = arr[key][q].toString();
									let userName = userFile[t].toString();

									// remove extension from name
									fileName = fileName.replace("."+arr[key][q].split(".")[arr[key][q].split(".").length-1],"");

									if (userName.includes("^")) {
										userName = userName.replaceAll("^","")
									}
									else {
										fileName = splitStr(fileName,"_")[0]
									}
									
									if (userName == fileName || userName == "") {
										if (set) {
											return key+"/"+file;
										}
										result.push(key+"/"+file);
									}
								}
							}
						}
					}
				}
			}
		}
	}


	if (set) {
		return ""
	}

	if (result.length == 0) {
		result.push("");
	}
	return [...new Set(result)];
}


/*
function getPokémonMediaPath(userFile,userPath,gender,games) {



	if (gender == undefined || gender.length == 0) {
		gender = ["Male","Female"]
	}

	for (g = 0; g < gender.length; g++) {
		if (gender[g] == "Male" || gender[g] == "M") {
			gender[g] = '_Male'
		}
		else if (gender[g] == "Female" || gender[g] == "F") {
			gender[g] = '_Female'
		}
	}

	if (games == undefined || games.length == 0) {
        games = [];
    }

	
	let arr = finaldata["Directory"];
	let keys = Object.keys(arr);

	for(let d = 0; d < keys.length; d++) {
		let key = keys[d];
		for(let r = 0; r < userPath.length; r++) {
			if (key.includes(userPath[r]) || userPath[r] == "") {
					for (let q = 0; q < arr[key].length; q++) {
						let file = arr[key][q];

						if (file.includes(".png") || file.includes(".gif")) {
							for(let t = 0; t < userFile.length; t++) {
								let int = parseInt(userFile[t]);
								if (isNaN(int)) {
									int = getPokémonInt(userFile[t])
								}
							
								let mediaName = []
							
								let val1 = finaldata["Pokémon"]["Path"][int]["Number"];
								let val2 = finaldata["Pokémon"]["Path"][int]["Text"];
								
								if (val1 != undefined) {
									mediaName.push(val1)
								}
								if (val2 != undefined) {
									mediaName.push(val2)
								}
								mediaName = mediaName.join("-")

								for (g = 0; g < gender.length; g++) {
									let check = false;
									let fileName = arr[key][q].split(".")[0]
							
									if (mediaName+gender[g] == fileName) {
										check = true;
									}
									if (check) {
										let source = key.split("/")[key.split("/").length-1]
										if (getApplicable(source,games)) {
											return key+"/"+file;
										}
									}
								}
							}
						}
					}
				}
		}
	}



	for(let d = 0; d < keys.length; d++) {
		let key = keys[d];
		for(let r = 0; r < userPath.length; r++) {
			if (key.includes(userPath[r]) || userPath[r] == "") {
					for (let q = 0; q < arr[key].length; q++) {
						let file = arr[key][q];
						if (file.includes(".png") || file.includes(".gif")) {
							for(let t = 0; t < userFile.length; t++) {
								let int = parseInt(userFile[t]);
								if (isNaN(int)) {
									int = getPokémonInt(userFile[t])
								}
							
								let mediaName = []
							
								let val1 = finaldata["Pokémon"]["Path"][int]["Number"];
								let val2 = finaldata["Pokémon"]["Path"][int]["Text"];
								
								if (val1 != undefined) {
									mediaName.push(val1)
								}
								if (val2 != undefined) {
									mediaName.push(val2)
								}
								mediaName = mediaName.join("-")


								let check = false;
								let fileName = arr[key][q].split(".")[0]

								if (mediaName == fileName) {
									check = true;
								}
								if (check) {
									let source = key.split("/")[key.split("/").length-1]
									if (getApplicable(source,games)) {
										return key+"/"+file;
									}
								}
							}
						}
					}
				}
		}
	}

    
    return ""

}
*/


function getGeneration(game) {
    let gen1 = ["Red","Blue","Yellow"];
    let gen2 = ["Gold","Silver","Crystal"];
    let gen3 = ["Ruby","Sapphire","Colosseum","FireRed","LeafGreen","Emerald","XD"];
    let gen4 = ["Diamond","Pearl","Platinum","HeartGold","SoulSilver"];
    let gen5 = ["Black","White","Black 2","White 2"];
    let gen6 = ["X","Y","Omega Ruby","Alpha Sapphire"];
    let gen7 = ["Sun","Moon","Ultra Sun","Ultra Moon","Lets Go Pikachu","Lets Go Eevee"];
    let gen8 = ["Sword","Shield","Legend Arceus","Brilliant Diamond","Shining Pearl"];
    let gen9 = ["Scarlet","Violet"];

    if (gen1.includes(game)) {
        return 1;
    }
    if (gen2.includes(game)) {
        return 2;
    }
    if (gen3.includes(game)) {
        return 3;
    }
    if (gen4.includes(game)) {
        return 4;
    }
    if (gen5.includes(game)) {
        return 5;
    }
    if (gen6.includes(game)) {
        return 6;
    }
    if (gen7.includes(game)) {
        return 7;
    }
    if (gen8.includes(game)) {
        return 8;
    }
    if (gen9.includes(game)) {
        return 9;
    }
    return 0
}

function getGameID(name) {
    let games = ["Red","Blue","Yellow","Gold","Silver","Crystal","Ruby","Sapphire","Colosseum","FireRed","LeafGreen","Emerald","XD","Diamond","Pearl","Platinum","HeartGold","SoulSilver","Black","White","Black 2","White 2","X","Y","Omega Ruby","Alpha Sapphire","Sun","Moon","Ultra Sun","Ultra Moon","Lets Go Pikachu","Lets Go Eevee","Sword","Shield","Legend Arceus","Brilliant Diamond","Shining Pearl","Scarlet","Violet"];
    return games.indexOf(name)+1
}
function getApplicable(val,game) {

    if (game == undefined) {
        game = GameName;
    }

    val = val.replaceAll("_",",");
    let vals = splitStr(val,",");
    for (let i = 0; i < vals.length; i++) {
        let val = vals[i];
		
		if (val == "All" || game == "All") {
			return true;
		}
		else if (val == game) {
			return true;
		}
		else if (val[val.length-1] == "-") {
			let valCurrent = getGeneration(game);
			let val1 = parseInt(val.replaceAll("+",""));
			if (valCurrent <= val1) {
				return true;
			}
		}
		else if (val[val.length-1] == "+") {
			let valCurrent = getGeneration(game);
			let val1 = parseInt(val.replaceAll("+",""));
			if (valCurrent >= val1) {
				return true;
			}
		}
		else if (val.includes("-")) {
			let val1 = val.split("-")[0];
			let val2 = val.split("-")[1];
			
			
			if (!isNaN(parseInt(val1)) || !isNaN(parseInt(val2))) { // Generation
				let valCurrent = getGeneration(game);
				valStart = Math.min(val1,val2)
				valEnd = Math.max(val1,val2)
				if (valCurrent >= valStart && valCurrent <= valEnd) {
					return true;
				}
			}
			else {
				let valCurrent = getGameID(game);
				val1 = getGameID(val1);
				val2 = getGameID(val2);
				valStart = Math.min(val1,val2)
				valEnd = Math.max(val1,val2)

				if (valCurrent >= valStart && valCurrent <= valEnd) {
					return true;
				}
			}
			
		}
		else if (!isNaN(parseInt(val))) {
			if (parseInt(val) == getGeneration(game)) {
				return true;
			}
		}
		
			
            
        
    }
	
	
	return false;
}



function getEvolutionFamily(i) {
	let stage = [];
	let specie = [];
	let Previous = undefined;
	let Next = undefined;
	stage = finaldata["Pokémon"]["Evolution Stage"];
	specie = finaldata["Pokémon"]["Evolution Specie"];
	let result = [];
	result.push(finaldata["Pokémon"]["Reference"][i]["Pokémon"])

	for(let q = 0; q < 10; q++) {
		Previous = finaldata["Pokémon"]["Evolution Specie"][i][DATA_Pokémon_EvolutionSpecie["Previous"]];
		Next = finaldata["Pokémon"]["Evolution Specie"][i][DATA_Pokémon_EvolutionSpecie["Next"]];
		if(Previous != undefined && Previous != "None") {
			result.push(Previous);
			Previous = finaldata["Pokémon"]["Evolution Specie"][i][DATA_Pokémon_EvolutionSpecie["Previous"]];
		}
		if(Next != undefined && Next != "None") {
			if(finaldata["Pokémon"]["Evolution Specie"][i][DATA_Pokémon_EvolutionSpecie["Next"]].includes(",")) {
				for(let y = 0; y < finaldata["Pokémon"]["Evolution Specie"][i][DATA_Pokémon_EvolutionSpecie["Next"]].split(",").length; y++) {
					Next = finaldata["Pokémon"]["Evolution Specie"][i][DATA_Pokémon_EvolutionSpecie["Next"]].split(",")[y];
					result.push(Next);
				}
			} else {
				Next = finaldata["Pokémon"]["Evolution Specie"][i][DATA_Pokémon_EvolutionSpecie["Next"]];
				result.push(Next);
			}
		}
		result = [...new Set(result)];
		if(result[q] != undefined) {
			i = parseInt(getPokémonInt(result[q]));
		}
	}
	for(let q = 0; q < result.length; q++) {
		let obj = new Object();
		obj["Pokémon"] = result[q];
		obj["ID"] = getPokémonID(result[q]);
		obj["Stage"] = getEvolutionStage(result[q]);
		result[q] = obj;
	}
	result.sort(function(a, b) {
		return parseInt(a["ID"]) - parseInt(b["ID"]);
	});
	result.forEach(function(val, u) {
		if(val["Stage"] == "First-Stage") result[u]["Stage"] = "1";
		if(val["Stage"] == "Second-Stage") result[u]["Stage"] = "2";
		if(val["Stage"] == "Third-Stage") result[u]["Stage"] = "3";
	});
	result.sort(function(a, b) {
		return parseInt(a["Stage"]) - parseInt(b["Stage"]);
	});
	return result;
}

function getIntID(int, id) {

	if(id == undefined || id == "") { // int --> id
		for(let i = 0; i < finaldata["Pokémon"]["Reference"].length; i++) {
			if(int == i) {
				return finaldata["Pokémon"]["Reference"][i]["ID"];
			}
		}
	} else if(int == undefined || int == "") { // id --> int
		for(let i = 0; i < finaldata["Pokémon"]["Reference"].length; i++) {
			if(id == finaldata["Pokémon"]["Reference"][i]["ID"]) {
				return i;
			}
		}
	}
}


function getMachineMove(machine) {

	let arr = finaldata["Moves"]["Machine"];
	let result;
	for(i = 0; i < arr.length; i++) {
		
		if(arr[i][DATA_Move_Machine["Machine"]] == machine) {
			result = arr[i][DATA_Move_Reference["Name"]]
		}
	}
	return result;
}

function getMoveMachine(move) {

	let arr = finaldata["Moves"]["Machine"];
	let result;
	for(i = 0; i < arr.length; i++) {
		if(arr[i][DATA_Move_Reference["Name"]] == move) {
			result = arr[i][DATA_Move_Machine["Machine"]]
		}
	}
	return result;
}



function Continuation(arr, column, style) {

	let temparr1 = [];
	let result = [];
	let names = [];
	if(style == "Single") {
		for(i = 0; i < arr.length; i++) {
			if(arr[i][column].includes(",")) {
				temparr1.push(arr[i][column].split(","));
			} else {
				temparr1.push(arr[i][column]);
			}
		}
		for(i = 0; i < temparr1.length; i++) {
			if(temparr1[i].includes(GameName)) {
				result[i] = true;
			} else {
				result[i] = false;
			}
		}
	} else if(style == "Multiple") {
		for(i = 0; i < finaldata["Game"]["Reference"].length; i++) {
			if(parseInt(finaldata["Game"]["Reference"][i]["ID"]) <= GameID) {
				names.push(finaldata["Game"]["Reference"][i]["Name"]);
			}
		}
		for(i = 0; i < finaldata["Game"]["Reference"].length; i++) {
			if(finaldata["Game"]["Reference"][i]["Name"] == GameName) {
				if(finaldata["Game"]["Reference"][i]["Sibling"] != undefined) {
					if(finaldata["Game"]["Reference"][i]["Sibling"].includes(",")) {
						for(q = 0; q < finaldata["Game"]["Reference"][i]["Sibling"].split(",").length; q++) {
							for(u = 0; u < finaldata["Game"]["Reference"].length; u++) {
								if(finaldata["Game"]["Reference"][u]["ID"] == finaldata["Game"]["Reference"][i]["Sibling"].split(",")[q]) {
									names.push(finaldata["Game"]["Reference"][u]["Name"]);
								}
							}
						}
					} else {
						for(u = 0; u < finaldata["Game"]["Reference"].length; u++) {
							if(finaldata["Game"]["Reference"][u]["ID"] == finaldata["Game"]["Reference"][i]["Sibling"]) {
								names.push(finaldata["Game"]["Reference"][u]["Name"]);
							}
						}
					}
				}
			}
		}
		let temprun;
		let tempres = [];
		let temparrtype = [];
		for(i = 0; i < arr.length; i++) {
			if(arr[i][column].includes(",")) {
				temparr1.push(arr[i][column].split(","));
				temparrtype.push("+");
			} else if(arr[i][column].includes("-")) {
				temparr1.push(arr[i][column].split("-"));
				temparrtype.push("-");
			} else {
				temparr1.push(arr[i][column]);
				temparrtype.push("+");
			}
		}
		for(i = 0; i < temparr1.length; i++) {
			let boolean = [];
			if(temparrtype[i] == "-") {
				for(q = 0; q < finaldata["Game"]["Reference"].length; q++) {
					if(finaldata["Game"]["Reference"][q]["Name"] == temparr1[i][0]) {
						temprun = true;
					}
					if(finaldata["Game"]["Reference"][q]["Name"] == temparr1[i][1]) {
						tempres.push(finaldata["Game"]["Reference"][q]["Name"])
						temprun = false;
					}
					if(temprun == true) {
						tempres.push(finaldata["Game"]["Reference"][q]["Name"])
					}
				}
				for(q = 0; q < tempres.length; q++) {
					if(tempres[q].includes(GameName)) {
						boolean.push(true);
					} else {
						boolean.push(false);
					}
				}
				tempres = [];
			} else {
				for(q = 0; q < names.length; q++) {
					if(temparr1[i].includes(names[q])) {
						boolean.push(true);
					} else {
						boolean.push(false);
					}
				}
			}
			if(boolean.includes(true)) {
				result[i] = true;
			} else {
				result[i] = false;
			}
			boolean = [];
		}
	}
	return result;
}

function getRegionalID(seperator,id,dex) {

	let arr = finaldata["Pokémon"]["Pokédex ID"];
	let tempid;
    let result;

	if(seperator == "-") {
		seperator = -1;
	}
	if(seperator == "+") {
		seperator = +1;
	}
	if(seperator == "=") {
		seperator = "";
	}
	if(seperator != "") {
		for(let q = 0; q < arr.length; q++) {
			if(arr[q]["ID"] == id) {
				tempid = parseInt(arr[q][dex])+seperator;
                break;
			}
		}
		for(let q = 0; q < arr.length; q++) {
			if(arr[q][dex] == tempid) {
				result = arr[q]["ID"];
                break;
			}
		}
	} else {
		for(let q = 0; q < arr.length; q++) {
			if(arr[q]["ID"] == id) {
				result = arr[q][dex];
                break;
			}
		}
	}

    return result
}



function getFullGameName(name) {

	let arr = finaldata["Game"]["Reference"];
	for(let q = 0; q < arr.length; q++) {
		if(arr[q]["Name"] == name) {
			return arr[q]["Full Name"];
		}
	}
}

function getPokémonID(name) {

	let arr = finaldata["Pokémon"]["Reference"];
	for(let q = 0; q < arr.length; q++) {
		if(arr[q]["Pokémon"] == name) {
			return arr[q]["ID"];
		}
	}
}

function getEvolutionStage(name) {

	let arr = finaldata["Pokémon"]["Evolution Stage"];
	for(let q = 0; q < arr.length; q++) {
		if(arr[q]["Pokémon"] == name) {
			return arr[q][DATA_Pokémon_EvolutionStage["Pokémon Stage"]];
		}
	}
}

function abbreviateStats(stats) {

    if (stats == "Attack") {
        return "Atk";
    }
    if (stats == "Defense") {
        return "Def";
    }
    if (stats == "Sp. Atk") {
        return "SpAtk";
    }
    if (stats == "Sp. Def") {
        return "SpDef";
    }
    if (stats == "Speed") {
        return "Spe";
    }
    return stats;
}


function findUpEl(base,att,val) {
     let el = null;
	while (base.parentNode) {
		base = base.parentNode;
		if (base.getAttribute(att) == val) {
			el = base;
               break;
          }
	}
     return el;
}

function findUpAtt(base,att) {
     let el = null;
	while (base.parentNode) {
		base = base.parentNode;
		if (base.getAttribute(att) != undefined) {
               el = base;
               break;
          }
	}
     return el;
}
function findUpTagAtt(base,tag,att) {
     let el = null;
	while (base.parentNode) {
		base = base.parentNode;
		if (base.tagName == tag) {
			if (base.getAttribute(att) != undefined) {
				el = base;
                    break;
               }
          }
	}
     return el;
}


function findUpTag(base, tag) {
     let el = null;
    while (base.parentNode) {
          base = base.parentNode;
          if (base.tagName == tag) {
               el = base;
               break;
          }
    }
    return el;
}

function getPokémonInt(name) {

	let arr = finaldata["Pokémon"]["Form"];
	for(let q = 0; q < arr.length; q++) {
		if(arr[q]["Pokémon"] == name || arr[q][DATA_Pokémon_Form["Form"]] == name) {
			return q;
		}
	}
}

function sortBy(arr,order) {

	let result = [];
	let used = []
	for (let q = 0; q < order.length; q++) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == order[q] || order[q].includes("^") && arr[i].includes(order[q].replace("^",""))) {
				result.push(arr[i]);
				used.push(i);
			}
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if (!used.includes(i)) {
			result.push(arr[i]);
		}
	}

	return result;
}
function returnSortedItemsList(i) {

	let items = finaldata["Items"]["Reference"].map(el => el["Pocket"] == "Berries" ? {...el, ["Pocket"]: "a"} : el).map(el => el["Pocket"] == "Items" || el["Pocket"] == "Other Items"  ? {...el, ["Pocket"]: "b"} : el).map(el => el["Pocket"] != "a" && el["Pocket"] != "b" ? {...el, ["Pocket"]: "c"} : el);

	items = sortObjectArray(items,"Pocket",true);

	let result = [];
	
	if (finaldata["Pokémon"]["Form Item"][i] != undefined) {
		if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]] != undefined) {
			let req = [];
			if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]].includes(",")) {
				req = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]].split(",")
			}
			else {
				req[0] = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]];
			}

			for (let r = 0; r < req.length; r++) {
				for (let q = 0; q < items.length; q++) {
					if (getApplicable(items[q]["Game"])) {
						if (items[q]["Use"] == "true") {
							if (items[q]["Item"] != undefined) {
								if (items[q]["Item"] == req[r]) {
									result.push(items[q]);
								}
							}
						}
					}
				}
			}
		}
		else if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]] != undefined) {
			let notreq = [];
			if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]].includes(",")) {
				notreq = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]].split(",")
			}
			else {
				notreq[0] = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]];
			}


			let obj = new Object();
			obj["Item"] = "";
			obj["Game"] = "All";
			items.unshift(obj);

			for (let r = 0; r < notreq.length; r++) {
				for (let q = 0; q < items.length; q++) {
					if (getApplicable(items[q]["Game"])) {
						if (items[q]["Use"] == "true") {
							if (items[q]["Item"] != undefined) {
								if (items[q]["Item"] != notreq[r]) {
									result.push(items[q]);
								}
							}
						}
					}
				}
			}
			
		}
		else {
			let obj = new Object();
			obj["Item"] = "";
			obj["Game"] = "All";
			items.unshift(obj);

			for (let q = 0; q < items.length; q++) {
				if (getApplicable(items[q]["Game"])) {
					if (items[q]["Use"] == "true") {
						if (items[q]["Item"] != undefined) {
							result.push(items[q]);
						}
					}
				}
			}

		}
	}

	return result;
}

function dataStringTitle(data) {

	let obj = dataStringToObj(data);
	if (obj != undefined) {

		let titlearr = [];

		let pok = obj["pok"];

		if (pok != undefined) {
			let int = getPokémonInt(pok);
		
			let level = obj["lv"];
			let nick = obj["ni"];
			let item = obj["it"];
			let gender = obj["ge"];
			let ability = obj["ab"];
			let move = obj["mo"];
			

			if (level != undefined && gender != undefined) {
				titlearr.push("Lv. "+level+" "+gender)
			}
			else if (level != undefined) {
				titlearr.push("Lv. "+level);
			}
			else if (gender != undefined) {
				pok = pok+" "+gender;
			}


	
			if (nick != undefined) {
				titlearr.push(pok+" ("+nick+")");
			}
			else {
				titlearr.push(pok);
			}


			
			if (item != undefined) {
				titlearr.push("Item: "+item);
			}
			if (ability != undefined) {
				let val = ability;
				if (val == "Secondary" || val == "Primary" || val == "Hidden") {
					val = getPositionAbility(int,ability);
				}
				 
				if (val != undefined) {
					titlearr.push("Ability: "+val);
				}
			}
			if (move != undefined) {
				if (move.includes(",")) {
					titlearr.push("")
					for (let q = 0; q < move.split(",").length; q++) {
						if (move.split(",")[q] != "" && !move.split(",")[q].includes("Move")) {
							titlearr.push(move.split(",")[q]);
						}
					}
				}
			}

			return titlearr.join("\n")
		}
	}
	return "";
}

function dataStringToObj(data) {
	let tempArr;

	if (data != "") {
		if (data.includes("|")) {
			tempArr = data.split("|")
		}
		else {
			tempArr = [data];
		}
	}
	else {
		tempArr = [];
	}

	let obj = new Object();

	
	for (let i = 0; i < tempArr.length; i++) {
		let val1 = tempArr[i].split(":")[0];
		let val2 = tempArr[i].split(":")[1];
		val1 = undDel(val1,"");
		val2 = undDel(val2,"");

		let val = val2.replaceAll(",","").replaceAll(" ","").replaceAll("\r","")

		if (val != "") {
			obj[val1] = val2;
		}
	}

	obj = Object.entries(obj).reduce((a,[k,v]) => (v.replaceAll(',','') == "" ? a : (a[k]=v, a)), {})

	return obj;
}

function getPokémonName(int,alt) {

	let arr = finaldata["Pokémon"]["Form"];
	if (alt == "Alt") {
		for(let i = 0; i < arr.length; i++) {
			if(int == i) {
				if(arr[i][DATA_Pokémon_Form["Form"]] != undefined && !arr[i]["Variant"].includes("Default")) {
					return arr[i][DATA_Pokémon_Form["Form"]];
				} else {
					return arr[i]["Pokémon"];
				}
			}
		}
	}
	else {
		for(let i = 0; i < arr.length; i++) {
			if(int == i) {
				if(arr[i][DATA_Pokémon_Form["Form"]] != undefined) {
					return arr[i][DATA_Pokémon_Form["Form"]];
				} else {
					return arr[i]["Pokémon"];
				}
			}
		}
	}
	
}







function removeDuplicateObjectFromArray(array, key) {
    let check = {};
    let res = [];
    for(let i=0; i<array.length; i++) {
        if(!check[array[i][key]]){
            check[array[i][key]] = true;
            res.push(array[i]);
        }
    }
    return res;
}

function friendshipModifer(friendship) {
    return 1+(Math.floor((10*friendship)/255)/100)
}


function getPokémonForm(i) {

    let id = getIntID(i,"");
    let result = [];

    for(let u = 0; u < finaldata["Pokémon"]["Form"].length; u++) {
		if(finaldata["Pokémon"]["Form"][u]["ID"] == id && finaldata["Pokémon"]["Reference"][u][DATA_Pokémon_Reference["Reference"]] == "true") {
            if (finaldata["Pokémon"]["Form"][u][DATA_Pokémon_Form["Form"]] != undefined) {
                result.push(finaldata["Pokémon"]["Form"][u][DATA_Pokémon_Form["Form"]]);
            }
            else {
                result.push(finaldata["Pokémon"]["Form"][u]["Pokémon"]);
            }
		}
	}

    return result;
}

function getPositionAbility(i,column) {

	let arr = finaldata["Pokémon"]["Ability"];
	let keys1 = Object.keys(DATA_Pokémon_Ability);
	let keys2 = DATA_Pokémon_Ability;

    for (let q = 0; q < keys1.length; q++) {
		if (keys1[q] == column) {
			return arr[i][keys2[keys1[q]]]
		}
    }

	for (let q = 0; q < keys1.length; q++) {
		if (keys1[q] == column) {
			return arr[getDefaultInt(i)][keys2[keys1[q]]];
		}
    }

    return;
}


function getAbilityPosition(i,ability) {
    let arr = finaldata["Pokémon"]["Ability"];
	let keys1 = Object.keys(DATA_Pokémon_Ability);
	let keys2 = DATA_Pokémon_Ability;

    for (let q = 0; q < keys1.length; q++) {
		if (arr[i][keys2[keys1[q]]] == ability) {
			return keys1[q];
		}
    }

	for (let q = 0; q < keys1.length; q++) {
		if (arr[getDefaultInt(i)][keys2[keys1[q]]] == ability) {
			return keys1[q];
		}
    }

    return;
}

function getDefaultInt(i) {
    let id = getIntID(i,"");
    let arr = finaldata["Pokémon"]["Reference"];
    let result;

    for (let q = 0; q < arr.length; q++) {
        if (arr[q]["ID"] == id) {
            result = q;
            break;
        }
    }

    return result;
}






function getArrDataIndexed(arr,column,value) {
	let result = [];

	for (let q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"]) == true) {
			if(arr[q][column] == value) {
				let obj = arr[q];
				obj["Index"] = q;
				result.push(obj);
			}
		}
	}

	return result;
}




function undDel(string,replacement) {

	if (string == undefined) {
		return replacement
	}
	else {
		return string;
	}
}
function undwsDel(string,replacement) {

	if (string == undefined || string == "") {
		return replacement
	}
	else {
		return string;
	}
}
function undwsnullDel(string,replacement) {

	if (string == undefined || string == null || string == "") {
		return replacement
	}
	else {
		return string;
	}
}
function undwsnullnanDel(string,replacement) {

	if (string == undefined || string == "" || string == null || isNaN(string)) {
		return replacement;
	}
	else {
		return string;
	}
}



function modStageCalc(type,mod) {

	if (type == "Accuracy") {
		if (Generation == 1) {
			if (mod == 6) {
				return 400/100;
			}
			if (mod == 5) {
				return 350/100;
			}
			if (mod == 4) {
				return 300/100;
			}
			if (mod == 3) {
				return 250/100;
			}
			if (mod == 2) {
				return 200/100;
			}
			if (mod == 1) {
				return 150/100;
			}
			if (mod == 0) {
				return 100/100;
			}
			if (mod == -1) {
				return 66/100
			}
			if (mod == -2) {
				return 50/100
			}
			if (mod == -3) {
				return 40/100;
			}
			if (mod == -4) {
				return 33/100;
			}
			if (mod == -5) {
				return 28/100;
			}
			if (mod == -6) {
				return 25/100;
			}
		}
		else if (Generation == 2) {
			if (mod == 6) {
				return 300/100;
			}
			if (mod == 5) {
				return 266/100;
			}
			if (mod == 4) {
				return 233/100;
			}
			if (mod == 3) {
				return 200/100;
			}
			if (mod == 2) {
				return 166/100;
			}
			if (mod == 1) {
				return 133/100;
			}
			if (mod == 0) {
				return 100/100;
			}
			if (mod == -1) {
				return 75/100
			}
			if (mod == -2) {
				return 60/100
			}
			if (mod == -3) {
				return 50/100;
			}
			if (mod == -4) {
				return 43/100;
			}
			if (mod == -5) {
				return 36/100;
			}
			if (mod == -6) {
				return 33/100;
			}
		}
		else if (Generation == 3 || Generation == 4) {
			if (mod == 6) {
				return 300/100;
			}
			if (mod == 5) {
				return 266/100;
			}
			if (mod == 4) {
				return 250/100;
			}
			if (mod == 3) {
				return 200/100;
			}
			if (mod == 2) {
				return 166/100;
			}
			if (mod == 1) {
				return 133/100;
			}
			if (mod == 0) {
				return 100/100;
			}
			if (mod == -1) {
				return 75/100
			}
			if (mod == -2) {
				return 60/100
			}
			if (mod == -3) {
				return 50/100;
			}
			if (mod == -4) {
				return 43/100;
			}
			if (mod == -5) {
				return 36/100;
			}
			if (mod == -6) {
				return 33/100;
			}
		}
		else if (Generation >= 5) {
			if (mod == 6) {
				return 9/3;
			}
			if (mod == 5) {
				return 8/3;
			}
			if (mod == 4) {
				return 7/3;
			}
			if (mod == 3) {
				return 6/3;
			}
			if (mod == 2) {
				return 5/3;
			}
			if (mod == 1) {
				return 4/3;
			}
			if (mod == 0) {
				return 3/3;
			}
			if (mod == -1) {
				return 3/4
			}
			if (mod == -2) {
				return 3/5
			}
			if (mod == -3) {
				return 3/6;
			}
			if (mod == -4) {
				return 3/7;
			}
			if (mod == -5) {
				return 3/8;
			}
			if (mod == -6) {
				return 3/9;
			}
		}
	}
	if (type == "Evasion") {
		if (Generation == 1) {
			if (mod == -6) {
				return 400/100;
			}
			if (mod == -5) {
				return 350/100;
			}
			if (mod == -4) {
				return 300/100;
			}
			if (mod == -3) {
				return 250/100;
			}
			if (mod == -2) {
				return 200/100;
			}
			if (mod == -1) {
				return 150/100;
			}
			if (mod == 0) {
				return 100/100;
			}
			if (mod == 1) {
				return 66/100
			}
			if (mod == 2) {
				return 50/100
			}
			if (mod == 3) {
				return 40/100;
			}
			if (mod == 4) {
				return 33/100;
			}
			if (mod == 5) {
				return 28/100;
			}
			if (mod == 6) {
				return 25/100;
			}
		}
		else if (Generation == 2) {
			if (mod == -6) {
				return 300/100;
			}
			if (mod == -5) {
				return 266/100;
			}
			if (mod == -4) {
				return 233/100;
			}
			if (mod == -3) {
				return 200/100;
			}
			if (mod == -2) {
				return 166/100;
			}
			if (mod == -1) {
				return 133/100;
			}
			if (mod == 0) {
				return 100/100;
			}
			if (mod == 1) {
				return 75/100
			}
			if (mod == 2) {
				return 60/100
			}
			if (mod == 3) {
				return 50/100;
			}
			if (mod == 4) {
				return 43/100;
			}
			if (mod == 5) {
				return 36/100;
			}
			if (mod == 6) {
				return 33/100;
			}
		}
		else if (Generation == 3 || Generation == 4) {
			if (mod == -6) {
				return 300/100;
			}
			if (mod == -5) {
				return 266/100;
			}
			if (mod == -4) {
				return 250/100;
			}
			if (mod == -3) {
				return 200/100;
			}
			if (mod == -2) {
				return 166/100;
			}
			if (mod == -1) {
				return 133/100;
			}
			if (mod == 0) {
				return 100/100;
			}
			if (mod == 1) {
				return 75/100
			}
			if (mod == 2) {
				return 60/100
			}
			if (mod == 3) {
				return 50/100;
			}
			if (mod == 4) {
				return 43/100;
			}
			if (mod == 5) {
				return 36/100;
			}
			if (mod == 6) {
				return 33/100;
			}
		}
		else if (Generation >= 5) {
			if (mod == -6) {
				return 9/3;
			}
			if (mod == -5) {
				return 8/3;
			}
			if (mod == -4) {
				return 7/3;
			}
			if (mod == -3) {
				return 6/3;
			}
			if (mod == -2) {
				return 5/3;
			}
			if (mod == -1) {
				return 4/3;
			}
			if (mod == 0) {
				return 3/3;
			}
			if (mod == 1) {
				return 3/4
			}
			if (mod == 2) {
				return 3/5
			}
			if (mod == 3) {
				return 3/6;
			}
			if (mod == 4) {
				return 3/7;
			}
			if (mod == 5) {
				return 3/8;
			}
			if (mod == 6) {
				return 3/9;
			}
		}
	}
	else {
		if (Generation == 1 || Generation == 2) {
			if (mod == 6) {
				return 400/100;
			}
			if (mod == 5) {
				return 350/100;
			}
			if (mod == 4) {
				return 300/100;
			}
			if (mod == 3) {
				return 250/100;
			}
			if (mod == 2) {
				return 200/100;
			}
			if (mod == 1) {
				return 150/100;
			}
			if (mod == 0) {
				return 100/100;
			}
			if (mod == -1) {
				return 66/100;
			}
			if (mod == -2) {
				return 50/100;
			}
			if (mod == -3) {
				return 40/100;
			}
			if (mod == -4) {
				return 33/100;
			}
			if (mod == -5) {
				return 28/100;
			}
			if (mod == -6) {
				return 25/100;
			}
		}
		else if (Generation >= 3) {
			if (mod == 6) {
				return 8/2;
			}
			if (mod == 5) {
				return 7/2;
			}
			if (mod == 4) {
				return 6/2;
			}
			if (mod == 3) {
				return 5/2;
			}
			if (mod == 2) {
				return 4/2;
			}
			if (mod == 1) {
				return 3/2;
			}
			if (mod == 0) {
				return 2/2;
			}
			if (mod == -1) {
				return 2/3;
			}
			if (mod == -2) {
				return 2/4;
			}
			if (mod == -3) {
				return 2/5;
			}
			if (mod == -4) {
				return 2/6;
			}
			if (mod == -5) {
				return 2/7;
			}
			if (mod == -6) {
				return 2/8;
			}
		}
	}
	
	return undefined;
}

function returnArrValue(arr,valColumn,tarColumn,val) {

    for (let q = 0; q < arr.length; q++) {
		if(arr[q][valColumn] == val) {
			return arr[q][tarColumn];
		}
	}

	return undefined;
}


function returnArrData(arr,column,target) {

	let result = [];

    for (let q = 0; q < arr.length; q++) {
		if(arr[q][column] == target) {
			result.push(arr[q]);
		}
	}

	return result;
}

function returnAppArrData(arr,column,target) {

	let result = [];

    for (let q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"])) {
			if(arr[q][column] == target) {
				result.push(arr[q]);
			}
		}
	}

	return result;
}


function SwitchTab(tab,sub) {
	if (tab != undefined) {

		let inputs = document.querySelectorAll("#navigation input");
		let input = document.querySelector("#navigation input[value='"+tab+"']");

		for (let q = 0; q < inputs.length; q++) {
			inputs[q].checked = false;
		}
		input.checked = true;


		let tars = document.querySelectorAll("#contain > div");
		let tar = document.querySelector("#contain > div[value='"+tab.toLowerCase()+"']");

		for (let q = 0; q < tars.length; q++) {
			tars[q].style.display = "none";
		}
		tar.style.display = "block";

		if (sub != undefined) {
			let inputs = tar.querySelectorAll(":scope section[name='list'] ol input");
			let contents = tar.querySelectorAll(":scope section[name='content'] > div[name]")
			if (sub == "Damage Calculator") {
				let input = tar.querySelector(":scope #tool-options-0");
				for (let q = 0; q < inputs.length; q++) {
					inputs[q].checked = false;
				}
				input.checked = true;

				let content = tar.querySelector(":scope div#dmg");
				for (let q = 0; q < contents.length; q++) {
					contents[q].style.display = "none";
				}
				content.style.display = "block";
			}
		}

	}
}





function sortObjectArray(objectsArr,prop,ascending) {

	let objectsHaveProp = objectsArr.every(object => object.hasOwnProperty(prop));

	if(objectsHaveProp) {
		let newObjectsArr = objectsArr.slice();
		newObjectsArr.sort((a, b) => {
			if(isNaN(Number(a[prop])))  {
				let textA = a[prop].toUpperCase(),
					textB = b[prop].toUpperCase();
				if(ascending)   {
	
					return textA < textB ? -1 : textA > textB ? 1 : 0;
				} else {
		
					return textB < textA ? -1 : textB > textA ? 1 : 0;
				}
			} else {
				return ascending ? a[prop] - b[prop] : b[prop] - a[prop];
			}
		});

		return newObjectsArr;
	}

	return objectsArr;
}






function getTutorData(val,column) {

	let arr = finaldata["Locations"]["Move Tutor"];
	let result = [];

	for (let q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"]) == true) {
			if (arr[q][column] == val) {
				result.push(arr[q])
			}
		}
	}

	return result;
}



function getApplicable_old(val) {

	if (val != undefined) {
		if (val == "All") {
			return true;
		}
		if (val.includes(",")) {
			let valArr = val.split(",");
			for (let q = 0; q < valArr.length; q++) {
				if (valArr[q] == GameName) {
					return true;
				}
			}
		}
		else {
			if (val == GameName) {
				return true;
			}
		}
	}
	return false;
}


function classSwitches(cla,tar) {

	for (let q = 0; q < tar.length; q++) {
		if(tar[q].classList.contains(cla)) {
			tar[q].classList.remove(cla);
		}
		else {
			tar[q].classList.add(cla);
		}
	}
}

function classSwitch(cla) {
	let tar = event.target;

	if(tar.classList.contains(cla)) {
		tar.classList.remove(cla);
	}
	else {
		tar.classList.add(cla);
	}
	
}


function getItemIcon(item) {

	let arr = finaldata["Items"]["Reference"];

	for (let q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"])) {
			if (arr[q]["Item"] == item) {
				if (arr[q]["Icon"] != undefined && arr[q]["Icon"] != "") {
					return arr[q]["Icon"]
				}
			}
		}
	}
    return item;
}




function joinObj(arr, attr,type){


	let result = [];
  
	for (let i = 0; i < arr.length; i++){
		result.push(arr[i][attr]);
	}
  
	return result.join(type);
  }



function getEvolutionData(i,column) {

	let arrName = finaldata["Pokémon"]["Evolution Specie"];
	let arrStage = finaldata["Pokémon"]["Evolution Stage"];
	let arrMethod = finaldata["Pokémon"]["Evolution Method"];

	let result = [];
	let pokémon = arrName[i][DATA_Pokémon_EvolutionSpecie[column]];

	if (pokémon == undefined) {
		i = getDefaultInt(i);
		pokémon = arrName[i][DATA_Pokémon_EvolutionSpecie[column]];
	}


	if (pokémon != undefined && pokémon != "None") {
		if (pokémon.includes(",")) {
			pokémon = pokémon.split(",");
			for(q = 0; q < pokémon.length; q++) {
				let stage = arrStage[getPokémonInt(pokémon[q])][DATA_Pokémon_EvolutionStage["Pokémon Stage"]];
				let method = arrMethod[getPokémonInt(pokémon[q])][DATA_Pokémon_EvolutionMethod["Type"]];
				let factor = arrMethod[getPokémonInt(pokémon[q])][DATA_Pokémon_EvolutionMethod["Factor"]];
				let additional = arrMethod[getPokémonInt(pokémon[q])][DATA_Pokémon_EvolutionMethod["Additional"]];
				let gender = arrMethod[getPokémonInt(pokémon[q])][DATA_Pokémon_EvolutionMethod["Gender"]];
		
				if (pokémon[q] == undefined) {
					pokémon[q] = arrName[getDefaultInt(i)][DATA_Pokémon_EvolutionSpecie[column]];
				}
				if (stage == undefined) {
					stage = arrStage[getDefaultInt(i)][DATA_Pokémon_EvolutionStage["Pokémon Stage"]];
				}

				if (method == undefined && factor == undefined && additional == undefined && gender == undefined) {
					method = arrMethod[getDefaultInt(i)][DATA_Pokémon_EvolutionMethod["Type"]];	
					factor = arrMethod[getDefaultInt(i)][DATA_Pokémon_EvolutionMethod["Factor"]];
					additional = arrMethod[getDefaultInt(i)][DATA_Pokémon_EvolutionMethod["Additional"]];
					gender = arrMethod[getDefaultInt(i)][DATA_Pokémon_EvolutionMethod["Gender"]];
				}

				if (pokémon != undefined) {
					let obj = new Object();
					obj["Integer"] = getPokémonInt(pokémon[q]);
					obj["Pokémon"] = pokémon[q];
					obj["Stage"] = stage;
					obj["Method"] = method;
					obj["Factor"] = factor;
					obj["Additional"] = additional;
					obj["Gender"] = gender;
					result.push(obj);
				}
			}
		}
		else {
			let stage = arrStage[getPokémonInt(pokémon)][DATA_Pokémon_EvolutionStage["Pokémon Stage"]];
			let method = arrMethod[getPokémonInt(pokémon)][DATA_Pokémon_EvolutionMethod["Type"]];
			let factor = arrMethod[getPokémonInt(pokémon)][DATA_Pokémon_EvolutionMethod["Factor"]];
			let additional = arrMethod[getPokémonInt(pokémon)][DATA_Pokémon_EvolutionMethod["Additional"]];
			let gender = arrMethod[getPokémonInt(pokémon)][DATA_Pokémon_EvolutionMethod["Gender"]];
	
			if (pokémon == undefined) {
				pokémon = arrName[getDefaultInt(i)][DATA_Pokémon_EvolutionSpecie[column]];
			}
			if (stage == undefined) {
				stage = arrStage[getDefaultInt(i)][DATA_Pokémon_EvolutionStage["Pokémon Stage"]];
			}
			if (method == undefined && factor == undefined && additional == undefined && gender == undefined) {
				method = arrMethod[getDefaultInt(i)][DATA_Pokémon_EvolutionMethod["Type"]];	
				factor = arrMethod[getDefaultInt(i)][DATA_Pokémon_EvolutionMethod["Factor"]];
				additional = arrMethod[getDefaultInt(i)][DATA_Pokémon_EvolutionMethod["Additional"]];
				gender = arrMethod[getDefaultInt(i)][DATA_Pokémon_EvolutionMethod["Gender"]];
			}
	
			if (pokémon != undefined) {
				let obj = new Object();
				obj["Integer"] = getPokémonInt(pokémon);
				obj["Pokémon"] = pokémon;
				obj["Stage"] = stage;
				obj["Method"] = method;
				obj["Factor"] = factor;
				obj["Additional"] = additional;
				obj["Gender"] = gender;
				result.push(obj);
			}
		}
	}
	
	return result;
}

function binaryHPCalc(ivs) {
	
	ivs = splitStr(ivs,",");

	let HP = ivs[0];
	let Attack = ivs[1];
	let Defense = ivs[2];
	let Special = ivs[3];
	let Speed = ivs[5];

	HP = undwsDel(HP,0)
	Attack = undwsDel(Attack,0)
	Defense = undwsDel(Defense,0)
	Special = undwsDel(Special,0)
	Speed = undwsDel(Speed,0)

	HP = parseInt(HP);
	Attack = parseInt(Attack);
	Defense = parseInt(Defense);
	Special = parseInt(Special);
	Speed = parseInt(Speed);

	let val = 0;

	if (Attack % 2 != 0) {
		val = val+8;
	}
	if (Defense % 2 != 0) {
		val = val+4;
	}
	if (Speed % 2 != 0) {
		val = val+2;
	}
	if (Special % 2 != 0) {
		val = val+1;
	}



	return val;
}

function naturalGiftPowerCalc(item) {
	let p60 = [];
	let p70 = [];
	let p80 = [];
	let p90 = [];
	let p100 = [];
	
	if (Generation >= 4 && Generation <= 5) {
		p60 = ["Cheri Berry","Chesto Berry","Pecha Berry","Rawst Berry","Aspear Berry","Leppa Berry","Oran Berry","Persim Berry","Lum Berry","Sitrus Berry","Figy Berry","Wiki Berry","Mago Berry","Aguav Berry","Iapapa Berry","Razz Berry","Occa Berry","Passho Berry","Wacan Berry","Rindo Berry","Yache Berry","Chople Berry","Kebia Berry","Shuca Berry","Coba Berry","Payapa Berry","Tanga Berry","Charti Berry","Kasib Berry","Haban Berry","Colbur Berry","Babiri Berry","Chilan Berry"];
		p70 = ["Bluk Berry","Nanab Berry","Wepear Berry","Pinap Berry","Pomeg Berry","Kelpsy Berry","Qualot Berry","Hondew Berry","Grepa Berry","Tamato Berry","Cornn Berry","Magost Berry","Rabuta Berry","Nomel Berry","Spelon Berry","Pamtre Berry"];
		p80 = ["Watmel Berry","Durin Berry","Belue Berry","Liechi Berry","Ganlon Berry","Salac Berry","Petaya Berry","Apicot Berry","Lansat Berry","Starf Berry","Enigma Berry","Micle Berry","Custap Berry","Jaboca Berry","Rowap Berry"];
	}
	else if (Generation >= 6) {
		p80 = ["Cheri Berry","Chesto Berry","Pecha Berry","Rawst Berry","Aspear Berry","Leppa Berry","Oran Berry","Persim Berry","Lum Berry","Sitrus Berry","Figy Berry","Wiki Berry","Mago Berry","Aguav Berry","Iapapa Berry","Razz Berry","Occa Berry","Passho Berry","Wacan Berry","Rindo Berry","Yache Berry","Chople Berry","Kebia Berry","Shuca Berry","Coba Berry","Payapa Berry","Tanga Berry","Charti Berry","Kasib Berry","Haban Berry","Colbur Berry","Babiri Berry","Chilan Berry","Roseli Berry"]
		p90 = ["Bluk Berry","Nanab Berry","Wepear Berry","Pinap Berry","Pomeg Berry","Kelpsy Berry","Qualot Berry","Hondew Berry","Grepa Berry","Tamato Berry","Cornn Berry","Magost Berry","Rabuta Berry","Nomel Berry","Spelon Berry","Pamtre Berry"]
		p100 = ["Watmel Berry","Durin Berry","Belue Berry","Liechi Berry","Ganlon Berry","Salac Berry","Petaya Berry","Apicot Berry","Lansat Berry","Starf Berry","Enigma Berry","Micle Berry","Custap Berry","Jaboca Berry","Rowap Berry","Kee Berry","Maranga Berry"]
	}


	if (p60.includes(item)) {
		return 60;
	}
	else if (p70.includes(item)) {
		return 70;
	}
	else if (p80.includes(item)) {
		return 80;
	}
	else if (p90.includes(item)) {
		return 90;
	}
	else if (p100.includes(item)) {
		return 100;
	}
	else {
		return 0;
	}

}

function hiddenPowerCalc(ivs) {

	ivs = splitStr(ivs,",");

	let types = [...Types];
	types.splice(0,1);

	let Type;
	let Power;

	if (Generation == 2) {
		let HP = ivs[0];
		let Attack = ivs[1];
		let Defense = ivs[2];
		let Special = ivs[3];
		let Speed = ivs[5];

		HP = undwsDel(HP,0)
		Attack = undwsDel(Attack,0)
		Defense = undwsDel(Defense,0)
		Special = undwsDel(Special,0)
		Speed = undwsDel(Speed,0)

		HP = parseInt(HP)
		Attack = parseInt(Attack)
		Defense = parseInt(Defense)
		Special = parseInt(Special)
		Speed = parseInt(Speed)


		let AttackMod = ((Attack/4)-(Math.floor(Attack/4)))*4;
		let DefenseMod = ((Defense/4)-(Math.floor(Defense/4)))*4;
		let SpecialMod = ((Special/4)-(Math.floor(Special/4)))*4;

		if (HP < 8) {
			HP = 0;
		}
		else {
			HP = 1;
		}
		
		if (Attack < 8) {
			Attack = 0;
		}
		else {
			Attack = 1;
		}

		if (Defense < 8) {
			Defense = 0;
		}
		else {
			Defense = 1;
		}

		if (Special < 8) {
			Special = 0;
		}
		else {
			Special = 1;
		}

		if (Speed < 8) {
			Speed = 0;
		}
		else {
			Speed = 1;
		}

		Power = Math.floor(((5*(Special+(2*Speed)+(4*Defense)+(8*Attack))+SpecialMod)/2))+31;
		Type = 4*AttackMod+DefenseMod;
	}
	else if (Generation >= 3) {
		let HP = ivs[0];
		let Attack = ivs[1];
		let Defense = ivs[2];
		let SpAtk = ivs[3];
		let SpDef = ivs[4];
		let Speed = ivs[5];

		HP = parseInt(HP);
		Attack = parseInt(Attack);
		Defense = parseInt(Defense);
		SpAtk = parseInt(SpAtk);
		SpDef = parseInt(SpDef);
		Speed = parseInt(Speed);

		HP = undwsDel(HP,0);
		Attack = undwsDel(Attack,0);
		Defense = undwsDel(Defense,0);
		SpAtk = undwsDel(SpAtk,0);
		SpDef = undwsDel(SpDef,0);
		Speed = undwsDel(Speed,0);

		let HPMod1 = HP;
		let AttackMod1 = Attack;
		let DefenseMod1 = Defense;
		let SpAtkMod1 = SpAtk;
		let SpDefMod1 = SpDef;
		let SpeedMod1 = Speed;

		if (HPMod1 % 2 != 0) {
			HPMod1 = 1;
		}
		else {
			HPMod1 = 0;
		}

		if (AttackMod1 % 2 != 0) {
			AttackMod1 = 1;
		}
		else {
			AttackMod1 = 0;
		}

		if (DefenseMod1 % 2 != 0) {
			DefenseMod1 = 1;
		}
		else {
			DefenseMod1 = 0;
		}

		if (SpAtkMod1 % 2 != 0) {
			SpAtkMod1 = 1;
		}
		else {
			SpAtkMod1 = 0;
		}

		if (SpDefMod1 % 2 != 0) {
			SpDefMod1 = 1;
		}
		else {
			SpDefMod1 = 0;
		}

		if (SpeedMod1 % 2 != 0) {
			SpeedMod1 = 1;
		}
		else {
			SpeedMod1 = 0;
		}


		let HPMod2 = ((HP/4)-(Math.floor(HP/4)))*4;
		let AttackMod2 = ((Attack/4)-(Math.floor(Attack/4)))*4;
		let DefenseMod2 = ((Defense/4)-(Math.floor(Defense/4)))*4;
		let SpAtkMod2 = ((SpAtk/4)-(Math.floor(SpAtk/4)))*4;
		let SpDefMod2 = ((SpDef/4)-(Math.floor(SpDef/4)))*4;
		let SpeedMod2 = ((Speed/4)-(Math.floor(Speed/4)))*4;

		if (HPMod2 == 2 || HPMod2 == 3) {
			HPMod2 = 1;
		}
		else {
			HPMod2 = 0;
		}

		if (AttackMod2 == 2 || AttackMod2 == 3) {
			AttackMod2 = 1;
		}
		else {
			AttackMod2 = 0;
		}

		if (DefenseMod2 == 2 || DefenseMod2 == 3) {
			DefenseMod2 = 1;
		}
		else {
			DefenseMod2 = 0;
		}

		if (SpAtkMod2 == 2 || SpAtkMod2 == 3) {
			SpAtkMod2 = 1;
		}
		else {
			SpAtkMod2 = 0;
		}

		if (SpDefMod2 == 2 || SpDefMod2 == 3) {
			SpDefMod2 = 1;
		}
		else {
			SpDefMod2 = 0;
		}

		if (SpeedMod2 == 2 || SpeedMod2 == 3) {
			SpeedMod2 = 1;
		}
		else {
			SpeedMod2 = 0;
		}
	
		Type = Math.floor((((HPMod1)+(2*AttackMod1)+(4*DefenseMod1)+(8*SpeedMod1)+(16*SpAtkMod1)+(32*SpDefMod1))*15)/63);
		Power = Math.floor((((HPMod2)+(2*AttackMod2)+(4*DefenseMod2)+(8*SpeedMod2)+(16*SpAtkMod2)+(32*SpDefMod2))*40)/63)+30;
	}

	let obj = new Object();
	obj["Type"] = types[Type];
	obj["Power"] = Power;
	return obj;
}

function shinyTest(ivs) {
	ivs = splitStr(ivs,",");
	if (Generation == 1 || Generation == 2) {
		let HP = ivs[0];
		let Attack = ivs[1];
		let Defense = ivs[2];
		let Special = ivs[3];
		let Speed = ivs[5];

		HP = undwsDel(HP,0)
		Attack = undwsDel(Attack,0)
		Defense = undwsDel(Defense,0)
		Special = undwsDel(Special,0)
		Speed = undwsDel(Speed,0)

		HP = parseInt(HP)
		Attack = parseInt(Attack)
		Defense = parseInt(Defense)
		Special = parseInt(Special)
		Speed = parseInt(Speed)

		let vals1 = [10];
		let vals2 = [2,3,6,7,10,11,14,15];
		
		if (vals1.includes(Defense) && vals1.includes(Special) && vals1.includes(Speed) && vals2.includes(Attack)) {
			return true;
		}
	}

	return false;
}




function getOffspringData(i) {

	let arr = finaldata["Pokémon"]["Offspring"];
	let result = [];

	let pok = getPokémonName(i);

	for(q = 0; q < arr.length; q++) {
		if (arr[q][DATA_Pokémon_Offspring["Offspring"]] != undefined) {
			if(arr[q][DATA_Pokémon_Offspring["Offspring"]].includes(",")) {
				let tempArr1 = arr[q][DATA_Pokémon_Offspring["Offspring"]].split(",");
	
				for(u = 0; u < tempArr1.length; u++) {
					if(tempArr1[u] == pok) {
						let obj = new Object();
						obj["Integer"] = q;
						obj["Pokémon"] = getPokémonName(q);
						if (arr[q][DATA_Pokémon_Offspring["Factor"]] != undefined) {
							obj["Factor"] = arr[q][DATA_Pokémon_Offspring["Factor"]].split(",")[u];
						}
						result.push(obj)
					}
				}
			}
			else {
				if (arr[q][DATA_Pokémon_Offspring["Offspring"]] == pok) {
					let obj = new Object();
					obj["Integer"] = q;
					obj["Pokémon"] = getPokémonName(q);
					if (arr[q][DATA_Pokémon_Offspring["Factor"]] != undefined) {
						obj["Factor"] = arr[q][DATA_Pokémon_Offspring["Factor"]];
					}
					result.push(obj)
				}
			}
		}
	}
	
	return result;
}


function formatEvoBreedText(i,type) {

	let Text = [];

	if (type == "Breed") {
		let poks = [];

		for (let q = 0; q < finaldata["Pokémon"]["Offspring"].length; q++) {
			if (finaldata["Pokémon"]["Reference"][i][DATA_Pokémon_Reference["Reference"]] == "true") {
				if (finaldata["Pokémon"]["Offspring"][q][DATA_Pokémon_Offspring["Offspring"]] != undefined) {
					if (finaldata["Pokémon"]["Offspring"][q][DATA_Pokémon_Offspring["Offspring"]].includes(",")) {
						let ofs = finaldata["Pokémon"]["Offspring"][q][DATA_Pokémon_Offspring["Offspring"]].split(",");
						for (let u = 0; u < ofs.length; u++) {
							if (getPokémonInt(ofs[u]) == i) {
								if (q != i) {
									let obj = new Object();
									obj["Integer"] = q;
									obj["Pokémon"] = getPokémonName(q);
									obj["Gender Ratio"] = returnData(q,"Gender Ratio","").join("/");
									obj["Primary Egg Group"] = returnData(q,"Egg Group","")[0];
									obj["Secondary Egg Group"] = returnData(q,"Egg Group","")[1];
									if (finaldata["Pokémon"]["Offspring"][q][DATA_Pokémon_Offspring["Factor"]] != undefined) {
										if (finaldata["Pokémon"]["Offspring"][q][DATA_Pokémon_Offspring["Factor"]].split(",").includes(",")) {
											obj["Offspring Factor"] = finaldata["Pokémon"]["Offspring"][q][DATA_Pokémon_Offspring["Factor"]].split(",")[u];
										}
										else {
											obj["Offspring Factor"] = finaldata["Pokémon"]["Offspring"][q][DATA_Pokémon_Offspring["Factor"]];
										}
									}
									else {
										obj["Offspring Factor"] = undefined;
									}
									poks.push(obj)
								}
							}
						}
					}
					else {
						if (getPokémonInt(finaldata["Pokémon"]["Offspring"][q][DATA_Pokémon_Offspring["Offspring"]]) == i) {
							if (q != i) {
								let obj = new Object();
								obj["Integer"] = q;
								obj["Pokémon"] = getPokémonName(q);
								obj["Gender Ratio"] = returnData(q,"Gender Ratio","").join("/");
								obj["Primary Egg Group"] = returnData(q,"Egg Group","")[0];
								obj["Secondary Egg Group"] = returnData(q,"Egg Group","")[1];
								obj["Offspring Factor"] = finaldata["Pokémon"]["Offspring"][q][DATA_Pokémon_Offspring["Factor"]];
								poks.push(obj)
							}
						}
					}
				}
			}
		}

		let res = divideDifferenceArr(poks,["Primary Egg Group","Secondary Egg Group","Offspring Factor"],[["Gender Ratio","1/0","0/0"]]);

		for (let q = 0; q < res.length; q++) {
			let pks = [];
			let egg;
			let egg1 = res[q][0]["Primary Egg Group"];
			let egg2 = res[q][0]["Secondary Egg Group"];
			let factor = res[q][0]["Offspring Factor"];


			let att1 = "type='invert' onclick='callPopUp(`Egg Group`)' name='eggText"+egg1+"' dataname='value'";
			let att2 = "type='invert' onclick='callPopUp(`Egg Group`)' name='eggText"+egg2+"' dataname='value'";
			


			for (let u = 0; u < res[q].length; u++) {
				pks.push(res[q][u]["Pokémon"]);
			}
	
			if (factor == undefined) {
				factor = "";
			}
		

			for (let u = 0; u < pks.length; u++) {
				let att = "type='invert' onclick='modalData()' value='"+getPokémonInt(pks[u])+"'";
				pks[u] = "<b "+att+">"+pks[u]+"</b>";
			}

			if (egg2 != undefined) {
				egg = "<b "+att1+">"+egg1+"</b> or <b "+att2+">"+egg2+"</b>";
			}
			else {
				egg = "<b "+att1+">"+egg1+"</b>";
			}

			if (res[q][0]["Gender Ratio"] == "1/0" || res[q][0]["Gender Ratio"] == "0/0") {
				egg = "<b "+att1+">"+"Ditto"+"</b>";
			}

			let txt = "Breed "+pks.join(", ").replace(/,([^,]*)$/, ' or $1')+" with "+egg+" "+factor+".";
			txt = txt.replaceAll("  "," ").replaceAll(" .",".");
			Text.push(txt);
		}

	}
	else if(type == "Evolution") {
		let previous = getEvolutionData(i,"Previous");
		let next = getEvolutionData(i,"Next");
		if (previous.length == 0) {
			previous = getEvolutionData(getDefaultInt(i),"Previous")
		}

		if (previous.length > 0) {
			let poks = getEvolutionData(previous[0]["Integer"],"Next");
			
			for (let q = 0; q < poks.length; q++) {
				let pok = previous[0]["Pokémon"];
				let method = poks[q]["Method"];
				let factor = poks[q]["Factor"];
				let gender = poks[q]["Gender"];
				let add = poks[q]["Additional"];

				let dash = "by";

				let att1 = "type='invert' onclick='modalData()' value='"+previous[0]["Integer"]+"'"
				let att2 = "type='invert' onclick='dataRedirect()' name='item'"

				pok = "<b "+att1+">"+pok+"</b>"

				if (method == undefined) {
					method = "";
				}
				if (factor == undefined) {
					factor = "";
				}
				else if (isNaN(factor)) {
					dash = "with";
					factor = "<b "+att2+">"+factor+"</b>"
				}
				else {
					factor = "("+factor+")"
				}
				if (gender == undefined) {
					gender = "";
				}
				else if (gender == "♂") {
					gender = "<span name='male'>♂</span>"
				}
				else if (gender == "♀") {
					gender = "<span name='female'>♀</span>"
				}
				if (add == undefined) {
					add = "";
				}
			


				method = method.replaceAll("Special ","").replaceAll("Item","").replaceAll("Unique","");

				let txt = "Evolve  "+pok+" "+gender+" "+dash+" "+method+" "+factor+" "+add+".";

				if (method == "Unavailable") {
					txt = "Unavailable";
				}
				txt = txt.replaceAll("  "," ");
				txt = txt.replaceAll(" .",".");
				txt = txt.replaceAll("by  by","by");
				Text.push(txt);
			}
		}
	}	

	return Text;
}



function getItemData(item,type) {

	let arr;
	let column;
	let result = [];
	if (type == "Description") {
		arr = finaldata["Items"]["Description"];
		column = "Description";
	}

	for (let q = 0; q < arr.length; q++) {
		if(getApplicable(arr[q]["Game"])) {
			if(arr[q]["Item"] == item) {
				result.push(arr[q][column])
			}
		}
	}

	return result;
}

function uniqueValueSelect(selects) {

	let vals = [];

	for (let i = 0; i < selects.length; i++) {
		vals.push(selects[i].value);
	}

	for (let i = 0; i < selects.length; i++) {
		let opt = selects[i].querySelectorAll(":scope option")
		for (let u = 0; u < opt.length; u++) {
			opt[u].style.removeProperty("display");
			opt[u].removeAttribute("disabled");
		}
	}

	for (let i = 0; i < selects.length; i++) {
		for (let u = 0; u < vals.length; u++) {
			if (vals[u] != "") {
				if (i != u) {
					let opt = selects[i].querySelector(":scope option[value='"+vals[u]+"']")
					if (opt != undefined) {
						opt.style.display = "none";
						opt.setAttribute("disabled","");
					}
				}
			}
		}
	}
}


function returnMoveLearnset(move,conditions) {

	let arr1 = finaldata["Pokémon Learnset"]["Level Up"];
	let arr2 = finaldata["Pokémon Learnset"]["Evolution"];
	let arr3 = finaldata["Pokémon Learnset"]["Machine"];
	let arr4 = finaldata["Pokémon Learnset"]["Breeding"];

	let result = [];

	for (let i = 0; i < arr1.length; i++) {
		if (getApplicable(arr1[i]["Game"])) {
			if(arr1[i]["Move"] == move) {
				result.push(arr1[i]["Pokémon"]);
			}
		}
	}
	for (let i = 0; i < arr2.length; i++) {
		if (getApplicable(arr2[i]["Game"])) {
			if(arr2[i]["Move"] == move) {
				result.push(arr2[i]["Pokémon"]);
			}
		}
	}
	for (let i = 0; i < arr3.length; i++) {
		if (getApplicable(arr3[i]["Game"])) {
			if(arr3[i]["Move"] == move) {
				result.push(arr3[i]["Pokémon"]);
			}
		}
	}
	for (let i = 0; i < arr4.length; i++) {
		if (getApplicable(arr4[i]["Game"])) {
			if(arr4[i]["Move"] == move) {
				result.push(arr4[i]["Pokémon"]);
			}
		}
	}

	result = [...new Set(result)];

	return result;
	
}


function referenceLink(text) {

	let items = finaldata["Items"]["Reference"];
	let abilities = finaldata["Abilities"]["Reference"];
	let moves = finaldata["Moves"]["Reference"];
	let poks = finaldata["Pokémon"]["Reference"];

	let itemArr = [];
	let abilityArr = [];
	let moveArr = [];
	let pokArr = [];


	for (let i = 0; i < items.length; i++) {
		let item = items[i]["Item"];
		if (item != undefined) {
			if (item.includes(" ")) {
				itemArr.push(item)
			}
		}
	}
	for (let i = 0; i < items.length; i++) {
		let item = items[i]["Item"];
		if (item != undefined) {
			if (!item.includes(" ")) {
				itemArr.push(item)
			}
		}
	}


	for (let i = 0; i < abilities.length; i++) {
		if (getApplicable(abilities[i]["Game"])) {
			let ability = abilities[i]["Ability"];
			if (ability.includes(" ")) {
				abilityArr.push(ability)
			}
		}
	}
	for (let i = 0; i < abilities.length; i++) {
		if (getApplicable(abilities[i]["Game"])) {
			let ability = abilities[i]["Ability"];
			if (!ability.includes(" ")) {
				abilityArr.push(ability)
			}
		}
	}

	for (let i = 0; i < moves.length; i++) {
		if (moves[i][DATA_Move_Reference["Reference"]]) {
			let move = moves[i][DATA_Move_Reference["Name"]];
			if (move.includes(" ")) {
				moveArr.push(move)
			}
		}
	}
	for (let i = 0; i < moves.length; i++) {
		if (moves[i][DATA_Move_Reference["Reference"]]) {
			let move = moves[i][DATA_Move_Reference["Name"]];
			if (!move.includes(" ")) {
				moveArr.push(move)
			}
		}
	}


	for (let i = 0; i < poks.length; i++) {
		if (poks[i][DATA_Move_Reference["Reference"]]) {
			let pok = poks[i]["Pokémon"];
			if (pok.includes(" ")) {
				pokArr.push(pok)
			}
		}
	}
	for (let i = 0; i < poks.length; i++) {
		if (poks[i][DATA_Move_Reference["Reference"]]) {
			let pok = poks[i]["Pokémon"];
			if (!pok.includes(" ")) {
				pokArr.push(pok)
			}
		}
	}




	for (let i = 0; i < itemArr.length; i++) {
		let item = itemArr[i];
		let i1 = " "+item+" ";
		let i2 = " "+item+".";
		let i3 = " "+item+",";
		let i4 = '"'+item+'"';

		let first = "<b type='invert' onclick='dataRedirect()' name='item' style='font-weight:bold;text-shadow:1px 1px #000;'>";
		let last = "</b>";

		if (text.includes(i1)) {
			text = text.replaceAll(i1,first+i1+last)
		}
		if (text.includes(i2)) {
			text = text.replaceAll(i2,first+i2+last)
		}
		if (text.includes(i3)) {
			text = text.replaceAll(i3,first+i3+last)
		}
		if (text.includes(i4)) {
			text = text.replaceAll(i4,first+i4+last)
		}
		text = text.replaceAll(first+' ',' '+first);
		text = text.replaceAll(first+'"','"'+first);
	}

	for (let i = 0; i < abilityArr.length; i++) {
		let ability = abilityArr[i];
		let i1 = " "+ability+" ";
		let i2 = " "+ability+".";
		let i3 = " "+ability+",";
		let i4 = '"'+ability+'"';

		let first = "<b type='invert' onclick='dataRedirect()' name='ability' style='font-weight:bold;text-shadow:1px 1px #000;'>";
		let last = "</b>";

		if (text.includes(i1)) {
			text = text.replaceAll(i1,first+i1+last)
		}
		if (text.includes(i2)) {
			text = text.replaceAll(i2,first+i2+last)
		}
		if (text.includes(i3)) {
			text = text.replaceAll(i3,first+i3+last)
		}
		if (text.includes(i4)) {
			text = text.replaceAll(i4,first+i4+last)
		}
		text = text.replaceAll(first+' ',' '+first);
		text = text.replaceAll(first+'"','"'+first);
	}

	for (let i = 0; i < moveArr.length; i++) {
		let move = moveArr[i];
		let i1 = " "+move+" ";
		let i2 = " "+move+".";
		let i3 = " "+move+",";
		let i4 = '"'+move+'"';

		let type = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],move);

		let first = "<b type='invert' onclick='dataRedirect()' name='move' style='color:var(--type"+type+");font-weight:bold;text-shadow:1px 1px #000;'>";
		let last = "</b>";

		if (text.includes(i1)) {
			text = text.replaceAll(i1,first+i1+last)
		}
		if (text.includes(i2)) {
			text = text.replaceAll(i2,first+i2+last)
		}
		if (text.includes(i3)) {
			text = text.replaceAll(i3,first+i3+last)
		}
		if (text.includes(i4)) {
			text = text.replaceAll(i4,first+i4+last)
		}
		text = text.replaceAll(first+' ',' '+first);
		text = text.replaceAll(first+'"','"'+first);
	}
	
	for (let i = 0; i < pokArr.length; i++) {
		let pok = pokArr[i];
		let i1 = " "+pok+" ";
		let i2 = " "+pok+".";
		let i3 = " "+pok+",";
		let i4 = '"'+pok+'"';

		let first = "<b type='invert' onclick='modalData()' style='font-weight:bold;text-shadow:1px 1px #000;'>";
		let last = "</b>";

		if (text.includes(i1)) {
			text = text.replaceAll(i1,first+i1+last)
		}
		if (text.includes(i2)) {
			text = text.replaceAll(i2,first+i2+last)
		}
		if (text.includes(i3)) {
			text = text.replaceAll(i3,first+i3+last)
		}
		if (text.includes(i4)) {
			text = text.replaceAll(i4,first+i4+last)
		}
		text = text.replaceAll(first+' ',' '+first);
		text = text.replaceAll(first+'"','"'+first);
	}



	text = text.replaceAll("."+last,last+".")
	text = text.replaceAll(","+last,last+",")
	text = text.replaceAll('"'+last,last+'"')
	text = text.replaceAll('"'+last,last+'"')
	text = text.replaceAll(' '+last,last+' ')

	return text;
}



function doubleClicker(handler) {
	let timeout = 0,
		clicked = false;
	return function(e) {
		e.preventDefault();
		if(clicked) {
			clearTimeout(timeout);
			clicked = false;
			return handler.apply(this, arguments);
		} else {
			clicked = true;
			timeout = setTimeout(function() {
				clicked = false;
			}, 1000);
		}
	};
}




function flingPowerCalc(item) {
	let p10 = ["Air Balloon","Big Root","Bright Powder","Choice Band","Choice Scarf","Choice Specs","Destiny Knot","Discount Coupon","Electric Seed","Expert Belt","Focus Band","Focus Sash","Grassy Seed","Lagging Tail","Leftovers","Mental Herb","Metal Powder","Misty Seed","Muscle Band","Power Herb","Psychic Seed","Quick Powder","Reaper Cloth","Red Card","Ring Target","Shed Shell","Silk Scarf","Silver Powder","Smooth Rock","Soft Sand","Soothe Bell","White Herb","Wide Lens","Wise Glasses","Zoom Lens","Bread","Coconut Milk","Fresh Cream","Fried Food","Fruit Bunch","Instant Noodles","Mixed Mushrooms","Pack of Potatoes","Packaged Curry","Pasta","Precooked Burger","Pungent Root","Salad Mix","Sausages","Smoke-Poke Tail","Adamant Mint","Aguav Berry","Apicot Berry","Aspear Berry","Babiri Berry","Belue Berry","Berry Sweet","Blue Scarf","Bluk Berry","Bold Mint","Brave Mint","Calm Mint","Careful Mint","Charti Berry","Cheri Berry","Chesto Berry","Chilan Berry","Chople Berry","Clover Sweet","Coba Berry","Colbur Berry","Cornn Berry","Custap Berry","Durin Berry","Enigma Berry","Figy Berry","Flower Sweet","Full Incense","Ganlon Berry","Gentle Mint","Green Scarf","Grepa Berry","Haban Berry","Hasty Mint","Hondew Berry","Hopo Berry","Iapapa Berry","Impish Mint","Jaboca Berry","Jolly Mint","Kasib Berry","Kebia Berry","Kee Berry","Kelpsy Berry","Lansat Berry","Lax Incense","Lax Mint","Leppa Berry","Liechi Berry","Lonely Mint","Love Sweet","Luck Incense","Lum Berry","Mago Berry","Magost Berry","Maranga Berry","Micle Berry","Mild Mint","Modest Mint","Naive Mint","Nanab Berry","Naughty Mint","Nomel Berry","Occa Berry","Odd Incense","Oran Berry","Pamtre Berry","Passho Berry","Payapa Berry","Pecha Berry","Persim Berry","Petaya Berry","Pinap Berry","Pink Nectar","Pink Scarf","Pomeg Berry","Pure Incense","Purple Nectar","Qualot Berry","Quiet Mint","Rabuta Berry","Rash Mint","Rawst Berry","Razz Berry","Red Nectar","Red Scarf","Relaxed Mint","Ribbon Sweet","Rindo Berry","Rock Incense","Rose Incense","Roseli Berry","Rowap Berry","Salac Berry","Sassy Mint","Sea Incense","Serious Mint","Shuca Berry","Sitrus Berry","Spelon Berry","Star Sweet","Starf Berry","Strawberry Sweet","Tamato Berry","Tanga Berry","Timid Mint","Wacan Berry","Watmel Berry","Wave Incense","Wepear Berry","Wiki Berry","Yache Berry","Yellow Nectar","Yellow Scarf","Pumkin Berry","Drash Berry","Eggant Berry","Strib Berry","Chilan Berry","Nutpea Berry","Ginema Berry","Kuo Berry","Yago Berry","Touga Berry","Niniku Berry","Topo Berry"];
	let p20 = ["Boiled Egg","Fancy Apple","Large Leek","Moomoo Cheese","Health Feather","Muscle Feather","Resist Feather","Genius Feather","Clever Feather","Swift Feather","Pretty Feather"];
	let p30 = ["Ether","Elixir","Max Ether","Max Elixir","Repel","Super Repel","Max Repel","Ability Shield","Absorb Bulb","Adrenaline Orb","Amulet Coin","Armorite Ore","Auspicious Armor","Balm Mushroom","Berry Juice","Big Bamboo Shoot","Big Malasada","Big Mushroom","Big Nugget","Big Pearl","Binding Band","Black Belt","Black Glasses","Black Sludge","Booster Energy","Bottle Cap","Casteliacone","Cell Battery","Charcoal","Cleanse Tag","Clear Amulet","Comet Shard","Covert Cloak","Deep Sea Scale","Dragon Scale","Dynamax Candy","Eject Button","Escape Rope","Everstone","Fire Stone","Flame Orb","Float Stone","Fluffy Tail","Galarica Cuff","Galarica Twig","Galarica Wreath","Gold Bottle Cap","Heart Scale","Honey","Ice Stone","King's Rock","Lava Cookie","Leader's Crest","Leaf Stone","Life Orb","Light Ball","Light Clay","Loaded Dice","Lucky Egg","Luminous Moss","Lumiose Galette","Magnet","Malicious Armor","Max Mushrooms","Max Revive","Metal Coat","Metronome","Miracle Seed","Mirror Herb","Moon Stone","Mystic Water","Never-Melt Ice","Nugget","Old Gateau","Pass Orb","Pearl String","Pearl","Poké Doll","Poké Toy","Prism Scale","Protective Pads","Punching Glove","Rare Candy","Razor Fang","Relic Band","Relic Copper","Relic Crown","Relic Gold","Relic Silver","Relic Statue","Relic Vase","Revive","Sacred Ash","Scope Lens","Shalour Sable","Shell Bell","Shoal Salt","Shoal Shell","Smoke Ball","Snowball","Soul Dew","Spell Tag","Star Piece","Strange Souvenir","Stardust","Sun Stone","Sweet Apple","Sweet Heart","Tart Apple","Thunder Stone","Tiny Bamboo Shoot","Tiny Mushroom","Toxic Orb","Throat Spray","Twisted Spoon","Upgrade","Water Stone","Brittle Bones","Antidote","Aspear Berry","Awakening","Big Malasada","Bitter Berry","Blue Flute","Burn Heal","Burnt Berry","Casteliacone","Cheri Berry","Chesto Berry","Drash Berry","Eggant Berry","Full Heal","Full Restore","Heal Powder","Ice Berry","Ice Heal","Lava Cookie","Lum Berry","Lumiose Galette","Max Revive","Mental Herb","Mint Berry","MiracleBerry","Old Gateau","Paralyze Heal","Pecha Berry","Persim Berry","Pewter Crunchies","Poké Flute","PRZCureBerry","PSNCureBerry","Pumkin Berry","Rage Candy Bar","Rawst Berry","Red Flute","Revive","Revival Herb","Sacred Ash","Shalour Sable","Touga Berry","Yago Berry","Yellow Flute","Full Restore","Hyper Potion","Max Potion","Potion","Super Potion","Heal Powder","Energy Powder","Energy Root","Revival Herb","Fresh Water","Soda Pop","Lemonade","Moomoo Milk","Berry Juice","Tea","HP Up","Protein","Iron","Calcium","Zinc","Carbos","PP Up","PP Max","Red Shard","Green Shard","Blue Shard","Yellow Shard","Growth Mulch","Damp Mulch","Stable Mulch","Gooey Mulch","Amaze Mulch","Boost Mulch","Rich Mulch","Surprise Mulch","X Attack","X Defense","X Sp. Atk","X Sp. Def","X Speed","X Accuracy","Dire Hit","Guard Spec.","Blue Flute","Yellow Flute","Red Flute","Black Flute","White Flute","Exp. Candy XS","Exp. Candy S","Exp. Candy M","Exp. Candy L","Exp. Candy XL","Normal Tera Shard","Fire Tera Shard","Water Tera Shard","Electric Tera Shard","Grass Tera Shard","Ice Tera Shard","Fighting Tera Shard","Poison Tera Shard","Ground Tera Shard","Flying Tera Shard","Psychic Tera Shard","Bug Tera Shard","Rock Tera Shard","Ghost Tera Shard","Dragon Tera Shard","Dark Tera Shard","Steel Tera Shard","Fairy Tera Shard"];
	let p40 = ["Eviolite","Icy Rock","Lucky Punch"];
	let p50 = ["Dubious Disc","Eject Pack","Sharp Beak","Wishing Piece","Gigantamix","Spice Mix","Bug Memory","Dark Memory","Dragon Memory","Electric Memory","Fairy Memory","Fighting Memory","Fire Memory","Flying Memory","Ghost Memory","Grass Memory","Ground Memory","Ice Memory","Poison Memory","Psychic Memory","Rock Memory","Steel Memory","Water Memory"];
	let p60 = ["Adamant Orb","Damp Rock","Griseous Orb","Heat Rock","Leek","Lustrous Orb","Macho Brace","Rocky Helmet","Terrain Extender","Utility Umbrella"];
	let p70 = ["Dragon Fang","Poison Barb","Shock Drive","Burn Drive","Chill Drive","Douse Drive","Power Anklet","Power Band","Power Belt","Power Bracer","Power Lens","Power Weight"];
	let p80 = ["Assault Vest","Blunder Policy","Chipped Pot","Cracked Pot","Dawn Stone","Dusk Stone","Electirizer","Heavy-Duty Boots","Magmarizer","Odd Keystone","Oval Stone","Protector","Quick Claw","Razor Claw","Sachet","Safety Goggles","Shiny Stone","Sticky Barb","Tin of Beans","Weakness Policy","Whipped Dream","Bach's Food Tin","Bob's Food Tin","Gengarite","Gardevoirite","Ampharosite","Venusaurite","Charizardite X","Blastoisinite","Mewtwonite X","Mewtwonite Y","Blazikenite","Medichamite","Houndoominite","Aggronite","Banettite","Tyranitarite","Scizorite","Pinsirite","Aerodactylite","Lucarionite","Abomasite","Kangaskhanite","Gyaradosite","Absolite","Charizardite Y","Alakazite","Heracronite","Mawilite","Manectite","Garchompite","Latiasite","Latiosite","Swampertite","Sceptilite","Sablenite","Altarianite","Galladite","Audinite","Metagrossite","Sharpedonite","Slowbronite","Steelixite","Pidgeotite","Glalitite","Diancite","Cameruptite","Lopunnite","Salamencite","Beedrillite"];
	let p90 = ["Deep Sea Tooth","Grip Claw","Thick Club","Blank Plate","Draco Plate","Dread Plate","Earth Plate","Fist Plate","Flame Plate","Icicle Plate","Insect Plate","Iron Plate","Legend Plate","Meadow Plate","Mind Plate","Pixie Plate","Sky Plate","Splash Plate","Spooky Plate","Stone Plate","Toxic Plate","Zap Plate"];
	let p100 = ["Hard Stone","Rare Bone","Room Service","Helix Fossil","Dome Fossil","Old Amber","Root Fossil","Claw Fossil","Skull Fossil","Armor Fossil","Cover Fossil","Plume Fossil","Jaw Fossil","Sail Fossil","Bird Fossil","Fish Fossil","Drake Fossil","Dino Fossil"];
	let p130 = ["Iron Ball"];
	

	if (p10.includes(item)) {
		return 10;
	}
	else if (p20.includes(item)) {
		return 20;
	}
	else if (p30.includes(item)) {
		return 30;
	}
	else if (p40.includes(item)) {
		return 40;
	}
	else if (p50.includes(item)) {
		return 50;
	}
	else if (p60.includes(item)) {
		return 60;
	}
	else if (p70.includes(item)) {
		return 70;
	}
	else if (p80.includes(item)) {
		return 80;
	}
	else if (p90.includes(item)) {
		return 90;
	}
	else if (p100.includes(item)) {
		return 100;
	}
	else if (p130.includes(item)) {
		return 130;
	}

	return 0;
	

}


function getGames(option) {
	let ref = finaldata["Game"]["Reference"];
	let result = [];

	let g = ref[GameID-1];

	if (option.toLowerCase() == "generation") {
		for (let i = 0; i < ref.length; i++) {
			if (parseInt(ref[i]["Generation"]) == parseInt(g["Generation"])) {
				result.push(ref[i]["Name"]);
			}
		}
	}
	else if (option.toLowerCase().includes("generation")) {
		let operator = option.toLowerCase().replaceAll("generation","");
		for (let i = 0; i < ref.length; i++) {
			if (parseInt(ref[i]["Generation"]) == parseInt(g["Generation"])) {
				result.push(ref[i]["Name"]);
			}
		}
	}
	else if (option.toLowerCase() == "all") {
		for (let i = 0; i < ref.length; i++) {
			result.push(ref[i]["Name"]);
		}
	}
	else if (option.toLowerCase() == "sibling") {

		result.push(g["Name"])

		let sib = splitStr(g["Sibling"],",");

		for (let i = 0; i < sib.length; i++) {
			result.push(ref[parseInt(sib[i])-1]["Name"]);
		}
	}

	return result;

}