let createTool = function() {
	let toolOuter = document.createElement("div");
	let toolSectionList = document.createElement("section");
	let toolSectionListOptionsTitleOuter = document.createElement("div");
	let toolSectionListOptionsTitle = document.createElement("h3");
	let toolSectionListOptionsOuter = document.createElement("div");
	let toolSectionListOptions = document.createElement("ol");
	let toolSectionHeader = document.createElement("section");
	let toolSectionHeaderTitle = document.createElement("span");
	let toolSectionHeaderTitleText = document.createElement("h3");
	let toolSectionContent = document.createElement("section");
	let toolSectionContentTimersOuter = document.createElement("div");
	let toolSectionContentTimerSelectorOuter = document.createElement("div");
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


	let toolSectionHeaderGame = document.createElement("span");
	let toolSectionHeaderGameImage = document.createElement("img");
	toolSectionHeaderGameImage.src = getMedia([GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "")],[PATH_Game_Title])
	toolSectionHeaderGameImage.setAttribute("onerror","this.display='none'");
	toolSectionHeader.appendChild(toolSectionHeaderGame);
	toolSectionHeaderGame.appendChild(toolSectionHeaderGameImage);


	function createTimer() {
		let stopwatchcountdown = ["stopwatch","countdown"];
		for(let q = 0; q < stopwatchcountdown.length; q++) {
			let toolSectionContentTimerOuter = document.createElement("div");
			let toolSectionContentTimer = document.createElement("div");
			let toolSectionContentTimerPlay = document.createElement("b");
			let toolSectionContentTimerPlayText = document.createElement("h1");
			let toolSectionContentTimerPause = document.createElement("b");
			let toolSectionContentTimerPauseText = document.createElement("h1");
			let toolSectionContentTimerTime = document.createElement("data");
			let toolSectionContentTimerTimeText = document.createElement("h2");
			let toolSectionContentTimerSet = document.createElement("div");
			let toolSectionContentTimerSetSpan = document.createElement("span");
			let toolSectionContentTimerSetInputHours = document.createElement("input");
			let toolSectionContentTimerSetInputMinutes = document.createElement("input");
			let toolSectionContentTimerSetInputSeconds = document.createElement("input");
			let toolSectionContentTimerSetInputMilliseconds = document.createElement("input");
			let toolSectionContentTimerList = document.createElement("ul");
			let toolSectionContentTimerLaps = document.createElement("figure");
			let toolSectionContentTimerReset = document.createElement("figure");
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
		for(let q = 0; q < stopwatchcountdown.length; q++) {
			let x = q + 1;

			let toolSectionContentTimerSelectorInput = document.createElement("input");
			let toolSectionContentTimerSelectorLabel = document.createElement("label");
			let toolSectionContentTimerSelectorLabelText = document.createElement("h5");
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
		let toolSectionContentRNGOuter = document.createElement("div");
		let toolSectionContentRNG = document.createElement("div");
		let toolSectionContentRNGOptions = document.createElement("div");
		let toolSectionContentRNGOptionsTop = document.createElement("div");
		let toolSectionContentRNGOptionsIterations = document.createElement("span");
		let toolSectionContentRNGOptionsIterationsText = document.createElement("p");
		let toolSectionContentRNGOptionsIterationsInput = document.createElement("input");
		let toolSectionContentRNGOptionsTitle = document.createElement("span");
		let toolSectionContentRNGOptionsTitleIterations = document.createElement("span");
		let toolSectionContentRNGOptionsTitleIterationsText = document.createElement("p");
		let toolSectionContentRNGOptionsTitleMin = document.createElement("span");
		let toolSectionContentRNGOptionsTitleMinText = document.createElement("p");
		let toolSectionContentRNGOptionsTitleMax = document.createElement("span");
		let toolSectionContentRNGOptionsTitleMaxText = document.createElement("p");
		let toolSectionContentRNGOptionsUl = document.createElement("ul");
		let toolSectionContentRNGOptionsExecute = document.createElement("span");
		let toolSectionContentRNGOptionsExecuteButton = document.createElement("button");
		let toolSectionContentRNGResult = document.createElement("div");

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


		let typeOuter = document.createElement("div");
		let typeContent = document.createElement("div");
		let typeSidebar = document.createElement("div");
		let typeSidebarTitle = document.createElement("div");
		let typeSidebarDescription = document.createElement("div");
		let typeSidebarDescriptionSelector = document.createElement("div");
		let typeSidebarDescriptionAttackDefend = document.createElement("div");

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




	

		for(let i = 0; i < 2; i++) {
			let typeSidebarTitleWrap = document.createElement("span");
			let typeSidebarTitleInner = document.createElement("span");
			let typeSidebarTitleTrigger = document.createElement("b");
			let typeSidebarTitleTriggerText = document.createElement("strong");
			let typeSidebarTitleDrop = document.createElement("div");
			typeSidebarTitleTriggerText.innerText = "+";
			typeSidebarTitleTrigger.setAttribute("type","invert");
			typeSidebarTitle.appendChild(typeSidebarTitleWrap);
			typeSidebarTitleWrap.appendChild(typeSidebarTitleInner);
			typeSidebarTitleInner.appendChild(typeSidebarTitleTrigger);
			typeSidebarTitleTrigger.appendChild(typeSidebarTitleTriggerText);
			typeSidebarTitleWrap.appendChild(typeSidebarTitleDrop);

			typeSidebarTitleTrigger.addEventListener("click",function(){let base = this.parentElement.parentElement; if (base.classList.contains("active")) {base.classList.remove("active");} else {base.classList.add("active");}})
			
			for(let q = 0; q < Types.length; q++) {
				let val = Types[q];
				let typeSidebarTitleDropOption = document.createElement("b");
				let typeSidebarTitleDropOptionImg = document.createElement("img");
				let typeSidebarTitleDropOptionTxt = document.createElement("p");
				typeSidebarTitleDropOption.setAttribute("name",Types[q]);
				typeSidebarTitleDropOptionImg.src = getMedia([val+" Symbol 1"],[PATH_Type_Icon],["Sword"])[0]
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

					let val = el.innerText;
					let img = document.createElement("img");
					img.src = getMedia([val+" Symbol 1"],[PATH_Type_Icon],["Sword"])[0]
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


		for(let i = 0; i < defAtt.length; i++) {
			let DefAtt = document.createElement("ul");

			let DefAttSuperEffective = document.createElement("li");
			let DefAttSuperEffectiveTitle = document.createElement("h6");
			let DefAttSuperEffectiveContain = document.createElement("span");
			let DefAttEffective = document.createElement("li");
			let DefAttEffectiveTitle = document.createElement("h6");
			let DefAttEffectiveContain = document.createElement("span");
			let DefAttSuperIneffective = document.createElement("li");
			let DefAttSuperIneffectiveTitle = document.createElement("h6");
			let DefAttSuperIneffectiveContain = document.createElement("span");
			let DefAttIneffective = document.createElement("li");
			let DefAttIneffectiveTitle = document.createElement("h6");
			let DefAttIneffectiveContain = document.createElement("span");
			let DefAttImmune = document.createElement("li");
			let DefAttImmuneTitle = document.createElement("h6");
			let DefAttImmuneContain = document.createElement("span");
			let DefAttNormal = document.createElement("li");
			let DefAttNormalTitle = document.createElement("h6");
			let DefAttNormalContain = document.createElement("span");

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

		for(let i = 0; i < defAtt.length; i++) {
			let typeSidebarDescriptionSelectorInput = document.createElement("input");
			let typeSidebarDescriptionSelectorLabel = document.createElement("label");
			let typeSidebarDescriptionSelectorLabelText = document.createElement("p");
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

		for(let q = 0; q < tempTypes.length; q++) {
			let tr = document.createElement("tr");
			tr.setAttribute("name",tempTypes[q]);
			table.appendChild(tr);

			for(let r = 0; r < tempTypes.length; r++) {

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
						img.src = getMedia([val+" Symbol 2"],[PATH_Type_Icon],["Sword"])[0]
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
		let toolSectionContentDMGOuter = document.createElement("div");
		let toolSectionContentDMG = document.createElement("div");
		let toolSectionContentDMGOptions = document.createElement("div");
		let toolSectionContentDMGOptionsTop = document.createElement("div");

		let toolSectionContentDMGOptionsBattles = document.createElement("span");
		let toolSectionContentDMGOptionsBattlesSelect = document.createElement("select");

		let toolSectionContentDMGOptionsTitle = document.createElement("span");

		let toolSectionContentDMGOptionsContent = document.createElement("div");
		let toolSectionContentDMGOptionsContentPok = document.createElement("ol");
		let toolSectionContentDMGOptionsContentTeam = document.createElement("ol");

		let toolSectionContentDMGOptionsStats = document.createElement("div");
		let toolSectionContentDMGOptionsStatsContent = document.createElement("ol");


		let toolSectionContentDMGField = document.createElement("div");
		let toolSectionContentDMGContent = document.createElement("div");
		let toolSectionContentDMGResult = document.createElement("div");
		let toolSectionContentDMGResultContent = document.createElement("div");
		let toolSectionContentDMGResultContentWrap = document.createElement("span");
		let toolSectionContentDMGResultContentObject = document.createElement("figure");
		let toolSectionContentDMGResultContentUser = document.createElement("span");
		let toolSectionContentDMGResultContentTarget = document.createElement("span");


		let toolSectionContentDMGResultParty = document.createElement("span");

		let toolSectionContentDMGMenu = document.createElement("div");

		let toolSectionContentDMGMenuLeft = document.createElement("div");
		let toolSectionContentDMGMenuCenter = document.createElement("div");
		let toolSectionContentDMGMenuRight = document.createElement("div");

		let toolSectionContentDMGMenuRightTop = document.createElement("span");
		let toolSectionContentDMGMenuRightBottom = document.createElement("span");
		let toolSectionContentDMGMenuButton = document.createElement("button");
		let toolSectionContentDMGMenuButtonText = document.createElement("h6");

		let toolSectionContentDMGMenuCenterTop = document.createElement("span");
		let toolSectionContentDMGMenuCenterBottom = document.createElement("span");

		let toolSectionContentDMGMenuCenterSelect = document.createElement("select");
		let toolSectionContentDMGMenuRightTopInput = document.createElement("input");
		let toolSectionContentDMGMenuRightTopSelect = document.createElement("select");

		let toolSectionContentDMGMenuCenterBottomDamage = document.createElement("span");
		let toolSectionContentDMGMenuCenterBottomDamageTitle = document.createElement("h6");
		let toolSectionContentDMGMenuCenterBottomDamageText = document.createElement("small");
		let toolSectionContentDMGMenuCenterBottomAccuracy = document.createElement("span");
		let toolSectionContentDMGMenuCenterBottomAccuracyTitle = document.createElement("h6");
		let toolSectionContentDMGMenuCenterBottomAccuracyText = document.createElement("small");
		let toolSectionContentDMGMenuCenterBottomCritical = document.createElement("span");
		let toolSectionContentDMGMenuCenterBottomCriticalTitle = document.createElement("h6");
		let toolSectionContentDMGMenuCenterBottomCriticalText = document.createElement("small");

		let toolSectionContentDMGMenuCenterBottomTypeCategory = document.createElement("span");

		let toolSectionContentDMGMenuCenterBottomType = document.createElement("span");
		let toolSectionContentDMGMenuCenterBottomTypeImg = document.createElement("img");
		let toolSectionContentDMGMenuCenterBottomTypeText = document.createElement("small");

		let toolSectionContentDMGMenuCenterBottomCategory = document.createElement("span");
		let toolSectionContentDMGMenuCenterBottomCategoryImg = document.createElement("img");
		let toolSectionContentDMGMenuCenterBottomCategoryText = document.createElement("small");


		let toolSectionContentDMGMenuLeftTop = document.createElement("span");
		let toolSectionContentDMGMenuLeftRangeTextTopLeft = document.createElement("span");
		let toolSectionContentDMGMenuLeftRangeTextTopRight = document.createElement("span");
		let toolSectionContentDMGMenuLeftRangeTextBottomLeft = document.createElement("small");
		let toolSectionContentDMGMenuLeftRangeTextBottomCenter = document.createElement("small");
		let toolSectionContentDMGMenuLeftRangeTextBottomRight = document.createElement("small");
		let toolSectionContentDMGMenuLeftRange = document.createElement("input");
		
		let toolSectionContentDMGMenuLeftBottom = document.createElement("span");


		let toolSectionContentDMGMenuLeftCritical = document.createElement("label");
		let toolSectionContentDMGMenuLeftCriticalText = document.createElement("h6");
		let toolSectionContentDMGMenuLeftCriticalInput = document.createElement("input");


		toolSectionContentDMGOptionsTop.setAttribute("name","header");

		toolSectionContentDMGMenuRightTopInput.setAttribute("type","number");
		toolSectionContentDMGMenuRightTopInput.setAttribute("min","1");
		toolSectionContentDMGMenuRightTopInput.setAttribute("value","1");
		toolSectionContentDMGMenuRightTopInput.setAttribute("max","1");

		toolSectionContentDMGMenuCenterBottomType.setAttribute("name","type");
		toolSectionContentDMGMenuCenterBottomTypeImg.setAttribute("onload","this.style.removeProperty('display');this.previousElementSibling.style.display='none';");
		toolSectionContentDMGMenuCenterBottomTypeImg.setAttribute("onerror","this.style.display='none';this.previousElementSibling.style.removeProperty('display');");

		toolSectionContentDMGMenuCenterBottomCategory.setAttribute("name","category");
		toolSectionContentDMGMenuCenterBottomCategoryImg.setAttribute("onload","this.style.removeProperty('display');this.previousElementSibling.style.display='none';");
		toolSectionContentDMGMenuCenterBottomCategoryImg.setAttribute("onerror","this.style.display='none';this.previousElementSibling.style.removeProperty('display');");


		toolSectionContentDMGMenuCenterBottomDamage.setAttribute("name","power");
		toolSectionContentDMGMenuCenterBottomDamageTitle.innerText = "Power";
		toolSectionContentDMGMenuCenterBottomDamageText.innerText = "";

		toolSectionContentDMGMenuCenterBottomAccuracy.setAttribute("name","accuracy");
		toolSectionContentDMGMenuCenterBottomAccuracyTitle.innerText = "Accuracy";
		toolSectionContentDMGMenuCenterBottomAccuracyText.innerText = "";

		toolSectionContentDMGMenuCenterBottomCritical.setAttribute("name","critical");
		toolSectionContentDMGMenuCenterBottomCriticalTitle.innerText = "Critical";
		toolSectionContentDMGMenuCenterBottomCriticalText.innerText = ""
		
		toolSectionContentDMGMenuLeftBottom.setAttribute("name","specific");
		toolSectionContentDMGMenuLeftTop.setAttribute("name","roll");

		toolSectionContentDMGMenuLeftCritical.setAttribute("name","critical");
		toolSectionContentDMGMenuLeftCritical.setAttribute("for","dmg-critical")
		toolSectionContentDMGMenuLeftCriticalText.innerText = "Critical";
		toolSectionContentDMGMenuLeftCriticalInput.setAttribute("id","dmg-critical")
		toolSectionContentDMGMenuLeftCriticalInput.setAttribute("name","dmg-critical")
		toolSectionContentDMGMenuLeftCriticalInput.setAttribute("type","checkbox");

		toolSectionContentDMGMenuCenterTop.setAttribute("name","move");
		toolSectionContentDMGMenuCenterBottom.setAttribute("name","info");

		toolSectionContentDMGMenuRightTop.setAttribute("name","count");
		toolSectionContentDMGMenuRightBottom.setAttribute("name","execute");


		toolSectionContentDMGMenuLeftRangeTextTopLeft.setAttribute("name","low");
		toolSectionContentDMGMenuLeftRangeTextTopLeft.innerHTML = "<h6>Low Roll</h6>";
		toolSectionContentDMGMenuLeftRangeTextTopRight.setAttribute("name","high");
		toolSectionContentDMGMenuLeftRangeTextTopRight.innerHTML = "<h6>High Roll</h6>";
		toolSectionContentDMGMenuLeftRangeTextBottomLeft.setAttribute("name","min");
		toolSectionContentDMGMenuLeftRangeTextBottomCenter.setAttribute("name","val");
		toolSectionContentDMGMenuLeftRangeTextBottomRight.setAttribute("name","max");


		toolSectionContentDMGMenuLeftRange.setAttribute("type","range");
		toolSectionContentDMGMenuLeftRange.setAttribute("name","dmg-roll-range")
		toolSectionContentDMGMenuLeftRange.setAttribute("id","dmg-roll-range")
		toolSectionContentDMGMenuLeftRange.min = -1;
		toolSectionContentDMGMenuLeftRange.max = -1;
		toolSectionContentDMGMenuLeftRange.value = -1;
	
		toolSectionContentDMGMenuButtonText.innerText = "Start Calculation";

		toolSectionContentDMGOptionsContentPok.setAttribute("name","pokémon");
		toolSectionContentDMGOptionsContentTeam.setAttribute("name","team");

		toolSectionContentDMGOuter.setAttribute("id","dmg");
		toolSectionContentDMGOuter.setAttribute("name","Damage Calculator (Development)");

		toolSectionContentDMGContent.setAttribute("name","content");

		toolSectionContentDMGResult.setAttribute("name","result");
		toolSectionContentDMGResultContentWrap.classList.add("scroll");
		toolSectionContentDMGOptions.setAttribute("name","options");
		toolSectionContentDMGMenu.setAttribute("name","menu");

		toolSectionContentDMGResultContent.setAttribute("name","battle");

		toolSectionContentDMGResultContentObject.setAttribute("name","object");
		toolSectionContentDMGResultContentUser.setAttribute("name","user");
		toolSectionContentDMGResultContentTarget.setAttribute("name","target");

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
		toolSectionContentDMGResultContent.appendChild(toolSectionContentDMGResultContentWrap);
		toolSectionContentDMGResultContentWrap.appendChild(toolSectionContentDMGResultContentObject);
		toolSectionContentDMGResultContentWrap.appendChild(toolSectionContentDMGResultContentUser);
		toolSectionContentDMGResultContentWrap.appendChild(toolSectionContentDMGResultContentTarget);
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
		
		
		
		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuLeft)
		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuCenter)

		toolSectionContentDMGMenu.appendChild(toolSectionContentDMGMenuRight)
		toolSectionContentDMGMenuRight.appendChild(toolSectionContentDMGMenuRightTop)
		toolSectionContentDMGMenuRight.appendChild(toolSectionContentDMGMenuRightBottom)
		toolSectionContentDMGMenuRightBottom.appendChild(toolSectionContentDMGMenuButton)
		toolSectionContentDMGMenuButton.appendChild(toolSectionContentDMGMenuButtonText)

		toolSectionContentDMGMenuRightTop.appendChild(toolSectionContentDMGMenuRightTopSelect);
		toolSectionContentDMGMenuRightTop.appendChild(toolSectionContentDMGMenuRightTopInput);

		toolSectionContentDMGMenuCenter.appendChild(toolSectionContentDMGMenuCenterTop);
		toolSectionContentDMGMenuCenter.appendChild(toolSectionContentDMGMenuCenterBottom);
		toolSectionContentDMGMenuCenterTop.appendChild(toolSectionContentDMGMenuCenterSelect);


		toolSectionContentDMGMenuCenterBottom.appendChild(toolSectionContentDMGMenuCenterBottomDamage);
		toolSectionContentDMGMenuCenterBottomDamage.appendChild(toolSectionContentDMGMenuCenterBottomDamageTitle);
		toolSectionContentDMGMenuCenterBottomDamage.appendChild(toolSectionContentDMGMenuCenterBottomDamageText);
		toolSectionContentDMGMenuCenterBottom.appendChild(toolSectionContentDMGMenuCenterBottomAccuracy);
		toolSectionContentDMGMenuCenterBottomAccuracy.appendChild(toolSectionContentDMGMenuCenterBottomAccuracyTitle);
		toolSectionContentDMGMenuCenterBottomAccuracy.appendChild(toolSectionContentDMGMenuCenterBottomAccuracyText);
		toolSectionContentDMGMenuCenterBottom.appendChild(toolSectionContentDMGMenuCenterBottomCritical);
		toolSectionContentDMGMenuCenterBottomCritical.appendChild(toolSectionContentDMGMenuCenterBottomCriticalTitle);
		toolSectionContentDMGMenuCenterBottomCritical.appendChild(toolSectionContentDMGMenuCenterBottomCriticalText);
	

		toolSectionContentDMGMenuCenterBottom.appendChild(toolSectionContentDMGMenuCenterBottomTypeCategory);
		toolSectionContentDMGMenuCenterBottomTypeCategory.appendChild(toolSectionContentDMGMenuCenterBottomType);
		toolSectionContentDMGMenuCenterBottomType.appendChild(toolSectionContentDMGMenuCenterBottomTypeText);
		toolSectionContentDMGMenuCenterBottomType.appendChild(toolSectionContentDMGMenuCenterBottomTypeImg);
		toolSectionContentDMGMenuCenterBottomTypeCategory.appendChild(toolSectionContentDMGMenuCenterBottomCategory);
		toolSectionContentDMGMenuCenterBottomCategory.appendChild(toolSectionContentDMGMenuCenterBottomCategoryText);
		toolSectionContentDMGMenuCenterBottomCategory.appendChild(toolSectionContentDMGMenuCenterBottomCategoryImg);

		toolSectionContentDMGMenuLeft.appendChild(toolSectionContentDMGMenuLeftTop)
		toolSectionContentDMGMenuLeftTop.appendChild(toolSectionContentDMGMenuLeftCritical);
		toolSectionContentDMGMenuLeftCritical.appendChild(toolSectionContentDMGMenuLeftCriticalText);
		toolSectionContentDMGMenuLeftCritical.appendChild(toolSectionContentDMGMenuLeftCriticalInput);
		toolSectionContentDMGMenuLeftTop.appendChild(toolSectionContentDMGMenuLeftRangeTextTopLeft)
		toolSectionContentDMGMenuLeftTop.appendChild(toolSectionContentDMGMenuLeftRangeTextTopRight)
		toolSectionContentDMGMenuLeftTop.appendChild(toolSectionContentDMGMenuLeftRange)
		toolSectionContentDMGMenuLeftTop.appendChild(toolSectionContentDMGMenuLeftRangeTextBottomLeft)
		toolSectionContentDMGMenuLeftTop.appendChild(toolSectionContentDMGMenuLeftRangeTextBottomCenter)
		toolSectionContentDMGMenuLeftTop.appendChild(toolSectionContentDMGMenuLeftRangeTextBottomRight)
		toolSectionContentDMGMenuLeft.appendChild(toolSectionContentDMGMenuLeftBottom)



		toolSectionContentDMGMenuCenterBottomTypeText.style.display = "none";
		toolSectionContentDMGMenuCenterBottomCategoryText.style.display = "none";

		
		toolSectionContentDMGMenuLeftRange.addEventListener("input",function(){let v = ((this.value-this.min)/(this.max-this.min))*100;let c = "var(--colorBlue)";let b = "var(--color_90)";this.style.background = `linear-gradient(to right, ${c} 0%, ${c} ${v}%, ${b} ${v}%, ${b} 100%)`; let z = this.parentElement.querySelector(":scope *[name='val']"); z.innerText = (this.value-this.min);z.innerText = z.innerText+" ("+parseInt(v)+"%)";})
		toolSectionContentDMGMenuLeftRange.addEventListener("input",DMGResetCalc)
		toolSectionContentDMGMenuLeftCriticalInput.addEventListener("input",DMGResetCalc)

		let toolSectionContentDMGImport = document.createElement("figure");
		let toolSectionContentDMGImportText = document.createElement("h5");
		toolSectionContentDMGImport.setAttribute("name","import");
		toolSectionContentDMGImportText.innerText = "⮟";
		toolSectionContentDMGResult.appendChild(toolSectionContentDMGImport);
		toolSectionContentDMGImport.appendChild(toolSectionContentDMGImportText);
		let toolSectionContentDMGImportWrapTop = document.createElement("div");
		let toolSectionContentDMGImportWrap = document.createElement("span");
		toolSectionContentDMGImport.appendChild(toolSectionContentDMGImportWrapTop);
		toolSectionContentDMGImportWrapTop.appendChild(toolSectionContentDMGImportWrap);

		toolSectionContentDMGImport.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})

		let impopts = ["Import Pokémon","Copy Data Strings"];
		for (let r = 0; r < impopts.length; r++) {
			let toolSectionContentDMGImportWrapSpan = document.createElement("span");
			let toolSectionContentDMGImportWrapTrigger = document.createElement("b");
			let toolSectionContentDMGImportWrapText = document.createElement("small");
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
				let res = [];
				for(let t = 0; t < divBases.length; t++) {
					let ds = divBases[t].getAttribute("data-string"); 
					if (ds != undefined && ds != "") {
						res.push(ds)
					}
				}
				
				let resStr = res.join("\n");

				if (res.length > 0 && resStr.includes("pok:") && !resStr.includes("pok:|") && !resStr.includes("pok:\n")) {
					navigator.clipboard.writeText(resStr);
					consoleText("Copied!");
				}
			}
		}

		let toolSectionContentDMGReset = document.createElement("figure");
		let toolSectionContentDMGResetText = document.createElement("h5");
		toolSectionContentDMGReset.setAttribute("type","scale");
		toolSectionContentDMGReset.setAttribute("name","reset");
		toolSectionContentDMGResetText.innerText = "❌";
		toolSectionContentDMGResult.appendChild(toolSectionContentDMGReset);
		toolSectionContentDMGReset.appendChild(toolSectionContentDMGResetText);
		toolSectionContentDMGReset.addEventListener("click",function(){let x = findUpTag(this,"DIV"); let z = x.querySelectorAll(":scope div[data-string]"); let lock = confirm("The Pokémon's data will not be saved.\nDo you want to continue?"); if (lock) {for(let p = 0; p < z.length; p++) {z[p].setAttribute("data-string","");let tar = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] > div span[name='"+z[p].parentElement.getAttribute("name")+"'] ul[name='"+z[p].getAttribute("name")+"']");DMGClearData(tar);}}})




		let tempMoves = [];

		for(let m = 0; m < finaldata["Moves"]["Reference"].length; m++) {
			if(finaldata["Moves"]["Reference"][m][DATA_Move_Reference["Reference"]] == "true") {
				if (finaldata["Moves"]["Group"][m]["Group"] != "Z-Move" && finaldata["Moves"]["Group"][m]["Group"] != "Max Move" && finaldata["Moves"]["Group"][m]["Group"] != "G-Max Move") {
					tempMoves.push(finaldata["Moves"]["Reference"][m][DATA_Move_Reference["Name"]])
				}
			}
		}
		for(let m = 0; m < finaldata["Moves"]["Additional"].length; m++) {
			if (finaldata["Moves"]["Additional"][m]["Additional"] == "Counterattack") {
				tempMoves = tempMoves.filter(function(v) {return v != finaldata["Moves"]["Additional"][m]["Move"]})
			}
		}

		tempMoves.sort();

		for(let m = 0; m < tempMoves.length; m++) {
			let moveCategory = returnArrValue(finaldata["Moves"]["Category"],DATA_Move_Reference["Name"],DATA_Move_Category["Category"],tempMoves[m]);
			moveCategory = undwsDel(moveCategory,"")
			if (moveCategory != undefined && moveCategory != "Status") {
				let toolSectionContentDMGMenuCenterTopOption = document.createElement("option");
				toolSectionContentDMGMenuCenterTopOption.setAttribute("value",tempMoves[m]);
				toolSectionContentDMGMenuCenterTopOption.innerText = tempMoves[m];
				toolSectionContentDMGMenuCenterSelect.appendChild(toolSectionContentDMGMenuCenterTopOption);

				let movd = formatMoveData(tempMoves[m]);
				movd = undDel(movd,"");
				toolSectionContentDMGMenuCenterTopOption.title = movd;

				toolSectionContentDMGMenuCenterTopOption.style.background = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],tempMoves[m])+")";
			}
		}

		if (toolSectionContentDMGMenuCenterSelect.querySelector(":scope option[value='Pound']") != undefined) {
			toolSectionContentDMGMenuCenterSelect.value = "Pound";
			toolSectionContentDMGMenuCenterSelect.parentElement.style.color = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],toolSectionContentDMGMenuCenterSelect.value)+")";
			toolSectionContentDMGMenuCenterBottomTypeImg.src = getMedia([returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],toolSectionContentDMGMenuCenterSelect.value)],[PATH_Type_Icon])[0]
			toolSectionContentDMGMenuCenterBottomTypeText.innerText = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],toolSectionContentDMGMenuCenterSelect.value);
			toolSectionContentDMGMenuCenterBottomCategoryImg.src = getMedia([returnArrValue(finaldata["Moves"]["Category"],DATA_Move_Reference["Name"],DATA_Move_Category["Category"],toolSectionContentDMGMenuCenterSelect.value)],[PATH_Type_Icon])[0]
			toolSectionContentDMGMenuCenterBottomCategoryText.innerText = returnArrValue(finaldata["Moves"]["Category"],DATA_Move_Reference["Name"],DATA_Move_Category["Category"],toolSectionContentDMGMenuCenterSelect.value);
		}
	
	
		toolSectionContentDMGMenuCenterSelect.addEventListener("change",DMGSetInfo);
		toolSectionContentDMGMenuCenterSelect.addEventListener("change",function(){
			let movd = formatMoveData(this.value); movd = undDel(movd,"");this.title = movd;this.parentElement.style.color = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],this.value)+")";
		});


		let movd = formatMoveData(toolSectionContentDMGMenuCenterSelect.value);
		movd = undDel(movd,"");
		toolSectionContentDMGMenuCenterSelect.title = movd;
	

		toolSectionContentDMGMenuButton.addEventListener("click",DMGCalcStart);
		/*
		toolSectionContentDMGMenuRightTopInput.addEventListener("change",DMGCalcStart);
		toolSectionContentDMGMenuRightTopSelect.addEventListener("change",DMGCalcStart);
		toolSectionContentDMGMenuCenterSelect.addEventListener("change",DMGCalcStart);
		toolSectionContentDMGMenuLeftCriticalInput.addEventListener("change",DMGCalcStart);
		toolSectionContentDMGMenuLeftRange.addEventListener("input",DMGCalcStart);*/


		for(let q = 0; q < battleVariation.length; q++) {
			if (getApplicable(battleVariation[q]["Game"])) {
				let toolSectionContentDMGOptionsBattlesOption = document.createElement("option");
				toolSectionContentDMGOptionsBattlesOption.innerText = battleVariation[q]["Name"];
				toolSectionContentDMGOptionsBattlesOption.value = battleVariation[q]["Name"];
				toolSectionContentDMGOptionsBattlesOption.setAttribute("name",q);
				toolSectionContentDMGOptionsBattlesSelect.appendChild(toolSectionContentDMGOptionsBattlesOption)

				let keys = Object.keys(battleVariation[q])
				for(let r = 0; r < keys.length; r++) {
					if (keys[r] != "Name" && keys[r] != "Game") {
						toolSectionContentDMGOptionsBattlesOption.setAttribute(keys[r],battleVariation[q][keys[r]])
					}
				}
			}
		}

		toolSectionContentDMGOptionsBattlesSelect.setAttribute("teams",battleVariation[0]["Teams"])
		toolSectionContentDMGOptionsBattlesSelect.setAttribute("pokémon",battleVariation[0]["Pokémon"])
		toolSectionContentDMGOptionsBattlesSelect.setAttribute("name",0)


		toolSectionContentDMGOptionsBattlesSelect.addEventListener("change",function(){const preval = this.getAttribute("name");let x = this.value;let el = this.querySelector(":scope option[value='"+x+"']");let keys = el.getAttributeNames();for(let q = 0; q < keys.length; q++) {let val1 = keys[q];let val2 = el.getAttribute(keys[q]);this.setAttribute(val1,val2);}buildDMG(preval)})
		toolSectionContentDMGOptionsBattlesSelect.addEventListener("change",function() {document.querySelector("#contain div#tool div#dmg > div").setAttribute("data-battle",this.value)})
		
		
		buildDMG();







		$(toolSectionContentDMGResultContentTarget).sortable({
			stop: function(e,ui) {
				DMGMatchPosition();
				/*DMGCalcStart();*/
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


	let toolOptionsTitle = ["Damage Calculator (Development)","Type Advantage","Timers","Random Number Generator"];

	// Counter, Damage Calculator, Catch Rate Calculator, Shiny Odds Calculator, Item/Move/Type/Ability/Location Checklist

	for(let q = 0; q < toolOptionsTitle.length; q++) {
		let toolSectionListOptionsInput = document.createElement("input");
		let toolSectionListOptionsLabel = document.createElement("label");
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
			let toolContents = document.querySelectorAll("#tool section[name='content'] > div[name]");
			let toolContent = document.querySelectorAll("#tool section[name='content'] > div[name='"+this.value+"']");
			for(let q = 0; q < toolContents.length; q++) {
				toolContents[q].style.display = "none";
			}
			for(let q = 0; q < toolContent.length; q++) {
				toolContent[q].style.display = "block";
			}
		}
		if(q == 0) {
			toolSectionListOptionsLabel.click();
		}
	}


};

function countdown() {

	let base = document.querySelector('#contain div#tool > section[name="content"] > div#timer > *[name="countdown"]')
	let audiopath = "./media/Sounds/FinalDex/Complete.wav";

	let countdownInput = base.querySelectorAll(":scope input");
	let countdownPlayButton = base.querySelector(":scope b[title='Play']");
	let countdownPauseButton = base.querySelector(":scope b[title='Pause']");
	let countdownResetButton = base.querySelector(":scope *[name='reset']");
	let countdownLapsButton = base.querySelector(":scope *[name='lap']");

	let countdownTimeContainer = base.querySelector(':scope > div > div > data > *');
	let countdownInputContainer = base.querySelector(':scope > div > div > span');
	let countdownSetContainer = base.querySelector(':scope > div > div');

	let countdownHoursInput = base.querySelector(":scope input[title='Hours']");
	let countdownMinutesInput = base.querySelector(":scope input[title='Minutes']");
	let countdownSecondsInput = base.querySelector(":scope input[title='Seconds']");
	let countdownMillisecondsInput = base.querySelector(":scope input[title='Milliseconds']");

	let countdownList = base.querySelector(":scope ul");


	/*
	    polyfills for IE8
	*/
	if(!Array.prototype.forEach) {
		Array.prototype.forEach = function(countdownCallback) {
			for(let i = 0; i < this.length; i++) {
				countdownCallback(this[i]);
			}
		};
	}
	if(!Array.prototype.map) {
		Array.prototype.map = function(countdownCallback) {
			let countdownItems = [];
			for(let i = 0; i < this.length; i++) {
				countdownItems.push(countdownCallback(this[i]));
			}
			return countdownItems;
		};
	}
	let countdownSecondInMilliseconds = 1000;
	let countdownMinuteInMilliseconds = 60 * countdownSecondInMilliseconds;
	let countdownHourInMilliseconds = 60 * countdownMinuteInMilliseconds;
	let countdownFloor = Math.floor;
	let countdownExtractMilliseconds = function(countdownTimeInMilliseconds) {
		return countdownTimeInMilliseconds % 1000;
	};
	let countdownExtractSeconds = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownSecondInMilliseconds);
	};
	let countdownExtractMinutes = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownMinuteInMilliseconds);
	};
	let countdownExtractHours = function(countdownTimeInMilliseconds) {
		return countdownFloor(countdownTimeInMilliseconds / countdownHourInMilliseconds);
	};
	let countdownPad = function(countdownNumber) {
		if(countdownNumber < 10) {
			return "0" + countdownNumber;
		} else {
			return countdownNumber;
		}
	};
	let countdownExtractTime = function(countdownTimeInMilliseconds) {
		let countdownHours = countdownExtractHours(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownHours * countdownHourInMilliseconds;
		let countdownMinutes = countdownExtractMinutes(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownMinutes * countdownMinuteInMilliseconds;
		let countdownSeconds = countdownExtractSeconds(countdownTimeInMilliseconds);
		countdownTimeInMilliseconds -= countdownSeconds * countdownSecondInMilliseconds;
		let countdownMilliseconds = countdownTimeInMilliseconds;
		return {
			countdownHours: countdownHours,
			countdownMinutes: countdownMinutes,
			countdownSeconds: countdownSeconds,
			countdownMilliseconds: countdownMilliseconds,
		};
	};
	let countdownLap = function(countdownNetTime, countdownPreviousLap) {
		this.countdownPreviousLap = countdownPreviousLap;
		this.countdownNetTime = countdownNetTime;
	};
	countdownLap.prototype = {
		countdownMilitaryTime: function(countdownTimeInMilliseconds) {
			let countdownTimeSeparator = ":";
			let countdownTime = countdownExtractTime(countdownTimeInMilliseconds);
			countdownTime.countdownMilliseconds = countdownTime.countdownMilliseconds / 10;
			return ["countdownHours", "countdownMinutes", "countdownSeconds", "countdownMilliseconds", ].map(function(countdownProperty) {
				return countdownPad(countdownTime[countdownProperty]);
			}).join(countdownTimeSeparator);
		},
		countdownSplitString: function() {
			if(this.countdownPreviousLap != null) {
				let countdownTimeDifference = this.countdownNetTime - this.countdownPreviousLap.countdownNetTime;
				return this.countdownMilitaryTime(countdownTimeDifference);
			} else {
				return this.countdownMilitaryTime(this.countdownNetTime);
			}
		},
	};
	let CountDown = (window.CountDown = function(countdownOptions) {
		if(countdownOptions == null) {
			countdownOptions = {};
		}
		let countdown_this = this;
		let countdownCallbackProperties = ["countdownCallback", "countdownCallbackTarget", "countdownLapCallback", "countdownLapCallbackTarget", ];
		let countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
	
		for(let i = 0; i < countdownInput.length; i++) {
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
			let countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
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
			let a = parseInt(countdownHoursInput.value);
			let b = parseInt(countdownMinutesInput.value);
			let c = parseInt(countdownSecondsInput.value);
			let d = parseInt(countdownMillisecondsInput.value);
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
					let countdownNetTime = (countdownHours = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						let countdownNetTime = (countdownHours = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Minutes") {
					let countdownNetTime = (countdownMinutes = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						let countdownNetTime = (countdownMinutes = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Seconds") {
					let countdownNetTime = (countdownSeconds = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						let countdownNetTime = (countdownSeconds = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Milliseconds") {
					let countdownNetTime = (countdownMilliseconds = parseInt(this.value) * 10);
					if(parseInt(this.value) > parseInt(this.max)) {
						let countdownNetTime = (countdownMilliseconds = parseInt(this.max) * 10);
						this.value = this.max;
					}
				}
			}

			let hours = countdownHoursInput.value;
			let minutes = countdownMinutesInput.value;
			let seconds = countdownSecondsInput.value;
			let milliseconds = countdownMillisecondsInput.value;

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
		let countdownRunning = false;
		let countdownLaps = [];
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
		let countdownTimeDidChange = function() {
			let countdownCallback = countdown_this.countdownCallback;
			if(countdownCallback != null) {
				let countdownCallbackTarget = countdown_this.countdownCallbackTarget || window;
				if(typeof countdownCallback === "string") {
					countdownCallback = countdownCallbackTarget[countdownCallback];
				}
				if(typeof countdownCallback === "function") {
					countdownCallback.call(countdownCallbackTarget, countdown_this.countdownCallbackArgument.call(countdown_this));
				}
			}
		};
		let countdownLapDidChange = function(countdownLap, countdownIsReset) {
			if(countdown_this.countdownLapCallback != null) {
				let countdownLapCallbackTarget = countdown_this.countdownLapCallbackTarget || window;
				let countdownLapCallback = countdown_this.countdownLapCallback;
				if(typeof countdownLapCallback === "string") {
					countdownLapCallback = countdownLapCallbackTarget[countdownLapCallback];
				}
				if(typeof countdownLapCallback === "function") {
					countdownLapCallback.call(countdownLapCallbackTarget, countdownLap && countdownLap.countdownSplitString(), countdownIsReset);
				}
			}
		};
		let countdownInitializeTimer = function(countdownTimeInMilliseconds) {
			let countdownTime = countdownExtractTime(countdownTimeInMilliseconds);
			countdownHours = countdownTime.countdownHours;
			countdownMinutes = countdownTime.countdownMinutes;
			countdownSeconds = countdownTime.countdownSeconds;
			countdownMilliseconds = countdownTime.countdownMilliseconds;
			countdownNetTime = countdownTimeInMilliseconds;
			countdownTimeDidChange();
			return countdown_this;
		};
		let countdownIncrementByTenMilliseconds = function() {
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
					let countdownCompletedAudio = new Audio(audiopath);
					countdownCompletedAudio.play();
				}
			
	
				let countdownNetTime = (countdownHours = countdownMinutes = countdownSeconds = countdownMilliseconds = 0);
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
			let countdownPreviousLap = countdownLaps[countdownLaps.length - 1];
			let countdownCurrentLap = new countdownLap(countdownNetTime);
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

	let countdownLapCount = 0;
	window.countdownUpdateCount = function(countdownMilitaryTime) {
		countdownTimeContainer.innerHTML = countdownMilitaryTime;
	};
	window.countdownUpdateLap = function(countdownLapSplitString, countdownIsReset) {
		if(countdownIsReset) {
			countdownTimeContainer.innerHTML = "";
			countdownList.innerHTML = "";
			countdownLapCount = 0;
		} else {
			let countdownli = document.createElement("li");
			countdownLapCount += 1;
			countdownli.innerHTML = "<span>#" + countdownLapCount + "</span>" + countdownTimeContainer.innerHTML;
			countdownList.appendChild(countdownli);
		}
	};
	let replaceClass = function(ele, class1, class2) {
		if(ele.className.indexOf(class1) > 1) {
			ele.className = ele.className.replace(class1, class2);
		}
	};
	let countdown = new CountDown({
		countdownCallback: "countdownUpdateCount",
		countdownLapCallback: "countdownUpdateLap",
	});


	let countdownStartStopButtonEvent = function() {
		let a = parseInt(countdownHoursInput.value);
		let b = parseInt(countdownMinutesInput.value);
		let c = parseInt(countdownSecondsInput.value);
		let d = parseInt(countdownMillisecondsInput.value);
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
	let countdownResetButtonEvent = function() {
		countdownTimeContainer.innerHTML = "";
		countdown.reset();
	};
	let countdownLapsButtonEvent = function() {
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

	let base = document.querySelector('#contain div#tool > section[name="content"] > div[name="Timers"] > *[name="stopwatch"]')

	let stopwatchInput = base.querySelectorAll(":scope input");
	let stopwatchPlayButton = base.querySelector(":scope b[title='Play']");
	let stopwatchPauseButton = base.querySelector(":scope b[title='Pause']");
	let stopwatchResetButton = base.querySelector(":scope *[name='reset']");
	let stopwatchLapsButton = base.querySelector(":scope *[name='lap']");

	let stopwatchTimeContainer = base.querySelector(':scope > div > div > data > *');
	let stopwatchInputContainer = base.querySelector(':scope > div > div > span');
	let stopwatchSetContainer = base.querySelector(':scope > div > div');

	let stopwatchHoursInput = base.querySelector(":scope input[title='Hours']");
	let stopwatchMinutesInput = base.querySelector(":scope input[title='Minutes']");
	let stopwatchSecondsInput = base.querySelector(":scope input[title='Seconds']");
	let stopwatchMillisecondsInput = base.querySelector(":scope input[title='Milliseconds']");

	let stopwatchList = base.querySelector(":scope ul");




	/*
	    polyfills for IE8
	  */
	if(!Array.prototype.forEach) {
		Array.prototype.forEach = function(stopwatchCallback) {
			for(let i = 0; i < this.length; i++) {
				stopwatchCallback(this[i]);
			}
		};
	}
	if(!Array.prototype.map) {
		Array.prototype.map = function(stopwatchCallback) {
			let stopwatchItems = [];
			for(let i = 0; i < this.length; i++) {
				stopwatchItems.push(stopwatchCallback(this[i]));
			}
			return stopwatchItems;
		};
	}
	let stopwatchSecondInMilliseconds = 1000;
	let stopwatchMinuteInMilliseconds = 60 * stopwatchSecondInMilliseconds;
	let stopwatchHourInMilliseconds = 60 * stopwatchMinuteInMilliseconds;
	let stopwatchFloor = Math.floor;
	let stopwatchExtractMilliseconds = function(stopwatchTimeInMilliseconds) {
		return stopwatchTimeInMilliseconds % 1000;
	};
	let stopwatchExtractSeconds = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchSecondInMilliseconds);
	};
	let stopwatchExtractMinutes = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchMinuteInMilliseconds);
	};
	let stopwatchExtractHours = function(stopwatchTimeInMilliseconds) {
		return stopwatchFloor(stopwatchTimeInMilliseconds / stopwatchHourInMilliseconds);
	};
	let stopwatchPad = function(stopwatchNumber) {
		if(stopwatchNumber < 10) {
			return "0" + stopwatchNumber;
		} else {
			return stopwatchNumber;
		}
	};
	let stopwatchExtractTime = function(stopwatchTimeInMilliseconds) {
		let stopwatchHours = stopwatchExtractHours(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchHours * stopwatchHourInMilliseconds;
		let stopwatchMinutes = stopwatchExtractMinutes(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchMinutes * stopwatchMinuteInMilliseconds;
		let stopwatchSeconds = stopwatchExtractSeconds(stopwatchTimeInMilliseconds);
		stopwatchTimeInMilliseconds -= stopwatchSeconds * stopwatchSecondInMilliseconds;
		let stopwatchMilliseconds = stopwatchTimeInMilliseconds;
		return {
			stopwatchHours: stopwatchHours,
			stopwatchMinutes: stopwatchMinutes,
			stopwatchSeconds: stopwatchSeconds,
			stopwatchMilliseconds: stopwatchMilliseconds,
		};
	};
	let stopwatchLap = function(stopwatchNetTime, stopwatchPreviousLap) {
		this.stopwatchPreviousLap = stopwatchPreviousLap;
		this.stopwatchNetTime = stopwatchNetTime;
	};
	stopwatchLap.prototype = {
		stopwatchMilitaryTime: function(stopwatchTimeInMilliseconds) {
			let stopwatchTimeSeparator = ":";
			let stopwatchTime = stopwatchExtractTime(stopwatchTimeInMilliseconds);
			stopwatchTime.stopwatchMilliseconds = stopwatchTime.stopwatchMilliseconds / 10;
			return ["stopwatchHours","stopwatchMinutes","stopwatchSeconds","stopwatchMilliseconds", ].map(function(stopwatchProperty) {
				return stopwatchPad(stopwatchTime[stopwatchProperty]);
			}).join(stopwatchTimeSeparator);
		},
		stopwatchSplitString: function() {
			if(this.stopwatchPreviousLap != null) {
				let stopwatchTimeDifference = this.stopwatchNetTime - this.stopwatchPreviousLap.stopwatchNetTime;
				return this.stopwatchMilitaryTime(stopwatchTimeDifference);
			} else {
				return this.stopwatchMilitaryTime(this.stopwatchNetTime);
			}
		},
	};
	let StopWatch = (window.StopWatch = function(stopwatchOptions) {
		if(stopwatchOptions == null) {
			stopwatchOptions = {};
		}
		let stopwatch_this = this;





		let stopwatchCallbackProperties = ["stopwatchCallback","stopwatchCallbackTarget","stopwatchLapCallback","stopwatchLapCallbackTarget", ];
		let stopwatchNetTime = (stopwatchHours = stopwatchMinutes = stopwatchSeconds = stopwatchMilliseconds = 0);



		for(let i = 0; i < stopwatchInput.length; i++) {
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
			let stopwatchNetTime = (stopwatchHours = stopwatchMinutes = stopwatchSeconds = stopwatchMilliseconds = 0);
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
					let stopwatchNetTime = (stopwatchHours = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						let stopwatchNetTime = (stopwatchHours = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Minutes") {
					let stopwatchNetTime = (stopwatchMinutes = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						let stopwatchNetTime = (stopwatchMinutes = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Seconds") {
					let stopwatchNetTime = (stopwatchSeconds = parseInt(this.value));
					if(parseInt(this.value) > parseInt(this.max)) {
						let stopwatchNetTime = (stopwatchSeconds = parseInt(this.max));
						this.value = this.max;
					}
				}
				if(this.getAttribute("title") == "Milliseconds") {
					let stopwatchNetTime = (stopwatchMilliseconds = parseInt(this.value) * 10);
					if(parseInt(this.value) > parseInt(this.max)) {
						let stopwatchNetTime = (stopwatchMilliseconds = parseInt(this.max) * 10);
						this.value = this.max;
					}
				}
			}

			let hours = stopwatchHoursInput.value;
			let minutes = stopwatchMinutesInput.value;
			let second = stopwatchSecondsInput.value;
			let millisecond = stopwatchMillisecondsInput.value;

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
		let stopwatchRunning = false;
		let stopwatchLaps = [];
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
		let stopwatchTimeDidChange = function() {
			let stopwatchCallback = stopwatch_this.stopwatchCallback;
			if(stopwatchCallback != null) {
				let stopwatchCallbackTarget = stopwatch_this.stopwatchCallbackTarget || window;
				if(typeof stopwatchCallback === "string") {
					stopwatchCallback = stopwatchCallbackTarget[stopwatchCallback];
				}
				if(typeof stopwatchCallback === "function") {
					stopwatchCallback.call(stopwatchCallbackTarget, stopwatch_this.stopwatchCallbackArgument.call(stopwatch_this));
				}
			}
		};
		let stopwatchLapDidChange = function(stopwatchLap, stopwatchIsReset) {
			if(stopwatch_this.stopwatchLapCallback != null) {
				let stopwatchLapCallbackTarget = stopwatch_this.stopwatchLapCallbackTarget || window;
				let stopwatchLapCallback = stopwatch_this.stopwatchLapCallback;
				if(typeof stopwatchLapCallback === "string") {
					stopwatchLapCallback = stopwatchLapCallbackTarget[stopwatchLapCallback];
				}
				if(typeof stopwatchLapCallback === "function") {
					stopwatchLapCallback.call(stopwatchLapCallbackTarget, stopwatchLap && stopwatchLap.stopwatchSplitString(), stopwatchIsReset);
				}
			}
		};
		let stopwatchInitializeTimer = function(stopwatchTimeInMilliseconds) {
			let stopwatchTime = stopwatchExtractTime(stopwatchTimeInMilliseconds);
			stopwatchHours = stopwatchTime.stopwatchHours;
			stopwatchMinutes = stopwatchTime.stopwatchMinutes;
			stopwatchSeconds = stopwatchTime.stopwatchSeconds;
			stopwatchMilliseconds = stopwatchTime.stopwatchMilliseconds;
			stopwatchNetTime = stopwatchTimeInMilliseconds;
			stopwatchTimeDidChange();
			return stopwatch_this;
		};
		let stopwatchIncrementByTenMilliseconds = function() {
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
			let stopwatchPreviousLap = stopwatchLaps[stopwatchLaps.length - 1];
			let stopwatchCurrentLap = new stopwatchLap(stopwatchNetTime);
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


	let stopwatchLapCount = 0;
	window.stopwatchUpdateWatch = function(stopwatchMilitaryTime) {
		stopwatchTimeContainer.innerHTML = stopwatchMilitaryTime;
	};
	window.stopwatchUpdateLap = function(stopwatchLapSplitString, stopwatchIsReset) {
		if(stopwatchIsReset) {
			stopwatchTimeContainer.innerHTML = "";
			stopwatchList.innerHTML = "";
			stopwatchLapCount = 0;
		} else {
			let stopwatchli = document.createElement("li");
			stopwatchLapCount += 1;
			stopwatchli.innerHTML = "<span>#" + stopwatchLapCount + "</span>" + stopwatchTimeContainer.innerHTML;
			stopwatchList.appendChild(stopwatchli);
		}
	};
	let replaceClass = function(ele, class1, class2) {
		if(ele.className.indexOf(class1) > 1) {
			ele.className = ele.className.replace(class1, class2);
		}
	};
	let stopwatch = new StopWatch({
		stopwatchCallback: "stopwatchUpdateWatch",
		stopwatchLapCallback: "stopwatchUpdateLap",
	});


	let stopwatchStartStopButtonEvent = function() {
		if(!stopwatch.stopwatchRunning()) {
			base.setAttribute("state","play");
			stopwatch.start();
		} else {
			base.setAttribute("state","stop");
			stopwatch.stop();
		}
	};
	let stopwatchResetButtonEvent = function() {
		stopwatchTimeContainer.innerHTML = "";
		stopwatch.reset();
	};
	let stopwatchLapsButtonEvent = function() {
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
	let lastMin = 1;
	let lastMax = 100;

	let base = document.querySelector("#contain > div#tool section[name='content'] *#rng");

	function rollNumber() {

		let it = 0;

		addIteration();
		let iteration = base.querySelector(":scope span[name='iterations'] input").value;
		for(let i = 0; i < iteration; i++) {
			let x = i + 1;

			function generateNumber(x) {
				let min = parseInt(base.querySelector(":scope ul li[name='" + x + "'] div:nth-child(2) input").value);
				let max = parseInt(base.querySelector(":scope ul li[name='" + x + "'] div:nth-child(3) input").value) + 1;
				let random1 = Math.floor(Math.random() * (max - min)) + min;
				let output = base.querySelector(":scope *[name='result'] div[name='" + x + "'] > *");
				let intervalRandom = setInterval(genRandom, 100);
				let startDate = new Date();
				let durationMin = 1000;
				let durationMax = 3000;

				function genRandom() {
					let random2 = Math.floor(Math.random() * (max - min)) + min;
					let currentDate = new Date();
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
				let nums = [];
				let num = base.querySelectorAll(":scope div[name='result'] > *")
				for(let r = 0; r < num.length; r++) {
					nums.push(num[r].firstElementChild.innerText);
				}
			
				let max = Math.max(...nums);
				let min = Math.min(...nums);


				for(let r = 0; r < num.length; r++) {
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
		let iteration = base.querySelector(":scope span[name='iterations'] input").value;
		let themin = [];
		let themax = [];
		let lis = base.querySelectorAll(":scope ul li");
		for(let q = 0; q < lis.length; q++) {
			themin.push(lis[q].lastElementChild.previousElementSibling.firstChild.value);
			themax.push(lis[q].lastElementChild.firstChild.value);
			lis[q].remove();
		}

		let outs = base.querySelectorAll(":scope div[name='result'] > div");
		for(let q = 0; q < outs.length; q++) {
			outs[q].remove();
		}
		
		for(let i = 0; i < iteration; i++) {
			let x = i + 1;
			let li = document.createElement("li");
			let it = document.createElement("div");
			let itText = document.createElement("p");
			let min = document.createElement("div");
			let minInput = document.createElement("input");
			let max = document.createElement("div");
			let maxInput = document.createElement("input");
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
			let out = document.createElement("div");
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
		let Min = this.parentElement.parentElement.querySelector(':scope > div[name="min"] > input');
		let Max = this.parentElement.parentElement.querySelector(':scope > div[name="max"] > input');
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
	for(let q = 0; q < els.length; q++) {
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
		img.src = getMedia([val+" Symbol 1"],[PATH_Type_Icon],["Sword"])[0]
		img.setAttribute("name",val);
		img.title = val;
		img.setAttribute("onclick","this.remove();typeSwitch();");
		els[0].prepend(img);
		typeSwitch();
	}
	else if (check2) {
		let img = document.createElement("img");
		img.src = getMedia([val+" Symbol 1"],[PATH_Type_Icon],["Sword"])[0]
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
		


	for(let q = 0; q < typesPath.length; q++) {
		types.push(typesPath[q].getAttribute("title").toUpperCase());
	}


	if (typesPath[0] != undefined && typesPath[1] != undefined && typesPath[0].getAttribute("name") == typesPath[1].getAttribute("name")) {
		typesPath[1].remove();
		typeSwitch();
		return;
	}

	let els = document.querySelectorAll("#contain > div#tool div#type *[name='sidebar'] *[name='description'] ul[name] > li[name] > span:last-child")
	for (let i = 0; i < els.length; i++) {
		els[i].innerHTML = "";
		els[i].parentElement.style.removeProperty("display");
	}



	for (let i = 0; i < drops.length; i++) {
		drops[i].style.removeProperty("display");
		for (let q = 0; q < types.length; q++) {
			if (drops[i].getAttribute("name") == titleCase(types[q])) {
				drops[i].style.display = "none";
			}
		}
	}



	if (types.length > 0) {

		
		let arr = calcTypeAdv(types,condition);

		let arrImmune = [];
		let arrSuperIneffective = [];
		let arrIneffective = [];
		let arrNormal = [];
		let arrEffective = [];
		let arrSuperEffective = [];

		for (let q = 0; q < arr.length; q++) {
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




		for (let q = 0; q < arrImmune.length; q++) {
			let val = titleCase(arrImmune[q]);
			let based = base.querySelector(":scope li[name='immune']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = getMedia([val],[PATH_Type_Icon],["Sword"])[0]
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
		}


		for (let q = 0; q < arrSuperEffective.length; q++) {
			let val = titleCase(arrSuperEffective[q]);
			let based = base.querySelector(":scope li[name='super effective']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = getMedia([val],[PATH_Type_Icon],["Sword"])[0]
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
		}

		for (let q = 0; q < arrEffective.length; q++) {
			let val = titleCase(arrEffective[q]);
			let based = base.querySelector(":scope li[name='effective']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = getMedia([val],[PATH_Type_Icon],["Sword"])[0]
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
		}

		for (let q = 0; q < arrNormal.length; q++) {
			let val = titleCase(arrNormal[q]);
			let based = base.querySelector(":scope li[name='normal']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = getMedia([val],[PATH_Type_Icon],["Sword"])[0]
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
		}

		for (let q = 0; q < arrIneffective.length; q++) {
			let val = titleCase(arrIneffective[q]);
			let based = base.querySelector(":scope li[name='ineffective']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = getMedia([val],[PATH_Type_Icon],["Sword"])[0]
			img.title = val;
			img.setAttribute("onerror","this.style.display = 'none'");
			img.setAttribute("onload","this.previousElementSibling.style.display ='none'");
			based.querySelector(":scope > span:last-child").appendChild(wrap);
			wrap.appendChild(txt);
			wrap.appendChild(img);
			based.style.display = "block";

			wrap.addEventListener("click",typeSet);
		}

		for (let q = 0; q < arrSuperIneffective.length; q++) {
			let val = titleCase(arrSuperIneffective[q]);
			let based = base.querySelector(":scope li[name='super ineffective']");

			let wrap = document.createElement("span");
			let txt = document.createElement("p");
			let img = document.createElement("img");
			wrap.setAttribute("name",val);
			txt.innerText = val;
			img.src = getMedia([val],[PATH_Type_Icon],["Sword"])[0]
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
	let base = event.target;
	
	let tar = base.parentElement.parentElement.firstChild;
	let els = base.parentElement.querySelectorAll(":scope > *");

	let num = 0;
	for(let q = 0; q < els.length; q++) {
		if (els[q] == base) {
			num = q;
			break;
		}
	}
	tar.className = "";
	tar.className = num;
}

