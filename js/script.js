function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function getPokémonData(arr, name, game) {
	let result = [];
	for(let i = 0; i < game.length; i++) {
		for(let q = 0; q < arr.length; q++) {
			if(arr[q][game[i]] == name) {
				if(finaldata["Pokémon"]["Reference"][q][DATA_Pokémon_Reference["Reference"]] == "true") {
					let obj = new Object();
					obj["Integer"] = q;
					for(let u = 0; u < game.length; u++) {
						if(arr[q][game[u]] != undefined) {
							obj[game[u]] = arr[q][game[u]];
						}
					}
					result[q] = obj;
				}
			}
		}
	}
	let newResult = result.filter(value => Object.keys(value).length !== 0);
	return newResult;
}

function OpenExitPopUp(x, active) {
	let popup = document.querySelector("#data > div[value='"+x+"'] div section[name='main'] > div[name='metadata'] > div[name='popup']");
	if(active == false) {
		popup.classList.add("open");
		popup.classList.remove("close");
	} else {
		popup.classList.remove("open");
		popup.classList.add("close");
	}
}



function preventCheckboxZero(base) {
    let inputs = base.querySelectorAll(":scope input:checked");

    if (!inputs.length > 0) {
        event.target.checked = true;
        
        if(event.target.nextElementSibling.tagName == "LABEL") {
            event.target.nextElementSibling.animate([
                { transform: 'translateX(0px)'},
                { transform: 'translateX(2px)'},
                { transform: 'translateX(0px)'},
                { transform: 'translateX(-2px)'},
                { transform: 'translateX(0px)'}
            ], {
                duration: 200,
                easing: "linear",
                iterations: 1
            });
        }
        
    }
}

function dataRedirect() {

    let what;

    let typevariant;
    let lock;
    let notval = ["⮜","⮝","⮟","⮞"];

    let tar = this;

    if (tar.tagName == undefined) {
        tar = event.target;
    }


    if (tar.getAttribute("value") != undefined) {
        what = tar.getAttribute("value");
    } else if (tar.innerText != undefined && tar.innerText != "" && tar.firstElementChild == undefined && !notval.includes(tar.innerText)) {
        what = tar.innerText;
    } else if (tar.firstElementChild != undefined && tar.firstElementChild.innerText != undefined && tar.firstElementChild.innerText != "" && !notval.includes(tar.firstElementChild.innerText)) {
        what = tar.firstElementChild.innerText;
    } else if(tar.getAttribute("title") != undefined) {
        what = tar.getAttribute("title");
    } else if(tar.firstElementChild.getAttribute("title") != undefined) {
        what = tar.getAttribute("title");
    }



    let where = (tar.getAttribute("name")).toLowerCase();

    
   
  

    if(where == "map") {
        typevariant = where;
    } else if(where == "ability") {
        typevariant = "abilities";
    } else {
        typevariant = where+"s";
    }
    typevariant = typevariant.charAt(0).toUpperCase()+typevariant.slice(1);
    let input = document.querySelector('#navigation input[value="'+typevariant+'"]:checked');
    let modal = document.querySelector("#data > div.open");




    
    if (what.includes(",")) {
        let y;
        y = what.split(",");

        for (let q = 0; q < y.length; q++) {
            let r = q+1;
            y[q] = r+". "+y[q];
        }
        y = y.join("\n")

        let selection = prompt("Enter Number:\n"+y,"");

        y = y.split("\n");
        
        for (let q = 0; q < y.length; q++) {
            let num = q+1;
            y[q] = y[q].split(num+". ")[1];
        }

        if (selection != null && selection != "") {
            if (parseInt(selection) != NaN && y[parseInt(selection)-1] != undefined) {
                what = y[parseInt(selection)-1];
            }
            else {
                consoleText("Returned an error.");
                return;
            }
        }
        else {
            return;
        }
      
    }


    if (modal != null) {
        if (where != "map") {
            lock = confirm("Redirecting you to the "+where+" "+what+".\nDo you want to continue?");
        }
        else {
            lock = confirm("Redirecting you to "+what+".\nDo you want to continue?");
        }
    }
    else {
        if (input == null) {
            if (where != "map") {
                lock = confirm("Redirecting you to the "+where+" "+what+".\nDo you want to continue?");
            }
            else {
                lock = confirm("Redirecting you to "+what+".\nDo you want to continue?");
            }
        }
        else {
            lock = true;
        }
    }
    


    if (lock) {
        let z = what.toLowerCase();
        let modalOpen = document.querySelector("#data > div.open");
        let navInput = document.querySelector("#navigation > input[value='"+typevariant+"']");
        let searchExit = document.querySelector('#contain > div#'+where+' section[name="list"] span[name="exit"]');
        let tar = document.querySelector('#contain > div#'+where+' ol label[data-title="'+z+'"]');

        searchExit.click();

        if (tar != null) {
            if (where == "item") {
                let pocket = tar.getAttribute("data-pocket");
                let pocketInput = document.querySelector('#contain > div#item > section[name="list"] > div:first-child > *:last-child input[alt="'+pocket+'"]');
                if (pocketInput != undefined) {
                    if (pocketInput.checked == false) {
                        pocketInput.click();
                    }
                }
            }
        
            if(modalOpen != undefined) {
                modalOpen.classList.remove("open");
            }
            navInput.click();
            tar.click();
            tar.scrollIntoView();

        }
        else if (!notval.includes(what)) {
            if (where == "map") {
                consoleText("Could not find location.")
            }
            else {
                consoleText("Could not find "+where+".")
            }
        }
    }


}

function getArrayKey(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let keys = Object.keys(arr[i])
     
        for(let k = 0; k < keys.length; k++) {
            if (keys[k].includes("\n")) {
                res.push(keys[k])
            }
        }
    }

    res = [...new Set(res)];

    let result = [];
    for (let i = 0; i < res.length; i++) {
        if (getApplicable(res[i].split("\n")[1])) {
            result[res[i].split("\n")[0]] = res[i]
        }
    }
    return result;

}



function getIntData(int,arr,column) {
    let val = undefined;
    if (arr[int][column] != undefined) {
        val = arr[int][column];
    }
    else if (arr[getDefaultInt(int)][column] != undefined) {
        val = arr[getDefaultInt(int)][column];
    }
    return val;
}

function returnData(int, type, additional) {
	let arr;
	let column;
	let check;
	let result = [];
	if(type.includes("Type")) {
		arr = finaldata["Pokémon"]["Type"];
		column = [DATA_Pokémon_Type["Primary"],DATA_Pokémon_Type["Secondary"]];
	} else if(type.includes("Debut")) {
		arr = finaldata["Pokémon"]["Reference"];
		column = ["Debut"];
	} else if(type.includes("Category")) {
		arr = finaldata["Pokémon"]["Category"];
		column = DATA_Pokémon_Category["Category"];
	} else if(type.includes("Pokédex Entry")) {
		arr = finaldata["Pokémon"]["Pokédex Entry"];
		column = DATA_Pokémon_PokédexEntry["Entry"];
	} else if(type.includes("Ability")) {
		arr = finaldata["Pokémon"]["Ability"];
		if(Generation >= 5) {
			column = [DATA_Pokémon_Ability["Primary"],DATA_Pokémon_Ability["Secondary"],DATA_Pokémon_Ability["Hidden"]];
		} else {
			column = [DATA_Pokémon_Ability["Primary"],DATA_Pokémon_Ability["Secondary"]];
		}
	} else if(type.includes("Catch Rate")) {
		arr = finaldata["Pokémon"]["Catch Rate"];
		column = DATA_Pokémon_CatchRate["Catch"];
	} else if(type.includes("Hatch Rate")) {
		arr = finaldata["Pokémon"]["Hatch Rate"];
		column = [DATA_Pokémon_HatchRate["Cycle"],DATA_Pokémon_HatchRate["Steps"]];
	} else if(type.includes("Gender Ratio")) {
		arr = finaldata["Pokémon"]["Gender Ratio"];
		column = ["Male","Female"];
	} else if(type.includes("Egg Group")) {
		arr = finaldata["Pokémon"]["Egg Group"];
		column = [DATA_Pokémon_EggGroup["Primary"],DATA_Pokémon_EggGroup["Secondary"]];
	} else if(type.includes("Experience Yield")) {
		arr = finaldata["Pokémon"]["Experience Yield"];
		column = DATA_Pokémon_ExperienceYield["Yield"];
	} else if(type.includes("Leveling Rate")) {
		arr = finaldata["Pokémon"]["Leveling Rate"];
		column = "Leveling";
	} else if(type.includes("Held Item")) {
		arr = finaldata["Pokémon"]["Held Item"];
		column = [DATA_Pokémon_HeldItem["100%"],DATA_Pokémon_HeldItem["2%"],DATA_Pokémon_HeldItem["23%"],DATA_Pokémon_HeldItem["5%"],DATA_Pokémon_HeldItem["50%"],DATA_Pokémon_HeldItem["1%"]];
	} else if(type.includes("Base Friendship")) {
		arr = finaldata["Pokémon"]["Base Friendship"];
		column = DATA_Pokémon_Friendship["Friendship"];
	} else if(type.includes("Base Stats HP")) {
		arr = finaldata["Pokémon"]["Base Stats"];
		column = DATA_Pokémon_BaseStats["HP"];
	} else if(type.includes("Base Stats Attack")) {
		arr = finaldata["Pokémon"]["Base Stats"];
		column = DATA_Pokémon_BaseStats["Attack"];
	} else if(type.includes("Base Stats Defense")) {
		arr = finaldata["Pokémon"]["Base Stats"];
		column = DATA_Pokémon_BaseStats["Defense"];
	} else if(type.includes("Base Stats Special")) {
		arr = finaldata["Pokémon"]["Base Stats"];
		column = DATA_Pokémon_BaseStats["Special"];
	} else if(type.includes("Base Stats Sp. Atk")) {
		arr = finaldata["Pokémon"]["Base Stats"];
		column = DATA_Pokémon_BaseStats["Sp. Atk"];
	} else if(type.includes("Base Stats Sp. Def")) {
		arr = finaldata["Pokémon"]["Base Stats"];
		column = DATA_Pokémon_BaseStats["Sp. Def"];
	} else if(type.includes("Base Stats Speed")) {
		arr = finaldata["Pokémon"]["Base Stats"];
		column = DATA_Pokémon_BaseStats["Speed"];
	} else if(type.includes("Base Stats Total")) {
		arr = finaldata["Pokémon"]["Base Stats"];
		column = DATA_Pokémon_BaseStats["Total"];
	} else if(type.includes("EV Yield HP")) {
		arr = finaldata["Pokémon"]["Effort Value Yield"];
		column = DATA_Pokémon_EVYield["HP"]
	} else if(type.includes("EV Yield Attack")) {
		arr = finaldata["Pokémon"]["Effort Value Yield"];
		column = DATA_Pokémon_EVYield["Attack"]
	} else if(type.includes("EV Yield Defense")) {
		arr = finaldata["Pokémon"]["Effort Value Yield"];
		column = DATA_Pokémon_EVYield["Defense"]
	} else if(type.includes("EV Yield Special")) {
		arr = finaldata["Pokémon"]["Effort Value Yield"];
		column = DATA_Pokémon_EVYield["Special"]
	} else if(type.includes("EV Yield Sp. Atk")) {
		arr = finaldata["Pokémon"]["Effort Value Yield"];
		column = DATA_Pokémon_EVYield["Sp. Atk"]
	} else if(type.includes("EV Yield Sp. Def")) {
		arr = finaldata["Pokémon"]["Effort Value Yield"];
		column = DATA_Pokémon_EVYield["Sp. Def"]
	} else if(type.includes("EV Yield Speed")) {
		arr = finaldata["Pokémon"]["Effort Value Yield"];
		column = DATA_Pokémon_EVYield["Speed"]
	} else if(type.includes("EV Yield Total")) {
		arr = finaldata["Pokémon"]["Effort Value Yield"];
		column = DATA_Pokémon_EVYield["Total"]
	}

	for(let i = 0; i < arr.length; i++) {
		if(i == int) {
			if(Array.isArray(column)) {
				for(let q = 0; q < column.length; q++) {
					result.push(arr[i][column[q]]);
				}
			} else {
				result.push(arr[i][column]);
			}
		}
	}
	for(let i = 0; i < result.length; i++) {
		if(result[i] == undefined) {
			check = true;
		} else {
			check = false;
			break;
		}
	}
	if(check == true) {
		result = [];
		for(let i = 0; i < arr.length; i++) {
			if(i == int) {
				if(Array.isArray(column)) {
					for(let q = 0; q < column.length; q++) {
						result.push(arr[arr.map(function(e) {
							return e.ID;
						}).indexOf(arr[i]["ID"])][column[q]]);
					}
				} else {
					result.push(arr[arr.map(function(e) {
						return e.ID;
					}).indexOf(arr[i]["ID"])][column]);
				}
			}
		}
	}
	if(additional.includes("lower")) {
		if(result.length >= 1 && result != undefined) {
			result = result.map(element => {
				if(element != undefined && isNaN(element)) {
					return element.toLowerCase();
				} else {
					return element;
				}
			});
		}
	}
	if(additional.includes("upper")) {
		if(result.length >= 1 && result != undefined) {
			result = result.map(element => {
				if(element != undefined && isNaN(element)) {
					return element.toUpperCase();
				} else {
					return element;
				}
			});
		}
	}
	if(additional.includes("undefined")) {
		if(result.length >= 1 && result != undefined) {
			result = result.filter(function(element) {
				return element !== undefined;
			});
		}
	}
	return result;
}


function partyBoxSwitch() {
        
    let a = this.parentElement.parentElement.querySelector(':scope > section[name="'+this.value+'"]');
    let b = this.parentElement.parentElement.querySelector(':scope > section:not([name="'+this.value+'"])');

    let z = this.parentElement.querySelectorAll(":scope > input");
    let x = this.checked.toString();


    for (let i = 0; i < z.length; i++) {
        z[i].checked = false; 
    }

    if(x == "true") {
        this.checked = true;
    }
    else {
        this.checked = false;
    }

    if (x == "true") { // open something
        if (a.classList.length == 0 || this.value == "party") { // if this is clear
            if (b.classList.length == 0) {
                //consoleText("opening1");
                a.classList.add("open");
                a.classList.remove("close");
                a.classList.remove("switch");
                b.classList.remove("open");
                b.classList.remove("close");
                b.classList.remove("switch");
            }
            else if (b.classList.contains("close")) {
                //consoleText("opening3");
                a.classList.add("open");
                a.classList.remove("close");
                a.classList.remove("switch");
                b.classList.remove("open");
                b.classList.remove("close");
                b.classList.remove("switch");
            }
            else {
                //consoleText("switching");
                a.classList.remove("open");
                a.classList.remove("close");
                a.classList.add("switch");
                b.classList.remove("open");
                b.classList.remove("close");
                b.classList.remove("switch");
            }

            
        }
        if (a.classList.contains("close")) {
            //consoleText("opening2");
            a.classList.add("open");
            a.classList.remove("close");
            a.classList.remove("switch");
            b.classList.remove("open");
            b.classList.remove("close");
            b.classList.remove("switch");
        }
    }
    else {
        if (a.classList.contains("open") || a.classList.contains("switch")) {
            //consoleText("closing");
            a.classList.remove("open");
            a.classList.add("close");
            a.classList.remove("switch");
            b.classList.remove("open");
            b.classList.remove("close");
            b.classList.remove("switch");
        }
    }

}

function partyBoxOpen(e) {
    let target = e.target;

    if (target.innerText == "Party") {
        if (document.querySelector('#pokémon aside[name="team"] section[name="party"].open') != undefined) {
            document.querySelector('#pokémon aside[name="team"] section[name="party"]').classList.remove("open");
            if (document.querySelector('#pokémon aside[name="team"].open') != undefined) {
                document.querySelector('#pokémon aside[name="team"]').classList.remove("open");
            }
        }
        else {
            document.querySelector('#pokémon aside section[name="party"]').classList.add("open");
            if (document.querySelector('#pokémon aside[name="team"].open') == undefined) {
                document.querySelector('#pokémon aside[name="team"]').classList.add("open");
            }        
        }
        if (document.querySelector('#pokémon aside[name="team"] section[name="box"].open') != undefined) {
            document.querySelector('#pokémon aside[name="team"] section[name="box"]').classList.remove("open");
        }
    }
    else if (target.innerText == "Box") {
        if (document.querySelector('#pokémon aside[name="team"] section[name="box"].open') != undefined) {
            document.querySelector('#pokémon aside[name="team"] section[name="box"]').classList.remove("open");
            if (document.querySelector('#pokémon aside[name="team"].open') != undefined) {
                document.querySelector('#pokémon aside[name="team"]').classList.remove("open");
            }
        }
        else {
            document.querySelector('#pokémon aside[name="team"] section[name="box"]').classList.add("open");
            if (document.querySelector('#pokémon aside[name="team"].open') == undefined) {
                document.querySelector('#pokémon aside[name="team"]').classList.add("open");
            }    
        }

        if (document.querySelector('#pokémon aside[name="team"] section[name="party"].open') != undefined) {
            document.querySelector('#pokémon aside[name="team"] section[name="party"]').classList.remove("open");
        }
    }
}


