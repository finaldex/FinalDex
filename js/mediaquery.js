let finaldata = [];
let baseurl = "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/";
let baseextension = "json";

let datas = ["Directory","Game Metadata","Locations Metadata","Pokémon Metadata","Items Metadata"]
for(let i = 0; i < datas.length; i++) {
    loadData(i)
}


function loadData(i) {
    let val = datas[i].replace(" Metadata","")
    let gameRequest = new XMLHttpRequest();
    gameRequest.open('GET', baseurl+datas[i]+"."+baseextension);
    gameRequest.responseType = 'json';
    gameRequest.send();
    gameRequest.onload = function() {
        finaldata[val] = gameRequest.response;
    }
}


document.querySelector("button#execute").addEventListener("click",dir_init);
document.querySelector("ul#roof span[name='execute']").addEventListener("click",dir_init)
document.querySelector("input#search-path").addEventListener("keydown",function(event) { if (event.keyCode == 13) {dir_init()} });
document.querySelector("input#search-file").addEventListener("keydown",function(event) { if (event.keyCode == 13) {dir_init()} });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


document.querySelector("nav span[name='set'] button[name='pokémon']").addEventListener("click",setAll);
document.querySelector("nav span[name='set'] button[name='items']").addEventListener("click",setAll);
document.querySelector("nav span[name='set'] button[name='locations']").addEventListener("click",setAll);


function getGame(string) {
    let games = ["Red","Blue","Yellow","Gold","Silver","Crystal","Ruby","Sapphire","Colosseum","FireRed","LeafGreen","Emerald","XD","Diamond","Pearl","Platinum","HeartGold","SoulSilver","Black","White","Black 2","White 2","X","Y","Omega Ruby","Alpha Sapphire","Sun","Moon","Ultra Sun","Ultra Moon","Lets Go Pikachu","Lets Go Eevee","Sword","Shield","Brilliant Diamond","Shining Pearl","Legend Arceus","Scarlet","Violet","1","2","3","4","5","6","7","8","9","GO","Masters EX","Masters","Camp","HOME","Smile","TCG","TCG 2","PokéPark","PokéPark 2","Mezastar","Pokkén","Pokkén DX","Tretta","Battrio","Tretta Lab","Ga-Olé","Channel","Hey You Pikachu","Picross","Picross GBC","Picross 3DS","Shuffle","Trozei","Battle Trozei","Snap","New Snap","Rumble Rush","Rumble World","Rumble U","Rumble","Rumble Blast","Ranger","Ranger Guardian Signs", "Ranger Shadows of Almia","Mystery Dungeon RTDX","Mystery Dungeon","Mystery Dungeon TDS","Mystery Dungeon V","Mystery Dungeon Gates to Infinity","Super Mystery Dungeon","Mystery Dungeon RTRB","Mystery Dungeon Rescue Team DX","Mystery Dungeon VI","Stadium","Stadium 2","UNITE","Rush","Battle Revolution","Kids Winter Fest","Dream World","Studio Red","Studio Blue","Box Ruby & Sapphire","Pinball","Pinball Ruby & Sapphire","Conquest","Place","Magikarp Jump","Detective Pikachu","All"];
    let result = [];

    if (games.includes(string)) {
        result.push(string);
    }
    else {
        let str1 = splitStr(string,"/");
        
        for (let i = 0; i < games.length; i++) {
            for (let q = 0; q < str1.length; q++) {
                if (str1[q] == games[i]) {
                    result.push(games[i]);
                    break;
                }
             



                let arr1 = splitStr(str1[q],"_");
   
    

                for (let r = 0; r < arr1.length; r++) {
                    if (arr1[r] == games[i]) {
                        result.push(games[i]);
                        break;
                    }

                    let arr1_alt = splitStr(arr1[r]," [")[0];

                    if (arr1_alt == games[i]) {
                        result.push(games[i])
                        break;
                    }
                }

                 
                let arr2 = splitStr(str1[q],"-");

                if (str1[q].includes("-")) {
                    result.push(arr2.join("-"))
                    break;
                }
               
            }
          
        }
        
    }

    for (let i = 0; i < result.length; i++) {
        if (!isNaN(parseInt(result[i]))) {
            result[i] = "Generation "+result[i];
        }
        else if (result[i] == "All") {
            result[i] = result[i]+" Games";
        }
    }
    result = [...new Set(result)];
    return result;
}




