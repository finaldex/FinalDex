let createItem = function() {
	let itemOuter = document.createElement("div");
	let itemSectionList = document.createElement("section");
	let itemSectionListOptionsTitleOuter = document.createElement("div");
	let itemSectionListOptionsPocketOuter = document.createElement("div");
	let itemSectionListOptionsSearchOuter = document.createElement("div");
	let itemSectionListOptionsSearch = document.createElement("input");
	let itemSectionListOptionsSearchExit = document.createElement("span");
	let itemSectionListOptionsOuter = document.createElement("div");
	let itemSectionListOptions = document.createElement("ol");
	let itemSectionHeader = document.createElement("section");
	let itemSectionHeaderTitle = document.createElement("span");
	let itemSectionHeaderTitleID = document.createElement("h4");
	let itemSectionHeaderTitleName = document.createElement("h3");
	let itemSectionHeaderDebut = document.createElement("span");
	let itemSectionHeaderDebutText = document.createElement("h5");
	let itemSectionContent = document.createElement("section");
	let itemSectionContentDescription = document.createElement("div");
	let itemSectionSidebar = document.createElement("section");
	itemOuter.setAttribute("id", "item");
	itemOuter.setAttribute("value","items");
	itemSectionListOptionsSearch.setAttribute("type", "text");
	itemSectionListOptionsSearch.setAttribute("placeholder", "Search Items...");
	itemSectionListOptionsSearch.setAttribute("onfocus", "this.placeholder=''");
	itemSectionListOptionsSearch.setAttribute("onblur", "this.placeholder='Search Items...'");
	itemSectionListOptionsSearch.setAttribute("autocomplete", "off");
	itemSectionListOptionsSearchExit.setAttribute("name","exit");
	itemSectionHeaderTitleID.innerText = "#";
	itemSectionHeaderTitleName.innerText = "Items";
	document.querySelector("#contain").appendChild(itemOuter);
	itemOuter.appendChild(itemSectionList);
	itemSectionList.appendChild(itemSectionListOptionsTitleOuter);
	itemSectionListOptionsTitleOuter.appendChild(itemSectionListOptionsSearchOuter);
	itemSectionListOptionsSearchOuter.appendChild(itemSectionListOptionsSearchExit);
	itemSectionListOptionsSearchOuter.appendChild(itemSectionListOptionsSearch);
	itemSectionListOptionsTitleOuter.appendChild(itemSectionListOptionsPocketOuter);
	itemSectionList.appendChild(itemSectionListOptionsOuter);
	itemSectionListOptionsOuter.appendChild(itemSectionListOptions);
	itemOuter.appendChild(itemSectionHeader);
	itemSectionHeader.appendChild(itemSectionHeaderTitle);
	itemSectionHeaderTitle.appendChild(itemSectionHeaderTitleID);
	itemSectionHeaderTitle.appendChild(itemSectionHeaderTitleName);
	itemSectionHeader.appendChild(itemSectionHeaderDebut);
	itemSectionHeaderDebut.appendChild(itemSectionHeaderDebutText);
	itemOuter.appendChild(itemSectionContent);
	itemSectionContent.appendChild(itemSectionContentDescription);
	itemOuter.appendChild(itemSectionSidebar);
	itemSectionContentDescription.setAttribute("name","description")

	itemSectionList.setAttribute("name","list");
	itemSectionHeader.setAttribute("name","header");
	itemSectionContent.setAttribute("name","content");
	itemSectionSidebar.setAttribute("name","sidebar");

	itemSectionListOptionsSearch.addEventListener("keyup", function() {search("Item");});
	itemSectionListOptionsSearchExit.addEventListener("click", function() {exitSearch("Item");});

	let pockets = [];
	for (let q = 0; q < finaldata["Items"]["Reference"].length; q++) {
		if (getApplicable(finaldata["Items"]["Reference"][q]["Game"])) {
			if (finaldata["Items"]["Reference"][q]["Use"] == "true") {
				pockets.push(finaldata["Items"]["Reference"][q]["Pocket"])
			}
		}
	}
	pockets = pockets.filter(function(v) {return v !== undefined;});
	pockets = [...new Set(pockets)];
	

	for (let q = 0; q < pockets.length; q++) {
		let itemSectionListOptionsPocketInput = document.createElement("input");
		let itemSectionListOptionsPocketLabel = document.createElement("label");
		let itemSectionListOptionsPocketLabelImage = document.createElement("img");
		let itemSectionListOptionsPocketLabelText = document.createElement("p");
		itemSectionListOptionsPocketInput.setAttribute("type","checkbox");
		itemSectionListOptionsPocketInput.setAttribute("name","item-options-pocket");
		itemSectionListOptionsPocketInput.setAttribute("id","item-options-pocket-"+q);
		itemSectionListOptionsPocketInput.setAttribute("alt",pockets[q].toLowerCase());
		itemSectionListOptionsPocketInput.value = pockets[q];
		itemSectionListOptionsPocketLabel.setAttribute("for","item-options-pocket-"+q);
		itemSectionListOptionsPocketLabelImage.src = getMedia([pockets[q]],[PATH_Bag_Pocket])[0];
		if (pockets[q].includes("Pocket")) {
			itemSectionListOptionsPocketLabelImage.title = pockets[q];
		}
		else {
			itemSectionListOptionsPocketLabelImage.title = pockets[q]+" Pocket";
		}
		itemSectionListOptionsPocketLabelImage.setAttribute("onerror",'this.style.display = "none";this.nextElementSibling.style.display = "unset";')
		itemSectionListOptionsPocketLabelText.innerText = pockets[q];
		itemSectionListOptionsPocketOuter.appendChild(itemSectionListOptionsPocketInput)
		itemSectionListOptionsPocketOuter.appendChild(itemSectionListOptionsPocketLabel)
		itemSectionListOptionsPocketLabel.appendChild(itemSectionListOptionsPocketLabelImage)
		itemSectionListOptionsPocketLabel.appendChild(itemSectionListOptionsPocketLabelText)
		itemSectionListOptionsPocketInput.addEventListener("change",itemPockets);
		//itemSectionListOptionsPocketInput.addEventListener("click", function() {preventCheckboxZero(itemSectionListOptionsPocketOuter);});
		itemSectionListOptionsPocketInput.click();
	}

    let itemSectionHeaderGame = document.createElement("span");
    let itemSectionHeaderGameImage = document.createElement("img");
    itemSectionHeaderGameImage.src = getMedia([GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "")],[PATH_Game_Title])
    itemSectionHeaderGameImage.setAttribute("onerror","this.display='none'");
    itemSectionHeader.appendChild(itemSectionHeaderGame);
    itemSectionHeaderGame.appendChild(itemSectionHeaderGameImage);

	let itemSectionSidebarSidebar = document.createElement("div");
	let itemSectionSidebarSidebarMapOuter = document.createElement("div");
	let itemSectionSidebarSidebarMapInner = document.createElement("div");
	let itemSectionSidebarSidebarMapImage = document.createElement("img");
	let itemSectionSidebarSidebarMap = document.createElement("map");
	let itemSectionSidebarSidebarMapFullscreen = document.createElement("figure");
	let itemSectionSidebarSidebarMapFullscreenText = document.createElement("h5");
	let itemSectionSidebarSidebarMapPause = document.createElement("figure");
	let itemSectionSidebarSidebarMapPauseText = document.createElement("h3");
	let itemSectionSidebarSidebarMapZoomIn = document.createElement("figure");
	let itemSectionSidebarSidebarMapZoomInText = document.createElement("h3");
	let itemSectionSidebarSidebarMapZoomOut = document.createElement("figure");
	let itemSectionSidebarSidebarMapZoomOutText = document.createElement("h3");

	let itemSectionSidebarSidebarUl = document.createElement("ul");

	itemSectionSidebarSidebarMapImage.src = getMedia(["Map"],[PATH_Region_Map])[0]
	itemSectionSidebarSidebarMapImage.setAttribute("usemap","#"+Region.join(" & ")+"-item");

	itemSectionSidebarSidebarMapZoomIn.setAttribute("name","zoom");
	itemSectionSidebarSidebarMapZoomOut.setAttribute("name","reset");
	itemSectionSidebarSidebarMapFullscreen.setAttribute("name","fullscreen");
	itemSectionSidebarSidebarMapZoomIn.setAttribute("type","scale");
	itemSectionSidebarSidebarMapZoomOut.setAttribute("type","scale");
	itemSectionSidebarSidebarMapZoomOutText.innerText = "-";
	itemSectionSidebarSidebarMapZoomInText.innerText = "+";
	itemSectionSidebarSidebarMapFullscreenText.innerText = "⛶";
	itemSectionSidebarSidebarMapPause.setAttribute("name","pause");
	itemSectionSidebarSidebarMapPauseText.innerText = "⏸︎";

	itemSectionSidebarSidebarMap.setAttribute("name",Region.join(" & ")+"-item");
	itemSectionSidebarSidebarMap.setAttribute("id",Region.join(" & ")+"-item");

	itemSectionSidebar.appendChild(itemSectionSidebarSidebar);
	itemSectionSidebarSidebar.appendChild(itemSectionSidebarSidebarMapOuter);
	itemSectionSidebarSidebarMapOuter.appendChild(itemSectionSidebarSidebarMapInner);
	itemSectionSidebarSidebarMapInner.appendChild(itemSectionSidebarSidebarMapImage);
	itemSectionSidebarSidebarMapInner.appendChild(itemSectionSidebarSidebarMap);
	itemSectionSidebarSidebar.appendChild(itemSectionSidebarSidebarUl);

	itemSectionSidebarSidebarMapOuter.appendChild(itemSectionSidebarSidebarMapZoomOut);
	itemSectionSidebarSidebarMapZoomOut.appendChild(itemSectionSidebarSidebarMapZoomOutText);
	itemSectionSidebarSidebarMapOuter.appendChild(itemSectionSidebarSidebarMapZoomIn);
	itemSectionSidebarSidebarMapZoomIn.appendChild(itemSectionSidebarSidebarMapZoomInText);
	itemSectionSidebarSidebarMapOuter.appendChild(itemSectionSidebarSidebarMapFullscreen);
	itemSectionSidebarSidebarMapFullscreen.appendChild(itemSectionSidebarSidebarMapFullscreenText);
	itemSectionSidebarSidebarMapOuter.appendChild(itemSectionSidebarSidebarMapPause);
	itemSectionSidebarSidebarMapPause.appendChild(itemSectionSidebarSidebarMapPauseText);

	itemSectionSidebarSidebarMapInner.addEventListener("mousedown",function(event){if(event.button === 1){fullscreenIMG([itemSectionSidebarSidebarMapImage],0)}});

	itemSectionSidebarSidebarMapFullscreen.addEventListener("click", function(){fullscreenIMG([itemSectionSidebarSidebarMapImage],0)})

	itemSectionSidebarSidebarMapInner.addEventListener("click", function() {zoom(itemSectionSidebarSidebarMapInner,"pause",undefined)});
	itemSectionSidebarSidebarMapZoomIn.addEventListener("click",function() {zoom(itemSectionSidebarSidebarMapInner,"in",false)});
	itemSectionSidebarSidebarMapZoomOut.addEventListener("click",function() {zoom(itemSectionSidebarSidebarMapInner,"out",true)});
	itemSectionSidebarSidebarMapInner.addEventListener("wheel",function(event){let delta = event.deltaY.toString();if(delta.includes("-")){zoom(itemSectionSidebarSidebarMapInner,"in",false)}else if(!delta.includes("-")){zoom(itemSectionSidebarSidebarMapInner,"out",true)}});
	itemSectionSidebarSidebarMapInner.addEventListener("mouseleave", function() {zoom(itemSectionSidebarSidebarMapInner,"out",undefined)});
	itemSectionSidebarSidebarMapInner.addEventListener("mouseenter", function() {zoom(itemSectionSidebarSidebarMapInner,"in",undefined)});
	itemSectionSidebarSidebarMapInner.addEventListener("mousemove", function() {zoom(itemSectionSidebarSidebarMapInner,"pan",undefined)});

	for(let q = 0; q < finaldata["Items"]["Reference"].length; q++) {
		if (getApplicable(finaldata["Items"]["Reference"][q]["Game"])) {
			if (finaldata["Items"]["Reference"][q]["Use"] == "true") {
				//if (returnAppArrData(finaldata["Items"]["Description"],"Item",finaldata["Items"]["Reference"][q]["Item"]).length > 0) {
					let name = finaldata["Items"]["Reference"][q]["Item"];
					let alias = finaldata["Items"]["Reference"][q]["Alias"];
			
					if (alias != undefined) {
						name += " ("+alias+")";
					}
					else {
						let machineMove = getMachineMove(finaldata["Items"]["Reference"][q]["Item"]);
						if (machineMove != undefined) {
							name += " ("+machineMove+")";
						}
					}

					let itemSectionListOptionsInput = document.createElement("input");
					let itemSectionListOptionsLabel = document.createElement("label");
					let itemSectionListOptionsLabelText = document.createElement("p");
					itemSectionListOptionsInput.setAttribute("type", "radio");
					itemSectionListOptionsInput.setAttribute("name", "item-options");
					itemSectionListOptionsInput.setAttribute("id", "item-options-" + q);
					itemSectionListOptionsInput.setAttribute("autocomplete", "off");
					itemSectionListOptionsInput.value = q;
					itemSectionListOptionsLabel.setAttribute("for", "item-options-" + q);
					itemSectionListOptionsLabel.setAttribute("data-name", name.toLowerCase());
					itemSectionListOptionsLabel.setAttribute("data-title", finaldata["Items"]["Reference"][q]["Item"].toLowerCase());

					let itemprice = returnAppArrData(finaldata["Items"]["Price"],"Item",finaldata["Items"]["Reference"][q]["Item"]);

					if (itemprice.length > 0) {
						if (itemprice[0]["Sell Amount"] != undefined) {
							itemSectionListOptionsLabel.setAttribute("data-search-price",itemprice[0]["Sell Amount"]);
						}
						else {
							itemSectionListOptionsLabel.setAttribute("data-search-price",0);
						}
					}
					else {
						itemSectionListOptionsLabel.setAttribute("data-search-price",0);
					}
					

					if (finaldata["Items"]["Reference"][q]["Pocket"] != undefined) {
						itemSectionListOptionsLabel.setAttribute("data-pocket",finaldata["Items"]["Reference"][q]["Pocket"].toLowerCase());
					}
					itemSectionListOptionsLabel.setAttribute("type","medium");
					if (finaldata["Items"]["Reference"][q]["Icon"] != undefined) {
						let itemSectionListOptionsLabelImageOuter = document.createElement("span");
						let itemSectionListOptionsLabelImage = document.createElement("img");

						itemSectionListOptionsLabelImage.src = getMedia([finaldata["Items"]["Reference"][q]["Icon"]],[PATH_Item_Bag])[0]
						itemSectionListOptionsLabelImage.setAttribute("onerror","this.style.display='none';");
						itemSectionListOptionsLabel.appendChild(itemSectionListOptionsLabelImageOuter);
						itemSectionListOptionsLabelImageOuter.appendChild(itemSectionListOptionsLabelImage);
					}
				
					itemSectionListOptionsLabelText.innerText = name;
					
					itemSectionListOptions.appendChild(itemSectionListOptionsInput);
					itemSectionListOptions.appendChild(itemSectionListOptionsLabel);

					itemSectionListOptionsLabel.appendChild(itemSectionListOptionsLabelText);
					itemSectionListOptionsInput.addEventListener("click", itemOptionsSelector);

					itemSectionListOptionsLabel.setAttribute("tabindex",q+10);
					itemSectionListOptionsLabel.addEventListener("keyup",function(event){if(event.which === 13){if(event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;itemOptionsSelector(event.target.previousElementSibling.value);}}});

				//}
			}
		}

	}

	itemSectionListOptionsSearch.title = searchOptionsTitle(itemSectionListOptions);

	let searchLis = document.querySelectorAll("#contain > div#item > section[name='list'] ol > label");
    searchItemAttributes = [];
    for(q = 0; q < searchLis.length; q++) {
        for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchItemAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchItemAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }

    for(q = 0; q < searchItemAttributes.length; q++) {
        searchItemAttributes[q] = searchItemAttributes[q].replaceAll("data-search-","")
    }
	function itemOptionsSelector(i) {
		if (this.value != undefined) {
			i = this.value;
		}
		let item = finaldata["Items"]["Reference"][i]["Item"];

		itemSectionHeaderTitleName.innerText = finaldata["Items"]["Reference"][i]["Item"];

		if (finaldata["Items"]["Reference"][i]["Alias"] != undefined) {
			itemSectionHeaderTitleName.innerText += " ("+finaldata["Items"]["Reference"][i]["Alias"]+")";
		}

		itemSectionHeaderTitleID.innerText = "#"+finaldata["Items"]["Reference"][i]["ID"];
		itemSectionHeaderTitleID.setAttribute("title",finaldata["Items"]["Reference"][i]["Index"]);

		let priceArr = returnAppArrData(finaldata["Items"]["Price"],"Item",item);
	
		itemSectionHeaderDebutText.innerText = "Cannot be Sold";
		if (priceArr.length > 0) {
			let price = priceArr[0]["Sell Amount"];
			let currency = priceArr[0]["Sell Currency"];	
			if (price != undefined) {
				if (currency == "Pokémon Dollar") {
					currency = currency.replaceAll("Pokémon Dollar",'<img src="'+getMedia(["Pokémon Dollar"],[PATH_Currency_Icon])[0]+'" title="Pokémon Dollar" />')
				}
				else {
					currency = currency.replace(/[^A-Z]+/g,"");
				}
				itemSectionHeaderDebutText.innerHTML = "Sold for: "+numFormat(price)+currency;
			}
			else {
				itemSectionHeaderDebutText.innerText = "Cannot be Sold";
			}
		}

		let destexts = itemSectionContentDescription.querySelectorAll(":scope > *");
		for(let q = 0; q < destexts.length; q++) {
			destexts[q].remove();
		}

		if (getMachineMove(item) != undefined) {
			let itemSectionContentDescriptionText = document.createElement("p");
			itemSectionContentDescriptionText.innerHTML = item+" contains the move <b type='invert' name='move'>"+getMachineMove(item)+"</b>.";
			itemSectionContentDescription.appendChild(itemSectionContentDescriptionText);
			itemSectionContentDescriptionText.querySelector(":scope b").addEventListener("click",dataRedirect);
			itemSectionContentDescriptionText.querySelector(":scope b").setAttribute("function","dataRedirect");
		}
		else {
			for(let q = 0; q < finaldata["Items"]["Description"].length; q++) {
				if (finaldata["Items"]["Description"][q]["Item"] == item) {
					if (getApplicable(finaldata["Items"]["Description"][q]["Game"])) {
						let check = true;
						if (finaldata["Items"]["Description"][q]["Index"] != undefined) {
							check = finaldata["Items"]["Description"][q]["Index"] == finaldata["Items"]["Reference"][i]["Index"];
						}
						if (check) {
							let itemSectionContentDescriptionText = document.createElement("p");
							itemSectionContentDescriptionText.innerText = finaldata["Items"]["Description"][q]["Description"];
							itemSectionContentDescription.appendChild(itemSectionContentDescriptionText);
							if(finaldata["Items"]["Description"][q]["Version"] != undefined) {
								itemSectionContentDescriptionText.title = finaldata["Items"]["Description"][q]["Version"];
							}
						}
					}
				}
			}
		}






		let effect = [];

		for(let q = 0; q < finaldata["Items"]["Effect"].length; q++) {
			if(getApplicable(finaldata["Items"]["Effect"][q]["Game"])) {
				if(finaldata["Items"]["Effect"][q]["Item"] == finaldata["Items"]["Reference"][i]["Item"]) {
					let check = true;
					if (finaldata["Items"]["Effect"][q]["Index"] != undefined) {
						check = finaldata["Items"]["Effect"][q]["Index"] == finaldata["Items"]["Reference"][i]["Index"];
					}
					if (check) {
						effect.push(finaldata["Items"]["Effect"][q]["Effect"])
					}
				}
			}
		}
		let itemSectionContentEffectTitle = document.createElement("h4");
		itemSectionContentDescription.appendChild(itemSectionContentEffectTitle)
		let itemSectionContentEffectText = document.createElement("p");
		itemSectionContentDescription.appendChild(itemSectionContentEffectText)

		for(let q = 0; q < effect.length; q++) {
			itemSectionContentEffectText.innerText += effect[q];
			if (q != effect.length - 1) {
				itemSectionContentEffectText.innerHTML += "<br>"
			}
		}
		
		if (effect.length > 0) {
			itemSectionContentEffectTitle.innerText = "Effect";
		}
		else {
			itemSectionContentEffectTitle.innerText = "";
		}



		let lis = itemSectionSidebarSidebarUl.querySelectorAll(":scope li");
		
		for(let q = 0; q < lis.length; q++) {
			lis[q].remove();
		}

		let key1 = Object.keys(DATA_Pokémon_HeldItem);
		let key2 = DATA_Pokémon_HeldItem;

		for(let q = 0; q < finaldata["Pokémon"]["Held Item"].length; q++) {
			for(let u = 0; u < key1.length; u++) {
				if(finaldata["Pokémon"]["Held Item"][q][key1[u]] == item) {

					let itemSectionSidebarSidebarLi = document.createElement("li");
					itemSectionSidebarSidebarLi.setAttribute("name","held");
					itemSectionSidebarSidebarUl.appendChild(itemSectionSidebarSidebarLi);

					let itemSectionSidebarSidebarPokémon = document.createElement("span");
					itemSectionSidebarSidebarPokémon.setAttribute("name","pokémon");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarPokémon);

					let itemSectionSidebarSidebarPokémonImg = document.createElement("img");
					itemSectionSidebarSidebarPokémonImg.src = getPokémonMediaPath([q],[PATH_Pokémon_Box_Default_PNG]);
					itemSectionSidebarSidebarPokémonImg.title = getPokémonName(q);
					itemSectionSidebarSidebarPokémon.appendChild(itemSectionSidebarSidebarPokémonImg);

					let itemSectionSidebarSidebarPokémonText = document.createElement("small");
					itemSectionSidebarSidebarPokémonText.innerText = getPokémonName(q);
					itemSectionSidebarSidebarPokémon.appendChild(itemSectionSidebarSidebarPokémonText);

					itemSectionSidebarSidebarPokémon.setAttribute("value",q);
					itemSectionSidebarSidebarPokémon.setAttribute("function","modalData");
					itemSectionSidebarSidebarPokémon.addEventListener("click",modalData);



					let itemSectionSidebarSidebarDescription = document.createElement("span");
					itemSectionSidebarSidebarDescription.setAttribute("name","description");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarDescription);

			
					let itemSectionSidebarSidebarDescriptionText = document.createElement("p");
					itemSectionSidebarSidebarDescription.appendChild(itemSectionSidebarSidebarDescriptionText);

					if (HeldItem == false) {
						itemSectionSidebarSidebarDescriptionText.innerText = key2[key1]+" chance to be held by a wild "+finaldata["Pokémon"]["Reference"][q]["Pokémon"]+" that was traded to Generation "+(Generation+1)+".";
					}
					else {
						itemSectionSidebarSidebarDescriptionText.innerText = key2[key1]+" chance to be held by a wild "+finaldata["Pokémon"]["Reference"][q]["Pokémon"]+".";
					}
					

					let itemSectionSidebarSidebarItem = document.createElement("span");
					itemSectionSidebarSidebarItem.setAttribute("name","item");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarItem);

					let itemSectionSidebarSidebarItemImg = document.createElement("img");
					itemSectionSidebarSidebarItemImg.src = getMedia([getItemIcon(finaldata["Pokémon"]["Held Item"][q][key1[u]])],[PATH_Item_Bag])[0]
					itemSectionSidebarSidebarItemImg.setAttribute("onerror",'this.style.display = "none";')
					itemSectionSidebarSidebarItemImg.title = finaldata["Pokémon"]["Held Item"][q][key1[u]];
					itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemImg);
		
				}
			}
			
		}





		for(let q = 0; q < finaldata["Location Items"]["Items"].length; q++) {
			if (getApplicable(finaldata["Location Items"]["Items"][q]["Game"])) {
				let check = true;
				if (finaldata["Location Items"]["Items"][q]["Index"] != undefined) {
					check = finaldata["Location Items"]["Items"][q]["Index"] == finaldata["Items"]["Reference"][i]["Index"];
				}
				if (check) {
					if(finaldata["Location Items"]["Items"][q]["Item"] == item) {
						let quantity = finaldata["Location Items"]["Items"][q]["Quantity"];
						if (quantity == undefined) {
							quantity = 1;
						}
						if (quantity > 10) {
							quantity = 10;
						}

						let itemSectionSidebarSidebarLi = document.createElement("li");
						itemSectionSidebarSidebarLi.setAttribute("name","location")
						itemSectionSidebarSidebarUl.appendChild(itemSectionSidebarSidebarLi);

						let itemSectionSidebarSidebarInput = document.createElement("input");
						itemSectionSidebarSidebarInput.setAttribute("type","checkbox");
						itemSectionSidebarSidebarInput.setAttribute("id","location-item");
						itemSectionSidebarSidebarInput.setAttribute("name","location-item"+q);
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarInput);

						itemSectionSidebarSidebarInput.addEventListener("change", function() {memory("Save","game",[event.target])})

						let itemSectionSidebarSidebarLocation = document.createElement("span");
						let itemSectionSidebarSidebarLocationTrigger = document.createElement("b");
						let itemSectionSidebarSidebarLocationText = document.createElement("h5");
						itemSectionSidebarSidebarLocation.setAttribute("name","location");
						itemSectionSidebarSidebarLocationText.innerText = finaldata["Location Items"]["Items"][q]["Location"];
						itemSectionSidebarSidebarLocationTrigger.setAttribute("name","map")
						itemSectionSidebarSidebarLocationTrigger.setAttribute("type","invert");
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarLocation);
						itemSectionSidebarSidebarLocation.appendChild(itemSectionSidebarSidebarLocationTrigger);
						itemSectionSidebarSidebarLocationTrigger.appendChild(itemSectionSidebarSidebarLocationText);

						itemSectionSidebarSidebarLocationTrigger.addEventListener("click",dataRedirect)
						itemSectionSidebarSidebarLocationTrigger.setAttribute("function","dataRedirect");


						if (finaldata["Location Items"]["Items"][q]["Area"] != undefined && finaldata["Location Items"]["Items"][q]["Area"] != finaldata["Location Items"]["Items"][q]["Location"]) {
							let itemSectionSidebarSidebarAreaText = document.createElement("small");
							itemSectionSidebarSidebarAreaText.innerText = finaldata["Location Items"]["Items"][q]["Area"];
							itemSectionSidebarSidebarLocation.appendChild(itemSectionSidebarSidebarAreaText);
						}



						if (finaldata["Location Items"]["Items"][q]["Description"] != undefined) {
							let itemSectionSidebarSidebarDescription = document.createElement("span");
							itemSectionSidebarSidebarDescription.setAttribute("name","description");
							itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarDescription);
							let itemSectionSidebarSidebarDescriptionText = document.createElement("p");
							itemSectionSidebarSidebarDescriptionText.innerText = finaldata["Location Items"]["Items"][q]["Description"];
							itemSectionSidebarSidebarDescription.appendChild(itemSectionSidebarSidebarDescriptionText);
						}

						let itemSectionSidebarSidebarRequirementOuter = document.createElement("span");
						itemSectionSidebarSidebarRequirementOuter.setAttribute("name","requirement");
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarRequirementOuter);

						if (finaldata["Location Items"]["Items"][q]["Field"] != undefined) {
		
							let itemSectionSidebarSidebarRequirementTitle = document.createElement("h6");
							itemSectionSidebarSidebarRequirementTitle.innerText = "Requires:";
							itemSectionSidebarSidebarRequirementOuter.appendChild(itemSectionSidebarSidebarRequirementTitle);


							if (finaldata["Location Items"]["Items"][q]["Field"].includes("/")) {
								for(let y = 0; y < finaldata["Location Items"]["Items"][q]["Field"].split("/").length; y++) {
									let itemIcon;
									let itm;
									if (getMoveMachine(finaldata["Location Items"]["Items"][q]["Field"].split("/")[y]) != undefined) {
										itemIcon = getItemIcon(getMoveMachine(finaldata["Location Items"]["Items"][q]["Field"].split("/")[y]));
										itm = getMoveMachine(finaldata["Location Items"]["Items"][q]["Field"].split("/")[y]);
									}
									else if (getItemIcon(finaldata["Location Items"]["Items"][q]["Field"].split("/")[y]) != undefined) {
										itemIcon = getItemIcon(finaldata["Location Items"]["Items"][q]["Field"].split("/")[y]);
										itm = finaldata["Location Items"]["Items"][q]["Field"].split("/")[y];
									}

									let itemSectionSidebarSidebarField = document.createElement("b");
									let itemSectionSidebarSidebarFieldText = document.createElement("small");
									itemSectionSidebarSidebarFieldText.innerText = finaldata["Location Items"]["Items"][q]["Field"].split("/")[y];
									itemSectionSidebarSidebarRequirementOuter.appendChild(itemSectionSidebarSidebarField);
									if (itemIcon != undefined) {
										let itemSectionSidebarSidebarFieldImage = document.createElement("img");
										itemSectionSidebarSidebarFieldImage.src = getMedia([itemIcon],[PATH_Item_Bag])[0];
										itemSectionSidebarSidebarFieldImage.title = finaldata["Location Items"]["Items"][q]["Field"].split("/")[y];
										itemSectionSidebarSidebarFieldImage.setAttribute("onerror",'this.style.display = "none";')
										itemSectionSidebarSidebarField.appendChild(itemSectionSidebarSidebarFieldImage);
									}
									itemSectionSidebarSidebarField.appendChild(itemSectionSidebarSidebarFieldText);
									itemSectionSidebarSidebarField.setAttribute("name","item");
									itemSectionSidebarSidebarField.setAttribute("value",itm);
									itemSectionSidebarSidebarField.addEventListener("click",dataRedirect);
									itemSectionSidebarSidebarField.setAttribute("function","dataRedirect");
									if (y != finaldata["Location Items"]["Items"][q]["Field"].split("/").length - 1) {
										let itemSectionSidebarSidebarFieldSpace = document.createElement("p");
										itemSectionSidebarSidebarFieldSpace.innerText = " or ";
										itemSectionSidebarSidebarRequirementOuter.appendChild(itemSectionSidebarSidebarFieldSpace)
									}
								}
							}
							else if (finaldata["Location Items"]["Items"][q]["Field"].includes(",")) {
								for(let y = 0; y < finaldata["Location Items"]["Items"][q]["Field"].split(",").length; y++) {
									let itemIcon;
									let itm;
									if (getMoveMachine(finaldata["Location Items"]["Items"][q]["Field"].split(",")[y]) != undefined) {
										itemIcon = getItemIcon(getMoveMachine(finaldata["Location Items"]["Items"][q]["Field"].split(",")[y]));
										itm = getMoveMachine(finaldata["Location Items"]["Items"][q]["Field"].split(",")[y]);
									}
									else if (getItemIcon(finaldata["Location Items"]["Items"][q]["Field"].split(",")[y]) != undefined) {
										itemIcon = getItemIcon(finaldata["Location Items"]["Items"][q]["Field"].split(",")[y]);
										itm = finaldata["Location Items"]["Items"][q]["Field"].split(",")[y];
									}

									let itemSectionSidebarSidebarField = document.createElement("b");
									let itemSectionSidebarSidebarFieldText = document.createElement("small");
									itemSectionSidebarSidebarFieldText.innerText = finaldata["Location Items"]["Items"][q]["Field"].split(",")[y];
									itemSectionSidebarSidebarRequirementOuter.appendChild(itemSectionSidebarSidebarField);
									if (itemIcon != undefined) {
										let itemSectionSidebarSidebarFieldImage = document.createElement("img");
										itemSectionSidebarSidebarFieldImage.src = getMedia([itemIcon],[PATH_Item_Bag])[0];
										itemSectionSidebarSidebarFieldImage.title = finaldata["Location Items"]["Items"][q]["Field"].split(",")[y];
										itemSectionSidebarSidebarFieldImage.setAttribute("onerror",'this.style.display = "none";')
										itemSectionSidebarSidebarField.appendChild(itemSectionSidebarSidebarFieldImage);
									}
									itemSectionSidebarSidebarField.appendChild(itemSectionSidebarSidebarFieldText);
										
									itemSectionSidebarSidebarField.setAttribute("name","item");
									itemSectionSidebarSidebarField.setAttribute("value",itm);
									itemSectionSidebarSidebarField.addEventListener("click",dataRedirect);
									itemSectionSidebarSidebarField.setAttribute("function","dataRedirect");
								}
							}
							else {
								let itemIcon;
								let itm;
								if (getMoveMachine(finaldata["Location Items"]["Items"][q]["Field"]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(finaldata["Location Items"]["Items"][q]["Field"]));
									itm = getMoveMachine(finaldata["Location Items"]["Items"][q]["Field"]);
								}
								else if (getItemIcon(finaldata["Location Items"]["Items"][q]["Field"]) != undefined) {
									itemIcon = getItemIcon(finaldata["Location Items"]["Items"][q]["Field"]);
									itm = finaldata["Location Items"]["Items"][q]["Field"];
								}

								let itemSectionSidebarSidebarField = document.createElement("b");
								let itemSectionSidebarSidebarFieldText = document.createElement("small");
								itemSectionSidebarSidebarFieldText.innerText = finaldata["Location Items"]["Items"][q]["Field"];
								itemSectionSidebarSidebarRequirementOuter.appendChild(itemSectionSidebarSidebarField);
								if (itemIcon != undefined) {
									let itemSectionSidebarSidebarFieldImage = document.createElement("img");
									itemSectionSidebarSidebarFieldImage.src = getMedia([itemIcon],[PATH_Item_Bag])[0];
									itemSectionSidebarSidebarFieldImage.title = finaldata["Location Items"]["Items"][q]["Field"];
									itemSectionSidebarSidebarFieldImage.setAttribute("onerror",'this.style.display = "none";')
									itemSectionSidebarSidebarFieldImage.setAttribute("name","item");
									itemSectionSidebarSidebarField.appendChild(itemSectionSidebarSidebarFieldImage);
								}
								itemSectionSidebarSidebarField.appendChild(itemSectionSidebarSidebarFieldText);

								itemSectionSidebarSidebarField.setAttribute("name","item");
								itemSectionSidebarSidebarField.setAttribute("value",itm);
								itemSectionSidebarSidebarField.addEventListener("click",dataRedirect);
								itemSectionSidebarSidebarField.setAttribute("function","dataRedirect");
							}
						}

						let itemSectionSidebarSidebarItem = document.createElement("span");
						itemSectionSidebarSidebarItem.setAttribute("name","item");
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarItem);

						for(let u = 0; u < quantity; u++) {
							let itemSectionSidebarSidebarItemImg = document.createElement("img");
							itemSectionSidebarSidebarItemImg.src = getMedia([getItemIcon(finaldata["Location Items"]["Items"][q]["Item"])],[PATH_Item_Bag])[0];
							itemSectionSidebarSidebarItemImg.setAttribute("onerror",'this.style.display = "none"; this.parentElement.lastChild.style.display = "unset";');
							itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemImg);
						}

						if (quantity != 1) { 
							itemSectionSidebarSidebarItem.title = finaldata["Location Items"]["Items"][q]["Quantity"]+"x "+finaldata["Location Items"]["Items"][q]["Item"];
						}
						else {
							itemSectionSidebarSidebarItem.title = finaldata["Location Items"]["Items"][q]["Item"];
						}




						let itemSectionSidebarSidebarItemText = document.createElement("h6");
						if (quantity != 1) { 
							itemSectionSidebarSidebarItemText.innerHTML = finaldata["Location Items"]["Items"][q]["Quantity"]+"x <br>"+finaldata["Location Items"]["Items"][q]["Item"];
						}
						else {
							itemSectionSidebarSidebarItemText.innerHTML = finaldata["Location Items"]["Items"][q]["Item"];
						}
						itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemText);
						itemSectionSidebarSidebarItemText.style.display = "none";

						if (finaldata["Location Items"]["Items"][q]["Hidden"] == "Hidden") {
							itemSectionSidebarSidebarLi.classList.add("hide");
							itemSectionSidebarSidebarItem.title += " (Hidden)";
						}

				
					}
				}
			}
		}

		for(let q = 0; q < finaldata["Location Items"]["Shop"].length; q++) {
			if (getApplicable(finaldata["Location Items"]["Shop"][q]["Game"])) {
				let check = true;
				if (finaldata["Location Items"]["Shop"][q]["Index"] != undefined) {
					check = finaldata["Location Items"]["Shop"][q]["Index"] == finaldata["Items"]["Reference"][i]["Index"];
				}
				if (check) {
					if(finaldata["Location Items"]["Shop"][q]["Item"] == item) {
						let quantity = finaldata["Location Items"]["Shop"][q]["Quantity"];
						if (quantity == undefined) {
							quantity = 1;
						}
						if (quantity > 10) {
							quantity = 10;
						}

						let itemSectionSidebarSidebarLi = document.createElement("li");
						itemSectionSidebarSidebarLi.setAttribute("name","shop")
						itemSectionSidebarSidebarUl.appendChild(itemSectionSidebarSidebarLi);
						
						let itemSectionSidebarSidebarInput = document.createElement("input");
						itemSectionSidebarSidebarInput.setAttribute("type","checkbox");
						itemSectionSidebarSidebarInput.setAttribute("id","location-shop");
						itemSectionSidebarSidebarInput.setAttribute("name","location-shop"+q);
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarInput);
						itemSectionSidebarSidebarInput.addEventListener("change", function() {memory("Save","game",[event.target])})

						let itemSectionSidebarSidebarLocation = document.createElement("span");
						let itemSectionSidebarSidebarLocationTrigger = document.createElement("b");
						let itemSectionSidebarSidebarLocationText = document.createElement("h5");
						itemSectionSidebarSidebarLocation.setAttribute("name","location")
						itemSectionSidebarSidebarLocationText.innerText = finaldata["Location Items"]["Shop"][q]["Location"];
						itemSectionSidebarSidebarLocationTrigger.setAttribute("name","map")
						itemSectionSidebarSidebarLocationTrigger.setAttribute("type","invert");
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarLocation);
						itemSectionSidebarSidebarLocation.appendChild(itemSectionSidebarSidebarLocationTrigger);
						itemSectionSidebarSidebarLocationTrigger.appendChild(itemSectionSidebarSidebarLocationText);

						itemSectionSidebarSidebarLocationTrigger.addEventListener("click",dataRedirect)
						itemSectionSidebarSidebarLocationTrigger.setAttribute("function","dataRedirect");


						if (finaldata["Location Items"]["Shop"][q]["Area"] != undefined && finaldata["Location Items"]["Shop"][q]["Area"] != finaldata["Location Items"]["Shop"][q]["Location"]) {
							let itemSectionSidebarSidebarAreaText = document.createElement("small");
							itemSectionSidebarSidebarAreaText.innerText = finaldata["Location Items"]["Shop"][q]["Area"];
							itemSectionSidebarSidebarLocation.appendChild(itemSectionSidebarSidebarAreaText);
						}


						let currency = finaldata["Location Items"]["Shop"][q]["Currency"];

						if (currency == "Pokémon Dollar") {
							currency = '<img src="'+getMedia(["Pokémon Dollar"],[PATH_Currency_Icon])[0]+'" title="Pokémon Dollar" />';
						}
						else {
							currency = "<span title='"+currency+"'>"+currency.replace(/[^A-Z]+/g,"")+"</span>";
						}
					
						let itemSectionSidebarSidebarDescription = document.createElement("span");
						itemSectionSidebarSidebarDescription.setAttribute("name","description");
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarDescription);
						let itemSectionSidebarSidebarDescriptionText = document.createElement("p");
						if (finaldata["Location Items"]["Shop"][q]["Shop"] != undefined) {
							itemSectionSidebarSidebarDescriptionText.innerHTML = "Purchased from the "+finaldata["Location Items"]["Shop"][q]["Shop"]+" for "+numFormat(finaldata["Location Items"]["Shop"][q]["Cost"])+currency;
						}
						else {
							itemSectionSidebarSidebarDescriptionText.innerHTML = "Purchased for "+numFormat(finaldata["Location Items"]["Shop"][q]["Cost"])+currency;
						}
						itemSectionSidebarSidebarDescription.appendChild(itemSectionSidebarSidebarDescriptionText);
				

					
						if (finaldata["Location Items"]["Shop"][q]["Requirement"] != undefined) {
							itemSectionSidebarSidebarDescriptionText.title = finaldata["Location Items"]["Shop"][q]["Requirement"];
						}


						let itemSectionSidebarSidebarItem = document.createElement("span");
						itemSectionSidebarSidebarItem.setAttribute("name","item");
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarItem);

						for(let u = 0; u < quantity; u++) {
							let itemSectionSidebarSidebarItemImg = document.createElement("img");
							itemSectionSidebarSidebarItemImg.src = getMedia([getItemIcon(finaldata["Location Items"]["Shop"][q]["Item"])],[PATH_Item_Bag])[0]
							itemSectionSidebarSidebarItemImg.setAttribute("onerror",'this.style.display = "none"; this.parentElement.lastChild.style.display = "unset";');
							itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemImg);
						}

						if (quantity != 1) { 
							itemSectionSidebarSidebarItem.title = finaldata["Location Items"]["Shop"][q]["Quantity"]+"x "+finaldata["Location Items"]["Shop"][q]["Item"];
						}
						else {
							itemSectionSidebarSidebarItem.title = finaldata["Location Items"]["Shop"][q]["Item"];
						}




						let itemSectionSidebarSidebarItemText = document.createElement("h6");
						if (quantity != 1) { 
							itemSectionSidebarSidebarItemText.innerHTML = finaldata["Location Items"]["Shop"][q]["Quantity"]+"x <br>"+finaldata["Location Items"]["Shop"][q]["Item"];
						}
						else {
							itemSectionSidebarSidebarItemText.innerHTML = finaldata["Location Items"]["Shop"][q]["Item"];
						}
						itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemText);
						itemSectionSidebarSidebarItemText.style.display = "none";


				
					}
				}
			}
		}


		for(let q = 0; q < finaldata["Location Items"]["Pickup"].length; q++) {
			if (getApplicable(finaldata["Location Items"]["Pickup"][q]["Game"])) {
				let check = true;
				if (finaldata["Location Items"]["Pickup"][q]["Index"] != undefined) {
					check = finaldata["Location Items"]["Pickup"][q]["Index"] == finaldata["Items"]["Reference"][i]["Index"];
				}
				if (check) {
					if(finaldata["Location Items"]["Pickup"][q]["Item"] == item) {
						let itemSectionSidebarSidebarLi = document.createElement("li");
						itemSectionSidebarSidebarLi.setAttribute("name","pickup");
						itemSectionSidebarSidebarUl.appendChild(itemSectionSidebarSidebarLi);
				
						let itemSectionSidebarSidebarPickup = document.createElement("span");
						let itemSectionSidebarSidebarPickupTitle = document.createElement("small");
						let itemSectionSidebarSidebarPickupText = document.createElement("h5");
						itemSectionSidebarSidebarPickup.setAttribute("name","ability");
						itemSectionSidebarSidebarPickupTitle.innerText = "Ability";
						itemSectionSidebarSidebarPickupText.innerText = "Pickup";
						itemSectionSidebarSidebarPickupText.title = "Pickup";
						itemSectionSidebarSidebarPickupText.setAttribute("name","ability");
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarPickup);
						itemSectionSidebarSidebarPickup.appendChild(itemSectionSidebarSidebarPickupTitle);
						itemSectionSidebarSidebarPickup.appendChild(itemSectionSidebarSidebarPickupText);


						itemSectionSidebarSidebarPickupText.addEventListener("click",dataRedirect)
						itemSectionSidebarSidebarPickupText.setAttribute("function","dataRedirect");

		

						let itemSectionSidebarSidebarDescription = document.createElement("span");
						itemSectionSidebarSidebarDescription.setAttribute("name","description");
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarDescription);
						let itemSectionSidebarSidebarDescriptionText = document.createElement("p");
						itemSectionSidebarSidebarDescription.appendChild(itemSectionSidebarSidebarDescriptionText);


						let PickupText;
						let PickupLevel = "";
						let PickupRate = "";
						let PickupLocation = "";
						let PickupAdditional = "";

		

						if (finaldata["Location Items"]["Pickup"][q]["Level"] != undefined) {
							PickupLevel = 'Level '+finaldata["Location Items"]["Pickup"][q]["Level"];
						}
						if (finaldata["Location Items"]["Pickup"][q]["Rate"] != undefined) {
							PickupRate = finaldata["Location Items"]["Pickup"][q]["Rate"];
						}
						if (finaldata["Location Items"]["Pickup"][q]["Location"] != undefined) {
							PickupLocation = 'at <b name="map" title="'+finaldata["Location Items"]["Pickup"][q]["Location"]+'" onclick="dataRedirect()">'+finaldata["Location Items"]["Pickup"][q]["Location"]+'</b>';
						}
						if (finaldata["Location Items"]["Pickup"][q]["Additional"] != undefined) {
							PickupAdditional = 'on '+finaldata["Location Items"]["Pickup"][q]["Additional"];
						}

						PickupText = PickupRate+' chance to be found by a '+PickupLevel+' Pokémon '+PickupAdditional+' '+PickupLocation+' with the ability <b name="ability" title="Pickup" onclick="dataRedirect()">Pickup</b>';

						PickupText = PickupText.replaceAll("  "," ");

						itemSectionSidebarSidebarDescriptionText.innerHTML = PickupText+".";


						let itemSectionSidebarSidebarItem = document.createElement("span");
						itemSectionSidebarSidebarItem.setAttribute("name","item");
						itemSectionSidebarSidebarItem.title = finaldata["Location Items"]["Pickup"][q]["Item"];
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarItem);

				
						let itemSectionSidebarSidebarItemImg = document.createElement("img");
						itemSectionSidebarSidebarItemImg.src = getMedia([getItemIcon(finaldata["Location Items"]["Pickup"][q]["Item"])],[PATH_Item_Bag])[0]
						itemSectionSidebarSidebarItemImg.setAttribute("onerror",'this.style.display = "none"; this.parentElement.lastChild.style.display = "unset";');
						itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemImg);

						let itemSectionSidebarSidebarItemText = document.createElement("p");
						itemSectionSidebarSidebarItemText.innerText = finaldata["Location Items"]["Pickup"][q]["Item"];
						itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemText);
						itemSectionSidebarSidebarItemText.style.display = "none";

						
					}
				}
			}
		}



		let itemMapOuter = document.querySelector("#contain div#item > section[name='sidebar'] > * > div:first-child > div");
		let itemMap = document.querySelector("#contain div#item > section[name='sidebar'] > * > div:first-child > div img[usemap]");
		let locs = document.querySelectorAll("#contain div > section[name='sidebar'] > div > ul li span[name='location'] > * > *");
		let locations = [];
		for(let q = 0; q < locs.length; q++) {
			locations.push(locs[q].innerText);
		}
		if (itemMap.classList.contains("mapify")) {
			if (itemMap.naturalWidth == 0) {
				itemMap.addEventListener("load", event => {
					mapBlink(itemMapOuter,locations);
				});
			}
			else {
				mapBlink(itemMapOuter,locations);
			}	
		}


		memory("Restore","game",document.querySelectorAll("#contain div#item > section[name='sidebar'] > div > ul li input"))

	}
};