/*
$(document).on('click', function(e) {
    if (!$(e.target).is($("#pokémon > aside[name='team']")) && $("#pokémon > aside[name='team']").has(e.target).length === 0) {
        $("#pokémon > aside[name='team'].open").removeClass();
        $("#pokémon > aside[name='team'] > aside.open").removeClass();
    }
});
*/

$(document).on('click', function(e) {
    if (!$(e.target).is($("#pokémon > aside[name='settings']")) && $("#pokémon > aside[name='settings']").has(e.target).length === 0 && !$(e.target).is($("#pokémon nav li[name='settings'] > *")) && $("#pokémon nav li[name='settings'] > *").has(e.target).length === 0) {
        $("#pokémon > aside[name='settings'].open").removeClass();
        $("#pokémon nav li[name='settings'] > *.open").removeClass();
    }
});

function openSettings() {

    if (document.body.contains(document.querySelector('#pokémon-outer > main[name="settings"].open'))) {
        document.querySelector("#pokémon-outer > main:last-child").classList.remove("open");
        document.querySelector("#settings-outer img").classList.remove("open");
    }
    else if (!document.body.contains(document.querySelector('#pokémon-outer > main[name="settings"].open'))) {
        document.querySelector("#pokémon-outer > main:last-child").classList.add("open");
        document.querySelector("#settings-outer img").classList.add("open");
    }

}

function inputMaxValue(base,limit,totallimit) {

    let combinedValues = 0;
    let valueVSlimit;
    let values = [];

    for (i = 0; i < base.length; i++) {
        if(base[i].value != "") {
            values.push(parseInt(base[i].value))
        }
        else {
            values.push(0)
        }
    }



    for (i = 0; i < values.length; i++) {
        combinedValues = combinedValues+values[i];
    }

    valueVSlimit = totallimit - combinedValues;

    let tempArr = [];

    for (i = 0; i < values.length; i++) {
        if ((valueVSlimit+values[i]) >= limit) {
            tempArr.push(limit)
        }
        else {
            tempArr.push(valueVSlimit+values[i])
        }
    }

    for (i = 0; i < base.length; i++) {
        base[i].setAttribute("max",tempArr[i]);
    }
}


function evInputMax() {

    let totallimit = 510;
    let limit = 255;
    let combinedValues = 0;
    let valueVSlimit;
    let base = this.parentElement.querySelectorAll(":scope input");
    let values = [];

    for (i = 0; i < base.length; i++) {
        if(base[i].value != "") {
            values.push(parseInt(base[i].value))
        }
        else {
            values.push(0)
        }
    }



    for (i = 0; i < values.length; i++) {
        combinedValues = combinedValues+values[i];
    }

    valueVSlimit = totallimit - combinedValues;

    let tempArr = [];

    for (i = 0; i < values.length; i++) {
        if ((valueVSlimit+values[i]) >= limit) {
            tempArr.push(limit)
        }
        else {
            tempArr.push(valueVSlimit+values[i])
        }
    }

    for (i = 0; i < base.length; i++) {
        base[i].setAttribute("max",tempArr[i]);
    }
}


function inputMinMax() {


    let val = parseInt(this.value);
    let min = parseInt(this.min);
    let max = parseInt(this.max);

    if(val <= min) {
        this.value = min;
    }
    else if(val >= max) {
        this.value = max;
    }

    if (this.value == 0) {
        this.value = "";
    }
    partyMemory("Save");
}


function iMinMax() {


    let val = parseInt(this.value);
    let min = parseInt(this.min);
    let max = parseInt(this.max);

    if(val <= min) {
        this.value = min;
    }
    else if(val >= max) {
        this.value = max;
    }

}


function onlyOneInput(inputs,input) {

    let checks = [];


    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            checks.push(inputs[i])
        }
        else if (inputs[i].value != undefined) {
            checks.push(inputs[i])
        }
    }
    if (checks.length > 1) {
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] != input) {
                if (checks[i].value != "on") {
                    checks[i].value = "";
                }
                else if (checks[i].checked != undefined) {
                    checks[i].checked = false;
                }
            }
        }
    }
}


function partyDataSwitchAll() {


    let base = document.querySelectorAll('#pokémon aside[name="team"] > section[name="party"] > div');


    for (u = 0; u < base.length; u++) {

        let base2 = base[u].querySelectorAll(':scope > aside > span[name]');
        let base3 = base[u].querySelector(':scope > aside > span:last-child figure');

        let val = base3.getAttribute("value");

  

        let tempArr = ["moves","stats","additional",""];
        for (i = 0; i < tempArr.length; i++) {
            let base4 = base[u].querySelector(':scope > aside > span[name="'+tempArr[i]+'"]');
  
            if (val == "") {
                for (q = 0; q < base2.length; q++) {
                    base2[q].classList.remove("show");
                    base2[q].classList.remove("showstart");
                    base2[q].classList.remove("showmiddle");
                    base2[q].classList.remove("showend");
                }

                base[u].querySelector(':scope > aside > span[name="'+tempArr[tempArr.length - 2]+'"]').classList.add("showend");
    
                base3.setAttribute("value",base2[0].getAttribute("name"));
                break;
            }
            if (val == tempArr[i]) {
                for (q = 0; q < base2.length; q++) {
                    base2[q].classList.remove("show");
                    base2[q].classList.remove("showstart");
                    base2[q].classList.remove("showmiddle");
                    base2[q].classList.remove("showend");
                }
          
                base4.classList.add("show");

                if (tempArr[i] == tempArr[0]) {
                    base4.classList.add("showstart");
                }
                if (tempArr[i] != tempArr[0]) {
                    base4.classList.add("showmiddle");
                }
  
                
                if (val = base4.nextElementSibling.getAttribute("name") != null) {
                    base3.setAttribute("value",base4.nextElementSibling.getAttribute("name"));
                }
                else {
                    base3.setAttribute("value","");
                }
                break;
            }
        }
       
    }
}


function partyDataSwitch() {

    let dataAll = this.parentElement.parentElement.querySelectorAll(':scope > span[name]');
    for (q = 0; q < dataAll.length; q++) {
        dataAll[q].style.display = "none";
    }

    let data = this.parentElement.parentElement.querySelector(':scope > span[name="'+this.value+'"]');
    data.style.display = "flex";

    if (this.value = data.nextElementSibling.getAttribute("name") != null) {
        this.value = data.nextElementSibling.getAttribute("name");

    }
    else {
        this.value = data.parentElement.querySelectorAll(":scope > span[name]")[0].getAttribute("name");
    }
}






function partyItem() {

    let base = this.parentElement.parentElement.parentElement.parentElement;
    let item = base.querySelector(':scope span[name="pokémon"] img:first-child');

    

    item.src = getMedia([this.name],[PATH_Item_Bag])[0];
    item.title = this.value;


    if (this.value == "Item") {
        item.style.display = "none";
    }
    else {
        item.style.display = "unset";
    }
}


function partyDefault(base) {

    let inputs = base.querySelectorAll(':scope input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        if (inputs[i].parentElement.getAttribute("name") == "Date") {
            inputs[i].style.color = "transparent";
        }
    }

    let selects = base.querySelectorAll(':scope select');
    for (let i = 0; i < selects.length; i++) {
        if (selects[i].querySelector(":scope > option:first-child") != undefined) {
            selects[i].value = selects[i].querySelector(":scope > option:first-child").value;
        }
        else {
            selects[i].value = "";
        }

        if (selects[i].parentElement.getAttribute("name") == "Ability") {
            selects[i].title = "";
            selects[i].setAttribute("name","Primary");
        }
    }
    let options = base.querySelectorAll(':scope option');
    for (let i = 0; i < options.length; i++) {
        options[i].removeAttribute("disabled");
    }



    if (HeldItem == true) {
        let held = base.querySelector(":scope img:not([value])");
        held.src = "";
        held.style.display = "none";

        let options = base.querySelectorAll(':scope span[name="item"] select option');
        for (let i = 0; i < options.length; i++) {
            options[i].remove();
        }
    }

    if (Gender == true) {
        let gender = base.querySelector(':scope > aside > span:last-child > select:nth-child(2)')
        let genders = gender.querySelectorAll(':scope > option');

        gender.removeAttribute("name");
        for (let u = 0; u < genders.length; u++) {
            genders[u].remove();
        }
    }


    let moves = base.querySelectorAll(':scope > aside span[name="moves"] span:nth-child(2) select')
    for (let u = 0; u < moves.length; u++) {
        moves[u].removeAttribute("name");
        moves[u].style.fontStyle = "italic";
        let movesOptions = moves[u].querySelectorAll(":scope option");
        for (let q = 0; q < movesOptions.length; q++) {
            movesOptions[q].remove();
        }
    }

    let background = base.querySelector(":scope > aside:first-child");
    let pok = base.querySelector(":scope img[value]");
    let name = base.querySelector(':scope span[name="name"] input');

    background.style.background = "";
    pok.src = "";
    pok.title = "";
    pok.setAttribute("value","");

    name.setAttribute("placeholder","");

    if (Ability.length > 0) {
        let ability = base.querySelector(':scope span[name="moves"] > span:last-child select');
        let abilities = ability.querySelectorAll(':scope option');
        for (let q = 0; q < abilities.length; q++) {
            abilities[q].remove();
        }
    }

    if (Natures.length > 0) {
        let baseStats = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span:last-child');
        baseStats.removeAttribute("name");
    }

}









function dragStart(e) {
    let base = document.querySelector("#pokémon aside[name='team']")
    let tar = e.target;
    savedtar = e.target;
    for (let q = 0; q < 10; q++) {
        if (tar.tagName == "LI") {
            break;
        }
        tar = tar.parentElement;
    }
    drag = getPokémonName(tar.id);
    
    let blinks = base.querySelectorAll(":scope .indicator");
    for (let q = 0; q < blinks.length; q++) {
        blinks[q].classList.add("enabled");
    }
}

function dragEnter(e) {
    if (e.target.innerText == "Party") {
        let tar = document.querySelectorAll('#pokémon > aside[name="team"] section[name="party"] > div[name="empty"]');
        if (tar.length > 0) {
            e.target.classList.add("hover");
        }
    }
    else {
        e.target.classList.add("hover");
    }
}

function dragLeave(e) {
    e.target.classList.remove("hover");
}


