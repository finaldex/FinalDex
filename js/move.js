var createMove = function() {
	var moveOuter = document.createElement("div");
	var moveSectionList = document.createElement("section");
	var moveSectionListOptionsTitleOuter = document.createElement("div");
	var moveSectionListOptionsSearchOuter = document.createElement("div");
	var moveSectionListOptionsSearch = document.createElement("input");
	var moveSectionListOptionsSearchExit = document.createElement("span");
	var moveSectionListOptionsOuter = document.createElement("div");
	var moveSectionListOptions = document.createElement("ol");
	var moveSectionHeader = document.createElement("section");
	var moveSectionHeaderTitle = document.createElement("span");
	var moveSectionHeaderTitleID = document.createElement("h4");
	var moveSectionHeaderTitleName = document.createElement("h3");
	var moveSectionHeaderDebut = document.createElement("span");
	var moveSectionHeaderDebutText = document.createElement("h5");
	var moveSectionContent = document.createElement("section");
	var moveSectionContentDescription = document.createElement("div");
	var moveSectionSidebar = document.createElement("section");
	moveOuter.setAttribute("id", "move");
	moveOuter.setAttribute("value","moves");
	moveSectionContentDescription.setAttribute("name","description");


	moveSectionListOptionsSearch.setAttribute("type", "text");

	moveSectionListOptionsSearch.setAttribute("placeholder", "Search Moves...");
	moveSectionListOptionsSearch.setAttribute("onfocus", "this.placeholder=''");
	moveSectionListOptionsSearch.setAttribute("onblur", "this.placeholder='Search Moves...'");
	moveSectionListOptionsSearch.setAttribute("autocomplete", "off");
	moveSectionListOptionsSearchExit.setAttribute("name","exit");
	moveSectionHeaderTitleID.innerText = "#";
	moveSectionHeaderTitleName.innerText = "-";
	moveSectionHeaderDebutText.innerText = "-";
	document.querySelector("#contain").appendChild(moveOuter);
	moveOuter.appendChild(moveSectionList);
	moveSectionList.appendChild(moveSectionListOptionsTitleOuter);
	moveSectionListOptionsTitleOuter.appendChild(moveSectionListOptionsSearchOuter);
	moveSectionListOptionsSearchOuter.appendChild(moveSectionListOptionsSearchExit);
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

	moveSectionListOptionsSearch.addEventListener("keyup", function() {search("Move");});
	moveSectionListOptionsSearchExit.addEventListener("click", function() {exitSearch("Move");});

    var moveSectionHeaderGame = document.createElement("span");
    var moveSectionHeaderGameImage = document.createElement("img");
    moveSectionHeaderGameImage.src = "./media/Images/Misc/Title/Text/"+GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "")+".png";
    moveSectionHeaderGameImage.setAttribute("onerror","this.display='none'");
    moveSectionHeader.appendChild(moveSectionHeaderGame);
    moveSectionHeaderGame.appendChild(moveSectionHeaderGameImage);

	var moveSectionContentMenu = document.createElement("div");
	var moveSectionContentMenuLeft = document.createElement("div");
	var moveSectionContentMenuType = document.createElement("div");
	var moveSectionContentMenuTypeText = document.createElement("span");
	var moveSectionContentMenuTypeTextImg = document.createElement("img");
	var moveSectionContentMenuTypeTextText = document.createElement("h6");
	var moveSectionContentMenuTypeMove = document.createElement("span");
	var moveSectionContentMenuAttribute = document.createElement("div");
	var moveSectionContentMenuAttributePowerPoints = document.createElement("span");
	var moveSectionContentMenuAttributePowerPointsContent = document.createElement("span");
	var moveSectionContentMenuAttributePowerPointsTitle = document.createElement("h4");
	var moveSectionContentMenuAttributePowerPointsText = document.createElement("p");
	var moveSectionContentMenuAttributePower = document.createElement("span");
	var moveSectionContentMenuAttributePowerContent = document.createElement("span");
	var moveSectionContentMenuAttributePowerTitle = document.createElement("h4");
	var moveSectionContentMenuAttributePowerText = document.createElement("p");
	var moveSectionContentMenuAttributeAccuracy = document.createElement("span");
	var moveSectionContentMenuAttributeAccuracyContent = document.createElement("span");
	var moveSectionContentMenuAttributeAccuracyTitle = document.createElement("h4");
	var moveSectionContentMenuAttributeAccuracyText = document.createElement("p");
	var moveSectionContentMenuAttributePriority = document.createElement("span");
	var moveSectionContentMenuAttributePriorityContent = document.createElement("span");
	var moveSectionContentMenuAttributePriorityTitle = document.createElement("h4");
	var moveSectionContentMenuAttributePriorityText = document.createElement("p");
	var moveSectionContentMenuRight = document.createElement("div");
	var moveSectionContentMenuContact = document.createElement("div");
	var moveSectionContentMenuContactContent = document.createElement("span");
	var moveSectionContentMenuContactText = document.createElement("h5");
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
	var moveSectionSidebarLearnset = document.createElement("div");
	moveSectionSidebar.appendChild(moveSectionSidebarLearnset);
	var moveSectionSidebarLearnsetTitle = document.createElement("div");
	var moveSectionSidebarLearnsetTitleText = document.createElement("h4");
	moveSectionSidebarLearnsetTitleText.innerHTML = "Learnset";
	moveSectionSidebarLearnset.appendChild(moveSectionSidebarLearnsetTitle);
	moveSectionSidebarLearnsetTitle.appendChild(moveSectionSidebarLearnsetTitleText);
	
	
	var moveSectionSidebarLearnsetUl = document.createElement("ul");
	moveSectionSidebarLearnset.appendChild(moveSectionSidebarLearnsetUl);
	var moveSectionSidebarLearnsetPartyBox = document.createElement("div");
	moveSectionSidebarLearnset.appendChild(moveSectionSidebarLearnsetPartyBox);


	var parbo = ["Party","Box"];
	for(var q = 0; q < parbo.length; q++) {
		var moveSectionSidebarLearnsetInput = document.createElement("input");
		var moveSectionSidebarLearnsetLabel = document.createElement("label");
		var moveSectionSidebarLearnsetText = document.createElement("h6");
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


	var firstmoveiteration;
	for(var q = 0; q < finaldata["Moves"]["Reference"].length; q++) {
		if(finaldata["Moves"]["Reference"][q][JSONPath_MoveReference] == "true") {
			var moveSectionListOptionsInput = document.createElement("input");
			var moveSectionListOptionsLabel = document.createElement("label");
			var moveSectionListOptionsText = document.createElement("h5");
			moveSectionListOptionsInput.setAttribute("type", "radio");
			moveSectionListOptionsInput.setAttribute("name", "move-options");
			moveSectionListOptionsInput.setAttribute("id", "move-options-"+q);
			moveSectionListOptionsInput.setAttribute("autocomplete", "off");
			moveSectionListOptionsInput.value = q;
			moveSectionListOptionsLabel.setAttribute("for", "move-options-"+q);
			moveSectionListOptionsLabel.setAttribute("type","medium");
			if(finaldata["Moves"]["Reference"][q]["Name"+"_"+JSONPath_MoveName] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-name", finaldata["Moves"]["Reference"][q]["Name"+"_"+JSONPath_MoveName].toLowerCase());
				moveSectionListOptionsLabel.setAttribute("data-title", finaldata["Moves"]["Reference"][q]["Name"+"_"+JSONPath_MoveName].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-name", "none");
				moveSectionListOptionsLabel.setAttribute("data-title", "none");
			}
			/*
			var moveset = returnMoveLearnset(finaldata["Moves"]["Reference"][q]["Name"+"_"+JSONPath_MoveName],"");
			if (moveset.length > 0) {
				moveSectionListOptionsLabel.setAttribute("data-search-learnset", moveset.join(",").toLowerCase());
			}
			else {
				moveSectionListOptionsLabel.setAttribute("data-search-learnset", "none");
			}
			*/

			if(finaldata["Moves"]["Priority"][q]["Priority_"+JSONPath_MovePriority] != undefined) {
				
				if (finaldata["Moves"]["Priority"][q]["Priority_"+JSONPath_MovePriority].includes("-")) {
					moveSectionListOptionsLabel.setAttribute("data-search-priority", "-"+finaldata["Moves"]["Priority"][q]["Priority_"+JSONPath_MovePriority].replaceAll("-",""));
				}
				else if (finaldata["Moves"]["Priority"][q]["Priority_"+JSONPath_MovePriority].includes("+")) {
					moveSectionListOptionsLabel.setAttribute("data-search-priority", "+"+finaldata["Moves"]["Priority"][q]["Priority_"+JSONPath_MovePriority].replaceAll("+",""));
				}
				else {
					moveSectionListOptionsLabel.setAttribute("data-search-priority", finaldata["Moves"]["Priority"][q]["Priority_"+JSONPath_MovePriority]);
				}
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-priority", "none");
			}

			if(finaldata["Moves"]["Type"][q]["Type_"+JSONPath_MoveType] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-type", finaldata["Moves"]["Type"][q]["Type_"+JSONPath_MoveType].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-type", "none");
			}
			if(finaldata["Moves"]["Category"][q]["Category_"+JSONPath_MoveCategory] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-category", finaldata["Moves"]["Category"][q]["Category_"+JSONPath_MoveCategory].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-category", "none");
			}
			if(finaldata["Moves"]["PP"][q]["PP Min_"+JSONPath_MovePP] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-pp", finaldata["Moves"]["PP"][q]["PP Min_"+JSONPath_MovePP].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-pp", "none");
			}
			if(finaldata["Moves"]["Power"][q]["Power_"+JSONPath_MovePower] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-power", finaldata["Moves"]["Power"][q]["Power_"+JSONPath_MovePower].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-power", "none");
			}
			if(finaldata["Moves"]["Accuracy"][q]["Accuracy_"+JSONPath_MoveAccuracy] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-accuracy", finaldata["Moves"]["Accuracy"][q]["Accuracy_"+JSONPath_MoveAccuracy].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-accuracy", "none");
			}
	

			if(finaldata["Moves"]["Other Moves"][q]["Contact"] == "Makes contact") {
				moveSectionListOptionsLabel.setAttribute("data-search-contact", "y");
			} else if(finaldata["Moves"]["Other Moves"][q]["Contact"] == "Does not make contact") {
				moveSectionListOptionsLabel.setAttribute("data-search-contact", "n");
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-contact", "none");
			}

			if(getTutorData(finaldata["Moves"]["Reference"][q]["Name"+"_"+JSONPath_MoveName],"Move").length > 0) {
				var tutors = getTutorData(finaldata["Moves"]["Reference"][q]["Name"+"_"+JSONPath_MoveName],"Move");
				var res = [];
				for(y = 0; y < tutors.length; y++) {
					res.push(tutors[y]["Location"].toLowerCase())
				}
				moveSectionListOptionsLabel.setAttribute("data-search-tutor", res.join(","));
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-tutor", "none");
			}
			if(finaldata["Moves"]["Machine"][q]["Machine_"+JSONPath_MoveMachine] != undefined) {
				moveSectionListOptionsLabel.setAttribute("data-search-machine", finaldata["Moves"]["Machine"][q]["Machine_"+JSONPath_MoveMachine].toLowerCase());
			} else {
				moveSectionListOptionsLabel.setAttribute("data-search-machine", "none");
			}
			moveSectionListOptionsText.innerText = finaldata["Moves"]["Reference"][q]["Name"+"_"+JSONPath_MoveName];
			moveSectionListOptions.appendChild(moveSectionListOptionsInput);
			moveSectionListOptions.appendChild(moveSectionListOptionsLabel);
			moveSectionListOptionsLabel.appendChild(moveSectionListOptionsText);
			moveSectionListOptionsLabel.setAttribute("tabindex","1");
			moveSectionListOptionsLabel.addEventListener("keyup",function(event){if(event.which === 13){if(event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;moveOptionsSelector(event.target.previousElementSibling.value);}}});
			moveSectionListOptionsInput.addEventListener("change", moveOptionsSelector);

			if(firstmoveiteration != true) {
				firstmoveiteration = true;
				moveSectionListOptionsLabel.click();
			}
		}
	}

	moveSectionListOptionsSearch.title = searchOptionsTitle(moveSectionListOptions);

	var searchLis = document.querySelectorAll("#contain > div#move > section[name='list'] ol > label");
    searchMoveAttributes = [];
    for(q = 0; q < searchLis.length; q++) {
        for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchMoveAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchMoveAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }

    for(q = 0; q < searchMoveAttributes.length; q++) {
        searchMoveAttributes[q] = searchMoveAttributes[q].replaceAll("data-search-","")
    }

	function moveOptionsSelector(i) {
		var i;
		if (this.value != undefined) {
			i = this.value;
		}
		
		moveSectionHeaderTitleName.innerText = finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName];
		moveSectionHeaderTitleID.innerText = "#"+finaldata["Moves"]["ID"][i]["ID"+"_"+JSONPath_MoveID];
		if(finaldata["Moves"]["ID"][i]["ID Type"] != undefined) {
			moveSectionHeaderTitleID.title = finaldata["Moves"]["ID"][i]["ID Type"]+" Index number";
		} else {
			moveSectionHeaderTitleID.title = "Index number";
		}
		moveSectionHeaderDebutText.innerText = "Introduced in "+finaldata["Moves"]["Reference"][i]["Debut"].split("-")[0];

		moveSectionContentDescription.innerHTML = "";

		if (finaldata["Moves"]["Description"][i]["Description_"+JSONPath_MoveDescription] != undefined) {
			var text = document.createElement("p");
			text.innerText = finaldata["Moves"]["Description"][i]["Description_"+JSONPath_MoveDescription];
			moveSectionContentDescription.appendChild(text)
			moveSectionContentDescription.innerHTML += "<br>"
		}


		if (finaldata["Moves"]["Machine"][i]["Machine_"+JSONPath_MoveMachine] != undefined) {
			var text = document.createElement("p");
			text.innerHTML = finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName]+" is <b type='invert' name='item' value='"+finaldata["Moves"]["Machine"][i]["Machine_"+JSONPath_MoveMachine]+"' onclick='dataRedirect()' function='dataRedirect'>"+finaldata["Moves"]["Machine"][i]["Machine_"+JSONPath_MoveMachine]+"</b>."
			moveSectionContentDescription.appendChild(text)
			moveSectionContentDescription.innerHTML += "<br>"
		}


		if(getTutorData(finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName],"Move").length > 0) {
			var text = document.createElement("p");
			moveSectionContentDescription.appendChild(text)

			if (getTutorData(finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName],"Move")[0]["Location"].includes("Route")) {
				text.innerHTML = finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName]+" can be taught by a Move Tutor on <b type='invert' name='map' value='"+getTutorData(finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName],"Move")[0]["Location"]+"' onclick='dataRedirect()' function='dataRedirect'>"+getTutorData(finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName],"Move")[0]["Location"]+"</b>."
			}
			else {
				text.innerHTML = finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName]+" can be taught by a Move Tutor in <b type='invert' name='map' value='"+getTutorData(finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName],"Move")[0]["Location"]+"' onclick='dataRedirect()' function='dataRedirect'>"+getTutorData(finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName],"Move")[0]["Location"]+"</b>."	
			}

			moveSectionContentDescription.innerHTML += "<br>"
		}




		var effect = [];

		for(var q = 0; q < finaldata["Moves"]["Effect"].length; q++) {
			if(getApplicable(finaldata["Moves"]["Effect"][q]["Game"])) {
				if(finaldata["Moves"]["Effect"][q]["Move"] == finaldata["Moves"]["Reference"][i]["Name_"+JSONPath_MoveName]) {
					effect.push(finaldata["Moves"]["Effect"][q]["Effect"])
				}
			}
		}


		if (effect.length > 0) {
			var text = document.createElement("h4");
			text.innerText = "Effect";
			moveSectionContentDescription.appendChild(text)
		}


		for(var q = 0; q < effect.length; q++) {
			var text = document.createElement("p");
			text.innerText = effect[q];
			moveSectionContentDescription.appendChild(text)
			if (q == effect.length - 1) {
				moveSectionContentDescription.innerHTML += "<br>"
			}
		}
		
	




		
	






		moveSectionContentMenuTypeTextImg.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='block'");
		moveSectionContentMenuTypeTextImg.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+finaldata["Moves"]["Type"][i]["Type_"+JSONPath_MoveType]+".png";
		moveSectionContentMenuTypeTextImg.setAttribute("title", finaldata["Moves"]["Type"][i]["Type_"+JSONPath_MoveType]);
		
		if(finaldata["Moves"]["Type"][i]["Type_"+JSONPath_MoveType] == undefined) {
			moveSectionContentMenuTypeTextImg.style.display = "none";
			moveSectionContentMenuTypeTextText.style.display = "block";
		} else {
			moveSectionContentMenuTypeTextImg.style.display = "block";
			moveSectionContentMenuTypeTextText.style.display = "none";
		}
		moveSectionContentMenuTypeTextText.innerText = finaldata["Moves"]["Type"][i]["Type_"+JSONPath_MoveType];
		var cate = moveSectionContentMenuTypeMove.querySelectorAll(":scope > *");
		for(var u = 0; u < cate.length; u++) {
			cate[u].remove();
		}
		for(var u = 0; u < finaldata["Moves"]["Category"][i]["Category_"+JSONPath_MoveCategory].split(",").length; u++) {
			var moveSectionContentMenuTypeMoveImg = document.createElement("img");
			moveSectionContentMenuTypeMoveImg.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='block'");
			moveSectionContentMenuTypeMoveImg.src = "./media/Images/Misc/Type/Category/"+MEDIAPath_Type_Category+"/"+finaldata["Moves"]["Category"][i]["Category_"+JSONPath_MoveCategory].split(",")[u]+".png";
			moveSectionContentMenuTypeMoveImg.setAttribute("title", finaldata["Moves"]["Category"][i]["Category_"+JSONPath_MoveCategory].split(",")[u]);
			moveSectionContentMenuTypeMove.appendChild(moveSectionContentMenuTypeMoveImg);
			var moveSectionContentMenuTypeMoveText = document.createElement("h6");
			moveSectionContentMenuTypeMoveText.innerText = finaldata["Moves"]["Category"][i]["Category_"+JSONPath_MoveCategory].split(",")[u];
			moveSectionContentMenuTypeMove.appendChild(moveSectionContentMenuTypeMoveText);
			moveSectionContentMenuTypeMoveText.style.display = "none";

		}
		if(finaldata["Moves"]["PP"][i]["PP Min_"+JSONPath_MovePP] == undefined) {
			moveSectionContentMenuAttributePowerPointsText.innerHTML = "–";
		} else if(finaldata["Moves"]["PP"][i]["PP Min_"+JSONPath_MovePP] != undefined && finaldata["Moves"]["PP"][i]["PP Max_"+JSONPath_MovePP] == undefined) {
			moveSectionContentMenuAttributePowerPointsText.innerHTML = finaldata["Moves"]["PP"][i]["PP Min_"+JSONPath_MovePP];
		} else {
			moveSectionContentMenuAttributePowerPointsText.innerHTML = finaldata["Moves"]["PP"][i]["PP Min_"+JSONPath_MovePP]+" <span>(max. "+finaldata["Moves"]["PP"][i]["PP Max_"+JSONPath_MovePP]+")</span>";
		}
		if(finaldata["Moves"]["Power"][i]["Power_"+JSONPath_MovePower] == undefined) {
			moveSectionContentMenuAttributePowerText.innerText = "–";
		} else {
			moveSectionContentMenuAttributePowerText.innerText = finaldata["Moves"]["Power"][i]["Power_"+JSONPath_MovePower];
		}
		if(finaldata["Moves"]["Accuracy"][i]["Accuracy_"+JSONPath_MoveAccuracy] == undefined) {
			moveSectionContentMenuAttributeAccuracyText.innerText = "–";
		} else {
			moveSectionContentMenuAttributeAccuracyText.innerText = finaldata["Moves"]["Accuracy"][i]["Accuracy_"+JSONPath_MoveAccuracy];
		}
		if(finaldata["Moves"]["Priority"][i]["Priority_"+JSONPath_MovePriority] == undefined) {
			moveSectionContentMenuAttributePriorityText.innerText = "–";
		} else {
			if (finaldata["Moves"]["Priority"][i]["Priority_"+JSONPath_MovePriority] == "0" || finaldata["Moves"]["Priority"][i]["Priority_"+JSONPath_MovePriority] == undefined) {
				moveSectionContentMenuAttributePriority.style.display = "none";
			}
			else {
				moveSectionContentMenuAttributePriority.style.removeProperty("display");
			}


			if (finaldata["Moves"]["Priority"][i]["Priority_"+JSONPath_MovePriority].includes("-")) {
				moveSectionContentMenuAttributePriorityText.innerText = "-"+finaldata["Moves"]["Priority"][i]["Priority_"+JSONPath_MovePriority].replaceAll("-","");
			}
			else if (finaldata["Moves"]["Priority"][i]["Priority_"+JSONPath_MovePriority].includes("+")) {
				moveSectionContentMenuAttributePriorityText.innerText = "+"+finaldata["Moves"]["Priority"][i]["Priority_"+JSONPath_MovePriority].replaceAll("+","");
			}
			else {
				moveSectionContentMenuAttributePriorityText.innerText = finaldata["Moves"]["Priority"][i]["Priority_"+JSONPath_MovePriority];
			}
		}
		if(finaldata["Moves"]["Other Moves"][i]["Contact"] == "Makes contact") {
			moveSectionContentMenuContactText.innerHTML = "Makes contact";
		} else if(finaldata["Moves"]["Other Moves"][i]["Contact"] == "Does not make contact") {
			moveSectionContentMenuContactText.innerHTML = "Does not make contact";
		}
		if(finaldata["Moves"]["Other Moves"][i]["Contact"].includes("not") || finaldata["Moves"]["Other Moves"][i]["Contact"].includes("Not")) {
			moveSectionContentMenuContact.setAttribute("name", "negative");
		} else {
			moveSectionContentMenuContact.setAttribute("name", "positive");
		}
		var divs = moveSectionContentMenuRight.querySelectorAll(":scope > *");
		for(var u = 0; u < divs.length; u++) {
			divs[u].remove();
		}
		if(Generation == 1) {
			var othermove = ["Mirror Move", "Sound-Based", "Outside Battle"];
		}
		if(Generation == 2) {
			var othermove = ["Protect", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
		}
		if(Generation >= 3 && Generation <= 4) {
			var othermove = ["Protect", "Magic Coat", "Snatch", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
		}
		if(Generation >= 5 && Generation <= 8) {
			var othermove = ["Protect", "Magic Coat/Magic Bounce", "Snatch", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
		}
		for(var u = 0; u < othermove.length; u++) {
			if(finaldata["Moves"]["Other Moves"][i][othermove[u]] != undefined) {
				var moveSectionContentMenuOther = document.createElement("div");
				var moveSectionContentMenuOtherContent = document.createElement("span");
				var moveSectionContentMenuOtherText = document.createElement("h5");

				moveSectionContentMenuOther.setAttribute("name",othermove[u].toLowerCase());
				for(var q = 0; q < othermove.length; q++) {
			
					if(finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Affected by "+othermove[q]) {

				
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
						
					} else if(finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Not affected by "+othermove[q]) {
			
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
				if(finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Usable outside of battle") {
					moveSectionContentMenuOtherText.innerHTML = "Usable outside of battle";
				} else if(finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Is a sound-based move") {
					moveSectionContentMenuOtherText.innerHTML = "Is a sound-based move";
				} else if (finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Affected by Magic Coat") {
					moveSectionContentMenuOtherText.innerHTML = "Affected by <b>Magic Coat</b>";
				} else if(finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Affected by Magic Coat and Magic Bounce") {
					moveSectionContentMenuOtherText.innerHTML = "Affected by <b>Magic Coat</b> and <b>Magic Bounce</b>";

					var applicables = moveSectionContentMenuOtherText.querySelectorAll(":scope > b")
					for(var r = 0; r < applicables.length; r++) {
						applicables[r].setAttribute("name","move");
						applicables[r].addEventListener("click",dataRedirect);
						applicables[r].setAttribute("function","dataRedirect");
					}
				} else if(finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Not affected by Magic Coat") {
					moveSectionContentMenuOtherText.innerHTML = "Not affected by <b>Magic Coat</b>";
					moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("name","move");
					moveSectionContentMenuOtherText.querySelector(":scope > b").addEventListener("click",dataRedirect);
					moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("function","dataRedirect");
					moveSectionContentMenuOtherText.querySelector(":scope > b").setAttribute("type","invert");
				}
				else if(finaldata["Moves"]["Other Moves"][i][othermove[u]] == "Not affected by Magic Coat or Magic Bounce") { 
					moveSectionContentMenuOtherText.innerHTML = "Not affected by <b>Magic Coat</b> or <b>Magic Bounce</b>";

					var applicables = moveSectionContentMenuOtherText.querySelectorAll(":scope > b")
					for(var r = 0; r < applicables.length; r++) {
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
				if(finaldata["Moves"]["Other Moves"][i][othermove[u]].includes("not") || finaldata["Moves"]["Other Moves"][i][othermove[u]].includes("Not")) {
					moveSectionContentMenuOtherContent.setAttribute("name", "negative");
				} else {
					moveSectionContentMenuOtherContent.setAttribute("name", "positive");
				}
			}
		}
		
	
		var lis = moveSectionSidebarLearnsetUl.querySelectorAll(":scope > li");
		for(var u = 0; u < lis.length; u++) {
			lis[u].remove();
		}
		var learnsetlevelarr = [];
		for(var q = 0; q < finaldata["Pokémon Learnset"]["Level Up"].length; q++) {
			if(finaldata["Pokémon Learnset"]["Level Up"][q]["Move"] == finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName] && getApplicable(finaldata["Pokémon Learnset"]["Level Up"][q]["Game"]) == true) {
				var obj = new Object();
				obj["Pokémon"] = finaldata["Pokémon Learnset"]["Level Up"][q]["Pokémon"];
				obj["Factor"] = finaldata["Pokémon Learnset"]["Level Up"][q]["Factor"];
				learnsetlevelarr.push(obj);
			}
		}
		learnsetlevelarr = learnsetlevelarr.filter(
			(value) => Object.keys(value).length !== 0);
		learnsetlevelarr.sort(function(a, b) {
			return parseInt(a["Factor"]) - parseInt(b["Factor"]);
		});

		for(var q = 0; q < learnsetlevelarr.length; q++) {
			var moveSectionSidebarLearnsetLi = document.createElement("li");
			moveSectionSidebarLearnsetUl.appendChild(moveSectionSidebarLearnsetLi);
			var moveSectionSidebarLearnsetLiImgOuter = document.createElement("div");
			var moveSectionSidebarLearnsetLiImg = document.createElement("img");
			var moveSectionSidebarLearnsetLiText = document.createElement("small");
			var moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
			var moveSectionSidebarLearnsetLiSource = document.createElement("h5");
			moveSectionSidebarLearnsetLiSourceOuter.title = "Level Up";
			moveSectionSidebarLearnsetLiSource.innerHTML = "Level Up: "+learnsetlevelarr[q]["Factor"];
			moveSectionSidebarLearnsetLiText.innerText = learnsetlevelarr[q]["Pokémon"];
			moveSectionSidebarLearnsetLiImg.src = getPokémonMediaPath([getPokémonInt(learnsetlevelarr[q]["Pokémon"])],["./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box]);
			moveSectionSidebarLearnsetLiImg.title = learnsetlevelarr[q]["Pokémon"];
			moveSectionSidebarLearnsetLiImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
			moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiImgOuter);
			moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiImg);
			moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiText);
			moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
			moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSource);

			moveSectionSidebarLearnsetLiImgOuter.setAttribute("value",getPokémonInt(learnsetlevelarr[q]["Pokémon"]));
			moveSectionSidebarLearnsetLiImgOuter.addEventListener("click", modalData);
			moveSectionSidebarLearnsetLiImgOuter.setAttribute("function","modalData");
		}
		for(var q = 0; q < finaldata["Pokémon Learnset"]["Evolution"].length; q++) {
			if(finaldata["Pokémon Learnset"]["Evolution"][q]["Move"] == finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName] && getApplicable(finaldata["Pokémon Learnset"]["Evolution"][q]["Game"]) == true) {
				var moveSectionSidebarLearnsetLi = document.createElement("li");
				moveSectionSidebarLearnsetUl.appendChild(moveSectionSidebarLearnsetLi);
				var moveSectionSidebarLearnsetLiImgOuter = document.createElement("div");
				var moveSectionSidebarLearnsetLiImg = document.createElement("img");
				var moveSectionSidebarLearnsetLiText = document.createElement("small");
				var moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
				var moveSectionSidebarLearnsetLiSourceText = document.createElement("h6");
				var moveSectionSidebarLearnsetLiSourceImgOuter = document.createElement("span");
				moveSectionSidebarLearnsetLiSourceOuter.title = "Prior Evolution";
				moveSectionSidebarLearnsetLiSourceText.innerText = "Prior Evolution:";
				if(finaldata["Pokémon Learnset"]["Evolution"][q]["Evolution"].includes(",")) {
					for(var r = 0; r < finaldata["Pokémon Learnset"]["Evolution"][q]["Evolution"].split(",").length; r++) {
						var moveSectionSidebarLearnsetLiSource = document.createElement("img");
						moveSectionSidebarLearnsetLiSource.src = getPokémonMediaPath([getPokémonInt(finaldata["Pokémon Learnset"]["Evolution"][q]["Evolution"].split(",")[r])],["./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box]);
						moveSectionSidebarLearnsetLiSource.title = finaldata["Pokémon Learnset"]["Evolution"][q]["Evolution"].split(",")[r];
						moveSectionSidebarLearnsetLiSourceImgOuter.appendChild(moveSectionSidebarLearnsetLiSource);

						moveSectionSidebarLearnsetLiSource.setAttribute("value",getPokémonInt(finaldata["Pokémon Learnset"]["Evolution"][q]["Evolution"].split(",")[r]));
						moveSectionSidebarLearnsetLiSource.addEventListener("click", modalData);
						moveSectionSidebarLearnsetLiSource.setAttribute("function","modalData");
					}
				} else if(finaldata["Pokémon Learnset"]["Evolution"][q]["Evolution"] == "None") {
					moveSectionSidebarLearnsetLiSourceImgOuter.innerText = finaldata["Pokémon Learnset"]["Evolution"][q]["Evolution"];
				} else {
					var moveSectionSidebarLearnsetLiSource = document.createElement("img");
					moveSectionSidebarLearnsetLiSource.src = getPokémonMediaPath([getPokémonInt(finaldata["Pokémon Learnset"]["Evolution"][q]["Evolution"])],["./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box]);
					moveSectionSidebarLearnsetLiSource.title = finaldata["Pokémon Learnset"]["Evolution"][q]["Evolution"];
					moveSectionSidebarLearnsetLiSourceImgOuter.appendChild(moveSectionSidebarLearnsetLiSource);

					moveSectionSidebarLearnsetLiSource.setAttribute("value",getPokémonInt(finaldata["Pokémon Learnset"]["Evolution"][q]["Evolution"]));
					moveSectionSidebarLearnsetLiSource.addEventListener("click", modalData);
					moveSectionSidebarLearnsetLiSource.setAttribute("function","modalData");
				}
		
				moveSectionSidebarLearnsetLiImg.src = getPokémonMediaPath([getPokémonInt(finaldata["Pokémon Learnset"]["Evolution"][q]["Pokémon"])],["./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box]);
				moveSectionSidebarLearnsetLiImg.title = finaldata["Pokémon Learnset"]["Evolution"][q]["Pokémon"];
				moveSectionSidebarLearnsetLiText.innerText = finaldata["Pokémon Learnset"]["Evolution"][q]["Pokémon"];				
				moveSectionSidebarLearnsetLiImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiImgOuter);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiImg);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiText);
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
				moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceText);
				moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceImgOuter);

				moveSectionSidebarLearnsetLiImgOuter.setAttribute("value",getPokémonInt(finaldata["Pokémon Learnset"]["Evolution"][q]["Pokémon"]));
				moveSectionSidebarLearnsetLiImgOuter.addEventListener("click", modalData);
				moveSectionSidebarLearnsetLiImgOuter.setAttribute("function","modalData");

			}
		}
		for(var q = 0; q < finaldata["Pokémon Learnset"]["Machine"].length; q++) {
			if(finaldata["Pokémon Learnset"]["Machine"][q]["Move"] == finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName] && getApplicable(finaldata["Pokémon Learnset"]["Machine"][q]["Game"]) == true) {
				var moveSectionSidebarLearnsetLi = document.createElement("li");
				moveSectionSidebarLearnsetUl.appendChild(moveSectionSidebarLearnsetLi);
				var moveSectionSidebarLearnsetLiImgOuter = document.createElement("div");
				var moveSectionSidebarLearnsetLiImg = document.createElement("img");
				var moveSectionSidebarLearnsetLiText = document.createElement("small");
				var moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
				var moveSectionSidebarLearnsetLiSource = document.createElement("h5");
				if(finaldata["Pokémon Learnset"]["Machine"][q]["Machine"].includes("HM")) {
					moveSectionSidebarLearnsetLiSource.innerHTML = "<b>"+finaldata["Pokémon Learnset"]["Machine"][q]["Machine"]+"</b>";
					moveSectionSidebarLearnsetLiSource.setAttribute("name","hm");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").setAttribute("name","item");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").addEventListener("click",dataRedirect);
					moveSectionSidebarLearnsetLiSource.setAttribute("function","dataRedirect");
				} else if(finaldata["Pokémon Learnset"]["Machine"][q]["Machine"].includes("TM")) {
					moveSectionSidebarLearnsetLiSource.innerHTML = "<b>"+finaldata["Pokémon Learnset"]["Machine"][q]["Machine"]+"</b>";
					moveSectionSidebarLearnsetLiSource.setAttribute("name","tm");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").setAttribute("name","item");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").addEventListener("click",dataRedirect);
					moveSectionSidebarLearnsetLiSource.setAttribute("function","dataRedirect");
				} else if(finaldata["Pokémon Learnset"]["Machine"][q]["Machine"].includes("TR")) {
					moveSectionSidebarLearnsetLiSource.innerHTML = "<b>"+finaldata["Pokémon Learnset"]["Machine"][q]["Machine"]+"</b>";
					moveSectionSidebarLearnsetLiSource.setAttribute("name","tr");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").setAttribute("name","item");
					moveSectionSidebarLearnsetLiSource.querySelector(":scope > b").addEventListener("click",dataRedirect);
					moveSectionSidebarLearnsetLiSource.setAttribute("function","dataRedirect");
				}
				

				moveSectionSidebarLearnsetLiImg.src = getPokémonMediaPath([getPokémonInt(finaldata["Pokémon Learnset"]["Machine"][q]["Pokémon"])],["./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box]);
				moveSectionSidebarLearnsetLiImg.title = finaldata["Pokémon Learnset"]["Machine"][q]["Pokémon"];
				moveSectionSidebarLearnsetLiText.innerText = finaldata["Pokémon Learnset"]["Machine"][q]["Pokémon"];
				moveSectionSidebarLearnsetLiImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiImgOuter);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiImg);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiText);
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
				moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSource);

				moveSectionSidebarLearnsetLiImgOuter.setAttribute("value",getPokémonInt(finaldata["Pokémon Learnset"]["Machine"][q]["Pokémon"]));
				moveSectionSidebarLearnsetLiImgOuter.addEventListener("click", modalData);
				moveSectionSidebarLearnsetLiImgOuter.setAttribute("function","modalData");

			}
		}
		for(var q = 0; q < finaldata["Pokémon Learnset"]["Tutor"].length; q++) {
			if(finaldata["Pokémon Learnset"]["Tutor"][q]["Move"] == finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName] && getApplicable(finaldata["Pokémon Learnset"]["Tutor"][q]["Game"]) == true) {
				var tutorData = getTutorData(finaldata["Pokémon Learnset"]["Tutor"][q]["Move"],"Move");
				
				var moveSectionSidebarLearnsetLi = document.createElement("li");
				moveSectionSidebarLearnsetUl.appendChild(moveSectionSidebarLearnsetLi);
				var moveSectionSidebarLearnsetLiImgOuter = document.createElement("div");
				var moveSectionSidebarLearnsetLiImg = document.createElement("img");
				var moveSectionSidebarLearnsetLiText = document.createElement("small");

				moveSectionSidebarLearnsetLiImg.src = getPokémonMediaPath([getPokémonInt(finaldata["Pokémon Learnset"]["Tutor"][q]["Pokémon"])],["./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box]);
				moveSectionSidebarLearnsetLiImg.title = finaldata["Pokémon Learnset"]["Tutor"][q]["Pokémon"];
				moveSectionSidebarLearnsetLiText.innerText = finaldata["Pokémon Learnset"]["Tutor"][q]["Pokémon"];
				moveSectionSidebarLearnsetLiImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiImgOuter);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiImg);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiText);

				if (tutorData.length > 0) {

					var moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
					var moveSectionSidebarLearnsetLiSourceTitle = document.createElement("h5");
					var moveSectionSidebarLearnsetLiSourceWrap = document.createElement("b");
					var moveSectionSidebarLearnsetLiSourceText = document.createElement("small");

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
					var moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
					var moveSectionSidebarLearnsetLiSourceTitle = document.createElement("h5");
					moveSectionSidebarLearnsetLiSourceTitle.innerText = "Move Tutor";
					moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
					moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceTitle);
				}

				moveSectionSidebarLearnsetLiImgOuter.setAttribute("value",getPokémonInt(finaldata["Pokémon Learnset"]["Tutor"][q]["Pokémon"]));
				moveSectionSidebarLearnsetLiImgOuter.addEventListener("click", modalData);
				moveSectionSidebarLearnsetLiImgOuter.setAttribute("function","modalData");

			}
		}
		for(var q = 0; q < finaldata["Pokémon Learnset"]["Breeding"].length; q++) {
			if(finaldata["Pokémon Learnset"]["Breeding"][q]["Move"] == finaldata["Moves"]["Reference"][i]["Name"+"_"+JSONPath_MoveName] && getApplicable(finaldata["Pokémon Learnset"]["Breeding"][q]["Game"]) == true) {
				var moveSectionSidebarLearnsetLi = document.createElement("li");
				moveSectionSidebarLearnsetUl.appendChild(moveSectionSidebarLearnsetLi);
				var moveSectionSidebarLearnsetLiImgOuter = document.createElement("div");
				var moveSectionSidebarLearnsetLiImg = document.createElement("img");
				var moveSectionSidebarLearnsetLiText = document.createElement("small");
				var moveSectionSidebarLearnsetLiSourceOuter = document.createElement("span");
				var moveSectionSidebarLearnsetLiSourceText = document.createElement("h5");
				var moveSectionSidebarLearnsetLiSourceImgOuter = document.createElement("span");
				moveSectionSidebarLearnsetLiSourceOuter.title = "Parent";
				moveSectionSidebarLearnsetLiSourceText.innerText = "Parent:";
				if(finaldata["Pokémon Learnset"]["Breeding"][q]["Parent"].includes(",")) {
					for(var r = 0; r < finaldata["Pokémon Learnset"]["Breeding"][q]["Parent"].split(",").length; r++) {
						var moveSectionSidebarLearnsetLiSource = document.createElement("img");
						moveSectionSidebarLearnsetLiSource.src = getPokémonMediaPath([getPokémonInt(finaldata["Pokémon Learnset"]["Breeding"][q]["Parent"].split(",")[r])],["./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box]);

						moveSectionSidebarLearnsetLiSource.title = finaldata["Pokémon Learnset"]["Breeding"][q]["Parent"].split(",")[r];
						moveSectionSidebarLearnsetLiSourceImgOuter.appendChild(moveSectionSidebarLearnsetLiSource);

						moveSectionSidebarLearnsetLiSource.setAttribute("value",getPokémonInt(finaldata["Pokémon Learnset"]["Breeding"][q]["Parent"].split(",")[r]));
						moveSectionSidebarLearnsetLiSource.addEventListener("click", modalData);
						moveSectionSidebarLearnsetLiSource.setAttribute("function","modalData");
					}
				} else if(finaldata["Pokémon Learnset"]["Breeding"][q]["Parent"] == "None") {
					moveSectionSidebarLearnsetLiSourceImgOuter.innerText = finaldata["Pokémon Learnset"]["Breeding"][q]["Parent"];
				} else {
					var moveSectionSidebarLearnsetLiSource = document.createElement("img");
					moveSectionSidebarLearnsetLiSource.src = getPokémonMediaPath([getPokémonInt(finaldata["Pokémon Learnset"]["Breeding"][q]["Parent"])],["./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box]);
					moveSectionSidebarLearnsetLiSource.title = finaldata["Pokémon Learnset"]["Breeding"][q]["Parent"];
					moveSectionSidebarLearnsetLiSourceImgOuter.appendChild(moveSectionSidebarLearnsetLiSource);
				}

				moveSectionSidebarLearnsetLiImg.src = getPokémonMediaPath([getPokémonInt(finaldata["Pokémon Learnset"]["Breeding"][q]["Pokémon"])],["./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box]);


				moveSectionSidebarLearnsetLiImg.title = finaldata["Pokémon Learnset"]["Breeding"][q]["Pokémon"];
				moveSectionSidebarLearnsetLiText.innerText = finaldata["Pokémon Learnset"]["Breeding"][q]["Pokémon"];

				moveSectionSidebarLearnsetLiImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiImgOuter);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiImg);
				moveSectionSidebarLearnsetLiImgOuter.appendChild(moveSectionSidebarLearnsetLiText);
				moveSectionSidebarLearnsetLi.appendChild(moveSectionSidebarLearnsetLiSourceOuter);
				moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceText);
				moveSectionSidebarLearnsetLiSourceOuter.appendChild(moveSectionSidebarLearnsetLiSourceImgOuter);

				moveSectionSidebarLearnsetLiImgOuter.setAttribute("value",getPokémonInt(finaldata["Pokémon Learnset"]["Breeding"][q]["Pokémon"]));
				moveSectionSidebarLearnsetLiImgOuter.addEventListener("click", modalData);
				moveSectionSidebarLearnsetLiImgOuter.setAttribute("function","modalData");
			}
		}

		var tempStr;
		if (moveLearnsetPB.length > 1) {
			tempStr = moveLearnsetPB.join(",");
		}
		else {
			tempStr = moveLearnsetPB[0];
		}
		moveLearnsetPartyBox(tempStr);
	}
};


