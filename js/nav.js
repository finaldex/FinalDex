let createNav = function() {
	let navOptions = ["Pokémon","Moves","Abilities","Items","Map","Mechanics","Type Advantage","Tools"];
	if(Ability.length <= 0) {
		for(let q = 0; q < navOptions.length; q++) {
			if(navOptions[q].includes("Abilities")) {
				navOptions.splice(q, 1);
			}
		}
	}

	for(let q = 0; q < navOptions.length; q++) {
		if(navOptions[q].includes("Mechanics")) {
			navOptions.splice(q, 1);
		}
		if(navOptions[q].includes("Type Advantage")) {
			navOptions.splice(q, 1);
		}
		if(navOptions[q].includes("Type Advantage")) {
			navOptions.splice(q, 1);
		}
	}

	for(let q = 0; q < navOptions.length; q++) {
		let x = q + 1;
		let navigationInput = document.createElement("input");
		let navigationLabel = document.createElement("label");
		let navigationLabelText = document.createElement("h6");
		navigationInput.setAttribute("type", "radio");
		navigationInput.setAttribute("name", "navigation");
		navigationInput.setAttribute("id", "navigation-" + x);
		navigationInput.setAttribute("value", navOptions[q]);
		navigationInput.setAttribute("autocomplete", "off");
		navigationLabel.setAttribute("for", "navigation-" + x);
		navigationLabelText.innerText = navOptions[q];
		document.querySelector("#navigation").appendChild(navigationInput);
		document.querySelector("#navigation").appendChild(navigationLabel);
		navigationLabel.appendChild(navigationLabelText);
		if(q == 0) {
			navigationInput.setAttribute("checked", "");
		}
		navigationInput.addEventListener("change", navSelector);
	}

	let fullscreenButtonLeft = document.createElement("figure");
	let fullscreenButtonLeftText = document.createElement("strong");
	let fullscreenOverlay = document.createElement("span");
	let fullscreenDiv = document.createElement("div");
	let fullscreenUl = document.createElement("ul");
	let fullscreenButtonRight = document.createElement("figure");
	let fullscreenButtonRightText = document.createElement("strong");
	fullscreenButtonLeftText.innerText = "«";
	fullscreenButtonRightText.innerText = "»";
	fullscreenButtonLeft.setAttribute("value",0);
	fullscreenButtonRight.setAttribute("value",0);
	let fullscreen = document.querySelector("#fullscreen");
    fullscreen.setAttribute("tabindex","0");
	fullscreen.appendChild(fullscreenButtonLeft);
	fullscreenButtonLeft.appendChild(fullscreenButtonLeftText);
	fullscreen.appendChild(fullscreenOverlay);
	fullscreen.appendChild(fullscreenDiv);
	fullscreenDiv.appendChild(fullscreenUl);
	fullscreen.appendChild(fullscreenButtonRight);
	fullscreenButtonRight.appendChild(fullscreenButtonRightText);


	fullscreen.addEventListener("keyup",function(event){if(event.which === 37){fullscreenMove("left")}else if(event.which === 39){fullscreenMove("right")}});
	fullscreen.addEventListener("wheel",function(event){let delta = event.deltaY.toString();if(delta.includes("-")){fullscreenMove("left")}else if(!delta.includes("-")){fullscreenMove("right")}});

	fullscreenOverlay.addEventListener("click",exitFullscreen);

	fullscreenButtonLeft.addEventListener("click",function(){fullscreenMove("left")});
	fullscreenButtonRight.addEventListener("click",function(){fullscreenMove("right")});



}