function dragMove(e) {
    e.preventDefault();
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnd(e) {

    drag = undefined;

    let base = document.querySelector("#pokémon aside[name='team']")

    let blinks = base.querySelectorAll(":scope .indicator");
    for (let q = 0; q < blinks.length; q++) {
        blinks[q].classList.remove("enabled");
    }

    
}

function dragDrop(e) {

    let base = document.querySelector("#pokémon aside[name='team']")

    let hov = base.querySelectorAll(':scope .hover');
    for(let i = 0; i < hov.length; i++) {
        hov[i].classList.remove("hover");
    }


    if (drag != undefined) {
        if (e.target.innerText == "Party") {
            let base = document.querySelectorAll('#pokémon > aside[name="team"] section div[name="empty"]');
            if (base.length > 0) {
                createParty(base[0],"pok:"+drag);
                partyShow(base[0]);
                consoleText("Added "+drag+" to Party.");
            }
            else {
                consoleText("Party is full!")
            }
        }
        else if (e.target.innerText == "Box") {
            storeInBox("pok:"+drag);
            consoleText("Added "+drag+" to Box.");
        }
        else if (e.target.innerText == "+") {
            let base = e.target.parentElement.parentElement;
            createParty(base,"pok:"+drag);
            partyShow(base);
            consoleText("Added "+drag+" to Party.");
        }
    }
}

function createParty(base,data) {

    let i;
    let pok;
    let item;
    let nick;
    let level;
    let gender;
    let move;
    let ability;
    let iv;
    let ev;
    let nature;
    let metlocation;
    let metlevel;
    let metdate;
    let friendship;


    if(data.includes("|")) {
        data = data.split("|")
        for (let q = 0; q < data.length; q++) {
            if (data[q].split(":")[0] == "pok") {
                pok = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "it") {
                item = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ni") {
                nick = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "lv") {
                level = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ge") {
                gender = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "mo") {
                move = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ab") {
                ability = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "iv") {
                iv = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ev") {
                ev = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "na") {
                nature = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlo") {
                metlocation = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlv") {
                metlevel = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metda") {
                metdate = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "fr") {
                friendship = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
        }
    }
    else {
        if (data.split(":")[0] == "pok") {
            pok = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "it") {
            item = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ni") {
            nick = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "lv") {
            level = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ge") {
            gender = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "mo") {
            move = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ab") {
            ability = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "iv") {
            iv = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ev") {
            ev = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "na") {
            nature = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlo") {
            metlocation = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlv") {
            metlevel = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metda") {
            metdate = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "fr") {
            friendship = data.replaceAll(data.split(":")[0]+":","")
        }
    }

    i = getPokémonInt(pok);

    partyDefault(base);



    let baseBackground = base.querySelector(":scope > aside:first-child");
    let basePok = base.querySelector(":scope img[value]");
    let baseItem = base.querySelector(':scope span[name="item"] select');
    let baseItemImg = base.querySelector(':scope span[name="pokémon"] img:not([value])');
    let baseNick = base.querySelector(':scope span[name="name"] input');
    let baseLevel = base.querySelector(':scope input[placeholder="Lvl."]');
    let baseGender = base.querySelector(':scope aside > span:last-child > select:nth-child(2)');
    let baseMove = base.querySelector(':scope span[name="moves"] span:nth-child(2)');
    let baseMoves = base.querySelectorAll(':scope span[name="moves"] > span:nth-child(2) select');
    let baseAbility = base.querySelector(':scope span[name="ability"] select');
    let baseNature = base.querySelectorAll(':scope span[name="nature"] select');
    let baseIV = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span[name="iv"]');
    let baseEV = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span[name="ev"]');
    let baseStats = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span:last-child');
    let baseMetLocation = base.querySelector(':scope span[name="additional"] label[name="location"] select');
    let baseMetLevel = base.querySelector(':scope span[name="additional"] label[name="level"] input');
    let baseMetDate = base.querySelector(':scope span[name="additional"] label[name="date"] input');
    let baseFriendship = base.querySelector(':scope span[name="additional"] label[name="friendship"] input');
    let baseExport = base.querySelector(":scope aside figure[name='export']");



    let type1 = returnData(i,"Type","undefined")[0];
    let type2 = returnData(i,"Type","undefined")[1];

    if (type2 != undefined) {
        $(baseBackground).css({background: "linear-gradient(to right,var(--type"+type1+"),var(--type"+type2+"))"});
        base.querySelector(":scope > aside:first-child").setAttribute("name",type1+","+type2);
    }
    else {
        $(baseBackground).css({background: "linear-gradient(to right,var(--type"+type1+"),var(--type"+type1+"))"});
        base.querySelector(":scope > aside:first-child").setAttribute("name",type1);
    }

    basePok.src = getPokémonMediaPath([i],[PATH_Pokémon_Battle_Default_Front_PNG]);
   

    basePok.setAttribute("value",i);
    basePok.title = getPokémonName(i);
    baseNick.setAttribute("placeholder",getPokémonName(i));


    if (HeldItem == true) {

        let items = [];
        let result = finaldata["Items"]["Reference"].map(el => el["Pocket"] == "Berries" ? {...el, ["Pocket"]: "a"} : el).map(el => el["Pocket"] == "Items" || el["Pocket"] == "Other Items"  ? {...el, ["Pocket"]: "b"} : el).map(el => el["Pocket"] != "a" && el["Pocket"] != "b" ? {...el, ["Pocket"]: "c"} : el);

        items = sortObjectArray(result,"Pocket",true);

        let obj = new Object();
        obj["Item"] = "Item";
        obj["Game"] = "All";
        items.unshift(obj);



        if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]] != undefined) {
            let req = [];
            if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]].includes(",")) {
                req = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]].split(",")
            }
            else {
                req[0] = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]];
            }
            for (let q = 0; q < items.length; q++) {
                if (getApplicable(items[q]["Game"])) {
                    if (items[q]["Item"] != undefined) {
                        if (req.includes(items[q]["Item"])) {
                            let teamItemOption = document.createElement("option");
                            teamItemOption.value = items[q]["Item"];
                            teamItemOption.innerText = items[q]["Item"];
                            baseItem.appendChild(teamItemOption);

                            if (items[q]["Icon"] != undefined) {
                                teamItemOption.setAttribute("name",items[q]["Icon"]);
                            }
                            else {
                                teamItemOption.setAttribute("name",items[q]["Item"]);
                            }
                        }
                    }
                }
            }
            baseItemImg.style.display = "unset";
            baseItemImg.src = getMedia([baseItem.querySelector(":scope option:first-child").value],[PATH_Item_Bag])[0]
        }
        else if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]] != undefined) {
            let notreq = [];
            if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]].includes(",")) {
                notreq = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]].split(",")
            }
            else {
                notreq[0] = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]];
            }
            for (let q = 0; q < items.length; q++) {
                if (getApplicable(items[q]["Game"])) {
                    if (items[q]["Item"] != undefined) {
                        if (!notreq.includes(items[q]["Item"])) {
                            let teamItemOption = document.createElement("option");
                            teamItemOption.value = items[q]["Item"];
                            teamItemOption.innerText = items[q]["Item"];
                            baseItem.appendChild(teamItemOption);

                            if (items[q]["Item"] != undefined) {
                                teamItemOption.setAttribute("name",items[q]["Item"]);
                            }
                            else {
                                teamItemOption.setAttribute("name",items[q]["Item"]);
                            }
                        }
                    }
                }
            }
        }
        else {
            for (let q = 0; q < items.length; q++) {
                if (getApplicable(items[q]["Game"])) {
                    if (items[q]["Item"] != undefined) {
                        let teamItemOption = document.createElement("option");
                        teamItemOption.value = items[q]["Item"];
                        teamItemOption.innerText = items[q]["Item"];
                        baseItem.appendChild(teamItemOption);

                        if (items[q]["Icon"] != undefined) {
                            teamItemOption.setAttribute("name",items[q]["Item"]);
                        }
                        else {
                            teamItemOption.setAttribute("name",items[q]["Item"]);
                        }
                    }
                }
            }
        }
    }

    if (Gender == true) {
        let tempgender = returnData(i,"Gender Ratio","undefined");

        let possibleGender = [];
        if (getPokémonName(i).includes("Male")) {
            possibleGender = ["♂"];
        }
        else if (getPokémonName(i).includes("Female")) {
            possibleGender = ["♀"];
        }
        else {
            if (tempgender[0] == "0" && tempgender[1] == "0") {
                possibleGender = ["☿"];
            }
            else if (tempgender[0] == "0") {
                possibleGender = ["♀"];
            }
            else if (tempgender[1] == "0") {
                possibleGender = ["♂"];
            }
            else {
                possibleGender = ["♂","♀"];
            }
        }

        if (possibleGender[0] == "♂") {
            baseGender.style.color = "var(--colorBlue)";
        }
        if (possibleGender[0] == "♀") {
            baseGender.style.color = "var(--colorRed)";
        }
        if (possibleGender[0] == "☿") {
            baseGender.style.color = "var(--fontDark)";
        }

        for (let q = 0; q < possibleGender.length; q++) {
            let option = document.createElement("option");
            option.innerText = possibleGender[q];
            option.value = possibleGender[q];
            option.setAttribute("name",possibleGender[q]);
            baseGender.appendChild(option)
        }
    }


    if (getEvolutionFamily(i).length > 1) {
        baseExport.querySelector(':scope *[name="Change Evolution"]').style.removeProperty("display");
    }
    else {
        baseExport.querySelector(':scope *[name="Change Evolution"]').style.display = "none";
    }

    if (getPokémonForm(i).length > 1) {
        baseExport.querySelector(':scope *[name="Change Form"]').style.removeProperty("display");
    }
    else {
        baseExport.querySelector(':scope *[name="Change Form"]').style.display = "none";
    }




    let tempmoves = returnMoveSet(i,"onlymoves,noduplicate");
    tempmoves.unshift("Move");
    for (let u = 0; u < baseMoves.length; u++) {
        let x = u+1;
        for (let q = 0; q < tempmoves.length; q++) {
            let option = document.createElement("option");
            if (q == 0) {
                option.innerText = tempmoves[q]+" #"+x;
                option.value = tempmoves[q]+" #"+x;
            }
            else {
                option.innerText = tempmoves[q];
                option.value = tempmoves[q];
                option.title = formatMoveData(tempmoves[q]);
            }

            option.setAttribute("name","styleBackgroundType"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],tempmoves[q]));
            baseMoves[u].appendChild(option)
        }
    }


    if (Ability.length > 0) {
        let abilities = returnData(i,"Ability","");

        for (let q = 0; q < abilities.length; q++) {
            if (abilities[q] != undefined) {
                let option = document.createElement("option");
                option.innerText = abilities[q];
                option.value = abilities[q];
                if (q == 0) {
                    option.setAttribute("name","Primary")
                }
                if (q == 1) {
                    option.setAttribute("name","Secondary")
                }
                if (q == 2) {
                    option.setAttribute("name","Hidden")
                }
                baseAbility.appendChild(option)
            }
        }
        let desc = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",baseAbility.value)[0]["Description"];
        if (desc != undefined) {
            baseAbility.setAttribute("title",desc);
        }
    }

    



    if (nick != undefined) {
        baseNick.value = nick;
    }
    if (item != undefined && HeldItem == true) {
        let baseItems = baseItem.querySelectorAll(":scope option");
        let opt = baseItem.querySelector(':scope option[value="'+item+'"]')
        let tempArr = [];
        for (let q = 0; q < baseItems.length; q++) {
            tempArr.push(baseItems[q].value);
        }

        if (tempArr.includes(item)) {
            baseItem.value = item;
            baseItem.setAttribute("name",opt.getAttribute("name"));
            baseItem.style.fontStyle = "unset";
            baseItemImg.style.display = "unset";
            baseItemImg.src = getMedia([opt.getAttribute("name")],[PATH_Item_Bag])[0];
            baseItemImg.setAttribute("title",item);
        }
    }
    if (level != undefined) {
        baseLevel.value = level;
    }
    if (gender != undefined && Gender == true) {
        baseGender.value = gender;
        if (gender == "♂") {
            baseGender.style.color = "var(--colorBlue)";
        }
        if (gender == "♀") {
            baseGender.style.color = "var(--colorRed)";
        }
        if (gender == "☿") {
            baseGender.style.color = "var(--fontDark)";
        }
    }
    if (ability != undefined && Ability.length > 0) {
        let abtemp = baseAbility.querySelector(':scope > option[name="'+ability+'"]');

        if (abtemp != undefined) {
            baseAbility.value = abtemp.value;
            baseAbility.setAttribute("name",ability);
            baseAbility.style.fontStyle = "unset";
        }
    }
    if (nature != undefined && Natures.length > 0) {
        for (let q = 0; q < baseNature.length; q++) {
            baseNature[q].value = nature;
        }

        baseStats.setAttribute("name",nature);
    }




    if (move != undefined) {
        let tempmove = [move];
        if (move.includes(",")) {
            tempmove = move.split(",");
        }
        for (let q = 0; q < tempmove.length; q++) {
            let y = q+1;
            if (tempmove[q] != "") {
                if (tempmoves.includes(tempmove[q])) {
                    baseMove.querySelector(":scope > span:nth-child("+y+") select").value = tempmove[q];
                    if (!tempmove[q].includes("Move")) {
                        baseMove.querySelector(":scope > span:nth-child("+y+") select").title = formatMoveData(tempmove[q]);
                        baseMove.querySelector(":scope > span:nth-child("+y+") select").style.fontStyle = "unset";
                        baseMove.querySelector(":scope > span:nth-child("+y+") select").setAttribute("name","styleBackgroundType"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],tempmove[q]))
                    }
                }
            }
            else {
                baseMove.querySelector(":scope > span:nth-child("+y+") select").value = baseMove.querySelector(":scope > span:nth-child("+y+") select").firstElementChild.value;
            }
        }
    }
    if (iv != undefined) {
        let tempiv = [iv];
        if (iv.includes(",")) {
            tempiv = iv.split(",");
        }
        for (let q = 0; q < tempiv.length; q++) {
            let y = q+1;
            if (baseIV.querySelector(":scope input:nth-child("+y+")") != undefined) {
                baseIV.querySelector(":scope input:nth-child("+y+")").value = tempiv[q];
            }
        }
    }
    if (ev != undefined) {
        let tempev = [ev];
        if (ev.includes(",")) {
            tempev = ev.split(",");
        }
        for (let q = 0; q < tempev.length; q++) {
            let y = q+1;
            if (baseEV.querySelector(":scope > input:nth-child("+y+")") != undefined) {
                baseEV.querySelector(":scope > input:nth-child("+y+")").value = tempev[q];
            }
        }
    }

    if (metlocation != undefined) {
        baseMetLocation.value = metlocation;
    }
    if (metlevel != undefined) {
        baseMetLevel.value = metlevel;
    }
    if (metdate != undefined) {
        baseMetDate.value = metdate;
        baseMetDate.style.color = "inherit";
    }
    if (Friendship == true) {
        if (baseFriendship != null) {
            if (friendship != undefined) {
                baseFriendship.value = friendship;
            }
            else if (returnData(i,"Base Friendship","")[0] != undefined){
                baseFriendship.value = returnData(i,"Base Friendship","")[0];
            }
        }
    }



    boxMemory("Save");
    partyMemory("Save");
}





function partyNature() {
    let base = this.parentElement.parentElement.parentElement.parentElement;

    let select = base.querySelectorAll(':scope span[name="nature"] select');

    let coloring = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > *:last-child');
    coloring.setAttribute("name",this.value);

    for (let q = 0; q < select.length; q++) {
        select[q].value = this.value;
    }

}



function partyShow(base) {

    if (base.getAttribute("name") == "empty") {
        base.removeAttribute("name");
    }

    calcPartyStat(base);

    let sides = base.querySelectorAll(":scope > aside");
    let side = base.querySelector(":scope > aside:first-child");

    for (q = 0; q < sides.length; q++) {
        sides[q].style.display = "none";
    }
    side.style.display = "flex";
    partyMemory("Save");
}


function partyHide(base) {

    if (base.getAttribute("name") != "empty") {
        base.setAttribute("name","empty");
    }
    
    let sides = base.querySelectorAll(":scope > aside");
    let side = base.querySelector(":scope > aside:last-child");

    for (q = 0; q < sides.length; q++) {
        sides[q].style.display = "none";
    }
    side.style.display = "flex";

    partyMemory("Save");
}



function deleteBox(element) {
    element.remove();
    boxMemory("Save");
}

function returnMoveSet(int,additional) {
    let arrE = finaldata["Pokémon Learnset"]["Evolution"];
    let arrL = finaldata["Pokémon Learnset"]["Level Up"];
    let arrM = finaldata["Pokémon Learnset"]["Machine"];
    let arrB = finaldata["Pokémon Learnset"]["Breeding"];
    let arrT = finaldata["Pokémon Learnset"]["Tutor"];

    let name = getPokémonName(int,"Alt");

    let evores = [];
    let lvlres = [];
    let machres = [];
    let breres = [];
    let tutres = [];


    for(let i = 0; i < arrE.length; i++) {
		if(arrE[i]["Pokémon"] == name && getApplicable(arrE[i]["Game"])) {
            let obj = new Object();
            obj["Pokémon"] = arrE[i]["Pokémon"];
            obj["Move"] = arrE[i]["Move"];
            obj["Evolution"] = arrE[i]["Evolution"];
            obj["Additional"] = arrE[i]["Additional"];
            obj["Game"] = arrE[i]["Game"];
            obj["Type"] = "Prior Evolution";
            evores.push(obj)
		}
	}

    for(let i = 0; i < arrL.length; i++) {
		if(arrL[i]["Pokémon"] == name && getApplicable(arrL[i]["Game"])) {
            let obj = new Object();
            obj["Pokémon"] = arrL[i]["Pokémon"];
            obj["Factor"] = arrL[i]["Factor"];
            obj["Move"] = arrL[i]["Move"];
            obj["Game"] = arrL[i]["Game"];
            obj["Type"] = "Level Up";
            lvlres.push(obj)
		}
	}

    for(let i = 0; i < arrM.length; i++) {
		if(arrM[i]["Pokémon"] == name && getApplicable(arrM[i]["Game"])) {
            let obj = new Object();
            obj["Pokémon"] = arrM[i]["Pokémon"];
            obj["Machine"] = arrM[i]["Machine"];
            obj["Move"] = arrM[i]["Move"];
            obj["Game"] = arrM[i]["Game"];
            obj["Type"] = "Machine";
            machres.push(obj)
		}
	}

    for(let i = 0; i < arrT.length; i++) {
		if(arrT[i]["Pokémon"] == name && getApplicable(arrT[i]["Game"])) {
            let obj = new Object();
            obj["Pokémon"] = arrT[i]["Pokémon"];
            obj["Move"] = arrT[i]["Move"];
            obj["Game"] = arrT[i]["Game"];
            obj["Type"] = "Tutor";
            tutres.push(obj)
		}
	}


    for(let i = 0; i < arrB.length; i++) {
		if(arrB[i]["Pokémon"] == name && getApplicable(arrB[i]["Game"])) {
            let obj = new Object();
            obj["Pokémon"] = arrB[i]["Pokémon"];
            obj["Parent"] = arrB[i]["Parent"];
            obj["Item"] = arrB[i]["Item"];
            obj["Additional"] = arrB[i]["Additional"];
            obj["Move"] = arrB[i]["Move"];
            obj["Game"] = arrB[i]["Game"];
            obj["Type"] = "Breeding";
            breres.push(obj)
		}
	}

    name = getPokémonName([finaldata["Pokémon"]["Reference"].map(function(e) {return e.ID;}).indexOf(finaldata["Pokémon"]["Reference"][int]["ID"])],"Alt");


    if (!evores.length > 0) {
        for(let i = 0; i < arrE.length; i++) {
            if(arrE[i]["Pokémon"] == name && getApplicable(arrE[i]["Game"])) {
                let obj = new Object();
                obj["Pokémon"] = arrE[i]["Pokémon"];
                obj["Move"] = arrE[i]["Move"];
                obj["Evolution"] = arrE[i]["Evolution"];
                obj["Additional"] = arrE[i]["Additional"];
                obj["Game"] = arrE[i]["Game"];
                obj["Type"] = "Prior Evolution";
                evores.push(obj)
            }
        }
    }
    
    if (!lvlres.length > 0) {
        for(let i = 0; i < arrL.length; i++) {
            if(arrL[i]["Pokémon"] == name && getApplicable(arrL[i]["Game"])) {
                let obj = new Object();
                obj["Pokémon"] = arrL[i]["Pokémon"];
                obj["Factor"] = arrL[i]["Factor"];
                obj["Move"] = arrL[i]["Move"];
                obj["Game"] = arrL[i]["Game"];
                obj["Type"] = "Level Up";
                lvlres.push(obj)
            }
        }
    }

    if (!machres.length > 0) {
        for(let i = 0; i < arrM.length; i++) {
            if(arrM[i]["Pokémon"] == name && getApplicable(arrM[i]["Game"])) {
                let obj = new Object();
                obj["Pokémon"] = arrM[i]["Pokémon"];
                obj["Machine"] = arrM[i]["Machine"];
                obj["Move"] = arrM[i]["Move"];
                obj["Game"] = arrM[i]["Game"];
                obj["Type"] = "Machine";
                machres.push(obj)
            }
        }
    }

    if (!tutres.length > 0) {
        for(let i = 0; i < arrT.length; i++) {
            if(arrT[i]["Pokémon"] == name && getApplicable(arrT[i]["Game"])) {
                let obj = new Object();
                obj["Pokémon"] = arrT[i]["Pokémon"];
                obj["Move"] = arrT[i]["Move"];
                obj["Game"] = arrT[i]["Game"];
                obj["Type"] = "Tutor";
                tutres.push(obj)
            }
        }
    }

    if (!breres.length > 0) {
        for(let i = 0; i < arrB.length; i++) {
            if(arrB[i]["Pokémon"] == name && getApplicable(arrB[i]["Game"])) {
                let obj = new Object();
                obj["Pokémon"] = arrB[i]["Pokémon"];
                obj["Parent"] = arrB[i]["Parent"];
                obj["Item"] = arrB[i]["Item"];
                obj["Additional"] = arrB[i]["Additional"];
                obj["Move"] = arrB[i]["Move"];
                obj["Game"] = arrB[i]["Game"];
                obj["Type"] = "Egg Move";
                breres.push(obj)
            }
        }
    }

    let result = [];

    for(let q = 0; q < evores.length; q++) {
        result.push(evores[q]);
    }
    for(let q = 0; q < lvlres.length; q++) {
        result.push(lvlres[q]);
    }
    for(let q = 0; q < machres.length; q++) {
        result.push(machres[q]);
    }
    for(let q = 0; q < tutres.length; q++) {
        result.push(tutres[q]);
    }
    for(let q = 0; q < breres.length; q++) {
        result.push(breres[q]);
    }
    if (additional.includes("noduplicate")) {
        result = removeDuplicateObjectFromArray(result,"Move");
    }
    if (additional.includes("onlymoves")) {
        for(let q = 0; q < result.length; q++) {
            result[q] = result[q]["Move"];
        }
    }
    if (additional.includes("lower")) {
        if (typeof result[0] == "object") {
            for(let q = 0; q < result.length; q++) {
                for (let u = 0; u < Object.keys(result[q]).length; u++) {
                    result[q][Object.keys(result[q])[u]] = result[q][Object.keys(result[q])[u]].toLowerCase();
                }
            }
        }
        else {
            for(let q = 0; q < result.length; q++) {
                result[q] = result[q].toLowerCase();
            }
        }
    }

    return result;
}



