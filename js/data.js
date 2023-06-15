let createData = function(id, i) {
	let dataDiv = document.createElement("div");
	let dataDivOverlay = document.createElement("span");
	let dataDivContent = document.createElement("div");
	let dataNavigation = document.createElement("nav");
	let dataSectionMainMapContain = document.createElement("div");
	let dataSectionMainMapZoomIn = document.createElement("figure");
	let dataSectionMainMapZoomInText = document.createElement("h3");
	let dataSectionMainMapZoomOut = document.createElement("figure");
	let dataSectionMainMapZoomOutText = document.createElement("h2");
	let dataSectionMainMapFullscreen = document.createElement("figure");
	let dataSectionMainMapFullscreenText = document.createElement("h5");
	let dataSectionMainMapPause = document.createElement("figure");
	let dataSectionMainMapPauseText = document.createElement("h3");
	let dataSectionMainMapOuter = document.createElement("div");
	let dataSectionMainMapImage = document.createElement("img");
	let dataSectionMainMap = document.createElement("map");

	let dataForm = document.createElement("section");
	let variant = [];
	for(let u = 0; u < finaldata["Pokémon"]["Reference"].length; u++) {
		if(finaldata["Pokémon"]["Reference"][u]["ID"] == id && finaldata["Pokémon"]["Reference"][u][DATA_Pokémon_Reference["Reference"]] == "true") {
			variant.push(finaldata["Pokémon"]["Reference"][u]["Pokémon"]);
		}
	}

	for(let u = 0; u < finaldata["Pokémon"]["Reference"].length; u++) {
		if(finaldata["Pokémon"]["Reference"][u]["ID"] == id && finaldata["Pokémon"]["Reference"][u][DATA_Pokémon_Reference["Reference"]] == "true") {
			let dataFormInput = document.createElement("input");
			let dataFormLabel = document.createElement("label");
			let dataFormImg = document.createElement("img");
			dataFormInput.setAttribute("type","radio");
			dataFormInput.setAttribute("name","data-form-selector"+id);
			dataFormInput.setAttribute("id","data-form-selector-"+u);
			dataFormLabel.title = getPokémonName(u);
			if (variant.length <= 1) {
				dataFormLabel.title += "\n"+getPokémonName(u)+" cannot change form.";
			}
			else if (finaldata["Pokémon"]["Form Change"][u][DATA_Pokémon_FormChange["Change"]] != undefined) {
				dataFormLabel.title += "\n"+finaldata["Pokémon"]["Form Change"][u][DATA_Pokémon_FormChange["Change"]];
			}
			dataFormInput.value = u;
			dataFormLabel.setAttribute("for","data-form-selector-"+u);
			dataFormImg.src = getMedia(true,[getPokémonPath(u)],[PATH_Pokémon_Box_Default_PNG]);
			dataForm.appendChild(dataFormInput);
			dataForm.appendChild(dataFormLabel);
			dataFormLabel.appendChild(dataFormImg);
	
			if(!variant.length >= 2) {
				dataFormInput.setAttribute("checked","");
			}
			dataFormInput.addEventListener("click", loadData);
		}
	}

	icount = [];

	dataForm.setAttribute("name","form");

	dataSectionMainMapZoomInText.innerText = "+";
	dataSectionMainMapZoomIn.setAttribute("name","zoom");
	dataSectionMainMapZoomIn.setAttribute("type","scale");

	dataSectionMainMapZoomOutText.innerText = "-";
	dataSectionMainMapZoomOut.setAttribute("name","reset");
	dataSectionMainMapZoomOut.setAttribute("type","scale");

	dataSectionMainMapFullscreenText.innerText = "⛶";
	dataSectionMainMapFullscreen.setAttribute("name","fullscreen");

	dataSectionMainMapPauseText.innerText = "⏸︎";
	dataSectionMainMapPause.setAttribute("name","pause");

	let dataSectionHeader = document.createElement("section");
	let dataSectionHeaderDivPortrait = document.createElement("div");
	let dataSectionHeaderDivPortraitContent = document.createElement("div");
	let dataSectionHeaderPortrait = document.createElement("img");
	let dataSectionHeaderStatsEVSelector = document.createElement("ol");
	let dataSectionHeaderDivIdNameOuter = document.createElement("div");
	let dataSectionHeaderDivIdName = document.createElement("div");
	let dataSectionHeaderIDNational = document.createElement("h5");
	let dataSectionHeaderName = document.createElement("h3");
	let dataSectionHeaderDebutCategoryOuter = document.createElement("div");
	let dataSectionHeaderDebutCategory = document.createElement("span");

	let dataSectionHeaderDebut = document.createElement("p");
	let dataSectionHeaderCategory = document.createElement("p");
	let dataSectionHeaderType = document.createElement("div");
	let dataSectionMain = document.createElement("section");
	let dataSectionMainMetadata = document.createElement("div");
	let dataSectionMainMetadataStats = document.createElement("div");
	let dataSectionMainDescriptionOuter = document.createElement("div");
	let dataSectionMainMetadataSidebarOuter = document.createElement("div");
	let dataSectionMainMetadataSidebar = document.createElement("div");
	let dataSectionMainMetadataSidebarRow1 = document.createElement("div");
	let dataSectionMainMetadataSidebarRow2 = document.createElement("div");
	let dataSectionMainMetadataSidebarRow3 = document.createElement("div");
	let dataSectionMainMetadataSidebarRow4 = document.createElement("div");
	let dataSectionMainMetadataSidebarCatchRateOuter = document.createElement("span");
	let dataSectionMainMetadataSidebarCatchRateToggle = document.createElement("b");
	dataSectionMainMetadataSidebarCatchRateToggle.setAttribute("type","invert");
	let dataSectionMainMetadataSidebarCatchRateTitle = document.createElement("h6");
	let dataSectionMainMetadataSidebarCatchRate = document.createElement("h5");
	let dataSectionMainMetadataSidebarLevelRateOuter = document.createElement("span");
	let dataSectionMainMetadataSidebarLevelRateToggle = document.createElement("b");
	dataSectionMainMetadataSidebarLevelRateToggle.setAttribute("type","invert");
	let dataSectionMainMetadataSidebarLevelRateTitle = document.createElement("h6");
	let dataSectionMainMetadataSidebarLevelRate = document.createElement("h5");
	let dataSectionMainMetadataSidebarExpYieldOuter = document.createElement("span");
	let dataSectionMainMetadataSidebarExpYieldToggle = document.createElement("b");
	dataSectionMainMetadataSidebarExpYieldToggle.setAttribute("type","invert");
	let dataSectionMainMetadataSidebarExpYieldTitle = document.createElement("h6");
	let dataSectionMainMetadataSidebarExpYield = document.createElement("h5");
	let dataSectionMainAreaDiv = document.createElement("div");
	let dataSectionMainArea = document.createElement("ul");
	dataSectionMain.setAttribute("name","main");
	dataSectionHeader.setAttribute("name","header");

	dataDiv.setAttribute("value",id);

	dataSectionHeaderDivPortrait.setAttribute("name","portrait");
	dataSectionHeaderDivIdNameOuter.setAttribute("name","idname");
	dataSectionHeaderDebutCategoryOuter.setAttribute("name","debutcategorytype");
	dataSectionHeaderName.setAttribute("name","name");

	dataSectionHeaderCategory.setAttribute("name","category");
	dataSectionHeaderDebut.setAttribute("name","debut");

	dataDivOverlay.addEventListener("click", modalData);

	let navz = ["metadata","learnset","area"];
	let navztitles = ["Data","Learnset","Area"];
	for(let q = 0; q < navz.length; q++) {
		let dataNavigationInput = document.createElement("input");
		let dataNavigationLabel = document.createElement("label");
		let dataNavigationLabelText = document.createElement("h6");
		dataNavigationInput.setAttribute("type","radio");
		dataNavigationInput.setAttribute("name","data-navigation"+id);
		dataNavigationInput.setAttribute("id","data-navigation-"+navz[q]+id);
		dataNavigationInput.setAttribute("value", q);
		if(q == 0) {
			dataNavigationInput.setAttribute("checked","");
		}
		dataNavigationLabel.setAttribute("for","data-navigation-"+navz[q]+id);
		dataNavigationLabelText.innerText = navztitles[q];
		dataNavigation.appendChild(dataNavigationInput);
		dataNavigation.appendChild(dataNavigationLabel);
		dataNavigationLabel.appendChild(dataNavigationLabelText);
		
		dataNavigationInput.addEventListener("click", showMetadataLearnsetArea);
	}


	dataSectionHeaderIDNational.innerText = "#"+id;
	dataSectionHeaderIDNational.setAttribute("name","national");
	let dataSectionHeaderTypePrimaryOuter = document.createElement("span");
	let dataSectionHeaderTypePrimary = document.createElement("b");
	dataSectionHeaderTypePrimary.setAttribute("type","invert");
	let dataSectionHeaderTypePrimaryImg = document.createElement("img");
	dataSectionHeaderTypePrimaryImg.setAttribute("dataname","value");
	dataSectionHeaderType.appendChild(dataSectionHeaderTypePrimaryOuter);
	dataSectionHeaderTypePrimaryOuter.appendChild(dataSectionHeaderTypePrimary);
	dataSectionHeaderTypePrimary.appendChild(dataSectionHeaderTypePrimaryImg);
	let dataSectionHeaderTypeSecondaryOuter = document.createElement("span");
	let dataSectionHeaderTypeSecondary = document.createElement("b");
	dataSectionHeaderTypeSecondary.setAttribute("type","invert");
	let dataSectionHeaderTypeSecondaryImg = document.createElement("img");
	dataSectionHeaderTypeSecondaryImg.setAttribute("dataname","value");
	dataSectionHeaderType.appendChild(dataSectionHeaderTypeSecondaryOuter);
	dataSectionHeaderTypeSecondaryOuter.appendChild(dataSectionHeaderTypeSecondary);
	dataSectionHeaderTypeSecondary.appendChild(dataSectionHeaderTypeSecondaryImg);


	dataSectionMainMapImage.src = getMedia(true,["Map"],[PATH_Region_Map]);
	dataSectionMainMapImage.setAttribute("usemap", "#"+Region.join('_')+"-"+id);
	
	dataSectionMainMap.setAttribute("name", Region.join('_')+"-"+id);
	dataSectionMainMap.setAttribute("id", Region.join('_')+"-"+id);
	dataSectionMainDescriptionOuter.classList.add("scroll");
	dataSectionMainDescriptionOuter.setAttribute("name","description");

	dataSectionMainMetadataSidebarCatchRateOuter.setAttribute("name","catchrate");
	dataSectionMainMetadataSidebarCatchRateTitle.innerText = "Catch Rate";

	dataSectionMainMetadataSidebarCatchRate.setAttribute("dataname","value");
	dataSectionMainMetadataSidebarCatchRate.setAttribute("value","");
	dataSectionMainMetadataSidebarLevelRateOuter.setAttribute("name","levelingrate");
	dataSectionMainMetadataSidebarLevelRateTitle.innerText = "Leveling Rate";

	dataSectionMainMetadataSidebarLevelRate.setAttribute("dataname","value");
	dataSectionMainMetadataSidebarLevelRate.setAttribute("value","");
	dataSectionMainMetadataSidebarExpYieldOuter.setAttribute("name","experienceyield");
	dataSectionMainMetadataSidebarExpYieldTitle.innerText = "Experience Yield";

	dataSectionMainMetadataSidebarExpYield.setAttribute("dataname","value");
	dataSectionMainMetadataSidebarExpYield.setAttribute("value","");

	let Pokédex = Object.keys(DATA_Pokémon_PokédexID)

	for(q = 0; q < Pokédex.length; q++) {
		let z = q+1;
		let dataSectionHeaderIDRegional = document.createElement("h5");
		if(finaldata["Pokémon"]["Pokédex ID"][i][DATA_Pokémon_PokédexID[Pokédex[q]]] != null) {
			dataSectionHeaderIDRegional.innerText = "#"+finaldata["Pokémon"]["Pokédex ID"][i][DATA_Pokémon_PokédexID[Pokédex[q]]];
		}
		dataSectionHeaderIDRegional.setAttribute("name","regional"+z)
		dataSectionHeaderDivIdName.appendChild(dataSectionHeaderIDRegional);
	}
	if(Ability.length >= 1) {
		let dataSectionMainMetadataSidebarRow1 = document.createElement("div");
		let dataSectionMainMetadataSidebarAbilityOuter = document.createElement("span");
		dataSectionMainMetadataSidebarAbilityOuter.setAttribute("name", "ability");
		dataSectionMainMetadataSidebar.appendChild(dataSectionMainMetadataSidebarRow1);
		dataSectionMainMetadataSidebarRow1.appendChild(dataSectionMainMetadataSidebarAbilityOuter);
		
		let dataSectionMainMetadataSidebarAbilityPrimarySecondaryOuter = document.createElement("span");
		dataSectionMainMetadataSidebarAbilityOuter.appendChild(dataSectionMainMetadataSidebarAbilityPrimarySecondaryOuter);

		let dataSectionMainMetadataSidebarAbilityPrimaryContent = document.createElement("span");
		let dataSectionMainMetadataSidebarAbilityPrimary = document.createElement("b");
		dataSectionMainMetadataSidebarAbilityPrimary.setAttribute("type","invert");
		let dataSectionMainMetadataSidebarAbilityPrimaryText = document.createElement("small");
		dataSectionMainMetadataSidebarAbilityPrimary.setAttribute("title","Primary Ability");
		dataSectionMainMetadataSidebarAbilityPrimary.setAttribute("dataname","value");
		dataSectionMainMetadataSidebarAbilityPrimaryText.innerText = "Primary Ability";
		dataSectionMainMetadataSidebarAbilityPrimarySecondaryOuter.appendChild(dataSectionMainMetadataSidebarAbilityPrimaryContent);
		dataSectionMainMetadataSidebarAbilityPrimaryContent.appendChild(dataSectionMainMetadataSidebarAbilityPrimary);
		dataSectionMainMetadataSidebarAbilityPrimary.appendChild(dataSectionMainMetadataSidebarAbilityPrimaryText);

		dataSectionMainMetadataSidebarAbilityPrimary.addEventListener("click", function() {callPopUp("Ability");});
		

		let dataSectionMainMetadataSidebarAbilitySecondaryContent = document.createElement("span");
		let dataSectionMainMetadataSidebarAbilitySecondary = document.createElement("b");
		dataSectionMainMetadataSidebarAbilitySecondary.setAttribute("type","invert");
		let dataSectionMainMetadataSidebarAbilitySecondaryText = document.createElement("small");
		dataSectionMainMetadataSidebarAbilitySecondary.setAttribute("title","Secondary Ability");
		dataSectionMainMetadataSidebarAbilitySecondary.setAttribute("dataname","value");
		dataSectionMainMetadataSidebarAbilitySecondaryText.innerText = "Secondary Ability";
		dataSectionMainMetadataSidebarAbilityPrimarySecondaryOuter.appendChild(dataSectionMainMetadataSidebarAbilitySecondaryContent);
		dataSectionMainMetadataSidebarAbilitySecondaryContent.appendChild(dataSectionMainMetadataSidebarAbilitySecondary);
		dataSectionMainMetadataSidebarAbilitySecondary.appendChild(dataSectionMainMetadataSidebarAbilitySecondaryText);


		dataSectionMainMetadataSidebarAbilitySecondary.addEventListener("click", function() {callPopUp("Ability");});
		
		if(Ability.length >= 3) {
			let dataSectionMainMetadataSidebarAbilityHiddenOuter = document.createElement("span");
			let dataSectionMainMetadataSidebarAbilityHiddenContent = document.createElement("span");
			let dataSectionMainMetadataSidebarAbilityHidden = document.createElement("b");
			dataSectionMainMetadataSidebarAbilityHidden.setAttribute("type","invert");
			let dataSectionMainMetadataSidebarAbilityHiddenText = document.createElement("small");
			dataSectionMainMetadataSidebarAbilityHidden.setAttribute("title","Hidden Ability");
			dataSectionMainMetadataSidebarAbilityHidden.setAttribute("dataname","value");
			dataSectionMainMetadataSidebarAbilityHiddenText.innerText = "Hidden Ability";
			dataSectionMainMetadataSidebarAbilityOuter.appendChild(dataSectionMainMetadataSidebarAbilityHiddenOuter);
			dataSectionMainMetadataSidebarAbilityHiddenOuter.appendChild(dataSectionMainMetadataSidebarAbilityHiddenContent);
			dataSectionMainMetadataSidebarAbilityHiddenContent.appendChild(dataSectionMainMetadataSidebarAbilityHidden);
			dataSectionMainMetadataSidebarAbilityHidden.appendChild(dataSectionMainMetadataSidebarAbilityHiddenText);
			
			dataSectionMainMetadataSidebarAbilityHidden.addEventListener("click", function() {callPopUp("Ability");});
			
		}
	}
	dataSectionMainMetadataSidebar.appendChild(dataSectionMainMetadataSidebarRow2);
	dataSectionMainMetadataSidebarRow2.appendChild(dataSectionMainMetadataSidebarCatchRateOuter);

	let EggCycleStep;
	if((Generation >= 2 && Generation <= 3) || Generation == 7) {
		EggCycleStep = "256";
	}
	if(Generation == 4) {
		EggCycleStep = "255";
	}
	if(Generation >= 5 && Generation <= 6) {
		EggCycleStep = "257";
	}
	
	if(Egg == true) {
		let dataSectionMainMetadataSidebarHatchRateOuter = document.createElement("span");
		let dataSectionMainMetadataSidebarHatchRateToggle = document.createElement("b");
		dataSectionMainMetadataSidebarHatchRateToggle.setAttribute("type","invert");
		let dataSectionMainMetadataSidebarHatchRateTitle = document.createElement("h6");
		let dataSectionMainMetadataSidebarHatchRate = document.createElement("h5");
		dataSectionMainMetadataSidebarHatchRateOuter.setAttribute("name","hatchrate");
		dataSectionMainMetadataSidebarHatchRateTitle.innerText = "Hatch Rate";
		dataSectionMainMetadataSidebarHatchRate.setAttribute("dataname","value");
		dataSectionMainMetadataSidebarHatchRate.setAttribute("value","");
		dataSectionMainMetadataSidebarRow2.appendChild(dataSectionMainMetadataSidebarHatchRateOuter);
		dataSectionMainMetadataSidebarHatchRateOuter.appendChild(dataSectionMainMetadataSidebarHatchRateToggle);
		dataSectionMainMetadataSidebarHatchRateToggle.appendChild(dataSectionMainMetadataSidebarHatchRateTitle);
		dataSectionMainMetadataSidebarHatchRateToggle.appendChild(dataSectionMainMetadataSidebarHatchRate);
		dataSectionMainMetadataSidebarHatchRateOuter.addEventListener("click", function() {callPopUp("Hatch Rate");});
	}
	if(Gender == true) {
		dataSectionMainMetadataSidebar.appendChild(dataSectionMainMetadataSidebarRow3);
		let dataSectionMainMetadataSidebarGenderRatioOuter = document.createElement("span");
		let dataSectionMainMetadataSidebarGenderRatioTitle = document.createElement("h6");
		let dataSectionMainMetadataSidebarGenderRatioBar = document.createElement("span");
		let dataSectionMainMetadataSidebarGenderRatioToggle = document.createElement("b");
		dataSectionMainMetadataSidebarGenderRatioToggle.setAttribute("type","invert");
		let dataSectionMainMetadataSidebarGenderRatioMale = document.createElement("span");
		let dataSectionMainMetadataSidebarGenderRatioFemale = document.createElement("span");
		let dataSectionMainMetadataSidebarGenderRatioGenderless = document.createElement("span");
		dataSectionMainMetadataSidebarGenderRatioOuter.setAttribute("name","genderratio");
		dataSectionMainMetadataSidebarGenderRatioTitle.innerText = "Gender ratio";
		dataSectionMainMetadataSidebarGenderRatioToggle.setAttribute("dataname","value");
		dataSectionMainMetadataSidebarGenderRatioMale.setAttribute("name","male");
		dataSectionMainMetadataSidebarGenderRatioFemale.setAttribute("name","female");
		dataSectionMainMetadataSidebarGenderRatioGenderless.setAttribute("name","genderless");
		dataSectionMainMetadataSidebarGenderRatioGenderless.setAttribute("title","");
		dataSectionMainMetadataSidebarGenderRatioToggle.style.display = "none";
		dataSectionMainMetadataSidebarGenderRatioOuter.appendChild(dataSectionMainMetadataSidebarGenderRatioBar);
		dataSectionMainMetadataSidebarGenderRatioBar.appendChild(dataSectionMainMetadataSidebarGenderRatioTitle);
		dataSectionMainMetadataSidebarGenderRatioBar.appendChild(dataSectionMainMetadataSidebarGenderRatioToggle);
		dataSectionMainMetadataSidebarGenderRatioToggle.appendChild(dataSectionMainMetadataSidebarGenderRatioMale);
		dataSectionMainMetadataSidebarGenderRatioToggle.appendChild(dataSectionMainMetadataSidebarGenderRatioFemale);
		dataSectionMainMetadataSidebarGenderRatioToggle.appendChild(dataSectionMainMetadataSidebarGenderRatioGenderless);
		dataSectionMainMetadataSidebarRow3.appendChild(dataSectionMainMetadataSidebarGenderRatioOuter);

		dataSectionMainMetadataSidebarGenderRatioToggle.addEventListener("click", function() {callPopUp("Gender Ratio");});
	}
	if(Egg == true) {
		let dataSectionMainMetadataSidebarEggGroupOuter = document.createElement("span");
		let dataSectionMainMetadataSidebarEggGroupContent = document.createElement("span");
		let dataSectionMainMetadataSidebarEggGroupTitle = document.createElement("h6");
		let dataSectionMainMetadataSidebarEggGroupPrimarySecondaryOuter = document.createElement("span");
		let dataSectionMainMetadataSidebarEggGroupPrimaryOuter = document.createElement("span");
		let dataSectionMainMetadataSidebarEggGroupPrimary = document.createElement("b");
		dataSectionMainMetadataSidebarEggGroupPrimary.setAttribute("type","invert");
		let dataSectionMainMetadataSidebarEggGroupPrimaryText = document.createElement("small");
		let dataSectionMainMetadataSidebarEggGroupSecondaryOuter = document.createElement("span");
		let dataSectionMainMetadataSidebarEggGroupSecondary = document.createElement("b");
		dataSectionMainMetadataSidebarEggGroupSecondary.setAttribute("type","invert");
		let dataSectionMainMetadataSidebarEggGroupSecondaryText = document.createElement("small");
		dataSectionMainMetadataSidebarEggGroupOuter.setAttribute("name","egggroup");
		dataSectionMainMetadataSidebarEggGroupTitle.innerText = "Egg Group";
		dataSectionMainMetadataSidebarEggGroupPrimaryOuter.setAttribute("name","primary");
		dataSectionMainMetadataSidebarEggGroupPrimary.setAttribute("title","Primary Egg Group");
		dataSectionMainMetadataSidebarEggGroupPrimaryText.setAttribute("dataname","value");
		dataSectionMainMetadataSidebarEggGroupSecondaryOuter.setAttribute("name","secondary");
		dataSectionMainMetadataSidebarEggGroupSecondary.setAttribute("title","Secondary Egg Group");
		dataSectionMainMetadataSidebarEggGroupSecondaryText.setAttribute("dataname","value");
		dataSectionMainMetadataSidebarEggGroupPrimaryOuter.style.display = "none";
		dataSectionMainMetadataSidebarEggGroupSecondaryOuter.style.display = "none";
		dataSectionMainMetadataSidebarRow3.appendChild(dataSectionMainMetadataSidebarEggGroupOuter);
		dataSectionMainMetadataSidebarEggGroupOuter.appendChild(dataSectionMainMetadataSidebarEggGroupContent);
		dataSectionMainMetadataSidebarEggGroupContent.appendChild(dataSectionMainMetadataSidebarEggGroupTitle);
		dataSectionMainMetadataSidebarEggGroupContent.appendChild(dataSectionMainMetadataSidebarEggGroupPrimarySecondaryOuter);
		dataSectionMainMetadataSidebarEggGroupPrimarySecondaryOuter.appendChild(dataSectionMainMetadataSidebarEggGroupPrimaryOuter);
		dataSectionMainMetadataSidebarEggGroupPrimaryOuter.appendChild(dataSectionMainMetadataSidebarEggGroupPrimary);
		dataSectionMainMetadataSidebarEggGroupPrimary.appendChild(dataSectionMainMetadataSidebarEggGroupPrimaryText);
		dataSectionMainMetadataSidebarEggGroupPrimarySecondaryOuter.appendChild(dataSectionMainMetadataSidebarEggGroupSecondaryOuter);
		dataSectionMainMetadataSidebarEggGroupSecondaryOuter.appendChild(dataSectionMainMetadataSidebarEggGroupSecondary);
		dataSectionMainMetadataSidebarEggGroupSecondary.appendChild(dataSectionMainMetadataSidebarEggGroupSecondaryText);
		
		dataSectionMainMetadataSidebarEggGroupPrimary.addEventListener("click", function() {callPopUp("Egg Group");});
		dataSectionMainMetadataSidebarEggGroupSecondary.addEventListener("click", function() {callPopUp("Egg Group");});
	}
	dataSectionMainMetadataSidebar.appendChild(dataSectionMainMetadataSidebarRow4);

      let d = getDefaultInt(i);

      let dataPrevious = document.createElement("aside");
      let dataNext = document.createElement("aside");
	  dataPrevious.setAttribute("name","previous");
	  dataNext.setAttribute("name","next");
      dataDivContent.appendChild(dataPrevious);
      dataDivContent.appendChild(dataNext);

	  if ((parseInt(getIntID(d,"")) - 1) > 0) {
        let dataPreviousNational = document.createElement("b");
		dataPreviousNational.setAttribute("type","invert");
        let dataPreviousNationalImg = document.createElement("img");
        
        dataPreviousNational.setAttribute("name","national");
        dataPreviousNational.setAttribute("value",getIntID("",(parseInt(getIntID(d,"")) - 1)));
        dataPreviousNational.title = "#"+(parseInt(getIntID(d,"")) - 1)+"\n"+finaldata["Pokémon"]["Reference"][getIntID("",(parseInt(getIntID(d,"")) - 1))]["Pokémon"];
        dataPreviousNationalImg.src = getMedia(true,[getPokémonPath(getIntID("",(parseInt(getIntID(d,""))-1)))],[PATH_Pokémon_Box_Default_PNG]);
        
        dataPrevious.appendChild(dataPreviousNational);
        dataPreviousNational.appendChild(dataPreviousNationalImg);

        dataPreviousNational.addEventListener("click",modalData);
		dataPreviousNational.setAttribute("function","modalData");
	  }

	  if (finaldata["Pokémon"]["Reference"][getIntID("",(parseInt(getIntID(d,""))+1))][DATA_Pokémon_Reference["Reference"]] == "true") {
        let dataNextNational = document.createElement("b");
		dataNextNational.setAttribute("type","invert");
        let dataNextNationalImg = document.createElement("img");
        
        dataNextNational.setAttribute("name","national");
        dataNextNational.setAttribute("value",getIntID("",(parseInt(getIntID(d,""))+1)));
        dataNextNational.title = "#"+(parseInt(getIntID(d,""))+1)+"\n"+finaldata["Pokémon"]["Reference"][getIntID("",(parseInt(getIntID(d,""))+1))]["Pokémon"];
        dataNextNationalImg.src = getMedia(true,[getPokémonPath(getIntID("",(parseInt(getIntID(d,""))+1)))],[PATH_Pokémon_Box_Default_PNG]);
        
        dataNext.appendChild(dataNextNational);
        dataNextNational.appendChild(dataNextNationalImg);

        dataNextNational.addEventListener("click",modalData);
		dataNextNational.setAttribute("function","modalData");
	  }
	  
	  

	for (q = 0; q < Pokédex.length; q++) {
		let y = q+1;
		let previousID = getRegionalID("-",getIntID(d,""),DATA_Pokémon_PokédexID[Pokédex[q]]);
		let nextID = getRegionalID("+",getIntID(d,""),DATA_Pokémon_PokédexID[Pokédex[q]]);

		if (previousID != undefined) {
			let dataPreviousRegional = document.createElement("b");
			dataPreviousRegional.setAttribute("type","invert");
			let dataPreviousRegionalImg = document.createElement("img");
	
			dataPreviousRegional.setAttribute("name","regional"+y);
			dataPreviousRegional.setAttribute("value",getIntID("",previousID));
			dataPreviousRegional.title = "#"+finaldata["Pokémon"]["Pokédex ID"][getIntID("",previousID)][DATA_Pokémon_PokédexID[Pokédex[q]]]+"\n"+finaldata["Pokémon"]["Reference"][getIntID("",previousID)]["Pokémon"];
			dataPreviousRegionalImg.src = getMedia(true,[getPokémonPath(getIntID("",previousID))],[PATH_Pokémon_Box_Default_PNG]);
			
			dataPrevious.appendChild(dataPreviousRegional);
			dataPreviousRegional.appendChild(dataPreviousRegionalImg);

			dataPreviousRegional.addEventListener("click",modalData);
			dataPreviousRegional.setAttribute("function","modalData");
		}
		if (nextID != undefined) {
			let dataNextRegional = document.createElement("b");
			dataNextRegional.setAttribute("type","invert");
			let dataNextRegionalImg = document.createElement("img");
	
			dataNextRegional.setAttribute("name","regional"+y);
			dataNextRegional.setAttribute("value",getIntID("",nextID));
			dataNextRegional.title = "#"+finaldata["Pokémon"]["Pokédex ID"][getIntID("",nextID)][DATA_Pokémon_PokédexID[Pokédex[q]]]+"\n"+finaldata["Pokémon"]["Reference"][getIntID("",nextID)]["Pokémon"];
			dataNextRegionalImg.src = getMedia(true,[getPokémonPath(getIntID("",nextID))],[PATH_Pokémon_Box_Default_PNG]); 
			
			dataNext.appendChild(dataNextRegional);
			dataNextRegional.appendChild(dataNextRegionalImg);

			dataNextRegional.addEventListener("click",modalData);
			dataNextRegional.setAttribute("function","modalData");
		}
	}
	  
	  
	document.getElementById("data").appendChild(dataDiv);
	dataDiv.appendChild(dataDivOverlay);
	dataDiv.appendChild(dataDivContent);
	dataDivContent.appendChild(dataForm);
	dataDivContent.appendChild(dataSectionHeader);
	dataSectionHeader.appendChild(dataSectionHeaderDivPortrait);
	dataSectionHeaderDivPortrait.appendChild(dataSectionHeaderDivPortraitContent);
	dataSectionHeaderDivPortraitContent.appendChild(dataSectionHeaderPortrait);
	dataSectionMainMetadataStats.appendChild(dataSectionHeaderStatsEVSelector);
	dataSectionHeader.appendChild(dataSectionHeaderDivIdNameOuter);
	dataSectionHeaderDivIdNameOuter.appendChild(dataSectionHeaderDivIdName);
	dataSectionHeaderDivIdName.appendChild(dataSectionHeaderIDNational);
	dataSectionHeaderDivIdName.appendChild(dataSectionHeaderName);
	dataSectionHeader.appendChild(dataSectionHeaderDebutCategoryOuter);
	dataSectionHeaderDebutCategoryOuter.appendChild(dataSectionHeaderDebutCategory);
	dataSectionHeaderDebutCategory.appendChild(dataSectionHeaderCategory);
	dataSectionHeaderDebutCategory.appendChild(dataSectionHeaderDebut);
	dataSectionHeaderDebutCategoryOuter.appendChild(dataSectionHeaderType);
	dataDivContent.appendChild(dataSectionMain);
	dataSectionMainAreaDiv.appendChild(dataSectionMainMapContain);
	dataSectionMainMapContain.appendChild(dataSectionMainMapOuter);
	dataSectionMainMapContain.appendChild(dataSectionMainMapZoomOut);
	dataSectionMainMapZoomOut.appendChild(dataSectionMainMapZoomOutText);
	dataSectionMainMapContain.appendChild(dataSectionMainMapZoomIn);
	dataSectionMainMapZoomIn.appendChild(dataSectionMainMapZoomInText);
	dataSectionMainMapContain.appendChild(dataSectionMainMapFullscreen);
	dataSectionMainMapFullscreen.appendChild(dataSectionMainMapFullscreenText);
	dataSectionMainMapContain.appendChild(dataSectionMainMapPause);
	dataSectionMainMapPause.appendChild(dataSectionMainMapPauseText);
	dataSectionMainMapOuter.appendChild(dataSectionMainMapImage);
	dataSectionMainMapOuter.appendChild(dataSectionMainMap);
	dataDivContent.appendChild(dataSectionMain);
	dataSectionMain.appendChild(dataNavigation);
	dataSectionMain.appendChild(dataSectionMainMetadata);
	dataSectionMainMetadata.appendChild(dataSectionMainDescriptionOuter);
	dataSectionMainMetadataSidebarOuter.appendChild(dataSectionMainMetadataStats);

	dataSectionMainMapFullscreen.addEventListener("click", function() {fullscreenIMG([dataSectionMainMapImage],0)});
	dataSectionMainMap.addEventListener("mousedown",function(event){if(event.button === 1){fullscreenIMG([dataSectionMainMapImage],0)}});
	
	dataSectionMainMapOuter.addEventListener("click", function() {zoom(dataSectionMainMapOuter,"pause",undefined)});
	dataSectionMainMapZoomIn.addEventListener("click",function() {zoom(dataSectionMainMapOuter,"in",false)});
	dataSectionMainMapZoomOut.addEventListener("click",function() {zoom(dataSectionMainMapOuter,"out",true)});
	dataSectionMainMapOuter.addEventListener("wheel",function(event){let delta = event.deltaY.toString();if(delta.includes("-")){zoom(dataSectionMainMapOuter,"in",false)}else if(!delta.includes("-")){zoom(dataSectionMainMapOuter,"out",true)}});
	dataSectionMainMapOuter.addEventListener("mouseleave", function() {zoom(dataSectionMainMapOuter,"out",undefined)});
	dataSectionMainMapOuter.addEventListener("mouseenter", function() {zoom(dataSectionMainMapOuter,"in",undefined)});
	dataSectionMainMapOuter.addEventListener("mousemove", function() {zoom(dataSectionMainMapOuter,"pan",undefined)});

	dataSectionMainMetadataSidebarOuter.setAttribute("name","sidebar");


	let dataSectionMainMetadataPopup = document.createElement("div");
	let dataSectionMainMetadataPopupOuter = document.createElement("div");
	let dataSectionMainMetadataPopupSpan1 = document.createElement("span");
	let dataSectionMainMetadataPopupSpan1ID = document.createElement("h6");
	let dataSectionMainMetadataPopupSpan1Icon = document.createElement("img");
	let dataSectionMainMetadataPopupSpan2 = document.createElement("span");
	let dataSectionMainMetadataPopupSpan2Title = document.createElement("h4");
	let dataSectionMainMetadataPopupSpan2Description = document.createElement("p");
	let dataSectionMainMetadataPopupTitleExitUp = document.createElement("figure");
	let dataSectionMainMetadataPopupTitleExitUpText = document.createElement("h3");
	let dataSectionMainMetadataPopupTitleExitDown = document.createElement("figure");
	let dataSectionMainMetadataPopupTitleExitDownText = document.createElement("h3");
	let dataSectionMainMetadataPopupListOuter = document.createElement("div");
	let dataSectionMainMetadataPopupList = document.createElement("ul");
	dataSectionMainMetadataPopupListOuter.setAttribute("name","list");
	dataSectionMainMetadataPopupSpan1Icon.setAttribute("onerror","this.style.display='none'");
	dataSectionMainMetadataPopupTitleExitUp.setAttribute("name","up");
	dataSectionMainMetadataPopupTitleExitUpText.innerHTML = "«";
	dataSectionMainMetadataPopupTitleExitDown.setAttribute("name","down");
	dataSectionMainMetadataPopupTitleExitDownText.innerHTML = "»";
	dataSectionMainMetadata.appendChild(dataSectionMainMetadataPopup);
	dataSectionMainMetadataPopup.appendChild(dataSectionMainMetadataPopupOuter);
	dataSectionMainMetadataPopupOuter.appendChild(dataSectionMainMetadataPopupSpan1);
	dataSectionMainMetadataPopupSpan1.appendChild(dataSectionMainMetadataPopupSpan1ID);
	dataSectionMainMetadataPopupSpan1.appendChild(dataSectionMainMetadataPopupSpan1Icon);
	dataSectionMainMetadataPopupOuter.appendChild(dataSectionMainMetadataPopupSpan2);
	dataSectionMainMetadataPopupSpan2.appendChild(dataSectionMainMetadataPopupSpan2Title);
	dataSectionMainMetadataPopupSpan2.appendChild(dataSectionMainMetadataPopupSpan2Description);
	dataSectionMainMetadataPopupOuter.appendChild(dataSectionMainMetadataPopupTitleExitUp);
	dataSectionMainMetadataPopupTitleExitUp.appendChild(dataSectionMainMetadataPopupTitleExitUpText);
	dataSectionMainMetadataPopupOuter.appendChild(dataSectionMainMetadataPopupTitleExitDown);
	dataSectionMainMetadataPopupTitleExitDown.appendChild(dataSectionMainMetadataPopupTitleExitDownText);
	dataSectionMainMetadataPopup.appendChild(dataSectionMainMetadataPopupListOuter);
	dataSectionMainMetadataPopupListOuter.appendChild(dataSectionMainMetadataPopupList);
	dataSectionMainMetadata.appendChild(dataSectionMainMetadataSidebarOuter);
	dataSectionMainMetadataSidebarOuter.appendChild(dataSectionMainMetadataSidebar);
	dataSectionMainMetadataSidebarCatchRateOuter.appendChild(dataSectionMainMetadataSidebarCatchRateToggle);
	dataSectionMainMetadataSidebarCatchRateToggle.appendChild(dataSectionMainMetadataSidebarCatchRateTitle);
	dataSectionMainMetadataSidebarCatchRateToggle.appendChild(dataSectionMainMetadataSidebarCatchRate);
	dataSectionMainMetadataSidebarRow4.appendChild(dataSectionMainMetadataSidebarExpYieldOuter);
	dataSectionMainMetadataSidebarExpYieldOuter.appendChild(dataSectionMainMetadataSidebarExpYieldToggle);
	dataSectionMainMetadataSidebarExpYieldToggle.appendChild(dataSectionMainMetadataSidebarExpYieldTitle);
	dataSectionMainMetadataSidebarExpYieldToggle.appendChild(dataSectionMainMetadataSidebarExpYield);
	dataSectionMainMetadataSidebarRow4.appendChild(dataSectionMainMetadataSidebarLevelRateOuter);
	dataSectionMainMetadataSidebarLevelRateOuter.appendChild(dataSectionMainMetadataSidebarLevelRateToggle);
	dataSectionMainMetadataSidebarLevelRateToggle.appendChild(dataSectionMainMetadataSidebarLevelRateTitle);
	dataSectionMainMetadataSidebarLevelRateToggle.appendChild(dataSectionMainMetadataSidebarLevelRate);

	dataSectionMainMetadataPopup.setAttribute("name","popup");


	let baseev = ["Base Stats","EV Yield"];
	for(let q = 0; q < baseev.length; q++) {
		let dataSectionHeaderStatsEVSelectorInput = document.createElement("input");
		let dataSectionHeaderStatsEVSelectorLabel = document.createElement("label");
		let dataSectionHeaderStatsEVSelectorLabelText = document.createElement("h6");
		dataSectionHeaderStatsEVSelectorInput.setAttribute("type","radio");
		dataSectionHeaderStatsEVSelectorInput.setAttribute("name","data-baseev-"+id);
		dataSectionHeaderStatsEVSelectorInput.setAttribute("id","data-baseev-"+id+"-"+baseev[q].toLowerCase().replace(" ",""));
		dataSectionHeaderStatsEVSelectorInput.setAttribute("alt", baseev[q].toLowerCase().replace(" ",""));
		dataSectionHeaderStatsEVSelectorInput.setAttribute("value", q);
		dataSectionHeaderStatsEVSelectorInput.setAttribute("onclick","let x=this.alt.replace('/','').replace(' ','');let nodes=this.parentElement.parentElement.querySelectorAll(':scope > ul[name]');let node=this.parentElement.parentElement.querySelector(':scope > ul[name='+x+']');for(let i=0;i<nodes.length; i++){nodes[i].style.display='none';};node.style.display='flex';");
		dataSectionHeaderStatsEVSelectorLabel.setAttribute("for","data-baseev-"+id+"-"+baseev[q].toLowerCase().replace(" ",""));
		dataSectionHeaderStatsEVSelectorLabelText.innerText = baseev[q];
		dataSectionHeaderStatsEVSelector.appendChild(dataSectionHeaderStatsEVSelectorInput);
		dataSectionHeaderStatsEVSelector.appendChild(dataSectionHeaderStatsEVSelectorLabel);
		dataSectionHeaderStatsEVSelectorLabel.appendChild(dataSectionHeaderStatsEVSelectorLabelText);
		if(q == 0) {
			dataSectionHeaderStatsEVSelectorInput.setAttribute("checked","");
		}
		let dataSectionHeaderStatsEVUl = document.createElement("ul");
		dataSectionHeaderStatsEVUl.setAttribute("name", baseev[q].toLowerCase().replace(" ",""));
		dataSectionMainMetadataStats.appendChild(dataSectionHeaderStatsEVUl);
		for(let u = 0; u < Stats.length; u++) {
			let dataSectionHeaderStatEV = document.createElement("b");
			dataSectionHeaderStatEV.setAttribute("type","invert");
			let dataSectionHeaderStatEVText = document.createElement("h6");
			let dataSectionHeaderStatEVValue = document.createElement("li");
			let dataSectionHeaderStatsEVSpan = document.createElement("b");
			dataSectionHeaderStatsEVSpan.setAttribute("type","invert");
			let dataSectionHeaderStatsEVSpanText = document.createElement("p");
			dataSectionHeaderStatEV.setAttribute("name", Stats[u]["Name"].toLowerCase().replace(" ","").replace(".",""));
			dataSectionHeaderStatEVText.innerText = Stats[u]["Name"];
			dataSectionHeaderStatEVText.setAttribute("dataname","value");
			dataSectionHeaderStatEVValue.setAttribute("name",Stats[u]["Name"].toLowerCase().replaceAll(".","").replaceAll(" ",""));
			dataSectionHeaderStatsEVSpanText.setAttribute("dataname","value");
			dataSectionHeaderStatsEVSpan.setAttribute("value","");
			dataSectionHeaderStatsEVUl.appendChild(dataSectionHeaderStatEV);
			dataSectionHeaderStatEV.appendChild(dataSectionHeaderStatEVText);
			dataSectionHeaderStatsEVUl.appendChild(dataSectionHeaderStatEVValue);
			dataSectionHeaderStatEVValue.appendChild(dataSectionHeaderStatsEVSpan);
			dataSectionHeaderStatsEVSpan.appendChild(dataSectionHeaderStatsEVSpanText);
		}
	}
	let dataSectionMainLearnsetDiv = document.createElement("div");
	let dataSectionMainLearnset = document.createElement("div");
	dataSectionMain.appendChild(dataSectionMainLearnsetDiv);
	dataSectionMainLearnsetDiv.appendChild(dataSectionMainLearnset);
	let dataSectionMainLearnsetOuter = document.createElement("div");
	let dataSectionMainLearnsetUl = document.createElement("ul");
	let dataSectionMainLearnsetTitle = document.createElement("ol");

	dataSectionMainLearnset.appendChild(dataSectionMainLearnsetOuter);
	dataSectionMainLearnsetOuter.appendChild(dataSectionMainLearnsetTitle);
	dataSectionMainLearnsetOuter.appendChild(dataSectionMainLearnsetUl);



	dataSectionMainMetadata.setAttribute("name","metadata");
	dataSectionMainLearnsetDiv.setAttribute("name","learnset");
	dataSectionMainAreaDiv.setAttribute("name","area");



	let categoriez = ["Source","Move","Type","Category","Power","Accuracy","PP", ];
	for(u = 0; u < categoriez.length; u++) {
		let dataSectionMainLearnsetTitleLi = document.createElement("li");
		let dataSectionMainLearnsetTitleLiText = document.createElement("p");
		dataSectionMainLearnsetTitleLiText.innerText = categoriez[u];
		dataSectionMainLearnsetTitle.appendChild(dataSectionMainLearnsetTitleLi);
		dataSectionMainLearnsetTitleLi.appendChild(dataSectionMainLearnsetTitleLiText);
	}


	dataSectionMain.appendChild(dataSectionMainAreaDiv);
	dataSectionMainAreaDiv.appendChild(dataSectionMainArea);
	if(HeldItem == true) {
		let dataSectionMainMetadataSidebarRow5 = document.createElement("div");
		let dataSectionMainMetadataSidebarHeldItemOuter = document.createElement("span");
		let dataSectionMainMetadataSidebarHeldItemTitle = document.createElement("h6");
		dataSectionMainMetadataSidebarHeldItemOuter.setAttribute("name","helditem");
		dataSectionMainMetadataSidebarHeldItemTitle.innerText = "Held Item";
		dataSectionMainMetadataSidebar.appendChild(dataSectionMainMetadataSidebarRow5);
		dataSectionMainMetadataSidebarRow5.appendChild(dataSectionMainMetadataSidebarHeldItemOuter);
		dataSectionMainMetadataSidebarHeldItemOuter.appendChild(dataSectionMainMetadataSidebarHeldItemTitle);
		let dataSectionMainMetadataSidebarHeldItem = document.createElement("div");
		dataSectionMainMetadataSidebarHeldItemOuter.appendChild(dataSectionMainMetadataSidebarHeldItem);
		let hitms = Object.keys(DATA_Pokémon_HeldItem)
		for(q = 0; q < hitms.length; q++) {
			let dataSectionMainMetadataSidebarHeldItemIcon = document.createElement("b");
			let dataSectionMainMetadataSidebarHeldItemImg = document.createElement("img");
			let dataSectionMainMetadataSidebarHeldItemText = document.createElement("small");
			dataSectionMainMetadataSidebarHeldItemIcon.setAttribute("name", hitms[q]);
			dataSectionMainMetadataSidebarHeldItemIcon.setAttribute("dataname","value");
			dataSectionMainMetadataSidebarHeldItemImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';");
			dataSectionMainMetadataSidebarHeldItemIcon.setAttribute("type","invert");
			dataSectionMainMetadataSidebarHeldItem.appendChild(dataSectionMainMetadataSidebarHeldItemIcon);
			dataSectionMainMetadataSidebarHeldItemIcon.appendChild(dataSectionMainMetadataSidebarHeldItemImg);
			dataSectionMainMetadataSidebarHeldItemIcon.appendChild(dataSectionMainMetadataSidebarHeldItemText);

		}
	}
    dataSectionHeaderTypePrimary.addEventListener("click", function() {callPopUp("Type");});
	dataSectionHeaderTypeSecondary.addEventListener("click", function() {callPopUp("Type");});


	


	dataSectionMainMetadataSidebarCatchRateOuter.addEventListener("click", function() {callPopUp("Catch Rate");});
	

	dataSectionMainMetadataSidebarExpYieldOuter.addEventListener("click", function() {callPopUp("Experience Yield");});
	dataSectionMainMetadataSidebarLevelRateOuter.addEventListener("click", function() {callPopUp("Leveling Rate");});


	
	let helditm = document.querySelectorAll("#data > div[value='"+id+"'] div[name='sidebar'] span[name='helditem'] > div > b");
	for(q = 0; q < helditm.length; q++) {
		helditm[q].addEventListener("click", function() {callPopUp("Held Item");});
	}
	dataSectionMainMetadataPopupTitleExitUp.addEventListener("click", function() {OpenExitPopUp(id, false);});
	dataSectionMainMetadataPopupTitleExitDown.addEventListener("click", function() {OpenExitPopUp(id, true);});

	let baseEV = document.querySelectorAll("#data > div[value='"+id+"'] div[name='sidebar'] > div:first-child > ul > li > b");
	for(q = 0; q < baseEV.length; q++) {
		if(baseEV[q].parentElement.parentElement.getAttribute("name") == "basestats") {
			baseEV[q].addEventListener("click", function() {callPopUp("Base Stats");});
		} else if(baseEV[q].parentElement.parentElement.getAttribute("name") == "evyield") {
			baseEV[q].addEventListener("click", function() {callPopUp("EV Yield");});
		}
	}
	let baseEVTotal = document.querySelectorAll("#data > div[value='"+id+"'] div[name='sidebar'] > div:first-child > ul > b");
	for(q = 0; q < baseEVTotal.length; q++) {
		if(baseEVTotal[q].parentElement.getAttribute("name") == "basestats") {
			baseEVTotal[q].addEventListener("click", function() {callPopUp("Base Stats Total");});
		} else if(baseEVTotal[q].parentElement.getAttribute("name") == "evyield") {
			baseEVTotal[q].addEventListener("click", function() {callPopUp("EV Yield Total");});
		}
	}
};