function createEditor(data) {
	let options = [{"name":"Pokémon","data":"pok","type":"Select","game":"All"},{"name":"Nickname","data":"ni","type":"Text","game":"All"},{"name":"Level","data":"lv","type":"Number","game":"All"},{"name":"Ability","data":"ab","type":"Select","game":"3+"},{"name":"Nature","data":"na","type":"Select","game":"3+"},{"name":"Item","data":"it","type":"Select","game":"2+"},{"name":"Gender","data":"ge","type":"Select","game":"2+"},{"name":"Friendship","data":"fr","type":"Number","game":"2+"},{"name":"Move","data":"mo","type":"Select","game":"All"},{"name":"Individual Value","data":"iv","type":"Number","game":"All"},{"name":"Effort Value","data":"ev","type":"Number","game":"All"},{"name":"Shiny","data":"shiny","type":"Boolean","game":"2+"},{"name":"Condition","data":"cond","type":"Number","game":"3+"},{"name":"Marking","data":"mark","type":"Select","game":"3+"},{"name":"Met Location","data":"metlo","type":"Select","game":"All"},{"name":"Met Level","data":"metlv","type":"Number","game":"All"},{"name":"Met Date","data":"metda","type":"Date","game":"All"},{"name":"Ball","data":"ball","type":"Select","game":"All"},{"name":"Pokémon ID","data":"pid","type":"Text","game":"All"},{"name":"Original Trainer","data":"ot","type":"Text","game":"All"},{"name":"Original Trainer Gender","data":"otge","type":"Select","game":"All"},{"name":"Trainer ID","data":"tid","type":"Number","game":"All"},{"name":"Secret ID","data":"sid","type":"Number","game":"All"},{"name":"Version","data":"ver","type":"Select","game":"All"},{"name":"Language","data":"lang","type":"Select","game":"All"}];

	let base = document.querySelector("#editor")
	base.innerHTML = "";

	let wrap = document.createElement("div");
	let table = document.createElement("table");
	let thead = document.createElement("thead");
	let tbody = document.createElement("tbody");
	base.appendChild(wrap);
	wrap.appendChild(table);
	table.appendChild(thead);
	table.appendChild(tbody);

	if (typeof data == "object") {
		data = data.join("\n");
	}

	data = data.replaceAll("\r","")
	data = data.replaceAll("\n","_")
	data = splitStr(data,"_");
	data = data.filter((item) => item != '');

	for (let o = 0; o < options.length; o++) {
		if (options[o]["name"] == "Individual Value") {
			options[o]["name"] = IV["Name"];
		}
		else if (options[o]["name"] == "Effort Value") {
			options[o]["name"] = EV["Name"];
		}
	}


	let shadow = document.createElement("span");
	base.appendChild(shadow)
	shadow.addEventListener("click",function(){let tar = this.parentElement;let check = true; if(tar.classList.contains("change")) {let ask = confirm("Changes will not be saved.\nAre you sure you want to continue?"); if(ask) {check = true;} else {check = false;}} if (check) {tar.classList.remove("active")}})
	
	let button = document.createElement("button");
	let buttonText = document.createElement("p");
	buttonText.innerText = "Apply";
	base.appendChild(button);
	button.appendChild(buttonText);
	button.addEventListener("click",buttonFunc);

		
	data.unshift("");
	for (let d = 0; d < data.length; d++) {

		let tr = document.createElement("tr");
		tr.setAttribute("name",d);

		if (d == 0) {
			thead.appendChild(tr);
		}
		else {
			tbody.appendChild(tr);
		}

		for (let o = 0; o < options.length; o++) {
			if (getApplicable(options[o]["game"])) {
				let td = document.createElement("td");
				td.setAttribute("name",options[o]["name"]);
				td.setAttribute("data",options[o]["data"]);
			
				tr.appendChild(td);

				let title;
				if (d == 0) {
					title = document.createElement("p");
					title.innerText = options[o]["name"];
					td.appendChild(title);
				}

				
				let int = [""];

				if(options[o]["name"] == "Move") {
					int = [...(["","","",""])];
				}
				else if(options[o]["name"] == "Effort Value" || options[o]["name"] == "Individual Value" || options[o]["name"] == "Awakening Value") {
					int = [...(Stats)];
				}
				else if (options[o]["name"] == "Condition") {
					int = [...([{"Name":"Cool"},{"Name":"Beauty"},{"Name":"Cute"},{"Name":"Clever"},{"Name":"Though"}])];
				}

				/*
				if (o == 0) {
					let dummy = document.createElement("span")
					dummy.classList.add("dummy");
					td.appendChild(dummy);
				}
				*/

				for(let i = 0; i < int.length; i++) {
					let x = i+1;
					let selector;
					let img;
		
					if (options[o]["name"] == "Pokémon") {
						img = document.createElement("img");
						td.appendChild(img)
					}

				
					if (options[o]["type"] == "Text") {
						selector = document.createElement("input");
						selector.type = "text";

						if (options[o]["name"] == "Nickname") {
							if (Generation >= 1 && Generation <= 5) {
								selector.maxLength = 10;
							}
							else if (Generation >= 6) {
								selector.maxLength = 12;
							}
						}
						
					}
					else if (options[o]["type"] == "Number") {
						selector = document.createElement("input");
						selector.type = "number";

						if (options[o]["name"] == "Level" || options[o]["name"] == "Met Level") {
							selector.min = 1;
							selector.max = 100;
						}
						else if (options[o]["name"] == "Friendship") {
							selector.min = 0;
							selector.max = 255;
						}
						else if (options[o]["name"] == "Individual Value") {
							selector.min = IV["Min"];
							selector.max = IV["Max"];

						}
						else if (options[o]["name"] == "Effort Value") {
							selector.min = EV["Min"];
							selector.max = EV["Max"];
							if (Generation >= 3) {
								selector.addEventListener("input",evInputMax)
							}
						}
						else if (options[o]["name"] == "Condition") {
							selector.min = 0;
							selector.max = 255;
						}
						else if (options[o]["name"] == "Trainer ID" || options[o]["name"] == "Secret ID") {
							if (Generation >= 1 && Generation <= 6) {
								selector.min = 0;
								selector.max = 99999;
								selector.addEventListener("input",function(){inputPad(5)});
							}
							else if (Generation >= 7 && Generation <= 8) {
								selector.min = 0;
								selector.max = 999999;
								selector.addEventListener("input",function(){inputPad(6)});
							}
						}


						selector.addEventListener("change",inputMinMax);
					}
					else if (options[o]["type"] == "Boolean") {
						selector = document.createElement("input");
						selector.type = "checkbox";
					}
					else if (options[o]["type"] == "Date") {
						selector = document.createElement("input");
						selector.type = "date";
					}
					else if (options[o]["type"] == "Select") {
						selector = document.createElement("select");

						let opt = [...([])];
						if (options[o]["name"] == "Pokémon") {
							opt = [...(Pokémon)];
						}
						else if (options[o]["name"] == "Ability") {
							opt = [...(Abilities)];
						}
						else if (options[o]["name"] == "Nature") {
							opt = [...(Natures)];
						}
						else if (options[o]["name"] == "Item") {
							opt = [...(Items)];
						}
						else if (options[o]["name"] == "Gender") {
							opt = ["♂","♀","☿"];
						}
						else if (options[o]["name"] == "Move") {
							opt = [...(Moves)];
						}
						else if (options[o]["name"] == "Condition") {
							opt = [];
						}
						else if (options[o]["name"] == "Marking") {
							if (Generation == 3) {
								opt = ["●", "■", "▲","♥︎"];
							}
							else if (Generation >= 4) {
								opt = ["●","▲","■","♥︎","★","♦︎"];
							}
						}
						else if (options[o]["name"] == "Met Location") {
							opt = [...(Locations)];
						}
						else if (options[o]["name"] == "Ball") {
							opt = ["Poké Ball","Great Ball","Ultra Ball","Safari Ball","Smoke Ball","Heavy Ball","Level Ball","Lure Ball","Fast Ball","Light Ball","Friend Ball","Moon Ball","Love Ball","Park Ball","Net Ball","Dive Ball","Nest Ball","Repeat Ball","Timer Ball","Luxury Ball","Premier Ball","Dusk Ball","Heal Ball","Quick Ball","Cherish Ball","Sport Ball","Dream Ball","Beast Ball","Master Ball"];
							opt = opt.filter(element => Items.includes(element));
						}
						else if (options[o]["name"] == "Original Trainer Gender") {
							opt = ["♂","♀"];
						}
						else if (options[o]["name"] == "Version") {
							opt = [...(AllGames)];
						}
						else if (options[o]["name"] == "Language") {
							opt = ["Japanese","English","French","Italian","German","Spanish","Korean","Chinese (Simplified)","Chinese (Traditional)"];
						}

										
						if (options[o]["name"] == "Move") {
							opt.unshift("Move #"+x)
						}		
						else if (options[o]["name"] != "Pokémon") {
							opt.unshift("")
						}

						for (let r = 0; r < opt.length; r++) {
							let option = document.createElement("option");
							option.value = opt[r]
							option.innerText = opt[r]
							option.setAttribute("name",opt[r]);
							selector.append(option)
						}
						
					}

					
					
					
		
					let placeholder;
					if (int[i]["Name"] != undefined) {
						placeholder = int[i]["Name"];
					}
					else if (int.length > 1) {
						placeholder = options[o]["name"]+" #"+x;
					}
		


					if (placeholder != undefined) {
						if (selector.tagName == "INPUT") {
							selector.placeholder = placeholder;
							selector.setAttribute("onfocus","this.placeholder='';");
							selector.setAttribute("onblur","this.placeholder='"+placeholder+"';");
						}
					}

					selector.setAttribute("name",options[o]["name"]+"-"+i)
					td.appendChild(selector);

					if (options[o]["name"] == "Move") {
						let span = document.createElement("span");
						td.appendChild(span)
						span.appendChild(selector);
					}		
						
		

					if (d == 0) {
						selector.addEventListener("change",changeAll);
					}

					function changeAll() {

						let val1 = findUpAtt(this,"name").getAttribute("name");
						let val2 = this.getAttribute("name");
						let tar = document.querySelectorAll("#editor table tbody td[name='"+val1+"'] *[name='"+val2+"']");
						for(let i = 0; i < tar.length; i++) {
							if (this.type == "checkbox") {
								tar[i].checked = this.checked;
							}
							else {
								tar[i].value = this.value;
							}
						}
					}
			
					if (options[o]["name"] == "Pokémon") {
						selector.addEventListener("change",editorPopulateSpecific);
					}

					selector.addEventListener("change",function(){editorUpdateStyles();document.querySelector("#editor").classList.add("change");})
					selector.addEventListener("change",editorWhitespaceVal);
				}
				
			}
		}


	}
	

	editorDataToVal(data);
	editorPopulateSpecific();
	editorDataToVal(data);
	editorUpdateStyles();
	editorWhitespaceVal();

	function buttonFunc() {
		
		let tar = this.parentElement;

		if(tar.classList.contains("change")) {
			let base1 = document.querySelectorAll("#pokémon > aside section[name='party'] > div:not([data-string=''])");
			let base2 = document.querySelectorAll("#editor tbody tr");


			if (base1.length == base2.length) {
				for (let q = 0; q < base1.length; q++) {
					base1[q].setAttribute("data-string",getEditorData(base2[q]))
					partyApply(base1[q])
				}

				tar.classList.remove("change");
				consoleText("Applied Changes!");	
			}
		}
	}
	function getEditorData(base) {

		let data = []

		let columns = base.querySelectorAll(":scope > td");

		for (let q = 0; q < columns.length; q++) {
			let inputs = columns[q].querySelectorAll(":scope input");
			let selects = columns[q].querySelectorAll(":scope select");

			inputs = Array.prototype.slice.call(inputs)
			selects = Array.prototype.slice.call(selects)

			let selectors = [...(inputs)].concat([...(selects)]);

			let vals = []

			for (let s = 0; s < selectors.length; s++) {
				if (selectors[s].type == "checkbox") {
					vals.push(selectors[s].checked.toString())
				}
				else {
					vals.push(selectors[s].value.toString())
				}
			}
			if (vals.join(",").replaceAll(",","") != "") {
				data.push(columns[q].getAttribute("data")+":"+vals.join(","));
			}
		}
		data = data.join("|")
	
		return data;
	}


	base.className = "active";
}