function selectModify(e) {
    let opt = this.querySelector(':scope > option[value="'+this.value+'"]');

    if (this.value == "♂") {
        this.style.color = "var(--colorBlue)";
    }
    if (this.value == "♀") {
        this.style.color = "var(--colorRed)";
    }
    if (this.value == "☿") {
        this.style.color = "var(--fontDark)";
    }

    if (this.firstElementChild.value.includes("Move")) {
        if (this.value == this.firstElementChild.value) {
            this.style.fontStyle = "italic";
        }
        else {
            this.style.fontStyle = "unset";
        }
    }
    
    if (this.firstElementChild.value.includes("Item")) {
        if (this.value == "Item") {
            this.style.fontStyle = "italic";
        }
        else {
            this.style.fontStyle = "unset";
        }
    }



    if (this.firstElementChild.value == "Item") {
        this.setAttribute("name",opt.getAttribute("name"));
    }



    if (this.parentElement.getAttribute("name") == "Nature") {
        let base = this.parentElement.parentElement.parentElement;
        base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span:last-child').setAttribute("name",this.value);
    }

    if (this.parentElement.getAttribute("name") == "Ability") {
        let desc = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",this.value)[0]["Description"];
        if (desc != undefined) {
            this.setAttribute("title",desc);
        }
        this.setAttribute("name",this.querySelector(':scope > option[value="'+this.value+'"]').getAttribute("name"));
    }




    if (this.firstElementChild.value.includes("Move")) {
        let sel = this.parentElement.parentElement.querySelectorAll(':scope select');
        let opts = this.parentElement.parentElement.querySelectorAll(':scope option');
        let optz = this.parentElement.parentElement.querySelectorAll(':scope option[value="'+this.value+'"]');

        let selvals = [];
        
        for(let i = 0; i < sel.length; i++) {
            selvals.push(sel[i].value)
        }

        for(let i = 0; i < opts.length; i++) {
            if (!selvals.includes(opts[i].value)) {
                opts[i].style.display = "unset";
                opts[i].removeAttribute("disabled");
            }
        }
     
        for(let i = 0; i < optz.length; i++) {
            optz[i].style.display = "none";
            optz[i].setAttribute("disabled","");
        }
        if (!this.value.includes("Move #")) {
            this.title = formatMoveData(this.value);
        }
        else {
            this.title = "";
        }

        this.setAttribute("name","styleBackgroundType"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],this.value));
    }

    partyMemory("Save");
}

function storeInBox(data) {

    let box = document.querySelector('#pokémon > aside[name="team"] > section[name="box"] ul');
    const datastr = data;

    let i;
    let pok;
    let item;
    let nick;
    let level;
    let gender;
    let move;
    let ability;
    let iv;
    let ev;
    let nature;
    let metlocation;
    let metlevel;
    let metdate;
    let friendship;

    if(data.includes("|")) {
        data = data.split("|")
        for (let q = 0; q < data.length; q++) {
            if (data[q].split(":")[0] == "pok") {
                pok = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "it") {
                item = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ni") {
                nick = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "lv") {
                level = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ge") {
                gender = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "mo") {
                move = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ab") {
                ability = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "iv") {
                iv = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ev") {
                ev = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "na") {
                nature = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlo") {
                metlocation = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlv") {
                metlevel = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metda") {
                metdate = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "fr") {
                friendship = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
        }

    }
    else {
        if (data.split(":")[0] == "pok") {
            pok = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "it") {
            item = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ni") {
            nick = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "lv") {
            level = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ge") {
            gender = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "mo") {
            move = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ab") {
            ability = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "iv") {
            iv = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ev") {
            ev = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "na") {
            nature = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlo") {
            metlocation = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlv") {
            metlevel = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metda") {
            metdate = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "fr") {
            friendship = data.replaceAll(data.split(":")[0]+":","")
        }
    }

    i = getPokémonInt(pok);

    let li = document.createElement("li");
    let shadow = document.createElement("span");
    let img = document.createElement("img");
    img.src = getPokémonMediaPath([i],[PATH_Pokémon_Box_Default_PNG]);
    img.setAttribute("value",i);
    box.appendChild(li)
    li.appendChild(shadow)
    li.appendChild(img)

    if (i != undefined) {
        li.setAttribute("data-pok",pok);
    }
    if (item != undefined) {
        li.setAttribute("data-item",item);
    }
    if (nick != undefined) {
        li.setAttribute("data-nick",nick);
    }
    if (level != undefined) {
        li.setAttribute("data-level",level);
    }
    if (gender != undefined) {
        li.setAttribute("data-gender",gender);
    }
    if (move != undefined) {
        li.setAttribute("data-move",move);
    }
    if (ability != undefined) {
        li.setAttribute("data-ability",ability);
    }
    if (iv != undefined) {
        li.setAttribute("data-iv",iv);
    }
    if (ev != undefined) {
        li.setAttribute("data-ev",ev);
    }
    if (nature != undefined) {
        li.setAttribute("data-nature",nature);
    }
    if (metlocation != undefined) {
        li.setAttribute("data-metlocation",metlocation);
    }
    if (metlevel != undefined) {
        li.setAttribute("data-metlevel",metlevel);
    }
    if (metdate != undefined) {
        li.setAttribute("data-metdate",metdate);
    }
    if (friendship != undefined) {
        li.setAttribute("data-friendship",friendship);
    }
   

   
    img.setAttribute("title",dataStringTitle(datastr));
    boxMemory("Save");
}


function getPartyData(base) {
    let data = [];

    let name = base.querySelector(':scope > aside:first-child > span > span[name="name"] input');
    let level = base.querySelector(':scope > aside:first-child > span:first-child > input[type="number"]');
    let item = base.querySelector(':scope > aside:first-child > span > span[name="item"] > select');
    let nick = base.querySelector(':scope > aside:first-child > span > span[name="name"] > input[type="text"]');
    let gender = base.querySelector(":scope > aside:first-child > span:last-child > select[title='Gender']");
    let ability = base.querySelector(':scope > aside:first-child > span[name="moves"] > span[name="ability"] > select');

    let nature = base.querySelectorAll(':scope > aside:first-child > span > span[name="nature"] > select');
    let move = base.querySelectorAll(':scope > aside:first-child > span[name="moves"] > span:nth-child(2) > span select');
    let iv = base.querySelectorAll(':scope > aside:first-child > span[name="stats"] > span:nth-child(2) > span[name="iv"] > input');
    let ev = base.querySelectorAll(':scope > aside:first-child > span[name="stats"] > span:nth-child(2) > span[name="ev"] > input');

    let metlocation = base.querySelector(':scope > aside:first-child > span[name="additional"] label[name="location"] select');
    let metlvl = base.querySelector(':scope > aside:first-child > span[name="additional"] label[name="level"] input');
    let metdate = base.querySelector(':scope > aside:first-child > span[name="additional"] label[name="date"] input');
    let friendship = base.querySelector(':scope > aside:first-child > span[name="additional"] label[name="friendship"] input');



    if (name != undefined) {
        if (name.placeholder != undefined) {
            data.push("pok:"+name.placeholder);
        }
    }
    if (level != undefined) {
        if (level.value != undefined && level.value != "") {
            data.push("lv:"+level.value);
        }
    }
    if (item != undefined) {
        if (item.value != undefined && item.value != "Item") {
            data.push("it:"+item.value);
        }
    }
    if (nick != undefined) {
        if (nick.value != undefined && nick.value != "") {
            data.push("ni:"+nick.value);
        }
    }
    if (gender != undefined) {
        if (gender.value != undefined) {
            data.push("ge:"+gender.value);
        }
    }
    if (ability != undefined) {
        if (ability.value != undefined) {

            data.push("ab:"+ability.querySelector(":scope option[value='"+ability.value+"']").getAttribute("name"));
        }
    }
    if (nature[0] != undefined) {
        if (nature[0].value != undefined && nature[0].value != "Nature") {
            data.push("na:"+nature[0].value);
        }
    }

    if (move != undefined) {
        let movearr = [];
        let movestr;
        for(let q = 0; q < move.length; q++) {
            if (!move[q].value.includes("Move")) {
                movearr.push(move[q].value);
            }
            else {
                movearr.push("");
            }
        }
        if (movearr.length > 1) {
            movestr = movearr.join(",");
        }
        else {
            movestr = movearr[0];
        }
        if (movestr != undefined) {
            if (movestr.replaceAll(",","").length > 0) {
                data.push("mo:"+movestr);
            }
        }
    }
    if (iv != undefined) {
        let ivarr = [];
        let ivstr;
        for(let q = 0; q < iv.length; q++) {
            ivarr.push(iv[q].value);
        }
        if (ivarr.length > 1) {
            ivstr = ivarr.join(",");
        }
        else {
            ivstr = ivarr[0];
        }
        if (ivstr != undefined) {
            if (ivstr.replaceAll(",","").length > 0) {
                data.push("iv:"+ivstr);
            }
        }
    }
    if (ev != undefined) {
        let evarr = [];
        let evstr;
        for(let q = 0; q < ev.length; q++) {
            evarr.push(ev[q].value);
        }
        if (evarr.length > 1) {
            evstr = evarr.join(",");
        }
        else {
            evstr = evarr[0];
        }
        if (evstr != undefined) {
            if (evstr.replaceAll(",","").length > 0) {
                data.push("ev:"+evstr);
            }
        }
    }
    if (metlocation != undefined) {
        if (metlocation.value != undefined && metlocation.value != "") {
            data.push("metlo:"+metlocation.value);
        }
    }
    if (metlvl != undefined) {
        if (metlvl.value != undefined && metlvl.value != "") {
            data.push("metlv:"+metlvl.value);
        }
    }
    if (metdate != undefined) {
        if (metdate.value != undefined && metdate.value != "") {
            data.push("metda:"+metdate.value);
        }
    }
    if (friendship != undefined) {
        if (friendship.value != undefined && friendship.value != "") {
            data.push("fr:"+friendship.value);
        }
    }


    if (data.length > 1) {
        data = data.join("|");
    }
    else {
        data = data[0];
    }

    return data;
}

function getAllBoxData() {
    let lis = document.querySelectorAll('#pokémon > aside[name="team"] > section[name="box"] > ul li');
    let data = [];
    for (let i = 0; i < lis.length; i++) {
        data.push(getBoxData(lis[i]))
    }
    if (data.length > 1) {
        data = data.join("/");
    }
    else {
        data = data[0];
    }
    return data;
}
function getBoxData(base) {
    let data = [];

    if (base.getAttribute("data-pok") != null) {
        data.push("pok:"+base.getAttribute("data-pok"))
    }
    if (base.getAttribute("data-nick") != null) {
        data.push("ni:"+base.getAttribute("data-nick"))
    }
    if (base.getAttribute("data-level") != null) {
        data.push("lv:"+base.getAttribute("data-level"))
    }
    if (base.getAttribute("data-item") != null) {
        data.push("it:"+base.getAttribute("data-item"))
    }
    if (base.getAttribute("data-gender") != null) {
        data.push("ge:"+base.getAttribute("data-gender"))
    }
    if (base.getAttribute("data-ability") != null) {
        data.push("ab:"+base.getAttribute("data-ability"))
    }
    if (base.getAttribute("data-move") != null) {
        data.push("mo:"+base.getAttribute("data-move"))
    }
    if (base.getAttribute("data-nature") != null) {
        data.push("na:"+base.getAttribute("data-nature"))
    }
    if (base.getAttribute("data-iv") != null) {
        data.push("iv:"+base.getAttribute("data-iv"))
    }
    if (base.getAttribute("data-ev") != null) {
        data.push("ev:"+base.getAttribute("data-ev"))
    }
    if (base.getAttribute("data-metlocation") != null) {
        data.push("metlo:"+base.getAttribute("data-metlocation"))
    }
    if (base.getAttribute("data-metlevel") != null) {
        data.push("metlv:"+base.getAttribute("data-metlevel"))
    }
    if (base.getAttribute("data-metdate") != null) {
        data.push("metda:"+base.getAttribute("data-metdate"))
    }
    if (base.getAttribute("data-friendship") != null) {
        data.push("fr:"+base.getAttribute("data-friendship"))
    }

    if(data.length > 1) {
        data = data.join("|");
    }
    else {
        data = data[0]
    }

    return data;
}


function partyAdd() {
    let data = prompt("Enter Pokémon Data String:","");

    if (data != null && data != "") {
        if (data.includes("pok:")) {
            let temparr = [];
            let tempstr;

            if (data.includes("|")) {
                temparr = data.split("pok:");
                if (temparr.length > 1) {
                    temparr = temparr[1].split("|");
                    tempstr = getPokémonInt(temparr[0]);
                }
            }
            else {
                temparr = data.split("pok:");
                tempstr = getPokémonInt(temparr[1]);
            }
            if (tempstr != undefined) {
                if (finaldata["Pokémon"]["Reference"][parseInt(tempstr)][DATA_Pokémon_Reference["Reference"]] == "true") {
                    createParty(this.parentElement.parentElement,data)
                    partyShow(this.parentElement.parentElement);
                    consoleText("Added "+getPokémonName(tempstr)+" to Party.")
                }
                else {
                    consoleText("Pokémon Unavailable.")
                }
            }
            else {
                consoleText("Data returned an error.")
            }
        }
        else {
            consoleText("Data returned an error.")
        }
    }
}

function reNumberMove(base) {
    let selects = base.querySelectorAll(":scope select > option:first-child")

    for (let q = 0; q < selects.length; q++) {
        let x = q+1;
        selects[q].value = "Move #"+x;
        selects[q].innerText = "Move #"+x;
    }
    partyMemory("Save");
}


function statsCalc(type,level,base,iv,ev,nature,friendship) {

    if (typeof level == "string") {
        level = parseInt(level);
    }
    if (typeof base == "string") {
        base = parseInt(base);
    }
    if (typeof iv == "string") {
        iv = parseInt(iv);
    }
    if (typeof ev == "string") {
        ev = parseInt(ev);
    }
    if (typeof friendship == "string") {
        friendship = parseInt(friendship);
    }

    if (type == "HP") {
        if (base == 1) {
            return 1;
        }
        else {
            if (Generation >= 1 && Generation <= 2) {
                return Math.floor((((base+iv)*2+(Math.ceil(ev)/4))*level)/100)+level+10;
            }
            else if (GameID >= 31 && GameID <= 32) {
                return Math.floor(((2*base+iv)*level)/100)+level+10+ev;
            }
            else if (Generation >= 3) {
                return Math.floor(((2*base+iv+Math.floor(ev/4))*level)/100)+level+10;
            }
        }
    }
    else {
        if (Generation >= 1 && Generation <= 2) {
            return Math.floor((((base+iv)*2+Math.floor(Math.ceil(ev)/4))*level)/100)+5;
        }
        else if (GameID >= 31 && GameID <= 32) {
            return Math.floor(((((2*base+iv)*level)/100)+5)*nature*friendship)+ev;
        }
        else if (Generation >= 3) {
            return Math.floor((Math.floor(((2*base+iv+Math.floor(ev/4))*level)/100)+5)*nature);
        }
    }
}


function natureModifier(type,nature) {
    if (type == "Attack") {
        if (nature == "Lonely" || nature == "Brave" || nature == "Adamant" || nature == "Naughty") {
            return 1.1;
        }
        else if (nature == "Bold" || nature == "Timid" || nature == "Modest" || nature == "Calm") {
            return 0.9;
        }
    }
    else if (type == "Defense") {
        if (nature == "Bold" || nature == "Relaxed" || nature == "Impish" || nature == "Lax") {
            return 1.1;
        }
        else if (nature == "Lonely" || nature == "Hasty" || nature == "Mild" || nature == "Gentle") {
            return 0.9;
        }
    }
    else if (type == "Sp. Atk") {
        if (nature == "Modest" || nature == "Mild" || nature == "Quiet" || nature == "Rash") {
            return 1.1;
        }
        else if (nature == "Adamant" || nature == "Impish" || nature == "Jolly" || nature == "Careful") {
            return 0.9;
        }
    }
    else if (type == "Sp. Def") {
        if (nature == "Calm" || nature == "Gentle" || nature == "Sassy" || nature == "Careful") {
            return 1.1;
        }
        else if (nature == "Naughty" || nature == "Lax" || nature == "Naive" || nature == "Rash") {
            return 0.9;
        }
    }
    else if (type == "Speed") {
        if (nature == "Timid" || nature == "Hasty" || nature == "Jolly" || nature == "Naive") {
            return 1.1;
        }
        else if (nature == "Brave" || nature == "Relaxed" || nature == "Quiet" || nature == "Sassy") {
            return 0.9;
        }
    }
    return 1;
}

function getNatureTitle(nature) {
    let result = []

    if (nature == "Lonely" || nature == "Brave" || nature == "Adamant" || nature == "Naughty") {
        result[0] =  "+Attack";
    }
    else if (nature == "Bold" || nature == "Timid" || nature == "Modest" || nature == "Calm") {
        result[1] =  "-Attack";
    }

    if (nature == "Bold" || nature == "Relaxed" || nature == "Impish" || nature == "Lax") {
        result[0] =  "+Defense";
    }
    else if (nature == "Lonely" || nature == "Hasty" || nature == "Mild" || nature == "Gentle") {
        result[1] =  "-Defense";
    }

    if (nature == "Modest" || nature == "Mild" || nature == "Quiet" || nature == "Rash") {
        result[0] =  "+Sp. Atk";
    }
    else if (nature == "Adamant" || nature == "Impish" || nature == "Jolly" || nature == "Careful") {
        result[1] =  "-Sp. Atk";
    }

    if (nature == "Calm" || nature == "Gentle" || nature == "Sassy" || nature == "Careful") {
        result[0] =  "+Sp. Def";
    }
    else if (nature == "Naughty" || nature == "Lax" || nature == "Naive" || nature == "Rash") {
        result[1] =  "-Sp. Def";
    }

    if (nature == "Timid" || nature == "Hasty" || nature == "Jolly" || nature == "Naive") {
        result[0] =  "+Speed";
    }
    else if (nature == "Brave" || nature == "Relaxed" || nature == "Quiet" || nature == "Sassy") {
        result[1] =  "-Speed";
    }
    if(result.length == 0) {
        return "Neutral"
    }
    else {
        return result.join("\n");
    }
}



function calcPartyStat(divBase) {

    let div;

    if (divBase.tagName == "DIV") {
        div = divBase;
    }
    else {
        div = findUpTag(divBase,"DIV");
    }

    let int = getPokémonInt(div.querySelector(':scope span[name="pokémon"] img[value]').title)
    let level = div.querySelector(':scope aside > span:first-child input[type="number"]')
    let ivs = div.querySelectorAll(':scope aside > span[name="stats"] > span:nth-child(2) > span[name="iv"] input[type="number"]');
    let evs = div.querySelectorAll(':scope aside > span[name="stats"] > span:nth-child(2) > span[name="ev"] input[type="number"]');
    let natures = div.querySelectorAll(':scope aside span[name="nature"] select');
    let friendships = div.querySelector(':scope aside label[name="friendship"] input');
 
    let res = div.querySelectorAll(':scope aside > span[name="stats"] > span:nth-child(2) > span:last-child input[type="number"]');


    for (let i = 0; i < res.length; i++) {

        let stat = Stats[i];
 

        let lvl = level.value;
        let base = returnData(int,"Base Stats "+stat,"")[0];
        let iv = ivs[i].value
        let ev = evs[i].value
        let nature;
        let friendship;

        if (Natures.length > 0) {
            nature = natureModifier(stat,natures[0].value);
        }
        else {
            nature = 1;
        }

        if (Friendship == true) {
            if (friendships.value != undefined && friendships.value != "") {
                friendship = friendshipModifer(friendships.value);
            }
            else {
                friendship = 1;
            }
        }

        if (lvl != "") {
            if (iv == "") {
                iv = 0;
            }
            if (ev == "") {
                ev = 0;
            }
            res[i].setAttribute("min",statsCalc(stat,lvl,base,iv,ev,nature,friendship));
            res[i].setAttribute("max",statsCalc(stat,lvl,base,iv,ev,nature,friendship));
            res[i].value = statsCalc(stat,lvl,base,iv,ev,nature,friendship);
        }
        else {
            res[i].setAttribute("min","0");
            res[i].setAttribute("max","0");
            res[i].value = 0;
        }
    }
    



}

function formatMoveData(move,obj) {

    let tempStr;
    let tempArr = [];

    if (obj == undefined) {
        obj = {};
    }

    let type = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],move);
    let cate = returnArrValue(finaldata["Moves"]["Category"],DATA_Move_Reference["Name"],DATA_Move_Category["Category"],move);
    let ppmin = returnArrValue(finaldata["Moves"]["PP"],DATA_Move_Reference["Name"],DATA_Move_PP["Min"],move);
    let pwr = returnArrValue(finaldata["Moves"]["Power"],DATA_Move_Reference["Name"],DATA_Move_Power["Power"],move);
    let acc = returnArrValue(finaldata["Moves"]["Accuracy"],DATA_Move_Reference["Name"],DATA_Move_Accuracy["Accuracy"],move);
    let desc = returnArrValue(finaldata["Moves"]["Description"],DATA_Move_Reference["Name"],DATA_Move_Description["Description"],move);
    let prio = returnArrValue(finaldata["Moves"]["Priority"],DATA_Move_Reference["Name"],DATA_Move_Priority["Priority"],move);

    if (obj["Power"] != undefined) {
        pwr = obj["Power"];
    }
    if (obj["Category"] != undefined) {
        cate = obj["Category"];
    }
    if (obj["Type"] != undefined) {
        type = obj["Type"];
    }

    prio = undwsDel(prio,"0");
    pwr = undwsDel(pwr,"-");
    acc = undwsDel(acc,"100%");


    if (prio.includes("+")) {
        prio = "+"+prio.replaceAll("+","")
    }

    if (prio.includes("-")) {
        prio = "-"+prio.replaceAll("-","")
    }

    if (type != undefined) {
        tempArr.push("Type: "+type);
    }

    if (cate != undefined) {
        tempArr.push("Category: "+cate);
    }

    tempArr.push("Power: "+pwr);
    tempArr.push("Accuracy: "+acc);

    if (ppmin != undefined) {
        tempArr.push("PP: "+ppmin);
    }

    if (prio != 0) {
        tempArr.push("Priority: "+prio);
    }


 
    if (desc != undefined) {
        tempArr.push(desc);
    }


    tempStr = tempArr.join("\n")

    return tempStr;

}