function loadData() {
	let target = event.currentTarget;
	let i = target.getAttribute("value");
	let id = getIntID(i,"");
    let base = document.querySelector("#data > div[value='"+id+"']");
	let portrait = base.querySelector(":scope section[name='header'] *[name='portrait']");
	let category = base.querySelector(":scope section[name='header'] *[name='category']");
	let debut = base.querySelector(":scope section[name='header'] *[name='debut']");
	let name = base.querySelector(":scope section[name='header'] *[name='idname'] *[name='name']");
	let type = base.querySelector(":scope section[name='header'] *[name='debutcategorytype'] > *:last-child");
	let description = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='description']");
	let basestats = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] ul[name='basestats']");
	let evyield = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] ul[name='evyield']");
	let ability = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='ability']");
	let catchrate = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='catchrate']");
	let hatchrate = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='hatchrate']");
	let genderratio = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='genderratio']");
	let egggroup = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='egggroup']");
	let expyield = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='experienceyield']");
	let levelrate = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='levelingrate']");
	let helditem = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='helditem']");
    let area = base.querySelector(":scope section[name='main'] div[name='area'] ul");
    let evolutionbase = base.querySelector(":scope > div");



    if (evolutionbase != undefined) {
        let evos = evolutionbase.querySelectorAll(":scope aside[name='evolution']");
        for(let q = 0; q < evos.length; q++) {
            evos[q].remove();
        }

        let previous = getEvolutionData(i,"Previous");
        let next = getEvolutionData(i,"Next");
        let evoArr = [previous,next];
        let evoArrName = ["previous","next"];

        for(let q = 0; q < evoArr.length; q++) {
            for(let u = 0; u < evoArr[q].length; u++) {
                let int = getPokémonInt(evoArr[q][u]["Pokémon"]);

                let x = u + 1;
                let evo = document.createElement("aside");
                let evoContent = document.createElement("div");
                let evoToggle = document.createElement("figure");
                let evoImg = document.createElement("img");
                let evoMain = document.createElement("div");
                let evoButton = document.createElement("b");
				evoButton.setAttribute("type","invert");
                let evoDescription = document.createElement("span");
				let evoDescriptionText = document.createElement("small");
                let evoID = document.createElement("span");
                let evoNationalID = document.createElement("small");
                let evoName = document.createElement("h6");

                evo.setAttribute("type",evoArrName[q]+"-"+x+"/"+evoArr[q].length);
				evo.setAttribute("name","evolution");
         
                evoButton.setAttribute("value",getPokémonInt(evoArr[q][u]["Pokémon"]));
				evoImg.src = getMedia(true,[getPokémonPath(int)],[PATH_Pokémon_Box_Default_PNG]);
                evoImg.title = evoArr[q][u]["Pokémon"];

                if (getPokémonID(evoArr[q][u]["Pokémon"]) == undefined) {
                    evoNationalID.innerText = "#"+getPokémonID(getPokémonName(getDefaultInt(getPokémonInt(evoArr[q][u]["Pokémon"])),"Alt"));
                }
                else {
                    evoNationalID.innerText = "#"+getPokémonID(evoArr[q][u]["Pokémon"]);
                }
                
                evoNationalID.setAttribute("name","national");
                evoName.innerText = evoArr[q][u]["Pokémon"];


                evolutionbase.appendChild(evo);
                evo.appendChild(evoContent);
                if (q == 0){
                    evoContent.appendChild(evoMain);
                    evoContent.appendChild(evoToggle);
                    evoToggle.setAttribute("onclick","this.previousElementSibling.classList.toggle('active')");

					let os = finaldata["Pokémon"]["Offspring"][evoArr[q][u]["Integer"]][DATA_Pokémon_Offspring["Factor"]];
					if (os == undefined) {
						os = finaldata["Pokémon"]["Offspring"][getDefaultInt(evoArr[q][u]["Integer"])][DATA_Pokémon_Offspring["Factor"]];;
					}
					if (os == undefined) {
						os = "";
					}

					if (os.includes(",")) {
						let arr = [formatEvoBreedText(evoArr[q][u]["Integer"],"Evolution"),formatEvoBreedText(evoArr[q][u]["Integer"],"Breed")];
						evoDescriptionText.innerHTML = arr.join("<br>");
					}
                    else if (finaldata["Pokémon"]["Evolution Stage"][i][DATA_Pokémon_EvolutionStage["Pokémon Stage"]] == "Third-Stage" || finaldata["Pokémon"]["Evolution Stage"][getDefaultInt(i)][DATA_Pokémon_EvolutionStage["Pokémon Stage"]] == "Third-Stage") {
                        evoDescriptionText.innerHTML = formatEvoBreedText(evoArr[q][u]["Integer"],"Evolution").join("<br>");
                    }
                    else {
                        evoDescriptionText.innerHTML = formatEvoBreedText(evoArr[q][u]["Integer"],"Breed").join("<br>");
                    }

                }
                else if (q == 1) {
                    evoContent.appendChild(evoToggle);
                    evoContent.appendChild(evoMain);
                    evoToggle.setAttribute("onclick","this.nextElementSibling.classList.toggle('active')");
                    evoDescriptionText.innerHTML = formatEvoBreedText(evoArr[q][u]["Integer"],"Evolution")[u];
                }

                evoToggle.appendChild(evoImg);
                evoMain.appendChild(evoButton);
                evoMain.appendChild(evoDescription);
				evoDescription.appendChild(evoDescriptionText);
                evoButton.appendChild(evoID);
                evoID.appendChild(evoNationalID);
                evoButton.appendChild(evoName);
                evoButton.addEventListener("click",modalData);
                evoButton.setAttribute("function","modalData");

                let eggSpan = evoDescription.querySelectorAll(':scope b[name*="egg"]');
                for(y = 0; y < eggSpan.length; y++) {
                    eggSpan[y].setAttribute("dataname","value")
                    eggSpan[y].addEventListener("click", function() {callPopUp("Egg Group");});
                }

                let pokSpan = evoDescription.querySelectorAll(':scope b[name="pokémon"]');
                for(y = 0; y < pokSpan.length; y++) {
                    pokSpan[y].setAttribute("value",getPokémonInt(pokSpan[y].innerText))
                    pokSpan[y].addEventListener("click", modalData);
					pokSpan[y].setAttribute("function","modalData");
                }

                let itmSpan = evoDescription.querySelectorAll(':scope b[name="item"]');
                for(y = 0; y < itmSpan.length; y++) {
                    itmSpan[y].addEventListener("click", dataRedirect);
					itmSpan[y].setAttribute("function","dataRedirect");
                }


                for(y = 0; y < Object.keys(DATA_Pokémon_PokédexID.length); y++) {
                    let z = y+1;
                    let ID = getRegionalID("=",getPokémonID(evoArr[q][u]["Pokémon"]),DATA_Pokémon_PokédexID[Object.keys(DATA_Pokémon_PokédexID)[y]]);
					let defID = getRegionalID("=",getPokémonID(getPokémonName(getDefaultInt(getPokémonInt(evoArr[q][u]["Pokémon"])),"Alt")),DATA_Pokémon_PokédexID[Object.keys(DATA_Pokémon_PokédexID)[y]]);
                    let evoRegionalID = document.createElement("small");
                    if (ID != undefined) {
                        evoRegionalID.innerText = "#"+ID;
                    }
                    else if (defID != undefined) {
                        evoRegionalID.innerText = "#"+defID;
                    }
					else {
						evoRegionalID.innerText = "#";
					}
                    evoRegionalID.setAttribute("name","regional"+z);
                    evoID.appendChild(evoRegionalID);
                }

      
            }
        }
        
    }

    if (area != undefined) {
        let arealis = area.querySelectorAll(':scope > li');
        for(let t = 0; t < arealis.length; t++) {
            arealis[t].remove();
        }
        for(let q = 0; q < finaldata["Location Pokémon"]["Pokémon"].length; q++) { // Default
            if (getApplicable(finaldata["Location Pokémon"]["Pokémon"][q]["Game"])) {
                if (getPokémonName(getDefaultInt((getPokémonInt(finaldata["Location Pokémon"]["Pokémon"][q]["Pokémon"])))) == finaldata["Pokémon"]["Reference"][getDefaultInt(i)]["Pokémon"]) {
                    let pokLi = document.createElement("li");
                    area.appendChild(pokLi)

					let pokLiInput = document.createElement("input");
					pokLiInput.setAttribute("type","checkbox");
					pokLiInput.setAttribute("id","location-pokémon");
					pokLiInput.setAttribute("name","location-pokémon"+q);
					pokLi.appendChild(pokLiInput);
					pokLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})


                    let pokLocation = document.createElement("span");
					pokLocation.setAttribute("type","invert");
                    pokLocation.setAttribute("name","location");
                    if (finaldata["Location Pokémon"]["Pokémon"][q]["Title"] != undefined) {
                        pokLocation.setAttribute("title",finaldata["Location Pokémon"]["Pokémon"][q]["Title"]);
                    }
                    pokLi.appendChild(pokLocation);

                    if (finaldata["Location Pokémon"]["Pokémon"][q]["Location"] != undefined) {
                        let pokLocationRedir = document.createElement("b");
						let pokLocationRedirText = document.createElement("h6");
                        pokLocationRedirText.innerText = finaldata["Location Pokémon"]["Pokémon"][q]["Location"];
                        pokLocationRedir.setAttribute("name","map");
                        pokLocation.appendChild(pokLocationRedir);
						pokLocationRedir.appendChild(pokLocationRedirText);
                        pokLocationRedir.addEventListener("click",dataRedirect)
                        pokLocationRedir.setAttribute("function","dataRedirect");

                        if (finaldata["Location Pokémon"]["Pokémon"][q]["Area"] != undefined && finaldata["Location Pokémon"]["Pokémon"][q]["Area"] != finaldata["Location Pokémon"]["Pokémon"][q]["Location"]) {
                            let pokAreaText = document.createElement("small");
                            pokAreaText.innerText = finaldata["Location Pokémon"]["Pokémon"][q]["Area"];
                            pokLocation.appendChild(pokAreaText);
                        }
                    }

                
            

    
                    let pokRate = document.createElement("span");
                    pokRate.setAttribute("name","rate");
                    if (finaldata["Location Pokémon"]["Pokémon"][q]["Criteria"] != undefined) {
                        pokRate.setAttribute("title",finaldata["Location Pokémon"]["Pokémon"][q]["Criteria"]);
                    }
               
                    pokLi.appendChild(pokRate);

                    if (finaldata["Location Pokémon"]["Pokémon"][q]["Rate"] != undefined) {
                        let pokRateText = document.createElement("h6");
                        pokRateText.innerHTML = finaldata["Location Pokémon"]["Pokémon"][q]["Rate"].replaceAll(",","\n").replaceAll("mo:0%,","").replaceAll("mo:0%","").replaceAll("da:0%,","").replaceAll("da:0%","").replaceAll("ni:0%,","").replaceAll("ni:0%","").replaceAll("mo:",'<img src="./media/Images/FinalDex/Icon/Morning.png" title="Morning">').replaceAll("da:",'<img src="./media/Images/FinalDex/Icon/Day.png" title="Day">').replaceAll("ni:",'<img src="./media/Images/FinalDex/Icon/Night.png" title="Night">').replaceAll("sp:0%,",'').replaceAll("sp:0%",'').replaceAll("su:0%,",'').replaceAll("su:0%",'').replaceAll("au:0%,",'').replaceAll("au:0%",'').replaceAll("wi:0%,",'').replaceAll("wi:0%",'').replaceAll("sp:",'<pre name="spring">Spring</pre>').replaceAll("au:",'<pre name="autumn">Autumn</pre>').replaceAll("su:",'<pre name="summer">Summer</pre>').replaceAll("wi:",'<pre name="winter">Winter</pre>').replaceAll("mon:",'<pre name="monday">Monday</pre>').replaceAll("tue:",'<pre name="tuesday">Tuesday</pre>').replaceAll("wed:",'<pre name="wednesday">Wednesday</pre>').replaceAll("thu:",'<pre name="thursday">Thursday</pre>').replaceAll("fri:",'<pre name="friday">Friday</pre>').replaceAll("sat:",'<pre name="saturday">Saturday</pre>').replaceAll("sun:",'<pre name="sunday">Sunday</pre>');
                        pokRate.appendChild(pokRateText);
                    }

                    let pokEncounter = document.createElement("span");
                    pokEncounter.setAttribute("name","encounter");
                    pokLi.appendChild(pokEncounter);


                    let encounters = [];
                    let enctitle = [];

                    if (finaldata["Location Pokémon"]["Pokémon"][q]["Tile"] != undefined) {
                        encounters.push(finaldata["Location Pokémon"]["Pokémon"][q]["Tile"]);
                        enctitle.push("Tile");
                    }
                    if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] != undefined) {
                        encounters.push(finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"]);
                        enctitle.push("Encounter");
                    }
                    


                        let pokEncounterInner = document.createElement("span");
                        pokEncounter.appendChild(pokEncounterInner);
                        
                        let pokEncounterText = document.createElement("span");
                        pokEncounter.appendChild(pokEncounterText);






				

                        let encounterTxtArr = [];
                        for(let u = 0; u < encounters.length; u++) {


                            let pokEncounterImage = document.createElement("img");
                            pokEncounterImage.setAttribute("onerror","this.remove();")

                            
                            if(encounters[u] == "Surfing") {
                                /*pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+"Surfing_M"+".png";*/
                            }
                            else {
                                /*pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+encounters[u]+".png";*/
                            }

                        
							if (enctitle[u] != "Tile" || enctitle.length == 1) {
                                encounterTxtArr.push(encounters[u])
                            }
    
                            pokEncounterInner.appendChild(pokEncounterImage);
                
                        }


						if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] != undefined && finaldata["Location Pokémon"]["Pokémon"][q]["Tile"] != undefined) {
							pokEncounterText.innerHTML = "<small>"+finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"]+" on "+finaldata["Location Pokémon"]["Pokémon"][q]["Tile"]+"</small>";
						}
						else if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] != undefined && finaldata["Location Pokémon"]["Pokémon"][q]["Tile"] == undefined) {
							pokEncounterText.innerHTML = "<small>"+finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"]+"</small>";
						}
						else if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] == undefined && finaldata["Location Pokémon"]["Pokémon"][q]["Tile"] != undefined) {
							pokEncounterText.innerHTML = "<small>"+finaldata["Location Pokémon"]["Pokémon"][q]["Tile"]+"</small>";
						}


						
						if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] == "Headbutt" || finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] == "Rock Smash") {
							pokEncounterText.innerHTML = pokEncounterText.innerHTML.replaceAll("Headbutt","Headbutt</small><small>").replaceAll("Rock Smash","Rock Smash</small><small>");
							pokEncounterText.firstElementChild.setAttribute("name","move");
							pokEncounterText.firstElementChild.setAttribute("value",finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"]);
							pokEncounterText.firstElementChild.setAttribute("onclick","dataRedirect()");
							pokEncounterText.firstElementChild.setAttribute("function","dataRedirect");
						}
						else if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] == "Surfing") {
							pokEncounterText.innerHTML = pokEncounterText.innerHTML.replaceAll("Surfing","Surfing</small><small>");
							pokEncounterText.firstElementChild.setAttribute("name","move");
							pokEncounterText.firstElementChild.setAttribute("value","Surf");
							pokEncounterText.firstElementChild.setAttribute("onclick","dataRedirect()");
							pokEncounterText.firstElementChild.setAttribute("function","dataRedirect");
						}
			
                        if (finaldata["Location Pokémon"]["Pokémon"][q]["Mechanic"] != undefined) {
                            let pokMechanicText = document.createElement("h3");
                            pokMechanicText.innerText = finaldata["Location Pokémon"]["Pokémon"][q]["Mechanic"];
                            pokEncounter.appendChild(pokMechanicText);
                        }

                        let pokPok = document.createElement("span");
                        let pokPokLvl = document.createElement("small");
                        let pokPokImg = document.createElement("img");
            
                        pokPok.setAttribute("name","pokémon");
                        pokPokLvl.innerText = "Lv. "+finaldata["Location Pokémon"]["Pokémon"][q]["Level"];
						pokPokImg.src = getMedia(true,[getPokémonPath(getPokémonInt(finaldata["Location Pokémon"]["Pokémon"][q]["Pokémon"]))],[PATH_Pokémon_Box_Default_PNG]);
				
						pokPokImg.setAttribute("title",finaldata["Location Pokémon"]["Pokémon"][q]["Pokémon"]);
                

                        if(finaldata["Location Pokémon"]["Pokémon"][q]["Note"] != undefined) {
                            pokEncounter.setAttribute("title",finaldata["Location Pokémon"]["Pokémon"][q]["Note"])
                        }
                        pokLi.appendChild(pokPok);
                        pokPok.appendChild(pokPokLvl);
                        pokPok.appendChild(pokPokImg);
                    
                }
            }
        }
        for(let q = 0; q < finaldata["Location Pokémon"]["Pokémon"].length; q++) { // Allies
            if (getApplicable(finaldata["Location Pokémon"]["Pokémon"][q]["Game"])) {
                if (Allies) {

                    let ally = finaldata["Location Pokémon"]["Pokémon"][q]["Allies"];
                    let allies = [ally];
                    if (ally != undefined) {
                        ally = ally.replaceAll(/\,[\S\s]*?\:/g,",");
                        if(ally.includes(",")) {
                            allies = ally.split(",");
                        }
                    }
                    

                    for(let y = 0; y < allies.length; y++) {
                        if (allies[y] != undefined) {
                            if (allies[y] == finaldata["Pokémon"]["Reference"][getDefaultInt(i)]["Pokémon"] && getPokémonName(getDefaultInt((getPokémonInt(finaldata["Location Pokémon"]["Pokémon"][q]["Pokémon"])))) != finaldata["Pokémon"]["Reference"][getDefaultInt(i)]["Pokémon"] || allies[y] == finaldata["Pokémon"]["Reference"][i]["Form"] && getPokémonName(getDefaultInt((getPokémonInt(finaldata["Location Pokémon"]["Pokémon"][q]["Pokémon"])))) != finaldata["Pokémon"]["Reference"][getDefaultInt(i)]["Pokémon"]) {

                                let pokLi = document.createElement("li");
                                area.appendChild(pokLi)

                        
								let pokLiInput = document.createElement("input");
								pokLiInput.setAttribute("type","checkbox");
								pokLiInput.setAttribute("id","location-pokémon");
								pokLiInput.setAttribute("name","location-pokémon"+q);
								pokLi.appendChild(pokLiInput);
								pokLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})


								let pokLocation = document.createElement("span");
								pokLocation.setAttribute("type","invert");
								pokLocation.setAttribute("name","location");
								if (finaldata["Location Pokémon"]["Pokémon"][q]["Title"] != undefined) {
									pokLocation.setAttribute("title",finaldata["Location Pokémon"]["Pokémon"][q]["Title"]);
								}
								pokLi.appendChild(pokLocation);
			
								if (finaldata["Location Pokémon"]["Pokémon"][q]["Location"] != undefined) {
									let pokLocationRedir = document.createElement("b");
									let pokLocationRedirText = document.createElement("h6");
									pokLocationRedirText.innerText = finaldata["Location Pokémon"]["Pokémon"][q]["Location"];
									pokLocationRedir.setAttribute("name","map");
									pokLocation.appendChild(pokLocationRedir);
									pokLocationRedir.appendChild(pokLocationRedirText);
									pokLocationRedir.addEventListener("click",dataRedirect)
									pokLocationRedir.setAttribute("function","dataRedirect");
			
									if (finaldata["Location Pokémon"]["Pokémon"][q]["Area"] != undefined && finaldata["Location Pokémon"]["Pokémon"][q]["Area"] != finaldata["Location Pokémon"]["Pokémon"][q]["Location"]) {
										let pokAreaText = document.createElement("small");
										pokAreaText.innerText = finaldata["Location Pokémon"]["Pokémon"][q]["Area"];
										pokLocation.appendChild(pokAreaText);
									}
								}
			

                            
                        

                
                                let pokRate = document.createElement("span");
                                pokRate.setAttribute("name","rate");
                                if (finaldata["Location Pokémon"]["Pokémon"][q]["Criteria"] != undefined) {
                                    pokRate.setAttribute("title",finaldata["Location Pokémon"]["Pokémon"][q]["Criteria"]);
                                }            
                                pokLi.appendChild(pokRate);

                                if (finaldata["Location Pokémon"]["Pokémon"][q]["Rate"] != undefined) {
                                    let pokRateText = document.createElement("h6");
                                    pokRateText.innerHTML = finaldata["Location Pokémon"]["Pokémon"][q]["Rate"].replaceAll(",","\n").replaceAll("mo:0%,","").replaceAll("mo:0%","").replaceAll("da:0%,","").replaceAll("da:0%","").replaceAll("ni:0%,","").replaceAll("ni:0%","").replaceAll("mo:",'<img src="'+getMedia(true,[`Morning`],[`./media/Images/FinalDex/`])+'" title="Morning">').replaceAll("da:",'<img src="'+getMedia(true,[`Day`],[`./media/Images/FinalDex/`])+'" title="Day">').replaceAll("ni:",'<img src="'+getMedia(true,[`Night`],[`./media/Images/FinalDex/`])+'" title="Night">').replaceAll("sp:0%,",'').replaceAll("sp:0%",'').replaceAll("su:0%,",'').replaceAll("su:0%",'').replaceAll("au:0%,",'').replaceAll("au:0%",'').replaceAll("wi:0%,",'').replaceAll("wi:0%",'').replaceAll("sp:",'<pre name="spring">Spring</pre>').replaceAll("au:",'<pre name="autumn">Autumn</pre>').replaceAll("su:",'<pre name="summer">Summer</pre>').replaceAll("wi:",'<pre name="winter">Winter</pre>').replaceAll("mon:",'<pre name="monday">Monday</pre>').replaceAll("tue:",'<pre name="tuesday">Tuesday</pre>').replaceAll("wed:",'<pre name="wednesday">Wednesday</pre>').replaceAll("thu:",'<pre name="thursday">Thursday</pre>').replaceAll("fri:",'<pre name="friday">Friday</pre>').replaceAll("sat:",'<pre name="saturday">Saturday</pre>').replaceAll("sun:",'<pre name="sunday">Sunday</pre>').replaceAll("extremelyharshsunlight:",'<img src="'+getMedia(true,[`Extremely Harsh Sunlight`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Extremely Harsh Sunlight">').replaceAll("hail:",'<img src="'+getMedia(true,[`Hail`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Hail">').replaceAll("harshsunlight:",'<img src="'+getMedia(true,[`Harsh Sunlight`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Harsh Sunlight">').replaceAll("heavyrain:",'<img src="'+getMedia(true,[`Heavy Rain`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Heavy Rain">').replaceAll("rain:",'<img src="'+getMedia(true,[`Rain`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Rain">').replaceAll("sandstorm:",'<img src="'+getMedia(true,[`Sandstorm`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Sandstorm">').replaceAll("strongwinds:",'<img src="'+getMedia(true,[`Strong Winds`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Strong Winds">').replaceAll("fog:",'<img src="'+getMedia(true,[`Fog`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Fog">').replaceAll("cloudy:",'<img src="'+getMedia(true,[`Cloudy`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Cloudy">').replaceAll("clear:",'<img src="'+getMedia(true,[`Clear`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Clear">').replaceAll("blizzard:",'<img src="'+getMedia(true,[`Blizzard`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Blizzard">').replaceAll("snow:",'<img src="'+getMedia(true,[`Snow`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Snow">').replaceAll("thunderstorm:",'<img src="'+getMedia(true,[`Thunderstorm`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Thunderstorm">').replaceAll("%,","%");
                                    pokRate.appendChild(pokRateText);
                                }

                                let pokEncounter = document.createElement("span");
                                pokEncounter.setAttribute("name","encounter");
                                pokLi.appendChild(pokEncounter);


                                let encounters = [];
                                let enctitle = [];

                                if (finaldata["Location Pokémon"]["Pokémon"][q]["Tile"] != undefined) {
                                    encounters.push(finaldata["Location Pokémon"]["Pokémon"][q]["Tile"]);
                                    enctitle.push("Tile");
                                }
                                if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] != undefined) {
                                    encounters.push(finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"]);
                                    enctitle.push("Encounter");
                                }
                                

            
								let pokEncounterInner = document.createElement("span");
								pokEncounter.appendChild(pokEncounterInner);
								
								let pokEncounterText = document.createElement("span");
								pokEncounter.appendChild(pokEncounterText);

								let encounterTxtArr = [];
								for(let u = 0; u < encounters.length; u++) {


									let pokEncounterImage = document.createElement("img");
									pokEncounterImage.title = encounters[u];
									pokEncounterImage.setAttribute("onerror","this.remove();")

									
									if(encounters[u] == "Surfing") {
										/*pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+"Surfing_M"+".png";*/
									}
									else {
										/*pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+encounters[u]+".png";*/
									}

								
									if (enctitle[u] != "Tile" || enctitle.length == 1) {
										encounterTxtArr.push(encounters[u])
									}
			
									pokEncounterInner.appendChild(pokEncounterImage);
						
								}

								if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] != undefined && finaldata["Location Pokémon"]["Pokémon"][q]["Tile"] != undefined) {
									pokEncounterText.innerHTML = "<small>"+finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"]+" on "+finaldata["Location Pokémon"]["Pokémon"][q]["Tile"]+"</small>";
								}
								else if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] != undefined && finaldata["Location Pokémon"]["Pokémon"][q]["Tile"] == undefined) {
									pokEncounterText.innerHTML = "<small>"+finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"]+"</small>";
								}
								else if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] == undefined && finaldata["Location Pokémon"]["Pokémon"][q]["Tile"] != undefined) {
									pokEncounterText.innerHTML = "<small>"+finaldata["Location Pokémon"]["Pokémon"][q]["Tile"]+"</small>";
								}

								if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] == "Headbutt" || finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] == "Rock Smash") {
									pokEncounterText.innerHTML = pokEncounterText.innerHTML.replaceAll("Headbutt","Headbutt</small><small>").replaceAll("Rock Smash","Rock Smash</small><small>");
									pokEncounterText.firstElementChild.setAttribute("name","move");
									pokEncounterText.firstElementChild.setAttribute("value",finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"]);
									pokEncounterText.firstElementChild.setAttribute("onclick","dataRedirect()");
									pokEncounterText.firstElementChild.setAttribute("function","dataRedirect");
								}
								else if (finaldata["Location Pokémon"]["Pokémon"][q]["Encounter"] == "Surfing") {
									pokEncounterText.innerHTML = pokEncounterText.innerHTML.replaceAll("Surfing","Surfing</small><small>");
									pokEncounterText.firstElementChild.setAttribute("name","move");
									pokEncounterText.firstElementChild.setAttribute("value","Surf");
									pokEncounterText.firstElementChild.setAttribute("onclick","dataRedirect()");
									pokEncounterText.firstElementChild.setAttribute("function","dataRedirect");
								}

								if (finaldata["Location Pokémon"]["Pokémon"][q]["Mechanic"] != undefined) {
									let pokMechanicText = document.createElement("h3");
									pokMechanicText.innerText = finaldata["Location Pokémon"]["Pokémon"][q]["Mechanic"];
									pokEncounter.appendChild(pokMechanicText);
								}
								/*
								let pokAllies = document.createElement("span");
								let pokAllyHeader = document.createElement("h4");
								pokAllies.setAttribute("name","allies");
								pokAllyHeader.innerText = "Allies";
								pokLi.appendChild(pokAllies);
								pokAllies.appendChild(pokAllyHeader);

								if (finaldata["Location Pokémon"]["Pokémon"][q]["Allies"] != undefined) {
									let ally = finaldata["Location Pokémon"]["Pokémon"][q]["Allies"].replaceAll("extremelyharshsunlight:",'').replaceAll("hail:",'').replaceAll("harshsunlight:",'').replaceAll("heavyrain:",'').replaceAll("rain:",'').replaceAll("sandstorm:",'').replaceAll("strongwinds:",'').replaceAll("fog:",'').replaceAll("cloudy:",'').replaceAll("clear:",'').replaceAll("blizzard:",'').replaceAll("snow:",'').replaceAll("thunderstorm:",'');
									let allies = [];
									if (ally.includes(",")) {
										allies = ally.split(",")
									}
									else {
										allies = [ally];
									}

									for(let r = 0; r < allies.length; r++) {
										let allyIMG = document.createElement("img");
										allyIMG.src = getMedia(true,[getPokémonPath(getPokémonInt(allies[r]))],[PATH_Pokémon_Box_Default_PNG]);
										allyIMG.title = allies[r];
										pokAllies.appendChild(allyIMG);
									}
								
								}
								*/

					
								let pokPok = document.createElement("span");
								let pokPokIsAlly = document.createElement("h6");
								let pokPokLvl = document.createElement("small");
								let pokPokImg = document.createElement("img");
					
								pokPok.setAttribute("name","pokémon");
								pokPokIsAlly.innerText = "Ally to "+finaldata["Location Pokémon"]["Pokémon"][q]["Pokémon"];
								pokPokLvl.innerText = "Lv. "+finaldata["Location Pokémon"]["Pokémon"][q]["Level"];
								pokPokImg.src = getMedia(true,[getPokémonPath(getPokémonInt(finaldata["Location Pokémon"]["Pokémon"][q]["Pokémon"]))],[PATH_Pokémon_Box_Default_PNG]);
								pokPokImg.setAttribute("value",getPokémonInt(finaldata["Location Pokémon"]["Pokémon"][q]["Pokémon"]));
			

								if(finaldata["Location Pokémon"]["Pokémon"][q]["Note"] != undefined) {
									pokEncounter.setAttribute("title",finaldata["Location Pokémon"]["Pokémon"][q]["Note"])
								}
								pokLi.appendChild(pokPok);
								pokPok.appendChild(pokPokIsAlly);
								pokPok.appendChild(pokPokLvl);
								pokPok.appendChild(pokPokImg);
								pokPokImg.addEventListener("click",modalData);
								pokPokImg.setAttribute("function","modalData");
                                break;
                            }
                        }
                    }
                }
            }
        }

		for(let q = 0; q < finaldata["Location Pokémon"]["Shop"].length; q++) { // Shop
            if (getApplicable(finaldata["Location Pokémon"]["Shop"][q]["Game"])) {
                if (getPokémonName(getDefaultInt((getPokémonInt(finaldata["Location Pokémon"]["Shop"][q]["Pokémon"])))) == finaldata["Pokémon"]["Reference"][getDefaultInt(i)]["Pokémon"]) {
                    let pokLi = document.createElement("li");
                    area.appendChild(pokLi)

					let pokLiInput = document.createElement("input");
					pokLiInput.setAttribute("type","checkbox");
					pokLiInput.setAttribute("id","location-pokémon-shop");
					pokLiInput.setAttribute("name","location-pokémon-shop"+q);
					pokLi.appendChild(pokLiInput);
					pokLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})

                    let pokLocation = document.createElement("span");
					pokLocation.setAttribute("type","invert");
                    pokLocation.setAttribute("name","location");
                    if (finaldata["Location Pokémon"]["Shop"][q]["Title"] != undefined) {
                        pokLocation.setAttribute("title",finaldata["Location Pokémon"]["Shop"][q]["Title"]);
                    }
                    pokLi.appendChild(pokLocation);
					

                    if (finaldata["Location Pokémon"]["Shop"][q]["Location"] != undefined) {
                        let pokLocationRedir = document.createElement("b");
						let pokLocationRedirText = document.createElement("h6");
                        pokLocationRedirText.innerText = finaldata["Location Pokémon"]["Shop"][q]["Location"];
                        pokLocationRedir.setAttribute("name","map");
                        pokLocation.appendChild(pokLocationRedir);
						pokLocationRedir.appendChild(pokLocationRedirText);
                        pokLocationRedir.addEventListener("click",dataRedirect)
                        pokLocationRedir.setAttribute("function","dataRedirect");

                        if (finaldata["Location Pokémon"]["Shop"][q]["Area"] != undefined && finaldata["Location Pokémon"]["Shop"][q]["Area"] != finaldata["Location Pokémon"]["Shop"][q]["Location"]) {
                            let pokAreaText = document.createElement("small");
                            pokAreaText.innerText = finaldata["Location Pokémon"]["Shop"][q]["Area"];
                            pokLocation.appendChild(pokAreaText);
                        }
                    }

                
            

    
                    let pokDescription = document.createElement("span");
                    pokDescription.setAttribute("name","description");
                    if (finaldata["Location Pokémon"]["Shop"][q]["Criteria"] != undefined) {
                        pokRate.setAttribute("title",finaldata["Location Pokémon"]["Shop"][q]["Criteria"]);
                    }
               
                    pokLi.appendChild(pokDescription);



          
					let pokDescriptionText = document.createElement("h6");
					pokDescription.appendChild(pokDescriptionText);

					let currency = [finaldata["Location Pokémon"]["Shop"][q]["Currency"]];
					let cost = finaldata["Location Pokémon"]["Shop"][q]["Cost"];
					let quantity = finaldata["Location Pokémon"]["Shop"][q]["Quantity"];

					if (quantity == undefined) {
						quantity = 1;
					}

					if (cost == undefined) {
						cost = quantity+"x";
					}

					if (currency[0].includes(",")) {
						currency = currency[0].split(",");
					}

					for(let r = 0; r < currency.length; r++) {
						let itoc = getItemIcon(currency[r]);
						if (itoc != undefined) {
							currency[r] = `<img src="`+getMedia(true,[itoc],[PATH_Item_Bag])+`" onerror="this.style.display='none'"; onclick="dataRedirect()" name="item" title="`+itoc+`"/>`;
						}
						else {
							if (currency[r] == "Pokémon Dollar") {
								currency[r] = "<span title='"+currency[r]+"'>"+currency[r].replaceAll("Pokémon Dollar",'<img src="'+getMedia(true,["Pokémon Dollar"],[PATH_Currency_Icon])+'" title="Pokémon Dollar" />')+"</span>";
							}
							else {
								currency[r] = "<span title='"+currency[r]+"'>"+currency[r].replace(/[^A-Z]+/g,"")+"</span>";
							}
						}
					}
					if (currency[0].includes("Fossil") || currency[0].includes("Old Amber")) {
						pokDescriptionText.innerHTML = "Revive <br>"+currency.join("");
					}
					else {
						if (finaldata["Location Pokémon"]["Shop"][q]["Shop"] != undefined) {
							pokDescriptionText.innerHTML = "Purchased from the "+finaldata["Location Pokémon"]["Shop"][q]["Shop"]+" for "+finaldata["Location Pokémon"]["Shop"][q]["Cost"];
						}
						else {
							pokDescriptionText.innerHTML = "Purchased for "+cost+currency.join(", ").replaceAll(">, ",">");
						}
					}


   
					let pokPok = document.createElement("span");
					let pokPokLvl = document.createElement("small");
					let pokPokImg = document.createElement("img");
		
					pokPok.setAttribute("name","pokémon");
					pokPokLvl.innerText = "Lv. "+finaldata["Location Pokémon"]["Shop"][q]["Level"];
					pokPokImg.src = getMedia(true,[getPokémonPath(getPokémonInt(finaldata["Location Pokémon"]["Shop"][q]["Pokémon"]))],[PATH_Pokémon_Box_Default_PNG]);
			
					pokPokImg.setAttribute("title",finaldata["Location Pokémon"]["Shop"][q]["Pokémon"]);
			

					if(finaldata["Location Pokémon"]["Shop"][q]["Note"] != undefined) {
						pokEncounter.setAttribute("title",finaldata["Location Pokémon"]["Shop"][q]["Note"])
					}
					pokLi.appendChild(pokPok);
					pokPok.appendChild(pokPokLvl);
					pokPok.appendChild(pokPokImg);
                    
                }
            }
        }
    }


    let loc = area.querySelectorAll(":scope li span[name='location'] > *[function]");
    let locs = [];

    for(let r = 0; r < loc.length; r++) {
        locs.push(loc[r].innerText)
    }
    
    locs = [...new Set(locs)];

	description.innerHTML = "";
	category.innerText = '"'+returnData(i,"Category","")[0]+' Pokémon"';
	if(returnData(i,"Pokédex Entry","")[0] != undefined) {
		description.innerHTML += "<p name='entry'>"+returnData(i,"Pokédex Entry","")[0]+"</p>";
	}

	let os = finaldata["Pokémon"]["Offspring"][i][DATA_Pokémon_Offspring["Offspring"]];
	if (os != undefined) {
		if (getEvolutionFamily(i).length == 1 && finaldata["Pokémon"]["Offspring"][i][DATA_Pokémon_Offspring["Offspring"]].includes(",") || getEvolutionFamily(i).length == 1 && finaldata["Pokémon"]["Offspring"][getDefaultInt(i)][DATA_Pokémon_Offspring["Offspring"]].includes(",")) {
			let bd = finaldata["Pokémon"]["Offspring"][i][DATA_Pokémon_Offspring["Offspring"]];
			if (bd == undefined) {
				bd = finaldata["Pokémon"]["Offspring"][getDefaultInt(i)][DATA_Pokémon_Offspring["Offspring"]];
			}
			bd = bd.replaceAll(getPokémonName(i),"");
			bd = bd.replaceAll(getPokémonName(getDefaultInt(i)),"");
			bd = bd.replaceAll(/^\,/g,"");
			bd = bd.replace(/,([^,]*)$/, ' and $1');

			description.innerHTML += "<p>"+"It can produce eggs containing "+bd+"."+"<p>";
		}
	}
	if(returnData(i,"Debut","")[0].includes("-")) {
		debut.innerText = "Introduced in "+returnData(i,"Debut","")[0].split("-")[0];
	} else {
		debut.innerText = "Introduced in "+returnData(i,"Debut","")[0];
	}
	if(Ability.length >= 1) {
		if(returnData(i,"Ability","")[0] != undefined) {
			ability.querySelector(':scope *[title="Primary Ability"] > *').innerText = returnData(i,"Ability","")[0];
			ability.querySelector(':scope *[title="Primary Ability"]').parentElement.style.display = "flex";
		} else {
			ability.querySelector(':scope *[title="Primary Ability"]').parentElement.style.display = "none";
		}
		if(returnData(i,"Ability","")[1] != undefined) {
			ability.querySelector(':scope *[title="Secondary Ability"] > *').innerText = returnData(i,"Ability","")[1];
			ability.querySelector(':scope *[title="Secondary Ability"]').parentElement.style.display = "flex";
		} else {
			ability.querySelector(':scope *[title="Secondary Ability"]').parentElement.style.display = "none";
		}
		if(Ability.length >= 3) {
			if(returnData(i,"Ability","")[2] != undefined) {
				ability.querySelector(':scope *[title="Hidden Ability"] > *').innerText = returnData(i,"Ability","")[2];
				ability.querySelector(':scope *[title="Hidden Ability"]').parentElement.parentElement.style.display = "flex";
			} else {
				ability.querySelector(':scope *[title="Hidden Ability"]').parentElement.parentElement.style.display = "none";
			}
		}
	}
    if (Gender == true) {
		genderratio.querySelector(':scope b').style.removeProperty("display");
        if(returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "0") { // Always Male
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","100% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","0% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 0");
        } else if(returnData(i,"Gender Ratio","")[0] == "7" && returnData(i,"Gender Ratio","")[1] == "1") { // Very Often Male
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","87.5% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","12.5% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","7 : 1");
        } else if(returnData(i,"Gender Ratio","")[0] == "3" && returnData(i,"Gender Ratio","")[1] == "1") { // Often Male
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","75% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","25% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","3 : 1");
        } else if(returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "1") { // Equal Ratio
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","50% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","50% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 1");
        } else if(returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "3") { // Often Female
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","25% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","75% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 3");
        } else if(returnData(i,"Gender Ratio","")[0] == "1" && returnData(i,"Gender Ratio","")[1] == "7") { // Very Often Female
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","12.5% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","87.5% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","1 : 7");
        } else if(returnData(i,"Gender Ratio","")[0] == "0" && returnData(i,"Gender Ratio","")[1] == "1") { // Always Female
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","0% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","100% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","0 : 1");
        } else if(returnData(i,"Gender Ratio","")[0] == "0" && returnData(i,"Gender Ratio","")[1] == "0") { // Genderless
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="male"]').setAttribute("title","0% Male");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="female"]').setAttribute("title","0% Female");
            genderratio.querySelector(':scope *[dataname="value"]').querySelector(':scope > span[name="genderless"]').setAttribute("title","Genderless");
            genderratio.querySelector(':scope *[dataname="value"]').setAttribute("value","0 : 0");
        }
    }
	levelrate.querySelector(':scope *[dataname="value"]').innerText = returnData(i,"Leveling Rate","")[0];
	levelrate.querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i,"Leveling Rate","")[0]);
	levelrate.querySelector(':scope *[dataname="value"]').setAttribute("title","Time approximated for "+getPokémonName(i)+" to Level Up.");
	name.innerText = getPokémonName(i);
 

	if(Egg == true) {
        if(returnData(i,"Hatch Rate","")[1] != undefined) {
            hatchrate.querySelector(':scope *[dataname="value"').innerText = returnData(i,"Hatch Rate","")[1]+" Steps";
            hatchrate.querySelector(':scope *[dataname="value"').setAttribute("title","Steps required to hatch an egg containing "+getPokémonName(i)+".");
        } else {
            hatchrate.querySelector(':scope *[dataname="value"').innerText = returnData(i,"Hatch Rate","")[0]+" Egg Cycles";
            hatchrate.querySelector(':scope *[dataname="value"').setAttribute("title","Egg Cycles required to hatch an egg containing "+getPokémonName(i)+".");
        }
        hatchrate.querySelector(':scope *[dataname="value"').setAttribute("value", returnData(i,"Hatch Rate","")[0]);

		if(returnData(i,"Egg Group","")[0] != undefined) {
			egggroup.querySelector(':scope span[name="primary"]').style.display = "flex";
			egggroup.querySelector(':scope span[name="primary"]').querySelector(':scope *[dataname="value"]').setAttribute("name","egg"+returnData(i,"Egg Group","")[0]);
			egggroup.querySelector(':scope span[name="primary"]').querySelector(':scope *[dataname="value"]').innerText = returnData(i,"Egg Group","")[0];
		} else {
			egggroup.querySelector(':scope span[name="primary"]').style.display = "none";
		}
		if(returnData(i,"Egg Group","")[1] != undefined) {
			egggroup.querySelector(':scope span[name="secondary"]').style.display = "flex";
			egggroup.querySelector(':scope span[name="secondary"]').querySelector(':scope *[dataname="value"]').setAttribute("name","egg"+returnData(i,"Egg Group","")[1]);
			egggroup.querySelector(':scope span[name="secondary"]').querySelector(':scope *[dataname="value"]').innerText = returnData(i,"Egg Group","")[1];
		} else {
			egggroup.querySelector(':scope span[name="secondary"]').style.display = "none";
		}
	}
	let baseev = ["Base Stats","EV Yield"];
	let sts = [];
	for(let y = 0; y < baseev.length; y++) {
		for(let q = 0; q < Stats.length; q++) {
			let arr;
			let json;
			let taq;
			if(y == 0) {
				arr = finaldata["Pokémon"]["Base Stats"];
				json = DATA_Pokémon_BaseStats[Stats[q]["Name"]];
				taq = basestats;
			} else if(y == 1) {
				arr = finaldata["Pokémon"]["Effort Value Yield"];
				json = DATA_Pokémon_EVYield[Stats[q]["Name"]];
				taq = evyield;
			}

			let temp = Stats[q]["Name"].toLowerCase().replace(" ","").replace(".","");
			for(let u = 0; u < finaldata["Pokémon"]["Reference"].length; u++) {
				if(finaldata["Pokémon"]["Reference"][u][DATA_Pokémon_Reference["Reference"]] == "true") {
					if(arr[u][json] != undefined && arr[u][json] != "") {
						sts.push(parseInt(arr[u][json]));
					}
				}
			}
			let target = taq.querySelector(':scope li[name='+temp+']').querySelector(':scope *[dataname="value"]');
			target.innerHTML = returnData(i, baseev[y]+" "+Stats[q]["Name"],"")[0]+"&nbsp;&nbsp;";
			target.setAttribute("value", returnData(i, baseev[y]+" "+Stats[q]["Name"],"")[0]);
			target.parentElement.style.width = returnData(i, baseev[y]+" "+Stats[q]["Name"],"")[0] / Math.max.apply(Math, sts) * 100+"%";

			sts = [];
		}
	}
	if(returnData(i,"Experience Yield","")[0] >= 300) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Very High";
	}
	if(returnData(i,"Experience Yield","")[0] >= 200 && returnData(i,"Experience Yield","")[0] <= 299) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "High";
	}
	if(returnData(i,"Experience Yield","")[0] >= 100 && returnData(i,"Experience Yield","")[0] <= 199) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Medium";
	}
	if(returnData(i,"Experience Yield","")[0] >= 50 && returnData(i,"Experience Yield","")[0] <= 99) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Low";
	}
	if(returnData(i,"Experience Yield","")[0] >= 0 && returnData(i,"Experience Yield","")[0] <= 49) {
		expyield.querySelector(':scope *[dataname="value"]').innerText = "Very Low";
	}
	expyield.querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i,"Experience Yield","")[0]);
	expyield.querySelector(':scope *[dataname="value"]').setAttribute("title","Experience gained approximated upon defeating "+getPokémonName(i)+" in battle.");


	portrait.querySelector(":scope img").src = getMedia(true,[getPokémonPath(i)],[PATH_Pokémon_Art_Default_Front_Official],["HOME"]);


	if (returnData(i,"Catch Rate","") != undefined) {
		let catchRateFormula;
		if(Generation == 1) {
			catchRateFormula = Math.round(((Math.min(parseInt(returnData(i,"Catch Rate",""))+1, 256)) / 256 * (85+1 / 256) / 256 * 100) * 10) / 10;
		}
		if(Generation == 2) {
			catchRateFormula = Math.round(((Math.max(parseInt(returnData(i,"Catch Rate","")) / 3, 1)+1) / 256 * 100) * 10) / 10;
		}
		if(Generation == 3 || Generation == 4) {
			catchRateFormula = Math.round(((65535 / Math.sqrt(Math.sqrt(255 / (parseInt(returnData(i,"Catch Rate","")) / 3))) / 65536) ** 4 * 100) * 10) / 10;
		}
		if(Generation >= 5) {
			catchRateFormula = Math.round(((65536 / Math.sqrt(Math.sqrt(255 / (parseInt(returnData(i,"Catch Rate","")) / 3))) / 65536) ** 3 * 100) * 10) / 10;
		}
		catchrate.querySelector(':scope *[dataname="value"]').setAttribute("value", returnData(i,"Catch Rate",""));
		catchrate.querySelector(':scope *[dataname="value"]').setAttribute("title","When thrown at a full health "+getPokémonName(i)+" with an ordinary Poké Ball.");
		catchrate.querySelector(':scope *[dataname="value"]').innerText = catchRateFormula+"%";
	}
    if (HeldItem == true) {
		let percent = Object.keys(DATA_Pokémon_HeldItem)
        for(let q = 0; q < percent.length; q++) {
			let pbase = helditem.querySelector(':scope > div b[name="'+percent[q]+'"]');
			let pimg = helditem.querySelector(':scope > div b[name="'+percent[q]+'"] img');
			let ptxt = helditem.querySelector(':scope > div b[name="'+percent[q]+'"]  > *:last-child');
            if(returnData(i,"Held Item","")[q] != undefined) {
				pbase.setAttribute("value", returnData(i,"Held Item","")[q]);
                pbase.setAttribute("title",percent[q]+"\n"+returnData(i,"Held Item","")[q]);
				pimg.src = getMedia(true,[getItemIcon(returnData(i,"Held Item","")[q])],[PATH_Item_Bag]);
				pimg.style.display = "unset";
                ptxt.innerText = returnData(i,"Held Item","")[q];
            } else {
                pimg.style.display = "none";
            }
        }
        let heldcheck;
        for(let q = 0; q < returnData(i,"Held Item","").length; q++) {
            if(returnData(i,"Held Item","")[q] == undefined) {
                heldcheck = false;
            } else {
                heldcheck = true;
                break
            }
        }
        if(heldcheck == false) {
            helditem.parentElement.style.display = "none";
        } else {
            helditem.parentElement.style.display = "flex";
        }
    }
    if (formatCalcTypeAdvantage(calculateTypeAdvantage(i)) != undefined) {
        type.setAttribute("title",formatCalcTypeAdvantage(calculateTypeAdvantage(i)));
    }
    else {
        type.setAttribute("title","");
    }
	let data_type = returnData(i,"Type","");
	let data_type_1 = data_type[0];
	let data_type_2 = data_type[1];

	if(data_type_1 != undefined) {
		type.querySelector(":scope > span:first-child > * > *:last-child").style.display = "none";
		type.querySelector(":scope > span:first-child").classList.add("active");
		type.querySelector(":scope > span:first-child img").style.display = "inline";
		type.querySelector(":scope > span:first-child > * > *:last-child").innerText = data_type_1;
		type.querySelector(":scope > span:first-child img").src = getMedia(true,[data_type_1],[PATH_Type_Icon]);
        type.querySelector(":scope > span:first-child img").setAttribute("value", data_type_1);
	} else {
		type.querySelector(":scope > span:first-child").classList.remove("active");
		type.querySelector(":scope > span:first-child img").style.display = "none";
	}
	if(data_type_2 != undefined) {
		type.querySelector(":scope > span:last-child > * > *:last-child").style.display = "none";
		type.querySelector(":scope > span:last-child").classList.add("active");
		type.querySelector(":scope > span:last-child img").style.display = "inline";
		type.querySelector(":scope > span:last-child > * > *:last-child").innerText = data_type_2;
		type.querySelector(":scope > span:last-child img").src = getMedia(true,[data_type_2],[PATH_Type_Icon]);
        type.querySelector(":scope > span:last-child img").setAttribute("value", data_type_2);
	} else {
		type.querySelector(":scope > span:last-child").classList.remove("active");
		type.querySelector(":scope > span:last-child img").style.display = "none";
	}
	if(data_type_1 != undefined && data_type_2 != undefined) {
		type.setAttribute("name","2");
	} else {
		type.removeAttribute("name");
	}
	let dataSectionMainLearnsetUl = document.querySelector("#data > div[value='"+id+"'] > div section[name='main'] > div[name='learnset'] ul");
	let dataSectionMainLearnsetHeader = document.querySelectorAll("#data > div[value='"+id+"'] > div section[name='main'] > div[name='learnset'] ol li > p");
	let dataSectionMainLearnsetList = document.querySelectorAll("#data > div[value='"+id+"'] > div section[name='main'] > div[name='learnset'] ul li");
	for(u = 0; u < dataSectionMainLearnsetList.length; u++) {
		dataSectionMainLearnsetList[u].remove();
	}

    let learnsetArr = returnMoveSet(this.value,"");
    
	for (u = 0; u < learnsetArr.length; u++) {
        let dataSectionMainLearnsetLi = document.createElement("li");
        dataSectionMainLearnsetUl.appendChild(dataSectionMainLearnsetLi);

        for(y = 0; y < dataSectionMainLearnsetHeader.length; y++) {
	
		
			
			
            if(y == 0) {

                if (learnsetArr[u]["Type"] == "Prior Evolution") {
			

					let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					let dataSectionMainLearnsetLiText = document.createElement("small");
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);
					dataSectionMainLearnsetLiText.title = "via "+learnsetArr[u]["Type"];
                    
                    dataSectionMainLearnsetLiText.innerText = "Prior Evolution";
                    

                    if(learnsetArr[u]["Evolution"].includes(",")) {
                        for (p = 0; p < learnsetArr[u]["Evolution"].split(",").length; p++) {
                            let dataSectionMainLearnsetLiImg = document.createElement("img");
							dataSectionMainLearnsetLiImg.src = getMedia(true,[getPokémonPath(getPokémonInt(learnsetArr[u]["Evolution"].split(",")[p]))],[PATH_Pokémon_Box_Default_PNG]);
                            dataSectionMainLearnsetLiImg.setAttribute("title", learnsetArr[u]["Evolution"].split(",")[p]);
                            dataSectionMainLearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Evolution"].split(",")[p]));
                            dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiImg);
                            dataSectionMainLearnsetLiImg.addEventListener("click", modalData);
							dataSectionMainLearnsetLiImg.setAttribute("function","modalData");
                        }
                    } else {
                        let dataSectionMainLearnsetLiImg = document.createElement("img");
						dataSectionMainLearnsetLiImg.src = getMedia(true,[getPokémonPath(getPokémonInt(learnsetArr[u]["Evolution"]))],[PATH_Pokémon_Box_Default_PNG]);
                        dataSectionMainLearnsetLiImg.setAttribute("title", learnsetArr[u]["Evolution"]);
                        dataSectionMainLearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Evolution"]));
                        dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiImg);
                        dataSectionMainLearnsetLiImg.addEventListener("click", modalData);
						dataSectionMainLearnsetLiImg.setAttribute("function","modalData");
                    }
                }

                if (learnsetArr[u]["Type"] == "Level Up") {
					let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
					let dataSectionMainLearnsetLiText = document.createElement("h6");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);
					dataSectionMainLearnsetLiText.title = "via "+learnsetArr[u]["Type"];
				
                    dataSectionMainLearnsetLiText.innerText = learnsetArr[u]["Factor"];
                    if (learnsetArr[u]["Factor"] == "Evolution") {
                        dataSectionMainLearnsetLiText.title = "via Evolution Trigger";
                    }
                }
                else if (learnsetArr[u]["Type"] == "Machine") {
					let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
					let dataSectionMainLearnsetLiText = document.createElement("h6");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);
					dataSectionMainLearnsetLiText.title = "via "+learnsetArr[u]["Type"];

                    dataSectionMainLearnsetLiText.innerText = learnsetArr[u]["Machine"];
                }
                else if (learnsetArr[u]["Type"] == "Breeding") {
					let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
					let dataSectionMainLearnsetLiText = document.createElement("small");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);
					dataSectionMainLearnsetLiText.title = "via "+learnsetArr[u]["Type"];

                    dataSectionMainLearnsetLiText.innerText = "via Breeding";
                    

                    if(learnsetArr[u]["Parent"].includes(",")) {
                        for (p = 0; p < learnsetArr[u]["Parent"].split(",").length; p++) {
                            let dataSectionMainLearnsetLiImg = document.createElement("img");
							dataSectionMainLearnsetLiImg.src = getMedia(true,[getPokémonPath(getPokémonInt(learnsetArr[u]["Parent"].split(",")[p]))],[PATH_Pokémon_Box_Default_PNG]);
                            dataSectionMainLearnsetLiImg.setAttribute("title", "with "+learnsetArr[u]["Parent"].split(",")[p]);
                            dataSectionMainLearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Parent"].split(",")[p]));
                            dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiImg);
                            dataSectionMainLearnsetLiImg.addEventListener("click", modalData);
							dataSectionMainLearnsetLiImg.setAttribute("function","modalData");
                        }
                    } else {
                        let dataSectionMainLearnsetLiImg = document.createElement("img");
						dataSectionMainLearnsetLiImg.src = getMedia(true,[getPokémonPath(getPokémonInt(learnsetArr[u]["Parent"]))],[PATH_Pokémon_Box_Default_PNG]);
                        dataSectionMainLearnsetLiImg.setAttribute("title", "with "+learnsetArr[u]["Parent"]);
                        dataSectionMainLearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Parent"]));
                        dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiImg);
                        dataSectionMainLearnsetLiImg.addEventListener("click", modalData);
						dataSectionMainLearnsetLiImg.setAttribute("function","modalData");
                    }
                }
				else if (learnsetArr[u]["Type"] == "Tutor") {
					let tutordata = getTutorData(learnsetArr[u]["Move"],"Move");

					if (tutordata.length > 0) {
						let dataSectionMainLearnsetLiTextOuter = document.createElement("b");
						let dataSectionMainLearnsetLiText = document.createElement("small");
						dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
						dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

						dataSectionMainLearnsetLiText.innerText = "Move Tutor";
						dataSectionMainLearnsetLiTextOuter.setAttribute("name","map");
						dataSectionMainLearnsetLiTextOuter.setAttribute("value",tutordata[0]["Location"])
						dataSectionMainLearnsetLiTextOuter.addEventListener("click",dataRedirect)
						dataSectionMainLearnsetLiTextOuter.setAttribute("function","dataRedirect")
						dataSectionMainLearnsetLiText.title = "via "+learnsetArr[u]["Type"];
					}
					else {
						let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
						let dataSectionMainLearnsetLiText = document.createElement("small");
						dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
						dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

						dataSectionMainLearnsetLiText.innerText = "Move Tutor";
						dataSectionMainLearnsetLiText.title = "via "+learnsetArr[u]["Type"];
					}

                }
            }
            if(y == 1) {
				
                if(learnsetArr[u]["Move"] == undefined) {
					let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
					let dataSectionMainLearnsetLiText = document.createElement("h6");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                    dataSectionMainLearnsetLiText.innerHTML = "–";
					dataSectionMainLearnsetLiText.title = "Move";
                } else {
					let dataSectionMainLearnsetLiTextOuter = document.createElement("b");
					let dataSectionMainLearnsetLiText = document.createElement("h6");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);
					
					dataSectionMainLearnsetLiTextOuter.setAttribute("type","underline");
                    dataSectionMainLearnsetLiText.innerText = learnsetArr[u]["Move"];
                    dataSectionMainLearnsetLiText.setAttribute("name","move");
                    dataSectionMainLearnsetLiText.addEventListener("click", dataRedirect);
					dataSectionMainLearnsetLiText.setAttribute("function","dataRedirect");
					dataSectionMainLearnsetLiText.title = "Move";
                }


            }
            if(y == 2) {
				let typ = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],learnsetArr[u]["Move"]);
				typ = undDel(typ,"-");

				let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
				let dataSectionMainLearnsetLiText = document.createElement("h6");
				dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
				dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                dataSectionMainLearnsetLiText.title = "Type";
				dataSectionMainLearnsetLiText.innerText = typ;
                
                dataSectionMainLearnsetLiTextOuter.style.background = "var(--type"+dataSectionMainLearnsetLiText.innerText+")";
            }
            if(y == 3) {
				let cate = returnArrValue(finaldata["Moves"]["Category"],DATA_Move_Reference["Name"],DATA_Move_Category["Category"],learnsetArr[u]["Move"])
				cate = undDel(cate,"-");

				let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
				let dataSectionMainLearnsetLiText = document.createElement("h6");
				dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
				dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                dataSectionMainLearnsetLiText.title = "Category";
				dataSectionMainLearnsetLiText.innerText = cate;
                

				dataSectionMainLearnsetLiTextOuter.style.background = "var(--type"+dataSectionMainLearnsetLiText.innerText+")";
            }
            if(y == 4) {
				let pwr = returnArrValue(finaldata["Moves"]["Power"],DATA_Move_Reference["Name"],DATA_Move_Power["Power"],learnsetArr[u]["Move"]);
				pwr = undDel(pwr,"-");

				let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
				let dataSectionMainLearnsetLiText = document.createElement("h6");
				dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
				dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                dataSectionMainLearnsetLiText.title = "Power";
				dataSectionMainLearnsetLiText.innerText = pwr;
                
            }
            if(y == 5) {
				let acc = returnArrValue(finaldata["Moves"]["Accuracy"],DATA_Move_Reference["Name"],DATA_Move_Accuracy["Accuracy"],learnsetArr[u]["Move"]);
				acc = undDel(acc,"-");

				let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
				let dataSectionMainLearnsetLiText = document.createElement("h6");
				dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
				dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                dataSectionMainLearnsetLiText.title = "Accuracy";
				dataSectionMainLearnsetLiText.innerText = acc;
                
            }
            if(y == 6) {
				let ppmin = returnArrValue(finaldata["Moves"]["PP"],DATA_Move_Reference["Name"],DATA_Move_PP["Min"],learnsetArr[u]["Move"])
				let ppmax = returnArrValue(finaldata["Moves"]["PP"],DATA_Move_Reference["Name"],DATA_Move_PP["Max"],learnsetArr[u]["Move"])

				let dataSectionMainLearnsetLiTextOuter = document.createElement("span");
				let dataSectionMainLearnsetLiText = document.createElement("h6");
				dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
				dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                dataSectionMainLearnsetLiText.title = "PP";
				if (ppmin == undefined || ppmax == undefined) {
					dataSectionMainLearnsetLiText.innerHTML = "-";
				}
				else {
					dataSectionMainLearnsetLiText.innerHTML = ppmin+" <span>(max. "+ppmax+")</span>";
				}
                
            }

        }
		
	}
	
	
	memory("Restore","game",base.querySelectorAll(":scope section[name='main'] > div[name='area'] ul input"))  
}