function editorUpdateStyles() {
	let bases = document.querySelectorAll("#editor table tr");

	for (let i = 0; i < bases.length; i++) {
		let pok = bases[i].querySelector(":scope *[name='Pokémon'] select");
		let pokimg = bases[i].querySelector(":scope *[name='Pokémon'] img");
		let move = bases[i].querySelectorAll(":scope *[name='Move'] select");
		let otgen = bases[i].querySelectorAll(":scope *[name='Original Trainer Gender'] select");
		let gen = bases[i].querySelectorAll(":scope *[name='Gender'] select");
		let shiny = bases[i].querySelector(":scope *[name='Shiny'] input");

		if (bases[i].parentElement.tagName == "TBODY") {
			for (let q = 0; q < move.length; q++) {
				if (move[q].value != "") {
					let moveType = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],move[q].value);
					if (moveType != undefined) {
						move[q].style.color = "var(--type"+moveType+")";
					}
					else {
						move[q].style.removeProperty("color");
					}
				}
				else {
					move[q].style.removeProperty("color");
				}
			}

			for (let q = 0; q < gen.length; q++) {
				gen[q].setAttribute("data_style",gen[q].value);
			}
			for (let q = 0; q < otgen.length; q++) {
				otgen[q].setAttribute("data_style",otgen[q].value);
			}

			let path = [PATH_Pokémon_Box_Default_PNG,PATH_Pokémon_Box_Default_GIF];
			if (shiny != undefined && shiny.checked) {
				path = [PATH_Pokémon_Box_Shiny_PNG,PATH_Pokémon_Box_Shiny_GIF,PATH_Pokémon_Box_Default_PNG,PATH_Pokémon_Box_Default_GIF]
			}
			let games = [...(AllGames)];
			games.unshift(GameName)
			
			let med = getMedia(true,[getPokémonPath(getPokémonInt(pok.value))],path)
			
			pokimg.src = med
		}
	}



}