function dateHideShow(event,status) {
    let tar = event.target;


    if (tar.value != "" && tar.value != undefined) {
        if (status == "open") {
            tar.style.color = "var(--fontDark)";
        }
        else if (status == "close"){
            tar.style.color = "inherit";
        }
    }
    else {
        if (status == "open"){
            tar.style.color = "var(--fontDark)";
        }
        else if (status == "close"){
            tar.style.color = null;
        }
    }
    
}





function changePartyEvolution(base,i) {

    let evos = getEvolutionFamily(i).map(function(v) {return v["Pokémon"];});
    let data = getPartyData(base);

    evos = evos.filter(function(v) {
        return v != finaldata["Pokémon"]["Reference"][i]["Pokémon"];
    })
    evos = evos.filter(function(v) {
        return v != finaldata["Pokémon"]["Form"][i][DATA_Pokémon_Form["Form"]];
    })

    for (let q = 0; q < evos.length; q++) {
        let x = q+1;
        evos[q] = x+". "+evos[q];
    }

    evos = evos.join("\n");

    let reply = prompt("Change Evolution\nEnter Number:\n"+evos,"");
    let num = [];

    if (reply != null && reply != "") {
        evos = evos.split("\n");

        for (let q = 0; q < evos.length; q++) {
            num.push(evos[q].split(". ",2)[0]);
        }

        for (let q = 0; q < evos.length; q++) {
            evos[q] = evos[q].split(". ",2)[1];
        }

        let result = evos[parseInt(reply)-1]

        if (data.includes("|")) {
            if (data.includes("pok")) {
                data = data.split("|");
                for (let u = 0; u < data.length; u++) {
                    if (data[u].includes("pok:")) {
                        data[u] = data[u].split(":",1)[0]+":"+result;
                        break;
                    }
                }
                data = data.join("|");
            }
        }
        else {
            if (data.includes("pok")) {
                data = data.split(":",1)[0]+":"+result;
            }
        }


        if (num.includes(reply)) {
            createParty(base,data)
            partyShow(base);
            consoleText("Evolution updated.");
        }
        else {
            consoleText("Number returned an error.")
        }

        
    }
}





function changePartyForm(base,i) {

    let forms = getPokémonForm(i);
    let data = getPartyData(base);


    forms = forms.filter(function(v) {
        return v != getPokémonName(i);
    })

    for (let q = 0; q < forms.length; q++) {
        let x = q+1;
        forms[q] = x+". "+forms[q];
    }

    forms = forms.join("\n");

    let reply = prompt("Change Form\nEnter Number:\n"+forms,"");
    let num = [];

    if (reply != null && reply != "") {

        forms = forms.split("\n");

        for (let q = 0; q < forms.length; q++) {
            num.push(forms[q].split(". ",2)[0]);
        }

        for (let q = 0; q < forms.length; q++) {
            forms[q] = forms[q].split(". ",2)[1];
        }

        let result = forms[parseInt(reply)-1]

        if (data.includes("|")) {
            if (data.includes("pok")) {
                data = data.split("|");
                for (let u = 0; u < data.length; u++) {
                    if (data[u].includes("pok:")) {
                        data[u] = data[u].split(":",1)[0]+":"+result;
                        break;
                    }
                }
                data = data.join("|");
            }
        }
        else {
            if (data.includes("pok")) {
                data = data.split(":",1)[0]+":"+result;
            }
        }

        if (num.includes(reply)) {
            createParty(base,data)
            partyShow(base);
            consoleText("Form updated.");
        }
        else {
            consoleText("Number returned an error.")
        }
        
    }
}


function moveLearnsetPartyBox(action) {
    let base = document.querySelector("#move section[name='sidebar'] ul");
    let lis = base.querySelectorAll(":scope > li");
    let boxImg = document.querySelectorAll('#pokémon > aside[name="team"] > section[name="box"] ul > li img[value]');
    let partyImg = document.querySelectorAll('#pokémon > aside[name="team"] > section[name="party"] > div img[value]');
    let partyArr = [];
    let boxArr = [];

    for (let q = 0; q < boxImg.length; q++) {
        if (boxImg[q].getAttribute("value") != undefined) {
            boxArr.push(boxImg[q].getAttribute("value"));
        }
        else {
            boxArr.push("");
        }
    }


    for (let q = 0; q < partyImg.length; q++) {
        if (partyImg[q].getAttribute("value") != undefined) {
            partyArr.push(partyImg[q].getAttribute("value"));
        }
        else {
            partyArr.push("");
        }
    }

    for (let i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
    }

    if (action != undefined) {
        for (let i = 0; i < lis.length; i++) {
            let lisImg = lis[i].querySelectorAll(":scope > *[value]");
            for (let q = 0; q < lisImg.length; q++) {
                let conditions = [];
                let tempArr = [];
                if(action.includes(",")) {
                    for (let u = 0; u < action.split(",").length; u++) {
                        tempArr.push(action.split(",")[u]);
                    }
                }
                else {
                    tempArr = [action];
                }

                for (let u = 0; u < tempArr.length; u++) {
                    if (tempArr[u] == "PARTY") {
                        conditions.push(partyArr.includes(lisImg[q].getAttribute("value")))
                    }
                    if (tempArr[u] == "BOX") {
                        conditions.push(boxArr.includes(lisImg[q].getAttribute("value")))
                    }
                }
                if (conditions[0] == true || conditions[1] == true) {
                    lis[i].style.removeProperty("display");
                }
            }
        }
    }
    else {
        for (let i = 0; i < lis.length; i++) {
            lis[i].style.removeProperty("display");
        }
    }
  



}

let moveLearnsetPB = [];
function movePartyBoxLearnset() {
    let label = this.parentElement.querySelector(':scope > label[for="'+this.id+'"]').firstElementChild;

    if (this.checked == true) {
        if (!moveLearnsetPB.includes(label.innerText)) {
            moveLearnsetPB.push(label.innerText);
        }
    }
    else if (this.checked == false) {
        if (moveLearnsetPB.includes(label.innerText)) {
            moveLearnsetPB = moveLearnsetPB.filter(function(v) {
                return v != label.innerText;
            })
        }
    }
    let tempStr;

    if (moveLearnsetPB.length > 1) {
        tempStr = moveLearnsetPB.join(",");
    }
    else {
        tempStr = moveLearnsetPB[0];
    }

    let navMove = document.querySelector('#navigation input[value="Moves"]');
    navMove.addEventListener("change", function() {moveLearnsetPartyBox(tempStr);});

    moveLearnsetPartyBox(tempStr);
    
}




function abilityLearnsetPartyBox(action) {
    let base = document.querySelector("#ability section[name='sidebar'] ul");
    let lis = base.querySelectorAll(":scope > li");
    let boxImg = document.querySelectorAll('#pokémon > aside[name="team"] > section[name="box"] ul > li img[value]');
    let partyImg = document.querySelectorAll('#pokémon > aside[name="team"] > section[name="party"] > div img[value]');
    let partyArr = [];
    let boxArr = [];

   
    for (let q = 0; q < boxImg.length; q++) {
        if (boxImg[q].getAttribute("value") != undefined) {
            boxArr.push(boxImg[q].getAttribute("value"));
        }
        else {
            boxArr.push("");
        }
    }


    for (let q = 0; q < partyImg.length; q++) {
        if (partyImg[q].getAttribute("value") != undefined) {
            partyArr.push(partyImg[q].getAttribute("value"));
        }
        else {
            partyArr.push("");
        }
    }

    for (let i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
    }

    if (action != undefined) {
        for (let i = 0; i < lis.length; i++) {
            let lisImg = lis[i].querySelectorAll(":scope > *[value]");
            for (let q = 0; q < lisImg.length; q++) {
                
                let conditions = [];
                let tempArr = [];
                if(action.includes(",")) {
                    for (let u = 0; u < action.split(",").length; u++) {
                        tempArr.push(action.split(",")[u]);
                    }
                }
                else {
                    tempArr = [action];
                }

                for (let u = 0; u < tempArr.length; u++) {
                    if (tempArr[u] == "PARTY") {
                        conditions.push(partyArr.includes(lisImg[q].getAttribute("value")))
                    }
                    if (tempArr[u] == "BOX") {
                        conditions.push(boxArr.includes(lisImg[q].getAttribute("value")))
                    }
                }
                if (conditions[0] == true || conditions[1] == true) {
                    lis[i].style.removeProperty("display");
                }
            }
        }
    }
    else {
        for (let i = 0; i < lis.length; i++) {
            lis[i].style.removeProperty("display");
        }
    }
  



}
let abilityLearnsetPB = [];
function abilityPartyBoxLearnset() {
    let label = this.parentElement.querySelector(':scope > label[for="'+this.id+'"]').firstElementChild;

    if (this.checked == true) {
        if (!abilityLearnsetPB.includes(label.innerText)) {
            abilityLearnsetPB.push(label.innerText);
        }
    }
    else if (this.checked == false) {
        if (abilityLearnsetPB.includes(label.innerText)) {
            abilityLearnsetPB = abilityLearnsetPB.filter(function(v) {
                return v != label.innerText;
            })
        }
    }
    let tempStr;

    if (abilityLearnsetPB.length > 1) {
        tempStr = abilityLearnsetPB.join(",");
    }
    else {
        tempStr = abilityLearnsetPB[0];
    }

    let navAbility = document.querySelector('#navigation input[value="Abilities"]');
    navAbility.addEventListener("change", function() {abilityLearnsetPartyBox(tempStr);});

    abilityLearnsetPartyBox(tempStr);
    
}