function setAll() {
    let tar = this;
    let result = []

    if (tar.getAttribute("name") == "pokémon") {
        for (let i = 0; i < finaldata["Pokémon"]["Path"].length; i++) {
            let vals = []
            if (finaldata["Pokémon"]["Path"][i]["Number"] != undefined) {
                vals.push(finaldata["Pokémon"]["Path"][i]["Number"])
            }
            if (finaldata["Pokémon"]["Path"][i]["Text"] != undefined) {
                vals.push(finaldata["Pokémon"]["Path"][i]["Text"])
            }
            result.push(vals.join("-"));
        }
    }
    else if (tar.getAttribute("name") == "items") {
        for (let i = 0; i < finaldata["Items"]["Reference"].length; i++) {
            if (getApplicable(finaldata["Items"]["Reference"][i]["Game"])) {
                if (finaldata["Items"]["Reference"][i]["Use"] == "true") {
                    if (finaldata["Items"]["Reference"][i]["Item"] != undefined) {
                        result.push(finaldata["Items"]["Reference"][i]["Item"]);
                    }
                }
            }
        }
    }
    else if (tar.getAttribute("name") == "locations") {
        for (let i = 0; i < finaldata["Locations"]["Reference"].length; i++) {
            if (getApplicable(finaldata["Locations"]["Reference"][i]["Game"])) {
                if (finaldata["Locations"]["Reference"][i]["Location"] != undefined) {
                    result.push(finaldata["Locations"]["Reference"][i]["Location"]);
                }
            }
        }

    }
    result = [...new Set(result)];
 
    document.querySelector("nav input#search-path").value = "Images/"+titleCase(tar.getAttribute("name").replace("s",""));
    document.querySelector("nav input#search-file").value = result.join(",");
}