function editorDataToVal(data) {

	data = data.filter((item) => item != '');
	let row = document.querySelectorAll("#editor tbody tr");


	if (row.length == data.length) {
		for (let i = 0; i < row.length; i++) {
			let data_obj = dataStringToObj(data[i]);
			let keys = Object.keys(data_obj);
			for (let q = 0; q < keys.length; q++) {
				let input = row[i].querySelectorAll(":scope *[data='"+keys[q]+"'] input");
				let select = row[i].querySelectorAll(":scope *[data='"+keys[q]+"'] select");
				input = Array.prototype.slice.call(input)
				select = Array.prototype.slice.call(select)
				let selector = [...(input)].concat([...(select)]);
				let data_str = splitStr(data_obj[keys[q]],",");

				if (selector.length == data_str.length) {
					for (let r = 0; r < selector.length; r++) {
						let val = data_str[r];
						if (val != "") {
							if (selector[r].type == "checkbox") {
								selector[r].checked = JSON.parse(val)
							}
							else {
								selector[r].value = val;
							}
						}
					}
				}
		
				
			}
		}
	}

}

function editorWhitespaceVal() {
	let selector = document.querySelectorAll("#editor tbody select");

	for (let i = 0; i < selector.length; i++) {
		if (selector[i].value == "") {
			let el = selector[i].firstChild;
			if (el != undefined) {
				selector[i].value = el.value;
			}
		}
	}
}
function editorPopulateSpecific() {
	let base = document.querySelector("#editor tbody")

	let row = base.querySelectorAll(":scope tr");

	for (let i = 0; i < row.length; i++) {
		let pokémon = row[i].querySelector(":scope td[name='Pokémon'] select");
		let ability = row[i].querySelector(":scope td[name='Ability'] select");
		let move = row[i].querySelectorAll(":scope td[name='Move'] select");
		let item = row[i].querySelector(":scope td[name='Item'] select");
		let gender = row[i].querySelector(":scope td[name='Gender'] select");

		let int = getPokémonInt(pokémon.value);
		if (int != undefined && pokémon != undefined && pokémon.value != "") {

			if (gender != undefined) {
				let val = gender.value.toString();
				gender.innerHTML = "";

				let possible = getPossible(int,"Gender");
			
				possible.unshift("");

				for (let q = 0; q < possible.length; q++) {
					let option = document.createElement("option");
					option.value = possible[q];
					option.setAttribute("name",possible[q]);
					option.innerText = possible[q];
					gender.appendChild(option);
				}

				gender.value = val;
			}


			if (ability != undefined) {
				let val;
				let el1 = ability.querySelector(":scope *[value='"+ability.value+"']");
				if (el1 != undefined) {
					val = el1.getAttribute("name");
				}
				ability.innerHTML = "";

				let possible = getPossible(int,"Ability")
				possible.unshift("");

				for (let q = 0; q < possible.length; q++) {
					if (possible[q] != undefined) {
						let option = document.createElement("option");
						option.value = possible[q];
						option.setAttribute("name",possible[q]);
						option.innerText = possible[q];
						ability.appendChild(option);

						if (q == 1) {
							option.setAttribute("name","Primary")
						}
						if (q == 2) {
							option.setAttribute("name","Secondary")
						}
						if (q == 3) {
							option.setAttribute("name","Hidden")
						}
					}
				}

				let el2 = ability.querySelector(":scope *[name='"+val+"']");
				if (el2 != undefined) {
					ability.value = el2.value;
				}
			}
			
			if (move.length > 0) {
				let possible = getPossible(int,"Move");
				possible.unshift("");

				for (let m = 0; m < move.length; m++) {
					let x = m+1;
					let val = move[m].value.toString();
					move[m].innerHTML = "";

		
				
					for (let q = 0; q < possible.length; q++) {
						let possible_str = possible[q];
						if (possible_str == "") {
							possible_str = "Move #"+x;
						}
		
						let option = document.createElement("option");
						option.value = possible_str;
						option.setAttribute("name",possible[q]);
						option.innerText = possible_str;
						move[m].appendChild(option);
						
					}
					move[m].value = val;
				}
			}
			

			if (item != undefined) {
				let val = item.value.toString();
				item.innerHTML = "";

				let possible = getPossible(int,"Item");
				possible.unshift("");
			
				for (let q = 0; q < possible.length; q++) {
					let option = document.createElement("option");
					option.value = possible[q];
					option.setAttribute("name",possible[q]);
					option.innerText = possible[q];
					item.appendChild(option);
				}
				
				item.value = val;
			}
			
		}
	}
}