function trainerPokExport() {
    let data = findUpTag(this,"LI").getAttribute("data-string");
    navigator.clipboard.writeText(data);
    consoleText("Copied Data String!");
}


function trainerPokCycle(event) {
    let tar = event.target.parentElement;
    let val = tar.getAttribute("value");
    let base = tar.parentElement.querySelector(':scope > div[name="data"]');


    let tempArr = [];
    let divs = base.querySelectorAll(':scope > div[name]');

    for (let q = 0; q < divs.length; q++) {
        tempArr.push(divs[q].getAttribute("name"));
    }

    if (tempArr.length > 1) {
        for (let q = 0; q < divs.length; q++) {
            divs[q].style.display = "none";
        }


        let div = base.querySelectorAll(':scope > div[name="'+val+'"]');
        for (let q = 0; q < div.length; q++) {
            div[q].style.display = "unset";
        }
        
        for (let q = 0; q < tempArr.length; q++) {
            if(tempArr[q] == val) {
                if (q != (parseInt(tempArr.length)-1)) {
                    tar.setAttribute("value",tempArr[q+1]);
                }
                else {
                    tar.setAttribute("value",tempArr[0]);   
                }
            }
        }
    }
}


function overviewMove(dir) {
    let base = document.querySelector('#contain div#map > section[name="sidebar"] > div > *[name="overview"]');
    let left = document.querySelector('#contain div#map > section[name="sidebar"] > div > *[name="overview"] > div > span:first-child > *')
    let right = document.querySelector('#contain div#map > section[name="sidebar"] > div > *[name="overview"] > div > span:last-child > *')

    let sel;

    

    if (dir == "left") {
        sel = left;
    }
    else if (dir == "right") {
        sel = right;
    }


    let lis = base.querySelectorAll(':scope ul li');
    let figs = base.querySelectorAll(":scope figure")

    let header = base.querySelector(":scope > span:first-child > *");

    let ul = base.querySelector(":scope ul")

    let val1 = parseInt(sel.getAttribute("value"));
    let val2 = parseInt(lis.length) - 1;


    if (dir == "left" && val1 > 0) {

        let x = val1 - 1;
        ul.style.transform = "translate(-"+x+"00%, 0)";

       
        header.innerText = base.querySelector(":scope > div ul li[name='"+x+"'] img").getAttribute("title");
        for (let q = 0; q < figs.length; q++) {
            figs[q].setAttribute("value",x);
        }
        figs[1].classList.remove("last");
    }
    else if (dir == "right" && val1 < val2) {

        let x = val1 + 1;
        ul.style.transform = "translate(-"+x+"00%, 0)";

        header.innerText = base.querySelector(":scope > div ul li[name='"+x+"'] img").getAttribute("title");
        for (let q = 0; q < figs.length; q++) {
            figs[q].setAttribute("value",x);
        }
   
        if (x >= val2) {
            figs[1].classList.add("last");
        }
        else {
            figs[1].classList.remove("last");
        }
    }


}




function fullscreenIMG(imgs,x) {
    let base = document.querySelector("#fullscreen");
    let ul = base.querySelector(":scope ul");
    let lis = base.querySelectorAll(":scope li")

    let val1 = parseInt(x);
    let val2 = parseInt(lis.length);

    let baseBox = base.querySelectorAll(":scope > div ul li");
    for (let i = 0; i < baseBox.length; i++) {
        baseBox[i].remove();
    }

    let figs = base.querySelectorAll(":scope figure");
    for (let i = 0; i < figs.length; i++) {
        figs[i].setAttribute("value",val1);
    }

    for (let i = 0; i < imgs.length; i++) {
        let imgBox = document.createElement("li");
        let img = document.createElement("img");
        img.src = imgs[i].src;
        img.title = imgs[i].title;
        imgBox.setAttribute("name",i);
        base.querySelector(":scope > div ul").appendChild(imgBox)
        imgBox.appendChild(img);        
        
        img.addEventListener("mousedown",function(event){if(event.button === 1){exitFullscreen()}});
        img.addEventListener("click",function(event){classSwitches("zoom",base.querySelectorAll(":scope img"))});
    }

    base.classList.add("open");
    ul.style.transform = "translate(-"+val1+"00%)";
    base.focus();

  
    if (imgs.length == 1) {
        figs[1].classList.add("last");
    }
    else if (val1 <= 0) {
        figs[1].classList.remove("last");
    }
    else if (val1+1 >= val2) {
        figs[1].classList.add("last");
    }
    else {
        figs[1].classList.remove("last");
    }
}







function fullscreenMove(dir) {

    let sel;
    
    let base1 = document.querySelector('#fullscreen');
    let base2 = document.querySelector('#contain div#map > section[name="sidebar"] > div > *[name="overview"]');

    let left = base1.querySelector(':scope > figure:first-child');
    let right = base1.querySelector(':scope > figure:last-child');

    if (dir == "left") {
        sel = left;
    }
    else if (dir == "right") {
        sel = right;
    }

    let header = base2.querySelector(':scope > span:first-child > *')

    let figs1 = base1.querySelectorAll(":scope figure");
    let figs2 = base2.querySelectorAll(":scope figure");

    let ul1 = base1.querySelector(':scope ul');
    let ul2 = base2.querySelector(':scope ul');

    let lis = base1.querySelectorAll(':scope li[name]');

    let val1 = parseInt(sel.getAttribute("value"));
    let val2 = parseInt(lis.length) - 1;



    if (dir == "left" && val1 > 0) {
        let x = val1 - 1;

        ul1.style.transform = "translate(-"+x+"00%, 0)";
        ul2.style.transform = "translate(-"+x+"00%, 0)";


        header.innerText = base2.querySelector(":scope img").getAttribute("title");


        for (let q = 0; q < figs1.length; q++) {
            figs1[q].setAttribute("value",x);
            figs2[q].setAttribute("value",x);
        }
        figs1[1].classList.remove("last");
        figs2[1].classList.remove("last");

    }
    else if (dir == "right" && val1 < val2) {

        let x = val1 + 1;
        ul1.style.transform = "translate(-"+x+"00%, 0)";
        ul2.style.transform = "translate(-"+x+"00%, 0)";
        header.innerText = base2.querySelector(":scope img").getAttribute("title");


        for (let q = 0; q < figs1.length; q++) {
            figs1[q].setAttribute("value",x);
            figs2[q].setAttribute("value",x);
        }

        if (x >= val2) {
            figs1[1].classList.add("last");
            figs2[1].classList.add("last");
        }
        else {
            figs1[1].classList.remove("last");
            figs2[1].classList.remove("last");
        }

    }

}


function exitFullscreen() {
    let base = document.querySelector("#fullscreen");
    base.classList.remove("open");
}

function calcTypeAdv(types,condition) {


    let adv = [];
    let used = [];

    if (condition == "Defending") {
        for (let i = 0; i < types.length; i++) {
            let arr = returnTypeAdvantage(types[i],"Defending");

            for (let q = 0; q < arr.length; q++) {
                
                for (let r = 0; r < arr[q].length; r++) {
    
                    if (q == 0) { // Normal
                        if (!used.includes(arr[q][r])) {
                            let obj = new Object();
                            obj["Type"] = arr[q][r];
                            obj["Value"] = 1;
                            adv.push(obj);
                        }
                        else {
                            for (let t = 0; t < adv.length; t++) {
                                if (adv[t]["Type"] == arr[q][r]) {
                                    adv[t]["Value"] = adv[t]["Value"]*1;
                                }
                            }
                        }
                        used.push(arr[q][r])
                    }
                    if (q == 1) { // Not Very Effective
                        if (!used.includes(arr[q][r])) {
                            let obj = new Object();
                            obj["Type"] = arr[q][r];
                            obj["Value"] = 1*0.5;
                            adv.push(obj);
                        }
                        else {
                            for (let t = 0; t < adv.length; t++) {
                                if (adv[t]["Type"] == arr[q][r]) {
                                    adv[t]["Value"] = adv[t]["Value"]*0.5;
                                }
                            }
                        }
                        used.push(arr[q][r])
                    }
                    if (q == 2) { // Super Effective
                        if (!used.includes(arr[q][r])) {
                            let obj = new Object();
                            obj["Type"] = arr[q][r];
                            obj["Value"] = 1*2;
                            adv.push(obj);
                        }
                        else {
                            for (let t = 0; t < adv.length; t++) {
                                if (adv[t]["Type"] == arr[q][r]) {
                                    adv[t]["Value"] = adv[t]["Value"]*2;
                                }
                            }
                        }
                        used.push(arr[q][r])
                    }
                    if (q == 3) { // Immune
                        if (!used.includes(arr[q][r])) {
                            let obj = new Object();
                            obj["Type"] = arr[q][r];
                            obj["Value"] = 0;
                            adv.push(obj);
                        }
                        else {
                            for (let t = 0; t < adv.length; t++) {
                                if (adv[t]["Type"] == arr[q][r]) {
                                    adv[t]["Value"] = 0;
                                }
                            }
                        }
                        used.push(arr[q][r])
                    }
                }

            }

        }
    }
    if (condition == "Attacking") {
        for (let i = 0; i < types.length; i++) {
            let arr = returnTypeAdvantage(types[i],"Attacking");

            for (let q = 0; q < arr.length; q++) {
                
                for (let r = 0; r < arr[q].length; r++) {
    
                    if (q == 0) { // Normal
                        if (!used.includes(arr[q][r])) {
                            let obj = new Object();
                            obj["Type"] = arr[q][r];
                            obj["Value"] = 1;
                            adv.push(obj);
                        }
                        else {
                            for (let t = 0; t < adv.length; t++) {
                                if (adv[t]["Type"] == arr[q][r]) {
                                    adv[t]["Value"] = adv[t]["Value"]*1;
                                }
                            }
                        }
                        used.push(arr[q][r])
                    }
                    if (q == 1) { // Not Very Effective
                        if (!used.includes(arr[q][r])) {
                            let obj = new Object();
                            obj["Type"] = arr[q][r];
                            obj["Value"] = 1*0.5;
                            adv.push(obj);
                        }
                        else {
                            for (let t = 0; t < adv.length; t++) {
                                if (adv[t]["Type"] == arr[q][r]) {
                                    adv[t]["Value"] = adv[t]["Value"]*0.5;
                                }
                            }
                        }
                        used.push(arr[q][r])
                    }
                    if (q == 2) { // Super Effective
                        if (!used.includes(arr[q][r])) {
                            let obj = new Object();
                            obj["Type"] = arr[q][r];
                            obj["Value"] = 1*2;
                            adv.push(obj);
                        }
                        else {
                            for (let t = 0; t < adv.length; t++) {
                                if (adv[t]["Type"] == arr[q][r]) {
                                    adv[t]["Value"] = adv[t]["Value"]*2;
                                }
                            }
                        }
                        used.push(arr[q][r])
                    }
                    if (q == 3) { // Immune
                        if (!used.includes(arr[q][r])) {
                            let obj = new Object();
                            obj["Type"] = arr[q][r];
                            obj["Value"] = 0;
                            adv.push(obj);
                        }
                        else {
                            for (let t = 0; t < adv.length; t++) {
                                if (adv[t]["Type"] == arr[q][r]) {
                                    adv[t]["Value"] = 0;
                                }
                            }
                        }
                        used.push(arr[q][r])
                    }
                }

            }

        }
    }


    let result = [];
    for (let i = 0; i < Types.length; i++) {
        for (let q = 0; q < adv.length; q++) {
            if (adv[q]["Type"] == Types[i].toUpperCase()) {
                result.push(adv[q]);
            }
        }
    }

    return result;

}