$("body").click(function(event) {
	if(!$(event.target).closest('#data aside[name="evolution"][type*="previous"]').length && !$(event.target).is('#data aside[name="evolution"][type*="previous"]')) {
		$('#data aside[name="evolution"][type*="previous"] > div > div').removeClass("active");
	}
	if(!$(event.target).closest('#data aside[name="evolution"][type*="next"]').length && !$(event.target).is('#data aside[name="evolution"][type*="next"]')) {
		$('#data aside[name="evolution"][type*="next"] > div > div').removeClass("active");
	}
});

let navChecker = [0];

function showMetadataLearnsetArea() {
	
	let int = this.getAttribute("name").replaceAll("data-navigation","");
	let divs = document.querySelectorAll("#data > div[value='"+int+"'] section[name='main'] > div[name]");
	let location = document.querySelectorAll("#data > div[value='"+int+"'] section[name='main'] > div[name='area'] ul li > *[name='location'] > *:first-child");
	let mapOuter = document.querySelector("#data > div[value='"+int+"'] section[name='main'] > div[name='area'] > div > div");
	let locations = [];
	let img = mapOuter.querySelector(":scope img");

	for(let i = 0; i < location.length; i++) {
		locations.push(location[i].innerText)
	}

	for(let i = 0; i < divs.length; i++) {
		divs[i].style.display = "none";
	}
	divs[this.value].style.removeProperty("display");

	if (this.value == 2) {
		if (img.naturalWidth != 0) {
			mapifyMap(mapOuter);
			mapBlink(mapOuter,locations);
		}
		else {
			img.addEventListener("load", event => {
				mapifyMap(mapOuter);
				mapBlink(mapOuter,locations);
			});
		}
	}


	navChecker.fill(parseInt(this.value))
}