function getPossible(i,type) {


	let res = [];
	if (type == "Item") {
        let items = [];
		let arr = finaldata["Items"]["Reference"].map(el => el["Pocket"] == "Berries" ? {...el, ["Pocket"]: "a"} : el).map(el => el["Pocket"] == "Items" || el["Pocket"] == "Other Items"  ? {...el, ["Pocket"]: "b"} : el).map(el => el["Pocket"] != "a" && el["Pocket"] != "b" ? {...el, ["Pocket"]: "c"} : el);

        items = sortObjectArray(arr,"Pocket",true);
	
	
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
							res.push(items[q]["Item"])
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
			for (let q = 0; q < items.length; q++) {
				if (getApplicable(items[q]["Game"])) {
					if (items[q]["Item"] != undefined) {
						if (!notreq.includes(items[q]["Item"])) {
							res.push(items[q]["Item"])
						}
					}
				}
			}
		}
		else {
			for (let q = 0; q < items.length; q++) {
				if (getApplicable(items[q]["Game"])) {
					if (items[q]["Item"] != undefined) {
						res.push(items[q]["Item"])
					}
				}
			}
		}
	}
	else if (type == "Move") {
		res = returnMoveSet(i,"onlymoves,noduplicate");
	}
	else if (type == "Ability") {
		res = returnData(i,"Ability","");
	}
	else if (type == "Gender") {
		let tempArr = returnData(i,"Gender Ratio","undefined");

		if (getPokémonName(i).includes("Male")) {
			res = [...(["♂"])];
		}
		else if (getPokémonName(i).includes("Female")) {
			res = [...(["♀"])];
		}
		else {
			if (tempArr[0] == "0" && tempArr[1] == "0") {
				res = [...(["☿"])];
			}
			else if (tempArr[0] == "0") {
				res = [...(["♀"])];
			}
			else if (tempArr[1] == "0") {
				res = [...(["♂"])];
			}
			else {
				res = [...(["♂","♀"])];
			}
		}

	}
	return res;
}