function calculateTypeAdvantage(i) {
    let primary = returnData(i,"Type","")[0];
    let secondary = returnData(i,"Type","")[1];

    let result = [];

    let Normal = [];
    let Weakness2x = [];
    let Weakness4x = [];
    let Strength2x = [];
    let Strength4x = [];
    let Immunity = [];

    let primaryNormal = [];
    let primary2xWeakness = [];
    let primary2xStrength = [];
    let primaryImmunity = [];
    let secondaryNormal = [];
    let secondary2xWeakness = [];
    let secondary2xStrength = [];
    let secondaryImmunity = [];


    primaryNormal = returnTypeAdvantage(primary,"Defending")[0];
    primary2xWeakness = returnTypeAdvantage(primary,"Defending")[1];
    primary2xStrength = returnTypeAdvantage(primary,"Defending")[2];
    primaryImmunity = returnTypeAdvantage(primary,"Defending")[3];

    if (secondary != undefined) {
        secondaryNormal = returnTypeAdvantage(secondary,"Defending")[0];
        secondary2xWeakness = returnTypeAdvantage(secondary,"Defending")[1];
        secondary2xStrength = returnTypeAdvantage(secondary,"Defending")[2];
        secondaryImmunity = returnTypeAdvantage(secondary,"Defending")[3];
    }


    for (let q = 0; q < primaryNormal.length; q++) {
        if (!Normal.includes(primaryNormal[q])){
            Normal.push(primaryNormal[q]);
        }
    }
    for (let q = 0; q < secondaryNormal.length; q++) {
        if (!Normal.includes(secondaryNormal[q])){
            Normal.push(secondaryNormal[q]);
        }
    }

    for (let q = 0; q < primaryImmunity.length; q++) {
        if (!Immunity.includes(primaryImmunity[q])){
            Immunity.push(primaryImmunity[q]);
        }
    }
    for (let q = 0; q < secondaryImmunity.length; q++) {
        if (!Immunity.includes(secondaryImmunity[q])){
            Immunity.push(secondaryImmunity[q]);
        }
    }

    for (let q = 0; q < primary2xStrength.length; q++) {
        if(secondary2xStrength.includes(primary2xStrength[q])) {
            Strength4x.push(primary2xStrength[q]);
        }
        else {
            Strength2x.push(primary2xStrength[q]);
        }
    }
    for (let q = 0; q < secondary2xStrength.length; q++) {
        if(!Strength2x.includes(secondary2xStrength[q]) && !Strength4x.includes(secondary2xStrength[q])) {
            Strength2x.push(secondary2xStrength[q]);
        }
 
    }

    for (let q = 0; q < primary2xWeakness.length; q++) {
        if(secondary2xWeakness.includes(primary2xWeakness[q])) {
            Weakness4x.push(primary2xWeakness[q]);
        }
        else {
            Weakness2x.push(primary2xWeakness[q]);
        }
    }
    for (let q = 0; q < secondary2xWeakness.length; q++) {
        if(!Weakness2x.includes(secondary2xWeakness[q]) && !Weakness4x.includes(secondary2xWeakness[q])) {
            Weakness2x.push(secondary2xWeakness[q]);
        }
    }

    let arrs = [Normal,Weakness2x,Weakness4x,Strength2x,Strength4x,Immunity];
    let arrsName = ["Normal","Weakness2x","Weakness4x","Strength2x","Strength4x","Immunity"];

    let tempWeakness = [];
    let tempStrength = [];

    for (let q = 0; q < arrs.length; q++) {
        for (let u = 0; u < arrs[q].length; u++) {
            if (Weakness2x.includes(arrs[q][u]) && arrsName[q] != "Weakness2x" && arrsName[q] != "Immunity") {
                let obj = new Object;
                obj["Name"] = arrsName[q];
                obj["Type"] = arrs[q][u];
                obj["ID"] = q;
                tempWeakness.push(obj)
            }
       
            if (Strength2x.includes(arrs[q][u]) && arrsName[q] != "Strength2x" && arrsName[q] != "Immunity") {
                let obj = new Object;
                obj["Name"] = arrsName[q];
                obj["Type"] = arrs[q][u];
                obj["ID"] = q;
                tempStrength.push(obj)
            }
  
        }
    }

    for (let q = 0; q < tempStrength.length; q++) {
        if (tempStrength[q]["Name"] == "Normal") {
            Normal = Normal.filter(function(val) {return val != tempStrength[q]["Type"]})
        }
        if (tempStrength[q]["Name"] == "Weakness2x") {
            Strength2x = Strength2x.filter(function(val) {return val != tempStrength[q]["Type"]})
            Weakness2x = Weakness2x.filter(function(val) {return val != tempStrength[q]["Type"]})
            if (!Normal.includes(tempStrength[q]["Type"])) {
                Normal.push(tempStrength[q]["Type"]);
            }
        }
    }

    for (let q = 0; q < tempWeakness.length; q++) {
        if (tempWeakness[q]["Name"] == "Normal") {
            Normal = Normal.filter(function(val) {return val != tempWeakness[q]["Type"]})
        }
        if (tempWeakness[q]["Name"] == "Strength2x") {
            Strength2x = Strength2x.filter(function(val) {return val != tempWeakness[q]["Type"]})
            Weakness2x = Weakness2x.filter(function(val) {return val != tempWeakness[q]["Type"]})
            if (!Normal.includes(tempWeakness[q]["Type"])) {
                Normal.push(tempWeakness[q]["Type"]);
            }
        }
    }
    

    for (let u = 0; u < Immunity.length; u++) {
        Normal = Normal.filter(function(val) {return val != Immunity[u]})
        Weakness2x = Weakness2x.filter(function(val) {return val != Immunity[u]})
        Weakness4x = Weakness4x.filter(function(val) {return val != Immunity[u]})
        Strength2x = Strength2x.filter(function(val) {return val != Immunity[u]})
        Strength4x = Strength4x.filter(function(val) {return val != Immunity[u]})
    }
    
    

    let types = ["NORMAL","FIGHTING","FLYING","POISON","GROUND","ROCK","BUG","GHOST","STEEL","FIRE","WATER","GRASS","ELECTRIC","PSYCHIC","ICE","DRAGON","DARK","FAIRY"];
    let FinalNormal = [];
    let FinalWeakness2x = [];
    let FinalWeakness4x = [];
    let FinalStrength2x = [];
    let FinalStrength4x = [];
    let FinalImmunity = [];
    

    for (let q = 0; q < types.length; q++) {
        for (let u = 0; u < Normal.length; u++) { 
            if (Normal[u] == types[q]) {
                FinalNormal[q] = Normal[u];
            }
        }
    }

    for (let q = 0; q < types.length; q++) {
        for (let u = 0; u < Weakness2x.length; u++) { 
            if (Weakness2x[u] == types[q]) {
                FinalWeakness2x[q] = Weakness2x[u];
            }
        }
    }

    for (let q = 0; q < types.length; q++) {
        for (let u = 0; u < Weakness4x.length; u++) { 
            if (Weakness4x[u] == types[q]) {
                FinalWeakness4x[q] = Weakness4x[u];
            }
        }
    }
    
    for (let q = 0; q < types.length; q++) {
        for (let u = 0; u < Strength2x.length; u++) { 
            if (Strength2x[u] == types[q]) {
                FinalStrength2x[q] = Strength2x[u];
            }
        }
    }
    
    for (let q = 0; q < types.length; q++) {
        for (let u = 0; u < Strength4x.length; u++) { 
            if (Strength4x[u] == types[q]) {
                FinalStrength4x[q] = Strength4x[u];
            }
        }
    }
    
    for (let q = 0; q < types.length; q++) {
        for (let u = 0; u < Immunity.length; u++) { 
            if (Immunity[u] == types[q]) {
                FinalImmunity[q] = Immunity[u];
            }
        }
    }

    FinalNormal = FinalNormal.filter(function(v) {return v != undefined;});
    FinalWeakness2x = FinalWeakness2x.filter(function(v) {return v != undefined;});
    FinalWeakness4x = FinalWeakness4x.filter(function(v) {return v != undefined;});
    FinalStrength2x = FinalStrength2x.filter(function(v) {return v != undefined;});
    FinalStrength4x = FinalStrength4x.filter(function(v) {return v != undefined;});
    FinalImmunity = FinalImmunity.filter(function(v) {return v != undefined;});

    result.push(FinalNormal);
    result.push(FinalWeakness2x);
    result.push(FinalWeakness4x);
    result.push(FinalStrength2x);
    result.push(FinalStrength4x);
    result.push(FinalImmunity);


    return result;
}

function formatCalcTypeAdvantage(arr) {
    let result;
    let tempArr = [];

    let Normal;
    let Weakness2x;
    let Weakness4x;
    let Strength2x;
    let Strength4x;
    let Immunity;

    for (let q = 0; q < arr.length; q++) {
        for (let u = 0; u < arr[q].length; u++) {
            arr[q][u] = titleCase(arr[q][u]);
        }
    }


    if (arr[0].length > 1) {
        Normal = arr[0].join(" / ");
    }
    else {
        Normal = arr[0][0];
    }

    if (arr[1].length > 1) {
        Weakness2x = arr[1].join(" / ");
    }
    else {
        Weakness2x = arr[1][0];
    }

    if (arr[2].length > 1) {
        Weakness4x = arr[2].join(" / ");
    }
    else {
        Weakness4x = arr[2][0];
    }

    if (arr[3].length > 1) {
        Strength2x = arr[3].join(" / ");
    }
    else {
        Strength2x = arr[3][0];
    }

    if (arr[4].length > 1) {
        Strength4x = arr[4].join(" / ");
    }
    else {
        Strength4x = arr[4][0];
    }

    if (arr[5].length > 1) {
        Immunity = arr[5].join(" / ");
    }
    else {
        Immunity = arr[5][0];
    }

    
    if (Strength4x != undefined) {
        tempArr.push("4×: "+Strength4x);
    }
    if (Strength2x != undefined) {
        tempArr.push("2×: "+Strength2x);
    }
    if (Weakness2x != undefined) {
        tempArr.push("½: "+Weakness2x);
    }
    if (Weakness4x != undefined) {
        tempArr.push("¼: "+Weakness4x);
    }
    if (Immunity != undefined) {
        tempArr.push("0×: "+Immunity);
    }
    result = tempArr.join("\n");
    return result;
}


function returnTypeAdvantage(type,condition) {
    let arr = finaldata["Game"]["Type Chart_"+JSONPath_Typechart];
    let keys = [];
    let result = [];
    let weakness = [];
    let strength = [];
    let immunity = [];
    let normal = [];
    let types = [];

    type = type.toUpperCase();

    for (let q = 0; q < arr.length; q++) {
        for (let u = 0; u < Object.keys(arr[q]).length; u++) {
            if (!types.includes(Object.keys(arr[q])[u])) {
                types.push(Object.keys(arr[q])[u]);
            }
        }
    }

    if (condition == "Defending") {
        for (let q = 0; q < arr.length; q++) {
            let keys = Object.keys(arr[q])

            for (let u = 0; u < keys.length; u++) {
                if (types[u] == type) {
                    if (arr[q][keys[u]].includes("½")) {
                        weakness.push(types[q])
                    }
                    else if (arr[q][keys[u]].includes("2")) {
                        strength.push(types[q])
                    }
                    else if (arr[q][keys[u]].includes("0")) {
                        immunity.push(types[q])
                    }
                    else if (arr[q][keys[u]].includes("1")) {
                        normal.push(types[q])
                    }
                }
            }
        }
    }
    else if (condition == "Attacking") {
        for (let q = 0; q < arr.length; q++) {
            let keys = Object.keys(arr[q])
 
            if (types[q] == type) {
                for (let u = 0; u < keys.length; u++) {
                    if (arr[q][keys[u]].includes("½")) {
                        weakness.push(types[u])
                    }
                    else if (arr[q][keys[u]].includes("2")) {
                        strength.push(types[u])
                    }
                    else if (arr[q][keys[u]].includes("0")) {
                        immunity.push(types[u])
                    }
                    else if (arr[q][keys[u]].includes("1")) {
                        normal.push(types[u])
                    }
                }
            }
        }
    }

    result.push(normal)
    result.push(weakness);
    result.push(strength);
    result.push(immunity);

    return result;

}


function itemPockets() {
    let vals = this.parentElement.querySelectorAll(":scope > input:checked");
    let base = document.querySelector("#item section[name='list'] ol");
    let nodes = base.querySelectorAll(':scope > label');

    for (let q = 0; q < nodes.length; q++) {
        nodes[q].style.display = "none";
    }

    for (let i = 0; i < vals.length; i++) {
        let val = (vals[i].value).toLowerCase();
        let node = base.querySelectorAll(':scope > label[data-pocket="'+val+'"]');
        for (let q = 0; q < node.length; q++) {
            node[q].style.removeProperty("display");
        }
    }


}
let testImageResult;
function testImage(url) {
    let tester=new Image();
    let testImageResult = undefined;
    tester.src = url;
    tester.addEventListener("load", function() {
        testImageResult = true;
    });
    tester.addEventListener("error", function() {
        testImageResult = false;
    });

    return testImageResult;
}



function searchOptionsTitle(base) {
    let searches = base.querySelectorAll(':scope > *:not(input)');
    let tempArr = [];
    let result = "";
    let exclude = ["name","attack","defense","spatk","spdef","speed","total"];

    for (let i = 0; i < searches.length; i++) {
        let search = searches[i].getAttributeNames()
        for (let q = 0; q < search.length; q++) {
            if (search[q].includes("data-search-")) {
                let check;
                for (let u = 0; u < exclude.length; u++) {
                    if (search[q].includes(exclude[u])) {
                        check = false
                        break;
                    }
                    else {
                        check = true;
                    }
                }
                if (check) {
                    if (!isNaN(parseInt(searches[i].getAttribute(search[q])))) {
                        tempArr.push(search[q].split("data-search-")[1]+":>");
                        tempArr.push(search[q].split("data-search-")[1]+":<");
                        tempArr.push(search[q].split("data-search-")[1]+"::");
                        tempArr.push(search[q].split("data-search-")[1]+":!");
                    }
                    else {
                        tempArr.push(search[q].split("data-search-")[1]+"::");
                        tempArr.push(search[q].split("data-search-")[1]+":!");
                    }
                }
            }
        }
    }


    tempArr = [...new Set(tempArr)];

    if (tempArr.length > 0) {
        result = "Search Options:\n"+tempArr.join("\n")+"\n[Enter] = Add Filter\n[Escape] = Remove Filters";
    }

    return result;
}
















function resizeMap() {

    let options = document.querySelector("#map-options")
    let checked = options.querySelectorAll(':scope input:checked')
    let contain = document.querySelector("#map-contain");
    let mapImg = document.querySelector(".map-inner img[usemap]");

    let result = [];
    for (let i = 0; i < checked.length; i++) {
        let name = checked[i].nextElementSibling.innerText;
        result.push(name)
    }

    if (mapImg.classList.contains("mapify")) {
        if (result.length > 0) {
            mapBlink(contain,result);
        }
    }
}

function getMapCoords(area) {
  let result = "";

  for (let i = 0; i < MapArea.length; i++) {
    if (MapArea[i]["id"].includes("<br>")) {
      let brk = MapArea[i]["id"].split("<br>");
      let check = false;
      for (let q = 0; q < brk.length; q++) {
        if (brk[q] == area) {
          check = true;
        }
      }
      if (check) {
        result = MapArea[i]["coords"];
        break;
      }
    }
    else if (MapArea[i].split("_")[0] == area) {
        result = MapArea[i]["coords"];
        break;
    }
    else if (MapArea[i]["id"] == area) {
      result = MapArea[i]["coords"];
      break;
    }
  }

  return result;
}


function getMapPoints(area,base) {

    let areas = base.querySelectorAll(":scope map area");
    let result = [];

    for (let i = 0; i < areas.length; i++) {
        if (areas[i].getAttribute("data-title") == area || areas[i].getAttribute("data-title").split("_")[0] == area) {
            result.push(areas[i].getAttribute("coords"))
        }
    }
    if (result.length == 0) {
        let area2 = getLocationFromArea(area);
        for (let q = 0; q < area2.length; q++) {
            for (let i = 0; i < areas.length; i++) {
                if (areas[i].getAttribute("data-title") == area2[q] || areas[i].getAttribute("data-title").split("_")[0] == area2[q]) {
                    result.push(areas[i].getAttribute("coords"))
                }
            }
        }
    }
    return result;
}

function getMapPointsTest(area,base) {

    let areas = base.querySelectorAll(":scope map area");
    let result = [];

    for (let i = 0; i < areas.length; i++) {
        if (areas[i].getAttribute("data-title") == area || areas[i].getAttribute("data-title").split("_")[0] == area) {
            result.push(areas[i].getAttribute("coords"))
        }
    }

    return result;
}
  
  
function getLocationFromArea(area) {
    let arr = finaldata["Locations"]["Connecting"];

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (getApplicable(arr[i]["Game"])) {
            if (arr[i]["Located"] != undefined) {
                if (arr[i]["Location"] == area) {
                    if (arr[i]["Located"].includes(",")) {
                        let arr2 = arr[i]["Located"].split(",");
                        for (let q = 0; q < arr2.length; q++) {
                            result.push(arr2[q])
                        }
                    }
                    else {
                        return [arr[i]["Located"]]
                    }
                }
            }
        }
    }
    return result;

}

function getAreasFromLocation(location) {
    let arr = finaldata["Locations"]["Connecting"];

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (getApplicable(arr[i]["Game"])) {
            if (arr[i]["Located"] != undefined) {
                if (arr[i]["Located"].includes(",")) {
                    let arr2 = arr[i]["Located"].split(",");
                    for (let q = 0; q < arr2.length; q++) {
                        if (arr2[q] == location) {
                            result.push(arr[i]["Location"])
                        }
                    }
                }
                else {
                    if (arr[i]["Located"] == location) {
                        result.push(arr[i]["Location"])
                    }
                }
            }
        }
    }
    return result;
}



function excludeDuplicateAreas(arr) {
    let exclude = [];
    let broken = [];

    let arr1 = JSON.parse(JSON.stringify(arr));

    if ((GameID >= 7 && GameID <= 8) || GameID == 12) {
        broken = ["Marine Cave","Battle Tent","Terra Cave"];
    }
    if (GameID >= 14 && GameID <= 16) {
        broken = ["S.S. Spiral"];
    }

    let list = finaldata["Locations"]["Reference"];





    let del = [];

    for (let i = 0; i < arr1.length; i++) {

        let listboo = true;
        for (let q = 0; q < list.length; q++) {
            if (arr1[i]["id"].includes("<br>")) {
                let ids = arr1[i]["id"].split("<br>");
                for (let u = 0; u < ids.length; u++) {
                    if (ids[u] == list[q]["Location"]) {
                        listboo = false;
                        break;
                    }
                }
            }
            else if (arr1[i]["id"] == list[q]["Location"]) {
                listboo = false;
                break;
            }
        }

        if (listboo) {
            del.push(i)
        }
       
        for (let q = 0; q < broken.length; q++) {
            if (arr1[i]["id"] == broken[q]) {
                del.push(i);
            }
        }
    }
    
    let arrResult = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!del.includes(i)) {
            arrResult.push(arr1[i]);
        }
    }

    let arr2 = JSON.parse(JSON.stringify(arrResult));
    let tempArr = [{}]
    for (let i = 0; i < arr2.length; i++) {
        let check = false;
        for (let q = 0; q < tempArr.length; q++) {
            if (tempArr[q]["coords"] == arr2[i]["coords"] && tempArr[q]["id"] != arr2[i]["id"]) {
                tempArr[q]["id"] += "<br>"+arr2[i]["id"];
                check = false;
                break
            }
            else {
                check = true;
            }
        }
        if (check) {
            tempArr.push(arr2[i])
        }
    }

    tempArr.splice(0, 1)

    let result = [];
    result = JSON.parse(JSON.stringify(tempArr));

    return result;
}




function searchFilter(bar,base,condition) {
    let list = base.querySelectorAll(':scope > *:not(input)');
    let hidden = base.querySelectorAll(':scope > *:not(input).hidden');
    let filter = base.querySelectorAll(':scope > *:not(input).filtered');


    if (condition == "Add") {
        if (hidden.length > 0 || filter.length > 0) {
            if (hidden.length != list.length) {
                if (bar.value != "") {
                    bar.value = "";
                    bar.style.color = "var(--fontDark)";
                    for (let i = 0; i < hidden.length; i++) {
                        hidden[i].classList.add("filtered");
                    }
                    consoleText("Filter added...");

                    bar.style.setProperty("outline-color","var(--colorRed)","important");
                    bar.style.setProperty("border-color","var(--colorRed)","important");
                    bar.style.setProperty("border-style","solid");
                }
            }
        }
    }
    else if (condition == "Remove") {

        if (filter.length > 0) {
            bar.value = "";
            bar.style.color = "var(--fontDark)";

            for (let i = 0; i < list.length; i++) {
                list[i].classList.remove("filtered");
                list[i].classList.remove("hidden");
            }

            consoleText("Filters removed...");

            bar.style.removeProperty("outline-color");
            bar.style.removeProperty("border-color");
            bar.style.removeProperty("border-style");
        }
    }
}


