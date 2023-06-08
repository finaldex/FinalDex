let createAbility = function() {
	if(Ability.length >= 1) {
		let abilityOuter = document.createElement("div");
		let abilitySectionList = document.createElement("section");
		let abilitySectionListOptionsTitleOuter = document.createElement("div");
		let abilitySectionListOptionsSearchOuter = document.createElement("div");
		let abilitySectionListOptionsSearch = document.createElement("input");
		let abilitySectionListOptionsSearchExit = document.createElement("span");
		let abilitySectionListOptionsOuter = document.createElement("div");
		let abilitySectionListOptions = document.createElement("ol");
		let abilitySectionHeader = document.createElement("section");
		let abilitySectionHeaderTitle = document.createElement("span");
		let abilitySectionHeaderTitleID = document.createElement("h4");
		let abilitySectionHeaderTitleName = document.createElement("h3");
		let abilitySectionHeaderDebut = document.createElement("span");
		let abilitySectionHeaderDebutText = document.createElement("h5");
		let abilitySectionContent = document.createElement("section");
		let abilitySectionContentDescription = document.createElement("div");
		let abilitySectionContentDescriptionText = document.createElement("p");
		let abilitySectionContentEffectTitle = document.createElement("h4");
		let abilitySectionContentEffectText = document.createElement("p");
		let abilitySectionContentBreak = document.createElement("br");
		let abilitySectionContentAffectTitle = document.createElement("h4");
		let abilitySectionContentAffectText = document.createElement("p");
		let abilitySectionSidebar = document.createElement("section");
		let abilitySectionSidebarSidebar = document.createElement("div");
		let abilitySectionSidebarSidebarTitle = document.createElement("div");

		let abilitySectionSidebarSidebarUl = document.createElement("ul");
		abilitySectionSidebar.appendChild(abilitySectionSidebarSidebar);
		abilitySectionSidebarSidebar.appendChild(abilitySectionSidebarSidebarTitle);
		abilitySectionSidebarSidebar.appendChild(abilitySectionSidebarSidebarUl);

		let abilitySectionSidebarLearnsetPartyBox = document.createElement("div");
		abilitySectionSidebarSidebar.appendChild(abilitySectionSidebarLearnsetPartyBox);
	
		abilitySectionContentDescription.setAttribute("name","description");

		let parbo = ["Party","Box"];
		for(let q = 0; q < parbo.length; q++) {
			let abilitySectionSidebarLearnsetInput = document.createElement("input");
			let abilitySectionSidebarLearnsetLabel = document.createElement("label");
			let abilitySectionSidebarLearnsetText = document.createElement("h6");
			abilitySectionSidebarLearnsetInput.setAttribute("type","checkbox");
			abilitySectionSidebarLearnsetInput.setAttribute("id","ability-learnset-partybox-"+q);
			abilitySectionSidebarLearnsetInput.setAttribute("name","ability-learnset-partybox");
			abilitySectionSidebarLearnsetInput.value = "Abilities";
			abilitySectionSidebarLearnsetLabel.setAttribute("for","ability-learnset-partybox-"+q);
			abilitySectionSidebarLearnsetText.innerText = parbo[q];
			abilitySectionSidebarLearnsetLabel.title = "Show results from "+parbo[q];
			abilitySectionSidebarLearnsetPartyBox.appendChild(abilitySectionSidebarLearnsetInput);
			abilitySectionSidebarLearnsetPartyBox.appendChild(abilitySectionSidebarLearnsetLabel);
			abilitySectionSidebarLearnsetLabel.appendChild(abilitySectionSidebarLearnsetText);
			abilitySectionSidebarLearnsetInput.addEventListener("change", abilityPartyBoxLearnset);
		}
		abilitySectionList.setAttribute("name","list");
		abilitySectionHeader.setAttribute("name","header");
		abilitySectionContent.setAttribute("name","content");
		abilitySectionSidebar.setAttribute("name","sidebar");

		let abilitySectionSidebarSidebarTitleLiTopText = document.createElement("h4");
		abilitySectionSidebarSidebarTitle.appendChild(abilitySectionSidebarSidebarTitleLiTopText);

		let sidebarAbilityList = [];
		if(Generation <= 4) {
			sidebarAbilityList = ["Pokémon","Primary Ability","Secondary Ability"];
		}
		if(Generation >= 5) {
			sidebarAbilityList = ["Pokémon","Primary Ability","Secondary Ability","Hidden Ability"];
		}

		abilityOuter.setAttribute("id","ability");
		abilityOuter.setAttribute("value","abilities");


		abilitySectionListOptionsSearch.setAttribute("type","text");

		abilitySectionListOptionsSearch.setAttribute("placeholder","Search Abilities...");
		abilitySectionListOptionsSearch.setAttribute("onfocus","this.placeholder=''");
		abilitySectionListOptionsSearch.setAttribute("onblur","this.placeholder='Search Abilities...'");
		abilitySectionListOptionsSearch.setAttribute("autocomplete","off");

		abilitySectionHeaderTitleName.innerText = "Abilities";

		abilitySectionListOptionsSearchExit.setAttribute("name","exit");

		document.querySelector("#contain").appendChild(abilityOuter);
		abilityOuter.appendChild(abilitySectionList);
		abilitySectionList.appendChild(abilitySectionListOptionsTitleOuter);
		abilitySectionListOptionsTitleOuter.appendChild(abilitySectionListOptionsSearchOuter);
		abilitySectionListOptionsSearchOuter.appendChild(abilitySectionListOptionsSearchExit);
		abilitySectionListOptionsSearchOuter.appendChild(abilitySectionListOptionsSearch);
		abilitySectionList.appendChild(abilitySectionListOptionsOuter);
		abilitySectionListOptionsOuter.appendChild(abilitySectionListOptions);
		abilityOuter.appendChild(abilitySectionHeader);
		abilitySectionHeader.appendChild(abilitySectionHeaderTitle);
		abilitySectionHeaderTitle.appendChild(abilitySectionHeaderTitleID);
		abilitySectionHeaderTitle.appendChild(abilitySectionHeaderTitleName);
		abilitySectionHeader.appendChild(abilitySectionHeaderDebut);
		abilitySectionHeaderDebut.appendChild(abilitySectionHeaderDebutText);
		abilityOuter.appendChild(abilitySectionContent);
		abilitySectionContent.appendChild(abilitySectionContentDescription);
		abilitySectionContentDescription.appendChild(abilitySectionContentDescriptionText);
		abilitySectionContentDescription.appendChild(abilitySectionContentEffectTitle);
		abilitySectionContentDescription.appendChild(abilitySectionContentEffectText);
		abilitySectionContentDescription.appendChild(abilitySectionContentBreak);
		abilitySectionContentDescription.appendChild(abilitySectionContentAffectTitle);
		abilitySectionContentDescription.appendChild(abilitySectionContentAffectText);
		abilityOuter.appendChild(abilitySectionSidebar);

		abilitySectionListOptionsSearch.addEventListener("keyup", function() {search("Ability");});
		abilitySectionListOptionsSearchExit.addEventListener("click", function() {exitSearch("Ability");});


        let abilitySectionHeaderGame = document.createElement("span");
        let abilitySectionHeaderGameImage = document.createElement("img");
        abilitySectionHeaderGameImage.src = getMedia(true,["Title"],[PATH_Game_Title])
        abilitySectionHeaderGameImage.setAttribute("onerror","this.display='none'");
        abilitySectionHeader.appendChild(abilitySectionHeaderGame);
        abilitySectionHeaderGame.appendChild(abilitySectionHeaderGameImage);


		let firstabilityiteration;
		for(let q = 0; q < finaldata["Abilities"]["Reference"].length; q++) {
			if(getApplicable(finaldata["Abilities"]["Reference"][q]["Game"])) {
				let abilitySectionListOptionsInput = document.createElement("input");
				let abilitySectionListOptionsLabel = document.createElement("label");
				let abilitySectionListOptionsText = document.createElement("p");
				abilitySectionListOptionsInput.setAttribute("type","radio");
				abilitySectionListOptionsInput.setAttribute("name","ability-options");
				abilitySectionListOptionsInput.setAttribute("id","ability-options-"+q);
				abilitySectionListOptionsInput.setAttribute("autocomplete","off");
				abilitySectionListOptionsInput.value = q;
				abilitySectionListOptionsLabel.setAttribute("for","ability-options-"+q);
				abilitySectionListOptionsLabel.setAttribute("type","medium");
				abilitySectionListOptionsLabel.setAttribute("data-name", finaldata["Abilities"]["Reference"][q]["Ability"].toLowerCase());
				abilitySectionListOptionsLabel.setAttribute("data-title", finaldata["Abilities"]["Reference"][q]["Ability"].toLowerCase());
				abilitySectionListOptionsText.innerText = finaldata["Abilities"]["Reference"][q]["Ability"];
				abilitySectionListOptions.appendChild(abilitySectionListOptionsInput);
				abilitySectionListOptions.appendChild(abilitySectionListOptionsLabel);
				abilitySectionListOptionsLabel.appendChild(abilitySectionListOptionsText);
				abilitySectionListOptionsInput.addEventListener("click", abilityOptionsSelector);
				abilitySectionListOptionsLabel.setAttribute("tabindex",q+10);
				abilitySectionListOptionsLabel.addEventListener("keyup",function(event){if(event.which === 13){if(event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;abilityOptionsSelector(event.target.previousElementSibling.value);}}});

				if(firstabilityiteration != true) {
					firstabilityiteration = true;
					abilitySectionListOptionsLabel.click();
				}
			}
		}
	

		abilitySectionListOptionsSearch.title = searchOptionsTitle(abilitySectionListOptions);
		
		let searchLis = document.querySelectorAll("#contain > div#ability > section[name='list'] ol > label");
		searchAbilityAttributes = [];
		for(q = 0; q < searchLis.length; q++) {
			for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
				if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
					if (!searchAbilityAttributes.includes(searchLis[q].getAttributeNames()[u])) {
						searchAbilityAttributes.push(searchLis[q].getAttributeNames()[u]);
					}
				}
			}
		}

		for(q = 0; q < searchAbilityAttributes.length; q++) {
			searchAbilityAttributes[q] = searchAbilityAttributes[q].replaceAll("data-search-","");
		}

		function abilityOptionsSelector(i) {
			if (this.value != undefined) {
				i = this.value;
			}

			abilitySectionSidebarSidebarTitleLiTopText.innerHTML = "Pokémon with&nbsp;"+"<u>"+finaldata["Abilities"]["Reference"][i]["Ability"]+"</u>";
			abilitySectionHeaderTitleID.innerText = "#"+returnAppArrData(finaldata["Abilities"]["Reference"],"Ability",finaldata["Abilities"]["Reference"][i]["Ability"])[0]["ID"];
	
			abilitySectionHeaderDebutText.innerText = "Introduced in "+returnAppArrData(finaldata["Abilities"]["Reference"],"Ability",finaldata["Abilities"]["Reference"][i]["Ability"])[0]["Debut"];
			abilitySectionHeaderTitleName.innerText = finaldata["Abilities"]["Reference"][i]["Ability"];
			abilitySectionContentDescriptionText.innerText = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",finaldata["Abilities"]["Reference"][i]["Ability"])[0]["Description"];
	
			let effect = [];
	
			for(let q = 0; q < finaldata["Abilities"]["Effect"].length; q++) {
				if(getApplicable(finaldata["Abilities"]["Effect"][q]["Game"])) {
					if(finaldata["Abilities"]["Effect"][q]["Ability"] == finaldata["Abilities"]["Reference"][i]["Ability"]) {
						effect.push(finaldata["Abilities"]["Effect"][q]["Effect"])
					}
				}
			}
	
			abilitySectionContentEffectText.innerText = "";
	
			for(let q = 0; q < effect.length; q++) {
				abilitySectionContentEffectText.innerText += effect[q];
				if (q != effect.length - 1) {
					abilitySectionContentEffectText.innerHTML += "<br>"
				}
			}
			
			if (effect.length > 0) {
				abilitySectionContentEffectTitle.innerText = "Effect";
			}
			else {
				abilitySectionContentEffectTitle.innerText = "";
			}
	
			//abilitySectionContentEffectText.innerHTML = referenceLink(abilitySectionContentEffectText.innerHTML);
	
			let affect = [];
	
			for(let q = 0; q < finaldata["Abilities"]["Affect"].length; q++) {
				if(getApplicable(finaldata["Abilities"]["Affect"][q]["Game"])) {
					if(finaldata["Abilities"]["Affect"][q]["Ability"] == finaldata["Abilities"]["Reference"][i]["Ability"]) {
						if (finaldata["Abilities"]["Affect"][q]["Type"] == "Move") {
							let move = returnArrValue(finaldata["Moves"]["Description"],DATA_Move_Reference["Name"],DATA_Move_Description["Description"],finaldata["Abilities"]["Affect"][q]["Name"]);
							if (move != undefined) {
								affect.push(finaldata["Abilities"]["Affect"][q]);
							}
						}
						else if (finaldata["Abilities"]["Affect"][q]["Type"] == "Item") {
							let item = getItemIcon(finaldata["Abilities"]["Affect"][q]["Name"]);
							if (item != undefined) {
								affect.push(finaldata["Abilities"]["Affect"][q]);
							}
						}
					}
				}
			}
	
			abilitySectionContentAffectText.innerText = "";
			for(let q = 0; q < affect.length; q++) {
				let b = document.createElement("b");
				b.innerText = affect[q]["Name"];
				abilitySectionContentAffectText.appendChild(b)
				
				b.setAttribute("name",affect[q]["Type"].toLowerCase());
				b.setAttribute("type", "invert");
				b.setAttribute("onclick", "dataRedirect()");
				b.setAttribute("function","dataRedirect");
				b.style.color = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],affect[q]["Name"])+")";
				b.style.textShadow  = "1px 1px #000";
				
				if (q == affect.length - 2) {
					abilitySectionContentAffectText.innerHTML += " and ";
				}
				else if (q == affect.length - 1) {
					abilitySectionContentAffectText.innerHTML += ".";
				}
				else {
					abilitySectionContentAffectText.innerHTML += ", ";
				}
			}
	
			
			if (affect.length > 0) {
				abilitySectionContentAffectTitle.innerText = "Affected "+affect[0]["Type"]+"s";
			}
			else {
				abilitySectionContentAffectTitle.innerText = "";
			}
			
	
	
	
			let lis = document.querySelectorAll("#contain div#ability > section[name='sidebar'] ul li");
			for(let q = 0; q < lis.length; q++) {
				lis[q].remove();
			}
	
	
			let abilityList = []
			if(Generation <= 4) {
				abilityList = ["Primary","Secondary"];
			}
			if(Generation >= 5) {
				abilityList = ["Primary","Secondary","Hidden"];
			}
	
			let AbilityResults = getPokémonData(finaldata["Pokémon"]["Ability"], finaldata["Abilities"]["Reference"][i]["Ability"], abilityList);
		
			for(let q = 0; q < AbilityResults.length; q++) {
				let abilitySectionSidebarSidebarLi = document.createElement("li");
				abilitySectionSidebarSidebarUl.appendChild(abilitySectionSidebarSidebarLi);
				for(let u = 0; u < sidebarAbilityList.length; u++) {
					let int = AbilityResults[q]["Integer"];
					let name = getPokémonName(int);
					if(u == 0) {
						let abilitySectionSidebarSidebarLiImgOuter = document.createElement("div");
						let abilitySectionSidebarSidebarLiImg = document.createElement("img");
						let abilitySectionSidebarSidebarLiText = document.createElement("small");
						abilitySectionSidebarSidebarLiImg.src = getMedia(true,[getPokémonPath(int)],[PATH_Pokémon_Box_Default_PNG]);
						abilitySectionSidebarSidebarLiImg.setAttribute("title", name);
						abilitySectionSidebarSidebarLiText.innerText = name;
						abilitySectionSidebarSidebarLi.appendChild(abilitySectionSidebarSidebarLiImgOuter);
						abilitySectionSidebarSidebarLiImgOuter.appendChild(abilitySectionSidebarSidebarLiImg);
						abilitySectionSidebarSidebarLiImgOuter.appendChild(abilitySectionSidebarSidebarLiText);
	
						abilitySectionSidebarSidebarLiImgOuter.setAttribute("value",int);
						abilitySectionSidebarSidebarLiImgOuter.addEventListener("click", modalData);
						abilitySectionSidebarSidebarLiImgOuter.setAttribute("function","modalData");
	
					} else if(u != 0) {
					
	
						if(AbilityResults[q][sidebarAbilityListFull[u - 1]] == finaldata["Abilities"]["Reference"][i]["Ability"]) {
							let abilitySectionSidebarSidebarLiTextOuter = document.createElement("span");
							let abilitySectionSidebarSidebarLiText = document.createElement("h6");
							if(AbilityResults[q][sidebarAbilityListFull[u - 1]] != undefined) {
								abilitySectionSidebarSidebarLiText.innerText = AbilityResults[q][sidebarAbilityListFull[u - 1]];
							}
							abilitySectionSidebarSidebarLiTextOuter.setAttribute("name","ability");
							abilitySectionSidebarSidebarLiTextOuter.setAttribute("title", sidebarAbilityList[u]);
							abilitySectionSidebarSidebarLi.appendChild(abilitySectionSidebarSidebarLiTextOuter);
							abilitySectionSidebarSidebarLiTextOuter.appendChild(abilitySectionSidebarSidebarLiText);
	
							abilitySectionSidebarSidebarLiTextOuter.classList.add("active");
						} else {
							let abilitySectionSidebarSidebarLiTextOuter = document.createElement("b");
							abilitySectionSidebarSidebarLiTextOuter.setAttribute("type","invert");
							let abilitySectionSidebarSidebarLiText = document.createElement("p");
							if(AbilityResults[q][sidebarAbilityListFull[u - 1]] != undefined) {
								abilitySectionSidebarSidebarLiText.innerText = AbilityResults[q][sidebarAbilityListFull[u - 1]];
							}
							abilitySectionSidebarSidebarLiTextOuter.setAttribute("name","ability");
							abilitySectionSidebarSidebarLiTextOuter.setAttribute("title", sidebarAbilityList[u]);
							abilitySectionSidebarSidebarLi.appendChild(abilitySectionSidebarSidebarLiTextOuter);
							abilitySectionSidebarSidebarLiTextOuter.appendChild(abilitySectionSidebarSidebarLiText);
							abilitySectionSidebarSidebarLiTextOuter.addEventListener("click", dataRedirect);
							abilitySectionSidebarSidebarLiTextOuter.setAttribute("function","dataRedirect");
						}
					}
				}
			}
		
			let tempStr;
			if (abilityLearnsetPB.length > 1) {
				tempStr = abilityLearnsetPB.join(",");
			}
			else {
				tempStr = abilityLearnsetPB[0];
			}
			abilityLearnsetPartyBox(tempStr);
		}
	}



	
};


