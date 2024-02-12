let createPokémon = function() {
	let contentOuter = document.createElement("div");
	contentOuter.setAttribute("id","pokémon");
	contentOuter.setAttribute("value","pokémon");
	document.querySelector("#contain").appendChild(contentOuter);
	let navigation = document.createElement("nav");
	let navigationContent = document.createElement("ul");
	let navigationDex = document.createElement("li");
	let navigationDexContent = document.createElement("span");
	let navigationSearch = document.createElement("li");
	let navigationSearchContent = document.createElement("span");
	let navigationSearchInput = document.createElement("input");
	let navigationCount = document.createElement("li");
	let navigationCountContent = document.createElement("h1");
	let navigationCountSpan1 = document.createElement("span");
	let navigationCountSpan2 = document.createElement("span");
	let navigationCountSpan3 = document.createElement("span");
	let navigationGame = document.createElement("li");
	let navigationGameContent = document.createElement("span");
	let navigationGameImg = document.createElement("img");
	let navigationSettings = document.createElement("li");
	let navigationSettingsIcon = document.createElement("figure");
    let navigationSettingsIconText = document.createElement("h1");

	navigationDex.setAttribute("name","dexswitch");
	navigationSearch.setAttribute("name","search");
	navigationSearchInput.setAttribute("type","search");
    navigationSearchInput.setAttribute("name","search");
	navigationSearchInput.setAttribute("placeholder","Search...");
	navigationSearchInput.setAttribute("onfocus","this.placeholder = ''");
	navigationSearchInput.setAttribute("onblur","this.placeholder = 'Search...'");
	navigationSearchInput.setAttribute("autocomplete","off");
	navigationSearchInput.setAttribute("tabindex","0");
	navigationCount.setAttribute("name","count");
	navigationCountSpan2.innerText = "/";
	navigationGame.setAttribute("name","title");
    
	navigationGameImg.src = getMedia(true,["Title"],[PATH_Game_Title])
	navigationSettings.setAttribute("name","settings");
	navigationSettingsIconText.innerText = "⚙️";

    let navigationDexOuter = document.createElement("span");
    let navigationDexInner = document.createElement("span");
	let navigationDexInput = document.createElement("input");
	let navigationDexLabel = document.createElement("label");
    let navigationDexText = document.createElement("h5");
	navigationDexInput.setAttribute("type","radio");
	navigationDexInput.setAttribute("value","1");
	navigationDexInput.setAttribute("name","finaldex-dexswitch-"+GameID);
	navigationDexInput.setAttribute("id","dexswitch1");
	navigationDexInput.setAttribute("autocomplete","off");
	navigationDexLabel.setAttribute("for","dexswitch1");
	navigationDexLabel.setAttribute("name","National Pokédex");
	navigationDexText.innerText = "National Pokédex";
    navigationDexContent.appendChild(navigationDexOuter);
    navigationDexOuter.appendChild(navigationDexInner);
	navigationDexInner.appendChild(navigationDexInput);
	navigationDexInner.appendChild(navigationDexLabel);
    navigationDexLabel.appendChild(navigationDexText);
    navigationDexInput.addEventListener("click", dexMove);
    navigationDexInput.addEventListener("click", dexSwitch);

    let Pokédex = Object.keys(DATA_Pokémon_PokédexID)

	for(let i = 0; i < Pokédex.length; i++) {
		let x = i+2;
		let navigationDexInput = document.createElement("input");
		let navigationDexLabel = document.createElement("label");
        let navigationDexText = document.createElement("h5");
		navigationDexInput.setAttribute("type","radio");
		navigationDexInput.setAttribute("value", x);
		navigationDexInput.setAttribute("name","finaldex-dexswitch-"+GameID);
		navigationDexInput.setAttribute("id","dexswitch"+x);
		navigationDexInput.setAttribute("autocomplete","off");
		navigationDexLabel.setAttribute("for","dexswitch"+x);
		navigationDexLabel.setAttribute("name", Pokédex[i]);
		navigationDexText.innerText = Pokédex[i];
		navigationDexInner.appendChild(navigationDexInput);
		navigationDexInner.appendChild(navigationDexLabel);
        navigationDexLabel.appendChild(navigationDexText);
        navigationDexInput.addEventListener("click", dexMove);
		navigationDexInput.addEventListener("click", dexSwitch);
	}
	contentOuter.appendChild(navigation);
	navigation.appendChild(navigationContent);
	navigationContent.appendChild(navigationDex);
	navigationDex.appendChild(navigationDexContent);
	navigationContent.appendChild(navigationCount);
	navigationCount.appendChild(navigationCountContent);
	navigationCountContent.appendChild(navigationCountSpan1);
	navigationCountContent.appendChild(navigationCountSpan2);
	navigationCountContent.appendChild(navigationCountSpan3);
	navigationContent.appendChild(navigationSearch);
	navigationSearch.appendChild(navigationSearchContent);
	navigationSearchContent.appendChild(navigationSearchInput);
	navigationContent.appendChild(navigationGame);
	navigationGame.appendChild(navigationGameContent);
	navigationGameContent.appendChild(navigationGameImg);
	navigationContent.appendChild(navigationSettings);
	navigationSettings.appendChild(navigationSettingsIcon);
    navigationSettingsIcon.appendChild(navigationSettingsIconText);

    navigationSearchInput.addEventListener("input", function() {search("Pokémon");});
    navigationSearchInput.addEventListener("keyup", function() {search("Pokémon");});


    let team = document.createElement("aside");
    let teamNav = document.createElement("section");
    let teamParty = document.createElement("section");
    let teamBox = document.createElement("section");

    teamParty.setAttribute("name","party");
    teamBox.setAttribute("name","box");
    team.setAttribute("name","team");

    contentOuter.appendChild(team);
    team.appendChild(teamParty);
    team.appendChild(teamBox);
    team.appendChild(teamNav);
    let teamPartyBar = document.createElement("span");
    teamParty.appendChild(teamPartyBar);



    let teamPartyDelete = document.createElement("figure");
    let teamPartyDeleteText = document.createElement("small");
    teamPartyDelete.setAttribute("name","delete");
    teamPartyDelete.setAttribute("type","scale");
    teamPartyDeleteText.innerText = "❌"
    teamPartyBar.appendChild(teamPartyDelete);
    teamPartyDelete.appendChild(teamPartyDeleteText);
 
    teamPartyDelete.addEventListener("click",function(){let els = document.querySelectorAll("#pokémon > aside section[name='party'] > div[data-string]"); let ask = confirm("This cannot be reverted.\nDo you want to continue?"); if (ask) { for(let i = 0; i < els.length; i++) {els[i].setAttribute("data-string","");clearParty(els[i]);}consoleText("Pokémon deleted.");}})

    




    function getDataStrings(els) {
        let res = [];

        for (let i = 0; i < els.length; i++) {
            let ds = els[i].getAttribute("data-string");
            if (ds != undefined) {
                res.push(ds)
            }
        }
        return res;
    }


    let teamPartyEditor = document.createElement("figure");
    let teamPartyEditorText = document.createElement("small");
    teamPartyEditor.setAttribute("name","editor");
    teamPartyEditor.setAttribute("type","invert");
    teamPartyEditorText.innerText = "☰"
    teamPartyBar.appendChild(teamPartyEditor);
    teamPartyEditor.appendChild(teamPartyEditorText);

    teamPartyEditor.addEventListener("click",function(){let dataStrings = getDataStrings(document.querySelectorAll("#pokémon > aside section[name='party'] > div:not([data-string=''])"));createEditor(dataStrings);})

    let teamPartyInput = document.createElement("input");
    let teamPartyLabel = document.createElement("label");
    let teamPartyText = document.createElement("p");
    let teamPartyIndicator = document.createElement("b");
    teamPartyIndicator.setAttribute("type","invert");
    teamPartyInput.setAttribute("type","checkbox");
    teamPartyInput.setAttribute("name","partybox1");
    teamPartyInput.setAttribute("id","partybox1");
    teamPartyInput.setAttribute("value","party");
    teamPartyLabel.setAttribute("for","partybox1");
    teamPartyIndicator.setAttribute("class","indicator");
    teamPartyText.innerText = "Party";
    teamNav.appendChild(teamPartyInput);
    teamNav.appendChild(teamPartyLabel);
    teamPartyLabel.appendChild(teamPartyIndicator);
    teamPartyIndicator.appendChild(teamPartyText);


    let teamPartyExport = document.createElement("figure");
    let teamPartyExportTxt = document.createElement("small");
    let teamPartyExportLabel = document.createElement("label");
    let teamPartyExportInput = document.createElement("input");
    let teamPartyExportOl = document.createElement("ol");
    teamPartyExport.setAttribute("name","export");
    teamPartyExport.setAttribute("type","rotate-right");
    teamPartyExport.classList.add("drop");
    teamPartyExportTxt.innerText = "⮜";
    teamPartyExportInput.setAttribute("type","checkbox");
    teamPartyExportInput.setAttribute("name","team-party-export-input");
    teamPartyExportInput.setAttribute("id","team-party-export-input");
    teamPartyExportLabel.setAttribute("for","team-party-export-input");
    teamPartyBar.appendChild(teamPartyExport)
    teamPartyExport.appendChild(teamPartyExportLabel)
    teamPartyExportLabel.appendChild(teamPartyExportTxt)
    teamPartyExportLabel.appendChild(teamPartyExportInput)
    teamPartyExportLabel.appendChild(teamPartyExportOl)
    teamPartyExport.addEventListener("click",dropRelPos);
    teamPartyExport.click();
    let teamPartyExportOpts = ["Import Pokémon","Copy Data Strings","Send to Damage Calculator"];
    for(let e = 0; e < teamPartyExportOpts.length; e++) {
        let teamPartyExportLi = document.createElement("li");
        let teamPartyExportText = document.createElement("small");
        teamPartyExportLi.setAttribute("name",teamPartyExportOpts[e]);
        teamPartyExportText.innerText = teamPartyExportOpts[e];
        teamPartyExportOl.appendChild(teamPartyExportLi);
        teamPartyExportLi.appendChild(teamPartyExportText);
        teamPartyExportLi.addEventListener("click",teamPartyExportFunction);
    }



    function teamPartyExportFunction() {
        let base = findUpTag(this,"SECTION");
        let tars = base.querySelectorAll(":scope > div:not([data-string=''])");

        let res = [];

        for (let i = 0; i < tars.length; i++) {
            res.push(tars[i].getAttribute("data-string"))
        }

        


        let dataStrings = res.join("\n");

        let val = this.getAttribute("name");

        if (val == "Copy Data Strings") {
            if (tars.length == 0) {
                consoleText("No Pokémon in Party!");
                return;
            }

            navigator.clipboard.writeText(dataStrings);
            console.log(dataStrings);
            consoleText("Copied!");
        }
        else if (val == "Send to Damage Calculator") {
            if (tars.length == 0) {
                consoleText("No Pokémon in Party!");
                return;
            }

            let dmgBox = document.querySelector("#contain div#tool div#dmg *[name='party'] > span[name='team 1']");
			

            if (dmgBox.getAttribute("data-string") == "") {
                DMGPartyCreate(dmgBox,dataStrings);
                SwitchTab("Tools","Damage Calculator");
                return;
            }

            
         
            

            let ask = confirm("Do you want to replace exising Pokémon in the Party?");
            if (ask) {
                dmgBox.setAttribute("data-string","");
                dmgBox.setAttribute("data-row","1")
                DMGPartyCreate(dmgBox,dataStrings);
                SwitchTab("Tools","Damage Calculator");
                return;
            }

            let ask2 = confirm("Do you want to continue without overriding existing Pokémon?");
            if (ask2) {
                DMGPartyCreate(dmgBox,dataStrings);
                SwitchTab("Tools","Damage Calculator");
                return;
            }
        }
        else if (val == "Import Pokémon") {
            let tars = base.querySelectorAll(":scope > div[data-string='']");
            if (tars.length == 0) {
                consoleText("Party is full!");
                return;
            }
            else {
                let ask = prompt("Enter Pokémon Data Strings:","");

                if (ask != null && ask != "") {
                    ask = ask.replaceAll("\r","");
                    ask = ask.replaceAll("\n","_");
                    let data = splitStr(ask,"_");
                    for (let i = 0; i < tars.length; i++) {
                        if (data[i] != undefined && data[i] != "") {
                            tars[i].setAttribute("data-string",data[i])
                            partyApply(tars[i]);
                        }
                    }
                    if (data.length > tars.length) {
                        consoleText("Could not fit all Pokémon into Party.")
                    }
                }
            }
        }

    }


    let teamBoxInput = document.createElement("input");
    let teamBoxLabel = document.createElement("label");
    let teamBoxText = document.createElement("p");
    let teamBoxIndicator = document.createElement("b");
    teamBoxIndicator.setAttribute("type","invert");
    teamBoxInput.setAttribute("type","checkbox");
    teamBoxInput.setAttribute("name","partybox2");
    teamBoxInput.setAttribute("id","partybox2");
    teamBoxInput.setAttribute("value","box");
    teamBoxLabel.setAttribute("for","partybox2");
    teamBoxIndicator.setAttribute("class","indicator");
    teamBoxText.innerText = "Box";
    teamNav.appendChild(teamBoxInput);
    teamNav.appendChild(teamBoxLabel);
    teamBoxLabel.appendChild(teamBoxIndicator);
    teamBoxIndicator.appendChild(teamBoxText);

    teamPartyInput.addEventListener("change", partyBoxSwitch);
    teamBoxInput.addEventListener("change", partyBoxSwitch);



    navigationSettingsIcon.setAttribute("onclick",`let s = document.querySelector('#pokémon > aside[name="settings"]'); s.classList.toggle('open'); this.classList.toggle('open');`);


    teamParty.setAttribute("data-state","");


   

    for (let i = 0; i < 6; i++) {
        let teamDiv = document.createElement("div");
        
        let teamAdd = document.createElement("button");
        let teamAddWrap = document.createElement("span");
        let teamAddText = document.createElement("strong");
        let teamLeft = document.createElement("span");
        let teamGrab = document.createElement("b");
        let teamPokémon = document.createElement("span");


        let teamImgOuter = document.createElement("span");
        let teamImg = document.createElement("img");

        let teamRight = document.createElement("span");
        let teamStatsButton = document.createElement("figure");
        let teamLevel = document.createElement("input");
        let teamNickOuter = document.createElement("span");
        let teamNick = document.createElement("input");


        teamDiv.setAttribute("data-string","");
        teamImg.src = "";
        teamImg.setAttribute("name","img")
        teamImg.addEventListener("click", modalData);
        teamImg.setAttribute("function","modalData");

        teamGrab.innerText = "⋮⋮⋮";
        teamGrab.setAttribute("name","grab");
        teamStatsButton.setAttribute("type","rotate");
        teamStatsButton.innerText = "↺";

        teamAdd.setAttribute("type","scale");
        teamAddWrap.classList.add("indicator");
        teamAddText.innerText = "+";

        teamNickOuter.setAttribute("name","name");
        teamImgOuter.setAttribute("name","pokémon");

    
        teamLevel.setAttribute("type","number");
        teamLevel.setAttribute("min","0");
        teamLevel.setAttribute("max","100");
        teamLevel.title = "Level";
        teamLevel.setAttribute("placeholder","Lvl.");
        teamLevel.setAttribute("name","level");
        teamNick.setAttribute("type","text");
        teamNick.setAttribute("name","nick");
        teamNick.setAttribute("placeholder","Pokémon");
        teamNick.setAttribute("data_placeholder","Pokémon");
        teamNick.setAttribute("onfocus","this.placeholder='';")
        teamNick.setAttribute("onblur","this.placeholder=this.getAttribute('data_placeholder');");

        if (Generation >= 1 && Generation <= 5) {
            teamNick.setAttribute("maxlength","10");
        }
        else if (Generation >= 6) {
            teamNick.setAttribute("maxlength","12");
        }
   


        let teamExit = document.createElement("figure");
        let teamExitTxt = document.createElement("small");
        let teamExitLabel = document.createElement("label");
        let teamExitInput = document.createElement("input");
        let teamExitOl = document.createElement("ol");
        teamExit.setAttribute("name","exit");
        teamExit.classList.add("drop");
        teamExit.setAttribute("type","scale");
        teamExitTxt.innerText = "❌";
        teamExitInput.setAttribute("type","checkbox");
        teamExitInput.setAttribute("name","team-exit-input-"+i);
        teamExitInput.setAttribute("id","team-exit-input-"+i);
        teamExitLabel.setAttribute("for","team-exit-input-"+i);
        teamLeft.appendChild(teamExit)
        teamExit.appendChild(teamExitLabel)
        teamExitLabel.appendChild(teamExitTxt)
        teamExitLabel.appendChild(teamExitInput)
        teamExitLabel.appendChild(teamExitOl)
        teamExit.addEventListener("click",dropRelPos);
        teamExit.click();
        let teamExitOpts = ["Send to Box","Delete"];
        for(let e = 0; e < teamExitOpts.length; e++) {
            let teamExitLi = document.createElement("li");
            let teamExitText = document.createElement("small");
            teamExitLi.setAttribute("name",teamExitOpts[e]);
            teamExitText.innerText = teamExitOpts[e];
            teamExitOl.appendChild(teamExitLi);
            teamExitLi.appendChild(teamExitText);
            teamExitLi.addEventListener("click",teamExitChange);
        }


        teamAdd.addEventListener("click", partyAdd)

        teamLevel.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
        teamLevel.addEventListener("change", inputMinMax);
        teamLevel.addEventListener("change", partySave);
        teamLevel.addEventListener("change", function() {calcPartyStat(this);});

        teamNick.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
        teamNick.addEventListener("click",function(event){if(event.which === 0){this.blur()}});

        teamNick.addEventListener("change",partySave);


        teamParty.appendChild(teamDiv);
        teamDiv.appendChild(teamLeft);
        teamLeft.appendChild(teamLevel);
        teamLeft.appendChild(teamGrab);
        teamDiv.appendChild(teamAdd);
        teamAdd.appendChild(teamAddWrap);
        teamAddWrap.appendChild(teamAddText);
        teamDiv.appendChild(teamPokémon);


        if (HeldItem == true) {
            let teamItemOuter = document.createElement("span");
            teamItemOuter.setAttribute("name","item");
            teamPokémon.appendChild(teamItemOuter);

            let teamItemSelect = document.createElement("select");
            teamItemSelect.setAttribute("name","item");
            teamItemOuter.appendChild(teamItemSelect);

            let teamHeldItemImage = document.createElement("img");
            teamHeldItemImage.src = "";
            teamHeldItemImage.style.display = "none";
            teamHeldItemImage.setAttribute("name","item");
            teamImgOuter.appendChild(teamHeldItemImage);

            teamItemSelect.addEventListener("change",function(){let el = this.parentElement.parentElement.querySelector(":scope img[name='item']"); if (this.value != "") {el.style.removeProperty("display")} else {el.style.display='none';}})
            teamItemSelect.addEventListener("change",partySave);
            teamItemSelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
            teamItemSelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
            teamItemSelect.addEventListener("change", partyItem);
            teamHeldItemImage.addEventListener("click", dataRedirect);
            teamHeldItemImage.setAttribute("function","dataRedirect");
        }


        teamPokémon.appendChild(teamImgOuter);
        teamImgOuter.appendChild(teamImg);
        teamPokémon.appendChild(teamNickOuter);
        teamNickOuter.appendChild(teamNick);
        



 












		let teamExport = document.createElement("figure");
        let teamExportTxt = document.createElement("small");
        let teamExportLabel = document.createElement("label");
        let teamExportInput = document.createElement("input");
        let teamExportOl = document.createElement("ol");
        teamExport.setAttribute("name","export");
        teamExport.classList.add("drop");
        teamExport.setAttribute("type","rotate-right");
        teamExportTxt.innerText = "⮜";
        teamExportInput.setAttribute("type","checkbox");
        teamExportInput.setAttribute("name","team-export-input-"+i);
        teamExportInput.setAttribute("id","team-export-input-"+i);
        teamExportLabel.setAttribute("for","team-export-input-"+i);
        teamLeft.appendChild(teamExport)
        teamExport.appendChild(teamExportLabel)
        teamExportLabel.appendChild(teamExportTxt)
        teamExportLabel.appendChild(teamExportInput)
        teamExportLabel.appendChild(teamExportOl)
        teamExport.addEventListener("click",dropRelPos);
        teamExport.click();
        let teamExportOpts = ["Copy Data String","Add to Damage Calculator","Add Copy to Party","Add Copy to Box","Change Evolution","Change Form"];
        for(let e = 0; e < teamExportOpts.length; e++) {
            let teamExportLi = document.createElement("li");
            let teamExportText = document.createElement("small");
            teamExportLi.setAttribute("name",teamExportOpts[e]);
            teamExportText.innerText = teamExportOpts[e];
            teamExportOl.appendChild(teamExportLi);
            teamExportLi.appendChild(teamExportText);
            teamExportLi.addEventListener("click",teamExportChange);
        }

        


        function teamExportChange() {
            let tar = findUpAtt(this,"data-string");
            let val = this.getAttribute("name");
            let dataString = tar.getAttribute("data-string");
            let dataStringObj = dataStringToObj(dataString);


            let pok = dataStringObj["pok"];
            let int = getPokémonInt(pok);



            if (int == undefined) {
                consoleText("An error occured.")
                return;
            }


            let els = document.querySelectorAll('#pokémon > aside[name="team"] section div[data-string=""]');
       

            if (val == "Add Copy to Box") {
                createBox(dataString);
                consoleText("Copy added to Box.");
            }
            else if (val == "Add Copy to Party") {
                if (els.length > 0) {
                    els[0].setAttribute("data-string",dataStringObj);
                    partyApply(els[0]);
                    consoleText("Copy added to Party.");
                }
                else {
                    consoleText("Party is full!")
                }
            }
            else if (val == "Copy Data String") {
                navigator.clipboard.writeText(dataString);
                console.log(dataString);
                consoleText("Copied!");
            }
            else if (val == "Change Evolution") {
                changePartyEvolution(tar,tar.querySelector(":scope img[value]").getAttribute("value"));
            }
            else if (val == "Change Form") {
                changePartyForm(tar,tar.querySelector(":scope img[value]").getAttribute("value"));
            }
            else if (val == "Add to Damage Calculator") {
                let dmgSlots = document.querySelectorAll("#contain div#tool div#dmg *[name='battle'] span[name='team 1'] > div[data-string]");

                let check = false;
                for (let t = 0; t < dmgSlots.length; t++) {
                    let ds = dmgSlots[t].getAttribute("data-string");
                    let dsobj = dataStringToObj(ds);
    
                    if (dsobj["pok"] == undefined || dsobj["pok"] == "") {
                       check = true;
                    }

                    if (check) {
                        DMGSetDataString(dmgSlots[t],dataString);
                        SwitchTab("Tools","Damage Calculator");
                        return;
                    }
                }

          
                let ask = confirm("Damage Calculator field is full.\nDo you want to replace existing Pokémon?");

                if (ask) {
                    DMGSetDataString(dmgSlots[0],dataString);
                    SwitchTab("Tools","Damage Calculator");
                }
                else {
                    let ask2 = confirm("Do you instead want to add it to the Party?");
                    if (ask2) {
                        let dmgBox = document.querySelector("#contain div#tool div#dmg *[name='party'] > span[name='team 1']");
                        DMGPartyCreate(dmgBox,dataString);
                        SwitchTab("Tools","Damage Calculator");
                    }
                }
                
            }
    



 







        }

        function teamExitChange() {
            let tar = findUpAtt(this,"data-string");
          
            let val = this.getAttribute("name");
            let dataString = tar.getAttribute("data-string");
            let dataStringObj = dataStringToObj(dataString);

            let pok = dataStringObj["pok"];
            let int = getPokémonInt(pok);

            if (int == undefined) {
                consoleText("An error occured.")
                return;
            }

            if (val == "Delete") {
                let ask = confirm("The Pokémon's data will not be saved.\nDo you want to continue?");
                if (ask) {
                    tar.setAttribute("data-string","");
                    clearParty(tar);
                    consoleText("Pokémon deleted.");
                }
            }
            else if (val == "Send to Box") {
                consoleText("Sent "+pok+" to Box.");
                createBox(dataString);
                tar.setAttribute("data-string","");
                clearParty(tar);
            }
        }
    
  
        let partyPokData = document.createElement("span");
        partyPokData.setAttribute("name","data");
        teamDiv.appendChild(partyPokData)
     
        let partyPokMoves = document.createElement("span");
        let partyPokMovesTitle = document.createElement("span");
        let partyPokMovesTitleText = document.createElement("small");
        partyPokMovesTitleText.innerText = "Moves";
        partyPokMoves.setAttribute("name","moves");
        partyPokMoves.classList.add("scroll");
        partyPokData.appendChild(partyPokMoves);
        partyPokMoves.appendChild(partyPokMovesTitle);
        partyPokMovesTitle.appendChild(partyPokMovesTitleText);


        let partyPokMovesMove = document.createElement("span");
        partyPokMoves.appendChild(partyPokMovesMove);

        for (let p = 0; p < 4; p++) {
            let partyPokMovesMoveSelect = document.createElement("select");
            partyPokMovesMoveSelect.setAttribute("name","move"+p);
            partyPokMovesMove.appendChild(partyPokMovesMoveSelect);
            partyPokMovesMoveSelect.addEventListener("change",partySave);
            partyPokMovesMoveSelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
            partyPokMovesMoveSelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
            partyPokMovesMoveSelect.addEventListener("change",function(){let tar = event.target; if (!tar.value.includes("Move #")) {tar.title = formatMoveData(tar.value);} else {tar.removeAttribute("title");}})
        }

        if (Ability.length > 0) {
            let partyPokMovesAbility = document.createElement("span");
            let partyPokMovesAbilitySelect = document.createElement("select");
            partyPokMovesAbility.setAttribute("name","ability");
            partyPokMovesAbilitySelect.setAttribute("name","ability");
            partyPokMoves.appendChild(partyPokMovesAbility);
            partyPokMovesAbility.appendChild(partyPokMovesAbilitySelect);
            partyPokMovesAbilitySelect.addEventListener("change",partySave);
            partyPokMovesAbilitySelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
            partyPokMovesAbilitySelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
        }


        let partyPokStats = document.createElement("span");
        let partyPokStatsTitle = document.createElement("span");
        let partyPokStatsTitleText = document.createElement("small");
        partyPokStatsTitleText.innerText = "Stats";
        partyPokStats.setAttribute("name","stats");
        partyPokStats.classList.add("scroll");
        partyPokData.appendChild(partyPokStats);
        partyPokStats.appendChild(partyPokStatsTitle);
        partyPokStatsTitle.appendChild(partyPokStatsTitleText);


        let partyPokStatsWrap = document.createElement("span");
        partyPokStatsWrap.setAttribute("name","nums")
        partyPokStats.appendChild(partyPokStatsWrap)


        
   
  

        let headerStats = [...(Stats)]

        let partyPokStatsHeaderInner = document.createElement("span");
        partyPokStatsWrap.appendChild(partyPokStatsHeaderInner);
        for (let q = 0; q < headerStats.length; q++) {
            let partyPokStatsHeaderText = document.createElement("small");
            partyPokStatsHeaderText.innerText = headerStats[q]["Name"];
            partyPokStatsHeaderInner.appendChild(partyPokStatsHeaderText)
        }

        let ivStats = [...(Stats)]

        let partyPokStatsIVInner = document.createElement("span");
        partyPokStatsIVInner.setAttribute("name","iv");
        partyPokStatsWrap.appendChild(partyPokStatsIVInner);
        
        for (let q = 0; q < ivStats.length; q++) {
            let partyPokStatsIVInput = document.createElement("input");
            partyPokStatsIVInput.setAttribute("type","number");
            partyPokStatsIVInput.setAttribute("name","iv");

            partyPokStatsIVInput.setAttribute("title","Individual Value"+"\n"+ivStats[q]["Name"]);
            if (Generation >= 1 && Generation <= 2) {
                partyPokStatsIVInput.setAttribute("min","0");
                partyPokStatsIVInput.setAttribute("max","15");
            }
            else if (Generation >= 3) {
                partyPokStatsIVInput.setAttribute("min","0");
                partyPokStatsIVInput.setAttribute("max","31");
            }
            partyPokStatsIVInput.addEventListener("change", inputMinMax);

            
            partyPokStatsIVInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
            partyPokStatsIVInput.addEventListener("change", function() {calcPartyStat(this);});
            partyPokStatsIVInput.addEventListener("change",partySave);
            partyPokStatsIVInner.appendChild(partyPokStatsIVInput);

            partyPokStatsIVInput.setAttribute("placeholder","IV")
            partyPokStatsIVInput.setAttribute("onblur","this.placeholder = 'IV'");
            partyPokStatsIVInput.setAttribute("onfocus","this.placeholder = ''");
            partyPokStatsIVInput.addEventListener("change", function() {let tar = event.target; let max = tar.max; let p = (tar.value/max)*100; tar.style.color = "hwb("+p+" 0% 0% / 1)";});
        }





        let evStats = [...(Stats)]
   
        let partyPokStatsEVInner = document.createElement("span");
        partyPokStatsEVInner.setAttribute("name","ev");
        partyPokStatsWrap.appendChild(partyPokStatsEVInner);
        for (let q = 0; q < evStats.length; q++) {
            let partyPokStatsEVInput = document.createElement("input");
            partyPokStatsEVInput.setAttribute("type","number");
            partyPokStatsEVInput.setAttribute("name","ev");

            if (Generation >= 1 && Generation <= 2) {
                partyPokStatsEVInput.setAttribute("min","0");
                partyPokStatsEVInput.setAttribute("max","255");
                partyPokStatsEVInput.setAttribute("data-max","255");
                partyPokStatsEVInput.setAttribute("title","Effort Value"+"\n"+evStats[q]["Name"]);
                partyPokStatsEVInput.setAttribute("placeholder","EV")
                partyPokStatsEVInput.setAttribute("onblur","this.placeholder = 'EV'");
                partyPokStatsEVInput.setAttribute("onfocus","this.placeholder = ''");
            }
            else if (GameID >= 31 && GameID <= 32) {
                partyPokStatsEVInput.setAttribute("min","0");
                partyPokStatsEVInput.setAttribute("max","200");
                partyPokStatsEVInput.setAttribute("title","Awakening Value"+"\n"+evStats[q]["Name"]);
                partyPokStatsEVInput.setAttribute("data-max","200");
                partyPokStatsEVInput.setAttribute("placeholder","AV")
                partyPokStatsEVInput.setAttribute("onblur","this.placeholder = 'AV'");
                partyPokStatsEVInput.setAttribute("onfocus","this.placeholder = ''");
            }
            else if (Generation >= 3) {
                partyPokStatsEVInput.setAttribute("min","0");
                partyPokStatsEVInput.setAttribute("max","255");
                partyPokStatsEVInput.setAttribute("data-max","255");
                partyPokStatsEVInput.setAttribute("title","Effort Value"+"\n"+evStats[q]["Name"]);
                partyPokStatsEVInput.addEventListener("blur", evInputMax);
                partyPokStatsEVInput.addEventListener("focus", evInputMax);
                partyPokStatsEVInput.addEventListener("change", evInputMax);
                partyPokStatsEVInput.setAttribute("placeholder","EV")
                partyPokStatsEVInput.setAttribute("onblur","this.placeholder = 'EV'");
                partyPokStatsEVInput.setAttribute("onfocus","this.placeholder = ''");
            }
            partyPokStatsEVInput.addEventListener("change", inputMinMax);
        
            partyPokStatsEVInput.addEventListener("change",partySave);
            partyPokStatsEVInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
            partyPokStatsEVInput.addEventListener("change", function() {calcPartyStat(this);});
            partyPokStatsEVInner.appendChild(partyPokStatsEVInput);
            partyPokStatsEVInput.addEventListener("change", function() {let tar = event.target; let max = parseInt(tar.getAttribute("data-max")); let p = (tar.value/max)*100; tar.style.color = "hwb("+p+" 0% 0% / 1)";});

        }



        let totalStats = [...(Stats)]

        let partyPokStatsTotalInner = document.createElement("span");
        partyPokStatsTotalInner.setAttribute("name","total");
        partyPokStatsWrap.appendChild(partyPokStatsTotalInner);
        for (let q = 0; q < totalStats.length; q++) {
            let partyPokStatsTotalInput = document.createElement("input");
            partyPokStatsTotalInput.setAttribute("type","number");
            partyPokStatsTotalInput.setAttribute("name","total");
            partyPokStatsTotalInput.setAttribute("min","0");
            partyPokStatsTotalInput.setAttribute("max","0");
            partyPokStatsTotalInput.setAttribute("placeholder","0")
            partyPokStatsTotalInput.addEventListener("change", inputMinMax);
            partyPokStatsTotalInput.setAttribute("title",totalStats[q]["Name"]);
            partyPokStatsTotalInput.setAttribute("disabled","");
            
            partyPokStatsTotalInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
            partyPokStatsTotalInput.addEventListener("change", function() {calcPartyStat(this);});
            partyPokStatsTotalInner.appendChild(partyPokStatsTotalInput);
        }
        


        if (Natures.length > 0) {
            let partyPokStatsNatures = document.createElement("span");
            let partyPokStatsNaturesSelect = document.createElement("select");
            partyPokStatsNatures.setAttribute("name","nature");
            partyPokStatsNaturesSelect.setAttribute("name","nature");
            partyPokStats.appendChild(partyPokStatsNatures);
            partyPokStatsNatures.appendChild(partyPokStatsNaturesSelect);
            partyPokStatsNaturesSelect.addEventListener("change",partySave);
            partyPokStatsNaturesSelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
            partyPokStatsNaturesSelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
            partyPokStatsNaturesSelect.addEventListener("change", function() {calcPartyStat(this);});
            for (let q = 0; q < Natures.length; q++) {
                let partyPokStatsNature = document.createElement("option");
                partyPokStatsNature.innerText = Natures[q];
                partyPokStatsNaturesSelect.appendChild(partyPokStatsNature);
            }
        }
   







        
        teamDiv.appendChild(teamRight);
        teamRight.appendChild(teamStatsButton);

        if (Gender == true) {
            let teamGender = document.createElement("select");
            teamGender.setAttribute("name","gender");
            teamRight.appendChild(teamGender);
            teamGender.setAttribute("type","icon");
            teamGender.setAttribute("title","Gender");
            teamGender.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
            teamGender.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
            teamGender.addEventListener("change",partySave);
            teamGender.addEventListener("input",function(){this.name = this.value;})
        }

        teamRight.appendChild(teamExport);

        teamStatsButton.addEventListener("click", partyDataSwitch);




    }



    let boxDiv = document.createElement("ul");
    teamBox.appendChild(boxDiv);



    let teamBoxTrash = document.createElement("figure");
    let teamBoxTrashText = document.createElement("header");
    teamBoxTrashText.innerText = "🛇";
    teamBoxTrash.setAttribute("name","trash");
    teamBox.appendChild(teamBoxTrash);
    teamBoxTrash.appendChild(teamBoxTrashText);
    teamBoxTrash.addEventListener("click", BoxDelete);




    let boxExport = document.createElement("figure");
    let boxExportTxt = document.createElement("header");
    let boxExportLabel = document.createElement("label");
    let boxExportInput = document.createElement("input");
    let boxExportOl = document.createElement("ol");
    boxExport.setAttribute("name","export");
    boxExport.setAttribute("type","scale");
    boxExport.classList.add("drop");
    boxExportTxt.innerText = "🟆";
    boxExportInput.setAttribute("type","checkbox");
    boxExportInput.setAttribute("name","box-export-input");
    boxExportInput.setAttribute("id","box-export-input");
    boxExportLabel.setAttribute("for","box-export-input");
    teamBox.appendChild(boxExport)
    boxExport.appendChild(boxExportLabel)
    boxExportLabel.appendChild(boxExportTxt)
    boxExportLabel.appendChild(boxExportInput)
    boxExportLabel.appendChild(boxExportOl)
    boxExport.addEventListener("click",dropRelPos);
    boxExport.click();
    let boxExportOpts = ["Copy Data Strings","Send to Damage Calculator"];
    for(let e = 0; e < boxExportOpts.length; e++) {
        let boxExportLi = document.createElement("li");
        let boxExportText = document.createElement("small");
        boxExportLi.setAttribute("name",boxExportOpts[e]);
        boxExportText.innerText = boxExportOpts[e];
        boxExportOl.appendChild(boxExportLi);
        boxExportLi.appendChild(boxExportText);
        boxExportLi.addEventListener("click",boxExportFunction);
        
    }


    function boxExportFunction() {
        let base = findUpTag(this,"SECTION");
        let tars = base.querySelectorAll(":scope ul li");

        let res = [];

        if (tars.length == 0) {
            consoleText("No Pokémon in Box!");
            return;
        }
        else {
            for (let i = 0; i < tars.length; i++) {
                res.push(getBoxData(tars[i]))
            }
        }


        let dataStrings = res.join("\n");

        let val = this.getAttribute("name");

        if (val == "Copy Data Strings") {
            navigator.clipboard.writeText(dataStrings);
            console.log(dataStrings);
            consoleText("Copied!");
        }
        else if (val == "Send to Damage Calculator") {
            let dmgBox = document.querySelector("#contain div#tool div#dmg *[name='party'] > span[name='team 1']");

				
            if (dmgBox.getAttribute("data-string") == "") {
                dmgBox.setAttribute("data-row","1");
                DMGPartyCreate(dmgBox,dataStrings);
                SwitchTab("Tools","Damage Calculator");
                return;
            }

            
            let ask = confirm("Do you want to replace exising Pokémon in the Party?");
            
            if (ask) {
                dmgBox.setAttribute("data-string","");
                dmgBox.setAttribute("data-row","1")
                DMGPartyCreate(dmgBox,dataStrings);
                SwitchTab("Tools","Damage Calculator");
                return;
            }

            let ask2 = confirm("Do you want to continue without overriding existing Pokémon?");
            if (ask2) {
                dmgBox.setAttribute("data-row","1");
                DMGPartyCreate(dmgBox,dataStrings);
                SwitchTab("Tools","Damage Calculator");
                return;
            }
        }
    
    }

















    function BoxDelete() {
        let items = document.querySelectorAll("#pokémon aside[name='team'] section[name='box'] > ul li");

        if (items.length <= 0) {
            consoleText ("No Pokémon found in Box.")
            return;
        }

        let lock = confirm("Deleting all the Pokémon in the box.\nDo you want to continue?");

        if (lock) {
            let ask = confirm("This cannot be reverted.\nDo you want to continue?");

            if (ask) {
                for (let u = 0; u < items.length; u++) {
                    items[u].remove("hover");
                }
                boxMemory("Save");
                consoleText("Box successfully cleared.");
            }
        }
    }



    $(function() {
        $('#pokémon > aside section[name="box"] > ul').sortable({
            start: function(e, ui) {
                boxMemory("Save");
                document.body.classList.add("dragging");
            },
            stop: function(e, ui) {
                boxMemory("Save");
                document.body.classList.remove("dragging");
            },
        });

        $('#pokémon > aside section[name="party"] > div span[name="moves"] > span:nth-child(2)').sortable({
            stop: function(e,ui) {
                reNumberMove(e.target);
            },
            axis: "y",
            scroll: false,
        });

        $('#pokémon > aside section[name="box"] > figure[name="trash"]').droppable({
            drop: function(e, ui) {
                if (saveddrag != undefined) {
                    deleteBox(saveddrag);
                    consoleText("Pokémon deleted.");
                }
            }
        });

        $('#pokémon > aside[name="team"] *.indicator').droppable({
            drop: function(e, ui) {
                let helper = ui.helper["context"];
                let data = helper.getAttribute("data-string");
                data = undDel(data,"pok:"+getPokémonName(helper.id))
                data_obj = dataStringToObj(data);


                let dir = e.target.firstChild.innerText;


                if (dir == "+") {
                    let tar = findUpTag(e.target,"DIV");
                    if (tar != undefined && helper.tagName != "DIV") {
                        tar.setAttribute("data-string",data);
                        partyApply(tar);
                        consoleText("Sent "+data_obj["pok"]+" to Party.")
                    }
                }
                else if (dir == "Party") {
                    let tars = document.querySelectorAll('#pokémon > aside[name="team"] section[name="party"] > div[data-string=""]');
                    if (tars.length > 0) {
                        tars[0].setAttribute("data-string",data);
                        partyApply(tars[0]);
                        consoleText("Sent "+data_obj["pok"]+" to Party.")
                    }
                    else {
                        consoleText("Party is full!");
                    }
                }
                else if (dir == "Box") {
                    createBox(data);
                    consoleText("Added "+data_obj["pok"]+" to the Box.")
                }
            }
        });



    });


    
    $(function() {
        $('#pokémon > aside section[name="party"]').sortable({
            stop: function(e,ui) {
            },
            handle:"*[name='grab']",
            cursor:"grabbing",
            axis: "y",
            scroll: false,
            items:"> div",
        });
    });
    
/*
    let PartyPlus = document.querySelectorAll('#pokémon aside[name="team"] section[name="party"] aside > b');
    let PartyBox = document.querySelectorAll('#pokémon > aside[name="team"] section:not([name]) > label');

    let PPPB = [PartyPlus,PartyBox]
    for(let u = 0; u < PPPB.length; u++) {
        for(let q = 0; q < PPPB[u].length; q++) {
            PPPB[u][q].addEventListener("dragenter",dragEnter);
            PPPB[u][q].addEventListener("dragleave",dragLeave);
            PPPB[u][q].addEventListener("dragover",dragOver);
            PPPB[u][q].addEventListener("drop",dragDrop);
        }
    }
*/


	let content = document.createElement("div");
	let contentInner = document.createElement("ul");
	contentOuter.appendChild(content);
	content.appendChild(contentInner);


    let settings = document.createElement("aside");
    settings.setAttribute("name","settings");
	contentOuter.appendChild(settings);


    let settingsDefaultResizeOuter = document.createElement("span");
    let settingsDefaultResize = document.createElement("div");
    let settingsDefaultResizeValue = document.createElement("p");
    let settingsDefaultResizeInput = document.createElement("input");



    let settingsDefaultImgtypeOuter = document.createElement("span");
    let settingsDefaultImgtypeOuterLeft = document.createElement("span");
    let settingsDefaultImgtypePath = document.createElement("select");
    let settingsDefaultImgtypeOuterRight = document.createElement("span");
    let settingsDefaultImgtypeImage = document.createElement("img");
    let settingsDefaultImgtypeExecute = document.createElement("button");
    let settingsDefaultImgtypeExecuteText = document.createElement("p");


  


    settingsDefaultImgtypePath.setAttribute("name","itype")
    settingsDefaultImgtypeExecute.setAttribute("type","small")
    settingsDefaultImgtypeExecuteText.innerText = "Apply";

    settingsDefaultImgtypeOuter.setAttribute("name","imagetype");
    settingsDefaultResizeOuter.setAttribute("name","resize");
    settingsDefaultResizeInput.setAttribute("type","range");
    settingsDefaultResizeInput.setAttribute("id","resizer");
    settingsDefaultResizeInput.setAttribute("name","resizer");
    settingsDefaultResizeInput.setAttribute("min","60");
    settingsDefaultResizeInput.setAttribute("max","420");
    settingsDefaultResizeInput.setAttribute("value","240");
    settingsDefaultResizeInput.setAttribute("step","60");
    settingsDefaultResizeInput.setAttribute("autocomplete","off");
 

    settings.appendChild(settingsDefaultImgtypeOuter);
    settingsDefaultImgtypeOuter.appendChild(settingsDefaultImgtypeOuterLeft);
    settingsDefaultImgtypeOuterLeft.appendChild(settingsDefaultImgtypePath);

    settingsDefaultImgtypeOuter.appendChild(settingsDefaultImgtypeOuterRight);
    settingsDefaultImgtypeOuterRight.appendChild(settingsDefaultImgtypeImage);
    settingsDefaultImgtypeOuterRight.appendChild(settingsDefaultImgtypeExecute);
    settingsDefaultImgtypeExecute.appendChild(settingsDefaultImgtypeExecuteText);


    settings.appendChild(settingsDefaultResizeOuter);
    settingsDefaultResizeOuter.appendChild(settingsDefaultResize);
    settingsDefaultResize.appendChild(settingsDefaultResizeValue);
    settingsDefaultResize.appendChild(settingsDefaultResizeInput);

    settingsDefaultResizeInput.addEventListener("change",resizeDiv);



   
    
    let itypes = getDirs([PATH_Pokémon_Battle_Default_Front,PATH_Pokémon_Battle_Shiny_Front,PATH_Pokémon_Art])
    itypes = itypes.map(function(x){return x.replaceAll(PATH_Pokémon,'').replace("/"+x.split("/")[x.split("/").length-1],"").replaceAll(PATH_Pokémon,'')})
    itypes = [...new Set(itypes)]

    itypeorder = ["Battle/Default/Front/PNG","Battle/Default/Front/GIF","Battle/Shiny/Front/PNG","Battle/Shiny/Front/GIF","Battle/Default/Back/PNG","Battle/Default/Back/GIF","Battle/Shiny/Back/PNG","Battle/Shiny/Back/GIF","^Art"]
    itypes = sortBy(itypes,itypeorder)
    

    let testarr = []
	for(let q = 0; q < finaldata["Pokémon"]["Reference"].length; q++) {
		if(finaldata["Pokémon"]["Reference"][q][DATA_Pokémon_Reference["Reference"]] == "true") {
			testarr.push(finaldata["Pokémon"]["Reference"][q]["Variant"]);
		}
	}

  
	
    for (let q = 0; q < itypes.length; q++) {
        let games = [GameName];

        if (itypes[q].includes("Sugimori")) {
            games = [...(AllGames)].reverse().concat("All");
        }
        let getvals = getMedia(false,[""],[itypes[q]],games);


            
        if (getvals.length >= testarr.length) {
            let val = itypes[q].replaceAll("/"," • ").replace(/( • [\S\s]*?)( • Front)/g,"$2$1").replace(" • PNG","").replace(" • GIF"," (Animated)").replace("Battle • ","").replace(/(Art[\S\s]*?) • (Official)/g,"$2 $1").replace(/(Art[\S\s]*?) • (Ken Sugimori)/g,"$2 $1").replace("Front • ","");
            let settingsDefaultImgtypePathOption = document.createElement("option");
            settingsDefaultImgtypePathOption.value = val;
            settingsDefaultImgtypePathOption.innerText = val;
            settingsDefaultImgtypePathOption.setAttribute("data-path",itypes[q])
            settingsDefaultImgtypePath.appendChild(settingsDefaultImgtypePathOption);
        }
    }




    
    let settingsCheckbox = document.createElement("span")
	let settingsCheckboxCheck = document.createElement("button");
    let settingsCheckboxCheckText = document.createElement("p");
	let settingsCheckboxUncheck = document.createElement("button");
    let settingsCheckboxUncheckText = document.createElement("p");


    settingsCheckbox.setAttribute("name","checkbox");
	settingsCheckboxCheckText.innerText = "Check All";
    settingsCheckboxCheck.setAttribute("type","medium");
	settingsCheckboxCheck.setAttribute("title","Applies to current filters only");

	settingsCheckboxUncheckText.innerText = "Uncheck All";
    settingsCheckboxUncheck.setAttribute("type","medium");
	settingsCheckboxUncheck.setAttribute("title","Applies to current filters only");

    settings.appendChild(settingsCheckbox);
	settingsCheckbox.appendChild(settingsCheckboxCheck);
    settingsCheckboxCheck.appendChild(settingsCheckboxCheckText);
	settingsCheckbox.appendChild(settingsCheckboxUncheck);
    settingsCheckboxUncheck.appendChild(settingsCheckboxUncheckText);
    

    settingsCheckboxCheck.addEventListener("click", CheckAll);
	settingsCheckboxUncheck.addEventListener("click", UncheckAll);


	let settingsCheckboxExport = document.createElement("button");
    let settingsCheckboxExportText = document.createElement("p");
	let settingsCheckboxImport = document.createElement("button");
    let settingsCheckboxImportText = document.createElement("p");

	settingsCheckboxExportText.innerText = "Export Data";
    settingsCheckboxExport.setAttribute("type","medium");

	settingsCheckboxImportText.innerText = "Import Data";
    settingsCheckboxImport.setAttribute("type","medium");

    settingsCheckbox.appendChild(settingsCheckboxImport);
    settingsCheckboxImport.appendChild(settingsCheckboxImportText);
	settingsCheckbox.appendChild(settingsCheckboxExport);
    settingsCheckboxExport.appendChild(settingsCheckboxExportText);

    settingsCheckboxExport.addEventListener("click", exportData);
	settingsCheckboxImport.addEventListener("click", importData);




    let settingsVariant = document.createElement("span");
    let settingsVariantTop = document.createElement("span");
    let settingsVariantBottom = document.createElement("span");
    let settingsVariantButton = document.createElement("button");
    let settingsVariantButtonText = document.createElement("p");
	settingsVariant.setAttribute("name","variant");
    settingsVariantButtonText.innerText = "Apply";
    settingsVariantButton.setAttribute("type","small");
    settings.appendChild(settingsVariant);
    settingsVariant.appendChild(settingsVariantTop);
    settingsVariant.appendChild(settingsVariantBottom);
    settingsVariantBottom.appendChild(settingsVariantButton);
    settingsVariantButton.appendChild(settingsVariantButtonText);






    
	let formopts = [];
	for(let q = 0; q < finaldata["Pokémon"]["Reference"].length; q++) {
		if(finaldata["Pokémon"]["Reference"][q][DATA_Pokémon_Reference["Reference"]] == "true") {
			formopts.push(finaldata["Pokémon"]["Reference"][q]["Variant"]);
		}
	}

	formopts = formopts.filter((item) => !item.includes("Default ") && !item.includes(" Form") && !item.includes("Gender"));
	for(let q = 0; q < formopts.length; q++) {
		formopts[q] = formopts[q].replace("Alolan","Regional Form");
		formopts[q] = formopts[q].replace("Galarian","Regional Form");
		formopts[q] = formopts[q].replace("Mega","Mega Evolution");
	}
	formopts = [...new Set(formopts)];
	for(let q = 0; q < formopts.length; q++) {
		let settingsVariantInput = document.createElement("input");
		let settingsVariantLabel = document.createElement("label");
        let settingsVariantLabelText = document.createElement("p");
		let settingsVariantSpan = document.createElement("span");
		settingsVariantInput.setAttribute("type","checkbox");

		settingsVariantInput.setAttribute("id","settings-form-"+formopts[q]+"-"+q);
		settingsVariantInput.setAttribute("name",q);
		settingsVariantLabel.setAttribute("for","settings-form-"+formopts[q]+"-"+q);
		settingsVariantLabelText.innerText = formopts[q];
		settingsVariantTop.appendChild(settingsVariantInput);
		settingsVariantTop.appendChild(settingsVariantLabel);
        settingsVariantLabel.appendChild(settingsVariantLabelText);
		settingsVariantLabel.appendChild(settingsVariantSpan);
        settingsVariantInput.addEventListener("click", function() {preventCheckboxZero(this.parentElement);});
      
        if (q == 0) {
            settingsVariantInput.checked = true;
        }

	}

    settingsVariantButton.addEventListener("click", variantSelector);


    settingsDefaultImgtypeExecute.addEventListener("click", function() {ImageType("Execute");ImageType("Populate");});
    settingsDefaultImgtypePath.addEventListener("change", function() {ImageType("Populate");});
    settingsDefaultImgtypePath.addEventListener("keydown", function() {ImageType("Populate");});

    

    $( function() {
        $('#pokémon > aside section[name="box"] ul').droppable();
    } );


}