function consoleText(txt,time) {
    let base = document.querySelector("#console");

    if (time == "" || time == undefined) {
        time = 2000;
    }

    let pdiv = document.querySelector("#contain > div#pokémon");
    let con = document.querySelector("#console");
    if (pdiv != undefined) {
        if (pdiv.style.getPropertyValue("display") != "none") {
            con.classList.remove("top");
            con.classList.add("bottom");
        }
        else {
            con.classList.add("top");
            con.classList.remove("bottom");
        }
    }

    let p = document.createElement("p");
    p.innerText = txt;
    base.appendChild(p);

    p.style.opacity = "1";

    setInterval(function() {
        p.style.opacity = "0";
            setTimeout(function () {
                p.remove();
            }, 1000);
    }, time);

    console.log(txt);
}

function getDirs(paths) {

    let arr = finaldata["Directory"]
    let keys = Object.keys(arr);

    let result = [];

    for (let i = 0; i < keys.length; i++) {
        for (q = 0; q < paths.length; q++) {
            if (keys[i].includes(paths[q])) {
                let val = keys[i].split("/");
                val = val[val.length-1];
                if (getApplicable(val)) {
                    result.push(keys[i])
                }
            }
        }
    }

    return result;
}

function ImageType(action) {

    let tar = document.querySelector('#pokémon > aside[name="settings"] > span[name="imagetype"]');
    let el = tar.querySelector(":scope select");
    let img = tar.querySelector(":scope img");

    let val = el.querySelector(":scope option[value='"+el.value+"']")


    let imgs1 = document.querySelectorAll('#pokémon > div ul li label > img');
    let imgs2 = document.querySelectorAll('#pokémon > section[name="team"] aside[name="party"] div section img[value]');

    imgs1 = Array.prototype.slice.call(imgs1)
    imgs2 = Array.prototype.slice.call(imgs2)

    let els = imgs1.concat(imgs2)

    console.log(val)
    console.log(el.value)

    if (val != undefined) {
        val = val.getAttribute("data-path");

        if (action == "Populate") {
            let randomsrc = "";
    
            for(var i = 0; i < 5; i++) {
                let ran = parseInt(getRandomInt(0,els.length-1));
                let id = els[ran].id;
                if (id != undefined && id != "") {
                    let res = getPokémonMediaPath([id],[val])
                    if (res != "") {
                        randomsrc = res;
                    }
                }
            }


            img.src = randomsrc;
        }
        else if (action == "Execute") {
    
            for (let q = 0; q < els.length; q++) {
                let int = els[q].id;
                if (isNaN(parseInt(int))) {
                    int = getPokémonInt(int);
                }

                els[q].src = getPokémonMediaPath([int],[val])
            }
            

            memory("Save","game",el);
        }

    }

    


}


function resize() {
	let width = window.innerWidth;
	let height = window.innerHeight;

	let labelS = document.querySelectorAll("#contain > div > section[name='list'] ol label[type='small']");
	let labelM = document.querySelectorAll("#contain > div > section[name='list'] ol label[type='medium']");
	
	if (width < 1000) {
		for (let i = 0; i < labelM.length; i++) {
			labelM[i].setAttribute("type","small");
		}
	}
	else  {
		for (let i = 0; i < labelS.length; i++) {
			labelS[i].setAttribute("type","medium");
		}
	}

}
function mapifyMap(base) {

    let img = base.querySelector(":scope img[usemap]");
    let map = base.querySelector(":scope map");

    let mapified = base.querySelector(":scope > *.mapify-holder");
    let areas = map.querySelectorAll(":scope > area");

    if (img != undefined && map != undefined && mapified == undefined) {
		let originalSize = [img.naturalWidth,img.naturalHeight];
		let newSize = [base.getBoundingClientRect().width,base.getBoundingClientRect().height];

		let newwidth = Math.floor(parseFloat(proportionalScale(originalSize,newSize)[0].toFixed(2)) * 10) / 10;
		let newheight = Math.ceil(parseFloat(proportionalScale(originalSize,newSize)[1].toFixed(2)) * 10) / 10;

		let relative = (originalSize[0]+originalSize[1]) / (newwidth+newheight);

		if (relative > 1) {
			img.setAttribute("width",newwidth+"px");
			img.setAttribute("height",newheight+"px");	
			if (!areas.length > 0) {
				createAreas(map,relative)
			}
		}
		else {
			img.setAttribute("width",originalSize[0]+"px");
			img.setAttribute("height",originalSize[1]+"px");
			if (!areas.length > 0) {
				createAreas(map,1)
			}
		}

        $(img).mapify({
            popOver: {
            content: function(zone){ 
                let zones = [];
                if (zone.attr("data-title").includes("<br>")) {
                	zones = zone.attr("data-title").split("<br>");
                }
                else {
                	zones = [zone.attr("data-title")];
                }
				let z2 = [];
				for (let i = 0; i < zones.length; i++) {
					let arr2 = getAreasFromLocation(zones[i]);
					for (let q = 0; q < arr2.length; q++) {
						z2.push(arr2[q]);
					}
				}

				for (let i = 0; i < z2.length; i++) {
					if (getMapPointsTest(z2[i],base).length == 0) {
						zones.push(z2[i]);
					}
				}
                for (let i = 0; i < zones.length; i++) {
					let z = zones[i];
					if (z.includes("_")) {
						z = z.split("_")[0];
					}
                	zones[i] = `<b name="map" onclick="dataRedirect()"><p style="pointer-events:none">`+z+`</p></b>`;
                }
                return zones.join("<br>");
            },
			margin: "15px"
        }
        });



		
		for (let i = 0; i < finaldata["Locations"]["Reference"].length; i++) {
			if (getApplicable(finaldata["Locations"]["Reference"][i]["Game"])) {
				let points = getMapPoints(finaldata["Locations"]["Reference"][i]["Location"],base);
				if (points.length == 0) {
					console.log("#DEBUG# "+finaldata["Locations"]["Reference"][i]["Location"]+" returned an error.");
				}
			}
		}
    }
    


}
function mapBlink(base,area) {

	let holder = base.querySelector(":scope .mapify-holder");
	let points = [];
  
	for (let i = 0; i < area.length; i++) {
		let pts = getMapPoints(area[i],base);
		for (let q = 0; q < pts.length; q++) {
			points.push(pts[q])
		}
	}


	let polys = base.querySelectorAll(':scope polygon[name="active"]');
	for (let i = 0; i < polys.length; i++) {
		polys[i].remove();
	}
  
	let svgbase = base.querySelector(':scope .mapify-svg[name="mark"]');
  
	if (svgbase == null) {
		let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.classList.add("mapify-svg");
		svg.setAttribute("name","mark");
		holder.appendChild(svg)
	}
  
	svgbase = base.querySelector(':scope .mapify-svg[name="mark"]');
  
	  
  
	for (let i = 0; i < points.length; i++) {
		if (points[i] != "") {
			let polygon =  document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			polygon.setAttribute("fill","none");
			polygon.classList.add("mapify-polygon");
			polygon.setAttribute("points",points[i]);
			polygon.setAttribute("name","active");
			if (svgbase == null) {
				svg.appendChild(polygon)
			}
			else {
				svgbase.appendChild(polygon)
			}
		}
	}
}
function createAreas(base,relative) {
	let img = base.parentElement.querySelector(":scope img[usemap]")


    for (let i = 0; i < MapArea.length; i++) {
		let coord = MapArea[i]["coords"];

		let result = [];

		if (coord.includes(",")) {
			let coords = coord.split(",");
			for (let q = 0; q < coords.length; q++) {
				let c = parseInt(coords[q].replaceAll(" ",""));
				if (q % 2 == 0) {
					result.push(c/relative);
				}
				else {
					result.push(c/relative);
				}
			}
		}
		else {
			let coords = [coord];
			for (let q = 0; q < coords.length; q++) {
				let c = parseInt(coords[q].replaceAll(" ",""));
				if (q % 2 == 0) {
					result.push(c/relative);
				}
				else {
					result.push(c/relative);
				}
			}
		}

		let coords = result.join(",");
	
        let area = document.createElement("area");
        area.setAttribute("shape",MapArea[i]["type"])
        area.setAttribute("title",MapArea[i]["id"])
        area.setAttribute("coords",coords.replaceAll(" ",","))
        base.appendChild(area);
    }

}
function proportionalScale(originalSize, newSize) {
	let ratio = originalSize[0] / originalSize[1];

	let maximizedToWidth = [newSize[0], newSize[0] / ratio];
	let maximizedToHeight = [newSize[1] * ratio, newSize[1]];

	if (maximizedToWidth[1] > newSize[1]) { return maximizedToHeight; }
	else { return maximizedToWidth; }
}
function zoom(base,condition) {
    let parent = base.parentElement.parentElement.parentElement;

    let width = $(base.parentElement).width();
    let height = $(base.parentElement).height();
    let relativeX = event.pageX - $(base.parentElement).offset().left;
    let relativeY = event.pageY - $(base.parentElement).offset().top;

    let img = parent.querySelector(":scope img[usemap]")

	let originalSize = [img.naturalWidth,img.naturalHeight];
	let newSize = [img.offsetWidth,img.offsetHeight];

    let relation1 = (originalSize[0]+originalSize[1]) / (newSize[0]+newSize[1]);
	let relation2 = (width+height) / (newSize[0]+newSize[1]);




	if (condition == "pause") {
		if (!event.target.classList.contains("mapify-popOver") && !event.target.parentElement.parentElement.classList.contains("mapify-popOver")) {
			if (base.getAttribute("data-active") == "true") {
				if (base.getAttribute("name") != "pause") {
					base.setAttribute("name","pause");
					$(base).css({'transform': 'scale('+ $(base).attr('data-scale') +') !important'});
					$(base).css({'transform-origin': (relativeX / width) * 100 + '% ' + (relativeY / height) * 100 +'% !important'});
				}
				else {
					base.removeAttribute("name");
					$(base).css({'transform': 'scale('+ $(base).attr('data-scale') +') !important'});
					$(base).css({'transform-origin': (relativeX / width) * 100 + '% ' + (relativeY / height) * 100 +'% !important'});
				}
			}
		}
	}

	if (base.getAttribute("name") != "pause") {

		if (relation1 == 1) {
			base.style.transitionDuration = Math.min(Math.max(0.2, (relation2*0.2)), 0.5) + "s";
			base.setAttribute("data-scale",Math.min(Math.max(1, relation2), 10));	
		}
		else {
			base.style.transitionDuration = Math.min(Math.max(0.2, (relation1*0.2)), 0.5) + "s";
			base.setAttribute("data-scale",Math.min(Math.max(1, relation1), 10));
		}

		if (condition == "out" && event.type != "mouseleave" && event.type != "mouseleave") {
			base.setAttribute("data-active",false);
		}
		
		if (condition == "in" && event.type != "mouseenter" && event.type != "mouseleave") {
			base.setAttribute("data-active",true);
		}

		if (base.getAttribute("data-active") == undefined) {
			base.setAttribute("data-active",false);
		}

		let active = (base.getAttribute("data-active") === 'true');

	




		if (condition == "in" && active) {
			$(base).css({'transform': 'scale('+ $(base).attr('data-scale') +')'});
		}
		else if (condition == "out" && !active) {
			$(base).css({'transform': 'scale(1)'});
		}
		else if (condition == "pan") {
			$(base).css({'transform-origin': (relativeX / width) * 100 + '% ' + (relativeY / height) * 100 +'%'});
		}




		if (condition == "in" && event.type == "mouseenter" && active) {
			$(base).css({'transform': 'scale('+ $(base).attr('data-scale') +')'});
		}

		if (condition == "out" && event.type == "mouseleave") {
			$(base).css({'transform': 'scale(1)'});
		}

	}

}
function divideDifferenceArr(arr,include,exclude) {
	let temp = [];
	let result = [];

	let check1 = undefined;
	let check2 = undefined;

	let int = 0;

	let store = JSON.parse(JSON.stringify(arr));

	for(let i = 0; i < arr.length; i++) {
		check2 = true;
		for(let q = 0; q < exclude.length; q++) {
			for(let u = 0; u < exclude[q].length; u++) {
				if (u > 0) {
		
					if (arr[i][exclude[q][0]] == exclude[q][u]) {
						check2 = false;
					}
				}
			}

			arr[i][exclude[q][0]] = check2;

			if (include[include.length - 1] != exclude[q][0]) {
				include.push(exclude[q][0]);
			}
	
		}



	}


	for(let i = 0; i < arr.length; i++) {
		check1 = true;

		temp.push([])
		for(let q = 0; q < include.length; q++) {

			if (i == 0) {
				break;
			}

			if(arr[i - 1][include[q]] != arr[i][include[q]]) {
				check1 = false;
			}

		}

		if (!check1) {
			int = int+1;
		}

		temp[int].push(arr[i]);
	}
	for(let i = 0; i < temp.length; i++) {
		if (temp[i].length != 0) {
			result.push(temp[i])
		}
	}
	let ints = [];
	for(let u = 0; u < exclude.length; u++) {
		for(let i = 0; i < result.length; i++) {
			for(let q = 0; q < result[i].length; q++) {
				for(let y = 0; y < store.length; y++) {
					if (!ints.includes(y)) {
						ints.push(y)
						result[i][q][exclude[u][0]] = store[y][exclude[u][0]];
						break;
					}
				}
			}
		}
	}


	for(let u = 0; u < exclude.length; u++) {
		for(let i = 0; i < store.length; i++) {

		}
	}




	return result;
}
function checkReturnDifferences(arr,include,exclude) {
	let one = include[0];
	let two = include[1];
	let three = include[2];
	exclude = exclude[0];

	let tempArr1 = [];
	for(let q = 0; q < arr.length; q++) {
		tempArr1.push(arr[q][one]+","+arr[q][two]+","+arr[q][three]);
	}
	tempArr1 = [...new Set(tempArr1)];

	let tempArr2 = [];
	for(let q = 0; q < tempArr1.length; q++) {
		tempArr2.push([])
	}

	for(let i = 0; i < arr.length; i++) {
		for(let q = 0; q < tempArr2.length; q++) {
			if(!tempArr2[q].includes(arr[i][exclude]+","+arr[i][one]+","+arr[i][two]+","+arr[i][three]) && tempArr1[q] == arr[i][one]+","+arr[i][two]+","+arr[q][three]) {
				tempArr2[q].push(arr[i][exclude]+","+arr[i][one]+","+arr[i][two]+","+arr[q][three]);
			}
		}
	}

	let result = [];
	for(let i = 0; i < tempArr2.length; i++) {
		result.push([]);
	}

	for(let i = 0; i < tempArr2.length; i++) {
		for(let q = 0; q < tempArr2[i].length; q++) {
			let splitter = tempArr2[i][q].split(",");
			let obj = new Object();
			obj[exclude] = splitter[0];
			obj[one] = splitter[1];
			obj[two] = splitter[2];
			obj[three] = splitter[3];
			result[i].push(obj);
		}
	}

	return result;
	
}
function load() {
	const load = document.querySelector("#load");
	document.body.style.overflowY = "unset";
	document.documentElement.scrollTop = 0;
	load.className += "hide";
}
function getGameName(id,name) {
	let arr = finaldata["Game"]["Reference"];
	let ran;

	if (name != undefined && name != "" && name.toLowerCase() == "random") {
		ran = Math.floor(Math.random() * arr.length-2) + 1;
		return ran;
	}
	
	if (id != "") {
		for(let q = 0; q < arr.length; q++) {
			let x = q + 1;
			if(x == id) {
				return arr[q]["Full Name"];
			}
		}
	}
	else if (name != "") {
		for(let q = 0; q < arr.length; q++) {
			let x = q + 1;
			if(arr[q]["Full Name"] == name) {
				return x;
			}
			else if(arr[q]["Name"] == name) {
				return x;
			}
		}
	}


	return undefined;
}