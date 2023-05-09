var createMap = function() {
	var mapOuter = document.createElement("div");
	var mapSectionList = document.createElement("section");
	var mapSectionListOptionsTitleOuter = document.createElement("div");
	var mapSectionListOptionsSearchOuter = document.createElement("div");
	var mapSectionListOptionsSearch = document.createElement("input");
	var mapSectionListOptionsSearchExit = document.createElement("span");
	var mapSectionHeader = document.createElement("section");
	var mapSectionHeaderTitle = document.createElement("span");
	var mapSectionHeaderTitleText = document.createElement("h3");
	var mapSectionHeaderFlavor = document.createElement("span");
	var mapSectionHeaderFlavorText = document.createElement("h5");

	var mapSectionSidebar = document.createElement("section");
	mapOuter.setAttribute("id","map");
	mapOuter.setAttribute("value","map");


	mapSectionListOptionsSearch.setAttribute("type", "text");

	mapSectionListOptionsSearch.setAttribute("placeholder", "Search Locations...");
	mapSectionListOptionsSearch.setAttribute("onfocus", "this.placeholder=''");
	mapSectionListOptionsSearch.setAttribute("onblur", "this.placeholder='Search Locations...'");
	mapSectionListOptionsSearch.setAttribute("autocomplete", "off");
	mapSectionListOptionsSearchExit.setAttribute("name","exit");
	mapSectionHeaderTitleText.innerText = "Map of "+Region.replaceAll(","," & ");
	mapSectionHeaderFlavor.setAttribute("title", "Slogan")
	document.querySelector("#contain").appendChild(mapOuter);
	mapOuter.appendChild(mapSectionList);
	mapSectionList.appendChild(mapSectionListOptionsTitleOuter);
	mapSectionListOptionsTitleOuter.appendChild(mapSectionListOptionsSearchOuter);
	mapSectionListOptionsSearchOuter.appendChild(mapSectionListOptionsSearchExit);
	mapSectionListOptionsSearchOuter.appendChild(mapSectionListOptionsSearch);
	mapOuter.appendChild(mapSectionHeader);
	mapSectionHeader.appendChild(mapSectionHeaderTitle);
	mapSectionHeaderTitle.appendChild(mapSectionHeaderTitleText);
	mapSectionHeader.appendChild(mapSectionHeaderFlavor);
	mapSectionHeaderFlavor.appendChild(mapSectionHeaderFlavorText);





	var mapSectionContent = document.createElement("section");
	var mapSectionContentMapOuter = document.createElement("div");
	var mapSectionContentMapOuter2 = document.createElement("div");
	var mapSectionContentMapInner = document.createElement("div");
	var mapSectionContentMapInner2 = document.createElement("div");
	var mapSectionContentMapZoomReset = document.createElement("figure");
	var mapSectionContentMapZoomResetText = document.createElement("h2");
	var mapSectionContentMapZoomIn = document.createElement("figure");
	var mapSectionContentMapZoomInText = document.createElement("h3");
	var mapSectionContentMapFullscreen = document.createElement("figure");
	var mapSectionContentMapFullscreenText = document.createElement("h5");
	var mapSectionContentMapPause = document.createElement("figure");
	var mapSectionContentMapPauseText = document.createElement("h2");
	var mapSectionContentMapImg = document.createElement("img");
	var mapSectionContentMap = document.createElement("map");

	mapSectionContentMapZoomReset.setAttribute("type","scale");
	mapSectionContentMapZoomReset.setAttribute("name","reset");
	mapSectionContentMapZoomResetText.innerText = "-";
	mapSectionContentMapZoomIn.setAttribute("type","scale");
	mapSectionContentMapZoomIn.setAttribute("name","zoom");
	mapSectionContentMapZoomInText.innerText = "+";
	mapSectionContentMapFullscreen.setAttribute("name","fullscreen");
	mapSectionContentMapFullscreenText.innerText = "⛶";
	mapSectionContentMapPause.setAttribute("name","pause");
	mapSectionContentMapPauseText.innerText = "⏸︎";
	mapSectionContentMapImg.src = "./media/Images/Location/Map/"+MEDIAPath_Map+"/Map.png";
	mapSectionContentMapImg.setAttribute("usemap","#"+MEDIAPath_Map+"-map");
	mapOuter.appendChild(mapSectionContent);
	mapSectionContent.appendChild(mapSectionContentMapOuter);

	mapSectionContentMap.setAttribute("name",MEDIAPath_Map+"-map");
	mapSectionContentMap.setAttribute("id",MEDIAPath_Map+"-map");

	mapSectionContentMapOuter.setAttribute("name","map");


	var dir1 = ["Left","Top"];
	for(var q = 0; q < dir1.length; q++) {
		var mapSectionContentMapDirection = document.createElement("span");
		var mapSectionContentMapDirectionInner = document.createElement("figure");
		var mapSectionContentMapDirectionInnerText = document.createElement("p");
		mapSectionContentMapDirection.setAttribute("name",dir1[q]);
		mapSectionContentMapDirectionInner.setAttribute("name","map");
		if (dir1[q] == "Left") {
			mapSectionContentMapDirectionInnerText.innerText = "⮜";
			mapSectionContentMapOuter.appendChild(mapSectionContentMapDirection);
		}
		else if (dir1[q] == "Top") {
			mapSectionContentMapDirectionInnerText.innerText = "⮝";
			mapSectionContentMapOuter2.appendChild(mapSectionContentMapDirection);
		}
		mapSectionContentMapDirection.appendChild(mapSectionContentMapDirectionInner);
		mapSectionContentMapDirectionInner.appendChild(mapSectionContentMapDirectionInnerText);
		mapSectionContentMapDirectionInner.addEventListener("click", dataRedirect);
		mapSectionContentMapDirectionInner.setAttribute("function","dataRedirect");
	}


	mapSectionContentMapOuter.appendChild(mapSectionContentMapOuter2);



	



	mapSectionContentMapOuter2.appendChild(mapSectionContentMapInner);
	mapSectionContentMapInner.appendChild(mapSectionContentMapInner2);
	mapSectionContentMapInner2.appendChild(mapSectionContentMapImg);
	mapSectionContentMapInner2.appendChild(mapSectionContentMap);
	mapSectionContentMapInner.appendChild(mapSectionContentMapZoomReset);
	mapSectionContentMapZoomReset.appendChild(mapSectionContentMapZoomResetText);
	mapSectionContentMapInner.appendChild(mapSectionContentMapZoomIn);
	mapSectionContentMapZoomIn.appendChild(mapSectionContentMapZoomInText);
	mapSectionContentMapInner.appendChild(mapSectionContentMapFullscreen);
	mapSectionContentMapFullscreen.appendChild(mapSectionContentMapFullscreenText);
	mapSectionContentMapInner.appendChild(mapSectionContentMapPause);
	mapSectionContentMapPause.appendChild(mapSectionContentMapPauseText);





	mapSectionListOptionsSearch.addEventListener("keyup", function() {search("Map");});
	mapSectionListOptionsSearchExit.addEventListener("click", function() {exitSearch("Map");});
	mapSectionContentMapInner2.addEventListener("mousedown",function(event){if(event.button === 1){fullscreenIMG([mapSectionContentMapImg],0)}});

	mapSectionContentMapFullscreen.addEventListener("click", function(){fullscreenIMG([mapSectionContentMapImg],0)})

	mapSectionContentMapInner2.setAttribute("data-scale","1.5");
	mapSectionContentMapInner2.style.transitionDuration = "1s";
	mapSectionContentMapInner2.style.transitionProperty = "transform";
	

	mapSectionContentMapInner2.addEventListener("click", function() {zoom(mapSectionContentMapInner2,"pause",undefined)});
	mapSectionContentMapZoomIn.addEventListener("click",function() {zoom(mapSectionContentMapInner2,"in",false)});
	mapSectionContentMapZoomReset.addEventListener("click",function() {zoom(mapSectionContentMapInner2,"out",true)});
	mapSectionContentMapInner2.addEventListener("wheel",function(event){var delta = event.deltaY.toString();if(delta.includes("-")){zoom(mapSectionContentMapInner2,"in",false)}else if(!delta.includes("-")){zoom(mapSectionContentMapInner2,"out",true)}});
	mapSectionContentMapInner2.addEventListener("mouseleave", function() {zoom(mapSectionContentMapInner2,"out",undefined)});
	mapSectionContentMapInner2.addEventListener("mouseenter", function() {zoom(mapSectionContentMapInner2,"in",undefined)});
	mapSectionContentMapInner2.addEventListener("mousemove", function() {zoom(mapSectionContentMapInner2,"pan",undefined)});




	var dir2 = ["Bottom","Right"];
	for(var q = 0; q < dir2.length; q++) {
		var mapSectionContentMapDirection = document.createElement("span");
		var mapSectionContentMapDirectionInner = document.createElement("figure");
		var mapSectionContentMapDirectionInnerText = document.createElement("p");
		mapSectionContentMapDirection.setAttribute("name",dir2[q]);
		mapSectionContentMapDirectionInner.setAttribute("name","map");
		if (dir2[q] == "Bottom") {
			mapSectionContentMapDirectionInnerText.innerText = "⮟";
			mapSectionContentMapOuter2.appendChild(mapSectionContentMapDirection);
		}
		else if (dir2[q] == "Right") {
			mapSectionContentMapDirectionInnerText.innerText = "⮞";
			mapSectionContentMapOuter.appendChild(mapSectionContentMapDirection);
		}
		mapSectionContentMapDirection.appendChild(mapSectionContentMapDirectionInner);
		mapSectionContentMapDirectionInner.appendChild(mapSectionContentMapDirectionInnerText);
		mapSectionContentMapDirectionInner.addEventListener("click", dataRedirect);
		mapSectionContentMapDirectionInner.setAttribute("function","dataRedirect");
	}









    var mapSectionHeaderGame = document.createElement("span");
    var mapSectionHeaderGameImage = document.createElement("img");
    mapSectionHeaderGameImage.src = "./media/Images/Misc/Title/Text/"+GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "")+".png";
    mapSectionHeaderGameImage.setAttribute("onerror","this.display='none'");
    mapSectionHeader.appendChild(mapSectionHeaderGame);
    mapSectionHeaderGame.appendChild(mapSectionHeaderGameImage);

	var mapSectionContentAreaNavigation = document.createElement("div");
	mapSectionContentAreaNavigation.setAttribute("name","navigation");
	mapSectionContent.appendChild(mapSectionContentAreaNavigation);
	var mapSectionContentAreaOuter = document.createElement("div");
	var mapSectionContentArea = document.createElement("span");
	mapSectionContentAreaNavigation.appendChild(mapSectionContentAreaOuter);
	mapSectionContentAreaOuter.appendChild(mapSectionContentArea);
	var mapSectionContentAreaContent = document.createElement("span");
	var mapSectionContentAreaTitle = document.createElement("h5");
	mapSectionContentAreaTitle.innerText = "Sub Area/Location";
	mapSectionContentArea.appendChild(mapSectionContentAreaContent);
	mapSectionContentAreaContent.appendChild(mapSectionContentAreaTitle);
	var mapSectionContentNavigationOuter = document.createElement("div");
	var mapSectionContentNavigation = document.createElement("span");
	var mapSectionContentNavigationContent = document.createElement("span");
	var mapSectionContentNavigationTitle = document.createElement("h5");
	mapSectionContentNavigationTitle.innerText = "Required for Navigation";
	mapSectionContentAreaNavigation.appendChild(mapSectionContentNavigationOuter);
	mapSectionContentNavigationOuter.appendChild(mapSectionContentNavigation);
	mapSectionContentNavigation.appendChild(mapSectionContentNavigationContent);
	mapSectionContentNavigationContent.appendChild(mapSectionContentNavigationTitle);
	mapOuter.appendChild(mapSectionSidebar);
	var mapSectionSidebarDescription = document.createElement("div");

	mapSectionSidebar.appendChild(mapSectionSidebarDescription);

	var DescriptionSelector = document.createElement("div");
	mapSectionSidebarDescription.appendChild(DescriptionSelector);

	var mapSectionSidebarDescriptionOview = document.createElement("div");

	mapSectionSidebarDescriptionOview.setAttribute("name", "overview");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionOview);

	var mapSectionSidebarDescriptionOviewHeader = document.createElement("span");
	var mapSectionSidebarDescriptionOviewHeaderText = document.createElement("h6");
	mapSectionSidebarDescriptionOview.appendChild(mapSectionSidebarDescriptionOviewHeader);
	mapSectionSidebarDescriptionOviewHeader.appendChild(mapSectionSidebarDescriptionOviewHeaderText);

	var mapSectionSidebarDescriptionOviewSelectorOuter = document.createElement("div");
	mapSectionSidebarDescriptionOview.appendChild(mapSectionSidebarDescriptionOviewSelectorOuter);

	var mapSectionSidebarDescriptionOviewButtonLeft = document.createElement("span");
	var mapSectionSidebarDescriptionOviewButtonLeftButton = document.createElement("figure");
	var mapSectionSidebarDescriptionOviewButtonLeftButtonText = document.createElement("h3");
	mapSectionSidebarDescriptionOviewButtonLeftButtonText.innerText = "‹";
	mapSectionSidebarDescriptionOviewButtonLeftButton.setAttribute("value",0);
	mapSectionSidebarDescriptionOviewSelectorOuter.appendChild(mapSectionSidebarDescriptionOviewButtonLeft);
	mapSectionSidebarDescriptionOviewButtonLeft.appendChild(mapSectionSidebarDescriptionOviewButtonLeftButton);
	mapSectionSidebarDescriptionOviewButtonLeftButton.appendChild(mapSectionSidebarDescriptionOviewButtonLeftButtonText);
	mapSectionSidebarDescriptionOviewButtonLeftButton.addEventListener("click", function() {overviewMove("left");});

	var mapSectionSidebarDescriptionOviewSelector = document.createElement("ul");
	mapSectionSidebarDescriptionOviewSelector.addEventListener("wheel",function(event){var delta = event.deltaY.toString();if(delta.includes("-")){overviewMove("left")}else if(!delta.includes("-")){overviewMove("right")}});
	mapSectionSidebarDescriptionOviewSelectorOuter.appendChild(mapSectionSidebarDescriptionOviewSelector);

	var mapSectionSidebarDescriptionOviewButtonRight = document.createElement("span");
	var mapSectionSidebarDescriptionOviewButtonRightButton = document.createElement("figure");
	var mapSectionSidebarDescriptionOviewButtonRightButtonText = document.createElement("h3");
	mapSectionSidebarDescriptionOviewButtonRightButtonText.innerText = "›";
	mapSectionSidebarDescriptionOviewButtonRightButton.setAttribute("value",0);
	mapSectionSidebarDescriptionOviewSelectorOuter.appendChild(mapSectionSidebarDescriptionOviewButtonRight);
	mapSectionSidebarDescriptionOviewButtonRight.appendChild(mapSectionSidebarDescriptionOviewButtonRightButton);
	mapSectionSidebarDescriptionOviewButtonRightButton.appendChild(mapSectionSidebarDescriptionOviewButtonRightButtonText);


	
	mapSectionSidebarDescriptionOviewButtonRightButton.addEventListener("click", function() {overviewMove("right");});

	var mapSectionSidebarDescriptionOviewDescription = document.createElement("span");

	mapSectionSidebarDescriptionOview.appendChild(mapSectionSidebarDescriptionOviewDescription);




	var mapSectionSidebarDescriptionPok = document.createElement("div");
	var mapSectionSidebarDescriptionPokHead = document.createElement("span");
	var mapSectionSidebarDescriptionPokHeadText = document.createElement("h5");

	mapSectionSidebarDescriptionPok.setAttribute("name", "pokémon");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionPok);
	mapSectionSidebarDescriptionPok.appendChild(mapSectionSidebarDescriptionPokHead);
	mapSectionSidebarDescriptionPokHead.appendChild(mapSectionSidebarDescriptionPokHeadText);

	var mapSectionSidebarDescriptionItem = document.createElement("div");
	var mapSectionSidebarDescriptionItemHead = document.createElement("span");
	var mapSectionSidebarDescriptionItemHeadText = document.createElement("h5");

	mapSectionSidebarDescriptionItem.setAttribute("name", "items");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionItem);
	mapSectionSidebarDescriptionItem.appendChild(mapSectionSidebarDescriptionItemHead);
	mapSectionSidebarDescriptionItemHead.appendChild(mapSectionSidebarDescriptionItemHeadText);


	var mapSectionSidebarDescriptionShop = document.createElement("div");
	var mapSectionSidebarDescriptionShopHead = document.createElement("span");
	var mapSectionSidebarDescriptionShopHeadText = document.createElement("h5");

	mapSectionSidebarDescriptionShop.setAttribute("name", "shop");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionShop);
	mapSectionSidebarDescriptionShop.appendChild(mapSectionSidebarDescriptionShopHead);
	mapSectionSidebarDescriptionShopHead.appendChild(mapSectionSidebarDescriptionShopHeadText);


	var mapSectionSidebarDescriptionTrainer = document.createElement("div");

	mapSectionSidebarDescriptionTrainer.setAttribute("name", "trainers");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionTrainer);


	var mapSectionSidebarDescriptionTutor = document.createElement("div");

	mapSectionSidebarDescriptionTutor.setAttribute("name", "movetutor");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionTutor);

	var mapSectionListOptionsOuter = document.createElement("div");
	var mapSectionListOptions = document.createElement("ol");

	mapSectionListOptionsOuter.setAttribute("name", "0");
	mapSectionList.appendChild(mapSectionListOptionsOuter);
	mapSectionListOptionsOuter.appendChild(mapSectionListOptions);
	for(var q = 0; q < finaldataLocation.length; q++) {
		var mapSectionListOptionsInput = document.createElement("input");
		var mapSectionListOptionsLabel = document.createElement("label");
		var mapSectionListOptionsText = document.createElement("p");
		mapSectionListOptionsInput.setAttribute("type", "radio");
		mapSectionListOptionsInput.setAttribute("name", "map-options");
		mapSectionListOptionsInput.setAttribute("id", "map-options-"+q);
		mapSectionListOptionsInput.setAttribute("autocomplete", "off");
		mapSectionListOptionsInput.value = q;
		mapSectionListOptionsLabel.setAttribute("for", "map-options-"+q);
		mapSectionListOptionsLabel.setAttribute("type","medium");
		mapSectionListOptionsLabel.setAttribute("data-name", finaldataLocation[q]["Location"].toLowerCase());
		mapSectionListOptionsLabel.setAttribute("data-title", finaldataLocation[q]["Location"].toLowerCase());
		var poi = [];
		for(var u = 0; u < finaldataLocationPointOfInterest.length; u++) {
			if (getApplicable(finaldataLocationPointOfInterest[u]["Game"])) {
				if (finaldataLocationPointOfInterest[u]["Location"] == finaldataLocation[q]["Location"]) {
					poi.push(finaldataLocationPointOfInterest[u]["Point of Interest"]);
				}
			}
		}
		if (poi.length > 0) {
			mapSectionListOptionsLabel.setAttribute("data-search-pointofinterest",poi.join(",").toLowerCase());
		}
		else {
			mapSectionListOptionsLabel.setAttribute("data-search-pointofinterest","none");
		}


		var nav = [];
		for(var u = 0; u < finaldataLocationNavigation.length; u++) {
			if (finaldataLocationNavigation[u][JSONPath_LocationNavigation+"_Name"] == finaldataLocation[q]["Location"]) {
				nav.push(finaldataLocationNavigation[u][JSONPath_LocationNavigation+"_Navigation"]);
			}
		}
		if (nav.length > 0) {
			mapSectionListOptionsLabel.setAttribute("data-search-navigation",nav.join(",").toLowerCase());
		}
		else {
			mapSectionListOptionsLabel.setAttribute("data-search-navigation","none");
		}

		mapSectionListOptionsText.innerText = finaldataLocation[q]["Location"];
		mapSectionListOptions.appendChild(mapSectionListOptionsInput);
		mapSectionListOptions.appendChild(mapSectionListOptionsLabel);
		mapSectionListOptionsLabel.appendChild(mapSectionListOptionsText);
		mapSectionListOptionsInput.addEventListener("click", mapOptionsSelector);
		mapSectionListOptionsLabel.setAttribute("tabindex",q+10);
		mapSectionListOptionsLabel.addEventListener("keyup",function(event){if(event.which === 13){if(event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;mapOptionsSelector(event.target.previousElementSibling.value);}}});
	}

	var searchLis = document.querySelectorAll("#contain > div#map > section[name='list'] ol > label");
    searchMapAttributes = [];
    for(q = 0; q < searchLis.length; q++) {
        for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchMapAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchMapAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }

    for(q = 0; q < searchMapAttributes.length; q++) {
        searchMapAttributes[q] = searchMapAttributes[q].replaceAll("data-search-","")
    }
	


	






	mapSectionList.setAttribute("name","list");
	mapSectionHeader.setAttribute("name","header");
	mapSectionContent.setAttribute("name","content");
	mapSectionSidebar.setAttribute("name","sidebar");









	function mapOptionsSelector(i) {
		var i;
		if (this.value != undefined) {
			i = this.value;
		}
		var location = finaldataLocation[i]["Location"];
		var trainers = getLocationTrainers(location);
		var shops = [];
		var items = [];
		var poks = [];
		var tutors = [];
		var shop1 = [];
		var shop2 = [];
		items = getLocationItems(location);
		poks = getLocationPokémon(location);
		tutors = getTutorData(location,"Location");
		shop1 = returnAppArrData(finaldataLocationPokémonShops,"Location",location);
		shop2 = returnAppArrData(finaldataLocationItemsShops,"Location",location);
		for(var q = 0; q < shop1.length; q++) {
			shops.push(shop1[q]);
		}
		for(var q = 0; q < shop2.length; q++) {
			shops.push(shop2[q]);
		}




		var mapImg = document.querySelector("#contain > div#map section[name='content'] *[name='map'] img[usemap]");

		if (mapImg.classList.contains("mapify")) {
			if (mapImg.naturalWidth == 0) {
				mapImg.addEventListener("load", event => {
					mapBlink(mapSectionContentMapOuter,[location]);
				});
			}
			else {
				mapBlink(mapSectionContentMapOuter,[location]);
			}	
		}

	

		

		

		var mapDescriptionTitles = ["Overview","Pokémon", "Items", "Shop", "Trainers", "Move Tutor"];

		if (poks.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Pokémon"));
		}
		if (items.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Items"));
		}
		if (shops.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Shop"));
		}
		if (trainers.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Trainers"));
		}
		if (tutors.length == 0) {
			mapDescriptionTitles = mapDescriptionTitles.filter((v) => !v.includes("Move Tutor"));
		}

		var spans = DescriptionSelector.querySelectorAll(":scope span");
		for(var q = 0; q < spans.length; q++) {
			spans[q].remove();
		}

		var DescriptionSelectorUp = document.createElement("span");
		DescriptionSelector.appendChild(DescriptionSelectorUp);

		if (mapDescriptionTitles.length > 1) {
			var DescriptionSelectorDown = document.createElement("span");
			DescriptionSelector.appendChild(DescriptionSelectorDown);
		}

		for(var q = 0; q < mapDescriptionTitles.length; q++) {
			var DescriptionSelectorInput = document.createElement("input");
			var DescriptionSelectorLabel = document.createElement("label");

			DescriptionSelectorInput.setAttribute("type", "radio");
			DescriptionSelectorInput.setAttribute("name", "map-description-selector");
			DescriptionSelectorInput.setAttribute("id", "map-description-selector-"+q);
			DescriptionSelectorInput.setAttribute("autocomplete", "off");
			DescriptionSelectorInput.setAttribute("value", mapDescriptionTitles[q].replaceAll(" ","").toLowerCase());
			DescriptionSelectorLabel.setAttribute("for", "map-description-selector-"+q);
	

			if (q == 0) {
				var DescriptionSelectorLabelText = document.createElement("h6");
				DescriptionSelectorLabelText.innerText = mapDescriptionTitles[q];

				DescriptionSelectorUp.appendChild(DescriptionSelectorInput);
				DescriptionSelectorUp.appendChild(DescriptionSelectorLabel);
				DescriptionSelectorLabelText.innerText = location;
				DescriptionSelectorInput.setAttribute("checked","")
			}
			else {
				var DescriptionSelectorLabelText = document.createElement("p");
				DescriptionSelectorLabelText.innerText = mapDescriptionTitles[q];
				DescriptionSelectorDown.appendChild(DescriptionSelectorInput);
				DescriptionSelectorDown.appendChild(DescriptionSelectorLabel);
			}

			DescriptionSelectorLabel.appendChild(DescriptionSelectorLabelText);
			DescriptionSelectorInput.addEventListener("click", mapDescriptionSelector);	  
		}

		
		var descs = mapSectionSidebarDescriptionOviewDescription.querySelectorAll(":scope > *");
		for(var q = 0; q < descs.length; q++) {
			descs[q].remove();
		}

		
		var desc = [];
		for(var q = 0; q < finaldataLocationDescription.length; q++) {
			if (getApplicable(finaldataLocationDescription[q]["Game"])) {
				if (finaldataLocationDescription[q]["Location"] == location) {
					desc.push(finaldataLocationDescription[q]["Description"]);
				}
			}
		}

		for(var q = 0; q < desc.length; q++) {
			var mapSectionSidebarDescriptionOviewDescriptionText = document.createElement("p");
			mapSectionSidebarDescriptionOviewDescriptionText.innerText = desc[q];
			mapSectionSidebarDescriptionOviewDescription.appendChild(mapSectionSidebarDescriptionOviewDescriptionText);
		}

		var poi = [];
		for(var q = 0; q < finaldataLocationPointOfInterest.length; q++) {
			if (getApplicable(finaldataLocationPointOfInterest[q]["Game"])) {
				if (finaldataLocationPointOfInterest[q]["Location"] == location) {
					var areadesc = [];
					var pointdesc = [];
					if (finaldataLocationPointOfInterest[q]["Area Description"] != undefined) {
						areadesc.push(finaldataLocationPointOfInterest[q]["Area Description"]);
					}
					if (finaldataLocationPointOfInterest[q]["Point Description"] != undefined) {
						pointdesc.push(finaldataLocationPointOfInterest[q]["Point Description"]);
					}

					var obj = new Object();
					obj["Header"] = finaldataLocationPointOfInterest[q]["Point of Interest"];
					if (areadesc.length > 0) {
						obj["Area Description"] = areadesc.join("\n");
					}
					if (pointdesc.length > 0) {
						obj["Point Description"] = pointdesc.join("\n");
					}
					poi.push(obj);
				}
			}
		}

		for(var q = 0; q < poi.length; q++) {
			if (poi[q]["Point Description"] != undefined) {
				var description = [];
				if (poi[q]["Area Description"] != undefined) {
					description.push(poi[q]["Area Description"]);
				}
				description.push(poi[q]["Point Description"]);

				var span = document.createElement("span");
				var header = document.createElement("h5");
				var desc = document.createElement("p");
				header.innerText = poi[q]["Header"];
				desc.innerHTML = description.join("<br>");
				mapSectionSidebarDescriptionOviewDescription.appendChild(span)
				span.appendChild(header)
				span.appendChild(desc)
			}
		}




		var imgs = mapSectionSidebarDescriptionOviewSelector.querySelectorAll(":scope > span");
		for (var q = 0; q < imgs.length; q++) {
			imgs[q].remove();
		}


		mapSectionSidebarDescriptionOviewHeaderText.innerText = "";
		mapSectionSidebarDescriptionOviewSelector.style.removeProperty("transform");
		mapSectionSidebarDescriptionOviewButtonLeftButton.setAttribute("value",0);
		mapSectionSidebarDescriptionOviewButtonRightButton.setAttribute("value",0);



		var loadLocation;
		var loadArea;
		var loadImages = [];

		for (var q = 0; q < tempLoadImages.length; q++) {
			if (tempLoadImages[q].includes("_")) {
				loadLocation = tempLoadImages[q].split("_")[0];
				loadArea = tempLoadImages[q].replaceAll(loadLocation+"_","")
			}
			else {
				loadLocation = tempLoadImages[q];
			}
			if (loadLocation == location) {
				loadImages.push(tempLoadImages[q])
			}
		}

		for (var q = 0; q < loadImages.length; q++) {
			if (loadImages[q].includes("_")) {
				loadLocation = loadImages[q].split("_")[0];
				loadArea = loadImages[q].replaceAll(loadLocation+"_","")
			}
			else {
				loadLocation = loadImages[q];
				loadArea = undefined;
			}

			var mapSectionSidebarDescriptionOviewImageInner = document.createElement("li");
			var mapSectionSidebarDescriptionOviewImage = document.createElement("img");
			mapSectionSidebarDescriptionOviewImage.src = "./media/Images/Location/Load/"+MEDIAPath_LocationLoad+"/"+loadImages[q]+".png";
			mapSectionSidebarDescriptionOviewSelector.appendChild(mapSectionSidebarDescriptionOviewImageInner);
			mapSectionSidebarDescriptionOviewImageInner.appendChild(mapSectionSidebarDescriptionOviewImage);

			//mapSectionSidebarDescriptionOviewImage.setAttribute("onerror","this.parentElement.remove()")

			if (loadArea != undefined) {
				mapSectionSidebarDescriptionOviewImage.setAttribute("title",loadArea);
			}
			else {
				mapSectionSidebarDescriptionOviewImage.setAttribute("title",location);
			}

			if (q == 0) {
				mapSectionSidebarDescriptionOviewImageInner.classList.add("open")
				if (loadArea != undefined) {
					mapSectionSidebarDescriptionOviewHeaderText.innerText = loadArea;
				}
				else {
					mapSectionSidebarDescriptionOviewHeaderText.innerText = location;
				}
			}
		}





		var overviewLocation;
		var overviewArea;
		var overviewImages = [];

		for (var q = 0; q < tempOverviewImages.length; q++) {
			if (tempOverviewImages[q].includes("_")) {
				overviewLocation = tempOverviewImages[q].split("_")[0];
				overviewArea = tempOverviewImages[q].replaceAll(overviewLocation+"_","")
			}
			else {
				overviewLocation = tempOverviewImages[q];
			}
			if (overviewLocation == location) {
				overviewImages.push(tempOverviewImages[q])
			}
		}


		if (overviewImages.length <= 1) {
			mapSectionSidebarDescriptionOviewButtonRightButton.classList.add("last");
		}
		else {
			mapSectionSidebarDescriptionOviewButtonRightButton.classList.remove("last");
		}

	

		var lis = mapSectionSidebarDescriptionOviewSelector.querySelectorAll(":scope > li")
		for (var q = 0; q < lis.length; q++) {
			lis[q].remove();
		}


		for (var q = 0; q < overviewImages.length; q++) {
			if (overviewImages[q].includes("_")) {
				overviewLocation = overviewImages[q].split("_")[0];
				overviewArea = overviewImages[q].replaceAll(overviewLocation+"_","")
			}
			else {
				overviewLocation = overviewImages[q];
				overviewArea = undefined;
			}

			var mapSectionSidebarDescriptionOviewImageInner = document.createElement("li");
			var mapSectionSidebarDescriptionOviewImage = document.createElement("img");
			mapSectionSidebarDescriptionOviewImage.src = "./media/Images/Location/Overview/"+MEDIAPath_LocationOverview+"/"+overviewImages[q]+".png";
			mapSectionSidebarDescriptionOviewSelector.appendChild(mapSectionSidebarDescriptionOviewImageInner);
			mapSectionSidebarDescriptionOviewImageInner.appendChild(mapSectionSidebarDescriptionOviewImage);

			//mapSectionSidebarDescriptionOviewImage.setAttribute("onerror","this.parentElement.remove()")

			if (overviewArea != undefined) {
				mapSectionSidebarDescriptionOviewImage.setAttribute("title",overviewArea);
			}
			else {
				mapSectionSidebarDescriptionOviewImage.setAttribute("title",location);
			}

			if (q == 0) {
				mapSectionSidebarDescriptionOviewImageInner.classList.add("open")
				if (overviewArea != undefined) {
					mapSectionSidebarDescriptionOviewHeaderText.innerText = overviewArea;
				}
				else {
					mapSectionSidebarDescriptionOviewHeaderText.innerText = location;
				}
			}
		}









		var locimgs = mapSectionSidebarDescriptionOviewSelector.querySelectorAll(":scope img");
		var buttons = mapSectionSidebarDescriptionOviewSelectorOuter.querySelectorAll(":scope figure");
		for (var q = 0; q < locimgs.length; q++) {
			locimgs[q].parentElement.setAttribute("name",q);
			locimgs[q].addEventListener("mousedown", function(event) { if(event.button === 0 || event.button === 1) {fullscreenIMG(locimgs,buttons[0].getAttribute("value"))};});
		}


		for(var q = 0; q < shops.length; q++) {
			var arr = [];
			if (shops[q]["Shop"] != undefined) {
				arr.push(shops[q]["Shop"]);
			}
			if (shops[q]["Area"] != undefined) {
				arr.push(shops[q]["Area"]);
			}
			if (shops[q]["Title"] != undefined) {
				arr.push(shops[q]["Title"]);
			}

			if (arr.length == 0) {
				arr.push("a");
			}

			shops[q]["Sort"] = arr.join("<br>");
		}


		shops = sortObjectArray(shops,"Sort",true);

		for(var q = 0; q < shops.length; q++) {
			if (shops[q]["Sort"] == "a") {
				shops[q]["Sort"] = location;
			}
		}

		var shopArea = [];
		for(var q = 0; q < shops.length; q++) {
			shopArea.push(shops[q]["Sort"]);
		}
		shopArea = [...new Set(shopArea)];

		var uls = mapSectionSidebarDescriptionShop.querySelectorAll(":scope > ul");
		for(var q = 0; q < uls.length; q++) {
			uls[q].remove();
		}

		for(var q = 0; q < shopArea.length; q++) {
			var ul;
			ul = mapSectionSidebarDescriptionShop.querySelector(':scope > ul[name="'+shopArea[q]+'"]');

			if (ul == null) {
				var mapSectionSidebarDescriptionShopUl = document.createElement("ul");
				mapSectionSidebarDescriptionShopUl.setAttribute("name",shopArea[q])
				mapSectionSidebarDescriptionShop.appendChild(mapSectionSidebarDescriptionShopUl);

				if (shopArea[q] != location) {
					var mapSectionSidebarDescriptionShopUlTitle = document.createElement("h4");
					mapSectionSidebarDescriptionShopUlTitle.innerHTML = shopArea[q];
					mapSectionSidebarDescriptionShopUl.appendChild(mapSectionSidebarDescriptionShopUlTitle);
				}
					
			}
			ul = mapSectionSidebarDescriptionShop.querySelector(':scope > ul[name="'+shopArea[q]+'"]');

			for(var u = 0; u < shops.length; u++) {
				if (shops[u]["Sort"] == shopArea[q]) {
					var quantity = shops[u]["Quantity"];

					var main = undefined;
					var type = undefined;

					if (shops[u]["Item"] != undefined) {
						main = shops[u]["Item"];
						type = "item";
					}
					else if (shops[u]["Pokémon"] != undefined) {
						main = shops[u]["Pokémon"];
						type = "pokémon";
					}

					var mapSectionSidebarDescriptionShopLi = document.createElement("li");

					var mapSectionSidebarDescriptionShopLiInput = document.createElement("input");
					mapSectionSidebarDescriptionShopLiInput.setAttribute("type","checkbox");
					mapSectionSidebarDescriptionShopLiInput.setAttribute("id","location-"+type+"-shop"+type);
					mapSectionSidebarDescriptionShopLiInput.setAttribute("name","location-"+type+"-shop"+getShopLocationInt(main,type,shops[u]["Cost"],location));
				
					mapSectionSidebarDescriptionShopLi.appendChild(mapSectionSidebarDescriptionShopLiInput);
					mapSectionSidebarDescriptionShopLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})


					var mapSectionSidebarDescriptionShopIconOuter = document.createElement("span");
					ul.appendChild(mapSectionSidebarDescriptionShopLi);
					mapSectionSidebarDescriptionShopLi.appendChild(mapSectionSidebarDescriptionShopIconOuter);





					if (type == "item") {
						mapSectionSidebarDescriptionShopIconOuter.setAttribute("name","item");
						mapSectionSidebarDescriptionShopIconOuter.setAttribute("value",main)
						mapSectionSidebarDescriptionShopIconOuter.addEventListener("click",dataRedirect);
						mapSectionSidebarDescriptionShopIconOuter.setAttribute("function","dataRedirect");
					}
					else if (type == "pokémon") {
						mapSectionSidebarDescriptionShopIconOuter.setAttribute("value",getPokémonInt(main))
						mapSectionSidebarDescriptionShopIconOuter.addEventListener("click",modalData);
						mapSectionSidebarDescriptionShopIconOuter.setAttribute("function","modalData");
					}

					if (quantity == undefined) {
						quantity = 1;
					}
					if (quantity > 10) {
						quantity = 10;
					}


					if (shops[u]["Level"] != undefined) {
						var mapSectionSidebarDescriptionShopTitle = document.createElement("small");
						mapSectionSidebarDescriptionShopTitle.innerText = "Lv. "+shops[u]["Level"];
						mapSectionSidebarDescriptionShopIconOuter.appendChild(mapSectionSidebarDescriptionShopTitle);
					}

					var mapSectionSidebarDescriptionShopIconInner = document.createElement("span");
					mapSectionSidebarDescriptionShopIconOuter.appendChild(mapSectionSidebarDescriptionShopIconInner);

					for(var y = 0; y < quantity; y++) {
						var mapSectionSidebarDescriptionShopIcon = document.createElement("img");
						if (type == "item") {
							mapSectionSidebarDescriptionShopIcon.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(shops[u]["Item"])+".png";
							mapSectionSidebarDescriptionShopIcon.setAttribute("onerror", "this.style.display='none';");
						}
						else if (type == "pokémon") {
							mapSectionSidebarDescriptionShopIcon.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(main),"Box")+".png";
							mapSectionSidebarDescriptionShopIcon.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
						}
						mapSectionSidebarDescriptionShopIconInner.appendChild(mapSectionSidebarDescriptionShopIcon);
					}

					if (quantity > 1) {
						mapSectionSidebarDescriptionShopIconOuter.title = shops[u]["Quantity"]+"x "+main;
					}
					else {
						mapSectionSidebarDescriptionShopIconOuter.title = main;
					}

	

					var mapSectionSidebarDescriptionShopText = document.createElement("small");
					mapSectionSidebarDescriptionShopText.innerText = main;
					if (shops[u]["Citeria"] != undefined) {
						mapSectionSidebarDescriptionShopText.setAttribute("title",shops[u]["Citeria"]);
					}

					if (getMachineMove(main) != undefined) {
						mapSectionSidebarDescriptionShopText.innerText += " ("+getMachineMove(main)+")";
					}
		
					mapSectionSidebarDescriptionShopIconOuter.appendChild(mapSectionSidebarDescriptionShopText);
		
					

					var mapSectionSidebarCostShopCostOuter = document.createElement("span");
					mapSectionSidebarCostShopCostOuter.setAttribute("name","Cost");
					mapSectionSidebarDescriptionShopLi.appendChild(mapSectionSidebarCostShopCostOuter);
					var mapSectionSidebarCostShopCostTitle = document.createElement("h6");
					var mapSectionSidebarCostShopCost = document.createElement("small");

					if (shops[u]["Currency"].includes("Fossil") || shops[u]["Currency"].includes("Old Amber")) {
						mapSectionSidebarCostShopCostTitle.innerText = "Revive:";
					}
					else {
						mapSectionSidebarCostShopCostTitle.innerText = "Cost:";
					}
				
					var currency = [shops[u]["Currency"]];
					var cost = shops[u]["Cost"];

					if (cost == undefined) {
						if (quantity != undefined) {
							cost = quantity+"x";
						}
						else {
							cost = "1x";
						}
					}

					if (currency[0].includes(",")) {
						currency = currency[0].split(",");
					}


					for(var r = 0; r < currency.length; r++) {
						if (getItemIcon(currency[r]) != undefined) {
							currency[r] = "<img src='./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(currency[r])+".png' onerror='this.style.display=´none´'; onclick='dataRedirect()' name='item' title='"+getItemIcon(currency[r])+"'/>";
						}
						else {
							if (currency[r] == "Pokémon Dollar") {
								currency[r] = currency[r].replaceAll("Pokémon Dollar",'<img src="./media/Images/Misc/Currency/VIII/Pokémon Dollar.png" title="Pokémon Dollar" />');
							}
							else {
								currency[r] = "<span title='"+currency[r]+"'>"+currency[r].replace(/[^A-Z]+/g,"")+"</span>";
							}
						}
					}
				
					if(cost == "1x") {
						cost = "";
					}
					else {
						cost = numFormat(cost);
					}

		
					mapSectionSidebarCostShopCost.innerHTML = cost+currency.join("");
					

					mapSectionSidebarCostShopCostOuter.appendChild(mapSectionSidebarCostShopCostTitle);
					mapSectionSidebarCostShopCostOuter.appendChild(mapSectionSidebarCostShopCost);

					var imgs = mapSectionSidebarCostShopCost.querySelectorAll(":scope > img:not([title='Pokémon Dollar'])");

					for (var r = 0; r < imgs.length; r++) {
						mapSectionSidebarCostShopCostOuter.appendChild(imgs[r])
					}



				}
			}
		}


	
	
		for(var q = 0; q < items.length; q++) {
			if (items[q]["Area"] != undefined && items[q]["Title"] != undefined) {
				items[q]["Sort"] = items[q]["Area"]+" "+items[q]["Title"];
			}
			else if (items[q]["Area"] == undefined && items[q]["Title"] != undefined) {
				items[q]["Sort"] = items[q]["Title"];
			}
			else if (items[q]["Area"] != undefined && items[q]["Title"] == undefined) {
				items[q]["Sort"] = items[q]["Area"];
			}
			else {
				items[q]["Sort"] = "a";
			}
		}


		items = sortObjectArray(items,"Sort",true);

		for(var q = 0; q < items.length; q++) {
			if (items[q]["Sort"] == "a") {
				items[q]["Sort"] = location;
			}
		}

		var itemArea = [];
		for(var q = 0; q < items.length; q++) {
			itemArea.push(items[q]["Sort"]);
		}
		itemArea = [...new Set(itemArea)];

		var uls = mapSectionSidebarDescriptionItem.querySelectorAll(":scope > ul");
		for(var q = 0; q < uls.length; q++) {
			uls[q].remove();
		}

		for(var q = 0; q < itemArea.length; q++) {
			var ul;
			ul = mapSectionSidebarDescriptionItem.querySelector(':scope > ul[name="'+itemArea[q]+'"]');

			if (ul == null) {
				var mapSectionSidebarDescriptionItemUl = document.createElement("ul");
				mapSectionSidebarDescriptionItemUl.setAttribute("name",itemArea[q])
				mapSectionSidebarDescriptionItem.appendChild(mapSectionSidebarDescriptionItemUl);

				if (itemArea[q] != location) {
					var mapSectionSidebarDescriptionItemUlTitle = document.createElement("h4");
					mapSectionSidebarDescriptionItemUlTitle.innerText = itemArea[q];
					mapSectionSidebarDescriptionItemUl.appendChild(mapSectionSidebarDescriptionItemUlTitle);
				}
					
			}
			ul = mapSectionSidebarDescriptionItem.querySelector(':scope > ul[name="'+itemArea[q]+'"]');

			for(var u = 0; u < items.length; u++) {
				if (items[u]["Sort"] == itemArea[q]) {
					var quantity = items[u]["Quantity"];

					var mapSectionSidebarDescriptionItemLi = document.createElement("li");

					var locint = getItemLocationInt(items[u]["Item"],items[u]["Description"],location);
					if (locint == undefined) {
						for(var r = 0; r < 10; r++) {
							var ran = getRandomInt(50000,51000);
							if (localStorage.getItem("location-item"+ran) == undefined) {
								locint = ran;
								break;
							}
						}
					}

					


					var mapSectionSidebarDescriptionItemLiInput = document.createElement("input");
					mapSectionSidebarDescriptionItemLiInput.setAttribute("type","checkbox");
					mapSectionSidebarDescriptionItemLiInput.setAttribute("id","location-item");
					mapSectionSidebarDescriptionItemLiInput.setAttribute("name","location-item"+locint);
					mapSectionSidebarDescriptionItemLi.appendChild(mapSectionSidebarDescriptionItemLiInput);
					mapSectionSidebarDescriptionItemLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})


					var mapSectionSidebarDescriptionItemIconOuter = document.createElement("span");
					mapSectionSidebarDescriptionItemIconOuter.setAttribute("name","item");
					mapSectionSidebarDescriptionItemIconOuter.setAttribute("value",items[u]["Item"])
					ul.appendChild(mapSectionSidebarDescriptionItemLi);
					mapSectionSidebarDescriptionItemLi.appendChild(mapSectionSidebarDescriptionItemIconOuter);
					mapSectionSidebarDescriptionItemIconOuter.addEventListener("click",dataRedirect);
					mapSectionSidebarDescriptionItemIconOuter.setAttribute("function","dataRedirect");

					if (quantity == undefined) {
						quantity = 1;
					}
					if (quantity > 10) {
						quantity = 10;
					}


					var mapSectionSidebarDescriptionItemIconInner = document.createElement("span");
					mapSectionSidebarDescriptionItemIconOuter.appendChild(mapSectionSidebarDescriptionItemIconInner);

					for(var y = 0; y < quantity; y++) {
						var mapSectionSidebarDescriptionItemIcon = document.createElement("img");
						mapSectionSidebarDescriptionItemIcon.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(items[u]["Item"])+".png";
						mapSectionSidebarDescriptionItemIcon.setAttribute("onerror", "this.style.display='none';");
						mapSectionSidebarDescriptionItemIconInner.appendChild(mapSectionSidebarDescriptionItemIcon);
					}

					if (quantity > 1) {
						mapSectionSidebarDescriptionItemIconOuter.title = items[u]["Quantity"]+"x "+items[u]["Item"];
					}
					else {
						mapSectionSidebarDescriptionItemIconOuter.title = items[u]["Item"];
					}

					if (items[u]["Hidden"] == "Hidden") {
						mapSectionSidebarDescriptionItemIconOuter.title += " (Hidden)";
						mapSectionSidebarDescriptionItemIconOuter.classList.add("hide");
					}


					var mapSectionSidebarDescriptionItemText = document.createElement("small");
					mapSectionSidebarDescriptionItemText.innerText = items[u]["Item"];

					if (getMachineMove(items[u]["Item"]) != undefined) {
						mapSectionSidebarDescriptionItemText.innerText += " ("+getMachineMove(items[u]["Item"])+")";
					}
		
					mapSectionSidebarDescriptionItemIconOuter.appendChild(mapSectionSidebarDescriptionItemText);
		

					var mapSectionSidebarDescriptionItemDescriptionOuter = document.createElement("span");
					mapSectionSidebarDescriptionItemDescriptionOuter.setAttribute("name","description");
					mapSectionSidebarDescriptionItemLi.appendChild(mapSectionSidebarDescriptionItemDescriptionOuter);
					var mapSectionSidebarDescriptionItemDescription = document.createElement("small");
					mapSectionSidebarDescriptionItemDescriptionOuter.appendChild(mapSectionSidebarDescriptionItemDescription);

					if (items[u]["Description"] != undefined) {
						mapSectionSidebarDescriptionItemDescription.innerText = items[u]["Description"];
					}
					else {
						mapSectionSidebarDescriptionItemDescription.innerText = "-";
					}

					var itemTime = "";
					var itemDay = [];
					var itemSeason = [];

					var itemTimeResult = [];
	
					if (items[u]["Time"] != undefined) {
						itemTime = items[u]["Time"];
					}

					if (items[u]["Day"] != undefined) {
						if (items[u]["Day"].includes(",")) {
							var daySplit = items[u]["Day"].split(",");
							for(var y = 0; y < daySplit.length; y++) {
								itemDay.push(daySplit[y]);
							}
						}
						else {
							itemDay.push(items[u]["Day"])
						}
					}

					if (items[u]["Season"] != undefined) {
						if (items[u]["Season"].includes(",")) {
							var seasonSplit = items[u]["Season"].split(",");
							for(var y = 0; y < seasonSplit.length; y++) {
								itemSeason.push(seasonSplit[y]);
							}
						}
						else {
							itemSeason.push(items[u]["Season"])
						}
						
					}


					for(var y = 0; y < itemSeason.length; y++) {
						itemTimeResult.push(itemSeason[y]);
					}

					for(var y = 0; y < itemDay.length; y++) {
						itemTimeResult.push(itemDay[y]);
					}

					itemTimeResult = itemTimeResult.map(i => "("+i+" "+itemTime+")");
					itemTimeResult = itemTimeResult.map(i => i.replaceAll(" )",")"));
					var itemTimeResultFinish = "";

					for(var y = 0; y < itemTimeResult.length; y++) {
						itemTimeResultFinish += " "+itemTimeResult[y];
					}
					itemTimeResultFinish = itemTimeResultFinish.replaceAll(") (",", ");
					itemTimeResultFinish = itemTimeResultFinish.replace(/,([^,]*)$/, ' and $1');


					mapSectionSidebarDescriptionItemDescription.innerText += itemTimeResultFinish;
					
			

					if (items[u]["Field"] != undefined) {
						var mapSectionSidebarDescriptionItemRequirementOuter = document.createElement("span");
						var mapSectionSidebarDescriptionItemRequirementTitle = document.createElement("small");
						mapSectionSidebarDescriptionItemRequirementOuter.setAttribute("name","requirement");
						mapSectionSidebarDescriptionItemLi.appendChild(mapSectionSidebarDescriptionItemRequirementOuter);
						mapSectionSidebarDescriptionItemRequirementOuter.appendChild(mapSectionSidebarDescriptionItemRequirementTitle);

						mapSectionSidebarDescriptionItemRequirementTitle.innerText = "Requires:";


						if (items[u]["Field"].includes("/")) {
							for(var y = 0; y < items[u]["Field"].split("/").length; y++) {
								var itemIcon;
								var itm;
								if (getMoveMachine(items[u]["Field"].split("/")[y]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(items[u]["Field"].split("/")[y]));
									itm = getMoveMachine(items[u]["Field"].split("/")[y]);
								}
								else if (getItemIcon(items[u]["Field"].split("/")[y]) != undefined) {
									itemIcon = getItemIcon(items[u]["Field"].split("/")[y]);
									itm = items[u]["Field"].split("/")[y];
								}

								var mapSectionSidebarDescriptionItemField = document.createElement("span");
								var mapSectionSidebarDescriptionItemFieldText = document.createElement("small");
								mapSectionSidebarDescriptionItemFieldText.innerText = items[u]["Field"].split("/")[y];
								mapSectionSidebarDescriptionItemRequirementOuter.appendChild(mapSectionSidebarDescriptionItemField);
								if (itemIcon != undefined) {
									var mapSectionSidebarDescriptionItemFieldImage = document.createElement("img");
									mapSectionSidebarDescriptionItemFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
									mapSectionSidebarDescriptionItemFieldImage.title = items[u]["Field"].split("/")[y];
									mapSectionSidebarDescriptionItemField.appendChild(mapSectionSidebarDescriptionItemFieldImage);
									mapSectionSidebarDescriptionItemField.setAttribute("name","item");
									mapSectionSidebarDescriptionItemField.setAttribute("value",itm);
									mapSectionSidebarDescriptionItemField.addEventListener("click",dataRedirect);
									mapSectionSidebarDescriptionItemField.setAttribute("function","dataRedirect");
								}
								mapSectionSidebarDescriptionItemField.appendChild(mapSectionSidebarDescriptionItemFieldText);
								if (y != items[u]["Field"].split("/").length - 1) {
									var mapSectionSidebarDescriptionItemFieldSpace = document.createElement("small");
									mapSectionSidebarDescriptionItemFieldSpace.innerText = " or ";
									mapSectionSidebarDescriptionItemRequirementOuter.appendChild(mapSectionSidebarDescriptionItemFieldSpace)
								}
							}
						}
						else if (items[u]["Field"].includes(",")) {
							for(var y = 0; y < items[u]["Field"].split(",").length; y++) {
								var itemIcon;
								var itm;
								if (getMoveMachine(items[u]["Field"].split(",")[y]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(items[u]["Field"].split(",")[y]));
									itm = getMoveMachine(items[u]["Field"].split(",")[y]);
								}
								else if (getItemIcon(items[u]["Field"].split(",")[y]) != undefined) {
									itemIcon = getItemIcon(items[u]["Field"].split(",")[y]);
									itm = items[u]["Field"].split(",")[y];
								}

								var mapSectionSidebarDescriptionItemField = document.createElement("span");
								var mapSectionSidebarDescriptionItemFieldText = document.createElement("small");
								mapSectionSidebarDescriptionItemFieldText.innerText = items[u]["Field"].split(",")[y];
								mapSectionSidebarDescriptionItemRequirementOuter.appendChild(mapSectionSidebarDescriptionItemField);
								if (itemIcon != undefined) {
									var mapSectionSidebarDescriptionItemFieldImage = document.createElement("img");
									mapSectionSidebarDescriptionItemFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
									mapSectionSidebarDescriptionItemFieldImage.title = items[u]["Field"].split(",")[y];
									mapSectionSidebarDescriptionItemField.appendChild(mapSectionSidebarDescriptionItemFieldImage);
	
									mapSectionSidebarDescriptionItemField.setAttribute("name","item");
									mapSectionSidebarDescriptionItemField.setAttribute("value",itm);
									mapSectionSidebarDescriptionItemField.addEventListener("click",dataRedirect);
									mapSectionSidebarDescriptionItemField.setAttribute("function","dataRedirect");
								}
								mapSectionSidebarDescriptionItemField.appendChild(mapSectionSidebarDescriptionItemFieldText);
							}
						}
						else {
							var itemIcon;
							var itm;
							if (getMoveMachine(items[u]["Field"]) != undefined) {
								itemIcon = getItemIcon(getMoveMachine(items[u]["Field"]));
								itm = getMoveMachine(items[u]["Field"]);
							}
							else if (getItemIcon(items[u]["Field"]) != undefined) {
								itemIcon = getItemIcon(items[u]["Field"]);
								itm = items[u]["Field"];
							}

							var mapSectionSidebarDescriptionItemField = document.createElement("span");
							var mapSectionSidebarDescriptionItemFieldText = document.createElement("small");
							mapSectionSidebarDescriptionItemFieldText.innerText = items[u]["Field"];
							mapSectionSidebarDescriptionItemRequirementOuter.appendChild(mapSectionSidebarDescriptionItemField);
							if (itemIcon != undefined) {
								var mapSectionSidebarDescriptionItemFieldImage = document.createElement("img");
								mapSectionSidebarDescriptionItemFieldImage.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+itemIcon+".png";
								mapSectionSidebarDescriptionItemFieldImage.title = items[u]["Field"];
								mapSectionSidebarDescriptionItemFieldImage.setAttribute("name","item");
								mapSectionSidebarDescriptionItemField.appendChild(mapSectionSidebarDescriptionItemFieldImage);

								mapSectionSidebarDescriptionItemField.setAttribute("name","item");
								mapSectionSidebarDescriptionItemField.setAttribute("value",itm);
								mapSectionSidebarDescriptionItemField.addEventListener("click",dataRedirect);
								mapSectionSidebarDescriptionItemField.setAttribute("function","dataRedirect");
							}
							mapSectionSidebarDescriptionItemField.appendChild(mapSectionSidebarDescriptionItemFieldText);

						}
					}

				}
			}
		}

		for(var q = 0; q < poks.length; q++) {
			var arr = [];
			if (poks[q]["Mechanic"] != undefined) {
				arr.push(poks[q]["Mechanic"]);
			}
			if (poks[q]["Area"] != undefined) {
				arr.push(poks[q]["Area"]);
			}
			if (poks[q]["Title"] != undefined) {
				arr.push(poks[q]["Title"]);
			}

			if (arr.length == 0) {
				arr.push("a");
			}

			poks[q]["Sort"] = arr.join("<br>");
		}


		poks = sortObjectArray(poks,"Sort",true);

		for(var q = 0; q < poks.length; q++) {
			if (poks[q]["Sort"] == "a") {
				poks[q]["Sort"] = location;
			}
		}
	
	
		var pokArea = [];
		for(var q = 0; q < poks.length; q++) {
			pokArea.push(poks[q]["Sort"]);
		}
		pokArea = [...new Set(pokArea)];
		

		var uls = mapSectionSidebarDescriptionPok.querySelectorAll(":scope > ul");
		for(var q = 0; q < uls.length; q++) {
			uls[q].remove();
		}

	
		for(var q = 0; q < pokArea.length; q++) {
			var ul;
			ul = mapSectionSidebarDescriptionPok.querySelector(':scope > ul[name="'+pokArea[q]+'"]');

			if (ul == null) {
				var mapSectionSidebarDescriptionPokUl = document.createElement("ul");
				mapSectionSidebarDescriptionPokUl.setAttribute("name",pokArea[q])
				mapSectionSidebarDescriptionPok.appendChild(mapSectionSidebarDescriptionPokUl);

				if (pokArea[q] != location) {
					var mapSectionSidebarDescriptionPokUlTitle = document.createElement("h4");
					mapSectionSidebarDescriptionPokUlTitle.innerHTML = pokArea[q];
					mapSectionSidebarDescriptionPokUl.appendChild(mapSectionSidebarDescriptionPokUlTitle);
				}
			}
			ul = mapSectionSidebarDescriptionPok.querySelector(':scope > ul[name="'+pokArea[q]+'"]');

			for(var u = 0; u < poks.length; u++) {
				if (poks[u]["Sort"] == pokArea[q]) {


					var mapSectionSidebarDescriptionPokLi = document.createElement("li");
					ul.appendChild(mapSectionSidebarDescriptionPokLi);

					var locint = getPokémonLocationInt(poks[u]["Pokémon"],poks[u]["Level"],poks[u]["Rate"],poks[u]["Tile"],poks[u]["Encounter"],poks[u]["Mechanic"],location);
					if (locint == undefined) {
						for(var r = 0; r < 10; r++) {
							var ran = getRandomInt(50000,51000);
							if (localStorage.getItem("location-pokémon"+ran) == undefined) {
								locint = ran;
								break;
							}
						}
					}

					var mapSectionSidebarDescriptionPokLiInput = document.createElement("input");
					mapSectionSidebarDescriptionPokLiInput.setAttribute("type","checkbox");
					mapSectionSidebarDescriptionPokLiInput.setAttribute("id","location-pokémon");
					mapSectionSidebarDescriptionPokLiInput.setAttribute("name","location-pokémon"+locint);
					mapSectionSidebarDescriptionPokLi.appendChild(mapSectionSidebarDescriptionPokLiInput);
					mapSectionSidebarDescriptionPokLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})


					var mapSectionSidebarDescriptionPokOuter = document.createElement("span");
					var mapSectionSidebarDescriptionPokLvl = document.createElement("span");
					var mapSectionSidebarDescriptionPokLvlText = document.createElement("small");
					var mapSectionSidebarDescriptionPokWrap = document.createElement("b");
					var mapSectionSidebarDescriptionPokIcon = document.createElement("img");
					var mapSectionSidebarDescriptionPokName = document.createElement("span");
					var mapSectionSidebarDescriptionPokNameText = document.createElement("small");
					mapSectionSidebarDescriptionPokOuter.setAttribute("name","pok");
					mapSectionSidebarDescriptionPokLvlText.innerText = "Lv. "+poks[u]["Level"];
					mapSectionSidebarDescriptionPokIcon.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(poks[u]["Pokémon"]),"Box")+".png";
					mapSectionSidebarDescriptionPokIcon.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
					mapSectionSidebarDescriptionPokWrap.setAttribute("value",getPokémonInt(poks[u]["Pokémon"]));
					mapSectionSidebarDescriptionPokNameText.innerText = poks[u]["Pokémon"];

					if (poks[u]["Note"] != undefined) {
						mapSectionSidebarDescriptionPokOuter.setAttribute("title",poks[u]["Note"]);
					}
					mapSectionSidebarDescriptionPokWrap.setAttribute("type","invert")

					mapSectionSidebarDescriptionPokLi.appendChild(mapSectionSidebarDescriptionPokOuter);
					mapSectionSidebarDescriptionPokOuter.appendChild(mapSectionSidebarDescriptionPokLvl);
					mapSectionSidebarDescriptionPokLvl.appendChild(mapSectionSidebarDescriptionPokLvlText);
					mapSectionSidebarDescriptionPokOuter.appendChild(mapSectionSidebarDescriptionPokWrap);
					mapSectionSidebarDescriptionPokWrap.appendChild(mapSectionSidebarDescriptionPokIcon);
					mapSectionSidebarDescriptionPokWrap.appendChild(mapSectionSidebarDescriptionPokName);
					mapSectionSidebarDescriptionPokName.appendChild(mapSectionSidebarDescriptionPokNameText);

					mapSectionSidebarDescriptionPokWrap.addEventListener("click",modalData);
					mapSectionSidebarDescriptionPokWrap.setAttribute("function","modalData");

					var mapSectionSidebarDescriptionPokRate = document.createElement("span");
					mapSectionSidebarDescriptionPokLi.appendChild(mapSectionSidebarDescriptionPokRate);

					if (poks[u]["Rate"] != undefined) {
						var mapSectionSidebarDescriptionPokRateText = document.createElement("h6");
						mapSectionSidebarDescriptionPokRate.setAttribute("name","rate")
						mapSectionSidebarDescriptionPokRateText.innerHTML = poks[u]["Rate"].replaceAll("mo:0%,","").replaceAll("mo:0%","").replaceAll("da:0%,","").replaceAll("da:0%","").replaceAll("ni:0%,","").replaceAll("ni:0%","").replaceAll("mo:",'<img src="./media/Images/Misc/FinalDex/Morning.png" title="Morning">').replaceAll("da:",'<img src="./media/Images/Misc/FinalDex/Day.png" title="Day">').replaceAll("ni:",'<img src="./media/Images/Misc/FinalDex/Night.png" title="Night">').replaceAll("sp:0%,",'').replaceAll("sp:0%",'').replaceAll("su:0%,",'').replaceAll("su:0%",'').replaceAll("au:0%,",'').replaceAll("au:0%",'').replaceAll("wi:0%,",'').replaceAll("wi:0%",'').replaceAll("sp:",'<pre name="spring">Spring</pre>').replaceAll("au:",'<pre name="autumn">Autumn</pre>').replaceAll("su:",'<pre name="summer">Summer</pre>').replaceAll("wi:",'<pre name="winter">Winter</pre>').replaceAll("mon:",'<pre name="monday">Monday</pre>').replaceAll("tue:",'<pre name="tuesday">Tuesday</pre>').replaceAll("wed:",'<pre name="wednesday">Wednesday</pre>').replaceAll("thu:",'<pre name="thursday">Thursday</pre>').replaceAll("fri:",'<pre name="friday">Friday</pre>').replaceAll("sat:",'<pre name="saturday">Saturday</pre>').replaceAll("sun:",'<pre name="sunday">Sunday</pre>').replaceAll("extremelyharshsunlight:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Extremely Harsh Sunlight.png" title="Extremely Harsh Sunlight">').replaceAll("hail:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Hail.png" title="Hail">').replaceAll("harshsunlight:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Harsh Sunlight.png" title="Harsh Sunlight">').replaceAll("heavyrain:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Heavy Rain.png" title="Heavy Rain">').replaceAll("rain:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Rain.png" title="Rain">').replaceAll("sandstorm:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Sandstorm.png" title="Sandstorm">').replaceAll("strongwinds:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Strong Winds.png" title="Strong Winds">').replaceAll("fog:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Fog.png" title="Fog">').replaceAll("cloudy:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Cloudy.png" title="Cloudy">').replaceAll("clear:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Clear.png" title="Clear">').replaceAll("blizzard:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Blizzard.png" title="Blizzard">').replaceAll("snow:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/Snow.png" title="Snow">').replaceAll("thunderstorm:",'<img src="./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"Thunderstorm/.png" title="Thunderstorm">').replaceAll("%,","%");
						mapSectionSidebarDescriptionPokRate.appendChild(mapSectionSidebarDescriptionPokRateText);
					}


					if (Allies) {

						if (poks[u]["Allies"] != undefined) {

							var mapSectionSidebarDescriptionPokAllies = document.createElement("span");
							var mapSectionSidebarDescriptionPokAlliesHeader = document.createElement("h6");
							mapSectionSidebarDescriptionPokAllies.setAttribute("name","allies");
							mapSectionSidebarDescriptionPokAlliesHeader.innerText = "Allies";
							mapSectionSidebarDescriptionPokLi.appendChild(mapSectionSidebarDescriptionPokAllies);
							mapSectionSidebarDescriptionPokAllies.appendChild(mapSectionSidebarDescriptionPokAlliesHeader);

							var ally = poks[u]["Allies"].replaceAll("extremelyharshsunlight:",'').replaceAll("hail:",'').replaceAll("harshsunlight:",'').replaceAll("heavyrain:",'').replaceAll("rain:",'').replaceAll("sandstorm:",'').replaceAll("strongwinds:",'').replaceAll("fog:",'').replaceAll("cloudy:",'').replaceAll("clear:",'').replaceAll("blizzard:",'').replaceAll("snow:",'').replaceAll("thunderstorm:",'');
							var allies = [ally];

							if (ally.includes(",")) {
								allies = ally.split(",");
							}

							for(var r = 0; r < allies.length; r++) {
								var mapSectionSidebarDescriptionPokAlliesIMG = document.createElement("img");
								mapSectionSidebarDescriptionPokAlliesIMG.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(getPokémonInt(allies[r]),"Box")+".png";
								mapSectionSidebarDescriptionPokAlliesIMG.title = allies[r];
								mapSectionSidebarDescriptionPokAlliesIMG.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
								mapSectionSidebarDescriptionPokAlliesIMG.setAttribute("value",getPokémonInt(allies[r]));
								mapSectionSidebarDescriptionPokAllies.appendChild(mapSectionSidebarDescriptionPokAlliesIMG);
								mapSectionSidebarDescriptionPokAlliesIMG.addEventListener("click",modalData);
								mapSectionSidebarDescriptionPokAlliesIMG.setAttribute("function","modalData");
							}
						}
					}

					var mapSectionSidebarDescriptionPokType = document.createElement("span");
					var mapSectionSidebarDescriptionPokTypeImgWrap = document.createElement("span");
					var mapSectionSidebarDescriptionPokTypeTxtWrap = document.createElement("span");
					mapSectionSidebarDescriptionPokType.setAttribute("name","encounter")


					mapSectionSidebarDescriptionPokLi.appendChild(mapSectionSidebarDescriptionPokType);
					mapSectionSidebarDescriptionPokType.appendChild(mapSectionSidebarDescriptionPokTypeImgWrap);
					mapSectionSidebarDescriptionPokType.appendChild(mapSectionSidebarDescriptionPokTypeTxtWrap);

		

	
					var encounters = [];
					// Encounter
					if (poks[u]["Encounter"] != undefined) {
						if (poks[u]["Encounter"].includes(",")) {
							encounters = poks[u]["Encounter"].split(",");
						}
						else {
							encounters = [poks[u]["Encounter"]];
						}
					}

					for(var r = 0; r < encounters.length; r++) {
						var mapSectionSidebarDescriptionPokTypeEncounterImg = document.createElement("img");
						var mapSectionSidebarDescriptionPokTypeEncounterText = document.createElement("small");

						var encounter = encounters[r];

						if (encounter.includes("Surfing")) {
							encounter = encounter+"_M"
						}
						else {
							encounter = encounter;
						}

						if (encounter != undefined) {
	
							
							if (encounter == "Static") {
								mapSectionSidebarDescriptionPokTypeEncounterImg.src = "./media/Images/Pokémon/Overworld/Front/Default/PNG/"+MEDIAPath_Encounter+"/"+getPokémonMediaPath(getPokémonInt(poks[u]["Pokémon"]),"Box")+".png";
								mapSectionSidebarDescriptionPokTypeEncounterImg.title = encounters[r]+"\n"+poks[u]["Pokémon"];
								mapSectionSidebarDescriptionPokTypeImgWrap.setAttribute("name","static");
								mapSectionSidebarDescriptionPokTypeImgWrap.setAttribute("value",getPokémonInt(poks[u]["Pokémon"]));
								mapSectionSidebarDescriptionPokTypeImgWrap.addEventListener("click",modalData);
								mapSectionSidebarDescriptionPokTypeImgWrap.setAttribute("function","modalData");
								mapSectionSidebarDescriptionPokTypeEncounterText.innerText = poks[u]["Pokémon"];
							}
							else {
								mapSectionSidebarDescriptionPokTypeEncounterImg.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+encounter+".png";
								mapSectionSidebarDescriptionPokTypeEncounterImg.title = encounters[r];
								mapSectionSidebarDescriptionPokTypeEncounterText.innerText = encounters[r];
							}
							if (poks[u]["Item"] != undefined) {
								if (poks[u]["Item"] == poks[u]["Encounter"]) {
									mapSectionSidebarDescriptionPokTypeEncounterImg.setAttribute("name","item");
									mapSectionSidebarDescriptionPokTypeEncounterImg.setAttribute("value",poks[u]["Item"]);
									mapSectionSidebarDescriptionPokTypeEncounterImg.addEventListener("click",dataRedirect);
									mapSectionSidebarDescriptionPokTypeEncounterImg.setAttribute("function","dataRedirect");

									mapSectionSidebarDescriptionPokTypeEncounterText.setAttribute("name","item");
									mapSectionSidebarDescriptionPokTypeEncounterText.setAttribute("value",poks[u]["Item"]);
									mapSectionSidebarDescriptionPokTypeEncounterText.addEventListener("click",dataRedirect);
									mapSectionSidebarDescriptionPokTypeEncounterText.setAttribute("function","dataRedirect");
								}
							}

							mapSectionSidebarDescriptionPokTypeEncounterImg.alt = encounter;
							mapSectionSidebarDescriptionPokTypeEncounterImg.setAttribute("onerror","this.style.display='none';")
							
							if (encounters[r] == "Surfing") {
								mapSectionSidebarDescriptionPokTypeEncounterImg.setAttribute("name","move");
								mapSectionSidebarDescriptionPokTypeEncounterImg.setAttribute("value","Surf");
								mapSectionSidebarDescriptionPokTypeEncounterImg.addEventListener("click",dataRedirect);
								mapSectionSidebarDescriptionPokTypeEncounterImg.setAttribute("function","dataRedirect");

								mapSectionSidebarDescriptionPokTypeEncounterText.setAttribute("name","move");
								mapSectionSidebarDescriptionPokTypeEncounterText.setAttribute("value","Surf");
								mapSectionSidebarDescriptionPokTypeEncounterText.addEventListener("click",dataRedirect);
								mapSectionSidebarDescriptionPokTypeEncounterText.setAttribute("function","dataRedirect");
							}
					
							if (returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,encounters[r]) != undefined) {
								mapSectionSidebarDescriptionPokTypeEncounterImg.setAttribute("name","move");
								mapSectionSidebarDescriptionPokTypeEncounterImg.setAttribute("value",encounters[r]);
								mapSectionSidebarDescriptionPokTypeEncounterImg.addEventListener("click",dataRedirect);
								mapSectionSidebarDescriptionPokTypeEncounterImg.setAttribute("function","dataRedirect");

								mapSectionSidebarDescriptionPokTypeEncounterText.setAttribute("name","move");
								mapSectionSidebarDescriptionPokTypeEncounterText.setAttribute("value",encounters[r]);
								mapSectionSidebarDescriptionPokTypeEncounterText.addEventListener("click",dataRedirect);
								mapSectionSidebarDescriptionPokTypeEncounterText.setAttribute("function","dataRedirect");
							}
						}
						mapSectionSidebarDescriptionPokTypeImgWrap.appendChild(mapSectionSidebarDescriptionPokTypeEncounterImg);
						mapSectionSidebarDescriptionPokTypeTxtWrap.appendChild(mapSectionSidebarDescriptionPokTypeEncounterText);
					}


					if (poks[u]["Tile"] != undefined && poks[u]["Encounter"] != "Static") {
						var mapSectionSidebarDescriptionPokTypeTileImg = document.createElement("img");
						var mapSectionSidebarDescriptionPokTypeTileText = document.createElement("small");

					

						var dash;
						var entr;
						var ti;
						var res;
						var space;

						if (poks[u]["Tile"].includes("Rod")) {
							dash = "in";
						}
						else {
							dash = "on";
						}

						if (poks[u]["Encounter"] == undefined) {
							entr = "";
							dash = "";
						}
						else {
							entr = poks[u]["Encounter"]+" ";
						}

						if (poks[u]["Tile"] == undefined) {
							ti = "";
							dash = "";
						}
						else {
							ti = " "+poks[u]["Tile"]+" ";
						}


						if (poks[u]["Encounter"] != undefined) {
							mapSectionSidebarDescriptionPokTypeImgWrap.setAttribute("name","multi");
							space = " ";
						}
						else {
							space = "";
						}

						res = dash+ti;

						res = res.replaceAll(/^ /g,"").replaceAll(/ $/g,"");
						res = space+res;

						mapSectionSidebarDescriptionPokTypeTileImg.src = "./media/Images/Misc/Encounter/"+MEDIAPath_Encounter+"/"+poks[u]["Tile"]+".png";
						mapSectionSidebarDescriptionPokTypeTileImg.title = poks[u]["Tile"];
						mapSectionSidebarDescriptionPokTypeTileImg.alt = poks[u]["Tile"];
						mapSectionSidebarDescriptionPokTypeTileImg.setAttribute("onerror","this.style.display = 'none';");
						mapSectionSidebarDescriptionPokTypeTileText.innerText = res;


					

						var rgs;

						if (Region.includes(",")) {
							rgs = Region.split(",")
						}
						else {
							rgs = [Region];
						}
						for(var r = 0; r < rgs.length; r++) {
							mapSectionSidebarDescriptionPokTypeTileText.innerText = mapSectionSidebarDescriptionPokTypeTileText.innerText.replaceAll(" "+rgs[r],"").replaceAll(rgs[r]+" ","");
						}
						mapSectionSidebarDescriptionPokTypeTileText.innerText = mapSectionSidebarDescriptionPokTypeTileText.innerText.replaceAll(" Spring","").replaceAll(" Summer","").replaceAll(" Winter","").replaceAll(" Autumn","");				

						mapSectionSidebarDescriptionPokTypeImgWrap.appendChild(mapSectionSidebarDescriptionPokTypeTileImg);
						mapSectionSidebarDescriptionPokTypeTxtWrap.appendChild(mapSectionSidebarDescriptionPokTypeTileText);
					}




					if (poks[u]["Mechanic"] != undefined) {
						var mapSectionSidebarDescriptionPokTypeMechanicText = document.createElement("small");
						mapSectionSidebarDescriptionPokTypeMechanicText.innerText = poks[u]["Mechanic"];
						mapSectionSidebarDescriptionPokTypeTxtWrap.appendChild(mapSectionSidebarDescriptionPokTypeMechanicText);
					}



					if (poks[u]["Criteria"] != undefined) {
						mapSectionSidebarDescriptionPokRate.title = poks[u]["Criteria"];
					}

					if (poks[u]["Machine"] != undefined) {
						var machine = poks[u]["Machine"].replace(/,([^,]*)$/, ', and $1').replaceAll(",",", ").replaceAll("/"," or ").replaceAll("  "," ");
						
						if (machine != "") {
							mapSectionSidebarDescriptionPokType.setAttribute("title","Requires: "+machine);
						}
					}

				}
			}
		}

		for(var q = 0; q < tutors.length; q++) {
			if (tutors[q]["Area"] == undefined) {
				tutors[q]["Area"] = "a";
			}
		}

		tutors = sortObjectArray(tutors,"Area",true);

		for(var q = 0; q < tutors.length; q++) {
			if (tutors[q]["Area"] == "a") {
				tutors[q]["Area"] = location;
			}
		}

		var tutorArea = [];
		for(var q = 0; q < tutors.length; q++) {
			tutorArea.push(tutors[q]["Area"]);
		}
		tutorArea = [...new Set(tutorArea)];

		var uls = mapSectionSidebarDescriptionTutor.querySelectorAll(":scope > ul");
		for(var q = 0; q < uls.length; q++) {
			uls[q].remove();
		}

		for(var q = 0; q < tutorArea.length; q++) {
			var ul;
			ul = mapSectionSidebarDescriptionTutor.querySelector(':scope > ul[name="'+tutorArea[q]+'"]');

			if (ul == null) {
				var mapSectionSidebarDescriptionTutorUl = document.createElement("ul");
				mapSectionSidebarDescriptionTutor.appendChild(mapSectionSidebarDescriptionTutorUl);
				mapSectionSidebarDescriptionTutorUl.setAttribute("name",tutorArea[q])

				if (tutorArea[q] != location) {
					var mapSectionSidebarDescriptionTutorUlTitle = document.createElement("h4");
					mapSectionSidebarDescriptionTutorUlTitle.innerText = tutorArea[q];
					mapSectionSidebarDescriptionTutorUl.appendChild(mapSectionSidebarDescriptionTutorUlTitle);
				}


			}
			ul = mapSectionSidebarDescriptionTutor.querySelector(':scope > ul[name="'+tutorArea[q]+'"]');

			for(var u = 0; u < tutors.length; u++) {
				if (tutors[u]["Area"] == tutorArea[q]) {
					var mapSectionSidebarDescriptionTutorLi = document.createElement("li");
					ul.appendChild(mapSectionSidebarDescriptionTutorLi);

					var mapSectionSidebarDescriptionTutorMove = document.createElement("span");
					var mapSectionSidebarDescriptionTutorMoveTrigger = document.createElement("b");
					var mapSectionSidebarDescriptionTutorMoveText = document.createElement("h5");
					mapSectionSidebarDescriptionTutorMoveText.innerText = tutors[u]["Move"];
					mapSectionSidebarDescriptionTutorMoveTrigger.setAttribute("name","move");
					mapSectionSidebarDescriptionTutorMoveTrigger.setAttribute("type","invert");
					mapSectionSidebarDescriptionTutorMoveText.title = formatMoveData(tutors[u]["Move"]);
					mapSectionSidebarDescriptionTutorMoveText.style.color = "var(--type"+returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,tutors[u]["Move"])+")";
					mapSectionSidebarDescriptionTutorLi.appendChild(mapSectionSidebarDescriptionTutorMove);
					mapSectionSidebarDescriptionTutorMove.appendChild(mapSectionSidebarDescriptionTutorMoveTrigger);
					mapSectionSidebarDescriptionTutorMoveTrigger.appendChild(mapSectionSidebarDescriptionTutorMoveText);
					mapSectionSidebarDescriptionTutorMoveTrigger.addEventListener("click",dataRedirect);
					mapSectionSidebarDescriptionTutorMoveTrigger.setAttribute("function","dataRedirect");

					if (tutors[u]["Requirement"] != undefined || tutors[u]["Cost"] != undefined || tutors[u]["Rate"] != undefined || tutors[u]["Time"]) {
						var mapSectionSidebarDescriptionTutorAdditional = document.createElement("span");
						mapSectionSidebarDescriptionTutorLi.appendChild(mapSectionSidebarDescriptionTutorAdditional);
					}

					if (tutors[u]["Requirement"] != undefined) {
						var mapSectionSidebarDescriptionTutorReq = document.createElement("span");
						var mapSectionSidebarDescriptionTutorReqHeader = document.createElement("h6");
						var mapSectionSidebarDescriptionTutorReqText = document.createElement("p");
						mapSectionSidebarDescriptionTutorReqHeader.innerText = "Requires:";
						mapSectionSidebarDescriptionTutorReqText.innerText = tutors[u]["Requirement"];
						mapSectionSidebarDescriptionTutorAdditional.appendChild(mapSectionSidebarDescriptionTutorReq);
						mapSectionSidebarDescriptionTutorReq.appendChild(mapSectionSidebarDescriptionTutorReqHeader);
						mapSectionSidebarDescriptionTutorReq.appendChild(mapSectionSidebarDescriptionTutorReqText);
					}

					if (tutors[u]["Time"] != undefined) {
						var mapSectionSidebarDescriptionTutorTime = document.createElement("span");
						var mapSectionSidebarDescriptionTutorTimeHeader = document.createElement("h6");
						var mapSectionSidebarDescriptionTutorTimeText = document.createElement("p");
						mapSectionSidebarDescriptionTutorTimeHeader.innerText = "Time:"
						mapSectionSidebarDescriptionTutorTimeText.innerText = tutors[u]["Time"].replaceAll(","," / ");
						mapSectionSidebarDescriptionTutorAdditional.appendChild(mapSectionSidebarDescriptionTutorTime);
						mapSectionSidebarDescriptionTutorTime.appendChild(mapSectionSidebarDescriptionTutorTimeHeader);
						mapSectionSidebarDescriptionTutorTime.appendChild(mapSectionSidebarDescriptionTutorTimeText);
					}

					if (tutors[u]["Rate"] != undefined) {
						var mapSectionSidebarDescriptionTutorRate = document.createElement("span");
						var mapSectionSidebarDescriptionTutorRateHeader = document.createElement("h6");
						var mapSectionSidebarDescriptionTutorRateText = document.createElement("p");
						mapSectionSidebarDescriptionTutorRateHeader.innerText = "Available:"
						mapSectionSidebarDescriptionTutorRateText.innerText = tutors[u]["Rate"];
						mapSectionSidebarDescriptionTutorAdditional.appendChild(mapSectionSidebarDescriptionTutorRate);
						mapSectionSidebarDescriptionTutorRate.appendChild(mapSectionSidebarDescriptionTutorRateHeader);
						mapSectionSidebarDescriptionTutorRate.appendChild(mapSectionSidebarDescriptionTutorRateText);
					}


					if (tutors[u]["Cost"] != undefined) {
						var mapSectionSidebarDescriptionTutorCost = document.createElement("span");
						var mapSectionSidebarDescriptionTutorCostHeader = document.createElement("h6");
						var mapSectionSidebarDescriptionTutorCostText = document.createElement("p");
						mapSectionSidebarDescriptionTutorCostHeader.innerText = "Cost:";
						mapSectionSidebarDescriptionTutorCostText.innerHTML = numFormat(tutors[u]["Cost"].replaceAll(",","\n")).replaceAll(" Yellow Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Yellow Shard.png" name="item" title="Yellow Shard">').replaceAll(" Red Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Red Shard.png" name="item" title="Red Shard">').replaceAll(" Blue Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Blue Shard.png" name="item" title="Blue Shard">').replaceAll(" Green Shard",'x<img src="./media/Images/Item/Bag/'+MEDIAPath_Item_Bag+'/Green Shard.png" name="item" title="Green Shard">');
						mapSectionSidebarDescriptionTutorAdditional.appendChild(mapSectionSidebarDescriptionTutorCost);
						mapSectionSidebarDescriptionTutorCost.appendChild(mapSectionSidebarDescriptionTutorCostHeader);
						mapSectionSidebarDescriptionTutorCost.appendChild(mapSectionSidebarDescriptionTutorCostText);
						
						var costImages = mapSectionSidebarDescriptionTutorCost.querySelectorAll(":scope img");
						for(var y = 0; y < costImages.length; y++) {
							costImages[y].addEventListener("click",dataRedirect);
							costImages[y].setAttribute("function","dataRedirect");
						}
					}


			
				}
			}
		}





		mapSectionHeaderTitleText.innerText = location;
		mapSectionHeaderFlavorText.innerText = "";
	

		
		for(var q = 0; q < finaldataLocationSlogan.length; q++) {
			if(getApplicable(finaldataLocationSlogan[q]["Game"])) {
				if(finaldataLocationSlogan[q]["Location"] == location) {
					mapSectionHeaderFlavorText.innerHTML = '"'+finaldataLocationSlogan[q]["Slogan"]+'"';
				}
			}
		}



		var subs = mapSectionContentAreaContent.querySelectorAll(":scope > p");
		for(var q = 0; q < subs.length; q++) {
			subs[q].remove();
		}
		mapSectionContentAreaTitle.innerText = "Sub Area/Location";

		var areas = getAreasFromLocation(location);
		var locations = getLocationFromArea(location);

		for(var q = 0; q < locations.length; q++) {
			var mapSectionContentAreaText = document.createElement("p");
			mapSectionContentAreaTitle.innerText = "Location";
			mapSectionContentAreaText.innerText = locations[q];
			mapSectionContentAreaContent.appendChild(mapSectionContentAreaText);
			mapSectionContentAreaText.setAttribute("name", "map");
			mapSectionContentAreaText.addEventListener("click", dataRedirect);
			mapSectionContentAreaText.setAttribute("function","dataRedirect");
		}

		for(var q = 0; q < areas.length; q++) {
			var mapSectionContentAreaText = document.createElement("p");
			mapSectionContentAreaTitle.innerText = "Sub Areas";
			mapSectionContentAreaText.innerText = areas[q];
			mapSectionContentAreaContent.appendChild(mapSectionContentAreaText);
			mapSectionContentAreaText.setAttribute("name", "map");
			mapSectionContentAreaText.addEventListener("click", dataRedirect);
			mapSectionContentAreaText.setAttribute("function","dataRedirect");
		}


		var navs = mapSectionContentNavigationContent.querySelectorAll(":scope > span");
		for(var q = 0; q < navs.length; q++) {
			navs[q].remove();
		}
		for(var q = 0; q < finaldataLocationNavigation.length; q++) {
			if (getApplicable(finaldataLocationNavigation[q]["Game"])) {
				if(finaldataLocationNavigation[q]["Location"] == location) {
					for(var u = 0; u < finaldataLocationNavigation[q]["Navigation"].split(",").length; u++) {
						var mapSectionContentNavigationInnerContent = document.createElement("span")
						var mapSectionContentNavigationInnerImg = document.createElement("img");
						var mapSectionContentNavigationInnerText = document.createElement("p");
						mapSectionContentNavigationInnerContent.setAttribute("name","item");
						if (getMoveMachine(finaldataLocationNavigation[q]["Navigation"].split(",")[u]) != undefined) {
							mapSectionContentNavigationInnerContent.setAttribute("value",getMoveMachine(finaldataLocationNavigation[q]["Navigation"].split(",")[u]));
						}
						else {
							mapSectionContentNavigationInnerContent.setAttribute("value",finaldataLocationNavigation[q]["Navigation"].split(",")[u]);
						}
						mapSectionContentNavigationInnerText.innerText = finaldataLocationNavigation[q]["Navigation"].split(",")[u];
						if(finaldataLocationNavigation[q]["Navigation"].split(",")[u] == "Cut" || finaldataLocationNavigation[q]["Navigation"].split(",")[u] == "Strength") {
							mapSectionContentNavigationInnerImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+"HM Normal"+".png";
						} else if(finaldataLocationNavigation[q]["Navigation"].split(",")[u] == "Waterfall" || finaldataLocationNavigation[q]["Navigation"].split(",")[u] == "Surf" || finaldataLocationNavigation[q]["Navigation"].split(",")[u] == "Dive" || finaldataLocationNavigation[q]["Navigation"].split(",")[u] == "Whirlpool") {
							mapSectionContentNavigationInnerImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+"HM Water"+".png";
						} else if(finaldataLocationNavigation[q]["Navigation"].split(",")[u] == "Rock Smash" || finaldataLocationNavigation[q]["Navigation"].split(",")[u] == "Rock Climb") {
							mapSectionContentNavigationInnerImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+"HM Fighting"+".png";
						} else if(finaldataLocationNavigation[q]["Navigation"].split(",")[u] == "Defog") {
							mapSectionContentNavigationInnerImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+"HM Flying"+".png";
						} else {
							mapSectionContentNavigationInnerImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+finaldataLocationNavigation[q]["Navigation"].split(",")[u]+".png";
						}
						mapSectionContentNavigationInnerImg.setAttribute("title", finaldataLocationNavigation[q]["Navigation"].split(",")[u]);
						mapSectionContentNavigationInnerImg.setAttribute("onerror", "this.style.display='none'");
						mapSectionContentNavigationContent.appendChild(mapSectionContentNavigationInnerContent);
						mapSectionContentNavigationInnerContent.appendChild(mapSectionContentNavigationInnerImg);
						mapSectionContentNavigationInnerContent.appendChild(mapSectionContentNavigationInnerText);
						mapSectionContentNavigationInnerContent.addEventListener("click",dataRedirect);
						mapSectionContentNavigationInnerContent.setAttribute("function","dataRedirect");
					}
				}
			}
		}


		var mapTop = mapSectionContentMapOuter.querySelector(':scope *[name="Top"]');
		var mapBottom = mapSectionContentMapOuter.querySelector(':scope *[name="Bottom"]');
		var mapLeft = mapSectionContentMapOuter.querySelector(':scope *[name="Left"]');
		var mapRight = mapSectionContentMapOuter.querySelector(':scope *[name="Right"]');
		

		mapTop.setAttribute("title","");
		mapBottom.setAttribute("title","");
		mapLeft.setAttribute("title","");
		mapRight.setAttribute("title","");
		mapTop.firstElementChild.setAttribute("value","");
		mapBottom.firstElementChild.setAttribute("value","");
		mapLeft.firstElementChild.setAttribute("value","");
		mapRight.firstElementChild.setAttribute("value","");

		for(var q = 0; q < finaldataLocationConnection.length; q++) {
			if (getApplicable(finaldataLocationConnection[q]["Game"])) {
				var name = finaldataLocationConnection[q]["Location"];
				var north = finaldataLocationConnection[q]["North"];
				var south = finaldataLocationConnection[q]["South"];
				var west = finaldataLocationConnection[q]["West"];
				var east = finaldataLocationConnection[q]["East"];

				if(name == location) {
					if (north != undefined) {
						mapTop.setAttribute("title",north.replaceAll(",","\n"));
						mapTop.firstElementChild.setAttribute("value",north);
					}
					if (south != undefined) {
						mapBottom.setAttribute("title",south.replaceAll(",","\n"));
						mapBottom.firstElementChild.setAttribute("value",south);
					}
					if (west != undefined) {
						mapLeft.setAttribute("title",west.replaceAll(",","\n"));
						mapLeft.firstElementChild.setAttribute("value",west);
					}
					if (east != undefined) {
						mapRight.setAttribute("title",east.replaceAll(",","\n"));
						mapRight.firstElementChild.setAttribute("value",east);
					}
				}
			}
		}
		

		
	var dvs = document.querySelectorAll("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] > *");
	for(var q = 0; q < dvs.length; q++) {
		dvs[q].remove();
	}

	
	var mapSectionSidebarDescriptionTrainerWrap = document.createElement("div");
	var mapSectionSidebarDescriptionTrainerData = document.createElement("div");
	var mapSectionSidebarDescriptionTrainerDataTop = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataTopLeft = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataTopCenter = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataTopCenterSearch = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput = document.createElement("input");
	var mapSectionSidebarDescriptionTrainerDataTopCenterSearchOl = document.createElement("ol");
	var mapSectionSidebarDescriptionTrainerDataTopCenterCount = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft = document.createElement("input");
	var mapSectionSidebarDescriptionTrainerDataTopCenterCountMiddle = document.createElement("small");
	var mapSectionSidebarDescriptionTrainerDataTopCenterCountRight = document.createElement("input");
	var mapSectionSidebarDescriptionTrainerDataTopRight = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataCenter = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataCenterLeft = document.createElement("b");
	var mapSectionSidebarDescriptionTrainerDataCenterCenter = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataCenterRight = document.createElement("b");
	var mapSectionSidebarDescriptionTrainerDataBottom = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataBottomLeft = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataBottomCenter = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerDataBottomCenterText = document.createElement("h6");
	var mapSectionSidebarDescriptionTrainerDataBottomRight = document.createElement("span");
	var mapSectionSidebarDescriptionTrainerUl = document.createElement("ul");


	mapSectionSidebarDescriptionTrainerDataTopLeft.setAttribute("name","title");
	mapSectionSidebarDescriptionTrainerDataTopRight.setAttribute("name","items");
	mapSectionSidebarDescriptionTrainerDataCenterLeft.setAttribute("name","previous");
	mapSectionSidebarDescriptionTrainerDataCenterCenter.setAttribute("name","current");
	mapSectionSidebarDescriptionTrainerDataCenterRight.setAttribute("name","next");
	mapSectionSidebarDescriptionTrainerDataBottomLeft.setAttribute("name","pokcount");
	mapSectionSidebarDescriptionTrainerDataBottomCenter.setAttribute("name","name");
	mapSectionSidebarDescriptionTrainerDataBottomRight.setAttribute("name","reward");

	mapSectionSidebarDescriptionTrainerDataTopCenter.setAttribute("name","navigation");
	mapSectionSidebarDescriptionTrainerDataTopCenterCount.setAttribute("name","count");
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("type","number");
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("min",1);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("max",trainers.length);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("value",1);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountMiddle.innerText = "/";
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("placeholder",1);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("type","number");
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("min",trainers.length);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("max",trainers.length);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("placeholder",trainers.length);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("disabled","");
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("onclick","this.select()");
	mapSectionSidebarDescriptionTrainerDataTopCenterSearch.setAttribute("name","search");
	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.setAttribute("type","text");
	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.setAttribute("placeholder", "Search Trainer...");
	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.setAttribute("onfocus", "this.placeholder=''");
	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.setAttribute("onblur", "this.placeholder='Search Trainer...'");
	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.setAttribute("name",location);

	mapSectionSidebarDescriptionTrainer.appendChild(mapSectionSidebarDescriptionTrainerWrap);
	mapSectionSidebarDescriptionTrainerWrap.appendChild(mapSectionSidebarDescriptionTrainerData);
	mapSectionSidebarDescriptionTrainerData.appendChild(mapSectionSidebarDescriptionTrainerDataTop);
	mapSectionSidebarDescriptionTrainerDataTop.appendChild(mapSectionSidebarDescriptionTrainerDataTopLeft);
	mapSectionSidebarDescriptionTrainerDataTop.appendChild(mapSectionSidebarDescriptionTrainerDataTopCenter);
	mapSectionSidebarDescriptionTrainerDataTopCenter.appendChild(mapSectionSidebarDescriptionTrainerDataTopCenterCount);
	mapSectionSidebarDescriptionTrainerDataTopCenterCount.appendChild(mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft);
	mapSectionSidebarDescriptionTrainerDataTopCenterCount.appendChild(mapSectionSidebarDescriptionTrainerDataTopCenterCountMiddle);
	mapSectionSidebarDescriptionTrainerDataTopCenterCount.appendChild(mapSectionSidebarDescriptionTrainerDataTopCenterCountRight);
	mapSectionSidebarDescriptionTrainerDataTopCenter.appendChild(mapSectionSidebarDescriptionTrainerDataTopCenterSearch);
	mapSectionSidebarDescriptionTrainerDataTopCenterSearch.appendChild(mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput);
	mapSectionSidebarDescriptionTrainerDataTopCenterSearch.appendChild(mapSectionSidebarDescriptionTrainerDataTopCenterSearchOl);
	mapSectionSidebarDescriptionTrainerDataTop.appendChild(mapSectionSidebarDescriptionTrainerDataTopRight);
	mapSectionSidebarDescriptionTrainerData.appendChild(mapSectionSidebarDescriptionTrainerDataCenter);
	mapSectionSidebarDescriptionTrainerDataCenter.appendChild(mapSectionSidebarDescriptionTrainerDataCenterLeft);
	mapSectionSidebarDescriptionTrainerDataCenter.appendChild(mapSectionSidebarDescriptionTrainerDataCenterCenter);
	mapSectionSidebarDescriptionTrainerDataCenter.appendChild(mapSectionSidebarDescriptionTrainerDataCenterRight);
	mapSectionSidebarDescriptionTrainerData.appendChild(mapSectionSidebarDescriptionTrainerDataBottom);
	mapSectionSidebarDescriptionTrainerDataBottom.appendChild(mapSectionSidebarDescriptionTrainerDataBottomLeft);
	mapSectionSidebarDescriptionTrainerDataBottom.appendChild(mapSectionSidebarDescriptionTrainerDataBottomCenter);
	mapSectionSidebarDescriptionTrainerDataBottomCenter.appendChild(mapSectionSidebarDescriptionTrainerDataBottomCenterText);
	mapSectionSidebarDescriptionTrainerDataBottom.appendChild(mapSectionSidebarDescriptionTrainerDataBottomRight);
	mapSectionSidebarDescriptionTrainerWrap.appendChild(mapSectionSidebarDescriptionTrainerUl);

	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.addEventListener("keyup",trainerSearch)
	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.addEventListener("focus",trainerSearch);



	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.addEventListener("change",iMinMax);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.addEventListener("change",function(){updateTrainer(trainers,undefined)});
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("onwheel","");


	mapSectionListOptionsSearch.title = searchOptionsTitle(mapSectionListOptions);

	var searchLis = document.querySelectorAll("#contain > div#map > section[name='list'] ol > label");
    searchMapAttributes = [];
    for(q = 0; q < searchLis.length; q++) {
        for(u = 0; u < searchLis[q].getAttributeNames().length; u++) {
            if (searchLis[q].getAttributeNames()[u].includes("data-search")) {
                if (!searchMapAttributes.includes(searchLis[q].getAttributeNames()[u])) {
                    searchMapAttributes.push(searchLis[q].getAttributeNames()[u]);
                }
            }
        }
    }

    for(q = 0; q < searchMapAttributes.length; q++) {
        searchMapAttributes[q] = searchMapAttributes[q].replaceAll("data-search-","")
    }




	mapSectionSidebarDescriptionPok.addEventListener("scroll",function(){updateTitleHeader("pokémon")});
	mapSectionSidebarDescriptionItem.addEventListener("scroll",function(){updateTitleHeader("items")});
	mapSectionSidebarDescriptionShop.addEventListener("scroll",function(){updateTitleHeader("shop")});

	updateTitleHeader("pokémon");
	updateTitleHeader("items");
	updateTitleHeader("shop");


	if(trainers.length > 0) {
		updateTrainer(trainers,undefined)
	}



	var mapdescriptionsel = document.querySelector('#contain > div#map > section[name="sidebar"] input[value="'+mapSelectorVal[0]+'"]');
	var divs = document.querySelectorAll('#contain div#map > section[name="sidebar"] > div > *[name]')

	if (mapdescriptionsel != null) {
		mapdescriptionsel.click();
	}
	else {
		for(var y = 0; y < divs.length; y++) {
			divs[y].style.display = "none";
		}
		divs[0].style.removeProperty("display");
	}



	memory("Restore","game",document.querySelectorAll("#contain div#map > section[name='sidebar'] > div > *[name] input"))

	}


	for (var i = 0; i < finaldataLocationConnection.length; i++) {
		if (getApplicable(finaldataLocationConnection[i]["Game"])) {
			var north = finaldataLocationConnection[i]["North"];
			var south = finaldataLocationConnection[i]["South"];
			var west = finaldataLocationConnection[i]["West"];
			var east = finaldataLocationConnection[i]["East"];

			var vals = [north,south,west,east];
			var origin1 = ["North","South","West","East"];
			var origin2 = ["South","North","East","West"];
			for (var q = 0; q < vals.length; q++) {
				var val = vals[q];
				if (val != undefined) {
					if (val.includes(",")) {
						val = val.split(",");
						for (var u = 0; u < val.length; u++) {
							for (var r = 0; r < finaldataLocationConnection.length; r++) {
								if (getApplicable(finaldataLocationConnection[r]["Game"])) {
									if (finaldataLocationConnection[r]["Location"] == val[u]) {
										if (finaldataLocationConnection[r][origin2[q]] != undefined) {
											if (!finaldataLocationConnection[r][origin2[q]].includes(finaldataLocationConnection[i]["Location"])) {
												console.log("#DEBUG# "+finaldataLocationConnection[i]["Location"]+" is not "+origin2[q]+" of "+finaldataLocationConnection[r]["Location"]+".")
											}
										}
										else {
											console.log("#DEBUG# "+finaldataLocationConnection[i]["Location"]+" is not "+origin2[q]+" of "+finaldataLocationConnection[r]["Location"]+".")
										}
									}
								}
							}
						}
					}
					else {
						for (var r = 0; r < finaldataLocationConnection.length; r++) {
							if (getApplicable(finaldataLocationConnection[r]["Game"])) {
								if (finaldataLocationConnection[r]["Location"] == val[u]) {
									if (finaldataLocationConnection[r][origin2[q]] != undefined) {
										if (!finaldataLocationConnection[r][origin2[q]].includes(finaldataLocationConnection[i]["Location"])) {
											console.log("#DEBUG# "+finaldataLocationConnection[i]["Location"]+" is not "+origin2[q]+" of "+finaldataLocationConnection[r]["Location"]+".")
										}
									}
									else {
										console.log("#DEBUG# "+finaldataLocationConnection[i]["Location"]+" is not "+origin2[q]+" of "+finaldataLocationConnection[r]["Location"]+".")
									}
								}
							}
						}
					}
				}
			}

			
		}
	}
}
var mapSelectorVal = [0];
function mapDescriptionSelector() {
	var i = this.getAttribute("value").toLowerCase();
	var mapDescriptionOuters = document.querySelectorAll('#contain div#map > section[name="sidebar"] > div > *[name]');
	var mapDescriptionOuter = document.querySelectorAll('#contain div#map > section[name="sidebar"] > div > *[name="'+i+'"]');
	for(var y = 0; y < mapDescriptionOuters.length; y++) {
		mapDescriptionOuters[y].style.display = "none";
	}
	for(var y = 0; y < mapDescriptionOuter.length; y++) {
		mapDescriptionOuter[y].style.display = "flex";
	}
	mapSelectorVal.fill(i)
}
function trainerSearch() {
	var tar = event.target;
	var val = tar.value;
	var base = document.querySelector("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] span[name='search'] ol")
	var count = document.querySelector("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] span[name='count'] input:first-child")
	base.innerHTML = "";

	if (val != undefined) {
		base.classList.add("active");
		var trainers = getLocationTrainers(tar.getAttribute("name"));

		var found = [];
		for(var i = 0; i < trainers.length; i++) {
			var nameVal = [];
			if (trainers[i]["Class"] != undefined) {
				nameVal.push(trainers[i]["Class"])
			}
			if (trainers[i]["Trainer"] != undefined) {
				nameVal.push(trainers[i]["Trainer"])
			}
			nameVal = nameVal.join(" ");
			if (nameVal.toLowerCase().includes(val.toLowerCase())) {
				var obj = new Object();
				obj["Name"] = nameVal;
				obj["Integer"] = i;
				found.push(obj)
			}
		}

		for(var i = 0; i < found.length; i++) {

			var li = document.createElement("li");
			var b = document.createElement("b");
			var txt = document.createElement("h6");
			txt.innerText = found[i]["Name"];
			b.setAttribute("type","invert");
			b.setAttribute("value",parseInt(found[i]["Integer"])+1);
			base.appendChild(li)
			li.appendChild(b)
			b.appendChild(txt)
			b.addEventListener("click",function(){base.classList.remove("active");count.value = this.getAttribute("value");updateTrainer(trainers)})

		}
	}

}
function updateTrainer(trainers,condition) {

	var base = document.querySelector("#contain div#map > section[name='sidebar'] > div > *[name='trainers']");

	var input = base.querySelector(":scope *[name='count'] input[type='number']:first-child")

	var titlePath = base.querySelector(":scope *[name='title']");
	var itemsPath = base.querySelector(":scope *[name='items']");
	var previousPath = base.querySelector(":scope *[name='previous']");
	var currentPath = base.querySelector(":scope *[name='current']");
	var nextPath = base.querySelector(":scope *[name='next']");
	var pokCountPath = base.querySelector(":scope *[name='pokcount']");
	var namePath = base.querySelector(":scope *[name='name']");
	var rewardPath = base.querySelector(":scope *[name='reward']");
	var ulPath = base.querySelector(":scope ul");

	var paths = [titlePath,itemsPath,previousPath,currentPath,nextPath,pokCountPath,namePath,rewardPath,ulPath]
	for(var y = 0; y < paths.length; y++) {
		paths[y].innerHTML = "";
	}
	var trainers;
	var q = input.value-1;

	

	if (condition == "add") {
		if (trainers.length > parseInt(q)+1) {
			q = parseInt(q)+1;
			input.value = parseInt(input.value)+1;
		}
	}
	else if (condition == "remove") {
		if (0 <= parseInt(q)-1) {
			q = parseInt(q)-1;
			input.value = parseInt(input.value)-1;
		}
	}



	var trainerName = trainers[q]["Trainer"];
	var trainerClass = trainers[q]["Class"];
	var trainerImage = trainers[q]["Image"];
	var trainerItem = trainers[q]["Item"];
	var trainerItemCount = trainers[q]["Item Quantity"];
	var trainerReward = trainers[q]["Reward"];
	var trainerRewardCount = trainers[q]["Reward Quantity"];
	var trainerGender = trainers[q]["Gender"];
	var trainerCount =  trainers[q]["Count"];
	var trainerNote = trainers[q]["Note"];
	var trainerArea = trainers[q]["Area"];
	var trainerTitle = trainers[q]["Title"];
	var trainerType = trainers[q]["Type"];





	var trainerInfo = [];

	if (trainerTitle != undefined) {
		trainerInfo.push(trainerTitle)
	}
	if (trainerArea != undefined) {
		trainerInfo.push(trainerArea)
	}
	

	var trainerPrevious = undefined;
	var trainerNext = undefined;

	if (q != 0) {
		trainerPrevious = trainers[q-1];
	}
	if (q != ((trainers.length)-1)) {
		trainerNext = trainers[q+1];
	}

	if (trainerImage == undefined) {
		trainerImage = trainerClass;
		if (trainerGender == "Male") {
			trainerImage +=	"_M";
		}
		else if (trainerGender == "Female") {
			trainerImage +=	"_F";
		}
	}



	var previousImg = document.createElement("img");
	var currentImg = document.createElement("img");
	var nextImg = document.createElement("img");
	var nameText = document.createElement("h6");
	currentImg.src = "./media/Images/Character/Battle/PNG/Front/"+MEDIAPath_Character_Battle+"/"+trainerImage+".png";




	if (trainerNote != undefined) {
		currentPath.title = trainerNote;
	}
	else {
		currentPath.removeAttribute("title");
	}

	if(trainerPrevious != undefined) {
		var previmg = trainerPrevious["Image"];
		if (previmg == undefined) {
			previmg = trainerPrevious["Class"];

			if (trainerPrevious["Gender"] == "Male") {
				previmg +=	"_M";
			}
			else if (trainerPrevious["Gender"] == "Female") {
				previmg +=	"_F";
			}
		}
		previousImg.src = "./media/Images/Character/Battle/PNG/Front/"+MEDIAPath_Character_Battle+"/"+previmg+".png";
		previousPath.title = trainers[q-1]["Class"]+"\n"+trainers[q-1]["Trainer"];
	}
	else {
		previousImg.style.visibility = "hidden";
		previousImg.style.pointerEvents = "none";
		previousPath.removeAttribute("title");
	}
	if(trainerNext != undefined) {
		var nextimg = trainerNext["Image"];
		if (nextimg == undefined) {
			nextimg = trainerNext["Class"];

			if (trainerNext["Gender"] == "Male") {
				nextimg +=	"_M";
			}
			else if (trainerNext["Gender"] == "Female") {
				nextimg +=	"_F";
			}
		}
		nextImg.src = "./media/Images/Character/Battle/PNG/Front/"+MEDIAPath_Character_Battle+"/"+nextimg+".png";
		nextPath.title = trainers[q+1]["Class"]+"\n"+trainers[q+1]["Trainer"];
	}
	else {
		nextImg.style.visibility = "hidden";
		nextImg.style.pointerEvents = "none";
		nextPath.removeAttribute("title");
	}

	previousImg.setAttribute("onerror","this.classList.add('error');this.src='./media/Images/Character/Battle/PNG/Front/"+MEDIAPath_Character_Battle+"/"+MEDIAPath_Character_Fallback+".png';");
	currentImg.setAttribute("onerror","this.classList.add('error');this.src='./media/Images/Character/Battle/PNG/Front/"+MEDIAPath_Character_Battle+"/"+MEDIAPath_Character_Fallback+".png';");
	nextImg.setAttribute("onerror","this.classList.add('error');this.src='./media/Images/Character/Battle/PNG/Front/"+MEDIAPath_Character_Battle+"/"+MEDIAPath_Character_Fallback+".png';");



	if (trainerClass != undefined) {
		nameText.innerText = trainerClass+"\n"+trainerName;
	}
	else {
		nameText.innerText = trainerName;
	}

	previousPath.appendChild(previousImg);
	currentPath.appendChild(currentImg);
	nextPath.appendChild(nextImg);
	namePath.appendChild(nameText);


	previousImg.addEventListener("click",function(){updateTrainer(trainers,"remove")});
	nextImg.addEventListener("click",function(){updateTrainer(trainers,"add")});

	if (trainerReward != undefined) {


		var rwcount = trainerRewardCount;
		if (rwcount == undefined) {
			rwcount = 1;
		}
		if (rwcount > 5) {
			rwcount = 5;
		}

		var rewardTitleText = document.createElement("h6");
		rewardTitleText.innerText = "Reward:"
		rewardPath.appendChild(rewardTitleText);

		var rewardWrap = document.createElement("b");
		rewardPath.appendChild(rewardWrap);


		var rewardValWrap = document.createElement("span");
		rewardWrap.appendChild(rewardValWrap);
		

		for(var u = 0; u < rwcount; u++) {
			var rewardImg = document.createElement("img");
			rewardImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(trainerReward)+".png";
			if (rwcount != 1) {
				rewardImg.title = trainerRewardCount+"x "+trainerReward;
			}
			else {
				rewardImg.title = trainerReward;
			}
			rewardImg.setAttribute("onerror","this.style.display='none';this.parentElement.parentElement.lastChild.style.display='unset';")
			rewardValWrap.appendChild(rewardImg)
		}

		var rewardText = document.createElement("h6");
		if (rwcount != 1) {
			rewardText.innerText = trainerRewardCount+"x "+trainerReward;
		}
		else {
			rewardText.innerText = trainerReward;
		}


		rewardText.innerHTML = rewardText.innerHTML.replaceAll("Pokémon Dollar",'<img src="./media/Images/Misc/Currency/VIII/Pokémon Dollar.png" title="Pokémon Dollar" />');
		rewardValWrap.appendChild(rewardText);
		rewardText.style.display = "none";


		rewardWrap.addEventListener("click",dataRedirect)
		rewardWrap.setAttribute("function","dataRedirect")
		rewardWrap.setAttribute("name","item");
		rewardWrap.setAttribute("value",trainerReward);
	}

	if (trainerInfo.length > 0) {
		var titleText = document.createElement("small");
		titleText.innerText = trainerInfo.join("\n");
		titlePath.appendChild(titleText);
	}



	if (trainerItem != undefined) {
		var itcount = trainerItemCount;
		if (itcount == undefined) {
			itcount = 1;
		}
		if (itcount > 5) {
			itcount = 5;
		}
		
		var itemsWrap = document.createElement("b");
		itemsPath.appendChild(itemsWrap);


		var itemsImgWrap = document.createElement("span");
		itemsWrap.appendChild(itemsImgWrap);

		for(var u = 0; u < itcount; u++) {
			var itemsImg = document.createElement("img");
			itemsImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(trainerItem)+".png";
			if (itcount != 1) {
				itemsImg.title = trainerItemCount+"x "+trainerItem;
			}
			else {
				itemsImg.title = trainerItem;
			}
			itemsImg.setAttribute("onerror","this.style.display='none';this.parentElement.parentElement.lastChild.style.display='unset';");
			itemsImgWrap.appendChild(itemsImg);
		}

		var itemsText = document.createElement("h6");
		if (itcount != 1) {
			itemsText.innerText = trainerItemCount+"x "+trainerItem;
		}
		else {
			itemsText.innerText = trainerItem;
		}
		itemsWrap.appendChild(itemsText);
		itemsText.style.display = "none";

		itemsWrap.addEventListener("click",dataRedirect)
		itemsWrap.setAttribute("function","dataRedirect")
		itemsWrap.setAttribute("name","item");
		itemsWrap.setAttribute("value",trainerItem);
	}

	var groups = [];
	var datas = [];
	if (trainers[q]["Pokémon"].includes("\n")) {
		datas = trainers[q]["Pokémon"].split("\n");
	}
	else {
		datas = [datas]
	}



	for(var u = 0; u < datas.length; u++) {
	
		var data = datas[u];
		var pok = undefined;
		var item = undefined;
		var level = undefined;
		var gender = undefined;
		var move = undefined;
		var ability = undefined;
		var iv = undefined;
		var ev = undefined;
		var nature = undefined;

		if(data.includes("|")) {
			data = data.split("|")
			for (var r = 0; r < data.length; r++) {
				if (data[r].split(":")[0] == "pok") {
					pok = data[r].replaceAll(data[r].split(":")[0]+":","")
				}
				if (data[r].split(":")[0] == "it") {
					item = data[r].replaceAll(data[r].split(":")[0]+":","")
				}
				if (data[r].split(":")[0] == "lv") {
					level = data[r].replaceAll(data[r].split(":")[0]+":","")
				}
				if (data[r].split(":")[0] == "ge") {
					gender = data[r].replaceAll(data[r].split(":")[0]+":","")
				}
				if (data[r].split(":")[0] == "mo") {
					move = data[r].replaceAll(data[r].split(":")[0]+":","")
				}
				if (data[r].split(":")[0] == "ab") {
					ability = data[r].replaceAll(data[r].split(":")[0]+":","")
				}
				if (data[r].split(":")[0] == "iv") {
					iv = data[r].replaceAll(data[r].split(":")[0]+":","")
				}
				if (data[r].split(":")[0] == "ev") {
					ev = data[r].replaceAll(data[r].split(":")[0]+":","")
				}
				if (data[r].split(":")[0] == "na") {
					nature = data[r].replaceAll(data[r].split(":")[0]+":","")
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
		}




		
		var grp = trainers[q]["Grouping"];
		if (u == 0) {
			grp = undDel(grp,"Pokémon");
		}

		if (grp != undefined) {
			if (grp.includes("|")) {
				if (!groups.includes(grp.split("|")[u])) {
					var grpWrap = document.createElement("span");
					var grpTxt = document.createElement("h6");
					grpTxt.innerText = grp.split("|")[u];
					ulPath.appendChild(grpWrap);
					grpWrap.appendChild(grpTxt);
					

					var grpFig = document.createElement("figure");
					grpFig.setAttribute("name","export");
					grpWrap.appendChild(grpFig)
					grpFig.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})
					var grpFigText = document.createElement("small");
					grpFigText.innerText = "⮟";
					grpFig.appendChild(grpFigText)
					var grpFigTop = document.createElement("div");
					grpFig.appendChild(grpFigTop)
					var grpFigTopWrap = document.createElement("span");
					grpFigTop.appendChild(grpFigTopWrap)
					var grpFigOpts = ["Copy Data Strings","Send to Damage Calculator"];
	
					for(var e = 0; e < grpFigOpts.length; e++) {
						var grpFigWrapTop = document.createElement("span");
						var grpFigWrap = document.createElement("b");
						var grpFigTxt = document.createElement("small");
						grpFigWrapTop.setAttribute("name",grpFigOpts[e]);
						grpFigWrap.setAttribute("type","invert");
						grpFigTxt.innerText = grpFigOpts[e];
						grpFigTopWrap.appendChild(grpFigWrapTop);
						grpFigWrapTop.appendChild(grpFigWrap);
						grpFigWrap.appendChild(grpFigTxt);
						grpFigWrap.addEventListener("click",grpFigFunction);
					}
				}
		
				groups.push(grp.split("|")[u])
			}
			else {
				if (!groups.includes(grp)) {
					var grpWrap = document.createElement("span");
					var grpTxt = document.createElement("h6");
					grpTxt.innerText = grp;
					ulPath.appendChild(grpWrap);
					grpWrap.appendChild(grpTxt);


					var grpFig = document.createElement("figure");
					grpFig.setAttribute("name","export");
					grpWrap.appendChild(grpFig)
					grpFig.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})
					var grpFigText = document.createElement("small");
					grpFigText.innerText = "⮟";
					grpFig.appendChild(grpFigText)
					var grpFigTop = document.createElement("div");
					grpFig.appendChild(grpFigTop)
					var grpFigTopWrap = document.createElement("span");
					grpFigTop.appendChild(grpFigTopWrap)
					var grpFigOpts = ["Copy Data Strings","Send to Damage Calculator"];
	
					for(var e = 0; e < grpFigOpts.length; e++) {
						var grpFigWrapTop = document.createElement("span");
						var grpFigWrap = document.createElement("b");
						var grpFigTxt = document.createElement("small");
						grpFigWrapTop.setAttribute("name",grpFigOpts[e]);
						grpFigWrap.setAttribute("type","invert");
						grpFigTxt.innerText = grpFigOpts[e];
						grpFigTopWrap.appendChild(grpFigWrapTop);
						grpFigWrapTop.appendChild(grpFigWrap);
						grpFigWrap.appendChild(grpFigTxt);
						grpFigWrap.addEventListener("click",grpFigFunction);
					}
				}
		
				groups.push(grp)
			}
			function grpFigFunction() {

			
				const val = this.parentElement.getAttribute("name");
				const dataStrings = findUpAtt(this,"data-string").getAttribute("data-string");
				const base = findUpAtt(this,"data-string");

				let battleType = document.querySelector("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] > div").getAttribute("data-type");
				battleType = undDel(battleType,"");
	
				let sel = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='options'] > div:first-child > span:first-child > select");
				let els = sel.querySelectorAll(":scope option")
				let el = sel.querySelector(":scope option[value='"+sel.getAttribute("value")+"']")


				if (battleType != undefined) {
					for (var t = 0; t < els.length; t++) {
						if (els[t].getAttribute("value").includes(battleType)) {
							el = els[t];
							break;
						}
					}
				}
				

				let suggestChange = false;

				if (sel.value != el.value) {
					suggestChange = true;
				}
		

	
				if (val == "Copy Data Strings") {
					navigator.clipboard.writeText(dataStrings);
					console.log(dataStrings)
					consoleText("Copied Data String!")
				}
				else if (val == "Send to Damage Calculator") {
					let dmgBoxes = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span > span[name]:not([name='team 1'])");

					if (base.firstChild.innerText != undefined) {
						if (base.firstChild.innerText.toLowerCase().includes("player")) {
							dmgBoxes = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span > span[name='team 1']");
						}
					}
				
					for (var t = 0; t < dmgBoxes.length; t++) {
						if (dmgBoxes[t].getAttribute("data-string") == "") {
							if (suggestChange) {
								sel.value = el.value;
								const preval = sel.getAttribute("name");
								let x = sel.value;
								let y = sel.querySelector(":scope option[value='"+x+"']");
								let keys = y.getAttributeNames();
								for(var q = 0; q < keys.length; q++) {
									let val1 = keys[q];
									let val2 = y.getAttribute(keys[q]);
									sel.setAttribute(val1,val2);
								}
								buildDMG(preval)
							}
							DMGPartyCreate(dmgBoxes[t],dataStrings);
							SwitchTab("Tools","Damage Calculator");
							return;
						}
					}
				
			
					let ask = confirm("Do you want to replace existing Pokémon in the Party?");
					if (ask) {
						dmgBoxes[0].setAttribute("data-string","")
						if (suggestChange) {
							sel.value = el.value;
							const preval = sel.getAttribute("name");
							let x = sel.value;
							let y = sel.querySelector(":scope option[value='"+x+"']");
							let keys = y.getAttributeNames();
							for(var q = 0; q < keys.length; q++) {
								let val1 = keys[q];
								let val2 = y.getAttribute(keys[q]);
								sel.setAttribute(val1,val2);
							}
							buildDMG(preval)
						}
						DMGPartyCreate(dmgBoxes[0],dataStrings);
						SwitchTab("Tools","Damage Calculator");
						return;
					}

					let ask2 = confirm("Do you want to continue without overriding existing Pokémon?");
					if (ask2) {
						if (suggestChange) {
							sel.value = el.value;
							const preval = sel.getAttribute("name");
							let x = sel.value;
							let y = sel.querySelector(":scope option[value='"+x+"']");
							let keys = y.getAttributeNames();
							for(var q = 0; q < keys.length; q++) {
								let val1 = keys[q];
								let val2 = y.getAttribute(keys[q]);
								sel.setAttribute(val1,val2);
							}
							buildDMG(preval)
						}
						DMGPartyCreate(dmgBoxes[0],dataStrings);
						SwitchTab("Tools","Damage Calculator");
						return;
					}
					
				}
			
				
			}
		}




		var li = document.createElement("li");
		ulPath.appendChild(li);

		var liMain = document.createElement("div");
		li.appendChild(liMain);
		var liAdditional = document.createElement("div");
		li.appendChild(liAdditional);




		

		if (u == 0) {

			for (var t = 0; t < 6; t++) {
				var outer = document.createElement("span");
				pokCountPath.appendChild(outer);

				var empty = document.createElement("div");
				empty.classList.add("empty");
				outer.appendChild(empty);
				
			}

			if (trainerCount != undefined) {
				for (var t = 0; t < trainerCount; t++) {
					var x = t+1;
					var span = pokCountPath.querySelector(":scope > span:nth-child("+x+")");
					span.firstChild.classList.remove("empty");
					span.firstChild.classList.add("pokéball");
				}
			}
			else {
				for (var t = 0; t < 6; t++) {
					var x = t+1;
					var span = pokCountPath.querySelector(":scope > span:nth-child("+x+")");
			
					if (datas[t] != undefined) {
						span.firstChild.classList.remove("empty");
						span.firstChild.classList.add("pokéball");
					}
				}
			}

			
			
		}

		if (nature != undefined || ability != undefined || level != undefined || gender != undefined) {
			var pokLeft = document.createElement("div");
			var pokLeftWrap = document.createElement("span");
			pokLeft.setAttribute("name", "data");
			liMain.appendChild(pokLeft);
			pokLeft.appendChild(pokLeftWrap);

			if (move == undefined && iv == undefined && ev == undefined) {
				pokLeft.style.width = "25%";
			}
		
			if (nature != undefined) {
				var natureText = document.createElement("small");
				natureText.innerText = nature;
				if (getNatureTitle(nature) == "Neutral") {
					natureText.title = "Neutral Nature";
				}
				else {
					natureText.title = getNatureTitle(nature);
				}
				natureText.setAttribute("name","nature");
				pokLeftWrap.appendChild(natureText);
			}

			if (ability != undefined) {
				var desc = returnAppArrData(finaldataAbilityDescription,"Ability",ability);

				var abilityWrap = document.createElement("b");
				var abilityText = document.createElement("p");
				abilityText.innerText = ability;
				abilityWrap.title = getAbilityPosition(getPokémonInt(pok),ability)+" Ability";
				if (desc.length > 0) {
					abilityWrap.title += "\n"+desc[0]["Description"];
				}
				else {
					console.log("#DEBUG# "+ability+" is missing description?");
				}
				abilityWrap.setAttribute("name","ability");
				pokLeftWrap.appendChild(abilityWrap);
				abilityWrap.appendChild(abilityText);
				abilityWrap.addEventListener("click", dataRedirect);
				abilityWrap.setAttribute("function","dataRedirect");
			}
			if (level != undefined) {
				var levelText = document.createElement("small");
				if (level.includes("-")) {
					levelText.innerText = "Lvls. "+level;
				}
				else {
					levelText.innerText = "Lvl. "+level;
				}
				pokLeftWrap.appendChild(levelText);
			}
			if (gender != undefined) {
				var genderText = document.createElement("small");
				genderText.setAttribute("name","gender");
				if (gender == "♂") {
					genderText.setAttribute("title", "Male");
				}
				if(gender == "♀") {
					genderText.setAttribute("title", "Female");
				}
				if(gender == "☿") {
					genderText.setAttribute("title", "Genderless");
				}
				genderText.innerText = gender;
				pokLeftWrap.appendChild(genderText);
			}
		}


		var pokCenter = document.createElement("div");
		var pokCenterWrap = document.createElement("span");
		pokCenter.setAttribute("name", "pokémon");
		liMain.appendChild(pokCenter);
		pokCenter.appendChild(pokCenterWrap);

		if (item != undefined) {
			var heldImg = document.createElement("img");
			heldImg.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(item)+".png";
			heldImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
			heldImg.setAttribute("title",item);
			heldImg.setAttribute("name","item");
			heldImg.setAttribute("value",item);
			pokCenter.appendChild(heldImg);
			heldImg.addEventListener("click", dataRedirect);
			heldImg.setAttribute("function","dataRedirect");
		}

		var pokImg = document.createElement("img");
		pokImg.src = "./media/Images/Pokémon/Battle/PNG/Default/Front/"+ImageTypes[0]["path"]+"/"+getPokémonMediaPath(getPokémonInt(pok),"Battle")+".png";
		pokImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
		pokImg.setAttribute("title", pok);
		pokCenterWrap.setAttribute("value",getPokémonInt(pok));
		pokCenterWrap.appendChild(pokImg);
		pokCenterWrap.addEventListener("click", modalData);
		pokCenterWrap.setAttribute("function","modalData");

		var pokName = document.createElement("small");
		pokName.innerText = pok;
		pokCenterWrap.appendChild(pokName);

		if (move != undefined || iv != undefined || ev != undefined) {
			var pokRight = document.createElement("div");
			pokRight.setAttribute("name","moves");
			liMain.appendChild(pokRight);
		}

		if (move != undefined) {
			var moves = undefined;


			if (move.includes(",")) {
				moves = move.split(",");
			}
			else {
				moves = move;
			}
			for(var y = 0; y < moves.length; y++) {
				var pokRightMovesWrap = document.createElement("b");
				var pokRightMovesText = document.createElement("p");
				pokRightMovesText.innerText = moves[y];
				pokRightMovesWrap.title = formatMoveData(moves[y]);
				pokRightMovesWrap.style.color = "var(--type"+returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,moves[y])+")";
				pokRightMovesWrap.setAttribute("name","move");
				pokRight.appendChild(pokRightMovesWrap);
				pokRightMovesWrap.appendChild(pokRightMovesText);
				pokRightMovesWrap.addEventListener("click", dataRedirect);
				pokRightMovesWrap.setAttribute("function","dataRedirect");
				if (moves[y] != "") {
					if(returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,moves[y]) == undefined) {
						console.log("#DEBUG# "+moves[y]+" needs formatting?");
					}
					
					var moveset = returnMoveSet(getPokémonInt(pok),"onlymoves,noduplicate");
					if (!moveset.includes(moves[y])) {
						console.log("#DEBUG# "+pok+" cannot learn "+moves[y]+"?");
					}

				}
			}
		}

		if (iv != undefined) {
			var ivs = undefined;
			var pokRightIV = document.createElement("div");
			pokRightIV.setAttribute("name", "ivs");
			liAdditional.appendChild(pokRightIV);
			var pokRightIVTitle = document.createElement("span");
			var pokRightIVTitleText = document.createElement("small");
			pokRightIVTitleText.innerText = "Individual Values:";
			pokRightIV.appendChild(pokRightIVTitle);
			pokRightIVTitle.appendChild(pokRightIVTitleText);


			var pokRightIVMain = document.createElement("span");
			pokRightIV.appendChild(pokRightIVMain);
			if (iv.includes(",")) {
				ivs = iv.split(",");
			}
			else {
				ivs = iv;
			}
			for(var y = 0; y < ivs.length; y++) {
				if (ivs[y] != "") {
					var pokRightIVText = document.createElement("small");
					pokRightIVText.setAttribute("name","iv");
					pokRightIVText.innerHTML = "<span name='"+Stats[y]+"'>"+Stats[y]+"</span>"+ivs[y];
					pokRightIVMain.appendChild(pokRightIVText);
				}
			}
		}

		if (ev != undefined) {
			var evs = undefined;
			var pokRightEV = document.createElement("div");
			pokRightEV.setAttribute("name", "evs");
			liAdditional.appendChild(pokRightEV);
			var pokRightEVTitle = document.createElement("span");
			var pokRightEVTitleText = document.createElement("small");
			pokRightEVTitleText.innerText = "Effort Values:";
			pokRightEV.appendChild(pokRightEVTitle);
			pokRightEVTitle.appendChild(pokRightEVTitleText);


			var pokRightEVMain = document.createElement("span");
			pokRightEV.appendChild(pokRightEVMain);
			if (ev.includes(",")) {
				evs = ev.split(",");
			}
			else {
				evs = ev;
			}
			for(var y = 0; y < evs.length; y++) {
				if (evs[y] != "") {
					var pokRightEVText = document.createElement("small");
					pokRightEVText.setAttribute("name","ev");
					pokRightEVText.innerHTML = "<span name='"+Stats[y]+"'>"+Stats[y]+"</span>"+evs[y];
					pokRightEVMain.appendChild(pokRightEVText);
				}
			}
		}


		var exportButton = document.createElement("figure");
		var exportButtonText = document.createElement("p");
		exportButtonText.innerText = "⮟";
		exportButton.title = "Export Pokémon Buttons String";
		exportButton.setAttribute("name","export");
		exportButton.setAttribute("type","scale");
		liMain.appendChild(exportButton);
		exportButton.appendChild(exportButtonText);

		exportButton.addEventListener("click", trainerPokExport);

		li.setAttribute("data-string",datas[u]);




		let eles = [];
		let startEle = li;
		for(var y = 0; y < 1000; y++) {
			if (startEle != undefined && startEle.tagName != "SPAN") {
				eles.push(startEle);
				startEle = startEle.previousElementSibling;
			}
			else {
				break;
			}
		}
		startEle = li.nextElementSibling;
		for(var y = 0; y < 1000; y++) {
			if (startEle != undefined && startEle.tagName != "SPAN") {
				eles.push(startEle);
				startEle = startEle.nextElementSibling;
			}
			else {
				break;
			}
		
		}
		eles = eles.reverse();
		for(var y = 0; y < eles.length; y++) {
			eles[y] = eles[y].getAttribute("data-string");
		}
		startEle = li;
		for(var y = 0; y < 1000; y++) {
			if (startEle.tagName == "SPAN") {
				if (eles.length > 0) {
					startEle.setAttribute("data-string",eles.join("\n"));
				}
				else {
					startEle.setAttribute("data-string","");
				}
				break;
			}
			else {
				startEle = startEle.previousElementSibling;
			}
		}


	}
	
	trainerName = undDel(trainerName,"");
	trainerClass = undDel(trainerClass,"");
	trainerGender = undDel(trainerGender,"");
	trainerCount = undDel(trainerCount,"");
	trainerArea = undDel(trainerArea,"");
	trainerType = undDel(trainerType,"");
	let basediv = base.querySelector(":scope > div");
	basediv.setAttribute("data-name",trainerName);
	basediv.setAttribute("data-class",trainerClass);
	basediv.setAttribute("data-gender",trainerGender);
	basediv.setAttribute("data-count",trainerCount);
	basediv.setAttribute("data-area",trainerArea);
	basediv.setAttribute("data-type",trainerType);
	
}



