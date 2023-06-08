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
	let navigationSearchExit = document.createElement("span");
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
	navigationSearchInput.setAttribute("type","text");
	navigationSearchInput.setAttribute("placeholder","Search...");
	navigationSearchInput.setAttribute("onfocus","this.placeholder = ''");
	navigationSearchInput.setAttribute("onblur","this.placeholder = 'Search...'");
	navigationSearchInput.setAttribute("autocomplete","off");
	navigationSearchInput.setAttribute("tabindex","0");
	navigationSearchExit.setAttribute("name","exit");
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
	navigationSearchContent.appendChild(navigationSearchExit);
	navigationSearchContent.appendChild(navigationSearchInput);
	navigationContent.appendChild(navigationGame);
	navigationGame.appendChild(navigationGameContent);
	navigationGameContent.appendChild(navigationGameImg);
	navigationContent.appendChild(navigationSettings);
	navigationSettings.appendChild(navigationSettingsIcon);
    navigationSettingsIcon.appendChild(navigationSettingsIconText);

    navigationSearch.addEventListener("keyup", function() {search("Pokémon");});
    navigationSearchExit.addEventListener("click", function() {exitSearch("Pokémon");count();});


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


    let teamPartyExport = document.createElement("figure");
    teamPartyExport.setAttribute("name","export");
    teamPartyBar.appendChild(teamPartyExport)
    teamPartyExport.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})
    let teamPartyExportText = document.createElement("small");
    teamPartyExportText.innerText = "⮟";
    teamPartyExport.appendChild(teamPartyExportText)
    let teamPartyExportTop = document.createElement("div");
    teamPartyExport.appendChild(teamPartyExportTop)
    let teamPartyExportTopWrap = document.createElement("span");
    teamPartyExportTop.appendChild(teamPartyExportTopWrap)
    let teamPartyExportOpts = ["Import Pokémon","Copy Data Strings","Send to Damage Calculator"];

    teamPartyExport.addEventListener("click",dropRelPos);

    for(let e = 0; e < teamPartyExportOpts.length; e++) {
        let teamPartyExportWrapTop = document.createElement("span");
        let teamPartyExportWrap = document.createElement("b");
        let teamPartyExportTxt = document.createElement("small");
        teamPartyExportWrapTop.setAttribute("name",teamPartyExportOpts[e]);
        teamPartyExportWrap.setAttribute("type","invert");
        teamPartyExportTxt.innerText = teamPartyExportOpts[e];
        teamPartyExportTopWrap.appendChild(teamPartyExportWrapTop);
        teamPartyExportWrapTop.appendChild(teamPartyExportWrap);
        teamPartyExportWrap.appendChild(teamPartyExportTxt);
        teamPartyExportWrap.addEventListener("click",teamPartyExportFunction);
    }
    function teamPartyExportFunction() {
        let base = findUpTag(this,"SECTION");
        let tars = base.querySelectorAll(":scope > div:not([name='empty'])");

        let res = [];

        for (let i = 0; i < tars.length; i++) {
            res.push(getPartyData(tars[i]))
        }

        


        let dataStrings = res.join("\n");

        let val = this.parentElement.getAttribute("name");

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

            let dmgBox = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span > span[name='team 1']");
			

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
            let tars = base.querySelectorAll(":scope > div[name='empty']");
            if (tars.length == 0) {
                consoleText("Party is full!");
                return;
            }
        }
    
    }



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





    let natureTemp = [];

    if (Natures.length > 0) {
        natureTemp = Natures;
    }

    for (let i = 0; i < 6; i++) {
        let teamDiv = document.createElement("div");
        let teamSection1 = document.createElement("aside");
        let teamSection2 = document.createElement("aside");
        let teamAdd = document.createElement("b");
        teamAdd.setAttribute("type","invert");
        let teamLeft = document.createElement("span");
        let teamGrab = document.createElement("b");
        let teamPokémon = document.createElement("span");


        let teamImgOuter = document.createElement("span");
        let teamImg = document.createElement("img");

        let teamRight = document.createElement("span");
        let teamStatsButton = document.createElement("figure");
        let teamExit = document.createElement("figure");
        let teamLevel = document.createElement("input");
        let teamNickOuter = document.createElement("span");
        let teamNick = document.createElement("input");


        teamDiv.setAttribute("data-string","");
        teamDiv.setAttribute("name","empty")
        teamImg.setAttribute("value","");
        teamImg.setAttribute("title","");
        teamImg.addEventListener("click", modalData);
        teamImg.setAttribute("function","modalData");

        teamGrab.innerText = "⋮⋮⋮";
        teamStatsButton.setAttribute("type","rotate");
        teamStatsButton.innerText = "⟲";

        teamAdd.innerText = "+";
        teamAdd.classList.add("indicator");

        teamStatsButton.setAttribute("value","moves");
        teamNickOuter.setAttribute("name","name");
        teamImgOuter.setAttribute("name","pokémon");

    
        teamExit.setAttribute("name","exit");
        teamLevel.setAttribute("type","number");
        teamLevel.setAttribute("min","0");
        teamLevel.setAttribute("max","100");
        teamLevel.setAttribute("placeholder","Lvl.");
        teamNick.setAttribute("type","text");
        teamNick.setAttribute("placeholder","Pokémon");
        if (Generation >= 1 && Generation <= 5) {
            teamNick.setAttribute("maxlength","10");
        }
        else if (Generation >= 6) {
            teamNick.setAttribute("maxlength","12");
        }
   

        teamAdd.addEventListener("click", partyAdd)

        teamLevel.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
        teamLevel.addEventListener("change", inputMinMax);
        teamLevel.addEventListener("change", function() {calcPartyStat(this);});

        teamNick.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
        teamNick.addEventListener("click",function(event){if(event.which === 0){this.blur()}});


        teamParty.appendChild(teamDiv);
        teamDiv.appendChild(teamSection1);
        teamDiv.appendChild(teamSection2);
        teamSection2.appendChild(teamAdd);

        teamSection1.appendChild(teamLeft);
        teamLeft.appendChild(teamExit);
        teamLeft.appendChild(teamLevel);
        teamLeft.appendChild(teamGrab);
        teamSection1.appendChild(teamPokémon);


        if (HeldItem == true) {
            let teamItemOuter = document.createElement("span");
            teamItemOuter.setAttribute("name","item");
            teamPokémon.appendChild(teamItemOuter);

            let teamItemSelect = document.createElement("select");
            teamItemOuter.appendChild(teamItemSelect);

            teamItemSelect.setAttribute("type","icon");

            let teamHeldItemImage = document.createElement("img");
            teamHeldItemImage.src = "";
            teamHeldItemImage.setAttribute("name","item");
            teamHeldItemImage.setAttribute("title","");
            teamImgOuter.appendChild(teamHeldItemImage);

            teamItemSelect.addEventListener("change",selectModify);
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
        



 




        teamExit.addEventListener("click",dropRelPos);
        teamExit.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})

        let teamExitTxt = document.createElement("small");
        teamExitTxt.innerText = "❌";
        teamExit.appendChild(teamExitTxt)

        let teamExitTop = document.createElement("div");
        teamExit.appendChild(teamExitTop)
        let teamExitTopWrap = document.createElement("span");
        teamExitTop.appendChild(teamExitTopWrap)

        let teamExitOpts = ["Send to Box","Delete"];


        for(let e = 0; e < teamExitOpts.length; e++) {
            let teamExitWrapTop = document.createElement("span");
            let teamExitWrap = document.createElement("b");
            let teamExitText = document.createElement("small");
            teamExitWrapTop.setAttribute("name",teamExitOpts[e]);
            teamExitWrap.setAttribute("type","invert");
            teamExitText.innerText = teamExitOpts[e];
            teamExitTopWrap.appendChild(teamExitWrapTop);
            teamExitWrapTop.appendChild(teamExitWrap);
            teamExitWrap.appendChild(teamExitText);
            teamExitWrap.addEventListener("click",teamExitChange);
        }







		let teamExport = document.createElement("figure");
        teamExport.setAttribute("name","export");
        teamLeft.appendChild(teamExport)

        teamExport.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})

        let teamExportTxt = document.createElement("small");
        teamExportTxt.innerText = "⮟";
        teamExport.appendChild(teamExportTxt)

        let teamExportTop = document.createElement("div");
        teamExport.appendChild(teamExportTop)
        let teamExportTopWrap = document.createElement("span");
        teamExportTop.appendChild(teamExportTopWrap)

        teamExport.addEventListener("click",dropRelPos);
       

        let teamExportOpts = ["Copy Data String","Add to Damage Calculator","Add Copy to Party","Add Copy to Box","Change Evolution","Change Form"];


        for(let e = 0; e < teamExportOpts.length; e++) {
            let teamExportWrapTop = document.createElement("span");
            let teamExportWrap = document.createElement("b");
            let teamExportText = document.createElement("small");
            teamExportWrapTop.setAttribute("name",teamExportOpts[e]);
            teamExportWrap.setAttribute("type","invert");
            teamExportText.innerText = teamExportOpts[e];
            teamExportTopWrap.appendChild(teamExportWrapTop);
            teamExportWrapTop.appendChild(teamExportWrap);
            teamExportWrap.appendChild(teamExportText);
            teamExportWrap.addEventListener("click",teamExportChange);
        }

        


        function teamExportChange() {
            let tar = findUpAtt(this,"data-string");
            let base = document.querySelectorAll('#pokémon > aside[name="team"] section div[name="empty"]');
       
            let val = this.parentElement.getAttribute("name");
            let dataString = getPartyData(tar);
            let dataStringObj = dataStringToObj(dataString);


            let pok = dataStringObj["pok"];
            let int = getPokémonInt(pok);



            if (int == undefined) {
                consoleText("An error occured.")
                return;
            }

   
            if (val == "Add Copy to Box") {
                storeInBox(dataString);
                consoleText("Copy added to Box.");
            }
            else if (val == "Add Copy to Party") {
                if (base.length > 0) {
                    createParty(base[0],dataString);
                    partyShow(base[0]);
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
                let dmgSlots = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > div > span[name='team 1'] > div[data-string]");
            
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
                        let dmgBox = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span > span[name='team 1']");
                        DMGPartyCreate(dmgBox,dataString);
                        SwitchTab("Tools","Damage Calculator");
                    }
                }
                
            }
    



 







        }

        function teamExitChange() {
            let tar = findUpAtt(this,"data-string");
          
            let val = this.parentElement.getAttribute("name");
            let dataString = getPartyData(tar);
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
                    partyHide(tar);
                    partyDefault(tar);
                    consoleText("Pokémon deleted.");
                }
            }
            else if (val == "Send to Box") {
                consoleText("Sent "+pok+" to Box.");
                storeInBox(dataString);
                partyHide(tar);
                partyDefault(tar);
            }
        }
        function dropRelPos() {

            let box = this.getBoundingClientRect();
            let body = document.body;
            let docEl = document.documentElement;
        
            let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
            let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
        
            let clientTop = docEl.clientTop || body.clientTop || 0;
            let clientLeft = docEl.clientLeft || body.clientLeft || 0;
        
            let top  = box.top + scrollTop - clientTop;
            let left = box.left + scrollLeft - clientLeft;

            let bodyY = body.getBoundingClientRect().bottom;
            let bodyX = body.getBoundingClientRect().right;

     
            let y = top/bodyY;
            let x = left/bodyX;

            this.lastChild.className = "";

            if (x > 0.5) {
                this.lastChild.classList.add("right");
            }
            else {
                this.lastChild.classList.add("left");
            }

            if (y < 0.5) {
                this.lastChild.classList.add("top");
            }
            else {
                this.lastChild.classList.add("bottom");
            }
        }
        
    
        let dataOptions = ["Moves","Stats","Additional"];

        for (let u = 0; u < dataOptions.length; u++) {
            let teamData = document.createElement("span");
     
            teamData.setAttribute("name",dataOptions[u].toLowerCase());
            
            teamData.classList.add("scroll");
            teamSection1.appendChild(teamData);

            for (let y = 0; y < 3; y++) {
                let teamDataInner = document.createElement("span");
                teamData.appendChild(teamDataInner);

                if (y == 2 && dataOptions[u] == "Stats" && natureTemp.length > 0) {
                    teamDataInner.setAttribute("name","nature");
                }
                if (y == 2 && dataOptions[u] == "Moves" && Ability.length > 0) {
                    teamDataInner.setAttribute("name","ability");
                }
                if (y == 2 && dataOptions[u] == "Stats" && natureTemp.length < 1) {
                    teamDataInner.remove();
                }
                if (y == 2 && dataOptions[u] == "Moves" && Ability.length < 1) {
                    teamDataInner.remove();
                }
                if (y == 2 && dataOptions[u] == "Additional") {
                    teamDataInner.remove();
                }


                if (y == 0) {
                    let teamDataTitle = document.createElement("small");
                    teamDataTitle.innerText = dataOptions[u];
                    teamDataInner.appendChild(teamDataTitle);
                }

                else if (y == 1 && dataOptions[u] == "Stats") {
                    
                    
               
                    for (let r = 0; r < 4; r++) {
                        let teamDataStats = document.createElement("span");
                        teamDataInner.appendChild(teamDataStats);
                        for (let q = 0; q < Stats.length; q++) {
                            if (Stats[q] != "Total") {
                                let teamDataInput = document.createElement("input");
                                teamDataInput.setAttribute("type","number");

                                if (r == 1) {
                                    teamDataStats.setAttribute("name","iv");

                                    teamDataInput.setAttribute("placeholder","IV");
                                    teamDataInput.setAttribute("title","Individual Value"+"\n"+Stats[q]);
                                    if (Generation >= 1 && Generation <= 2) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","15");
                                    }
                                    else if (Generation >= 3) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","31");
                                    }
                                    teamDataInput.addEventListener("change", inputMinMax);
                                }
                                else if (r == 2) {
                                    teamDataStats.setAttribute("name","ev");

                                    if (Generation >= 1 && Generation <= 2) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","255");
                                        teamDataInput.setAttribute("placeholder","EV");
                                        teamDataInput.setAttribute("title","Effort Value"+"\n"+Stats[q]);
                                    }
                                    else if (GameID >= 31 && GameID <= 32) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","200");
                                        teamDataInput.setAttribute("placeholder","AV");
                                        teamDataInput.setAttribute("title","Awakening Value"+"\n"+Stats[q]);
                                    }
                                    else if (Generation >= 3) {
                                        teamDataInput.setAttribute("min","0");
                                        teamDataInput.setAttribute("max","255");
                                        teamDataInput.setAttribute("placeholder","EV");
                                        teamDataInput.setAttribute("title","Effort Value"+"\n"+Stats[q]);
                                        teamDataInput.addEventListener("blur", evInputMax);
                                        teamDataInput.addEventListener("focus", evInputMax);
                                        teamDataInput.addEventListener("change", evInputMax);
                                    }
                                    teamDataInput.addEventListener("change", inputMinMax);
                                }
                                else {
                                    teamDataInput.setAttribute("min","0");
                                    teamDataInput.setAttribute("max","0");
                                    teamDataInput.setAttribute("placeholder",Stats[q]+":")
                                    teamDataInput.addEventListener("change", inputMinMax);
                                    teamDataInput.setAttribute("title",Stats[q]);
                                    teamDataInput.setAttribute("disabled","");
                                }
                              
                                teamDataInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                                teamDataInput.addEventListener("change", function() {calcPartyStat(this);});
                                teamDataStats.appendChild(teamDataInput);
                            }
                        }
                    }
                }

                else if (y == 1 && dataOptions[u] == "Additional") {
                    let teamDataAddOuter = document.createElement("span");
                    teamDataInner.appendChild(teamDataAddOuter);
                    
                    if (Friendship == true) {
                        let teamDataAdd = document.createElement("label");
                        let teamDataAddText = document.createElement("small");
                        let teamDataAddInput = document.createElement("input");
                        teamDataAdd.setAttribute("name","friendship");
                        teamDataAddText.innerText = "Friendship: ";
                        teamDataAddInput.setAttribute("type","number");
                        teamDataAddInput.setAttribute("min","0");
                        teamDataAddInput.setAttribute("max","255");
                        teamDataAddInput.setAttribute("name","small");
                        teamDataAddOuter.appendChild(teamDataAdd);
                        teamDataAdd.appendChild(teamDataAddText);
                        teamDataAdd.appendChild(teamDataAddInput);
                        teamDataAddInput.addEventListener("change", inputMinMax);
                        teamDataAddInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                        teamDataAddInput.addEventListener("change",function() {calcPartyStat(this);});
                    }

                    let met = ["Location","Level","Date"];
                    for(let r = 0; r < met.length; r++) {
                        let teamDataAdd = document.createElement("label");
                        let teamDataAddText = document.createElement("small");
                        teamDataAdd.setAttribute("name",met[r].toLowerCase());
                        teamDataAddText.innerText = met[r]+" Met: ";
                        teamDataAddOuter.appendChild(teamDataAdd);
                        teamDataAdd.appendChild(teamDataAddText)
                        if (met[r] == "Location") {
                            let teamDataAddInput = document.createElement("select");
                            teamDataAddInput.setAttribute("name","small");
                            teamDataAdd.appendChild(teamDataAddInput)
                            teamDataAddInput.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
                            teamDataAddInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                            teamDataAddInput.addEventListener("change", selectModify);

                            let teamDataAddLabel = document.createElement("option");
                            teamDataAddLabel.innerText = "";
                            teamDataAddLabel.value = "";
                            teamDataAddInput.appendChild(teamDataAddLabel)

                            for(let t = 0; t < finaldata["Locations"]["Reference"].length; t++) {
                                if (finaldata["Locations"]["Reference"][t]["Location"] != undefined) {
                                    let teamDataAddLabel = document.createElement("option");
                                    teamDataAddLabel.innerText = finaldata["Locations"]["Reference"][t]["Location"];
                                    teamDataAddLabel.value = finaldata["Locations"]["Reference"][t]["Location"];
                                    teamDataAddInput.appendChild(teamDataAddLabel)
                                }
                            }
                        }
                        else if (met[r] == "Level") {
                            let teamDataAddInput = document.createElement("input");
                            teamDataAddInput.setAttribute("type","number");
                            teamDataAddInput.setAttribute("min","0");
                            teamDataAddInput.setAttribute("max","100");
                            teamDataAddInput.setAttribute("name","small");
                            teamDataAdd.appendChild(teamDataAddInput)
                            teamDataAddInput.addEventListener("change", inputMinMax);
                            teamDataAddInput.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                        }
                        else if (met[r] == "Date") {
                            let teamDataAddInput = document.createElement("input");
                            teamDataAddInput.setAttribute("type","date");
                            teamDataAddInput.setAttribute("name","small");
                            teamDataAdd.appendChild(teamDataAddInput)
                            //teamDataAddInput.addEventListener("change", function() {consoleText("now1");this.blur();});   
                        }
                    }

 
                }

                else if (y == 1 && dataOptions[u] == "Moves") {
                    for (let p = 0; p < 4; p++) {
                        let teamDataSelectOuter = document.createElement("span");
                        let teamDataSelect = document.createElement("select");
                        teamDataInner.appendChild(teamDataSelectOuter);
                        teamDataSelectOuter.appendChild(teamDataSelect);
                        teamDataSelect.addEventListener("change",selectModify);
                        teamDataSelect.addEventListener("focus",selectModify);
                        teamDataSelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
                        teamDataSelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                    }
                }
                else if (y == 2 && dataOptions[u] == "Moves") {
                    if (Ability.length > 0) {
                        let teamDataSelect = document.createElement("select");
                        teamDataInner.appendChild(teamDataSelect);
                        teamDataSelect.addEventListener("change",selectModify);
                        teamDataSelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
                        teamDataSelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                    }
                }

                if (y == 2 && u >= 1 && u <= 2) {
                    if (natureTemp.length > 0) {
                        let teamDataSelect = document.createElement("select");
                        teamDataInner.appendChild(teamDataSelect);
                        teamDataSelect.addEventListener("change",selectModify);
                        teamDataSelect.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
                        teamDataSelect.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
                        teamDataSelect.addEventListener("change", partyNature);
                        teamDataSelect.addEventListener("change", function() {calcPartyStat(this);});
                        for (let q = 0; q < natureTemp.length; q++) {
                            let teamDataOption = document.createElement("option");
                            teamDataOption.setAttribute("value",natureTemp[q]);
                            teamDataOption.innerText = natureTemp[q];
                            teamDataSelect.appendChild(teamDataOption);
                        }
                    }
                }
            }
        }


        
        teamSection1.appendChild(teamRight);
        teamRight.appendChild(teamStatsButton);

        if (Gender == true) {
            let teamGender = document.createElement("select");
            teamRight.appendChild(teamGender);
            teamGender.setAttribute("type","icon");
            teamGender.setAttribute("title","Gender");
            teamGender.addEventListener("keyup",function(event){if(event.which === 13 || event.which === 27){this.blur()}});
            teamGender.addEventListener("click",function(event){if(event.which === 0){this.blur()}});
            teamGender.addEventListener("change",selectModify);
        }

        teamRight.appendChild(teamExport);

        teamStatsButton.addEventListener("click", partyDataSwitchAll);




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
    boxExport.setAttribute("name","export");
    teamBox.appendChild(boxExport)

    boxExport.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})
    let boxExportText = document.createElement("header");
    boxExportText.innerText = "🟆";
    boxExport.appendChild(boxExportText)
    let boxExportTop = document.createElement("div");
    boxExport.appendChild(boxExportTop)
    let boxExportTopWrap = document.createElement("span");
    boxExportTop.appendChild(boxExportTopWrap)
    let boxExportOpts = ["Copy Data Strings","Send to Damage Calculator"];

    boxExport.addEventListener("click",dropRelPos);

    for(let e = 0; e < boxExportOpts.length; e++) {
        let boxExportWrapTop = document.createElement("span");
        let boxExportWrap = document.createElement("b");
        let boxExportTxt = document.createElement("small");
        boxExportWrapTop.setAttribute("name",boxExportOpts[e]);
        boxExportWrap.setAttribute("type","invert");
        boxExportTxt.innerText = boxExportOpts[e];
        boxExportTopWrap.appendChild(boxExportWrapTop);
        boxExportWrapTop.appendChild(boxExportWrap);
        boxExportWrap.appendChild(boxExportTxt);
        boxExportWrap.addEventListener("click",boxExportFunction);
    }
    function boxExportFunction() {
        let base = findUpTag(this,"SECTION");
        let tars = base.querySelectorAll(":scope ul li");

        if (tars.length == 0) {
            consoleText("No Pokémon in Box!");
            return;
        }
        else {
            let res = [];
            for (let i = 0; i < tars.length; i++) {
                res.push(getBoxData(tars[i]))
            }
        }


        let dataStrings = res.join("\n");

        let val = this.parentElement.getAttribute("name");

        if (val == "Copy Data Strings") {
            navigator.clipboard.writeText(dataStrings);
            console.log(dataStrings);
            consoleText("Copied!");
        }
        else if (val == "Send to Damage Calculator") {
            let dmgBox = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span > span[name='team 1']");
				
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
        let lock = confirm("Deleting all the Pokémon in the box.\nDo you want to continue?");

        let items = document.querySelectorAll("#pokémon aside[name='team'] section[name='box'] > ul li");

   
            if (lock) {
                let ask = confirm("This cannot be reverted.\nDo you want to continue?");

                if (ask) {
                    if (items.length > 0) {
                        for (let u = 0; u < items.length; u++) {
                            items[u].remove("hover");
                        }
                        boxMemory("Save");

                        consoleText("Box successfully cleared.");
                    }
                    else {
                        consoleText ("No Pokémon found in Box.")
                    }
                }
            }
    }

    let blinktar = document.querySelector('#pokémon > aside section:not([name]) > label[for="partybox1"] *.indicator');
    let data = [];




    $(function() {
        $('#pokémon > aside section[name="box"] > ul').sortable({
            start: function(e, ui) {
                saveddrag = ui.item.context;
                startDrag();
                boxMemory("Save");
                document.body.classList.add("dragging");
            },
            stop: function(e, ui) {
                stopDrag();
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

        $('#pokémon > aside section:not([name]) > label[for="partybox1"] .indicator').droppable({
            drop: function(e, ui) {
                let tar = document.querySelectorAll('#pokémon > aside[name="team"] section[name="party"] > div[name="empty"]');
                if (saveddrag != undefined) {
                    if (tar.length > 0) {
                        if (data.length > 1) {
                            data = data.join("|")
                        }
                        else {
                            data = data[0];
                        }
                        deleteBox(saveddrag);
                        createParty(tar[0],data);
                        partyShow(tar[0]);
                        consoleText("Sent "+saveddrag.getAttribute("data-pok")+" to Party.")
                    }
                    else {
                        consoleText("Party is full!");
                    }
                }
            }
        });


        function startDrag() {
            saveddrag.style.pointerEvents = "none";

            if (saveddrag.getAttribute("data-pok") != undefined) {
                data.push("pok:"+saveddrag.getAttribute("data-pok"));
            }
            if (saveddrag.getAttribute("data-item") != undefined) {
                data.push("it:"+saveddrag.getAttribute("data-item"));
            }
            if (saveddrag.getAttribute("data-nick") != undefined) {
                data.push("ni:"+saveddrag.getAttribute("data-nick"));
            }
            if (saveddrag.getAttribute("data-level") != undefined) {
                data.push("lv:"+saveddrag.getAttribute("data-level"));
            }
            if (saveddrag.getAttribute("data-gender") != undefined) {
                data.push("ge:"+saveddrag.getAttribute("data-gender"));
            }
            if (saveddrag.getAttribute("data-move") != undefined) {
                data.push("mo:"+saveddrag.getAttribute("data-move"));
            }
            if (saveddrag.getAttribute("data-ability") != undefined) {
                data.push("ab:"+saveddrag.getAttribute("data-ability"));
            }
            if (saveddrag.getAttribute("data-iv") != undefined) {
                data.push("iv:"+saveddrag.getAttribute("data-iv"));
            }
            if (saveddrag.getAttribute("data-ev") != undefined) {
                data.push("ev:"+saveddrag.getAttribute("data-ev"));
            }
            if (saveddrag.getAttribute("data-nature") != undefined) {
                data.push("na:"+saveddrag.getAttribute("data-nature"));
            }
            if (saveddrag.getAttribute("data-metlocation") != undefined) {
                data.push("metlo:"+saveddrag.getAttribute("data-metlocation"));
            }
            if (saveddrag.getAttribute("data-metlevel") != undefined) {
                data.push("metlv:"+saveddrag.getAttribute("data-metlevel"));
            }
            if (saveddrag.getAttribute("data-metdate") != undefined) {
                data.push("metda:"+saveddrag.getAttribute("data-metdate"));
            }
            if (saveddrag.getAttribute("data-friendship") != undefined) {
                data.push("fr:"+saveddrag.getAttribute("data-friendship"));
            }

            boxDrag = true;
            blinktar.firstElementChild.classList.add("enabled");
        }
        function stopDrag() {
            saveddrag.style.pointerEvents = "unset";
            saveddrag = "";
            boxDrag = false;
            blinktar.firstElementChild.classList.remove("enabled");
            data = [];
        }
    });

    $("body").mousemove(function (e) {
        if (boxDrag == true) {
            let tar = document.querySelectorAll('#pokémon > aside[name="team"] section[name="party"] > div[name="empty"]');
            if (tar.length > 0) {
                if (e.target === blinktar) {
                    blinktar.firstElementChild.classList.add("hover");
                }
                else {
                    blinktar.firstElementChild.classList.remove("hover");
                }
            }
        }
        else {
            let hovers = document.getElementsByClassName("hover");
            for (let u = 0; u < hovers.length; u++) {
                hovers[u].classList.remove("hover");
            }
        }
    });

    
    $(function() {
        $('#pokémon > aside section[name="party"]').sortable({
            stop: function(e,ui) {
            },
            handle:"aside > span:first-child > b:last-child",
            cursor:"grabbing",
            axis: "y",
            scroll: false,
            items:"> div",
        });
    });
    

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

    let settingsDefaultThemeOuter = document.createElement("span");
    let settingsDefaultTheme = document.createElement("div");
    let settingsDefaultThemeInput = document.createElement("input");
    let settingsDefaultThemeSpan = document.createElement("span");


    let settingsDefaultImgtypeOuter = document.createElement("span");
    let settingsDefaultImgtypeOuterLeft = document.createElement("span");
    let settingsDefaultImgtypePath = document.createElement("select");
    let settingsDefaultImgtypeOuterRight = document.createElement("span");
    let settingsDefaultImgtypeImage = document.createElement("img");
    let settingsDefaultImgtypeExecute = document.createElement("button");
    let settingsDefaultImgtypeExecuteText = document.createElement("p");


  



    settingsDefaultImgtypeExecute.setAttribute("type","small")
    settingsDefaultImgtypeExecuteText.innerText = "Apply";

    settingsDefaultImgtypeOuter.setAttribute("name","imagetype");
    settingsDefaultResizeOuter.setAttribute("name","resize");
    settingsDefaultResizeInput.setAttribute("type","range");
    settingsDefaultResizeInput.setAttribute("id","resizer");
    settingsDefaultResizeInput.setAttribute("min","60");
    settingsDefaultResizeInput.setAttribute("max","420");
    settingsDefaultResizeInput.setAttribute("value","240");
    settingsDefaultResizeInput.setAttribute("step","60");
    settingsDefaultResizeInput.setAttribute("autocomplete","off");
    settingsDefaultThemeOuter.setAttribute("name","theme");
    settingsDefaultThemeInput.setAttribute("type","checkbox");
 

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

    settings.appendChild(settingsDefaultThemeOuter);
    settingsDefaultThemeOuter.appendChild(settingsDefaultTheme);
    settingsDefaultTheme.appendChild(settingsDefaultThemeInput);
    settingsDefaultTheme.appendChild(settingsDefaultThemeSpan);

    settingsDefaultThemeInput.addEventListener('change', function() {switchTheme(); memory("Save","",settingsDefaultThemeInput)});

   
    
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
                            let dat = returnData(i, statsevL[q]+" "+Stats[u], "lower,undefined");
                            if (dat == "") {
                                dat = "none";
                            }
                            contentDiv.setAttribute("data-search-"+statsevS[q]+Stats[u].replaceAll(".","").replaceAll(" ","").toLowerCase(), dat);
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

                    contentImg.addEventListener("dragstart",function(){document.body.classList.add("dragging");})
                    contentImg.addEventListener("dragend",function(){document.body.classList.remove("dragging");})

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
                    contentDiv.addEventListener("dragstart", dragStart);
                    contentDiv.addEventListener("dragend", dragEnd);
                    contentDiv.addEventListener("drag", dragMove);
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
    memory("Restore","game",[document.querySelector('#pokémon > aside[name="settings"] > span[name="imagetype"] select')]);

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


function partyDataSwitchAll() {


    let base = document.querySelectorAll('#pokémon aside[name="team"] > section[name="party"] > div');


    for (u = 0; u < base.length; u++) {

        let base2 = base[u].querySelectorAll(':scope > aside > span[name]');
        let base3 = base[u].querySelector(':scope > aside > span:last-child figure');

        let val = base3.getAttribute("value");

  

        let tempArr = ["moves","stats","additional",""];
        for (i = 0; i < tempArr.length; i++) {
            let base4 = base[u].querySelector(':scope > aside > span[name="'+tempArr[i]+'"]');
  
            if (val == "") {
                for (q = 0; q < base2.length; q++) {
                    base2[q].classList.remove("show");
                    base2[q].classList.remove("showstart");
                    base2[q].classList.remove("showmiddle");
                    base2[q].classList.remove("showend");
                }

                base[u].querySelector(':scope > aside > span[name="'+tempArr[tempArr.length - 2]+'"]').classList.add("showend");
    
                base3.setAttribute("value",base2[0].getAttribute("name"));
                break;
            }
            if (val == tempArr[i]) {
                for (q = 0; q < base2.length; q++) {
                    base2[q].classList.remove("show");
                    base2[q].classList.remove("showstart");
                    base2[q].classList.remove("showmiddle");
                    base2[q].classList.remove("showend");
                }
          
                base4.classList.add("show");

                if (tempArr[i] == tempArr[0]) {
                    base4.classList.add("showstart");
                }
                if (tempArr[i] != tempArr[0]) {
                    base4.classList.add("showmiddle");
                }
  
                
                if (val = base4.nextElementSibling.getAttribute("name") != null) {
                    base3.setAttribute("value",base4.nextElementSibling.getAttribute("name"));
                }
                else {
                    base3.setAttribute("value","");
                }
                break;
            }
        }
       
    }
}


function partyDataSwitch() {

    let dataAll = this.parentElement.parentElement.querySelectorAll(':scope > span[name]');
    for (q = 0; q < dataAll.length; q++) {
        dataAll[q].style.display = "none";
    }

    let data = this.parentElement.parentElement.querySelector(':scope > span[name="'+this.value+'"]');
    data.style.display = "flex";

    if (this.value = data.nextElementSibling.getAttribute("name") != null) {
        this.value = data.nextElementSibling.getAttribute("name");

    }
    else {
        this.value = data.parentElement.querySelectorAll(":scope > span[name]")[0].getAttribute("name");
    }
}






function partyItem() {

    let base = this.parentElement.parentElement.parentElement.parentElement;
    let item = base.querySelector(':scope span[name="pokémon"] img:first-child');

    

    item.src = getMedia(true,[this.name],[PATH_Item_Bag]);
    item.title = this.value;


    if (this.value == "Item") {
        item.style.display = "none";
    }
    else {
        item.style.display = "unset";
    }
}


function partyDefault(base) {

    let inputs = base.querySelectorAll(':scope input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        if (inputs[i].parentElement.getAttribute("name") == "Date") {
            inputs[i].style.color = "transparent";
        }
    }

    let selects = base.querySelectorAll(':scope select');
    for (let i = 0; i < selects.length; i++) {
        if (selects[i].querySelector(":scope > option:first-child") != undefined) {
            selects[i].value = selects[i].querySelector(":scope > option:first-child").value;
        }
        else {
            selects[i].value = "";
        }

        if (selects[i].parentElement.getAttribute("name") == "Ability") {
            selects[i].title = "";
            selects[i].setAttribute("name","Primary");
        }
    }
    let options = base.querySelectorAll(':scope option');
    for (let i = 0; i < options.length; i++) {
        options[i].removeAttribute("disabled");
    }



    if (HeldItem == true) {
        let held = base.querySelector(":scope img:not([value])");
        held.src = "";
        held.style.display = "none";

        let options = base.querySelectorAll(':scope span[name="item"] select option');
        for (let i = 0; i < options.length; i++) {
            options[i].remove();
        }
    }

    if (Gender == true) {
        let gender = base.querySelector(':scope > aside > span:last-child > select:nth-child(2)')
        let genders = gender.querySelectorAll(':scope > option');

        gender.removeAttribute("name");
        for (let u = 0; u < genders.length; u++) {
            genders[u].remove();
        }
    }


    let moves = base.querySelectorAll(':scope > aside span[name="moves"] span:nth-child(2) select')
    for (let u = 0; u < moves.length; u++) {
        moves[u].removeAttribute("name");
        moves[u].style.fontStyle = "italic";
        let movesOptions = moves[u].querySelectorAll(":scope option");
        for (let q = 0; q < movesOptions.length; q++) {
            movesOptions[q].remove();
        }
    }

    let background = base.querySelector(":scope > aside:first-child");
    let pok = base.querySelector(":scope img[value]");
    let name = base.querySelector(':scope span[name="name"] input');

    background.style.background = "";
    pok.src = "";
    pok.title = "";
    pok.setAttribute("value","");

    name.setAttribute("placeholder","");

    if (Ability.length > 0) {
        let ability = base.querySelector(':scope span[name="moves"] > span:last-child select');
        let abilities = ability.querySelectorAll(':scope option');
        for (let q = 0; q < abilities.length; q++) {
            abilities[q].remove();
        }
    }

    if (Natures.length > 0) {
        let baseStats = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span:last-child');
        baseStats.removeAttribute("name");
    }

}









function dragStart(e) {
    let base = document.querySelector("#pokémon aside[name='team']")
    let tar = e.target;
    savedtar = e.target;
    for (let q = 0; q < 10; q++) {
        if (tar.tagName == "LI") {
            break;
        }
        tar = tar.parentElement;
    }
    drag = getPokémonName(tar.id);
    
    let blinks = base.querySelectorAll(":scope .indicator");
    for (let q = 0; q < blinks.length; q++) {
        blinks[q].classList.add("enabled");
    }
}

function dragEnter(e) {
    if (e.target.innerText == "Party") {
        let tar = document.querySelectorAll('#pokémon > aside[name="team"] section[name="party"] > div[name="empty"]');
        if (tar.length > 0) {
            e.target.classList.add("hover");
        }
    }
    else {
        e.target.classList.add("hover");
    }
}

function dragLeave(e) {
    e.target.classList.remove("hover");
}


function dragMove(e) {
    e.preventDefault();
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnd(e) {

    drag = undefined;

    let base = document.querySelector("#pokémon aside[name='team']")

    let blinks = base.querySelectorAll(":scope .indicator");
    for (let q = 0; q < blinks.length; q++) {
        blinks[q].classList.remove("enabled");
    }

    
}

function dragDrop(e) {

    let base = document.querySelector("#pokémon aside[name='team']")

    let hov = base.querySelectorAll(':scope .hover');
    for(let i = 0; i < hov.length; i++) {
        hov[i].classList.remove("hover");
    }


    if (drag != undefined) {
        if (e.target.innerText == "Party") {
            let base = document.querySelectorAll('#pokémon > aside[name="team"] section div[name="empty"]');
            if (base.length > 0) {
                createParty(base[0],"pok:"+drag);
                partyShow(base[0]);
                consoleText("Added "+drag+" to Party.");
            }
            else {
                consoleText("Party is full!")
            }
        }
        else if (e.target.innerText == "Box") {
            storeInBox("pok:"+drag);
            consoleText("Added "+drag+" to Box.");
        }
        else if (e.target.innerText == "+") {
            let base = e.target.parentElement.parentElement;
            createParty(base,"pok:"+drag);
            partyShow(base);
            consoleText("Added "+drag+" to Party.");
        }
    }
}

function createParty(base,data) {

    let i;
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
    let metlocation;
    let metlevel;
    let metdate;
    let friendship;


    if(data.includes("|")) {
        data = data.split("|")
        for (let q = 0; q < data.length; q++) {
            if (data[q].split(":")[0] == "pok") {
                pok = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "it") {
                item = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ni") {
                nick = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "lv") {
                level = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ge") {
                gender = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "mo") {
                move = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ab") {
                ability = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "iv") {
                iv = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ev") {
                ev = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "na") {
                nature = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlo") {
                metlocation = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlv") {
                metlevel = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metda") {
                metdate = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "fr") {
                friendship = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
        }
    }
    else {
        if (data.split(":")[0] == "pok") {
            pok = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "it") {
            item = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ni") {
            nick = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "lv") {
            level = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ge") {
            gender = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "mo") {
            move = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ab") {
            ability = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "iv") {
            iv = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ev") {
            ev = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "na") {
            nature = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlo") {
            metlocation = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlv") {
            metlevel = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metda") {
            metdate = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "fr") {
            friendship = data.replaceAll(data.split(":")[0]+":","")
        }
    }

    i = getPokémonInt(pok);

    partyDefault(base);



    let baseBackground = base.querySelector(":scope > aside:first-child");
    let basePok = base.querySelector(":scope img[value]");
    let baseItem = base.querySelector(':scope span[name="item"] select');
    let baseItemImg = base.querySelector(':scope span[name="pokémon"] img:not([value])');
    let baseNick = base.querySelector(':scope span[name="name"] input');
    let baseLevel = base.querySelector(':scope input[placeholder="Lvl."]');
    let baseGender = base.querySelector(':scope aside > span:last-child > select:nth-child(2)');
    let baseMove = base.querySelector(':scope span[name="moves"] span:nth-child(2)');
    let baseMoves = base.querySelectorAll(':scope span[name="moves"] > span:nth-child(2) select');
    let baseAbility = base.querySelector(':scope span[name="ability"] select');
    let baseNature = base.querySelectorAll(':scope span[name="nature"] select');
    let baseIV = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span[name="iv"]');
    let baseEV = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span[name="ev"]');
    let baseStats = base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span:last-child');
    let baseMetLocation = base.querySelector(':scope span[name="additional"] label[name="location"] select');
    let baseMetLevel = base.querySelector(':scope span[name="additional"] label[name="level"] input');
    let baseMetDate = base.querySelector(':scope span[name="additional"] label[name="date"] input');
    let baseFriendship = base.querySelector(':scope span[name="additional"] label[name="friendship"] input');
    let baseExport = base.querySelector(":scope aside figure[name='export']");



    let type1 = returnData(i,"Type","undefined")[0];
    let type2 = returnData(i,"Type","undefined")[1];

    if (type2 != undefined) {
        $(baseBackground).css({background: "linear-gradient(to right,var(--type"+type1+"),var(--type"+type2+"))"});
        base.querySelector(":scope > aside:first-child").setAttribute("name",type1+","+type2);
    }
    else {
        $(baseBackground).css({background: "linear-gradient(to right,var(--type"+type1+"),var(--type"+type1+"))"});
        base.querySelector(":scope > aside:first-child").setAttribute("name",type1);
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
    

    basePok.src = getMedia(true,fileNames,[PATH_Pokémon_Battle_Default_Front])
   

    basePok.setAttribute("value",i);
    basePok.title = getPokémonName(i);
    baseNick.setAttribute("placeholder",getPokémonName(i));


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
            baseItemImg.style.display = "unset";
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
            possibleGender = ["♂"];
        }
        else if (getPokémonName(i).includes("Female")) {
            possibleGender = ["♀"];
        }
        else {
            if (tempgender[0] == "0" && tempgender[1] == "0") {
                possibleGender = ["☿"];
            }
            else if (tempgender[0] == "0") {
                possibleGender = ["♀"];
            }
            else if (tempgender[1] == "0") {
                possibleGender = ["♂"];
            }
            else {
                possibleGender = ["♂","♀"];
            }
        }

        if (possibleGender[0] == "♂") {
            baseGender.style.color = "var(--colorBlue)";
        }
        if (possibleGender[0] == "♀") {
            baseGender.style.color = "var(--colorRed)";
        }
        if (possibleGender[0] == "☿") {
            baseGender.style.color = "var(--fontDark)";
        }

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
        let abilities = returnData(i,"Ability","");

        for (let q = 0; q < abilities.length; q++) {
            if (abilities[q] != undefined) {
                let option = document.createElement("option");
                option.innerText = abilities[q];
                option.value = abilities[q];
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
        let baseItems = baseItem.querySelectorAll(":scope option");
        let opt = baseItem.querySelector(':scope option[value="'+item+'"]')
        let tempArr = [];
        for (let q = 0; q < baseItems.length; q++) {
            tempArr.push(baseItems[q].value);
        }

        if (tempArr.includes(item)) {
            baseItem.value = item;
            baseItem.setAttribute("name",opt.getAttribute("name"));
            baseItem.style.fontStyle = "unset";
            baseItemImg.style.display = "unset";
            baseItemImg.src = getMedia(true,[opt.getAttribute("name")],[PATH_Item_Bag]);
            baseItemImg.setAttribute("title",item);
        }
    }
    if (level != undefined) {
        baseLevel.value = level;
    }
    if (gender != undefined && Gender == true) {
        baseGender.value = gender;
        if (gender == "♂") {
            baseGender.style.color = "var(--colorBlue)";
        }
        if (gender == "♀") {
            baseGender.style.color = "var(--colorRed)";
        }
        if (gender == "☿") {
            baseGender.style.color = "var(--fontDark)";
        }
    }
    if (ability != undefined && Ability.length > 0) {
        let abtemp = baseAbility.querySelector(':scope > option[name="'+ability+'"]');

        if (abtemp != undefined) {
            baseAbility.value = abtemp.value;
            baseAbility.setAttribute("name",ability);
            baseAbility.style.fontStyle = "unset";
        }
    }
    if (nature != undefined && Natures.length > 0) {
        for (let q = 0; q < baseNature.length; q++) {
            baseNature[q].value = nature;
        }

        baseStats.setAttribute("name",nature);
    }




    if (move != undefined) {
        let tempmove = [move];
        if (move.includes(",")) {
            tempmove = move.split(",");
        }
        for (let q = 0; q < tempmove.length; q++) {
            let y = q+1;
            if (tempmove[q] != "") {
                if (tempmoves.includes(tempmove[q])) {
                    baseMove.querySelector(":scope > span:nth-child("+y+") select").value = tempmove[q];
                    if (!tempmove[q].includes("Move")) {
                        baseMove.querySelector(":scope > span:nth-child("+y+") select").title = formatMoveData(tempmove[q]);
                        baseMove.querySelector(":scope > span:nth-child("+y+") select").style.fontStyle = "unset";
                        baseMove.querySelector(":scope > span:nth-child("+y+") select").setAttribute("name","styleBackgroundType"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],tempmove[q]))
                    }
                }
            }
            else {
                baseMove.querySelector(":scope > span:nth-child("+y+") select").value = baseMove.querySelector(":scope > span:nth-child("+y+") select").firstElementChild.value;
            }
        }
    }
    if (iv != undefined) {
        let tempiv = [iv];
        if (iv.includes(",")) {
            tempiv = iv.split(",");
        }
        for (let q = 0; q < tempiv.length; q++) {
            let y = q+1;
            if (baseIV.querySelector(":scope input:nth-child("+y+")") != undefined) {
                baseIV.querySelector(":scope input:nth-child("+y+")").value = tempiv[q];
            }
        }
    }
    if (ev != undefined) {
        let tempev = [ev];
        if (ev.includes(",")) {
            tempev = ev.split(",");
        }
        for (let q = 0; q < tempev.length; q++) {
            let y = q+1;
            if (baseEV.querySelector(":scope > input:nth-child("+y+")") != undefined) {
                baseEV.querySelector(":scope > input:nth-child("+y+")").value = tempev[q];
            }
        }
    }

    if (metlocation != undefined) {
        baseMetLocation.value = metlocation;
    }
    if (metlevel != undefined) {
        baseMetLevel.value = metlevel;
    }
    if (metdate != undefined) {
        baseMetDate.value = metdate;
        baseMetDate.style.color = "inherit";
    }
    if (Friendship == true) {
        if (baseFriendship != null) {
            if (friendship != undefined) {
                baseFriendship.value = friendship;
            }
            else if (returnData(i,"Base Friendship","")[0] != undefined){
                baseFriendship.value = returnData(i,"Base Friendship","")[0];
            }
        }
    }



    boxMemory("Save");
    partyMemory("Save");
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



function partyShow(base) {

    if (base.getAttribute("name") == "empty") {
        base.removeAttribute("name");
    }

    calcPartyStat(base);

    let sides = base.querySelectorAll(":scope > aside");
    let side = base.querySelector(":scope > aside:first-child");

    for (q = 0; q < sides.length; q++) {
        sides[q].style.display = "none";
    }
    side.style.display = "flex";
    partyMemory("Save");
}


function partyHide(base) {

    if (base.getAttribute("name") != "empty") {
        base.setAttribute("name","empty");
    }
    
    let sides = base.querySelectorAll(":scope > aside");
    let side = base.querySelector(":scope > aside:last-child");

    for (q = 0; q < sides.length; q++) {
        sides[q].style.display = "none";
    }
    side.style.display = "flex";

    partyMemory("Save");
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



function selectModify(e) {
    let opt = this.querySelector(':scope > option[value="'+this.value+'"]');

    if (this.value == "♂") {
        this.style.color = "var(--colorBlue)";
    }
    if (this.value == "♀") {
        this.style.color = "var(--colorRed)";
    }
    if (this.value == "☿") {
        this.style.color = "var(--fontDark)";
    }

    if (this.firstElementChild.value.includes("Move")) {
        if (this.value == this.firstElementChild.value) {
            this.style.fontStyle = "italic";
        }
        else {
            this.style.fontStyle = "unset";
        }
    }
    
    if (this.firstElementChild.value.includes("Item")) {
        if (this.value == "Item") {
            this.style.fontStyle = "italic";
        }
        else {
            this.style.fontStyle = "unset";
        }
    }



    if (this.firstElementChild.value == "Item") {
        this.setAttribute("name",opt.getAttribute("name"));
    }



    if (this.parentElement.getAttribute("name") == "Nature") {
        let base = this.parentElement.parentElement.parentElement;
        base.querySelector(':scope span[name="stats"] > span:nth-child(2) > span:last-child').setAttribute("name",this.value);
    }

    if (this.parentElement.getAttribute("name") == "Ability") {
        let desc = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",this.value)[0]["Description"];
        if (desc != undefined) {
            this.setAttribute("title",desc);
        }
        this.setAttribute("name",this.querySelector(':scope > option[value="'+this.value+'"]').getAttribute("name"));
    }




    if (this.firstElementChild.value.includes("Move")) {
        let sel = this.parentElement.parentElement.querySelectorAll(':scope select');
        let opts = this.parentElement.parentElement.querySelectorAll(':scope option');
        let optz = this.parentElement.parentElement.querySelectorAll(':scope option[value="'+this.value+'"]');

        let selvals = [];
        
        for(let i = 0; i < sel.length; i++) {
            selvals.push(sel[i].value)
        }

        for(let i = 0; i < opts.length; i++) {
            if (!selvals.includes(opts[i].value)) {
                opts[i].style.display = "unset";
                opts[i].removeAttribute("disabled");
            }
        }
     
        for(let i = 0; i < optz.length; i++) {
            optz[i].style.display = "none";
            optz[i].setAttribute("disabled","");
        }
        if (!this.value.includes("Move #")) {
            this.title = formatMoveData(this.value);
        }
        else {
            this.title = "";
        }

        this.setAttribute("name","styleBackgroundType"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],this.value));
    }

    partyMemory("Save");
}

function storeInBox(data) {

    let box = document.querySelector('#pokémon > aside[name="team"] > section[name="box"] ul');
    const datastr = data;

    let i;
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
    let metlocation;
    let metlevel;
    let metdate;
    let friendship;

    if(data.includes("|")) {
        data = data.split("|")
        for (let q = 0; q < data.length; q++) {
            if (data[q].split(":")[0] == "pok") {
                pok = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "it") {
                item = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ni") {
                nick = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "lv") {
                level = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ge") {
                gender = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "mo") {
                move = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ab") {
                ability = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "iv") {
                iv = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "ev") {
                ev = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "na") {
                nature = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlo") {
                metlocation = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metlv") {
                metlevel = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "metda") {
                metdate = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
            if (data[q].split(":")[0] == "fr") {
                friendship = data[q].replaceAll(data[q].split(":")[0]+":","")
            }
        }

    }
    else {
        if (data.split(":")[0] == "pok") {
            pok = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "it") {
            item = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ni") {
            nick = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "lv") {
            level = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ge") {
            gender = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "mo") {
            move = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ab") {
            ability = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "iv") {
            iv = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "ev") {
            ev = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "na") {
            nature = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlo") {
            metlocation = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metlv") {
            metlevel = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "metda") {
            metdate = data.replaceAll(data.split(":")[0]+":","")
        }
        if (data.split(":")[0] == "fr") {
            friendship = data.replaceAll(data.split(":")[0]+":","")
        }
    }

    i = getPokémonInt(pok);

    let li = document.createElement("li");
    let shadow = document.createElement("span");
    let img = document.createElement("img");
    img.src = getMedia(true,[getPokémonPath(i)],[PATH_Pokémon_Box_Default_PNG]);
    img.setAttribute("value",i);
    box.appendChild(li)
    li.appendChild(shadow)
    li.appendChild(img)

    if (i != undefined) {
        li.setAttribute("data-pok",pok);
    }
    if (item != undefined) {
        li.setAttribute("data-item",item);
    }
    if (nick != undefined) {
        li.setAttribute("data-nick",nick);
    }
    if (level != undefined) {
        li.setAttribute("data-level",level);
    }
    if (gender != undefined) {
        li.setAttribute("data-gender",gender);
    }
    if (move != undefined) {
        li.setAttribute("data-move",move);
    }
    if (ability != undefined) {
        li.setAttribute("data-ability",ability);
    }
    if (iv != undefined) {
        li.setAttribute("data-iv",iv);
    }
    if (ev != undefined) {
        li.setAttribute("data-ev",ev);
    }
    if (nature != undefined) {
        li.setAttribute("data-nature",nature);
    }
    if (metlocation != undefined) {
        li.setAttribute("data-metlocation",metlocation);
    }
    if (metlevel != undefined) {
        li.setAttribute("data-metlevel",metlevel);
    }
    if (metdate != undefined) {
        li.setAttribute("data-metdate",metdate);
    }
    if (friendship != undefined) {
        li.setAttribute("data-friendship",friendship);
    }
   

   
    img.setAttribute("title",dataStringTitle(datastr));
    boxMemory("Save");
}


function getPartyData(base) {
    let data = [];

    let name = base.querySelector(':scope > aside:first-child > span > span[name="name"] input');
    let level = base.querySelector(':scope > aside:first-child > span:first-child > input[type="number"]');
    let item = base.querySelector(':scope > aside:first-child > span > span[name="item"] > select');
    let nick = base.querySelector(':scope > aside:first-child > span > span[name="name"] > input[type="text"]');
    let gender = base.querySelector(":scope > aside:first-child > span:last-child > select[title='Gender']");
    let ability = base.querySelector(':scope > aside:first-child > span[name="moves"] > span[name="ability"] > select');

    let nature = base.querySelectorAll(':scope > aside:first-child > span > span[name="nature"] > select');
    let move = base.querySelectorAll(':scope > aside:first-child > span[name="moves"] > span:nth-child(2) > span select');
    let iv = base.querySelectorAll(':scope > aside:first-child > span[name="stats"] > span:nth-child(2) > span[name="iv"] > input');
    let ev = base.querySelectorAll(':scope > aside:first-child > span[name="stats"] > span:nth-child(2) > span[name="ev"] > input');

    let metlocation = base.querySelector(':scope > aside:first-child > span[name="additional"] label[name="location"] select');
    let metlvl = base.querySelector(':scope > aside:first-child > span[name="additional"] label[name="level"] input');
    let metdate = base.querySelector(':scope > aside:first-child > span[name="additional"] label[name="date"] input');
    let friendship = base.querySelector(':scope > aside:first-child > span[name="additional"] label[name="friendship"] input');



    if (name != undefined) {
        if (name.placeholder != undefined) {
            data.push("pok:"+name.placeholder);
        }
    }
    if (level != undefined) {
        if (level.value != undefined && level.value != "") {
            data.push("lv:"+level.value);
        }
    }
    if (item != undefined) {
        if (item.value != undefined && item.value != "Item") {
            data.push("it:"+item.value);
        }
    }
    if (nick != undefined) {
        if (nick.value != undefined && nick.value != "") {
            data.push("ni:"+nick.value);
        }
    }
    if (gender != undefined) {
        if (gender.value != undefined) {
            data.push("ge:"+gender.value);
        }
    }
    if (ability != undefined) {
        if (ability.value != undefined) {

            data.push("ab:"+ability.querySelector(":scope option[value='"+ability.value+"']").getAttribute("name"));
        }
    }
    if (nature[0] != undefined) {
        if (nature[0].value != undefined && nature[0].value != "Nature") {
            data.push("na:"+nature[0].value);
        }
    }

    if (move != undefined) {
        let movearr = [];
        let movestr;
        for(let q = 0; q < move.length; q++) {
            if (!move[q].value.includes("Move")) {
                movearr.push(move[q].value);
            }
            else {
                movearr.push("");
            }
        }
        if (movearr.length > 1) {
            movestr = movearr.join(",");
        }
        else {
            movestr = movearr[0];
        }
        if (movestr != undefined) {
            if (movestr.replaceAll(",","").length > 0) {
                data.push("mo:"+movestr);
            }
        }
    }
    if (iv != undefined) {
        let ivarr = [];
        let ivstr;
        for(let q = 0; q < iv.length; q++) {
            ivarr.push(iv[q].value);
        }
        if (ivarr.length > 1) {
            ivstr = ivarr.join(",");
        }
        else {
            ivstr = ivarr[0];
        }
        if (ivstr != undefined) {
            if (ivstr.replaceAll(",","").length > 0) {
                data.push("iv:"+ivstr);
            }
        }
    }
    if (ev != undefined) {
        let evarr = [];
        let evstr;
        for(let q = 0; q < ev.length; q++) {
            evarr.push(ev[q].value);
        }
        if (evarr.length > 1) {
            evstr = evarr.join(",");
        }
        else {
            evstr = evarr[0];
        }
        if (evstr != undefined) {
            if (evstr.replaceAll(",","").length > 0) {
                data.push("ev:"+evstr);
            }
        }
    }
    if (metlocation != undefined) {
        if (metlocation.value != undefined && metlocation.value != "") {
            data.push("metlo:"+metlocation.value);
        }
    }
    if (metlvl != undefined) {
        if (metlvl.value != undefined && metlvl.value != "") {
            data.push("metlv:"+metlvl.value);
        }
    }
    if (metdate != undefined) {
        if (metdate.value != undefined && metdate.value != "") {
            data.push("metda:"+metdate.value);
        }
    }
    if (friendship != undefined) {
        if (friendship.value != undefined && friendship.value != "") {
            data.push("fr:"+friendship.value);
        }
    }


    if (data.length > 1) {
        data = data.join("|");
    }
    else {
        data = data[0];
    }

    return data;
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
        if (data.includes("pok:")) {
            let temparr = [];
            let tempstr;

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
                if (finaldata["Pokémon"]["Reference"][parseInt(tempstr)][DATA_Pokémon_Reference["Reference"]] == "true") {
                    createParty(this.parentElement.parentElement,data)
                    partyShow(this.parentElement.parentElement);
                    consoleText("Added "+getPokémonName(tempstr)+" to Party.")
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



function calcPartyStat(divBase) {

    let div;

    if (divBase.tagName == "DIV") {
        div = divBase;
    }
    else {
        div = findUpTag(divBase,"DIV");
    }

    let int = getPokémonInt(div.querySelector(':scope span[name="pokémon"] img[value]').title)
    let level = div.querySelector(':scope aside > span:first-child input[type="number"]')
    let ivs = div.querySelectorAll(':scope aside > span[name="stats"] > span:nth-child(2) > span[name="iv"] input[type="number"]');
    let evs = div.querySelectorAll(':scope aside > span[name="stats"] > span:nth-child(2) > span[name="ev"] input[type="number"]');
    let natures = div.querySelectorAll(':scope aside span[name="nature"] select');
    let friendships = div.querySelector(':scope aside label[name="friendship"] input');
 
    let res = div.querySelectorAll(':scope aside > span[name="stats"] > span:nth-child(2) > span:last-child input[type="number"]');


    for (let i = 0; i < res.length; i++) {

        let stat = Stats[i];
 

        let lvl = level.value;
        let base = returnData(int,"Base Stats "+stat,"")[0];
        let iv = ivs[i].value
        let ev = evs[i].value
        let nature;
        let friendship;

        if (Natures.length > 0) {
            nature = natureModifier(stat,natures[0].value);
        }
        else {
            nature = 1;
        }

        if (Friendship == true) {
            if (friendships.value != undefined && friendships.value != "") {
                friendship = friendshipModifer(friendships.value);
            }
            else {
                friendship = 1;
            }
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
        }
        else {
            res[i].setAttribute("min","0");
            res[i].setAttribute("max","0");
            res[i].value = 0;
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
            tar.style.color = "var(--fontDark)";
        }
        else if (status == "close"){
            tar.style.color = "inherit";
        }
    }
    else {
        if (status == "open"){
            tar.style.color = "var(--fontDark)";
        }
        else if (status == "close"){
            tar.style.color = null;
        }
    }
    
}





function changePartyEvolution(base,i) {

    let evos = getEvolutionFamily(i).map(function(v) {return v["Pokémon"];});
    let data = getPartyData(base);

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

        if (data.includes("|")) {
            if (data.includes("pok")) {
                data = data.split("|");
                for (let u = 0; u < data.length; u++) {
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
                data = data.split(":",1)[0]+":"+result;
            }
        }


        if (num.includes(reply)) {
            createParty(base,data)
            partyShow(base);
            consoleText("Evolution updated.");
        }
        else {
            consoleText("Number returned an error.")
        }

        
    }
}





function changePartyForm(base,i) {

    let forms = getPokémonForm(i);
    let data = getPartyData(base);


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

        if (data.includes("|")) {
            if (data.includes("pok")) {
                data = data.split("|");
                for (let u = 0; u < data.length; u++) {
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
                data = data.split(":",1)[0]+":"+result;
            }
        }

        if (num.includes(reply)) {
            createParty(base,data)
            partyShow(base);
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