function navKeeper(id) { 

	let MetadataButton = document.querySelector("#data > div[value='"+id+"'] nav input[value='0']");
	let LearnsetButton = document.querySelector("#data > div[value='"+id+"'] nav input[value='1']");
	let AreaButton = document.querySelector("#data > div[value='"+id+"'] nav input[value='2']");
	if(navChecker == 0) {
		MetadataButton.click();
	}
	if(navChecker == 1) {
		LearnsetButton.click();
	}
	if(navChecker == 2) {
		AreaButton.click();
	}
}



function modalData() {
	let int;
	let id;
	let def;

	tar = this;
	if (tar.tagName == undefined) {
		tar = event.target;
	}
	int = tar.getAttribute("value");
	def = true;

	for(let i = 0; i < finaldata["Pokémon"]["Reference"].length; i++) {
		if(int != undefined) {
			if(i == int) {
				id = finaldata["Pokémon"]["Reference"][i]["ID"];
				if(!finaldata["Pokémon"]["Reference"][i]["Variant"].includes("Default")) {
					def = false;
				}
			}
		}
	}

	

	let activeWindow = document.querySelector("#data > div.open");
	if(activeWindow != null) {
		activeWindow.classList.remove("open");
	}

	if (int == "" || int == undefined || int == null || id == "" || id == undefined || id == null) {
		return;
	}

	let windowCount;
	let maxWindowCount;
	let currentWindow;
	let formSpec;
	let formFirst;
	maxWindowCount = 10;
	windowCount = document.querySelectorAll("#data > div");
	currentWindow = document.querySelector("#data"+id);
	if (windowCount.length >= maxWindowCount) {
		for (let u = 0; u < windowCount.length; u++) {
			if (windowCount[u].getAttribute("value") != id) {
				windowCount[u].remove();
			}
		}
		console.log("Cleared some space")
	}
	if(currentWindow == null) {
		createData(id, int);
	}

	if(int != undefined) {
		formSpec = document.querySelector("#data > div[value='"+id+"'] section[name='form'] > input[value='"+int+"'");
		formFirst = document.querySelector("#data > div[value='"+id+"'] section[name='form'] > input:first-child");
		if(def == false) {
			if(formSpec != null) {
				formSpec.click();
			}
		} else if(def == true) {
			if(formFirst != null) {
				formFirst.click();
			}
		}
	}

	currentWindow = document.querySelector("#data > div[value='"+id+"']");
	if(currentWindow != null) {
		currentWindow.classList.add("open");
	}
	navKeeper(id);
	

}