function count() {
	function showChecked() {
		sleep(10).then(() => {
			document.querySelector("#pokémon nav li[name='count'] > * > *:first-child").innerText = document.querySelectorAll('#pokémon > div li:not([style*="display: none"]):not(.hidden):not(.filtered) input:checked').length;
		});
	}

	function showTotal() {
		sleep(10).then(() => {
			document.querySelector("#pokémon nav li[name='count'] > * > *:last-child").innerText = document.querySelectorAll('#pokémon > div li:not([style*="display: none"]):not(.hidden):not(.filtered)').length;
		});
	}
	showChecked();
	showTotal();
}

function imgTypeDrop() {
	document.getElementById("imgtype").classList.toggle("imgtype-show");
	document.querySelector(".imgtype-arrow").style.transform = "scaleY(0.8) rotate(180deg)";
	let dropdowns = document.getElementsByClassName("imgtype");
	let i;
	for(i = 0; i < dropdowns.length; i++) {
		let openDropdown = dropdowns[i];
		if(openDropdown.classList.contains("imgtype-show")) {} else {
			document.querySelector(".imgtype-arrow").style.transform = "scaleY(0.8) rotate(0deg)";
		}
	}
}
window.onclick = function(event) {
	if(!event.target.matches("#imgtype-toggle")) {
		let dropdowns = document.getElementsByClassName("imgtype");
		let i;
		for(i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if(openDropdown.classList.contains("imgtype-show")) {
				openDropdown.classList.remove("imgtype-show");
				document.querySelector(".imgtype-arrow").style.transform = "scaleY(0.8) rotate(0deg)";
			}
		}
	}
};