function inputPad(int) {
	let tar = event.target;
	let str = "" + tar.value;
	let pad = ""
	for (let i = 0; i < int; i++) {
		pad += "0".toString();
	}
	str = str.toString();
	pad = pad.toString();


	
	let res = pad.substring(0, pad.length - str.length) + str;
	tar.value = res;
}


function navSelector() {
	let val = (this.value).toLowerCase();
    let navContents = document.querySelectorAll('#contain > div');
    let navContent = document.querySelectorAll('#contain > div[value="'+val+'"]');

	let mapOuter = document.querySelector("#contain > div#map > section[name='content'] > *[name='map'] > div > div > div");
	let mapImg = mapOuter.querySelector(":scope img[usemap]");

	let itemOuter = document.querySelector("#contain div#item > section[name='sidebar'] > * > div:first-child > div");
	let itemImg = itemOuter.querySelector(":scope img[usemap]");


    for(let u = 0; u < navContents.length; u++) {
        navContents[u].style.display = "none";
    }
    for(let u = 0; u < navContent.length; u++) {
        navContent[u].style.display = "block";
    }

	if (this.value == "Map") {
		if (document.querySelectorAll("#contain > div#map ol input:checked").length == 0) {
			if (mapImg.naturalWidth == 0) {
				mapImg.addEventListener("load", event => {
					mapifyMap(mapOuter);
				});
			}
			else {
				mapifyMap(mapOuter);
			}
			document.querySelector("#contain > div#map ol input:first-child").click();
		}
		
	}
	if (this.value == "Items") {
		if (document.querySelectorAll("#contain > div#item ol input:checked").length == 0) {
			if (itemImg.naturalWidth == 0) {
				itemImg.addEventListener("load", event => {
					mapifyMap(itemOuter);
				});
			}
			else {
				mapifyMap(itemOuter);
			}
			document.querySelector("#contain > div#item ol input:first-child").click();
		}
	}


}

