function getAllIndexes(arr, val) {
	var indexes = [],
		i = -1;
	while((i = arr.indexOf(val, i+1)) != -1) {
		indexes.push(i);
	}
	return indexes;
}

function titleCase(str) {
	if(isNaN(str)) {
		var splitStr = str.toLowerCase().split(' ');
		for(var i = 0; i < splitStr.length; i++) {
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

function getShopLocationInt(obj,type,cost,location) {
	var arr;
	var location;
	var obj;
	var type;
	var cost;

	if (type == "pokémon") {
		arr = finaldataLocationPokémonShops;
	}
	else if (type == "item") {
		arr = finaldataLocationItemsShops;
		
	}

	for(var i = 0; i < arr.length; i++) {
		if (getApplicable(arr[i]["Game"])) {
			if (arr[i]["Location"] == location) {
				if (arr[i][titleCase(type)] == obj) {
					if (arr[i]["Cost"] == cost) {
						return i;
					}
				}
			}
		}
	}
}


function getItemLocationInt(obj,description,location) {
	var arr;
	var obj;
	var description;
	var location;

	arr = finaldataLocationItems;


	for(var i = 0; i < arr.length; i++) {
		if (getApplicable(arr[i]["Game"])) {
			if (arr[i]["Location"] == location) {
				if (arr[i]["Item"] == obj) {
					if (arr[i]["Description"] == description) {
						return i;
					}
				}
			}
		}
	}
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
			var x = i+1;
			if (perArr1[x] != undefined) {
				if (perArr1[i] < perArr1[x]) {
					perArr1.splice(i,1);
					colArr1.splice(i,1);
				}
			}
		}
	}
	*/

	var perArr2 = [];
	var colArr2 = [];

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


	var tempArr = [];
	for (let i = 0; i < perArr2.length; i++) {
		tempArr.push(" "+colArr2[i]+" "+perArr2[i]+"%")
	}
	tempArr.reverse();

	var tempStr = "linear-gradient(90deg,"+tempArr.join(",")+")";







}


function getPokémonLocationInt(obj,lvl,rate,tile,encounter,mechanic,location) {
	var arr;
	var obj;
	var lvl;
	var rate;
	var tile;
	var encounter;
	var mechanic;
	var location;

	arr = finaldataLocationPokémon;
	


	for(var i = 0; i < arr.length; i++) {
		if (getApplicable(arr[i]["Game"])) {
			if (arr[i]["Location"] == location) {
				if (arr[i]["Pokémon"] == obj) {
					if (arr[i]["Level"] == lvl) {
						if (arr[i]["Rate"] == rate) {
							if (arr[i]["Tile"] == tile) {
								if (arr[i]["Encounter"] == encounter) {
									if (arr[i]["Mechanic"] == mechanic) {
										return i;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}




function getEvolutionFamily(i) {
	var i;
	var stage = [];
	var specie = [];
	var Previous = undefined;
	var Next = undefined;
	stage = finaldataPokémonEvolutionStage;
	specie = finaldataPokémonEvolutionSpecie;
	var result = [];
	result.push(finaldataPokémon[i]["Pokémon"])

	for(var q = 0; q < 10; q++) {
		Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];
		Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];
		if(Previous != undefined && Previous != "None") {
			result.push(Previous);
			Previous = finaldataPokémonEvolutionSpecie[i]["Previous_"+JSONPath_EvolutionSpecie];
		}
		if(Next != undefined && Next != "None") {
			if(finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].includes(",")) {
				for(var y = 0; y < finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",").length; y++) {
					Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie].split(",")[y];
					result.push(Next);
				}
			} else {
				Next = finaldataPokémonEvolutionSpecie[i]["Next_"+JSONPath_EvolutionSpecie];
				result.push(Next);
			}
		}
		result = [...new Set(result)];
		if(result[q] != undefined) {
			i = parseInt(getPokémonInt(result[q]));
		}
	}
	for(var q = 0; q < result.length; q++) {
		var obj = new Object();
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
	var int;
	var id;
	if(id == undefined || id == "") { // int --> id
		for(var i = 0; i < finaldataPokémon.length; i++) {
			if(int == i) {
				return finaldataPokémon[i]["ID"];
			}
		}
	} else if(int == undefined || int == "") { // id --> int
		for(var i = 0; i < finaldataPokémon.length; i++) {
			if(id == finaldataPokémon[i]["ID"]) {
				return i;
			}
		}
	}
}

function getPokémonMediaPath(int,type) {
	var int;
	var type;
	var arr = finaldataPokémonPath;
	var result;
	var column;

	if(type == "Battle" || type == "Art") {
		json = JSONPath_BattlePath;
		column = "Battle";
	}
	else if (type == "Box") {
		json = JSONPath_BoxPath;
		column = "Box";
	}

	for(i = 0; i < arr.length; i++) {
		if(i == int) {
			if(arr[i][column+" Folder_"+json] == undefined) {
				result = arr[i][column+" File_"+json];
			} else {
				result = arr[i][column+" Folder_"+json]+arr[i][column+" File_"+json];
			}
		}
	}
	return result;
}




function getMachineMove(machine) {
	var machine;
	var arr = finaldataMoveMachine;
	var result;
	for(i = 0; i < arr.length; i++) {
		if(arr[i]["Machine_"+JSONPath_MoveMachine] == machine) {
			result = arr[i]["Name_"+JSONPath_MoveName]
		}
	}
	return result;
}

function getMoveMachine(move) {
	var move;
	var arr = finaldataMoveMachine;
	var result;
	for(i = 0; i < arr.length; i++) {
		if(arr[i]["Name_"+JSONPath_MoveName] == move) {
			result = arr[i]["Machine_"+JSONPath_MoveMachine]
		}
	}
	return result;
}



function Continuation(arr, column, style) {
	var arr;
	var column;
	var style;
	var temparr1 = [];
	var result = [];
	var names = [];
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
		for(i = 0; i < finaldataGame.length; i++) {
			if(parseInt(finaldataGame[i]["ID"]) <= GameID) {
				names.push(finaldataGame[i]["Name"]);
			}
		}
		for(i = 0; i < finaldataGame.length; i++) {
			if(finaldataGame[i]["Name"] == GameName) {
				if(finaldataGame[i]["Sibling"] != undefined) {
					if(finaldataGame[i]["Sibling"].includes(",")) {
						for(q = 0; q < finaldataGame[i]["Sibling"].split(",").length; q++) {
							for(u = 0; u < finaldataGame.length; u++) {
								if(finaldataGame[u]["ID"] == finaldataGame[i]["Sibling"].split(",")[q]) {
									names.push(finaldataGame[u]["Name"]);
								}
							}
						}
					} else {
						for(u = 0; u < finaldataGame.length; u++) {
							if(finaldataGame[u]["ID"] == finaldataGame[i]["Sibling"]) {
								names.push(finaldataGame[u]["Name"]);
							}
						}
					}
				}
			}
		}
		var temprun;
		var tempres = [];
		var temparrtype = [];
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
			var boolean = [];
			if(temparrtype[i] == "-") {
				for(q = 0; q < finaldataGame.length; q++) {
					if(finaldataGame[q]["Name"] == temparr1[i][0]) {
						temprun = true;
					}
					if(finaldataGame[q]["Name"] == temparr1[i][1]) {
						tempres.push(finaldataGame[q]["Name"])
						temprun = false;
					}
					if(temprun == true) {
						tempres.push(finaldataGame[q]["Name"])
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
	var seperator;
	var id;
	var dex;
	var arr = finaldataPokémonPokédexID;
	var tempid;
    var result;

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
		for(var q = 0; q < arr.length; q++) {
			if(arr[q]["ID"] == id) {
				tempid = parseInt(arr[q][dex])+seperator;
                break;
			}
		}
		for(var q = 0; q < arr.length; q++) {
			if(arr[q][dex] == tempid) {
				result = arr[q]["ID"];
                break;
			}
		}
	} else {
		for(var q = 0; q < arr.length; q++) {
			if(arr[q]["ID"] == id) {
				result = arr[q][dex];
                break;
			}
		}
	}

    return result
}



function getFullGameName(name) {
	var name;
	var arr = finaldataGame;
	for(var q = 0; q < arr.length; q++) {
		if(arr[q]["Name"] == name) {
			return arr[q]["Full Name"];
		}
	}
}

function getPokémonID(name) {
	var name;
	var arr = finaldataPokémon;
	for(var q = 0; q < arr.length; q++) {
		if(arr[q]["Pokémon"] == name) {
			return arr[q]["ID"];
		}
	}
}

function getEvolutionStage(name) {
	var name;
	var arr = finaldataPokémonEvolutionStage;
	for(var q = 0; q < arr.length; q++) {
		if(arr[q]["Pokémon"] == name) {
			return arr[q]["Pokémon Stage_"+JSONPath_EvolutionStage];
		}
	}
}

function abbreviateStats(stats) {
    var stats;
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
	while (base.parentNode) {
		base = base.parentNode;
		if (base.getAttribute(att) === val)
			return base;
	}
}

function findUpAtt(base,att) {
	while (base.parentNode) {
		base = base.parentNode;
		if (base.getAttribute(att) != undefined)
			return base;
	}
}
function findUpTagAtt(base,tag,att) {
	while (base.parentNode) {
		base = base.parentNode;
		if (base.tagName == tag)
			if (base.getAttribute(att) != undefined)
				return base;
	}
}


function findUpTag(el, tag) {
    while (el.parentNode) {
        el = el.parentNode;
        if (el.tagName === tag)
            return el;
    }
    return null;
}

function getPokémonInt(name) {
	var name;
	var arr = finaldataPokémonForm;
	for(var q = 0; q < arr.length; q++) {
		if(arr[q]["Pokémon"] == name || arr[q]["Form_"+JSONPath_Form] == name) {
			return q;
		}
	}
}
function returnSortedItemsList(i) {

	var i;
	var items = [];
	var result = finaldataItems.map(el => el["Pocket"] == "Berries" ? {...el, ["Pocket"]: "a"} : el).map(el => el["Pocket"] == "Items" || el["Pocket"] == "Other Items"  ? {...el, ["Pocket"]: "b"} : el).map(el => el["Pocket"] != "a" && el["Pocket"] != "b" ? {...el, ["Pocket"]: "c"} : el);

	items = sortObjectArray(result,"Pocket",true);

	var result = [];
	
	if (finaldataPokémonFormItem[i] != undefined) {
		if (finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"] != undefined) {
			var req = [];
			if (finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"].includes(",")) {
				req = finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"].split(",")
			}
			else {
				req[0] = finaldataPokémonFormItem[i][JSONPath_FormItem+"_Required"];
			}

			for (var r = 0; r < req.length; r++) {
				for (var q = 0; q < items.length; q++) {
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
		else if (finaldataPokémonFormItem[i][JSONPath_FormItem+"_Not"] != undefined) {
			var notreq = [];
			if (finaldataPokémonFormItem[i][JSONPath_FormItem+"_Not"].includes(",")) {
				notreq = finaldataPokémonFormItem[i][JSONPath_FormItem+"_Not"].split(",")
			}
			else {
				notreq[0] = finaldataPokémonFormItem[i][JSONPath_FormItem+"_Not"];
			}


			var obj = new Object();
			obj["Item"] = "";
			obj["Game"] = "All";
			items.unshift(obj);

			for (var r = 0; r < notreq.length; r++) {
				for (var q = 0; q < items.length; q++) {
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
			var obj = new Object();
			obj["Item"] = "";
			obj["Game"] = "All";
			items.unshift(obj);

			for (var q = 0; q < items.length; q++) {
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
	var data;

	var obj = dataStringToObj(data);
	if (obj != undefined) {

		var titlearr = [];

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
					for (var q = 0; q < move.split(",").length; q++) {
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
	var data
	var tempArr;

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
	var obj = new Object();
	for (var i = 0; i < tempArr.length; i++) {
		var val1 = tempArr[i].split(":")[0];
		var val2 = tempArr[i].split(":")[1];
		
		obj[val1] = val2;
	}

	return obj;
}

function getPokémonName(int,alt) {
	var int;
	var arr = finaldataPokémonForm;
	if (alt == "Alt") {
		for(var i = 0; i < arr.length; i++) {
			if(int == i) {
				if(arr[i]["Form_"+JSONPath_Form] != undefined && !arr[i]["Variant"].includes("Default")) {
					return arr[i]["Form_"+JSONPath_Form];
				} else {
					return arr[i]["Pokémon"];
				}
			}
		}
	}
	else {
		for(var i = 0; i < arr.length; i++) {
			if(int == i) {
				if(arr[i]["Form_"+JSONPath_Form] != undefined) {
					return arr[i]["Form_"+JSONPath_Form];
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
    var friendship;

    return 1+(Math.floor((10*friendship)/255)/100)
}


function getPokémonForm(i) {
    var i;
    var id = getIntID(i,"");
    var result = [];

    for(var u = 0; u < finaldataPokémonForm.length; u++) {
		if(finaldataPokémonForm[u]["ID"] == id && finaldataPokémon[u][JSONPath_Reference] == "true") {
            if (finaldataPokémonForm[u]["Form_"+JSONPath_Form] != undefined) {
                result.push(finaldataPokémonForm[u]["Form_"+JSONPath_Form]);
            }
            else {
                result.push(finaldataPokémonForm[u]["Pokémon"]);
            }
		}
	}

    return result;
}

function getPositionAbility(i,column) {
    var arr = finaldataPokémonAbility;
    var column;
    var i;
    var result;
	
    for (var q = 0; q < arr.length; q++) {
        if (q == i) {
            if (arr[q][column+"_"+JSONPath_Ability] != undefined) {
                result = arr[q][column+"_"+JSONPath_Ability];
                break;
            }
        }
    }

    if (result == undefined) {
        for (var q = 0; q < arr.length; q++) {
            if (q == getDefaultInt(i)) {
                result = arr[q][column+"_"+JSONPath_Ability];
                break;
            }
        }
    }

    return result;
}


function getAbilityPosition(i,ability) {
    var arr = finaldataPokémonAbility;
	var i;
    var ability;
    var result;

    for (var q = 0; q < arr.length; q++) {
        if (q == i) {
			var keys = Object.keys(arr[q]);
			for (var u = 0; u < keys.length; u++) {
				if (arr[q][keys[u]] == ability && keys[u].includes(JSONPath_Ability)) {
					result = keys[u].replaceAll("_"+JSONPath_Ability,"");
					break;
				}
			}
        }
    }

    if (result == undefined) {
        for (var q = 0; q < arr.length; q++) {
			if (q == getDefaultInt(i)) {
				var keys = Object.keys(arr[q]);
				for (var u = 0; u < keys.length; u++) {
					if (arr[q][keys[u]] == ability && keys[u].includes(JSONPath_Ability)) {
						result = keys[u].replaceAll("_"+JSONPath_Ability,"");
						break;
					}
				}
			}
		}
    }

    return result;
}

function getDefaultInt(i) {

    var i;
    var id = getIntID(i,"");
    var arr = finaldataPokémon;
    var result;

    for (var q = 0; q < arr.length; q++) {
        if (arr[q]["ID"] == id) {
            result = q;
            break;
        }
    }

    return result;
}


function getLocationTrainers(location) {

	var arr = finaldataLocationTrainers;
	var location;
	var result = [];

    for (var q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"]) == true) {
			if(arr[q]["Location"] == location) {
				result.push(arr[q]);
			}
		}
	}

	return result;

}


function getLocationItems(location) {

	var arr = finaldataLocationItems;
	var location;
	var result = [];

    for (var q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"]) == true) {
			if(arr[q]["Location"] == location) {
				result.push(arr[q]);
			}
		}
	}

	return result;
}

function getLocationPokémon(location) {

	var arr = finaldataLocationPokémon;
	var location;
	var result = [];

    for (var q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"]) == true) {
			if(arr[q]["Location"] == location) {
				result.push(arr[q]);
			}
		}
	}

	return result;

}


function undDel(string,replacement) {
	var string;
	var replacement;
	if (string == undefined) {
		return replacement
	}
	else {
		return string;
	}
}
function undwsDel(string,replacement) {
	var string;
	var replacement;
	if (string == undefined || string == "") {
		return replacement
	}
	else {
		return string;
	}
}
function undwsnanDel(string,replacement) {
	var string;
	var replacement;
	if (string == undefined || string == "" || isNaN(string)) {
		return replacement;
	}
	else {
		return string;
	}
}



function modStageCalc(type,mod) {
	var type;
	var mod;
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
	var arr;
	var valColumn;
	var tarColumn;
	var val;

    for (var q = 0; q < arr.length; q++) {
		if(arr[q][valColumn] == val) {
			return arr[q][tarColumn];
		}
	}

	return undefined;
}


function returnArrData(arr,column,target) {
	var arr;
	var column;
	var target;
	var result = [];

    for (var q = 0; q < arr.length; q++) {
		if(arr[q][column] == target) {
			result.push(arr[q]);
		}
	}

	return result;
}

function returnAppArrData(arr,column,target) {
	var arr;
	var column;
	var target;
	var result = [];

    for (var q = 0; q < arr.length; q++) {
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

		for (var q = 0; q < inputs.length; q++) {
			inputs[q].checked = false;
		}
		input.checked = true;


		let tars = document.querySelectorAll("#contain > div");
		let tar = document.querySelector("#contain > div[value='"+tab.toLowerCase()+"']");

		for (var q = 0; q < tars.length; q++) {
			tars[q].style.display = "none";
		}
		tar.style.display = "block";

	}
}





function sortObjectArray(objectsArr,prop,ascending) {
	var objectsArr;
	var prop;
	var ascending;

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
	var val;
	var column;
	var arr = finaldataLocationTutor;
	var result = [];

	for (var q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"]) == true) {
			if (arr[q][column] == val) {
				result.push(arr[q])
			}
		}
	}

	return result;
}



function getApplicable(val) {
	var val;

	if (val != undefined) {
		if (val == "All") {
			return true;
		}
		if (val.includes(",")) {
			var valArr = val.split(",");
			for (var q = 0; q < valArr.length; q++) {
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
	var cla;
	var tar;

	for (var q = 0; q < tar.length; q++) {
		if(tar[q].classList.contains(cla)) {
			tar[q].classList.remove(cla);
		}
		else {
			tar[q].classList.add(cla);
		}
	}
}

function classSwitch(cla) {
	var cla;
	var tar = event.target;

	if(tar.classList.contains(cla)) {
		tar.classList.remove(cla);
	}
	else {
		tar.classList.add(cla);
	}
	
}


function getItemIcon(item) {
    var item;
	var arr = finaldataItems;

	for (var q = 0; q < arr.length; q++) {
		if (getApplicable(arr[q]["Game"])) {
			if (arr[q]["Item"] == item) {
				return arr[q]["Icon"]
			}
		}
	}
    return;
}



var searchPokémonAttributes = [];
var searchMoveAttributes = [];
var searchAbilityAttributes = [];
var searchItemAttributes = [];
var searchMapAttributes = [];
var searchNotFirst = false;

function search(type) {
    var type;
	var tag;
	var searchAttributes;

    if (type == "Pokémon") {
        base = document.querySelector("#contain > div#"+type.toLowerCase()+" > div ul");
		tag = "li";
    }
	else {
		base = document.querySelector("#contain > div#"+type.toLowerCase()+" section[name='list'] ol");
		tag = "label";
	}


	if (type == "Pokémon") {
        searchAttributes = searchPokémonAttributes;
    }
    else if (type == "Move") {
        searchAttributes = searchMoveAttributes;
    }
    else if (type == "Ability") {
        searchAttributes = searchAbilityAttributes;
    }
    else if (type == "Item") {
        searchAttributes = searchItemAttributes;
    }
    else if (type == "Map") {
        searchAttributes = searchMapAttributes;
    }


	var tar = event.target;
    var searchValue = (tar.value).toLowerCase();
    var searchPositive = [];
    var searchNegative = [];
    var searchGreater = [];
    var searchLower = [];
	var searchVar = [];

    if (searchValue.includes("::") && searchAttributes.includes(searchValue.split("::")[0])) {
        searchPositive = searchValue.split("::");
		searchVar = searchValue.split("::");
    }
    else if (searchValue.includes(":!") && searchAttributes.includes(searchValue.split(":!")[0])) {
        searchNegative = searchValue.split(":!");
		searchVar = searchValue.split(":!");
    }
    else if (searchValue.includes(":>") && searchAttributes.includes(searchValue.split(":>")[0])) {
        searchGreater = searchValue.split(":>");
		searchVar = searchValue.split(":>");
    }
    else if (searchValue.includes(":<") && searchAttributes.includes(searchValue.split(":<")[0])) {
        searchLower = searchValue.split(":<");
		searchVar = searchValue.split(":<");
    }
    else {
        var searchName = (event.target.value).toLowerCase();
    }

	var tags =  base.querySelectorAll(':scope > '+tag);
	for(i = 0; i < tags.length; i++) {
		tags[i].classList.remove("hidden");
	}

    tar.style.color = "var(--fontDark)";


	var check;

	if (searchVar.length > 0) {
		if (tags[0].getAttribute('data-search-'+searchVar[0]).match(/[a-z]/g) ) {
			check = false;
		}
		else {
			check = true;
		}
	}
    if (searchPositive.length > 0 && searchAttributes.includes(searchPositive[0])) {
        if (parseInt(searchPositive[1]) != NaN) {
            var tags = base.querySelectorAll(':scope > '+tag+':not([data-search-'+searchPositive[0]+'*="'+searchPositive[1]+'"])');
			for(i = 0; i < tags.length; i++) {
				tags[i].classList.add("hidden");
			}
        }
        else {
            var tags = base.querySelectorAll(':scope > '+tag+':not([data-search-'+searchPositive[0]+'="'+searchPositive[1]+'"])');
			for(i = 0; i < tags.length; i++) {
				tags[i].classList.add("hidden");
			}
        }
        tar.style.color = "var(--colorRed)";
    }
    else if (searchNegative.length > 0 && searchAttributes.includes(searchNegative[0])) {
        if (parseInt(searchNegative[1]) != NaN) {
            var tags = base.querySelectorAll(':scope > '+tag+'[data-search-'+searchNegative[0]+'*="'+searchNegative[1]+'"]');
			for(i = 0; i < tags.length; i++) {
				tags[i].classList.add("hidden");
			}
        }
        else {
            var tags = base.querySelectorAll(':scope > '+tag+'[data-search-'+searchNegative[0]+'="'+searchNegative[1]+'"]');
			for(i = 0; i < tags.length; i++) {
				tags[i].classList.add("hidden");
			}
        }
        tar.style.color = "var(--colorRed)";
    }
	else if (searchLower.length > 0 && searchAttributes.includes(searchLower[0]) && check) {
        var tags = base.querySelectorAll(':scope > '+tag+'[data-search-'+searchLower[0]+']');
		for(i = 0; i < tags.length; i++) {
			tags[i].classList.add("hidden");
		}
        for(i = 0; i < tags.length; i++) {
			if (tags[i].getAttribute("data-search-"+searchLower[0]) != "") {
				if (parseInt(tags[i].getAttribute("data-search-"+searchLower[0])) <= parseInt(searchLower[1])) {
					tags[i].classList.remove("hidden");
				}
			}
        }
        tar.style.color = "var(--colorRed)";
    }
    else if (searchGreater.length > 0 && searchAttributes.includes(searchGreater[0]) && check) {
        var tags = base.querySelectorAll(':scope > '+tag+'[data-search-'+searchGreater[0]+']');
		for(i = 0; i < tags.length; i++) {
			tags[i].classList.add("hidden");
		}
        for(i = 0; i < tags.length; i++) {
			if (tags[i].getAttribute("data-search-"+searchGreater[0]) != "") {
				if (parseInt(tags[i].getAttribute("data-search-"+searchGreater[0])) >= parseInt(searchGreater[1])) {
					tags[i].classList.remove("hidden");
				}
			}
        }
        tar.style.color = "var(--colorRed)";
    }
    else if (event.target.value.length > 0) {
        var tags = base.querySelectorAll(':scope > '+tag+':not([data-name*="'+searchName+'"])');
		for(i = 0; i < tags.length; i++) {
			tags[i].classList.add("hidden");
		}
        tar.style.color = "var(--fontDark)";
    }
	else {
		for(i = 0; i < tags.length; i++) {
			tags[i].classList.remove("hidden");
		}
		tar.style.color = "var(--fontDark)";
	}


	if (event.target.title != "") {
		if (event.code == "Enter") {
			searchFilter(event.target,base,"Add");
			count();
		}
		
		if (event.code == "Escape") {
			searchFilter(event.target,base,"Remove");
			exitSearch(type);
			count();
		}
	}
	else {
		if (event.code == "Escape") {
			exitSearch(type);
		}
	}



    count();
}
function exitSearch(base) {
    var base;
	var tar = event.target;

    if (base == "Pokémon") {
		base = document.querySelector("#contain > div#"+base.toLowerCase()+" > div ul");
    }
	else {
		base = document.querySelector("#contain > div#"+base.toLowerCase()+" section[name='list'] ol");
	}
    
    var items = base.querySelectorAll(":scope > *:not(input)");
    for (i = 0; i < items.length; i++) {
        items[i].classList.remove("hidden");
    }

    var search = tar.parentElement.querySelector(':scope > input[type="text"]');

	search.style.color = "var(--fontDark)";
	search.style.removeProperty("outline-color");
	search.style.removeProperty("border-color");
	search.style.removeProperty("border-style");
    search.value = "";
    search.focus();

	searchFilter(event.target,base,"Remove");
}

function joinObj(arr, attr,type){
	var arr;
	var attr;
	var type;

	var result = [];
  
	for (var i = 0; i < arr.length; i++){
		result.push(arr[i][attr]);
	}
  
	return result.join(type);
  }



function getEvolutionData(i,column) {
	var i;
	var column;
	var arrName = finaldataPokémonEvolutionSpecie;
	var arrStage = finaldataPokémonEvolutionStage;
	var arrMethod = finaldataPokémonEvolutionMethod;

	var result = [];
	var pokémon = arrName[i][column+"_"+JSONPath_EvolutionSpecie];

	if (pokémon == undefined) {
		i = getDefaultInt(i);
		pokémon = arrName[i][column+"_"+JSONPath_EvolutionSpecie];
	}


	if (pokémon != undefined && pokémon != "None") {
		if (pokémon.includes(",")) {
			pokémon = pokémon.split(",");
			for(q = 0; q < pokémon.length; q++) {
				var stage = arrStage[getPokémonInt(pokémon[q])]["Pokémon Stage_"+JSONPath_EvolutionStage];
				var method = arrMethod[getPokémonInt(pokémon[q])]["Type_"+JSONPath_EvolutionMethod];
				var factor = arrMethod[getPokémonInt(pokémon[q])]["Factor_"+JSONPath_EvolutionMethod];
				var additional = arrMethod[getPokémonInt(pokémon[q])]["Additional_"+JSONPath_EvolutionMethod];
				var gender = arrMethod[getPokémonInt(pokémon[q])]["Gender_"+JSONPath_EvolutionMethod];
		
				if (pokémon[q] == undefined) {
					pokémon[q] = arrName[getDefaultInt(i)][column+"_"+JSONPath_EvolutionSpecie];
				}
				if (stage == undefined) {
					stage = arrStage[getDefaultInt(i)]["Pokémon Stage_"+JSONPath_EvolutionStage];
				}

				if (method == undefined && factor == undefined && additional == undefined && gender == undefined) {
					method = arrMethod[getDefaultInt(i)]["Type_"+JSONPath_EvolutionMethod];	
					factor = arrMethod[getDefaultInt(i)]["Factor_"+JSONPath_EvolutionMethod];
					additional = arrMethod[getDefaultInt(i)]["Additional_"+JSONPath_EvolutionMethod];
					gender = arrMethod[getDefaultInt(i)]["Gender_"+JSONPath_EvolutionMethod];
				}

				if (pokémon != undefined) {
					var obj = new Object();
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
			var stage = arrStage[getPokémonInt(pokémon)]["Pokémon Stage_"+JSONPath_EvolutionStage];
			var method = arrMethod[getPokémonInt(pokémon)]["Type_"+JSONPath_EvolutionMethod];
			var factor = arrMethod[getPokémonInt(pokémon)]["Factor_"+JSONPath_EvolutionMethod];
			var additional = arrMethod[getPokémonInt(pokémon)]["Additional_"+JSONPath_EvolutionMethod];
			var gender = arrMethod[getPokémonInt(pokémon)]["Gender_"+JSONPath_EvolutionMethod];
	
			if (pokémon == undefined) {
				pokémon = arrName[getDefaultInt(i)][column+"_"+JSONPath_EvolutionSpecie];
			}
			if (stage == undefined) {
				stage = arrStage[getDefaultInt(i)]["Pokémon Stage_"+JSONPath_EvolutionStage];
			}
			if (method == undefined && factor == undefined && additional == undefined && gender == undefined) {
				method = arrMethod[getDefaultInt(i)]["Type_"+JSONPath_EvolutionMethod];	
				factor = arrMethod[getDefaultInt(i)]["Factor_"+JSONPath_EvolutionMethod];
				additional = arrMethod[getDefaultInt(i)]["Additional_"+JSONPath_EvolutionMethod];
				gender = arrMethod[getDefaultInt(i)]["Gender_"+JSONPath_EvolutionMethod];
			}
	
			if (pokémon != undefined) {
				var obj = new Object();
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
	var i;
	var arr = finaldataPokémonOffspring;
	var result = [];

	var pok = getPokémonName(i);

	for(q = 0; q < arr.length; q++) {
		if (arr[q]["Offspring_"+JSONPath_Offspring] != undefined) {
			if(arr[q]["Offspring_"+JSONPath_Offspring].includes(",")) {
				var tempArr1 = arr[q]["Offspring_"+JSONPath_Offspring].split(",");
	
				for(u = 0; u < tempArr1.length; u++) {
					if(tempArr1[u] == pok) {
						var obj = new Object();
						obj["Integer"] = q;
						obj["Pokémon"] = getPokémonName(q);
						if (arr[q]["Factor_"+JSONPath_Offspring] != undefined) {
							obj["Factor"] = arr[q]["Factor_"+JSONPath_Offspring].split(",")[u];
						}
						result.push(obj)
					}
				}
			}
			else {
				if (arr[q]["Offspring_"+JSONPath_Offspring] == pok) {
					var obj = new Object();
					obj["Integer"] = q;
					obj["Pokémon"] = getPokémonName(q);
					if (arr[q]["Factor_"+JSONPath_Offspring] != undefined) {
						obj["Factor"] = arr[q]["Factor_"+JSONPath_Offspring];
					}
					result.push(obj)
				}
			}
		}
	}
	
	return result;
}


function formatEvoBreedText(i,type) {
	var i;
	var type;
	var Text = [];

	if (type == "Breed") {
		var poks = [];

		for (var q = 0; q < finaldataPokémonOffspring.length; q++) {
			if (finaldataPokémon[i][JSONPath_Reference] == "true") {
				if (finaldataPokémonOffspring[q]["Offspring_"+JSONPath_Offspring] != undefined) {
					if (finaldataPokémonOffspring[q]["Offspring_"+JSONPath_Offspring].includes(",")) {
						var ofs = finaldataPokémonOffspring[q]["Offspring_"+JSONPath_Offspring].split(",");
						for (var u = 0; u < ofs.length; u++) {
							if (getPokémonInt(ofs[u]) == i) {
								if (q != i) {
									var obj = new Object();
									obj["Integer"] = q;
									obj["Pokémon"] = getPokémonName(q);
									obj["Gender Ratio"] = returnData(q,"Gender Ratio","").join("/");
									obj["Primary Egg Group"] = returnData(q,"Egg Group","")[0];
									obj["Secondary Egg Group"] = returnData(q,"Egg Group","")[1];
									if (finaldataPokémonOffspring[q]["Factor_"+JSONPath_Offspring] != undefined) {
										if (finaldataPokémonOffspring[q]["Factor_"+JSONPath_Offspring].split(",").includes(",")) {
											obj["Offspring Factor"] = finaldataPokémonOffspring[q]["Factor_"+JSONPath_Offspring].split(",")[u];
										}
										else {
											obj["Offspring Factor"] = finaldataPokémonOffspring[q]["Factor_"+JSONPath_Offspring];
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
						if (getPokémonInt(finaldataPokémonOffspring[q]["Offspring_"+JSONPath_Offspring]) == i) {
							if (q != i) {
								var obj = new Object();
								obj["Integer"] = q;
								obj["Pokémon"] = getPokémonName(q);
								obj["Gender Ratio"] = returnData(q,"Gender Ratio","").join("/");
								obj["Primary Egg Group"] = returnData(q,"Egg Group","")[0];
								obj["Secondary Egg Group"] = returnData(q,"Egg Group","")[1];
								obj["Offspring Factor"] = finaldataPokémonOffspring[q]["Factor_"+JSONPath_Offspring];
								poks.push(obj)
							}
						}
					}
				}
			}
		}

		var res = divideDifferenceArr(poks,["Primary Egg Group","Secondary Egg Group","Offspring Factor"],[["Gender Ratio","1/0","0/0"]]);

		for (var q = 0; q < res.length; q++) {
			var pks = [];
			var egg;
			var egg1 = res[q][0]["Primary Egg Group"];
			var egg2 = res[q][0]["Secondary Egg Group"];
			var factor = res[q][0]["Offspring Factor"];


			var att1 = "type='invert' onclick='callPopUp(`Egg Group`)' name='eggText"+egg1+"' dataname='value'";
			var att2 = "type='invert' onclick='callPopUp(`Egg Group`)' name='eggText"+egg2+"' dataname='value'";
			


			for (var u = 0; u < res[q].length; u++) {
				pks.push(res[q][u]["Pokémon"]);
			}
	
			if (factor == undefined) {
				factor = "";
			}
		

			for (var u = 0; u < pks.length; u++) {
				var att = "type='invert' onclick='modalData()' value='"+getPokémonInt(pks[u])+"'";
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

			var txt = "Breed "+pks.join(", ").replace(/,([^,]*)$/, ' or $1')+" with "+egg+" "+factor+".";
			txt = txt.replaceAll("  "," ").replaceAll(" .",".");
			Text.push(txt);
		}

	}
	else if(type == "Evolution") {
		var previous = getEvolutionData(i,"Previous");
		var next = getEvolutionData(i,"Next");
		if (previous.length == 0) {
			previous = getEvolutionData(getDefaultInt(i),"Previous")
		}

		if (previous.length > 0) {
			var poks = getEvolutionData(previous[0]["Integer"],"Next");
			
			for (var q = 0; q < poks.length; q++) {
				var pok = previous[0]["Pokémon"];
				var method = poks[q]["Method"];
				var factor = poks[q]["Factor"];
				var gender = poks[q]["Gender"];
				var add = poks[q]["Additional"];

				var dash = "by";

				var att1 = "type='invert' onclick='modalData()' value='"+previous[0]["Integer"]+"'"
				var att2 = "type='invert' onclick='dataRedirect()' name='item'"

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

				var txt = "Evolve  "+pok+" "+gender+" "+dash+" "+method+" "+factor+" "+add+".";

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
	var item;
	var type;
	var arr;
	var column;
	var result = [];
	if (type == "Description") {
		arr = finaldataItemsDescription;
		column = "Description";
	}

	for (var q = 0; q < arr.length; q++) {
		if(getApplicable(arr[q]["Game"])) {
			if(arr[q]["Item"] == item) {
				result.push(arr[q][column])
			}
		}
	}

	return result;
}

function uniqueValueSelect(selects) {
	var selects;

	var vals = [];

	for (var i = 0; i < selects.length; i++) {
		vals.push(selects[i].value);
	}

	for (var i = 0; i < selects.length; i++) {
		var opt = selects[i].querySelectorAll(":scope option")
		for (var u = 0; u < opt.length; u++) {
			opt[u].style.removeProperty("display");
			opt[u].removeAttribute("disabled");
		}
	}

	for (var i = 0; i < selects.length; i++) {
		for (var u = 0; u < vals.length; u++) {
			if (vals[u] != "") {
				if (i != u) {
					var opt = selects[i].querySelector(":scope option[value='"+vals[u]+"']")
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
	var move;
	var conditions;
	var arr1 = finaldataLearnsetLevel;
	var arr2 = finaldataLearnsetEvolution;
	var arr3 = finaldataLearnsetMachine;
	var arr4 = finaldataLearnsetBreed;

	var result = [];

	for (var i = 0; i < arr1.length; i++) {
		if (getApplicable(arr1[i]["Game"])) {
			if(arr1[i]["Move"] == move) {
				result.push(arr1[i]["Pokémon"]);
			}
		}
	}
	for (var i = 0; i < arr2.length; i++) {
		if (getApplicable(arr2[i]["Game"])) {
			if(arr2[i]["Move"] == move) {
				result.push(arr2[i]["Pokémon"]);
			}
		}
	}
	for (var i = 0; i < arr3.length; i++) {
		if (getApplicable(arr3[i]["Game"])) {
			if(arr3[i]["Move"] == move) {
				result.push(arr3[i]["Pokémon"]);
			}
		}
	}
	for (var i = 0; i < arr4.length; i++) {
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

	var text;
	var items = finaldataItems;
	var abilities = finaldataAbility;
	var moves = finaldataMove;
	var poks = finaldataPokémon;

	var itemArr = [];
	var abilityArr = [];
	var moveArr = [];
	var pokArr = [];


	for (var i = 0; i < items.length; i++) {
		var item = items[i]["Item"];
		if (item != undefined) {
			if (item.includes(" ")) {
				itemArr.push(item)
			}
		}
	}
	for (var i = 0; i < items.length; i++) {
		var item = items[i]["Item"];
		if (item != undefined) {
			if (!item.includes(" ")) {
				itemArr.push(item)
			}
		}
	}


	for (var i = 0; i < abilities.length; i++) {
		if (getApplicable(abilities[i]["Game"])) {
			var ability = abilities[i]["Ability"];
			if (ability.includes(" ")) {
				abilityArr.push(ability)
			}
		}
	}
	for (var i = 0; i < abilities.length; i++) {
		if (getApplicable(abilities[i]["Game"])) {
			var ability = abilities[i]["Ability"];
			if (!ability.includes(" ")) {
				abilityArr.push(ability)
			}
		}
	}

	for (var i = 0; i < moves.length; i++) {
		if (moves[i][JSONPath_MoveReference]) {
			var move = moves[i]["Name_"+JSONPath_MoveName];
			if (move.includes(" ")) {
				moveArr.push(move)
			}
		}
	}
	for (var i = 0; i < moves.length; i++) {
		if (moves[i][JSONPath_MoveReference]) {
			var move = moves[i]["Name_"+JSONPath_MoveName];
			if (!move.includes(" ")) {
				moveArr.push(move)
			}
		}
	}


	for (var i = 0; i < poks.length; i++) {
		if (poks[i][JSONPath_MoveReference]) {
			var pok = poks[i]["Pokémon"];
			if (pok.includes(" ")) {
				pokArr.push(pok)
			}
		}
	}
	for (var i = 0; i < poks.length; i++) {
		if (poks[i][JSONPath_MoveReference]) {
			var pok = poks[i]["Pokémon"];
			if (!pok.includes(" ")) {
				pokArr.push(pok)
			}
		}
	}




	for (var i = 0; i < itemArr.length; i++) {
		var item = itemArr[i];
		var i1 = " "+item+" ";
		var i2 = " "+item+".";
		var i3 = " "+item+",";
		var i4 = '"'+item+'"';

		var first = "<b type='invert' onclick='dataRedirect()' name='item' style='font-weight:bold;text-shadow:1px 1px #000;'>";
		var last = "</b>";

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

	for (var i = 0; i < abilityArr.length; i++) {
		var ability = abilityArr[i];
		var i1 = " "+ability+" ";
		var i2 = " "+ability+".";
		var i3 = " "+ability+",";
		var i4 = '"'+ability+'"';

		var first = "<b type='invert' onclick='dataRedirect()' name='ability' style='font-weight:bold;text-shadow:1px 1px #000;'>";
		var last = "</b>";

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

	for (var i = 0; i < moveArr.length; i++) {
		var move = moveArr[i];
		var i1 = " "+move+" ";
		var i2 = " "+move+".";
		var i3 = " "+move+",";
		var i4 = '"'+move+'"';

		var type = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,move);

		var first = "<b type='invert' onclick='dataRedirect()' name='move' style='color:var(--type"+type+");font-weight:bold;text-shadow:1px 1px #000;'>";
		var last = "</b>";

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
	
	for (var i = 0; i < pokArr.length; i++) {
		var pok = pokArr[i];
		var i1 = " "+pok+" ";
		var i2 = " "+pok+".";
		var i3 = " "+pok+",";
		var i4 = '"'+pok+'"';

		var first = "<b type='invert' onclick='modalData()' style='font-weight:bold;text-shadow:1px 1px #000;'>";
		var last = "</b>";

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
	var timeout = 0,
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

function importData() {

	var lock = prompt("Enter Import String:");

	if (lock != undefined && lock != "") {
		if (lock.charAt(0) == "[" && lock.includes("]") && lock.includes(":")) {
			var conf = confirm("It's not recommended to transfer data cross-games.\nThis action cannot be reversed.\nDo you want to continue?")
			if (conf) {
				var tempArr = lock.replaceAll("{","").replaceAll("}","").replaceAll("[","").replaceAll("]","").replaceAll('"','').split(",")

				for (var i = 0; i < tempArr.length; i++) {
					if (tempArr[i].includes("finaldex")) {
						var name = tempArr[i].split(":")[0];
						var val = tempArr[i].split(":")[1];
						localStorage.setItem(name,val);
					}
				}
				consoleText("Successfully Exported!")
				consoleText("Reload page for full effect.")
			}
		}
		else {
			consoleText("Returned Invalid String.")
		}
	}
	else if (lock == null) {
		return;
	}
	else {
		consoleText("Returned Invalid String.")
	}
}
function exportData() {
	var res = [];
	var tempArr = JSON.stringify(localStorage).replaceAll("{","").replaceAll("}","").replaceAll('"','').split(",");

	for (var i = 0; i < tempArr.length; i++) {
		if (tempArr[i].includes("finaldex-")) {
			var name = tempArr[i].split(":")[0];
			var val = tempArr[i].split(":")[1];
			var obj = new Object();
			obj[name] = val;
			res.push(obj);
		}
	}

	var resStr = JSON.stringify(res);

	navigator.clipboard.writeText(resStr);
	console.log(resStr)
	consoleText("Copied Data String!")
}



function flingPowerCalc(item) {
	var p10 = ["Air Balloon","Big Root","Bright Powder","Choice Band","Choice Scarf","Choice Specs","Destiny Knot","Discount Coupon","Electric Seed","Expert Belt","Focus Band","Focus Sash","Grassy Seed","Lagging Tail","Leftovers","Mental Herb","Metal Powder","Misty Seed","Muscle Band","Power Herb","Psychic Seed","Quick Powder","Reaper Cloth","Red Card","Ring Target","Shed Shell","Silk Scarf","Silver Powder","Smooth Rock","Soft Sand","Soothe Bell","White Herb","Wide Lens","Wise Glasses","Zoom Lens","Bread","Coconut Milk","Fresh Cream","Fried Food","Fruit Bunch","Instant Noodles","Mixed Mushrooms","Pack of Potatoes","Packaged Curry","Pasta","Precooked Burger","Pungent Root","Salad Mix","Sausages","Smoke-Poke Tail","Adamant Mint","Aguav Berry","Apicot Berry","Aspear Berry","Babiri Berry","Belue Berry","Berry Sweet","Blue Scarf","Bluk Berry","Bold Mint","Brave Mint","Calm Mint","Careful Mint","Charti Berry","Cheri Berry","Chesto Berry","Chilan Berry","Chople Berry","Clover Sweet","Coba Berry","Colbur Berry","Cornn Berry","Custap Berry","Durin Berry","Enigma Berry","Figy Berry","Flower Sweet","Full Incense","Ganlon Berry","Gentle Mint","Green Scarf","Grepa Berry","Haban Berry","Hasty Mint","Hondew Berry","Hopo Berry","Iapapa Berry","Impish Mint","Jaboca Berry","Jolly Mint","Kasib Berry","Kebia Berry","Kee Berry","Kelpsy Berry","Lansat Berry","Lax Incense","Lax Mint","Leppa Berry","Liechi Berry","Lonely Mint","Love Sweet","Luck Incense","Lum Berry","Mago Berry","Magost Berry","Maranga Berry","Micle Berry","Mild Mint","Modest Mint","Naive Mint","Nanab Berry","Naughty Mint","Nomel Berry","Occa Berry","Odd Incense","Oran Berry","Pamtre Berry","Passho Berry","Payapa Berry","Pecha Berry","Persim Berry","Petaya Berry","Pinap Berry","Pink Nectar","Pink Scarf","Pomeg Berry","Pure Incense","Purple Nectar","Qualot Berry","Quiet Mint","Rabuta Berry","Rash Mint","Rawst Berry","Razz Berry","Red Nectar","Red Scarf","Relaxed Mint","Ribbon Sweet","Rindo Berry","Rock Incense","Rose Incense","Roseli Berry","Rowap Berry","Salac Berry","Sassy Mint","Sea Incense","Serious Mint","Shuca Berry","Sitrus Berry","Spelon Berry","Star Sweet","Starf Berry","Strawberry Sweet","Tamato Berry","Tanga Berry","Timid Mint","Wacan Berry","Watmel Berry","Wave Incense","Wepear Berry","Wiki Berry","Yache Berry","Yellow Nectar","Yellow Scarf","Pumkin Berry","Drash Berry","Eggant Berry","Strib Berry","Chilan Berry","Nutpea Berry","Ginema Berry","Kuo Berry","Yago Berry","Touga Berry","Niniku Berry","Topo Berry"];
	var p20 = ["Boiled Egg","Fancy Apple","Large Leek","Moomoo Cheese","Health Feather","Muscle Feather","Resist Feather","Genius Feather","Clever Feather","Swift Feather","Pretty Feather"];
	var p30 = ["Ether","Elixir","Max Ether","Max Elixir","Repel","Super Repel","Max Repel","Ability Shield","Absorb Bulb","Adrenaline Orb","Amulet Coin","Armorite Ore","Auspicious Armor","Balm Mushroom","Berry Juice","Big Bamboo Shoot","Big Malasada","Big Mushroom","Big Nugget","Big Pearl","Binding Band","Black Belt","Black Glasses","Black Sludge","Booster Energy","Bottle Cap","Casteliacone","Cell Battery","Charcoal","Cleanse Tag","Clear Amulet","Comet Shard","Covert Cloak","Deep Sea Scale","Dragon Scale","Dynamax Candy","Eject Button","Escape Rope","Everstone","Fire Stone","Flame Orb","Float Stone","Fluffy Tail","Galarica Cuff","Galarica Twig","Galarica Wreath","Gold Bottle Cap","Heart Scale","Honey","Ice Stone","King's Rock","Lava Cookie","Leader's Crest","Leaf Stone","Life Orb","Light Ball","Light Clay","Loaded Dice","Lucky Egg","Luminous Moss","Lumiose Galette","Magnet","Malicious Armor","Max Mushrooms","Max Revive","Metal Coat","Metronome","Miracle Seed","Mirror Herb","Moon Stone","Mystic Water","Never-Melt Ice","Nugget","Old Gateau","Pass Orb","Pearl String","Pearl","Poké Doll","Poké Toy","Prism Scale","Protective Pads","Punching Glove","Rare Candy","Razor Fang","Relic Band","Relic Copper","Relic Crown","Relic Gold","Relic Silver","Relic Statue","Relic Vase","Revive","Sacred Ash","Scope Lens","Shalour Sable","Shell Bell","Shoal Salt","Shoal Shell","Smoke Ball","Snowball","Soul Dew","Spell Tag","Star Piece","Strange Souvenir","Stardust","Sun Stone","Sweet Apple","Sweet Heart","Tart Apple","Thunder Stone","Tiny Bamboo Shoot","Tiny Mushroom","Toxic Orb","Throat Spray","Twisted Spoon","Upgrade","Water Stone","Brittle Bones","Antidote","Aspear Berry","Awakening","Big Malasada","Bitter Berry","Blue Flute","Burn Heal","Burnt Berry","Casteliacone","Cheri Berry","Chesto Berry","Drash Berry","Eggant Berry","Full Heal","Full Restore","Heal Powder","Ice Berry","Ice Heal","Lava Cookie","Lum Berry","Lumiose Galette","Max Revive","Mental Herb","Mint Berry","MiracleBerry","Old Gateau","Paralyze Heal","Pecha Berry","Persim Berry","Pewter Crunchies","Poké Flute","PRZCureBerry","PSNCureBerry","Pumkin Berry","Rage Candy Bar","Rawst Berry","Red Flute","Revive","Revival Herb","Sacred Ash","Shalour Sable","Touga Berry","Yago Berry","Yellow Flute","Full Restore","Hyper Potion","Max Potion","Potion","Super Potion","Heal Powder","Energy Powder","Energy Root","Revival Herb","Fresh Water","Soda Pop","Lemonade","Moomoo Milk","Berry Juice","Tea","HP Up","Protein","Iron","Calcium","Zinc","Carbos","PP Up","PP Max","Red Shard","Green Shard","Blue Shard","Yellow Shard","Growth Mulch","Damp Mulch","Stable Mulch","Gooey Mulch","Amaze Mulch","Boost Mulch","Rich Mulch","Surprise Mulch","X Attack","X Defense","X Sp. Atk","X Sp. Def","X Speed","X Accuracy","Dire Hit","Guard Spec.","Blue Flute","Yellow Flute","Red Flute","Black Flute","White Flute","Exp. Candy XS","Exp. Candy S","Exp. Candy M","Exp. Candy L","Exp. Candy XL","Normal Tera Shard","Fire Tera Shard","Water Tera Shard","Electric Tera Shard","Grass Tera Shard","Ice Tera Shard","Fighting Tera Shard","Poison Tera Shard","Ground Tera Shard","Flying Tera Shard","Psychic Tera Shard","Bug Tera Shard","Rock Tera Shard","Ghost Tera Shard","Dragon Tera Shard","Dark Tera Shard","Steel Tera Shard","Fairy Tera Shard"];
	var p40 = ["Eviolite","Icy Rock","Lucky Punch"];
	var p50 = ["Dubious Disc","Eject Pack","Sharp Beak","Wishing Piece","Gigantamix","Spice Mix","Bug Memory","Dark Memory","Dragon Memory","Electric Memory","Fairy Memory","Fighting Memory","Fire Memory","Flying Memory","Ghost Memory","Grass Memory","Ground Memory","Ice Memory","Poison Memory","Psychic Memory","Rock Memory","Steel Memory","Water Memory"];
	var p60 = ["Adamant Orb","Damp Rock","Griseous Orb","Heat Rock","Leek","Lustrous Orb","Macho Brace","Rocky Helmet","Terrain Extender","Utility Umbrella"];
	var p70 = ["Dragon Fang","Poison Barb","Shock Drive","Burn Drive","Chill Drive","Douse Drive","Power Anklet","Power Band","Power Belt","Power Bracer","Power Lens","Power Weight"];
	var p80 = ["Assault Vest","Blunder Policy","Chipped Pot","Cracked Pot","Dawn Stone","Dusk Stone","Electirizer","Heavy-Duty Boots","Magmarizer","Odd Keystone","Oval Stone","Protector","Quick Claw","Razor Claw","Sachet","Safety Goggles","Shiny Stone","Sticky Barb","Tin of Beans","Weakness Policy","Whipped Dream","Bach's Food Tin","Bob's Food Tin","Gengarite","Gardevoirite","Ampharosite","Venusaurite","Charizardite X","Blastoisinite","Mewtwonite X","Mewtwonite Y","Blazikenite","Medichamite","Houndoominite","Aggronite","Banettite","Tyranitarite","Scizorite","Pinsirite","Aerodactylite","Lucarionite","Abomasite","Kangaskhanite","Gyaradosite","Absolite","Charizardite Y","Alakazite","Heracronite","Mawilite","Manectite","Garchompite","Latiasite","Latiosite","Swampertite","Sceptilite","Sablenite","Altarianite","Galladite","Audinite","Metagrossite","Sharpedonite","Slowbronite","Steelixite","Pidgeotite","Glalitite","Diancite","Cameruptite","Lopunnite","Salamencite","Beedrillite"];
	var p90 = ["Deep Sea Tooth","Grip Claw","Thick Club","Blank Plate","Draco Plate","Dread Plate","Earth Plate","Fist Plate","Flame Plate","Icicle Plate","Insect Plate","Iron Plate","Legend Plate","Meadow Plate","Mind Plate","Pixie Plate","Sky Plate","Splash Plate","Spooky Plate","Stone Plate","Toxic Plate","Zap Plate"];
	var p100 = ["Hard Stone","Rare Bone","Room Service","Helix Fossil","Dome Fossil","Old Amber","Root Fossil","Claw Fossil","Skull Fossil","Armor Fossil","Cover Fossil","Plume Fossil","Jaw Fossil","Sail Fossil","Bird Fossil","Fish Fossil","Drake Fossil","Dino Fossil"];
	var p130 = ["Iron Ball"];
	

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