function resizeDiv() {
    let sliderDefaultValue = 240;
    let containIDDefaultDisplay = "flex";
    let containImgDefaultHeight = "60%";
    let containImgDefaultMargin = "0 5%";
    let containNameDefaultDisplay = "flex";

	let slider = document.querySelector("#pokémon > aside[name='settings'] > span[name='resize'] input");
	let output = document.querySelector("#pokémon > aside[name='settings'] > span[name='resize'] p");
	let lis = document.querySelectorAll("#pokémon > div ul li");
	let id = document.querySelectorAll("#pokémon > div ul li label > div:first-child");
	let img = document.querySelectorAll("#pokémon > div ul li img");
	let name = document.querySelectorAll("#pokémon > div ul li label > div:last-child");
	let sliderSwitch = 180;

	for(i = 0; i < lis.length; i++) {
		lis[i].style.width = slider.value+"px";
		lis[i].style.height = slider.value+"px";
		lis[i].style.fontSize = slider.value / 15+"px";
        
		if(slider.value <= sliderSwitch) {
			id[i].style.display = "none";
			img[i].style.height = "90%";
			img[i].style.margin = "5%";
			name[i].style.display = "none";
		}
		if(slider.value >= sliderSwitch) {
			id[i].style.display = containIDDefaultDisplay;
			img[i].style.height = containImgDefaultHeight;
			img[i].style.margin = containImgDefaultMargin;
			name[i].style.display = containNameDefaultDisplay;
		}
	}
	output.innerText = Math.round((slider.value / sliderDefaultValue) * 100)+"%";

    memory("Save","",[document.querySelector("#resizer")])
}




