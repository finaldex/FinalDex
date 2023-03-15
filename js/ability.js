var createAbility = function() {
	if(Ability.length >= 1) {
		var abilityOuter = document.createElement("div");
		var abilitySectionList = document.createElement("section");
		var abilitySectionListOptionsTitleOuter = document.createElement("div");
		var abilitySectionListOptionsSearchOuter = document.createElement("div");
		var abilitySectionListOptionsSearch = document.createElement("input");
		var abilitySectionListOptionsSearchExit = document.createElement("span");
		var abilitySectionListOptionsOuter = document.createElement("div");
		var abilitySectionListOptions = document.createElement("ol");
		var abilitySectionHeader = document.createElement("section");
		var abilitySectionHeaderTitle = document.createElement("span");
		var abilitySectionHeaderTitleID = document.createElement("h4");
		var abilitySectionHeaderTitleName = document.createElement("h3");
		var abilitySectionHeaderDebut = document.createElement("span");
		var abilitySectionHeaderDebutText = document.createElement("h5");
		var abilitySectionContent = document.createElement("section");
		var abilitySectionContentDescription = document.createElement("div");
		var abilitySectionContentDescriptionText = document.createElement("p");
		var abilitySectionContentEffectTitle = document.createElement("h4");
		var abilitySectionContentEffectText = document.createElement("p");
		var abilitySectionContentBreak = document.createElement("br");
		var abilitySectionContentAffectTitle = document.createElement("h4");
		var abilitySectionContentAffectText = document.createElement("p");
		var abilitySectionSidebar = document.createElement("section");
		var abilitySectionSidebarSidebar = document.createElement("div");
		var abilitySectionSidebarSidebarTitle = document.createElement("div");

		var abilitySectionSidebarSidebarUl = document.createElement("ul");
		abilitySectionSidebar.appendChild(abilitySectionSidebarSidebar);
		abilitySectionSidebarSidebar.appendChild(abilitySectionSidebarSidebarTitle);
		abilitySectionSidebarSidebar.appendChild(abilitySectionSidebarSidebarUl);

		var abilitySectionSidebarLearnsetPartyBox = document.createElement("div");
		abilitySectionSidebarSidebar.appendChild(abilitySectionSidebarLearnsetPartyBox);
	
		abilitySectionContentDescription.setAttribute("name","description");

		var parbo = ["Party","Box"];
		for(var q = 0; q < parbo.length; q++) {
			var abilitySectionSidebarLearnsetInput = document.createElement("input");
			var abilitySectionSidebarLearnsetLabel = document.createElement("label");
			var abilitySectionSidebarLearnsetText = document.createElement("h6");
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

		var abilitySectionSidebarSidebarTitleLiTopText = document.createElement("h4");
		abilitySectionSidebarSidebarTitle.appendChild(abilitySectionSidebarSidebarTitleLiTopText);
		
		if(Generation <= 4) {
			var sidebarAbilityList = ["Pokémon","Primary Ability","Secondary Ability"];
		}
		if(Generation >= 5) {
			var sidebarAbilityList = ["Pokémon","Primary Ability","Secondary Ability","Hidden Ability"];
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


        var abilitySectionHeaderGame = document.createElement("span");
        var abilitySectionHeaderGameImage = document.createElement("img");
        abilitySectionHeaderGameImage.src = "./media/Images/Misc/Title/Text/"+GameFullName.replaceAll(",","").replaceAll("!","").replaceAll("'","").replaceAll(":","")+".png";
        abilitySectionHeaderGameImage.setAttribute("onerror","this.display='none'");
        abilitySectionHeader.appendChild(abilitySectionHeaderGame);
        abilitySectionHeaderGame.appendChild(abilitySectionHeaderGameImage);


		var firstabilityiteration;
		for(var q = 0; q < finaldataAbility.length; q++) {
			if(getApplicable(finaldataAbility[q]["Game"])) {
				var abilitySectionListOptionsInput = document.createElement("input");
				var abilitySectionListOptionsLabel = document.createElement("label");
				var abilitySectionListOptionsText = document.createElement("p");
				abilitySectionListOptionsInput.setAttribute("type","radio");
				abilitySectionListOptionsInput.setAttribute("name","ability-options");
				abilitySectionListOptionsInput.setAttribute("id","ability-options-"+q);
				abilitySectionListOptionsInput.setAttribute("autocomplete","off");
				abilitySectionListOptionsInput.value = q;
				abilitySectionListOptionsLabel.setAttribute("for","ability-options-"+q);
				abilitySectionListOptionsLabel.setAttribute("type","medium");
				abilitySectionListOptionsLabel.setAttribute("data-search-name", finaldataAbility[q]["Ability"].toLowerCase());
				abilitySectionListOptionsText.innerText = finaldataAbility[q]["Ability"];
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
		
		var searchLis = document.querySelectorAll("#contain > div#ability > section[name='list'] ol > label");
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
		searchAbilityAttributes = searchAbilityAttributes.filter(function(v) {return v !== "data-search-name";});
		for(q = 0; q < searchAbilityAttributes.length; q++) {
			searchAbilityAttributes[q] = searchAbilityAttributes[q].replaceAll("data-search-","");
		}
	}



	function abilityOptionsSelector(i) {
		var i;
		if (this.value != undefined) {
			i = this.value;
		}
	
		abilitySectionSidebarSidebarTitleLiTopText.innerHTML = "Pokémon with&nbsp;"+"<u>"+finaldataAbility[i]["Ability"]+"</u>";
		abilitySectionHeaderTitleID.innerText = "#"+getDataArr(finaldataAbility,"Ability",finaldataAbility[i]["Ability"])[0]["ID"];

		abilitySectionHeaderDebutText.innerText = "Introduced in "+getDataArr(finaldataAbility,"Ability",finaldataAbility[i]["Ability"])[0]["Debut"];
		abilitySectionHeaderTitleName.innerText = finaldataAbility[i]["Ability"];
		abilitySectionContentDescriptionText.innerText = getDataArr(finaldataAbilityDescription,"Ability",finaldataAbility[i]["Ability"])[0]["Description"];

		var effect = [];

		for(var q = 0; q < finaldataAbilityEffect.length; q++) {
			if(getApplicable(finaldataAbilityEffect[q]["Game"])) {
				if(finaldataAbilityEffect[q]["Ability"] == finaldataAbility[i]["Ability"]) {
					effect.push(finaldataAbilityEffect[q]["Effect"])
				}
			}
		}

		abilitySectionContentEffectText.innerText = "";

		for(var q = 0; q < effect.length; q++) {
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

		var affect = [];

		for(var q = 0; q < finaldataAbilityAffect.length; q++) {
			if(getApplicable(finaldataAbilityAffect[q]["Game"])) {
				if(finaldataAbilityAffect[q]["Ability"] == finaldataAbility[i]["Ability"]) {
					if (finaldataAbilityAffect[q]["Type"] == "Move") {
						var move = getMoveData(finaldataAbilityAffect[q]["Name"], "Description");
						if (move != undefined) {
							affect.push(finaldataAbilityAffect[q]);
						}
					}
					else if (finaldataAbilityAffect[q]["Type"] == "Item") {
						var item = getItemIcon(finaldataAbilityAffect[q]["Name"]);
						if (item != undefined) {
							affect.push(finaldataAbilityAffect[q]);
						}
					}
				}
			}
		}

		abilitySectionContentAffectText.innerText = "";
		for(var q = 0; q < affect.length; q++) {
			var b = document.createElement("b");
			b.innerText = affect[q]["Name"];
			abilitySectionContentAffectText.appendChild(b)
			
			b.setAttribute("name",affect[q]["Type"].toLowerCase());
			b.setAttribute("type", "invert");
			b.setAttribute("onclick", "dataRedirect()");
			b.setAttribute("function","dataRedirect");
			b.style.color = "var(--type"+getMoveData(affect[q]["Name"],"Type")+")";
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
		



		var lis = document.querySelectorAll("#contain div#ability > section[name='sidebar'] ul li");
		for(var q = 0; q < lis.length; q++) {
			lis[q].remove();
		}


		var sidebarAbilityListFull = sidebarAbilityList.map((v) => v+"_"+JSONPath_Ability);sidebarAbilityListFull = sidebarAbilityListFull.filter((item) => item !== "Pokémon"+"_"+JSONPath_Ability);
		for(var q = 0; q < sidebarAbilityListFull.length; q++) {
			sidebarAbilityListFull[q] = sidebarAbilityListFull[q].replaceAll(" Ability","");
		}
		var AbilityResults = getPokémonData(finaldataPokémonAbility, finaldataAbility[i]["Ability"], sidebarAbilityListFull);
	
		for(var q = 0; q < AbilityResults.length; q++) {
			var abilitySectionSidebarSidebarLi = document.createElement("li");
			abilitySectionSidebarSidebarUl.appendChild(abilitySectionSidebarSidebarLi);
			for(var u = 0; u < sidebarAbilityList.length; u++) {
				var int = AbilityResults[q]["Integer"];
				var name = getPokémonName(int);
				if(u == 0) {
					var abilitySectionSidebarSidebarLiImgOuter = document.createElement("div");
					var abilitySectionSidebarSidebarLiImg = document.createElement("img");
					var abilitySectionSidebarSidebarLiText = document.createElement("small");
					abilitySectionSidebarSidebarLiImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(int,"Box")+".png";
					abilitySectionSidebarSidebarLiImg.setAttribute("title", name);
					abilitySectionSidebarSidebarLiImg.setAttribute("onerror","if(this.getAttribute('srced') == null){this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';this.setAttribute('srced','');}");
					abilitySectionSidebarSidebarLiImg.setAttribute("onload","if(this.getAttribute('srced') != null){this.removeAttribute('srced')};");
					abilitySectionSidebarSidebarLiText.innerText = name;
					abilitySectionSidebarSidebarLi.appendChild(abilitySectionSidebarSidebarLiImgOuter);
					abilitySectionSidebarSidebarLiImgOuter.appendChild(abilitySectionSidebarSidebarLiImg);
					abilitySectionSidebarSidebarLiImgOuter.appendChild(abilitySectionSidebarSidebarLiText);

					abilitySectionSidebarSidebarLiImgOuter.setAttribute("value",int);
					abilitySectionSidebarSidebarLiImgOuter.addEventListener("click", modalData);
					abilitySectionSidebarSidebarLiImgOuter.setAttribute("function","modalData");

				} else if(u != 0) {
				

					if(AbilityResults[q][sidebarAbilityListFull[u - 1]] == finaldataAbility[i]["Ability"]) {
						var abilitySectionSidebarSidebarLiTextOuter = document.createElement("span");
						var abilitySectionSidebarSidebarLiText = document.createElement("h6");
						if(AbilityResults[q][sidebarAbilityListFull[u - 1]] != undefined) {
							abilitySectionSidebarSidebarLiText.innerText = AbilityResults[q][sidebarAbilityListFull[u - 1]];
						}
						abilitySectionSidebarSidebarLiTextOuter.setAttribute("name","ability");
						abilitySectionSidebarSidebarLiTextOuter.setAttribute("title", sidebarAbilityList[u]);
						abilitySectionSidebarSidebarLi.appendChild(abilitySectionSidebarSidebarLiTextOuter);
						abilitySectionSidebarSidebarLiTextOuter.appendChild(abilitySectionSidebarSidebarLiText);

						abilitySectionSidebarSidebarLiTextOuter.classList.add("active");
					} else {
						var abilitySectionSidebarSidebarLiTextOuter = document.createElement("b");
						abilitySectionSidebarSidebarLiTextOuter.setAttribute("type","invert");
						var abilitySectionSidebarSidebarLiText = document.createElement("p");
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
	
		var tempStr;
		if (abilityLearnsetPB.length > 1) {
			tempStr = abilityLearnsetPB.join(",");
		}
		else {
			tempStr = abilityLearnsetPB[0];
		}
		abilityLearnsetPartyBox(tempStr);
	}
};


