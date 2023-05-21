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

	toolSectionContentTimersOuter.setAttribute("id","timer");
	toolSectionContentTimersOuter.setAttribute("name","Timers");

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

		toolSectionContentRNGOuter.setAttribute("id","rng");
		toolSectionContentRNGOuter.setAttribute("name","Random Number Generator");

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
		var typeContent = document.createElement("div");
		var typeSidebar = document.createElement("div");
		var typeSidebarTitle = document.createElement("div");
		var typeSidebarDescription = document.createElement("div");
		var typeSidebarDescriptionSelector = document.createElement("div");
		var typeSidebarDescriptionAttackDefend = document.createElement("div");

		typeSidebarTitle.setAttribute("name","title");
		typeSidebarDescription.setAttribute("name","description");
		typeContent.setAttribute("name","content");
		typeSidebar.setAttribute("name","sidebar");
		typeOuter.setAttribute("id","type");
		typeOuter.setAttribute("name","Type Advantage");

		toolSectionContent.appendChild(typeOuter);
		typeOuter.appendChild(typeSidebar);
		typeOuter.appendChild(typeContent);
		typeSidebar.appendChild(typeSidebarTitle);
		typeSidebar.appendChild(typeSidebarDescription);
		typeSidebarDescription.appendChild(typeSidebarDescriptionSelector);
		typeSidebarDescription.appendChild(typeSidebarDescriptionAttackDefend)




	

		for(var i = 0; i < 2; i++) {
			var typeSidebarTitleWrap = document.createElement("span");
			var typeSidebarTitleInner = document.createElement("span");
			var typeSidebarTitleTrigger = document.createElement("b");
			var typeSidebarTitleTriggerText = document.createElement("strong");
			var typeSidebarTitleDrop = document.createElement("div");
			typeSidebarTitleTriggerText.innerText = "+";
			typeSidebarTitleTrigger.setAttribute("type","invert");
			typeSidebarTitle.appendChild(typeSidebarTitleWrap);
			typeSidebarTitleWrap.appendChild(typeSidebarTitleInner);
			typeSidebarTitleInner.appendChild(typeSidebarTitleTrigger);
			typeSidebarTitleTrigger.appendChild(typeSidebarTitleTriggerText);
			typeSidebarTitleWrap.appendChild(typeSidebarTitleDrop);

			typeSidebarTitleTrigger.addEventListener("click",function(){let base = this.parentElement.parentElement; if (base.classList.contains("active")) {base.classList.remove("active");} else {base.classList.add("active");}})

			for(var q = 0; q < Types.length; q++) {
				var typeSidebarTitleDropOption = document.createElement("b");
				var typeSidebarTitleDropOptionImg = document.createElement("img");
				var typeSidebarTitleDropOptionTxt = document.createElement("p");
				typeSidebarTitleDropOption.setAttribute("name",Types[q]);
				typeSidebarTitleDropOptionImg.src = "./media/Images/Misc/Type/Symbol/"+MEDIAPath_Type_Symbol+"/"+Types[q]+".png";
				typeSidebarTitleDropOptionImg.title = Types[q];
				typeSidebarTitleDropOptionImg.setAttribute("onerror","this.style.display='none';");
				typeSidebarTitleDropOptionTxt.innerText = Types[q];
				typeSidebarTitleDrop.appendChild(typeSidebarTitleDropOption);
				typeSidebarTitleDropOption.appendChild(typeSidebarTitleDropOptionImg);
				typeSidebarTitleDropOption.appendChild(typeSidebarTitleDropOptionTxt);
				typeSidebarTitleDropOption.addEventListener("click",function(){
					let base = findUpTag(this,"DIV").parentElement;
					let el = this.querySelector(":scope > *:last-child");
					let prev = base.querySelector(":scope > span img");
					if (prev != undefined) {
						prev.remove();
					}

					let img = document.createElement("img");
					img.src = "./media/Images/Misc/Type/Symbol/"+MEDIAPath_Type_Symbol+"/"+el.innerText+".png";
					img.setAttribute("name",el.innerText);
					img.title = el.innerText;
					img.setAttribute("onclick","this.remove();typeSwitch();");
					base.querySelector(":scope > span").prepend(img);
					base.classList.remove("active");
					typeSwitch();
				})
			}
		}

		let defAtt = ["Defending","Attacking"];


		for(var i = 0; i < defAtt.length; i++) {
			var DefAtt = document.createElement("ul");

			var DefAttSuperEffective = document.createElement("li");
			var DefAttSuperEffectiveTitle = document.createElement("h6");
			var DefAttSuperEffectiveContain = document.createElement("span");
			var DefAttEffective = document.createElement("li");
			var DefAttEffectiveTitle = document.createElement("h6");
			var DefAttEffectiveContain = document.createElement("span");
			var DefAttSuperIneffective = document.createElement("li");
			var DefAttSuperIneffectiveTitle = document.createElement("h6");
			var DefAttSuperIneffectiveContain = document.createElement("span");
			var DefAttIneffective = document.createElement("li");
			var DefAttIneffectiveTitle = document.createElement("h6");
			var DefAttIneffectiveContain = document.createElement("span");
			var DefAttImmune = document.createElement("li");
			var DefAttImmuneTitle = document.createElement("h6");
			var DefAttImmuneContain = document.createElement("span");
			var DefAttNormal = document.createElement("li");
			var DefAttNormalTitle = document.createElement("h6");
			var DefAttNormalContain = document.createElement("span");

			DefAtt.setAttribute("name",defAtt[i]);
			DefAttSuperEffective.setAttribute("name","super effective");
			DefAttEffective.setAttribute("name","effective");
			DefAttSuperIneffective.setAttribute("name","super ineffective");
			DefAttIneffective.setAttribute("name","ineffective");
			DefAttImmune.setAttribute("name","immune");
			DefAttNormal.setAttribute("name","normal");


			DefAttSuperEffectiveTitle.innerText = "4× • Super Effective";
			DefAttEffectiveTitle.innerText = "2× • Super Effective";
			DefAttIneffectiveTitle.innerText = "½ • Not Very Effective";
			DefAttSuperIneffectiveTitle.innerText = "¼ • Not Very Effective";
			DefAttImmuneTitle.innerText = "0× • No Effect";
			DefAttNormalTitle.innerText = "1× • Normal Effectiveness";


			typeSidebarDescriptionAttackDefend.appendChild(DefAtt);
			DefAtt.appendChild(DefAttSuperEffective);
			DefAttSuperEffective.appendChild(DefAttSuperEffectiveTitle);
			DefAttSuperEffective.appendChild(DefAttSuperEffectiveContain);
			DefAtt.appendChild(DefAttEffective);
			DefAttEffective.appendChild(DefAttEffectiveTitle);
			DefAttEffective.appendChild(DefAttEffectiveContain);
			DefAtt.appendChild(DefAttNormal);
			DefAttNormal.appendChild(DefAttNormalTitle);
			DefAttNormal.appendChild(DefAttNormalContain);
			DefAtt.appendChild(DefAttIneffective);
			DefAttIneffective.appendChild(DefAttIneffectiveTitle);
			DefAttIneffective.appendChild(DefAttIneffectiveContain);
			DefAtt.appendChild(DefAttSuperIneffective);
			DefAttSuperIneffective.appendChild(DefAttSuperIneffectiveTitle);
			DefAttSuperIneffective.appendChild(DefAttSuperIneffectiveContain);
			DefAtt.appendChild(DefAttImmune);
			DefAttImmune.appendChild(DefAttImmuneTitle);
			DefAttImmune.appendChild(DefAttImmuneContain);
			
			
			let cont = ""

			if (i == 0) {
				cont = "when used by a Move with following types:";
			}
			else if (i == 1) {
				cont = "when used against an opposing Pokémon with following types:";
			}

			DefAttSuperEffectiveTitle.setAttribute("title","Super Effective (4×) "+cont);
			DefAttEffectiveTitle.setAttribute("title","Super Effective (2×) "+cont);
			DefAttIneffectiveTitle.setAttribute("title","Not Very Effective (½) "+cont);
			DefAttSuperIneffectiveTitle.setAttribute("title","Not Very Effective (¼) "+cont);
			DefAttImmuneTitle.setAttribute("title","No Effect (0×) "+cont);
			DefAttNormalTitle.setAttribute("title","Normal Effectiveness (1×) "+cont);
 		}

		for(var i = 0; i < defAtt.length; i++) {
			var typeSidebarDescriptionSelectorInput = document.createElement("input");
			var typeSidebarDescriptionSelectorLabel = document.createElement("label");
			var typeSidebarDescriptionSelectorLabelText = document.createElement("p");
			typeSidebarDescriptionSelectorInput.setAttribute("type","radio");
			typeSidebarDescriptionSelectorInput.setAttribute("value", defAtt[i]);
			typeSidebarDescriptionSelectorInput.setAttribute("name","type-selector");
			typeSidebarDescriptionSelectorInput.setAttribute("id","type-selector" + i);
			typeSidebarDescriptionSelectorInput.setAttribute("autocomplete","off");
			typeSidebarDescriptionSelectorLabel.setAttribute("for","type-selector" + i);
			typeSidebarDescriptionSelectorLabelText.innerText = defAtt[i];
			

			typeSidebarDescriptionSelectorInput.setAttribute("onclick","this.parentElement.parentElement.parentElement.setAttribute('data-type','"+defAtt[i]+"');typeSwitch();");


			typeSidebarDescriptionSelector.appendChild(typeSidebarDescriptionSelectorInput);
			typeSidebarDescriptionSelector.appendChild(typeSidebarDescriptionSelectorLabel);
			typeSidebarDescriptionSelectorLabel.appendChild(typeSidebarDescriptionSelectorLabelText);

			if(i == 0) {
				typeSidebarDescriptionSelectorInput.setAttribute("checked","");
				typeSidebar.setAttribute("data-type",defAtt[i]);
			}
	
		}



		let table = document.createElement("table");
		table.setAttribute("name","matrix");
		typeContent.appendChild(table)

		let tempTypes = [...Types];
		tempTypes.unshift("");

		for(var q = 0; q < tempTypes.length; q++) {
			let tr = document.createElement("tr");
			tr.setAttribute("name",tempTypes[q]);
			table.appendChild(tr);

			for(var r = 0; r < tempTypes.length; r++) {

				let tempAdv = calcTypeAdv([tempTypes[q].toUpperCase()],"Attacking");

				let th = document.createElement("th");
				tr.appendChild(th);
				
			
	
				if (q == 0 || r == 0) {
					let val = "";
					if (q == 0) {
						val = tempTypes[r];
					}
					else if (r == 0) {
						val = tempTypes[q];
					}

					if (val != "") {
						let wrap = document.createElement("span"); 
						let txt = document.createElement("p");
						let img = document.createElement("img");
						wrap.setAttribute("name",val);
						txt.innerText = val;
						img.src = "./media/Images/Misc/Type/Icon/"+MEDIAPath_Type_Icon+"/"+val+".png";
						img.setAttribute("onload","this.previousElementSibling.style.display = 'none'");
						img.setAttribute("onerror","this.style.display = 'none'");
						th.appendChild(wrap);
						wrap.appendChild(txt);
						wrap.appendChild(img);
						th.style.background = "var(--type"+val+")";
						th.setAttribute("name",val);

						wrap.addEventListener("click",typeSet);

					}

				}
				else {
					let val = tempAdv[r-1]["Value"];
					val = val+"×";
					if (val == "0.5×") {
						val = "½";
					}

					let txt = document.createElement("small");
					txt.innerText = val;
					th.appendChild(txt);


					if (val.includes("0")) {
						th.title = "Immune";
					}
					else if (val.includes("½")) {
						th.title = "Not Very Effective";
					}
					else if (val.includes("1")) {
						th.title = "Normal Effectiveness";
					}
					else if (val.includes("2")) {
						th.title = "Super Effective";
					}

				}
			
			

		
				
			}
		}
	
	}



	function createDamageCalc() {
		var toolSectionContentDMGOuter = document.createElement("div");
		var toolSectionContentDMG = document.createElement("div");
		var toolSectionContentDMGOptions = document.createElement("div");
		var toolSectionContentDMGOptionsTop = document.createElement("div");

		var toolSectionContentDMGOptionsBattles = document.createElement("span");
		var toolSectionContentDMGOptionsBattlesSelect = document.createElement("select");

		var toolSectionContentDMGOptionsTitle = document.createElement("span");

		var toolSectionContentDMGOptionsContent = document.createElement("div");
		var toolSectionContentDMGOptionsContentPok = document.createElement("ol");
		var toolSectionContentDMGOptionsContentTeam = document.createElement("ol");

		var toolSectionContentDMGOptionsStats = document.createElement("div");
		var toolSectionContentDMGOptionsStatsContent = document.createElement("ol");


		var toolSectionContentDMGField = document.createElement("div");
		var toolSectionContentDMGContent = document.createElement("div");
		var toolSectionContentDMGResult = document.createElement("div");
		var toolSectionContentDMGResultContent = document.createElement("div");

		var toolSectionContentDMGResultParty = document.createElement("span");

		var toolSectionContentDMGMenu = document.createElement("div");

		var toolSectionContentDMGMenuRoll = document.createElement("div");
		var toolSectionContentDMGMenuMove = document.createElement("div");
		var toolSectionContentDMGMenuSpecific = document.createElement("div");

		var toolSectionContentDMGMenuSpecificTop = document.createElement("span");
		var toolSectionContentDMGMenuSpecificBottom = document.createElement("span");

		var toolSectionContentDMGMenuMoveTop = document.createElement("span");
		var toolSectionContentDMGMenuMoveBottom = document.createElement("span");

		var toolSectionContentDMGMenuMoveSelect = document.createElement("select");
		var toolSectionContentDMGMenuSpecificTopInput = document.createElement("input");
		var toolSectionContentDMGMenuSpecificTopSelect = document.createElement("select");

		var toolSectionContentDMGMenuMoveBottomDamage = document.createElement("span");
		var toolSectionContentDMGMenuMoveBottomDamageTitle = document.createElement("h6");
		var toolSectionContentDMGMenuMoveBottomDamageText = document.createElement("small");
		var toolSectionContentDMGMenuMoveBottomAccuracy = document.createElement("span");
		var toolSectionContentDMGMenuMoveBottomAccuracyTitle = document.createElement("h6");
		var toolSectionContentDMGMenuMoveBottomAccuracyText = document.createElement("small");
		var toolSectionContentDMGMenuMoveBottomCritical = document.createElement("span");
		var toolSectionContentDMGMenuMoveBottomCriticalTitle = document.createElement("h6");
		var toolSectionContentDMGMenuMoveBottomCriticalText = document.createElement("small");

		var toolSectionContentDMGMenuMoveBottomTypeCategory = document.createElement("span");

		var toolSectionContentDMGMenuMoveBottomType = document.createElement("span");
		var toolSectionContentDMGMenuMoveBottomTypeImg = document.createElement("img");
		var toolSectionContentDMGMenuMoveBottomTypeText = document.createElement("small");

		var toolSectionContentDMGMenuMoveBottomCategory = document.createElement("span");
		var toolSectionContentDMGMenuMoveBottomCategoryImg = document.createElement("img");
		var toolSectionContentDMGMenuMoveBottomCategoryText = document.createElement("small");


		var toolSectionContentDMGMenuRollTop = document.createElement("span");
		var toolSectionContentDMGMenuRollRangeTextTopLeft = document.createElement("span");
		var toolSectionContentDMGMenuRollRangeTextTopRight = document.createElement("span");
		var toolSectionContentDMGMenuRollRangeTextBottomLeft = document.createElement("small");
		var toolSectionContentDMGMenuRollRangeTextBottomCenter = document.createElement("small");
		var toolSectionContentDMGMenuRollRangeTextBottomRight = document.createElement("small");
		var toolSectionContentDMGMenuRollRange = document.createElement("input");
		
		var toolSectionContentDMGMenuRollBottom = document.createElement("span");
		var toolSectionContentDMGMenuRollCritical = document.createElement("label");
		var toolSectionContentDMGMenuRollCriticalText = document.createElement("h6");
		var toolSectionContentDMGMenuRollCriticalInput = document.createElement("input");


		toolSectionContentDMGOptionsTop.setAttribute("name","header");

		toolSectionContentDMGMenuSpecificTopInput.setAttribute("type","number");
		toolSectionContentDMGMenuSpecificTopInput.setAttribute("min","1");
		toolSectionContentDMGMenuSpecificTopInput.setAttribute("value","1");
		toolSectionContentDMGMenuSpecificTopInput.setAttribute("max","1");

		toolSectionContentDMGMenuMoveBottomType.setAttribute("name","type");
		toolSectionContentDMGMenuMoveBottomTypeImg.setAttribute("onload","this.style.removeProperty('display');this.previousElementSibling.style.display='none';");
		toolSectionContentDMGMenuMoveBottomTypeImg.setAttribute("onerror","this.style.display='none';this.previousElementSibling.style.removeProperty('display');");

		toolSectionContentDMGMenuMoveBottomCategory.setAttribute("name","category");
		toolSectionContentDMGMenuMoveBottomCategoryImg.setAttribute("onload","this.style.removeProperty('display');this.previousElementSibling.style.display='none';");
		toolSectionContentDMGMenuMoveBottomCategoryImg.setAttribute("onerror","this.style.display='none';this.previousElementSibling.style.removeProperty('display');");


		toolSectionContentDMGMenuMoveBottomDamage.setAttribute("name","power");
		toolSectionContentDMGMenuMoveBottomDamageTitle.innerText = "Power";
		toolSectionContentDMGMenuMoveBottomDamageText.innerText = "";

		toolSectionContentDMGMenuMoveBottomAccuracy.setAttribute("name","accuracy");
		toolSectionContentDMGMenuMoveBottomAccuracyTitle.innerText = "Accuracy";
		toolSectionContentDMGMenuMoveBottomAccuracyText.innerText = "";

		toolSectionContentDMGMenuMoveBottomCritical.setAttribute("name","critical");
		toolSectionContentDMGMenuMoveBottomCriticalTitle.innerText = "Critical";
		toolSectionContentDMGMenuMoveBottomCriticalText.innerText = ""
		

		toolSectionContentDMGMenuRoll.setAttribute("name","roll");

		toolSectionContentDMGMenuRollCritical.setAttribute("name","critical");
		toolSectionContentDMGMenuRollCritical.setAttribute("for","dmg-critical")
		toolSectionContentDMGMenuRollCriticalText.innerText = "Critical";
		toolSectionContentDMGMenuRollCriticalInput.setAttribute("id","dmg-critical")
		toolSectionContentDMGMenuRollCriticalInput.setAttribute("name","dmg-critical")
		toolSectionContentDMGMenuRollCriticalInput.setAttribute("type","checkbox");

		toolSectionContentDMGMenuMove.setAttribute("name","move");
		toolSectionContentDMGMenuSpecific.setAttribute("name","spec");


		toolSectionContentDMGMenuRollRangeTextTopLeft.setAttribute("name","low");
		toolSectionContentDMGMenuRollRangeTextTopLeft.innerHTML = "<h6>Low Roll</h6>";
		toolSectionContentDMGMenuRollRangeTextTopRight.setAttribute("name","high");
		toolSectionContentDMGMenuRollRangeTextTopRight.innerHTML = "<h6>High Roll</h6>";
		toolSectionContentDMGMenuRollRangeTextBottomLeft.setAttribute("name","min");
		toolSectionContentDMGMenuRollRangeTextBottomCenter.setAttribute("name","val");
		toolSectionContentDMGMenuRollRangeTextBottomRight.setAttribute("name","max");


		toolSectionContentDMGMenuRollRange.setAttribute("type","range");
		toolSectionContentDMGMenuRollRange.setAttribute("name","dmg-roll-range")
		toolSectionContentDMGMenuRollRange.setAttribute("id","dmg-roll-range")
	

		toolSectionContentDMGOptionsContentPok.setAttribute("name","pokémon");
		toolSectionContentDMGOptionsContentTeam.setAttribute("name","team");

		toolSectionContentDMGOuter.setAttribute("id","dmg");
		toolSectionContentDMGOuter.setAttribute("name","Damage Calculator (Development)");

		toolSectionContentDMGContent.setAttribute("name","content");

		toolSectionContentDMGResult.setAttribute("name","result");
		toolSectionContentDMGResultContent.classList.add("scroll");
		toolSectionContentDMGOptions.setAttribute("name","options");
		toolSectionContentDMGMenu.setAttribute("name","menu");

		toolSectionContentDMGResultContent.setAttribute("name","battle");
	
		toolSectionContentDMGOptionsContent.classList.add("scroll");
		toolSectionContentDMGField.setAttribute("name","field");
		toolSectionContentDMGOptionsStatsContent.setAttribute("name","stats");

		toolSectionContentDMGResultParty.setAttribute("name","party");

		toolSectionContent.appendChild(toolSectionContentDMGOuter);
		toolSectionContentDMGOuter.appendChild(toolSectionContentDMG);
		toolSectionContentDMG.appendChild(toolSectionContentDMGContent);
		toolSectionContentDMGContent.appendChild(toolSectionContentDMGField);
		toolSectionContentDMGContent.appendChild(toolSectionContentDMGResult);
		toolSectionContentDMGResult.appendChild(toolSectionContentDMGResultContent);
		toolSectionContentDMGResult.appendChild(toolSectionContentDMGResultParty);
		toolSectionContentDMGContent.appendChild(toolSectionContentDMGMenu);
		toolSectionContentDMG.appendChild(toolSectionContentDMGOptions);
		toolSectionContentDMGOptions.appendChild(toolSectionContentDMGOptionsTop);
		toolSectionContentDMGOptionsTop.appendChild(toolSectionContentDMGOptionsBattles);
		toolSectionContentDMGOptionsBattles.appendChild(toolSectionContentDMGOptionsBattlesSelect);
		toolSectionContentDMGOptionsTop.appendChild(toolSectionContentDMGOptionsTitle);




		toolSectionContentDMGOptions.appendChild(toolSectionContentDMGOptionsContent);
		toolSectionContentDMGOptionsContent.appendChild(toolSectionContentDMGOptionsContentPok);
		toolSectionContentDMGOptionsContent.appendChild(toolSectionContentDMGOptionsContentTeam);

		toolSectionContentDMGOptions.appendChild(toolSectionContentDMGOptionsStats);
		toolSectionContentDMGOptionsStats.appendChild(toolSectionContentDMGOptionsStatsContent);
		
		
		
		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuRoll)
		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuMove)

		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuSpecific)
		toolSectionContentDMGMenuSpecific.appendChild(toolSectionContentDMGMenuSpecificTop)
		toolSectionContentDMGMenuSpecific.appendChild(toolSectionContentDMGMenuSpecificBottom)

		toolSectionContentDMGMenuSpecificTop.appendChild(toolSectionContentDMGMenuSpecificTopSelect);
		toolSectionContentDMGMenuSpecificTop.appendChild(toolSectionContentDMGMenuSpecificTopInput);

		toolSectionContentDMGMenuMove.appendChild(toolSectionContentDMGMenuMoveTop);
		toolSectionContentDMGMenuMove.appendChild(toolSectionContentDMGMenuMoveBottom);
		toolSectionContentDMGMenuMoveTop.appendChild(toolSectionContentDMGMenuMoveSelect);


		toolSectionContentDMGMenuMoveBottom.appendChild(toolSectionContentDMGMenuMoveBottomDamage);
		toolSectionContentDMGMenuMoveBottomDamage.appendChild(toolSectionContentDMGMenuMoveBottomDamageTitle);
		toolSectionContentDMGMenuMoveBottomDamage.appendChild(toolSectionContentDMGMenuMoveBottomDamageText);
		toolSectionContentDMGMenuMoveBottom.appendChild(toolSectionContentDMGMenuMoveBottomAccuracy);
		toolSectionContentDMGMenuMoveBottomAccuracy.appendChild(toolSectionContentDMGMenuMoveBottomAccuracyTitle);
		toolSectionContentDMGMenuMoveBottomAccuracy.appendChild(toolSectionContentDMGMenuMoveBottomAccuracyText);
		toolSectionContentDMGMenuMoveBottom.appendChild(toolSectionContentDMGMenuMoveBottomCritical);
		toolSectionContentDMGMenuMoveBottomCritical.appendChild(toolSectionContentDMGMenuMoveBottomCriticalTitle);
		toolSectionContentDMGMenuMoveBottomCritical.appendChild(toolSectionContentDMGMenuMoveBottomCriticalText);
	

		toolSectionContentDMGMenuMoveBottom.appendChild(toolSectionContentDMGMenuMoveBottomTypeCategory);
		toolSectionContentDMGMenuMoveBottomTypeCategory.appendChild(toolSectionContentDMGMenuMoveBottomType);
		toolSectionContentDMGMenuMoveBottomType.appendChild(toolSectionContentDMGMenuMoveBottomTypeText);
		toolSectionContentDMGMenuMoveBottomType.appendChild(toolSectionContentDMGMenuMoveBottomTypeImg);
		toolSectionContentDMGMenuMoveBottomTypeCategory.appendChild(toolSectionContentDMGMenuMoveBottomCategory);
		toolSectionContentDMGMenuMoveBottomCategory.appendChild(toolSectionContentDMGMenuMoveBottomCategoryText);
		toolSectionContentDMGMenuMoveBottomCategory.appendChild(toolSectionContentDMGMenuMoveBottomCategoryImg);

		toolSectionContentDMGMenuRoll.appendChild(toolSectionContentDMGMenuRollTop)
		toolSectionContentDMGMenuRollTop.appendChild(toolSectionContentDMGMenuRollRangeTextTopLeft)
		toolSectionContentDMGMenuRollTop.appendChild(toolSectionContentDMGMenuRollRangeTextTopRight)
		toolSectionContentDMGMenuRollTop.appendChild(toolSectionContentDMGMenuRollRange)
		toolSectionContentDMGMenuRollTop.appendChild(toolSectionContentDMGMenuRollRangeTextBottomLeft)
		toolSectionContentDMGMenuRollTop.appendChild(toolSectionContentDMGMenuRollRangeTextBottomCenter)
		toolSectionContentDMGMenuRollTop.appendChild(toolSectionContentDMGMenuRollRangeTextBottomRight)
		toolSectionContentDMGMenuRoll.appendChild(toolSectionContentDMGMenuRollBottom)
		toolSectionContentDMGMenuRollBottom.appendChild(toolSectionContentDMGMenuRollCritical);
		toolSectionContentDMGMenuRollCritical.appendChild(toolSectionContentDMGMenuRollCriticalText);
		toolSectionContentDMGMenuRollCritical.appendChild(toolSectionContentDMGMenuRollCriticalInput);

		toolSectionContentDMGMenuMoveBottomTypeText.style.display = "none";
		toolSectionContentDMGMenuMoveBottomCategoryText.style.display = "none";

		toolSectionContentDMGMenuRollRange.addEventListener("input",DMGCalcStart);
		toolSectionContentDMGMenuRollRange.addEventListener("input",function(){let v = ((this.value-this.min)/(this.max-this.min))*100;let c = "var(--colorBlue)";let b = "var(--color_90)";this.style.background = `linear-gradient(to right, ${c} 0%, ${c} ${v}%, ${b} ${v}%, ${b} 100%)`; let z = this.parentElement.querySelector(":scope *[name='val']"); z.innerText = (this.value-this.min);z.innerText = z.innerText+" ("+parseInt(v)+"%)";})

		toolSectionContentDMGMenuRollCriticalInput.addEventListener("change",DMGCalcStart);

		var toolSectionContentDMGImport = document.createElement("figure");
		var toolSectionContentDMGImportText = document.createElement("h5");
		toolSectionContentDMGImport.setAttribute("name","import");
		toolSectionContentDMGImportText.innerText = "⮟";
		toolSectionContentDMGResult.appendChild(toolSectionContentDMGImport);
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

			toolSectionContentDMGImportWrapTrigger.addEventListener("click",DMGFieldExport);

		}

		function DMGFieldExport() {
			let val = findUpTag(this,"SPAN").querySelector(":scope small").innerText;

			let divBases = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name] > div[data-string]");
			let pokBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] span[name] > ul[name]");
			let teamBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='team'] span[name]");
			let statsBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] span[name] > ul[name]");
			let partyBases = document.querySelectorAll("#contain > div#tool div#dmg span[name='party'] span[name]");


			if (val == "Import Pokémon") {
				DMGSetDataString(divBases);
			}
			if (val == "Copy Data Strings") {
				var res = [];
				for(var t = 0; t < divBases.length; t++) {
					var ds = divBases[t].getAttribute("data-string"); 
					if (ds != undefined && ds != "") {
						res.push(ds)
					}
				}
				
				var resStr = res.join("\n");

				if (res.length > 0 && resStr.includes("pok:") && !resStr.includes("pok:|") && !resStr.includes("pok:\n")) {
					navigator.clipboard.writeText(resStr);
					consoleText("Copied!");
				}
			}
		}

		var toolSectionContentDMGReset = document.createElement("figure");
		var toolSectionContentDMGResetText = document.createElement("h5");
		toolSectionContentDMGReset.setAttribute("type","scale");
		toolSectionContentDMGReset.setAttribute("name","reset");
		toolSectionContentDMGResetText.innerText = "❌";
		toolSectionContentDMGResult.appendChild(toolSectionContentDMGReset);
		toolSectionContentDMGReset.appendChild(toolSectionContentDMGResetText);
		toolSectionContentDMGReset.addEventListener("click",function(){var x = findUpTag(this,"DIV"); var z = x.querySelectorAll(":scope div[data-string]"); var lock = confirm("The Pokémon's data will not be saved.\nDo you want to continue?"); if (lock) {for(var p = 0; p < z.length; p++) {z[p].setAttribute("data-string","");var tar = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+z[p].parentElement.getAttribute("name")+"'] ul[name='"+z[p].getAttribute("name")+"']");DMGClearData(tar);}}})




		var tempMoves = [];

		for(var m = 0; m < finaldata["Moves"]["Reference"].length; m++) {
			if(finaldata["Moves"]["Reference"][m][JSONPath_MoveReference] == "true") {
				if (finaldata["Moves"]["Group"][m]["Group"] != "Z-Move" && finaldata["Moves"]["Group"][m]["Group"] != "Max Move") {
					tempMoves.push(finaldata["Moves"]["Reference"][m]["Name_"+JSONPath_MoveName])
				}
			}
		}

		tempMoves.sort();

		for(var m = 0; m < tempMoves.length; m++) {
			let moveCategory = returnArrValue(finaldata["Moves"]["Category"],"Name_"+JSONPath_MoveName,"Category_"+JSONPath_MoveCategory,tempMoves[m]);
			moveCategory = undwsDel(moveCategory,"")
			if (moveCategory != undefined && moveCategory != "Status") {
				var toolSectionContentDMGMenuMoveTopOption = document.createElement("option");
				toolSectionContentDMGMenuMoveTopOption.setAttribute("value",tempMoves[m]);
				toolSectionContentDMGMenuMoveTopOption.innerText = tempMoves[m];
				toolSectionContentDMGMenuMoveSelect.appendChild(toolSectionContentDMGMenuMoveTopOption);


				let movd = formatMoveData(tempMoves[m]);
				movd = undDel(movd,"");
				toolSectionContentDMGMenuMoveTopOption.title = movd;

				toolSectionContentDMGMenuMoveTopOption.style.background = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,tempMoves[m])+")";
			}
		}

		if (toolSectionContentDMGMenuMoveSelect.querySelector(":scope option[value='Pound']") != undefined) {

			toolSectionContentDMGMenuMoveSelect.value = "Pound";
			toolSectionContentDMGMenuMoveSelect.style.color = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,toolSectionContentDMGMenuMoveSelect.value)+")";
			toolSectionContentDMGMenuMoveBottomTypeImg.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+returnArrValue(finaldata["Moves"]["Type"],"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,toolSectionContentDMGMenuMoveSelect.value)+".png";
			toolSectionContentDMGMenuMoveBottomTypeText.innerText = returnArrValue(finaldata["Moves"]["Type"],"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,toolSectionContentDMGMenuMoveSelect.value);
			toolSectionContentDMGMenuMoveBottomCategoryImg.src = "./media/Images/Misc/Type/Category/"+MEDIAPath_Type_Category+"/"+returnArrValue(finaldata["Moves"]["Category"],"Name_"+JSONPath_MoveName,"Category_"+JSONPath_MoveCategory,toolSectionContentDMGMenuMoveSelect.value)+".png";
			toolSectionContentDMGMenuMoveBottomCategoryText.innerText = returnArrValue(finaldata["Moves"]["Category"],"Name_"+JSONPath_MoveName,"Category_"+JSONPath_MoveCategory,toolSectionContentDMGMenuMoveSelect.value);
		}
	
		toolSectionContentDMGMenuSpecificTopInput.addEventListener("change",DMGCalcStart);
		toolSectionContentDMGMenuSpecificTopSelect.addEventListener("change",DMGCalcStart);
		toolSectionContentDMGMenuMoveSelect.addEventListener("change",DMGSetInfo);
		toolSectionContentDMGMenuMoveSelect.addEventListener("change",DMGCalcStart);
		toolSectionContentDMGMenuMoveSelect.addEventListener("change",function(){
			let movd = formatMoveData(this.value); movd = undDel(movd,"");this.title = movd;this.style.color = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,this.value)+")";
		});


		let movd = formatMoveData(toolSectionContentDMGMenuMoveSelect.value);
		movd = undDel(movd,"");
		toolSectionContentDMGMenuMoveSelect.title = movd;
	




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

		toolSectionContentDMGOptionsBattlesSelect.setAttribute("teams",battleVariation[0]["Teams"])
		toolSectionContentDMGOptionsBattlesSelect.setAttribute("pokémon",battleVariation[0]["Pokémon"])
		toolSectionContentDMGOptionsBattlesSelect.setAttribute("name",0)


		toolSectionContentDMGOptionsBattlesSelect.addEventListener("change",function(){const preval = this.getAttribute("name");let x = this.value;let el = this.querySelector(":scope option[value='"+x+"']");let keys = el.getAttributeNames();for(var q = 0; q < keys.length; q++) {let val1 = keys[q];let val2 = el.getAttribute(keys[q]);this.setAttribute(val1,val2);}buildDMG(preval)})
		toolSectionContentDMGOptionsBattlesSelect.addEventListener("change",function() {document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div").setAttribute("data-battle",this.value)})
		
		
		buildDMG();







		$(toolSectionContentDMGResultContent).sortable({
			stop: function(e,ui) {
				DMGMatchPosition();
				DMGCalcStart();
			},
			handle:"> span",
			cursor: "grabbing",
			axis: "x",
			scroll: false,
			containment: "parent",
		});




	}
	createTimer();
	createRNG();
	createType();
	createDamageCalc();


	var toolOptionsTitle = ["Damage Calculator (Development)","Type Advantage","Timers","Random Number Generator"];

	// Counter, Damage Calculator, Catch Rate Calculator, Shiny Odds Calculator, Item/Move/Type/Ability/Location Checklist

	for(var q = 0; q < toolOptionsTitle.length; q++) {
		var toolSectionListOptionsInput = document.createElement("input");
		var toolSectionListOptionsLabel = document.createElement("label");
		toolSectionListOptionsInput.setAttribute("type","radio");
		toolSectionListOptionsInput.setAttribute("name","tool-options");
		toolSectionListOptionsInput.setAttribute("id","tool-options-" + q);
		toolSectionListOptionsInput.setAttribute("autocomplete","off");
		toolSectionListOptionsInput.value = toolOptionsTitle[q];
		toolSectionListOptionsLabel.setAttribute("for","tool-options-" + q);
		toolSectionListOptionsLabel.setAttribute("type","medium");
		toolSectionListOptionsLabel.innerHTML = toolOptionsTitle[q];
		toolSectionListOptions.appendChild(toolSectionListOptionsInput);
		toolSectionListOptions.appendChild(toolSectionListOptionsLabel);
		toolSectionListOptionsInput.addEventListener("click", toolOptionsSelector);

		function toolOptionsSelector() {
			toolSectionHeaderTitleText.innerText = this.value;
			var toolContents = document.querySelectorAll("#tool section[name='content'] > div[name]");
			var toolContent = document.querySelectorAll("#tool section[name='content'] > div[name='"+this.value+"']");
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

	var base = document.querySelector('#contain div#tool > section[name="content"] > div#timer > *[name="countdown"]')
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

	var base = document.querySelector('#contain div#tool > section[name="content"] > div[name="Timers"] > *[name="stopwatch"]')

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

	var base = document.querySelector("#contain > div#tool section[name='content'] *#rng");

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
		document.querySelector("#contain > div#tool div#timer > *[name='stopwatch']").style.display = "block";
		document.querySelector("#contain > div#tool div#timer > *[name='countdown']").style.display = "none";
		document.querySelector("#contain > div#tool div#timer > *[name='countdown'] *[name='reset']").click();
	}
	if(document.querySelector("#timerselector2").checked == true) {
		document.querySelector("#contain > div#tool div#timer > *[name='stopwatch']").style.display = "none";
		document.querySelector("#contain > div#tool div#timer > *[name='countdown']").style.display = "block";
		document.querySelector("#contain > div#tool div#timer > *[name='stopwatch'] *[name='reset']").click();
	}
}

$("body").click(function(event) {
	if(!$(event.target).closest("#contain div#tool > section[name='content'] > div[name='dmg'] > div ul > figure[name='export']").length && !$(event.target).is("#contain div#tool > section[name='content'] > div[name='dmg'] > div ul > figure[name='export']")) {
		$("#contain div#tool > section[name='content'] > div[name='dmg'] > div ul > figure[name='export']").removeClass("active");
	}
	if(!$(event.target).closest("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > figure[name='import']").length && !$(event.target).is("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > figure[name='import']")) {
		$("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > figure[name='import']").removeClass("active");
	}
	if(!$(event.target).closest("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span > span > span > span").length && !$(event.target).is("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span > span > span > span") && !$(event.target).closest("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span figure.open").length && !$(event.target).is("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span figure.open") && $(event.target).closest("#contain div#tool").length) {
		$("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span span[name]").removeClass("active");
	}

	if(!$(event.target).closest("#contain > div#tool div#type *[name='sidebar'] *[name='title'] > span").length && !$(event.target).is("#contain > div#tool div#type *[name='sidebar'] *[name='title'] > span")) {
		$("#contain > div#tool div#type *[name='sidebar'] *[name='title'] > span").removeClass("active");
	}
});




function typeSet() {

	let val = this.getAttribute("name");
	let condition = document.querySelector("#contain > div#tool div#type *[name='sidebar']").getAttribute("data-type");
	let els;

	if (condition == "Defending") {
		els = document.querySelectorAll("#contain > div#tool div#type *[name='sidebar'] *[name='title'] > span > span");
	}
	else if (condition == "Attacking") {
		els = document.querySelectorAll("#contain > div#tool div#type *[name='sidebar'] *[name='title'] > span:first-child > span");
	}

	let el1 = document.querySelector("#contain > div#tool div#type *[name='sidebar'] *[name='title'] > span:first-child > span");
	let el2 = document.querySelector("#contain > div#tool div#type *[name='sidebar'] *[name='title'] > span:last-child > span");
	el1.parentElement.classList.remove("active");
	el2.parentElement.classList.remove("active");


	let check1 = false;
	let check2 = false;
	for(var q = 0; q < els.length; q++) {
		let img = els[q].querySelector(":scope img")
		if (q == 0) {
			if (img == undefined) {
				check1 = true;
			}
		}
		else if (q == 1) {
			if (img == undefined) {
				check2 = true;
			}
		}

		if (img != undefined && img.getAttribute("name").toUpperCase() == val.toUpperCase()) {
			check1 = false;
			check2 = false;
			return;
		}
	}
	


	if (check1) {
		let img = document.createElement("img");
		img.src = "./media/Images/Misc/Type/Symbol/"+MEDIAPath_Type_Symbol+"/"+val+".png";
		img.setAttribute("name",val);
		img.title = val;
		img.setAttribute("onclick","this.remove();typeSwitch();");
		els[0].prepend(img);
		typeSwitch();
	}
	else if (check2) {
		let img = document.createElement("img");
		img.src = "./media/Images/Misc/Type/Symbol/"+MEDIAPath_Type_Symbol+"/"+val+".png";
		img.setAttribute("name",val);
		img.title = val;
		img.setAttribute("onclick","this.remove();typeSwitch();");
		els[1].prepend(img);
		typeSwitch();
	}
}

function typeSwitch() {
	let types = [];

	let typesPath;
	let base;
	let drops;

	let condition = document.querySelector("#contain > div#tool div#type *[name='sidebar']").getAttribute("data-type");

	if (condition == "Defending") {
		base = document.querySelector("#contain > div#tool div#type *[name='sidebar'] *[name='description'] ul[name='Defending']");
		typesPath = document.querySelectorAll("#contain > div#tool div#type *[name='sidebar'][data-type='Defending'] *[name='title'] > span > span img");
		drops = document.querySelectorAll("#contain > div#tool div#type *[name='sidebar'][data-type='Defending'] *[name='title'] > span > div > b[name]")
	}
	else if (condition == "Attacking") {
		base = document.querySelector("#contain > div#tool div#type *[name='sidebar'] *[name='description'] ul[name='Attacking']");
		typesPath = document.querySelectorAll("#contain > div#tool div#type *[name='sidebar'][data-type='Attacking'] *[name='title'] > span:first-child > span img");
		drops = document.querySelectorAll("#contain > div#tool div#type *[name='sidebar'][data-type='Attacking'] *[name='title'] > span:first-child > div > b[name]");
	}
		


	for(var q = 0; q < typesPath.length; q++) {
		types.push(typesPath[q].getAttribute("title").toUpperCase());
	}


	if (typesPath[0] != undefined && typesPath[1] != undefined && typesPath[0].getAttribute("name") == typesPath[1].getAttribute("name")) {
		typesPath[1].remove();
		typeSwitch();
		return;
	}

	let els = document.querySelectorAll("#contain > div#tool div#type *[name='sidebar'] *[name='description'] ul[name] > li[name] > span:last-child")
	for (var i = 0; i < els.length; i++) {
		els[i].innerHTML = "";
		els[i].parentElement.style.removeProperty("display");
	}



	for (var i = 0; i < drops.length; i++) {
		drops[i].style.removeProperty("display");
		for (var q = 0; q < types.length; q++) {
			if (drops[i].getAttribute("name") == titleCase(types[q])) {
				drops[i].style.display = "none";
			}
		}
	}



	if (types.length > 0) {
		console.log(types)
		
		let arr = calcTypeAdv(types,condition);

		let arrImmune = [];
		let arrSuperIneffective = [];
		let arrIneffective = [];
		let arrNormal = [];
		let arrEffective = [];
		let arrSuperEffective = [];

		for (var q = 0; q < arr.length; q++) {
			if (arr[q]["Value"] == 0) { // Immune
				arrImmune.push(arr[q]["Type"]);
			}
			if (arr[q]["Value"] == 0.25) { // Not Very Effective (¼)
				arrSuperIneffective.push(arr[q]["Type"]);
			}
			if (arr[q]["Value"] == 0.5) { // Not Very Effective (½)
				arrIneffective.push(arr[q]["Type"]);
			}
			if (arr[q]["Value"] == 1) { // Normal (0x)
				arrNormal.push(arr[q]["Type"]);
			}
			if (arr[q]["Value"] == 2) { // Super Effective (2x)
				arrEffective.push(arr[q]["Type"]);
			}
			if (arr[q]["Value"] == 4) { // Super Effective (4x)
				arrSuperEffective.push(arr[q]["Type"]);
			}
		}




		for (var q = 0; q < arrImmune.length; q++) {
			let val = titleCase(arrImmune[q]);
			let based = base.querySelector(":scope li[name='immune']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+val+".png";
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
		}


		for (var q = 0; q < arrSuperEffective.length; q++) {
			let val = titleCase(arrSuperEffective[q]);
			let based = base.querySelector(":scope li[name='super effective']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+val+".png";
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
		}

		for (var q = 0; q < arrEffective.length; q++) {
			let val = titleCase(arrEffective[q]);
			let based = base.querySelector(":scope li[name='effective']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+val+".png";
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
		}

		for (var q = 0; q < arrNormal.length; q++) {
			let val = titleCase(arrNormal[q]);
			let based = base.querySelector(":scope li[name='normal']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+val+".png";
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
		}

		for (var q = 0; q < arrIneffective.length; q++) {
			let val = titleCase(arrIneffective[q]);
			let based = base.querySelector(":scope li[name='ineffective']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+val+".png";
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
		}

		for (var q = 0; q < arrSuperIneffective.length; q++) {
			let val = titleCase(arrSuperIneffective[q]);
			let based = base.querySelector(":scope li[name='super ineffective']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = "./media/Images/Misc/Type/Text/"+MEDIAPath_Type_Text+"/"+val+".png";
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
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