function dexMove() {
	let x = parseInt(this.value);


    let Pokédex = Object.keys(DATA_Pokémon_PokédexID)


	if (x > Pokédex.length) {
		this.parentElement.style.transform = "translate(0%)";
	}
    else {
		this.parentElement.style.transform = "translate(-"+x+"00%)";
	}

	dexChecker.fill(x);

    let el1 = event.target.nextElementSibling.nextElementSibling;
    let el2 = event.target.nextElementSibling;

    if (el1 == null) {
        let val = event.target.parentElement.firstElementChild.nextElementSibling.querySelector(":scope > *").innerText;
        if (val.toLowerCase().includes("national")) {
            document.body.setAttribute("dex","national")
        }
    }
    else if (el2 != null && Pokédex.length == 0) {
        let val = el2.querySelector(":scope > *").innerText;
        if (val.toLowerCase().includes("national")) {
            document.body.setAttribute("dex","national")
        }
    }
    else {
        document.body.setAttribute("dex",dexChecker[0])
    }
}

function dexSwitch() {
    let Pokédex = Object.keys(DATA_Pokémon_PokédexID)

	let divList = $("#pokémon > div li");
	let x = dexChecker[0];
	if(x == Pokédex.length+1) {
		divList.sort(function(a, b) {
			return $(a).data("national") - $(b).data("national");
		});
		$("#pokémon > div ul").html(divList);
	} else {
		for(q = 0; q < Pokédex.length; q++) {
			divList.sort(function(a, b) {
				return $(a).data("regional-"+x) - $(b).data("regional-"+x);
			});
			$("#pokémon > div ul").html(divList);
		}
	}

    searchFilter(document.querySelector("#pokémon nav ul li[name='search'] input"),document.querySelector("#pokémon > div ul"),"Remove");
	count();

    $(document.querySelectorAll("#pokémon > div > ul > li")).draggable({
        start:function(e,ui){
            document.body.classList.add("dragging");
        },
        stop:function(e,ui){
            document.body.classList.remove("dragging");
        },
        cursor:"grabbing",
        revert:true,
        helper:"clone",
        appendTo:"body",
        scroll: false,
    });
}


function UncheckAll() {
	count();
	let uncheck = document.querySelectorAll('#pokémon > div li:not([style*="display: none"]):not(.hidden):not(.filtered) input:checked');
	for(let i = 0; i < uncheck.length; i++) {
		uncheck[i].click();
	}
    memory("Save","game",document.querySelectorAll('#pokémon > div > ul input[type="checkbox"]'));
    consoleText("Unchecked all in the current filter.")
}

function CheckAll() {
	count();
	let check = document.querySelectorAll('#pokémon > div li:not([style*="display: none"]):not(.hidden):not(.filtered) input:not(:checked)');
	for(let i = 0; i < check.length; i++) {
		check[i].click();
	}
    memory("Save","game",document.querySelectorAll('#pokémon > div > ul input[type="checkbox"]'));
    consoleText("Checked all in the current filter.")
}


