var createTool = function() {
	var toolOuter = document.createElement("div");
	var toolSectionList = document.createElement("section");
	var toolSectionListOptionsTitleOuter = document.createElement("div");
	var toolSectionListOptionsTitle = document.createElement("h3");
	var toolSectionListOptionsOuter = document.createElement("div");
	var toolSectionListOptions = document.createElement("ol");
	var toolSectionHeader = document.createElement("section");
	var toolSectionHeaderTitle = document.createElement("span");
	var toolSectionHeaderTitleText = document.createElement("h3");
	var toolSectionContent = document.createElement("section");
	var toolSectionContentTimersOuter = document.createElement("div");
	var toolSectionContentTimerSelectorOuter = document.createElement("div");
	toolOuter.setAttribute("id","tool")
	toolOuter.setAttribute("value","tools");
	toolSectionListOptionsTitle.innerText = "Tools";
	toolSectionListOptionsOuter.classList.add("scroll");
	toolSectionHeaderTitleText.innerText = "Tools";

	toolSectionContentTimersOuter.setAttribute("name","timer");
	toolSectionContentTimersOuter.setAttribute("value",0);

	document.querySelector("#contain").appendChild(toolOuter);
	toolOuter.appendChild(toolSectionList);
	toolSectionList.appendChild(toolSectionListOptionsTitleOuter);
	toolSectionListOptionsTitleOuter.appendChild(toolSectionListOptionsTitle);
	toolSectionList.appendChild(toolSectionListOptionsOuter);
	toolSectionListOptionsOuter.appendChild(toolSectionListOptions);
	toolOuter.appendChild(toolSectionHeader);
	toolSectionHeader.appendChild(toolSectionHeaderTitle);
	toolSectionHeaderTitle.appendChild(toolSectionHeaderTitleText);
	toolOuter.appendChild(toolSectionContent);
	toolSectionContent.appendChild(toolSectionContentTimersOuter);
	toolSectionContentTimersOuter.appendChild(toolSectionContentTimerSelectorOuter);

	toolSectionList.setAttribute("name","list");
	toolSectionHeader.setAttribute("name","header");
	toolSectionContent.setAttribute("name","content");


	var toolSectionHeaderGame = document.createElement("span");
	var toolSectionHeaderGameImage = document.createElement("img");
	toolSectionHeaderGameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",","").replaceAll("!","").replaceAll("'","").replaceAll(":","") + ".png";
	toolSectionHeaderGameImage.setAttribute("onerror","this.display='none'");
	toolSectionHeader.appendChild(toolSectionHeaderGame);
	toolSectionHeaderGame.appendChild(toolSectionHeaderGameImage);


	
	function createTimer() {
		var stopwatchcountdown = ["stopwatch","countdown"];
		for(var q = 0; q < stopwatchcountdown.length; q++) {
			var toolSectionContentTimerOuter = document.createElement("div");
			var toolSectionContentTimer = document.createElement("div");
			var toolSectionContentTimerPlay = document.createElement("b");
			var toolSectionContentTimerPlayText = document.createElement("h1");
			var toolSectionContentTimerPause = document.createElement("b");
			var toolSectionContentTimerPauseText = document.createElement("h1");
			var toolSectionContentTimerTime = document.createElement("data");
			var toolSectionContentTimerTimeText = document.createElement("h2");
			var toolSectionContentTimerSet = document.createElement("div");
			var toolSectionContentTimerSetSpan = document.createElement("span");
			var toolSectionContentTimerSetInputHours = document.createElement("input");
			var toolSectionContentTimerSetInputMinutes = document.createElement("input");
			var toolSectionContentTimerSetInputSeconds = document.createElement("input");
			var toolSectionContentTimerSetInputMilliseconds = document.createElement("input");
			var toolSectionContentTimerList = document.createElement("ul");
			var toolSectionContentTimerLaps = document.createElement("figure");
			var toolSectionContentTimerReset = document.createElement("figure");
			toolSectionContentTimerOuter.setAttribute("name",stopwatchcountdown[q]);
			toolSectionContentTimerOuter.setAttribute("state","stop");
			toolSectionContentTimerPlay.setAttribute("title","Play");
			toolSectionContentTimerPause.setAttribute("title","Pause");
			toolSectionContentTimerPlayText.innerText = "⏵";
			toolSectionContentTimerPauseText.innerText = "⏸︎";

			toolSectionContentTimerReset.setAttribute("name","reset");
			toolSectionContentTimerLaps.setAttribute("name","lap");
			toolSectionContentTimerSet.setAttribute("name","set");
			toolSectionContentTimerTime.setAttribute("name","time");

			toolSectionContentTimerSetInputHours.setAttribute("type","number");
			toolSectionContentTimerSetInputHours.setAttribute("min","0");
			toolSectionContentTimerSetInputHours.setAttribute("max","9999");
			toolSectionContentTimerSetInputHours.setAttribute("autocomplete","off");
			toolSectionContentTimerSetInputHours.setAttribute("placeholder","00");
			toolSectionContentTimerSetInputHours.setAttribute("title","Hours");
			toolSectionContentTimerSetInputMinutes.setAttribute("type","number");
			toolSectionContentTimerSetInputMinutes.setAttribute("min","0");
			toolSectionContentTimerSetInputMinutes.setAttribute("max","59");
			toolSectionContentTimerSetInputMinutes.setAttribute("autocomplete","off");
			toolSectionContentTimerSetInputMinutes.setAttribute("placeholder","00");
			toolSectionContentTimerSetInputMinutes.setAttribute("title","Minutes");
			toolSectionContentTimerSetInputSeconds.setAttribute("type","number");
			toolSectionContentTimerSetInputSeconds.setAttribute("min","0");
			toolSectionContentTimerSetInputSeconds.setAttribute("max","59");
			toolSectionContentTimerSetInputSeconds.setAttribute("autocomplete","off");
			toolSectionContentTimerSetInputSeconds.setAttribute("placeholder","00");
			toolSectionContentTimerSetInputSeconds.setAttribute("title","Seconds");
			toolSectionContentTimerSetInputMilliseconds.setAttribute("type","number");
			toolSectionContentTimerSetInputMilliseconds.setAttribute("min","0");
			toolSectionContentTimerSetInputMilliseconds.setAttribute("max","99");
			toolSectionContentTimerSetInputMilliseconds.setAttribute("autocomplete","off");
			toolSectionContentTimerSetInputMilliseconds.setAttribute("placeholder","00");
			toolSectionContentTimerSetInputMilliseconds.setAttribute("title","Milliseconds");
			toolSectionContentTimerLaps.setAttribute("title","Laps");
			toolSectionContentTimerLaps.innerHTML = "<h2>\u23F7</h2>";
			toolSectionContentTimerReset.setAttribute("title","Reset");
			toolSectionContentTimerReset.innerHTML = "<h2>\u23F9</h2>";
			toolSectionContentTimersOuter.appendChild(toolSectionContentTimerOuter);
			toolSectionContentTimerOuter.appendChild(toolSectionContentTimer);
			toolSectionContentTimer.appendChild(toolSectionContentTimerPlay);
			toolSectionContentTimerPlay.appendChild(toolSectionContentTimerPlayText);
			toolSectionContentTimer.appendChild(toolSectionContentTimerPause);
			toolSectionContentTimerPause.appendChild(toolSectionContentTimerPauseText);
			toolSectionContentTimer.appendChild(toolSectionContentTimerSet);
			toolSectionContentTimerSet.appendChild(toolSectionContentTimerReset);
			toolSectionContentTimerSet.appendChild(toolSectionContentTimerTime);
			toolSectionContentTimerTime.appendChild(toolSectionContentTimerTimeText);
			toolSectionContentTimerSet.appendChild(toolSectionContentTimerSetSpan);
			toolSectionContentTimerSetSpan.appendChild(toolSectionContentTimerSetInputHours);
			toolSectionContentTimerSetSpan.innerHTML += "<p>:</p>";
			toolSectionContentTimerSetSpan.appendChild(toolSectionContentTimerSetInputMinutes);
			toolSectionContentTimerSetSpan.innerHTML += "<p>:</p>";
			toolSectionContentTimerSetSpan.appendChild(toolSectionContentTimerSetInputSeconds);
			toolSectionContentTimerSetSpan.innerHTML += "<p>:</p>";
			toolSectionContentTimerSetSpan.appendChild(toolSectionContentTimerSetInputMilliseconds);
			toolSectionContentTimerOuter.appendChild(toolSectionContentTimerList);

			toolSectionContentTimerSet.appendChild(toolSectionContentTimerLaps);
		}
		for(var q = 0; q < stopwatchcountdown.length; q++) {
			var x = q + 1;

			var toolSectionContentTimerSelectorInput = document.createElement("input");
			var toolSectionContentTimerSelectorLabel = document.createElement("label");
			var toolSectionContentTimerSelectorLabelText = document.createElement("h5");
			toolSectionContentTimerSelectorInput.setAttribute("type","radio");
			toolSectionContentTimerSelectorInput.setAttribute("id","timerselector" + x);
			toolSectionContentTimerSelectorInput.setAttribute("name","timerselector");
			toolSectionContentTimerSelectorInput.setAttribute("autocomplete","off");
			toolSectionContentTimerSelectorLabel.setAttribute("for","timerselector" + x);
			toolSectionContentTimerSelectorLabelText.innerText = titleCase(stopwatchcountdown[q]);
			toolSectionContentTimerSelectorOuter.appendChild(toolSectionContentTimerSelectorInput);
			toolSectionContentTimerSelectorOuter.appendChild(toolSectionContentTimerSelectorLabel);
			toolSectionContentTimerSelectorLabel.appendChild(toolSectionContentTimerSelectorLabelText);
			if(q == 0) {
				toolSectionContentTimerSelectorLabel.click();
			}
			toolSectionContentTimerSelectorInput.addEventListener("click", timerSelector);
		}
	}

	function createRNG() {
		var toolSectionContentRNGOuter = document.createElement("div");
		var toolSectionContentRNG = document.createElement("div");
		var toolSectionContentRNGOptions = document.createElement("div");
		var toolSectionContentRNGOptionsTop = document.createElement("div");
		var toolSectionContentRNGOptionsIterations = document.createElement("span");
		var toolSectionContentRNGOptionsIterationsText = document.createElement("p");
		var toolSectionContentRNGOptionsIterationsInput = document.createElement("input");
		var toolSectionContentRNGOptionsTitle = document.createElement("span");
		var toolSectionContentRNGOptionsTitleIterations = document.createElement("span");
		var toolSectionContentRNGOptionsTitleIterationsText = document.createElement("p");
		var toolSectionContentRNGOptionsTitleMin = document.createElement("span");
		var toolSectionContentRNGOptionsTitleMinText = document.createElement("p");
		var toolSectionContentRNGOptionsTitleMax = document.createElement("span");
		var toolSectionContentRNGOptionsTitleMaxText = document.createElement("p");
		var toolSectionContentRNGOptionsUl = document.createElement("ul");
		var toolSectionContentRNGOptionsExecute = document.createElement("span");
		var toolSectionContentRNGOptionsExecuteButton = document.createElement("button");
		var toolSectionContentRNGResult = document.createElement("div");

		toolSectionContentRNGOuter.setAttribute("name","rng");
		toolSectionContentRNGOuter.setAttribute("value","1");

		toolSectionContentRNGResult.setAttribute("name","result");
		toolSectionContentRNGResult.classList.add("scroll");
		toolSectionContentRNGOptions.setAttribute("name","options");
		toolSectionContentRNGOptionsIterations.setAttribute("name","iterations");
		toolSectionContentRNGOptionsIterationsText.innerText = "Iterations";
		toolSectionContentRNGOptionsIterationsInput.setAttribute("type","number");
		toolSectionContentRNGOptionsIterationsInput.setAttribute("min","1");
		toolSectionContentRNGOptionsIterationsInput.setAttribute("max","1000");
		toolSectionContentRNGOptionsIterationsInput.setAttribute("value","1");
		toolSectionContentRNGOptionsIterationsInput.setAttribute("autocomplete","off");
		toolSectionContentRNGOptionsTitle.setAttribute("name","title");
		toolSectionContentRNGOptionsTitleIterationsText.innerText = "#";
		toolSectionContentRNGOptionsTitleMinText.innerText = "Min";
		toolSectionContentRNGOptionsTitleMaxText.innerText = "Max";
		toolSectionContentRNGOptionsUl.classList.add("scroll");
		toolSectionContentRNGOptionsExecute.setAttribute("name","execute");
		toolSectionContentRNGOptionsExecuteButton.innerText = "Generate Random Numbers";
		toolSectionContent.appendChild(toolSectionContentRNGOuter);
		toolSectionContentRNGOuter.appendChild(toolSectionContentRNG);
		toolSectionContentRNG.appendChild(toolSectionContentRNGResult);
		toolSectionContentRNG.appendChild(toolSectionContentRNGOptions);
		toolSectionContentRNGOptions.appendChild(toolSectionContentRNGOptionsTop);
		toolSectionContentRNGOptionsTop.appendChild(toolSectionContentRNGOptionsExecute);
		toolSectionContentRNGOptionsExecute.appendChild(toolSectionContentRNGOptionsExecuteButton);
		toolSectionContentRNGOptionsTop.appendChild(toolSectionContentRNGOptionsIterations);
		toolSectionContentRNGOptionsIterations.appendChild(toolSectionContentRNGOptionsIterationsText);
		toolSectionContentRNGOptionsIterations.appendChild(toolSectionContentRNGOptionsIterationsInput);
		toolSectionContentRNGOptionsTop.appendChild(toolSectionContentRNGOptionsTitle);
		toolSectionContentRNGOptionsTitle.appendChild(toolSectionContentRNGOptionsTitleIterations);
		toolSectionContentRNGOptionsTitleIterations.appendChild(toolSectionContentRNGOptionsTitleIterationsText);
		toolSectionContentRNGOptionsTitle.appendChild(toolSectionContentRNGOptionsTitleMin);
		toolSectionContentRNGOptionsTitleMin.appendChild(toolSectionContentRNGOptionsTitleMinText);
		toolSectionContentRNGOptionsTitle.appendChild(toolSectionContentRNGOptionsTitleMax);
		toolSectionContentRNGOptionsTitleMax.appendChild(toolSectionContentRNGOptionsTitleMaxText);
		toolSectionContentRNGOptions.appendChild(toolSectionContentRNGOptionsUl);
	}
	function createType() {


		var typeOuter = document.createElement("div");
		var typeTitle = document.createElement("div");

		var typeContent = document.createElement("div");
		
		var typeSidebar = document.createElement("div");
		var typeSidebarDescription = document.createElement("div");
		var typeSidebarDescriptionSelector = document.createElement("div");
		var typeSidebarDescriptionTitleOuter = document.createElement("div");
		var typeSidebarDescriptionTitleTitle = document.createElement("span");
		var typeSidebarDescriptionTitleTitleText = document.createElement("h4");
		var typeSidebarDescriptionTitleImageOuter = document.createElement("span");
		var typeSidebarDescriptionTitleImage = document.createElement("img");
		var typeSidebarDescriptionAgainstOpposed = document.createElement("div");
		var typeSidebarDescriptionAgainst = document.createElement("div");
		var typeSidebarDescriptionAgainstEffective = document.createElement("span");
		var typeSidebarDescriptionAgainstEffectiveTitle = document.createElement("h4");
		var typeSidebarDescriptionAgainstEffectiveContain = document.createElement("span");
		var typeSidebarDescriptionAgainstIneffective = document.createElement("span");
		var typeSidebarDescriptionAgainstIneffectiveTitle = document.createElement("h4");
		var typeSidebarDescriptionAgainstIneffectiveContain = document.createElement("span");
		var typeSidebarDescriptionAgainstImmune = document.createElement("span");
		var typeSidebarDescriptionAgainstImmuneTitle = document.createElement("h4");
		var typeSidebarDescriptionAgainstImmuneContain = document.createElement("span");
		var typeSidebarDescriptionAgainstDefault = document.createElement("span");
		var typeSidebarDescriptionAgainstDefaultTitle = document.createElement("h4");
		var typeSidebarDescriptionAgainstDefaultContain = document.createElement("span");
		var typeSidebarDescriptionOpposed = document.createElement("div");
		var typeSidebarDescriptionOpposedEffective = document.createElement("span");
		var typeSidebarDescriptionOpposedEffectiveTitle = document.createElement("h4");
		var typeSidebarDescriptionOpposedEffectiveContain = document.createElement("span");
		var typeSidebarDescriptionOpposedIneffective = document.createElement("span");
		var typeSidebarDescriptionOpposedIneffectiveTitle = document.createElement("h4");
		var typeSidebarDescriptionOpposedIneffectiveContain = document.createElement("span");
		var typeSidebarDescriptionOpposedImmune = document.createElement("span");
		var typeSidebarDescriptionOpposedImmuneTitle = document.createElement("h4");
		var typeSidebarDescriptionOpposedImmuneContain = document.createElement("span");
		var typeSidebarDescriptionOpposedDefault = document.createElement("span");
		var typeSidebarDescriptionOpposedDefaultTitle = document.createElement("h4");
		var typeSidebarDescriptionOpposedDefaultContain = document.createElement("span");


		typeTitle.setAttribute("name","header");

		typeSidebarDescriptionTitleOuter.setAttribute("name","title");
		typeSidebarDescriptionAgainstOpposed.setAttribute("name","description");

		typeContent.setAttribute("name","content");
		typeContent.classList.add("scroll");

		
		
		typeSidebar.setAttribute("name","sidebar");


		typeOuter.setAttribute("name","type");

		typeOuter.setAttribute("value","2");

		typeSidebarDescriptionTitleImage.setAttribute("onerror","this.style.display='none';");
		typeSidebarDescriptionTitleImage.setAttribute("alt", MEDIAPath_Type_Icon);

		typeSidebarDescriptionAgainst.setAttribute("name","against");
		typeSidebarDescriptionAgainst.classList.add("scroll");

		typeSidebarDescriptionAgainstEffective.setAttribute("name","effective");
		typeSidebarDescriptionAgainstIneffective.setAttribute("name","ineffective");
		typeSidebarDescriptionAgainstImmune.setAttribute("name","immune");
		typeSidebarDescriptionAgainstDefault.setAttribute("name","default");

		typeSidebarDescriptionOpposedEffective.setAttribute("name","effective");
		typeSidebarDescriptionOpposedIneffective.setAttribute("name","ineffective");
		typeSidebarDescriptionOpposedImmune.setAttribute("name","immune");
		typeSidebarDescriptionOpposedDefault.setAttribute("name","default");

		typeSidebarDescriptionAgainstEffectiveTitle.setAttribute("title","Super Effective when used by a Move with with following types:");
		typeSidebarDescriptionAgainstEffectiveTitle.innerText = "Super Effective";

		typeSidebarDescriptionAgainstIneffectiveTitle.setAttribute("title","Not Very Effective when used by a Move with with following types:");
		typeSidebarDescriptionAgainstIneffectiveTitle.innerText = "Not Very Effective";

		typeSidebarDescriptionAgainstImmuneTitle.setAttribute("title","No Effect when used by a Move with following types:");
		typeSidebarDescriptionAgainstImmuneTitle.innerText = "No Effect";

		typeSidebarDescriptionAgainstDefaultTitle.setAttribute("title","Normal Effectiveness when used by a Move with following types:");
		typeSidebarDescriptionAgainstDefaultTitle.innerText = "Normal Effectiveness";

		typeSidebarDescriptionOpposed.setAttribute("name","opposed");

		typeSidebarDescriptionOpposed.classList.add("scroll");

		typeSidebarDescriptionOpposedEffectiveTitle.setAttribute("title","Super Effective when used against an opposing Pokémon with following types:");
		typeSidebarDescriptionOpposedEffectiveTitle.innerText = "Super Effective";

		typeSidebarDescriptionOpposedEffectiveContain.value = MEDIAPath_Type_Text;

		typeSidebarDescriptionOpposedIneffectiveTitle.setAttribute("title","Not Very Effective when used against an opposing Pokémon with following types:");
		typeSidebarDescriptionOpposedIneffectiveTitle.innerText = "Not Very Effective";

		typeSidebarDescriptionOpposedIneffectiveContain.value = MEDIAPath_Type_Text;

		typeSidebarDescriptionOpposedImmuneTitle.setAttribute("title","No Effect when used against an opposing Pokémon with following types:");
		typeSidebarDescriptionOpposedImmuneTitle.innerText = "No Effect";

		typeSidebarDescriptionOpposedImmuneContain.value = MEDIAPath_Type_Text;

		typeSidebarDescriptionOpposedDefaultTitle.setAttribute("title","Normal Effectiveness when used against an opposing Pokémon with following types:");
		typeSidebarDescriptionOpposedDefaultTitle.innerText = "Normal Effectiveness";

		typeSidebarDescriptionOpposedDefaultContain.value = MEDIAPath_Type_Text;

		toolSectionContent.appendChild(typeOuter);

		typeOuter.appendChild(typeTitle);

		typeOuter.appendChild(typeSidebar);

		typeOuter.appendChild(typeContent);





		typeSidebar.appendChild(typeSidebarDescription);
		typeSidebarDescription.appendChild(typeSidebarDescriptionTitleOuter);
		typeSidebarDescriptionTitleOuter.appendChild(typeSidebarDescriptionTitleTitle);
		typeSidebarDescriptionTitleTitle.appendChild(typeSidebarDescriptionTitleTitleText);
		typeSidebarDescriptionTitleOuter.appendChild(typeSidebarDescriptionTitleImageOuter);
		typeSidebarDescriptionTitleImageOuter.appendChild(typeSidebarDescriptionTitleImage);
		typeSidebarDescription.appendChild(typeSidebarDescriptionAgainstOpposed);
		typeSidebarDescriptionAgainstOpposed.appendChild(typeSidebarDescriptionSelector);
		typeSidebarDescriptionAgainstOpposed.appendChild(typeSidebarDescriptionAgainst);
		typeSidebarDescriptionAgainst.appendChild(typeSidebarDescriptionAgainstEffective);
		typeSidebarDescriptionAgainstEffective.appendChild(typeSidebarDescriptionAgainstEffectiveTitle);
		typeSidebarDescriptionAgainstEffective.appendChild(typeSidebarDescriptionAgainstEffectiveContain);
		typeSidebarDescriptionAgainst.appendChild(typeSidebarDescriptionAgainstIneffective);
		typeSidebarDescriptionAgainstIneffective.appendChild(typeSidebarDescriptionAgainstIneffectiveTitle);
		typeSidebarDescriptionAgainstIneffective.appendChild(typeSidebarDescriptionAgainstIneffectiveContain);
		typeSidebarDescriptionAgainst.appendChild(typeSidebarDescriptionAgainstImmune);
		typeSidebarDescriptionAgainstImmune.appendChild(typeSidebarDescriptionAgainstImmuneTitle);
		typeSidebarDescriptionAgainstImmune.appendChild(typeSidebarDescriptionAgainstImmuneContain);
		typeSidebarDescriptionAgainst.appendChild(typeSidebarDescriptionAgainstDefault);
		typeSidebarDescriptionAgainstDefault.appendChild(typeSidebarDescriptionAgainstDefaultTitle);
		typeSidebarDescriptionAgainstDefault.appendChild(typeSidebarDescriptionAgainstDefaultContain);
		typeSidebarDescriptionAgainstOpposed.appendChild(typeSidebarDescriptionOpposed);
		typeSidebarDescriptionOpposed.appendChild(typeSidebarDescriptionOpposedEffective);
		typeSidebarDescriptionOpposedEffective.appendChild(typeSidebarDescriptionOpposedEffectiveTitle);
		typeSidebarDescriptionOpposedEffective.appendChild(typeSidebarDescriptionOpposedEffectiveContain);
		typeSidebarDescriptionOpposed.appendChild(typeSidebarDescriptionOpposedIneffective);
		typeSidebarDescriptionOpposedIneffective.appendChild(typeSidebarDescriptionOpposedIneffectiveTitle);
		typeSidebarDescriptionOpposedIneffective.appendChild(typeSidebarDescriptionOpposedIneffectiveContain);
		typeSidebarDescriptionOpposed.appendChild(typeSidebarDescriptionOpposedImmune);
		typeSidebarDescriptionOpposedImmune.appendChild(typeSidebarDescriptionOpposedImmuneTitle);
		typeSidebarDescriptionOpposedImmune.appendChild(typeSidebarDescriptionOpposedImmuneContain);
		typeSidebarDescriptionOpposed.appendChild(typeSidebarDescriptionOpposedDefault);
		typeSidebarDescriptionOpposedDefault.appendChild(typeSidebarDescriptionOpposedDefaultTitle);
		typeSidebarDescriptionOpposedDefault.appendChild(typeSidebarDescriptionOpposedDefaultContain);
	
		for(var i = 0; i < 2; i++) {
			var typeSidebarDescriptionSelectorInput = document.createElement("input");
			var typeSidebarDescriptionSelectorLabel = document.createElement("label");
			var typeSidebarDescriptionSelectorLabelText = document.createElement("p");
			typeSidebarDescriptionSelectorInput.setAttribute("type","radio");
			typeSidebarDescriptionSelectorInput.setAttribute("value", i);
			typeSidebarDescriptionSelectorInput.setAttribute("name","type-selector");
			typeSidebarDescriptionSelectorInput.setAttribute("id","type-selector" + i);
			typeSidebarDescriptionSelectorInput.setAttribute("autocomplete","off");
			typeSidebarDescriptionSelectorLabel.setAttribute("for","type-selector" + i);
			if(i == 0) {
				typeSidebarDescriptionSelectorInput.setAttribute("checked","");
				typeSidebarDescriptionSelectorInput.setAttribute("onclick","this.parentElement.nextElementSibling.style.display='block';this.parentElement.nextElementSibling.nextElementSibling.style.display='none'");
				typeSidebarDescriptionSelectorLabelText.innerText = "Defending";
			}
			if(i == 1) {
				typeSidebarDescriptionSelectorInput.setAttribute("onclick","this.parentElement.nextElementSibling.style.display='none';this.parentElement.nextElementSibling.nextElementSibling.style.display='block'");
				typeSidebarDescriptionSelectorLabelText.innerText = "Attacking";
			}
			typeSidebarDescriptionSelector.appendChild(typeSidebarDescriptionSelectorInput);
			typeSidebarDescriptionSelector.appendChild(typeSidebarDescriptionSelectorLabel);
			typeSidebarDescriptionSelectorLabel.appendChild(typeSidebarDescriptionSelectorLabelText);
		}
		var typeContentTypeChartMatrixTable = document.createElement("table");

		typeContentTypeChartMatrixTable.setAttribute("name", 'matrix');
		typeContentTypeChartMatrixTable.setAttribute("type", MEDIAPath_Type_Icon);
		var typeContentTypeChartMatrixTableTR = document.createElement("tr");
	

		typeContentTypeChartMatrixTable.appendChild(typeContentTypeChartMatrixTableTR);
		var typeContentTypeChartMatrixTableTH0 = document.createElement("th");
		typeContentTypeChartMatrixTableTH0.setAttribute("title","");
		typeContentTypeChartMatrixTableTR.appendChild(typeContentTypeChartMatrixTableTH0);
		for(var i = 0; i < finaldataTypeChart.length; i++) {
			var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
			var typeContentTypeChartMatrixTableTH = document.createElement("th");
			var typeContentTypeChartMatrixTableTHIMG = document.createElement("img");
			typeContentTypeChartMatrixTableTH.innerText = finaldataTypeChartTitle[i];
			typeContentTypeChartMatrixTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			typeContentTypeChartMatrixTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			typeContentTypeChartMatrixTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			typeContentTypeChartMatrixTableTHIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
			typeContentTypeChartMatrixTableTR.appendChild(typeContentTypeChartMatrixTableTH);
			typeContentTypeChartMatrixTableTH.appendChild(typeContentTypeChartMatrixTableTHIMG);
		}
		for(var i = 0; i < finaldataTypeChart.length; i++) {
			var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
			var typeContentTypeChartMatrixTableTR = document.createElement("tr");
			var typeContentTypeChartMatrixTableTH = document.createElement("th");
			var typeContentTypeChartMatrixTableTHIMG = document.createElement("img");
			typeContentTypeChartMatrixTable.appendChild(typeContentTypeChartMatrixTableTR);
			typeContentTypeChartMatrixTableTH.innerText = finaldataTypeChartTitle[i];
			typeContentTypeChartMatrixTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			typeContentTypeChartMatrixTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			typeContentTypeChartMatrixTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			typeContentTypeChartMatrixTableTHIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
			typeContentTypeChartMatrixTableTR.appendChild(typeContentTypeChartMatrixTableTH);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				var typeContentTypeChartMatrixTableTD = document.createElement("td");
				var typeContentTypeChartMatrixTableTDText = document.createElement("small");

				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
					typeContentTypeChartMatrixTableTD.setAttribute("title", "Super Effective");
				}
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "1×") {
					typeContentTypeChartMatrixTableTD.setAttribute("title", "Normal Effectiveness");
				}
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
					typeContentTypeChartMatrixTableTD.setAttribute("title", "Not Very Effective");
				}
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
					typeContentTypeChartMatrixTableTD.setAttribute("title", "No Effect");
				}
				typeContentTypeChartMatrixTableTDText.innerText = finaldataTypeChart[i][finaldataTypeChartTitle[q]];
				typeContentTypeChartMatrixTableTR.appendChild(typeContentTypeChartMatrixTableTD);
				typeContentTypeChartMatrixTableTD.appendChild(typeContentTypeChartMatrixTableTDText);
				typeContentTypeChartMatrixTableTD.addEventListener("mouseenter",matrixHoverClass);
				typeContentTypeChartMatrixTableTD.addEventListener("mouseleave",function() {this.parentElement.parentElement.querySelector(":scope > *:first-child").className = "";});
			}
			typeContentTypeChartMatrixTableTH.appendChild(typeContentTypeChartMatrixTableTHIMG);
		}
		typeContent.appendChild(typeContentTypeChartMatrixTable);

		var typeContentTypeChartEffectivenessTable = document.createElement("table");
		typeContentTypeChartEffectivenessTable.setAttribute("name", 'effectiveness');
		typeContentTypeChartEffectivenessTable.setAttribute("type", MEDIAPath_Type_Icon);
		var typeContentTypeChartEffectivenessTableTR = document.createElement("tr");
		typeContentTypeChartEffectivenessTable.appendChild(typeContentTypeChartEffectivenessTableTR);
		var tempEffectivenessArrLeft = [];
		var tempEffectivenessArrLeftCount = {};
		var tempEffectivenessArrRight = [];
		var tempEffectivenessArrRightCount = {};
		var tempEffectivenessArrLeftMax = [];
		var tempEffectivenessArrLeftMaxCount = {};
		var tempEffectivenessArrLeftMaxResult = [];
		var tempEffectivenessArrRightMax = [];
		var tempEffectivenessArrRightMaxCount = {};
		var tempEffectivenessArrRightMaxResult = [];
		for(var i = 0; i < finaldataTypeChart.length; i++) {
			var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "2×") {
					tempEffectivenessArrLeftMax.push(i);
				}
			}
			for(var num of tempEffectivenessArrLeftMax) {
				tempEffectivenessArrLeftMaxCount[num] = tempEffectivenessArrLeftMaxCount[num] ? tempEffectivenessArrLeftMaxCount[num] + 1 : 1;
			}
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
					tempEffectivenessArrRightMax.push(i);
				}
			}
			for(var num of tempEffectivenessArrRightMax) {
				tempEffectivenessArrRightMaxCount[num] = tempEffectivenessArrRightMaxCount[num] ? tempEffectivenessArrRightMaxCount[num] + 1 : 1;
			}
			if(tempEffectivenessArrLeftMaxCount[i] != undefined) {
				tempEffectivenessArrLeftMaxResult.push(tempEffectivenessArrLeftMaxCount[i]);
			}
			if(tempEffectivenessArrRightMaxCount[i] != undefined) {
				tempEffectivenessArrRightMaxResult.push(tempEffectivenessArrRightMaxCount[i]);
			}
		}
		for(var i = 0; i < finaldataTypeChart.length; i++) {
			var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
			var typeContentTypeChartEffectivenessTableTR = document.createElement("tr");
			var typeContentTypeChartEffectivenessTableTH = document.createElement("th");
			var typeContentTypeChartEffectivenessTableTHIMG = document.createElement("img");
			typeContentTypeChartEffectivenessTable.appendChild(typeContentTypeChartEffectivenessTableTR);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "2×") {
					tempEffectivenessArrLeft.push(i);
				}
			}
			for(var num of tempEffectivenessArrLeft) {
				tempEffectivenessArrLeftCount[num] = tempEffectivenessArrLeftCount[num] ? tempEffectivenessArrLeftCount[num] + 1 : 1;
			}
			if(tempEffectivenessArrLeftCount[i] == undefined) {
				tempEffectivenessArrLeftCount[i] = 0;
			}
			for(var q = 0; q < Math.max.apply(Math, tempEffectivenessArrLeftMaxResult) - tempEffectivenessArrLeftCount[i]; q++) {
				var typeContentTypeChartEffectivenessTableTDLeft = document.createElement("td");
				typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTDLeft);
			}
			typeContentTypeChartEffectivenessTableTH.innerText = finaldataTypeChartTitle[i];
			typeContentTypeChartEffectivenessTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			typeContentTypeChartEffectivenessTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			typeContentTypeChartEffectivenessTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			typeContentTypeChartEffectivenessTableTHIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "2×") {
					var typeContentTypeChartEffectivenessTableTHLeft = document.createElement("th");
					var typeContentTypeChartEffectivenessTableTHLeftIMG = document.createElement("img");
					typeContentTypeChartEffectivenessTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartEffectivenessTableTHLeft.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartEffectivenessTableTHLeft.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartEffectivenessTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartEffectivenessTableTHLeftIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTHLeft);
					typeContentTypeChartEffectivenessTableTHLeft.appendChild(typeContentTypeChartEffectivenessTableTHLeftIMG);
				}
			}
			var typeContentTypeChartEffectivenessTableTDLeftArrow = document.createElement("td");
			var typeContentTypeChartEffectivenessTableTDLeftArrowText = document.createElement("p");
			if(tempEffectivenessArrLeftCount[i] != 0) {
				typeContentTypeChartEffectivenessTableTDLeftArrowText.innerText = "→";
			}
			typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTDLeftArrow);
			typeContentTypeChartEffectivenessTableTDLeftArrow.appendChild(typeContentTypeChartEffectivenessTableTDLeftArrowText);
			typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTH);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
					tempEffectivenessArrRight.push(i);
				}
			}
			for(var num of tempEffectivenessArrRight) {
				tempEffectivenessArrRightCount[num] = tempEffectivenessArrRightCount[num] ? tempEffectivenessArrRightCount[num] + 1 : 1;
			}
			if(tempEffectivenessArrRightCount[i] == undefined) {
				tempEffectivenessArrRightCount[i] = 0;
			}
			var typeContentTypeChartEffectivenessTableTDRightArrow = document.createElement("td");
			var typeContentTypeChartEffectivenessTableTDRightArrowText = document.createElement("td");
			if(tempEffectivenessArrRightCount[i] != 0) {
				typeContentTypeChartEffectivenessTableTDRightArrowText.innerText = "→";
			}
			typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTDRightArrow);
			typeContentTypeChartEffectivenessTableTDRightArrow.appendChild(typeContentTypeChartEffectivenessTableTDRightArrowText);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "2×") {
					var typeContentTypeChartEffectivenessTableTHRight = document.createElement("th");
					var typeContentTypeChartEffectivenessTableTHRightIMG = document.createElement("img");
					typeContentTypeChartEffectivenessTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartEffectivenessTableTHRight.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartEffectivenessTableTHRight.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartEffectivenessTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartEffectivenessTableTHRightIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTHRight);
					typeContentTypeChartEffectivenessTableTHRight.appendChild(typeContentTypeChartEffectivenessTableTHRightIMG);
				}
			}
			typeContentTypeChartEffectivenessTableTH.appendChild(typeContentTypeChartEffectivenessTableTHIMG);
			for(var q = 0; q < Math.max.apply(Math, tempEffectivenessArrRightMaxResult) - tempEffectivenessArrRightCount[i]; q++) {
				var typeContentTypeChartEffectivenessTableTDRight = document.createElement("td");
				typeContentTypeChartEffectivenessTableTR.appendChild(typeContentTypeChartEffectivenessTableTDRight);
			}
		}
		typeContent.appendChild(typeContentTypeChartEffectivenessTable);
		var typeContentTypeChartIneffectivenessTable = document.createElement("table");
		typeContentTypeChartIneffectivenessTable.setAttribute("name", 'ineffectiveness');
		typeContentTypeChartIneffectivenessTable.setAttribute("type", MEDIAPath_Type_Icon);
		var typeContentTypeChartIneffectivenessTableTR = document.createElement("tr");
		typeContentTypeChartIneffectivenessTable.appendChild(typeContentTypeChartIneffectivenessTableTR);
		var tempIneffectivenessArrLeft = [];
		var tempIneffectivenessArrLeftCount = {};
		var tempIneffectivenessArrRight = [];
		var tempIneffectivenessArrRightCount = {};
		var tempIneffectivenessArrLeftMax = [];
		var tempIneffectivenessArrLeftMaxCount = {};
		var tempIneffectivenessArrLeftMaxResult = [];
		var tempIneffectivenessArrRightMax = [];
		var tempIneffectivenessArrRightMaxCount = {};
		var tempIneffectivenessArrRightMaxResult = [];
		for(var i = 0; i < finaldataTypeChart.length; i++) {
			var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "½×") {
					tempIneffectivenessArrLeftMax.push(i);
				}
			}
			for(var num of tempIneffectivenessArrLeftMax) {
				tempIneffectivenessArrLeftMaxCount[num] = tempIneffectivenessArrLeftMaxCount[num] ? tempIneffectivenessArrLeftMaxCount[num] + 1 : 1;
			}
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
					tempIneffectivenessArrRightMax.push(i);
				}
			}
			for(var num of tempIneffectivenessArrRightMax) {
				tempIneffectivenessArrRightMaxCount[num] = tempIneffectivenessArrRightMaxCount[num] ? tempIneffectivenessArrRightMaxCount[num] + 1 : 1;
			}
			if(tempIneffectivenessArrLeftMaxCount[i] != undefined) {
				tempIneffectivenessArrLeftMaxResult.push(tempIneffectivenessArrLeftMaxCount[i]);
			}
			if(tempIneffectivenessArrRightMaxCount[i] != undefined) {
				tempIneffectivenessArrRightMaxResult.push(tempIneffectivenessArrRightMaxCount[i]);
			}
		}
		for(var i = 0; i < finaldataTypeChart.length; i++) {
			var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
			var typeContentTypeChartIneffectivenessTableTR = document.createElement("tr");
			var typeContentTypeChartIneffectivenessTableTH = document.createElement("th");
			var typeContentTypeChartIneffectivenessTableTHIMG = document.createElement("img");
			typeContentTypeChartIneffectivenessTable.appendChild(typeContentTypeChartIneffectivenessTableTR);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "½×") {
					tempIneffectivenessArrLeft.push(i);
				}
			}
			for(var num of tempIneffectivenessArrLeft) {
				tempIneffectivenessArrLeftCount[num] = tempIneffectivenessArrLeftCount[num] ? tempIneffectivenessArrLeftCount[num] + 1 : 1;
			}
			if(tempIneffectivenessArrLeftCount[i] == undefined) {
				tempIneffectivenessArrLeftCount[i] = 0;
			}
			for(var q = 0; q < Math.max.apply(Math, tempIneffectivenessArrLeftMaxResult) - tempIneffectivenessArrLeftCount[i]; q++) {
				var typeContentTypeChartIneffectivenessTableTDLeft = document.createElement("td");
				typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTDLeft);
			}
			typeContentTypeChartIneffectivenessTableTH.innerText = finaldataTypeChartTitle[i];
			typeContentTypeChartIneffectivenessTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			typeContentTypeChartIneffectivenessTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			typeContentTypeChartIneffectivenessTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			typeContentTypeChartIneffectivenessTableTHIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "½×") {
					var typeContentTypeChartIneffectivenessTableTHLeft = document.createElement("th");
					var typeContentTypeChartIneffectivenessTableTHLeftIMG = document.createElement("img");
					typeContentTypeChartIneffectivenessTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartIneffectivenessTableTHLeft.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartIneffectivenessTableTHLeft.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartIneffectivenessTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartIneffectivenessTableTHLeftIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTHLeft);
					typeContentTypeChartIneffectivenessTableTHLeft.appendChild(typeContentTypeChartIneffectivenessTableTHLeftIMG);
				}
			}
			var typeContentTypeChartIneffectivenessTableTDLeftArrow = document.createElement("td");
			var typeContentTypeChartIneffectivenessTableTDLeftArrowText = document.createElement("p");
			if(tempIneffectivenessArrLeftCount[i] != 0) {
				typeContentTypeChartIneffectivenessTableTDLeftArrowText.innerText = "→";
			}
			typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTDLeftArrow);
			typeContentTypeChartIneffectivenessTableTDLeftArrow.appendChild(typeContentTypeChartIneffectivenessTableTDLeftArrowText);
			typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTH);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
					tempIneffectivenessArrRight.push(i);
				}
			}
			for(var num of tempIneffectivenessArrRight) {
				tempIneffectivenessArrRightCount[num] = tempIneffectivenessArrRightCount[num] ? tempIneffectivenessArrRightCount[num] + 1 : 1;
			}
			if(tempIneffectivenessArrRightCount[i] == undefined) {
				tempIneffectivenessArrRightCount[i] = 0;
			}
			var typeContentTypeChartIneffectivenessTableTDRightArrow = document.createElement("td");
			var typeContentTypeChartIneffectivenessTableTDRightArrowText = document.createElement("p");
			if(tempIneffectivenessArrRightCount[i] != 0) {
				typeContentTypeChartIneffectivenessTableTDRightArrowText.innerText = "→";
			}
			typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTDRightArrow);
			typeContentTypeChartIneffectivenessTableTDRightArrow.appendChild(typeContentTypeChartIneffectivenessTableTDRightArrowText);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "½×") {
					var typeContentTypeChartIneffectivenessTableTHRight = document.createElement("th");
					var typeContentTypeChartIneffectivenessTableTHRightIMG = document.createElement("img");
					typeContentTypeChartIneffectivenessTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartIneffectivenessTableTHRight.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartIneffectivenessTableTHRight.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartIneffectivenessTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartIneffectivenessTableTHRightIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTHRight);
					typeContentTypeChartIneffectivenessTableTHRight.appendChild(typeContentTypeChartIneffectivenessTableTHRightIMG);
				}
			}
			typeContentTypeChartIneffectivenessTableTH.appendChild(typeContentTypeChartIneffectivenessTableTHIMG);
			for(var q = 0; q < Math.max.apply(Math, tempIneffectivenessArrRightMaxResult) - tempIneffectivenessArrRightCount[i]; q++) {
				var typeContentTypeChartIneffectivenessTableTDRight = document.createElement("td");
				typeContentTypeChartIneffectivenessTableTR.appendChild(typeContentTypeChartIneffectivenessTableTDRight);
			}
		}
		typeContent.appendChild(typeContentTypeChartIneffectivenessTable);
		var typeContentTypeChartImmunityTable = document.createElement("table");
		typeContentTypeChartImmunityTable.setAttribute("name", 'immunity');
		typeContentTypeChartImmunityTable.setAttribute("type", MEDIAPath_Type_Icon);
		var typeContentTypeChartImmunityTableTR = document.createElement("tr");
		typeContentTypeChartImmunityTable.appendChild(typeContentTypeChartImmunityTableTR);
		var tempImmunityArrLeft = [];
		var tempImmunityArrLeftCount = {};
		var tempImmunityArrRight = [];
		var tempImmunityArrRightCount = {};
		var tempImmunityArrLeftMax = [];
		var tempImmunityArrLeftMaxCount = {};
		var tempImmunityArrLeftMaxResult = [];
		var tempImmunityArrRightMax = [];
		var tempImmunityArrRightMaxCount = {};
		var tempImmunityArrRightMaxResult = [];
		for(var i = 0; i < finaldataTypeChart.length; i++) {
			var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "0×") {
					tempImmunityArrLeftMax.push(i);
				}
			}
			for(var num of tempImmunityArrLeftMax) {
				tempImmunityArrLeftMaxCount[num] = tempImmunityArrLeftMaxCount[num] ? tempImmunityArrLeftMaxCount[num] + 1 : 1;
			}
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
					tempImmunityArrRightMax.push(i);
				}
			}
			for(var num of tempImmunityArrRightMax) {
				tempImmunityArrRightMaxCount[num] = tempImmunityArrRightMaxCount[num] ? tempImmunityArrRightMaxCount[num] + 1 : 1;
			}
			if(tempImmunityArrLeftMaxCount[i] != undefined) {
				tempImmunityArrLeftMaxResult.push(tempImmunityArrLeftMaxCount[i]);
			}
			if(tempImmunityArrRightMaxCount[i] != undefined) {
				tempImmunityArrRightMaxResult.push(tempImmunityArrRightMaxCount[i]);
			}
		}
		for(var i = 0; i < finaldataTypeChart.length; i++) {
			var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[i]);
			var typeContentTypeChartImmunityTableTR = document.createElement("tr");
			var typeContentTypeChartImmunityTableTH = document.createElement("th");
			var typeContentTypeChartImmunityTableTHIMG = document.createElement("img");
			typeContentTypeChartImmunityTable.appendChild(typeContentTypeChartImmunityTableTR);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "0×") {
					tempImmunityArrLeft.push(i);
				}
			}
			for(var num of tempImmunityArrLeft) {
				tempImmunityArrLeftCount[num] = tempImmunityArrLeftCount[num] ? tempImmunityArrLeftCount[num] + 1 : 1;
			}
			if(tempImmunityArrLeftCount[i] == undefined) {
				tempImmunityArrLeftCount[i] = 0;
			}
			for(var q = 0; q < Math.max.apply(Math, tempImmunityArrLeftMaxResult) - tempImmunityArrLeftCount[i]; q++) {
				var typeContentTypeChartImmunityTableTDLeft = document.createElement("td");
				typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTDLeft);
			}
			typeContentTypeChartImmunityTableTH.innerText = finaldataTypeChartTitle[i];
			typeContentTypeChartImmunityTableTH.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			typeContentTypeChartImmunityTableTH.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			typeContentTypeChartImmunityTableTHIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			typeContentTypeChartImmunityTableTHIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[q][finaldataTypeChartTitle[i]] == "0×") {
					var typeContentTypeChartImmunityTableTHLeft = document.createElement("th");
					var typeContentTypeChartImmunityTableTHLeftIMG = document.createElement("img");
					typeContentTypeChartImmunityTableTHLeft.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartImmunityTableTHLeft.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartImmunityTableTHLeft.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartImmunityTableTHLeftIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartImmunityTableTHLeftIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTHLeft);
					typeContentTypeChartImmunityTableTHLeft.appendChild(typeContentTypeChartImmunityTableTHLeftIMG);
				}
			}
			var typeContentTypeChartImmunityTableTDLeftArrow = document.createElement("td");
			var typeContentTypeChartImmunityTableTDLeftArrowText = document.createElement("p");
			if(tempImmunityArrLeftCount[i] != 0) {
				typeContentTypeChartImmunityTableTDLeftArrowText.innerText = "→";
			}
			typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTDLeftArrow);
			typeContentTypeChartImmunityTableTDLeftArrow.appendChild(typeContentTypeChartImmunityTableTDLeftArrowText);
			typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTH);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
					tempImmunityArrRight.push(i);
				}
			}
			for(var num of tempImmunityArrRight) {
				tempImmunityArrRightCount[num] = tempImmunityArrRightCount[num] ? tempImmunityArrRightCount[num] + 1 : 1;
			}
			if(tempImmunityArrRightCount[i] == undefined) {
				tempImmunityArrRightCount[i] = 0;
			}
			var typeContentTypeChartImmunityTableTDRightArrow = document.createElement("td");
			var typeContentTypeChartImmunityTableTDRightArrowText = document.createElement("td");
			if(tempImmunityArrRightCount[i] != 0) {
				typeContentTypeChartImmunityTableTDRightArrowText.innerText = "→";
			}
			typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTDRightArrow);
			typeContentTypeChartImmunityTableTDRightArrow.appendChild(typeContentTypeChartImmunityTableTDRightArrowText);
			for(var q = 0; q < finaldataTypeChartTitle.length; q++) {
				if(finaldataTypeChart[i][finaldataTypeChartTitle[q]] == "0×") {
					var typeContentTypeChartImmunityTableTHRight = document.createElement("th");
					var typeContentTypeChartImmunityTableTHRightIMG = document.createElement("img");
					typeContentTypeChartImmunityTableTHRight.innerText = finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase();
					typeContentTypeChartImmunityTableTHRight.setAttribute("title", finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase());
					typeContentTypeChartImmunityTableTHRight.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[q] + '")');
					typeContentTypeChartImmunityTableTHRightIMG.src = "./media/Images/Misc/Type/Icon/" + MEDIAPath_Type_Icon + "/" + finaldataTypeChartTitle[q].charAt(0).toUpperCase() + finaldataTypeChartTitle[q].slice(1).toLowerCase() + ".png";
					typeContentTypeChartImmunityTableTHRightIMG.setAttribute("onerror","this.style.display='none';this.parentElement.style.fontSize='0.45vw';");
					typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTHRight);
					typeContentTypeChartImmunityTableTHRight.appendChild(typeContentTypeChartImmunityTableTHRightIMG);
				}
			}
			typeContentTypeChartImmunityTableTH.appendChild(typeContentTypeChartImmunityTableTHIMG);
			for(var q = 0; q < Math.max.apply(Math, tempImmunityArrRightMaxResult) - tempImmunityArrRightCount[i]; q++) {
				var typeContentTypeChartImmunityTableTDRight = document.createElement("td");
				typeContentTypeChartImmunityTableTR.appendChild(typeContentTypeChartImmunityTableTDRight);
			}
		}
		typeContent.appendChild(typeContentTypeChartImmunityTable);
		
		var typeOptionsTitle = ["Matrix","Effectiveness","Ineffectiveness","Immunity"];
		for(var q = 0; q < typeOptionsTitle.length; q++) {
			var typeTitleOptionsInput = document.createElement("input");
			var typeTitleOptionsLabel = document.createElement("label");
			var typeTitleOptionsLabelText = document.createElement("p");
			typeTitleOptionsInput.setAttribute("type","radio");
			typeTitleOptionsInput.setAttribute("name","type-options");
			typeTitleOptionsInput.setAttribute("id","type-options-" + q);
			typeTitleOptionsInput.setAttribute("autocomplete","off");
			typeTitleOptionsInput.value = typeOptionsTitle[q].toLowerCase();
			typeTitleOptionsLabel.setAttribute("for","type-options-" + q);
			typeTitleOptionsLabelText.innerText = typeOptionsTitle[q];
			typeTitle.appendChild(typeTitleOptionsInput);
			typeTitle.appendChild(typeTitleOptionsLabel);
			typeTitleOptionsLabel.appendChild(typeTitleOptionsLabelText);
			typeTitleOptionsInput.addEventListener("click", typeOptionsSelector);
	
			function typeOptionsSelector() {
				var typechartContents = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='type'] > div[name='content'] table[name]");
				var typechartContent = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='type'] > div[name='content'] table[name='"+this.value+"']");
				for(var q = 0; q < typechartContents.length; q++) {
					typechartContents[q].style.display = "none";
				}
				for(var q = 0; q < typechartContent.length; q++) {
					typechartContent[q].style.removeProperty("display");
				}
			}
			if(q == 0) {
				typeTitleOptionsLabel.click();
			}
		}
		
	};


	function createDamageCalc() {
		var toolSectionContentDMGOuter = document.createElement("div");
		var toolSectionContentDMG = document.createElement("div");
		var toolSectionContentDMGOptions = document.createElement("div");
		var toolSectionContentDMGOptionsTop = document.createElement("div");

		var toolSectionContentDMGOptionsBattles = document.createElement("span");
		var toolSectionContentDMGOptionsBattlesSelect = document.createElement("select");

		var toolSectionContentDMGOptionsTitle = document.createElement("span");

		var toolSectionContentDMGOptionsContent = document.createElement("div");
		var toolSectionContentDMGOptionsContentTop = document.createElement("ol");
		var toolSectionContentDMGOptionsContentBottom = document.createElement("ol");


		var toolSectionContentDMGOptionsBottom = document.createElement("div");

		var toolSectionContentDMGContent = document.createElement("div");
		var toolSectionContentDMGResult = document.createElement("div");
		var toolSectionContentDMGMenu = document.createElement("div");
		
		var toolSectionContentDMGMenuLeft = document.createElement("div");
		var toolSectionContentDMGMenuRight = document.createElement("div");

		var toolSectionContentDMGMenuRightTop = document.createElement("span");
		var toolSectionContentDMGMenuRightBottom = document.createElement("span");

		var toolSectionContentDMGMenuRightTopSelect = document.createElement("select");
		var toolSectionContentDMGMenuRightTopInput = document.createElement("input");
	

		var toolSectionContentDMGMenuRightBottomLeft = document.createElement("span");
		var toolSectionContentDMGMenuRightBottomLeftTitle = document.createElement("h6");
		var toolSectionContentDMGMenuRightBottomLeftText = document.createElement("small");
		var toolSectionContentDMGMenuRightBottomRight = document.createElement("span");
		var toolSectionContentDMGMenuRightBottomRightTitle = document.createElement("h6");
		var toolSectionContentDMGMenuRightBottomRightText = document.createElement("small");

		var toolSectionContentDMGMenuLeftCrit = document.createElement("span");
		var toolSectionContentDMGMenuLeftCritInput = document.createElement("input");
		var toolSectionContentDMGMenuLeftCritLabel = document.createElement("label");
		var toolSectionContentDMGMenuLeftCritText = document.createElement("h6");

		var toolSectionContentDMGMenuLeftRoll = document.createElement("span");
		var toolSectionContentDMGMenuLeftRangeTextTopLeft = document.createElement("h6");
		var toolSectionContentDMGMenuLeftRangeTextTopRight = document.createElement("h6");
		var toolSectionContentDMGMenuLeftRangeTextBottomLeft = document.createElement("small");
		var toolSectionContentDMGMenuLeftRangeTextBottomRight = document.createElement("small");
		var toolSectionContentDMGMenuLeftRange = document.createElement("input");


		toolSectionContentDMGMenuRightTopInput.setAttribute("type","number");
		toolSectionContentDMGMenuRightTopInput.setAttribute("min","1");
		toolSectionContentDMGMenuRightTopInput.setAttribute("value","1");
		toolSectionContentDMGMenuRightTopInput.setAttribute("max","1");
		toolSectionContentDMGMenuRightTopInput.setAttribute("title","Amount of Hits");

		toolSectionContentDMGMenuRightBottomLeftTitle.innerText = "Power";
		toolSectionContentDMGMenuRightBottomLeftText.innerText = "-";
		toolSectionContentDMGMenuRightBottomRightTitle.innerText = "Accuracy";
		toolSectionContentDMGMenuRightBottomRightText.innerText = "-";
		toolSectionContentDMGMenuRightBottomLeftText.setAttribute("name","power");
		toolSectionContentDMGMenuRightBottomRightText.setAttribute("name","accuracy");

		toolSectionContentDMGMenuLeftCritText.innerText = "Critical";

		toolSectionContentDMGMenuLeftCrit.setAttribute("name","critical");
		toolSectionContentDMGMenuLeftCritInput.setAttribute("type","checkbox");
		toolSectionContentDMGMenuLeftCritInput.setAttribute("name","critical-checkbox");
		toolSectionContentDMGMenuLeftCritInput.setAttribute("id","critical-checkbox");
		toolSectionContentDMGMenuLeftCritLabel.setAttribute("for","critical-checkbox");

		toolSectionContentDMGMenuLeftRangeTextTopLeft.innerText = "Low Roll";
		toolSectionContentDMGMenuLeftRangeTextTopRight.innerText = "High Roll";
		toolSectionContentDMGMenuLeftRangeTextBottomLeft.setAttribute("name","min");
		toolSectionContentDMGMenuLeftRangeTextBottomRight.setAttribute("name","max");


		toolSectionContentDMGMenuLeftRange.setAttribute("type","range");
		toolSectionContentDMGMenuLeftRange.setAttribute("name","dmg-roll-range")
		toolSectionContentDMGMenuLeftRange.setAttribute("id","dmg-roll-range")
	

		toolSectionContentDMGOptionsContentTop.setAttribute("name","pokémon");
		toolSectionContentDMGOptionsContentBottom.setAttribute("name","team");

		toolSectionContentDMGOuter.setAttribute("name","dmg");
		toolSectionContentDMGOuter.setAttribute("value","3");

		toolSectionContentDMGContent.setAttribute("name","content");

		toolSectionContentDMGResult.setAttribute("name","result");
		toolSectionContentDMGResult.classList.add("scroll");
		toolSectionContentDMGOptions.setAttribute("name","options");
		toolSectionContentDMGMenu.setAttribute("name","menu");

	
		toolSectionContentDMGOptionsContent.classList.add("scroll");

		toolSectionContent.appendChild(toolSectionContentDMGOuter);
		toolSectionContentDMGOuter.appendChild(toolSectionContentDMG);
		toolSectionContentDMG.appendChild(toolSectionContentDMGContent);
		toolSectionContentDMGContent.appendChild(toolSectionContentDMGResult);
		toolSectionContentDMGContent.appendChild(toolSectionContentDMGMenu);
		toolSectionContentDMG.appendChild(toolSectionContentDMGOptions);
		toolSectionContentDMGOptions.appendChild(toolSectionContentDMGOptionsTop);
		toolSectionContentDMGOptionsTop.appendChild(toolSectionContentDMGOptionsBattles);
		toolSectionContentDMGOptionsBattles.appendChild(toolSectionContentDMGOptionsBattlesSelect);
		toolSectionContentDMGOptionsTop.appendChild(toolSectionContentDMGOptionsTitle);



		toolSectionContentDMGOptions.appendChild(toolSectionContentDMGOptionsContent);
		toolSectionContentDMGOptionsContent.appendChild(toolSectionContentDMGOptionsContentTop);
		toolSectionContentDMGOptionsContent.appendChild(toolSectionContentDMGOptionsContentBottom);
		
		
		toolSectionContentDMGOptions.appendChild(toolSectionContentDMGOptionsBottom);
		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuLeft)
		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuRight)

		toolSectionContentDMGMenuRight.appendChild(toolSectionContentDMGMenuRightTop);
		toolSectionContentDMGMenuRight.appendChild(toolSectionContentDMGMenuRightBottom);
		toolSectionContentDMGMenuRightTop.appendChild(toolSectionContentDMGMenuRightTopSelect);
		toolSectionContentDMGMenuRightTop.appendChild(toolSectionContentDMGMenuRightTopInput);


		toolSectionContentDMGMenuRightBottom.appendChild(toolSectionContentDMGMenuRightBottomLeft);
		toolSectionContentDMGMenuRightBottomLeft.appendChild(toolSectionContentDMGMenuRightBottomLeftTitle);
		toolSectionContentDMGMenuRightBottomLeft.appendChild(toolSectionContentDMGMenuRightBottomLeftText);
		toolSectionContentDMGMenuRightBottom.appendChild(toolSectionContentDMGMenuRightBottomRight);
		toolSectionContentDMGMenuRightBottomRight.appendChild(toolSectionContentDMGMenuRightBottomRightTitle);
		toolSectionContentDMGMenuRightBottomRight.appendChild(toolSectionContentDMGMenuRightBottomRightText);
		
		toolSectionContentDMGMenuLeft.appendChild(toolSectionContentDMGMenuLeftRoll)
		toolSectionContentDMGMenuLeftRoll.appendChild(toolSectionContentDMGMenuLeftRangeTextTopLeft)
		toolSectionContentDMGMenuLeftRoll.appendChild(toolSectionContentDMGMenuLeftRangeTextTopRight)
		toolSectionContentDMGMenuLeftRoll.appendChild(toolSectionContentDMGMenuLeftRange)
		toolSectionContentDMGMenuLeftRoll.appendChild(toolSectionContentDMGMenuLeftRangeTextBottomLeft)
		toolSectionContentDMGMenuLeftRoll.appendChild(toolSectionContentDMGMenuLeftRangeTextBottomRight)

		toolSectionContentDMGMenuLeft.appendChild(toolSectionContentDMGMenuLeftCrit);
		toolSectionContentDMGMenuLeftCrit.appendChild(toolSectionContentDMGMenuLeftCritInput);
		toolSectionContentDMGMenuLeftCrit.appendChild(toolSectionContentDMGMenuLeftCritLabel);
		toolSectionContentDMGMenuLeftCritLabel.appendChild(toolSectionContentDMGMenuLeftCritText);

		toolSectionContentDMGMenuLeftCritInput.addEventListener("change",DMGCalcStart);

		toolSectionContentDMGMenuLeftRange.addEventListener("change",DMGCalcStart);

		var tempMoves = [];

		for(var m = 0; m < finaldataMove.length; m++) {
			if(finaldataMove[m][JSONPath_MoveReference] == "true") {
				tempMoves.push(finaldataMove[m]["Name_"+JSONPath_MoveName])
			}
		}

		tempMoves.sort();

		for(var m = 0; m < tempMoves.length; m++) {
			var toolSectionContentDMGMenuRightTopOption = document.createElement("option");
			toolSectionContentDMGMenuRightTopOption.setAttribute("value",tempMoves[m]);
			toolSectionContentDMGMenuRightTopOption.innerText = tempMoves[m];
			toolSectionContentDMGMenuRightTopSelect.appendChild(toolSectionContentDMGMenuRightTopOption);

			toolSectionContentDMGMenuRightTopOption.style.background = "var(--type"+getMoveData(tempMoves[m],"Type")+")";
		}
	



		

		var accvalue = getMoveData(toolSectionContentDMGMenuRightTopSelect.value,"Accuracy");
		var pwrvalue = getMoveData(toolSectionContentDMGMenuRightTopSelect.value,"Power");


		if (accvalue != undefined) {
			toolSectionContentDMGMenuRightBottomRightText.innerText = accvalue;
		}
		else {
			toolSectionContentDMGMenuRightBottomRightText.innerText = "-";
		}
		
		if (pwrvalue != undefined) {
			toolSectionContentDMGMenuRightBottomLeftText.innerText = pwrvalue;
		}
		else {
			toolSectionContentDMGMenuRightBottomLeftText.innerText = "-";
		}


		toolSectionContentDMGMenuRightTopInput.addEventListener("change",DMGCalcStart);
		toolSectionContentDMGMenuRightTopSelect.addEventListener("change",DMGSetInfo);
		toolSectionContentDMGMenuRightTopSelect.addEventListener("change",DMGCalcStart);


		//var conditions = [{Name:"Reflect",Affect:"Team"},{Name:"Light Screen",Affect:"Team"},{Name:"Misty Terrain",Affect:"All",Group:"Terrain"},{Name:"Psychic Terrain",Affect:"All",Group:"Terrain"},{Name:"Grassy Terrain",Affect:"All",Group:"Terrain"},{Name:"Electric Terrain",Affect:"All",Group:"Terrain"}]
		//var conditions = [{Name:"Poisoned",Title:"Poisoned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Badly Poisoned",Title:"Badly Poisoned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Burned",Title:"Burned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Paralyzed",Title:"Paralyzed",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Asleep",Title:"Asleep",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Frozen",Title:"Frozen",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Stealth Rock",Title:"Stealth Rock",Affect:"Team",Group:"Pointed Stones",Type:"Move",Game:"All"},{Name:"1 Layers",Title:"Spikes",Affect:"Team",Group:"Spikes",Type:"Move",Game:"All"},{Name:"2 Layers",Title:"Spikes",Affect:"Team",Group:"Spikes",Type:"Move",Game:"All"},{Name:"3 Layers",Title:"Spikes",Affect:"Team",Group:"Spikes",Type:"Move",Game:"All"},{Name:"Light Screen",Title:"Light Screen",Affect:"Team",Type:"Move",Game:"All"},{Name:"Reflect",Title:"Reflect",Affect:"Team",Type:"Move",Game:"All"},{Name:"Protect",Title:"Protect",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Leech Seed",Title:"Leech Seed",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Foresight",Title:"Foresight",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Helping Hand",Title:"Helping Hand",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Tailwind",Title:"Tailwind",Affect:"Team",Type:"Move",Game:"All"},{Name:"Aurora Veil",Title:"Aurora Veil",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Flower Gift",Title:"Flower Gift",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Friend Guard",Title:"Friend Guard",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Battery",Title:"Battery",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Power Spot",Title:"Power Spot",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Switching Out",Title:"Switching Out",Affect:"Pokémon",Info:"Is the Pokémon switching out?",Game:"All"},{Name:"Shadow",Title:"Shadow",Affect:"Pokémon",Info:"Is it a Shadow Pokémon?",Type:"Form",Game:"All"},{Name:"Sun",Title:"Sun",Affect:"All",Group:"Weather",Type:"Weather",Game:"All"},{Name:"Rain",Title:"Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"All"},{Name:"Sand",Title:"Sand",Affect:"All",Group:"Weather",Type:"Weather",Game:"All"},{Name:"Snow",Title:"Snow",Affect:"All",Group:"Weather",Type:"Weather",Game:"Legend Arceus,Scarlet,Violet"},{Name:"Fog",Title:"Fog",Affect:"All",Group:"Weather",Type:"Weather",Game:"Diamond,Pearl,Platinum,Brilliant Diamond,Shining Pearl,Legend Arceus"},{Name:"Hail",Title:"Hail",Affect:"All",Group:"Weather",Type:"Weather",Game:"All"},{Name:"Harsh Sunlight",Title:"Harsh Sunlight",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Heavy Rain",Title:"Heavy Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Strong Winds",Title:"Strong Winds",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Shadowy Aura",Title:"Shadowy Aura",Affect:"All",Group:"Weather",Type:"Weather",Game:"XD"},{Name:"Electric Terrain",Title:"Electric Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Grassy Terrain",Title:"Grassy Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Misty Terrain",Title:"Misty Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Psychic Terrain",Title:"Psychic Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Magic Room",Title:"Magic Room",Affect:"All",Type:"Move",Game:"All"},{Name:"Wonder Room",Title:"Wonder Room",Affect:"All",Type:"Move",Game:"All"},{Name:"Gravity",Title:"Gravity",Affect:"All",Type:"Move",Game:"All"},{Name:"G-Max Steelsurge",Title:"G-Max Steelsurge",Affect:"Team",Group:"Sharp Steel",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Stonesurge",Title:"G-Max Stonesurge",Affect:"Team",Group:"Pointed Stones",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Volcalith",Title:"G-Max Volcalith",Affect:"Team",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Cannonade",Title:"G-Max Cannonade",Affect:"Team",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Vine Lash",Title:"G-Max Vine Lash",Affect:"Team",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Wildfire",Title:"G-Max Wildfire",Affect:"Team",Type:"Move",Game:"Sword,Shield"}];
		//var conditions = [{Name:"Poisoned",Title:"Poisoned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Badly Poisoned",Title:"Badly Poisoned",Affect:"Pokémon",Info:"Turns of Bad Poison",Group:"Status",Values:"0,15",Type:"Status",Game:"All"},{Name:"Burned",Title:"Burned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Paralyzed",Title:"Paralyzed",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Asleep",Title:"Asleep",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Frozen",Title:"Frozen",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Stealth Rock",Title:"Stealth Rock",Affect:"Team",Group:"Pointed Stones",Type:"Move",Game:"All"},{Name:"Spikes",Title:"Spikes",Affect:"Team",Info:"Layers of Spikes",Group:"Spikes",Values:"0,3",Type:"Move",Game:"All"},{Name:"Light Screen",Title:"Light Screen",Affect:"Team",Type:"Move",Game:"All"},{Name:"Reflect",Title:"Reflect",Affect:"Team",Type:"Move",Game:"All"},{Name:"Protect",Title:"Protect",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Leech Seed",Title:"Leech Seed",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Foresight",Title:"Foresight",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Helping Hand",Title:"Helping Hand",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Tailwind",Title:"Tailwind",Affect:"Team",Type:"Move",Game:"All"},{Name:"Aurora Veil",Title:"Aurora Veil",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Flower Gift",Title:"Flower Gift",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Friend Guard",Title:"Friend Guard",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Battery",Title:"Battery",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Power Spot",Title:"Power Spot",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Switching Out",Title:"Switching Out",Affect:"Pokémon",Info:"Is the Pokémon switching out?",Game:"All"},{Name:"Shadow",Title:"Shadow",Affect:"Pokémon",Info:"Is it a Shadow Pokémon?",Type:"Form",Game:"Colosseum"},{Name:"Sun",Title:"Sun",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Rain",Title:"Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Sand",Title:"Sand",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Snow",Title:"Snow",Affect:"All",Group:"Weather",Type:"Weather",Game:"Legend Arceus,Scarlet,Violet"},{Name:"Fog",Title:"Fog",Affect:"All",Group:"Weather",Type:"Weather",Game:"Diamond,Pearl,Platinum,Brilliant Diamond,Shining Pearl,Legend Arceus"},{Name:"Hail",Title:"Hail",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Harsh Sunlight",Title:"Harsh Sunlight",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Heavy Rain",Title:"Heavy Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Strong Winds",Title:"Strong Winds",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Shadowy Aura",Title:"Shadowy Aura",Affect:"All",Group:"Weather",Type:"Weather",Game:"XD"},{Name:"Electric Terrain",Title:"Electric Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Grassy Terrain",Title:"Grassy Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Misty Terrain",Title:"Misty Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Psychic Terrain",Title:"Psychic Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Magic Room",Title:"Magic Room",Affect:"All",Type:"Move",Game:"All"},{Name:"Wonder Room",Title:"Wonder Room",Affect:"All",Type:"Move",Game:"All"},{Name:"Gravity",Title:"Gravity",Affect:"All",Type:"Move",Game:"All"},{Name:"G-Max Steelsurge",Title:"G-Max Steelsurge",Affect:"Team",Group:"Sharp Steel",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Stonesurge",Title:"G-Max Stonesurge",Affect:"Team",Group:"Pointed Stones",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Volcalith",Title:"G-Max Volcalith",Affect:"Team",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Cannonade",Title:"G-Max Cannonade",Affect:"Team",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Vine Lash",Title:"G-Max Vine Lash",Affect:"Team",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Wildfire",Title:"G-Max Wildfire",Affect:"Team",Type:"Move",Game:"Sword,Shield"}]
		var conditions = [{Name:"Boulder Badge",Title:"Boulder Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Brock in Pewter City, it raises the the Attack stat stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Red,Blue,Yellow,FireRed,LeafGreen"},{Name:"Thunder Badge",Title:"Thunder Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it raises the Defense stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Thunder Badge",Title:"Thunder Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it raises the Speed stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Soul Badge",Title:"Soul Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Koga in Fuchsia City, it raises the Defense stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Soul Badge",Title:"Soul Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Koga in Fuchsia City, it raises the Speed stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Volcano Badge",Title:"Volcano Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Blaine on Cinnabar Island, it raises the Special stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Volcano Badge",Title:"Volcano Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Blaine on Cinnabar Island, it raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Zephyr Badge",Title:"Zephyr Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Falkner in Violet City, it raises the Attack stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Plain Badge",Title:"Plain Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Whitney in Goldenrod City, it raises the Speed stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Glacier Badge",Title:"Glacier Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Pryce in Mahogany Town, it raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Mineral Badge",Title:"Mineral Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Jasmine in Olivine City, it raises the Defense stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Stone Badge",Title:"Stone Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Roxanne in Rustboro City, it raises the Attack stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Dynamo Badge",Title:"Dynamo Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Wattson in Mauville City, it raises the Speed stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Balance Badge",Title:"Balance Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Norman in Petalburg City, it raises the Defense stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Mind Badge",Title:"Mind Badge",Affect:"Pokémon",Info:"Obtained from the Gym Leader Tate and Liza in Mossdeep City, it raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Group:"Badge",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Poisoned",Title:"Poisoned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Badly Poisoned",Title:"Badly Poisoned",Affect:"Pokémon",Info:"Turns of Bad Poison",Group:"Status",Values:"0,15",Type:"Status",Game:"All"},{Name:"Burned",Title:"Burned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Paralyzed",Title:"Paralyzed",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Asleep",Title:"Asleep",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Frozen",Title:"Frozen",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Stealth Rock",Title:"Stealth Rock",Affect:"Team",Group:"Pointed Stones",Type:"Move",Game:"All"},{Name:"Spikes",Title:"Spikes",Affect:"Team",Info:"Layers of Spikes",Group:"Spikes",Values:"0,3",Type:"Move",Game:"All"},{Name:"Light Screen",Title:"Light Screen",Affect:"Team",Type:"Move",Game:"All"},{Name:"Reflect",Title:"Reflect",Affect:"Team",Type:"Move",Game:"All"},{Name:"Protect",Title:"Protect",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Leech Seed",Title:"Leech Seed",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Foresight",Title:"Foresight",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Helping Hand",Title:"Helping Hand",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Tailwind",Title:"Tailwind",Affect:"Team",Type:"Move",Game:"All"},{Name:"Aurora Veil",Title:"Aurora Veil",Affect:"Pokémon",Type:"Move",Game:"All"},{Name:"Flower Gift",Title:"Flower Gift",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Friend Guard",Title:"Friend Guard",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Battery",Title:"Battery",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Power Spot",Title:"Power Spot",Affect:"Team",Type:"Ability",Game:"All"},{Name:"Switching Out",Title:"Switching Out",Affect:"Pokémon",Info:"Is the Pokémon switching out?",Game:"All"},{Name:"Shadow",Title:"Shadow",Affect:"Pokémon",Info:"Is it a Shadow Pokémon?",Type:"Form",Game:"Colosseum"},{Name:"Sun",Title:"Sun",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Rain",Title:"Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Sand",Title:"Sand",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Snow",Title:"Snow",Affect:"All",Group:"Weather",Type:"Weather",Game:"Legend Arceus,Scarlet,Violet"},{Name:"Fog",Title:"Fog",Affect:"All",Group:"Weather",Type:"Weather",Game:"Diamond,Pearl,Platinum,Brilliant Diamond,Shining Pearl,Legend Arceus"},{Name:"Hail",Title:"Hail",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Harsh Sunlight",Title:"Harsh Sunlight",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Heavy Rain",Title:"Heavy Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Strong Winds",Title:"Strong Winds",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Shadowy Aura",Title:"Shadowy Aura",Affect:"All",Group:"Weather",Type:"Weather",Game:"XD"},{Name:"Electric Terrain",Title:"Electric Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Grassy Terrain",Title:"Grassy Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Misty Terrain",Title:"Misty Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Psychic Terrain",Title:"Psychic Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Magic Room",Title:"Magic Room",Affect:"All",Type:"Move",Game:"All"},{Name:"Wonder Room",Title:"Wonder Room",Affect:"All",Type:"Move",Game:"All"},{Name:"Gravity",Title:"Gravity",Affect:"All",Type:"Move",Game:"All"},{Name:"G-Max Steelsurge",Title:"G-Max Steelsurge",Affect:"Team",Group:"Sharp Steel",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Stonesurge",Title:"G-Max Stonesurge",Affect:"Team",Group:"Pointed Stones",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Volcalith",Title:"G-Max Volcalith",Affect:"Team",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Cannonade",Title:"G-Max Cannonade",Affect:"Team",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Vine Lash",Title:"G-Max Vine Lash",Affect:"Team",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Wildfire",Title:"G-Max Wildfire",Affect:"Team",Type:"Move",Game:"Sword,Shield"}]

		var battleVariation = [{Name:"Single Battle",TeamMin:"1",TeamMax:"1",OpponentMin:"1",OpponentMax:"1",Teams:"2",Game:"All"},{Name:"Double Battle",TeamMin:"2",TeamMax:"2",OpponentMin:"2",OpponentMax:"2",Teams:"2",Game:"Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Triple Battle",TeamMin:"3",TeamMax:"3",OpponentMin:"3",OpponentMax:"3",Teams:"2",Game:"Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire"},{Name:"Battle Royal",TeamMin:"1",TeamMax:"1",OpponentMin:"1",OpponentMax:"1",Teams:"4",Game:"Sun,Moon,Ultra Sun,Ultra Moon"},{Name:"SOS Battle",TeamMin:"1",TeamMax:"1",OpponentMin:"2",OpponentMax:"2",Teams:"2",Game:"Sun,Moon,Ultra Sun,Ultra Moon"},{Name:"Horde Encounter",TeamMin:"1",TeamMax:"1",OpponentMin:"5",OpponentMax:"5",Teams:"2",Game:"X,Y,Omega Ruby,Alpha Sapphire"},{Name:"Max Raid Battle",TeamMin:"4",TeamMax:"4",OpponentMin:"1",OpponentMax:"1",Teams:"2",Game:"Sword,Shield"},{Name:"Tera Raid Battle",TeamMin:"4",TeamMax:"4",OpponentMin:"1",OpponentMax:"1",Teams:"2",Game:"Scarlet,Violet"}]



		for(var q = 0; q < battleVariation.length; q++) {
			if (getApplicable(battleVariation[q]["Game"])) {
	
				var toolSectionContentDMGOptionsBattlesOption = document.createElement("option");
				toolSectionContentDMGOptionsBattlesOption.innerText = battleVariation[q]["Name"];
				toolSectionContentDMGOptionsBattlesOption.value = q;
				toolSectionContentDMGOptionsBattlesSelect.appendChild(toolSectionContentDMGOptionsBattlesOption)


				var keys = Object.keys(battleVariation[q])
				for(var r = 0; r < keys.length; r++) {
					if (keys[r] != "Name" && keys[r] != "Game") {
						toolSectionContentDMGOptionsBattlesOption.setAttribute(keys[r],battleVariation[q][keys[r]])
					}
				}
			}
		}

		toolSectionContentDMGOptionsBattlesSelect.addEventListener("change",buildDMG)
		buildDMG();
		DMGSetInfo();




		function buildDMG() {

			var battleVar = battleVariation[toolSectionContentDMGOptionsBattles.querySelector(":scope option[value='"+toolSectionContentDMGOptionsBattlesSelect.value+"']").value];
			
		
			toolSectionContentDMGOptionsContentTop.innerHTML = "";
			toolSectionContentDMGOptionsContentBottom.innerHTML = "";
			toolSectionContentDMGOptionsTitle.innerHTML = "";
			toolSectionContentDMGOptionsBottom.innerHTML = "";
			toolSectionContentDMGResult.innerHTML = "";


			for(var q = 0; q < battleVar["Teams"]; q++) {
				var teamName;

				if (q == 0) {
					teamName = "Player";
				}
				else if (battleVar["Teams"] == 2) {
					teamName = "Opponent";
				}
				else {
					teamName = "Opponent "+q;
				}

				var toolSectionContentDMGOptionsTitleTeam = document.createElement("select");
				toolSectionContentDMGOptionsTitleTeam.setAttribute("name",teamName.toLowerCase());
				toolSectionContentDMGOptionsTitle.appendChild(toolSectionContentDMGOptionsTitleTeam);
				toolSectionContentDMGOptionsTitleTeam.addEventListener("change",function(){var x = this.value; var z = this.getAttribute("name");var dvs = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div ul[name*='"+z+"']"); var dv = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div ul[name*='"+z+"'][value='"+x+"']"); for (var i = 0; i < dvs.length; i++) {dvs[i].style.display = "none";} dv.style.display="flex";})
			

				var resultTeams = document.createElement("span");
				resultTeams.setAttribute("name",teamName.toLowerCase());
				toolSectionContentDMGResult.appendChild(resultTeams);


				var toolSectionContentDMGOptionsContentBottomSide = document.createElement("span");
				toolSectionContentDMGOptionsContentBottomSide.setAttribute("name",teamName.toLowerCase())
				toolSectionContentDMGOptionsContentBottom.appendChild(toolSectionContentDMGOptionsContentBottomSide)
			
	

				
					$(toolSectionContentDMGResult).sortable({
						stop: function(e,ui) {
							DMGMatchPosition();
						},
						axis: "x",
            			scroll: false,
					});
				
				

				var toolSectionContentDMGOptionsContentTopContent = document.createElement("span");
				toolSectionContentDMGOptionsContentTopContent.setAttribute("name",teamName.toLowerCase())
				toolSectionContentDMGOptionsContentTop.appendChild(toolSectionContentDMGOptionsContentTopContent)
		


	



				var teamCount = 0;
				if (q == 0) {
					teamCount = battleVar["TeamMax"];
				}
				else {
					teamCount = battleVar["OpponentMax"];
				}

				for(var r = 0; r < teamCount; r++) {
					var t = r+1;
					var opt = document.createElement("option");
					if (q == 0) {
						opt.innerText = "Pokémon #"+t;
					}
					else {
						opt.innerText = teamName+" #"+t;
					}
					opt.setAttribute("value",t);
					toolSectionContentDMGOptionsTitleTeam.appendChild(opt);

					var toolSectionContentDMGOptionsContentTeam = document.createElement("ul");
					toolSectionContentDMGOptionsContentTeam.setAttribute("name",r);
					toolSectionContentDMGOptionsContentTopContent.appendChild(toolSectionContentDMGOptionsContentTeam)
					if (r == 0) {
						toolSectionContentDMGOptionsContentTeam.style.display = "flex";
					}

		

			
					var resultTeam = document.createElement("div");
					resultTeam.setAttribute("name",r);
					resultTeam.setAttribute("data-string","")

					if (q == 0) {
						resultTeam.setAttribute("title","Pokémon #"+t)
					}
					else {
						resultTeam.setAttribute("title",teamName+" #"+t)
					}
					
					resultTeams.appendChild(resultTeam);
					resultTeam.addEventListener("click",DMGSetActive);
	

					
		
		
					var resultTeamInactive = document.createElement("span");
					var resultTeamInactiveImport = document.createElement("b");
					var resultTeamActive = document.createElement("span");
					var resultTeamActiveTop = document.createElement("span");
					var resultTeamActiveBottom = document.createElement("span");
					var resultTeamActivePok = document.createElement("span");
					var resultTeamActivePokHealth = document.createElement("span");
					var resultTeamActivePokHealthPercentage = document.createElement("small");
					var resultTeamActivePokHealthWrap = document.createElement("span");
					var resultTeamActivePokHealthCurrent = document.createElement("small");
					var resultTeamActivePokHealthDash = document.createElement("small");
					var resultTeamActivePokHealthMax = document.createElement("small");

					var resultTeamActivePokImgWrap = document.createElement("span");
					var resultTeamActivePokImg = document.createElement("img");
					var resultTeamActivePokItem = document.createElement("img");
					var resultTeamActivePokName = document.createElement("span");
					var resultTeamActivePokNameText = document.createElement("small");
					var resultTeamActiveClose = document.createElement("figure");
					var resultTeamActiveCloseText = document.createElement("small");
					var resultTeamActiveExport = document.createElement("figure");
					var resultTeamActiveExportText = document.createElement("small");



					
					resultTeamInactiveImport.innerHTML = "<strong>+</strong>";
					resultTeamActivePok.setAttribute("name","pok");
					resultTeamActivePokHealth.setAttribute("name","hp");

					resultTeamActivePokHealthPercentage.innerText = "100%"
					resultTeamActivePokHealthPercentage.setAttribute("name","percentage");
					resultTeamActivePokHealthCurrent.innerText = "0"
					resultTeamActivePokHealthCurrent.setAttribute("name","current");
					resultTeamActivePokHealthDash.innerText = "/";
					resultTeamActivePokHealthMax.innerText = "0"
					resultTeamActivePokHealthMax.setAttribute("name","max");

					resultTeamActivePokImgWrap.setAttribute("name","imgs")
					resultTeamActivePokImg.setAttribute("name","img");
					resultTeamActivePokItem.setAttribute("name","item");
					resultTeamActivePokName.setAttribute("name","name");
					resultTeamActivePokNameText.innerText = "Bulbasaur"
					resultTeamActiveClose.setAttribute("name","close");
					resultTeamActiveExport.setAttribute("name","edit");
		

					resultTeamActivePokImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
					//resultTeamActivePokItem.setAttribute("onerror","this.src = ''; this.title = '';");
					resultTeamActiveCloseText.innerText = "❌";
					resultTeamActiveExportText.innerText = "➢";
					resultTeamActiveBottom.setAttribute("name","moves");


					resultTeam.appendChild(resultTeamInactive);
					resultTeamInactive.appendChild(resultTeamInactiveImport)
					resultTeam.appendChild(resultTeamActive);
					resultTeamActive.appendChild(resultTeamActiveTop);
					resultTeamActive.appendChild(resultTeamActiveBottom);
					resultTeamActiveTop.appendChild(resultTeamActivePok);
					resultTeamActiveTop.appendChild(resultTeamActivePok);
					resultTeamActiveTop.appendChild(resultTeamActiveClose);
					resultTeamActiveTop.appendChild(resultTeamActiveExport);
					resultTeamActiveClose.appendChild(resultTeamActiveCloseText);
					resultTeamActiveExport.appendChild(resultTeamActiveExportText);
					resultTeamActiveTop.appendChild(resultTeamActivePokHealth);
					resultTeamActivePokHealth.appendChild(resultTeamActivePokHealthPercentage);
					resultTeamActivePokHealth.appendChild(resultTeamActivePokHealthWrap);
					resultTeamActivePokHealthWrap.appendChild(resultTeamActivePokHealthCurrent);
					resultTeamActivePokHealthWrap.appendChild(resultTeamActivePokHealthDash);
					resultTeamActivePokHealthWrap.appendChild(resultTeamActivePokHealthMax);
					resultTeamActivePok.appendChild(resultTeamActivePokName);
					resultTeamActivePokName.appendChild(resultTeamActivePokNameText);
					resultTeamActivePok.appendChild(resultTeamActivePokImgWrap);
					resultTeamActivePokImgWrap.appendChild(resultTeamActivePokImg);
					resultTeamActivePokImgWrap.appendChild(resultTeamActivePokItem);
					resultTeamInactiveImport.addEventListener("click",DMGSetDataString);
					resultTeamActiveClose.addEventListener("click",DMGRemoveDataString);
					resultTeamActiveExport.addEventListener("click",DMGExportDataString);

					for (var m = 0; m < 4; m++) {
						var resultTeamActiveMove = document.createElement("b");
						var resultTeamActiveMoveText = document.createElement("small");
						resultTeamActiveMove.setAttribute("name",m);
						resultTeamActiveMove.setAttribute("type","invert");
						resultTeamActiveBottom.appendChild(resultTeamActiveMove)
						resultTeamActiveMove.appendChild(resultTeamActiveMoveText)
						resultTeamActiveMove.addEventListener("click",function(){var tar = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div:last-child > span select");if (this.firstChild.innerText != "") {tar.style.color = "var(--type"+getMoveData(this.firstChild.innerText,"Type")+")"; tar.value = this.firstChild.innerText; DMGSetInfo();DMGCalcStart();}})
					}
	
		


 				}
			}

			var divsTop = toolSectionContentDMGOptionsContentTop.querySelectorAll(":scope ul");
			var divsBottom = toolSectionContentDMGOptionsContentBottom.querySelectorAll(":scope > *");
			
			for(var d = 0; d < divsTop.length; d++) {
				var base = divsTop[d];

				var reset = document.createElement("figure");
				var resetText = document.createElement("h6");
				resetText.innerText = "❌";
				reset.setAttribute("type","scale");
				base.appendChild(reset)
				reset.appendChild(resetText)
				reset.addEventListener("click",function(){var base = findUpTag(this,"UL");DMGRemoveDataString(document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+base.parentElement.getAttribute("name")+"'] > div[name='"+base.getAttribute("name")+"']"))})

				var pok = document.createElement("li");
				var pokTitle = document.createElement("h6");
				var pokSelect = document.createElement("select");
				pokTitle.innerText = "Pokémon";
				pok.setAttribute("name","pokémon");
				base.appendChild(pok);
				pok.appendChild(pokTitle);
				pok.appendChild(pokSelect);


				//pokSelect.addEventListener("change",function(){if(this.value == ""){DMGRemoveDataString(findUpTag(this,"UL"))}});
				pokSelect.addEventListener("change",DMGCalcPokStats);
				pokSelect.addEventListener("change",DMGSaveData);
				pokSelect.addEventListener("change",DMGPokSpecific);
				pokSelect.addEventListener("change",DMGSetChange);
				pokSelect.addEventListener("change",DMGCalcStart);


				var poks = [];
				if (poks[0] != "") {
					poks.unshift("");
				}
				for(var e = 0; e < finaldataPokémon.length; e++) {
					if (finaldataPokémon[e][JSONPath_Reference] == "true") {
						poks.push(getPokémonName(e))

					}
				}

				for(var e = 0; e < poks.length; e++) {
					var pokOption = document.createElement("option");
					pokOption.setAttribute("value",poks[e])
					pokOption.innerText = poks[e];
					pokSelect.appendChild(pokOption);
				}


				var maxHP = document.createElement("li");
				var maxHPRange = document.createElement("input");
				maxHPRange.setAttribute("type","range");
				maxHPRange.setAttribute("name","range-maxhp");
				maxHPRange.setAttribute("id","range-maxhp");
				maxHPRange.setAttribute("min","1");
				maxHPRange.setAttribute("max","1");
				maxHPRange.setAttribute("step","1");
				maxHPRange.setAttribute("disabled","");
				maxHPRange.setAttribute("setDisable","");
				maxHP.setAttribute("name","hp")
				base.appendChild(maxHP);
				maxHP.appendChild(maxHPRange);

	
				var maxHPWrap = document.createElement("span");
				var maxHPWrapCurrent = document.createElement("input");
				var maxHPWrapDash = document.createElement("small");
				var maxHPWrapMax = document.createElement("input");
				maxHPWrapCurrent.setAttribute("name","current");
				maxHPWrapCurrent.setAttribute("type","number");
				maxHPWrapCurrent.setAttribute("min","1");
				maxHPWrapMax.setAttribute("name","max");
				maxHPWrapMax.setAttribute("type","number");
				maxHPWrapDash.innerText = "/";
				maxHP.appendChild(maxHPWrap)
				maxHPWrap.appendChild(maxHPWrapCurrent)
				maxHPWrap.appendChild(maxHPWrapDash)
				maxHPWrap.appendChild(maxHPWrapMax)

				maxHPWrapCurrent.addEventListener("change",iMinMax);
				maxHPWrapCurrent.addEventListener("change",function(){this.parentElement.parentElement.querySelector(":scope input[type='range']").value = this.value;});
				maxHPWrapCurrent.addEventListener("change",DMGCalcStart);
		
				maxHPRange.addEventListener("change",function(){this.parentElement.querySelector(":scope *[name='current']").value = this.value;});
				maxHPRange.addEventListener("change",DMGCalcStart);


				var stats = document.createElement("li");
				var statsTitle = document.createElement("h6");
				var statsWrap = document.createElement("span");
				statsTitle.innerText = "Stats";
				stats.setAttribute("name","stats")
				stats.classList.add("disabled");
				base.appendChild(stats);
				stats.appendChild(statsTitle);
				stats.appendChild(statsWrap);
		

				var inprange = 5
				for(var e = 0; e < inprange; e++) {
					var statsWrapCenter = document.createElement("span");
					statsWrap.appendChild(statsWrapCenter);
			

					var tit;
					var min;
					var max;
					var abbr;
					if (e == 0) {
						tit = "";
						abbr = "";
						min = 0;
						max = 0;
					}
					if (e == 1) {
						tit = "Individual Value";
						abbr = "IV";
						min = 0;
						max = 31;
						if (getApplicable("Red,Blue,Yellow,Gold,Silver,Crystal")) {
							max = 15;
						}
					}
					if (e == 2) {
						tit = "Effort Value";
						abbr = "EV";
						min = 0;
						max = 255;
					}
					if (e == 3) {
						tit = "Modifier";
						abbr = "Mod";
						min = -6;
						max = 6;
					}
					if (e == 4) {
						tit = "";
						abbr = "";
						min = 0;
						max = 0;
					}


					if (abbr != "") {
						statsWrapCenter.setAttribute("name",abbr)
					}

					var statsWrapTempInput = document.createElement("input");
					statsWrapTempInput.setAttribute("type","number");
					statsWrapTempInput.setAttribute("disabled","")
					statsWrapTempInput.setAttribute("min",0);
					statsWrapTempInput.setAttribute("max",0);
					statsWrapTempInput.setAttribute("value",abbr);
					statsWrapTempInput.setAttribute("placeholder",abbr);
					statsWrapCenter.appendChild(statsWrapTempInput);

					
	
					
					var statsTemp = [...Stats];

					statsTemp.push("Evasion");
					statsTemp.push("Accuracy");

					statsTemp = statsTemp.filter(e => e !== 'Total');

					for(var s = 0; s < statsTemp.length; s++) {

						if (e == 1 || e == 2 || e == 4) {
							if (statsTemp[s] == "Evasion" || statsTemp[s] == "Accuracy") {
								break;
							}
						}
						

						var statsWrapInput = document.createElement("input");
						statsWrapInput.setAttribute("type","number");
						statsWrapInput.setAttribute("min",min);
						statsWrapInput.setAttribute("max",max);
						statsWrapInput.setAttribute("name",statsTemp[s]);
						statsWrapInput.setAttribute("title",tit+"\n"+statsTemp[s]);
						statsWrapInput.setAttribute("onblur","this.placeholder='0'");
						statsWrapInput.setAttribute("onfocus","this.placeholder=''");
						if (e == 0 || e == 4) {
							statsWrapInput.setAttribute("disabled","");
						}

						if (e == 3) {
							if (s == 0) {
								statsWrapInput.setAttribute("disabled","");
								statsWrapInput.style.opacity = "0";
								statsWrapInput.style.pointerEvents = "none";
							}
						}

						if (e == 0) {
							statsWrapInput.setAttribute("placeholder",statsTemp[s]+":");
						}
						else {
							statsWrapInput.setAttribute("placeholder","0");
							
						}
						if (e == 4) {
							statsWrapInput.value = 0;
						}
					
						statsWrapCenter.appendChild(statsWrapInput);
						statsWrapInput.addEventListener("change",iMinMax);
						statsWrapInput.addEventListener("change",DMGCalcPokStats);
						statsWrapInput.addEventListener("change",DMGSaveData);
						statsWrapInput.addEventListener("change",DMGCalcStart);

						statsWrapInput.addEventListener("change",function(){if (this.value == 0) {this.value = ""}});

						if (e < 3) {
							statsWrapInput.style.color = "var(--stat"+statsTemp[s]+")"
						}
					}
				}
		

				var move = document.createElement("li");
				var moveTitle = document.createElement("h6");
				var moveWrap = document.createElement("span");
				move.setAttribute("name","moves");
				moveTitle.innerText = "Moves"
				base.appendChild(move)
				move.appendChild(moveTitle);
				move.appendChild(moveWrap);
		
		
				for (var m = 0; m < 4; m++) {
					var moveSelect = document.createElement("select");
					moveWrap.appendChild(moveSelect)
					moveSelect.setAttribute("name",m)
					moveSelect.setAttribute("disabled","");
					moveSelect.setAttribute("setDisable","");
					moveSelect.addEventListener("change",function(){var x = getMoveData(this.value,"Type"); if (x == undefined) {this.style.removeProperty("color")} else {this.style.color = "var(--type"+x+")"}})
					moveSelect.addEventListener("change",DMGCalcPokStats);
					moveSelect.addEventListener("change",DMGSaveData);
					moveSelect.addEventListener("change",DMGCalcStart);
					moveSelect.addEventListener("change",DMGSetChange);

					var movesTemp = [...tempMoves];
					movesTemp.sort();
					if (!movesTemp[0].includes("#")) {
						movesTemp.unshift("Move #"+(m+1));
					}
					for(var n = 0; n < movesTemp.length; n++) {
						var moveOption = document.createElement("option");
						moveOption.value = movesTemp[n];
						moveOption.innerText = movesTemp[n];
						moveSelect.appendChild(moveOption)
						if (n != 0) {
							moveOption.style.background = "var(--type"+getMoveData(movesTemp[n],"Type")+")";
						}
					}
				}
				


				if (Natures.length > 0) {
					var nature = document.createElement("li");
					var natureTitle = document.createElement("h6");
					var natureSelect = document.createElement("select");

					nature.setAttribute("name","nature");
					natureTitle.innerText = "Nature"

					base.appendChild(nature)
					nature.appendChild(natureTitle);
					nature.appendChild(natureSelect)
					natureSelect.setAttribute("disabled","");
					natureSelect.setAttribute("setDisable","");

					natureSelect.addEventListener("change",function(){this.parentElement.parentElement.querySelector(":scope > *[name='stats'] > *:last-child > *:last-child").setAttribute("name",this.value)})
					natureSelect.addEventListener("change",DMGCalcPokStats);
					natureSelect.addEventListener("change",DMGSaveData);
					natureSelect.addEventListener("change",DMGCalcStart);
					
					var naturesTemp = Natures;
					if (naturesTemp[0] != "") {
						naturesTemp.unshift("");
					}
					for(var n = 0; n < naturesTemp.length; n++) {
						var natureOption = document.createElement("option");
						natureOption.value = naturesTemp[n];
						natureOption.innerText = naturesTemp[n];
						natureSelect.appendChild(natureOption)
					}
				}


				var level = document.createElement("li");
				level.setAttribute("name","level");
				base.appendChild(level)

				var levelTitle = document.createElement("h6");
				var levelInput = document.createElement("input");

				levelTitle.innerText = "Level";
				levelInput.setAttribute("type","number");
				levelInput.setAttribute("min","1");
				levelInput.setAttribute("max","100");
				levelInput.setAttribute("placeholder","1");
				levelInput.setAttribute("onblur","this.placeholder='1'");
				levelInput.setAttribute("onfocus","this.placeholder=''");
				levelInput.value = 1;
				levelInput.setAttribute("disabled","");
				levelInput.setAttribute("setDisable","");

				level.appendChild(levelTitle)
				level.appendChild(levelInput)

				levelInput.addEventListener("change",iMinMax);
				levelInput.addEventListener("change",DMGCalcPokStats);
				levelInput.addEventListener("change",DMGSaveData);
				levelInput.addEventListener("change",DMGCalcStart);




				if (Gender == true) {

					var gender = document.createElement("li");
					var genderTitle = document.createElement("h6");
					var genderSelect = document.createElement("select");
					
					gender.setAttribute("name","gender");
					genderTitle.innerText = "Gender"

					base.appendChild(gender)
					gender.appendChild(genderTitle);
					gender.appendChild(genderSelect)

					genderSelect.setAttribute("disabled","");
					genderSelect.setAttribute("setDisable","");


					genderSelect.addEventListener("change",DMGCalcPokStats);
					genderSelect.addEventListener("change",DMGSaveData);
					genderSelect.addEventListener("change",DMGCalcStart);

					genderSelect.addEventListener("change",function(){this.style.removeProperty("color"); if (this.value == "♂") {this.style.color == "blue";}else if (this.value == "♀") {this.style.color == "red";}});
		
			
					var possibleGender = [];
		
					for (var q = 0; q < possibleGender.length; q++) {
						var option = document.createElement("option");
						option.innerText = possibleGender[q];
						option.value = possibleGender[q];
						genderSelect.appendChild(option)
					}
				}
				if (Friendship) {
					var friendship = document.createElement("li");
					friendship.setAttribute("name","friendship");
					base.appendChild(friendship)

					var friendshipTitle = document.createElement("h6");
					var friendshipInputWrap = document.createElement("span");
					var friendshipInput = document.createElement("input");
					friendshipTitle.innerText = "Friendship";

					friendshipInput.setAttribute("type","number");
					friendshipInput.setAttribute("min","0");
					friendshipInput.setAttribute("max","255");
					friendshipInput.setAttribute("placeholder","0");
					friendshipInput.setAttribute("onblur","this.placeholder='0'");
					friendshipInput.setAttribute("onfocus","this.placeholder=''");
					friendshipInput.value = 0;

					friendshipInput.setAttribute("disabled","");
					friendshipInput.setAttribute("setDisable","");

					friendshipInput.addEventListener("change",iMinMax);
					friendshipInput.addEventListener("change",DMGCalcPokStats);
					friendshipInput.addEventListener("change",DMGSaveData);
					friendshipInput.addEventListener("change",DMGCalcStart);

					friendship.appendChild(friendshipTitle)
					friendship.appendChild(friendshipInputWrap)
					friendshipInputWrap.appendChild(friendshipInput)
					
				}

				if (Ability.length > 0) {
					var ability = document.createElement("li");
					var abilityTitle = document.createElement("h6");
					var abilitySelect = document.createElement("select");

					ability.setAttribute("name","ability");
					abilityTitle.innerText = "Ability"

					base.appendChild(ability)
					ability.appendChild(abilityTitle);
					ability.appendChild(abilitySelect)

					abilitySelect.setAttribute("disabled","");
					abilitySelect.setAttribute("setDisable","");

					abilitySelect.addEventListener("change",DMGCalcPokStats);
					abilitySelect.addEventListener("change",DMGSaveData);
					abilitySelect.addEventListener("change",DMGCalcStart);
			
					var abilities = [];
					if (abilities[0] != "") {
						abilities.unshift("");
					}
					for (var q = 0; q < abilities.length; q++) {
						if (abilities[q] != undefined) {
							var option = document.createElement("option");
							option.innerText = abilities[q];
							option.value = abilities[q];
							abilitySelect.appendChild(option)
						}
					}

				}
			


				if (HeldItem == true) {
					var item = document.createElement("li");
					item.setAttribute("name","item");
					base.appendChild(item)

					var itemTitle = document.createElement("h6");
					var itemImgWrap = document.createElement("span");
					var itemSelect = document.createElement("select");
					var itemImg = document.createElement("img");
					itemTitle.innerText = "Item";

					itemImg.setAttribute("type","number");
					itemImg.setAttribute("min","0");
					itemImg.setAttribute("max","100");
					itemImg.setAttribute("placeholder","0");
					itemImg.setAttribute("onblur","this.placeholder='0'");
					itemImg.setAttribute("onfocus","this.placeholder=''");

					item.appendChild(itemTitle)
					item.appendChild(itemSelect)
					item.appendChild(itemImgWrap)
					itemImgWrap.appendChild(itemImg)

					itemSelect.setAttribute("disabled","");
					itemSelect.setAttribute("setDisable","");

					itemSelect.addEventListener("change",DMGCalcPokStats);
					itemSelect.addEventListener("change",DMGSaveData);
					itemSelect.addEventListener("change",DMGCalcStart);
					itemSelect.addEventListener("change",DMGSetChange);

					var items = []
					if (items[0] != "") {
						items.unshift("");
					}

					for (var q = 0; q < items.length; q++) {
						var option = document.createElement("option");
						option.innerText = items[q];
						option.value = items[q];
						itemSelect.appendChild(option)
					}
			
				}
		




				for(var c = 0; c < conditions.length; c++) {
					var check = getApplicable(conditions[c]["Game"]);
					
					if (conditions[c]["Type"] == "Move" || conditions[c]["Type"] == "Ability") {
						var exist = document.querySelector("#contain > div#"+conditions[c]["Type"].toLowerCase()+" > section[name='list'] ol label[data-title='"+conditions[c]["Title"].toLowerCase()+"']");
						
						if (exist  != undefined) {
							check = true;
						}
						else {
							check = false;
						}
					}
				
					if (check) {
						var nameTemp = [];

						if (conditions[c]["Name"] != undefined) {
							nameTemp.push(conditions[c]["Name"])
						}
						if (conditions[c]["Group"] == undefined) {
							if (conditions[c]["Type"] == "Ability" || conditions[c]["Type"] == "Move") {
								nameTemp.push("("+conditions[c]["Type"]+")")
							}
						}

						
						var appender;
						var check = true;

						if (conditions[c]["Affect"] == "All") {
							appender = toolSectionContentDMGOptionsBottom;
						}
						else if (conditions[c]["Affect"] == "Team") {
							if (d == 0) {
								appender = toolSectionContentDMGOptionsContentBottom.querySelector(":scope > *[name='player']");
							}
							else if (d > 0 && divsBottom.length == 2) {
								appender = toolSectionContentDMGOptionsContentBottom.querySelector(":scope > *[name='opponent']");
							}
							else {
								appender = toolSectionContentDMGOptionsContentBottom.querySelector(":scope > *[name='opponent "+d+"']");
							}
							
						}
						else {
							appender = base;
						}
			
						if (conditions[c]["Affect"] == "All") {
							check = false
						}
						if (conditions[c]["Affect"] == "Team" && d+1 > divsBottom.length) {
							check = false
						}
				
	
						if (check) {
							if (conditions[c]["Group"] != undefined) {
								var tar = appender.querySelector(":scope > *[name='"+conditions[c]["Group"]+"-Group"+"']");
					
								if (tar == undefined) {
									var condition = document.createElement("li");
									var conditionTitle = document.createElement("h6");
									var conditionWrap = document.createElement("span");
									condition.setAttribute("name",conditions[c]["Group"]+"-Group");
									conditionTitle.innerText = conditions[c]["Group"];
									appender.appendChild(condition);
									condition.appendChild(conditionTitle);
									condition.appendChild(conditionWrap);
								}

								tar = appender.querySelector(":scope > *[name='"+conditions[c]["Group"]+"-Group"+"'] > *:last-child");

		
								if (tar != undefined) {
									var cond = document.createElement("li");
									tar.appendChild(cond)

									cond.setAttribute("name",conditions[c]["Name"]);
									
									var conditionInput = document.createElement("input");
									var conditionLabel = document.createElement("label");
									var conditionLabelText = document.createElement("small");	
									conditionLabelText.innerText = nameTemp.join(" ");
									conditionInput.setAttribute("type","checkbox");
									conditionInput.setAttribute("name","condition-checkbox");
									conditionInput.setAttribute("id",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
									conditionLabel.setAttribute("for",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
									cond.appendChild(conditionInput)
									cond.appendChild(conditionLabel)
									conditionLabel.appendChild(conditionLabelText)
									if (conditions[c]["Group"] != "Badge") {
										conditionInput.addEventListener("change",function(){onlyOneInput(this.parentElement.parentElement.querySelectorAll(":scope input"),this)})
									}
									conditionInput.addEventListener("change",DMGCalcPokStats);
									conditionInput.addEventListener("change",DMGSaveData);
									conditionInput.addEventListener("change",DMGCalcStart);
									
									if (conditions[c]["Values"] != undefined) {
										conditionInput.setAttribute("type","number");
										conditionInput.setAttribute("min",conditions[c]["Values"].split(",")[0]);
										conditionInput.setAttribute("max",conditions[c]["Values"].split(",")[1]);
										conditionInput.addEventListener("change",iMinMax);
									}

									if (conditions[c]["Affect"] == "Pokémon") {
										conditionInput.setAttribute("disabled","");
									}
								}
							}
							else {
								var condition = document.createElement("li");
								appender.appendChild(condition)

								condition.setAttribute("name",conditions[c]["Name"]);

								var conditionInput = document.createElement("input");
								var conditionLabel = document.createElement("label");
								var conditionLabelText = document.createElement("small");	
								conditionLabelText.innerText = nameTemp.join(" ");
								conditionInput.setAttribute("type","checkbox");
								conditionInput.setAttribute("name","condition-checkbox");
								conditionInput.setAttribute("id",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
								conditionLabel.setAttribute("for",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
								condition.appendChild(conditionInput)
								condition.appendChild(conditionLabel)
								conditionLabel.appendChild(conditionLabelText)
								conditionInput.addEventListener("change",DMGCalcPokStats);
								conditionInput.addEventListener("change",DMGSaveData);
								conditionInput.addEventListener("change",DMGCalcStart);
					
								
								

								if (conditions[c]["Values"] != undefined) {
									conditionInput.setAttribute("type","number");
									conditionInput.setAttribute("min",conditions[c]["Values"].split(",")[0])
									conditionInput.setAttribute("max",conditions[c]["Values"].split(",")[1])
									conditionInput.addEventListener("change",iMinMax)
								}

								if (conditions[c]["Affect"] == "Pokémon") {
									conditionInput.setAttribute("disabled","");
								}
		
							}
						}
					}
				}
			}


			for(var c = 0; c < conditions.length; c++) {
				var check = getApplicable(conditions[c]["Game"]);
				
				if (conditions[c]["Type"] == "Move" || conditions[c]["Type"] == "Ability") {
					var exist = document.querySelector("#contain > div#"+conditions[c]["Type"].toLowerCase()+" > section[name='list'] ol label[data-title='"+conditions[c]["Title"].toLowerCase()+"']");
					
					if (exist  != undefined) {
						check = true;
					}
					else {
						check = false;
					}
				}
			
				if (check) {
					var nameTemp = [];

					if (conditions[c]["Name"] != undefined) {
						nameTemp.push(conditions[c]["Name"])
					}
					if (conditions[c]["Group"] == undefined) {
						if (conditions[c]["Type"] == "Ability" || conditions[c]["Type"] == "Move") {
							nameTemp.push("("+conditions[c]["Type"]+")")
						}
					}

					
					var appender = toolSectionContentDMGOptionsBottom;
					var check = true;

					if (conditions[c]["Affect"] != "All") {
						check = false;
					}
			

					if (check) {
						if (conditions[c]["Group"] != undefined) {
							var tar = appender.querySelector(":scope > *[name='"+conditions[c]["Group"]+"-Group"+"']");
				
							if (tar == undefined) {
								var condition = document.createElement("li");
								var conditionTitle = document.createElement("h6");
								var conditionWrap = document.createElement("span");
								condition.setAttribute("name",conditions[c]["Group"]+"-Group");
								conditionTitle.innerText = conditions[c]["Group"];
								appender.appendChild(condition);
								condition.appendChild(conditionTitle);
								condition.appendChild(conditionWrap);
							}

							tar = appender.querySelector(":scope > *[name='"+conditions[c]["Group"]+"-Group"+"'] > *:last-child");

	
							if (tar != undefined) {
								var cond = document.createElement("li");
								var conditionInput = document.createElement("input");
								var conditionLabel = document.createElement("label");
								var conditionLabelText = document.createElement("small");	

								cond.setAttribute("name",conditions[c]["Name"]);

								conditionLabelText.innerText = nameTemp.join(" ");
								conditionInput.setAttribute("type","checkbox");
								conditionInput.setAttribute("name","condition-checkbox");
								conditionInput.setAttribute("id",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
								conditionLabel.setAttribute("for",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");

								tar.appendChild(cond)
								cond.appendChild(conditionInput)
								cond.appendChild(conditionLabel)
								conditionLabel.appendChild(conditionLabelText)
								if (conditions[c]["Group"] != "Badge") {
									conditionInput.addEventListener("change",function(){onlyOneInput(this.parentElement.parentElement.querySelectorAll(":scope input"),this)})
								}
							}
						}
						else {
							var condition = document.createElement("li");
							var conditionInput = document.createElement("input");
							var conditionLabel = document.createElement("label");
							var conditionLabelText = document.createElement("small");	
		
							cond.setAttribute("name",conditions[c]["Name"]);

							conditionLabelText.innerText = nameTemp.join(" ");
							conditionInput.setAttribute("type","checkbox");
							conditionInput.setAttribute("name","condition-checkbox");
							conditionInput.setAttribute("id",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
							conditionLabel.setAttribute("for",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
	
							appender.appendChild(condition)
							condition.appendChild(conditionInput)
							condition.appendChild(conditionLabel)
							conditionLabel.appendChild(conditionLabelText)
						}
					}
				}
			}
			

			var randomPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div > span > input[type='range']");
			var randomMinText = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div > span > *[name='min']");
			var randomMaxText = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div > span > *[name='max']");
			if (Generation == 1 || Generation == 2) {
				randomPath.setAttribute("min","215");
				randomPath.setAttribute("max","255");
				randomPath.setAttribute("step","1");
				randomPath.value = randomPath.getAttribute("min");
				randomMinText.innerText = 1;
				randomMaxText.innerText =  randomPath.getAttribute("max")-randomPath.getAttribute("min");
			}
			if (Generation >= 3) {
				randomPath.setAttribute("min","85");
				randomPath.setAttribute("max","100");
				randomPath.setAttribute("step","1");
				randomPath.value = randomPath.getAttribute("min");
				randomMinText.innerText = 1;
				randomMaxText.innerText =  randomPath.getAttribute("max")-randomPath.getAttribute("min");
			}


			DMGSetInfo();
			DMGSetPossible();

			
		}



		function DMGCalcStart() {

			var check = true;

			// Battle
			var battle = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:first-child > span:first-child > select");

			// All
			var allbase = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name] ul[name]");

			// User
			var user = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='player'] > div.active");
			var userid = user.getAttribute("name");
			var userbase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='player'] ul[name='"+userid+"']");
			var userPokémonPath = userbase.querySelector(":scope *[name='pokémon'] select");
			var userModPath = userbase.querySelectorAll(":scope *[name='stats'] > span > span[name='Mod'] input:not(:first-child)");
			var userStatsPath = userbase.querySelectorAll(":scope *[name='stats'] > span > span:last-child input:not(:first-child)");
			var userLevelPath = userbase.querySelector(":scope *[name='level'] input");
			var userItemPath = userbase.querySelector(":scope *[name='item'] select");
			var userItemCountPath = userbase.querySelector(":scope *[name='item'] input[type='number']");
			var userAbilityPath = userbase.querySelector(":scope *[name='ability'] select");
			var userHPInputPath = userbase.querySelector(":scope *[name='hp'] input");
			var userStatusLeechSeedPath = targetbase.querySelector(":scope *[name='Leech Seed'] input");
			var userStatusPoisonPath = userbase.querySelector(":scope *[name='Poisoned'] input");
			var userStatusBadPoisonPath = userbase.querySelector(":scope *[name='Badly Poisoned'] input");
			var userStatusBurnPath = userbase.querySelector(":scope *[name='Burned'] input");
			var userStatusParalyzePath = userbase.querySelector(":scope *[name='Paralyzed'] input");
			var userStatusAsleepPath = userbase.querySelector(":scope *[name='Asleep'] input");
			var userStatusFrozenPath = userbase.querySelector(":scope *[name='Frozen'] input");
			var userHelpingHandPath = userbase.querySelector(":scope *[name='Helping Hand'] input");
			var userFlashFirePath = userbase.querySelector(":scope *[name='Flash Fire'] input");
			var userBadgePath = userbase.querySelectorAll(":scope *[name='Badge-Group'] input");
			var userLaserFocusPath = userbase.querySelector(":scope *[name='Laser Focus'] input");
			var userTypes = returnData(getPokémonInt(userPokémonPath.value),"Type","");



			// Target
			var target = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name] > div.active.target");

			// Weather
			var weatherPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group']");
			var weatherInputsPath = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] input");
			var weatherHarshSunlightPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] *[name='Harsh Sunlight'] input");
			var weatherRainPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] *[name='Rain'] input");
			var weatherSandstormPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] *[name='Sandstorm'] input");
			var weatherSnowPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] *[name='Snow'] input");
			var weatherFogPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] *[name='Fog'] input");
			var weatherHailPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] *[name='Hail'] input");
			var weatherExtremelyHarshSunlightPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] *[name='Extremely Harsh Sunlight'] input");
			var weatherHeavyRainPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] *[name='Heavy Rain'] input");
			var weatherStrongWindsPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] *[name='Strong Winds'] input");
			var weatherShadowyAuraPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Weather-Group'] *[name='Shadowy Aura'] input");

			// Move
			var movePath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div:last-child > span select");
			var moveCount = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div:last-child > span:first-child input[type='number']");
			var moveSpecific = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div:last-child > span:first-child input[type='checkbox']");
			var moveMeFirst = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div:last-child > span input[name='Me First']");
			var powerPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] *[name='power']");
			var accuracyPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] *[name='accuracy']");
			var criticalPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div:first-child input[type='checkbox']")
			var randomPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div > span > input[type='range']");


			var moveCategory = getMoveData(movePath.value,"Category");
			var moveType = getMoveData(movePath.value,"Type");


			DMGCalcApply(user,undefined,undefined,undefined,"Reset");
			DMGCalcApply(target,undefined,undefined,undefined,"Reset");


			if (user == undefined || target == undefined) {
				check = false;
			}

			if (check) {
				for (var i = 0; i < target.length; i++) {

					// Paths

					var targetteam = target[i].parentElement.getAttribute("name");
					var targetid = target[i].getAttribute("name");
					var targetbase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+targetteam+"'] ul[name='"+targetid+"']");
					var targetteambase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div ol[name='team'] > span[name='"+targetteam+"']");
					var tarPokémonPath = targetbase.querySelector(":scope *[name='pokémon'] select");
					var tarModPath = targetbase.querySelectorAll(":scope *[name='stats'] > span > span[name='Mod'] input:not(:first-child)");
					var tarStatsPath = targetbase.querySelectorAll(":scope *[name='stats'] > span > span:last-child input:not(:first-child)");
					var tarItemPath = targetbase.querySelector(":scope *[name='item'] select");
					var tarAbilityPath = targetbase.querySelector(":scope *[name='ability'] select");
					var tarHPInputPath = targetbase.querySelector(":scope *[name='hp'] input");
					var tarStatusLeechSeedPath = targetbase.querySelector(":scope *[name='Leech Seed'] input");
					var tarStatusPoisonPath = targetbase.querySelector(":scope *[name='Poisoned'] input");
					var tarStatusBadPoisonPath = targetbase.querySelector(":scope *[name='Badly Poisoned'] input");
					var tarStatusBurnPath = targetbase.querySelector(":scope *[name='Burned'] input");
					var tarStatusParalyzePath = targetbase.querySelector(":scope *[name='Paralyzed'] input");
					var tarStatusAsleepPath = targetbase.querySelector(":scope *[name='Asleep'] input");
					var tarStatusFrozenPath = targetbase.querySelector(":scope *[name='Frozen'] input");

					var tarProtectPath = targetbase.querySelector(":scope *[name='Protect'] input");
					var tarTypes = returnData(getPokémonInt(tarPokémonPath.value),"Type","");

					var tarHPCurrentPath = target[i].querySelector(":scope *[name='hp'] *[name='current']");
					var tarHPMaxPath = target[i].querySelector(":scope *[name='hp'] *[name='max']");
					var tarHPPercentagePath = target[i].querySelector(":scope *[name='hp'] *[name='percentage']");

					var tarChargePath = targetbase.querySelector(":scope *[name='Charge'] input");
					var tarForestsCursePath = targetbase.querySelector(":scope *[name='Forests Curse'] input");
					var tarTrickOrTreatPath = targetbase.querySelector(":scope *[name='Trick or Treat'] input");
					var tarGlaiveRushPath = targetbase.querySelector(":scope *[name='Glaive Rush'] input");

					var tarLightScreenPath = targetteambase.querySelector(":scope *[name='Light Screen'] input");
					var tarReflectPath = targetteambase.querySelector(":scope *[name='Reflect'] input");
					var tarLuckyChantPath = targetteambase.querySelector(":scope *[name='Lucky Chant'] input");
					
					var calculation = 0;

					if (Generation == 1) {
						// Defaults
						var Immune = false;
						var Level = 1;
						var Critical = 1;
						var Attack = 0;		
						var Defense = 0;
						var NoModAttack = 0;
						var NoModDefense = 0;
						var Power = 0;
						var STAB = 1;
						var Type1 = 1;
						var Type2 = 1;
						var random = 1;



						Level = parseInt(userLevelPath.value);
						if (criticalPath.checked) {
							Critical = 2;
						}
						Power = parseInt(powerPath.innerText);
						if (moveCategory == "Physical") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Attack") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Defense") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						else if (moveCategory == "Special") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Special") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Special") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}

						Level = parseInt(Level);
						Critical = parseInt(Critical);
						Attack = parseInt(Attack);
						Defense = parseInt(Defense);
						Power = parseInt(Power);
						STAB = parseInt(STAB);
						Type1 = parseInt(Type1);
						Type2 = parseInt(Type2);
						random = parseInt(random);

						if (Critical == 2) {
							Attack = parseInt(NoModAttack);
							Defense = parseInt(NoModDefense);
						}

						random = randomPath.value/255;


						if (Attack > 255 || Defense > 255) {
							Attack = Math.floor(Attack/4);
							Defense = Math.floor(Defense/4);
						}

						if (userTypes[0] == moveType || userTypes[1] == moveType) {
							STAB = 1.5;
						}

						var used = []
				
						if (tarTypes.length > 0) {
							for (var u = 0; u < Types.length; u++) {
								if (moveType == Types[u]) {
									var typeadv = returnTypeAdvantage(Types[u],"Attacking");

									if (typeadv[2].includes(tarTypes[0].toUpperCase())) {
										used.push(tarTypes[0].toUpperCase())
										Type1 = 2;
									}
									if (typeadv[1].includes(tarTypes[0].toUpperCase())) {
										used.push(tarTypes[0].toUpperCase())
										Type1 = 0.5;
									}
									if (typeadv[3].includes(tarTypes[0].toUpperCase())) {
										Immune = true;
									}

									if (tarTypes[1] != undefined) {
										if (typeadv[2].includes(tarTypes[1].toUpperCase())) {
											if (!used.includes(tarTypes[1].toUpperCase())) {
												Type2 = 2;
											}
											Type1 = 2;
										}
										if (typeadv[1].includes(tarTypes[1].toUpperCase())) {
											if (!used.includes(tarTypes[1].toUpperCase())) {
												Type2 = 0.5;
											}
											Type1 = 0.5;
										}
										if (typeadv[3].includes(tarTypes[1].toUpperCase())) {
											Immune = true;
										}
									}
								}
							}
						}
		

						calculation = ((((((2*Level*Critical)/5)+2)*Power*(Attack/Defense))/50)+2);


						//calculation = calculation+(Math.floor((calculation/2)*STAB));
						//calculation = calculation+(Math.floor(calculation*STAB));
						calculation = calculation*STAB;
						calculation = calculation*Type1*Type2;


						if (calculation == 1) {
							random = 1;
						}
					

						calculation = calculation*random;

						if (Immune) {
							calculation = 0;
						}
					}
					else if (Generation == 2) {
						// Defaults
						var Level = 1;
						var Power = 0;
						var Attack = 0;
						var Defense = 0;
						var Item = 1;
						var Critical = 1;
						var TripleKick = 1;
						var Badge = 1;
						var Weather = 1;
						var STAB = 1;
						var Type = 1;
						var MoveMod = 1;
						var random = 1;
						var DoubleDmg = 1;

						Level = userLevelPath.value;
						if (criticalPath.checked) {
							Critical = 2;
						}
						Power = powerPath.innerText;
						if (Power == "-") {
							Power = 0;
						}

						random = randomPath.value/255;
		

						if (moveCategory == "Physical") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Attack") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Defense") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						else if (moveCategory == "Special") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Sp. Def") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}

					
	


						

						if (movePath.value == "Flail" || movePath.value == "Reversal" || movePath.value == "Future Sight") {
							Critical = 1;
						}


				


						if (Critical == 2) {
							if (userModPath.length == tarModPath.length) {
								for(var u = 0; u < tarModPath.length; u++) {
							
									var tarval = tarModPath[u].value;
									if (tarval == "" || tarval == undefined) {
										tarval = 0;
									}
	
									if (moveCategory == "Physical") {
										if (tarModPath[u].getAttribute("name") == "Attack") {
											for(var r = 0; r < userModPath.length; r++) {
												var userval = userModPath[r].value;
												if (userval == "" || userval == undefined) {
													userval = 0;
												}
												if (tarModPath[r].getAttribute("name") == "Defense") {
													if (userval <= tarval) {
														Attack = NoModAttack;
													}
												}
											}
										}
										if (tarModPath[u].getAttribute("name") == "Defense") {
											for(var r = 0; r < userModPath.length; r++) {
												var userval = userModPath[r].value;
												if (userval == "" || userval == undefined) {
													userval = 0;
												}
												if (tarModPath[r].getAttribute("name") == "Attack") {
													if (userval <= tarval) {
														Defense = NoModDefense;
													}
												}
											}
										}
									}
									else if (moveCategory == "Special") {
										if (tarModPath[u].getAttribute("name") == "Sp. Atk") {
											for(var r = 0; r < userModPath.length; r++) {
												var userval = userModPath[r].value;
												if (userval == "" || userval == undefined) {
													userval = 0;
												}
												if (tarModPath[r].getAttribute("name") == "Sp. Def") {
													if (userval <= tarval) {
														Attack = NoModAttack;
													}
												}
											}
										}
										if (tarModPath[u].getAttribute("name") == "Sp. Def") {
											for(var r = 0; r < userModPath.length; r++) {
												var userval = userModPath[r].value;
												if (userval == "" || userval == undefined) {
													userval = 0;
												}
												if (tarModPath[r].getAttribute("name") == "Sp. Atk") {
													if (userval <= tarval) {
														Defense = NoModDefense;
													}
												}
											}
										}
									}
								}
							}
						}


						if (moveCategory == "Physical") {
							if (tarReflectPath.checked) {
								if (Critical == 1) {
									Defense = Defense*2;
								}
							}
						}
						if (moveCategory == "Special") {
							if (tarLightScreenPath.checked) {
								if (Critical == 1) {
									Defense = Defense*2;
								}
							}
						}
	


				

						for(var u = 0; u < finaldataItemDamage.length; u++) {
							if (finaldataItemDamage[u]["Item"] == userItemPath.value) {
								if (getApplicable(finaldataItemDamage[u]["Game"])) {
									if (finaldataItemDamage[u]["Type"] == moveType) {
										var check = false;
										if (finaldataItemDamage[u]["Pokémon"] == undefined) {
											check = true;
										}
										else if (finaldataItemDamage[u]["Pokémon"].includes(",")) {
											check 
											var tempPok = finaldataItemDamage[u]["Pokémon"].split(",")
											for(var p = 0; p < tempPok.length; p++) {
												if (getPokémonName(getPokémonInt(tempPok[p])) == getPokémonName(getDefaultInt(getPokémonInt(userPokémonPath.value)))) {
													check = true;
													break;
												}
											}
										}
										else if (getPokémonName(getPokémonInt(finaldataItemDamage[u]["Pokémon"])) == getPokémonName(getDefaultInt(getPokémonInt(userPokémonPath.value)))) {
											check = true;
										}
										if (check) {
											Item = finaldataItemDamage[u]["Value"];
										}
									}
								}
							}
						}

			
						if (weatherRainPath.checked) {
							if (moveType == "Fire") {
								Weather = 0.5;
							}
							if (moveType == "Water") {
								Weather = 1.5;
							}
							if (movePath.value == "SolarBeam") {
								Weather = 0.5;
							}
						}
						if (weatherHarshSunlightPath.checked) {
							if (moveType == "Fire") {
								Weather = 1.5;
							}
							if (moveType == "Water") {
								Weather = 0.5;
							}
						}
	
							
						if (userTypes[0] == moveType || userTypes[1] == moveType) {
							STAB = 1.5;
						}


						if (tarTypes.length > 0) {
							for (var u = 0; u < Types.length; u++) {
								if (moveType == Types[u]) {
									var typeadv = returnTypeAdvantage(Types[u],"Attacking");

									if (typeadv[2].includes(tarTypes[0].toUpperCase()) || typeadv[2].includes(tarTypes[1].toUpperCase())) {
										Type = 2;
									}
									if (typeadv[2].includes(tarTypes[0].toUpperCase()) && typeadv[2].includes(tarTypes[1].toUpperCase())) {
										Type = 4;
									}
									if (typeadv[1].includes(tarTypes[0].toUpperCase()) || typeadv[1].includes(tarTypes[1].toUpperCase())) {
										Type = 0.5;
									}
									if (typeadv[1].includes(tarTypes[0].toUpperCase()) && typeadv[1].includes(tarTypes[1].toUpperCase())) {
										Type = 0.25;
									}
									if (typeadv[3].includes(tarTypes[0].toUpperCase()) || typeadv[3].includes(tarTypes[1].toUpperCase())) {
										Immune = true;
									}
								}
							}
						}

						if (movePath.value == "Rollout") {
							MoveMod = 2**(moveCount.value);
						}
						if (movePath.value == "Fury Cutter") {
							MoveMod = 2**(moveCount.value);
						}
						if (movePath.value == "Rage") {
							MoveMod = moveCount.value;
						}
						if (movePath.value == "Pursuit") {
							if (moveSpecific.checked) {
								DoubleDmg = 2;
							}
						}
						if (movePath.value == "Stomp") {
							if (moveSpecific.checked) {
								DoubleDmg = 2;
							}
						}
						if (movePath.value == "Gust" || movePath.value == "Twister") {
							if (moveSpecific.checked) {
								DoubleDmg = 2;
							}
						}
						if (movePath.value == "Earthquake" || movePath.value == "Magnitude") {
							if (moveSpecific.checked) {
								DoubleDmg = 2;
							}
						}

						if (movePath.value == "Triple Kick") {
							TripleKick = moveCount.value;
						}

						for (var u = 0; u < userBadgePath.length; u++) {
							if (userBadgePath[u].title.includes(moveType+"-type")) {
								if (userBadgePath[u].checked) {
									Badge = 1.125;
								}
							}
						}

						calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Item*Critical+2)*TripleKick*Weather*Badge*STAB*Type*MoveMod*random*DoubleDmg;

						if (Immune) {
							calculation = 0;
						}
					}
					else if (Generation == 3) {
						// Defaults
						var Level = 1;
						var Power = 0;
						var Attack = 0;
						var Defense = 0;
						var Burn = 1;
						var Screen = 1;
						var Targets = 1;
						var Weather = 1;
						var FlashFire = 1;
						var Stockpile = 1;
						var Critical = 1;
						var DoubleDmg = 1;
						var Charge = 1;
						var HelpingHand = 1;
						var STAB = 1;
						var Type = 1;
						var random = 1;

						Level = userLevelPath.value;
						if (criticalPath.checked) {
							Critical = 2;
						}
						Power = powerPath.innerText;
						if (Power == "-") {
							Power = 0;
						}
						random = randomPath.value/100;


						if (moveCategory == "Physical") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Attack") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Defense") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						else if (moveCategory == "Special") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Sp. Def") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}

						if (movePath.value == "Future Sight" || movePath.value == "Doom Desire" || movePath.value == "Spit Up" || tarAbilityPath.value == "Battle Armor" || tarAbilityPath.value == "Shell Armor") {
							Critical = 1;
						}

						if (tarStatusBurnPath.checked) {
							if (tarAbilityPath.value != "Guts") {
								if (moveCategory == "Physical") {
									Burn = 0.5;
								}
							}
						}

						if (moveCategory == "Physical") {
							if (tarReflectPath.checked) {
								if (parseInt(battle.getAttribute("data-count")) > 2) {
									Screen = 0.6667;
								}
								else {
									Screen = 0.5;
								}
							}
						}
						if (moveCategory == "Special") {
							if (tarLightScreenPath.checked) {
								if (parseInt(battle.getAttribute("data-count")) > 2) {
									Screen = 0.6667;
								}
								else {
									Screen = 0.5;
								}
							}
						}

						if (Critical == 2) {
							Screen = 1;
							// Ignore "Negative" User Attack Stat Changes on Critical Hit
							for(var u = 0; u < userModPath.length; u++) {
								var userval = userModPath[u].value;
								if (userval == "" || userval == undefined) {
									userval = 0;
								}

								if (moveCategory == "Physical") {
									if (tarModPath[u].getAttribute("name") == "Attack") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (tarModPath[u].getAttribute("name") == "Sp. Atk") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
							}
							// Ignore "Positive" Target Defense Stat Changes on Critical Hit
							for(var u = 0; u < tarModPath.length; u++) {
								var tarval = tarModPath[u].value;
								if (tarval == "" || tarval == undefined) {
									tarval = 0;
								}

								if (moveCategory == "Physical") {
									if (tarModPath[u].getAttribute("name") == "Defense") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (tarModPath[u].getAttribute("name") == "Sp. Def") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
							}
						}

						if (parseInt(battle.getAttribute("data-count")) > 2) {
							if (target.length > 1) {
								if (target.parentElement.parentElement.getAttribute("data-range") != "Affects all Pokémon adjacent to the user") {
									Targets = 0.5;
								}
							}
						}

						if (weatherRainPath.checked) {
							if (moveType == "Fire") {
								Weather = 0.5;
							}
							if (moveType == "Water") {
								Weather = 1.5;
							}
						}
						if (weatherHarshSunlightPath.checked) {
							if (moveType == "Fire") {
								Weather = 1.5;
							}
							if (moveType == "Water") {
								Weather = 0.5;
							}
						}
						if (movePath.value == "SolarBeam") {
							weatherInputsPath
							var check = true;
							for(var u = 0; u < weatherInputsPath.length; u++) {
								if (weatherInputsPath[u].parentElement.getAttribute("name") != "Harsh Sunlight") {
									if (weatherInputsPath[u].checked) {
										check = false;
									}
								}
							}
							if (check) {
								Weather = 0.5;
							}
						}

						var check = false;
						for(var u = 0; u < allbase.length; u++) {
							var ab = allbase[u].querySelector(":scope *[name='ability'] select");
							if (ab.value == "Cloud Nine" || ab.value == "Air Lock") {
								check = true;
							}
						}
						if (check) {
							Weather = 1;
						}


						if (userAbilityPath.value == "Flash Fire") {
							if (moveType == "Fire") {
								if (userFlashFirePath.checked) {
									FlashFire = 1.5;
								}
							}
						}

						if (movePath.value == "Spit Up") {
							Stockpile = moveCount.value;
						}

						if (movePath.value == "Pursuit") {
							if (moveSpecific.checked) {
								DoubleDmg = 2;
							}
						}
						if (movePath.value == "Facade") {
							if (userStatusPoisonPath.checked || userStatusBurnPath.checked || userStatusParalyzePath.checked) {
								DoubleDmg = 2;
							}
							if (userStatusBadPoisonPath.value != "" && userStatusBadPoisonPath.value != undefined) {
								DoubleDmg = 2;
							}
						}
						

						if (movePath.value == "Gust" || movePath.value == "Twister") {
							if (moveSpecific.checked) {
								DoubleDmg = 2;
							}
						}

						if (movePath.value == "Stomp" || movePath.value == "Needle Arm" || movePath.value == "Astonish" || movePath.value == "Extrasensory") {
							if (moveSpecific.checked) {
								DoubleDmg = 2;
							}
						}

						if (movePath.value == "Surf" || movePath.value == "Whirlpool") {
							if (moveSpecific.checked) {
								DoubleDmg = 2;
							}
						}

						if (movePath.value == "Earthquake" || movePath.value == "Magnitude") {
							if (moveSpecific.checked) {
								DoubleDmg = 2;
							}
						}

						if (movePath.value == "SmellingSalt") {
							if (tarStatusParalyzePath.checked) {
								DoubleDmg = 2;
							}
						}

						if (movePath.value == "Weather Ball") {
							var check = false;
							for(var u = 0; u < weatherInputsPath.length; u++) {
								if (weatherInputsPath[u].checked) {
									check = true;
								}
							}
							for(var u = 0; u < allbase.length; u++) {
								var ab = allbase[u].querySelector(":scope *[name='ability'] select");
								if (ab.value == "Cloud Nine" || ab.value == "Air Lock") {
									check = false;
								}
							}
							if (check) {
								DoubleDmg = 2;
							}
						}


						if (moveType == "Electric") {
							if (tarChargePath.checked) {
								Charge = 2;
							}
						}
						
						if (parseInt(battle.getAttribute("data-count")) > 2) {
							if (userHelpingHandPath.checked) {
								HelpingHand = 1.5;
							}
						}


						if (userTypes[0] == moveType || userTypes[1] == moveType) {
							STAB = 1.5;
						}

						if (tarTypes.length > 0) {
							for (var u = 0; u < Types.length; u++) {
								if (moveType == Types[u]) {
									var typeadv = returnTypeAdvantage(Types[u],"Attacking");

									if (typeadv[2].includes(tarTypes[0].toUpperCase()) || typeadv[2].includes(tarTypes[1].toUpperCase())) {
										Type = 2;
									}
									if (typeadv[2].includes(tarTypes[0].toUpperCase()) && typeadv[2].includes(tarTypes[1].toUpperCase())) {
										Type = 4;
									}
									if (typeadv[1].includes(tarTypes[0].toUpperCase()) || typeadv[1].includes(tarTypes[1].toUpperCase())) {
										Type = 0.5;
									}
									if (typeadv[1].includes(tarTypes[0].toUpperCase()) && typeadv[1].includes(tarTypes[1].toUpperCase())) {
										Type = 0.25;
									}
									if (typeadv[3].includes(tarTypes[0].toUpperCase()) || typeadv[3].includes(tarTypes[1].toUpperCase())) {
										Immune = true;
									}
								}
							}
						}

						if (movePath.value == "Struggle" || movePath.value == "Future Sight" || movePath.value == "Beat Up" || movePath.value == "Doom Desire") {
							Type = 1;
						}

						calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Burn*Screen*Targets*Weather*FlashFire+2)*Stockpile*Critical*DoubleDmg*Charge*HelpingHand*STAB*Type*random;

						if (Immune) {
							calculation = 0;
						}
					}
					else if (Generation == 4) {
						// Defaults
						var Level = 1;
						var Power = 0;
						var Attack = 0;
						var Defense = 0;
						var Burn = 1;
						var Screen = 1;
						var Targets = 1;
						var Weather = 1;
						var FlashFire = 1;
						var Critical = 1;
						var Item = 1;
						var First = 1;
						var random = 1;
						var STAB = 1;
						var Type1 = 1;
						var Type2 = 1;
						var SolidRockFilter = 1;
						var ExpertBelt = 1;
						var TintedLens = 1;
						var Berry = 1;

						Level = userLevelPath.value;
						if (criticalPath.checked) {
							Critical = 2;
						}
						Power = powerPath.innerText;
						if (Power == "-") {
							Power = 0;
						}
						random = randomPath.value/100;


						if (moveCategory == "Physical") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Attack") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Defense") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						else if (moveCategory == "Special") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Sp. Def") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}



						if (tarStatusBurnPath.checked) {
							if (tarAbilityPath.value != "Guts") {
								if (moveCategory == "Physical") {
									Burn = 0.5;
								}
							}
						}

						if (moveCategory == "Physical") {
							if (tarReflectPath.checked) {
								if (parseInt(battle.getAttribute("data-count")) > 2) {
									Screen = 0.6667;
								}
								else {
									Screen = 0.5;
								}
							}
						}
						if (moveCategory == "Special") {
							if (tarLightScreenPath.checked) {
								if (parseInt(battle.getAttribute("data-count")) > 2) {
									Screen = 0.6667;
								}
								else {
									Screen = 0.5;
								}
							}
						}

						
						if (Critical == 2) {
							Screen = 1;

							// Ignore "Negative" User Attack Stat Changes on Critical Hit
							for(var u = 0; u < userModPath.length; u++) {
								var userval = userModPath[u].value;
								if (userval == "" || userval == undefined) {
									userval = 0;
								}

								if (moveCategory == "Physical") {
									if (tarModPath[u].getAttribute("name") == "Attack") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (tarModPath[u].getAttribute("name") == "Sp. Atk") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
							}
							// Ignore "Positive" Target Defense Stat Changes on Critical Hit
							for(var u = 0; u < tarModPath.length; u++) {
								var tarval = tarModPath[u].value;
								if (tarval == "" || tarval == undefined) {
									tarval = 0;
								}

								if (moveCategory == "Physical") {
									if (tarModPath[u].getAttribute("name") == "Defense") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (tarModPath[u].getAttribute("name") == "Sp. Def") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
							}
						}
						
						if (parseInt(battle.getAttribute("data-count")) > 2) {
							if (target.length > 1) {
								if (target.parentElement.parentElement.getAttribute("data-range") != "Affects all Pokémon adjacent to the user") {
									Targets = 0.75;
								}
							}
						}

						
						if (weatherRainPath.checked) {
							if (moveType == "Fire") {
								Weather = 0.5;
							}
							if (moveType == "Water") {
								Weather = 1.5;
							}
						}
						if (weatherHarshSunlightPath.checked) {
							if (moveType == "Fire") {
								Weather = 1.5;
							}
							if (moveType == "Water") {
								Weather = 0.5;
							}
						}
						if (movePath.value == "SolarBeam") {
							weatherInputsPath
							var check = true;
							for(var u = 0; u < weatherInputsPath.length; u++) {
								if (weatherInputsPath[u].parentElement.getAttribute("name") != "Harsh Sunlight") {
									if (weatherInputsPath[u].checked) {
										check = false;
									}
								}
							}
							if (check) {
								Weather = 0.5;
							}
						}

						var check = false;
						for(var u = 0; u < allbase.length; u++) {
							var ab = allbase[u].querySelector(":scope *[name='ability'] select");
							if (ab.value == "Cloud Nine" || ab.value == "Air Lock") {
								check = true;
							}
						}
						if (check) {
							Weather = 1;
						}

						if (userAbilityPath.value == "Flash Fire") {
							if (moveType == "Fire") {
								if (userFlashFirePath.checked) {
									FlashFire = 1.5;
								}
							}
						}

						if (userItemPath.value = "Life Orb") {
							Item = 1.3;
						}
						
						if (userItemPath.value = "Metronome") {
							var val = userItemCountPath.value;
							if (isNaN(val)) {
								val = 0;
							}
							if (val > 10) {
								val = 10;
							}
							Item = 1+(val/10);
						}
						
						if (moveMeFirst.checked) {
							First = 1.5;
						}
						if (userTypes[0] == moveType || userTypes[1] == moveType) {
							STAB = 1.5;
						}


			
						var typeadv1 = returnTypeAdvantage(tarTypes[0],"Attacking");
						if (typeadv1[2].includes(moveType.toUpperCase())) {
							Type1 = 2;
						}
						if (typeadv1[2].includes(moveType.toUpperCase())) {
							Type1 = 0.5;
						}
						if (typeadv1[3].includes(moveType.toUpperCase())) {
							Immune = true;
						}

						var typeadv2 = returnTypeAdvantage(tarTypes[1],"Attacking");
						if (typeadv2[2].includes(moveType.toUpperCase())) {
							Type2 = 2;
						}
						if (typeadv2[2].includes(moveType.toUpperCase())) {
							Type2 = 0.5;
						}
						if (typeadv2[3].includes(moveType.toUpperCase())) {
							Immune = true;
						}
						

						if (movePath.value == "Struggle" || movePath.value == "Future Sight" || movePath.value == "Beat Up" || movePath.value == "Doom Desire") {
							Type1 = 1;
							Type2 = 1;
						}

						if (tarAbilityPath.value == "Solid Rock" || tarAbilityPath.value == "Filter") {
							if (userAbilityPath != "Mold Breaker") {
								if (Type1+Type2 > 2) {
									SolidRockFilter = 0.75;
								}
							}
						}

						if (userItemPath.value == "Expert Belt") {
							if (Type1+Type2 > 2) {
								ExpertBelt = 1.2;
							}
						}

						if (userAbilityPath.value == "Tinted Lens") {
							if (Type1+Type2 < 2) {
								TintedLens = 2;
							}
						}
						
						var check = false;

						if (tarItemPath.value == "Chilan Berry" && moveType == "Normal") {
							check = true;
						}
						if (Type1+Type2 > 2) {
							if (tarItemPath.value == "Babiri Berry" && moveType == "Steel") {
								check = true;
							}
							if (tarItemPath.value == "Charti Berry" && moveType == "Rock") {
								check = true;
							}
							if (tarItemPath.value == "Chople Berry" && moveType == "Fighting") {
								check = true;
							}
							if (tarItemPath.value == "Coba Berry" && moveType == "Flying") {
								check = true;
							}
							if (tarItemPath.value == "Colbur Berry" && moveType == "Dark") {
								check = true;
							}
							if (tarItemPath.value == "Haban Berry" && moveType == "Dragon") {
								check = true;
							}
							if (tarItemPath.value == "Kasib Berry" && moveType == "Ghost") {
								check = true;
							}
							if (tarItemPath.value == "Kebia Berry" && moveType == "Poison") {
								check = true;
							}
							if (tarItemPath.value == "Occa Berry" && moveType == "Fire") {
								check = true;
							}
							if (tarItemPath.value == "Passho Berry" && moveType == "Water") {
								check = true;
							}
							if (tarItemPath.value == "Payapa Berry" && moveType == "Psychic") {
								check = true;
							}
							if (tarItemPath.value == "Rindo Berry" && moveType == "Grass") {
								check = true;
							}
							if (tarItemPath.value == "Roseli Berry" && moveType == "Fairy") {
								check = true;
							}
							if (tarItemPath.value == "Shuca Berry" && moveType == "Ground") {
								check = true;
							}
							if (tarItemPath.value == "Tanga Berry" && moveType == "Bug") {
								check = true;
							}
							if (tarItemPath.value == "Wacan Berry" && moveType == "Electric") {
								check = true;
							}
							if (tarItemPath.value == "Yache Berry" && moveType == "Ice") {
								check = true;
							}
						}
						if (check) {
							Berry = 0.5;
						}
						

						calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Burn*Screen*Targets*Weather*FlashFire+2)*Critical*Item*First*random*STAB*Type1*Type2*SolidRockFilter*ExpertBelt*TintedLens*Berry;

					}
					else if (Generation >= 5) {
						// Defaults
						var Level = 1;
						var Power = 0;
						var Attack = 0;
						var Defense = 0;
						var Targets = 1;
						var Weather = 1;
						var GlaiveRush = 1;
						var Critical = 1;
						var random = 1;
						var STAB = 1;
						var Type = 1;
						var Screen = 1;
						var BehemothBladeBehemothBashDynamaxCannon = 1;
						var Minimize = 1;
						var SurfWhirlpool = 1;
						var EarthquakeMagnitude = 1;
						var Screen = 1;
						var ColissionCourseElectroDrift = 1;
						var MultiscaleShadowShield = 1;
						var Fluffy1 = 1;
						var PunkRock = 1;
						var IceScales = 1;
						var FriendGuard = 1;
						var FilterPrismArmorSolidRock = 1;
						var Neuroforce = 1;
						var Sniper = 1;
						var TintedLens = 1;
						var Fluffy2 = 1;
						var Item = 1;
						var Berry = 1;
						var ZMove = 1;
						var TeraShield = 1;

						Level = userLevelPath.value;
						if (criticalPath.checked) {
							if (Generation == 5) {
								Critical = 2;
							}
							else {
								Critical = 1.5;
							}
						}
						Power = powerPath.innerText;
						if (Power == "-") {
							Power = 0;
						}
						random = randomPath.value/100;


						if (movePath.value == "Storm Throw" || movePath.value == "Frost Breath" || movePath.value == "Zippy Zap" || movePath.value == "Surging Strikes" || movePath.value == "Wicked Blow" || movePath.value == "Flower Trick") {
							if (Generation == 5) {
								Critical = 2;
							}
							else {
								Critical = 1.5;
							}
						}
						if (userAbilityPath.value == "Merciless") {
							var check = false;
							if (tarStatusPoisonPath.checked) {
								check = true;
							}
							if (tarStatusBadPoisonPath.value != "" && tarStatusBadPoisonPath.value != undefined) {
								check = true;
							}
							if (check) {
								if (Generation == 5) {
									Critical = 2;
								}
								else {
									Critical = 1.5;
								}
							}
						}
						if (userLaserFocusPath.checked) {
							if (Generation == 5) {
								Critical = 2;
							}
							else {
								Critical = 1.5;
							}
						}


						if (tarAbilityPath.value == "Battle Armor" || tarAbilityPath.value == "Shell Armor") {
							Critical = 1;
						}
						if (tarLuckyChantPath.checked) {
							Critical = 1;
						}
						


						if (target.length > 1) {
							if (battle.value == "Battle Royal") {
								Targets = 0.5;
							}
							else {
								Targets = 0.75;
							}
						}

						if (moveCategory == "Physical") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Attack") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Defense") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						else if (moveCategory == "Special") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Sp. Def") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}

						if (Critical > 1) {
							// Ignore "Negative" User Attack Stat Changes on Critical Hit
							for(var u = 0; u < userModPath.length; u++) {
								var userval = userModPath[u].value;
								if (userval == "" || userval == undefined) {
									userval = 0;
								}

								if (moveCategory == "Physical") {
									if (tarModPath[u].getAttribute("name") == "Attack") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (tarModPath[u].getAttribute("name") == "Sp. Atk") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
							}
							// Ignore "Positive" Target Defense Stat Changes on Critical Hit
							for(var u = 0; u < tarModPath.length; u++) {
								var tarval = tarModPath[u].value;
								if (tarval == "" || tarval == undefined) {
									tarval = 0;
								}

								if (moveCategory == "Physical") {
									if (tarModPath[u].getAttribute("name") == "Defense") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (tarModPath[u].getAttribute("name") == "Sp. Def") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
							}
						}


						if (weatherRainPath.checked) {
							if (moveType == "Fire") {
								Weather = 0.5;
							}
							if (moveType == "Water") {
								Weather = 1.5;
							}
						}
						if (weatherHarshSunlightPath.checked) {
							if (moveType == "Fire") {
								Weather = 1.5;
							}
							if (moveType == "Water") {
								if (movePath.value != "Hydro Steam") {
									Weather = 0.5;
								}
							}
						}

						var check = false;
						for(var u = 0; u < allbase.length; u++) {
							var ab = allbase[u].querySelector(":scope *[name='ability'] select");
							if (ab.value == "Cloud Nine" || ab.value == "Air Lock") {
								check = true;
							}
						}
						if (check) {
							Weather = 1;
						}

						if (userTypes[0] == moveType || userTypes[1] == moveType) {
							if (userAbilityPath.value == "Adaptability") {
								STAB = 2;
							}
							else {
								STAB = 1.5;
							}
						}

						if (movePath.value.includes(" Pledge")) {
							if (userAbilityPath.value == "Adaptability") {
								STAB = 2;
							}
							else {
								STAB = 1.5;
							}
						}


						if (tarTypes.length > 0) {
							for (var u = 0; u < Types.length; u++) {
								if (moveType == Types[u]) {
									var typeadv = returnTypeAdvantage(Types[u],"Attacking");

									if (typeadv[2].includes(tarTypes[0].toUpperCase()) || typeadv[2].includes(tarTypes[1].toUpperCase())) {
										Type = 2;
									}
									if (typeadv[2].includes(tarTypes[0].toUpperCase()) && typeadv[2].includes(tarTypes[1].toUpperCase())) {
										Type = 4;
									}
									if (typeadv[1].includes(tarTypes[0].toUpperCase()) || typeadv[1].includes(tarTypes[1].toUpperCase())) {
										var check = true;
										if (weatherStrongWindsPath.checked && tarTypes[0] == "Flying" || weatherStrongWindsPath.checked && tarTypes[1] == "Flying") {
											check = false;
										}

										if (check) {
											Type = 0.5;
										}
										else {
											Type = 1;
										}
									}
									if (typeadv[1].includes(tarTypes[0].toUpperCase()) && typeadv[1].includes(tarTypes[1].toUpperCase())) {
										var check = true;
										if (weatherStrongWindsPath.checked && tarTypes[0] == "Flying" || weatherStrongWindsPath.checked && tarTypes[1] == "Flying") {
											check = false;
										}

										if (check) {
											Type = 0.25;
										}
										else {
											Type = 0.5;
										}
									}
									if (typeadv[3].includes(tarTypes[0].toUpperCase())) {
										var check = true;
										if (tarTypes[0] == "Flying" && tarThousandArrowsPath.checked) {
											check = false;
										}
										if (tarTypes[0] == "Flying" && tarItemPath.value == "Iron Ball") {
											check = false;
										}
										if (tarItemPath.value == "Ring Target") {
											check = false;
										}
										if (tarAbilityPath.value == "Scrappy") {
											if (tarTypes[0] == "Normal" || tarTypes[0] == "Fighting") {
												check = false;
											}
										}
										if (tarForesightPath.checked || tarMiracleEyePath.checked || tarOdorSleuth.checked) {
											check = false;
										}
										if (check) {
											Immune = true;
										}
									}
									if (typeadv[3].includes(tarTypes[1].toUpperCase())) {
										var check = true;
										if (tarTypes[1] == "Flying" && tarThousandArrowsPath.checked) {
											check = false;
										}
										if (tarTypes[1] == "Flying" && tarItemPath.value == "Iron Ball") {
											check = false;
										}
										if (tarItemPath.value == "Ring Target") {
											check = false;
										}
										if (tarAbilityPath.value == "Scrappy") {
											if (tarTypes[1] == "Normal" || tarTypes[1] == "Fighting") {
												check = false;
											}
										}
										if (tarForesightPath.checked || tarMiracleEyePath.checked || tarOdorSleuth.checked) {
											check = false;
										}
										if (check) {
											Immune = true;
										}
									}
								}
							}
						}

						if (movePath.value == "Freeze-Dry") {
							if (!typeadv[2].includes("WATER")) {
								if (Type == 4) {
									Type = 8;
								}
								if (Type == 2) {
									Type = 4;
								}
								if (Type == 1) {
									Type = 2;
								}
								if (Type == 0.5) {
									Type = 1;
								}
								if (Type == 0.25) {
									Type = 0.5;
								}
							}
						}
						if (movePath.value == "Flying Press") {
							var tempTypeAdv = returnTypeAdvantage("Flying","Attacking");
							if (tempTypeAdv[1].includes("FLYING")) {
								if (Type == 4) {
									Type = 2;
								}
								if (Type == 2) {
									Type = 1;
								}
								if (Type == 1) {
									Type = 0.5;
								}
								if (Type == 0.5) {
									Type = 0.25;
								}
								if (Type == 0.25) {
									Type = 0.125;
								}
							}
							if (tempTypeAdv[2].includes("FLYING")) {
								if (Type == 4) {
									Type = 8;
								}
								if (Type == 2) {
									Type = 4;
								}
								if (Type == 1) {
									Type = 2;
								}
								if (Type == 0.5) {
									Type = 1;
								}
								if (Type == 0.25) {
									Type = 0.5;
								}
							}
						}
						if (tarForestsCursePath.checked) {
							if (typeadv[1].includes("GRASS")) {
								if (Type == 4) {
									Type = 2;
								}
								if (Type == 2) {
									Type = 1;
								}
								if (Type == 1) {
									Type = 0.5;
								}
								if (Type == 0.5) {
									Type = 0.25;
								}
								if (Type == 0.25) {
									Type = 0.125;
								}
							}
							if (typeadv[2].includes("GRASS")) {
								if (Type == 4) {
									Type = 8;
								}
								if (Type == 2) {
									Type = 4;
								}
								if (Type == 1) {
									Type = 2;
								}
								if (Type == 0.5) {
									Type = 1;
								}
								if (Type == 0.25) {
									Type = 0.5;
								}
							}
						}
						if (tarTrickOrTreatPath.checked) {
							if (typeadv[1].includes("Ghost")) {
								if (Type == 4) {
									Type = 2;
								}
								if (Type == 2) {
									Type = 1;
								}
								if (Type == 1) {
									Type = 0.5;
								}
								if (Type == 0.5) {
									Type = 0.25;
								}
								if (Type == 0.25) {
									Type = 0.125;
								}
							}
							if (typeadv[2].includes("Ghost")) {
								if (Type == 4) {
									Type = 8;
								}
								if (Type == 2) {
									Type = 4;
								}
								if (Type == 1) {
									Type = 2;
								}
								if (Type == 0.5) {
									Type = 1;
								}
								if (Type == 0.25) {
									Type = 0.5;
								}
							}
						}

						if (tarTarShotPath.checked) {
							if (moveType == "Fire") {
								Type = Type * 2;
							}
						}

						
						if (movePath.value == "Struggle") {
							Type = 1;
						}


						if (tarGlaiveRushPath.checked) {
							GlaiveRush = 2;
						}

		
						if (userStatusBurnPath.checked) {
							if (userAbilityPath.value != "Guts") {
								if (moveCategory == "Physical") {
									if (Generation != 5) {
										if (movePath.value != "Facade") {
											Burn = 0.5;
										}
									}
									else {
										Burn = 0.5;
									}
								}
							}
						}

						if (tarDynamaxPath.checked) {
							if (movePath.value == "Behemoth Blade" || movePath.value == "Behemoth Bash" || movePath.value == "Dynamax Cannon") {
								BehemothBladeBehemothBashDynamaxCannon = 2;
							}
						}
						if (moveSpecific.checked) { // Minimize
							var tempOtherMoves = [];
							if (Generation == 5) {
								tempOtherMoves = ["Stomp","Steamroller"];
							}
							if (Generation == 6) {
								tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Shadow Force","Steamroller","Heat Crash","Phantom Force","Flying Press"];
							}
							if (Generation == 7) {
								tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Steamroller","Heat Crash","Heavy Slam","Flying Press","Malicious Moonsault","Double Iron Bash"];
							}
							if (Generation == 8) {
								tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Heat Crash","Heavy Slam","Flying Press"];
							}
							if (tempOtherMoves.includes(movePath.value)) {
								Minimize = 2;
							}
						}

						if (moveSpecific.checked) {
							if (movePath.value == "Earthquake" || movePath.value == "Magnitude") {
								EarthquakeMagnitude = 2;
							}
						}

						if (moveSpecific.checked) {
							if (movePath.value == "Surf" || movePath.value == "Whirlpool") {
								SurfWhirlpool = 2;
							}
						}
						

						if (moveCategory == "Physical") {
							if (tarReflectPath.checked) {
								if (parseInt(battle.getAttribute("data-count")) > 2) {
									Screen = 0.6667;
								}
								else {
									Screen = 0.5;
								}
							}
						}
						if (moveCategory == "Special") {
							if (tarLightScreenPath.checked) {
								if (parseInt(battle.getAttribute("data-count")) > 2) {
									Screen = 0.6667;
								}
								else {
									Screen = 0.5;
								}
							}
						}

						if (tarAuroraVeilPath.checked) {
							if (parseInt(battle.getAttribute("data-count")) > 2) {
								Screen = 0.6667;
							}
							else {
								Screen = 0.5;
							}
						}

						if (movePath.value == "Collision Course" || movePath.value == "Electro Drift") {
							if (Type > 1) {
								ColissionCourseElectroDrift = 1.3333;
							}
						}

						if (tarAbilityPath.value == "Multiscale" || tarAbilityPath.value == "Shadow Shield") {
							if (tarHPCurrentPath.innerText == tarHPMaxPath.innerText) {
								MultiscaleShadowShield = 0.5;
							}
						}

						if (tarAbilityPath.value == "Fluffy") {
							if (movePath.value != "Sunsteel Strike" && movePath.value != "Searing Sunraze Smash") {
								if (userAbilityPath.value != "Long Reach") {
									if (getMoveData(movePath.value, "Contact") == "Makes contact") {
										Fluffy1 = 0.5;
									}
								}
							}
						}

						if (tarAbilityPath.value == "Punk Rock") {
							if (getMoveData(movePath.value, "Sound") == "Is a sound-based move") {
								PunkRock = 0.5;
							}
						}


						if (tarAbilityPath.value == "Ice Scales") {
							if (moveCategory == "Special") {
								IceScales = 0.5;
							}
						}

						var allies = target[i].parentElement.querySelectorAll(":scope > div[data-string]");
						var check = false;
						for (var u = 0; u < allies.length; u++) {
							if (allies[u] != target[i]) {
								var allyteam = allies[u].parentElement.getAttribute("name");
								var allyid = allies[u].getAttribute("name");
								var allyab = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+allyteam+"'] ul[name='"+allyid+"'] li[name='ability'] select");

								if (allyab.value == "Friend Guard") {
									check = true;
									break;
								}
							}
						}
						if (check) {
							FriendGuard = 0.75;
						}

						if (tarAbilityPath.value == "Filter" || tarAbilityPath.value == "Prism Armor" || tarAbilityPath.value == "Solid  Rock") {
							if (Type > 1) {
								FilterPrismArmorSolidRock = 0.75;
							}
						}

						if (userAbilityPath.value == "Neuroforce") {
							if (Type > 1) {
								Neuroforce = 1.25;
							}
						}


						if (Critical > 1) {
							if (userAbilityPath.value = "Sniper") {
								Sniper = 1.5;
							}
						}

	
						if (userAbilityPath.value = "Tinted Lens") {
							if (Type < 1) {
								TintedLens = 2;
							}
						}

						if (tarAbilityPath.value == "Fluffy") {
							if(movePath.value != "G-Max Fireball") {
								if (moveType == "Fire") {
									Fluffy2 = 2;
								}
							}
						}
		

						var check = false;
						if (tarItemPath.value == "Chilan Berry" && moveType == "Normal") {
							check = true;
						}
						if (Type > 1) {
							if (tarItemPath.value == "Babiri Berry" && moveType == "Steel") {
								check = true;
							}
							if (tarItemPath.value == "Charti Berry" && moveType == "Rock") {
								check = true;
							}
							if (tarItemPath.value == "Chople Berry" && moveType == "Fighting") {
								check = true;
							}
							if (tarItemPath.value == "Coba Berry" && moveType == "Flying") {
								check = true;
							}
							if (tarItemPath.value == "Colbur Berry" && moveType == "Dark") {
								check = true;
							}
							if (tarItemPath.value == "Haban Berry" && moveType == "Dragon") {
								check = true;
							}
							if (tarItemPath.value == "Kasib Berry" && moveType == "Ghost") {
								check = true;
							}
							if (tarItemPath.value == "Kebia Berry" && moveType == "Poison") {
								check = true;
							}
							if (tarItemPath.value == "Occa Berry" && moveType == "Fire") {
								check = true;
							}
							if (tarItemPath.value == "Passho Berry" && moveType == "Water") {
								check = true;
							}
							if (tarItemPath.value == "Payapa Berry" && moveType == "Psychic") {
								check = true;
							}
							if (tarItemPath.value == "Rindo Berry" && moveType == "Grass") {
								check = true;
							}
							if (tarItemPath.value == "Roseli Berry" && moveType == "Fairy") {
								check = true;
							}
							if (tarItemPath.value == "Shuca Berry" && moveType == "Ground") {
								check = true;
							}
							if (tarItemPath.value == "Tanga Berry" && moveType == "Bug") {
								check = true;
							}
							if (tarItemPath.value == "Wacan Berry" && moveType == "Electric") {
								check = true;
							}
							if (tarItemPath.value == "Yache Berry" && moveType == "Ice") {
								check = true;
							}
						}
						if (check) {
							if (userAbilityPath.value == "Ripen") {
								Berry = 0.25;
							}
							else {
								Berry = 0.5;
							}
						}

						if (userItemPath.value == "Expert Belt") {
							if (Type > 1) {
								Item = 1.2;
							}
						}

						if (userItemPath.value = "Life Orb") {
							Item = 1.3;
						}


						if (userItemPath.value = "Metronome") {
							var val = userItemCountPath.value;
							if (isNaN(val)) {
								val = 0;
							}

							Item = 1+((819/4096)*val);

							if (Item > 2) {
								Item = 2;
							}
						}
			
						if (tarProtectPath.checked) {
							if (getMoveData(movePath.value, "Group") == "Z-Move" || getMoveData(movePath.value, "Group") == "G-Max Move" || getMoveData(movePath.value, "Group") == "Max Move") {
								ZMove = 0.25;
							}
						}


						calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)+2)*Targets*Weather*GlaiveRush*Critical*random*STAB*Type*Burn*Screen*(BehemothBladeBehemothBashDynamaxCannon*Minimize*SurfWhirlpool*EarthquakeMagnitude*Screen*ColissionCourseElectroDrift*MultiscaleShadowShield*Fluffy1*PunkRock*IceScales*FriendGuard*FilterPrismArmorSolidRock*Neuroforce*Sniper*TintedLens*Fluffy2*Item*Berry)*ZMove*TeraShield;
					}




					
					var maxHP = parseInt(tarHPMaxPath.innerText);
					var integerResult = Math.round(calculation);
					var move = movePath.value;
	

			
					if (isNaN(integerResult)) {
						integerResult = 0;
					}
					else if (integerResult == 0) {
						integerResult = 1;
					}



					for (var u = 0; u < finaldataMoveAdditional.length; u++) {
						if (finaldataMoveAdditional[u]["Additional"] == "Healing") {
							if (finaldataMoveAdditional[u]["Move"] == move) {
								if (getApplicable(finaldataMoveAdditional[u]["Game"])) {
									if (getApplicable(finaldataMoveAdditional[u]["Value"]) != undefined) {
										if (finaldataMoveAdditional[u]["Type"] == "Max HP") {
											var check = false;

											if (finaldataMoveAdditional[u]["Condition"] == undefined) {
												check = true;
											}
											else if (finaldataMoveAdditional[u]["Condition"] == "No Weather") {
												check = true;
												for (var w = 0; w < weatherInputsPath.length; w++) {
													if(weatherInputsPath[w].checked) {
														check = false;
													}
												}
											}
											else if (finaldataMoveAdditional[u]["Condition"] == "Harsh Sunlight") {
												if (weatherHarshSunlightPath.checked) {
													check = true;
												}
											}
											else if (finaldataMoveAdditional[u]["Condition"] == "Strong Winds") {
												if (weatherStrongWindsPath.checked) {
													check = true;
												}
											}
											else if (finaldataMoveAdditional[u]["Condition"] == "Sandstorm") {
												if (weatherSandstormPath.checked) {
													check = true;
												}
											}
											else if (finaldataMoveAdditional[u]["Condition"].includes("Non:")) {
												var tempStr = finaldataMoveAdditional[u]["Condition"].split("Non:")[1];
												if (tempStr.includes(",")) {
													check = true;
													var tempArr = tempStr.split(",")
													for (var r = 0; r < tempArr.length; r++) {
														for (var w = 0; w < weatherInputsPath.length; w++) {
															if (weatherInputsPath[w].parentElement.getAttribute("name") == tempArr[r]) {
																if (weatherInputsPath[w].checked) {
																	check = false;
																}
															}
														}
													}
												}
												else {
													check = true;
													for (var w = 0; w < weatherInputsPath.length; w++) {
														if (weatherInputsPath[w].parentElement.getAttribute("name") == tempStr) {
															if (weatherInputsPath[w].checked) {
																check = false;
															}
														}
													}
												}
											}
											

											if (check) {
												if (finaldataMoveAdditional[u]["Target"] == undefined) {
													var heal = Math.ceil(maxHP*finaldataMoveAdditional[u]["Value"]);
													console.log(heal)
													DMGCalcApply(target,heal,"Heal","Mediumspringgreen","Apply");
												}
												else if (finaldataMoveAdditional[u]["Target"] == "Ally") {
													if (target.parentElement.getAttribute("name").includes("player")) {
														var heal = Math.ceil(maxHP*finaldataMoveAdditional[u]["Value"]);
														console.log(heal)
														DMGCalcApply(target,heal,"Heal","Mediumspringgreen","Apply");
													}
												}
											}
										}
										else if (finaldataMoveAdditional[u]["Type"] == "Target Attack") {
											if (finaldataMoveAdditional[u]["Condition"] == "Minus One Attack") {
												
												if (moveCategory == "Special") {
													if (Generation == 1) {
														var tarAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+team+"'] ul[name='"+pok+"'] li[name='stats'] > * > *:last-child > *[name='Special']")
														var modAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+team+"'] ul[name='"+pok+"'] li[name='stats'] > * > *[name='Mod'] > *[name='Special']")
													}
													else {
														var tarAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+team+"'] ul[name='"+pok+"'] li[name='stats'] > * > *:last-child > *[name='Sp. Atk']")
														var modAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+team+"'] ul[name='"+pok+"'] li[name='stats'] > * > *[name='Mod'] > *[name='Sp. Atk']")
													}
												}
												else if (moveCategory == "Physical") {
													var tarAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+team+"'] ul[name='"+pok+"'] li[name='stats'] > * > *:last-child > *[name='Attack']")
													var modAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+team+"'] ul[name='"+pok+"'] li[name='stats'] > * > *[name='Mod'] > *[name='Attack']")
												}
												var val;
												
												var modval;
												if (modAtk.value == undefined) {
													modval = 0
												}
												else {
													modval = modAtk.value;
												}

									
												if (modval == -6) {
													val = tarAtk;
												}
												else {
													if (Generation >= 1 && Generation <= 2) {
														val = tarAtk*0.66;
													}
													else {
														val = tarAtk*0.6666666667;
													}
												}


												var heal = Math.ceil(val*finaldataMoveAdditional[u]["Value"]);
												console.log(heal)
												DMGCalcApply(target,heal,"Heal","Mediumspringgreen","Apply");
											}
										}
									}
								}
							}
						}
					}
		
				
					if (movePath.value == "Triple Kick" && Generation == 2) {
						DMGCalcApply(target,integerResult,"Damage","Orangered","Apply");
					}
					else if (userAbilityPath.value == "Parental Bond") {
						var check = true;
						for (var u = 0; u < finaldataMoveAdditional.length; u++) {
							if (getApplicable(finaldataMoveAdditional[u]["Game"])) {
								if (finaldataMoveAdditional[u]["Move"] == movePath.value) {
									if (finaldataMoveAdditional[u]["Additional"] == "Multi-strike") {
										check = false;
									}
								}
							}
						}
						if (check) {
							for (var h = 0; h < 2; h++) {
								if (Generation == 6) {
									if (h == 1) {
										DMGCalcApply(target,integerResult*0.5,"Damage","Orangered","Apply");
									}
									else {
										DMGCalcApply(target,integerResult,"Damage","Orangered","Apply");
									}
								}
								else {
									if (h == 1) {
										DMGCalcApply(target,integerResult*0.25,"Damage","Orangered","Apply");
									}
									else {
										DMGCalcApply(target,integerResult,"Damage","Orangered","Apply");
									}
								}
							}
						}
						
					}
					else if (moveCount.getAttribute("name") == "Hit") {
						for (var h = 0; h < moveCount.value; h++) {
							DMGCalcApply(target,integerResult,"Damage","Orangered","Apply");
						}
					}
					else {
						DMGCalcApply(target,integerResult,"Damage","Orangered","Apply");
					}
				
					if (tarStatusPoisonPath.checked) {
						var val = Math.floor(maxHP/16);
						if (val <= 0) {
							val = 1;
						}
					
						DMGCalcApply(target,val,"Damage","Purple","Apply");
					}
					if (tarStatusBurnPath.checked) {
						var val = Math.floor(maxHP/16);
						if (val <= 0) {
							val = 1;
						}

						DMGCalcApply(target,val,"Damage","Orange","Apply");
					}

					if (tarStatusBadPoisonPath.value != "" && tarStatusBadPoisonPath.value != undefined) {
						var val = Math.floor(maxHP/16);
						if (val <= 0) {
							val = 1;
						}
						val = tarStatusBadPoisonPath.value*val

						DMGCalcApply(target,val,"Damage","Rebeccapurple","Apply");
					}

				
		
				}
			}
	

		}

		var bgs = [];

		function DMGCalcApply(base,val,type,color,condition) {

			var base;
			var val;
			var type;
			var color;
			var condition;

			if (base != undefined) {
	
				var team = base.parentElement.getAttribute("name");
				var pok = base.getAttribute("name");
				var target = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+team+"'] ul[name='"+pok+"']");


				var HPCurrentPath = base.querySelector(":scope *[name='hp'] *[name='current']");
				var HPMaxPath = base.querySelector(":scope *[name='hp'] *[name='max']");
				var HPPercentagePath = base.querySelector(":scope *[name='hp'] *[name='percentage']");

				var PokémonPath = target.querySelector(":scope *[name='pokémon'] select");
				var StatsPath = target.querySelectorAll(":scope *[name='stats'] > span > span:last-child input:not(:first-child)");
				var HPInputPath = target.querySelector(":scope *[name='hp'] input");
				var StatusLeechSeedPath = target.querySelector(":scope *[name='Leech Seed'] input");
				var StatusPoisonPath = target.querySelector(":scope *[name='Poisoned'] input");
				var StatusBadPoisonPath = target.querySelector(":scope *[name='Badly Poisoned'] input");
				var StatusBurnPath = target.querySelector(":scope *[name='Burned'] input");
				var StatusParalyzePath = target.querySelector(":scope *[name='Paralyzed'] input");
				var StatusAsleepPath = target.querySelector(":scope *[name='Asleep'] input");
				var StatusFrozenPath = target.querySelector(":scope *[name='Frozen'] input");

				// Move
				var movePath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div:last-child > span select");
				var powerPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] *[name='power']");
				var accuracyPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] *[name='accuracy']");
				var criticalPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div:first-child input[type='checkbox']")
				var randomPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div > span > input[type='range']");


				if (condition == "Reset") {
					base.lastChild.style.removeProperty("background");
					HPCurrentPath.innerText = HPInputPath.value;
					HPPercentagePath.innerText = Math.round(Math.round(HPInputPath.value)/HPMaxPath.innerText*100);
					HPPercentagePath.innerText = HPPercentagePath.innerText+"%";
					bgs = [];
				}
				else if (condition == "Apply") {
					console.log(val)

					var val = parseInt(val);
					var maxHP = parseInt(HPMaxPath.innerText);
					var currentHP = parseInt(HPCurrentPath.innerText);
					var currentPercent = parseInt(HPPercentagePath.innerText.replaceAll("%"));
					var percent = Math.ceil(Math.ceil(val)/maxHP*100);

					var newHP;
					var newPercent;

					if (type == "Damage") {
						newHP = currentHP-val;
						newPercent = currentPercent-percent;
					}
					if (type == "Heal") {
						newHP = currentHP+val;
						newPercent = currentPercent+percent;
					}
					console.log(newHP)
					console.log(newPercent)
					console.log(currentHP)
					console.log(currentPercent)

					console.log(val)
					console.log(percent)


					if (newHP < 0) {
						newHP = 0;
					}
					if (newHP > maxHP) {
						newHP = maxHP;
					}
					if (newPercent < 0) {
						newPercent = 0;
					}
					if (newPercent > 100) {
						newPercent = 100;
					}

	

					var obj = new Object();
					obj["Color"] = color;
					obj["Percent"] = newPercent;
					bgs.push(obj)

					var tempArr = [];

					console.log(bgs)

					for (var b = 0; b < bgs.length; b++) {
						var x = b - 1;
						if (b == 0) {
							tempArr.push(bgs[b]["Color"]+" "+bgs[b]["Percent"]+"%")
						}
						else {
							tempArr.push(bgs[b]["Color"]+" "+bgs[b]["Percent"]+"%, "+bgs[b]["Color"]+" "+bgs[x]["Percent"]+"%")
						}
					}


					console.log(tempArr)
// linear-gradient(90deg, limegreen 8%, mediumspringgreen 8%, mediumspringgreen 58%, orangered 58%)
					tempArr.reverse();


					console.log(tempArr)
					var tempStr = "linear-gradient(90deg,Limegreen "+newPercent+"%,"+tempArr.join(",")+")";
					console.log(tempStr)
					base.lastChild.style.background = tempStr;
					HPCurrentPath.innerText = newHP;
					HPPercentagePath.innerText = newPercent+"%";
				}
			}
		}

		function DMGCalcPokStats(base) {
	
			var base;
			if (base.tagName != undefined) {
				base = base;
			}
			else {
				base = findUpTag(this,"UL");
			}

			var team = base.parentElement.getAttribute("name");
			var pok = base.getAttribute("name");

	
			var pokémon = base.querySelector(":scope *[name='pokémon'] select")
			var level = base.querySelector(":scope *[name='level'] input[type='number']")
			var ivs = base.querySelectorAll(":scope *[name='stats'] > *:last-child > *:nth-child(2) > input[type='number']:not(:first-child)");
			var evs = base.querySelectorAll(":scope *[name='stats'] > *:last-child > *:nth-child(3) > input[type='number']:not(:first-child)");
			var natures = base.querySelectorAll(":scope *[name='nature'] select");
			var friendship = base.querySelector(":scope *[name='friendship'] input[type='number']");
			var badges = base.querySelectorAll(":scope *[name='Badge-Group'] li");
			var maxhp = base.querySelector(":scope *[name='hp'] input");
			var maxhpInput = base.querySelector(":scope *[name='hp'] *[name='max']");
			var currenthpInput = base.querySelector(":scope *[name='hp'] *[name='current']");
		
			var res = base.querySelectorAll(":scope *[name='stats'] > *:last-child > *:last-child > input[type='number']:not(:first-child)");
			var mod = base.querySelectorAll(":scope *[name='stats'] > *:last-child > *[name='Mod'] > input[type='number']:not(:first-child)");
		

			if (pokémon.value != "") {

				var int = getPokémonInt(pokémon.value);
				for (var i = 0; i < res.length; i++) {

					var stat = Stats[i];

					var lvl = level.value;
					var base = returnData(int,"Base Stats "+stat,"")[0];
					var iv = ivs[i].value
					var ev = evs[i].value
					var nature;
					var friendship;

					if (Natures.length > 0) {
						nature = natureModifier(stat,natures[0].value);
					}
					else {
						nature = 1;
					}

					if (friendship != undefined) {
						if (friendship.value != undefined && friendship.value != "") {
							friendship = friendshipModifer(friendship.value);
						}
						else {
							friendship = 1;
						}
					}
					else {
						friendship = 1;
					}
					

					if (lvl != "") {
						if (iv == "") {
							iv = 0;
						}
						if (ev == "") {
							ev = 0;
						}
						res[i].setAttribute("min",statsCalc(stat,lvl,base,iv,ev,nature,friendship));
						res[i].setAttribute("max",statsCalc(stat,lvl,base,iv,ev,nature,friendship));
						res[i].value = statsCalc(stat,lvl,base,iv,ev,nature,friendship);

						if (stat == "HP") {
							var hpPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[name='"+pok+"'] *[name='hp']")
							var hpCurrent =  hpPath.querySelector(":scope *[name='current']");
							var hpMax =  hpPath.querySelector(":scope *[name='max']");
							var val = statsCalc(stat,lvl,base,iv,ev,nature,friendship);

							maxhp.setAttribute("max",val);
							maxhp.value = val;

							hpCurrent.innerText = maxhp.value;
							hpMax.innerText = val;

							currenthpInput.setAttribute("max",val)
							currenthpInput.value = val;
							maxhpInput.setAttribute("min",val)
							maxhpInput.setAttribute("max",val)
							maxhpInput.value = val;


						}
					}
					else {
						res[i].setAttribute("min","0");
						res[i].setAttribute("max","0");
						res[i].value = 0;
					}


					for (var b = 0; b < badges.length; b++) {
						var input = badges[b].querySelector(":scope input");
						if (input.checked) {
							if (getApplicable("Red,Blue,Yellow")) {
								if (badges[b].getAttribute("name") == "Boulder Badge") {
									if (res[i].getAttribute("name") == "Attack") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Thunder Badge") {
									if (res[i].getAttribute("name") == "Defense") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Volcano Badge") {
									if (res[i].getAttribute("name") == "Special") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Soul Badge") {
									if (res[i].getAttribute("name") == "Speed") {
										res[i].value = res[i].value * 1.125;
									}
								}
							}
							else if (getApplicable("Gold,Silver,Crystal")) {
								if (badges[b].getAttribute("name") == "Zephyr Badge") {
									if (res[i].getAttribute("name") == "Attack") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Mineral Badge") {
									if (res[i].getAttribute("name") == "Defense") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Glacier Badge") {
									if (res[i].getAttribute("name") == "Sp. Atk") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Glacier Badge") {
									var check = true;
									if (res[i].value >= 206 && res[i].value <= 432) {
										check = false;
									}
									if (check) {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Plain Badge") {
									if (res[i].getAttribute("name") == "Speed") {
										res[i].value = res[i].value * 1.125;
									}
								}
							}
							else if (getApplicable("FireRed,LeafGreen")) {
								if (badges[b].getAttribute("name") == "Boulder Badge") {
									if (res[i].getAttribute("name") == "Attack") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Soul Badge") {
									if (res[i].getAttribute("name") == "Defense") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Volcano Badge") {
									if (res[i].getAttribute("name") == "Sp. Atk") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Volcano Badge") {
									if (res[i].getAttribute("name") == "Sp. Def") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Thunder Badge") {
									if (res[i].getAttribute("name") == "Speed") {
										res[i].value = res[i].value * 1.125;
									}
								}
							}
							else if (getApplicable("Ruby,Sapphire,Emerald")) {
								if (badges[b].getAttribute("name") == "Stone Badge") {
									if (res[i].getAttribute("name") == "Attack") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Balance Badge") {
									if (res[i].getAttribute("name") == "Defense") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Mind Badge") {
									if (res[i].getAttribute("name") == "Sp. Atk") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Mind Badge") {
									if (res[i].getAttribute("name") == "Sp. Def") {
										res[i].value = res[i].value * 1.125;
									}
								}
								if (badges[b].getAttribute("name") == "Dynamo Badge") {
									if (res[i].getAttribute("name") == "Speed") {
										res[i].value = res[i].value * 1.125;
									}
								}
							}
						}
					}


					res[i].setAttribute("data-nomod",res[i].value);
					

					if (i != 0) {
						if (Generation >= 1 && Generation <= 2) {
							if (mod[i].value == -6) {
								res[i].value = Math.round(parseInt(res[i].value)*0.25);
							}
							if (mod[i].value == -5) {
								res[i].value = Math.round(parseInt(res[i].value)*0.28);
							}
							if (mod[i].value == -4) {
								res[i].value = Math.round(parseInt(res[i].value)*0.33);
							}
							if (mod[i].value == -3) {
								res[i].value = Math.round(parseInt(res[i].value)*0.4);
							}
							if (mod[i].value == -2) {
								res[i].value = Math.round(parseInt(res[i].value)*0.5);
							}
							if (mod[i].value == -1) {
								res[i].value = Math.round(parseInt(res[i].value)*0.66);
							}
							if (mod[i].value == 0) {
								res[i].value = Math.round(parseInt(res[i].value)*1);
							}
							if (mod[i].value == 1) {
								res[i].value = Math.round(parseInt(res[i].value)*1.5);
							}
							if (mod[i].value == 2) {
								res[i].value = Math.round(parseInt(res[i].value)*2);
							}
							if (mod[i].value == 3) {
								res[i].value = Math.round(parseInt(res[i].value)*2.5);
							}
							if (mod[i].value == 4) {
								res[i].value = Math.round(parseInt(res[i].value)*3);
							}
							if (mod[i].value == 5) {
								res[i].value = Math.round(parseInt(res[i].value)*3.5);
							}
							if (mod[i].value == 6) {
								res[i].value = Math.round(parseInt(res[i].value)*4);
							}
						}
						else {
							if (mod[i].value == -6) {
								res[i].value = Math.round(parseInt(res[i].value)*0.25);
							}
							if (mod[i].value == -5) {
								res[i].value = Math.round(parseInt(res[i].value)*0.2857142857);
							}
							if (mod[i].value == -4) {
								res[i].value = Math.round(parseInt(res[i].value)*0.3333333333);
							}
							if (mod[i].value == -3) {
								res[i].value = Math.round(parseInt(res[i].value)*0.4);
							}
							if (mod[i].value == -2) {
								res[i].value = Math.round(parseInt(res[i].value)*0.5);
							}
							if (mod[i].value == -1) {
								res[i].value = Math.round(parseInt(res[i].value)*0.6666666667);
							}
							if (mod[i].value == 0) {
								res[i].value = Math.round(parseInt(res[i].value)*1);
							}
							if (mod[i].value == 1) {
								res[i].value = Math.round(parseInt(res[i].value)*1.5);
							}
							if (mod[i].value == 2) {
								res[i].value = Math.round(parseInt(res[i].value)*2);
							}
							if (mod[i].value == 3) {
								res[i].value = Math.round(parseInt(res[i].value)*2.5);
							}
							if (mod[i].value == 4) {
								res[i].value = Math.round(parseInt(res[i].value)*3);
							}
							if (mod[i].value == 5) {
								res[i].value = Math.round(parseInt(res[i].value)*3.5);
							}
							if (mod[i].value == 6) {
								res[i].value = Math.round(parseInt(res[i].value)*4);
							}
						}

						if (Generation >= 1 && Generation <= 2) {
							if (res[i].value > 999) {
								res[i].value = 999;
							}
						}
					}

				}
			}


			
		}
		function DMGSetInfo() {
			var acc = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] *[name='accuracy']");
			var pwr = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] *[name='power']");
			var sel = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div:last-child > span select");
			var inp = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div:last-child > span:first-child input");

			var strikes = [1,1];

			for (var a = 0; a < finaldataMoveAdditional.length; a++) {
				if (finaldataMoveAdditional[a]["Additional"] == "Multi-strike") {
					if (getApplicable(finaldataMoveAdditional[a]["Game"])) {
						if (finaldataMoveAdditional[a]["Move"] == sel.value) {
							if (finaldataMoveAdditional[a]["Value"] != undefined) {
								if (finaldataMoveAdditional[a]["Value"].includes("-")) {
									var val1 = finaldataMoveAdditional[a]["Value"].split("-")[0];
									var val2 = finaldataMoveAdditional[a]["Value"].split("-")[1];
									strikes = [val1,val2];
								}
								else {
									strikes = [finaldataMoveAdditional[a]["Value"],finaldataMoveAdditional[a]["Value"]];
								}
							}
						}
					}
				}
			}

			inp.setAttribute("min",strikes[0]);
			inp.setAttribute("max",strikes[1]);

			inp.value = strikes[0];

			if (strikes[0] == 1 && strikes[1] == 1) {
				inp.setAttribute("disabled","")
			}
			else {
				inp.removeAttribute("disabled");
			}

			sel.style.color = "var(--type"+getMoveData(sel.value,"Type")+")";

			var accVal = getMoveData(sel.value,"Accuracy");
			var pwrVal = getMoveData(sel.value,"Power");
			
			if (pwrVal != undefined) {
				pwr.innerText = pwrVal;
			}
			else {
				pwr.innerText = "-";
			}

			if (accVal != undefined) {
				acc.innerText = accVal;
			}
			else {
				acc.innerText = "-";
			}

			var range = getMoveData(sel.value,"Range");

			if (range != undefined) {
				toolSectionContentDMGResult.setAttribute("data-range",range)
			}
			else {
				toolSectionContentDMGResult.setAttribute("data-range","")
			}
			DMGSetPossible();


			
		}
		function DMGSetChange(base) {

			var base;
			if (base.tagName != undefined) {
				base = base;
			}
			else {
				base = findUpTag(this,"UL");
			}

			var team = base.parentElement.getAttribute("name");
			var pok = base.getAttribute("name");
			var tar = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[name='"+pok+"']")
			
			var pokImgPath = tar.querySelector(":scope *[name='img']");
			var pokItemPath = tar.querySelector(":scope *[name='item']");
			var pokNamePath = tar.querySelector(":scope *[name='name'] > *");
			var pokMovesPath = tar.querySelectorAll(":scope *[name='moves'] > *");
			

			var pokPath = base.querySelector(":scope *[name='pokémon'] select");
			var statsPath = base.querySelector(":scope *[name='stats']");
			var ivPath = statsPath.querySelectorAll(":scope *[name='IV'] > input:not(:first-child)");
			var evPath = statsPath.querySelectorAll(":scope *[name='EV'] > input:not(:first-child)");
			var abilityPath = base.querySelector(":scope *[name='ability'] select");
			var genderPath = base.querySelector(":scope *[name='gender'] select");
			var itemPath = base.querySelector(":scope *[name='item'] select");
			var friendshipPath = base.querySelector(":scope *[name='friendship'] input");
			var naturePath = base.querySelector(":scope *[name='nature'] select");
			var levelPath = base.querySelector(":scope *[name='level'] input");
			var movesPath = base.querySelectorAll(":scope *[name='moves'] select");
		
			var disabled = base.querySelectorAll(":scope *[setDisable]");
			var checks = base.querySelectorAll(":scope input[type='checkbox']");
			var nums = base.querySelectorAll(":scope > li:not([name='stats']) input[type='number']");


			var dataString = dataStringToObj(tar.getAttribute("data-string"));



			
			pokImgPath.src = "";
			pokImgPath.title = "";
			if (HeldItem) {
				pokItemPath.src = "";
				pokItemPath.title = "";
			}
			pokNamePath.innerText = "";

			for(var i = 0; i < pokMovesPath.length; i++) {
				pokMovesPath[i].firstChild.innerText = "";
				pokMovesPath[i].firstChild.removeAttribute("name");
			}

			

			var itPath = ImageTypes[0]["path"];
			var itCategory = ImageTypes[0]["category"];
			var itAngle = ImageTypes[0]["angle"];
			var itType = ImageTypes[0]["type"];
			var itExt = ImageTypes[0]["extension"];
			var check = false;



			if (dataString != undefined) {
				var int;
				var pokémon;
				var nature;
				var level;
				var gender;
				var friendship;
				var ability;
				var item;
				var iv;
				var ev;
				var moves;

	
				if (dataString["pok"] != undefined) {
					pokémon = dataString["pok"];
				}
				if (dataString["na"] != undefined) {
					nature = dataString["na"];
				}
				if (dataString["lv"] != undefined) {
					level = dataString["lv"];
				}
				if (dataString["ge"] != undefined) {
					gender = dataString["ge"];
				}
				if (dataString["fr"] != undefined) {
					friendship = dataString["fr"];
				}
				if (dataString["ab"] != undefined) {
					ability = dataString["ab"];
				}
				if (dataString["it"] != undefined) {
					item = dataString["it"];
				}
				if (dataString["mo"] != undefined) {
					moves = dataString["mo"];
				}
				if (dataString["iv"] != undefined) {
					iv = dataString["iv"];
				}
				if (dataString["ev"] != undefined) {
					ev = dataString["ev"];
				}
				

				int = getPokémonInt(pokémon);

				if (int != undefined) {
					check = true;
				}
			}

			if (check) {

				for(var i = 0; i < disabled.length; i++) {
					disabled[i].removeAttribute("disabled");
				}
				statsPath.classList.remove("disabled");

				for(var i = 0; i < checks.length; i++) {
					checks[i].removeAttribute("disabled");
				}
				for(var i = 0; i < nums.length; i++) {
					nums[i].removeAttribute("disabled");
				}

				pokImgPath.src = "./media/Images/Pokémon/"+itCategory+"/"+itExt+"/"+itType+"/"+itAngle+"/"+itPath+"/"+getPokémonMediaPath(int,"Battle")+"."+itExt;
				pokImgPath.title = getPokémonName(int);

				if (HeldItem) {
					pokItemPath.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(itemPath.value)+".png";
					pokItemPath.title = itemPath.value;
				}
				pokNamePath.innerText = getPokémonName(int);

				if (pokémon != undefined) {
					pokPath.value = pokémon;
				}

				if (Natures.length > 0) {
					if (nature != undefined) {
						naturePath.value = nature;
					}
				}
				if (level != undefined) {
					levelPath.value = level;
				}
				
				
				if (Gender) {
					if (gender != undefined) {
						genderPath.value = gender;
					}
				}
				if (Friendship) {
					if (friendship != undefined) {
						friendshipPath.value = friendship;
					}
				}
				if (Ability.length > 0) {
					if (ability != undefined) {
						var val = abilityPath.querySelector(":scope > *[name='"+ability+"']");
						
						if (val != undefined) {
							abilityPath.value = val.value;
						}
					}
				}
				if (HeldItem) {
					if (item != undefined) {
						itemPath.value = item;
					}
				}

				if (moves != undefined) {
					if (moves.includes(",")) {
						moves = moves.split(",");
						if (moves.length == movesPath.length) {
							for(var v = 0; v < movesPath.length; v++) {
								if(moves[v] != undefined && moves[v] != "") {
									if (getMoveData(moves[v],"Type") != undefined) {
										movesPath[v].style.color = "var(--type"+getMoveData(moves[v],"Type")+")";
									}
									movesPath[v].value = moves[v];
								}
							}
						}
						if (moves.length == pokMovesPath.length) {
							for(var v = 0; v < pokMovesPath.length; v++) {
								if(moves[v] != undefined && !moves[v].includes("#")) {
									pokMovesPath[v].firstChild.innerText = moves[v];
									pokMovesPath[v].firstChild.setAttribute("name",moves[v]);
								}
							}
						}
					}
				}
				

				if (iv != undefined) {
					if (iv.includes(",")) {
						var ivs = iv.split(",");
						if (ivs.length == ivPath.length) {
							for(var v = 0; v < ivs.length; v++) {
								ivPath[v].value = ivs[v];
							}
						}
					}
				}

				if (ev != undefined) {
					if (ev.includes(",")) {
						var evs = ev.split(",");
						if (evs.length == evPath.length) {
							for(var v = 0; v < evs.length; v++) {
								evPath[v].value = evs[v];
							}
						}
					}
				}

			}
			else {
				for(var i = 0; i < checks.length; i++) {
					checks[i].setAttribute("disabled","");
				}

				for(var i = 0; i < nums.length; i++) {
					nums[i].setAttribute("disabled","");
				}

				for(var i = 0; i < disabled.length; i++) {
					disabled[i].setAttribute("disabled","");
				}
				statsPath.classList.add("disabled");
			}


			

		}
		function DMGSetActive() {

			var y = undefined;
			var check = false;

			if (this.parentElement.getAttribute("name").includes("player")) {
				check = true;
				y = "player";
			}
			else if (this.classList.contains("target")) {
				check = true;
				y = "opponent";
			}

			var x = this.parentElement.parentElement.querySelectorAll(":scope > *[name*='"+y+"'] > *[name].active");

			for(var i = 0; i < x.length; i++) {
				x[i].classList.remove("active");
			}

			if (check) {
				this.classList.add("active");
				DMGSetPossible();
			}
		}
		function DMGSetPossible() {

			var set = false;
			var tars = [];
			var base = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result']");


			var previous = base.querySelectorAll(":scope > *[name] > *[name]");
			for(var a = 0; a < previous.length; a++) {
				previous[a].classList.remove("target");
			}



			var player = base.querySelectorAll(":scope > *[name*='player'] > *.active");
			var playerTemp = base.querySelectorAll(":scope > *[name*='player'] > *[name]");

			var New = false;


			if (!player.length > 0) {
				player = playerTemp;
				New = true;
			}


			var id = player[0].getAttribute("name");


			var idPrevious = parseInt(id)-1;
			var idNext = parseInt(id)+1;



			var adjacent = [];




			var allies = base.querySelectorAll(":scope > *[name*='player'] > *[name]:not([name='"+id+"'])");
			var enemies = base.querySelectorAll(":scope > *[name*='opponent'] > *[name]");
			var all = base.querySelectorAll(":scope > *[name] > *[name]");
			var target = base.querySelectorAll(":scope > *[name*='opponent'] > *.active");

			if (New) {
				player[0].classList.add("active");
				enemies[0].classList.add("active");
			}

			var adjacentTop = player[0].parentElement.querySelector(":scope > *[name='"+idPrevious+"']");
			var adjacentBottom = player[0].parentElement.querySelector(":scope > *[name='"+idNext+"']");

			if (adjacentTop != undefined) {
				adjacent.push(adjacentTop)
			}
			if (adjacentBottom != undefined) {
				adjacent.push(adjacentBottom)
			}

			if (player[0].parentElement.previousElementSibling != undefined) {
				var adjacentLeftTop = player[0].parentElement.previousElementSibling.querySelector(":scope > *[name='"+idPrevious+"']");
				var adjacentLeft = player[0].parentElement.previousElementSibling.querySelector(":scope > *[name='"+id+"']");
				var adjacentLeftBottom = player[0].parentElement.previousElementSibling.querySelector(":scope > *[name='"+idNext+"']");
				if (adjacentLeftTop != undefined) {
					adjacent.push(adjacentLeftTop)
				}
				if (adjacentLeft != undefined) {
					adjacent.push(adjacentLeft)
				}
				if (adjacentLeftBottom != undefined) {
					adjacent.push(adjacentLeftBottom)
				}
			}
			
			if (player[0].parentElement.nextElementSibling != undefined) {
				var adjacentRightTop = player[0].parentElement.nextElementSibling.querySelector(":scope > *[name='"+idPrevious+"']");
				var adjacentRight = player[0].parentElement.nextElementSibling.querySelector(":scope > *[name='"+id+"']");
				var adjacentRightBottom = player[0].parentElement.nextElementSibling.querySelector(":scope > *[name='"+idNext+"']");
				if (adjacentRightTop != undefined) {
					adjacent.push(adjacentRightTop)
				}
				if (adjacentRight != undefined) {
					adjacent.push(adjacentRight)
				}
				if (adjacentRightBottom != undefined) {
					adjacent.push(adjacentRightBottom)
				}
			}

			if (base.getAttribute("data-range") == "May affect anyone adjacent to the user") {
				for(var a = 0; a < adjacent.length; a++) {
					tars.push(adjacent[a])
				}
			}


			if (base.getAttribute("data-range") == "Affects all adjacent foes, but not allies") {
				for(var a = 0; a < adjacent.length; a++) {
					var check = true;
					for(var al = 0; al < allies.length; al++) {
						if (allies[al] == adjacent[a]) {
							check = false;
							break;
						}
					}
					if (check) {
						tars.push(adjacent[a])
					}
				}
			}


			if (base.getAttribute("data-range") == "Affects the user") {
				for(var a = 0; a < player.length; a++) {
					tars.push(player[a])
				}
			}

			if (base.getAttribute("data-range") == "May affect anyone but the user") {
				for(var a = 0; a < all.length; a++) {
					var check = true;
	
					for(var al = 0; al < player.length; al++) {
						if (player[al] == all[a]) {
							check = false;
							break;
						}
					}
					if (check) {
						tars.push(all[a])
					}
				}
			}
	

			if (base.getAttribute("data-range") == "Affects the user and all allies") {
				for(var a = 0; a < player.length; a++) {
					tars.push(player[a])
				}
				for(var a = 0; a < allies.length; a++) {
					tars.push(allies[a])
				}
			}



			if (base.getAttribute("data-range") == "Affects all Pokémon adjacent to the user") {
				for(var a = 0; a < adjacent.length; a++) {
					tars.push(adjacent[a])
				}
			}

			if (base.getAttribute("data-range") == "Affects all Pokémon on the field") {
				for(var a = 0; a < all.length; a++) {
					tars.push(all[a])
				}
			}

			if (base.getAttribute("data-range") == "Affects all foes") {
				for(var a = 0; a < enemies.length; a++) {
					tars.push(enemies[a])
				}
			}



			if (base.getAttribute("data-range") == "Affects an adjacent ally") {
				for(var a = 0; a < adjacent.length; a++) {
					var check = false;
					for(var al = 0; al < allies.length; al++) {
						if (allies[al] == adjacent[a]) {
							check = true;
							break;
						}
					}
					if (check) {
						tars.push(adjacent[a])
					}
				}
			}
			if (base.getAttribute("data-range") == "Affects an adjacent ally") {
				for(var a = 0; a < adjacent.length; a++) {
					var check = false;
					for(var al = 0; al < allies.length; al++) {
						if (allies[al] == adjacent[a]) {
							check = true;
							break;
						}
					}
					if (check) {
						tars.push(adjacent[a])
					}
				}
				for(var a = 0; a < player.length; a++) {
					tars.push(player[a])
				}
			}

			if (base.getAttribute("data-range") == "May affect any adjacent foe, but not allies") {
				for(var a = 0; a < adjacent.length; a++) {
					var check = true;
					for(var al = 0; al < allies.length; al++) {
						if (allies[al] == adjacent[a]) {
							check = false;
							break;
						}
					}
					if (check) {
						tars.push(adjacent[a])
					}
				}
			}


			if (base.getAttribute("data-range") == "Affects all allies") {
				for(var a = 0; a < allies.length; a++) {
					tars.push(allies[a])
				}
			}


			var range = base.getAttribute("data-range");
			if (range != undefined) {
				if (range.includes(" ")) {
					if (base.getAttribute("data-range").split(" ")[0] == "Affects") {
						set = true;
					}
					else {
						set = false;
					}
				}
			}


			for(var a = 0; a < tars.length; a++) {
				tars[a].classList.add("target");
			}
		

		}
		function DMGPokSpecific(base) {
			var base;
			if (base.tagName != undefined) {
				base = base;
			}
			else {
				base = findUpTag(this,"UL");
			}

			var team = base.parentElement.getAttribute("name");
			var pok = base.getAttribute("name");
			var tar = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[name='"+pok+"']")
	

			
			var abilityPath = base.querySelector(":scope *[name='ability'] select");
			var genderPath = base.querySelector(":scope *[name='gender'] select");
			var itemPath = base.querySelector(":scope *[name='item'] select");
			var friendshipPath = base.querySelector(":scope *[name='friendship'] input");

			var pokNameVal = dataStringToObj(tar.getAttribute("data-string"));

			var int;
			var check = false;

			if (pokNameVal != undefined) {
		
				if (pokNameVal["pok"] != undefined) {
					int = getPokémonInt(pokNameVal["pok"]);
				}
				
				if (int != undefined) {
					check = true;
				}
			}
			
	
			if (check) {

				if (Friendship) {
					if (friendshipPath.value != 0) {
						var basefriendship = returnData(int,"Base Friendship","")[0];
						if (basefriendship != undefined) {
							friendshipPath.value = basefriendship;
						}
					}
				}


				if (Ability.length > 0) {
					var abilities = returnData(int,"Ability","");
					if (abilities[0] != "") {
						abilities.unshift("");
					}

					var storeAbilityVal = abilityPath.value;
					
					abilityPath.innerHTML = "";

					for (var q = 0; q < abilities.length; q++) {
						if (abilities[q] != undefined) {
							var option = document.createElement("option");
							option.innerText = abilities[q];
							option.value = abilities[q];
							option.setAttribute("name",getAbilityPosition(int,abilities[q]));
							abilityPath.appendChild(option)
						}
					}

					if (abilities.includes(storeAbilityVal)) {
						abilityPath.value = storeAbilityVal;
					}
					else {
						abilityPath.value = abilityPath.firstChild.value;
					}
				}

				
				if (Gender) {
					var genders = [];

					var tempgender = returnData(int,"Gender Ratio","undefined");
					if (getPokémonName(int).includes("Male")) {
						genders = ["♂"];
					}
					else if (getPokémonName(int).includes("Female")) {
						genders = ["♀"];
					}
					else {
						if (tempgender[0] == "0" && tempgender[1] == "0") {
							genders = ["☿"];
						}
						else if (tempgender[0] == "0") {
							genders = ["♀"];
						}
						else if (tempgender[1] == "0") {
							genders = ["♂"];
						}
						else {
							genders = ["♂","♀"];
						}
					}

					if (genders[0] != "") {
						genders.unshift("");
					}

					var storeGenderVal = genderPath.value.toString();

					genderPath.innerHTML = "";


					for (var q = 0; q < genders.length; q++) {
						var option = document.createElement("option");
						option.innerText = genders[q];
						option.value = genders[q];
						option.setAttribute("name",genders[q]);
						genderPath.appendChild(option)
					}
					if (genders.includes(storeGenderVal)) {
						genderPath.value = storeGenderVal;
					}
					else {
						genderPath.value = genderPath.firstChild.value;
					}
				}


				if (HeldItem) {

					var result = returnSortedItemsList(int);

					var storeItemVal = itemPath.value.toString();

					itemPath.innerHTML = "";

					var items = [];
					for (var q = 0; q < result.length; q++) {
						items.push(result[q]["Item"])
					}

					for (var q = 0; q < items.length; q++) {
						var option = document.createElement("option");
						option.innerText = items[q];
						option.value = items[q];
						itemPath.appendChild(option);
					}
					if (items.includes(storeItemVal)) {
						itemPath.value = storeItemVal;
					}
					else {
						itemPath.value = itemPath.firstChild.value;
					}
				}
		}



		}
		function DMGClearData(base) {
			var base
			if (base.tagName != undefined) {
				base = base;
			}
			else {
				base = findUpTag(this,"UL");
			}

			var team = base.parentElement.getAttribute("name");
			var pok = base.getAttribute("name");
			var target = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[name='"+pok+"']");
		

			if (target != undefined) {
				var pokPath = base.querySelector(":scope *[name='pokémon'] select");
				var lvlPath = base.querySelector(":scope *[name='level'] input");
				var abilityPath = base.querySelector(":scope *[name='ability'] select");
				var genderPath = base.querySelector(":scope *[name='gender'] select");
				var itemPath = base.querySelector(":scope *[name='item'] select");
				var friendshipPath = base.querySelector(":scope *[name='friendship'] input");
				var naturePath = base.querySelector(":scope *[name='nature'] select");
				var movesPath = base.querySelectorAll(":scope *[name='moves'] select");
				var ivsPath = base.querySelectorAll(":scope *[name='stats'] *[name='IV'] input:not(:first-child)");
				var evsPath = base.querySelectorAll(":scope *[name='stats'] *[name='EV'] input:not(:first-child)");
				var totalPath = base.querySelectorAll(":scope *[name='stats'] > * > *:last-child input:not(:first-child)");

				pokPath.value = pokPath.firstChild.value;
				lvlPath.value = lvlPath.getAttribute("min");
				if (abilityPath != undefined) {
					abilityPath.value = abilityPath.firstChild.value;
				}
				if (genderPath != undefined) {
					genderPath.value = genderPath.firstChild.value;
				}
				if (itemPath != undefined) {
					itemPath.value = itemPath.firstChild.value;
				}
				if (friendshipPath != undefined) {
					friendshipPath.value = friendshipPath.getAttribute("min");
				}
				if (naturePath != undefined) {
					naturePath.value = naturePath.firstChild.value;
				}

				for(var e = 0; e < movesPath.length; e++) {
					movesPath[e].style.removeProperty("color");
					movesPath[e].value = movesPath[e].firstChild.value;
				}
				for(var e = 0; e < ivsPath.length; e++) {
					ivsPath[e].value = "";
				}
				for(var e = 0; e < evsPath.length; e++) {
					evsPath[e].value = "";
				}
				for(var e = 0; e < totalPath.length; e++) {
					totalPath[e].value = 0;
				}
			}
		}

		function DMGSaveData(base) {

			var base
			if (base.tagName != undefined) {
				base = base;
			}
			else {
				base = findUpTag(this,"UL");
			}

			var team = base.parentElement.getAttribute("name");
			var pok = base.getAttribute("name");
			var target = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[name='"+pok+"']");
		

			if (target != undefined) {
				var pokPath = base.querySelector(":scope *[name='pokémon'] select");
				var lvlPath = base.querySelector(":scope *[name='level'] input");
				var abilityPath = base.querySelector(":scope *[name='ability'] select");
				var genderPath = base.querySelector(":scope *[name='gender'] select");
				var itemPath = base.querySelector(":scope *[name='item'] select");
				var friendshipPath = base.querySelector(":scope *[name='friendship'] input");
				var naturePath = base.querySelector(":scope *[name='nature'] select");
				var movesPath = base.querySelectorAll(":scope *[name='moves'] select");
				var ivsPath = base.querySelectorAll(":scope *[name='stats'] *[name='IV'] input:not(:first-child)");
				var evsPath = base.querySelectorAll(":scope *[name='stats'] *[name='EV'] input:not(:first-child)");
		 
				var datas = target.getAttribute("data-string");
	
				var stringObj = dataStringToObj(datas);

				if (pokPath.value != undefined) {
					stringObj["pok"] = pokPath.value;
				}
				if (lvlPath.value != undefined) {
					stringObj["lv"] = lvlPath.value;
				}
				if (abilityPath != undefined) {
					stringObj["ab"] = abilityPath.value;
				}
				if (genderPath != undefined) {
					stringObj["ge"] = genderPath.value;
				}
				if (itemPath != undefined) {
					stringObj["it"] = itemPath.value;
				}
				if (friendshipPath != undefined) {
					stringObj["fr"] = friendshipPath.value;
				}
				if (naturePath != undefined) {
					stringObj["na"] = naturePath.value;
				}


				var moves = [];
				for (var e = 0; e < movesPath.length; e++) {
					if (movesPath[e].value.includes("#")) {
						moves.push("");
					}
					else {
						moves.push(movesPath[e].value)
					}
				}
				stringObj["mo"] = moves.join(",");
				

				var ivs = [];
				for (var e = 0; e < ivsPath.length; e++) {
					ivs.push(ivsPath[e].value)
				}
				stringObj["iv"] = ivs.join(",");

				var evs = [];
				for (var e = 0; e < evsPath.length; e++) {
					evs.push(evsPath[e].value)
				}
				stringObj["ev"] = evs.join(",");

				var keys = Object.keys(stringObj)
				var tempArr = [];
				for (var e = 0; e < keys.length; e++) {
					tempArr.push(keys[e]+":"+stringObj[keys[e]])
				}
		
				target.setAttribute("data-string",tempArr.join("|"))
			}
		}
		function DMGMatchPosition() {
			var poks = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > *[name]");
			var datas1 = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div ol[name='pokémon'] > *[name]");
			var datas2 = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div ol[name='team'] > *[name]");
			var selects = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:first-child > span > select");
			var order = [];
			for(var p = 0; p < poks.length; p++) {
				order.push(poks[p].getAttribute("name"));
			}

			for(var o = 0; o < order.length; o++) {
				for(var p = 0; p < datas1.length; p++) {
					if (datas1[p].getAttribute("name") == order[o]) {
						datas1[p].parentElement.appendChild(datas1[p]);
					}
				}
				for(var p = 0; p < datas2.length; p++) {
					if (datas2[p].getAttribute("name") == order[o]) {
						datas2[p].parentElement.appendChild(datas2[p]);
					}
				}
				for(var p = 0; p < selects.length; p++) {
					if (selects[p].getAttribute("name") == order[o]) {
						selects[p].parentElement.appendChild(selects[p]);
					}
				}
			}
	

			
		}
		function DMGSetDataString() {
			var data = prompt("Enter Pokémon Data String:","");

			if (data != null && data != "") {
				if (data.includes("pok:")) {
					var temparr = [];
					var tempstr;
		
					if (data.includes("|")) {
						temparr = data.split("pok:");
						if (temparr.length > 1) {
							temparr = temparr[1].split("|");
							tempstr = getPokémonInt(temparr[0]);
						}
					}
					else {
						temparr = data.split("pok:");
						tempstr = getPokémonInt(temparr[1]);
					}
					if (tempstr != undefined) {
						if (finaldataPokémon[parseInt(tempstr)][JSONPath_Reference] == "true") {
							var team = this.parentElement.parentElement.parentElement.getAttribute("name");
							var pok = this.parentElement.parentElement.getAttribute("name");
							var base = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div *[name='"+team+"'] ul[name='"+pok+"']");

							this.parentElement.parentElement.setAttribute("data-string",data);

							DMGPokSpecific(base)
							DMGSetChange(base);
							DMGCalcPokStats(base);
							DMGCalcStart(base);
						}
						else {
							consoleText("Pokémon Unavailable.")
						}
					}
					else {
						consoleText("Data returned an error.")
					}
				}
				else {
					consoleText("Data returned an error.")
				}
			}
		}
		function DMGRemoveDataString(base) {

			var base
			if (base.tagName != undefined) {
				base = base;
			}
			else {
				base = findUpTag(this,"DIV");
			}

			var team = base.parentElement.getAttribute("name");
			var pok = base.getAttribute("name");
			var target = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+team+"'] ul[name='"+pok+"']");
		

			
			var ask = confirm("The Pokémon's data will not be saved.\nDo you want to continue?");

			if (ask) {
				base.setAttribute("data-string","");
				DMGClearData(target);
				DMGSaveData(target);
				DMGSetChange(target);
			}
			

		}
		function DMGExportDataString() {
			var base = findUpTag(this,"DIV");
			var str = base.getAttribute("data-string");
			navigator.clipboard.writeText(str);
			console.log(str)
			consoleText("Copied Data String!")
		}

	}
	createTimer();
	createRNG();
	createType();
	createDamageCalc();


	var toolOptionsTitle = ["Timers","Random Number Generator","Type Advantage","Damage Calculator"];

	// Counter, Damage Calculator, Catch Rate Calculator, Shiny Odds Calculator, Item/Move/Type/Ability/Location Checklist

	for(var q = 0; q < toolOptionsTitle.length; q++) {
		var toolSectionListOptionsInput = document.createElement("input");
		var toolSectionListOptionsLabel = document.createElement("label");
		toolSectionListOptionsInput.setAttribute("type","radio");
		toolSectionListOptionsInput.setAttribute("name","tool-options");
		toolSectionListOptionsInput.setAttribute("id","tool-options-" + q);
		toolSectionListOptionsInput.setAttribute("autocomplete","off");
		toolSectionListOptionsInput.value = q;
		toolSectionListOptionsLabel.setAttribute("for","tool-options-" + q);
		toolSectionListOptionsLabel.setAttribute("type","medium");
		toolSectionListOptionsLabel.innerHTML = toolOptionsTitle[q];
		toolSectionListOptions.appendChild(toolSectionListOptionsInput);
		toolSectionListOptions.appendChild(toolSectionListOptionsLabel);
		toolSectionListOptionsInput.addEventListener("click", toolOptionsSelector);

		function toolOptionsSelector() {
			var i = this.value;
			toolSectionHeaderTitleText.innerText = toolOptionsTitle[i];
			var toolContents = document.querySelectorAll("#tool section[name='content'] > div[value]");
			var toolContent = document.querySelectorAll("#tool section[name='content'] > div[value='"+i+"']");
			for(var q = 0; q < toolContents.length; q++) {
				toolContents[q].style.display = "none";
			}
			for(var q = 0; q < toolContent.length; q++) {
				toolContent[q].style.display = "block";
			}
		}
		if(q == 0) {
			toolSectionListOptionsLabel.click();
		}
	}


};