function callPopUp(type) {
	let x;
	let arr;
	let base = findUpEl(event.target,"class","open");
	x = base.getAttribute("value");
	let popup = base.querySelector(":scope section[name='main'] > div[name='metadata'] > div[name='popup']")
	let ul = popup.querySelector(":scope ul");
	let lis = popup.querySelectorAll(":scope li");
	let idpath = popup.querySelector(":scope span > h6");
	let iconpath = popup.querySelector(":scope span > img");
	let titlepath = popup.querySelector(":scope span > h4");
	let descriptionpath = popup.querySelector(":scope span > p");


    if (popup.classList.length == 0) {
        popup.classList.add("close");
    }
	if(!popup.getAttribute("class").includes("open") && !popup.getAttribute("class").includes("close")) {
		popup.classList.add("close");
	}
	let id;
	let icon;
	let title;
	let description;
	let additional;
	let style;
	let formula;
	let abbreviation;
	let alteration;
	let target = event.currentTarget;
	let enhancetarget;

	if (type == "Gender Ratio") {
		let arr = finaldata["Pokémon"]["Gender Ratio"];
	}
	if (type == "Hatch Rate") {
		let arr = finaldata["Pokémon"]["Hatch Rate"];
	}
	if (type == "Catch Rate") {
		let arr = finaldata["Pokémon"]["Catch Rate"];
	}
	if (type == "Base Stats") {
		let arr = finaldata["Pokémon"]["Base Stats"];
	}
	if (type == "Base Stats Total") {
		let arr = finaldata["Pokémon"]["Base Stats"];
	}
	if (type == "EV Yield") {
		let arr = finaldata["Pokémon"]["Effort Value Yield"];
	}
	if (type == "EV Yield Total") {
		let arr = finaldata["Pokémon"]["Effort Value Yield"];
	}
	if (type == "Experience Yield") {
		let arr = finaldata["Pokémon"]["Experience Yield"];
	}
	if (type == "Leveling Rate") {
		let arr = finaldata["Pokémon"]["Leveling Rate"];
	}
	if (type == "Egg Group") {
		let arr = finaldata["Pokémon"]["Egg Group"];
	}
	if (type == "Type") {
		let arr = finaldata["Pokémon"]["Type"];
	}
	if (type == "Ability") {
		let arr = finaldata["Pokémon"]["Ability"];
	}
	if (type == "Held Item") {
		let arr = finaldata["Pokémon"]["Held Item"];
	}


	if (type == "Experience Yield") {
		style = "Custom1";
	}
	else if (type == "Gender Ratio") {
		style = "Custom2";
	}
	else if (type == "Base Stats" || type == "EV Yield") {
		style = "Multiple";
	}
	else if (type.includes("Total")) {
		style = "Total";
	}
	else {
		style = "Single";
	}


	if(target.getAttribute("dataname") == "value") {
		enhancetarget = target;
	} else {
		enhancetarget = target.querySelector(':scope [dataname="value"]');
	}

	if(enhancetarget.getAttribute("value") != undefined) {
		title = enhancetarget.getAttribute("value");
	} else if(enhancetarget.innerText != "") {
		title = enhancetarget.innerText;
	} else if(enhancetarget.getAttribute("title") != undefined) {
		title = enhancetarget.getAttribute("title");
	}
	if(title.includes("  ")) {
		title = title.replaceAll("  ","");
	}
	if(navChecker != 1) {
		navChecker.fill(1);
		document.querySelector("#data > div[value='"+x+"'] nav label:nth-child(2)").click();
	}
	ul.setAttribute("name", type);

	if(title.includes(" : ")) {
		title = title.split(" : ");
	}
	
	
	if(type == "Ability") {
		id = returnAppArrData(finaldata["Abilities"]["Reference"],"Ability",title)[0]["ID"];
		description = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",title)[0]["Description"];
	} else if(type == "Held Item") {
		id = enhancetarget.getAttribute("name");
        description = getItemData(title,"Description").join("\n");
	}
	if(type == "Catch Rate") {
		if(Generation == 1) {
			formula = Math.round(((Math.min(parseInt(title)+1, 256)) / 256 * (85+1 / 256) / 256 * 100) * 10) / 10+"%";
		} else if(Generation == 2) {
			formula = Math.round(((Math.max(parseInt(title) / 3, 1)+1) / 256 * 100) * 10) / 10+"%";
		} else if(Generation == 3 || Generation == 4) {
			formula = Math.round(((65535 / Math.sqrt(Math.sqrt(255 / (parseInt(title) / 3))) / 65536) ** 4 * 100) * 10) / 10+"%";
		} else if(Generation >= 5) {
			formula = Math.round(((65536 / Math.sqrt(Math.sqrt(255 / (parseInt(title) / 3))) / 65536) ** 3 * 100) * 10) / 10+"%";
		}
	} else if(type == "Experience Yield") {
		if(title >= 300) {
			abbreviation = "Very High";
		} else if(title >= 200 && title <= 299) {
			abbreviation = "High";
		} else if(title >= 100 && title <= 199) {
			abbreviation = "Medium";
		} else if(title >= 50 && title <= 99) {
			abbreviation = "Low";
		} else if(title >= 0 && title <= 49) {
			abbreviation = "Very Low";
		}
	} else if(type == "Hatch Rate") {
		if(Generation == 2 || Generation == 7) {
			formula = parseInt(title) * 256;
		} else if(Generation == 3) {
			formula = (parseInt(title)+1) * 256;
		} else if(Generation == 4) {
			formula = (parseInt(title)+1) * 255;
		} else if(Generation == 5 || Generation == 6) {
			formula = parseInt(title) * 257;
		}
	} else if(type == "Gender Ratio") {
		if(title[0] == "1" && title[1] == "0") { // Always Male
			alteration = "<span name='male'>♂</span> 1 : 0 <span name='female'>♀</span>";
			abbreviation = "Always Male";
		} else if(title[0] == "7" && title[1] == "1") { // Very Often Male
			alteration = "<span name='male'>♂</span> 7 : 1 <span name='female'>♀</span>";
			abbreviation = "Very Often Male";
		} else if(title[0] == "3" && title[1] == "1") { // Often Male
			alteration = "<span name='male'>♂</span> 3 : 1 <span name='female'>♀</span>";
			abbreviation = "Often Male";
		} else if(title[0] == "1" && title[1] == "1") { // Equal Ratio
			alteration = "<span name='male'>♂</span> 1 : 1 <span name='female'>♀</span>";
			abbreviation = "Equal Ratio";
		} else if(title[0] == "1" && title[1] == "3") { // Often Female
			alteration = "<span name='male'>♂</span> 1 : 3 <span name='female'>♀</span>";
			abbreviation = "Often Female";
		} else if(title[0] == "1" && title[1] == "7") { // Very Often Female
			alteration = "<span name='male'>♂</span> 1 : 7 <span name='female'>♀</span>";
			abbreviation = "Very Often Female";
		} else if(title[0] == "0" && title[1] == "1") { // Always Female
			alteration = "<span name='male'>♂</span> 0 : 1 <span name='female'>♀</span>";
			abbreviation = "Always Female";
		} else if(title[0] == "0" && title[1] == "0") { // Genderless
			alteration = "<span name='male'>♂</span> 0 : 0 <span name='female'>♀</span>";
			abbreviation = "Genderless";
		}
	}
	if(type == "Held Item") {
		icon = getMedia(true,[getItemIcon(target.getAttribute("value"))],[PATH_Item_Bag]);
		iconpath.setAttribute("name","item");
		iconpath.addEventListener("click", dataRedirect);
        iconpath.setAttribute("function","dataRedirect");
	}
	if(type == "Base Stats" || type == "EV Yield") {
		additional = target.parentElement.getAttribute("name");
	} else if(type == "Base Stats Total"|| type == "EV Yield Total") {
		additional = target.getAttribute("name");
	}
	if(additional == "hp") {
		additional = "HP";
	} else if(additional == "atk") {
		additional = "attack";
	} else if(additional == "def") {
		additional = "defense";
	} else if(additional == "spatk") {
		additional = "Sp. Atk";
	} else if(additional == "spdef") {
		additional = "Sp. Def";
	}
	if(additional != undefined) {
		additional = additional.charAt(0).toUpperCase()+additional.slice(1);
	}
	for(u = 0; u < lis.length; u++) {
		lis[u].remove();
	}
	
	if(type == "Ability") {
		if(Generation <= 4) {
			let json = [DATA_Pokémon_Ability["Primary"],DATA_Pokémon_Ability["Primary"]];
		} else {
			let json = [DATA_Pokémon_Ability["Primary"],DATA_Pokémon_Ability["Secondary"],DATA_Pokémon_Ability["Hidden"]];
		}
	} else if(type == "Egg Group") {
		let json = [DATA_Pokémon_EggGroup["Primary"],DATA_Pokémon_EggGroup["Secondary"]];
	} else if(type == "Catch Rate") {
		let json = [DATA_Pokémon_CatchRate["Catch"],"Percentage"];
	} else if(type == "Hatch Rate") {
		let json = [DATA_Pokémon_HatchRate["Cycle"],DATA_Pokémon_HatchRate["Steps"]];
	} else if(type == "Experience Yield") {
		let json = [DATA_Pokémon_ExperienceYield["Yield"],"Category"];
	} else if(type == "Leveling Rate") {
		let json = ["Leveling"];
	} else if(type == "Type") {
		let json = [DATA_Pokémon_Type["Primary"],DATA_Pokémon_Type["Secondary"]];
	} else if(type == "Gender Ratio") {
		let json = ["Male","Female"];
	} else if(type == "Base Stats" || type == "Base Stats Total") {
		if(Generation <= 1) {
			let json = [DATA_Pokémon_BaseStats["HP"],DATA_Pokémon_BaseStats["Attack"],DATA_Pokémon_BaseStats["Defense"],DATA_Pokémon_BaseStats["Special"],DATA_Pokémon_BaseStats["Speed"],DATA_Pokémon_BaseStats["Total"]];
		} else {
			let json = [DATA_Pokémon_BaseStats["HP"],DATA_Pokémon_BaseStats["Attack"],DATA_Pokémon_BaseStats["Defense"],DATA_Pokémon_BaseStats["Sp. Atk"],DATA_Pokémon_BaseStats["Sp. Def"],DATA_Pokémon_BaseStats["Speed"],DATA_Pokémon_BaseStats["Total"]];
		}
	}
	else if(type == "EV Yield" || type == "EV Yield Total") {
		if(Generation <= 1) {
			let json = [DATA_Pokémon_EVYield["HP"],DATA_Pokémon_EVYield["Attack"],DATA_Pokémon_EVYield["Defense"],DATA_Pokémon_EVYield["Special"],DATA_Pokémon_EVYield["Speed"],DATA_Pokémon_EVYield["Total"]];
		} else {
			let json = [DATA_Pokémon_EVYield["HP"],DATA_Pokémon_EVYield["Attack"],DATA_Pokémon_EVYield["Defense"],DATA_Pokémon_EVYield["Sp. Atk"],DATA_Pokémon_EVYield["Sp. Def"],DATA_Pokémon_EVYield["Speed"],DATA_Pokémon_EVYield["Total"]];
		}
	} else if(type == "Held Item") {
		let json = DATA_Pokémon_HeldItem;
	}
	if(id == undefined) {
		idpath.innerText = "";
		idpath.style.display = "none";
	} else if(id.includes("%")) {
		idpath.innerText = id;
		idpath.style.display = "unset";
	} else {
		idpath.innerText = "#"+id;
		idpath.style.display = "unset";
	}
	if(type.includes("Total")) {
		titlepath.innerHTML = type.replaceAll("Total","")+"<br>"+title;
	} else if (type == "Base Stats" || type == "EV Yield") {
		titlepath.innerHTML = type+"<br>"+additional+": "+title;
	} else if(type == "Catch Rate" || type == "Experience Yield" || type == "Leveling Rate") {
		if(additional == undefined) {
			titlepath.innerHTML = type+"<br>"+title;
		} else {
			titlepath.innerHTML = type+" "+additional+"<br>"+title;
		}
	} else if(type == "Hatch Rate") {
		titlepath.innerHTML = "Egg Cycles<br>"+title;
	} else if(type == "Gender Ratio") {
		titlepath.innerHTML = type+"<br>"+"<span title='"+abbreviation+"'>"+alteration+"</span>";
	} else if (type == "Egg Group") {
        titlepath.innerHTML = type+"<br>"+"<span name='eggText"+title+"'>"+title+"</span>";
    } else {
		titlepath.innerText = title;
	}
	if(icon != undefined) {
		iconpath.style.display = "unset";
		iconpath.src = icon;
	} else {
		iconpath.style.display = "none";
	}
	iconpath.title = title;
	descriptionpath.innerText = description;


	if (description == undefined) {
		descriptionpath.style.display = "none";
	} else {
		descriptionpath.style.removeProperty("display");
	}

    
	let result = [];
	if(style == "Single") {
		for(q = 0; q < json.length; q++) {
			for(u = 0; u < arr.length; u++) {
				if(arr[u][json[q]] == title) {
					if(finaldata["Pokémon"]["Reference"][u][DATA_Pokémon_Reference["Reference"]] == "true") {
						let obj = new Object();
						obj["Integer"] = u;
						for(let y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						if(type == "Catch Rate") {
							if(Generation == 1) {
								obj["Percentage"] = Math.round(((Math.min(parseInt(arr[u][json[q]])+1, 256)) / 256 * (85+1 / 256) / 256 * 100) * 10) / 10+"%";
							}
							if(Generation == 2) {
								obj["Percentage"] = Math.round(((Math.max(parseInt(arr[u][json[q]]) / 3, 1)+1) / 256 * 100) * 10) / 10+"%";
							}
							if(Generation == 3 || Generation == 4) {
								obj["Percentage"] = Math.round(((65535 / Math.sqrt(Math.sqrt(255 / (parseInt(arr[u][json[q]]) / 3))) / 65536) ** 4 * 100) * 10) / 10+"%";
							}
							if(Generation >= 5) {
								obj["Percentage"] = Math.round(((65536 / Math.sqrt(Math.sqrt(255 / (parseInt(arr[u][json[q]]) / 3))) / 65536) ** 3 * 100) * 10) / 10+"%";
							}
						}
						result[u] = obj;
					}
				}
			}
		}
	} else if(style == "Multiple") {
		for(q = 0; q < json.length; q++) {
			for(u = 0; u < arr.length; u++) {
				if(arr[u][additional+"_"+jsonpath] == title) {
					if(finaldata["Pokémon"]["Reference"][u][DATA_Pokémon_Reference["Reference"]] == "true") {
						let obj = new Object();
						obj["Integer"] = u;
						for(let y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						result[u] = obj;
					}
				}
			}
		}
	} else if(style == "Total") {
		for(q = 0; q < json.length; q++) {
			for(u = 0; u < arr.length; u++) {
				if(arr[u][json[q]] != undefined) {
					if(finaldata["Pokémon"]["Reference"][u][DATA_Pokémon_Reference["Reference"]] == "true") {
						let obj = new Object();
						obj["Integer"] = u;
						for(let y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						result[u] = obj;
					}
				}
			}
		}
		result.sort(function(a, b) {
			return b[additional+"_"+jsonpath] - a[additional+"_"+jsonpath];
		});
	} else if(style == "Custom1") {
		for(let q = 0; q < json.length; q++) {
			for(let u = 0; u < arr.length; u++) {
				let condition;
				let abbreviation2;
				if(abbreviation == "Very High") {
					condition = parseInt(arr[u][json[q]]) >= 300;
					abbreviation2 = "Very High";
				}
				if(abbreviation == "High") {
					condition = parseInt(arr[u][json[q]]) >= 200 && parseInt(arr[u][json[q]]) <= 299;
					abbreviation2 = "High";
				}
				if(abbreviation == "Medium") {
					condition = parseInt(arr[u][json[q]]) >= 100 && parseInt(arr[u][json[q]]) <= 199;
					abbreviation2 = "Medium";
				}
				if(abbreviation == "Low") {
					condition = parseInt(arr[u][json[q]]) >= 50 && parseInt(arr[u][json[q]]) <= 99;
					abbreviation2 = "Low";
				}
				if(abbreviation == "Very Low") {
					condition = parseInt(arr[u][json[q]]) >= 0 && parseInt(arr[u][json[q]]) <= 49;
					abbreviation2 = "Very Low";
				}
				if(condition) {
					if(finaldata["Pokémon"]["Reference"][u][DATA_Pokémon_Reference["Reference"]] == "true") {
						let obj = new Object();
						obj["Integer"] = u;
						obj["Category"] = abbreviation2;
						for(let y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						result[u] = obj;
					}
				}
			}
		}
		result.sort(function(a, b) {
			return b[json[0]] - a[json[0]];
		});
	} else if(style == "Custom2") {
		for(let q = 0; q < json.length; q++) {
			for(let u = 0; u < arr.length; u++) {
				let alteration2;
				let abbreviation2;
				if(arr[u][json[0]] == "1" && arr[u][json[1]] == "0") { // Always Male
					alteration2 = "<span name='male'>♂</span> 1 : 0 <span name='female'>♀</span>";
					abbreviation2 = "Always Male";
				} else if(arr[u][json[0]] == "7" && arr[u][json[1]] == "1") { // Very Often Male
					alteration2 = "<span name='male'>♂</span> 7 : 1 <span name='female'>♀</span>";
					abbreviation2 = "Very Often Male";
				} else if(arr[u][json[0]] == "3" && arr[u][json[1]] == "1") { // Often Male
					alteration2 = "<span name='male'>♂</span> 3 : 1 <span name='female'>♀</span>";
					abbreviation2 = "Often Male";
				} else if(arr[u][json[0]] == "1" && arr[u][json[1]] == "1") { // Equal Ratio
					alteration2 = "<span name='male'>♂</span> 1 : 1 <span name='female'>♀</span>";
					abbreviation2 = "Equal Ratio";
				} else if(arr[u][json[0]] == "1" && arr[u][json[1]] == "3") { // Often Female
					alteration2 = "<span name='male'>♂</span> 1 : 3 <span name='female'>♀</span>";
					abbreviation2 = "Often Female";
				} else if(arr[u][json[0]] == "1" && arr[u][json[1]] == "7") { // Very Often Female
					alteration2 = "<span name='male'>♂</span> 1 : 7 <span name='female'>♀</span>";
					abbreviation2 = "Very Often Female";
				} else if(arr[u][json[0]] == "0" && arr[u][json[1]] == "1") { // Always Female
					alteration2 = "<span name='male'>♂</span> 0 : 1 <span name='female'>♀</span>";
					abbreviation2 = "Always Female";
				} else if(arr[u][json[0]] == "0" && arr[u][json[1]] == "0") { // Genderless
					alteration2 = "<span name='male'>♂</span> 0 : 0 <span name='female'>♀</span>";
					abbreviation2 = "Genderless";
				}
				if(alteration == alteration2) {
					if(finaldata["Pokémon"]["Reference"][u][DATA_Pokémon_Reference["Reference"]] == "true") {
						let obj = new Object();
						obj["Integer"] = u;
						obj["Alteration"] = alteration2;
						obj["Abbreviation"] = abbreviation2;
						for(let y = 0; y < json.length; y++) {
							if(arr[u][json[y]] != undefined) {
								obj[json[y]] = arr[u][json[y]];
							}
						}
						result[u] = obj;
					}
				}
			}
		}
		result.sort(function(a, b) {
			return b[json[0]] - a[json[0]];
		});
	}
	result = result.filter(value => Object.keys(value).length !== 0);
	if(icon == undefined) {
		for(u = 0; u < result.length; u++) {
            let int = result[u]["Integer"];
            let name = getPokémonName(int);

			let li = document.createElement("li");
			let span = document.createElement("span");
			if(type == "Ability") {
				if(Generation <= 4) {
					li.setAttribute("name","2");
				} else {
					li.setAttribute("name","3");
				}
			}
			let img = document.createElement("img");
            img.src = getMedia(true,[getPokémonPath(int)],[PATH_Pokémon_Box_Default_PNG]);
            img.title = name;
            img.setAttribute("value",int);

			if(getIntID(int,"") == x) {
				li.classList.add("select");
			}

			img.addEventListener("click", modalData);
            img.setAttribute("function","modalData");
			ul.appendChild(li);
			li.appendChild(span);
			span.appendChild(img);
			if(type == "Gender Ratio") {
				let p = document.createElement("p");
				p.title = result[u]["Abbreviation"];
				if(result[u]["Category"] == formula) {
					p.classList.add("select");
				}
				if(result[u]["Alteration"] != undefined) {
					p.innerHTML = result[u]["Alteration"];
				} else {
					p.innerText = "–";
				}
				li.appendChild(p);
			} else {
				for(q = 0; q < json.length; q++) {
					let p = document.createElement("p");
					if(type == "Hatch Rate" && q == 0) {
						p.title = "Egg Cycles";
					} else if(type == "Hatch Rate" && q == 1) {
						p.title = "Steps";
					} else if(type == "Base Stats" || type == "Base Stats Total" || type == "EV Yield" || type == "EV Yield Total") {
						p.title = json[q].split("_")[0];
						p.setAttribute("name","stat"+json[q].split("_")[0]);
					} else if(json[q].includes("_")) {
						p.title = json[q].split("_")[0]+" "+type;
					} else if(type == "Catch Rate") {
						if(q == 0) {
							p.title = type;
						} else {
                            p.title = "When thrown at a full health "+name+" with an ordinary Poké Ball.";
						}
					} else if(type == "Experience Yield") {
						if(q == 0) {
							p.title = type;
						} else {
							p.title = type+" Category";
						}
					} else {
						p.title = type;
					}
					if(style == "Multiple") {
						if(result[u][json[q]] == title && json[q] == additional+"_"+jsonpath) {
							p.classList.add("select");
						}
					} else if(style == "Total") {
						if(json[q] == additional+"_"+jsonpath) {
							p.classList.add("select");
						}
					} else if(type == "Catch Rate" || type == "Hatch Rate" || type == "Experience Yield") {
						if(result[u][json[q]] == title || result[u][json[q]] == formula || result[u][json[q]] == abbreviation) {
							p.classList.add("select");
						}
					} else {
						if(result[u][json[q]] == title) {
							p.classList.add("select");
						}
					}
					if(type != "Type") {
						if(type == "Egg Group") {
							if(result[u][json[q]] != undefined) {
								p.innerText = result[u][json[q]];
								p.setAttribute("name","eggText"+result[u][json[q]]);
							} else {
								p.innerText = "–";
							}
						} else {
							if(result[u][json[q]] != undefined) {
								p.innerText = result[u][json[q]];
								if(type == "Ability") {
									p.setAttribute("name","ability");
									p.addEventListener("click", dataRedirect);
                                    p.setAttribute("function","dataRedirect");
									p.classList.add("active");
								}
							} else {
								p.innerText = "–";
							}
						}
					} else {
						let img2 = document.createElement("img");
						let text = document.createElement("p");
						if(result[u][json[q]] != undefined) {
							img2.src = getMedia(true,[result[u][json[q]]],[PATH_Type_Icon]);
							img2.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';");
							text.innerText = result[u][json[q]];
						}
						text.style.display = "none";
						p.appendChild(img2);
						p.appendChild(text);
					}
					li.appendChild(p);
				}
			}
		}
	} else {
		for(u = 0; u < result.length; u++) {
            let int = result[u]["Integer"];
            let name = getPokémonName(int);

			let li = document.createElement("li");
			let span = document.createElement("span");
			let img = document.createElement("img");
	
            img.src = getMedia(true,[getPokémonPath(int)],[PATH_Pokémon_Box_Default_PNG]);
            img.title = name;
            img.setAttribute("value",int);
			
			if(type == "Held Item") {
				li.setAttribute("name", json.length);
			}
			if(getIntID(int,"") == x) {
				img.classList.add("select");
			}
			img.addEventListener("click", modalData);
            img.setAttribute("function","modalData");
			ul.appendChild(li);
			li.appendChild(span);
			span.appendChild(img);
			for(q = 0; q < json.length; q++) {
				let p = document.createElement("p");
				let span2 = document.createElement("span");
				let pimg = document.createElement("img");
				if(result[u][json[q]] != undefined) {
					pimg.src = getMedia(true,[getItemIcon(result[u][json[q]])],[PATH_Item_Bag]);
					pimg.title = result[u][json[q]];
					if(json[q].includes("_")) {
						span2.innerText = json[q].split("_")[0];
					} else {
						span2.innerText = json[q];
					}
					pimg.setAttribute("name","item");
					pimg.addEventListener("click", dataRedirect);
                    pimg.setAttribute("function","dataRedirect");
					pimg.classList.add("active");
				} else {
					span2.innerText = "–";
					pimg.style.display = "none";
				}
				p.title = json[q].split("_")[0];
				if(result[u][json[q]] == title) {
					pimg.classList.add("select");
				}
				if(result[u][json[q]] == title && json[q].split("_")[0] == id) {
					span2.classList.add("select");
					li.classList.add("select");
				}
				li.appendChild(p);
				p.appendChild(span2);
				p.appendChild(pimg);
			}
		}
	}
	let select = ul.querySelector(":scope > li.select");
	if (select != undefined) {
		select.scrollIntoView();
	}
}