function createContain(condition) {

    document.querySelector("#pokémon > div ul").innerHTML = "";


  


	for(let i = 0; i < finaldata["Pokémon"]["Reference"].length; i++) {
        let conditions = [];
        if (condition != undefined) {
            if (condition.includes("Default")) {
                conditions.push(finaldata["Pokémon"]["Reference"][i]["Variant"].includes("Default"));
            }
            if (condition.includes("Regional Form")) {
                conditions.push(finaldata["Pokémon"]["Reference"][i]["Variant"].includes("Alolan") || finaldata["Pokémon"]["Reference"][i]["Variant"].includes("Galarian"));
            }
            if (condition.includes("Form")) {
                conditions.push(finaldata["Pokémon"]["Reference"][i]["Variant"] == "Form");
            }
            if (condition.includes("Mega Evolution")) {
                conditions.push(finaldata["Pokémon"]["Reference"][i]["Variant"].includes("Mega"));
            }
            if (condition.includes("Gigantamax")) {
                conditions.push(finaldata["Pokémon"]["Reference"][i]["Variant"].includes("Gigantamax"));
            }
        }

        
        if(finaldata["Pokémon"]["Reference"][i][DATA_Pokémon_Reference["Reference"]] == "true" || finaldata["Pokémon"]["Reference"][i][DATA_Pokémon_Reference["Reference"]] == "true") {
            for (let q = 0; q < conditions.length; q++) {
                if (conditions[q] == true) {
                    let ID = finaldata["Pokémon"]["Reference"][i]["ID"];
                    let Name = finaldata["Pokémon"]["Form"][i]["Pokémon"];
                    let formName = finaldata["Pokémon"]["Form"][i][DATA_Pokémon_Form["Form"]];
                    let variant = finaldata["Pokémon"]["Reference"][i]["Variant"];
                    let contentDiv = document.createElement("li");
                    let contentInput = document.createElement("input");
                    let contentLabel = document.createElement("label");
                    let contentMainUp = document.createElement("div");
                    let contentConfirm = document.createElement("figure");
                    let contentPopup = document.createElement("button");
                    let contentNationalID = document.createElement("caption");
                    let contentImg = document.createElement("img");
                    let contentMainDown = document.createElement("div");
                    let contentName = document.createElement("p");
                    contentDiv.setAttribute("id",i);
                    contentDiv.classList.add("dex-item")
                    contentNationalID.setAttribute("name","national");

                    let evo = getEvolutionFamily(i).map(function(v) {return v["Pokémon"];});
                   
                    if (evo.length > 1) {
                        contentDiv.setAttribute("data-search-evolution", evo.join(",").toLowerCase());
                    }
                    else {
                        contentDiv.setAttribute("data-search-evolution", "none");
                    }
                    let typ = returnData(i, "Type","lower,undefined");
                    let cr = returnData(i, "Catch Rate","lower,undefined");

                    if (typ == "") {
                        typ = "none";
                    }
                    if (cr == "") {
                        cr = "none";
                    }
                    contentDiv.setAttribute("data-search-type", typ);
                    contentDiv.setAttribute("data-search-catchrate", cr);

                    if (Ability.length > 0) {
                        let ab = returnData(i, "Ability","lower,undefined");
                        if (ab == "") {
                            ab = "none";
                        }
                        contentDiv.setAttribute("data-search-ability", ab);
                    }

                    if (Gender) {
                        let ratio = returnData(i, "Gender Ratio","lower,undefined");
                        if(ratio[0] == "1" && ratio[1] == "0") { // Always Male
                            contentDiv.setAttribute("data-search-genderratio", "always male");
                        } else if(ratio[0] == "7" && ratio[1] == "1") { // Very Often Male
                            contentDiv.setAttribute("data-search-genderratio", "very often male");
                        } else if(ratio[0] == "3" && ratio[1] == "1") { // Often Male
                            contentDiv.setAttribute("data-search-genderratio", "often male");
                        } else if(ratio[0] == "1" && ratio[1] == "1") { // Equal Ratio
                            contentDiv.setAttribute("data-search-genderratio", "equal ratio");
                        } else if(ratio[0] == "1" && ratio[1] == "3") { // Often Female
                            contentDiv.setAttribute("data-search-genderratio", "often female");
                        } else if(ratio[0] == "1" && ratio[1] == "7") { // Very Often Female
                            contentDiv.setAttribute("data-search-genderratio", "very often female");
                        } else if(ratio[0] == "0" && ratio[1] == "1") { // Always Female
                            contentDiv.setAttribute("data-search-genderratio", "always female");
                        } else if(ratio[0] == "0" && ratio[1] == "0") { // Genderless
                            contentDiv.setAttribute("data-search-genderratio", "genderless");
                        } else {
                            contentDiv.setAttribute("data-search-genderratio", "none");
                        }
                    }



                    if (Egg) {
                        let hr = returnData(i, "Hatch Rate","lower,undefined")[0];
                        let eg = returnData(i, "Egg Group","lower,undefined");
                        if (hr == "") {
                            hr = "none";
                        }
                        if (eg == "") {
                            eg = "none";
                        }
                 
                        contentDiv.setAttribute("data-search-eggcycle", hr);
                        contentDiv.setAttribute("data-search-egggroup", eg);
                    }
                
                    if (HeldItem) {
                        let hld = returnData(i, "Held Item","lower,undefined");
                        if (hld == "") {
                            hld = "none";
                        }
                        contentDiv.setAttribute("data-search-helditem", hld);
                    }

                    let weight = getIntData(i,finaldata["Pokémon"]["Weight"],"Metric Values_1-8");

                    if (weight != undefined) {
                        weight = weight.replaceAll(" kg","");
                        weight = parseFloat(weight);
                        contentDiv.setAttribute("data-search-weight",weight);
                    }
                    else {
                        contentDiv.setAttribute("data-search-weight",0);
                    }

                    //contentDiv.setAttribute("data-search-learnset",returnMoveSet(i,"onlymoves,noduplicate,lower"));

                    let xpyd = returnData(i, "Experience Yield","lower,undefined");
                    if (xpyd == "") {
                        xpyd = "none";
                    }
                    contentDiv.setAttribute("data-search-expyield", xpyd);

                    let xpydc = returnData(i, "Experience Yield","lower,undefined");
                    if (xpydc != "") {
                        xpydc = parseInt(xpyd);
                    }
                    else {
                        xpydc = "none";
                    }

                    if(xpydc >= 300) {
                        contentDiv.setAttribute("data-search-expyieldcategory","Very High".toLowerCase());
                    } else if(xpydc >= 200 && xpydc <= 299) {
                        contentDiv.setAttribute("data-search-expyieldcategory","High".toLowerCase());
                    } else if(xpydc >= 100 && xpydc <= 199) {
                        contentDiv.setAttribute("data-search-expyieldcategory","Medium".toLowerCase());
                    } else if(xpydc >= 50 && xpydc <= 99) {
                        contentDiv.setAttribute("data-search-expyieldcategory","Low".toLowerCase());
                    } else if(xpydc >= 0 && xpydc <= 49) {
                        contentDiv.setAttribute("data-search-expyieldcategory","Very Low".toLowerCase());
                    } else {
                        contentDiv.setAttribute("data-search-expyieldcategory",xpydc);
                    }

                    let lvlr = returnData(i, "Leveling Rate","lower,undefined");
                    if (lvlr == "") {
                        lvlr = "none";
                    }
                   
                    contentDiv.setAttribute("data-search-levelrate", lvlr);
                    

                    let statsevL = ["Base Stats","EV Yield"];
                    let statsevS = ["base","ev"];
                    for(let q = 0; q < statsevL.length; q++) {
                        for(let u = 0; u < Stats.length; u++) {
                            let dat = returnData(i, statsevL[q]+" "+Stats[u]["Name"], "lower,undefined");
                            if (dat == "") {
                                dat = "none";
                            }
                            contentDiv.setAttribute("data-search-"+statsevS[q]+Stats[u]["Name"].replaceAll(".","").replaceAll(" ","").toLowerCase(), dat);
                        }
                    }

                    contentDiv.setAttribute("data-search-variant", variant.toLowerCase());
                    contentInput.setAttribute("type","checkbox");
                    contentInput.setAttribute("id","finaldex-"+GameID+"-"+i);
                    contentInput.setAttribute("name",i);
                    contentLabel.setAttribute("for","finaldex-"+GameID+"-"+i);
                    contentConfirm.setAttribute("name","confirm");
                    contentPopup.setAttribute("name","popup");
                    contentPopup.setAttribute("value",i);
                    contentPopup.innerHTML = "❖";
                    contentNationalID.innerText = "#"+ID;
                    if(formName != undefined) {
                        contentName.innerText = formName;
                        contentImg.setAttribute("id", formName);
                        contentDiv.setAttribute("data-name", formName.toLowerCase());
                        contentDiv.setAttribute("data-title", formName.toLowerCase());
                    } else {
                        contentName.innerText = Name;
                        contentImg.setAttribute("id", Name);
                        contentDiv.setAttribute("data-name", Name.toLowerCase());
                        contentDiv.setAttribute("data-title", Name.toLowerCase());
                    }
                    contentDiv.setAttribute("data-national", ID);
                    document.querySelector("#pokémon > div > ul").appendChild(contentDiv);
                    contentDiv.appendChild(contentInput);
                    contentDiv.appendChild(contentLabel);
                    contentLabel.appendChild(contentMainUp);
                    contentMainUp.appendChild(contentConfirm);
                    contentMainUp.appendChild(contentPopup);
                    contentMainUp.appendChild(contentNationalID);
                    contentLabel.appendChild(contentImg);
                    contentLabel.appendChild(contentMainDown);
                    contentMainDown.appendChild(contentName);
                    
                    contentPopup.addEventListener("click", modalData);
                    contentPopup.setAttribute("function","modalData");
                    contentInput.addEventListener("change",function() {memory("Save","game",document.querySelectorAll('#pokémon > div > ul input[type="checkbox"]'));});
                    contentInput.addEventListener("change", count);

      

                    let Pokédex = Object.keys(DATA_Pokémon_PokédexID)


                    for(q = 0; q < Pokédex.length; q++) {
                        let y = q+1;
                        let contentMainRegionalID = document.createElement("caption");
                        if(finaldata["Pokémon"]["Pokédex ID"][i][DATA_Pokémon_PokédexID[Pokédex[q]]] == undefined) {
                            if(finaldata["Pokémon"]["Pokédex ID"][finaldata["Pokémon"]["Pokédex ID"].map(function(e) {
                                    return e.ID;
                                }).indexOf(finaldata["Pokémon"]["Reference"][i]["ID"])][DATA_Pokémon_PokédexID[Pokédex[q]]] != undefined) {
                                contentDiv.setAttribute("data-regional-"+y, finaldata["Pokémon"]["Pokédex ID"][finaldata["Pokémon"]["Pokédex ID"].map(function(e) {
                                    return e.ID;
                                }).indexOf(finaldata["Pokémon"]["Reference"][i]["ID"])][DATA_Pokémon_PokédexID[Pokédex[q]]]);
                                contentMainRegionalID.innerText = "#"+finaldata["Pokémon"]["Pokédex ID"][finaldata["Pokémon"]["Pokédex ID"].map(function(e) {
                                    return e.ID;
                                }).indexOf(finaldata["Pokémon"]["Reference"][i]["ID"])][DATA_Pokémon_PokédexID[Pokédex[q]]];
                            } else {
                                contentDiv.setAttribute("data-regional-"+y, "");
                                contentMainRegionalID.innerText = "#";
                            }
                        } else {
                            contentDiv.setAttribute("data-regional-"+y, finaldata["Pokémon"]["Pokédex ID"][i][DATA_Pokémon_PokédexID[Pokédex[q]]]);
                            contentMainRegionalID.innerText = "#"+finaldata["Pokémon"]["Pokédex ID"][i][DATA_Pokémon_PokédexID[Pokédex[q]]];
                        }
                        contentMainRegionalID.setAttribute("name","regional"+y)
                        contentMainUp.appendChild(contentMainRegionalID);
                    }
      
                }
            }
        }
    
        conditions = [];
	}


    document.querySelector("#pokémon nav li[name='search'] input").title = searchOptionsTitle(document.querySelector("#pokémon > div ul"));

    let searchLis = document.querySelectorAll("#pokémon > div li");
    searchPokémonAttributes = [];
    for(q = 0; q < searchLis.length; q++) {
        for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchPokémonAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchPokémonAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }

    for(q = 0; q < searchPokémonAttributes.length; q++) {
        searchPokémonAttributes[q] = searchPokémonAttributes[q].replaceAll("data-search-","")
    }


    
}



let variantIteration = 0;

function variantSelector() {


    let inputs = document.querySelectorAll('#pokémon > aside[name="settings"] span[name="variant"] input:checked');

    let tempArr = [];
    let tempStr;
    for (let i = 0; i < inputs.length; i++) {
        tempArr.push(inputs[i].nextElementSibling.innerText)
    }
    if (tempArr.length > 1) {
        tempStr = tempArr.join(",");
    }
    else {
        tempStr = tempArr[0];
    }

    searchFilter(document.querySelector("#pokémon nav ul li[name='search'] input"),document.querySelector("#pokémon > div ul"),"Remove");

    createContain(tempStr);



    memory("Save","game",document.querySelectorAll('#pokémon > aside[name="settings"] > span[name="variant"] input'));
    memory("Restore","game",document.querySelectorAll('#pokémon > div > ul input[type="checkbox"]'));
    memory("Restore","game",document.querySelectorAll('#pokémon > aside[name="settings"] > span[name="imagetype"] select'));

    ImageType("Execute");
    ImageType("Populate");
    resizeDiv();
    dexSwitch();





    document.querySelector("#pokémon nav li[name='search'] input").value = "";


    if (variantIteration != 0) {
        consoleText("Variants changed to "+tempStr.replace(/,([^,]*)$/, ' and $1').replaceAll(",",", ")+".");
    }

    variantIteration = variantIteration + 1;





}








function partyBoxSwitch() {
        
    let a = this.parentElement.parentElement.querySelector(':scope > section[name="'+this.value+'"]');
    let b = this.parentElement.parentElement.querySelector(':scope > section:not([name="'+this.value+'"])');

    let z = this.parentElement.querySelectorAll(":scope > input");
    let x = this.checked.toString();


    for (let i = 0; i < z.length; i++) {
        z[i].checked = false; 
    }

    if(x == "true") {
        this.checked = true;
    }
    else {
        this.checked = false;
    }

    if (x == "true") { // open something
        if (a.classList.length == 0 || this.value == "party") { // if this is clear
            if (b.classList.length == 0) {
                //consoleText("opening1");
                a.classList.add("open");
                a.classList.remove("close");
                a.classList.remove("switch");
                b.classList.remove("open");
                b.classList.remove("close");
                b.classList.remove("switch");
            }
            else if (b.classList.contains("close")) {
                //consoleText("opening3");
                a.classList.add("open");
                a.classList.remove("close");
                a.classList.remove("switch");
                b.classList.remove("open");
                b.classList.remove("close");
                b.classList.remove("switch");
            }
            else {
                //consoleText("switching");
                a.classList.remove("open");
                a.classList.remove("close");
                a.classList.add("switch");
                b.classList.remove("open");
                b.classList.remove("close");
                b.classList.remove("switch");
            }

            
        }
        if (a.classList.contains("close")) {
            //consoleText("opening2");
            a.classList.add("open");
            a.classList.remove("close");
            a.classList.remove("switch");
            b.classList.remove("open");
            b.classList.remove("close");
            b.classList.remove("switch");
        }
    }
    else {
        if (a.classList.contains("open") || a.classList.contains("switch")) {
            //consoleText("closing");
            a.classList.remove("open");
            a.classList.add("close");
            a.classList.remove("switch");
            b.classList.remove("open");
            b.classList.remove("close");
            b.classList.remove("switch");
        }
    }

}

function partyBoxOpen(e) {
    let target = e.target;

    if (target.innerText == "Party") {
        if (document.querySelector('#pokémon aside[name="team"] section[name="party"].open') != undefined) {
            document.querySelector('#pokémon aside[name="team"] section[name="party"]').classList.remove("open");
            if (document.querySelector('#pokémon aside[name="team"].open') != undefined) {
                document.querySelector('#pokémon aside[name="team"]').classList.remove("open");
            }
        }
        else {
            document.querySelector('#pokémon aside section[name="party"]').classList.add("open");
            if (document.querySelector('#pokémon aside[name="team"].open') == undefined) {
                document.querySelector('#pokémon aside[name="team"]').classList.add("open");
            }        
        }
        if (document.querySelector('#pokémon aside[name="team"] section[name="box"].open') != undefined) {
            document.querySelector('#pokémon aside[name="team"] section[name="box"]').classList.remove("open");
        }
    }
    else if (target.innerText == "Box") {
        if (document.querySelector('#pokémon aside[name="team"] section[name="box"].open') != undefined) {
            document.querySelector('#pokémon aside[name="team"] section[name="box"]').classList.remove("open");
            if (document.querySelector('#pokémon aside[name="team"].open') != undefined) {
                document.querySelector('#pokémon aside[name="team"]').classList.remove("open");
            }
        }
        else {
            document.querySelector('#pokémon aside[name="team"] section[name="box"]').classList.add("open");
            if (document.querySelector('#pokémon aside[name="team"].open') == undefined) {
                document.querySelector('#pokémon aside[name="team"]').classList.add("open");
            }    
        }

        if (document.querySelector('#pokémon aside[name="team"] section[name="party"].open') != undefined) {
            document.querySelector('#pokémon aside[name="team"] section[name="party"]').classList.remove("open");
        }
    }
}

function inputMaxValue(base,limit,totallimit) {

    let combinedValues = 0;
    let valueVSlimit;
    let values = [];

    for (i = 0; i < base.length; i++) {
        if(base[i].value != "") {
            values.push(parseInt(base[i].value))
        }
        else {
            values.push(0)
        }
    }



    for (i = 0; i < values.length; i++) {
        combinedValues = combinedValues+values[i];
    }

    valueVSlimit = totallimit - combinedValues;

    let tempArr = [];

    for (i = 0; i < values.length; i++) {
        if ((valueVSlimit+values[i]) >= limit) {
            tempArr.push(limit)
        }
        else {
            tempArr.push(valueVSlimit+values[i])
        }
    }

    for (i = 0; i < base.length; i++) {
        base[i].setAttribute("max",tempArr[i]);
    }
}


function evInputMax() {

    let totallimit = 510;
    let limit = 255;
    let combinedValues = 0;
    let valueVSlimit;
    let base = this.parentElement.querySelectorAll(":scope input");
    let values = [];

    for (i = 0; i < base.length; i++) {
        if(base[i].value != "") {
            values.push(parseInt(base[i].value))
        }
        else {
            values.push(0)
        }
    }



    for (i = 0; i < values.length; i++) {
        combinedValues = combinedValues+values[i];
    }

    valueVSlimit = totallimit - combinedValues;

    let tempArr = [];

    for (i = 0; i < values.length; i++) {
        if ((valueVSlimit+values[i]) >= limit) {
            tempArr.push(limit)
        }
        else {
            tempArr.push(valueVSlimit+values[i])
        }
    }

    for (i = 0; i < base.length; i++) {
        base[i].setAttribute("max",tempArr[i]);
    }
}


function inputMinMax() {


    let val = parseInt(this.value);
    let min = parseInt(this.min);
    let max = parseInt(this.max);

    if(val <= min) {
        this.value = min;
    }
    else if(val >= max) {
        this.value = max;
    }

    if (this.value == 0) {
        this.value = "";
    }
    partyMemory("Save");
}


function iMinMax() {


    let val = parseInt(this.value);
    let min = parseInt(this.min);
    let max = parseInt(this.max);

    if(val <= min) {
        this.value = min;
    }
    else if(val >= max) {
        this.value = max;
    }

}


function onlyOneInput(inputs,input) {

    let checks = [];


    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            checks.push(inputs[i])
        }
        else if (inputs[i].value != undefined) {
            checks.push(inputs[i])
        }
    }
    if (checks.length > 1) {
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] != input) {
                if (checks[i].value != "on") {
                    checks[i].value = "";
                }
                else if (checks[i].checked != undefined) {
                    checks[i].checked = false;
                }
            }
        }
    }
}


function partyDataSwitch() {

    let tar = findUpAtt(this,"data-string");
    let els = tar.querySelectorAll(":scope > *[name='data'] > *[name]")
    let check = false;

    tar = tar.parentElement;

    els = Array.prototype.slice.call(els)
    for (let i = 0; i < els.length; i++) {
        els[i] = els[i].getAttribute("name");
    }
    els.push("");
    els = els.concat(els)

    for (let i = 0; i < els.length; i++) {
        let state = els[i];

        if (check) {
            tar.setAttribute("data-state",state);
            break;
        }

        if (state == tar.getAttribute("data-state")) {
            check = true;
        }
    }

}








function partyItem(base) {

    if (base.tagName == undefined) {
        base = findUpAtt(this,"data-string")
    }
    let item = base.querySelector(':scope img[name="item"]');
    let sel = base.querySelector(':scope *[name="item"] select');

    
    if (sel != undefined) {

        item.src = getMedia(true,[sel.value],[PATH_Item_Bag]);
        item.title = sel.value;


        if (sel.value == "Item") {
            item.style.display = "none";
        }
        else {
            item.style.removeProperty("display");
        }
    }
}


function clearParty(base) {


    let inputs = base.querySelectorAll(':scope input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    let selects = base.querySelectorAll(':scope select');
    for (let i = 0; i < selects.length; i++) {
        if (selects[i].firstChild != undefined) {
            selects[i].value = selects[i].firstChild.innerText;
        }
        else {
            selects[i].value = "";
        }
    }
    let imgs = base.querySelectorAll(':scope img');
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = "";
    }
    partyMemory("Save");
}











