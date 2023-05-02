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
	toolSectionContentTimersOuter.setAttribute("value","2");

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
		toolSectionContentRNGOuter.setAttribute("value","3");

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

		typeOuter.setAttribute("value","1");

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

		var toolSectionContentDMGMenuRoll = document.createElement("div");
		var toolSectionContentDMGMenuMove = document.createElement("div");
		var toolSectionContentDMGMenuSpecific = document.createElement("div");

		var toolSectionContentDMGMenuSpecificTop = document.createElement("span");
		var toolSectionContentDMGMenuSpecificBottom = document.createElement("span");

		var toolSectionContentDMGMenuMoveTop = document.createElement("span");
		var toolSectionContentDMGMenuMoveBottom = document.createElement("span");

		var toolSectionContentDMGMenuMoveTopSelect = document.createElement("select");
		var toolSectionContentDMGMenuSpecificTopInput = document.createElement("input");
	

		var toolSectionContentDMGMenuMoveBottomDamage = document.createElement("span");
		var toolSectionContentDMGMenuMoveBottomDamageTitle = document.createElement("h6");
		var toolSectionContentDMGMenuMoveBottomDamageText = document.createElement("small");
		var toolSectionContentDMGMenuMoveBottomAccuracy = document.createElement("span");
		var toolSectionContentDMGMenuMoveBottomAccuracyTitle = document.createElement("h6");
		var toolSectionContentDMGMenuMoveBottomAccuracyText = document.createElement("small");
		var toolSectionContentDMGMenuMoveBottomCritical = document.createElement("label");
		var toolSectionContentDMGMenuMoveBottomCriticalInput = document.createElement("input");
		var toolSectionContentDMGMenuMoveBottomCriticalTitle = document.createElement("h6");
		var toolSectionContentDMGMenuMoveBottomCriticalText = document.createElement("small");

		var toolSectionContentDMGMenuRollWrap = document.createElement("span");
		var toolSectionContentDMGMenuRollRangeTextTopLeft = document.createElement("span");
		var toolSectionContentDMGMenuRollRangeTextTopCenter = document.createElement("span");
		var toolSectionContentDMGMenuRollRangeTextTopCenterDisable = document.createElement("input");
		var toolSectionContentDMGMenuRollRangeTextTopRight = document.createElement("span");
		var toolSectionContentDMGMenuRollRangeTextBottomLeft = document.createElement("small");
		var toolSectionContentDMGMenuRollRangeTextBottomRight = document.createElement("small");
		var toolSectionContentDMGMenuRollRange = document.createElement("input");


		toolSectionContentDMGMenuSpecificTopInput.setAttribute("type","number");
		toolSectionContentDMGMenuSpecificTopInput.setAttribute("min","1");
		toolSectionContentDMGMenuSpecificTopInput.setAttribute("value","1");
		toolSectionContentDMGMenuSpecificTopInput.setAttribute("max","1");

		toolSectionContentDMGMenuRollRangeTextTopCenter.setAttribute("name","disable");
		toolSectionContentDMGMenuRollRangeTextTopCenterDisable.setAttribute("type","checkbox");
		toolSectionContentDMGMenuRollRangeTextTopCenterDisable.checked = true;

		toolSectionContentDMGMenuMoveBottomDamage.setAttribute("name","damage");
		toolSectionContentDMGMenuMoveBottomDamageTitle.innerText = "Damage";
		toolSectionContentDMGMenuMoveBottomDamageText.innerText = "";

		toolSectionContentDMGMenuMoveBottomAccuracy.setAttribute("name","accuracy");
		toolSectionContentDMGMenuMoveBottomAccuracyTitle.innerText = "Accuracy";
		toolSectionContentDMGMenuMoveBottomAccuracyText.innerText = "";

		toolSectionContentDMGMenuMoveBottomCritical.setAttribute("for","dmg-critical")
		toolSectionContentDMGMenuMoveBottomCriticalInput.setAttribute("id","dmg-critical")
		toolSectionContentDMGMenuMoveBottomCriticalInput.setAttribute("type","checkbox");
		toolSectionContentDMGMenuMoveBottomCritical.setAttribute("name","critical");
		toolSectionContentDMGMenuMoveBottomCriticalTitle.innerText = "Critical";
		toolSectionContentDMGMenuMoveBottomCriticalText.innerText = ""
		

		toolSectionContentDMGMenuRoll.setAttribute("name","roll");
		toolSectionContentDMGMenuMove.setAttribute("name","move");
		toolSectionContentDMGMenuSpecific.setAttribute("name","spec");


		toolSectionContentDMGMenuRollRangeTextTopLeft.setAttribute("name","low");
		toolSectionContentDMGMenuRollRangeTextTopLeft.innerHTML = "<h6>Low Roll</h6>";
		toolSectionContentDMGMenuRollRangeTextTopRight.setAttribute("name","high");
		toolSectionContentDMGMenuRollRangeTextTopRight.innerHTML = "<h6>High Roll</h6>";
		toolSectionContentDMGMenuRollRangeTextBottomLeft.setAttribute("name","min");
		toolSectionContentDMGMenuRollRangeTextBottomRight.setAttribute("name","max");


		toolSectionContentDMGMenuRollRange.setAttribute("type","range");
		toolSectionContentDMGMenuRollRange.setAttribute("name","dmg-roll-range")
		toolSectionContentDMGMenuRollRange.setAttribute("id","dmg-roll-range")
	

		toolSectionContentDMGOptionsContentTop.setAttribute("name","pokémon");
		toolSectionContentDMGOptionsContentBottom.setAttribute("name","team");

		toolSectionContentDMGOuter.setAttribute("name","dmg");
		toolSectionContentDMGOuter.setAttribute("value","0");

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

		var toolSectionContentDMGImport = document.createElement("figure");
		var toolSectionContentDMGImportText = document.createElement("h5");
		toolSectionContentDMGImport.setAttribute("name","import");
		toolSectionContentDMGImportText.innerText = "⮟";
		toolSectionContentDMGContent.appendChild(toolSectionContentDMGImport);
		toolSectionContentDMGImport.appendChild(toolSectionContentDMGImportText);
		var toolSectionContentDMGImportWrapTop = document.createElement("div");
		var toolSectionContentDMGImportWrap = document.createElement("span");
		toolSectionContentDMGImport.appendChild(toolSectionContentDMGImportWrapTop);
		toolSectionContentDMGImportWrapTop.appendChild(toolSectionContentDMGImportWrap);

		toolSectionContentDMGImport.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})

		var impopts = ["Import Pokémon","Copy Data Strings"];
		for (var r = 0; r < impopts.length; r++) {
			var toolSectionContentDMGImportWrapSpan = document.createElement("span");
			var toolSectionContentDMGImportWrapTrigger = document.createElement("b");
			var toolSectionContentDMGImportWrapText = document.createElement("small");
			toolSectionContentDMGImportWrapText.innerText = impopts[r];
			toolSectionContentDMGImportWrapTrigger.setAttribute("type","invert");
			toolSectionContentDMGImportWrapSpan.setAttribute("name",impopts[r])
			toolSectionContentDMGImportWrap.appendChild(toolSectionContentDMGImportWrapSpan);
			toolSectionContentDMGImportWrapSpan.appendChild(toolSectionContentDMGImportWrapTrigger);
			toolSectionContentDMGImportWrapTrigger.appendChild(toolSectionContentDMGImportWrapText);
			if (r == 0) {
				toolSectionContentDMGImportWrapTrigger.addEventListener("click",function(){var z = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] div[data-string]"); DMGSetDataString(z);})
			}
			if (r == 1) {
				toolSectionContentDMGImportWrapTrigger.addEventListener("click",function(){var z = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] div[data-string]"); var res = []; for(var t = 0; t < z.length; t++) {var val = z[t].getAttribute("data-string"); if (val != undefined && val != "") {res.push(val)}} var resStr = res.join("\n"); if (res.length > 0 && resStr.includes("pok:") && !resStr.includes("pok:|") && !resStr.includes("pok:\n")) {navigator.clipboard.writeText(resStr);consoleText("Copied!");}})
			}
		}






		var toolSectionContentDMGReset = document.createElement("figure");
		var toolSectionContentDMGResetText = document.createElement("h5");
		toolSectionContentDMGReset.setAttribute("type","scale");
		toolSectionContentDMGReset.setAttribute("name","reset");
		toolSectionContentDMGResetText.innerText = "❌";
		toolSectionContentDMGContent.appendChild(toolSectionContentDMGReset);
		toolSectionContentDMGReset.appendChild(toolSectionContentDMGResetText);
		toolSectionContentDMGReset.addEventListener("click",function(){var x = findUpTag(this,"DIV"); var z = x.querySelectorAll(":scope div[data-string]"); var lock = confirm("The Pokémon's data will not be saved.\nDo you want to continue?"); if (lock) {for(var p = 0; p < z.length; p++) {z[p].setAttribute("data-string","");var tar = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+z[p].parentElement.getAttribute("name")+"'] ul[name='"+z[p].getAttribute("name")+"']");DMGClearData(tar);DMGSaveData(tar);DMGSetChange(tar);}}})




		toolSectionContentDMGOptions.appendChild(toolSectionContentDMGOptionsContent);
		toolSectionContentDMGOptionsContent.appendChild(toolSectionContentDMGOptionsContentTop);
		toolSectionContentDMGOptionsContent.appendChild(toolSectionContentDMGOptionsContentBottom);
		
		
		toolSectionContentDMGOptions.appendChild(toolSectionContentDMGOptionsBottom);
		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuRoll)
		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuMove)

		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuSpecific)
		toolSectionContentDMGMenuSpecific.appendChild(toolSectionContentDMGMenuSpecificTop)
		toolSectionContentDMGMenuSpecific.appendChild(toolSectionContentDMGMenuSpecificBottom)

		toolSectionContentDMGMenuSpecificTop.appendChild(toolSectionContentDMGMenuSpecificTopInput)

		toolSectionContentDMGMenuMove.appendChild(toolSectionContentDMGMenuMoveTop);
		toolSectionContentDMGMenuMove.appendChild(toolSectionContentDMGMenuMoveBottom);
		toolSectionContentDMGMenuMoveTop.appendChild(toolSectionContentDMGMenuMoveTopSelect);


		toolSectionContentDMGMenuMoveBottom.appendChild(toolSectionContentDMGMenuMoveBottomDamage);
		toolSectionContentDMGMenuMoveBottomDamage.appendChild(toolSectionContentDMGMenuMoveBottomDamageTitle);
		toolSectionContentDMGMenuMoveBottomDamage.appendChild(toolSectionContentDMGMenuMoveBottomDamageText);
		toolSectionContentDMGMenuMoveBottom.appendChild(toolSectionContentDMGMenuMoveBottomAccuracy);
		toolSectionContentDMGMenuMoveBottomAccuracy.appendChild(toolSectionContentDMGMenuMoveBottomAccuracyTitle);
		toolSectionContentDMGMenuMoveBottomAccuracy.appendChild(toolSectionContentDMGMenuMoveBottomAccuracyText);
		toolSectionContentDMGMenuMoveBottom.appendChild(toolSectionContentDMGMenuMoveBottomCritical);
		toolSectionContentDMGMenuMoveBottomCritical.appendChild(toolSectionContentDMGMenuMoveBottomCriticalInput);
		toolSectionContentDMGMenuMoveBottomCritical.appendChild(toolSectionContentDMGMenuMoveBottomCriticalTitle);
		toolSectionContentDMGMenuMoveBottomCritical.appendChild(toolSectionContentDMGMenuMoveBottomCriticalText);


		toolSectionContentDMGMenuRoll.appendChild(toolSectionContentDMGMenuRollWrap)
		toolSectionContentDMGMenuRollWrap.appendChild(toolSectionContentDMGMenuRollRangeTextTopLeft)
		toolSectionContentDMGMenuRollWrap.appendChild(toolSectionContentDMGMenuRollRangeTextTopCenter)
		toolSectionContentDMGMenuRollRangeTextTopCenter.appendChild(toolSectionContentDMGMenuRollRangeTextTopCenterDisable)
		toolSectionContentDMGMenuRollWrap.appendChild(toolSectionContentDMGMenuRollRangeTextTopRight)
		toolSectionContentDMGMenuRollWrap.appendChild(toolSectionContentDMGMenuRollRange)
		toolSectionContentDMGMenuRollWrap.appendChild(toolSectionContentDMGMenuRollRangeTextBottomLeft)
		toolSectionContentDMGMenuRollWrap.appendChild(toolSectionContentDMGMenuRollRangeTextBottomRight)

		toolSectionContentDMGMenuMoveBottomCriticalInput.addEventListener("change",DMGCalcStart);
		toolSectionContentDMGMenuRollRange.addEventListener("input",DMGCalcStart);
		toolSectionContentDMGMenuRollRangeTextTopCenterDisable.addEventListener("change",DMGCalcStart)
		toolSectionContentDMGMenuRollRange.addEventListener("input",function(){let v = ((this.value-this.min)/(this.max-this.min))*100;let c = "var(--colorBlue)";let b = "var(--color_90)";this.style.background = `linear-gradient(to right, ${c} 0%, ${c} ${v}%, ${b} ${v}%, ${b} 100%)`;this.title = this.value-this.min;})

		var tempMoves = [];

		for(var m = 0; m < finaldataMove.length; m++) {
			if(finaldataMove[m][JSONPath_MoveReference] == "true") {
				if (finaldataMoveGroup[m]["Group"] != "Z-Move" && finaldataMoveGroup[m]["Group"] != "Max Move") {
					tempMoves.push(finaldataMove[m]["Name_"+JSONPath_MoveName])
				}
			}
		}

		tempMoves.sort();

		for(var m = 0; m < tempMoves.length; m++) {
			var toolSectionContentDMGMenuMoveTopOption = document.createElement("option");
			toolSectionContentDMGMenuMoveTopOption.setAttribute("value",tempMoves[m]);
			toolSectionContentDMGMenuMoveTopOption.innerText = tempMoves[m];
			toolSectionContentDMGMenuMoveTopSelect.appendChild(toolSectionContentDMGMenuMoveTopOption);

			toolSectionContentDMGMenuMoveTopOption.style.background = "var(--type"+returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,tempMoves[m])+")";
		}
	
		toolSectionContentDMGMenuSpecificTopInput.addEventListener("change",DMGCalcStart);
		toolSectionContentDMGMenuMoveTopSelect.addEventListener("change",DMGSetInfo);
		toolSectionContentDMGMenuMoveTopSelect.addEventListener("change",DMGCalcStart);


		var conditions = [{Name:"Boulder Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Brock in Pewter City, it raises the the Attack stat stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow,FireRed,LeafGreen"},{Name:"Thunder Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Thunder Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Soul Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Koga in Fuchsia City, it raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Soul Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Koga in Fuchsia City, it raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Volcano Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Blaine on Cinnabar Island, it raises the Special stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Volcano Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Blaine on Cinnabar Island, it raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Zephyr Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Falkner in Violet City, it increases the power of Flying-type moves by 12.5% and raises the Attack stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Hive Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Bugsy in Azaela Town, it increases the power of Bug-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Plain Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Whitney in Goldenrod City, it increases the power of Normal-type moves by 12.5% and raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Fog Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Morty in Ecruteak City, it increases the power of Ghost-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Storm Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Chuck in Cianwood City, it increases the power of Fighting-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Mineral Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Jasmine in Olivine City, it increases the power of Steel-type moves by 12.5% and raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Glacier Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Pryce in Mahogany Town, it increases the power of Ice-type moves by 12.5% and raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Rising Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Clair in Blackthorn City, it increases the power of Dragon-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Boulder Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Brock in Pewter City, it increases the power of Rock-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Cascade Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Misty in Cerulean City, it increases the power of Water-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Thunder Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it increases the power of Electric-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Rainbow Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Erika in Celadon City, it increases the power of Grass-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Soul Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Janine in Fuchsia City, it increases the power of Poison-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Marsh Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Sabrina in Saffron City, it increases the power of Psychic-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Volcano Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Blaine on the Seafoam Islands, it increases the power of Fire-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Earth Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Blue in Viridian City, it increases the power of Ground-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Stone Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Roxanne in Rustboro City, it raises the Attack stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Dynamo Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Wattson in Mauville City, it raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Balance Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Norman in Petalburg City, it raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Mind Badge",Affect:"Pokémon",Group:"Badge",Title:"Obtained from the Gym Leader Tate and Liza in Mossdeep City, it raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Poisoned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Badly Poisoned",Affect:"Pokémon",Group:"Status",Title:"Turns of Bad Poison",Values:"0,15",Type:"Status",Game:"All"},{Name:"Burned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Paralyzed",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Asleep",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Frozen",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Leech Seed",Affect:"Pokémon",Group:"Seed",Affected:"Leech Seed",Type:"Move",Game:"All"},{Name:"Sappy Seed",Affect:"Pokémon",Group:"Seed",Affected:"Sappy Seed",Type:"Move",Game:"All"},{Name:"Forest's Curse",Affect:"Pokémon",Group:"Type Change",Affected:"Forest's Curse",Type:"Move",Game:"All"},{Name:"Trick-or-Treat",Affect:"Pokémon",Group:"Type Change",Affected:"Trick-or-Treat",Type:"Move",Game:"All"},{Name:"Magnet Rise",Affect:"Pokémon",Group:"Ungrounded",Affected:"Magnet Rise",Type:"Move",Game:"All"},{Name:"Telekinesis",Affect:"Pokémon",Group:"Ungrounded",Affected:"Telekinesis",Type:"Move",Game:"All"},{Name:"Thousand Arrows",Affect:"Pokémon",Group:"Grounded",Affected:"Thousand Arrows",Type:"Move",Game:"All"},{Name:"Smack Down",Affect:"Pokémon",Group:"Grounded",Affected:"Smack Down",Type:"Move",Game:"All"},{Name:"Ingrain",Affect:"Pokémon",Group:"Grounded",Affected:"Ingrain",Type:"Move",Game:"Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Glaive Rush",Affect:"Pokémon",Affected:"Glaive Rush",Type:"Move",Game:"All"},{Name:"Helping Hand",Affect:"Pokémon",Affected:"Helping Hand",Type:"Move",Game:"All"},{Name:"Laser Focus",Affect:"Pokémon",Affected:"Laser Focus",Type:"Move",Game:"All"},{Name:"Odor Sleuth",Affect:"Pokémon",Affected:"Odor Sleuth",Type:"Move",Game:"All"},{Name:"Foresight",Affect:"Pokémon",Affected:"Foresight",Type:"Move",Game:"All"},{Name:"Miracle Eye",Affect:"Pokémon",Affected:"Miracle Eye",Type:"Move",Game:"All"},{Name:"Shadow",Affect:"Pokémon",Title:"Is it a Shadow Pokémon?",Type:"Form",Game:"Colosseum"},{Name:"Dynamax",Affect:"Pokémon",Title:"Is the Pokémon Dynamaxed?",Type:"Form",Game:"Sword,Shield"},{Name:"Stealth Rock",Affect:"Team",Group:"Pointed Stones",Affected:"Stealth Rock",Type:"Move",Game:"All"},{Name:"G-Max Stonesurge",Affect:"Team",Group:"Pointed Stones",Affected:"G-Max Stonesurge",Type:"Move",Game:"Sword,Shield"},{Name:"Spikes",Affect:"Team",Group:"Spikes",Affected:"Spikes",Title:"Layers of Spikes",Values:"0,3",Type:"Move",Game:"All"},{Name:"G-Max Steelsurge",Affect:"Team",Group:"Sharp Steel",Affected:"G-Max Steelsurge",Type:"Move",Game:"Sword,Shield"},{Name:"Light Screen",Affect:"Team",Group:"Screen",Affected:"Light Screen",Type:"Move",Game:"All"},{Name:"Reflect",Affect:"Team",Group:"Screen",Affected:"Reflect",Type:"Move",Game:"All"},{Name:"Aurora Veil",Affect:"Team",Group:"Screen",Affected:"Aurora Veil",Type:"Move",Game:"All"},{Name:"Tailwind",Affect:"Team",Affected:"Tailwind",Type:"Move",Game:"All"},{Name:"Lucky Chant",Affect:"Team",Affected:"Lucky Chant",Type:"Move",Game:"All"},{Name:"G-Max Volcalith",Affect:"Team",Affected:"G-Max Volcalith",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Cannonade",Affect:"Team",Affected:"G-Max Cannonade",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Vine Lash",Affect:"Team",Affected:"G-Max Vine Lash",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Wildfire",Affect:"Team",Affected:"G-Max Wildfire",Type:"Move",Game:"Sword,Shield"},{Name:"Harsh Sunlight",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Sandstorm",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Snow",Affect:"All",Group:"Weather",Type:"Weather",Game:"Legend Arceus,Scarlet,Violet"},{Name:"Fog",Affect:"All",Group:"Weather",Type:"Weather",Game:"Diamond,Pearl,Platinum,Brilliant Diamond,Shining Pearl,Legend Arceus"},{Name:"Hail",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Extremely Harsh Sunlight",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Heavy Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Strong Winds",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee"},{Name:"Shadowy Aura",Affect:"All",Group:"Weather",Type:"Weather",Game:"XD"},{Name:"Electric Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Grassy Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Misty Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Psychic Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Legend Arceus,Scarlet,Violet"},{Name:"Trick Room",Affect:"All",Affected:"Trick Room",Type:"Move",Game:"All"},{Name:"Magic Room",Affect:"All",Affected:"Magic Room",Type:"Move",Game:"All"},{Name:"Wonder Room",Affect:"All",Affected:"Wonder Room",Type:"Move",Game:"All"},{Name:"Gravity",Affect:"All",Affected:"Gravity",Type:"Move",Game:"All"},{Name:"Protection",Affect:"Specific",Affected:"Baneful Bunker,Crafty Shield,Detect,King's Shield,Mat Block,Max Guard,Obstruct,Protect,Quick Guard,Silk Trap,Spiky Shield,Wide Guard",Title:"Is the target being Protected?",Type:"Move",Game:"All"},{Name:"Semi-Invulnerable Flight",Affect:"Specific",Affected:"Fly,Bounce",Title:"Is the target in a semi-invulnerable turn of Fly or Bounce?",Type:"Move",Game:"All"},{Name:"Semi-Invulnerable Dig",Affect:"Specific",Affected:"Dig",Title:"Is the target in a semi-invulnerable turn of Dig?",Type:"Move",Game:"All"},{Name:"Semi-Invulnerable Dive",Affect:"Specific",Affected:"Dive,Surf,Whirlpool",Title:"Is the target in a semi-invulnerable turn of Dive?",Type:"Move",Game:"All"},{Name:"Switching",Affect:"Specific",Affected:"Pursuit",Title:"Is the target switching out?",Type:"Move",Game:"All"},{Name:"Confusion",Affect:"Specific",Affected:"Tangled Feet",Title:"Is the target confused?",Type:"Ability",Game:"All"},{Name:"Minimize",Affect:"Specific",Title:"Did the target previously use Minimize?",Type:"Move",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Charge",Affect:"Specific",Affected:"Charge",Title:"Is the move powered up by Charge?",Type:"Move",Game:"All"},{Name:"Me First",Affect:"Specific",Affected:"Me First",Title:"Is the move called by Me First?",Type:"Move",Game:"All"},{Name:"Flash Fire",Affect:"Specific",Affected:"Flash Fire",Title:"Is Flash Fire active on the user?",Type:"Ability",Game:"All"},{Name:"Tar Shot",Affect:"Specific",Affected:"Tar Shot",Title:"Is Tar Shot active on the target?",Type:"Move",Game:"All"},{Name:"Damaged",Affect:"Specific",Affected:"Revenge",Title:"Did the user take damage this turn?",Type:"Move",Game:"All"},{Name:"Defense Curl",Affect:"Specific",Affected:"Defense Curl",Title:"Did the user previously use Defense Curl?",Type:"Move",Game:"All"},{Name:"Z-Move",Affect:"Specific",Title:"Transform move to Z-Move?",Type:"Move",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee"},{Name:"Max Move",Affect:"Specific",Title:"Transform move to Max Move?",Type:"Move",Game:"Sword,Shield"}]
		var battleVariation = [{Name:"Single Battle",TeamMin:"1",TeamMax:"1",OpponentMin:"1",OpponentMax:"1",Teams:"2",Game:"All"},{Name:"Double Battle",TeamMin:"2",TeamMax:"2",OpponentMin:"2",OpponentMax:"2",Teams:"2",Game:"Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Triple Battle",TeamMin:"3",TeamMax:"3",OpponentMin:"3",OpponentMax:"3",Teams:"2",Game:"Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire"},{Name:"Battle Royal",TeamMin:"1",TeamMax:"1",OpponentMin:"1",OpponentMax:"1",Teams:"4",Game:"Sun,Moon,Ultra Sun,Ultra Moon"},{Name:"SOS Battle",TeamMin:"1",TeamMax:"1",OpponentMin:"2",OpponentMax:"2",Teams:"2",Game:"Sun,Moon,Ultra Sun,Ultra Moon"},{Name:"Horde Encounter",TeamMin:"1",TeamMax:"1",OpponentMin:"5",OpponentMax:"5",Teams:"2",Game:"X,Y,Omega Ruby,Alpha Sapphire"},{Name:"Max Raid Battle",TeamMin:"4",TeamMax:"4",OpponentMin:"1",OpponentMax:"1",Teams:"2",Game:"Sword,Shield"},{Name:"Tera Raid Battle",TeamMin:"4",TeamMax:"4",OpponentMin:"1",OpponentMax:"1",Teams:"2",Game:"Scarlet,Violet"}]


		for(var q = 0; q < battleVariation.length; q++) {
			if (getApplicable(battleVariation[q]["Game"])) {
				var toolSectionContentDMGOptionsBattlesOption = document.createElement("option");
				toolSectionContentDMGOptionsBattlesOption.innerText = battleVariation[q]["Name"];
				toolSectionContentDMGOptionsBattlesOption.value = battleVariation[q]["Name"];
				toolSectionContentDMGOptionsBattlesOption.setAttribute("name",q);
				toolSectionContentDMGOptionsBattlesSelect.appendChild(toolSectionContentDMGOptionsBattlesOption)

				var keys = Object.keys(battleVariation[q])
				for(var r = 0; r < keys.length; r++) {
					if (keys[r] != "Name" && keys[r] != "Game") {
						toolSectionContentDMGOptionsBattlesOption.setAttribute(keys[r],battleVariation[q][keys[r]])
					}
				}
			}
		}
		toolSectionContentDMGOptionsBattlesSelect.setAttribute("teammin",battleVariation[0]["TeamMax"])
		toolSectionContentDMGOptionsBattlesSelect.setAttribute("teammax",battleVariation[0]["TeamMax"])
		toolSectionContentDMGOptionsBattlesSelect.setAttribute("opponentmin",battleVariation[0]["OpponentMin"])
		toolSectionContentDMGOptionsBattlesSelect.setAttribute("opponentmax",battleVariation[0]["OpponentMax"])
		toolSectionContentDMGOptionsBattlesSelect.setAttribute("name",0)


		toolSectionContentDMGOptionsBattlesSelect.addEventListener("change",function() {let x = this.value; let tar = this.querySelector(":scope > *[value='"+x+"']"); this.setAttribute("opponentmax",tar.getAttribute("opponentmax"));this.setAttribute("teammax",tar.getAttribute("teammax")); this.setAttribute("opponentmin",tar.getAttribute("opponentmin"));this.setAttribute("teammin",tar.getAttribute("teammin"));this.setAttribute("name",tar.getAttribute("name"));})
		toolSectionContentDMGOptionsBattlesSelect.addEventListener("change",function(){buildDMG()})
		toolSectionContentDMGOptionsBattlesSelect.addEventListener("change",function() {document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div").setAttribute("name",this.value)})
		buildDMG();
		DMGSetInfo();


		function buildDMG() {


			var ds1 = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name]")
			

			var dsArr1 = [];
			var dsArr2 = [];
			for (var d = 0; d < ds1.length; d++) {
				var ds2 = ds1[d].querySelectorAll(":scope > *[data-string]");

				for (var r = 0; r < ds2.length; r++) {
					var val = ds2[r].getAttribute("data-string");
					if (val != undefined && val != "") {
						if (val.includes("pok:") && !val.includes("pok:|") && !val.includes("pok:\n")) {
							dsArr1.push(val);
						}
						else {
							dsArr1.push("");
						}
					}
					else {
						dsArr1.push("");
					}

					dsArr2.push(ds2[r].parentElement.getAttribute("name")+"-"+r);
				}
			}


			var battleVar = battleVariation[toolSectionContentDMGOptionsBattlesSelect.getAttribute("name")];
			
			toolSectionContentDMGOptionsContentTop.innerHTML = "";
			toolSectionContentDMGOptionsContentBottom.innerHTML = "";
			toolSectionContentDMGOptionsTitle.innerHTML = "";
			toolSectionContentDMGOptionsBottom.innerHTML = "";
			toolSectionContentDMGResult.innerHTML = "";
			toolSectionContentDMGMenuSpecificBottom.innerHTML = "";




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
				toolSectionContentDMGOptionsTitleTeam.addEventListener("change",function(){var x = this.value; var z = this.getAttribute("name");var dvs = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+z.toLowerCase()+"'] ul"); var dv = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+z.toLowerCase()+"'] ul:nth-child("+(parseInt(x)+1)+")");for (var i = 0; i < dvs.length; i++) {dvs[i].style.display = "none";} dv.style.display="flex";})
			

				var resultTeams = document.createElement("span");
				resultTeams.setAttribute("name",teamName.toLowerCase());
				toolSectionContentDMGResult.appendChild(resultTeams);


				var toolSectionContentDMGOptionsContentBottomSide = document.createElement("span");
				toolSectionContentDMGOptionsContentBottomSide.setAttribute("name",teamName.toLowerCase())
				toolSectionContentDMGOptionsContentBottom.appendChild(toolSectionContentDMGOptionsContentBottomSide)
			
				$(toolSectionContentDMGResult).sortable({
					stop: function(e,ui) {
						DMGMatchPosition();
						DMGCalcStart();
					},
					axis: "x",
					scroll: false,
				});

				$(resultTeams).sortable({
					stop: function(e,ui) {
						DMGMatchPosition();
						DMGCalcStart();
					},
					axis: "y",
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
					opt.setAttribute("value",r);
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
					var resultTeamActiveUserSelect = document.createElement("figure");
					var resultTeamActiveUserSelectText = document.createElement("small");
					var resultTeamActiveTargetSelect = document.createElement("figure");
					var resultTeamActiveTargetSelectText = document.createElement("small");
					var resultTeamActiveGrab = document.createElement("figure");
					var resultTeamActiveGrabText = document.createElement("small");

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
					resultTeamActiveExport.setAttribute("name","export");
					resultTeamActiveUserSelect.setAttribute("name","user");
					resultTeamActiveTargetSelect.setAttribute("name","target");
					resultTeamActiveGrab.setAttribute("name","grab");

					resultTeamActivePokImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
					resultTeamActivePokItem.setAttribute("onerror","this.style.display = 'none';");
					resultTeamActivePokItem.setAttribute("onload","this.style.removeProperty('display');");
					resultTeamActiveCloseText.innerText = "❌";
					resultTeamActiveExportText.innerText = "⮟";
					resultTeamActiveUserSelectText.innerText = "⍟";
					resultTeamActiveTargetSelectText.innerText = "⨀";
					resultTeamActiveGrabText.innerText = "⋮⋮⋮";
					resultTeamActiveBottom.setAttribute("name","moves");


					resultTeam.appendChild(resultTeamInactive);
					resultTeamInactive.appendChild(resultTeamInactiveImport)
					resultTeam.appendChild(resultTeamActive);
					resultTeamActive.appendChild(resultTeamActiveTop);
					resultTeamActive.appendChild(resultTeamActiveBottom);
					resultTeamActiveTop.appendChild(resultTeamActivePok);
					resultTeamActiveTop.appendChild(resultTeamActivePok);
					resultTeamActiveTop.appendChild(resultTeamActiveClose);
					resultTeamActiveClose.appendChild(resultTeamActiveCloseText);
					resultTeamActiveTop.appendChild(resultTeamActiveExport);
					resultTeamActiveExport.appendChild(resultTeamActiveExportText);
					resultTeamActiveTop.appendChild(resultTeamActiveUserSelect);
					resultTeamActiveUserSelect.appendChild(resultTeamActiveUserSelectText);
					resultTeamActiveTop.appendChild(resultTeamActiveTargetSelect);
					resultTeamActiveTargetSelect.appendChild(resultTeamActiveTargetSelectText);
					resultTeamActiveTop.appendChild(resultTeamActivePokHealth);
					resultTeamActivePokHealth.appendChild(resultTeamActivePokHealthPercentage);
					resultTeamActivePokHealth.appendChild(resultTeamActivePokHealthWrap);
					resultTeamActivePokHealthWrap.appendChild(resultTeamActivePokHealthCurrent);
					resultTeamActivePokHealthWrap.appendChild(resultTeamActivePokHealthDash);
					resultTeamActivePokHealthWrap.appendChild(resultTeamActivePokHealthMax);
					resultTeamActiveTop.appendChild(resultTeamActiveGrab);
					resultTeamActiveGrab.appendChild(resultTeamActiveGrabText);
					resultTeamActivePok.appendChild(resultTeamActivePokName);
					resultTeamActivePokName.appendChild(resultTeamActivePokNameText);
					resultTeamActivePok.appendChild(resultTeamActivePokImgWrap);
					resultTeamActivePokImgWrap.appendChild(resultTeamActivePokImg);
					resultTeamActivePokImgWrap.appendChild(resultTeamActivePokItem);
					resultTeamInactiveImport.addEventListener("click",DMGSetDataString);
					resultTeamActiveClose.addEventListener("click",DMGRemoveDataString);
					resultTeamActiveExport.addEventListener("click",DMGExportDataString);
					resultTeamActiveUserSelect.addEventListener("click",function(){DMGSetActive("user")});
					resultTeamActiveTargetSelect.addEventListener("click",function(){DMGSetActive("target")});
	
					


					for (var m = 0; m < 4; m++) {
						var resultTeamActiveMove = document.createElement("b");
						var resultTeamActiveMoveText = document.createElement("small");
						resultTeamActiveMove.setAttribute("name",m);
						resultTeamActiveMove.setAttribute("type","invert");
						resultTeamActiveBottom.appendChild(resultTeamActiveMove)
						resultTeamActiveMove.appendChild(resultTeamActiveMoveText)
						resultTeamActiveMove.addEventListener("click",function(){var tar = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='move'] > span select");if (this.firstChild.innerText != "") {tar.style.color = "var(--type"+returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,this.firstChild.innerText)+")"; tar.value = this.firstChild.innerText; DMGSetInfo();DMGCalcStart();}})
					}
 				}
			}

			var divsTop = toolSectionContentDMGOptionsContentTop.querySelectorAll(":scope ul");
			var divsBottom = toolSectionContentDMGOptionsContentBottom.querySelectorAll(":scope > *");
			
			for(var d = 0; d < divsTop.length; d++) {
				var base = divsTop[d];

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
				maxHPRange.setAttribute("min","0");
				maxHPRange.value = 1;
				maxHPRange.setAttribute("max","1");
				maxHPRange.setAttribute("step","1");
				maxHP.setAttribute("name","hp")
				base.appendChild(maxHP);
				maxHP.appendChild(maxHPRange);

				maxHPRange.addEventListener("input",function(){let v = (((this.value-this.min)/(this.max-this.min))*100);let c = "var(--colorBlue)";let b = "var(--color_90)";this.style.background = `linear-gradient(to right, ${c} 0%, ${c} ${v}%, ${b} ${v}%, ${b} 100%)`})

	
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
				maxHPWrapCurrent.addEventListener("change",function(){var tar = this.parentElement.parentElement.querySelector(":scope input[type='range']");let v = ((tar.value-tar.min)/(tar.max-tar.min))*100;let c = "var(--colorBlue)";let b = "var(--color_90)";tar.style.background = `linear-gradient(to right, ${c} 0%, ${c} ${v}%, ${b} ${v}%, ${b} 100%)`})
				maxHPWrapCurrent.addEventListener("change",DMGCalcStart);
		
				maxHPRange.addEventListener("input",function(){this.parentElement.querySelector(":scope *[name='current']").value = this.value;});
				maxHPRange.addEventListener("input",DMGCalcStart);


				var stats = document.createElement("li");
				var statsWrap = document.createElement("span");
				stats.setAttribute("name","stats")
				base.appendChild(stats);
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
						if (getApplicable("Lets Go Pikachu,Lets Go Eevee")) {
							tit = "Awakening Value";
							abbr = "AV";
							max = 200;
						}
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
					statsWrapTempInput.setAttribute("disabled","");
					statsWrapTempInput.setAttribute("min",0);
					statsWrapTempInput.setAttribute("max",0);
					statsWrapTempInput.setAttribute("value",abbr);
					statsWrapTempInput.setAttribute("placeholder",abbr);
					statsWrapCenter.appendChild(statsWrapTempInput);

					
	
					
					var statsTemp = [...Stats];

					statsTemp.push("Evasion");
					statsTemp.push("Accuracy");
					statsTemp.push("Critical");

					statsTemp = statsTemp.filter(e => e !== 'Total');

					for(var s = 0; s < statsTemp.length; s++) {

						if (e == 1 || e == 2 || e == 4) {
							if (statsTemp[s] == "Evasion" || statsTemp[s] == "Accuracy" || statsTemp[s] == "Critical") {
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
			
						if (statsTemp[s] == "Critical") {
							if (Generation == 1) {
								statsWrapInput.min = 0;
								statsWrapInput.max = 1;
							}
							else if (Generation >= 2) {
								statsWrapInput.min = 0;
								statsWrapInput.max = 4;
							}
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
						statsWrapInput.addEventListener("input",iMinMax);
						statsWrapInput.addEventListener("input",DMGCalcPokStats);
						statsWrapInput.addEventListener("input",DMGSaveData);
						statsWrapInput.addEventListener("input",DMGCalcStart);

						statsWrapInput.addEventListener("input",function(){if (this.value == 0) {this.value = ""}});

						if (statsTemp[s] != "Evasion" && statsTemp[s] != "Accuracy") {
							if (e < 3) {
								statsWrapInput.style.color = "var(--stat"+statsTemp[s].replaceAll(".","").replaceAll(" ","")+")";
							}
						}

						if (e == 2) {
							if (Generation >= 3) {
								if (!getApplicable("Lets Go Pikachu,Lets Go Eevee")) {
									statsWrapInput.addEventListener("change",function(){inputMaxValue(this.parentElement.querySelectorAll(":scope input"),255,510)});
								}
							}
						}
					}
				}
		


				var type = document.createElement("li");
				var typeWrap = document.createElement("span");
				type.setAttribute("name","type");
				base.appendChild(type)
				type.appendChild(typeWrap);
				var count = 2;
				if (document.querySelector("#contain > div#move > section[name='list'] ol label[data-title='trick-or-treat']") != undefined) {
					count = 3;
				}
				if (document.querySelector(`#contain > div#move > section[name='list'] ol label[data-title="forest's curse"]`) != undefined) {
					count = 3;
				}
				for (var m = 0; m < count; m++) {
					var typeSelect = document.createElement("select");
					typeWrap.appendChild(typeSelect)
					typeSelect.setAttribute("name",m)
					typeSelect.addEventListener("change",function(){if (this.value != "" && this.value != undefined) {this.style.background = "var(--type"+this.value+")"} else {this.style.removeProperty("background")}})
					typeSelect.addEventListener("change",function(){uniqueValueSelect(this.parentElement.querySelectorAll(":scope select"))});
					typeSelect.addEventListener("change",DMGCalcPokStats);
					typeSelect.addEventListener("change",DMGSaveData);
					typeSelect.addEventListener("change",DMGCalcStart);
					typeSelect.addEventListener("change",DMGSetChange);

					var typesTemp = [...Types];

					if (typesTemp[0] != "") {
						typesTemp.unshift("");
					}

					for(var n = 0; n < typesTemp.length; n++) {
						var typeOption = document.createElement("option");
						typeOption.value = typesTemp[n];
						typeOption.innerText = typesTemp[n];
						typeSelect.appendChild(typeOption)
						if (n != 0) {
							typeOption.style.background = "var(--type"+typesTemp[n]+")";
						}
						else {
							typeOption.style.background = "gray";
						}
					}
					if (m == 2) {
						typeSelect.innerHTML = "<option value=''></option>"
						typeSelect.classList.add("disable");
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

				level.appendChild(levelTitle)
				level.appendChild(levelInput)

				levelInput.addEventListener("input",iMinMax);
				levelInput.addEventListener("input",DMGCalcPokStats);
				levelInput.addEventListener("input",DMGSaveData);
				levelInput.addEventListener("input",DMGCalcStart);



				if (Natures.length > 0) {
					var nature = document.createElement("li");
					var natureTitle = document.createElement("h6");
					var natureSelect = document.createElement("select");

					nature.setAttribute("name","nature");
					natureTitle.innerText = "Nature"

					base.appendChild(nature)
					nature.appendChild(natureTitle);
					nature.appendChild(natureSelect)

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





	



				if (Ability.length > 0) {
					var ability = document.createElement("li");
					var abilityTitle = document.createElement("h6");
					var abilitySelect = document.createElement("select");

					ability.setAttribute("name","ability");
					abilityTitle.innerText = "Ability"

					base.appendChild(ability)
					ability.appendChild(abilityTitle);
					ability.appendChild(abilitySelect)

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
			


				if (Gender == true) {

					var gender = document.createElement("li");
					var genderTitle = document.createElement("h6");
					var genderSelect = document.createElement("select");
					
					gender.setAttribute("name","gender");
					genderTitle.innerText = "Gender"

					base.appendChild(gender)
					gender.appendChild(genderTitle);
					gender.appendChild(genderSelect)

					genderSelect.addEventListener("change",DMGCalcPokStats);
					genderSelect.addEventListener("change",DMGSaveData);
					genderSelect.addEventListener("change",DMGCalcStart);

					genderSelect.addEventListener("change",function(){this.style.removeProperty("color"); if (this.value == "♂") {this.style.color = "blue";}else if (this.value == "♀") {this.style.color = "red";}});
		
			
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

					friendshipInput.addEventListener("input",iMinMax);
					friendshipInput.addEventListener("input",DMGCalcPokStats);
					friendshipInput.addEventListener("input",DMGSaveData);
					friendshipInput.addEventListener("input",DMGCalcStart);

					friendship.appendChild(friendshipTitle)
					friendship.appendChild(friendshipInputWrap)
					friendshipInputWrap.appendChild(friendshipInput)
					
				}

				if (getApplicable("X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon")) {
					var affection = document.createElement("li");
					affection.setAttribute("name","affection");
					base.appendChild(affection)

					var affectionTitle = document.createElement("h6");
					var affectionInputWrap = document.createElement("span");
					var affectionInput = document.createElement("input");
					affectionTitle.innerText = "Affection";

					affectionInput.setAttribute("type","number");
					affectionInput.setAttribute("min","0");
					affectionInput.setAttribute("max","255");
					affectionInput.setAttribute("placeholder","0");
					affectionInput.setAttribute("onblur","this.placeholder='0'");
					affectionInput.setAttribute("onfocus","this.placeholder=''");
					affectionInput.value = 0;

					affectionInput.addEventListener("input",iMinMax);
					affectionInput.addEventListener("input",DMGCalcPokStats);
					affectionInput.addEventListener("input",DMGSaveData);
					affectionInput.addEventListener("input",DMGCalcStart);

					affection.appendChild(affectionTitle)
					affection.appendChild(affectionInputWrap)
					affectionInputWrap.appendChild(affectionInput)
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

					itemSelect.addEventListener("change",DMGSetInfo);
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
					moveSelect.addEventListener("change",function(){var x = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,this.value); if (x == undefined) {this.style.removeProperty("color");this.style.removeProperty("background");} else {this.style.color = "var(--type"+x+")";this.style.background="dimgray";}})
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
							moveOption.style.background = "var(--type"+returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,movesTemp[n])+")";
						}
					}
				}
				



				for(var c = 0; c < conditions.length; c++) {
					var check = getApplicable(conditions[c]["Game"]);
					
					if (conditions[c]["Affected"] != undefined && conditions[c]["Game"] == "All") {
						check = false;
						var val = [];
						if (conditions[c]["Affected"].includes(",")) {
							val = conditions[c]["Affected"].split(",");
						}
						else {
							val = [conditions[c]["Affected"]]
						}

						for (var k = 0; k < val.length; k++) {
							var exist = document.querySelector(`#contain > div#`+conditions[c]["Type"].toLowerCase()+` > section[name='list'] ol label[data-title="`+val[k].toLowerCase()+`"]`);
							if (exist  != undefined) {
								check = true;
								break;
							}
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
						if (conditions[c]["Affect"] == "Specific") {
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

									if (conditions[c]["Group"] != "Badge" && conditions[c]["Group"] != "Screen" && conditions[c]["Group"] != "Ungrounded" && conditions[c]["Group"] != "Grounded") {
										conditionInput.addEventListener("change",function(){onlyOneInput(this.parentElement.parentElement.querySelectorAll(":scope input"),this)})
									}


									if (conditions[c]["Group"] == "Badge" || conditions[c]["Group"] == "Status") {
										conditionInput.addEventListener("change",DMGCalcPokStats)
									}


									if (conditions[c]["Title"] != undefined) {
										cond.setAttribute("title",conditions[c]["Title"])
									}
									else if (conditions[c]["Type"] == "Move") {
										var val = returnArrValue(finaldataMoveDescription,"Name_"+JSONPath_MoveName,"Description_"+JSONPath_MoveDescription,conditions[c]["Name"])
										if (val != undefined) {
											cond.setAttribute("title",val);
										}
									}
									else if (conditions[c]["Type"] == "Ability") {
										var val = returnAppArrData(finaldataAbilityDescription,"Ability",conditions[c]["Name"])[0]["Description"];
										if (val != undefined) {
											cond.setAttribute("title",val);
										}
									}
								
									if (conditions[c]["Name"] == "Trick-or-Treat") {
										conditionInput.addEventListener("change",function(){var y = this.parentElement.parentElement.parentElement.parentElement.querySelectorAll(":scope *[name='type'] select"); check = true; for (var i = 0; i < y.length; i++) {if (y[i].value == "Ghost") {check = false;break;}}; if (check) {if(this.checked) {y[2].innerHTML = "<option value='Ghost' style='var(--typeGhost)'>Ghost</option>";y[2].classList.remove("disable");y[2].value = "Ghost";y[2].style.background = 'var(--typeGhost';}} else {this.checked = false; y[2].style.removeProperty("background");y[2].classList.add("disable");y[2].innerHTML = "<option value=''></option>"; y[2].value = "";} uniqueValueSelect(y)})
									}
									if (conditions[c]["Name"] == "Forest's Curse") {
										conditionInput.addEventListener("change",function(){var y = this.parentElement.parentElement.parentElement.parentElement.querySelectorAll(":scope *[name='type'] select"); check = true; for (var i = 0; i < y.length; i++) {if (y[i].value == "Grass") {check = false;break;}}; if (check) {if(this.checked) {y[2].innerHTML = "<option value='Grass' style='var(--typeGrass)'>Grass</option>";y[2].classList.remove("disable");y[2].value = "Grass";y[2].style.background = 'var(--typeGrass';}} else {this.checked = false; y[2].style.removeProperty("background");y[2].classList.add("disable");y[2].innerHTML = "<option value=''></option>"; y[2].value = "";} uniqueValueSelect(y)})
									}

									
									if (conditions[c]["Values"] != undefined) {
										conditionInput.setAttribute("type","number");
										conditionInput.setAttribute("min",conditions[c]["Values"].split(",")[0]);
										conditionInput.setAttribute("max",conditions[c]["Values"].split(",")[1]);
										conditionInput.addEventListener("input",iMinMax);
										conditionInput.addEventListener("input",DMGCalcStart);
									}
									else {
										conditionInput.addEventListener("change",DMGCalcStart);
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
						
								if (conditions[c]["Title"] != undefined) {
									condition.setAttribute("title",conditions[c]["Title"])
								}
								else if (conditions[c]["Type"] == "Move") {
									var val = returnArrValue(finaldataMoveDescription,"Name_"+JSONPath_MoveName,"Description_"+JSONPath_MoveDescription,conditions[c]["Name"])
									if (val != undefined) {
										condition.setAttribute("title",val);
									}
								}
								else if (conditions[c]["Type"] == "Ability") {
									var val = returnAppArrData(finaldataAbilityDescription,"Ability",conditions[c]["Name"])[0]["Description"];
									if (val != undefined) {
										condition.setAttribute("title",val);
									}
								}
							
								
								

								if (conditions[c]["Values"] != undefined) {
									conditionInput.setAttribute("type","number");
									conditionInput.setAttribute("min",conditions[c]["Values"].split(",")[0])
									conditionInput.setAttribute("max",conditions[c]["Values"].split(",")[1])
									conditionInput.addEventListener("input",iMinMax);
									conditionInput.addEventListener("input",DMGCalcStart);	
								}
								else {
									conditionInput.addEventListener("change",DMGCalcStart);	
								}

								

		
							}
						}
					}
				}


				var reset = document.createElement("figure");
				var resetText = document.createElement("h6");
				resetText.innerText = "❌";
				reset.setAttribute("type","scale");
				reset.setAttribute("name","reset");
				base.appendChild(reset)
				reset.appendChild(resetText)
				reset.addEventListener("click",function(){var base = findUpTag(this,"UL");DMGRemoveDataString(document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+base.parentElement.getAttribute("name")+"'] > div[name='"+base.getAttribute("name")+"']"))})


				var ex = document.createElement("figure");
				ex.setAttribute("name","export");
				base.appendChild(ex)

				ex.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})

				var exText = document.createElement("small");
				exText.innerText = "⮟";
				ex.appendChild(exText)

				var extop = document.createElement("div");
				ex.appendChild(extop)
				var extopwrap = document.createElement("span");
				extop.appendChild(extopwrap)

				var exopts = ["Import Pokémon","Copy Data String","Add Copy to Party","Add Copy to Box","Change Evolution","Change Form"];

				for(var e = 0; e < exopts.length; e++) {
					var exwraptop = document.createElement("span");
					var exwrap = document.createElement("b");
					var extext = document.createElement("small");
					exwraptop.setAttribute("name",exopts[e]);
					exwrap.setAttribute("type","invert");
					extext.innerText = exopts[e];
					extopwrap.appendChild(exwraptop);
					exwraptop.appendChild(exwrap);
					exwrap.appendChild(extext);
					exwrap.addEventListener("click",exChange);
				}

		

				function exChange() {
					var base = findUpTag(this,"UL");
					var val = findUpTag(this,"SPAN").querySelector(":scope small").innerText;

					var team = base.parentElement.getAttribute("name");
					var id = base.getAttribute("name");

					var divbase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[data-string][name='"+id+"']")
					var dataString = divbase.getAttribute("data-string");

					var pokPath = base.querySelector(":scope li[name='pokémon'] select");
					var int = undefined;
					if (pokPath.value != undefined && pokPath.value != "") {
						int = getPokémonInt(pokPath.value);
					}
		
		
					if (val == "Import Pokémon") {
						DMGSetDataString(divbase);
					}

					if (int != undefined) {
						var evoFamily = getEvolutionFamily(int).map(function(v) {return v["Pokémon"];});
						var pokForm = getPokémonForm(int);
						
						if (val == "Copy Data String") {
							DMGSaveData(base);
							dataString = divbase.getAttribute("data-string");
							navigator.clipboard.writeText(dataString);
							console.log(dataString);
							consoleText("Copied Data String!");
						}
						if (val == "Add Copy to Party") {
							var slot = document.querySelectorAll('#pokémon > aside[name="team"] section div[name="empty"]');
							if (slot.length > 0) {
								createParty(slot[0],dataString);
								partyShow(slot[0]);
								consoleText("Copy added to Party.");
							}
							else {
								consoleText("Party is full!")
							}
						}
						if (val == "Add Copy to Box") {
							storeInBox(dataString);
							consoleText("Copy added to Box.");
						}
						if (val == "Change Evolution") {
							evoFamily = evoFamily.filter(function(v) {
								return v != finaldataPokémon[int]["Pokémon"];
							})
							evoFamily = evoFamily.filter(function(v) {
								return v != finaldataPokémonForm[int]["Form_"+JSONPath_Form];
							})

							for (var q = 0; q < evoFamily.length; q++) {
								var x = q+1;
								evoFamily[q] = x+". "+evoFamily[q];
							}

							evoFamily = evoFamily.join("\n");

							var reply = prompt("Change Evolution\nEnter Number:\n"+evoFamily,"");
							var num = [];

							if (reply != null && reply != "") {
								evoFamily = evoFamily.split("\n");

								for (var q = 0; q < evoFamily.length; q++) {
									num.push(evoFamily[q].split(". ",2)[0]);
								}

								for (var q = 0; q < evoFamily.length; q++) {
									evoFamily[q] = evoFamily[q].split(". ",2)[1];
								}

								var result = evoFamily[parseInt(reply)-1]

								if (dataString.includes("|")) {
									if (dataString.includes("pok")) {
										var data = dataString.split("|");
										for (var u = 0; u < data.length; u++) {
											if (data[u].includes("pok:")) {
												data[u] = data[u].split(":",1)[0]+":"+result;
												break;
											}
										}
										data = data.join("|");
									}
								}
								else {
									if (dataString.includes("pok")) {
										var data = dataString.split(":",1)[0]+":"+result;
									}
								}

								if (num.includes(reply)) {
									divbase.setAttribute("data-string",data);
									DMGSetChange(base);
									DMGPokSpecific(base);
									DMGSetChange(base);
									DMGCalcPokStats(base);
									DMGCalcStart(base);
									consoleText("Evolution updated.");
								}
								else {
									consoleText("Number returned an error.")
								}
							}
						}
						if (val == "Change Form") {
							pokForm = pokForm.filter(function(v) {
								return v != getPokémonName(int);
							})
						
							for (var q = 0; q < pokForm.length; q++) {
								var x = q+1;
								pokForm[q] = x+". "+pokForm[q];
							}
						
							pokForm = pokForm.join("\n");
						
							var reply = prompt("Change Form\nEnter Number:\n"+pokForm,"");
							var num = [];
						
							if (reply != null && reply != "") {
						
								pokForm = pokForm.split("\n");
						
								for (var q = 0; q < pokForm.length; q++) {
									num.push(pokForm[q].split(". ",2)[0]);
								}
						
								for (var q = 0; q < pokForm.length; q++) {
									pokForm[q] = pokForm[q].split(". ",2)[1];
								}
						
								var result = pokForm[parseInt(reply)-1]
						
								if (dataString.includes("|")) {
									if (dataString.includes("pok")) {
										var data = dataString.split("|");
										for (var u = 0; u < data.length; u++) {
											if (data[u].includes("pok:")) {
												data[u] = data[u].split(":",1)[0]+":"+result;
												break;
											}
										}
										data = data.join("|");
									}
								}
								else {
									if (data.includes("pok")) {
										var data = dataString.split(":",1)[0]+":"+result;
									}
								}
						
								if (num.includes(reply)) {
									divbase.setAttribute("data-string",data);
									DMGSetChange(base);
									DMGPokSpecific(base);
									DMGSetChange(base);
									DMGCalcPokStats(base);
									DMGCalcStart(base);
									consoleText("Form updated.");
								}
								else {
									consoleText("Number returned an error.")
								}
								
							}
						}
					}

				}
			}


			for(var c = 0; c < conditions.length; c++) {
				var check = getApplicable(conditions[c]["Game"]);
				
				if (conditions[c]["Affected"] != undefined && conditions[c]["Game"] == "All") {
					check = false;
					var val = [];
					if (conditions[c]["Affected"].includes(",")) {
						val = conditions[c]["Affected"].split(",");
					}
					else {
						val = [conditions[c]["Affected"]]
					}

					for (var k = 0; k < val.length; k++) {
						var exist = document.querySelector(`#contain > div#`+conditions[c]["Type"].toLowerCase()+` > section[name='list'] ol label[data-title="`+val[k].toLowerCase()+`"]`);
						if (exist  != undefined) {
							check = true;
							break;
						}
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
			
					if (conditions[c]["Affect"] == "Specific") {
						check = true;
						appender = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child")
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

								if (conditions[c]["Affect"] == "Specific") {
									conditionLabelText.innerText = conditions[c]["Name"];
								}


								tar.appendChild(cond)
								cond.appendChild(conditionInput)
								cond.appendChild(conditionLabel)
								conditionLabel.appendChild(conditionLabelText)

								if (conditions[c]["Title"] != undefined) {
									cond.setAttribute("title",conditions[c]["Title"])
								}
								else if (conditions[c]["Type"] == "Move") {
									var val = returnArrValue(finaldataMoveDescription,"Name_"+JSONPath_MoveName,"Description_"+JSONPath_MoveDescription,conditions[c]["Name"])
									if (val != undefined) {
										cond.setAttribute("title",val);
									}
								}
								else if (conditions[c]["Type"] == "Ability") {
									var val = returnAppArrData(finaldataAbilityDescription,"Ability",conditions[c]["Name"])[0]["Description"];
									if (val != undefined) {
										cond.setAttribute("title",val);
									}
								}

								if (conditions[c]["Group"] == "Weather") {
									var img = document.createElement("img");
									img.src = "./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/"+conditions[c]["Name"]+".png"
									img.title = conditions[c]["Name"];
									img.setAttribute("name",MEDIAPath_Weather);
									img.setAttribute("onload","this.parentElement.firstChild.style.display='none'");
									img.setAttribute("onerror","this.parentElement.parentElement.firstChild.style.display=`unset`; this.parentElement.firstChild.style.display='unset';this.style.display=`none`");
									conditionLabel.appendChild(img)
								}
								if (conditions[c]["Group"] == "Terrain") {
									var terrtype = undefined;
									if (conditions[c]["Name"] == "Misty Terrain") {
										terrtype = "Fairy";
									}
									if (conditions[c]["Name"] == "Grassy Terrain") {
										terrtype = "Grass";
									}
									if (conditions[c]["Name"] == "Psychic Terrain") {
										terrtype = "Psychic";
									}
									if (conditions[c]["Name"] == "Electric Terrain") {
										terrtype = "Electric";
									}
									var img = document.createElement("img");
									img.src = "./media/Images/Misc/Type/Symbol/GO/"+terrtype+".png";
									img.title = conditions[c]["Name"];
									img.setAttribute("onload","this.parentElement.firstChild.style.display='none'");
									img.setAttribute("onerror","this.parentElement.parentElement.firstChild.style.display=`unset`; this.parentElement.firstChild.style.display='unset';this.style.display=`none`");
									conditionLabel.appendChild(img)
								}

								conditionInput.addEventListener("change",DMGCalcStart);	
								
								if (conditions[c]["Group"] != "Badge" && conditions[c]["Group"] != "Screen" && conditions[c]["Group"] != "Ungrounded" && conditions[c]["Group"] != "Grounded") {
									conditionInput.addEventListener("change",function(){onlyOneInput(this.parentElement.parentElement.querySelectorAll(":scope input"),this)})
								}
								if (conditions[c]["Group"] == "Weather") {
									conditionInput.addEventListener("change",function(){var x = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div ul"); for(var q = 0; q < x.length; q++) {DMGCalcPokStats(x[q])}})
								}
							}
						}
						else {
							var condition = document.createElement("li");
							var conditionInput = document.createElement("input");
							var conditionLabel = document.createElement("label");
							var conditionLabelText = document.createElement("small");	
		
							condition.setAttribute("name",conditions[c]["Name"]);

							conditionLabelText.innerText = nameTemp.join(" ");
							conditionInput.setAttribute("type","checkbox");
							conditionInput.setAttribute("name","condition-checkbox");
							conditionInput.setAttribute("id",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
							conditionLabel.setAttribute("for",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
	

							if (conditions[c]["Affect"] == "Specific") {
								conditionLabelText.innerText = conditions[c]["Name"];
							}


							if (conditions[c]["Title"] != undefined) {
								condition.setAttribute("title",conditions[c]["Title"])
							}
							else if (conditions[c]["Type"] == "Move") {
								var val = returnArrValue(finaldataMoveDescription,"Name_"+JSONPath_MoveName,"Description_"+JSONPath_MoveDescription,conditions[c]["Name"])
								if (val != undefined) {
									condition.setAttribute("title",val);
								}
							}
							else if (conditions[c]["Type"] == "Ability") {
								var val = returnAppArrData(finaldataAbilityDescription,"Ability",conditions[c]["Name"])[0]["Description"];
								if (val != undefined) {
									condition.setAttribute("title",val);
								}
							}
						

							conditionInput.addEventListener("change",DMGCalcStart);	
							

							appender.appendChild(condition)
							condition.appendChild(conditionInput)
							condition.appendChild(conditionLabel)
							conditionLabel.appendChild(conditionLabelText)
						}
					}
				}
			}
			
			

			if (toolSectionContentDMGOptionsBottom.firstChild != undefined) {
				toolSectionContentDMGOptionsBottom.style.padding = "5px 0";
			}

			var randomPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div > span > input[type='range']");
			var randomMinText = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div > span > *[name='min']");
			var randomMaxText = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div > span > *[name='max']");
			if (Generation == 1 || Generation == 2) {
				randomPath.setAttribute("min","215");
				randomPath.setAttribute("max","255");
				randomPath.setAttribute("step","1");
				randomPath.value = randomPath.getAttribute("min");
				randomMinText.innerText = randomPath.getAttribute("min")-randomPath.value;
				randomMaxText.innerText =  randomPath.getAttribute("max")-randomPath.getAttribute("min");
			}
			if (Generation >= 3) {
				randomPath.setAttribute("min","85");
				randomPath.setAttribute("max","100");
				randomPath.setAttribute("step","1");
				randomPath.value = randomPath.getAttribute("min");
				randomMinText.innerText = randomPath.getAttribute("min")-randomPath.value;
				randomMaxText.innerText =  randomPath.getAttribute("max")-randomPath.getAttribute("min");
			}


			DMGSetPossible();
			DMGSetInfo();
			DMGCalcStart();


			if (dsArr1.length > 0) {
				if (dsArr1.join("") != "") {
					for(var r = 0; r < dsArr2.length; r++) {
						if (dsArr1[r] != "") {
							var val1 = dsArr2[r].split("-")[0];
							var val2 = dsArr2[r].split("-")[1];
							var dbase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+val1+"'] > div[data-string][name='"+val2+"']")
							if (dbase != undefined) {
								DMGSetDataString(dbase,dsArr1[r]);
							}
						}
					}
				}
			}
			
		}





		function DMGCalcStart() {

			var check = true;

			// Battle
			var battle = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:first-child > span:first-child > select");

			// All
			var allbase = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name] ul[name]");
			var alldivbase = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name] > div[name]");

			// User
			var user = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name] > div.user");
			var userid = user.getAttribute("name");
			var userbase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='player'] ul[name='"+userid+"']");

			var userMaxHPPath = user.querySelector(":scope *[name='hp'] *[name='max']");
			var userCurrentHPPath = user.querySelector(":scope *[name='hp'] *[name='current']");
			var userPercentageHPPath = user.querySelector(":scope *[name='hp'] *[name='percentage']");

			var userPokémonPath = userbase.querySelector(":scope *[name='pokémon'] select");
			var userLevelPath = userbase.querySelector(":scope *[name='level'] input");
			var userItemPath = userbase.querySelector(":scope *[name='item'] select");
			var userItemCountPath = userbase.querySelector(":scope *[name='item'] input[type='number']");
			var userFriendshipPath = userbase.querySelector(":scope *[name='friendship'] input");
			var userAffectionPath = userbase.querySelector(":scope *[name='affection'] input");
			var userAbilityPath = userbase.querySelector(":scope *[name='ability'] select");
			var userHPInputPath = userbase.querySelector(":scope *[name='hp'] input");
			var userLeechSeedPath = userbase.querySelector(":scope *[name='Leech Seed'] input");
			var userStatusPoisonPath = userbase.querySelector(":scope *[name='Poisoned'] input");
			var userStatusBadPoisonPath = userbase.querySelector(":scope *[name='Badly Poisoned'] input");
			var userStatusBurnPath = userbase.querySelector(":scope *[name='Burned'] input");
			var userStatusParalyzePath = userbase.querySelector(":scope *[name='Paralyzed'] input");
			var userStatusAsleepPath = userbase.querySelector(":scope *[name='Asleep'] input");
			var userStatusFrozenPath = userbase.querySelector(":scope *[name='Frozen'] input");
			var userModAccuracyPath = userbase.querySelector(":scope *[name='stats'] > span > span[name='Mod'] input[name='Accuracy']");
			var userModEvasionPath = userbase.querySelector(":scope *[name='stats'] > span > span[name='Mod'] input[name='Evasion']");
			var userModCriticalPath = userbase.querySelector(":scope *[name='stats'] > span > span[name='Mod'] input[name='Critical']");


			var userThousandArrowsPath = userbase.querySelector(":scope *[name='Thousand Arrows'] input");
			var userSmackDownPath = userbase.querySelector(":scope *[name='Smack Down'] input");
			var userMagnetRisePath = userbase.querySelector(":scope *[name='Magnet Rise'] input");
			var userIngrainPath = userbase.querySelector(":scope *[name='Ingrain'] input");
			var userTelekinesisPath = userbase.querySelector(":scope *[name='Telekinesis'] input");


			var userModPath = userbase.querySelectorAll(":scope *[name='stats'] > span > span[name='Mod'] input:not(:first-child)");
			var userStatsPath = userbase.querySelectorAll(":scope *[name='stats'] > span > span:last-child input:not(:first-child)");
			var userBadgePath = userbase.querySelectorAll(":scope *[name='Badge-Group'] input");

			var userSpeedStatPath = userbase.querySelector(":scope *[name='stats'] > span > span:last-child input[name='Speed']");

			var userDireHitPath = userbase.querySelector(":scope *[name='Dire Hit'] input");
			var userFocusEnergyPath = userbase.querySelector(":scope *[name='Focus Energy'] input");

			var userTypesPath = userbase.querySelectorAll(":scope *[name='type'] select");
			var userTypes = [];

			for (var t = 0; t < userTypesPath.length; t++) {
				userTypes.push(userTypesPath[t].value);
			}

			
			// HP
			var userMaxHP = parseInt(userMaxHPPath.innerText);
			var userCurrHP = parseInt(userCurrentHPPath.innerText);
			userMaxHP = undwsnanDel(userMaxHP,0);
			userCurrHP = undwsnanDel(userCurrHP,0);

			

			// Allies
			var AllyMoldBreaker = false;
			var AllyFriendGuard = false;
			var AllyMagicGuard = false;
			var AllyPastelVeil = false;
			var allies = user.parentElement.querySelectorAll(":scope > div[data-string]");
			for (var u = 0; u < allies.length; u++) {
				var allyteam = allies[u].parentElement.getAttribute("name");
				var allyid = allies[u].getAttribute("name");
				var allyab = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+allyteam+"'] ul[name='"+allyid+"'] li[name='ability'] select");
				if (allyab != undefined) {
					if (allies[u] != user) {
						if (allyab.value == "Friend Guard") {
							AllyFriendGuard = true;
						}
					}
					if (allyab.value == "Mold Breaker") {
						AllyMoldBreaker = true;
					}
					if (allyab.value == "Magic Guard") {
						AllyMagicGuard = true;
					}
					if (allyab.value == "Pastel Veil") {
						AllyPastelVeil = true;
					}
				}
			}

			// Enemies
			var EnemyMoldBreaker = false;
			var EnemyFriendGuard = false;
			var EnemyMagicGuard = false;
			var EnemyPastelVeil = false;
			var EnemyLightningRod = false;
			var enemies = user.parentElement.parentElement.querySelectorAll(":scope > span:not([name='player']) > div[data-string]");
			for (var u = 0; u < enemies.length; u++) {
				var enemyteam = enemies[u].parentElement.getAttribute("name");
				var enemyid = enemies[u].getAttribute("name");
				var enemyab = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+enemyteam+"'] ul[name='"+enemyid+"'] li[name='ability'] select");
				if (enemyab != undefined) {
					if (enemies[u] != user) {
						if (enemyab.value == "Friend Guard") {
							EnemyFriendGuard = true;
						}
					}
					if (enemyab.value == "Mold Breaker") {
						EnemyMoldBreaker = true;
					}
					if (enemyab.value == "Magic Guard") {
						EnemyMagicGuard = true;
					}
					if (enemyab.value == "Pastel Veil") {
						EnemyPastelVeil = true;
					}
					if (enemyab.value == "Lightning Rod") {
						EnemyLightningRod = true;
					}
				}
			}



			var userGrounded = true;
			if (userTypes.includes("Flying")) {
				userGrounded = false;
			}
			if (userAbilityPath != undefined && userAbilityPath.value == "Levitate") {
				if (!EnemyMoldBreaker) {
					userGrounded = false;
				}
			}
			if (userItemPath != undefined && userItemPath.value == "Air Balloon") {
				if (userAbilityPath != undefined) {
					if (userAbilityPath.value != "Klutz") {
						userGrounded = false;
					}
				}
				else {
					userGrounded = false;
				}
			}
			if (userMagnetRisePath != undefined && userMagnetRisePath.checked) {
				userGrounded = false;
			}
			if (userTelekinesisPath != undefined && userTelekinesisPath.checked) {
				userGrounded = false;
			}
			if (userItemPath != undefined && userItemPath.value == "Iron Ball") {
				if (userAbilityPath != undefined) {
					if (userAbilityPath.value != "Klutz") {
						userGrounded = true;
					}
				}
				else {
					userGrounded = true;
				}
			}
			if (userIngrainPath != undefined && userIngrainPath.checked) {
				if (Generation >= 4) {
					userGrounded = true;
				}
			}
			if (userSmackDownPath != undefined && userSmackDownPath.checked) {
				userGrounded = true;
			}
			if (userThousandArrowsPath != undefined && userThousandArrowsPath.checked) {
				userGrounded = true;
			}
			if (gravityPath != undefined && gravityPath.checked) {
				userGrounded = true;
			}







			// Target
			var target = [];

			if (user.parentElement.parentElement.getAttribute("data-range").includes("Affects")) {
				target = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name] > div.viable")
			}
			else {
				target = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name] > div.target.viable")
			}

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

			// Terrain
			var TerrainElectricPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Terrain-Group'] *[name='Electric Terrain'] input");
			var TerrainGrassyPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Terrain-Group'] *[name='Grassy Terrain'] input");
			var TerrainMistyPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Terrain-Group'] *[name='Misty Terrain'] input");
			var TerrainPsychicPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Terrain-Group'] *[name='Psychic Terrain'] input");


			var gravityPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child > *[name='Gravity'] input");
			var wonderRoomPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child > *[name='Wonder Room'] input");
			var magicRoomPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child > *[name='Magic Room'] input");

			// Move
			var movePath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='move'] > span select");
			var moveCountPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] input[type='number']");
			var moveSelectPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:first-child > input[type='number']");
			var criticalPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] *[name='critical'] input[type='checkbox']")
			var randomPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div > span > input[type='range']");

	
			var ZMovePath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Z-Move'] input[type='checkbox']");
			var MaxMovePath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Max Move'] input[type='checkbox']");
			var MeFirstPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Me First'] input[type='checkbox']");
			var ChargePath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Charge'] input[type='checkbox']");
			var ProtectionPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Protection'] input[type='checkbox']");
			var InvunerableDivePath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Semi-Invulnerable Dive'] input[type='checkbox']");
			var InvunerableFlightPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Semi-Invulnerable Flight'] input[type='checkbox']");
			var InvunerableDigPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Semi-Invulnerable Dig'] input[type='checkbox']");
			var SwitchPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Switching'] input[type='checkbox']");
			var MinimizePath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Minimize'] input[type='checkbox']");
			var DefenseCurlPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Defense Curl'] input[type='checkbox']");
			var ConfusionPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Confusion'] input[type='checkbox']");
			var FlashFirePath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Flash Fire'] input[type='checkbox']");
			var TarShotPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li[name='Tar Shot'] input[type='checkbox']");

			var movePower = returnArrValue(finaldataMovePower,"Name_"+JSONPath_MoveName,"Power_"+JSONPath_MovePower,movePath.value);
			var moveAccuracy = returnArrValue(finaldataMoveAccuracy,"Name_"+JSONPath_MoveName,"Accuracy_"+JSONPath_MoveAccuracy,movePath.value);
			var moveCategory = returnArrValue(finaldataMoveCategory,"Name_"+JSONPath_MoveName,"Category_"+JSONPath_MoveCategory,movePath.value);
			var moveType = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,movePath.value);
			var movePriority = returnArrValue(finaldataMovePriority,"Name_"+JSONPath_MoveName,"Priority_"+JSONPath_MovePriority,movePath.value);
			var moveGroup = returnArrValue(finaldataMoveGroup,"Name_"+JSONPath_MoveName,"Group",movePath.value);

			movePower = undwsDel(movePower,0);
			moveAccuracy = undwsDel(moveAccuracy,0);
			moveCategory = undwsDel(moveCategory,"");
			moveType = undwsDel(moveType,"");
			movePriority = undwsDel(movePriority,0);

			if (ZMovePath.checked) {
				if (movePower >= 0 && movePower <= 55) {
					movePower = 100;
				}
				else if (movePower >= 60 && movePower <= 65) {
					movePower = 120;
				}
				else if (movePower >= 70 && movePower <= 75) {
					movePower = 140;
				}
				else if (movePower >= 80 && movePower <= 85) {
					movePower = 100;
				}
				else if (movePower >= 90 && movePower <= 95) {
					movePower = 100;
				}
				else if (movePower == 100) {
					movePower = 100;
				}
				else if (movePower == 110) {
					movePower = 100;
				}
				else if (movePower >= 120 && movePower <= 125) {
					movePower = 100;
				}
				else if (movePower == 130) {
					movePower = 100;
				}
				else if (movePower >= 140) {
					movePower = 200;
				}

				if (movePath.value == "Mega Drain") {
					movePower = 120;
				}
				else if (movePath.value == "Weather Ball") {
					movePower = 160;
				}
				else if (movePath.value == "Hex") {
					movePower = 160;
				}
				else if (movePath.value == "Gear Grind") {
					movePower = 180;
				}
				else if (movePath.value == "V-create") {
					movePower = 220;
				}
				else if (movePath.value == "Flying Press") {
					movePower = 170;
				}
				else if (movePath.value == "Core Enforcer") {
					movePower = 140;
				}
				else {
					for (var u = 0; u < finaldataMoveAdditional.length; u++) {
						if (finaldataMoveAdditional[u]["Additional"] == "One-hit Knockout") {
							if (finaldataMoveAdditional[u]["Move"] == movePath.value) {
								if (getApplicable(finaldataMoveAdditional[u]["Game"])) {
									movePower = 180;
									break;
								}
							}
								
						}
					}
				}
				
				
				for (var u = 0; u < finaldataMoveType.length; u++) {
					if (finaldataMoveType[u]["Name_"+JSONPath_MoveName].includes("(")) {
						if (returnArrValue(finaldataMoveGroup,"Name_"+JSONPath_MoveName,"Group",finaldataMoveType[u]["Name_"+JSONPath_MoveName]) == "Z-Move") {
							if (finaldataMoveType[u]["Type_"+JSONPath_MoveType] == moveType) {
								if (finaldataMoveType[u]["Name_"+JSONPath_MoveName].includes(moveCategory)) {
									consoleText(movePath.value+" ("+finaldataMoveType[u]["Name_"+JSONPath_MoveName].replaceAll(" ("+moveCategory+")","")+")");
									break;
								}
							}
						}
					}
				}
			
				
			}

			var moveDamageTextPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] *[name='damage'] > *:last-child");
			var moveAccuracyTextPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] *[name='accuracy'] > *:last-child");
			var moveCriticalTextPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] *[name='critical'] > *:last-child");

			if (user == undefined || target == undefined) {
				check = false;
			}

			var accRes = [];
			var dmgRes = [];
			var critRes = [];

			moveAccuracyTextPath.innerText = "0%";
			moveDamageTextPath.innerText = "0";
			moveCriticalTextPath.innerText = "0%";

			for(var u = 0; u < alldivbase.length; u++) {
				var val = (allbase[u].querySelector(":scope *[name='hp'] > input[type='range']").value/allbase[u].querySelector(":scope *[name='hp'] > input[type='range']").max)*100;
				
				alldivbase[u].lastChild.style.removeProperty("background");
				alldivbase[u].lastChild.style.background = "linear-gradient(90deg, limegreen 0%, limegreen "+val+"%, orangered "+val+"%, orangered 100%)";

				alldivbase[u].querySelector(":scope *[name='hp'] *[name='percentage']").innerText = Math.round(val)+"%";
				alldivbase[u].querySelector(":scope *[name='hp'] *[name='current']").innerText = allbase[u].querySelector(":scope *[name='hp'] > input[type='range']").value;
			}

			var AllCloudNineAirLock = false;
			for(var u = 0; u < allbase.length; u++) {
				var ab = allbase[u].querySelector(":scope *[name='ability'] select");
				if (ab != undefined) {
					if (ab.value == "Cloud Nine" || ab.value == "Air Lock") {
						AllCloudNineAirLock = true;
					}
				}
			}



			if (check) {
				for (var i = 0; i < alldivbase.length; i++) {
					if (alldivbase[i].getAttribute("data-string") != "" && !alldivbase[i].getAttribute("data-string").includes("pok:|")) {

						// Paths
						var divteam = alldivbase[i].parentElement.getAttribute("name");
						var divid = alldivbase[i].getAttribute("name");
						var base = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+divteam+"'] ul[name='"+divid+"']");
						var baseteam = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div ol[name='team'] > span[name='"+divteam+"']");
						var basePokémonPath = base.querySelector(":scope *[name='pokémon'] select");
						var baseLevelPath = base.querySelector(":scope *[name='level'] input");
						var baseModPath = base.querySelectorAll(":scope *[name='stats'] > span > span[name='Mod'] input:not(:first-child)");
						var baseStatsPath = base.querySelectorAll(":scope *[name='stats'] > span > span:last-child input:not(:first-child)");
						var baseSpeedStatPath = base.querySelector(":scope *[name='stats'] > span > span:last-child input[name='Speed']");
						var baseFriendshipPath = base.querySelector(":scope *[name='friendship'] input");
						var baseItemPath = base.querySelector(":scope *[name='item'] select");
						var baseAbilityPath = base.querySelector(":scope *[name='ability'] select");
						var baseStatusPoisonPath = base.querySelector(":scope *[name='Poisoned'] input");
						var baseStatusBadPoisonPath = base.querySelector(":scope *[name='Badly Poisoned'] input");
						var baseStatusBurnPath = base.querySelector(":scope *[name='Burned'] input");
						var baseStatusParalyzePath = base.querySelector(":scope *[name='Paralyzed'] input");
						var baseStatusAsleepPath = base.querySelector(":scope *[name='Asleep'] input");
						var baseStatusFrozenPath = base.querySelector(":scope *[name='Frozen'] input");

						var baseHelpingHandPath = base.querySelector(":scope *[name='Helping Hand'] input");
						var baseForestsCursePath = base.querySelector(`:scope *[name="Forest's Curse"] input`);
						var baseTrickOrTreatPath = base.querySelector(":scope *[name='Trick-or-Treat'] input");
						var baseGlaiveRushPath = base.querySelector(":scope *[name='Glaive Rush'] input");
						var baseLaserFocusPath = base.querySelector(":scope *[name='Laser Focus'] input");
						var baseShadowPath = base.querySelector(":scope *[name='Shadow'] input");
						var baseDynamaxPath = base.querySelector(":scope *[name='Dynamax'] input");
						var baseForesightPath = base.querySelector(":scope *[name='Foresight'] input");
						var baseMiracleEyePath = base.querySelector(":scope *[name='Miracle Eye'] input");
						var baseOdorSleuthPath = base.querySelector(":scope *[name='Odor Sleuth'] input");


						var baseThousandArrowsPath = base.querySelector(":scope *[name='Thousand Arrows'] input");
						var baseSmackDownPath = base.querySelector(":scope *[name='Smack Down'] input");
						var baseMagnetRisePath = base.querySelector(":scope *[name='Magnet Rise'] input");
						var baseIngrainPath = base.querySelector(":scope *[name='Ingrain'] input");
						var baseTelekinesisPath = base.querySelector(":scope *[name='Telekinesis'] input");

						var baseModEvasionPath = base.querySelector(":scope *[name='stats'] *[name='Mod'] *[name='Evasion']");

						var baseHPCurrentPath = alldivbase[i].querySelector(":scope *[name='hp'] *[name='current']");
						var baseHPMaxPath = alldivbase[i].querySelector(":scope *[name='hp'] *[name='max']");
						var baseHPPercentagePath = alldivbase[i].querySelector(":scope *[name='hp'] *[name='percentage']");

						var baseAuroraVeilPath = baseteam.querySelector(":scope *[name='Aurora Veil'] input");
						var baseLightScreenPath = baseteam.querySelector(":scope *[name='Light Screen'] input");
						var baseReflectPath = baseteam.querySelector(":scope *[name='Reflect'] input");
						var baseLuckyChantPath = baseteam.querySelector(":scope *[name='Lucky Chant'] input");

						var baseSpikesPath = baseteam.querySelector(":scope *[name='Spikes'] input");
						var baseStealthRockPath = baseteam.querySelector(":scope *[name='Stealth Rock'] input");
						var baseStonesurgePath = baseteam.querySelector(":scope *[name='G-Max Stonesurge'] input");
						var baseSteelsurgePath = baseteam.querySelector(":scope *[name='G-Max Steelsurge'] input");
						
		
						var baseTypesPath = base.querySelectorAll(":scope *[name='type'] select");
						var baseTypes = [];
			
						for (var t = 0; t < baseTypesPath.length; t++) {
							baseTypes.push(baseTypesPath[t].value);
						}


						// HP
						var baseMaxHP = parseInt(baseHPMaxPath.innerText);
						var baseCurrHP = parseInt(baseHPCurrentPath.innerText);
						baseMaxHP = undwsnanDel(baseMaxHP,0);
						baseCurrHP = undwsnanDel(baseCurrHP,0);

						// Allies
						var AllyMoldBreaker = false;
						var AllyFriendGuard = false;
						var AllyMagicGuard = false;
						var AllyPastelVeil = false;
						var allies = alldivbase[i].parentElement.querySelectorAll(":scope > div[data-string]");
						for (var u = 0; u < allies.length; u++) {
							var allyteam = allies[u].parentElement.getAttribute("name");
							var allyid = allies[u].getAttribute("name");
							var allyab = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+allyteam+"'] ul[name='"+allyid+"'] li[name='ability'] select");
							if (allyab != undefined) {
								if (allies[u] != alldivbase[i]) {
									if (allyab.value == "Friend Guard") {
										AllyFriendGuard = true;
									}
								}
								if (allyab.value == "Mold Breaker") {
									AllyMoldBreaker = true;
								}
								if (allyab.value == "Magic Guard") {
									AllyMagicGuard = true;
								}
								if (allyab.value == "Pastel Veil") {
									AllyPastelVeil = true;
								}
							}
						}
			
						// Enemies
						var EnemyMoldBreaker = false;
						var EnemyFriendGuard = false;
						var EnemyMagicGuard = false;
						var EnemyPastelVeil = false;
						var enemies = alldivbase[i].parentElement.parentElement.querySelectorAll(":scope > span:not([name='"+divteam+"']) > div[data-string]");
						for (var u = 0; u < enemies.length; u++) {
							var enemyteam = enemies[u].parentElement.getAttribute("name");
							var enemyid = enemies[u].getAttribute("name");
							var enemyab = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+enemyteam+"'] ul[name='"+enemyid+"'] li[name='ability'] select");
							if (enemyab != undefined) {
								if (enemies[u] != alldivbase[i]) {
									if (enemyab.value == "Friend Guard") {
										EnemyFriendGuard = true;
									}
								}
								if (enemyab.value == "Mold Breaker") {
									EnemyMoldBreaker = true;
								}
								if (enemyab.value == "Magic Guard") {
									EnemyMagicGuard = true;
								}
								if (enemyab.value == "Pastel Veil") {
									EnemyPastelVeil = true;
								}
							}
						}


						var baseGrounded = true;
						if (baseTypes.includes("Flying")) {
							baseGrounded = false;
						}
						if (baseAbilityPath != undefined && baseAbilityPath.value == "Levitate") {
							if (!EnemyMoldBreaker) {
								baseGrounded = false;
							}
						}
						if (baseItemPath != undefined && baseItemPath.value == "Air Balloon") {
							if (baseAbilityPath != undefined) {
								if (baseAbilityPath.value != "Klutz") {
									baseGrounded = false;
								}
							}
							else {
								baseGrounded = false;
							}
						}
						if (baseMagnetRisePath != undefined && baseMagnetRisePath.checked) {
							baseGrounded = false;
						}
						if (baseTelekinesisPath != undefined && baseTelekinesisPath.checked) {
							baseGrounded = false;
						}
						if (baseItemPath != undefined && baseItemPath.value == "Iron Ball") {
							if (baseAbilityPath != undefined) {
								if (baseAbilityPath.value != "Klutz") {
									baseGrounded = true;
								}
							}
							else {
								baseGrounded = true;
							}
						}
						if (baseIngrainPath != undefined && baseIngrainPath.checked) {
							if (Generation >= 4) {
								baseGrounded = true;
							}
						}
						if (baseSmackDownPath != undefined && baseSmackDownPath.checked) {
							baseGrounded = true;
						}
						if (baseThousandArrowsPath != undefined && baseThousandArrowsPath.checked) {
							baseGrounded = true;
						}
						if (gravityPath != undefined && gravityPath.checked) {
							baseGrounded = true;
						}


						var check = false;
						if (alldivbase[i].parentElement.parentElement.getAttribute("data-range").includes("May")) {
							if (alldivbase[i].classList.contains("viable")) {
								if (alldivbase[i].classList.contains("user") || alldivbase[i].classList.contains("target")) {
									check = true;
								}
							}
						}
						else {
							if (alldivbase[i].classList.contains("viable")) {
								check = true;
							}
						}
						if (check) {

							// --
							// Defaults
							var calculation = 0;
							var Immune = false;
							var Level = 1;
							var Critical = 1;
							var Attack = 0;		
							var Defense = 0;
							var NoModAttack = 0;
							var NoModDefense = 0;
							var Power = 0;
							var STAB = 1;
							var Type = 1;
							var Type1 = 1;
							var Type2 = 1;
							var random = 1;
							var Targets = 1;
							
							// Abilities
							var FlashFire = 1;
							var Fluffy1 = 1;
							var Fluffy2 = 1;
							var TintedLens = 1;
							var SolidRockFilter = 1;
							var FilterPrismArmorSolidRock = 1;
							var PunkRock = 1;
							var IceScales = 1;
							var FriendGuard = 1;
							var Neuroforce = 1;
							var Sniper = 1;
							var MultiscaleShadowShield = 1;

							// Moves
							var HelpingHand = 1;
							var MeFirst = 1;
							var Charge = 1;
							var GlaiveRush = 1;
							var Stockpile = 1;
							var TripleKick = 1;
							var BehemothBladeBehemothBashDynamaxCannon = 1;
							var Minimize = 1;
							var SurfWhirlpool = 1;
							var EarthquakeMagnitude = 1;
							var GustTwister = 1;
							var ColissionCourseElectroDrift = 1;
							var Rollout = 1;
							var FuryCutter = 1;
							var Rage = 1;
							var Pursuit = 1;
							var StompNeedleArmAstonishExtrasensory = 1;
							var Facade = 1;
							var SmellingSalt = 1;
							var Revenge = 1;
							var WeatherBall = 1;

							// Items
							var Item = 1;
							var ExpertBelt = 1;
							var LifeOrb = 1;
							var Metronome = 1;

							// Other
							var Weather = 1;
							var Badge = 1;
							var Burn = 1;
							var Screen = 1;
							var Berry = 1;
							var ZMove = 1;

							// Variable Power Moves
							if (movePath.value == "Return") {
								var val = baseFriendshipPath.value;
								val = undwsnanDel(val,0);
								movePower = val/2.5;
							}
							if (movePath.value == "Frustration") {
								var val = baseFriendshipPath.value;
								val = undwsnanDel(val,0);
								movePower = (255-val)/2.5;
							}
							if (movePath.value == "Dragon Energy") {
								movePower = Math.floor((150*userCurrHP)/userMaxHP);
							}
							if (movePath.value == "Crush Grip") {
								if (Generation == 4) {
									movePower = 1+120*(baseCurrHP/baseMaxHP);
									if (movePower < 1) {
										movePower = 1;
									}
									if (movePower > 121) {
										movePower = 121;
									}
								}
								else if (Generation >= 5) {
									movePower = 120*(baseCurrHP/baseMaxHP);
									if (movePower < 1) {
										movePower = 1;
									}
									if (movePower > 120) {
										movePower = 120;
									}
								}
							}
							if (movePath.value == "Electro Ball") {
								var val1 = userSpeedStatPath.value;
								val1 = undwsnanDel(val1,0);
								var val2 = baseSpeedStatPath.value;
								val2 = undwsnanDel(val2,0);

								var val = val1/val2;

								if (val > 1 || val2 == 0) {
									movePower = 40;
								}
								else if (val >= 0.5001 && val <= 1) {
									movePower = 60;
								}
								else if (val >= 0.3334 && val <= 0.5) {
									movePower = 80;
								}
								else if (val >= 0.2501 && val <= 0.3333) {
									movePower = 120;
								}
								else if (val >= 0.001 && val <= 0.25) {
									movePower = 150;
								}
							}
							if (movePath.value == "Eruption") {
								movePower = Math.floor((150*userCurrHP)/userMaxHP);
								if (movePower < 1) {
									movePower = 1;
								}
							}
							if (movePath.value == "Flail") {
								var val = userCurrHP/userMaxHP;
								if (Generation == 4) {
									if (val >= 0.6719) {
										movePower = 20;
									}
									else if (val >= 0.3438 && val < 0.6719) {
										movePower = 40;
									}
									else if (val >= 0.2031 && val < 0.3438) {
										movePower = 80;
									}
									else if (val >= 0.0938 && val < 0.2031) {
										movePower = 100;
									}
									else if (val >= 0.0313 && val < 0.0938) {
										movePower = 150;
									}
									else if (val < 0.0313) {
										movePower = 200;
									}
								}
								else {
									if (val >= 0.6875) {
										movePower = 20;
									}
									else if (val >= 0.3542 && val < 0.6875) {
										movePower = 40;
									}
									else if (val >= 0.2083 && val < 0.3542) {
										movePower = 80;
									}
									else if (val >= 0.1042 && val < 0.2083) {
										movePower = 100;
									}
									else if (val >= 0.0417 && val < 0.1042) {
										movePower = 150;
									}
									else if (val < 0.0417) {
										movePower = 200;
									}
								}
							}
							if (movePath.value == "Fling") {
								if (userItemPath != undefined) {
									movePower = flingPowerCalc(userItemPath.value);
									if (userItemPath.value.includes("TR")) {
										var val = returnArrValue(finaldataMovePower,"Name_"+JSONPath_MoveName,"Power_"+JSONPath_MovePower,getMachineMove(userItemPath.value));
										val = undwsnanDel(val,10);
										movePower = val;
										movePower = parseInt(movePower);
									}
								}
							}

			



							// Factors
							Level = parseInt(userLevelPath.value);
							Power = parseInt(movePower);
							if (Level == "" || Level == undefined) {
								Level = 0;
							}
							if (Power == "-") {
								Power = 0;
							}
							if (criticalPath.checked) {
								Critical = 2;
							}
							if (userTypes[0] == moveType || userTypes[1] == moveType) {
								if (userAbilityPath != undefined && userAbilityPath.value == "Adaptability") {
									STAB = 2;
								}
								else {
									STAB = 1.5;
								}
							}
							if (InvunerableDigPath.checked) {
								if (movePath.value == "Earthquake" || movePath.value == "Magnitude") {
									EarthquakeMagnitude = 2;
								}
							}
							if (InvunerableDivePath.checked) {
								if (movePath.value == "Surf" || movePath.value == "Whirlpool") {
									SurfWhirlpool = 2;
								}
							}
							if (movePath.value == "Gust" || movePath.value == "Twister") {
								if (InvunerableFlightPath.checked) {
									GustTwister = 2;
								}
							}
							if (weatherRainPath != undefined && weatherRainPath.checked) {
								if (moveType == "Fire") {
									Weather = 0.5;
								}
								if (moveType == "Water") {
									Weather = 1.5;
								}
							}
							if (weatherHarshSunlightPath != undefined && weatherHarshSunlightPath.checked) {
								if (moveType == "Fire") {
									Weather = 1.5;
								}
								if (moveType == "Water") {
									if (movePath.value != "Hydro Steam") {
										Weather = 0.5;
									}
								}
							}
							if (movePath.value == "Rollout") {
								if (DefenseCurlPath.checked) {
									Rollout = 2**((parseInt(moveCountPath.value)-1)+1);
								}
								else {
									Rollout = 2**(parseInt(moveCountPath.value)-1);
								}
							}
							if (movePath.value == "Fury Cutter") {
								FuryCutter = 2**(parseInt(moveCountPath.value)-1);
							}
							if (movePath.value == "Rage") {
								Rage = parseInt(moveCountPath.value);
							}
							if (movePath.value == "Pursuit") {
								if (SwitchPath.checked) {
									Pursuit = 2;
								}
							}
							if (movePath.value == "Stomp" || movePath.value == "Needle Arm" || movePath.value == "Astonish" || movePath.value == "Extrasensory") {
								if (MinimizePath.checked) {
									StompNeedleArmAstonishExtrasensory = 2;
								}
							}
							if (moveCategory == "Physical") {
								if (baseReflectPath.checked) {
									if (parseInt(battle.getAttribute("teammax"))+parseInt(battle.getAttribute("opponentmax")) > 2) {
										Screen = 0.6667;
									}
									else {
										Screen = 0.5;
									}
								}
							}
							if (moveCategory == "Special") {
								if (baseLightScreenPath.checked) {
									if (parseInt(battle.getAttribute("teammax"))+parseInt(battle.getAttribute("opponentmax")) > 2) {
										Screen = 0.6667;
									}
									else {
										Screen = 0.5;
									}
								}
							}
							if (!baseGrounded) {
								if (moveType == "Ground") {
									Immune = true;
								}
							}
							if (baseAbilityPath != undefined && baseAbilityPath.value == "Lightning Rod") {
								if (Generation >= 5) {
									if (moveType == "Electric") {
										Immune = true;
									}
								}
							}
							if (movePath.value == "SolarBeam" || movePath.value == "Solar Beam") {
								if (weatherRainPath != undefined && weatherRainPath.checked) {
									Weather = 0.5;
								}
								if (weatherSandstormPath != undefined && weatherSandstormPath.checked) {
									Weather = 0.5;
								}
								if (weatherHailPath != undefined && weatherHailPath.checked) {
									Weather = 0.5;
								}
								if (weatherFogPath != undefined && weatherFogPath.checked) {
									Weather = 0.5;
								}
							}
							if (userAbilityPath != undefined && userAbilityPath.value == "Flash Fire") {
								if (moveType == "Fire") {
									if (FlashFirePath.checked) {
										FlashFire = 1.5;
									}
								}
							}
							if (movePath.value == "Spit Up") {
								Stockpile = moveCountPath.value;
							}
							if (movePath.value == "Facade") {
								if (userStatusPoisonPath.checked || userStatusBurnPath.checked || userStatusParalyzePath.checked) {
									Facade = 2;
								}
								if (userStatusBadPoisonPath.value != "" && userStatusBadPoisonPath.value != undefined) {
									Facade = 2;
								}
							}
							if (movePath.value == "SmellingSalt" || movePath.value == "Smelling Salt") {
								if (baseStatusParalyzePath.checked) {
									SmellingSalt = 2;
								}
							}
							if (movePath.value == "Weather Ball") {
								if (!AllCloudNineAirLock) {
									WeatherBall = 2;
								}
							}
							if (parseInt(battle.getAttribute("teammax"))+parseInt(battle.getAttribute("opponentmax")) > 2) {
								if (baseHelpingHandPath.checked) {
									HelpingHand = 1.5;
								}
							}
							if (userItemPath != undefined && userItemPath.value == "Life Orb") {
								LifeOrb = 1.3;
							}
							if (MeFirstPath != undefined && MeFirstPath.checked) {
								MeFirst = 1.5;
							}

							for(var u = 0; u < finaldataItemsDamage.length; u++) {
								if (userItemPath != undefined && finaldataItemsDamage[u]["Item"] == userItemPath.value) {
									if (getApplicable(finaldataItemsDamage[u]["Game"])) {
										if (finaldataItemsDamage[u]["Type"] == moveType) {
											var check = false;
											if (finaldataItemsDamage[u]["Pokémon"] == undefined) {
												check = true;
											}
											else if (finaldataItemsDamage[u]["Pokémon"].includes(",")) {
												check 
												var tempPok = finaldataItemsDamage[u]["Pokémon"].split(",")
												for(var p = 0; p < tempPok.length; p++) {
													if (getPokémonName(getPokémonInt(tempPok[p])) == getPokémonName(getDefaultInt(getPokémonInt(userPokémonPath.value)))) {
														check = true;
														break;
													}
												}
											}
											else if (getPokémonName(getPokémonInt(finaldataItemsDamage[u]["Pokémon"])) == getPokémonName(getDefaultInt(getPokémonInt(userPokémonPath.value)))) {
												check = true;
											}
											if (check) {
												Item = finaldataItemsDamage[u]["Value"];
											}
										}
									}
								}
							}


							if (TerrainElectricPath != undefined && TerrainElectricPath.checked) {
								if (moveType == "Electric") {
									if (baseGrounded) {
										if (Generation >= 6 && Generation <= 7) {
											Power = Power*1.5;
										}
										else if (Generation >= 8) {
											Power = Power*1.3;
										}
									}
								}
							}
							if (TerrainGrassyPath != undefined && TerrainGrassyPath.checked) {
								if (moveType == "Grass") {
									if (baseGrounded) {
										if (Generation >= 6 && Generation <= 7) {
											Power = Power*1.5;
										}
										else if (Generation >= 8) {
											Power = Power*1.3;
										}
									}
								}
							}
							if (TerrainPsychicPath != undefined && TerrainPsychicPath.checked) {
								if (moveType == "Psychic") {
									if (baseGrounded) {
										if (Generation >= 6 && Generation <= 7) {
											Power = Power*1.5;
										}
										else if (Generation >= 8) {
											Power = Power*1.3;
										}
									}
								}
								if (movePriority.includes("+")) {
									Power = 0;
								}
							}

							if (TerrainMistyPath != undefined && TerrainMistyPath.checked) {
								if (moveType == "Dragon") {
									if (baseGrounded) {
										Power = Power*0.5;
									}
								}
							}
						


							if (Generation == 1) { // DMG Generation 1
								if (moveCategory == "Physical") {
									for(var u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Attack") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(var u = 0; u < baseStatsPath.length; u++) {
										if (baseStatsPath[u].getAttribute("name") == "Defense") {
											Defense = baseStatsPath[u].value;
											NoModDefense = baseStatsPath[u].getAttribute("data-nomod");
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
									for(var u = 0; u < baseStatsPath.length; u++) {
										if (baseStatsPath[u].getAttribute("name") == "Special") {
											Defense = baseStatsPath[u].value;
											NoModDefense = baseStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
								}
								Attack = parseFloat(Attack);
								Defense = parseFloat(Defense);
								if (moveCategory == "Physical") {
									if (baseReflectPath.checked) {
										if (Critical == 1) {
											Defense = Defense*2;
										}
									}
								}
								if (moveCategory == "Special") {
									if (baseLightScreenPath.checked) {
										if (Critical == 1) {
											Defense = Defense*2;
										}
									}
								}
								if (Critical == 2) {
									Attack = NoModAttack;
									Defense = NoModDefense;
								}
								if (Attack > 255 || Defense > 255) {
									Attack = Math.floor(Attack/4);
									Defense = Math.floor(Defense/4);
								}
								if (randomPath.getAttribute("disabled") == "") {
									random = Math.round(getRandomInt(parseInt(randomPath.min),parseInt(randomPath.max)))/255;
								}
								else {
									random = randomPath.value/255;
								}
								var used = []
								if (baseTypes.length > 0) {
									var typeadv = returnTypeAdvantage(moveType,"Attacking");

									if (typeadv[2].includes(baseTypes[0].toUpperCase())) {
										used.push(baseTypes[u].toUpperCase())
										Type1 = Type1*2;
									}
									if (typeadv[1].includes(baseTypes[0].toUpperCase())) {
										used.push(baseTypes[u].toUpperCase())
										Type1 = Type1*0.5;
									}
									if (typeadv[3].includes(baseTypes[0].toUpperCase())) {
										Immune = true;
									}

									if (typeadv[2].includes(baseTypes[1].toUpperCase())) {
										if (!used.includes(baseTypes[1].toUpperCase())) {
											Type2 = 2;
										}
										Type1 = 2;
									}
									if (typeadv[1].includes(baseTypes[1].toUpperCase())) {
										if (!used.includes(baseTypes[1].toUpperCase())) {
											Type2 = 0.5;
										}
										Type1 = 0.5;
									}


									if (typeadv[3].includes(baseTypes[1].toUpperCase())) {
										Immune = true;
									}
								}
							}
							else if (Generation == 2) { // DMG Generation 2
								if (randomPath.getAttribute("disabled") == "") {
									random = Math.round(getRandomInt(parseInt(randomPath.min),parseInt(randomPath.max)))/255;
								}
								else {
									random = randomPath.value/255;
								}
								if (moveCategory == "Physical") {
									for(var u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Attack") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(var u = 0; u < baseStatsPath.length; u++) {
										if (baseStatsPath[u].getAttribute("name") == "Defense") {
											Defense = baseStatsPath[u].value;
											NoModDefense = baseStatsPath[u].getAttribute("data-nomod");
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
									for(var u = 0; u < baseStatsPath.length; u++) {
										if (baseStatsPath[u].getAttribute("name") == "Sp. Def") {
											Defense = baseStatsPath[u].value;
											NoModDefense = baseStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
								}
								if (movePath.value == "Flail" || movePath.value == "Reversal" || movePath.value == "Future Sight") {
									Critical = 1;
								}
								if (Critical == 2) {
									if (userModPath.length == baseModPath.length) {
										for(var u = 0; u < baseModPath.length; u++) {
									
											var baseval = baseModPath[u].value;
											if (baseval == "" || baseval == undefined) {
												baseval = 0;
											}
			
											if (moveCategory == "Physical") {
												if (baseModPath[u].getAttribute("name") == "Attack") {
													for(var r = 0; r < userModPath.length; r++) {
														var userval = userModPath[r].value;
														if (userval == "" || userval == undefined) {
															userval = 0;
														}
														if (baseModPath[r].getAttribute("name") == "Defense") {
															if (userval <= baseval) {
																Attack = NoModAttack;
															}
														}
													}
												}
												if (baseModPath[u].getAttribute("name") == "Defense") {
													for(var r = 0; r < userModPath.length; r++) {
														var userval = userModPath[r].value;
														if (userval == "" || userval == undefined) {
															userval = 0;
														}
														if (baseModPath[r].getAttribute("name") == "Attack") {
															if (userval <= baseval) {
																Defense = NoModDefense;
															}
														}
													}
												}
											}
											else if (moveCategory == "Special") {
												if (baseModPath[u].getAttribute("name") == "Sp. Atk") {
													for(var r = 0; r < userModPath.length; r++) {
														var userval = userModPath[r].value;
														if (userval == "" || userval == undefined) {
															userval = 0;
														}
														if (baseModPath[r].getAttribute("name") == "Sp. Def") {
															if (userval <= baseval) {
																Attack = NoModAttack;
															}
														}
													}
												}
												if (baseModPath[u].getAttribute("name") == "Sp. Def") {
													for(var r = 0; r < userModPath.length; r++) {
														var userval = userModPath[r].value;
														if (userval == "" || userval == undefined) {
															userval = 0;
														}
														if (baseModPath[r].getAttribute("name") == "Sp. Atk") {
															if (userval <= baseval) {
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
									if (baseReflectPath.checked) {
										if (Critical == 1) {
											Defense = Defense*2;
										}
									}
								}
								if (moveCategory == "Special") {
									if (baseLightScreenPath.checked) {
										if (Critical == 1) {
											Defense = Defense*2;
										}
									}
								}
								for (var u = 0; u < baseTypes.length; u++) {
									var typeadv = returnTypeAdvantage(moveType,"Attacking");
									if (typeadv[2].includes(baseTypes[u].toUpperCase())) {
										Type = Type*2;
									}
									if (typeadv[1].includes(baseTypes[u].toUpperCase())) {
										Type = Type*0.5;
									}
									if (typeadv[3].includes(baseTypes[u].toUpperCase())) {
										Immune = true;
									}
								}
								if (movePath.value == "Struggle" || movePath.value == "Future Sight" || movePath.value == "Beat Up") {
									Type = 1;
								}
								for (var u = 0; u < userBadgePath.length; u++) {
									if (userBadgePath[u].parentElement.title.includes(moveType+"-type")) {
										if (userBadgePath[u].checked) {
											Badge = 1.125;
										}
									}
								}
								if (movePath.value == "Triple Kick") {
									TripleKick = moveCountPath.value;
								}
								if (movePath.value == "Flail" || movePath.value == "Reversal") {
									random = 1;
								}
							}
							else if (Generation == 3) { // DMG Generation 3
								if (randomPath.getAttribute("disabled") == "") {
									random = Math.round(getRandomInt(parseInt(randomPath.min),parseInt(randomPath.max)))/100;
								}
								else {
									random = randomPath.value/100;
								}
								if (moveCategory == "Physical") {
									for(var u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Attack") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(var u = 0; u < baseStatsPath.length; u++) {
										if (baseStatsPath[u].getAttribute("name") == "Defense") {
											Defense = baseStatsPath[u].value;
											NoModDefense = baseStatsPath[u].getAttribute("data-nomod");
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
									for(var u = 0; u < baseStatsPath.length; u++) {
										if (baseStatsPath[u].getAttribute("name") == "Sp. Def") {
											Defense = baseStatsPath[u].value;
											NoModDefense = baseStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
								}
								if (movePath.value == "Future Sight" || movePath.value == "Doom Desire" || movePath.value == "Spit Up" || baseAbilityPath.value == "Battle Armor" || baseAbilityPath.value == "Shell Armor") {
									Critical = 1;
								}
								if (baseStatusBurnPath.checked) {
									if (baseAbilityPath.value != "Guts") {
										if (moveCategory == "Physical") {
											Burn = 0.5;
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
											if (userModPath[u].getAttribute("name") == "Attack") {
												if (userval < 0) {
													Attack = NoModAttack;
												}
											}
										}
										else if (moveCategory == "Special") {
											if (userModPath[u].getAttribute("name") == "Sp. Atk") {
												if (userval < 0) {
													Attack = NoModAttack;
												}
											}
										}
									}
									// Ignore "Positive" Target Defense Stat Changes on Critical Hit
									for(var u = 0; u < baseModPath.length; u++) {
										var baseval = baseModPath[u].value;
										if (baseval == "" || baseval == undefined) {
											baseval = 0;
										}

										if (moveCategory == "Physical") {
											if (baseModPath[u].getAttribute("name") == "Defense") {
												if (baseval > 0) {
													Defense = NoModDefense;
												}
											}
										}
										else if (moveCategory == "Special") {
											if (baseModPath[u].getAttribute("name") == "Sp. Def") {
												if (baseval > 0) {
													Defense = NoModDefense;
												}
											}
										}
									}
								}
								if (parseInt(battle.getAttribute("teammax"))+parseInt(battle.getAttribute("opponentmax")) > 2) {
									if (base.length > 1) {
										if (alldivbase[i].parentElement.parentElement.getAttribute("data-range") != "Affects all Pokémon adjacent to the user") {
											Targets = 0.5;
										}
									}
								}
								for (var u = 0; u < baseTypes.length; u++) {
									var typeadv = returnTypeAdvantage(moveType,"Attacking");
									if (typeadv[2].includes(baseTypes[u].toUpperCase())) {
										Type = Type*2;
									}
									if (typeadv[1].includes(baseTypes[u].toUpperCase())) {
										Type = Type*0.5;
									}
									if (typeadv[3].includes(baseTypes[u].toUpperCase())) {
										Immune = true;
									}
								}
								if (movePath.value == "Struggle" || movePath.value == "Future Sight" || movePath.value == "Beat Up" || movePath.value == "Doom Desire") {
									Type = 1;
								}
								if (moveType == "Electric") {
									if (ChargePath.checked) {
										Charge = 2;
									}
								}
							}
							else if (Generation == 4) { // DMG Generation 4
								if (randomPath.getAttribute("disabled") == "") {
									random = Math.round(getRandomInt(parseInt(randomPath.min),parseInt(randomPath.max)))/100;
								}
								else {
									random = randomPath.value/100;
								}
								if (moveCategory == "Physical") {
									for(var u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Attack") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(var u = 0; u < baseStatsPath.length; u++) {
										if (baseStatsPath[u].getAttribute("name") == "Defense") {
											Defense = baseStatsPath[u].value;
											NoModDefense = baseStatsPath[u].getAttribute("data-nomod");
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
									for(var u = 0; u < baseStatsPath.length; u++) {
										if (baseStatsPath[u].getAttribute("name") == "Sp. Def") {
											Defense = baseStatsPath[u].value;
											NoModDefense = baseStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
								}
								if (baseStatusBurnPath.checked) {
									if (baseAbilityPath.value != "Guts") {
										if (moveCategory == "Physical") {
											Burn = 0.5;
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
											if (userModPath[u].getAttribute("name") == "Attack") {
												if (userval < 0) {
													Attack = NoModAttack;
												}
											}
										}
										else if (moveCategory == "Special") {
											if (userModPath[u].getAttribute("name") == "Sp. Atk") {
												if (userval < 0) {
													Attack = NoModAttack;
												}
											}
										}
									}
									// Ignore "Positive" Target Defense Stat Changes on Critical Hit
									for(var u = 0; u < baseModPath.length; u++) {
										var baseval = baseModPath[u].value;
										if (baseval == "" || baseval == undefined) {
											baseval = 0;
										}

										if (moveCategory == "Physical") {
											if (baseModPath[u].getAttribute("name") == "Defense") {
												if (baseval > 0) {
													Defense = NoModDefense;
												}
											}
										}
										else if (moveCategory == "Special") {
											if (baseModPath[u].getAttribute("name") == "Sp. Def") {
												if (baseval > 0) {
													Defense = NoModDefense;
												}
											}
										}
									}
								}
								if (parseInt(battle.getAttribute("teammax"))+parseInt(battle.getAttribute("opponentmax")) > 2) {
									if (base.length > 1) {
										if (alldivbase[i].parentElement.parentElement.getAttribute("data-range") != "Affects all Pokémon adjacent to the user") {
											Targets = 0.75;
										}
									}
								}
								if (userItemPath.value == "Metronome") {
									var val = userItemCountPath.value;
									if (isNaN(val)) {
										val = 0;
									}
									if (val > 10) {
										val = 10;
									}
									Metronome = 1+(val/10);
								}
								for(var u = 0; u < baseTypes.length; u++) {
									var typeadv = returnTypeAdvantage(moveType,"Attacking");
		
									if (typeadv[2].includes(baseTypes[u].toUpperCase())) {
										Type1 = Type1*2;
									}
									if (typeadv[2].includes(baseTypes[u].toUpperCase())) {
										Type1 = Type1*0.5;
									}
									if (typeadv[3].includes(baseTypes[u].toUpperCase())) {
										Immune = true;
									}

									if (typeadv[2].includes(baseTypes[u].toUpperCase())) {
										Type2 = Type2*2;
									}
									if (typeadv[2].includes(baseTypes[u].toUpperCase())) {
										Type2 = Type2*0.5;
									}
									if (typeadv[3].includes(baseTypes[u].toUpperCase())) {
										Immune = true;
									}
								}
								if (movePath.value == "Struggle" || movePath.value == "Future Sight" || movePath.value == "Beat Up" || movePath.value == "Doom Desire") {
									Type1 = 1;
									Type2 = 1;
								}
								if (baseAbilityPath.value == "Solid Rock" || baseAbilityPath.value == "Filter") {
									if (!AllyMoldBreaker) {
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
								if (baseItemPath.value == "Chilan Berry" && moveType == "Normal") {
									check = true;
								}
								if (Type1+Type2 > 2) {
									if (baseItemPath.value == "Babiri Berry" && moveType == "Steel") {
										check = true;
									}
									if (baseItemPath.value == "Charti Berry" && moveType == "Rock") {
										check = true;
									}
									if (baseItemPath.value == "Chople Berry" && moveType == "Fighting") {
										check = true;
									}
									if (baseItemPath.value == "Coba Berry" && moveType == "Flying") {
										check = true;
									}
									if (baseItemPath.value == "Colbur Berry" && moveType == "Dark") {
										check = true;
									}
									if (baseItemPath.value == "Haban Berry" && moveType == "Dragon") {
										check = true;
									}
									if (baseItemPath.value == "Kasib Berry" && moveType == "Ghost") {
										check = true;
									}
									if (baseItemPath.value == "Kebia Berry" && moveType == "Poison") {
										check = true;
									}
									if (baseItemPath.value == "Occa Berry" && moveType == "Fire") {
										check = true;
									}
									if (baseItemPath.value == "Passho Berry" && moveType == "Water") {
										check = true;
									}
									if (baseItemPath.value == "Payapa Berry" && moveType == "Psychic") {
										check = true;
									}
									if (baseItemPath.value == "Rindo Berry" && moveType == "Grass") {
										check = true;
									}
									if (baseItemPath.value == "Roseli Berry" && moveType == "Fairy") {
										check = true;
									}
									if (baseItemPath.value == "Shuca Berry" && moveType == "Ground") {
										check = true;
									}
									if (baseItemPath.value == "Tanga Berry" && moveType == "Bug") {
										check = true;
									}
									if (baseItemPath.value == "Wacan Berry" && moveType == "Electric") {
										check = true;
									}
									if (baseItemPath.value == "Yache Berry" && moveType == "Ice") {
										check = true;
									}
								}
								if (check) {
									Berry = 0.5;
								}
								if (moveType == "Electric") {
									if (ChargePath.checked) {
										Power = Power*2;
									}
								}
							}
							else if (Generation >= 5) { // DMG Generation 5+
								if (criticalPath.checked) {
									if (Generation == 5) {
										Critical = 2;
									}
									else {
										Critical = 1.5;
									}
								}
								if (randomPath.getAttribute("disabled") == "") {
									random = Math.round(getRandomInt(parseInt(randomPath.min),parseInt(randomPath.max)))/100;
								}
								else {
									random = randomPath.value/100;
								}
								if (movePath.value == "Storm Throw" || movePath.value == "Frost Breath" || movePath.value == "Zippy Zap" || movePath.value == "Surging Strikes" || movePath.value == "Wicked Blow" || movePath.value == "Flower Trick") {
									if (Generation == 5) {
										Critical = 2;
									}
									else {
										Critical = 1.5;
									}
								}
								if (userAbilityPath != undefined && userAbilityPath.value == "Merciless") {
									var check = false;
									if (baseStatusPoisonPath.checked) {
										check = true;
									}
									if (baseStatusBadPoisonPath.value != "" && baseStatusBadPoisonPath.value != undefined) {
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
								if (baseLaserFocusPath != undefined && baseLaserFocusPath.checked) {
									if (Generation == 5) {
										Critical = 2;
									}
									else {
										Critical = 1.5;
									}
								}
								if (baseAbilityPath != undefined) {
									if (baseAbilityPath.value == "Battle Armor" || baseAbilityPath.value == "Shell Armor") {
										Critical = 1;
									}
								}
								if (baseLuckyChantPath != undefined && baseLuckyChantPath.checked) {
									Critical = 1;
								}
								if (parseInt(battle.getAttribute("teammax"))+parseInt(battle.getAttribute("opponentmax")) > 2) {
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
									for(var u = 0; u < baseStatsPath.length; u++) {
										if (baseStatsPath[u].getAttribute("name") == "Defense") {
											Defense = baseStatsPath[u].value;
											NoModDefense = baseStatsPath[u].getAttribute("data-nomod");
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
									for(var u = 0; u < baseStatsPath.length; u++) {
										if (baseStatsPath[u].getAttribute("name") == "Sp. Def") {
											Defense = baseStatsPath[u].value;
											NoModDefense = baseStatsPath[u].getAttribute("data-nomod");
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
											if (userModPath[u].getAttribute("name") == "Attack") {
												if (userval < 0) {
													Attack = NoModAttack;
												}
											}
										}
										else if (moveCategory == "Special") {
											if (userModPath[u].getAttribute("name") == "Sp. Atk") {
												if (userval < 0) {
													Attack = NoModAttack;
												}
											}
										}
									}
									// Ignore "Positive" Target Defense Stat Changes on Critical Hit
									for(var u = 0; u < baseModPath.length; u++) {
										var baseval = baseModPath[u].value;
										if (baseval == "" || baseval == undefined) {
											baseval = 0;
										}

										if (moveCategory == "Physical") {
											if (baseModPath[u].getAttribute("name") == "Defense") {
												if (baseval > 0) {
													Defense = NoModDefense;
												}
											}
										}
										else if (moveCategory == "Special") {
											if (baseModPath[u].getAttribute("name") == "Sp. Def") {
												if (baseval > 0) {
													Defense = NoModDefense;
												}
											}
										}
									}
								}
								/*
								if (movePath.value.includes(" Pledge")) {
									if (userAbilityPath.value == "Adaptability") {
										STAB = 2;
									}
									else {
										STAB = 1.5;
									}
								}
								*/
								for (var u = 0; u < baseTypes.length; u++) {
									var typeadv = returnTypeAdvantage(moveType,"Attacking");

									if (typeadv[2].includes(baseTypes[u].toUpperCase())) {
										Type = Type*2;
									}
									if (typeadv[1].includes(baseTypes[u].toUpperCase())) {
										var check = true;
										if (weatherStrongWindsPath != undefined) {
											if (weatherStrongWindsPath.checked && baseTypes[u] == "Flying") {
												check = false;
											}
										}

										if (check) {
											Type = Type*0.5;
										}
									}
									if (typeadv[3].includes(baseTypes[u].toUpperCase())) {
										var check = true;
										if (baseTypes[u] == "Flying" && baseThousandArrowsPath != undefined && baseThousandArrowsPath.checked) {
											check = false;
										}
										if (baseTypes[u] == "Flying" && baseItemPath.value == "Iron Ball") {
											check = false;
										}
										if (baseItemPath.value == "Ring Target") {
											check = false;
										}
										if (baseAbilityPath.value == "Scrappy") {
											if (baseTypes[u] == "Normal" || baseTypes[u] == "Fighting") {
												check = false;
											}
										}
										if (baseForesightPath.checked || baseMiracleEyePath.checked || baseOdorSleuthPath.checked) {
											check = false;
										}
										if (check) {
											Immune = true;
										}
									}
								}
								if (movePath.value == "Freeze-Dry") {
									if (!typeadv[2].includes("WATER")) {
										Type = Type*2;
									}
								}
								if (movePath.value == "Flying Press") {
									var tempTypeAdv = returnTypeAdvantage("Flying","Defending");
									if (tempTypeAdv[1].includes("FLYING")) {
										Type = Type*0.5;
									}
									if (tempTypeAdv[2].includes("FLYING")) {
										Type = Type*2;
									}
								}
							
								if (TarShotPath != undefined && TarShotPath.checked) {
									if (moveType == "Fire") {
										Type = Type*2;
									}
								}
								if (movePath.value == "Struggle") {
									Type = 1;
								}

								if (baseGlaiveRushPath != undefined && baseGlaiveRushPath.checked) {
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
								if (baseDynamaxPath != undefined) {
									if (baseDynamaxPath.checked || userPokémonPath.value.includes("Gigantamax")) {
										if (movePath.value == "Behemoth Blade" || movePath.value == "Behemoth Bash" || movePath.value == "Dynamax Cannon") {
											BehemothBladeBehemothBashDynamaxCannon = 2;
										}
									}
								}
								if (MinimizePath.checked) {
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
								if (baseAuroraVeilPath != undefined && baseAuroraVeilPath.checked) {
									if (parseInt(battle.getAttribute("teammax"))+parseInt(battle.getAttribute("opponentmax")) > 2) {
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
								if (baseAbilityPath.value == "Multiscale" || baseAbilityPath.value == "Shadow Shield") {
									if (baseHPCurrentPath.innerText == baseHPMaxPath.innerText) {
										MultiscaleShadowShield = 0.5;
									}
								}
								if (baseAbilityPath.value == "Fluffy") {
									if (movePath.value != "Sunsteel Strike" && movePath.value != "Searing Sunraze Smash") {
										if (userAbilityPath.value != "Long Reach") {
											if (returnArrValue(finaldataMoveOtherMoves,"Name_"+JSONPath_MoveName,"Contact",movePath.value) == "Makes contact") {
												Fluffy1 = 0.5;
											}
										}
									}
								}
								if (baseAbilityPath.value == "Punk Rock") {
									if (returnArrValue(finaldataMoveOtherMoves,"Name_"+JSONPath_MoveName,"Sound-Based",movePath.value) == "Is a sound-based move") {
										PunkRock = 0.5;
									}
								}
								if (baseAbilityPath.value == "Ice Scales") {
									if (moveCategory == "Special") {
										IceScales = 0.5;
									}
								}
								if (AllyFriendGuard) {
									FriendGuard = 0.75;
								}
								if (baseAbilityPath.value == "Filter" || baseAbilityPath.value == "Prism Armor" || baseAbilityPath.value == "Solid  Rock") {
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
									if (userAbilityPath.value == "Sniper") {
										Sniper = 1.5;
									}
								}
								if (userAbilityPath.value == "Tinted Lens") {
									if (Type < 1) {
										TintedLens = 2;
									}
								}
								if (baseAbilityPath.value == "Fluffy") {
									if(movePath.value != "G-Max Fireball") {
										if (moveType == "Fire") {
											Fluffy2 = 2;
										}
									}
								}
								var check = false;
								if (baseItemPath.value == "Chilan Berry" && moveType == "Normal") {
									check = true;
								}
								if (Type > 1) {
									if (baseItemPath.value == "Babiri Berry" && moveType == "Steel") {
										check = true;
									}
									if (baseItemPath.value == "Charti Berry" && moveType == "Rock") {
										check = true;
									}
									if (baseItemPath.value == "Chople Berry" && moveType == "Fighting") {
										check = true;
									}
									if (baseItemPath.value == "Coba Berry" && moveType == "Flying") {
										check = true;
									}
									if (baseItemPath.value == "Colbur Berry" && moveType == "Dark") {
										check = true;
									}
									if (baseItemPath.value == "Haban Berry" && moveType == "Dragon") {
										check = true;
									}
									if (baseItemPath.value == "Kasib Berry" && moveType == "Ghost") {
										check = true;
									}
									if (baseItemPath.value == "Kebia Berry" && moveType == "Poison") {
										check = true;
									}
									if (baseItemPath.value == "Occa Berry" && moveType == "Fire") {
										check = true;
									}
									if (baseItemPath.value == "Passho Berry" && moveType == "Water") {
										check = true;
									}
									if (baseItemPath.value == "Payapa Berry" && moveType == "Psychic") {
										check = true;
									}
									if (baseItemPath.value == "Rindo Berry" && moveType == "Grass") {
										check = true;
									}
									if (baseItemPath.value == "Roseli Berry" && moveType == "Fairy") {
										check = true;
									}
									if (baseItemPath.value == "Shuca Berry" && moveType == "Ground") {
										check = true;
									}
									if (baseItemPath.value == "Tanga Berry" && moveType == "Bug") {
										check = true;
									}
									if (baseItemPath.value == "Wacan Berry" && moveType == "Electric") {
										check = true;
									}
									if (baseItemPath.value == "Yache Berry" && moveType == "Ice") {
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
										ExpertBelt = 1.2;
									}
								}
								if (userItemPath.value == "Metronome") {
									var val = userItemCountPath.value;
									if (isNaN(val)) {
										val = 0;
									}
									Metronome = 1+((819/4096)*val);
									if (Metronome > 2) {
										Metronome = 2;
									}
								}
								if (ProtectionPath.checked) {
									var grp = returnArrValue(finaldataMoveGroup,"Name_"+JSONPath_MoveName,"Group",movePath.value);
									if (grp == "Z-Move" || grp == "G-Max Move" || grp == "Max Move") {
										ZMove = 0.25;
									}
								}
								if (moveType == "Electric") {
									if (ChargePath.checked) {
										Power = Power*2;
									}
								}
							}

							if (baseAbilityPath != undefined && baseAbilityPath.value == "Wonder Guard") {								
								if (Generation == 4) {
									if (Type1*Type2 < 2) {
										Immune = true;
									}
								}
								else {
									if (Type < 2) {
										Immune = true;
									}
								}
							}


							if (AllCloudNineAirLock) {
								Weather = 1;
							}





							// Calculation
							if (Generation == 1) {
								calculation = ((((((2*Level*Critical)/5)+2)*Power*(Attack/Defense))/50)+2)*STAB*Type1*Type2;
								if (calculation == 1) {
									random = 1;
								}
								calculation = calculation*random;
							}
							else if (Generation == 2) {
								calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Item*Critical+2)*TripleKick*Weather*Badge*STAB*Type*(Rollout*FuryCutter*Rage*Pursuit*StompNeedleArmAstonishExtrasensory*GustTwister*EarthquakeMagnitude)*random;
							}
							else if (Generation == 3) {
								calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Burn*Screen*Targets*Weather*FlashFire+2)*Stockpile*Critical*(Item)*(GustTwister*StompNeedleArmAstonishExtrasensory*SurfWhirlpool*EarthquakeMagnitude*Pursuit*Facade*SmellingSalt*Revenge*WeatherBall)*Charge*HelpingHand*STAB*Type*random*(Rollout*FuryCutter*Rage);
							}
							else if (Generation == 4) {
								calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Burn*Screen*Targets*Weather*FlashFire+2)*Critical*(Item*LifeOrb*Metronome)*(MeFirst*Rollout*FuryCutter*Rage*StompNeedleArmAstonishExtrasensory*Pursuit)*random*STAB*Type1*Type2*SolidRockFilter*ExpertBelt*TintedLens*Berry;
							}
							else if (Generation >= 5) {
								calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)+2)*Targets*Weather*GlaiveRush*Critical*random*STAB*Type*Burn*Screen*(BehemothBladeBehemothBashDynamaxCannon*Minimize*SurfWhirlpool*EarthquakeMagnitude*Screen*ColissionCourseElectroDrift*MultiscaleShadowShield*Fluffy1*PunkRock*IceScales*FriendGuard*FilterPrismArmorSolidRock*Neuroforce*Sniper*TintedLens*Fluffy2*(Item*LifeOrb*ExpertBelt*Metronome)*Berry)*ZMove*(MeFirst*Rollout*FuryCutter*Rage*StompNeedleArmAstonishExtrasensory*Pursuit);
							}

							if (Immune) {
								calculation = 0;
							}




							
		
							var integerResult = Math.round(calculation);
							var move = movePath.value;
							
							integerResult = undwsnanDel(integerResult,0)

				
							if (movePower == 0) {
								integerResult = 0;
							}

			


						
						
					
							if (movePath.value == "Dragon Rage") {
								DMGCalcApply(alldivbase[i],40,"Damage");
							}
							else if (movePath.value == "Sonic Boom" || movePath.value == "SonicBoom") {
								DMGCalcApply(alldivbase[i],20,"Damage");
							}
							else if (movePath.value == "Triple Kick" && Generation == 2) {
								DMGCalcApply(alldivbase[i],integerResult,"Damage");
							}
							else if (userAbilityPath != undefined && userAbilityPath.value == "Parental Bond") {
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
												DMGCalcApply(alldivbase[i],integerResult*0.5,"Damage");
											}
											else {
												DMGCalcApply(alldivbase[i],integerResult,"Damage");
											}
										}
										else {
											if (h == 1) {
												DMGCalcApply(alldivbase[i],integerResult*0.25,"Damage");
											}
											else {
												DMGCalcApply(alldivbase[i],integerResult,"Damage");
											}
										}
									}
								}
								
							}
							else if (movePath.value == "Spit Up") {
								DMGCalcApply(alldivbase[i],integerResult,"Damage");
							}
							else {
								for (var h = 0; h < moveCountPath.value; h++) {
									DMGCalcApply(alldivbase[i],integerResult,"Damage");
								}
							}
			

				

				
						

							// Accuracy
							var acc = undwsDel(moveAccuracy,"0");
							acc = acc.replaceAll("%","").replaceAll("~","");
							var evasionMod = baseModEvasionPath.value;
							var accuracyMod = userModAccuracyPath.value;
		
							
							accuracyMod = undwsDel(accuracyMod,0);
							accuracyMod = parseInt(accuracyMod);
							evasionMod = undwsDel(evasionMod,0)
							evasionMod = parseInt(evasionMod);

							accuracyMod = modStageCalc("Accuracy",accuracyMod);
							evasionMod = modStageCalc("Evasion",evasionMod);


							if (movePath.value == "Fissure" || movePath.value == "Guillotine" || movePath.value == "Horn Drill" || movePath.value == "Sheer Cold") {
								if (Generation == 2) {
									acc = (((parseInt(userLevelPath.value)-parseInt(baseLevelPath.value))*2+76)/256)*100;
								}
								if (Generation >= 3) {
									acc = parseInt(userLevelPath.value)-parseInt(baseLevelPath.value)+30;
								}
							}
							var accCalc = 0;
		
							// Defaults
							var CompoundEyes = 1;
							var SandVeil = 1;
							var SnowCloak = 1;
							var VictorySbase = 1;
							var Fog = 1;
							var Hustle = 1;
							var TangledFeet = 1;
							var BrightPowder = 1;
							var LaxIncense = 1;
							var WideLens = 1;
							var ZoomLens = 1;
							var MicleBerry = 1;
							var Gravity = 1;
							var Affection = 0;

							if (Generation == 1 || Generation == 2) {
								BrightPowder = 0;

								if (baseItemPath != undefined && baseItemPath.value == "BrightPowder") {
									BrightPowder = 20;
								}
					
								acc = 255*(acc/100);
								accCalc = acc*accuracyMod*evasionMod-BrightPowder;
								if (accCalc < 1) {
									accCalc = 1;
								}
								if (accCalc > 255) {
									accCalc = 255;
								}
								accCalc = (accCalc/255)*100;
							}
							if (Generation == 3) {
								if (userAbilityPath.value == "CompoundEyes") {
									CompoundEyes = 1.3;
								}
								if (!AllCloudNineAirLock) {
									if (baseAbilityPath.value == "Sand Veil") {
										if (weatherSandstormPath.checked) {
											SandVeil = 0.8;
										}
									}
								}
								if (userAbilityPath.value == "Hustle") {
									if (moveCategory == "Physical") {
										Hustle = 0.8;
									}
								}
								if (baseItemPath.value == "BrightPowder") {
									BrightPowder = 0.9;
								}
								if (baseItemPath.value == "Lax Incense") {
									LaxIncense = 0.95;
								}
		
								accCalc = acc*(accuracyMod*evasionMod)*CompoundEyes*SandVeil*Hustle*BrightPowder*LaxIncense;
							}
							if (Generation == 4) {
								if (userAbilityPath.value == "CompoundEyes") {
									CompoundEyes = 1.3;
								}
								if (!AllCloudNineAirLock) {
									if (baseAbilityPath.value == "Sand Veil") {
										if (weatherSandstormPath.checked) {
											if (!AllyMoldBreaker) {
												SandVeil = 0.8;
											}
										}
									}
									if (baseAbilityPath.value == "Snow CLoak") {
										if (weatherHailPath.checked) {
											if (!AllyMoldBreaker) {
												SnowCloak = 0.8;
											}
										}
									}
									if (weatherFogPath != undefined && weatherFogPath.checked) {
										Fog = 0.6;
									}
								}
								if (userAbilityPath.value == "Hustle") {
									if (moveCategory == "Physical") {
										Hustle = 0.8;
									}
								}
								if (baseAbilityPath.value == "Tangled Feet") {
									if (ConfusionPath.checked) {
										if (!AllyMoldBreaker) {
											TangledFeet = 0.5;
										}
									}
								}

								if (baseItemPath.value == "BrightPowder") {
									BrightPowder = 0.9;
								}
								if (baseItemPath.value == "Lax Incense") {
									LaxIncense = 0.9;
								}
								if (userItemPath.value == "Wide Lens") {
									WideLens = 1.1;
								}
								if (userItemPath.value == "Zoom Lens") {
									ZoomLens = 1.2;
								}
								if (userItemPath.value == "Micle Berry") {
									MicleBerry = 1.2;
								}
								if (gravityPath.checked) {
									Gravity = 5/3;
								}
								accCalc = acc*(accuracyMod*evasionMod)*CompoundEyes*SandVeil*SnowCloak*Fog*Hustle*TangledFeet*BrightPowder*LaxIncense*WideLens*ZoomLens*MicleBerry*Gravity;
							}
							if (Generation >= 5) {
								if (gravityPath.checked) {
									Gravity = 6840/4096;
								}
								if (baseAbilityPath.value == "Tangled Feet") {
									if (ConfusionPath.checked) {
										if (!AllyMoldBreaker) {
											TangledFeet = 0.5;
										}
									}
								}
								if (userAbilityPath.value == "Hustle") {
									if (moveCategory == "Physical") {
										Hustle = 3277/4096;
									}
								}
								if (!AllCloudNineAirLock) {
									if (baseAbilityPath.value == "Sand Veil") {
										if (weatherSandstormPath.checked) {
											if (!AllyMoldBreaker) {
												SandVeil = 0.8;
											}
										}
									}
									if (baseAbilityPath.value == "Snow Cloak") {
										if (weatherHailPath.checked) {
											if (!AllyMoldBreaker) {
												SnowCloak = 0.8;
											}
										}
									}
								}

								
								var allies = userbase.parentElement.querySelectorAll(":scope > div[data-string]");
								var check = true;
								var allycount = 0;
								for (var u = 0; u < allies.length; u++) {
									var allyteam = allies[u].parentElement.getAttribute("name");
									var allyid = allies[u].getAttribute("name");
									var allyab = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+allyteam+"'] ul[name='"+allyid+"'] li[name='ability'] select");

									if (allyab.value == "Victory Sbase") {
										allycount = allycount+1;
									}
								}

								if (allycount > 0) {
									VictorySbase = (4506/4096)*allycount;
								}
							
								if (baseItemPath.value == "Lax Incense") {
									LaxIncense = 3686/4096;
								}
								if (userItemPath.value == "Wide Lens") {
									WideLens = 4505/4096;
								}
								if (userItemPath.value == "Zoom Lens") {
									ZoomLens = 4915/4096;
								}
								if (userItemPath.value == "Micle Berry") {
									MicleBerry = 4915/4096;
								}
							}

							if (Generation == 5) {
								if (baseItemPath.value == "BrightPowder") {
									BrightPowder = 3686/4096;
								}
								if (userAbilityPath.value == "CompoundEyes") {
									CompoundEyes = 5325/4096;
								}

								accCalc = acc*Gravity*TangledFeet*Hustle*SandVeil*SnowCloak*VictorySbase*CompoundEyes*BrightPowder*LaxIncense*WideLens*ZoomLens*(accuracyMod*evasionMod)*MicleBerry;
							}
							if (Generation >= 6) {
								if (baseItemPath.value == "Bright Powder") {
									BrightPowder = 3686/4096;
								}
								if (userAbilityPath.value == "Compound Eyes") {
									CompoundEyes = 5325/4096;
								}

								var fr = undDel(userFriendshipPath.value,0);

								if (getApplicable("X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon")) {
									var af = undDel(userAffectionPath.value,0);
									if (af >= 150) {
										Affection = 10;
									}
								}
								else if (getApplicable("Lets Go Pikachu,Lets Go Eevee")) {
									if (fr >= 200) {
										Affection = 10;
									}
								}
								else if (Generation >= 8) {
									if (fr == 255) {
										Affection = 10;
									}
								}

								accCalc = acc*Gravity*TangledFeet*Hustle*SandVeil*SnowCloak*VictorySbase*CompoundEyes*BrightPowder*LaxIncense*WideLens*ZoomLens*(accuracyMod*evasionMod)*MicleBerry-Affection;
							}
							if (accCalc > 100) {
								accCalc = 100;
							}
							if (accCalc < 0) {
								accCalc = 0;
							}

							accRes.push(Math.round(accCalc)+"%");





							// Critical
							var critCalc = 0;

							var critHigh = false;
							for (var a = 0; a < finaldataMoveAdditional.length; a++) {
								if (finaldataMoveAdditional[a]["Additional"] == "High Critical-hit Ratio") {
									if (getApplicable(finaldataMoveAdditional[a]["Game"])) {
										if (finaldataMoveAdditional[a]["Move"] == movePath.value) {
											critHigh = true;
											break;
										}		
									}
								}
							}

							var critMod = userModCriticalPath.value;
							critMod = undwsnanDel(critMod,0);

							if (critHigh) {
								critMod = parseInt(critMod)+1;
							}


							if (Generation == 1) {
								var basespeed = parseInt(returnData(getPokémonInt(userPokémonPath.value),"Base Stats Speed","")[0]);

								if (movePath.value == "Crabhammer" || movePath.value == "Karate Chop" || movePath.value == "Razor Leaf" || movePath.value == "Slash") {
									if (critMod == 1) {
										critCalc = 4*Math.floor(basespeed/4);
									}
									else {
										critCalc = Math.min(8*Math.floor(basespeed/2),255);
									}
								}
								else {
									if (critMod == 1) {
										critCalc = Math.floor(basespeed/8);
									}
									else {
										critCalc = Math.floor(basespeed/2);
									}
								}

								critCalc = (critCalc/256)*100;
							}
							else if (Generation == 2) {
								if (critMod == 0 || critMod == undefined || critMod == "") {
									critCalc = 17/256;
								}
								else if (critMod == 1) {
									critCalc = 1/8;
								}
								else if (critMod == 2) {
									critCalc = 1/4;
								}
								else if (critMod == 3) {
									critCalc = 85/256;
								}
								else if (critMod >= 4) {
									critCalc = 1/2;
								}
								critCalc = critCalc*100;
							}
							else if (Generation >= 3 && Generation <= 5) {
								if (critMod == 0 || critMod == undefined || critMod == "") {
									critCalc = 1/16;
								}
								else if (critMod == 1) {
									critCalc = 1/8;
								}
								else if (critMod == 2) {
									critCalc = 1/4;
								}
								else if (critMod == 3) {
									critCalc = 1/3;
								}
								else if (critMod >= 4) {
									critCalc = 1/2;
								}
								critCalc = critCalc*100;
							}
							else if (Generation == 6) {
								if (critMod == 0 || critMod == undefined || critMod == "") {
									critCalc = 1/16;
								}
								else if (critMod == 1) {
									critCalc = 1/8;
								}
								else if (critMod == 2) {
									critCalc = 1/2;
								}
								else if (critMod == 3) {
									critCalc = 1;
								}
								else if (critMod >= 4) {
									critCalc = 1;
								}
								critCalc = critCalc*100;
							}
							else if (Generation >= 7) {
								if (critMod == 0 || critMod == undefined || critMod == "") {
									critCalc = 1/24;
								}
								else if (critMod == 1) {
									critCalc = 1/8;
								}
								else if (critMod == 2) {
									critCalc = 1/2;
								}
								else if (critMod == 3) {
									critCalc = 1;
								}
								else if (critMod >= 4) {
									critCalc = 1;
								}
								critCalc = critCalc*100;
							}

							if (baseAbilityPath.value == "Battle Armor" || baseAbilityPath.value == "Shell Armor") {
								critCalc = 0;
							}
							for (var a = 0; a < finaldataMoveAdditional.length; a++) {
								if (finaldataMoveAdditional[a]["Additional"] == "Set Damage" || finaldataMoveAdditional[a]["Additional"] == "One-hit Knockout") {
									if (getApplicable(finaldataMoveAdditional[a]["Game"])) {
										if (finaldataMoveAdditional[a]["Move"] == movePath.value) {
											critCalc = 0;
											break;
										}		
									}
								}
							}

							var max = base.querySelector(":scope *[name='hp'] input[type='range']").value;
							var curr = alldivbase[i].querySelector(":scope *[name='hp'] *[name='current']").innerText;
							max = parseInt(max);
							curr = parseInt(curr);
							max = undwsnanDel(max,0);
							curr = undwsnanDel(curr,0);
							if (max-curr == 0) {
								critCalc = 0;
							}

							critCalc = Math.round(critCalc);
							critCalc = undwsnanDel(critCalc,0);

							critRes.push(critCalc+"%")


						}
	

						// All
						var check = true;
						if (Generation >= 3) {
							if (baseTypes.includes("Fire")) {
								check = false;
							}
						}
						if (baseAbilityPath != undefined) {
							if (baseAbilityPath.value == "Water Veil" || baseAbilityPath.value == "Water Bubble" || baseAbilityPath.value == "Comatose" || baseAbilityPath.value == "Magic Guard") {
								check = false;
							}
							if (baseAbilityPath.value == "Leaf Guard" && weatherHarshSunlightPath.checked) {
								check = false;
							}
						}
						if (TerrainMistyPath != undefined && TerrainMistyPath.checked) {
							if (baseGrounded) {
								check = false;
							}
						}

						if (check) {
							if (baseStatusBurnPath.checked) {
								var val = 0;
								if (Generation == 1) {
									val = Math.floor(baseMaxHP/16);
								}
								else {
									val = Math.floor(baseMaxHP/8);
								}
		
								if (baseAbilityPath != undefined && baseAbilityPath.value == "Heatproof") {
									val = val/2;
								}
		
								if (val <= 0) {
									val = 1;
								}
		
								DMGCalcApply(alldivbase[i],val,"Damage");
							}
						}
		
		
						var check = true;
						if (baseTypes.includes("Steel") || baseTypes.includes("Poison")) {
							check = false;
						}
						if (baseAbilityPath != undefined) {
							if (baseAbilityPath.value == "Immunity" || baseAbilityPath.value == "Comatose" || AllyPastelVeil || baseAbilityPath.value == "Magic Guard") {
								check = false;
							}
							if (baseAbilityPath.value == "Leaf Guard" && weatherHarshSunlightPath.checked) {
								check = false;
							}
						}
						if (TerrainMistyPath != undefined && TerrainMistyPath.checked) {
							if (baseGrounded) {
								check = false;
							}
						}
						if (check) {
							if (baseStatusPoisonPath.checked) {
								var val = 0;
								if (Generation == 1) {
									val = Math.floor(baseMaxHP/16);
								}
								else {
									val = Math.floor(baseMaxHP/8);
								}
								if (val <= 0) {
									val = 1;
								}
							
								DMGCalcApply(alldivbase[i],val,"Damage");
							}
		
							if (baseStatusBadPoisonPath.value != "" && baseStatusBadPoisonPath.value != undefined && baseStatusBadPoisonPath.value != 0) {
								var val = 0;
								if (Generation == 1) {
									val = Math.floor(baseMaxHP/16);
								}
								else {
									val = Math.floor(baseMaxHP/8);
								}
								if (val <= 0) {
									val = 1;
								}
								val = baseStatusBadPoisonPath.value*val
		
								DMGCalcApply(alldivbase[i],val,"Damage");
							}
						}
		
						if (weatherSandstormPath != undefined && weatherSandstormPath.checked) {
							var check = true;

							if (baseTypes.includes("Rock") || baseTypes.includes("Ground") || baseTypes.includes("Steel")) {
								check = false;
							}
							if (baseItemPath != undefined && baseItemPath.value == "Safety Goggles") {
								check = false;
							}
							if (baseAbilityPath != undefined) {
								if (baseAbilityPath.value == "Sand Force" || baseAbilityPath.value == "Sand Rush" || baseAbilityPath.value == "Sand Veil" || baseAbilityPath.value == "Magic Guard" || baseAbilityPath.value == "Overcoat") {
									check = false;
								}
							}
		
							if (check) {
								var val = Math.floor(baseMaxHP/16);
			
								DMGCalcApply(alldivbase[i],val,"Damage");
							}
						}

						if (weatherHailPath != undefined && weatherHailPath.checked) {
							var check = true;

							if (baseTypes.includes("Ice")) {
								check = false;
							}
							if (baseItemPath != undefined && baseItemPath.value == "Safety Goggles") {
								check = false;
							}
							if (baseAbilityPath != undefined) {
								if (baseAbilityPath.value == "Ice Body" || baseAbilityPath.value == "Snow Cloak" || baseAbilityPath.value == "Magic Guard" || baseAbilityPath.value == "Overcoat") {
									check = false;
								}
							}
		
							if (check) {
								var val = Math.floor(baseMaxHP/16);
			
								DMGCalcApply(alldivbase[i],val,"Damage");
							}
						}

						
						if (baseSpikesPath != undefined && baseSpikesPath.value != "" && baseSpikesPath.value != undefined && baseSpikesPath.value != 0) {
							var rel = 1;
							if (baseSpikesPath.value == 1) {
								rel = 8;
							}
							else if (baseSpikesPath.value == 2) {
								rel = 6;
							}
							else if (baseSpikesPath.value == 3) {
								rel = 4;
							}
		
							if (baseGrounded) {
								var val = Math.floor(baseMaxHP/rel);
								if (val <= 0) {
									val = 1;
								}
			
								DMGCalcApply(alldivbase[i],val,"Damage");
							}
						}
						
						var check = true;
						if (baseAbilityPath != undefined && baseAbilityPath.value == "Magic Guard") {
							check = false;
						}
						if (check) {
							if (baseStealthRockPath != undefined && baseStealthRockPath.checked) {
								var typ = 1;
								var adv = returnTypeAdvantage("Rock","Attacking");
								
								if (adv[1].includes(baseTypes[0].toUpperCase())) {
									typ = typ*0.5;
								}
								if (adv[1].includes(baseTypes[1].toUpperCase())) {
									typ = typ*0.5;
								}
								if (adv[1].includes(baseTypes[2].toUpperCase())) {
									typ = typ*0.5;
								}
		
								if (adv[2].includes(baseTypes[0].toUpperCase())) {
									typ = typ*2;
								}
								if (adv[2].includes(baseTypes[1].toUpperCase())) {
									typ = typ*2;
								}
								if (adv[2].includes(baseTypes[2].toUpperCase())) {
									typ = typ*2;
								}
		
								var val = 0;
								if (typ == 0.25) {
									val = 32;
								}
								else if (typ == 0.5) {
									val = 16;
								}
								else if (typ == 1) {
									val = 8;
								}
								else if (typ == 2) {
									val = 4;
								}
								else if (typ == 4) {
									val = 2;
								}
								val = Math.floor(baseMaxHP/val);
								DMGCalcApply(alldivbase[i],val,"Damage");
							}
						}



				
						for (var u = 0; u < finaldataMoveAdditional.length; u++) {
							if (getApplicable(finaldataMoveAdditional[u]["Game"])) {
								if (finaldataMoveAdditional[u]["Move"] == move) {
									if (finaldataMoveAdditional[u]["Additional"] == "Healing") {
										if (finaldataMoveAdditional[u]["Value"] != undefined) {
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
													if (weatherStrongWindsPath != undefined) {
														if (weatherStrongWindsPath.checked) {
															check = true;
														}
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
														var heal = Math.ceil(baseMaxHP*finaldataMoveAdditional[u]["Value"]);
														DMGCalcApply(alldivbase[i],heal,"Heal");
													}
													else if (finaldataMoveAdditional[u]["Target"] == "Ally") {
														if (alldivbase[i].parentElement.getAttribute("name").includes("player")) {
															var heal = Math.ceil(baseMaxHP*finaldataMoveAdditional[u]["Value"]);
															DMGCalcApply(alldivbase[i],heal,"Heal");
														}
													}
												}
											}
											else if (finaldataMoveAdditional[u]["Type"] == "Target Attack") {
												if (finaldataMoveAdditional[u]["Condition"] == "Minus One Attack") {
													if (moveCategory == "Special") {
														if (Generation == 1) {
															var baseAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *:last-child > *[name='Special']")
															var modAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *[name='Mod'] > *[name='Special']")
														}
														else {
															var baseAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *:last-child > *[name='Sp. Atk']")
															var modAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *[name='Mod'] > *[name='Sp. Atk']")
														}
													}
													else if (moveCategory == "Physical") {
														var baseAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *:last-child > *[name='Attack']")
														var modAtk = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *[name='Mod'] > *[name='Attack']")
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
														val = baseAtk;
													}
													else {
														if (Generation >= 1 && Generation <= 2) {
															val = baseAtk*0.66;
														}
														else {
															val = baseAtk*0.6666666667;
														}
													}

													var heal = Math.ceil(val*finaldataMoveAdditional[u]["Value"]);
													DMGCalcApply(alldivbase[i],heal,"Heal");
												}
											}
										}
									}


									
									if (finaldataMoveAdditional[u]["Additional"] == "Recoil") {
										if (finaldataMoveAdditional[u]["Value"] != undefined) {
											var val = 0;
											if (finaldataMoveAdditional[u]["Type"] == "Move Damage") {
												val = integerResult*finaldataMoveAdditional[u]["Value"];
											}
											if (finaldataMoveAdditional[u]["Type"] == "Current HP") {
												val = parseInt(userCurrentHPPath.innerText)*finaldataMoveAdditional[u]["Value"];
											}
											if (finaldataMoveAdditional[u]["Type"] == "Max HP") {
												val = parseInt(userMaxHPPath.innerText)*finaldataMoveAdditional[u]["Value"];
											}
			
											DMGCalcApply(user,val,"Damage");
										}
									}


									if (finaldataMoveAdditional[u]["Additional"] == "Drain") {
										if (finaldataMoveAdditional[u]["Value"] != undefined) {
											var val = 0;
											var check = true;
											if (finaldataMoveAdditional[u]["Type"] == "Move Damage") {
												val = integerResult*parseFloat(finaldataMoveAdditional[u]["Value"]);
											}
											if (userItemPath != undefined && userItemPath.value == "Big Root") {
												val = val*1.3;
											}
											if (finaldataMoveAdditional[u]["Condition"] == "Asleep") {
												if (!baseStatusAsleepPath.checked) {
													check = false;
												}
											}

											val = Math.round(val);

											if (val < 1) {
												val = 1;
											}

			

											if (check) {
												if (baseAbilityPath != undefined && baseAbilityPath.value == "Liquid Ooze") {
													DMGCalcApply(user,val,"Damage");
												}
												else {
													DMGCalcApply(user,val,"Heal");
												}
											}
										}
									}
								}
							}
						}
					

						var max = base.querySelector(":scope *[name='hp'] input[type='range']").value;
						var curr = alldivbase[i].querySelector(":scope *[name='hp'] *[name='current']").innerText;
						if (curr != undefined && max != undefined) {
							max = parseInt(max);
							curr = parseInt(curr);
							if (!isNaN(curr) && !isNaN(max)) {
								if (max-curr != 0) {
									dmgRes.push(max-curr);
								}
							}
						}

					}
				}



				var dmgResult;
				var check = true;
				for (var u = 0; u < dmgRes.length; u++) {
					if (u != 0) {
						if (dmgRes[u] != dmgRes[u-1]) {
							check = false;
							break;
						}
					}
				}
				if (check) {
					dmgResult = dmgRes[0];
				}
				else {
					dmgResult = dmgRes.join(" / ");
				}

				var accResult;
				var check = true;
				for (var u = 0; u < accRes.length; u++) {
					if (u != 0) {
						if (accRes[u] != accRes[u-1]) {
							check = false;
							break;
						}
					}
				}
				if (check) {
					accResult = accRes[0];
				}
				else {
					accResult = accRes.join(" / ");
				}


				var critResult;
				var check = true;
				for (var u = 0; u < critRes.length; u++) {
					if (u != 0) {
						if (critRes[u] != critRes[u-1]) {
							check = false;
							break;
						}
					}
				}
				if (check) {
					critResult = critRes[0];
				}
				else {
					critResult = critRes.join(" / ");
				}

				if (accRes.length == 0) {
					accResult = "0%";
				}
				if (dmgRes.length == 0) {
					dmgResult = "0";
				}
				if (critRes.length == 0) {
					critResult = "0%";
				}

				moveDamageTextPath.innerText = dmgResult;
				moveAccuracyTextPath.innerText = accResult;
				moveCriticalTextPath.innerText = critResult;



			}





		}

		function DMGCalcApply(base,val,type) {

			var base;
			var val;
			var type;

			if (base != undefined) {
	
				var team = base.parentElement.getAttribute("name");
				var id = base.getAttribute("name");
				var target = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+team+"'] ul[name='"+id+"']");

				var HPMaxPath = base.querySelector(":scope *[name='hp'] *[name='max']");
				var HPCurrentPath = base.querySelector(":scope *[name='hp'] *[name='current']");
				var HPMaxPath = base.querySelector(":scope *[name='hp'] *[name='max']");
				var HPPercentagePath = base.querySelector(":scope *[name='hp'] *[name='percentage']");
				var HPInputPath = target.querySelector(":scope *[name='hp'] > input");

				

				
				if (true) {
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

					base.lastChild.style.background = "linear-gradient(90deg, Limegreen 0%, Limegreen "+newPercent+"%, Orangered "+newPercent+"%, Orangered 100%)";
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
			var id = base.getAttribute("name");

	
			var pokémon = base.querySelector(":scope *[name='pokémon'] select");
			var level = base.querySelector(":scope *[name='level'] input[type='number']")
			var ivs = base.querySelectorAll(":scope *[name='stats'] > *:last-child > *:nth-child(2) > input[type='number']:not(:first-child)");
			var evs = base.querySelectorAll(":scope *[name='stats'] > *:last-child > *:nth-child(3) > input[type='number']:not(:first-child)");
			var natures = base.querySelectorAll(":scope *[name='nature'] select");
			var friendshipInput = base.querySelector(":scope *[name='friendship'] input[type='number']");
			var badges = base.querySelectorAll(":scope *[name='Badge-Group'] li");
			var maxhp = base.querySelector(":scope *[name='hp'] input");
			var maxhpInput = base.querySelector(":scope *[name='hp'] *[name='max']");
			var currenthpInput = base.querySelector(":scope *[name='hp'] *[name='current']");
		
			var res = base.querySelectorAll(":scope *[name='stats'] > *:last-child > *:last-child > input[type='number']:not(:first-child)");
			var mod = base.querySelectorAll(":scope *[name='stats'] > *:last-child > *[name='Mod'] > input[type='number']:not(:first-child)");
		
			var burnPath = base.querySelector(":scope *[name='Burned'] input");
			var paraPath = base.querySelector(":scope *[name='Paralyzed'] input");

			var sandstormPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:last-child *[name='Sandstorm'] input");
	
			var typesPath = base.querySelectorAll(":scope *[name='type'] select");
			var types = [];
			for (var i = 0; i < typesPath.length; i++) {
				types.push(typesPath[i].value)
			}


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

					if (friendshipInput != undefined) {
						if (friendshipInput.value != undefined && friendshipInput.value != "") {
							friendship = friendshipModifer(friendshipInput.value);
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
						var val = parseFloat(statsCalc(stat,lvl,base,iv,ev,nature,friendship));
						res[i].setAttribute("min",val);
						res[i].setAttribute("max",val);
						res[i].value = val;

						if (stat == "HP") {
							var hpPath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[name='"+id+"'] *[name='hp']")
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
							maxhp.style.removeProperty("background");

						}

						if (sandstormPath != undefined && sandstormPath.checked) {
							if (stat == "Sp. Def") {
								if (Generation >= 4) {
									if (types.includes("Rock")) {
										var newVal = val*1.5;
										res[i].setAttribute("min",newVal);
										res[i].setAttribute("max",newVal);
										res[i].value = newVal;
									}
								}
							}
						}
						if (burnPath.checked) {
							if (Generation == 1 || Generation == 2) {
								if (stat == "Attack") {
									var newVal = val*0.5;
									res[i].setAttribute("min",newVal);
									res[i].setAttribute("max",newVal);
									res[i].value = newVal;
								}
							}
						}
						if (paraPath.checked) {
							if (stat == "Speed") {
								var poktype = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,pokémon.value);
								var check = true;
								if (Generation >= 6) {
									if (poktype[0] == "Electric" || poktype[1] == "Electric") {
										check = false;
									}
								}
									
								if (check) {
									if (Generation >= 1 && Generation <= 6) {
										var newVal = val*0.75;
										res[i].setAttribute("min",newVal);
										res[i].setAttribute("max",newVal);
										res[i].value = newVal;
									}
									else {
										var newVal = val*0.5;
										res[i].setAttribute("min",newVal);
										res[i].setAttribute("max",newVal);
										res[i].value = newVal;
									}
								}
							}
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
			var sel = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='move'] > span select");
			var inp = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:first-child input");
	
			var user = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name] > div[data-string].user");
			var userid = user.getAttribute("name");
			var userbase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='player'] ul[name='"+userid+"']");
			var userAbilityPath = userbase.querySelector(":scope *[name='ability'] select");
			var userPokPath = userbase.querySelector(":scope *[name='pokémon'] select");
			var userItemPath = userbase.querySelector(":scope *[name='item'] select");

			var movePower = returnArrValue(finaldataMovePower,"Name_"+JSONPath_MoveName,"Power_"+JSONPath_MovePower,sel.value);
			var moveType = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,sel.value);
			var moveGroup = returnArrValue(finaldataMoveGroup,"Name_"+JSONPath_MoveName,"Group",sel.value)

			var strikes = [1,1];

			inp.title = "";

			for (var a = 0; a < finaldataMoveAdditional.length; a++) {
				if (finaldataMoveAdditional[a]["Move"] == sel.value) {
					if (getApplicable(finaldataMoveAdditional[a]["Game"])) {
						if (finaldataMoveAdditional[a]["Additional"] == "Multi-strike" || finaldataMoveAdditional[a]["Additional"] == "Ramping" || finaldataMoveAdditional[a]["Additional"] == "Variable") {
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

						if (finaldataMoveAdditional[a]["Additional"] == "Multi-strike") {
							inp.title = "Amount of Hits";
						}
						else if (finaldataMoveAdditional[a]["Additional"] == "Ramping") {
							inp.title = "Consecutive Turns of Hits";
						}
					}
				}
			}


			var lis = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li");
			for (var l = 0; l < lis.length; l++) {
				lis[l].style.display = "none";
				lis[l].firstChild.checked = false;
			}

			var lis = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='spec'] > span:last-child > li");
			for (var l = 0; l < lis.length; l++) {
				if (parseInt(movePower) > 0) {
					if (lis[l].getAttribute("name") == "Semi-Invulnerable Flight") {
						if (sel.value == "Twister" || sel.value == "Gust") {
							lis[l].style.removeProperty("display");
						}
					}
					else if (lis[l].getAttribute("name") == "Semi-Invulnerable Dig") {
						if (sel.value == "Earthquake" || sel.value == "Magnitude") {
							lis[l].style.removeProperty("display");
						}
					}
					else if (lis[l].getAttribute("name") == "Semi-Invulnerable Dive") {
						if (sel.value == "Surf" || sel.value == "Whirlpool") {
							lis[l].style.removeProperty("display");
						}
					}
					else if (lis[l].getAttribute("name") == "Switching") {
						if (sel.value == "Pursuit") {
							lis[l].style.removeProperty("display");
						}
					}
					else if (lis[l].getAttribute("name") == "Minimize") {
						var tempOtherMoves = [];
						if (Generation == 2) {
							tempOtherMoves = ["Stomp"];
						}
						else if (Generation == 3) {
							tempOtherMoves = ["Stomp","Astonish","Extrasensory","Needle Arm"];
						}
						else if (Generation == 4) {
							tempOtherMoves = ["Stomp"];
						}
						else if (Generation == 5) {
							tempOtherMoves = ["Stomp","Steamroller"];
						}
						else if (Generation == 6) {
							tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Shadow Force","Steamroller","Heat Crash","Phantom Force","Flying Press"];
						}
						else if (Generation == 7) {
							tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Steamroller","Heat Crash","Heavy Slam","Flying Press","Malicious Moonsault","Double Iron Bash"];
						}
						else if (Generation == 8) {
							tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Heat Crash","Heavy Slam","Flying Press"];
						}

						if (tempOtherMoves.includes(sel.value)) {
							lis[l].style.removeProperty("display");
						}
					}
					else if (lis[l].getAttribute("name") == "Charge") {
						if (moveType == "Electric") {
							lis[l].style.removeProperty("display");
						}
					}
					else if (lis[l].getAttribute("name") == "Me First") {
						var uncallable = [];
						if (Generation == 4 || Generation == 5) {
							uncallable = ["Chatter","Counter","Covet","Focus Punch","Metal Burst","Mirror Coat","Struggle","Thief"]
						}
						else if (Generation == 6) {
							uncallable = ["Belch","Chatter","Counter","Covet","Focus Punch","Metal Burst","Mirror Coat","Struggle","Thief"]
						}
						else if (Generation == 7) {
							uncallable = ["Beak Blast","Belch","Chatter","Counter","Covet","Focus Punch","Metal Burst","Mirror Coat","Shell Trap","Struggle","Thief"]
						}
						if (!uncallable.includes(sel.value)) {
							lis[l].style.removeProperty("display");
						}
					}
					else if (lis[l].getAttribute("name") == "Flash Fire") {
						if (userAbilityPath != undefined && userAbilityPath.value == "Flash Fire") {
							lis[l].style.removeProperty("display");
						}
					}
					else if (lis[l].getAttribute("name") == "Tar Shot") {
						if (moveType == "Fire") {
							lis[l].style.removeProperty("display");
						}
					}
					else if (lis[l].getAttribute("name") == "Defense Curl") {
						if (sel.value == "Rollout") {
							lis[l].style.removeProperty("display");
						}
					}
					else if (lis[l].getAttribute("name") == "Z-Move") {
						if (sel.value != "Struggle") {
							var check1 = true;
							var check2 = true;
							var check3 = false;
						
							for (var r = 0; r < finaldataMoveCall.length; r++) {
								if (finaldataMoveCall[r]["Call"] == sel.value) {
									if (finaldataMoveCall[r]["Type"] == "Z-Move") {
										if (finaldataMoveCall[r]["Pokémon"] != undefined) {
											check1 = false;
											if (finaldataMoveCall[r]["Pokémon"].includes(",")) {
												var vals = finaldataMoveCall[r]["Pokémon"].split(",");
												for (var u = 0; u < vals.length; u++) {
													if (vals[u] == userPokPath.value) {
														check1 = true;
													}
												}
											}
											else {
												if (finaldataMoveCall[r]["Pokémon"] == userPokPath.value) {
													check1 = true;
												}
											}
										}
										if (finaldataMoveCall[r]["Item"] != undefined) {
											check2 = false;
											if (finaldataMoveCall[r]["Item"] == userItemPath.value) {
												check2 = true;
											}
										}
									}
								}
							}


							if (userItemPath.value.includes(" Z") && userItemPath.value.includes(moveType.replace(/.$/, ''))) {
								check3 = true;
							}

							if (check1 && check2 && check3) {
								lis[l].style.removeProperty("display");
							}
						}
					}
					else if (lis[l].getAttribute("name") == "Max Move") {
						lis[l].style.removeProperty("display");
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

			sel.style.color = "var(--type"+returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,sel.value)+")";

			var range = returnArrValue(finaldataMoveRange,"Name_"+JSONPath_MoveName,"Range",sel.value);

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
			var id = base.getAttribute("name");
			var tar = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[name='"+id+"']")
			
			var pokImgPath = tar.querySelector(":scope *[name='img']");
			var pokItemPath = tar.querySelector(":scope *[name='item']");
			var pokNamePath = tar.querySelector(":scope *[name='name'] > *");
			var pokMovesPath = tar.querySelectorAll(":scope *[name='moves'] > *");
			

			var pokPath = base.querySelector(":scope *[name='pokémon'] select");
			var statsPath = base.querySelector(":scope *[name='stats']");
			var ivPath = statsPath.querySelectorAll(":scope *[name='IV'] > input:not(:first-child)");
			var evPath = statsPath.querySelectorAll(":scope *[name='EV'] > input:not(:first-child)");
			var avPath = statsPath.querySelectorAll(":scope *[name='AV'] > input:not(:first-child)");
			var abilityPath = base.querySelector(":scope *[name='ability'] select");
			var genderPath = base.querySelector(":scope *[name='gender'] select");
			var itemPath = base.querySelector(":scope *[name='item'] select");
			var friendshipPath = base.querySelector(":scope *[name='friendship'] input");
			var naturePath = base.querySelector(":scope *[name='nature'] select");
			var levelPath = base.querySelector(":scope *[name='level'] input");
			var movesPath = base.querySelectorAll(":scope *[name='moves'] select");

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
				var av;
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
				if (dataString["av"] != undefined) {
					av = dataString["av"];
				}
				

				if (pokémon != undefined) {
					int = getPokémonInt(pokémon);
				}

				if (int != undefined) {
					check = true;
				}
			}

			if (check) {
				base.classList.add("active");

				pokImgPath.src = "./media/Images/Pokémon/"+itCategory+"/"+itExt+"/"+itType+"/"+itAngle+"/"+itPath+"/"+getPokémonMediaPath(int,"Battle")+"."+itExt;
				pokImgPath.title = getPokémonName(int);

			
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
						if (genderPath.value == "♂") {
							genderPath.style.color = "blue";
						}
						else if (genderPath.value == "♀") {
							genderPath.style.color = "red";
						}
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
						pokItemPath.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(itemPath.value)+".png";
						pokItemPath.title = itemPath.value;
					}
				}

				if (moves != undefined) {
					if (moves.includes(",")) {
						moves = moves.split(",");
						if (moves.length == movesPath.length) {
							for(var v = 0; v < movesPath.length; v++) {
								if(moves[v] != undefined && moves[v] != "") {
									movesPath[v].style.color = "var(--type"+returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,moves[v])+")";
									movesPath[v].value = moves[v];
								}
							}
						}
						if (moves.length == pokMovesPath.length) {
							for(var v = 0; v < pokMovesPath.length; v++) {
								if(moves[v] != undefined && !moves[v].includes("#") && moves[v] != "") {
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

				if (av != undefined) {
					if (av.includes(",")) {
						var avs = av.split(",");
						if (avs.length == avPath.length) {
							for(var v = 0; v < avs.length; v++) {
								avPath[v].value = avs[v];
							}
						}
					}
				}

			}
			else {
				base.classList.remove("active");
			}


			

		}
		function DMGSetActive(val) {
			var val;

			var x = findUpTag(event.target,"DIV");
			var all = x.parentElement.parentElement.querySelectorAll(":scope div[data-string]")			
			
			for(var a = 0; a < all.length; a++) {
				all[a].classList.remove(val);
			}
			x.classList.add(val);

			DMGSetPossible();
			DMGCalcStart();

		}
		function DMGSetPossible() {

			var set = false;
			var tars = [];
			var base = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result']");

			var allbase = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div ol ul[name]");

			var previous = base.querySelectorAll(":scope > *[name] > *[name]");
			for(var a = 0; a < previous.length; a++) {
				previous[a].classList.remove("viable");
			}

			var movePath = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='menu'] > div[name='move'] > span select")
			var moveType = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,movePath.value);


			var user = base.querySelectorAll(":scope > *[name] > *[name].user");
			var users = base.querySelectorAll(":scope > *[name*='player'] > *[name]");
			
			if (user.length == 0) {
				if (users.length > 0) {
					users[0].classList.add("user");
				}
			}

			if (user.length > 1) {
				for(var a = 0; a < user.length; a++) {
					user[a].classList.remove("user");
				}
				users[0].classList.add("user");
			}

			user = base.querySelector(":scope > *[name] > *[name].user");

			var team = user.parentElement.getAttribute("name");
			var id = user.getAttribute("name");

			var idPrevious = parseInt(id)-1;
			var idNext = parseInt(id)+1;

			var adjacent = [];

			var allies = base.querySelectorAll(":scope > *[name='"+team+"'] > *[name]:not([name='"+id+"'])");
			var enemies = base.querySelectorAll(":scope > *[name]:not([name='"+team+"']) > *[name]");
			var all = base.querySelectorAll(":scope > *[name] > *[name]");



			var adjThis = user.parentElement.querySelectorAll(":scope > *[name]");
			for(var a = 0; a < adjThis.length; a++) {
				if (a == idNext || a == idPrevious) {
					adjacent.push(adjThis[a])
				}
			}

			if (user.parentElement.previousElementSibling != undefined) {
				var adjLeft = user.parentElement.previousElementSibling.querySelectorAll(":scope > *[name]");
				for(var a = 0; a < adjLeft.length; a++) {
					if (a == id || a == idNext || a == idPrevious) {
						adjacent.push(adjLeft[a])
					}
				}
			}
			
			if (user.parentElement.nextElementSibling != undefined) {
				var adjRight = user.parentElement.nextElementSibling.querySelectorAll(":scope > *[name]");
				for(var a = 0; a < adjRight.length; a++) {
					if (a == id || a == idNext || a == idPrevious) {
						adjacent.push(adjRight[a])
					}
				}
			}

			if (base.getAttribute("data-range") == "May affect anyone adjacent to the user") {
				for(var a = 0; a < adjacent.length; a++) {
					tars.push(adjacent[a])
				}
			}
			
			if (base.getAttribute("data-range") == "May randomly affect anyone adjacent to the user") {
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
				tars.push(user)
			}

			if (base.getAttribute("data-range") == "May affect anyone but the user") {
				for(var a = 0; a < all.length; a++) {
					var check = true;
	

					if (all[a] == user) {
						check = false;
					}
					
					if (check) {
						tars.push(all[a])
					}
				}
			}
	

			if (base.getAttribute("data-range") == "Affects the user and all allies") {
				tars.push(user)
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
				tars.push(user)
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
					if (range.split(" ")[0] == "Affects") {
						set = true;
					}
					else {
						set = false;
					}
				}
			}



			if (moveType == "Electric") {
				var check = [];
				for(var a = 0; a < allbase.length; a++) {
					var ab = allbase[a].querySelector(":scope *[name='ability'] select")
					if (ab != undefined && ab.value == "Lightning Rod") {
						check.push(allbase[a]);
					}
				}
				if (check.length > 0) {
					tars = check;
				}
			}

		




			
			for(var a = 0; a < tars.length; a++) {
				tars[a].classList.add("viable");
			}


			var check = false;
			var check2 = true;
			for(var a = 0; a < all.length; a++) {
				if (all[a].classList.contains("target") && !all[a].classList.contains("viable")) {
					check = true;
				}
				if (all[a].classList.contains("target")) {
					check2 = false;
				}
			}
			if (check2) {
				check = true;
			}

			if (check) {
				for(var a = 0; a < all.length; a++) {
					all[a].classList.remove("target");
				}

				var target = base.querySelectorAll(":scope > *[name] > *[name].target");
				var targets = base.querySelectorAll(":scope > *[name] > *[name].viable");

				if (target.length == 0) {
					if (targets.length > 1) {
						for(var a = 0; a < targets.length; a++) {
							if (targets[a] != user) {
								if (targets[a].parentElement.getAttribute("name") != "player") {
									targets[a].classList.add("target");
									break;
								}
							}
						}
					}
					else if (targets.length > 0) {
						targets[0].classList.add("target");
					}
				}
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
			var id = base.getAttribute("name");
			var tar = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[name='"+id+"']")
	

			var pokémonPath = base.querySelector(":scope *[name='pokémon'] select");
			var abilityPath = base.querySelector(":scope *[name='ability'] select");
			var genderPath = base.querySelector(":scope *[name='gender'] select");
			var itemPath = base.querySelector(":scope *[name='item'] select");
			var friendshipPath = base.querySelector(":scope *[name='friendship'] input");
			var typesPath = base.querySelectorAll(":scope *[name='type'] select");

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

			var opts = base.querySelectorAll(":scope li[name='type'] select option");
			for (var o = 0; o < opts.length; o++) {
				opts[o].style.removeProperty("display");
			}
			var sel3 = base.querySelector(":scope li[name='type'] select:nth-child(3)");
			if (sel3 != undefined) {
				sel3.innerHTML = "<option value=''></option>";
				sel3.style.removeProperty("background");
				sel3.classList.add("disable");
				var tc = base.querySelectorAll(":scope li[name='Type Change-Group'] input");
				for (var t = 0; t < tc.length; t++) {
					tc[t].checked = false;
				}
			}

			var type1 = returnData(getPokémonInt(pokémonPath.value),"Type","")[0];
			var type2 = returnData(getPokémonInt(pokémonPath.value),"Type","")[1];

			if (type1 != undefined) {
				typesPath[0].value = type1;
				typesPath[0].style.background = "var(--type"+type1+")";
			}
			else {
				typesPath[0].value = "";
				typesPath[0].style.removeProperty("background");
			}
			if (type2 != undefined) {
				typesPath[1].value = type2;
				typesPath[1].style.background = "var(--type"+type2+")";
			}
			else {
				typesPath[1].value = "";
				typesPath[1].style.removeProperty("background");
			}

			if (check) {
				var ex = base.querySelector(":scope figure[name='export']")
				var evoFamily = getEvolutionFamily(int);
				if (evoFamily.length > 1) {
					ex.querySelector(":scope span[name='Change Evolution']").style.removeProperty("display");
				}
				else {
					ex.querySelector(":scope span[name='Change Evolution']").style.display = "none";
				}
	
				var pokForms = getPokémonForm(int);
				if (pokForms.length > 1) {
					ex.querySelector(":scope span[name='Change Form']").style.removeProperty("display");
				}
				else {
					ex.querySelector(":scope span[name='Change Form']").style.display = "none";
				}


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
					items.unshift("");
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
			var id = base.getAttribute("name");
			var target = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[name='"+id+"']");
		

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
				var avsPath = base.querySelectorAll(":scope *[name='stats'] *[name='AV'] input:not(:first-child)");
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
				for(var e = 0; e < avsPath.length; e++) {
					avsPath[e].value = "";
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
			var id = base.getAttribute("name");
			var target = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name='"+team+"'] > div[name='"+id+"']");
		

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
					var pos = getAbilityPosition(getPokémonInt(pokPath.value),abilityPath.value);
					if (pos != undefined) {
						stringObj["ab"] = pos;
					}
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
					var val1 = keys[e];
					var val2 = stringObj[keys[e]];
					if (val2 != "") {
						if (val2.replaceAll(",","") != "") {
							tempArr.push(val1+":"+val2)
						}
					}
				}
		
				target.setAttribute("data-string",tempArr.join("|"))
			}
			var tars = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span > div[data-string]");
			var tarsint = 0;
			for (var t = 0; t < tars.length; t++) {
				var val = tars[t].getAttribute("data-string");
				if (val.includes("pok:") && !val.includes("pok:|") && !val.includes("pok:\n")) {
					tarsint = tarsint+1;
				}
			}
			document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div").setAttribute("data-count",tarsint);
		}
		function DMGMatchPosition() {
			var teams = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name]");
			var poks = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span[name] > div[data-string]");

			var datas1 = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div ol[name='pokémon'] > span[name]");
			var datas2 = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div ol[name='team'] > span[name]");
			var datas3 = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] > div ol[name='pokémon'] > span[name] > ul[name]");

			var selects = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:first-child > span > select");


			var order1 = [];
			for(var p = 0; p < teams.length; p++) {
				order1.push(teams[p].getAttribute("name"));
			}
			for(var o = 0; o < order1.length; o++) {
				for(var p = 0; p < datas1.length; p++) {
					if (datas1[p].getAttribute("name") == order1[o]) {
						datas1[p].parentElement.appendChild(datas1[p]);
					}
				}
				for(var p = 0; p < datas2.length; p++) {
					if (datas2[p].getAttribute("name") == order1[o]) {
						datas2[p].parentElement.appendChild(datas2[p]);
					}
				}
				for(var p = 0; p < selects.length; p++) {
					if (selects[p].getAttribute("name") == order1[o]) {
						selects[p].parentElement.appendChild(selects[p]);
					}
				}
			}

			var order2 = [];
			for(var p = 0; p < poks.length; p++) {
				order2.push(poks[p].parentElement.getAttribute("name")+"-"+poks[p].getAttribute("name"));
			}

			for(var o = 0; o < order2.length; o++) {
				for(var p = 0; p < datas3.length; p++) {
					if (datas3[p].parentElement.getAttribute("name")+"-"+datas3[p].getAttribute("name") == order2[o]) {
						datas3[p].parentElement.appendChild(datas3[p]);
					}
				}
			}

			for(var t = 0; t < teams.length; t++) {
				var pok = teams[t].querySelectorAll(":scope > *[data-string]");
				for(var p = 0; p < pok.length; p++) {
					var x = p + 1;
					var val = "";
					if (pok[p].parentElement.getAttribute("name") == "player") {
						val = "Pokémon"
					}
					else {
						val = pok[p].parentElement.getAttribute("name");
						val = undDel(val,"");
						val = titleCase(val);
					}
					pok[p].setAttribute("title",val+" #"+x);
				}
			}


			for(var p = 0; p < datas1.length; p++) {
				var dat = datas1[p].querySelectorAll(":scope > *");
				var val = undefined;
				for(var r = 0; r < dat.length; r++) {
					if (dat[r].style.getPropertyValue("display") == "flex") {
						val = r;
					}
				}
				for(var t = 0; t < selects.length; t++) {
					if (selects[t].getAttribute("name") == datas1[p].getAttribute("name")) {
						selects[t].value = val;
					}
				}
				
			}

	
			DMGSetPossible();
			
		}
		function DMGSetDataString(base,str) {

			var base;
			var str;
	
			if (base.tagName != undefined) {
				base = base;
			}
			else if (base[0] != undefined) {
				base = base;
			}
			else {
				base = findUpTag(this,"DIV");
			}

			var data;

			if (str == undefined) {
				if (base.length > 1) {
					data = prompt("Enter Pokémon Data Strings:","");
				}
				else {
					data = prompt("Enter Pokémon Data String:","");
				}
			}
			else {
				data = str;
			}
	
			
			if (data != null && data != "") {
				data = data.replaceAll("\r","");
				data = data.replaceAll("\n","_");
				data = data.replaceAll("\\n","_");
				if (data.includes("_") && base.length > 1) {
					data = data.split("_");
					if (base.length >= data.length) {
						if (base.length > 1) {
							for (var d = 0; d < base.length; d++) {
								var team = base[d].parentElement.getAttribute("name");
								var id = base[d].getAttribute("name");
								var ulbase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div *[name='"+team+"'] ul[name='"+id+"']");
								base[d].setAttribute("data-string","");
								DMGPokSpecific(ulbase);
								DMGSetChange(ulbase);
								DMGCalcPokStats(ulbase);
								DMGCalcStart(ulbase);
							}
						}
						for (var d = 0; d < base.length; d++) {
							if (data[d].includes("pok:")) {
								var team = base[d].parentElement.getAttribute("name");
								var id = base[d].getAttribute("name");
								var ulbase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div *[name='"+team+"'] ul[name='"+id+"']");
								
								var temparr = [];
								var tempstr = undefined;

								if (data[d].includes("|")) {
									temparr = data[d].split("pok:");
									if (temparr.length > 1) {
										temparr = temparr[1].split("|");
										tempstr = getPokémonInt(temparr[0]);
									}
								}
								else {
									temparr = data[d].split("pok:");
									tempstr = getPokémonInt(temparr[1]);
								}
				
								if (tempstr != undefined) {
									if (finaldataPokémon[parseInt(tempstr)][JSONPath_Reference] == "true") {
										base[d].setAttribute("data-string",data[d]);
										DMGPokSpecific(ulbase);
										DMGSetChange(ulbase);
										DMGCalcPokStats(ulbase);
										DMGCalcStart(ulbase);

									}
									else {
										consoleText("Pokémon Unavailable.");
										base[d].setAttribute("data-string","");
										DMGPokSpecific(ulbase);
										DMGSetChange(ulbase);
										DMGCalcPokStats(ulbase);
										DMGCalcStart(ulbase);
									}
								}
								else {
									consoleText("Data returned an error.");
									base[d].setAttribute("data-string","");
									DMGPokSpecific(ulbase);
									DMGSetChange(ulbase);
									DMGCalcPokStats(ulbase);
									DMGCalcStart(ulbase);
								}
							}
							else {
								consoleText("Data returned an error.")
							}
						}
					}
					else {
						consoleText("Too many Pokémon for the battle.");
					}
				}
				else {
					if (data.includes("pok:") && !data.includes("_")) {
						if (base.length > 1) {
							for (var d = 0; d < base.length; d++) {
								var team = base[d].parentElement.getAttribute("name");
								var id = base[d].getAttribute("name");
								var ulbase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div *[name='"+team+"'] ul[name='"+id+"']");
								base[d].setAttribute("data-string","");
								DMGPokSpecific(ulbase);
								DMGSetChange(ulbase);
								DMGCalcPokStats(ulbase);
								DMGCalcStart(ulbase);
							}
							base = base[0];
						}

						var temparr = [];
						var tempstr = undefined;
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
								var team = base.parentElement.getAttribute("name");
								var id = base.getAttribute("name");
								var ulbase = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div *[name='"+team+"'] ul[name='"+id+"']");			

								base.setAttribute("data-string",data);
	
								DMGPokSpecific(ulbase);
								DMGSetChange(ulbase);
								DMGCalcPokStats(ulbase);
								DMGCalcStart(ulbase);
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
			var id = base.getAttribute("name");
			var target = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+team+"'] ul[name='"+id+"']");
		

			
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


	var toolOptionsTitle = ["Damage Calculator","Type Advantage","Timers","Random Number Generator"];

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

$("body").click(function(event) {
	if(!$(event.target).closest("#contain div#tool > section[name='content'] > div[name='dmg'] > div ul > figure[name='export']").length && !$(event.target).is("#contain div#tool > section[name='content'] > div[name='dmg'] > div ul > figure[name='export']")) {
		$("#contain div#tool > section[name='content'] > div[name='dmg'] > div ul > figure[name='export']").removeClass("active");
	}
	if(!$(event.target).closest("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='content'] > figure[name='import']").length && !$(event.target).is("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='content'] > figure[name='import']")) {
		$("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='content'] > figure[name='import']").removeClass("active");
	}
});




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