function doubleClicker(handler) {
	var timeout = 0,
		clicked = false;
	return function(e) {
		e.preventDefault();
		if(clicked) {
			clearTimeout(timeout);
			clicked = false;
			return handler.apply(this, arguments);
		} else {
			clicked = true;
			timeout = setTimeout(function() {
				clicked = false;
			}, 300);
		}
	};
}


$("body").click(function(event) {
	if(!$(event.target).closest("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] span[name='search']").length && !$(event.target).is("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] span[name='search']")) {
		$("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] span[name='search'] ol").removeClass("active");
	}
	if(!$(event.target).closest("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] ul > span > figure[name='export']").length && !$(event.target).is("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] ul > span > figure[name='export']")) {
		$("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] ul > span > figure[name='export']").removeClass("active");
	}
});



function updateTitleHeader(what) {

	var what;
	var id;

	id = "#contain div#map > section[name='sidebar'] > div > *[name='"+what.toLowerCase()+"']"

	var thetitle = $(id+' > *:first-child');
	var objects = $(id+' > ul');


	for (var t = 0; t < objects.length; t++) {
		var x = t+2;
		var absoluteTop = $(id).offset().top;
		var relativeTop = $(id+' > ul:nth-child('+x+')').offset().top;
		var atitle = objects.get(t).querySelector(":scope > h4:first-child");

		if (absoluteTop > relativeTop) {
			if (atitle != null) {
				thetitle.html("<h5>"+atitle.innerText+"</h5>");
				thetitle.css("display","flex");
			}
			else {
				thetitle.text("");
				thetitle.css("display","none");
			}
		}
		if (absoluteTop <= $(id+' > ul:nth-child('+2+')').offset().top) {
			thetitle.text("");
			thetitle.css("display","none");
		}
	}
}
	