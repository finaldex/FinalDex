var createItem = function() {
	var itemOuter = document.createElement("div");
	var itemSectionList = document.createElement("section");
	var itemSectionListOptionsTitleOuter = document.createElement("div");
	var itemSectionListOptionsPocketOuter = document.createElement("div");
	var itemSectionListOptionsSearchOuter = document.createElement("div");
	var itemSectionListOptionsSearch = document.createElement("input");
	var itemSectionListOptionsSearchExit = document.createElement("span");
	var itemSectionListOptionsOuter = document.createElement("div");
	var itemSectionListOptions = document.createElement("ol");
	var itemSectionHeader = document.createElement("section");
	var itemSectionHeaderTitle = document.createElement("span");
	var itemSectionHeaderTitleID = document.createElement("h4");
	var itemSectionHeaderTitleName = document.createElement("h3");
	var itemSectionHeaderDebut = document.createElement("span");
	var itemSectionHeaderDebutText = document.createElement("h5");
	var itemSectionContent = document.createElement("section");
	var itemSectionContentDescription = document.createElement("div");
	var itemSectionSidebar = document.createElement("section");
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

	var pockets = [];
	for (var q = 0; q < finaldataItems.length; q++) {
		if(finaldataItems[q]["Pocket_"+JSONPath_Items] != undefined && finaldataItems[q]["Pocket_"+JSONPath_Items] != "Unknown") {
			pockets.push(finaldataItems[q]["Pocket_"+JSONPath_Items])
		}

	}
	pockets = pockets.filter(function(v) {return v !== undefined;});
	pockets = [...new Set(pockets)];
	
	for (var q = 0; q < pockets.length; q++) {
		var itemSectionListOptionsPocketInput = document.createElement("input");
		var itemSectionListOptionsPocketLabel = document.createElement("label");
		var itemSectionListOptionsPocketLabelImage = document.createElement("img");
		var itemSectionListOptionsPocketLabelText = document.createElement("p");
		itemSectionListOptionsPocketInput.setAttribute("type","checkbox");
		itemSectionListOptionsPocketInput.setAttribute("name","item-options-pocket");
		itemSectionListOptionsPocketInput.setAttribute("id","item-options-pocket-"+q);
		itemSectionListOptionsPocketInput.setAttribute("alt",pockets[q].toLowerCase());
		itemSectionListOptionsPocketInput.value = pockets[q];
		itemSectionListOptionsPocketLabel.setAttribute("for","item-options-pocket-"+q);
		itemSectionListOptionsPocketLabelImage.src = "./media/Images/Item/Pocket/Icon/"+MEDIAPath_Item_Pocket+"/"+pockets[q]+".png";
		itemSectionListOptionsPocketLabelImage.title = pockets[q]+" Pocket";
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

    var itemSectionHeaderGame = document.createElement("span");
    var itemSectionHeaderGameImage = document.createElement("img");
    itemSectionHeaderGameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
    itemSectionHeaderGameImage.setAttribute("onerror","this.display='none'");
    itemSectionHeader.appendChild(itemSectionHeaderGame);
    itemSectionHeaderGame.appendChild(itemSectionHeaderGameImage);

	var itemSectionSidebarSidebar = document.createElement("div");
	var itemSectionSidebarSidebarMapOuter = document.createElement("div");
	var itemSectionSidebarSidebarMapInner = document.createElement("div");
	var itemSectionSidebarSidebarMapImage = document.createElement("img");
	var itemSectionSidebarSidebarMap = document.createElement("map");
	var itemSectionSidebarSidebarMapFullscreen = document.createElement("figure");
	var itemSectionSidebarSidebarMapFullscreenText = document.createElement("h5");
	var itemSectionSidebarSidebarMapPause = document.createElement("figure");
	var itemSectionSidebarSidebarMapPauseText = document.createElement("h3");
	var itemSectionSidebarSidebarMapZoomIn = document.createElement("figure");
	var itemSectionSidebarSidebarMapZoomInText = document.createElement("h3");
	var itemSectionSidebarSidebarMapZoomOut = document.createElement("figure");
	var itemSectionSidebarSidebarMapZoomOutText = document.createElement("h3");

	var itemSectionSidebarSidebarUl = document.createElement("ul");

	itemSectionSidebarSidebarMapImage.src = "./media/Images/Location/Map/"+MEDIAPath_Map+"/Map.png"

	itemSectionSidebarSidebarMapImage.src = "./media/Images/Location/Map/"+MEDIAPath_Map+"/Map.png";
	itemSectionSidebarSidebarMapImage.setAttribute("usemap","#"+MEDIAPath_Map+"-item");

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

	itemSectionSidebarSidebarMap.setAttribute("name",MEDIAPath_Map+"-item");
	itemSectionSidebarSidebarMap.setAttribute("id",MEDIAPath_Map+"-item");

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
	itemSectionSidebarSidebarMapInner.addEventListener("wheel",function(event){var delta = event.deltaY.toString();if(delta.includes("-")){zoom(itemSectionSidebarSidebarMapInner,"in",false)}else if(!delta.includes("-")){zoom(itemSectionSidebarSidebarMapInner,"out",true)}});
	itemSectionSidebarSidebarMapInner.addEventListener("mouseleave", function() {zoom(itemSectionSidebarSidebarMapInner,"out",undefined)});
	itemSectionSidebarSidebarMapInner.addEventListener("mouseenter", function() {zoom(itemSectionSidebarSidebarMapInner,"in",undefined)});
	itemSectionSidebarSidebarMapInner.addEventListener("mousemove", function() {zoom(itemSectionSidebarSidebarMapInner,"pan",undefined)});



	for(var q = 0; q < finaldataItems.length; q++) {
		if (finaldataItems[q]["Name_"+JSONPath_Items] != undefined && finaldataItems[q]["Pocket_"+JSONPath_Items] != "Unknown") {
			var itemSectionListOptionsInput = document.createElement("input");
			var itemSectionListOptionsLabel = document.createElement("label");
			var itemSectionListOptionsLabelText = document.createElement("p");
			itemSectionListOptionsInput.setAttribute("type", "radio");
			itemSectionListOptionsInput.setAttribute("name", "item-options");
			itemSectionListOptionsInput.setAttribute("id", "item-options-" + q);
			itemSectionListOptionsInput.setAttribute("autocomplete", "off");
			itemSectionListOptionsInput.value = q;
			itemSectionListOptionsLabel.setAttribute("for", "item-options-" + q);
			itemSectionListOptionsLabel.setAttribute("data-search-name", finaldataItems[q]["Name_"+JSONPath_Items].toLowerCase());
			itemSectionListOptionsLabel.setAttribute("data-search-name", finaldataItems[q]["Name_"+JSONPath_Items].toLowerCase());


			if (getDataArr(finaldataItemsPrice,"Item",finaldataItems[q]["Name_"+JSONPath_Items]).length > 0) {
				if (getDataArr(finaldataItemsPrice,"Item",finaldataItems[q]["Name_"+JSONPath_Items])[0]["Sell Amount"] != undefined) {
					itemSectionListOptionsLabel.setAttribute("data-search-price",getDataArr(finaldataItemsPrice,"Item",finaldataItems[q]["Name_"+JSONPath_Items])[0]["Sell Amount"]);
				}
				else {
					itemSectionListOptionsLabel.setAttribute("data-search-price",0);
				}
			}
			else {
				itemSectionListOptionsLabel.setAttribute("data-search-price",0);
			}
			

			if (finaldataItems[q]["Pocket_"+JSONPath_Items] != undefined) {
				itemSectionListOptionsLabel.setAttribute("data-pocket",finaldataItems[q]["Pocket_"+JSONPath_Items].toLowerCase());
			}
			itemSectionListOptionsLabel.setAttribute("type","medium");
			if (finaldataItems[q]["Icon_"+JSONPath_Items] != undefined) {
				var itemSectionListOptionsLabelImageOuter = document.createElement("span");
				var itemSectionListOptionsLabelImage = document.createElement("img");
				itemSectionListOptionsLabelImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+finaldataItems[q]["Icon_"+JSONPath_Items]+".png";
				itemSectionListOptionsLabelImage.setAttribute("onerror","this.style.display='none';");
				itemSectionListOptionsLabel.appendChild(itemSectionListOptionsLabelImageOuter);
				itemSectionListOptionsLabelImageOuter.appendChild(itemSectionListOptionsLabelImage);
			}
			if (getMachineMove(finaldataItems[q]["Name_"+JSONPath_Items]) != undefined) {
				itemSectionListOptionsLabelText.innerText = finaldataItems[q]["Name_"+JSONPath_Items]+" ("+getMachineMove(finaldataItems[q]["Name_"+JSONPath_Items])+")";
			}
			else {
				itemSectionListOptionsLabelText.innerText = finaldataItems[q]["Name_"+JSONPath_Items];
			}
			itemSectionListOptions.appendChild(itemSectionListOptionsInput);
			itemSectionListOptions.appendChild(itemSectionListOptionsLabel);

			itemSectionListOptionsLabel.appendChild(itemSectionListOptionsLabelText);
			itemSectionListOptionsInput.addEventListener("click", itemOptionsSelector);

			itemSectionListOptionsLabel.setAttribute("tabindex",q+10);
			itemSectionListOptionsLabel.addEventListener("keyup",function(event){if(event.which === 13){if(event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;itemOptionsSelector(event.target.previousElementSibling.value);}}});

		}

	}


	itemSectionListOptionsSearch.title = searchOptionsTitle(itemSectionListOptions);

	var searchLis = document.querySelectorAll("#contain > div#item > section[name='list'] ol > label");
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
	searchItemAttributes = searchItemAttributes.filter(function(v) {return v !== "data-search-name";});
    for(q = 0; q < searchItemAttributes.length; q++) {
        searchItemAttributes[q] = searchItemAttributes[q].replaceAll("data-search-","")
    }
	
	function itemOptionsSelector(i) {
		var i;
		if (this.value != undefined) {
			i = this.value;
		}
		var item = finaldataItems[i]["Name_"+JSONPath_Items];

		itemSectionHeaderTitleName.innerText = finaldataItems[i]["Name_"+JSONPath_Items];
		itemSectionHeaderTitleID.innerText = "#"+finaldataItems[i]["ID_"+JSONPath_Items];

		var priceArr = getDataArr(finaldataItemsPrice,"Item",item);
	

		if (priceArr.length > 0) {
			var price = priceArr[0]["Sell Amount"];
			var currency = priceArr[0]["Sell Currency"];	
			if (price != undefined) {
				itemSectionHeaderDebutText.innerHTML = "Sold for: "+price+currency.replaceAll("Pokémon Dollar",'<img src="./media/Images/Misc/Currency/VIII/Pokémon Dollar.png" title="Pokémon Dollar" />');
			}
			else {
				itemSectionHeaderDebutText.innerText = "Cannot be Sold";
			}
		}

		var destexts = itemSectionContentDescription.querySelectorAll(":scope > p");
		for(var q = 0; q < destexts.length; q++) {
			destexts[q].remove();
		}

		if (getMachineMove(item) != undefined) {
			var itemSectionContentDescriptionText = document.createElement("p");
			itemSectionContentDescriptionText.innerHTML = item+" contains the move <b type='invert' name='move'>"+getMachineMove(item)+"</b>.";
			itemSectionContentDescription.appendChild(itemSectionContentDescriptionText);
			itemSectionContentDescriptionText.querySelector(":scope b").addEventListener("click",dataRedirect);
			itemSectionContentDescriptionText.querySelector(":scope b").setAttribute("function","dataRedirect");
		}
		else {
			for(var q = 0; q < finaldataItemsDescription.length; q++) {
				if (finaldataItemsDescription[q]["Item"] == item) {
					if (getApplicable(finaldataItemsDescription[q]["Game"])) {
						var check = true;
						if (finaldataItemsDescription[q]["Index"] != undefined) {
							check = finaldataItemsDescription[q]["Index"] == finaldataItems[i]["Index_"+JSONPath_Items];
						}
						if (check) {
							var itemSectionContentDescriptionText = document.createElement("p");
							itemSectionContentDescriptionText.innerText = finaldataItemsDescription[q]["Description"];
							itemSectionContentDescription.appendChild(itemSectionContentDescriptionText);
							if(finaldataItemsDescription[q]["Version"] != undefined) {
								itemSectionContentDescriptionText.title = finaldataItemsDescription[q]["Version"];
							}
						}
					}
				}
			}
		}

		var lis = itemSectionSidebarSidebarUl.querySelectorAll(":scope li");
		
		for(var q = 0; q < lis.length; q++) {
			lis[q].remove();
		}

		

		for(var q = 0; q < finaldataPokémonHeldItem.length; q++) {
			for(var u = 0; u < JSONPath_HeldItemPercentage.length; u++) {
				if(finaldataPokémonHeldItem[q][JSONPath_HeldItemPercentage[u]+"_"+JSONPath_HeldItem] == item) {

					var itemSectionSidebarSidebarLi = document.createElement("li");
					itemSectionSidebarSidebarLi.setAttribute("name","held");
					itemSectionSidebarSidebarUl.appendChild(itemSectionSidebarSidebarLi);

					var itemSectionSidebarSidebarPokémon = document.createElement("span");
					itemSectionSidebarSidebarPokémon.setAttribute("name","pokémon");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarPokémon);
					

				
					var itemSectionSidebarSidebarPokémonImg = document.createElement("img");
					itemSectionSidebarSidebarPokémonImg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(q,"Box")+".png";
					itemSectionSidebarSidebarPokémonImg.title = getPokémonName(q);
					itemSectionSidebarSidebarPokémon.appendChild(itemSectionSidebarSidebarPokémonImg);

					var itemSectionSidebarSidebarPokémonText = document.createElement("small");
					itemSectionSidebarSidebarPokémonText.innerText = getPokémonName(q);
					itemSectionSidebarSidebarPokémon.appendChild(itemSectionSidebarSidebarPokémonText);

					itemSectionSidebarSidebarPokémon.setAttribute("value",q);
					itemSectionSidebarSidebarPokémon.setAttribute("function","modalData");
					itemSectionSidebarSidebarPokémon.addEventListener("click",modalData);



					var itemSectionSidebarSidebarDescription = document.createElement("span");
					itemSectionSidebarSidebarDescription.setAttribute("name","description");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarDescription);

			
					var itemSectionSidebarSidebarDescriptionText = document.createElement("p");
					itemSectionSidebarSidebarDescriptionText.innerText = JSONPath_HeldItemPercentage[u]+" chance to be held by a wild "+finaldataPokémon[q]["Pokémon"]+".";
					itemSectionSidebarSidebarDescription.appendChild(itemSectionSidebarSidebarDescriptionText);
					

					var itemSectionSidebarSidebarItem = document.createElement("span");
					itemSectionSidebarSidebarItem.setAttribute("name","item");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarItem);

					var itemSectionSidebarSidebarItemImg = document.createElement("img");
					itemSectionSidebarSidebarItemImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(finaldataPokémonHeldItem[q][JSONPath_HeldItemPercentage[u]+"_"+JSONPath_HeldItem])+".png";
					itemSectionSidebarSidebarItemImg.setAttribute("onerror",'this.style.display = "none";')
					itemSectionSidebarSidebarItemImg.title = finaldataPokémonHeldItem[q][JSONPath_HeldItemPercentage[u]+"_"+JSONPath_HeldItem];
					itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemImg);
		
				}
			}
			
		}





		for(var q = 0; q < finaldataLocationItems.length; q++) {
			if (getApplicable(finaldataLocationItems[q]["Game"])) {
				if(finaldataLocationItems[q]["Item"] == item) {
					var itemSectionSidebarSidebarLi = document.createElement("li");
					itemSectionSidebarSidebarLi.setAttribute("name","location")
					itemSectionSidebarSidebarUl.appendChild(itemSectionSidebarSidebarLi);

					var quantity = finaldataLocationItems[q]["Quantity"];

					if (quantity == undefined) {
						quantity = 1;
					}
					if (quantity > 10) {
						quantity = 10;
					}

					var itemSectionSidebarSidebarLocation = document.createElement("span");
					var itemSectionSidebarSidebarLocationTrigger = document.createElement("b");
					var itemSectionSidebarSidebarLocationText = document.createElement("h5");
					itemSectionSidebarSidebarLocation.setAttribute("name","location");
					itemSectionSidebarSidebarLocationText.innerText = finaldataLocationItems[q]["Location"];
					itemSectionSidebarSidebarLocationTrigger.setAttribute("name","map")
					itemSectionSidebarSidebarLocationTrigger.setAttribute("type","invert");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarLocation);
					itemSectionSidebarSidebarLocation.appendChild(itemSectionSidebarSidebarLocationTrigger);
					itemSectionSidebarSidebarLocationTrigger.appendChild(itemSectionSidebarSidebarLocationText);

					itemSectionSidebarSidebarLocationTrigger.addEventListener("click",dataRedirect)
					itemSectionSidebarSidebarLocationTrigger.setAttribute("function","dataRedirect");


					if (finaldataLocationItems[q]["Area"] != undefined && finaldataLocationItems[q]["Area"] != finaldataLocationItems[q]["Location"]) {
						var itemSectionSidebarSidebarAreaText = document.createElement("small");
						itemSectionSidebarSidebarAreaText.innerText = finaldataLocationItems[q]["Area"];
						itemSectionSidebarSidebarLocation.appendChild(itemSectionSidebarSidebarAreaText);
					}



					if (finaldataLocationItems[q]["Description"] != undefined) {
						var itemSectionSidebarSidebarDescription = document.createElement("span");
						itemSectionSidebarSidebarDescription.setAttribute("name","description");
						itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarDescription);
						var itemSectionSidebarSidebarDescriptionText = document.createElement("p");
						itemSectionSidebarSidebarDescriptionText.innerText = finaldataLocationItems[q]["Description"];
						itemSectionSidebarSidebarDescription.appendChild(itemSectionSidebarSidebarDescriptionText);
					}

					var itemSectionSidebarSidebarRequirementOuter = document.createElement("span");
					itemSectionSidebarSidebarRequirementOuter.setAttribute("name","requirement");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarRequirementOuter);

					if (finaldataLocationItems[q]["Field"] != undefined) {
	
						var itemSectionSidebarSidebarRequirementTitle = document.createElement("h6");
						itemSectionSidebarSidebarRequirementTitle.innerText = "Requires:";
						itemSectionSidebarSidebarRequirementOuter.appendChild(itemSectionSidebarSidebarRequirementTitle);


						if (finaldataLocationItems[q]["Field"].includes("/")) {
							for(var y = 0; y < finaldataLocationItems[q]["Field"].split("/").length; y++) {
								var itemIcon;
								var itm;
								if (getMoveMachine(finaldataLocationItems[q]["Field"].split("/")[y]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(finaldataLocationItems[q]["Field"].split("/")[y]));
									itm = getMoveMachine(finaldataLocationItems[q]["Field"].split("/")[y]);
								}
								else if (getItemIcon(finaldataLocationItems[q]["Field"].split("/")[y]) != undefined) {
									itemIcon = getItemIcon(finaldataLocationItems[q]["Field"].split("/")[y]);
									itm = finaldataLocationItems[q]["Field"].split("/")[y];
								}

								var itemSectionSidebarSidebarField = document.createElement("b");
								var itemSectionSidebarSidebarFieldText = document.createElement("small");
								itemSectionSidebarSidebarFieldText.innerText = finaldataLocationItems[q]["Field"].split("/")[y];
								itemSectionSidebarSidebarRequirementOuter.appendChild(itemSectionSidebarSidebarField);
								if (itemIcon != undefined) {
									var itemSectionSidebarSidebarFieldImage = document.createElement("img");
									itemSectionSidebarSidebarFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
									itemSectionSidebarSidebarFieldImage.title = finaldataLocationItems[q]["Field"].split("/")[y];
									itemSectionSidebarSidebarFieldImage.setAttribute("onerror",'this.style.display = "none";')
									itemSectionSidebarSidebarField.appendChild(itemSectionSidebarSidebarFieldImage);
								}
								itemSectionSidebarSidebarField.appendChild(itemSectionSidebarSidebarFieldText);
								itemSectionSidebarSidebarField.setAttribute("name","item");
								itemSectionSidebarSidebarField.setAttribute("value",itm);
								itemSectionSidebarSidebarField.addEventListener("click",dataRedirect);
								itemSectionSidebarSidebarField.setAttribute("function","dataRedirect");
								if (y != finaldataLocationItems[q]["Field"].split("/").length - 1) {
									var itemSectionSidebarSidebarFieldSpace = document.createElement("p");
									itemSectionSidebarSidebarFieldSpace.innerText = " or ";
									itemSectionSidebarSidebarRequirementOuter.appendChild(itemSectionSidebarSidebarFieldSpace)
								}
							}
						}
						else if (finaldataLocationItems[q]["Field"].includes(",")) {
							for(var y = 0; y < finaldataLocationItems[q]["Field"].split(",").length; y++) {
								var itemIcon;
								var itm;
								if (getMoveMachine(finaldataLocationItems[q]["Field"].split(",")[y]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(finaldataLocationItems[q]["Field"].split(",")[y]));
									itm = getMoveMachine(finaldataLocationItems[q]["Field"].split(",")[y]);
								}
								else if (getItemIcon(finaldataLocationItems[q]["Field"].split(",")[y]) != undefined) {
									itemIcon = getItemIcon(finaldataLocationItems[q]["Field"].split(",")[y]);
									itm = finaldataLocationItems[q]["Field"].split(",")[y];
								}

								var itemSectionSidebarSidebarField = document.createElement("b");
								var itemSectionSidebarSidebarFieldText = document.createElement("small");
								itemSectionSidebarSidebarFieldText.innerText = finaldataLocationItems[q]["Field"].split(",")[y];
								itemSectionSidebarSidebarRequirementOuter.appendChild(itemSectionSidebarSidebarField);
								if (itemIcon != undefined) {
									var itemSectionSidebarSidebarFieldImage = document.createElement("img");
									itemSectionSidebarSidebarFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
									itemSectionSidebarSidebarFieldImage.title = finaldataLocationItems[q]["Field"].split(",")[y];
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
							var itemIcon;
							var itm;
							if (getMoveMachine(finaldataLocationItems[q]["Field"]) != undefined) {
								itemIcon = getItemIcon(getMoveMachine(finaldataLocationItems[q]["Field"]));
								itm = getMoveMachine(finaldataLocationItems[q]["Field"]);
							}
							else if (getItemIcon(finaldataLocationItems[q]["Field"]) != undefined) {
								itemIcon = getItemIcon(finaldataLocationItems[q]["Field"]);
								itm = finaldataLocationItems[q]["Field"];
							}

							var itemSectionSidebarSidebarField = document.createElement("b");
							var itemSectionSidebarSidebarFieldText = document.createElement("small");
							itemSectionSidebarSidebarFieldText.innerText = finaldataLocationItems[q]["Field"];
							itemSectionSidebarSidebarRequirementOuter.appendChild(itemSectionSidebarSidebarField);
							if (itemIcon != undefined) {
								var itemSectionSidebarSidebarFieldImage = document.createElement("img");
								itemSectionSidebarSidebarFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
								itemSectionSidebarSidebarFieldImage.title = finaldataLocationItems[q]["Field"];
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

					var itemSectionSidebarSidebarItem = document.createElement("span");
					itemSectionSidebarSidebarItem.setAttribute("name","item");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarItem);

					for(var u = 0; u < quantity; u++) {
						var itemSectionSidebarSidebarItemImg = document.createElement("img");
						itemSectionSidebarSidebarItemImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(finaldataLocationItems[q]["Item"])+".png";
						itemSectionSidebarSidebarItemImg.setAttribute("onerror",'this.style.display = "none"; this.parentElement.lastChild.style.display = "unset";');
						itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemImg);
					}

					if (quantity != 1) { 
						itemSectionSidebarSidebarItem.title = finaldataLocationItems[q]["Quantity"]+"x "+finaldataLocationItems[q]["Item"];
					}
					else {
						itemSectionSidebarSidebarItem.title = finaldataLocationItems[q]["Item"];
					}




					var itemSectionSidebarSidebarItemText = document.createElement("h6");
					if (quantity != 1) { 
						itemSectionSidebarSidebarItemText.innerHTML = finaldataLocationItems[q]["Quantity"]+"x <br>"+finaldataLocationItems[q]["Item"];
					}
					else {
						itemSectionSidebarSidebarItemText.innerHTML = finaldataLocationItems[q]["Item"];
					}
					itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemText);
					itemSectionSidebarSidebarItemText.style.display = "none";

					if (finaldataLocationItems[q]["Hidden"] == "Hidden") {
						itemSectionSidebarSidebarLi.classList.add("hide");
						itemSectionSidebarSidebarItem.title += " (Hidden)";
					}

			
				}
			}
		}

		for(var q = 0; q < finaldataLocationItemsShops.length; q++) {
			if (getApplicable(finaldataLocationItemsShops[q]["Game"])) {
				if(finaldataLocationItemsShops[q]["Item"] == item) {
					var itemSectionSidebarSidebarLi = document.createElement("li");
					itemSectionSidebarSidebarLi.setAttribute("name","shop")
					itemSectionSidebarSidebarUl.appendChild(itemSectionSidebarSidebarLi);

					var quantity = finaldataLocationItemsShops[q]["Quantity"];

					if (quantity == undefined) {
						quantity = 1;
					}
					if (quantity > 10) {
						quantity = 10;
					}

					var itemSectionSidebarSidebarLocation = document.createElement("span");
					var itemSectionSidebarSidebarLocationTrigger = document.createElement("b");
					var itemSectionSidebarSidebarLocationText = document.createElement("h5");
					itemSectionSidebarSidebarLocation.setAttribute("name","location")
					itemSectionSidebarSidebarLocationText.innerText = finaldataLocationItemsShops[q]["Location"];
					itemSectionSidebarSidebarLocationTrigger.setAttribute("name","map")
					itemSectionSidebarSidebarLocationTrigger.setAttribute("type","invert");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarLocation);
					itemSectionSidebarSidebarLocation.appendChild(itemSectionSidebarSidebarLocationTrigger);
					itemSectionSidebarSidebarLocationTrigger.appendChild(itemSectionSidebarSidebarLocationText);

					itemSectionSidebarSidebarLocationTrigger.addEventListener("click",dataRedirect)
					itemSectionSidebarSidebarLocationTrigger.setAttribute("function","dataRedirect");


					if (finaldataLocationItemsShops[q]["Area"] != undefined && finaldataLocationItemsShops[q]["Area"] != finaldataLocationItemsShops[q]["Location"]) {
						var itemSectionSidebarSidebarAreaText = document.createElement("small");
						itemSectionSidebarSidebarAreaText.innerText = finaldataLocationItemsShops[q]["Area"];
						itemSectionSidebarSidebarLocation.appendChild(itemSectionSidebarSidebarAreaText);
					}


					var currency = finaldataLocationItemsShops[q]["Currency"];

					if (currency == "Pokémon Dollar") {
						currency = '<img src="./media/Images/Misc/Currency/VIII/Pokémon Dollar.png" title="Pokémon Dollar" />';
					}
					else {
						currency = "<span title='"+currency+"'>"+currency.replace(/[^A-Z]+/g,"")+"</span>";
					}
				
					var itemSectionSidebarSidebarDescription = document.createElement("span");
					itemSectionSidebarSidebarDescription.setAttribute("name","description");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarDescription);
					var itemSectionSidebarSidebarDescriptionText = document.createElement("p");
					if (finaldataLocationItemsShops[q]["Type"] != undefined) {
						itemSectionSidebarSidebarDescriptionText.innerHTML = "Purchased from the "+finaldataLocationItemsShops[q]["Type"]+" for "+finaldataLocationItemsShops[q]["Cost"]+currency;
					}
					else {
						itemSectionSidebarSidebarDescriptionText.innerHTML = "Purchased for "+finaldataLocationItemsShops[q]["Cost"]+currency;
					}
					itemSectionSidebarSidebarDescription.appendChild(itemSectionSidebarSidebarDescriptionText);
			

				
					if (finaldataLocationItemsShops[q]["Requirement"] != undefined) {
						itemSectionSidebarSidebarDescriptionText.title = finaldataLocationItemsShops[q]["Requirement"];
					}


					var itemSectionSidebarSidebarItem = document.createElement("span");
					itemSectionSidebarSidebarItem.setAttribute("name","item");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarItem);

					for(var u = 0; u < quantity; u++) {
						var itemSectionSidebarSidebarItemImg = document.createElement("img");
						itemSectionSidebarSidebarItemImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(finaldataLocationItemsShops[q]["Item"])+".png";
						itemSectionSidebarSidebarItemImg.setAttribute("onerror",'this.style.display = "none"; this.parentElement.lastChild.style.display = "unset";');
						itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemImg);
					}

					if (quantity != 1) { 
						itemSectionSidebarSidebarItem.title = finaldataLocationItemsShops[q]["Quantity"]+"x "+finaldataLocationItemsShops[q]["Item"];
					}
					else {
						itemSectionSidebarSidebarItem.title = finaldataLocationItemsShops[q]["Item"];
					}




					var itemSectionSidebarSidebarItemText = document.createElement("h6");
					if (quantity != 1) { 
						itemSectionSidebarSidebarItemText.innerHTML = finaldataLocationItemsShops[q]["Quantity"]+"x <br>"+finaldataLocationItemsShops[q]["Item"];
					}
					else {
						itemSectionSidebarSidebarItemText.innerHTML = finaldataLocationItemsShops[q]["Item"];
					}
					itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemText);
					itemSectionSidebarSidebarItemText.style.display = "none";


			
				}
			}
		}


		for(var q = 0; q < finaldataLocationItemsPickup.length; q++) {
			if (getApplicable(finaldataLocationItemsPickup[q]["Game"])) {
				if(finaldataLocationItemsPickup[q]["Item"] == item) {
					var itemSectionSidebarSidebarLi = document.createElement("li");
					itemSectionSidebarSidebarLi.setAttribute("name","pickup");
					itemSectionSidebarSidebarUl.appendChild(itemSectionSidebarSidebarLi);

			
					var itemSectionSidebarSidebarPickup = document.createElement("span");
					var itemSectionSidebarSidebarPickupTitle = document.createElement("small");
					var itemSectionSidebarSidebarPickupText = document.createElement("h5");
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

	

					var itemSectionSidebarSidebarDescription = document.createElement("span");
					itemSectionSidebarSidebarDescription.setAttribute("name","description");
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarDescription);
					var itemSectionSidebarSidebarDescriptionText = document.createElement("p");
					itemSectionSidebarSidebarDescription.appendChild(itemSectionSidebarSidebarDescriptionText);


					var PickupText;
					var PickupLevel = "";
					var PickupRate = "";
					var PickupLocation = "";
					var PickupAdditional = "";

	

					if (finaldataLocationItemsPickup[q]["Level"] != undefined) {
						PickupLevel = 'Level '+finaldataLocationItemsPickup[q]["Level"];
					}
					if (finaldataLocationItemsPickup[q]["Rate"] != undefined) {
						PickupRate = finaldataLocationItemsPickup[q]["Rate"];
					}
					if (finaldataLocationItemsPickup[q]["Location"] != undefined) {
						PickupLocation = 'at <b name="map" title="'+finaldataLocationItemsPickup[q]["Location"]+'" onclick="dataRedirect()">'+finaldataLocationItemsPickup[q]["Location"]+'</b>';
					}
					if (finaldataLocationItemsPickup[q]["Additional"] != undefined) {
						PickupAdditional = 'on '+finaldataLocationItemsPickup[q]["Additional"];
					}

					PickupText = PickupRate+' chance to be found by a '+PickupLevel+' Pokémon '+PickupAdditional+' '+PickupLocation+' with the ability <b name="ability" title="Pickup" onclick="dataRedirect()">Pickup</b>';

					PickupText = PickupText.replaceAll("  "," ");

					itemSectionSidebarSidebarDescriptionText.innerHTML = PickupText+".";


					var itemSectionSidebarSidebarItem = document.createElement("span");
					itemSectionSidebarSidebarItem.setAttribute("name","item");
					itemSectionSidebarSidebarItem.title = finaldataLocationItemsPickup[q]["Item"];
					itemSectionSidebarSidebarLi.appendChild(itemSectionSidebarSidebarItem);

			
					var itemSectionSidebarSidebarItemImg = document.createElement("img");
					itemSectionSidebarSidebarItemImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(finaldataLocationItemsPickup[q]["Item"])+".png";
					itemSectionSidebarSidebarItemImg.setAttribute("onerror",'this.style.display = "none"; this.parentElement.lastChild.style.display = "unset";');
					itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemImg);

					var itemSectionSidebarSidebarItemText = document.createElement("p");
					itemSectionSidebarSidebarItemText.innerText = finaldataLocationItemsPickup[q]["Item"];
					itemSectionSidebarSidebarItem.appendChild(itemSectionSidebarSidebarItemText);
					itemSectionSidebarSidebarItemText.style.display = "none";

					
				}
			}
		}



		var itemMapOuter = document.querySelector("#contain div#item > section[name='sidebar'] > * > div:first-child > div");
		var itemMap = document.querySelector("#contain div#item > section[name='sidebar'] > * > div:first-child > div img[usemap]");
		var locs = document.querySelectorAll("#contain div > section[name='sidebar'] > div > ul li span[name='location'] > * > *");
		var locations = [];
		for(var q = 0; q < locs.length; q++) {
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


	}

};