function countdown() {

	var base = document.querySelector('#contain div#tool > section[name="content"] > div[name="timer"] > *[name="countdown"]')
	var audiopath = "./media/Sounds/FinalDex/Complete.wav";

	var countdownInput = base.querySelectorAll(":scope input");
	var countdownPlayButton = base.querySelector(":scope b[title='Play']");
	var countdownPauseButton = base.querySelector(":scope b[title='Pause']");
	var countdownResetButton = base.querySelector(":scope *[name='reset']");
	var countdownLapsButton = base.querySelector(":scope *[name='lap']");

	var countdownTimeContainer = base.querySelector(':scope > div > div > data > *');
	var countdownInputContainer = base.querySelector(':scope > div > div > span');
	var countdownSetContainer = base.querySelector(':scope > div > div');

	var countdownHoursInput = base.querySelector(":scope input[title='Hours']");
	var countdownMinutesInput = base.querySelector(":scope input[title='Minutes']");
	var countdownSecondsInput = base.querySelector(":scope input[title='Seconds']");
	var countdownMillisecondsInput = base.querySelector(":scope input[title='Milliseconds']");

	var countdownList = base.querySelector(":scope ul");


	/*
	    polyfills for IE8
	*/
	if(!Array.prototype.forEach) {
		Array.prototype.forEach = function(countdownCallback) {
			for(var i = 0; i < this.length; i++) {
				countdownCallback(this[i]);
			}
		};
	}
	if(!Array.prototype.map) {
		Array.prototype.map = function(countdownCallback) {
			var countdownItems = [];
			for(var i = 0; i < this.length; i++) {
				countdownItems.push(countdownCallback(this[i]));
			}
			return countdownItems;
		};
	}
	var countdownSecondInMilliseconds = 1000;
	var countdownMinuteInMilliseconds = 60 * countdownSecondInMilliseconds;
	var countdownHourInMilliseconds = 60 * countdownMinuteInMilliseconds;
	var countdownFloor = Math.floor;
	var countdownExtractMilliseconds = function(countdownTimeInMilliseconds) {
		return countdownTimeInMilliseconds % 1000;
	};
	var countdownExtractSeconds = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownSecondInMilliseconds);
	};
	var countdownExtractMinutes = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownMinuteInMilliseconds);
	};
	var countdownExtractHours = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownHourInMilliseconds);
	};
	var countdownPad = function(countdownNumber) {
		if(countdownNumber < 10) {
			return "0" + countdownNumber;
		} else {
			return countdownNumber;
		}
	};
	var countdownExtractTime = function(countdownTimeInMilliseconds) {
		var countdownMilliseconds = countdownExtractHours(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownHours * countdownHourInMilliseconds;
		var countdownMilliseconds = countdownExtractMinutes(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownMinutes * countdownMinuteInMilliseconds;
		var countdownMilliseconds = countdownExtractSeconds(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownSeconds * countdownSecondInMilliseconds;
		var countdownMilliseconds = countdownTimeInMilliseconds;
		return {
			countdownHours: countdownHours,
			countdownMinutes: countdownMinutes,
			countdownSeconds: countdownSeconds,
			countdownMilliseconds: countdownMilliseconds,
		};
	};
	var countdownLap = function(countdownNetTime, countdownPreviousLap) {
		this.countdownPreviousLap = countdownPreviousLap;
		this.countdownNetTime = countdownNetTime;
	};
	countdownLap.prototype = {
		countdownMilitaryTime: function(countdownTimeInMilliseconds) {
			var countdownTimeSeparator = ":";
			var countdownTime = countdownExtractTime(countdownTimeInMilliseconds);
			countdownTime.countdownMilliseconds = countdownTime.countdownMilliseconds / 10;
			return ["countdownHours", "countdownMinutes", "countdownSeconds", "countdownMilliseconds", ].map(function(countdownProperty) {
				return countdownPad(countdownTime[countdownProperty]);
			}).join(countdownTimeSeparator);
		},
		countdownSplitString: function() {
			if(this.countdownPreviousLap != null) {
				var countdownTimeDifference = this.countdownNetTime - this.countdownPreviousLap.countdownNetTime;
				return this.countdownMilitaryTime(countdownTimeDifference);
			} else {
				return this.countdownMilitaryTime(this.countdownNetTime);
			}
		},
	};
	var CountDown = (window.CountDown = function(countdownOptions) {
		if(countdownOptions == null) {
			countdownOptions = {};
		}
		var countdown_this = this;
		var countdownCallbackProperties = ["countdownCallback", "countdownCallbackTarget", "countdownLapCallback", "countdownLapCallbackTarget", ];
		var countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
	
		for(var i = 0; i < countdownInput.length; i++) {
			countdownInput[i].addEventListener("click", countdownSetTime);
			countdownInput[i].addEventListener("click", countdownSelect);
			countdownInput[i].addEventListener("focus", countdownSetTime);
			countdownInput[i].addEventListener("keydown", countdownSetTime);
			countdownInput[i].addEventListener("change", countdownSetTime);
			countdownInput[i].addEventListener("change", countdownFormatNumber);
		}

		countdownPlayButton.addEventListener("click", countdownHideShow);
		countdownPauseButton.addEventListener("click", countdownHideShow);
		countdownResetButton.addEventListener("click", countdownReset);

		function countdownReset() {
			countdownHoursInput.value = "";
			countdownMinutesInput.value = "";
			countdownSecondsInput.value = "";
			countdownMillisecondsInput.value = "";
			var countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
			countdownLaps = [];
			countdownLapDidChange(null, true);
		
			base.setAttribute("state","stop");
			countdown.reset();
			
		}

		function countdownHideShow() {

			countdownHoursInput.value = [countdownPad(countdownHours)];
			countdownMinutesInput.value = [countdownPad(countdownMinutes)];
			countdownSecondsInput.value = [countdownPad(countdownSeconds)];
			countdownMillisecondsInput.value = [
				countdownPad(countdownMilliseconds / 10),
			];
			var a = parseInt(countdownHoursInput.value);
			var b = parseInt(countdownMinutesInput.value);
			var c = parseInt(countdownSecondsInput.value);
			var d = parseInt(countdownMillisecondsInput.value);
			a = a || 0;
			b = b || 0;
			c = c || 0;
			d = d || 0;



			if(!a + b + c + d > 0) {
				countdownInputContainer.animate(
					[{
						transform: "translateX(0px)"
					}, {
						transform: "translateX(2px)"
					}, {
						transform: "translateX(0px)"
					}, {
						transform: "translateX(-2px)"
					}, {
						transform: "translateX(0px)"
					}, ], {
						duration: 200,
						easing: "linear",
						iterations: 1,
					});
			}
		}

		function countdownFormatNumber() {
			if(parseInt(this.value) < 10 && parseInt(this.value) > 0) {
				this.value = "0" + this.value;
			}
		}

		function countdownSelect() {
			this.select();
		}

		function countdownSetTime() {
			if(this.value == "" || this.value == "0") {
				this.value = "00";
			}
			if(!countdown.countdownRunning()) {
				if(this.getAttribute("title") == "Hours") {
					var countdownNetTime = (countdownHours = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownHours = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Minutes") {
					var countdownNetTime = (countdownMinutes = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownMinutes = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Seconds") {
					var countdownNetTime = (countdownSeconds = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownSeconds = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Milliseconds") {
					var countdownNetTime = (countdownMilliseconds = parseInt(this.value) * 10);
					if(parseInt(this.value) > parseInt(this.max)) {
						var countdownNetTime = (countdownMilliseconds = parseInt(this.max) * 10);
						this.value = this.max;
					}
				}
			}

			var hours = countdownHoursInput.value;
			var minutes = countdownMinutesInput.value;
			var seconds = countdownSecondsInput.value;
			var milliseconds = countdownMillisecondsInput.value;

			if (countdownHoursInput.value == "") {
				hours = "00";
			}
			if (countdownMinutesInput.value == "") {
				minutes = "00";
			}
			if (countdownSecondsInput.value == "") {
				seconds = "00";
			}
			if (countdownMillisecondsInput.value == "") {
				milliseconds = "00";
			}
			countdownTimeContainer.innerHTML = hours+":"+minutes+":"+seconds+":"+milliseconds;
		}
		var countdownRunning = false;
		var countdownLaps = [];
		countdownCallbackProperties.forEach(function(countdownProperty) {
			if(countdownOptions[countdownProperty] != null) {
				countdown_this[countdownProperty] = countdownOptions[countdownProperty];
			}
		});
		this.countdownRunning = function() {
			return countdownRunning;
		};
		this.countdownHours = function() {
			return countdownHours;
		};
		this.countdownMinutes = function() {
			return countdownMinutes;
		};
		this.countdownSeconds = function() {
			return countdownSeconds;
		};
		this.countdownMilliseconds = function() {
			return countdownMilliseconds;
		};
		this.countdownNetTime = function() {
			return countdownNetTime;
		};
		this.countdownMilitaryTime = function() {
			return [
				countdownPad(countdownHours),
				countdownPad(countdownMinutes),
				countdownPad(countdownSeconds),
				countdownPad(countdownMilliseconds / 10),
			].join(":");
		};
		this.countdownCallbackArgument = this.countdownMilitaryTime;
		var countdownTimeDidChange = function() {
			var countdownCallback = countdown_this.countdownCallback;
			if(countdownCallback != null) {
				var countdownCallbackTarget = countdown_this.countdownCallbackTarget || window;
				if(typeof countdownCallback === "string") {
					countdownCallback = countdownCallbackTarget[countdownCallback];
				}
				if(typeof countdownCallback === "function") {
					countdownCallback.call(countdownCallbackTarget, countdown_this.countdownCallbackArgument.call(countdown_this));
				}
			}
		};
		var countdownLapDidChange = function(countdownLap, countdownIsReset) {
			if(countdown_this.countdownLapCallback != null) {
				var countdownLapCallbackTarget = countdown_this.countdownLapCallbackTarget || window;
				var countdownLapCallback = countdown_this.countdownLapCallback;
				if(typeof countdownLapCallback === "string") {
					countdownLapCallback = countdownLapCallbackTarget[countdownLapCallback];
				}
				if(typeof countdownLapCallback === "function") {
					countdownLapCallback.call(countdownLapCallbackTarget, countdownLap && countdownLap.countdownSplitString(), countdownIsReset);
				}
			}
		};
		var countdownInitializeTimer = function(countdownTimeInMilliseconds) {
			var countdownTime = countdownExtractTime(countdownTimeInMilliseconds);
			countdownHours = countdownTime.countdownHours;
			countdownMinutes = countdownTime.countdownMinutes;
			countdownSeconds = countdownTime.countdownSeconds;
			countdownMilliseconds = countdownTime.countdownMilliseconds;
			countdownNetTime = countdownTimeInMilliseconds;
			countdownTimeDidChange();
			return countdown_this;
		};
		var countdownIncrementByTenMilliseconds = function() {
			if(countdownMilliseconds === 0) {
				countdownMilliseconds = 990;
				if(countdownSeconds === 0) {
					countdownSeconds = 59;
					if(countdownMinutes === 0) {
						countdownMinutes = 59;
						countdownHours -= 1;
					} else {
						countdownMinutes -= 1;
					}
				} else {
					countdownSeconds -= 1;
				}
			} else {
				countdownMilliseconds -= 10;
			}
			if(countdownHours + countdownMinutes + countdownSeconds + countdownMilliseconds <= 0) {
				countdown.stop();
				if (audiopath != undefined && audiopath != "") {
					var countdownCompletedAudio = new Audio(audiopath);
					countdownCompletedAudio.play();
				}
			
	
				var countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
				countdownHoursInput.value = "";
				countdownMinutesInput.value = "";
				countdownSecondsInput.value = "";
				countdownMillisecondsInput.value = "";


				base.setAttribute("state","stop");

			}
			countdownNetTime -= 10;
			countdownTimeDidChange();
			return countdown_this;
		};
		/*
		    Kick starts the countdown
		  */
		this.start = function() {
			countdownRunning = true;
			this.interval = setInterval(function() {
				countdownIncrementByTenMilliseconds();
			}, 10);
		};
		/*
		    Halts/Pauses the countdown
		  */
		this.stop = function() {
			if(this.interval != null) {
				clearInterval(this.interval);
			}
			countdownRunning = false;
		};
		/*
		    Captures a lap
		  */
		this.countdownAddLap = function() {
			var countdownPreviousLap = countdownLaps[countdownLaps.length - 1];
			var countdownCurrentLap = new countdownLap(countdownNetTime);
			countdownLaps.push(countdownCurrentLap);
			countdownLapDidChange(countdownCurrentLap, false);
		};
		/*
		    Resets all laps, invokes lapDidChange
		  */
		this.countdownResetLaps = function() {
			countdownLaps = [];
			countdownLapDidChange(null, true);
		};
		/*
		    resets the countdown
		  */
		this.reset = function() {
			this.stop();
			this.countdownResetLaps();
			countdownInitializeTimer(0);
		};
		/* 
		    Initializing countdownNetTime if provided via options
		  */
		if(countdownOptions.countdownNetTime != null) {
			countdownNetTime = countdownOptions.countdownNetTime;
			countdownInitializeTimer(countdownNetTime);
		}
	});

	var countdownLapCount = 0;
	window.countdownUpdateCount = function(countdownMilitaryTime) {
		countdownTimeContainer.innerHTML = countdownMilitaryTime;
	};
	window.countdownUpdateLap = function(countdownLapSplitString, countdownIsReset) {
		if(countdownIsReset) {
			countdownTimeContainer.innerHTML = "";
			countdownList.innerHTML = "";
			countdownLapCount = 0;
		} else {
			var countdownli = document.createElement("li");
			countdownLapCount += 1;
			countdownli.innerHTML = "<span>#" + countdownLapCount + "</span>" + countdownTimeContainer.innerHTML;
			countdownList.appendChild(countdownli);
		}
	};
	var replaceClass = function(ele, class1, class2) {
		if(ele.className.indexOf(class1) > 1) {
			ele.className = ele.className.replace(class1, class2);
		}
	};
	var countdown = new CountDown({
		countdownCallback: "countdownUpdateCount",
		countdownLapCallback: "countdownUpdateLap",
	});


	var countdownStartStopButtonEvent = function() {
		var a = parseInt(countdownHoursInput.value);
		var b = parseInt(countdownMinutesInput.value);
		var c = parseInt(countdownSecondsInput.value);
		var d = parseInt(countdownMillisecondsInput.value);
		a = a || 0;
		b = b || 0;
		c = c || 0;
		d = d || 0;
		if(!countdown.countdownRunning() && a + b + c + d > 0) {
			base.setAttribute("state","play");
			countdown.start();
		} else if(a + b + c + d > 0) {
			base.setAttribute("state","stop");
			countdown.stop();
		}
	};
	var countdownResetButtonEvent = function() {
		countdownTimeContainer.innerHTML = "";
		countdown.reset();
	};
	var countdownLapsButtonEvent = function() {
		if (countdownTimeContainer.innerHTML != "00:00:00:00" && countdownTimeContainer.innerHTML != "") {
			countdown.countdownAddLap();
		}
	};

	function countdownLapsScroll() {
		countdownList.scrollTo(0, countdownList.scrollHeight);
	}
	countdownPlayButton.addEventListener("click", countdownStartStopButtonEvent);
	countdownPauseButton.addEventListener("click", countdownStartStopButtonEvent);
	countdownResetButton.addEventListener("click", countdownResetButtonEvent);
	countdownLapsButton.addEventListener("click", countdownLapsButtonEvent);
	countdownLapsButton.addEventListener("click", countdownLapsScroll);
}


function stopwatch() {

	var base = document.querySelector('#contain div#tool > section[name="content"] > div[name="timer"] > *[name="stopwatch"]')

	var stopwatchInput = base.querySelectorAll(":scope input");
	var stopwatchPlayButton = base.querySelector(":scope b[title='Play']");
	var stopwatchPauseButton = base.querySelector(":scope b[title='Pause']");
	var stopwatchResetButton = base.querySelector(":scope *[name='reset']");
	var stopwatchLapsButton = base.querySelector(":scope *[name='lap']");

	var stopwatchTimeContainer = base.querySelector(':scope > div > div > data > *');
	var stopwatchInputContainer = base.querySelector(':scope > div > div > span');
	var stopwatchSetContainer = base.querySelector(':scope > div > div');

	var stopwatchHoursInput = base.querySelector(":scope input[title='Hours']");
	var stopwatchMinutesInput = base.querySelector(":scope input[title='Minutes']");
	var stopwatchSecondsInput = base.querySelector(":scope input[title='Seconds']");
	var stopwatchMillisecondsInput = base.querySelector(":scope input[title='Milliseconds']");

	var stopwatchList = base.querySelector(":scope ul");




	/*
	    polyfills for IE8
	  */
	if(!Array.prototype.forEach) {
		Array.prototype.forEach = function(stopwatchCallback) {
			for(var i = 0; i < this.length; i++) {
				stopwatchCallback(this[i]);
			}
		};
	}
	if(!Array.prototype.map) {
		Array.prototype.map = function(stopwatchCallback) {
			var stopwatchItems = [];
			for(var i = 0; i < this.length; i++) {
				stopwatchItems.push(stopwatchCallback(this[i]));
			}
			return stopwatchItems;
		};
	}
	var stopwatchSecondInMilliseconds = 1000;
	var stopwatchMinuteInMilliseconds = 60 * stopwatchSecondInMilliseconds;
	var stopwatchHourInMilliseconds = 60 * stopwatchMinuteInMilliseconds;
	var stopwatchFloor = Math.floor;
	var stopwatchExtractMilliseconds = function(stopwatchTimeInMilliseconds) {
		return stopwatchTimeInMilliseconds % 1000;
	};
	var stopwatchExtractSeconds = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchSecondInMilliseconds);
	};
	var stopwatchExtractMinutes = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchMinuteInMilliseconds);
	};
	var stopwatchExtractHours = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchHourInMilliseconds);
	};
	var stopwatchPad = function(stopwatchNumber) {
		if(stopwatchNumber < 10) {
			return "0" + stopwatchNumber;
		} else {
			return stopwatchNumber;
		}
	};
	var stopwatchExtractTime = function(stopwatchTimeInMilliseconds) {
		var stopwatchMilliseconds = stopwatchExtractHours(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchHours * stopwatchHourInMilliseconds;
		var stopwatchMilliseconds = stopwatchExtractMinutes(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchMinutes * stopwatchMinuteInMilliseconds;
		var stopwatchMilliseconds = stopwatchExtractSeconds(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchSeconds * stopwatchSecondInMilliseconds;
		var stopwatchMilliseconds = stopwatchTimeInMilliseconds;
		return {
			stopwatchHours: stopwatchHours,
			stopwatchMinutes: stopwatchMinutes,
			stopwatchSeconds: stopwatchSeconds,
			stopwatchMilliseconds: stopwatchMilliseconds,
		};
	};
	var stopwatchLap = function(stopwatchNetTime, stopwatchPreviousLap) {
		this.stopwatchPreviousLap = stopwatchPreviousLap;
		this.stopwatchNetTime = stopwatchNetTime;
	};
	stopwatchLap.prototype = {
		stopwatchMilitaryTime: function(stopwatchTimeInMilliseconds) {
			var stopwatchTimeSeparator = ":";
			var stopwatchTime = stopwatchExtractTime(stopwatchTimeInMilliseconds);
			stopwatchTime.stopwatchMilliseconds = stopwatchTime.stopwatchMilliseconds / 10;
			return ["stopwatchHours","stopwatchMinutes","stopwatchSeconds","stopwatchMilliseconds", ].map(function(stopwatchProperty) {
				return stopwatchPad(stopwatchTime[stopwatchProperty]);
			}).join(stopwatchTimeSeparator);
		},
		stopwatchSplitString: function() {
			if(this.stopwatchPreviousLap != null) {
				var stopwatchTimeDifference = this.stopwatchNetTime - this.stopwatchPreviousLap.stopwatchNetTime;
				return this.stopwatchMilitaryTime(stopwatchTimeDifference);
			} else {
				return this.stopwatchMilitaryTime(this.stopwatchNetTime);
			}
		},
	};
	var StopWatch = (window.StopWatch = function(stopwatchOptions) {
		if(stopwatchOptions == null) {
			stopwatchOptions = {};
		}
		var stopwatch_this = this;





		var stopwatchCallbackProperties = ["stopwatchCallback","stopwatchCallbackTarget","stopwatchLapCallback","stopwatchLapCallbackTarget", ];
		var stopwatchNetTime = (stopwatchHours = stopwatchMinutes = stopwatchSeconds = stopwatchMilliseconds = 0);



		for(var i = 0; i < stopwatchInput.length; i++) {
			stopwatchInput[i].addEventListener("click", stopwatchSetTime);
			stopwatchInput[i].addEventListener("click", stopwatchSelect);
			stopwatchInput[i].addEventListener("focus", stopwatchSetTime);
			stopwatchInput[i].addEventListener("keydown", stopwatchSetTime);
			stopwatchInput[i].addEventListener("change", stopwatchSetTime);
			stopwatchInput[i].addEventListener("change", stopwatchFormatNumber);
		}
		stopwatchPlayButton.addEventListener("click", stopwatchHideShow);
		stopwatchPauseButton.addEventListener("click", stopwatchHideShow);
		stopwatchResetButton.addEventListener("click", stopwatchReset);



		function stopwatchReset() {
			stopwatchHoursInput.value = "";
			stopwatchMinutesInput.value = "";
			stopwatchSecondsInput.value = "";
			stopwatchMillisecondsInput.value = "";
			var stopwatchNetTime = (stopwatchHours = stopwatchMinutes = stopwatchSeconds = stopwatchMilliseconds = 0);
			stopwatchLaps = [];
			stopwatchLapDidChange(null, true);

			base.setAttribute("state","stop");
			stopwatch.reset();
		}

		function stopwatchHideShow() {
			stopwatchHoursInput.value = [stopwatchPad(stopwatchHours)];
			stopwatchMinutesInput.value = [stopwatchPad(stopwatchMinutes)];
			stopwatchSecondsInput.value = [stopwatchPad(stopwatchSeconds)];
			stopwatchMillisecondsInput.value = [
				stopwatchPad(stopwatchMilliseconds / 10),
			];
			
		}

		function stopwatchFormatNumber() {
			if(parseInt(this.value) < 10 && parseInt(this.value) > 0) {
				this.value = "0" + this.value;
			}
		}

		function stopwatchSelect() {
			this.select();
		}

		function stopwatchSetTime() {
			if(this.value == "" || this.value == "0") {
				this.value = "00";
			}
			if(!stopwatch.stopwatchRunning()) {
				if(this.getAttribute("title") == "Hours") {
					var stopwatchNetTime = (stopwatchHours = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchHours = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Minutes") {
					var stopwatchNetTime = (stopwatchMinutes = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchMinutes = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Seconds") {
					var stopwatchNetTime = (stopwatchSeconds = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchSeconds = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Milliseconds") {
					var stopwatchNetTime = (stopwatchMilliseconds = parseInt(this.value) * 10);
					if(parseInt(this.value) > parseInt(this.max)) {
						var stopwatchNetTime = (stopwatchMilliseconds = parseInt(this.max) * 10);
						this.value = this.max;
					}
				}
			}

			var hours = stopwatchHoursInput.value;
			var minutes = stopwatchMinutesInput.value;
			var second = stopwatchSecondsInput.value;
			var millisecond = stopwatchMillisecondsInput.value;

			if (hours == "") {
				hours = "00";
			}
			if (minutes == "") {
				minutes = "00";
			}
			if (second == "") {
				second = "00";
			}
			if (millisecond == "") {
				millisecond = "00";
			}
			stopwatchTimeContainer.innerHTML = hours+":"+minutes+":"+second+":"+millisecond;
		}
		var stopwatchRunning = false;
		var stopwatchLaps = [];
		stopwatchCallbackProperties.forEach(function(stopwatchProperty) {
			if(stopwatchOptions[stopwatchProperty] != null) {
				stopwatch_this[stopwatchProperty] = stopwatchOptions[stopwatchProperty];
			}
		});
		this.stopwatchRunning = function() {
			return stopwatchRunning;
		};
		this.stopwatchHours = function() {
			return stopwatchHours;
		};
		this.stopwatchMinutes = function() {
			return stopwatchMinutes;
		};
		this.stopwatchSeconds = function() {
			return stopwatchSeconds;
		};
		this.stopwatchMilliseconds = function() {
			return stopwatchMilliseconds;
		};
		this.stopwatchNetTime = function() {
			return stopwatchNetTime;
		};
		this.stopwatchMilitaryTime = function() {
			return [
				stopwatchPad(stopwatchHours),
				stopwatchPad(stopwatchMinutes),
				stopwatchPad(stopwatchSeconds),
				stopwatchPad(stopwatchMilliseconds / 10),
			].join(":");
		};
		this.stopwatchCallbackArgument = this.stopwatchMilitaryTime;
		var stopwatchTimeDidChange = function() {
			var stopwatchCallback = stopwatch_this.stopwatchCallback;
			if(stopwatchCallback != null) {
				var stopwatchCallbackTarget = stopwatch_this.stopwatchCallbackTarget || window;
				if(typeof stopwatchCallback === "string") {
					stopwatchCallback = stopwatchCallbackTarget[stopwatchCallback];
				}
				if(typeof stopwatchCallback === "function") {
					stopwatchCallback.call(stopwatchCallbackTarget, stopwatch_this.stopwatchCallbackArgument.call(stopwatch_this));
				}
			}
		};
		var stopwatchLapDidChange = function(stopwatchLap, stopwatchIsReset) {
			if(stopwatch_this.stopwatchLapCallback != null) {
				var stopwatchLapCallbackTarget = stopwatch_this.stopwatchLapCallbackTarget || window;
				var stopwatchLapCallback = stopwatch_this.stopwatchLapCallback;
				if(typeof stopwatchLapCallback === "string") {
					stopwatchLapCallback = stopwatchLapCallbackTarget[stopwatchLapCallback];
				}
				if(typeof stopwatchLapCallback === "function") {
					stopwatchLapCallback.call(stopwatchLapCallbackTarget, stopwatchLap && stopwatchLap.stopwatchSplitString(), stopwatchIsReset);
				}
			}
		};
		var stopwatchInitializeTimer = function(stopwatchTimeInMilliseconds) {
			var stopwatchTime = stopwatchExtractTime(stopwatchTimeInMilliseconds);
			stopwatchHours = stopwatchTime.stopwatchHours;
			stopwatchMinutes = stopwatchTime.stopwatchMinutes;
			stopwatchSeconds = stopwatchTime.stopwatchSeconds;
			stopwatchMilliseconds = stopwatchTime.stopwatchMilliseconds;
			stopwatchNetTime = stopwatchTimeInMilliseconds;
			stopwatchTimeDidChange();
			return stopwatch_this;
		};
		var stopwatchIncrementByTenMilliseconds = function() {
			if(stopwatchMilliseconds === 990) {
				stopwatchMilliseconds = 0;
				if(stopwatchSeconds === 59) {
					stopwatchSeconds = 0;
					if(stopwatchMinutes === 59) {
						stopwatchMinutes = 0;
						stopwatchHours += 1;
					} else {
						stopwatchMinutes += 1;
					}
				} else {
					stopwatchSeconds += 1;
				}
			} else {
				stopwatchMilliseconds += 10;
			}
			stopwatchNetTime += 10;
			stopwatchTimeDidChange();
			return stopwatch_this;
		};
		/*
		    Kick starts the stopwatch
		  */
		this.start = function() {
			stopwatchRunning = true;
			this.interval = setInterval(function() {
				stopwatchIncrementByTenMilliseconds();
			}, 10);
		};
		/*
		    Halts/Pauses the stopwatch
		  */
		this.stop = function() {
			if(this.interval != null) {
				clearInterval(this.interval);
			}
			stopwatchRunning = false;
		};
		/*
		    Captures a lap
		  */
		this.stopwatchAddLap = function() {
			var stopwatchPreviousLap = stopwatchLaps[stopwatchLaps.length - 1];
			var stopwatchCurrentLap = new stopwatchLap(stopwatchNetTime);
			stopwatchLaps.push(stopwatchCurrentLap);
			stopwatchLapDidChange(stopwatchCurrentLap, false);
		};
		/*
		    Resets all laps, invokes lapDidChange
		  */
		this.stopwatchResetLaps = function() {
			stopwatchLaps = [];
			stopwatchLapDidChange(null, true);
		};
		/*
		    resets the stopwatch
		  */
		this.reset = function() {
			this.stop();
			this.stopwatchResetLaps();
			stopwatchInitializeTimer(0);
		};
		/* 
		    Initializing stopwatchNetTime if provided via options
		  */
		if(stopwatchOptions.stopwatchNetTime != null) {
			stopwatchNetTime = stopwatchOptions.stopwatchNetTime;
			stopwatchInitializeTimer(stopwatchNetTime);
		}
	});


	var stopwatchLapCount = 0;
	window.stopwatchUpdateWatch = function(stopwatchMilitaryTime) {
		stopwatchTimeContainer.innerHTML = stopwatchMilitaryTime;
	};
	window.stopwatchUpdateLap = function(stopwatchLapSplitString, stopwatchIsReset) {
		if(stopwatchIsReset) {
			stopwatchTimeContainer.innerHTML = "";
			stopwatchList.innerHTML = "";
			stopwatchLapCount = 0;
		} else {
			var stopwatchli = document.createElement("li");
			stopwatchLapCount += 1;
			stopwatchli.innerHTML = "<span>#" + stopwatchLapCount + "</span>" + stopwatchTimeContainer.innerHTML;
			stopwatchList.appendChild(stopwatchli);
		}
	};
	var replaceClass = function(ele, class1, class2) {
		if(ele.className.indexOf(class1) > 1) {
			ele.className = ele.className.replace(class1, class2);
		}
	};
	var stopwatch = new StopWatch({
		stopwatchCallback: "stopwatchUpdateWatch",
		stopwatchLapCallback: "stopwatchUpdateLap",
	});


	var stopwatchStartStopButtonEvent = function() {
		if(!stopwatch.stopwatchRunning()) {
			base.setAttribute("state","play");
			stopwatch.start();
		} else {
			base.setAttribute("state","stop");
			stopwatch.stop();
		}
	};
	var stopwatchResetButtonEvent = function() {
		stopwatchTimeContainer.innerHTML = "";
		stopwatch.reset();
	};
	var stopwatchLapsButtonEvent = function() {
		if (stopwatchTimeContainer.innerHTML != "00:00:00:00" && stopwatchTimeContainer.innerHTML != "") {
			stopwatch.stopwatchAddLap();
		}
	};


	function stopwatchLapsScroll() {
		stopwatchList.scrollTo(0, stopwatchList.scrollHeight);
	}
	stopwatchPlayButton.addEventListener("click", stopwatchStartStopButtonEvent);
	stopwatchPauseButton.addEventListener("click", stopwatchStartStopButtonEvent);
	stopwatchResetButton.addEventListener("click", stopwatchResetButtonEvent);
	stopwatchLapsButton.addEventListener("click", stopwatchLapsButtonEvent);
	stopwatchLapsButton.addEventListener("click", stopwatchLapsScroll);
}

function RNG() {
	var lastMin = 1;
	var lastMax = 100;

	var base = document.querySelector("#contain > div#tool section[name='content'] *[name='rng']");

	function rollNumber() {

		var it = 0;

		addIteration();
		var iteration = base.querySelector(":scope span[name='iterations'] input").value;
		for(var i = 0; i < iteration; i++) {
			var x = i + 1;

			function generateNumber(x) {
				var min = parseInt(base.querySelector(":scope ul li[name='" + x + "'] div:nth-child(2) input").value);
				var max = parseInt(base.querySelector(":scope ul li[name='" + x + "'] div:nth-child(3) input").value) + 1;
				var random1 = Math.floor(Math.random() * (max - min)) + min;
				var output = base.querySelector(":scope *[name='result'] div[name='" + x + "'] > *");
				var intervalRandom = setInterval(genRandom, 100);
				var startDate = new Date();
				var durationMin = 1000;
				var durationMax = 3000;

				function genRandom() {
					var random2 = Math.floor(Math.random() * (max - min)) + min;
					var currentDate = new Date();
					output.innerText = random2;
					if(currentDate - startDate > durationMax) {
						stopcount();
					} else if(random1 == random2 && currentDate - startDate > durationMin) {
						stopcount();
					}
		
					function stopcount() {
						output.innerText = random1;
						clearInterval(intervalRandom);
						output.style.color = "gold";
						output.innerText = numFormat(output.innerText);
						highestLowest();
					}
				}
			}
			generateNumber(x);

		}

		function highestLowest() {

	

			it = it+1;
			if (it == iteration) {
				var nums = [];
				var num = base.querySelectorAll(":scope div[name='result'] > *")
				for(var r = 0; r < num.length; r++) {
					nums.push(num[r].firstElementChild.innerText);
				}
			
				var max = Math.max(...nums);
				var min = Math.min(...nums);


				for(var r = 0; r < num.length; r++) {
					if (parseInt(num[r].firstElementChild.innerText) == max) {
						num[r].classList.add("max");
					}
					if (parseInt(num[r].firstElementChild.innerText) == min) {
						num[r].classList.add("min");
					}
				}
			
			}
			
		}
	
	}
	base.querySelector(":scope button").addEventListener("click", rollNumber);
	base.querySelector(":scope span[name='iterations'] input").addEventListener("change", addIteration);
	addIteration();

	function addIteration() {
		var iteration = base.querySelector(":scope span[name='iterations'] input").value;
		var themin = [];
		var themax = [];
		var lis = base.querySelectorAll(":scope ul li");
		for(var q = 0; q < lis.length; q++) {
			themin.push(lis[q].lastElementChild.previousElementSibling.firstChild.value);
			themax.push(lis[q].lastElementChild.firstChild.value);
			lis[q].remove();
		}

		var outs = base.querySelectorAll(":scope div[name='result'] > div");
		for(var q = 0; q < outs.length; q++) {
			outs[q].remove();
		}
		
		for(var i = 0; i < iteration; i++) {
			var x = i + 1;
			var li = document.createElement("li");
			var it = document.createElement("div");
			var itText = document.createElement("p");
			var min = document.createElement("div");
			var minInput = document.createElement("input");
			var max = document.createElement("div");
			var maxInput = document.createElement("input");
			li.setAttribute("name", x);
			it.setAttribute("name","it");
			itText.innerText = "#" + x;
			itText.setAttribute("title","Iteration");
			min.setAttribute("name","min");
			minInput.setAttribute("type","number");
			minInput.setAttribute("title","Min");
			minInput.setAttribute("autocomplete","off");
			if(themin[i] != undefined) {
				minInput.setAttribute("value", themin[i]);
			} else if(lastMin != undefined) {
				minInput.setAttribute("value", lastMin);
			} else {
				minInput.setAttribute("value","1");
			}
			max.setAttribute("name","max");
			maxInput.setAttribute("type","number");
			maxInput.setAttribute("title","Max");
			maxInput.setAttribute("autocomplete","off");
			if(themax[i] != undefined) {
				maxInput.setAttribute("value", themax[i]);
			} else if(lastMax != undefined) {
				maxInput.setAttribute("value", lastMax);
			} else {
				maxInput.setAttribute("value","100");
			}
			minInput.setAttribute("min","1");
			minInput.setAttribute("max", parseInt(maxInput.value) - 1);
			maxInput.setAttribute("min", parseInt(minInput.value) + 1);
			maxInput.setAttribute("max","1000");
		
			base.querySelector(":scope ul").appendChild(li);
			li.appendChild(it);
			it.appendChild(itText);
			li.appendChild(min);
			min.appendChild(minInput);
			li.appendChild(max);
			max.appendChild(maxInput);
			var out = document.createElement("div");
			out.setAttribute("name", x);
			out.title = "#" + x + "\n" + "Number between " + minInput.value + "-" + maxInput.value;
			out.innerHTML = "<header>-</header>";
			base.querySelector(":scope div[name='result']").appendChild(out);
			minInput.addEventListener("change", minmaxChange);
			maxInput.addEventListener("change", minmaxChange);
		}
		base.querySelector(":scope ul").scrollTo(0, base.querySelector(":scope ul").scrollHeight);
	}

	function minmaxChange() {
		var Min = this.parentElement.parentElement.querySelector(':scope > div[name="min"] > input');
		var Max = this.parentElement.parentElement.querySelector(':scope > div[name="max"] > input');
		Min.max = parseInt(Max.value) - 1;
		Max.min = parseInt(Min.value) + 1;
		lastMin = Min.value;
		lastMax = Max.value;
	}
}

function timerSelector() {
	if(document.querySelector("#timerselector1").checked == true) {
		document.querySelector("#contain > div#tool section[name='content'] > *[name='timer'] > *[name='stopwatch']").style.display = "block";
		document.querySelector("#contain > div#tool section[name='content'] > *[name='timer'] > *[name='countdown']").style.display = "none";
		document.querySelector("#contain > div#tool section[name='content'] > *[name='timer'] > *[name='countdown'] *[name='reset']").click();
	}
	if(document.querySelector("#timerselector2").checked == true) {
		document.querySelector("#contain > div#tool section[name='content'] > *[name='timer'] > *[name='stopwatch']").style.display = "none";
		document.querySelector("#contain > div#tool section[name='content'] > *[name='timer'] > *[name='countdown']").style.display = "block";
		document.querySelector("#contain > div#tool section[name='content'] > *[name='timer'] > *[name='stopwatch'] *[name='reset']").click();
	}
}





function typeSwitch(type) {
	var type;
	var typeTitle = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
	var stuff = document.querySelectorAll("#contain > div#tool section[name='content'] *[name='type'] *[name='sidebar'] *[name='description'] > div[name] > span > span");
	for(var i = 0; i < stuff.length; i++) {
		stuff[i].innerHTML = "";
	}

	var base = document.querySelector("#contain > div#tool section[name='content'] *[name='type']");
	var typetitle = base.querySelector(":scope div[name='sidebar'] div[name='title'] > *:first-child > *");
	var typeicon = base.querySelector(":scope div[name='sidebar'] div[name='title'] img");
	var againstEffective = base.querySelector(":scope div[name='sidebar'] div[name='against'] span[name='effective'] > *:last-child");
	var againstIneffective = base.querySelector(":scope div[name='sidebar'] div[name='against'] span[name='ineffective'] > *:last-child");
	var againstImmune = base.querySelector(":scope div[name='sidebar'] div[name='against'] span[name='immune'] > *:last-child");
	var againstDefault = base.querySelector(":scope div[name='sidebar'] div[name='against'] span[name='default'] > *:last-child");
	var opposedEffective = base.querySelector(":scope div[name='sidebar'] div[name='opposed'] span[name='effective'] > *:last-child");
	var opposedIneffective = base.querySelector(":scope div[name='sidebar'] div[name='opposed'] span[name='ineffective'] > *:last-child");
	var opposedImmune = base.querySelector(":scope div[name='sidebar'] div[name='opposed'] span[name='immune'] > *:last-child");
	var opposedDefault = base.querySelector(":scope div[name='sidebar'] div[name='opposed'] span[name='default'] > *:last-child");



	typetitle.innerText = typeTitle;
	typeicon.src = "./media/Images/Misc/Type/Symbol/" + typeicon.alt + "/" + typeTitle + ".png";
	typeicon.title = typetitle.innerText;



	var selectors = document.querySelectorAll("#contain > div#tool section[name='content'] *[name='type'] *[name='sidebar'] *[name='description'] label");
	for(var i = 0; i < selectors.length; i++) {
		if(i == 0) {
			selectors[i].setAttribute("title","When used on a " + typeTitle + "-type Pokémon");
		}
		if(i == 1) {
			selectors[i].setAttribute("title","When used by a " + typeTitle + "-type Move");
		}
	}




	var finaldataTypeChartTitle = Object.getOwnPropertyNames(finaldataTypeChart[0]).toString().split(",");
	var index = finaldataTypeChartTitle.indexOf(type);
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		if(finaldataTypeChart[i][type] == "0×") {
			var ImmunityType = document.createElement("img");
			ImmunityType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			ImmunityType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
			ImmunityType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			ImmunityType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			againstImmune.appendChild(ImmunityType);
			var ImmunityTypeText = document.createElement("p");
			ImmunityTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			againstImmune.appendChild(ImmunityTypeText);
		}
		if(finaldataTypeChart[i][type] == "½×") {
			var IneffectivenessType = document.createElement("img");
			IneffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			IneffectivenessType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
			IneffectivenessType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			IneffectivenessType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			againstIneffective.appendChild(IneffectivenessType);
			var IneffectivenessTypeText = document.createElement("p");
			IneffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			againstIneffective.appendChild(IneffectivenessTypeText);
		}
		if(finaldataTypeChart[i][type] == "1×") {
			var DefaultType = document.createElement("img");
			DefaultType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			DefaultType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
			DefaultType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			DefaultType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			againstDefault.appendChild(DefaultType);
			var DefaultTypeText = document.createElement("p");
			DefaultTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			againstDefault.appendChild(DefaultTypeText);
		}
		if(finaldataTypeChart[i][type] == "2×") {
			var EffectivenessType = document.createElement("img");
			EffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			EffectivenessType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
			EffectivenessType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			EffectivenessType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			againstEffective.appendChild(EffectivenessType);
			var EffectivenessTypeText = document.createElement("p");
			EffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			againstEffective.appendChild(EffectivenessTypeText);
		}
	}
	for(var i = 0; i < finaldataTypeChart.length; i++) {
		if(finaldataTypeChart[index][
				Object.getOwnPropertyNames(finaldataTypeChart[0])[i]
			] == "0×") {
			var ImmunityType = document.createElement("img");
			ImmunityType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			ImmunityType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
			ImmunityType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			ImmunityType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			opposedImmune.appendChild(ImmunityType);
			var ImmunityTypeText = document.createElement("p");
			ImmunityTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			opposedImmune.appendChild(ImmunityTypeText);
		}
		if(finaldataTypeChart[index][
				Object.getOwnPropertyNames(finaldataTypeChart[0])[i]
			] == "½×") {
			var IneffectivenessType = document.createElement("img");
			IneffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			IneffectivenessType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
			IneffectivenessType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			IneffectivenessType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			opposedIneffective.appendChild(IneffectivenessType);
			var IneffectivenessTypeText = document.createElement("p");
			IneffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			opposedIneffective.appendChild(IneffectivenessTypeText);
		}
		if(finaldataTypeChart[index][
				Object.getOwnPropertyNames(finaldataTypeChart[0])[i]
			] == "1×") {
			var DefaultType = document.createElement("img");
			DefaultType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			DefaultType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
			DefaultType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			DefaultType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			opposedDefault.appendChild(DefaultType);
			var DefaultTypeText = document.createElement("p");
			DefaultTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			opposedDefault.appendChild(DefaultTypeText);

		}
		if(finaldataTypeChart[index][
				Object.getOwnPropertyNames(finaldataTypeChart[0])[i]
			] == "2×") {
			var EffectivenessType = document.createElement("img");
			EffectivenessType.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + ".png";
			EffectivenessType.setAttribute("onerror","this.style.display='none';this.nextElementSibling.style.display='inline'");
			EffectivenessType.setAttribute("title", finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase());
			EffectivenessType.setAttribute("onclick", 'typeSwitch("' + finaldataTypeChartTitle[i] + '")');
			opposedEffective.appendChild(EffectivenessType);
			var EffectivenessTypeText = document.createElement("p");
			EffectivenessTypeText.innerText = finaldataTypeChartTitle[i].charAt(0).toUpperCase() + finaldataTypeChartTitle[i].slice(1).toLowerCase() + " ";
			opposedEffective.appendChild(EffectivenessTypeText);
		}
	}
}

function matrixHoverClass(event) {
	var base = event.target;
	
	var tar = base.parentElement.parentElement.firstChild;
	var els = base.parentElement.querySelectorAll(":scope > *");

	var num = 0;
	for(var q = 0; q < els.length; q++) {
		if (els[q] == base) {
			num = q;
			break;
		}
	}
	tar.className = "";
	tar.className = num;
}