function partyApply(base) {

    let data = base.getAttribute("data-string")
    data = dataStringToObj(data)

    let i;
    let pok = data["pok"];
    let item = data["it"];
    let nick = data["ni"];
    let level = data["lv"];
    let gender = data["ge"];
    let move = data["mo"];
    let ability = data["ab"];
    let iv = data["iv"];
    let ev = data["ev"];
    let nature = data["na"];
    let friendship = data["fr"];
    let shiny = data["shiny"];

    if (pok == undefined) {
        return;
    }

    i = getPokémonInt(pok);

    clearParty(base);




    let basePok = base.querySelector(':scope img[name="img"]');
    let baseItem = base.querySelector(':scope span[name="item"] select');
    let baseItemImg = base.querySelector(':scope img[name="item"]');
    let baseNick = base.querySelector(':scope span[name="name"] input');
    let baseLevel = base.querySelector(':scope input[title="Level"]');
    let baseGender = base.querySelector(':scope select[title="Gender"]');
    let baseMove = base.querySelector(':scope span[name="moves"] span:nth-child(2)');
    let baseMoves = base.querySelectorAll(':scope span[name="moves"] > span:nth-child(2) select');
    let baseAbility = base.querySelector(':scope span[name="ability"] select');
    let baseNature = base.querySelector(':scope span[name="nature"] select');
    let baseFriendship = base.querySelector(':scope span[name="friendship"] input');
    let baseIV = base.querySelectorAll(':scope span[name="iv"] input');
    let baseEV = base.querySelectorAll(':scope span[name="ev"] input');
    let baseStats = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span:last-child');


    let baseExport = base.querySelector(":scope figure[name='export']");



    let type1 = returnData(i,"Type","undefined")[0];
    let type2 = returnData(i,"Type","undefined")[1];

    if (type2 != undefined) {
        $(base).css({background: "linear-gradient(to right,var(--type"+type1+"),var(--type"+type2+"))"});
        base.setAttribute("type",type1+"-"+type2);
    }
    else {
        $(base).css({background: "linear-gradient(to right,var(--type"+type1+"),var(--type"+type1+"))"});
        base.setAttribute("type",type1);
    }

    let fileNames = ["^"+getPokémonPath(i)]

    if (gender != undefined && gender == "♂") {
        fileNames.push(fileNames[0]+"_Male")
    }
    else if (gender != undefined && gender == "♀") {
        fileNames.push(fileNames[0]+"_Female")
    }
    else {
        fileNames.push(fileNames[0]+"_Male")
        fileNames.push(fileNames[0]+"_Female")
    }
    


    if (shiny != undefined && shiny == "true") {
        basePok.src = getMedia(true,fileNames,[PATH_Pokémon_Battle_Shiny_Front])
    }
    else {
        basePok.src = getMedia(true,fileNames,[PATH_Pokémon_Battle_Default_Front])
    }
   

    basePok.setAttribute("value",i);
    basePok.title = getPokémonName(i);
    baseNick.setAttribute("placeholder",getPokémonName(i));
    baseNick.setAttribute("data_placeholder",getPokémonName(i));


    if (HeldItem == true) {

        let items = [];
        let result = finaldata["Items"]["Reference"].map(el => el["Pocket"] == "Berries" ? {...el, ["Pocket"]: "a"} : el).map(el => el["Pocket"] == "Items" || el["Pocket"] == "Other Items"  ? {...el, ["Pocket"]: "b"} : el).map(el => el["Pocket"] != "a" && el["Pocket"] != "b" ? {...el, ["Pocket"]: "c"} : el);

        items = sortObjectArray(result,"Pocket",true);

        let obj = new Object();
        obj["Item"] = "Item";
        obj["Game"] = "All";
        items.unshift(obj);



        if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]] != undefined) {
            let req = [];
            if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]].includes(",")) {
                req = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]].split(",")
            }
            else {
                req[0] = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Required"]];
            }
            for (let q = 0; q < items.length; q++) {
                if (getApplicable(items[q]["Game"])) {
                    if (items[q]["Item"] != undefined) {
                        if (req.includes(items[q]["Item"])) {
                            let teamItemOption = document.createElement("option");
                            teamItemOption.value = items[q]["Item"];
                            teamItemOption.innerText = items[q]["Item"];
                            baseItem.appendChild(teamItemOption);

                            if (items[q]["Icon"] != undefined) {
                                teamItemOption.setAttribute("name",items[q]["Icon"]);
                            }
                            else {
                                teamItemOption.setAttribute("name",items[q]["Item"]);
                            }
                        }
                    }
                }
            }
            baseItemImg.style.removeProperty("display");
            baseItemImg.src = getMedia(true,[baseItem.querySelector(":scope option:first-child").value],[PATH_Item_Bag])
        }
        else if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]] != undefined) {
            let notreq = [];
            if (finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]].includes(",")) {
                notreq = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]].split(",")
            }
            else {
                notreq[0] = finaldata["Pokémon"]["Form Item"][i][DATA_Pokémon_FormItem["Non Required"]];
            }
            for (let q = 0; q < items.length; q++) {
                if (getApplicable(items[q]["Game"])) {
                    if (items[q]["Item"] != undefined) {
                        if (!notreq.includes(items[q]["Item"])) {
                            let teamItemOption = document.createElement("option");
                            teamItemOption.value = items[q]["Item"];
                            teamItemOption.innerText = items[q]["Item"];
                            baseItem.appendChild(teamItemOption);

                            if (items[q]["Item"] != undefined) {
                                teamItemOption.setAttribute("name",items[q]["Item"]);
                            }
                            else {
                                teamItemOption.setAttribute("name",items[q]["Item"]);
                            }
                        }
                    }
                }
            }
        }
        else {
            for (let q = 0; q < items.length; q++) {
                if (getApplicable(items[q]["Game"])) {
                    if (items[q]["Item"] != undefined) {
                        let teamItemOption = document.createElement("option");
                        teamItemOption.value = items[q]["Item"];
                        teamItemOption.innerText = items[q]["Item"];
                        baseItem.appendChild(teamItemOption);

                        if (items[q]["Icon"] != undefined) {
                            teamItemOption.setAttribute("name",items[q]["Item"]);
                        }
                        else {
                            teamItemOption.setAttribute("name",items[q]["Item"]);
                        }
                    }
                }
            }
        }
    }

    if (Gender == true) {
        let tempgender = returnData(i,"Gender Ratio","undefined");

        let possibleGender = [];
        if (getPokémonName(i).includes("Male")) {
            possibleGender = [...(["♂"])];
        }
        else if (getPokémonName(i).includes("Female")) {
            possibleGender = [...(["♀"])];
        }
        else {
            if (tempgender[0] == "0" && tempgender[1] == "0") {
                possibleGender = [...(["☿"])];
            }
            else if (tempgender[0] == "0") {
                possibleGender = [...(["♀"])];
            }
            else if (tempgender[1] == "0") {
                possibleGender = [...(["♂"])];
            }
            else {
                possibleGender = [...(["♂","♀"])];
            }
        }
        //possibleGender.unshift("")


    
        baseGender.setAttribute("name",possibleGender[0]);
        baseGender.innerHTML = "";

        for (let q = 0; q < possibleGender.length; q++) {
            let option = document.createElement("option");
            option.innerText = possibleGender[q];
            option.value = possibleGender[q];
            option.setAttribute("name",possibleGender[q]);
            baseGender.appendChild(option)
        }
    }


    if (getEvolutionFamily(i).length > 1) {
        baseExport.querySelector(':scope *[name="Change Evolution"]').style.removeProperty("display");
    }
    else {
        baseExport.querySelector(':scope *[name="Change Evolution"]').style.display = "none";
    }

    if (getPokémonForm(i).length > 1) {
        baseExport.querySelector(':scope *[name="Change Form"]').style.removeProperty("display");
    }
    else {
        baseExport.querySelector(':scope *[name="Change Form"]').style.display = "none";
    }




    let tempmoves = returnMoveSet(i,"onlymoves,noduplicate");
    tempmoves.unshift("Move");
    for (let u = 0; u < baseMoves.length; u++) {
        let x = u+1;
        for (let q = 0; q < tempmoves.length; q++) {
            let option = document.createElement("option");
            if (q == 0) {
                option.innerText = tempmoves[q]+" #"+x;
                option.value = tempmoves[q]+" #"+x;
            }
            else {
                option.innerText = tempmoves[q];
                option.value = tempmoves[q];
                option.title = formatMoveData(tempmoves[q]);
            }

            option.setAttribute("name","styleBackgroundType"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],tempmoves[q]));
            baseMoves[u].appendChild(option)
        }
    }


    if (Ability.length > 0) {
        let abs = returnData(i,"Ability","");
        baseAbility.innerHTML = "";

        for (let q = 0; q < abs.length; q++) {
            if (abs[q] != undefined) {
                let option = document.createElement("option");
                option.innerText = abs[q];
                option.value = abs[q];
                if (q == 0) {
                    option.setAttribute("name","Primary")
                }
                if (q == 1) {
                    option.setAttribute("name","Secondary")
                }
                if (q == 2) {
                    option.setAttribute("name","Hidden")
                }
                baseAbility.appendChild(option)
            }
        }
        let desc = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",baseAbility.value)[0]["Description"];
        if (desc != undefined) {
            baseAbility.setAttribute("title",desc);
        }
    }

    



    if (nick != undefined) {
        baseNick.value = nick;
    }
    if (item != undefined && HeldItem == true) {
        let optItem = baseItem.querySelector(':scope option[value="'+item+'"]');
   
        if (optItem != undefined) {
            baseItem.value = item;
        }
    }
    if (level != undefined) {
        baseLevel.value = level;
    }
    if (gender != undefined && Gender == true) {
        baseGender.value = gender;

        baseGender.setAttribute("name",baseGender.value);
    }
    if (ability != undefined && Ability.length > 0) {

        if (!ability.toLowerCase().includes("primary") && !ability.toLowerCase().includes("secondary") && !ability.toLowerCase().includes("hidden")) {
            ability = getAbilityPosition(i,ability);
        }

        let abtemp = baseAbility.querySelector(':scope > option[name="'+ability+'"]');

        if (abtemp != undefined) {
            baseAbility.value = abtemp.value;
            baseAbility.setAttribute("name",ability);
            baseAbility.style.fontStyle = "unset";
        }
    }
    if (nature != undefined && Natures.length > 0) {
        baseNature.value = nature;
    }




    if (move != undefined) {
        let tempmove = splitStr(move,",");
        if (tempmove.length == baseMoves.length) {
            for (let q = 0; q < tempmove.length; q++) {
                if (tempmove[q] != "") {
                    if (tempmoves.includes(tempmove[q])) {
                        baseMoves[q].value = tempmove[q];
                        baseMoves[q].title = formatMoveData(tempmove[q]);
                    }
                }
                else {
                    baseMoves[q].value = baseMoves[q].firstElementChild.value;
                }
            }
        }
    }
    if (iv != undefined) {
        let vals = splitStr(iv,",");

        if (baseIV.length == vals.length) {
            for (let q = 0; q < baseIV.length; q++) {
                baseIV[q].value = vals[q];
            }
        }
    }
    if (ev != undefined) {
        let vals = splitStr(ev,",");

        if (baseEV.length == vals.length) {
            for (let q = 0; q < baseEV.length; q++) {
                baseEV[q].value = vals[q];
            }
        }
    }



    if (baseFriendship != undefined) {
        let frdata = returnData(i,"Base Friendship","");
        if (friendship != undefined) {
            baseFriendship.value = friendship;
        }
        else if (frdata[0] != undefined){
            baseFriendship.value = frdata[0];
        }
    }
    
    calcPartyStat(base);
    partySave(base);
    partyStyle(base);
    boxMemory("Save");
    partyMemory("Save");
}
function partyStyle(base) {
    let baseMoves = base.querySelectorAll(':scope span[name="moves"] > span:nth-child(2) select');
    let baseNumbers = base.querySelectorAll(":scope *[name='stats'] input[type='number']");

    
    for (let i = 0; i < baseNumbers.length; i++) {
        if (baseNumbers[i].min != baseNumbers[i].max) {
            let p = ((baseNumbers[i].value / baseNumbers[i].max)*100);
            baseNumbers[i].style.color = "hwb("+p+" 0% 0% / 1)";
        }
    }
    for (let i = 0; i < baseMoves.length; i++) {
        if (baseMoves[i].value != "" && !baseMoves[i].value.includes("Move #")) {
            baseMoves[i].title = formatMoveData(baseMoves[i].value)
        }
        else {
            baseMoves[i].removeAttribute("title");
        }
    }
}

function partySave(base) {


    if (base.tagName == undefined) {
        base = findUpAtt(this,"data-string");
    }


    let basePok = base.querySelector(':scope img[name="img"]');
    let baseItem = base.querySelector(':scope span[name="item"] select');
    let baseItemImg = base.querySelector(':scope img[name="item"]');
    let baseNick = base.querySelector(':scope span[name="name"] input');
    let baseLevel = base.querySelector(':scope input[title="Level"]');
    let baseGender = base.querySelector(':scope select[title="Gender"]');
    let baseMove = base.querySelector(':scope span[name="moves"] span:nth-child(2)');
    let baseMoves = base.querySelectorAll(':scope span[name="moves"] > span:nth-child(2) select');
    let baseAbility = base.querySelector(':scope span[name="ability"] select');
    let baseNature = base.querySelector(':scope span[name="nature"] select');
    let baseIV = base.querySelectorAll(':scope span[name="iv"] input');
    let baseEV = base.querySelectorAll(':scope span[name="ev"] input');
    let baseStats = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span:last-child');


    let pok;
    let item;
    let nick;
    let level;
    let gender;
    let move;
    let ability;
    let iv;
    let ev;
    let nature;


    if (basePok.title != undefined) {
        pok = basePok.title;
    }
    if (baseItem != undefined && baseItem.value != "") {
        if (baseItem.value == "Item") {
            item = "";
        }
        else {
            item = baseItem.value;
        }
    }

    nick = baseNick.value;

    level = baseLevel.value;
    
    if (baseGender != undefined) {
        gender = baseGender.value;
    }
    if (baseAbility != undefined) {
        ability = baseAbility.value;
    }
    if (baseNature != undefined) {
        nature = baseNature.value;
    }

    let moves = [];
    for (let q = 0; q < baseMoves.length; q++) {
        let val = baseMoves[q].value;
        if (baseMoves[q].value.includes("Move #")) {
            val = "";
        }
        moves.push(val);
    }
    if (moves.length > 0) {
        move = moves.join(",");
    }


    let ivs = [];
    for (let q = 0; q < baseIV.length; q++) {
        ivs.push(baseIV[q].value);
    }
    if (ivs.length > 0) {
        iv = ivs.join(",");
    }


    let evs = [];
    for (let q = 0; q < baseEV.length; q++) {
        evs.push(baseEV[q].value);
    }
    if (evs.length > 0) {
        ev = evs.join(",");
    }



    let data = {};
    
    try {
        data = JSON.parse(base.getAttribute("data-string"));
    }
    catch {
        data = dataStringToObj(base.getAttribute("data-string"));
    }

    if (pok != undefined) {
        data["pok"] = pok;
    }
    if (item != undefined) {
        data["it"] = item;
    }
    if (nick != undefined) {
        data["ni"] = nick;
    }
    if (level != undefined) {
        data["lv"] = level;
    }
    if (gender != undefined) {
        data["ge"] = gender;
    }
    if (move != undefined) {
        data["mo"] = move;
    }
    if (ability != undefined) {
        data["ab"] = ability;
    }
    if (iv != undefined) {
        data["iv"] = iv;
    }
    if (ev != undefined) {
        data["ev"] = ev;
    }
    if (nature != undefined) {
        data["na"] = nature;
    }


	data = Object.entries(data).reduce((a,[k,v]) => (v.replaceAll(',','') == "" ? a : (a[k]=v, a)), {})

    base.setAttribute("data-string",dataObjToString(data));


    partyItem(base)
}


