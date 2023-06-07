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
    
	navigationGameImg.src = getMedia([GameFullName.replaceAll(",","").replaceAll("!","").replaceAll("'","").replaceAll(":","")],[PATH_Game_Title])
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

        if (tars.length == 0) {
            consoleText("No Pokémon in Party!");
            return;
        }
        else {
            let res = [];
            for (let i = 0; i < tars.length; i++) {
                res.push(getPartyData(tars[i]))
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
    let settingsDefaultImgtypeExtension = document.createElement("select");
    let settingsDefaultImgtypeType = document.createElement("select");
    let settingsDefaultImgtypeAngle = document.createElement("select");

  
    let ImageTypes = getDirs([PATH_Pokémon_Battle])
    ImageTypes = ImageTypes.map(function(x){return x.replaceAll(PATH_Pokémon,'').replace("/"+x.split("/")[x.split("/").length-1],"")})

    for (let q = 0; q < ImageTypes.length; q++) {
        let els = ImageTypes[q].split("/")
        let obj = new Object();
        obj["Style"] = els[0];
        obj["Type"] = els[1];
        obj["Angle"] = els[2];
        obj["Extension"] = els[3];
        ImageTypes[q] = obj;
    }


    let style = [...new Set(ImageTypes.map((item) => item["Style"]))];
    let type = [...new Set(ImageTypes.map((item) => item["Type"]))];
    let angle = [...new Set(ImageTypes.map((item) => item["Angle"]))];
    let ext = [...new Set(ImageTypes.map((item) => item["Extension"]))];

    for (let q = 0; q < style.length; q++) { 
        let settingsDefaultImgtypeOption = document.createElement("option");
        settingsDefaultImgtypeOption.innerText = style[q];
        settingsDefaultImgtypeOption.value = style[q];
        settingsDefaultImgtypePath.appendChild(settingsDefaultImgtypeOption);
    }
    for (let q = 0; q < type.length; q++) { 
        let settingsDefaultImgtypeOption = document.createElement("option");
        settingsDefaultImgtypeOption.innerText = type[q];
        settingsDefaultImgtypeOption.value = type[q];
        settingsDefaultImgtypeType.appendChild(settingsDefaultImgtypeOption);
    }
    for (let q = 0; q < angle.length; q++) { 
        let settingsDefaultImgtypeOption = document.createElement("option");
        settingsDefaultImgtypeOption.innerText = angle[q];
        settingsDefaultImgtypeOption.value = angle[q];
        settingsDefaultImgtypeAngle.appendChild(settingsDefaultImgtypeOption);
    }
    for (let q = 0; q < ext.length; q++) { 
        let settingsDefaultImgtypeOption = document.createElement("option");
        settingsDefaultImgtypeOption.innerText = ext[q];
        settingsDefaultImgtypeOption.value = ext[q];
        settingsDefaultImgtypeExtension.appendChild(settingsDefaultImgtypeOption);
    }

    settingsDefaultImgtypePath.setAttribute("name","path");
    settingsDefaultImgtypePath.setAttribute("title","Image Types");
    settingsDefaultImgtypeExtension.setAttribute("name","extension");
    settingsDefaultImgtypeExtension.setAttribute("title","Extension");
    settingsDefaultImgtypeType.setAttribute("name","type");
    settingsDefaultImgtypeType.setAttribute("title","Type");
    settingsDefaultImgtypeAngle.setAttribute("name","angle");
    settingsDefaultImgtypeAngle.setAttribute("title","Angle");
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
    settingsDefaultImgtypeOuterRight.appendChild(settingsDefaultImgtypeExtension);
    settingsDefaultImgtypeOuterRight.appendChild(settingsDefaultImgtypeType);
    settingsDefaultImgtypeOuterRight.appendChild(settingsDefaultImgtypeAngle);


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

    settingsDefaultImgtypePath.addEventListener("change", function() {ImageType("Populate,Execute");});
    settingsDefaultImgtypeExtension.addEventListener("change", function() {ImageType("Execute");});
    settingsDefaultImgtypeType.addEventListener("change", function() {ImageType("Execute");});
    settingsDefaultImgtypeAngle.addEventListener("change", function() {ImageType("Execute");});
    

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

function imgType() {
	let imgTypeBox = document.getElementById("imgtype-toggle");
	let imgType = document.querySelectorAll("#imgtype input");
	let conimg = document.querySelectorAll("#pokémon > div ul li img");
	for(let i = 0; i < imgType.length; i++) {
		if(imgType[i].checked == true) {
			let dataType = imgType[i].getAttribute("data-type");
			let dataPath = imgType[i].getAttribute("data-path");
			let dataExtension = imgType[i].getAttribute("data-extension");
			imgTypeBox.innerHTML = '<span class="imgtype-arrow">▾</span>'+"<p>"+imgType[i].parentElement.innerText+"</p>"+'<div><img src="./media/Images/Misc/FinalDex/'+dataExtension+'.png" name="'+dataExtension+'" /></div>';
		
            for(let q = 0; q < conimg.length; q++) {
                conimg[q].src = "./media/Images/Pokémon/"+dataType+"/"+dataPath+"/"+getPokémonMediaPath(getPokémonInt(conimg[q].id),dataType)+"."+dataExtension;
                conimg[q].setAttribute("path", dataPath+"/"+getPokémonMediaPath(getPokémonInt(conimg[q].id),dataType)+"."+dataExtension);
            }
		}
	}
}




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

    memory("Restore","game",[document.querySelector('#pokémon > aside[name="settings"] > span[name="imagetype"] select[name="path"]')]);
    memory("Restore","game",[document.querySelector('#pokémon > aside[name="settings"] > span[name="imagetype"] select[name="extension"]')]);
    memory("Restore","game",[document.querySelector('#pokémon > aside[name="settings"] > span[name="imagetype"] select[name="type"]')]);
    memory("Restore","game",[document.querySelector('#pokémon > aside[name="settings"] > span[name="imagetype"] select[name="angle"]')]);
    ImageType("Populate");
    memory("Restore","game",[document.querySelector('#pokémon > aside[name="settings"] > span[name="imagetype"] select[name="path"]')]);
    memory("Restore","game",[document.querySelector('#pokémon > aside[name="settings"] > span[name="imagetype"] select[name="extension"]')]);
    memory("Restore","game",[document.querySelector('#pokémon > aside[name="settings"] > span[name="imagetype"] select[name="type"]')]);
    memory("Restore","game",[document.querySelector('#pokémon > aside[name="settings"] > span[name="imagetype"] select[name="angle"]')]);
    ImageType("Execute");

    resizeDiv();
    dexSwitch();

    document.querySelector("#pokémon nav li[name='search'] input").value = "";


    if (variantIteration != 0) {
        consoleText("Variants changed to "+tempStr.replace(/,([^,]*)$/, ' and $1').replaceAll(",",", ")+".");
    }

    variantIteration = variantIteration + 1;



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
