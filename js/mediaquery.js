let finaldata = [];
let baseurl = "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/";
let baseextension = "json";

let datas = ["Directory","Game Metadata"]
for(var i = 0; i < datas.length; i++) {
    loadData(i)
}


function loadData(i) {
    var val = datas[i]
    let gameRequest = new XMLHttpRequest();
    gameRequest.open('GET', baseurl+datas[i]+"."+baseextension);
    gameRequest.responseType = 'json';
    gameRequest.send();
    gameRequest.onload = function() {
        finaldata[val] = gameRequest.response;
    }
}
document.querySelector("span[name='Start'] button").addEventListener("click",dirGet);
document.querySelector("input[type='text']").addEventListener("keydown",function(event) { if (event.keyCode == 13) {dirGet()} });


function dirGet() {
    let base = document.querySelector("ul");
    base.innerHTML = "";
    let val = document.querySelector("input[type='text']").value;

    for (var i = 0; i < Object.keys(finaldata["Directory"]).length; i++) {
        let path = Object.keys(finaldata["Directory"])[i]
        let source = path.split("/")[path.split("/").length-1]

        let firstIteration = true;

        for (var q = 0; q < finaldata["Directory"][path].length; q++) {
            let file = finaldata["Directory"][path][q];
            let fileName = finaldata["Directory"][path][q].split(".")[0]

             
            if (getApplicable(source)) {
                if (splitStr(fileName,"_")[0] == val) {
                    if (file.includes(".png") || file.includes(".gif")) {
                        if (firstIteration) {
                            var li = document.createElement("li");
                            base.appendChild(li)
                            let title = document.createElement("h2");
                            title.innerText = source
                            li.appendChild(title)
                        }
                        firstIteration = false;
                        let wrap = document.createElement("span");
                        let img = document.createElement("img");
                        img.src = path+"/"+file;
                        wrap.title = fileName;
                        li.appendChild(wrap);
                        wrap.appendChild(img);
                    }
                }
            }
        }
    }
    
    document.querySelector("span[name='count'] > *").innerText = document.querySelectorAll("ul img").length;
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

function getGameID(id) {
    let games = ["Red","Blue","Yellow","Gold","Silver","Crystal","Ruby","Sapphire","Colosseum","FireRed","LeafGreen","Emerald","XD","Diamond","Pearl","Platinum","HeartGold","SoulSilver","Black","White","Black 2","White 2","X","Y","Omega Ruby","Alpha Sapphire","Sun","Moon","Ultra Sun","Ultra Moon","Lets Go Pikachu","Lets Go Eevee","Sword","Shield","Legend Arceus","Brilliant Diamond","Shining Pearl","Scarlet","Violet"];
    return games.findIndex(id+1)
}
function getApplicable(val) {
	var val;
    let adds = [];

    let labin = document.querySelectorAll("label input");
    for(var i = 0; i < labin.length; i++) {
        if (labin[i].checked) {
            adds.push(labin[i].previousElementSibling.innerText.toUpperCase())
        }
    }
    if (adds.length == 0) {
        adds.push("All")
    }
 

    let gamePath = document.querySelector("select");

    let games = [];

    if (gamePath.value.includes("-")) {
        let valStart = val.split("-")[0];
        let valEnd = val.split("-")[1];
        if (isNaN(parseInt(valStart)) || isNaN(parseInt(valEnd))) {
            valStart = getGameID(valStart)
            valEnd = getGameID(valEnd)
            for (var i = 0; i < finaldata["Game"]["Reference"].length; i++) {
                if (finaldata["Game"]["Reference"][i]["Type"] == "Core Series" || finaldata["Game"]["Reference"][i]["Type"] == "Side Series") {
                    let x = parseInt(finaldata["Game"]["Reference"][i]["ID"]);
                    if (x >= valStart && x <= valEnd) {
                        games.push(finaldata["Game"]["Reference"][i]["Name"])
                    }
                }
            }
        }
        else {
            for (var i = 0; i < finaldata["Game"]["Reference"].length; i++) {
                if (finaldata["Game"]["Reference"][i]["Type"] == "Core Series" || finaldata["Game"]["Reference"][i]["Type"] == "Side Series") {
                    let x = parseInt(finaldata["Game"]["Reference"][i]["Generation"]);
                    if (x >= valStart && x <= valEnd) {
                        games.push(finaldata["Game"]["Reference"][i]["Name"])
                    }
                }
            }
        }
        
    }
    else if (!isNaN(parseInt(gamePath.value))) {
        for (var i = 0; i < finaldata["Game"]["Reference"].length; i++) {
            if (finaldata["Game"]["Reference"][i]["Type"] == "Core Series" || finaldata["Game"]["Reference"][i]["Type"] == "Side Series") {
                let x = parseInt(finaldata["Game"]["Reference"][i]["Generation"]);
                if (x == parseInt(gamePath.value)) {
                    games.push(finaldata["Game"]["Reference"][i]["Name"])
                }
            }
        }
    }
    else {
        games.push(gamePath.value);
    }

    console.log(games)




    val = val.replaceAll("_",",");
    let vals = splitStr(val,",");
    for (var i = 0; i < vals.length; i++) {
        let val = vals[i];
        let additional = []
        if (vals[i].includes(" [")) {
            additional = splitStr(vals[i].split(" [")[vals[i].split(" [").length-1],"][")
            additional[additional.length-1] = additional[additional.length-1].replaceAll("]","")
            val = val.replace(vals[i].split(" [")[vals[i].split(" [").length-1],"").replace(" [","")
        }

        let check = true;
        for (var q = 0; q < additional.length; q++) {
            if (q == 0) {
                check = false;
            }
            if (adds[0] == "All") {
                check = true;
                break
            }
            else if (adds.includes(additional[q])) {
                check = true;
                break;
            }
        }
        if (check) {
            for (var g = 0; g < games.length; g++) {
                let game = games[g];
                let gen = getGeneration(games[g])
        
                if (val == "All") {
                    return true;
                }
                else if (val.includes("-")) {
                    let valStart = parseInt(val.split("-")[0]);
                    let valEnd = parseInt(val.split("-")[1]);
                    let valCurrent = gen
                    if (valCurrent >= valStart && valCurrent <= valEnd) {
                        return true;
                    }
                }
                else if (!isNaN(parseInt(val))) {
                    if (parseInt(val) == gen) {
                        return true;
                    }
                }
                else if (val == game) {
                    return true;
                }
            }
        }
    }
	
	
	return false;
}