function dataObjToString(data) {
    data = JSON.stringify(data);
    data = data.replaceAll('","','"|"')
    data = data.replaceAll('"','')
    data = data.replaceAll('{','')
    data = data.replaceAll('}','');
    return data;
}


function partyNature() {
    let base = this.parentElement.parentElement.parentElement.parentElement;

    let select = base.querySelectorAll(':scope span[name="nature"] select');

    let coloring = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > *:last-child');
    coloring.setAttribute("name",this.value);

    for (let q = 0; q < select.length; q++) {
        select[q].value = this.value;
    }

}






function deleteBox(element) {
    element.remove();
    boxMemory("Save");
}

function returnMoveSet(int,additional) {
    let arrE = finaldata["Pokémon Learnset"]["Evolution"];
    let arrL = finaldata["Pokémon Learnset"]["Level Up"];
    let arrM = finaldata["Pokémon Learnset"]["Machine"];
    let arrB = finaldata["Pokémon Learnset"]["Breeding"];
    let arrT = finaldata["Pokémon Learnset"]["Tutor"];

    let name = getPokémonName(int,"Alt");

    let evores = [];
    let lvlres = [];
    let machres = [];
    let breres = [];
    let tutres = [];


    for(let i = 0; i < arrE.length; i++) {
		if(arrE[i]["Pokémon"] == name && getApplicable(arrE[i]["Game"])) {
            let obj = new Object();
            obj["Pokémon"] = arrE[i]["Pokémon"];
            obj["Move"] = arrE[i]["Move"];
            obj["Evolution"] = arrE[i]["Evolution"];
            obj["Additional"] = arrE[i]["Additional"];
            obj["Game"] = arrE[i]["Game"];
            obj["Type"] = "Prior Evolution";
            evores.push(obj)
		}
	}

    for(let i = 0; i < arrL.length; i++) {
		if(arrL[i]["Pokémon"] == name && getApplicable(arrL[i]["Game"])) {
            let obj = new Object();
            obj["Pokémon"] = arrL[i]["Pokémon"];
            obj["Factor"] = arrL[i]["Factor"];
            obj["Move"] = arrL[i]["Move"];
            obj["Game"] = arrL[i]["Game"];
            obj["Type"] = "Level Up";
            lvlres.push(obj)
		}
	}

    for(let i = 0; i < arrM.length; i++) {
		if(arrM[i]["Pokémon"] == name && getApplicable(arrM[i]["Game"])) {
            let obj = new Object();
            obj["Pokémon"] = arrM[i]["Pokémon"];
            obj["Machine"] = arrM[i]["Machine"];
            obj["Move"] = arrM[i]["Move"];
            obj["Game"] = arrM[i]["Game"];
            obj["Type"] = "Machine";
            machres.push(obj)
		}
	}

    for(let i = 0; i < arrT.length; i++) {
		if(arrT[i]["Pokémon"] == name && getApplicable(arrT[i]["Game"])) {
            let obj = new Object();
            obj["Pokémon"] = arrT[i]["Pokémon"];
            obj["Move"] = arrT[i]["Move"];
            obj["Game"] = arrT[i]["Game"];
            obj["Type"] = "Tutor";
            tutres.push(obj)
		}
	}


    for(let i = 0; i < arrB.length; i++) {
		if(arrB[i]["Pokémon"] == name && getApplicable(arrB[i]["Game"])) {
            let obj = new Object();
            obj["Pokémon"] = arrB[i]["Pokémon"];
            obj["Parent"] = arrB[i]["Parent"];
            obj["Item"] = arrB[i]["Item"];
            obj["Additional"] = arrB[i]["Additional"];
            obj["Move"] = arrB[i]["Move"];
            obj["Game"] = arrB[i]["Game"];
            obj["Type"] = "Breeding";
            breres.push(obj)
		}
	}

    name = getPokémonName([finaldata["Pokémon"]["Reference"].map(function(e) {return e.ID;}).indexOf(finaldata["Pokémon"]["Reference"][int]["ID"])],"Alt");


    if (!evores.length > 0) {
        for(let i = 0; i < arrE.length; i++) {
            if(arrE[i]["Pokémon"] == name && getApplicable(arrE[i]["Game"])) {
                let obj = new Object();
                obj["Pokémon"] = arrE[i]["Pokémon"];
                obj["Move"] = arrE[i]["Move"];
                obj["Evolution"] = arrE[i]["Evolution"];
                obj["Additional"] = arrE[i]["Additional"];
                obj["Game"] = arrE[i]["Game"];
                obj["Type"] = "Prior Evolution";
                evores.push(obj)
            }
        }
    }
    
    if (!lvlres.length > 0) {
        for(let i = 0; i < arrL.length; i++) {
            if(arrL[i]["Pokémon"] == name && getApplicable(arrL[i]["Game"])) {
                let obj = new Object();
                obj["Pokémon"] = arrL[i]["Pokémon"];
                obj["Factor"] = arrL[i]["Factor"];
                obj["Move"] = arrL[i]["Move"];
                obj["Game"] = arrL[i]["Game"];
                obj["Type"] = "Level Up";
                lvlres.push(obj)
            }
        }
    }

    if (!machres.length > 0) {
        for(let i = 0; i < arrM.length; i++) {
            if(arrM[i]["Pokémon"] == name && getApplicable(arrM[i]["Game"])) {
                let obj = new Object();
                obj["Pokémon"] = arrM[i]["Pokémon"];
                obj["Machine"] = arrM[i]["Machine"];
                obj["Move"] = arrM[i]["Move"];
                obj["Game"] = arrM[i]["Game"];
                obj["Type"] = "Machine";
                machres.push(obj)
            }
        }
    }

    if (!tutres.length > 0) {
        for(let i = 0; i < arrT.length; i++) {
            if(arrT[i]["Pokémon"] == name && getApplicable(arrT[i]["Game"])) {
                let obj = new Object();
                obj["Pokémon"] = arrT[i]["Pokémon"];
                obj["Move"] = arrT[i]["Move"];
                obj["Game"] = arrT[i]["Game"];
                obj["Type"] = "Tutor";
                tutres.push(obj)
            }
        }
    }

    if (!breres.length > 0) {
        for(let i = 0; i < arrB.length; i++) {
            if(arrB[i]["Pokémon"] == name && getApplicable(arrB[i]["Game"])) {
                let obj = new Object();
                obj["Pokémon"] = arrB[i]["Pokémon"];
                obj["Parent"] = arrB[i]["Parent"];
                obj["Item"] = arrB[i]["Item"];
                obj["Additional"] = arrB[i]["Additional"];
                obj["Move"] = arrB[i]["Move"];
                obj["Game"] = arrB[i]["Game"];
                obj["Type"] = "Egg Move";
                breres.push(obj)
            }
        }
    }

    let result = [];

    for(let q = 0; q < evores.length; q++) {
        result.push(evores[q]);
    }
    for(let q = 0; q < lvlres.length; q++) {
        result.push(lvlres[q]);
    }
    for(let q = 0; q < machres.length; q++) {
        result.push(machres[q]);
    }
    for(let q = 0; q < tutres.length; q++) {
        result.push(tutres[q]);
    }
    for(let q = 0; q < breres.length; q++) {
        result.push(breres[q]);
    }
    if (additional.includes("noduplicate")) {
        result = removeDuplicateObjectFromArray(result,"Move");
    }
    if (additional.includes("onlymoves")) {
        for(let q = 0; q < result.length; q++) {
            result[q] = result[q]["Move"];
        }
    }
    if (additional.includes("lower")) {
        if (typeof result[0] == "object") {
            for(let q = 0; q < result.length; q++) {
                for (let u = 0; u < Object.keys(result[q]).length; u++) {
                    result[q][Object.keys(result[q])[u]] = result[q][Object.keys(result[q])[u]].toLowerCase();
                }
            }
        }
        else {
            for(let q = 0; q < result.length; q++) {
                result[q] = result[q].toLowerCase();
            }
        }
    }

    return result;
}





function createBox(data) {

    let box = document.querySelector('#pokémon > aside[name="team"] > section[name="box"] ul');
    let data_obj = dataStringToObj(data);

    int = getPokémonInt(data_obj["pok"]);

    let path = [];

    if (data_obj["shiny"] != undefined && data_obj["shiny"] == "true") {
        path = [PATH_Pokémon_Box_Shiny_PNG,PATH_Pokémon_Box_Default_PNG]
    }
    else {
        path = [PATH_Pokémon_Box_Default_PNG]
    }

    let li = document.createElement("li");
    let shadow = document.createElement("span");
    let img = document.createElement("img");
    img.src = getMedia(true,[getPokémonPath(int)],path);
    box.appendChild(li)
    li.appendChild(shadow)
    li.appendChild(img)

    li.setAttribute("data-string",data)
   

   
    img.setAttribute("title",dataStringTitle(data));
    boxMemory("Save");
}




function getAllBoxData() {
    let lis = document.querySelectorAll('#pokémon > aside[name="team"] > section[name="box"] > ul li');
    let data = [];
    for (let i = 0; i < lis.length; i++) {
        data.push(getBoxData(lis[i]))
    }
    if (data.length > 1) {
        data = data.join("/");
    }
    else {
        data = data[0];
    }
    return data;
}
function getBoxData(base) {
    let data = [];

    if (base.getAttribute("data-pok") != null) {
        data.push("pok:"+base.getAttribute("data-pok"))
    }
    if (base.getAttribute("data-nick") != null) {
        data.push("ni:"+base.getAttribute("data-nick"))
    }
    if (base.getAttribute("data-level") != null) {
        data.push("lv:"+base.getAttribute("data-level"))
    }
    if (base.getAttribute("data-item") != null) {
        data.push("it:"+base.getAttribute("data-item"))
    }
    if (base.getAttribute("data-gender") != null) {
        data.push("ge:"+base.getAttribute("data-gender"))
    }
    if (base.getAttribute("data-ability") != null) {
        data.push("ab:"+base.getAttribute("data-ability"))
    }
    if (base.getAttribute("data-move") != null) {
        data.push("mo:"+base.getAttribute("data-move"))
    }
    if (base.getAttribute("data-nature") != null) {
        data.push("na:"+base.getAttribute("data-nature"))
    }
    if (base.getAttribute("data-iv") != null) {
        data.push("iv:"+base.getAttribute("data-iv"))
    }
    if (base.getAttribute("data-ev") != null) {
        data.push("ev:"+base.getAttribute("data-ev"))
    }
    if (base.getAttribute("data-metlocation") != null) {
        data.push("metlo:"+base.getAttribute("data-metlocation"))
    }
    if (base.getAttribute("data-metlevel") != null) {
        data.push("metlv:"+base.getAttribute("data-metlevel"))
    }
    if (base.getAttribute("data-metdate") != null) {
        data.push("metda:"+base.getAttribute("data-metdate"))
    }
    if (base.getAttribute("data-friendship") != null) {
        data.push("fr:"+base.getAttribute("data-friendship"))
    }

    if(data.length > 1) {
        data = data.join("|");
    }
    else {
        data = data[0]
    }

    return data;
}


function partyAdd() {

    let data = prompt("Enter Pokémon Data String:","");

    if (data != null && data != "") {
        let base = this.parentElement;
        data = dataStringToObj(data);

        if (data["pok"] == undefined && getPokémonInt(data["pok"]) != undefined) {
            consoleText("Data returned an error.")
            return;
        }

        let int = getPokémonInt(data["pok"]);

   
        if (finaldata["Pokémon"]["Reference"][int][DATA_Pokémon_Reference["Reference"]] == "true") {
            base.setAttribute("data-string",dataObjToString(data))

            partyApply(this.parentElement)
            consoleText("Added "+getPokémonName(int)+" to Party.")
        }
        else {
            consoleText("Pokémon Unavailable.")
        }
     
    }
}

function reNumberMove(base) {
    let selects = base.querySelectorAll(":scope select > option:first-child")

    for (let q = 0; q < selects.length; q++) {
        let x = q+1;
        selects[q].value = "Move #"+x;
        selects[q].innerText = "Move #"+x;
    }
    partyMemory("Save");
}


function statsCalc(type,level,base,iv,ev,nature,friendship) {

    if (typeof level == "string") {
        level = parseInt(level);
    }
    if (typeof base == "string") {
        base = parseInt(base);
    }
    if (typeof iv == "string") {
        iv = parseInt(iv);
    }
    if (typeof ev == "string") {
        ev = parseInt(ev);
    }
    if (typeof friendship == "string") {
        friendship = parseInt(friendship);
    }

    if (type == "HP") {
        if (base == 1) {
            return 1;
        }
        else {
            if (Generation >= 1 && Generation <= 2) {
                return Math.floor((((base+iv)*2+(Math.ceil(ev)/4))*level)/100)+level+10;
            }
            else if (GameID >= 31 && GameID <= 32) {
                return Math.floor(((2*base+iv)*level)/100)+level+10+ev;
            }
            else if (Generation >= 3) {
                return Math.floor(((2*base+iv+Math.floor(ev/4))*level)/100)+level+10;
            }
        }
    }
    else {
        if (Generation >= 1 && Generation <= 2) {
            return Math.floor((((base+iv)*2+Math.floor(Math.ceil(ev)/4))*level)/100)+5;
        }
        else if (GameID >= 31 && GameID <= 32) {
            return Math.floor(((((2*base+iv)*level)/100)+5)*nature*friendship)+ev;
        }
        else if (Generation >= 3) {
            return Math.floor((Math.floor(((2*base+iv+Math.floor(ev/4))*level)/100)+5)*nature);
        }
    }
}


function natureModifier(type,nature) {
    if (type == "Attack") {
        if (nature == "Lonely" || nature == "Brave" || nature == "Adamant" || nature == "Naughty") {
            return 1.1;
        }
        else if (nature == "Bold" || nature == "Timid" || nature == "Modest" || nature == "Calm") {
            return 0.9;
        }
    }
    else if (type == "Defense") {
        if (nature == "Bold" || nature == "Relaxed" || nature == "Impish" || nature == "Lax") {
            return 1.1;
        }
        else if (nature == "Lonely" || nature == "Hasty" || nature == "Mild" || nature == "Gentle") {
            return 0.9;
        }
    }
    else if (type == "Sp. Atk") {
        if (nature == "Modest" || nature == "Mild" || nature == "Quiet" || nature == "Rash") {
            return 1.1;
        }
        else if (nature == "Adamant" || nature == "Impish" || nature == "Jolly" || nature == "Careful") {
            return 0.9;
        }
    }
    else if (type == "Sp. Def") {
        if (nature == "Calm" || nature == "Gentle" || nature == "Sassy" || nature == "Careful") {
            return 1.1;
        }
        else if (nature == "Naughty" || nature == "Lax" || nature == "Naive" || nature == "Rash") {
            return 0.9;
        }
    }
    else if (type == "Speed") {
        if (nature == "Timid" || nature == "Hasty" || nature == "Jolly" || nature == "Naive") {
            return 1.1;
        }
        else if (nature == "Brave" || nature == "Relaxed" || nature == "Quiet" || nature == "Sassy") {
            return 0.9;
        }
    }
    return 1;
}

function getNatureTitle(nature) {
    let result = []

    if (nature == "Lonely" || nature == "Brave" || nature == "Adamant" || nature == "Naughty") {
        result[0] =  "+Attack";
    }
    else if (nature == "Bold" || nature == "Timid" || nature == "Modest" || nature == "Calm") {
        result[1] =  "-Attack";
    }

    if (nature == "Bold" || nature == "Relaxed" || nature == "Impish" || nature == "Lax") {
        result[0] =  "+Defense";
    }
    else if (nature == "Lonely" || nature == "Hasty" || nature == "Mild" || nature == "Gentle") {
        result[1] =  "-Defense";
    }

    if (nature == "Modest" || nature == "Mild" || nature == "Quiet" || nature == "Rash") {
        result[0] =  "+Sp. Atk";
    }
    else if (nature == "Adamant" || nature == "Impish" || nature == "Jolly" || nature == "Careful") {
        result[1] =  "-Sp. Atk";
    }

    if (nature == "Calm" || nature == "Gentle" || nature == "Sassy" || nature == "Careful") {
        result[0] =  "+Sp. Def";
    }
    else if (nature == "Naughty" || nature == "Lax" || nature == "Naive" || nature == "Rash") {
        result[1] =  "-Sp. Def";
    }

    if (nature == "Timid" || nature == "Hasty" || nature == "Jolly" || nature == "Naive") {
        result[0] =  "+Speed";
    }
    else if (nature == "Brave" || nature == "Relaxed" || nature == "Quiet" || nature == "Sassy") {
        result[1] =  "-Speed";
    }
    if(result.length == 0) {
        return "Neutral"
    }
    else {
        return result.join("\n");
    }
}



