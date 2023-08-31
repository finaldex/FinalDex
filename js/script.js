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
        let tar = document.querySelector('#contain > div#'+where+' ol label[data-title="'+z+'"]');


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

    areas = [...(Array.prototype.slice.call(areas))]



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

    areas = [...(Array.prototype.slice.call(areas))]

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
                    bar.style.removeProperty("color");
                    for (let i = 0; i < hidden.length; i++) {
                        hidden[i].classList.add("filtered");
                    }
                    consoleText("Filter added...");

                    bar.style.setProperty("outline-color","Red","important");
                    bar.style.setProperty("border-color","Red","important");
                    bar.style.setProperty("border-style","solid");
                }
            }
        }
    }
    else if (condition == "Remove") {

        if (filter.length > 0) {
            bar.value = "";
            bar.style.removeProperty("color");

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

    let els = imgs1



   
	
    if (val != undefined) {
        val = val.getAttribute("data-path");
        
        let games = [GameName]
        if (val.includes("Sugimori")) {
            games = [...(AllGames)].reverse().concat("All");
        }
        

        if (action == "Populate") {
            for (let q = 0; q < 10; q++) {
                let ran1 = parseInt(getRandomInt(0,els.length-1));
                let id = els[ran1].id;
                if (isNaN(parseInt(id))) {
                    id = getPokémonInt(id);
                }
                let ranMed = getMedia(false,[id],[val],games);
                let ran2 = parseInt(getRandomInt(0,ranMed.length-1));
                ranMed = ranMed[ran2];

                if (ranMed != "") {
                    img.src = ranMed;
                    break;
                }
            }
        }
        else if (action == "Execute") {
            for (let q = 0; q < els.length; q++) {
                els[q].src = ""
            }
    
            for (let q = 0; q < els.length; q++) {
                let int = els[q].id;
                if (isNaN(parseInt(int))) {
                    int = getPokémonInt(int);
                }
                els[q].src = getMedia(true,["^"+getPokémonPath(int),"^"+getPokémonPath(int)+"_Male","^"+getPokémonPath(int)+"_Female"],[val],games)
            }
            
            memory("Save","game",[el]);
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
					console.warn(finaldata["Locations"]["Reference"][i]["Location"]+" returned an error.");
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
function getGameID(name) {

	let arr = finaldata["Game"]["Reference"];
	
    if (!isNaN(parseInt(name))) {
        name = parseInt(name);
        if (name >= 0 && name <= AllGames.length) {
            return name;
        }
    }
	else if (name.toLowerCase() == "random") {
		return Math.floor(Math.random() * AllGames.length) + 1;
	}
	else {
		for(let q = 0; q < arr.length; q++) {
			if(arr[q]["Full Name"] == name || arr[q]["Name"] == name) {
				return parseInt(arr[q]["ID"]);
			}
		}
	}


	return 1;
}


function dropRelPos() {
    let tar = this.querySelector(":scope ol");
    let obj = this.querySelector(":scope label");

    let box = tar.getBoundingClientRect();
    let body = document.body;
    let docEl = document.documentElement;

    let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    let clientTop = docEl.clientTop || body.clientTop || 0;
    let clientLeft = docEl.clientLeft || body.clientLeft || 0;

    let top  = box.top + scrollTop - clientTop;
    let left = box.left + scrollLeft - clientLeft;

    let bodyY = body.getBoundingClientRect().bottom;
    let bodyX = body.getBoundingClientRect().right;


    let y = top/bodyY;
    let x = tar.offsetWidth - left;

    tar.style.removeProperty("left");
    tar.style.removeProperty("right");
    tar.style.removeProperty("top");
    tar.style.removeProperty("bottom");

    if (x > 0) {
        tar.style.left = obj.offsetWidth-obj.offsetWidth+"px";
    }
    else {
        tar.style.right = obj.offsetWidth-obj.offsetWidth+"px";
    }

    if (y < 0.5) {
        tar.style.top = obj.offsetHeight+"px";
    }
    else {
        tar.style.bottom = obj.offsetHeight+"px";
    }
}
