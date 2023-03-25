var createData = function(id, i) {
	var i;
	var id;
	var dataDiv = document.createElement("div");
	var dataDivOverlay = document.createElement("span");
	var dataDivContent = document.createElement("div");
	var dataNavigation = document.createElement("nav");
	var dataSectionMainMapContain = document.createElement("div");
	var dataSectionMainMapZoomIn = document.createElement("figure");
	var dataSectionMainMapZoomInText = document.createElement("h3");
	var dataSectionMainMapZoomOut = document.createElement("figure");
	var dataSectionMainMapZoomOutText = document.createElement("h2");
	var dataSectionMainMapFullscreen = document.createElement("figure");
	var dataSectionMainMapFullscreenText = document.createElement("h5");
	var dataSectionMainMapPause = document.createElement("figure");
	var dataSectionMainMapPauseText = document.createElement("h3");
	var dataSectionMainMapOuter = document.createElement("div");
	var dataSectionMainMapImage = document.createElement("img");
	var dataSectionMainMap = document.createElement("map");

	var dataForm = document.createElement("section");
	var variant = [];
	for(var u = 0; u < finaldataPokémon.length; u++) {
		if(finaldataPokémon[u]["ID"] == id && finaldataPokémon[u][JSONPath_Reference] == "true") {
			variant.push(finaldataPokémon[u]["Pokémon"]);
		}
	}

	for(var u = 0; u < finaldataPokémon.length; u++) {
		if(finaldataPokémon[u]["ID"] == id && finaldataPokémon[u][JSONPath_Reference] == "true") {
			var dataFormInput = document.createElement("input");
			var dataFormLabel = document.createElement("label");
			var dataFormImg = document.createElement("img");
			dataFormInput.setAttribute("type","radio");
			dataFormInput.setAttribute("name","data-form-selector"+id);
			dataFormInput.setAttribute("id","data-form-selector-"+u);
			dataFormLabel.title = getPokémonName(u);
			if (variant.length <= 1) {
				dataFormLabel.title += "\n"+getPokémonName(u)+" cannot change form.";
			}
			else if (finaldataPokémonFormChange[u][JSONPath_FormChange] != undefined) {
				dataFormLabel.title += "\n"+finaldataPokémonFormChange[u][JSONPath_FormChange];
			}
			dataFormInput.value = u;
			dataFormLabel.setAttribute("for","data-form-selector-"+u);
			dataFormImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(u,"Box")+".png";
			dataFormImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
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

	var dataSectionHeader = document.createElement("section");
	var dataSectionHeaderDivPortrait = document.createElement("div");
	var dataSectionHeaderDivPortraitContent = document.createElement("div");
	var dataSectionHeaderPortrait = document.createElement("img");
	var dataSectionHeaderStatsEVSelector = document.createElement("ol");
	var dataSectionHeaderDivIdNameOuter = document.createElement("div");
	var dataSectionHeaderDivIdName = document.createElement("div");
	var dataSectionHeaderIDNational = document.createElement("h5");
	var dataSectionHeaderName = document.createElement("h3");
	var dataSectionHeaderDebutCategoryOuter = document.createElement("div");
	var dataSectionHeaderDebutCategory = document.createElement("span");

	var dataSectionHeaderDebut = document.createElement("p");
	var dataSectionHeaderCategory = document.createElement("p");
	var dataSectionHeaderType = document.createElement("div");
	var dataSectionMain = document.createElement("section");
	var dataSectionMainMetadata = document.createElement("div");
	var dataSectionMainMetadataStats = document.createElement("div");
	var dataSectionMainDescriptionOuter = document.createElement("div");
	var dataSectionMainMetadataSidebarOuter = document.createElement("div");
	var dataSectionMainMetadataSidebar = document.createElement("div");
	var dataSectionMainMetadataSidebarRow1 = document.createElement("div");
	var dataSectionMainMetadataSidebarRow2 = document.createElement("div");
	var dataSectionMainMetadataSidebarRow3 = document.createElement("div");
	var dataSectionMainMetadataSidebarRow4 = document.createElement("div");
	var dataSectionMainMetadataSidebarCatchRateOuter = document.createElement("span");
	var dataSectionMainMetadataSidebarCatchRateToggle = document.createElement("b");
	dataSectionMainMetadataSidebarCatchRateToggle.setAttribute("type","invert");
	var dataSectionMainMetadataSidebarCatchRateTitle = document.createElement("h6");
	var dataSectionMainMetadataSidebarCatchRate = document.createElement("h5");
	var dataSectionMainMetadataSidebarLevelRateOuter = document.createElement("span");
	var dataSectionMainMetadataSidebarLevelRateToggle = document.createElement("b");
	dataSectionMainMetadataSidebarLevelRateToggle.setAttribute("type","invert");
	var dataSectionMainMetadataSidebarLevelRateTitle = document.createElement("h6");
	var dataSectionMainMetadataSidebarLevelRate = document.createElement("h5");
	var dataSectionMainMetadataSidebarExpYieldOuter = document.createElement("span");
	var dataSectionMainMetadataSidebarExpYieldToggle = document.createElement("b");
	dataSectionMainMetadataSidebarExpYieldToggle.setAttribute("type","invert");
	var dataSectionMainMetadataSidebarExpYieldTitle = document.createElement("h6");
	var dataSectionMainMetadataSidebarExpYield = document.createElement("h5");
	var dataSectionMainAreaDiv = document.createElement("div");
	var dataSectionMainArea = document.createElement("ul");
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

	var navz = ["metadata","learnset","area"];
	var navztitles = ["Data","Learnset","Area"];
	for(var q = 0; q < navz.length; q++) {
		var dataNavigationInput = document.createElement("input");
		var dataNavigationLabel = document.createElement("label");
		var dataNavigationLabelText = document.createElement("h6");
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

	dataSectionHeaderPortrait.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");

	dataSectionHeaderIDNational.innerText = "#"+id;
	dataSectionHeaderIDNational.setAttribute("name","national");
	var dataSectionHeaderTypePrimaryOuter = document.createElement("span");
	var dataSectionHeaderTypePrimary = document.createElement("b");
	dataSectionHeaderTypePrimary.setAttribute("type","invert");
	var dataSectionHeaderTypePrimaryImg = document.createElement("img");
	var dataSectionHeaderTypePrimaryText = document.createElement("h5");
	dataSectionHeaderTypePrimaryImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';");
	dataSectionHeaderTypePrimaryImg.setAttribute("dataname","value");
	dataSectionHeaderType.appendChild(dataSectionHeaderTypePrimaryOuter);
	dataSectionHeaderTypePrimaryOuter.appendChild(dataSectionHeaderTypePrimary);
	dataSectionHeaderTypePrimary.appendChild(dataSectionHeaderTypePrimaryImg);
	dataSectionHeaderTypePrimary.appendChild(dataSectionHeaderTypePrimaryText);
	var dataSectionHeaderTypeSecondaryOuter = document.createElement("span");
	var dataSectionHeaderTypeSecondary = document.createElement("b");
	dataSectionHeaderTypeSecondary.setAttribute("type","invert");
	var dataSectionHeaderTypeSecondaryImg = document.createElement("img");
	var dataSectionHeaderTypeSecondaryText = document.createElement("h5");
	dataSectionHeaderTypeSecondaryImg.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='block';");
	dataSectionHeaderTypeSecondaryImg.setAttribute("dataname","value");
	dataSectionHeaderType.appendChild(dataSectionHeaderTypeSecondaryOuter);
	dataSectionHeaderTypeSecondaryOuter.appendChild(dataSectionHeaderTypeSecondary);
	dataSectionHeaderTypeSecondary.appendChild(dataSectionHeaderTypeSecondaryImg);
	dataSectionHeaderTypeSecondary.appendChild(dataSectionHeaderTypeSecondaryText);


	dataSectionMainMapImage.src = "./media/Images/Location/Map/"+MEDIAPath_Map+"/Map.png";
	dataSectionMainMapImage.setAttribute("usemap", "#"+MEDIAPath_Map+"-"+id);
	
	dataSectionMainMap.setAttribute("name", MEDIAPath_Map+"-"+id);
	dataSectionMainMap.setAttribute("id", MEDIAPath_Map+"-"+id);
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


	for(q = 0; q < JSONPath_Pokédex.length; q++) {
		var z = q+1;
		var dataSectionHeaderIDRegional = document.createElement("h5");
		if(finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]] != null) {
			dataSectionHeaderIDRegional.innerText = "#"+finaldataPokémonPokédexID[i][JSONPath_Pokédex[q]];
		}
		dataSectionHeaderIDRegional.setAttribute("name","regional"+z)
		dataSectionHeaderDivIdName.appendChild(dataSectionHeaderIDRegional);
	}
	if(Ability.length >= 1) {
		var dataSectionMainMetadataSidebarRow1 = document.createElement("div");
		var dataSectionMainMetadataSidebarAbilityOuter = document.createElement("span");
		dataSectionMainMetadataSidebarAbilityOuter.setAttribute("name", "ability");
		dataSectionMainMetadataSidebar.appendChild(dataSectionMainMetadataSidebarRow1);
		dataSectionMainMetadataSidebarRow1.appendChild(dataSectionMainMetadataSidebarAbilityOuter);
		
		var dataSectionMainMetadataSidebarAbilityPrimarySecondaryOuter = document.createElement("span");
		dataSectionMainMetadataSidebarAbilityOuter.appendChild(dataSectionMainMetadataSidebarAbilityPrimarySecondaryOuter);

		var dataSectionMainMetadataSidebarAbilityPrimaryContent = document.createElement("span");
		var dataSectionMainMetadataSidebarAbilityPrimary = document.createElement("b");
		dataSectionMainMetadataSidebarAbilityPrimary.setAttribute("type","invert");
		var dataSectionMainMetadataSidebarAbilityPrimaryText = document.createElement("small");
		dataSectionMainMetadataSidebarAbilityPrimary.setAttribute("title","Primary Ability");
		dataSectionMainMetadataSidebarAbilityPrimary.setAttribute("dataname","value");
		dataSectionMainMetadataSidebarAbilityPrimaryText.innerText = "Primary Ability";
		dataSectionMainMetadataSidebarAbilityPrimarySecondaryOuter.appendChild(dataSectionMainMetadataSidebarAbilityPrimaryContent);
		dataSectionMainMetadataSidebarAbilityPrimaryContent.appendChild(dataSectionMainMetadataSidebarAbilityPrimary);
		dataSectionMainMetadataSidebarAbilityPrimary.appendChild(dataSectionMainMetadataSidebarAbilityPrimaryText);

		var dataSectionMainMetadataSidebarAbilitySecondaryContent = document.createElement("span");
		var dataSectionMainMetadataSidebarAbilitySecondary = document.createElement("b");
		dataSectionMainMetadataSidebarAbilitySecondary.setAttribute("type","invert");
		var dataSectionMainMetadataSidebarAbilitySecondaryText = document.createElement("small");
		dataSectionMainMetadataSidebarAbilitySecondary.setAttribute("title","Secondary Ability");
		dataSectionMainMetadataSidebarAbilitySecondary.setAttribute("dataname","value");
		dataSectionMainMetadataSidebarAbilitySecondaryText.innerText = "Secondary Ability";
		dataSectionMainMetadataSidebarAbilityPrimarySecondaryOuter.appendChild(dataSectionMainMetadataSidebarAbilitySecondaryContent);
		dataSectionMainMetadataSidebarAbilitySecondaryContent.appendChild(dataSectionMainMetadataSidebarAbilitySecondary);
		dataSectionMainMetadataSidebarAbilitySecondary.appendChild(dataSectionMainMetadataSidebarAbilitySecondaryText);

		if(Ability.length >= 3) {
			var dataSectionMainMetadataSidebarAbilityHiddenOuter = document.createElement("span");
			var dataSectionMainMetadataSidebarAbilityHiddenContent = document.createElement("span");
			var dataSectionMainMetadataSidebarAbilityHidden = document.createElement("b");
			dataSectionMainMetadataSidebarAbilityHidden.setAttribute("type","invert");
			var dataSectionMainMetadataSidebarAbilityHiddenText = document.createElement("small");
			dataSectionMainMetadataSidebarAbilityHidden.setAttribute("title","Hidden Ability");
			dataSectionMainMetadataSidebarAbilityHidden.setAttribute("dataname","value");
			dataSectionMainMetadataSidebarAbilityHiddenText.innerText = "Hidden Ability";
			dataSectionMainMetadataSidebarAbilityOuter.appendChild(dataSectionMainMetadataSidebarAbilityHiddenOuter);
			dataSectionMainMetadataSidebarAbilityHiddenOuter.appendChild(dataSectionMainMetadataSidebarAbilityHiddenContent);
			dataSectionMainMetadataSidebarAbilityHiddenContent.appendChild(dataSectionMainMetadataSidebarAbilityHidden);
			dataSectionMainMetadataSidebarAbilityHidden.appendChild(dataSectionMainMetadataSidebarAbilityHiddenText);
		}
	}
	dataSectionMainMetadataSidebar.appendChild(dataSectionMainMetadataSidebarRow2);
	dataSectionMainMetadataSidebarRow2.appendChild(dataSectionMainMetadataSidebarCatchRateOuter);
	var EggCycleStep;
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
		var dataSectionMainMetadataSidebarHatchRateOuter = document.createElement("span");
		var dataSectionMainMetadataSidebarHatchRateToggle = document.createElement("b");
		dataSectionMainMetadataSidebarHatchRateToggle.setAttribute("type","invert");
		var dataSectionMainMetadataSidebarHatchRateTitle = document.createElement("h6");
		var dataSectionMainMetadataSidebarHatchRate = document.createElement("h5");
		dataSectionMainMetadataSidebarHatchRateOuter.setAttribute("name","hatchrate");
		dataSectionMainMetadataSidebarHatchRateTitle.innerText = "Hatch Rate";
		dataSectionMainMetadataSidebarHatchRate.setAttribute("dataname","value");
		dataSectionMainMetadataSidebarHatchRate.setAttribute("value","");
		dataSectionMainMetadataSidebarRow2.appendChild(dataSectionMainMetadataSidebarHatchRateOuter);
		dataSectionMainMetadataSidebarHatchRateOuter.appendChild(dataSectionMainMetadataSidebarHatchRateToggle);
		dataSectionMainMetadataSidebarHatchRateToggle.appendChild(dataSectionMainMetadataSidebarHatchRateTitle);
		dataSectionMainMetadataSidebarHatchRateToggle.appendChild(dataSectionMainMetadataSidebarHatchRate);
	}
	if(Gender == true) {
		dataSectionMainMetadataSidebar.appendChild(dataSectionMainMetadataSidebarRow3);
		var dataSectionMainMetadataSidebarGenderRatioOuter = document.createElement("span");
		var dataSectionMainMetadataSidebarGenderRatioTitle = document.createElement("h6");
		var dataSectionMainMetadataSidebarGenderRatioBar = document.createElement("span");
		var dataSectionMainMetadataSidebarGenderRatioToggle = document.createElement("b");
		dataSectionMainMetadataSidebarGenderRatioToggle.setAttribute("type","invert");
		var dataSectionMainMetadataSidebarGenderRatioMale = document.createElement("span");
		var dataSectionMainMetadataSidebarGenderRatioFemale = document.createElement("span");
		var dataSectionMainMetadataSidebarGenderRatioGenderless = document.createElement("span");
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
	}
	if(Egg == true) {
		var dataSectionMainMetadataSidebarEggGroupOuter = document.createElement("span");
		var dataSectionMainMetadataSidebarEggGroupContent = document.createElement("span");
		var dataSectionMainMetadataSidebarEggGroupTitle = document.createElement("h6");
		var dataSectionMainMetadataSidebarEggGroupPrimarySecondaryOuter = document.createElement("span");
		var dataSectionMainMetadataSidebarEggGroupPrimaryOuter = document.createElement("span");
		var dataSectionMainMetadataSidebarEggGroupPrimary = document.createElement("b");
		dataSectionMainMetadataSidebarEggGroupPrimary.setAttribute("type","invert");
		var dataSectionMainMetadataSidebarEggGroupPrimaryText = document.createElement("small");
		var dataSectionMainMetadataSidebarEggGroupSecondaryOuter = document.createElement("span");
		var dataSectionMainMetadataSidebarEggGroupSecondary = document.createElement("b");
		dataSectionMainMetadataSidebarEggGroupSecondary.setAttribute("type","invert");
		var dataSectionMainMetadataSidebarEggGroupSecondaryText = document.createElement("small");
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
	}
	dataSectionMainMetadataSidebar.appendChild(dataSectionMainMetadataSidebarRow4);

      var d = getDefaultInt(i);

      var dataPrevious = document.createElement("aside");
      var dataNext = document.createElement("aside");
	  dataPrevious.setAttribute("name","previous");
	  dataNext.setAttribute("name","next");
      dataDivContent.appendChild(dataPrevious);
      dataDivContent.appendChild(dataNext);

	  if ((parseInt(getIntID(d,"")) - 1) > 0) {
        var dataPreviousNational = document.createElement("b");
		dataPreviousNational.setAttribute("type","invert");
        var dataPreviousNationalImg = document.createElement("img");
        
        dataPreviousNational.setAttribute("name","national");
        dataPreviousNational.setAttribute("value",getIntID("",(parseInt(getIntID(d,"")) - 1)));
        dataPreviousNational.title = "#"+(parseInt(getIntID(d,"")) - 1)+"\n"+finaldataPokémon[getIntID("",(parseInt(getIntID(d,"")) - 1))]["Pokémon"];
        dataPreviousNationalImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getIntID("",(parseInt(getIntID(d,"")) - 1)),"Box")+".png";
        dataPreviousNationalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
        
        dataPrevious.appendChild(dataPreviousNational);
        dataPreviousNational.appendChild(dataPreviousNationalImg);

        dataPreviousNational.addEventListener("click",modalData);
		dataPreviousNational.setAttribute("function","modalData");
	  }

	  if (finaldataPokémon[getIntID("",(parseInt(getIntID(d,""))+1))][JSONPath_Reference] == "true") {
        var dataNextNational = document.createElement("b");
		dataNextNational.setAttribute("type","invert");
        var dataNextNationalImg = document.createElement("img");
        
        dataNextNational.setAttribute("name","national");
        dataNextNational.setAttribute("value",getIntID("",(parseInt(getIntID(d,""))+1)));
        dataNextNational.title = "#"+(parseInt(getIntID(d,""))+1)+"\n"+finaldataPokémon[getIntID("",(parseInt(getIntID(d,""))+1))]["Pokémon"];
        dataNextNationalImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getIntID("",(parseInt(getIntID(d,""))+1)),"Box")+".png";
        dataNextNationalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
        
        dataNext.appendChild(dataNextNational);
        dataNextNational.appendChild(dataNextNationalImg);

        dataNextNational.addEventListener("click",modalData);
		dataNextNational.setAttribute("function","modalData");
	  }
	  

	  for (q = 0; q < JSONPath_Pokédex.length; q++) {
	      var y = q+1;
	      var previousID = getRegionalID("-",getIntID(d,""),JSONPath_Pokédex[q]);
	      var nextID = getRegionalID("+",getIntID(d,""),JSONPath_Pokédex[q]);

	      if (previousID != undefined) {
	          var dataPreviousRegional = document.createElement("b");
			  dataPreviousRegional.setAttribute("type","invert");
	          var dataPreviousRegionalImg = document.createElement("img");
	  
	          dataPreviousRegional.setAttribute("name","regional"+y);
	          dataPreviousRegional.setAttribute("value",getIntID("",previousID));
	          dataPreviousRegional.title = "#"+finaldataPokémonPokédexID[getIntID("",previousID)][JSONPath_Pokédex[q]]+"\n"+finaldataPokémon[getIntID("",previousID)]["Pokémon"];
	          dataPreviousRegionalImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getIntID("",previousID),"Box")+".png";
	          dataPreviousRegionalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
	          
	          dataPrevious.appendChild(dataPreviousRegional);
	          dataPreviousRegional.appendChild(dataPreviousRegionalImg);

              dataPreviousRegional.addEventListener("click",modalData);
			  dataPreviousRegional.setAttribute("function","modalData");
	      }
	      if (nextID != undefined) {
	          var dataNextRegional = document.createElement("b");
			  dataNextRegional.setAttribute("type","invert");
	          var dataNextRegionalImg = document.createElement("img");
	  
	          dataNextRegional.setAttribute("name","regional"+y);
	          dataNextRegional.setAttribute("value",getIntID("",nextID));
	          dataNextRegional.title = "#"+finaldataPokémonPokédexID[getIntID("",nextID)][JSONPath_Pokédex[q]]+"\n"+finaldataPokémon[getIntID("",nextID)]["Pokémon"];
	          dataNextRegionalImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getIntID("",nextID),"Box")+".png";
	          dataNextRegionalImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
	          
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
	dataSectionMainMapOuter.addEventListener("wheel",function(event){var delta = event.deltaY.toString();if(delta.includes("-")){zoom(dataSectionMainMapOuter,"in",false)}else if(!delta.includes("-")){zoom(dataSectionMainMapOuter,"out",true)}});
	dataSectionMainMapOuter.addEventListener("mouseleave", function() {zoom(dataSectionMainMapOuter,"out",undefined)});
	dataSectionMainMapOuter.addEventListener("mouseenter", function() {zoom(dataSectionMainMapOuter,"in",undefined)});
	dataSectionMainMapOuter.addEventListener("mousemove", function() {zoom(dataSectionMainMapOuter,"pan",undefined)});

	dataSectionMainMetadataSidebarOuter.setAttribute("name","sidebar");


	var dataSectionMainMetadataPopup = document.createElement("div");
	var dataSectionMainMetadataPopupOuter = document.createElement("div");
	var dataSectionMainMetadataPopupSpan1 = document.createElement("span");
	var dataSectionMainMetadataPopupSpan1ID = document.createElement("h6");
	var dataSectionMainMetadataPopupSpan1Icon = document.createElement("img");
	var dataSectionMainMetadataPopupSpan2 = document.createElement("span");
	var dataSectionMainMetadataPopupSpan2Title = document.createElement("h4");
	var dataSectionMainMetadataPopupSpan2Description = document.createElement("p");
	var dataSectionMainMetadataPopupTitleExitUp = document.createElement("figure");
	var dataSectionMainMetadataPopupTitleExitUpText = document.createElement("h3");
	var dataSectionMainMetadataPopupTitleExitDown = document.createElement("figure");
	var dataSectionMainMetadataPopupTitleExitDownText = document.createElement("h3");
	var dataSectionMainMetadataPopupListOuter = document.createElement("div");
	var dataSectionMainMetadataPopupList = document.createElement("ul");
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


	var baseev = ["Base Stats","EV Yield"];
	for(var q = 0; q < baseev.length; q++) {
		var dataSectionHeaderStatsEVSelectorInput = document.createElement("input");
		var dataSectionHeaderStatsEVSelectorLabel = document.createElement("label");
		var dataSectionHeaderStatsEVSelectorLabelText = document.createElement("h6");
		dataSectionHeaderStatsEVSelectorInput.setAttribute("type","radio");
		dataSectionHeaderStatsEVSelectorInput.setAttribute("name","data-baseev-"+id);
		dataSectionHeaderStatsEVSelectorInput.setAttribute("id","data-baseev-"+id+"-"+baseev[q].toLowerCase().replace(" ",""));
		dataSectionHeaderStatsEVSelectorInput.setAttribute("alt", baseev[q].toLowerCase().replace(" ",""));
		dataSectionHeaderStatsEVSelectorInput.setAttribute("value", q);
		dataSectionHeaderStatsEVSelectorInput.setAttribute("onclick","var x=this.alt.replace('/','').replace(' ','');var nodes=this.parentElement.parentElement.querySelectorAll(':scope > ul[name]');var node=this.parentElement.parentElement.querySelector(':scope > ul[name='+x+']');for(var i=0;i<nodes.length; i++){nodes[i].style.display='none';};node.style.display='flex';");
		dataSectionHeaderStatsEVSelectorLabel.setAttribute("for","data-baseev-"+id+"-"+baseev[q].toLowerCase().replace(" ",""));
		dataSectionHeaderStatsEVSelectorLabelText.innerText = baseev[q];
		dataSectionHeaderStatsEVSelector.appendChild(dataSectionHeaderStatsEVSelectorInput);
		dataSectionHeaderStatsEVSelector.appendChild(dataSectionHeaderStatsEVSelectorLabel);
		dataSectionHeaderStatsEVSelectorLabel.appendChild(dataSectionHeaderStatsEVSelectorLabelText);
		if(q == 0) {
			dataSectionHeaderStatsEVSelectorInput.setAttribute("checked","");
		}
		var dataSectionHeaderStatsEVUl = document.createElement("ul");
		dataSectionHeaderStatsEVUl.setAttribute("name", baseev[q].toLowerCase().replace(" ",""));
		dataSectionMainMetadataStats.appendChild(dataSectionHeaderStatsEVUl);
		for(var u = 0; u < Stats.length; u++) {
			var dataSectionHeaderStatEV = document.createElement("b");
			dataSectionHeaderStatEV.setAttribute("type","invert");
			var dataSectionHeaderStatEVText = document.createElement("h6");
			var dataSectionHeaderStatEVValue = document.createElement("li");
			var dataSectionHeaderStatsEVSpan = document.createElement("b");
			dataSectionHeaderStatsEVSpan.setAttribute("type","invert");
			var dataSectionHeaderStatsEVSpanText = document.createElement("p");
			dataSectionHeaderStatEV.setAttribute("name", Stats[u].toLowerCase().replace(" ","").replace(".",""));
			dataSectionHeaderStatEVText.innerText = Stats[u];
			dataSectionHeaderStatEVText.setAttribute("dataname","value");
			dataSectionHeaderStatEVValue.setAttribute("name",Stats[u].toLowerCase().replaceAll(".","").replaceAll(" ",""));
			dataSectionHeaderStatsEVSpanText.setAttribute("dataname","value");
			dataSectionHeaderStatsEVSpan.setAttribute("value","");
			dataSectionHeaderStatsEVUl.appendChild(dataSectionHeaderStatEV);
			dataSectionHeaderStatEV.appendChild(dataSectionHeaderStatEVText);
			dataSectionHeaderStatsEVUl.appendChild(dataSectionHeaderStatEVValue);
			dataSectionHeaderStatEVValue.appendChild(dataSectionHeaderStatsEVSpan);
			dataSectionHeaderStatsEVSpan.appendChild(dataSectionHeaderStatsEVSpanText);
		}
	}
	var dataSectionMainLearnsetDiv = document.createElement("div");
	var dataSectionMainLearnset = document.createElement("div");
	dataSectionMain.appendChild(dataSectionMainLearnsetDiv);
	dataSectionMainLearnsetDiv.appendChild(dataSectionMainLearnset);
	var dataSectionMainLearnsetOuter = document.createElement("div");
	var dataSectionMainLearnsetUl = document.createElement("ul");
	var dataSectionMainLearnsetTitle = document.createElement("ol");

	dataSectionMainLearnset.appendChild(dataSectionMainLearnsetOuter);
	dataSectionMainLearnsetOuter.appendChild(dataSectionMainLearnsetTitle);
	dataSectionMainLearnsetOuter.appendChild(dataSectionMainLearnsetUl);



	dataSectionMainMetadata.setAttribute("name","metadata");
	dataSectionMainLearnsetDiv.setAttribute("name","learnset");
	dataSectionMainAreaDiv.setAttribute("name","area");



	var categoriez = ["Source","Move","Type","Category","Power","Accuracy","PP", ];
	for(u = 0; u < categoriez.length; u++) {
		var dataSectionMainLearnsetTitleLi = document.createElement("li");
		var dataSectionMainLearnsetTitleLiText = document.createElement("p");
		dataSectionMainLearnsetTitleLiText.innerText = categoriez[u];
		dataSectionMainLearnsetTitle.appendChild(dataSectionMainLearnsetTitleLi);
		dataSectionMainLearnsetTitleLi.appendChild(dataSectionMainLearnsetTitleLiText);
	}


	dataSectionMain.appendChild(dataSectionMainAreaDiv);
	dataSectionMainAreaDiv.appendChild(dataSectionMainArea);
	if(HeldItem == true) {
		var dataSectionMainMetadataSidebarRow5 = document.createElement("div");
		var dataSectionMainMetadataSidebarHeldItemOuter = document.createElement("span");
		var dataSectionMainMetadataSidebarHeldItemTitle = document.createElement("h6");
		dataSectionMainMetadataSidebarHeldItemOuter.setAttribute("name","helditem");
		dataSectionMainMetadataSidebarHeldItemTitle.innerText = "Held Item";
		dataSectionMainMetadataSidebar.appendChild(dataSectionMainMetadataSidebarRow5);
		dataSectionMainMetadataSidebarRow5.appendChild(dataSectionMainMetadataSidebarHeldItemOuter);
		dataSectionMainMetadataSidebarHeldItemOuter.appendChild(dataSectionMainMetadataSidebarHeldItemTitle);
		var dataSectionMainMetadataSidebarHeldItem = document.createElement("div");
		dataSectionMainMetadataSidebarHeldItemOuter.appendChild(dataSectionMainMetadataSidebarHeldItem);
		for(q = 0; q < JSONPath_HeldItemPercentage.length; q++) {
			var dataSectionMainMetadataSidebarHeldItemIcon = document.createElement("b");
			var dataSectionMainMetadataSidebarHeldItemImg = document.createElement("img");
			var dataSectionMainMetadataSidebarHeldItemText = document.createElement("small");
			dataSectionMainMetadataSidebarHeldItemIcon.setAttribute("name", JSONPath_HeldItemPercentage[q]);
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


	
	if(Ability.length >= 1) {
		dataSectionMainMetadataSidebarAbilityPrimary.addEventListener("click", function() {callPopUp("Ability");});
		dataSectionMainMetadataSidebarAbilitySecondary.addEventListener("click", function() {callPopUp("Ability");});
		if(Ability.length >= 3) {
			dataSectionMainMetadataSidebarAbilityHidden.addEventListener("click", function() {callPopUp("Ability");});
		}
	}
	if(Egg == true) {
		dataSectionMainMetadataSidebarEggGroupPrimary.addEventListener("click", function() {callPopUp("Egg Group");});
		dataSectionMainMetadataSidebarEggGroupSecondary.addEventListener("click", function() {callPopUp("Egg Group");});
	}
	dataSectionMainMetadataSidebarCatchRateOuter.addEventListener("click", function() {callPopUp("Catch Rate");});
	if(Egg == true) {
		dataSectionMainMetadataSidebarHatchRateOuter.addEventListener("click", function() {callPopUp("Hatch Rate");});
	}
    if(Gender == true) {
        dataSectionMainMetadataSidebarGenderRatioToggle.addEventListener("click", function() {callPopUp("Gender Ratio");});
    }
	dataSectionMainMetadataSidebarExpYieldOuter.addEventListener("click", function() {callPopUp("Experience Yield");});
	dataSectionMainMetadataSidebarLevelRateOuter.addEventListener("click", function() {callPopUp("Leveling Rate");});


	
	var helditm = document.querySelectorAll("#data > div[value='"+id+"'] div[name='sidebar'] span[name='helditem'] > div > b");
	for(q = 0; q < helditm.length; q++) {
		helditm[q].addEventListener("click", function() {callPopUp("Held Item");});
	}
	dataSectionMainMetadataPopupTitleExitUp.addEventListener("click", function() {OpenExitPopUp(id, false);});
	dataSectionMainMetadataPopupTitleExitDown.addEventListener("click", function() {OpenExitPopUp(id, true);});

	var baseEV = document.querySelectorAll("#data > div[value='"+id+"'] div[name='sidebar'] > div:first-child > ul > li > b");
	for(q = 0; q < baseEV.length; q++) {
		if(baseEV[q].parentElement.parentElement.getAttribute("name") == "basestats") {
			baseEV[q].addEventListener("click", function() {callPopUp("Base Stats");});
		} else if(baseEV[q].parentElement.parentElement.getAttribute("name") == "evyield") {
			baseEV[q].addEventListener("click", function() {callPopUp("EV Yield");});
		}
	}
	var baseEVTotal = document.querySelectorAll("#data > div[value='"+id+"'] div[name='sidebar'] > div:first-child > ul > b");
	for(q = 0; q < baseEVTotal.length; q++) {
		if(baseEVTotal[q].parentElement.getAttribute("name") == "basestats") {
			baseEVTotal[q].addEventListener("click", function() {callPopUp("Base Stats Total");});
		} else if(baseEVTotal[q].parentElement.getAttribute("name") == "evyield") {
			baseEVTotal[q].addEventListener("click", function() {callPopUp("EV Yield Total");});
		}
	}
};


function loadData() {
	var target = event.currentTarget;
	var i = target.getAttribute("value");
	var id = getIntID(i,"");
    var base = document.querySelector("#data > div[value='"+id+"']");
	var portrait = base.querySelector(":scope section[name='header'] *[name='portrait']");
	var category = base.querySelector(":scope section[name='header'] *[name='category']");
	var debut = base.querySelector(":scope section[name='header'] *[name='debut']");
	var name = base.querySelector(":scope section[name='header'] *[name='idname'] *[name='name']");
	var type = base.querySelector(":scope section[name='header'] *[name='debutcategorytype'] > *:last-child");
	var description = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='description']");
	var basestats = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] ul[name='basestats']");
	var evyield = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] ul[name='evyield']");
	var ability = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='ability']");
	var catchrate = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='catchrate']");
	var hatchrate = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='hatchrate']");
	var genderratio = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='genderratio']");
	var egggroup = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='egggroup']");
	var expyield = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='experienceyield']");
	var levelrate = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='levelingrate']");
	var helditem = base.querySelector(":scope section[name='main'] div[name='metadata'] div[name='sidebar'] span[name='helditem']");
    var area = base.querySelector(":scope section[name='main'] div[name='area'] ul");
    var evolutionbase = base.querySelector(":scope > div");



    if (evolutionbase != undefined) {
        var evos = evolutionbase.querySelectorAll(":scope aside[name='evolution']");
        for(var q = 0; q < evos.length; q++) {
            evos[q].remove();
        }

        var previous = getEvolutionData(i,"Previous");
        var next = getEvolutionData(i,"Next");
        var evoArr = [previous,next];
        var evoArrName = ["previous","next"];

        for(var q = 0; q < evoArr.length; q++) {
            for(var u = 0; u < evoArr[q].length; u++) {
                var int = getPokémonInt(evoArr[q][u]["Pokémon"]);

                var x = u + 1;
                var evo = document.createElement("aside");
                var evoContent = document.createElement("div");
                var evoToggle = document.createElement("figure");
                var evoImg = document.createElement("img");
                var evoMain = document.createElement("div");
                var evoButton = document.createElement("b");
				evoButton.setAttribute("type","invert");
                var evoDescription = document.createElement("span");
				var evoDescriptionText = document.createElement("small");
                var evoID = document.createElement("span");
                var evoNationalID = document.createElement("small");
                var evoName = document.createElement("h6");

                evo.setAttribute("type",evoArrName[q]+"-"+x+"/"+evoArr[q].length);
				evo.setAttribute("name","evolution");
         
                evoButton.setAttribute("value",getPokémonInt(evoArr[q][u]["Pokémon"]));
                evoImg.src = './media/Images/Pokémon/Box/PNG/'+MEDIAPath_Pokémon_Box+'/'+getPokémonMediaPath(int,"Box")+'.png'
                evoImg.title = evoArr[q][u]["Pokémon"];

                evoImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
                if (getPokémonID(evoArr[q][u]["Pokémon"]) == undefined) {
                    evoNationalID.innerText = "#"+getPokémonID(getPokémonName2(getDefaultInt(getPokémonInt(evoArr[q][u]["Pokémon"]))));
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

					var os = finaldataPokémonOffspring[evoArr[q][u]["Integer"]]["Factor_"+JSONPath_Offspring];
					if (os == undefined) {
						os = finaldataPokémonOffspring[getDefaultInt(evoArr[q][u]["Integer"])]["Factor_"+JSONPath_Offspring];;
					}
					if (os == undefined) {
						os = "";
					}

					if (os.includes(",")) {
						var arr = [formatEvoBreedText(evoArr[q][u]["Integer"],"Evolution"),formatEvoBreedText(evoArr[q][u]["Integer"],"Breed")];
						evoDescriptionText.innerHTML = arr.join("<br>");
					}
                    else if (finaldataPokémonEvolutionStage[i]["Pokémon Stage_"+JSONPath_EvolutionStage] == "Third-Stage" || finaldataPokémonEvolutionStage[getDefaultInt(i)]["Pokémon Stage_"+JSONPath_EvolutionStage] == "Third-Stage") {
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

                var eggSpan = evoDescription.querySelectorAll(':scope b[name*="egg"]');
                for(y = 0; y < eggSpan.length; y++) {
                    eggSpan[y].setAttribute("dataname","value")
                    eggSpan[y].addEventListener("click", function() {callPopUp("Egg Group");});
                }

                var pokSpan = evoDescription.querySelectorAll(':scope b[name="pokémon"]');
                for(y = 0; y < pokSpan.length; y++) {
                    pokSpan[y].setAttribute("value",getPokémonInt(pokSpan[y].innerText))
                    pokSpan[y].addEventListener("click", modalData);
					pokSpan[y].setAttribute("function","modalData");
                }

                var itmSpan = evoDescription.querySelectorAll(':scope b[name="item"]');
                for(y = 0; y < itmSpan.length; y++) {
                    itmSpan[y].addEventListener("click", dataRedirect);
					itmSpan[y].setAttribute("function","dataRedirect");
                }


                for(y = 0; y < JSONPath_Pokédex.length; y++) {
                    var z = y+1;
                    var ID = getRegionalID("=",getPokémonID(evoArr[q][u]["Pokémon"]),JSONPath_Pokédex[y]);
                    var evoRegionalID = document.createElement("small");
                    if (ID != undefined) {
                        evoRegionalID.innerText = "#"+ID;
                    }
                    else if (getRegionalID("=",getPokémonID(getPokémonName2(getDefaultInt(getPokémonInt(evoArr[q][u]["Pokémon"])))),JSONPath_Pokédex[y]) != undefined) {
                        evoRegionalID.innerText = "#"+getRegionalID("=",getPokémonID(getPokémonName2(getDefaultInt(getPokémonInt(evoArr[q][u]["Pokémon"])))),JSONPath_Pokédex[y]);
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
        var arealis = area.querySelectorAll(':scope > li');
        for(var t = 0; t < arealis.length; t++) {
            arealis[t].remove();
        }
        for(var q = 0; q < finaldataLocationPokémon.length; q++) { // Default
            if (getApplicable(finaldataLocationPokémon[q]["Game"])) {
                if (getPokémonName(getDefaultInt((getPokémonInt(finaldataLocationPokémon[q]["Pokémon"])))) == finaldataPokémon[getDefaultInt(i)]["Pokémon"]) {
                    var pokLi = document.createElement("li");
                    area.appendChild(pokLi)

					var pokLiInput = document.createElement("input");
					pokLiInput.setAttribute("type","checkbox");
					pokLiInput.setAttribute("id","location-pokémon");
					pokLiInput.setAttribute("name","location-pokémon"+q);
					pokLi.appendChild(pokLiInput);
					pokLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})


                    var pokLocation = document.createElement("span");
					pokLocation.setAttribute("type","invert");
                    pokLocation.setAttribute("name","location");
                    if (finaldataLocationPokémon[q]["Title"] != undefined) {
                        pokLocation.setAttribute("title",finaldataLocationPokémon[q]["Title"]);
                    }
                    pokLi.appendChild(pokLocation);

                    if (finaldataLocationPokémon[q]["Location"] != undefined) {
                        var pokLocationRedir = document.createElement("b");
						var pokLocationRedirText = document.createElement("h6");
                        pokLocationRedirText.innerText = finaldataLocationPokémon[q]["Location"];
                        pokLocationRedir.setAttribute("name","map");
                        pokLocation.appendChild(pokLocationRedir);
						pokLocationRedir.appendChild(pokLocationRedirText);
                        pokLocationRedir.addEventListener("click",dataRedirect)
                        pokLocationRedir.setAttribute("function","dataRedirect");

                        if (finaldataLocationPokémon[q]["Area"] != undefined && finaldataLocationPokémon[q]["Area"] != finaldataLocationPokémon[q]["Location"]) {
                            var pokAreaText = document.createElement("small");
                            pokAreaText.innerText = finaldataLocationPokémon[q]["Area"];
                            pokLocation.appendChild(pokAreaText);
                        }
                    }

                
            

    
                    var pokRate = document.createElement("span");
                    pokRate.setAttribute("name","rate");
                    if (finaldataLocationPokémon[q]["Criteria"] != undefined) {
                        pokRate.setAttribute("title",finaldataLocationPokémon[q]["Criteria"]);
                    }
               
                    pokLi.appendChild(pokRate);

                    if (finaldataLocationPokémon[q]["Rate"] != undefined) {
                        var pokRateText = document.createElement("h6");
                        pokRateText.innerHTML = finaldataLocationPokémon[q]["Rate"].replaceAll(",","\n").replaceAll("mo:0%,","").replaceAll("mo:0%","").replaceAll("da:0%,","").replaceAll("da:0%","").replaceAll("ni:0%,","").replaceAll("ni:0%","").replaceAll("mo:",'<img src="./media/Images/Misc/FinalDex/Morning.png" title="Morning">').replaceAll("da:",'<img src="./media/Images/Misc/FinalDex/Day.png" title="Day">').replaceAll("ni:",'<img src="./media/Images/Misc/FinalDex/Night.png" title="Night">').replaceAll("sp:0%,",'').replaceAll("sp:0%",'').replaceAll("su:0%,",'').replaceAll("su:0%",'').replaceAll("au:0%,",'').replaceAll("au:0%",'').replaceAll("wi:0%,",'').replaceAll("wi:0%",'').replaceAll("sp:",'<pre name="spring">Spring</pre>').replaceAll("au:",'<pre name="autumn">Autumn</pre>').replaceAll("su:",'<pre name="summer">Summer</pre>').replaceAll("wi:",'<pre name="winter">Winter</pre>').replaceAll("mon:",'<pre name="monday">Monday</pre>').replaceAll("tue:",'<pre name="tuesday">Tuesday</pre>').replaceAll("wed:",'<pre name="wednesday">Wednesday</pre>').replaceAll("thu:",'<pre name="thursday">Thursday</pre>').replaceAll("fri:",'<pre name="friday">Friday</pre>').replaceAll("sat:",'<pre name="saturday">Saturday</pre>').replaceAll("sun:",'<pre name="sunday">Sunday</pre>');
                        pokRate.appendChild(pokRateText);
                    }

                    var pokEncounter = document.createElement("span");
                    pokEncounter.setAttribute("name","encounter");
                    pokLi.appendChild(pokEncounter);


                    var encounters = [];
                    var enctitle = [];

                    if (finaldataLocationPokémon[q]["Tile"] != undefined) {
                        encounters.push(finaldataLocationPokémon[q]["Tile"]);
                        enctitle.push("Tile");
                    }
                    if (finaldataLocationPokémon[q]["Encounter"] != undefined) {
                        encounters.push(finaldataLocationPokémon[q]["Encounter"]);
                        enctitle.push("Encounter");
                    }
                    


                        var pokEncounterInner = document.createElement("span");
                        pokEncounter.appendChild(pokEncounterInner);
                        
                        var pokEncounterText = document.createElement("span");
                        pokEncounter.appendChild(pokEncounterText);






				

                        var encounterTxtArr = [];
                        for(var u = 0; u < encounters.length; u++) {


                            var pokEncounterImage = document.createElement("img");
                            pokEncounterImage.setAttribute("onerror","this.remove();")

                            
                            if(encounters[u] == "Surfing") {
                                pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+"Surfing_M"+".png";
                            }
                            else {
                                pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+encounters[u]+".png";
                            }

                        
							if (enctitle[u] != "Tile" || enctitle.length == 1) {
                                encounterTxtArr.push(encounters[u])
                            }
    
                            pokEncounterInner.appendChild(pokEncounterImage);
                
                        }


						if (finaldataLocationPokémon[q]["Encounter"] != undefined && finaldataLocationPokémon[q]["Tile"] != undefined) {
							pokEncounterText.innerHTML = "<small>"+finaldataLocationPokémon[q]["Encounter"]+" on "+finaldataLocationPokémon[q]["Tile"]+"</small>";
						}
						else if (finaldataLocationPokémon[q]["Encounter"] != undefined && finaldataLocationPokémon[q]["Tile"] == undefined) {
							pokEncounterText.innerHTML = "<small>"+finaldataLocationPokémon[q]["Encounter"]+"</small>";
						}
						else if (finaldataLocationPokémon[q]["Encounter"] == undefined && finaldataLocationPokémon[q]["Tile"] != undefined) {
							pokEncounterText.innerHTML = "<small>"+finaldataLocationPokémon[q]["Tile"]+"</small>";
						}


						
						if (finaldataLocationPokémon[q]["Encounter"] == "Headbutt" || finaldataLocationPokémon[q]["Encounter"] == "Rock Smash") {
							pokEncounterText.innerHTML = pokEncounterText.innerHTML.replaceAll("Headbutt","Headbutt</small><small>").replaceAll("Rock Smash","Rock Smash</small><small>");
							pokEncounterText.firstElementChild.setAttribute("name","move");
							pokEncounterText.firstElementChild.setAttribute("value",finaldataLocationPokémon[q]["Encounter"]);
							pokEncounterText.firstElementChild.setAttribute("onclick","dataRedirect()");
							pokEncounterText.firstElementChild.setAttribute("function","dataRedirect");
						}
						else if (encounterTxtArr[t] == "Surfing") {
							pokEncounterText.innerHTML = pokEncounterText.innerHTML.replaceAll("Surfing","Surfing</small><small>");
							pokEncounterText.firstElementChild.setAttribute("name","move");
							pokEncounterText.firstElementChild.setAttribute("value","Surf");
							pokEncounterText.firstElementChild.setAttribute("onclick","dataRedirect()");
							pokEncounterText.firstElementChild.setAttribute("function","dataRedirect");
						}
			
                        if (finaldataLocationPokémon[q]["Mechanic"] != undefined) {
                            var pokMechanicText = document.createElement("h3");
                            pokMechanicText.innerText = finaldataLocationPokémon[q]["Mechanic"];
                            pokEncounter.appendChild(pokMechanicText);
                        }

                        var pokPok = document.createElement("span");
                        var pokPokLvl = document.createElement("small");
                        var pokPokImg = document.createElement("img");
            
                        pokPok.setAttribute("name","pokémon");
                        pokPokLvl.innerText = "Lv. "+finaldataLocationPokémon[q]["Level"];
                        pokPokImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLocationPokémon[q]["Pokémon"]),"Box")+".png";
						pokPokImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
	
				
						pokPokImg.setAttribute("title",finaldataLocationPokémon[q]["Pokémon"]);
                

                        if(finaldataLocationPokémon[q]["Note"] != undefined) {
                            pokEncounter.setAttribute("title",finaldataLocationPokémon[q]["Note"])
                        }
                        pokLi.appendChild(pokPok);
                        pokPok.appendChild(pokPokLvl);
                        pokPok.appendChild(pokPokImg);
                    
                }
            }
        }
        for(var q = 0; q < finaldataLocationPokémon.length; q++) { // Allies
            if (getApplicable(finaldataLocationPokémon[q]["Game"])) {
                if (Allies) {

                    var ally = finaldataLocationPokémon[q]["Allies"];
                    var allies = [ally];
                    if (ally != undefined) {
                        ally = ally.replaceAll(/\,[\S\s]*?\:/g,",");
                        if(ally.includes(",")) {
                            allies = ally.split(",");
                        }
                    }
                    

                    for(var y = 0; y < allies.length; y++) {
                        if (allies[y] != undefined) {
                            if (allies[y] == finaldataPokémon[getDefaultInt(i)]["Pokémon"] && getPokémonName(getDefaultInt((getPokémonInt(finaldataLocationPokémon[q]["Pokémon"])))) != finaldataPokémon[getDefaultInt(i)]["Pokémon"] || allies[y] == finaldataPokémon[i]["Form"] && getPokémonName(getDefaultInt((getPokémonInt(finaldataLocationPokémon[q]["Pokémon"])))) != finaldataPokémon[getDefaultInt(i)]["Pokémon"]) {

                                var pokLi = document.createElement("li");
                                area.appendChild(pokLi)

                        
								var pokLiInput = document.createElement("input");
								pokLiInput.setAttribute("type","checkbox");
								pokLiInput.setAttribute("id","location-pokémon");
								pokLiInput.setAttribute("name","location-pokémon"+q);
								pokLi.appendChild(pokLiInput);
								pokLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})


								var pokLocation = document.createElement("span");
								pokLocation.setAttribute("type","invert");
								pokLocation.setAttribute("name","location");
								if (finaldataLocationPokémon[q]["Title"] != undefined) {
									pokLocation.setAttribute("title",finaldataLocationPokémon[q]["Title"]);
								}
								pokLi.appendChild(pokLocation);
			
								if (finaldataLocationPokémon[q]["Location"] != undefined) {
									var pokLocationRedir = document.createElement("b");
									var pokLocationRedirText = document.createElement("h6");
									pokLocationRedirText.innerText = finaldataLocationPokémon[q]["Location"];
									pokLocationRedir.setAttribute("name","map");
									pokLocation.appendChild(pokLocationRedir);
									pokLocationRedir.appendChild(pokLocationRedirText);
									pokLocationRedir.addEventListener("click",dataRedirect)
									pokLocationRedir.setAttribute("function","dataRedirect");
			
									if (finaldataLocationPokémon[q]["Area"] != undefined && finaldataLocationPokémon[q]["Area"] != finaldataLocationPokémon[q]["Location"]) {
										var pokAreaText = document.createElement("small");
										pokAreaText.innerText = finaldataLocationPokémon[q]["Area"];
										pokLocation.appendChild(pokAreaText);
									}
								}
			

                            
                        

                
                                var pokRate = document.createElement("span");
                                pokRate.setAttribute("name","rate");
                                if (finaldataLocationPokémon[q]["Criteria"] != undefined) {
                                    pokRate.setAttribute("title",finaldataLocationPokémon[q]["Criteria"]);
                                }            
                                pokLi.appendChild(pokRate);

                                if (finaldataLocationPokémon[q]["Rate"] != undefined) {
                                    var pokRateText = document.createElement("h6");
                                    pokRateText.innerHTML = finaldataLocationPokémon[q]["Rate"].replaceAll(",","\n").replaceAll("mo:0%,","").replaceAll("mo:0%","").replaceAll("da:0%,","").replaceAll("da:0%","").replaceAll("ni:0%,","").replaceAll("ni:0%","").replaceAll("mo:",'<img src="./media/Images/Misc/FinalDex/Morning.png" title="Morning">').replaceAll("da:",'<img src="./media/Images/Misc/FinalDex/Day.png" title="Day">').replaceAll("ni:",'<img src="./media/Images/Misc/FinalDex/Night.png" title="Night">').replaceAll("sp:0%,",'').replaceAll("sp:0%",'').replaceAll("su:0%,",'').replaceAll("su:0%",'').replaceAll("au:0%,",'').replaceAll("au:0%",'').replaceAll("wi:0%,",'').replaceAll("wi:0%",'').replaceAll("sp:",'<pre name="spring">Spring</pre>').replaceAll("au:",'<pre name="autumn">Autumn</pre>').replaceAll("su:",'<pre name="summer">Summer</pre>').replaceAll("wi:",'<pre name="winter">Winter</pre>').replaceAll("extremelyharshsunlight:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Extremely Harsh Sunlight.png" title="Extremely Harsh Sunlight">').replaceAll("hail:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Hail.png" title="Hail">').replaceAll("harshsunlight:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Harsh Sunlight.png" title="Harsh Sunlight">').replaceAll("heavyrain:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Heavy Rain.png" title="Heavy Rain">').replaceAll("rain:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Rain.png" title="Rain">').replaceAll("sandstorm:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Sandstorm.png" title="Sandstorm">').replaceAll("strongwinds:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Strong Winds.png" title="Strong Winds">').replaceAll("fog:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Fog.png" title="Fog">').replaceAll("cloudy:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Cloudy.png" title="Cloudy">').replaceAll("clear:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Clear.png" title="Clear">').replaceAll("blizzard:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Blizzard.png" title="Blizzard">').replaceAll("snow:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Snow.png" title="Snow">').replaceAll("thunderstorm:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"Thunderstorm/.png" title="Thunderstorm">');
                                    pokRate.appendChild(pokRateText);
                                }

                                var pokEncounter = document.createElement("span");
                                pokEncounter.setAttribute("name","encounter");
                                pokLi.appendChild(pokEncounter);


                                var encounters = [];
                                var enctitle = [];

                                if (finaldataLocationPokémon[q]["Tile"] != undefined) {
                                    encounters.push(finaldataLocationPokémon[q]["Tile"]);
                                    enctitle.push("Tile");
                                }
                                if (finaldataLocationPokémon[q]["Encounter"] != undefined) {
                                    encounters.push(finaldataLocationPokémon[q]["Encounter"]);
                                    enctitle.push("Encounter");
                                }
                                

            
                                    var pokEncounterInner = document.createElement("span");
                                    pokEncounter.appendChild(pokEncounterInner);
                                    
                                    var pokEncounterText = document.createElement("span");
                                    pokEncounter.appendChild(pokEncounterText);

                                    var encounterTxtArr = [];
                                    for(var u = 0; u < encounters.length; u++) {


                                        var pokEncounterImage = document.createElement("img");
                                        pokEncounterImage.title = encounters[u];
                                        pokEncounterImage.setAttribute("onerror","this.remove();")

                                        
                                        if(encounters[u] == "Surfing") {
                                            pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+"Surfing_M"+".png";
                                        }
                                        else {
                                            pokEncounterImage.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+encounters[u]+".png";
                                        }

                                    
                                        if (enctitle[u] != "Tile" || enctitle.length == 1) {
                                            encounterTxtArr.push(encounters[u])
                                        }
                
                                        pokEncounterInner.appendChild(pokEncounterImage);
                            
                                    }

									if (finaldataLocationPokémon[q]["Encounter"] != undefined && finaldataLocationPokémon[q]["Tile"] != undefined) {
										pokEncounterText.innerHTML = "<small>"+finaldataLocationPokémon[q]["Encounter"]+" on "+finaldataLocationPokémon[q]["Tile"]+"</small>";
									}
									else if (finaldataLocationPokémon[q]["Encounter"] != undefined && finaldataLocationPokémon[q]["Tile"] == undefined) {
										pokEncounterText.innerHTML = "<small>"+finaldataLocationPokémon[q]["Encounter"]+"</small>";
									}
									else if (finaldataLocationPokémon[q]["Encounter"] == undefined && finaldataLocationPokémon[q]["Tile"] != undefined) {
										pokEncounterText.innerHTML = "<small>"+finaldataLocationPokémon[q]["Tile"]+"</small>";
									}

									if (finaldataLocationPokémon[q]["Encounter"] == "Headbutt" || finaldataLocationPokémon[q]["Encounter"] == "Rock Smash") {
										pokEncounterText.innerHTML = pokEncounterText.innerHTML.replaceAll("Headbutt","Headbutt</small><small>").replaceAll("Rock Smash","Rock Smash</small><small>");
										pokEncounterText.firstElementChild.setAttribute("name","move");
										pokEncounterText.firstElementChild.setAttribute("value",finaldataLocationPokémon[q]["Encounter"]);
										pokEncounterText.firstElementChild.setAttribute("onclick","dataRedirect()");
										pokEncounterText.firstElementChild.setAttribute("function","dataRedirect");
									}
									else if (encounterTxtArr[t] == "Surfing") {
										pokEncounterText.innerHTML = pokEncounterText.innerHTML.replaceAll("Surfing","Surfing</small><small>");
										pokEncounterText.firstElementChild.setAttribute("name","move");
										pokEncounterText.firstElementChild.setAttribute("value","Surf");
										pokEncounterText.firstElementChild.setAttribute("onclick","dataRedirect()");
										pokEncounterText.firstElementChild.setAttribute("function","dataRedirect");
									}

                                    if (finaldataLocationPokémon[q]["Mechanic"] != undefined) {
                                        var pokMechanicText = document.createElement("h3");
                                        pokMechanicText.innerText = finaldataLocationPokémon[q]["Mechanic"];
                                        pokEncounter.appendChild(pokMechanicText);
                                    }
                                    /*
                                    var pokAllies = document.createElement("span");
                                    var pokAllyHeader = document.createElement("h4");
                                    pokAllies.setAttribute("name","allies");
                                    pokAllyHeader.innerText = "Allies";
                                    pokLi.appendChild(pokAllies);
                                    pokAllies.appendChild(pokAllyHeader);

                                    if (finaldataLocationPokémon[q]["Allies"] != undefined) {
                                        var ally = finaldataLocationPokémon[q]["Allies"].replaceAll("extremelyharshsunlight:",'').replaceAll("hail:",'').replaceAll("harshsunlight:",'').replaceAll("heavyrain:",'').replaceAll("rain:",'').replaceAll("sandstorm:",'').replaceAll("strongwinds:",'').replaceAll("fog:",'').replaceAll("cloudy:",'').replaceAll("clear:",'').replaceAll("blizzard:",'').replaceAll("snow:",'').replaceAll("thunderstorm:",'');
                                        var allies = [];
                                        if (ally.includes(",")) {
                                            allies = ally.split(",")
                                        }
                                        else {
                                            allies = [ally];
                                        }

                                        for(var r = 0; r < allies.length; r++) {
                                            var allyIMG = document.createElement("img");
                                            allyIMG.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(allies[r]),"Box")+".png";
                                            allyIMG.title = allies[r];
                                            pokAllies.appendChild(allyIMG);
                                        }
                                    
                                    }
                                    */

                        
                                    var pokPok = document.createElement("span");
                                    var pokPokIsAlly = document.createElement("h6");
                                    var pokPokLvl = document.createElement("small");
                                    var pokPokImg = document.createElement("img");
                        
                                    pokPok.setAttribute("name","pokémon");
                                    pokPokIsAlly.innerText = "Ally to "+finaldataLocationPokémon[q]["Pokémon"];
                                    pokPokLvl.innerText = "Lv. "+finaldataLocationPokémon[q]["Level"];
                                    pokPokImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLocationPokémon[q]["Pokémon"]),"Box")+".png";
                                    pokPokImg.setAttribute("value",getPokémonInt(finaldataLocationPokémon[q]["Pokémon"]));
									pokPokImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
				

                                    if(finaldataLocationPokémon[q]["Note"] != undefined) {
                                        pokEncounter.setAttribute("title",finaldataLocationPokémon[q]["Note"])
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

		for(var q = 0; q < finaldataLocationPokémonShops.length; q++) { // Shop
            if (getApplicable(finaldataLocationPokémonShops[q]["Game"])) {
                if (getPokémonName(getDefaultInt((getPokémonInt(finaldataLocationPokémonShops[q]["Pokémon"])))) == finaldataPokémon[getDefaultInt(i)]["Pokémon"]) {
                    var pokLi = document.createElement("li");
                    area.appendChild(pokLi)

					var pokLiInput = document.createElement("input");
					pokLiInput.setAttribute("type","checkbox");
					pokLiInput.setAttribute("id","location-pokémon-shop");
					pokLiInput.setAttribute("name","location-pokémon-shop"+q);
					pokLi.appendChild(pokLiInput);
					pokLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})

                    var pokLocation = document.createElement("span");
					pokLocation.setAttribute("type","invert");
                    pokLocation.setAttribute("name","location");
                    if (finaldataLocationPokémonShops[q]["Title"] != undefined) {
                        pokLocation.setAttribute("title",finaldataLocationPokémonShops[q]["Title"]);
                    }
                    pokLi.appendChild(pokLocation);
					

                    if (finaldataLocationPokémonShops[q]["Location"] != undefined) {
                        var pokLocationRedir = document.createElement("b");
						var pokLocationRedirText = document.createElement("h6");
                        pokLocationRedirText.innerText = finaldataLocationPokémonShops[q]["Location"];
                        pokLocationRedir.setAttribute("name","map");
                        pokLocation.appendChild(pokLocationRedir);
						pokLocationRedir.appendChild(pokLocationRedirText);
                        pokLocationRedir.addEventListener("click",dataRedirect)
                        pokLocationRedir.setAttribute("function","dataRedirect");

                        if (finaldataLocationPokémonShops[q]["Area"] != undefined && finaldataLocationPokémonShops[q]["Area"] != finaldataLocationPokémonShops[q]["Location"]) {
                            var pokAreaText = document.createElement("small");
                            pokAreaText.innerText = finaldataLocationPokémonShops[q]["Area"];
                            pokLocation.appendChild(pokAreaText);
                        }
                    }

                
            

    
                    var pokDescription = document.createElement("span");
                    pokDescription.setAttribute("name","description");
                    if (finaldataLocationPokémonShops[q]["Criteria"] != undefined) {
                        pokRate.setAttribute("title",finaldataLocationPokémonShops[q]["Criteria"]);
                    }
               
                    pokLi.appendChild(pokDescription);



          
					var pokDescriptionText = document.createElement("h6");
					pokDescription.appendChild(pokDescriptionText);

					var currency = [finaldataLocationPokémonShops[q]["Currency"]];
					var cost = finaldataLocationPokémonShops[q]["Cost"];
					var quantity = finaldataLocationPokémonShops[q]["Quantity"];

					if (quantity == undefined) {
						quantity = 1;
					}

					if (cost == undefined) {
						cost = quantity+"x";
					}

					if (currency[0].includes(",")) {
						currency = currency[0].split(",");
					}

					for(var r = 0; r < currency.length; r++) {
						if (getItemIcon(currency[r]) != undefined) {
							currency[r] = '<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/'+getItemIcon(currency[r])+'.png" onerror="this.style.display=´none´"; onclick="dataRedirect()" name="item" title="'+getItemIcon(currency[r])+'"/>';
						}
						else {
							if (currency[r] == "Pokémon Dollar") {
								currency[r] = "<span title='"+currency[r]+"'>"+currency[r].replaceAll("Pokémon Dollar",'<img src="./media/Images/Misc/Currency/VIII/Pokémon Dollar.png" title="Pokémon Dollar" />')+"</span>";
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
						if (finaldataLocationPokémonShops[q]["Shop"] != undefined) {
							pokDescriptionText.innerHTML = "Purchased from the "+finaldataLocationPokémonShops[q]["Shop"]+" for "+finaldataLocationPokémonShops[q]["Cost"];
						}
						else {
							pokDescriptionText.innerHTML = "Purchased for "+cost+currency.join(", ").replaceAll(">, ",">");
						}
					}


   
					var pokPok = document.createElement("span");
					var pokPokLvl = document.createElement("small");
					var pokPokImg = document.createElement("img");
		
					pokPok.setAttribute("name","pokémon");
					pokPokLvl.innerText = "Lv. "+finaldataLocationPokémonShops[q]["Level"];
					pokPokImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(finaldataLocationPokémonShops[q]["Pokémon"]),"Box")+".png";
					pokPokImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
			
					pokPokImg.setAttribute("title",finaldataLocationPokémonShops[q]["Pokémon"]);
			

					if(finaldataLocationPokémonShops[q]["Note"] != undefined) {
						pokEncounter.setAttribute("title",finaldataLocationPokémonShops[q]["Note"])
					}
					pokLi.appendChild(pokPok);
					pokPok.appendChild(pokPokLvl);
					pokPok.appendChild(pokPokImg);
                    
                }
            }
        }
    }


    var loc = area.querySelectorAll(":scope li span[name='location'] > *[function]");
    var locs = [];

    for(var r = 0; r < loc.length; r++) {
        locs.push(loc[r].innerText)
    }
    
    locs = [...new Set(locs)];

	description.innerHTML = "";
	category.innerText = '"'+returnData(i,"Category","")[0]+' Pokémon"';
	if(returnData(i,"Pokédex Entry","")[0] != undefined) {
		description.innerHTML += "<p name='entry'>"+returnData(i,"Pokédex Entry","")[0]+"</p>";
	}

	var os = finaldataPokémonOffspring[i]["Offspring_"+JSONPath_Offspring];
	if (os != undefined) {
		if (getEvolutionFamily(i).length == 1 && finaldataPokémonOffspring[i]["Offspring_"+JSONPath_Offspring].includes(",") || getEvolutionFamily(i).length == 1 && finaldataPokémonOffspring[getDefaultInt(i)]["Offspring_"+JSONPath_Offspring].includes(",")) {
			var bd = finaldataPokémonOffspring[i]["Offspring_"+JSONPath_Offspring];
			if (bd == undefined) {
				bd = finaldataPokémonOffspring[getDefaultInt(i)]["Offspring_"+JSONPath_Offspring];
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
	var baseev = ["Base Stats","EV Yield"];
	var sts = [];
	for(var y = 0; y < baseev.length; y++) {
		for(var q = 0; q < Stats.length; q++) {
			if(y == 0) {
				var arr = finaldataPokémonBaseStats;
				var json = JSONPath_BaseStats;
				var taq = basestats;
			} else if(y == 1) {
				var arr = finaldataPokémonEVYield;
				var json = JSONPath_EVYield;
				var taq = evyield;
			}

			var temp = Stats[q].toLowerCase().replace(" ","").replace(".","");
			for(var u = 0; u < finaldataPokémon.length; u++) {
				if(finaldataPokémon[u][JSONPath_Reference] == "true") {
					if(arr[u][Stats[q]+"_"+json] != undefined && arr[u][Stats[q]+"_"+json] != "") {
						sts.push(parseInt(arr[u][Stats[q]+"_"+json]));
					}
				}
			}
			var target = taq.querySelector(':scope li[name='+temp+']').querySelector(':scope *[dataname="value"]');
			target.innerHTML = returnData(i, baseev[y]+" "+Stats[q],"")[0]+"&nbsp;&nbsp;";
			target.setAttribute("value", returnData(i, baseev[y]+" "+Stats[q],"")[0]);
			target.parentElement.style.width = returnData(i, baseev[y]+" "+Stats[q],"")[0] / Math.max.apply(Math, sts) * 100+"%";

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
	if(getPokémonMediaPath(i,"Battle") != undefined) {
		portrait.querySelector(":scope img").src = "./media/Images/Pokémon/Art/PNG/Default/Front/HOME/"+getPokémonMediaPath(i,"Battle")+".png";
	}
	if(returnData(i,"Catch Rate","") != undefined) {
		var catchRateFormula;
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
        for(var q = 0; q < JSONPath_HeldItemPercentage.length; q++) {
            if(returnData(i,"Held Item","")[q] != undefined) {
                helditem.querySelector(':scope > div b[name="'+JSONPath_HeldItemPercentage[q]+'"]').setAttribute("value", returnData(i,"Held Item","")[q]);
                helditem.querySelector(':scope > div b[name="'+JSONPath_HeldItemPercentage[q]+'"] img').src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(returnData(i,"Held Item","")[q])+".png";
                helditem.querySelector(':scope > div b[name="'+JSONPath_HeldItemPercentage[q]+'"]').setAttribute("title",JSONPath_HeldItemPercentage[q]+"\n"+returnData(i,"Held Item","")[q]);
                helditem.querySelector(':scope > div b[name="'+JSONPath_HeldItemPercentage[q]+'"] img').style.display = "unset";
                helditem.querySelector(':scope > div b[name="'+JSONPath_HeldItemPercentage[q]+'"] > *:last-child').innerText = returnData(i,"Held Item","")[q];
            } else {
                helditem.querySelector(':scope > div b[name="'+JSONPath_HeldItemPercentage[q]+'"] img').style.display = "none";
            }
        }
        var heldcheck;
        for(var q = 0; q < returnData(i,"Held Item","").length; q++) {
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
	if(returnData(i,"Type","")[0] != undefined) {
		
		type.querySelector(":scope > span:first-child > * > *:last-child").style.display = "none";
		type.querySelector(":scope > span:first-child").classList.add("active");
		type.querySelector(":scope > span:first-child img").style.display = "inline";
		type.querySelector(":scope > span:first-child > * > *:last-child").innerText = returnData(i,"Type","")[0];
		type.querySelector(":scope > span:first-child img").setAttribute("src","./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+returnData(i,"Type","")[0]+".png");
        type.querySelector(":scope > span:first-child img").setAttribute("value", returnData(i,"Type","")[0]);
	} else {
		type.querySelector(":scope > span:first-child").classList.remove("active");
		type.querySelector(":scope > span:first-child img").style.display = "none";
	}
	if(returnData(i,"Type","")[1] != undefined) {
		type.querySelector(":scope > span:last-child > * > *:last-child").style.display = "none";
		type.querySelector(":scope > span:last-child").classList.add("active");
		type.querySelector(":scope > span:last-child img").style.display = "inline";
		type.querySelector(":scope > span:last-child > * > *:last-child").innerText = returnData(i,"Type","")[1];
		type.querySelector(":scope > span:last-child img").setAttribute("src","./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+returnData(i,"Type","")[1]+".png");
        type.querySelector(":scope > span:last-child img").setAttribute("value", returnData(i,"Type","")[1]);
	} else {
		type.querySelector(":scope > span:last-child").classList.remove("active");
		type.querySelector(":scope > span:last-child img").style.display = "none";
	}
	if(returnData(i,"Type","")[0] != undefined && returnData(i,"Type","")[1] != undefined) {
		type.setAttribute("name","2");
	} else {
		type.removeAttribute("name");
	}
	var dataSectionMainLearnsetUl = document.querySelector("#data > div[value='"+id+"'] > div section[name='main'] > div[name='learnset'] ul");
	var dataSectionMainLearnsetHeader = document.querySelectorAll("#data > div[value='"+id+"'] > div section[name='main'] > div[name='learnset'] ol li > p");
	var dataSectionMainLearnsetList = document.querySelectorAll("#data > div[value='"+id+"'] > div section[name='main'] > div[name='learnset'] ul li");
	for(u = 0; u < dataSectionMainLearnsetList.length; u++) {
		dataSectionMainLearnsetList[u].remove();
	}

    var learnsetArr = returnMoveSet(this.value,"");
    
	for (u = 0; u < learnsetArr.length; u++) {
        var dataSectionMainLearnsetLi = document.createElement("li");
        dataSectionMainLearnsetUl.appendChild(dataSectionMainLearnsetLi);

        for(y = 0; y < dataSectionMainLearnsetHeader.length; y++) {
	
		
			
			
            if(y == 0) {

                if (learnsetArr[u]["Type"] == "Prior Evolution") {
			

					var dataSectionMainLearnsetLiTextOuter = document.createElement("span");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					var dataSectionMainLearnsetLiText = document.createElement("small");
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);
                    
                    dataSectionMainLearnsetLiText.innerText = "Prior Evolution";
                    

                    if(learnsetArr[u]["Evolution"].includes(",")) {
                        for (p = 0; p < learnsetArr[u]["Evolution"].split(",").length; p++) {
                            var dataSectionMainLearnsetLiImg = document.createElement("img");
                            dataSectionMainLearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/'+MEDIAPath_Pokémon_Box+'/'+getPokémonMediaPath(getPokémonInt(learnsetArr[u]["Evolution"].split(",")[p]),"Box")+'.png');
                            dataSectionMainLearnsetLiImg.setAttribute("title", learnsetArr[u]["Evolution"].split(",")[p]);
                            dataSectionMainLearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Evolution"].split(",")[p]));
                            dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiImg);
                            dataSectionMainLearnsetLiImg.addEventListener("click", modalData);
							dataSectionMainLearnsetLiImg.setAttribute("function","modalData");
                        }
                    } else {
                        var dataSectionMainLearnsetLiImg = document.createElement("img");
                        dataSectionMainLearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/'+MEDIAPath_Pokémon_Box+'/'+getPokémonMediaPath(getPokémonInt(learnsetArr[u]["Evolution"]),"Box")+'.png');
                        dataSectionMainLearnsetLiImg.setAttribute("title", learnsetArr[u]["Evolution"]);
                        dataSectionMainLearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Evolution"]));
                        dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiImg);
                        dataSectionMainLearnsetLiImg.addEventListener("click", modalData);
						dataSectionMainLearnsetLiImg.setAttribute("function","modalData");
                    }
                }

                if (learnsetArr[u]["Type"] == "Level Up") {
					var dataSectionMainLearnsetLiTextOuter = document.createElement("span");
					var dataSectionMainLearnsetLiText = document.createElement("h6");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);
				
                    dataSectionMainLearnsetLiText.innerText = learnsetArr[u]["Factor"];
                    if (learnsetArr[u]["Factor"] == "Evolution") {
                        dataSectionMainLearnsetLiText.title = "via Evolution Trigger";
                    }
                }
                else if (learnsetArr[u]["Type"] == "Machine") {
					var dataSectionMainLearnsetLiTextOuter = document.createElement("span");
					var dataSectionMainLearnsetLiText = document.createElement("h6");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                    dataSectionMainLearnsetLiText.innerText = learnsetArr[u]["Machine"];
                }
                else if (learnsetArr[u]["Type"] == "Breeding") {
					var dataSectionMainLearnsetLiTextOuter = document.createElement("span");
					var dataSectionMainLearnsetLiText = document.createElement("small");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                    dataSectionMainLearnsetLiText.innerText = "via Breeding";
                    

                    if(learnsetArr[u]["Parent"].includes(",")) {
                        for (p = 0; p < learnsetArr[u]["Parent"].split(",").length; p++) {
                            var dataSectionMainLearnsetLiImg = document.createElement("img");
                            dataSectionMainLearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/'+MEDIAPath_Pokémon_Box+'/'+getPokémonMediaPath(getPokémonInt(learnsetArr[u]["Parent"].split(",")[p]),"Box")+'.png');
                            dataSectionMainLearnsetLiImg.setAttribute("title", "with "+learnsetArr[u]["Parent"].split(",")[p]);
                            dataSectionMainLearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Parent"].split(",")[p]));
                            dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiImg);
                            dataSectionMainLearnsetLiImg.addEventListener("click", modalData);
							dataSectionMainLearnsetLiImg.setAttribute("function","modalData");
                        }
                    } else {
                        var dataSectionMainLearnsetLiImg = document.createElement("img");
                        dataSectionMainLearnsetLiImg.setAttribute("src", './Media/images/Pokémon/Box/PNG/'+MEDIAPath_Pokémon_Box+'/'+getPokémonMediaPath(getPokémonInt(learnsetArr[u]["Parent"]),"Box")+'.png');
                        dataSectionMainLearnsetLiImg.setAttribute("title", "with "+learnsetArr[u]["Parent"]);
                        dataSectionMainLearnsetLiImg.setAttribute("value",getPokémonInt(learnsetArr[u]["Parent"]));
                        dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiImg);
                        dataSectionMainLearnsetLiImg.addEventListener("click", modalData);
						dataSectionMainLearnsetLiImg.setAttribute("function","modalData");
                    }
                }
				dataSectionMainLearnsetLiText.title = "via "+learnsetArr[u]["Type"];
            }
            if(y == 1) {
				
                if(learnsetArr[u]["Move"] == undefined) {
					var dataSectionMainLearnsetLiTextOuter = document.createElement("span");
					var dataSectionMainLearnsetLiText = document.createElement("h6");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                    dataSectionMainLearnsetLiText.innerHTML = "–";
                } else {
					var dataSectionMainLearnsetLiTextOuter = document.createElement("b");
					var dataSectionMainLearnsetLiText = document.createElement("h6");
					dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
					dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);
					
					dataSectionMainLearnsetLiTextOuter.setAttribute("type","underline");
                    dataSectionMainLearnsetLiText.innerText = learnsetArr[u]["Move"];
                    dataSectionMainLearnsetLiText.setAttribute("name","move");
                    dataSectionMainLearnsetLiText.addEventListener("click", dataRedirect);
					dataSectionMainLearnsetLiText.setAttribute("function","dataRedirect");
                }
                dataSectionMainLearnsetLiText.title = "Move";

            }
            if(y == 2) {
				var dataSectionMainLearnsetLiTextOuter = document.createElement("span");
				var dataSectionMainLearnsetLiText = document.createElement("h6");
				dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
				dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                dataSectionMainLearnsetLiText.title = "Type";
                if(getMoveData(learnsetArr[u]["Move"],"Type") == undefined) {
                    dataSectionMainLearnsetLiText.innerHTML = "–";
                } else {
                    dataSectionMainLearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"],"Type");
                }
                dataSectionMainLearnsetLiTextOuter.setAttribute("name", dataSectionMainLearnsetLiText.innerText);
            }
            if(y == 3) {
				var dataSectionMainLearnsetLiTextOuter = document.createElement("span");
				var dataSectionMainLearnsetLiText = document.createElement("h6");
				dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
				dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                dataSectionMainLearnsetLiText.title = "Category";
                if(getMoveData(learnsetArr[u]["Move"],"Category") == undefined) {
                    dataSectionMainLearnsetLiText.innerHTML = "–";
                } else {
                    dataSectionMainLearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"],"Category");
                }
                dataSectionMainLearnsetLiTextOuter.setAttribute("name", dataSectionMainLearnsetLiText.innerText);
            }
            if(y == 4) {
				var dataSectionMainLearnsetLiTextOuter = document.createElement("span");
				var dataSectionMainLearnsetLiText = document.createElement("h6");
				dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
				dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                dataSectionMainLearnsetLiText.title = "Power";
                if(getMoveData(learnsetArr[u]["Move"],"Power") == undefined) {
                    dataSectionMainLearnsetLiText.innerHTML = "–";
                } else {
                    dataSectionMainLearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"],"Power");
                }
            }
            if(y == 5) {
				var dataSectionMainLearnsetLiTextOuter = document.createElement("span");
				var dataSectionMainLearnsetLiText = document.createElement("h6");
				dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
				dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                dataSectionMainLearnsetLiText.title = "Accuracy";
                if(getMoveData(learnsetArr[u]["Move"],"Accuracy") == undefined) {
                    dataSectionMainLearnsetLiText.innerHTML = "–";
                } else {
                    dataSectionMainLearnsetLiText.innerText = getMoveData(learnsetArr[u]["Move"],"Accuracy");
                }
            }
            if(y == 6) {
				var dataSectionMainLearnsetLiTextOuter = document.createElement("span");
				var dataSectionMainLearnsetLiText = document.createElement("h6");
				dataSectionMainLearnsetLi.appendChild(dataSectionMainLearnsetLiTextOuter);
				dataSectionMainLearnsetLiTextOuter.appendChild(dataSectionMainLearnsetLiText);

                dataSectionMainLearnsetLiText.title = "PP";
                if(getMoveData(learnsetArr[u]["Move"],"PP Min") == undefined) {
                    dataSectionMainLearnsetLiText.innerHTML = "–";
                } else {
                    dataSectionMainLearnsetLiText.innerHTML = getMoveData(learnsetArr[u]["Move"],"PP Min")+" <span>(max. "+getMoveData(learnsetArr[u]["Move"],"PP Max")+")</span>";
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

var navChecker = [0];

function showMetadataLearnsetArea() {
	
	var int = this.getAttribute("name").replaceAll("data-navigation","");
	var divs = document.querySelectorAll("#data > div[value='"+int+"'] section[name='main'] > div[name]");
	var location = document.querySelectorAll("#data > div[value='"+int+"'] section[name='main'] > div[name='area'] ul li > *[name='location'] > *:first-child");
	var mapOuter = document.querySelector("#data > div[value='"+int+"'] section[name='main'] > div[name='area'] > div > div");
	var locations = [];
	var img = mapOuter.querySelector(":scope img");

	for(var i = 0; i < location.length; i++) {
		locations.push(location[i].innerText)
	}

	for(var i = 0; i < divs.length; i++) {
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

	var MetadataButton = document.querySelector("#data > div[value='"+id+"'] nav input[value='0']");
	var LearnsetButton = document.querySelector("#data > div[value='"+id+"'] nav input[value='1']");
	var AreaButton = document.querySelector("#data > div[value='"+id+"'] nav input[value='2']");
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
	var int;
	var id;
	var def;

	tar = this;
	if (tar.tagName == undefined) {
		tar = event.target;
	}
	int = tar.getAttribute("value");
	def = true;

	for(var i = 0; i < finaldataPokémon.length; i++) {
		if(int != undefined) {
			if(i == int) {
				id = finaldataPokémon[i]["ID"];
				if(!finaldataPokémon[i]["Variant"].includes("Default")) {
					def = false;
				}
			}
		}
	}
	var activeWindow = document.querySelector("#data > div.open");
	if(activeWindow != null) {
		activeWindow.classList.remove("open");
	}
	if(id != undefined) {
		var windowCount;
		var maxWindowCount;
		var currentWindow;
		var formSpec;
		var formFirst;
		maxWindowCount = 10;
		windowCount = document.querySelectorAll("#data > div");
		currentWindow = document.querySelector("#data"+id);
		if (windowCount.length >= maxWindowCount) {
			for (var u = 0; u < windowCount.length; u++) {
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

}


function callPopUp(type) {
	var x;
	var arr;
	var type;

	var base = findUpEl(event.target,"class","open");
	x = base.getAttribute("value");
	var popup = base.querySelector(":scope section[name='main'] > div[name='metadata'] > div[name='popup']")
	var ul = popup.querySelector(":scope ul");
	var lis = popup.querySelectorAll(":scope li");
	var idpath = popup.querySelector(":scope span > h6");
	var iconpath = popup.querySelector(":scope span > img");
	var titlepath = popup.querySelector(":scope span > h4");
	var descriptionpath = popup.querySelector(":scope span > p");


    if (popup.classList.length == 0) {
        popup.classList.add("close");
    }
	if(!popup.getAttribute("class").includes("open") && !popup.getAttribute("class").includes("close")) {
		popup.classList.add("close");
	}
	var id;
	var icon;
	var title;
	var description;
	var additional;
	var style;
	var formula;
	var abbreviation;
	var alteration;
	var target = event.currentTarget;
	var enhancetarget;

	if (type == "Gender Ratio") {
		var arr = finaldataPokémonGenderRatio;
	}
	if (type == "Hatch Rate") {
		var arr = finaldataPokémonHatchRate;
	}
	if (type == "Catch Rate") {
		var arr = finaldataPokémonCatchRate;
	}
	if (type == "Base Stats") {
		var arr = finaldataPokémonBaseStats;
	}
	if (type == "Base Stats Total") {
		var arr = finaldataPokémonBaseStats;
	}
	if (type == "EV Yield") {
		var arr = finaldataPokémonEVYield;
	}
	if (type == "EV Yield Total") {
		var arr = finaldataPokémonEVYield;
	}
	if (type == "Experience Yield") {
		var arr = finaldataPokémonExperienceYield;
	}
	if (type == "Leveling Rate") {
		var arr = finaldataPokémonLevelingRate;
	}
	if (type == "Egg Group") {
		var arr = finaldataPokémonEggGroup;
	}
	if (type == "Type") {
		var arr = finaldataPokémonType;
	}
	if (type == "Ability") {
		var arr = finaldataPokémonAbility;
	}
	if (type == "Held Item") {
		var arr = finaldataPokémonHeldItem;
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
		id = getDataArr(finaldataAbility,"Ability",title)[0]["ID"];
		description = getDataArr(finaldataAbilityDescription,"Ability",title)[0]["Description"];
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
		icon = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(target.getAttribute("value"))+".png";
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
		var jsonpath = JSONPath_Ability;
		if(Generation <= 4) {
			var json = ["Primary","Secondary"];
		} else {
			var json = ["Primary","Secondary","Hidden"];
		}
		json = json.map(i => i+"_"+jsonpath);
	} else if(type == "Egg Group") {
		var jsonpath = JSONPath_EggGroup;
		var json = ["Primary","Secondary"];
		json = json.map(i => i+"_"+jsonpath);
	} else if(type == "Catch Rate") {
		var json = [JSONPath_CatchRate,"Percentage"];
	} else if(type == "Hatch Rate") {
		var json = ["Egg Cycle_"+JSONPath_HatchRateEggCycle,"Steps_"+JSONPath_HatchRateSteps];
	} else if(type == "Experience Yield") {
		var json = [JSONPath_ExperienceYield,"Category"];
	} else if(type == "Leveling Rate") {
		var json = [JSONPath_LevelingRate];
	} else if(type == "Type") {
		var jsonpath = JSONPath_Type;
		var json = ["Primary","Secondary"];
		json = json.map(i => i+"_"+jsonpath);
	} else if(type == "Gender Ratio") {
		var jsonpath = JSONPath_GenderRatio;
		var json = ["Male","Female"];
		json = json.map(i => i+"_"+jsonpath);
	} else if(type == "Base Stats" || type == "Base Stats Total") {
		if(Generation <= 1) {
			var jsonpath = JSONPath_BaseStats;
			var json = ["HP","Attack","Defense","Special","Speed","Total"];
			json = json.map(i => i+"_"+jsonpath);
		} else {
			var jsonpath = JSONPath_BaseStats;
			var json = ["HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Total"];
			json = json.map(i => i+"_"+jsonpath);
		}
	} else if(type == "EV Yield" || type == "EV Yield Total") {
		if(Generation <= 1) {
			var jsonpath = JSONPath_EVYield;
			var json = ["HP","Attack","Defense","Special","Speed","Total"];
			json = json.map(i => i+"_"+jsonpath);
		} else {
			var jsonpath = JSONPath_EVYield;
			var json = ["HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Total"];
			json = json.map(i => i+"_"+jsonpath);
		}
	} else if(type == "Held Item") {
		var jsonpath = JSONPath_HeldItem;
		var json = JSONPath_HeldItemPercentage;
		json = json.map(i => i+"_"+jsonpath);
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

    
	var result = [];
	if(style == "Single") {
		for(q = 0; q < json.length; q++) {
			for(u = 0; u < arr.length; u++) {
				if(arr[u][json[q]] == title) {
					if(finaldataPokémon[u][JSONPath_Reference] == "true") {
						var obj = new Object();
						obj["Integer"] = u;
						for(var y = 0; y < json.length; y++) {
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
					if(finaldataPokémon[u][JSONPath_Reference] == "true") {
						var obj = new Object();
						obj["Integer"] = u;
						for(var y = 0; y < json.length; y++) {
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
					if(finaldataPokémon[u][JSONPath_Reference] == "true") {
						var obj = new Object();
						obj["Integer"] = u;
						for(var y = 0; y < json.length; y++) {
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
		for(var q = 0; q < json.length; q++) {
			for(var u = 0; u < arr.length; u++) {
				var condition;
				var abbreviation2;
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
					if(finaldataPokémon[u][JSONPath_Reference] == "true") {
						var obj = new Object();
						obj["Integer"] = u;
						obj["Category"] = abbreviation2;
						for(var y = 0; y < json.length; y++) {
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
		for(var q = 0; q < json.length; q++) {
			for(var u = 0; u < arr.length; u++) {
				var alteration2;
				var abbreviation2;
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
					if(finaldataPokémon[u][JSONPath_Reference] == "true") {
						var obj = new Object();
						obj["Integer"] = u;
						obj["Alteration"] = alteration2;
						obj["Abbreviation"] = abbreviation2;
						for(var y = 0; y < json.length; y++) {
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
            var int = result[u]["Integer"];
            var name = getPokémonName(int);

			var li = document.createElement("li");
			var span = document.createElement("span");
			if(type == "Ability") {
				if(Generation <= 4) {
					li.setAttribute("name","2");
				} else {
					li.setAttribute("name","3");
				}
			}
			var img = document.createElement("img");
            img.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(int,"Box")+".png";
            img.title = name;
            img.setAttribute("value",int);
			img.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");

			if(getIntID(int,"") == x) {
				li.classList.add("select");
			}

			img.addEventListener("click", modalData);
            img.setAttribute("function","modalData");
			ul.appendChild(li);
			li.appendChild(span);
			span.appendChild(img);
			if(type == "Gender Ratio") {
				var p = document.createElement("p");
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
					var p = document.createElement("p");
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
						var img2 = document.createElement("img");
						var text = document.createElement("p");
						if(result[u][json[q]] != undefined) {
							img2.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+result[u][json[q]]+".png";
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
            var int = result[u]["Integer"];
            var name = getPokémonName(int);

			var li = document.createElement("li");
			var span = document.createElement("span");
			var img = document.createElement("img");
	
            img.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(int,"Box")+".png";
            img.title = name;
            img.setAttribute("value",int);
			
			if(type == "Held Item") {
				li.setAttribute("name", json.length);
			}
			img.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
			if(getIntID(int,"") == x) {
				img.classList.add("select");
			}
			img.addEventListener("click", modalData);
            img.setAttribute("function","modalData");
			ul.appendChild(li);
			li.appendChild(span);
			span.appendChild(img);
			for(q = 0; q < json.length; q++) {
				var p = document.createElement("p");
				var span2 = document.createElement("span");
				var pimg = document.createElement("img");
				if(result[u][json[q]] != undefined) {
					pimg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(result[u][json[q]])+".png";
					pimg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
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
	var select = ul.querySelector(":scope > li.select");
	if (select != undefined) {
		select.scrollIntoView();
	}
}