function calcPartyStat(base) {



    if (base.tagName == "DIV") {
        base = base;
    }
    else {
        base = findUpAtt(base,"data-string");
    }

    let pok = base.querySelector(':scope span[name="pokémon"] img[name="img"]').title;
    if (pok == undefined || pok == "") {
        return;
    }

    let int = getPokémonInt(pok)


    let levelPath = base.querySelector(':scope input[title="Level"]')
    let ivsPath = base.querySelectorAll(':scope span[name="stats"] span[name="iv"] input[type="number"]');
    let evsPath = base.querySelectorAll(':scope span[name="stats"] span[name="ev"] input[type="number"]');
    let naturePath = base.querySelector(':scope span[name="nature"] select');
    let friendshipPath = base.querySelector(':scope span[name="friendship"] input');
    let totalPath = base.querySelectorAll(':scope span[name="stats"] span[name="total"] input[type="number"]');

    
    if ([totalPath.length,Stats.length,ivsPath.length,evsPath.length].every((val, x, arr) => val === arr[0])) {
        for (let i = 0; i < totalPath.length; i++) {

            let stats = Stats[i]["Name"];
    
            let lvl = levelPath.value;
            let base = returnData(int,"Base Stats "+stats,"")[0];
            let iv = ivsPath[i].value
            let ev = evsPath[i].value
            let nature = 1;
            let friendship = 0;

            if (Natures.length > 0) {
                nature = natureModifier(stats,naturePath.value);
            }


            if (Friendship && false) {
                if (friendshipPath.value != undefined && friendshipPath.value != "") {
                    friendship = friendshipModifer(friendshipPath.value);
                }
                else {
                    friendship = 1;
                }
            }

            if (lvl == "") {
                lvl = 0;
            }
            if (iv == "") {
                iv = 0;
            }
            if (ev == "") {
                ev = 0;
            }

            totalPath[i].setAttribute("min",statsCalc(stats,lvl,base,iv,ev,nature,friendship));
            totalPath[i].setAttribute("max",statsCalc(stats,lvl,base,iv,ev,nature,friendship));
            totalPath[i].value = statsCalc(stats,lvl,base,iv,ev,nature,friendship);
         
        }
    }



}

function formatMoveData(move,obj) {

    let tempStr;
    let tempArr = [];

    if (obj == undefined) {
        obj = {};
    }

    let type = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],move);
    let cate = returnArrValue(finaldata["Moves"]["Category"],DATA_Move_Reference["Name"],DATA_Move_Category["Category"],move);
    let ppmin = returnArrValue(finaldata["Moves"]["PP"],DATA_Move_Reference["Name"],DATA_Move_PP["Min"],move);
    let pwr = returnArrValue(finaldata["Moves"]["Power"],DATA_Move_Reference["Name"],DATA_Move_Power["Power"],move);
    let acc = returnArrValue(finaldata["Moves"]["Accuracy"],DATA_Move_Reference["Name"],DATA_Move_Accuracy["Accuracy"],move);
    let desc = returnArrValue(finaldata["Moves"]["Description"],DATA_Move_Reference["Name"],DATA_Move_Description["Description"],move);
    let prio = returnArrValue(finaldata["Moves"]["Priority"],DATA_Move_Reference["Name"],DATA_Move_Priority["Priority"],move);

    if (obj["Power"] != undefined) {
        pwr = obj["Power"];
    }
    if (obj["Category"] != undefined) {
        cate = obj["Category"];
    }
    if (obj["Type"] != undefined) {
        type = obj["Type"];
    }

    prio = undwsDel(prio,"0");
    pwr = undwsDel(pwr,"-");
    acc = undwsDel(acc,"100%");


    if (prio.includes("+")) {
        prio = "+"+prio.replaceAll("+","")
    }

    if (prio.includes("-")) {
        prio = "-"+prio.replaceAll("-","")
    }

    if (type != undefined) {
        tempArr.push("Type: "+type);
    }

    if (cate != undefined) {
        tempArr.push("Category: "+cate);
    }

    tempArr.push("Power: "+pwr);
    tempArr.push("Accuracy: "+acc);

    if (ppmin != undefined) {
        tempArr.push("PP: "+ppmin);
    }

    if (prio != 0) {
        tempArr.push("Priority: "+prio);
    }


 
    if (desc != undefined) {
        tempArr.push(desc);
    }


    tempStr = tempArr.join("\n")

    return tempStr;

}


function dateHideShow(event,status) {
    let tar = event.target;


    if (tar.value != "" && tar.value != undefined) {
        if (status == "open") {
            tar.style.color = "black";
        }
        else if (status == "close"){
            tar.style.color = "inherit";
        }
    }
    else {
        if (status == "open"){
            tar.style.color = "black";
        }
        else if (status == "close"){
            tar.style.color = null;
        }
    }
    
}





function changePartyEvolution(base,i) {

    let evos = getEvolutionFamily(i).map(function(v) {return v["Pokémon"];});
    let data = dataStringToObj(base.getAttribute("data-string"))



    evos = evos.filter(function(v) {
        return v != finaldata["Pokémon"]["Reference"][i]["Pokémon"];
    })
    evos = evos.filter(function(v) {
        return v != finaldata["Pokémon"]["Form"][i][DATA_Pokémon_Form["Form"]];
    })

    for (let q = 0; q < evos.length; q++) {
        let x = q+1;
        evos[q] = x+". "+evos[q];
    }

    evos = evos.join("\n");

    let reply = prompt("Change Evolution\nEnter Number:\n"+evos,"");
    let num = [];

    if (reply != null && reply != "") {
        evos = evos.split("\n");

        for (let q = 0; q < evos.length; q++) {
            num.push(evos[q].split(". ",2)[0]);
        }

        for (let q = 0; q < evos.length; q++) {
            evos[q] = evos[q].split(". ",2)[1];
        }

        let result = evos[parseInt(reply)-1]

      


        if (num.includes(reply)) {
            let pos;
            if (data["ab"] != undefined) {
                if (!data["ab"].toLowerCase().includes("primary") && !data["ab"].toLowerCase().includes("secondary") && !data["ab"].toLowerCase().includes("hidden")) {
                    pos = getAbilityPosition(getPokémonInt(data["pok"]),data["ab"])
                }
            }

            data["pok"] = result;

            if (pos != undefined) {
                data["ab"] = getPositionAbility(getPokémonInt(data["pok"]),pos);
            }
            base.setAttribute("data-string",dataObjToString(data));

            partyApply(base)
            consoleText("Evolution updated.");
        }
        else {
            consoleText("Number returned an error.")
        }

        
    }
}





function changePartyForm(base,i) {

    let forms = getPokémonForm(i);
    let data = dataStringToObj(base.getAttribute("data-string"))


    forms = forms.filter(function(v) {
        return v != getPokémonName(i);
    })

    for (let q = 0; q < forms.length; q++) {
        let x = q+1;
        forms[q] = x+". "+forms[q];
    }

    forms = forms.join("\n");

    let reply = prompt("Change Form\nEnter Number:\n"+forms,"");
    let num = [];

    if (reply != null && reply != "") {

        forms = forms.split("\n");

        for (let q = 0; q < forms.length; q++) {
            num.push(forms[q].split(". ",2)[0]);
        }

        for (let q = 0; q < forms.length; q++) {
            forms[q] = forms[q].split(". ",2)[1];
        }

        let result = forms[parseInt(reply)-1]


 
        if (num.includes(reply)) {
            data["pok"] = result;
            base.setAttribute("data-string",dataObjToString(data));
            partyApply(base)
            consoleText("Form updated.");
        }
        else {
            consoleText("Number returned an error.")
        }
        
    }
}


function moveLearnsetPartyBox(action) {
    let base = document.querySelector("#move section[name='sidebar'] ul");
    let lis = base.querySelectorAll(":scope > li");
    let boxImg = document.querySelectorAll('#pokémon > aside[name="team"] > section[name="box"] ul > li img[value]');
    let partyImg = document.querySelectorAll('#pokémon > aside[name="team"] > section[name="party"] > div img[value]');
    let partyArr = [];
    let boxArr = [];

    for (let q = 0; q < boxImg.length; q++) {
        if (boxImg[q].getAttribute("value") != undefined) {
            boxArr.push(boxImg[q].getAttribute("value"));
        }
        else {
            boxArr.push("");
        }
    }


    for (let q = 0; q < partyImg.length; q++) {
        if (partyImg[q].getAttribute("value") != undefined) {
            partyArr.push(partyImg[q].getAttribute("value"));
        }
        else {
            partyArr.push("");
        }
    }

    for (let i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
    }

    if (action != undefined) {
        for (let i = 0; i < lis.length; i++) {
            let lisImg = lis[i].querySelectorAll(":scope > *[value]");
            for (let q = 0; q < lisImg.length; q++) {
                let conditions = [];
                let tempArr = [];
                if(action.includes(",")) {
                    for (let u = 0; u < action.split(",").length; u++) {
                        tempArr.push(action.split(",")[u]);
                    }
                }
                else {
                    tempArr = [action];
                }

                for (let u = 0; u < tempArr.length; u++) {
                    if (tempArr[u] == "PARTY") {
                        conditions.push(partyArr.includes(lisImg[q].getAttribute("value")))
                    }
                    if (tempArr[u] == "BOX") {
                        conditions.push(boxArr.includes(lisImg[q].getAttribute("value")))
                    }
                }
                if (conditions[0] == true || conditions[1] == true) {
                    lis[i].style.removeProperty("display");
                }
            }
        }
    }
    else {
        for (let i = 0; i < lis.length; i++) {
            lis[i].style.removeProperty("display");
        }
    }
  



}

let moveLearnsetPB = [];
function movePartyBoxLearnset() {
    let label = this.parentElement.querySelector(':scope > label[for="'+this.id+'"]').firstElementChild;

    if (this.checked == true) {
        if (!moveLearnsetPB.includes(label.innerText)) {
            moveLearnsetPB.push(label.innerText);
        }
    }
    else if (this.checked == false) {
        if (moveLearnsetPB.includes(label.innerText)) {
            moveLearnsetPB = moveLearnsetPB.filter(function(v) {
                return v != label.innerText;
            })
        }
    }
    let tempStr;

    if (moveLearnsetPB.length > 1) {
        tempStr = moveLearnsetPB.join(",");
    }
    else {
        tempStr = moveLearnsetPB[0];
    }

    let navMove = document.querySelector('#navigation input[value="Moves"]');
    navMove.addEventListener("change", function() {moveLearnsetPartyBox(tempStr);});

    moveLearnsetPartyBox(tempStr);
    
}




function abilityLearnsetPartyBox(action) {
    let base = document.querySelector("#ability section[name='sidebar'] ul");
    let lis = base.querySelectorAll(":scope > li");
    let boxImg = document.querySelectorAll('#pokémon > aside[name="team"] > section[name="box"] ul > li img[value]');
    let partyImg = document.querySelectorAll('#pokémon > aside[name="team"] > section[name="party"] > div img[value]');
    let partyArr = [];
    let boxArr = [];

   
    for (let q = 0; q < boxImg.length; q++) {
        if (boxImg[q].getAttribute("value") != undefined) {
            boxArr.push(boxImg[q].getAttribute("value"));
        }
        else {
            boxArr.push("");
        }
    }


    for (let q = 0; q < partyImg.length; q++) {
        if (partyImg[q].getAttribute("value") != undefined) {
            partyArr.push(partyImg[q].getAttribute("value"));
        }
        else {
            partyArr.push("");
        }
    }

    for (let i = 0; i < lis.length; i++) {
        lis[i].style.display = "none";
    }

    if (action != undefined) {
        for (let i = 0; i < lis.length; i++) {
            let lisImg = lis[i].querySelectorAll(":scope > *[value]");
            for (let q = 0; q < lisImg.length; q++) {
                
                let conditions = [];
                let tempArr = [];
                if(action.includes(",")) {
                    for (let u = 0; u < action.split(",").length; u++) {
                        tempArr.push(action.split(",")[u]);
                    }
                }
                else {
                    tempArr = [action];
                }

                for (let u = 0; u < tempArr.length; u++) {
                    if (tempArr[u] == "PARTY") {
                        conditions.push(partyArr.includes(lisImg[q].getAttribute("value")))
                    }
                    if (tempArr[u] == "BOX") {
                        conditions.push(boxArr.includes(lisImg[q].getAttribute("value")))
                    }
                }
                if (conditions[0] == true || conditions[1] == true) {
                    lis[i].style.removeProperty("display");
                }
            }
        }
    }
    else {
        for (let i = 0; i < lis.length; i++) {
            lis[i].style.removeProperty("display");
        }
    }
  



}
let abilityLearnsetPB = [];
function abilityPartyBoxLearnset() {
    let label = this.parentElement.querySelector(':scope > label[for="'+this.id+'"]').firstElementChild;

    if (this.checked == true) {
        if (!abilityLearnsetPB.includes(label.innerText)) {
            abilityLearnsetPB.push(label.innerText);
        }
    }
    else if (this.checked == false) {
        if (abilityLearnsetPB.includes(label.innerText)) {
            abilityLearnsetPB = abilityLearnsetPB.filter(function(v) {
                return v != label.innerText;
            })
        }
    }
    let tempStr;

    if (abilityLearnsetPB.length > 1) {
        tempStr = abilityLearnsetPB.join(",");
    }
    else {
        tempStr = abilityLearnsetPB[0];
    }

    let navAbility = document.querySelector('#navigation input[value="Abilities"]');
    navAbility.addEventListener("change", function() {abilityLearnsetPartyBox(tempStr);});

    abilityLearnsetPartyBox(tempStr);
    
}


$("body").click(function(event) {
    let els = document.getElementsByClassName("drop")
    for (let i = 0; i < els.length; i++) {
        if(!$(event.target).closest(els[i]).length && !$(event.target).is(els[i])) {
            let el = els[i].querySelector(":scope input[type='checkbox']");
            if (el != null) {
                el.checked = false;
            }
        }
    }
    
});



$("body").click(function(event) {
    document.body.classList.remove("dragging");
	if(!$(event.target).closest("#pokémon > aside section[name='party'] figure[name='export'], #pokémon > aside section[name='party'] > span > figure[name='export']").length && !$(event.target).is("#pokémon > aside section[name='party'] figure[name='export'], #pokémon > aside section[name='party'] > span > figure[name='export']")) {
		$("#pokémon > aside section[name='party'] figure[name='export'], #pokémon > aside section[name='party'] > span > figure[name='export']").removeClass("active");
	}
	if(!$(event.target).closest("#pokémon > aside section[name='party'] figure[name='export']").length && !$(event.target).is("#pokémon > aside section[name='party'] figure[name='export']")) {
		$("#pokémon > aside section[name='party'] figure[name='export']").removeClass("active");
	}
    if(!$(event.target).closest("#pokémon > aside section[name='party'] figure[name='exit']").length && !$(event.target).is("#pokémon > aside section[name='party'] figure[name='exit']")) {
		$("#pokémon > aside section[name='party'] figure[name='exit']").removeClass("active");
	}
    if(!$(event.target).closest("#pokémon > aside section[name='box'] figure[name='export']").length && !$(event.target).is("#pokémon > aside section[name='box'] figure[name='export']")) {
		$("#pokémon > aside section[name='box'] figure[name='export']").removeClass("active");
	}
    
});
