let create_move = function() {
	let moveOuter = document.createElement("div");
	let moveSectionList = document.createElement("section");
	let moveSectionListOptionsTitleOuter = document.createElement("div");
	let moveSectionListOptionsSearchOuter = document.createElement("div");
	let moveSectionListOptionsSearch = document.createElement("input");
	let moveSectionListOptionsOuter = document.createElement("div");
	let moveSectionListOptions = document.createElement("ol");
	let moveSectionHeader = document.createElement("section");
	let moveSectionHeaderTitle = document.createElement("span");
	let moveSectionHeaderTitleID = document.createElement("h4");
	let moveSectionHeaderTitleName = document.createElement("h3");
	let moveSectionHeaderDebut = document.createElement("span");
	let moveSectionHeaderDebutText = document.createElement("h5");
	let moveSectionContent = document.createElement("section");
	let moveSectionContentDescription = document.createElement("div");
	let moveSectionSidebar = document.createElement("section");
	moveOuter.setAttribute("id", "move");
	moveOuter.setAttribute("value","moves");
	moveSectionContentDescription.setAttribute("name","description");


	moveSectionListOptionsSearch.setAttribute("type","search");
	moveSectionListOptionsSearch.setAttribute("name","move_search");
	moveSectionListOptionsSearch.setAttribute("placeholder", "Search Moves...");
	moveSectionListOptionsSearch.setAttribute("onfocus", "this.placeholder=''");
	moveSectionListOptionsSearch.setAttribute("onblur", "this.placeholder='Search Moves...'");
	moveSectionListOptionsSearch.setAttribute("autocomplete", "off");
	moveSectionHeaderTitleID.innerText = "#";
	moveSectionHeaderTitleName.innerText = "-";
	moveSectionHeaderDebutText.innerText = "-";
	document.querySelector("#contain").appendChild(moveOuter);
	moveOuter.appendChild(moveSectionList);
	moveSectionList.appendChild(moveSectionListOptionsTitleOuter);
	moveSectionListOptionsTitleOuter.appendChild(moveSectionListOptionsSearchOuter);
	moveSectionListOptionsSearchOuter.appendChild(moveSectionListOptionsSearch);
	moveSectionList.appendChild(moveSectionListOptionsOuter);
	moveSectionListOptionsOuter.appendChild(moveSectionListOptions);
	moveOuter.appendChild(moveSectionHeader);
	moveSectionHeader.appendChild(moveSectionHeaderTitle);
	moveSectionHeaderTitle.appendChild(moveSectionHeaderTitleID);
	moveSectionHeaderTitle.appendChild(moveSectionHeaderTitleName);
	moveSectionHeader.appendChild(moveSectionHeaderDebut);
	moveSectionHeaderDebut.appendChild(moveSectionHeaderDebutText);
	moveOuter.appendChild(moveSectionContent);
	moveSectionContent.appendChild(moveSectionContentDescription);
	moveOuter.appendChild(moveSectionSidebar);

	moveSectionList.setAttribute("name","list");
	moveSectionHeader.setAttribute("name","header");
	moveSectionContent.setAttribute("name","content");
	moveSectionSidebar.setAttribute("name","sidebar");

	moveSectionListOptionsSearch.addEventListener("input", function() {search("Move");});
	moveSectionListOptionsSearch.addEventListener("keyup", function() {search("Move");});

    let moveSectionHeaderGame = document.createElement("span");
    let moveSectionHeaderGameImage = document.createElement("img");
    moveSectionHeaderGameImage.src = get_directory({FirstMatch: true, File: ["Title"], Path: [path.Game.Title]})
    moveSectionHeaderGameImage.setAttribute("onerror","this.display='none'");
    moveSectionHeader.appendChild(moveSectionHeaderGame);
    moveSectionHeaderGame.appendChild(moveSectionHeaderGameImage);

	let moveSectionContentMenu = document.createElement("div");
	let moveSectionContentMenuLeft = document.createElement("div");
	let moveSectionContentMenuType = document.createElement("div");
	let moveSectionContentMenuTypeText = document.createElement("span");
	let moveSectionContentMenuTypeTextImg = document.createElement("img");
	let moveSectionContentMenuTypeTextText = document.createElement("h6");
	let moveSectionContentMenuTypeMove = document.createElement("span");
	let moveSectionContentMenuAttribute = document.createElement("div");
	let moveSectionContentMenuAttributePowerPoints = document.createElement("span");
	let moveSectionContentMenuAttributePowerPointsContent = document.createElement("span");
	let moveSectionContentMenuAttributePowerPointsTitle = document.createElement("h4");
	let moveSectionContentMenuAttributePowerPointsText = document.createElement("p");
	let moveSectionContentMenuAttributePower = document.createElement("span");
	let moveSectionContentMenuAttributePowerContent = document.createElement("span");
	let moveSectionContentMenuAttributePowerTitle = document.createElement("h4");
	let moveSectionContentMenuAttributePowerText = document.createElement("p");
	let moveSectionContentMenuAttributeAccuracy = document.createElement("span");
	let moveSectionContentMenuAttributeAccuracyContent = document.createElement("span");
	let moveSectionContentMenuAttributeAccuracyTitle = document.createElement("h4");
	let moveSectionContentMenuAttributeAccuracyText = document.createElement("p");
	let moveSectionContentMenuAttributePriority = document.createElement("span");
	let moveSectionContentMenuAttributePriorityContent = document.createElement("span");
	let moveSectionContentMenuAttributePriorityTitle = document.createElement("h4");
	let moveSectionContentMenuAttributePriorityText = document.createElement("p");
	let moveSectionContentMenuRight = document.createElement("div");
	let moveSectionContentMenuContact = document.createElement("div");
	let moveSectionContentMenuContactContent = document.createElement("span");
	let moveSectionContentMenuContactText = document.createElement("h5");
	moveSectionContentMenuAttributePowerPointsTitle.innerText = "PP";
	moveSectionContentMenuAttributePowerTitle.innerText = "Power";
	moveSectionContentMenuAttributeAccuracyTitle.innerText = "Accuracy";
	moveSectionContentMenuAttributePriorityTitle.innerText = "Priority";
	moveSectionContentMenu.setAttribute("name","menu");
	moveSectionContentMenuTypeText.setAttribute("name","type");
	moveSectionContentMenuTypeMove.setAttribute("name","category");
	moveSectionContentMenuAttributePowerPoints.setAttribute("name","pp");
	moveSectionContentMenuAttributePower.setAttribute("name","power");
	moveSectionContentMenuAttributeAccuracy.setAttribute("name","accuracy");
	moveSectionContentMenuAttributePriority.setAttribute("name","priority");

	moveSectionContent.appendChild(moveSectionContentMenu);
	moveSectionContentMenu.appendChild(moveSectionContentMenuLeft);
	moveSectionContentMenu.appendChild(moveSectionContentMenuRight);
	moveSectionContentMenuLeft.appendChild(moveSectionContentMenuType);
	moveSectionContentMenuType.appendChild(moveSectionContentMenuTypeText);
	moveSectionContentMenuTypeText.appendChild(moveSectionContentMenuTypeTextImg);
	moveSectionContentMenuTypeText.appendChild(moveSectionContentMenuTypeTextText);
	moveSectionContentMenuType.appendChild(moveSectionContentMenuTypeMove);
	moveSectionContentMenuLeft.appendChild(moveSectionContentMenuAttribute);

	moveSectionContentMenuAttribute.appendChild(moveSectionContentMenuAttributePowerPoints);
	moveSectionContentMenuAttributePowerPoints.appendChild(moveSectionContentMenuAttributePowerPointsContent);
	moveSectionContentMenuAttributePowerPointsContent.appendChild(moveSectionContentMenuAttributePowerPointsTitle);
	moveSectionContentMenuAttributePowerPointsContent.appendChild(moveSectionContentMenuAttributePowerPointsText);

	moveSectionContentMenuAttribute.appendChild(moveSectionContentMenuAttributePower);
	moveSectionContentMenuAttributePower.appendChild(moveSectionContentMenuAttributePowerContent);
	moveSectionContentMenuAttributePowerContent.appendChild(moveSectionContentMenuAttributePowerTitle);
	moveSectionContentMenuAttributePowerContent.appendChild(moveSectionContentMenuAttributePowerText);

	moveSectionContentMenuAttribute.appendChild(moveSectionContentMenuAttributeAccuracy);
	moveSectionContentMenuAttributeAccuracy.appendChild(moveSectionContentMenuAttributeAccuracyContent);
	moveSectionContentMenuAttributeAccuracyContent.appendChild(moveSectionContentMenuAttributeAccuracyTitle);
	moveSectionContentMenuAttributeAccuracyContent.appendChild(moveSectionContentMenuAttributeAccuracyText);

	moveSectionContentMenuAttribute.appendChild(moveSectionContentMenuAttributePriority);
	moveSectionContentMenuAttributePriority.appendChild(moveSectionContentMenuAttributePriorityContent);
	moveSectionContentMenuAttributePriorityContent.appendChild(moveSectionContentMenuAttributePriorityTitle);
	moveSectionContentMenuAttributePriorityContent.appendChild(moveSectionContentMenuAttributePriorityText);

	moveSectionContentMenuRight.appendChild(moveSectionContentMenuContact);
	moveSectionContentMenuContact.appendChild(moveSectionContentMenuContactContent);
	moveSectionContentMenuContactContent.appendChild(moveSectionContentMenuContactText);
	let moveSectionSidebarLearnset = document.createElement("div");
	moveSectionSidebar.appendChild(moveSectionSidebarLearnset);
	let moveSectionSidebarLearnsetTitle = document.createElement("div");
	let moveSectionSidebarLearnsetTitleText = document.createElement("h4");
	moveSectionSidebarLearnsetTitleText.innerHTML = "Learnset";
	moveSectionSidebarLearnset.appendChild(moveSectionSidebarLearnsetTitle);
	moveSectionSidebarLearnsetTitle.appendChild(moveSectionSidebarLearnsetTitleText);
	
	
	let moveSectionSidebarLearnsetUl = document.createElement("ul");
	moveSectionSidebarLearnset.appendChild(moveSectionSidebarLearnsetUl);
	let moveSectionSidebarLearnsetPartyBox = document.createElement("div");
	moveSectionSidebarLearnset.appendChild(moveSectionSidebarLearnsetPartyBox);


	let parbo = ["Party","Box"];
	for (let q = 0; q < parbo.length; q++) {
		let moveSectionSidebarLearnsetInput = document.createElement("input");
		let moveSectionSidebarLearnsetLabel = document.createElement("label");
		let moveSectionSidebarLearnsetText = document.createElement("h6");
		moveSectionSidebarLearnsetInput.setAttribute("type","checkbox");
		moveSectionSidebarLearnsetInput.setAttribute("id","move-learnset-partybox-"+q);
		moveSectionSidebarLearnsetInput.setAttribute("name","move-learnset-partybox");
		moveSectionSidebarLearnsetLabel.setAttribute("for","move-learnset-partybox-"+q);
		moveSectionSidebarLearnsetText.innerText = parbo[q];
		moveSectionSidebarLearnsetLabel.title = "Show results from "+parbo[q];
		moveSectionSidebarLearnsetPartyBox.appendChild(moveSectionSidebarLearnsetInput);
		moveSectionSidebarLearnsetPartyBox.appendChild(moveSectionSidebarLearnsetLabel);
		moveSectionSidebarLearnsetLabel.appendChild(moveSectionSidebarLearnsetText);
		moveSectionSidebarLearnsetInput.addEventListener("change",movePartyBoxLearnset);
	}


	let firstmoveiteration;
	for (let q = 0; q < finaldata["Moves"]["Overview"].length; q++) {
		if (finaldata["Moves"]["Overview"][q]["Active"] == "true") {
			let moveSectionListOptionsInput = document.createElement("input");
			let moveSectionListOptionsLabel = document.createElement("label");
			let moveSectionListOptionsText = document.createElement("h5");
			moveSectionListOptionsInput.setAttribute("type", "radio");
			moveSectionListOptionsInput.setAttribute("name", "move-options");
			moveSectionListOptionsInput.setAttribute("id", "move-options-"+q);
			moveSectionListOptionsInput.setAttribute("autocomplete", "off");
			moveSectionListOptionsInput.value = q;
			moveSectionListOptionsLabel.setAttribute("for", "move-options-"+q);
			moveSectionListOptionsLabel.setAttribute("type","medium");
			if (finaldata["Moves"]["Overview"][q]["Move"] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-name", finaldata["Moves"]["Overview"][q]["Move"].toLowerCase());
				moveSectionListOptionsLabel.setAttribute("data-title", finaldata["Moves"]["Overview"][q]["Move"].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-name", "none");
				moveSectionListOptionsLabel.setAttribute("data-title", "none");
			}
			/*
			let moveset = returnMoveLearnset(finaldata["Moves"]["Overview"][q]["Move"],"");
			if (moveset.length > 0) {
				moveSectionListOptionsLabel.setAttribute("data-search-learnset", moveset.join(",").toLowerCase());
			}
			else {
				moveSectionListOptionsLabel.setAttribute("data-search-learnset", "none");
			}
			*/

			if (finaldata["Moves"]["Priority"][q]["Priority"] != undefined) {
				
				if (finaldata["Moves"]["Priority"][q]["Priority"].includes("-")) {
					moveSectionListOptionsLabel.setAttribute("data-search-priority", "-"+finaldata["Moves"]["Priority"][q]["Priority"].replaceAll("-",""));
				}
				else if (finaldata["Moves"]["Priority"][q]["Priority"].includes("+")) {
					moveSectionListOptionsLabel.setAttribute("data-search-priority", "+"+finaldata["Moves"]["Priority"][q]["Priority"].replaceAll("+",""));
				}
				else {
					moveSectionListOptionsLabel.setAttribute("data-search-priority", finaldata["Moves"]["Priority"][q]["Priority"]);
				}
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-priority", "none");
			}

			if (finaldata["Moves"]["Type"][q][["Type"]] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-type", finaldata["Moves"]["Type"][q][["Type"]].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-type", "none");
			}
			if (finaldata["Moves"]["Category"][q][["Category"]] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-category", finaldata["Moves"]["Category"][q][["Category"]].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-category", "none");
			}
			if (finaldata["Moves"]["PP"][q][["Min"]] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-pp", finaldata["Moves"]["PP"][q][["Min"]].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-pp", "none");
			}
			if (finaldata["Moves"]["Power"][q]["Power"] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-power", finaldata["Moves"]["Power"][q]["Power"].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-power", "none");
			}
			if (finaldata["Moves"]["Accuracy"][q]["Accuracy"] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-accuracy", finaldata["Moves"]["Accuracy"][q]["Accuracy"].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-accuracy", "none");
			}
	

			if (finaldata["Moves"]["Other Moves"][q]["Contact"] == "Makes contact") {
				moveSectionListOptionsLabel.setAttribute("data-search-contact", "y");
			} else if (finaldata["Moves"]["Other Moves"][q]["Contact"] == "Does not make contact") {
				moveSectionListOptionsLabel.setAttribute("data-search-contact", "n");
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-contact", "none");
			}

			if (getTutorData(finaldata["Moves"]["Overview"][q]["Move"],"Move").length > 0) {
				let tutors = getTutorData(finaldata["Moves"]["Overview"][q]["Move"],"Move");
				let res = [];
				for (y = 0; y < tutors.length; y++) {
					res.push(tutors[y]["Location"].toLowerCase())
				}
				moveSectionListOptionsLabel.setAttribute("data-search-tutor", res.join(","));
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-tutor", "none");
			}
			/*
			if (finaldata["Moves"]["Machine"][q]["Machine"] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-machine", finaldata["Moves"]["Machine"][q]["Machine"].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-machine", "none");
			}
			*/
			
			moveSectionListOptionsText.innerText = finaldata["Moves"]["Overview"][q]["Move"];
			moveSectionListOptions.appendChild(moveSectionListOptionsInput);
			moveSectionListOptions.appendChild(moveSectionListOptionsLabel);
			moveSectionListOptionsLabel.appendChild(moveSectionListOptionsText);
			moveSectionListOptionsLabel.setAttribute("tabindex","1");
			moveSectionListOptionsLabel.addEventListener("keyup",function(event) {if (event.which === 13) {if (event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;moveOptionsSelector(event.target.previousElementSibling.value);}}});
			moveSectionListOptionsInput.addEventListener("change", moveOptionsSelector);

			if (firstmoveiteration != true) {
				firstmoveiteration = true;
				moveSectionListOptionsLabel.click();
			}
		}
	}

	moveSectionListOptionsSearch.title = searchOptionsTitle(moveSectionListOptions);

	let searchLis = document.querySelectorAll("#contain > div#move > section[name='list'] ol > label");
    searchMoveAttributes = [];
    for (q = 0; q < searchLis.length; q++) {
        for (u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchMoveAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchMoveAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }

    for (q = 0; q < searchMoveAttributes.length; q++) {
        searchMoveAttributes[q] = searchMoveAttributes[q].replaceAll("data-search-","")
    }

	function moveOptionsSelector(i) {
		if (this.value != undefined) {
			i = this.value;
		}
		
		moveSectionHeaderTitleName.innerText = finaldata["Moves"]["Overview"][i]["Move"];
		moveSectionHeaderTitleID.innerText = "#"+finaldata["Moves"]["ID"][i]["ID"];
		if (finaldata["Moves"]["ID"][i]["ID Type"] != undefined) {
			moveSectionHeaderTitleID.title = finaldata["Moves"]["ID"][i]["ID Type"]+" Index number";
		} else {
			moveSectionHeaderTitleID.title = "Index number";
		}
		//moveSectionHeaderDebutText.innerText = "Introduced in "+finaldata["Moves"]["Overview"][i]["Debut"].split("-")[0];

		moveSectionContentDescription.innerHTML = "";

		if (finaldata["Moves"]["Description"][i]["Description"] != undefined) {
			let text = document.createElement("p");
			text.innerText = finaldata["Moves"]["Description"][i]["Description"];
			moveSectionContentDescription.appendChild(text)
			moveSectionContentDescription.innerHTML += "<br>"
		}


		if (finaldata["Moves"]["Machine"][i]["Machine"] != undefined) {
			let text = document.createElement("p");
			text.innerHTML = finaldata["Moves"]["Overview"][i]["Move"]+" is <b type='invert' name='item' value='"+finaldata["Moves"]["Machine"][i]["Machine"]+"' onclick='dataRedirect()' function='dataRedirect'>"+finaldata["Moves"]["Machine"][i]["Machine"]+"</b>."
			moveSectionContentDescription.appendChild(text)
			moveSectionContentDescription.innerHTML += "<br>"
		}

		let tutor_data = getTutorData(finaldata["Moves"]["Overview"][i]["Move"],"Move");
		if (getTutorData(finaldata["Moves"]["Overview"][i]["Move"],"Move").length > 0) {
			let text = document.createElement("p");
			moveSectionContentDescription.appendChild(text)

			text.innerHTML = finaldata["Moves"]["Overview"][i]["Move"]+" can be taught by a Move Tutor in <b type='invert' name='map' value='"+getTutorData(finaldata["Moves"]["Overview"][i]["Move"],"Move")[0]["Location"]+"' onclick='dataRedirect()' function='dataRedirect'>"+getTutorData(finaldata["Moves"]["Overview"][i]["Move"],"Move")[0]["Location"]+"</b>."	

			if (tutor_data[0]["Location"].includes("Route")) {
				text.innerHTML = text.innerHTML.replaceAll("Move Tutor in ", "Move Tutor on ");
			}

			if (tutor_data[0]["Pokemon"] != undefined) {
				let poks = splitStr(tutor_data[0]["Pokemon"],",");
				let poks_list = [];
				for (let p = 0; p < poks.length; p++) {
					poks_list.push("<b type='invert' onclick='modalData()' function='modalData' value='"+getPokemonInt(poks[p])+"'>"+poks[p]+"</b>")
				}
				text.innerHTML = text.innerHTML.replaceAll(" can be taught by "," can be taught to "+poks_list.join(",").replace(/,([^,]*)$/, ', and $1').replaceAll(",",", ").replaceAll("  "," ")+" by ")
			}
			

			moveSectionContentDescription.innerHTML += "<br>"
		}




		let effect = [];

		for (let q = 0; q < finaldata["Moves"]["Effect"].length; q++) {
			if (get_applicable(finaldata["Moves"]["Effect"][q]["Game"])) {
				if (finaldata["Moves"]["Effect"][q]["Move"] == finaldata["Moves"]["Overview"][i]["Move"]) {
					effect.push(finaldata["Moves"]["Effect"][q]["Effect"])
				}
			}
		}


		if (effect.length > 0) {
			let text = document.createElement("h4");
			text.innerText = "Effect";
			moveSectionContentDescription.appendChild(text)
		}


		for (let q = 0; q < effect.length; q++) {
			let text = document.createElement("p");
			text.innerText = effect[q];
			moveSectionContentDescription.appendChild(text)
			if (q == effect.length - 1) {
				moveSectionContentDescription.innerHTML += "<br>"
			}
		}
		
	




		
	






		moveSectionContentMenuTypeTextImg.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='block'");
		moveSectionContentMenuTypeTextImg.src = get_directory({FirstMatch: true, File: [finaldata["Moves"]["Type"][i][["Type"]]], Path: [path.Type.Icon]});
		moveSectionContentMenuTypeTextImg.setAttribute("title", finaldata["Moves"]["Type"][i][["Type"]]);
		
		if (finaldata["Moves"]["Type"][i][["Type"]] == undefined) {
			moveSectionContentMenuTypeTextImg.style.display = "none";
			moveSectionContentMenuTypeTextText.style.display = "block";
		} else {
			moveSectionContentMenuTypeTextImg.style.display = "block";
			moveSectionContentMenuTypeTextText.style.display = "none";
		}
		moveSectionContentMenuTypeTextText.innerText = finaldata["Moves"]["Type"][i][["Type"]];
		moveSectionContentMenuTypeMove.innerHTML = ""

		let categories = splitStr(finaldata["Moves"]["Category"][i][["Category"]],",");

		for (let u = 0; u < categories.length; u++) {
			let moveSectionContentMenuTypeMoveImg = document.createElement("img");
			moveSectionContentMenuTypeMoveImg.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='block'");
			moveSectionContentMenuTypeMoveImg.src = get_directory({FirstMatch: true, File: [categories[u]], Path: [path.Move.Category]});
			moveSectionContentMenuTypeMoveImg.setAttribute("title", categories[u]);
			moveSectionContentMenuTypeMove.appendChild(moveSectionContentMenuTypeMoveImg);
			let moveSectionContentMenuTypeMoveText = document.createElement("h6");
			moveSectionContentMenuTypeMoveText.innerText = categories[u];
			moveSectionContentMenuTypeMove.appendChild(moveSectionContentMenuTypeMoveText);
			moveSectionContentMenuTypeMoveText.style.display = "none";
		}
		if (finaldata["Moves"]["PP"][i][["Min"]] == undefined) {
			moveSectionContentMenuAttributePowerPointsText.innerHTML = "–";
		} else if (finaldata["Moves"]["PP"][i][["Min"]] != undefined && finaldata["Moves"]["PP"][i]["Max"] == undefined) {
			moveSectionContentMenuAttributePowerPointsText.innerHTML = finaldata["Moves"]["PP"][i][["Min"]];
		} else {
			moveSectionContentMenuAttributePowerPointsText.innerHTML = finaldata["Moves"]["PP"][i][["Min"]]+" <span>(max. "+finaldata["Moves"]["PP"][i]["Max"]+")</span>";
		}
		if (finaldata["Moves"]["Power"][i]["Power"] == undefined) {
			moveSectionContentMenuAttributePowerText.innerText = "–";
		} else {
			moveSectionContentMenuAttributePowerText.innerText = finaldata["Moves"]["Power"][i]["Power"];
		}
		if (finaldata["Moves"]["Accuracy"][i]["Accuracy"] == undefined) {
			moveSectionContentMenuAttributeAccuracyText.innerText = "–";
		} else {
			moveSectionContentMenuAttributeAccuracyText.innerText = finaldata["Moves"]["Accuracy"][i]["Accuracy"];
		}
		if (finaldata["Moves"]["Priority"][i]["Priority"] == undefined) {
			moveSectionContentMenuAttributePriorityText.innerText = "–";
		} else {
			if (finaldata["Moves"]["Priority"][i]["Priority"] == "0" || finaldata["Moves"]["Priority"][i]["Priority"] == undefined) {
				moveSectionContentMenuAttributePriority.style.display = "none";
			}
			else {
				moveSectionContentMenuAttributePriority.style.removeProperty("display");
			}


			if (finaldata["Moves"]["Priority"][i]["Priority"].includes("-")) {
				moveSectionContentMenuAttributePriorityText.innerText = "-"+finaldata["Moves"]["Priority"][i]["Priority"].replaceAll("-","");
			}
			else if (finaldata["Moves"]["Priority"][i]["Priority"].includes("+")) {
				moveSectionContentMenuAttributePriorityText.innerText = "+"+finaldata["Moves"]["Priority"][i]["Priority"].replaceAll("+","");
			}
			else {
				moveSectionContentMenuAttributePriorityText.innerText = finaldata["Moves"]["Priority"][i]["Priority"];
			}
		}
		if (finaldata["Moves"]["Other Moves"][i]["Contact"] == "Makes contact") {
			moveSectionContentMenuContactText.innerHTML = "Makes contact";
		} else if (finaldata["Moves"]["Other Moves"][i]["Contact"] == "Does not make contact") {
			moveSectionContentMenuContactText.innerHTML = "Does not make contact";
		}
		if (finaldata["Moves"]["Other Moves"][i]["Contact"].includes("not") || finaldata["Moves"]["Other Moves"][i]["Contact"].includes("Not")) {
			moveSectionContentMenuContact.setAttribute("name", "negative");
		} else {
			moveSectionContentMenuContact.setAttribute("name", "positive");
		}

		moveSectionContentMenuRight.innerHTML = "";
		
		let othermove = [];

		if (config.Generation == 1) {
			othermove = ["Mirror Move", "Sound-Based", "Outside Battle"];
		}
		if (config.Generation == 2) {
			othermove = ["Protect", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
		}
		if (config.Generation >= 3 && config.Generation <= 4) {
			othermove = ["Protect", "Magic Coat", "Snatch", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
		}
		if (config.Generation >= 5 && config.Generation <= 8) {
			othermove = ["Protect", "Magic Coat/Magic Bounce", "Snatch", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
		}
		for (let u = 0; u < othermove.length; u++) {
			if (finaldata["Moves"]["Other Moves"][i][othermove[u]] != undefined) {
				let moveSectionContentMenuOther = document.createElement("div");
				let moveSectionContentMenuOtherContent = document.createElement("span");
				let moveSectionContentMenuOtherText = document.createElement("h5");

				moveSectionContentMenuOther.setAttribute("name",othermove[u].toLowerCase());
				for (let q = 0; q < othermove.length; q++) {
			
					if (finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Affected by "+othermove[q]) {

				
						moveSectionContentMenuOtherText.innerHTML = "Affected by ";

				
						moveSectionContentMenuOtherText.innerHTML += " <b>"+othermove[q]+"</b>";

						if (othermove[q] != "Outside Battle" && othermove[q] != "Sound-Based") {
							if (othermove[q] != "King's Rock") {
								moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("name","move");
							}
							else {
								moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("name","item");
							}
							moveSectionContentMenuOtherText.querySelector(":scope > b").addEventListener("click",dataRedirect);
							moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("function","dataRedirect");
							moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("type","invert");
						}
						
					} else if (finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Not affected by "+othermove[q]) {
			
						moveSectionContentMenuOtherText.innerHTML = "Not affected by";
						
					
							moveSectionContentMenuOtherText.innerHTML += " <b>"+othermove[q]+"</b>";

							if (othermove[q] != "Outside Battle" && othermove[q] != "Sound-Based") {
								if (othermove[q] != "King's Rock") {
									moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("name","move");
								}
								else {
									moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("name","item");
								}
								moveSectionContentMenuOtherText.querySelector(":scope > b").addEventListener("click",dataRedirect);
								moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("function","dataRedirect");
								moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("type","invert");
							}
						
					}
				}
				if (finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Usable outside of battle") {
					moveSectionContentMenuOtherText.innerHTML = "Usable outside of battle";
				} else if (finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Is a sound-based move") {
					moveSectionContentMenuOtherText.innerHTML = "Is a sound-based move";
				} else if (finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Affected by Magic Coat") {
					moveSectionContentMenuOtherText.innerHTML = "Affected by <b>Magic Coat</b>";
				} else if (finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Affected by Magic Coat and Magic Bounce") {
					moveSectionContentMenuOtherText.innerHTML = "Affected by <b>Magic Coat</b> and <b>Magic Bounce</b>";

					let applicables = moveSectionContentMenuOtherText.querySelectorAll(":scope > b")
					for (let r = 0; r < applicables.length; r++) {
						applicables[r].setAttribute("name","move");
						applicables[r].addEventListener("click",dataRedirect);
						applicables[r].setAttribute("function","dataRedirect");
					}
				} else if (finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Not affected by Magic Coat") {
					moveSectionContentMenuOtherText.innerHTML = "Not affected by <b>Magic Coat</b>";
					moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("name","move");
					moveSectionContentMenuOtherText.querySelector(":scope > b").addEventListener("click",dataRedirect);
					moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("function","dataRedirect");
					moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("type","invert");
				}
				else if (finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Not affected by Magic Coat or Magic Bounce") { 
					moveSectionContentMenuOtherText.innerHTML = "Not affected by <b>Magic Coat</b> or <b>Magic Bounce</b>";

					let applicables = moveSectionContentMenuOtherText.querySelectorAll(":scope > b")
					for (let r = 0; r < applicables.length; r++) {
						if (r == 0) {
							applicables[r].setAttribute("name","move");
						}
						else {
							applicables[r].setAttribute("name","ability");
						}
						applicables[r].addEventListener("click",dataRedirect);
						applicables[r].setAttribute("function","dataRedirect");
						applicables[r].setAttribute("type","invert");
					}
				}
				moveSectionContentMenuRight.appendChild(moveSectionContentMenuOther);
				moveSectionContentMenuOther.appendChild(moveSectionContentMenuOtherContent);
				moveSectionContentMenuOtherContent.appendChild(moveSectionContentMenuOtherText);
				if (finaldata["Moves"]["Other Moves"][i][othermove[u]].includes("not") || finaldata["Moves"]["Other Moves"][i][othermove[u]].includes("Not")) {
					moveSectionContentMenuOtherContent.setAttribute("name", "negative");
				} else {
					moveSectionContentMenuOtherContent.setAttribute("name", "positive");
				}
			}
		}
		
	
		moveSectionSidebarLearnsetUl.innerHTML = ""
	
		let learnsetlevelarr = [];
		for (let q = 0; q < finaldata["Pokemon Learnset"]["Level Up"].length; q++) {
			if (finaldata["Pokemon Learnset"]["Level Up"][q]["Move"] == finaldata["Moves"]["Overview"][i]["Move"] && get_applicable(finaldata["Pokemon Learnset"]["Level Up"][q]["Game"])) {
				let obj = new Object();
				obj["Pokemon"] = finaldata["Pokemon Learnset"]["Level Up"][q]["Pokemon"];
				obj["Factor"] = finaldata["Pokemon Learnset"]["Level Up"][q]["Factor"];
				learnsetlevelarr.push(obj);
			}
		}
		learnsetlevelarr = learnsetlevelarr.filter(
			(value) => Object.keys(value).length !== 0);
		learnsetlevelarr.sort(function(a, b) {
			return parseInt(a["Factor"]) - parseInt(b["Factor"]);
		});

		for (let q = 0; q < learnsetlevelarr.length; q++) {
			let moveSectionSidebarLearnsetLi = document.createElement("li");
			moveSectionSidebarLearnsetUl.appendChild(moveSectionSidebarLearnsetLi);
			let moveSectionSidebarLearnsetLiImgOuter = document.createElement("div");
			let moveSectionSidebarLearnsetLiImg = document.createElement("img");
			let moveSectionSidebarLearnsetLiText = document.createElement("small");
			let moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
			let moveSectionSidebarLearnsetLiSource = document.createElement("h5");
			moveSectionSidebarLearnsetLiSourceOuter.title = "Level Up";
			moveSectionSidebarLearnsetLiSource.innerHTML = "Level Up: "+learnsetlevelarr[q]["Factor"];
			moveSectionSidebarLearnsetLiText.innerText = learnsetlevelarr[q]["Pokemon"];
			moveSectionSidebarLearnsetLiImg.src = get_directory({FirstMatch: true, File: [getPokemonPath(getPokemonInt(learnsetlevelarr[q]["Pokemon"]))], Path: [path.Pokemon.Box.Default.PNG]});
			moveSectionSidebarLearnsetLiImg.title = learnsetlevelarr[q]["Pokemon"];
			moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiImgOuter);
			moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiImg);
			moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiText);
			moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
			moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSource);

			moveSectionSidebarLearnsetLiImgOuter.setAttribute("value",getPokemonInt(learnsetlevelarr[q]["Pokemon"]));
			moveSectionSidebarLearnsetLiImgOuter.addEventListener("click", modalData);
			moveSectionSidebarLearnsetLiImgOuter.setAttribute("function","modalData");
		}
		for (let q = 0; q < finaldata["Pokemon Learnset"]["Evolution"].length; q++) {
			if (finaldata["Pokemon Learnset"]["Evolution"][q]["Move"] == finaldata["Moves"]["Overview"][i]["Move"] && get_applicable(finaldata["Pokemon Learnset"]["Evolution"][q]["Game"])) {
				let moveSectionSidebarLearnsetLi = document.createElement("li");
				moveSectionSidebarLearnsetUl.appendChild(moveSectionSidebarLearnsetLi);
				let moveSectionSidebarLearnsetLiImgOuter = document.createElement("div");
				let moveSectionSidebarLearnsetLiImg = document.createElement("img");
				let moveSectionSidebarLearnsetLiText = document.createElement("small");
				let moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
				let moveSectionSidebarLearnsetLiSourceText = document.createElement("h6");
				let moveSectionSidebarLearnsetLiSourceImgOuter = document.createElement("span");
				moveSectionSidebarLearnsetLiSourceOuter.title = "Prior Evolution";
				moveSectionSidebarLearnsetLiSourceText.innerText = "Prior Evolution:";
				if (finaldata["Pokemon Learnset"]["Evolution"][q]["Evolution"].includes(",")) {
					for (let r = 0; r < finaldata["Pokemon Learnset"]["Evolution"][q]["Evolution"].split(",").length; r++) {
						let moveSectionSidebarLearnsetLiSource = document.createElement("img");
						moveSectionSidebarLearnsetLiSource.src = get_directory({FirstMatch: true, File: [getPokemonPath(getPokemonInt(finaldata["Pokemon Learnset"]["Evolution"][q]["Evolution"].split(",")[r]))], Path: [path.Pokemon.Box.Default.PNG]});
						moveSectionSidebarLearnsetLiSource.title = finaldata["Pokemon Learnset"]["Evolution"][q]["Evolution"].split(",")[r];
						moveSectionSidebarLearnsetLiSourceImgOuter.appendChild(moveSectionSidebarLearnsetLiSource);

						moveSectionSidebarLearnsetLiSource.setAttribute("value",getPokemonInt(finaldata["Pokemon Learnset"]["Evolution"][q]["Evolution"].split(",")[r]));
						moveSectionSidebarLearnsetLiSource.addEventListener("click", modalData);
						moveSectionSidebarLearnsetLiSource.setAttribute("function","modalData");
					}
				} else if (finaldata["Pokemon Learnset"]["Evolution"][q]["Evolution"] == "None") {
					moveSectionSidebarLearnsetLiSourceImgOuter.innerText = finaldata["Pokemon Learnset"]["Evolution"][q]["Evolution"];
				} else {
					let moveSectionSidebarLearnsetLiSource = document.createElement("img");
					moveSectionSidebarLearnsetLiSource.src = get_directory({FirstMatch: true, File: [getPokemonPath(getPokemonInt(finaldata["Pokemon Learnset"]["Evolution"][q]["Evolution"]))], Path: [path.Pokemon.Box.Default.PNG]});
					moveSectionSidebarLearnsetLiSource.title = finaldata["Pokemon Learnset"]["Evolution"][q]["Evolution"];
					moveSectionSidebarLearnsetLiSourceImgOuter.appendChild(moveSectionSidebarLearnsetLiSource);

					moveSectionSidebarLearnsetLiSource.setAttribute("value",getPokemonInt(finaldata["Pokemon Learnset"]["Evolution"][q]["Evolution"]));
					moveSectionSidebarLearnsetLiSource.addEventListener("click", modalData);
					moveSectionSidebarLearnsetLiSource.setAttribute("function","modalData");
				}
		
				moveSectionSidebarLearnsetLiImg.src = get_directory({FirstMatch: true, File: [getPokemonPath(getPokemonInt(finaldata["Pokemon Learnset"]["Evolution"][q]["Pokemon"]))], Path: [path.Pokemon.Box.Default.PNG]});
				moveSectionSidebarLearnsetLiImg.title = finaldata["Pokemon Learnset"]["Evolution"][q]["Pokemon"];
				moveSectionSidebarLearnsetLiText.innerText = finaldata["Pokemon Learnset"]["Evolution"][q]["Pokemon"];				
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiImgOuter);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiImg);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiText);
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
				moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceText);
				moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceImgOuter);

				moveSectionSidebarLearnsetLiImgOuter.setAttribute("value",getPokemonInt(finaldata["Pokemon Learnset"]["Evolution"][q]["Pokemon"]));
				moveSectionSidebarLearnsetLiImgOuter.addEventListener("click", modalData);
				moveSectionSidebarLearnsetLiImgOuter.setAttribute("function","modalData");

			}
		}
		for (let q = 0; q < finaldata["Pokemon Learnset"]["Machine"].length; q++) {
			if (finaldata["Pokemon Learnset"]["Machine"][q]["Move"] == finaldata["Moves"]["Overview"][i]["Move"] && get_applicable(finaldata["Pokemon Learnset"]["Machine"][q]["Game"])) {
				let moveSectionSidebarLearnsetLi = document.createElement("li");
				moveSectionSidebarLearnsetUl.appendChild(moveSectionSidebarLearnsetLi);
				let moveSectionSidebarLearnsetLiImgOuter = document.createElement("div");
				let moveSectionSidebarLearnsetLiImg = document.createElement("img");
				let moveSectionSidebarLearnsetLiText = document.createElement("small");
				let moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
				let moveSectionSidebarLearnsetLiSource = document.createElement("h5");
				if (finaldata["Pokemon Learnset"]["Machine"][q]["Machine"].includes("HM")) {
					moveSectionSidebarLearnsetLiSource.innerHTML = "<b>"+finaldata["Pokemon Learnset"]["Machine"][q]["Machine"]+"</b>";
					moveSectionSidebarLearnsetLiSource.setAttribute("name","hm");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").setAttribute("name","item");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").addEventListener("click",dataRedirect);
					moveSectionSidebarLearnsetLiSource.setAttribute("function","dataRedirect");
				} else if (finaldata["Pokemon Learnset"]["Machine"][q]["Machine"].includes("TM")) {
					moveSectionSidebarLearnsetLiSource.innerHTML = "<b>"+finaldata["Pokemon Learnset"]["Machine"][q]["Machine"]+"</b>";
					moveSectionSidebarLearnsetLiSource.setAttribute("name","tm");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").setAttribute("name","item");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").addEventListener("click",dataRedirect);
					moveSectionSidebarLearnsetLiSource.setAttribute("function","dataRedirect");
				} else if (finaldata["Pokemon Learnset"]["Machine"][q]["Machine"].includes("TR")) {
					moveSectionSidebarLearnsetLiSource.innerHTML = "<b>"+finaldata["Pokemon Learnset"]["Machine"][q]["Machine"]+"</b>";
					moveSectionSidebarLearnsetLiSource.setAttribute("name","tr");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").setAttribute("name","item");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").addEventListener("click",dataRedirect);
					moveSectionSidebarLearnsetLiSource.setAttribute("function","dataRedirect");
				}
				

				moveSectionSidebarLearnsetLiImg.src = get_directory({FirstMatch: true, File: [getPokemonPath(getPokemonInt(finaldata["Pokemon Learnset"]["Machine"][q]["Pokemon"]))], Path: [path.Pokemon.Box.Default.PNG]});
				moveSectionSidebarLearnsetLiImg.title = finaldata["Pokemon Learnset"]["Machine"][q]["Pokemon"];
				moveSectionSidebarLearnsetLiText.innerText = finaldata["Pokemon Learnset"]["Machine"][q]["Pokemon"];
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiImgOuter);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiImg);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiText);
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
				moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSource);

				moveSectionSidebarLearnsetLiImgOuter.setAttribute("value",getPokemonInt(finaldata["Pokemon Learnset"]["Machine"][q]["Pokemon"]));
				moveSectionSidebarLearnsetLiImgOuter.addEventListener("click", modalData);
				moveSectionSidebarLearnsetLiImgOuter.setAttribute("function","modalData");

			}
		}
		for (let q = 0; q < finaldata["Pokemon Learnset"]["Tutor"].length; q++) {
			if (finaldata["Pokemon Learnset"]["Tutor"][q]["Move"] == finaldata["Moves"]["Overview"][i]["Move"] && get_applicable(finaldata["Pokemon Learnset"]["Tutor"][q]["Game"])) {
				let tutorData = getTutorData(finaldata["Pokemon Learnset"]["Tutor"][q]["Move"],"Move");
				
				let moveSectionSidebarLearnsetLi = document.createElement("li");
				moveSectionSidebarLearnsetUl.appendChild(moveSectionSidebarLearnsetLi);
				let moveSectionSidebarLearnsetLiImgOuter = document.createElement("div");
				let moveSectionSidebarLearnsetLiImg = document.createElement("img");
				let moveSectionSidebarLearnsetLiText = document.createElement("small");

				moveSectionSidebarLearnsetLiImg.src = get_directory({FirstMatch: true, File: [getPokemonPath(getPokemonInt(finaldata["Pokemon Learnset"]["Tutor"][q]["Pokemon"]))], Path: [path.Pokemon.Box.Default.PNG]});
				moveSectionSidebarLearnsetLiImg.title = finaldata["Pokemon Learnset"]["Tutor"][q]["Pokemon"];
				moveSectionSidebarLearnsetLiText.innerText = finaldata["Pokemon Learnset"]["Tutor"][q]["Pokemon"];
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiImgOuter);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiImg);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiText);

				if (tutorData.length > 0) {

					let moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
					let moveSectionSidebarLearnsetLiSourceTitle = document.createElement("h5");
					let moveSectionSidebarLearnsetLiSourceWrap = document.createElement("b");
					let moveSectionSidebarLearnsetLiSourceText = document.createElement("small");

					moveSectionSidebarLearnsetLiSourceTitle.innerText = "Move Tutor";
					moveSectionSidebarLearnsetLiSourceText.innerText = tutorData[0]["Location"];
					moveSectionSidebarLearnsetLiSourceWrap.setAttribute("name","map");
					moveSectionSidebarLearnsetLiSourceWrap.setAttribute("value",tutorData[0]["Location"])
					moveSectionSidebarLearnsetLiSourceWrap.addEventListener("click",dataRedirect);
					moveSectionSidebarLearnsetLiSourceWrap.setAttribute("function","dataRedirect");

					moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
					moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceTitle);
					moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceWrap);
					moveSectionSidebarLearnsetLiSourceWrap.appendChild(moveSectionSidebarLearnsetLiSourceText);
				}
				else {
					let moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
					let moveSectionSidebarLearnsetLiSourceTitle = document.createElement("h5");
					moveSectionSidebarLearnsetLiSourceTitle.innerText = "Move Tutor";
					moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
					moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceTitle);
				}

				moveSectionSidebarLearnsetLiImgOuter.setAttribute("value",getPokemonInt(finaldata["Pokemon Learnset"]["Tutor"][q]["Pokemon"]));
				moveSectionSidebarLearnsetLiImgOuter.addEventListener("click", modalData);
				moveSectionSidebarLearnsetLiImgOuter.setAttribute("function","modalData");

			}
		}
		for (let q = 0; q < finaldata["Pokemon Learnset"]["Breeding"].length; q++) {
			if (finaldata["Pokemon Learnset"]["Breeding"][q]["Move"] == finaldata["Moves"]["Overview"][i]["Move"] && get_applicable(finaldata["Pokemon Learnset"]["Breeding"][q]["Game"])) {
				let moveSectionSidebarLearnsetLi = document.createElement("li");
				moveSectionSidebarLearnsetUl.appendChild(moveSectionSidebarLearnsetLi);
				let moveSectionSidebarLearnsetLiImgOuter = document.createElement("div");
				let moveSectionSidebarLearnsetLiImg = document.createElement("img");
				let moveSectionSidebarLearnsetLiText = document.createElement("small");
				let moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
				let moveSectionSidebarLearnsetLiSourceText = document.createElement("h5");
				let moveSectionSidebarLearnsetLiSourceImgOuter = document.createElement("span");
				moveSectionSidebarLearnsetLiSourceOuter.title = "Parent";
				moveSectionSidebarLearnsetLiSourceText.innerText = "Parent:";
				if (finaldata["Pokemon Learnset"]["Breeding"][q]["Parent"].includes(",")) {
					for (let r = 0; r < finaldata["Pokemon Learnset"]["Breeding"][q]["Parent"].split(",").length; r++) {
						let moveSectionSidebarLearnsetLiSource = document.createElement("img");
						moveSectionSidebarLearnsetLiSource.src = get_directory({FirstMatch: true, File: [getPokemonPath(getPokemonInt(finaldata["Pokemon Learnset"]["Breeding"][q]["Parent"].split(",")[r]))], Path: [path.Pokemon.Box.Default.PNG]});

						moveSectionSidebarLearnsetLiSource.title = finaldata["Pokemon Learnset"]["Breeding"][q]["Parent"].split(",")[r];
						moveSectionSidebarLearnsetLiSourceImgOuter.appendChild(moveSectionSidebarLearnsetLiSource);

						moveSectionSidebarLearnsetLiSource.setAttribute("value",getPokemonInt(finaldata["Pokemon Learnset"]["Breeding"][q]["Parent"].split(",")[r]));
						moveSectionSidebarLearnsetLiSource.addEventListener("click", modalData);
						moveSectionSidebarLearnsetLiSource.setAttribute("function","modalData");
					}
				} else if (finaldata["Pokemon Learnset"]["Breeding"][q]["Parent"] == "None") {
					moveSectionSidebarLearnsetLiSourceImgOuter.innerText = finaldata["Pokemon Learnset"]["Breeding"][q]["Parent"];
				} else {
					let moveSectionSidebarLearnsetLiSource = document.createElement("img");
					moveSectionSidebarLearnsetLiSource.src = get_directory({FirstMatch: true, File: [getPokemonPath(getPokemonInt(finaldata["Pokemon Learnset"]["Breeding"][q]["Parent"]))], Path: [path.Pokemon.Box.Default.PNG]});
					moveSectionSidebarLearnsetLiSource.title = finaldata["Pokemon Learnset"]["Breeding"][q]["Parent"];
					moveSectionSidebarLearnsetLiSourceImgOuter.appendChild(moveSectionSidebarLearnsetLiSource);
				}

				moveSectionSidebarLearnsetLiImg.src = get_directory({FirstMatch: true, File: [getPokemonPath(getPokemonInt(finaldata["Pokemon Learnset"]["Breeding"][q]["Pokemon"]))], Path: [path.Pokemon.Box.Default.PNG]});


				moveSectionSidebarLearnsetLiImg.title = finaldata["Pokemon Learnset"]["Breeding"][q]["Pokemon"];
				moveSectionSidebarLearnsetLiText.innerText = finaldata["Pokemon Learnset"]["Breeding"][q]["Pokemon"];

				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiImgOuter);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiImg);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiText);
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
				moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceText);
				moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceImgOuter);

				moveSectionSidebarLearnsetLiImgOuter.setAttribute("value",getPokemonInt(finaldata["Pokemon Learnset"]["Breeding"][q]["Pokemon"]));
				moveSectionSidebarLearnsetLiImgOuter.addEventListener("click", modalData);
				moveSectionSidebarLearnsetLiImgOuter.setAttribute("function","modalData");
			}
		}

		let tempStr;
		if (moveLearnsetPB.length > 1) {
			tempStr = moveLearnsetPB.join(",");
		}
		else {
			tempStr = moveLearnsetPB[0];
		}
		moveLearnsetPartyBox(tempStr);
	}
};