function dir_exec() {
    let base = document.querySelector("ul#result");
    let val1 = document.querySelector("input#search-path").value;
    let val2 = document.querySelector("input#search-file").value;
    let result = [];

    let imgd = document.querySelector("nav span[name='image'][data-state]");

    if (imgd != undefined) {
        imgd.setAttribute("data-state","1");
    }

    val1 = val1.replaceAll("\\","/");
    val2 = val2.replaceAll("\\","/");


    
    for (let i = 0; i < Object.keys(finaldata["Directory"]).length; i++) {
        let path = Object.keys(finaldata["Directory"])[i]
        let source = path.split("/")[path.split("/").length-1]

        for (let q = 0; q < finaldata["Directory"][path].length; q++) {
            let file = finaldata["Directory"][path][q];
            let fileName = finaldata["Directory"][path][q].split(".")[0]

            if (file.includes(".png") || file.includes(".gif")) {
                if (getApplicable(source)) {
                    let vals1 = splitStr(val1,",");
                    let vals2 = splitStr(val2,",");

                    for (let r = 0; r < vals1.length; r++) {
                        if (path.includes(vals1[r]) || vals1[r] == "") {
                            for(let t = 0; t < vals2.length; t++) {
                                let check = false;
                                if (vals2[t][0] == '"' && vals2[t][vals2[t].length-1] == '"' && fileName.includes(vals2[t].replaceAll('"',''))) {
                                    check = true;
                                }
                                if (splitStr(fileName,"_")[0] == vals2[t] || vals2[t] == "") {
                                    check = true;
                                }
                                if (check) {
                                    let obj = new Object();
                                    obj["Path"] = path
                                    obj["File"] = file.replace("."+file.split(".")[file.split(".").length-1],"")
                                    obj["Extension"] = file.split(".")[file.split(".").length-1];
                                    obj["Source"] = getGame(path).join("\n");
                                    result.push(obj)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    base.parentElement.setAttribute("data",JSON.stringify(result))

    data_exec();

    
    document.querySelector("ul#roof span[name='image']").setAttribute("data-state","0");
    document.querySelector("ul#roof span[name='file']").setAttribute("data-state","0");
    document.querySelector("ul#roof span[name='path']").setAttribute("data-state","0");
    document.querySelector("ul#roof span[name='source']").setAttribute("data-state","0");
    document.querySelector("ul#roof span[name='extension']").setAttribute("data-state","0");

}



function loader_operator(opt) {
    let loader = document.querySelector("#loader");
    if (opt == true) {
        loader.classList.add("active");
    }
    else {
        loader.classList.remove("active");
    }
}
async function dir_init() {
    loader_operator(true);
    setTimeout(function(){dir_exec();loader_operator(false);}, 500);
}




function data_exec() {
    let base = document.querySelector("ul#result");
    let res = JSON.parse(base.parentElement.getAttribute("data"));
    let pagePath = document.querySelector("span[name='page'] input");
    let sizePath = document.querySelector("span[name='size'] input");
    
    pagePath.max = Math.ceil(res.length/parseInt(sizePath.value));

    inpMM(pagePath)

    let size = parseInt(sizePath.value);
    let page = parseInt(pagePath.value);


    let sizeMin = (size*page)-size;
    let sizeMax = (size*page);

    let val1 = Math.max((Math.min((sizeMin+1),res.length)),0)
    let val2 = Math.max((Math.min((sizeMax),res.length)),0)
    let val3 = Math.max((res.length),0);
    
    document.querySelector("span[name='count'] > *:first-child").innerText = val1+" – "+val2;
    document.querySelector("span[name='count'] > *:last-child").innerText = " /"+val3;

    base.innerHTML = "";

    for (let i = 0; i < res.length; i++) {
        let x = i+1;
        if (x >= sizeMin+1 && x <= sizeMax) {
        
            let path = res[i]["Path"];
            let file = res[i]["File"];
            let extension = res[i]["Extension"];
            let source = res[i]["Source"];
     

            let li = document.createElement("li");
            base.appendChild(li)

            let label = document.createElement("label");
            label.setAttribute("for","input-"+path+"/"+file)
            label.setAttribute("name","image");
            li.appendChild(label)
            let input = document.createElement("input");
            input.setAttribute("type","checkbox")
            input.setAttribute("id","input-"+path+"/"+file)
            label.appendChild(input)


            let img = document.createElement("img");
            img.src = path+"/"+file+"."+extension;
            label.appendChild(img);

            let folderwrap = document.createElement("span");
            let foldertxt = document.createElement("small");
            foldertxt.innerText = file;
            folderwrap.setAttribute("name","file");
            li.appendChild(folderwrap);
            folderwrap.appendChild(foldertxt);

            let pathwrap = document.createElement("span");
            let pathtxt = document.createElement("small");
            pathtxt.innerText = path;
            pathwrap.setAttribute("name","path");
            li.appendChild(pathwrap);
            pathwrap.appendChild(pathtxt);

            let srcwrap = document.createElement("span");
            let src = document.createElement("small");
            src.innerText = source;
            srcwrap.setAttribute("name","source");
            li.appendChild(srcwrap);
            srcwrap.appendChild(src);


            let extwrap = document.createElement("span");
            let ext = document.createElement("small");
            ext.innerText = extension.toUpperCase();
            extwrap.setAttribute("name","extension");
            li.appendChild(extwrap);
            extwrap.appendChild(ext);
        }
    }
}


document.querySelector("span[name='size'] input").addEventListener("input",function(){inpMM(this)})
document.querySelector("span[name='page'] input").addEventListener("input",function(){inpMM(this)})

function inpMM(tar) {
    let val = parseInt(tar.value);
    let valmin = parseInt(tar.min);
    let valmax = parseInt(tar.max);
    let valstep = 0;

    if (tar.getAttribute("step") != undefined) {
        valstep = parseInt(tar.getAttribute("step"))
    }
   

    if(val < valmin) {
        tar.value = valmin+valstep;
    }
    else if (val > valmax) {
        tar.value = valmax-valstep;
    }
}


document.querySelector("ol ul#roof li > *:first-child").addEventListener("click",expandAll);

function expandAll() {
    let tar = this;
    let inpts = document.querySelectorAll("ol ul#result input")

    let state = tar.getAttribute("data-state");
    if (inpts.length > 0) {
        if (state == 1) {
            for (let i = 0; i < inpts.length; i++) {
                inpts[i].checked = true;
            }
            tar.setAttribute("data-state","2")
        }
        else {
            for (let i = 0; i < inpts.length; i++) {
                inpts[i].checked = false;
            }
            tar.setAttribute("data-state","1")
        }
    }
    
    
}


document.querySelector("ol ul#roof li > *:nth-child(2)").addEventListener("click",sortBy)
document.querySelector("ol ul#roof li > *:nth-child(3)").addEventListener("click",sortBy)
document.querySelector("ol ul#roof li > *:nth-child(4)").addEventListener("click",sortBy)
document.querySelector("ol ul#roof li > *:nth-child(5)").addEventListener("click",sortBy)

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


function sortBy() {
    let tar = this;
    let tars = tar.parentElement.querySelectorAll(":scope > *[data-state]");
    let type = tar.getAttribute("name");
    let state = tar.getAttribute("data-state");

    let base = document.querySelector("ul#result");
    let list = JSON.parse(base.parentElement.getAttribute("data"));

    list.sort(function(a, b) {return a[titleCase(type)].localeCompare(b[titleCase(type)], undefined, {numeric: true,sensitivity: 'base'});})
    
    for (let i = 0; i < tars.length; i++) {
        tars[i].setAttribute("data-state",0);
    }

    if (state == 0 || state == 1) {
        tar.setAttribute("data-state","2")
    }
    else if (state == 2) {
        list.reverse();
        tar.setAttribute("data-state","1")
    }


    base.parentElement.setAttribute("data",JSON.stringify(list))
    data_exec();

}

async function data_init() {
    loader_operator(true);
    setTimeout(function(){data_exec();loader_operator(false);}, 500);
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
    return games.findIndex(name)+1
}
function getApplicable(val) {
    let adds = [];

    let labin = document.querySelectorAll("nav > span:last-child label input");
    for(let i = 0; i < labin.length; i++) {
        if (labin[i].checked) {
            adds.push(labin[i].previousElementSibling.innerText.toUpperCase())
        }
    }
    if (adds.length == 0) {
        adds.push("All")
    }



    let games = $("span[name='game_select'] input:checked").get().map(function(el) { return el.value.replaceAll("Generation ","") });

    console.log(games)

    /*
    if (gameVal.includes("-")) {
        let valStart = val.split("-")[0];
        let valEnd = val.split("-")[1];
        if (isNaN(parseInt(valStart)) || isNaN(parseInt(valEnd))) {
            valStart = getGameID(valStart)
            valEnd = getGameID(valEnd)
            for (let i = 0; i < finaldata["Game"]["Reference"].length; i++) {
                if (finaldata["Game"]["Reference"][i]["Type"] == "Core" || finaldata["Game"]["Reference"][i]["Type"] == "Side") {
                    let x = parseInt(finaldata["Game"]["Reference"][i]["ID"]);
                    if (x >= valStart && x <= valEnd) {
                        games.push(finaldata["Game"]["Reference"][i]["Name"])
                    }
                }
            }
        }
        else {
            for (let i = 0; i < finaldata["Game"]["Reference"].length; i++) {
                if (finaldata["Game"]["Reference"][i]["Type"] == "Core" || finaldata["Game"]["Reference"][i]["Type"] == "Side") {
                    let x = parseInt(finaldata["Game"]["Reference"][i]["Generation"]);
                    if (x >= valStart && x <= valEnd) {
                        games.push(finaldata["Game"]["Reference"][i]["Name"])
                    }
                }
            }
        }
        
    }
    else if (!isNaN(parseInt(gameVal))) {
        for (let i = 0; i < finaldata["Game"]["Reference"].length; i++) {
            if (finaldata["Game"]["Reference"][i]["Type"] == "Core" || finaldata["Game"]["Reference"][i]["Type"] == "Side") {
                let x = parseInt(finaldata["Game"]["Reference"][i]["Generation"]);
                if (x == parseInt(gameVal)) {
                    games.push(finaldata["Game"]["Reference"][i]["Name"])
                }
            }
        }
    }
    else {
        games.push(gameVal);
    }
    */

   



    val = val.replaceAll("_",",");
    let vals = splitStr(val,",");


    for (let i = 0; i < vals.length; i++) {
        let val = vals[i];
        let additional = []
        if (vals[i].includes(" [")) {
            additional = splitStr(vals[i].split(" [")[vals[i].split(" [").length-1],"][")
            additional[additional.length-1] = additional[additional.length-1].replaceAll("]","")
            val = val.replace(vals[i].split(" [")[vals[i].split(" [").length-1],"").replace(" [","")
        }

        let check = true;
        if (adds[0] != "All") {
            check = false;
            for (let q = 0; q < additional.length; q++) {
                if (adds.includes(additional[q])) {
                    check = true;
                    break;
                }
            }
        }
       
        if (check) {
            for (let g = 0; g < games.length; g++) {
                let game = games[g];
                let gen = getGeneration(games[g])
        
                if (val == "All" || game == "All") {
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
                    if (parseInt(val) == gen || parseInt(val) == game) {
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



$("body").click(function(event) {
	if(!$(event.target).closest("*:has( > span[name='game_select'])").length && !$(event.target).is("*:has( > span[name='game_select'])")) {
		$("input#game_select1").prop('checked', false);
	}

});