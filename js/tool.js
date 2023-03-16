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

	createTimer();
	createRNG();
	createType();


	var toolOptionsTitle = ["Timers","Random Number Generator","Type Advantage"];

	// Counter, Damage Calculator, Catch Rate Calculator, Shiny Odds Calculator, IV Calculator, Pokémon Finder, Item Checklist

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