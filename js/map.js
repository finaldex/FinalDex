let createMap = function() {
	let mapOuter = document.createElement("div");
	let mapSectionList = document.createElement("section");
	let mapSectionListOptionsTitleOuter = document.createElement("div");
	let mapSectionListOptionsSearchOuter = document.createElement("div");
	let mapSectionListOptionsSearch = document.createElement("input");
	let mapSectionHeader = document.createElement("section");
	let mapSectionHeaderTitle = document.createElement("span");
	let mapSectionHeaderTitleText = document.createElement("h3");
	let mapSectionHeaderFlavor = document.createElement("span");
	let mapSectionHeaderFlavorText = document.createElement("h5");

	let mapSectionSidebar = document.createElement("section");
	mapOuter.setAttribute("id","map");
	mapOuter.setAttribute("value","map");

	mapSectionListOptionsSearch.setAttribute("type", "search");
	mapSectionListOptionsSearch.setAttribute("name", "location_search");

	mapSectionListOptionsSearch.setAttribute("placeholder", "Search Locations...");
	mapSectionListOptionsSearch.setAttribute("onfocus", "this.placeholder=''");
	mapSectionListOptionsSearch.setAttribute("onblur", "this.placeholder='Search Locations...'");
	mapSectionListOptionsSearch.setAttribute("autocomplete", "off");
	/*mapSectionHeaderTitleText.innerText = "Map of "+Region.replaceAll(","," & ");*/
	mapSectionHeaderFlavor.setAttribute("title", "Slogan")
	document.querySelector("#contain").appendChild(mapOuter);
	mapOuter.appendChild(mapSectionList);
	mapSectionList.appendChild(mapSectionListOptionsTitleOuter);
	mapSectionListOptionsTitleOuter.appendChild(mapSectionListOptionsSearchOuter);
	mapSectionListOptionsSearchOuter.appendChild(mapSectionListOptionsSearch);
	mapOuter.appendChild(mapSectionHeader);
	mapSectionHeader.appendChild(mapSectionHeaderTitle);
	mapSectionHeaderTitle.appendChild(mapSectionHeaderTitleText);
	mapSectionHeader.appendChild(mapSectionHeaderFlavor);
	mapSectionHeaderFlavor.appendChild(mapSectionHeaderFlavorText);





	let mapSectionContent = document.createElement("section");
	let mapSectionContentMapOuter = document.createElement("div");
	let mapSectionContentMapOuter2 = document.createElement("div");
	let mapSectionContentMapInner = document.createElement("div");
	let mapSectionContentMapInner2 = document.createElement("div");
	let mapSectionContentMapZoomReset = document.createElement("figure");
	let mapSectionContentMapZoomResetText = document.createElement("h2");
	let mapSectionContentMapZoomIn = document.createElement("figure");
	let mapSectionContentMapZoomInText = document.createElement("h3");
	let mapSectionContentMapFullscreen = document.createElement("figure");
	let mapSectionContentMapFullscreenText = document.createElement("h5");
	let mapSectionContentMapPause = document.createElement("figure");
	let mapSectionContentMapPauseText = document.createElement("h2");
	let mapSectionContentMapImg = document.createElement("img");
	let mapSectionContentMap = document.createElement("map");

	mapSectionContentMapZoomReset.setAttribute("type","scale");
	mapSectionContentMapZoomReset.setAttribute("name","reset");
	mapSectionContentMapZoomResetText.innerText = "-";
	mapSectionContentMapZoomIn.setAttribute("type","scale");
	mapSectionContentMapZoomIn.setAttribute("name","zoom");
	mapSectionContentMapZoomInText.innerText = "+";
	mapSectionContentMapFullscreen.setAttribute("name","fullscreen");
	mapSectionContentMapFullscreenText.innerText = "⛶";
	mapSectionContentMapPause.setAttribute("name","pause");
	mapSectionContentMapPauseText.innerText = "❙❙";

	mapSectionContentMapImg.src = getMedia(true,["Map"],[PATH_Region_Map])

	mapSectionContentMapImg.setAttribute("usemap","#"+Region.join("_").replaceAll(" ","")+"-map");
	mapOuter.appendChild(mapSectionContent);
	mapSectionContent.appendChild(mapSectionContentMapOuter);

	mapSectionContentMap.setAttribute("name",Region.join("_").replaceAll(" ","")+"-map");
	mapSectionContentMap.setAttribute("id",Region.join("_").replaceAll(" ","")+"-map");

	mapSectionContentMapOuter.setAttribute("name","map");


	let dir1 = ["Left","Top"];
	for(let q = 0; q < dir1.length; q++) {
		let mapSectionContentMapDirection = document.createElement("span");
		let mapSectionContentMapDirectionInner = document.createElement("figure");
		let mapSectionContentMapDirectionInnerText = document.createElement("p");
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





	mapSectionListOptionsSearch.addEventListener("input", function() {search("Map");});
	mapSectionListOptionsSearch.addEventListener("keyup", function() {search("Map");});

	mapSectionContentMapInner2.addEventListener("mousedown",function(event){if(event.button === 1){fullscreenIMG([mapSectionContentMapImg],0)}});

	mapSectionContentMapFullscreen.addEventListener("click", function(){fullscreenIMG([mapSectionContentMapImg],0)})

	mapSectionContentMapInner2.setAttribute("data-scale","1.5");
	mapSectionContentMapInner2.style.transitionDuration = "1s";
	mapSectionContentMapInner2.style.transitionProperty = "transform";
	

	mapSectionContentMapInner2.addEventListener("click", function() {zoom(mapSectionContentMapInner2,"pause",undefined)});
	mapSectionContentMapZoomIn.addEventListener("click",function() {zoom(mapSectionContentMapInner2,"in",false)});
	mapSectionContentMapZoomReset.addEventListener("click",function() {zoom(mapSectionContentMapInner2,"out",true)});
	mapSectionContentMapInner2.addEventListener("wheel",function(event){let delta = event.deltaY.toString();if(delta.includes("-")){zoom(mapSectionContentMapInner2,"in",false)}else if(!delta.includes("-")){zoom(mapSectionContentMapInner2,"out",true)}});
	mapSectionContentMapInner2.addEventListener("mouseleave", function() {zoom(mapSectionContentMapInner2,"out",undefined)});
	mapSectionContentMapInner2.addEventListener("mouseenter", function() {zoom(mapSectionContentMapInner2,"in",undefined)});
	mapSectionContentMapInner2.addEventListener("mousemove", function() {zoom(mapSectionContentMapInner2,"pan",undefined)});




	let dir2 = ["Bottom","Right"];
	for(let q = 0; q < dir2.length; q++) {
		let mapSectionContentMapDirection = document.createElement("span");
		let mapSectionContentMapDirectionInner = document.createElement("figure");
		let mapSectionContentMapDirectionInnerText = document.createElement("p");
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









    let mapSectionHeaderGame = document.createElement("span");
    let mapSectionHeaderGameImage = document.createElement("img");
    mapSectionHeaderGameImage.src = getMedia(true,["Title"],[PATH_Game_Title])
    mapSectionHeaderGameImage.setAttribute("onerror","this.display='none'");
    mapSectionHeader.appendChild(mapSectionHeaderGame);
    mapSectionHeaderGame.appendChild(mapSectionHeaderGameImage);

	let mapSectionContentAreaNavigation = document.createElement("div");
	mapSectionContentAreaNavigation.setAttribute("name","navigation");
	mapSectionContent.appendChild(mapSectionContentAreaNavigation);
	let mapSectionContentAreaOuter = document.createElement("div");
	let mapSectionContentArea = document.createElement("span");
	mapSectionContentAreaNavigation.appendChild(mapSectionContentAreaOuter);
	mapSectionContentAreaOuter.appendChild(mapSectionContentArea);
	let mapSectionContentAreaContent = document.createElement("span");
	let mapSectionContentAreaTitle = document.createElement("h5");
	mapSectionContentAreaTitle.innerText = "Sub Area/Location";
	mapSectionContentArea.appendChild(mapSectionContentAreaContent);
	mapSectionContentAreaContent.appendChild(mapSectionContentAreaTitle);
	let mapSectionContentNavigationOuter = document.createElement("div");
	let mapSectionContentNavigation = document.createElement("span");
	let mapSectionContentNavigationContent = document.createElement("span");
	let mapSectionContentNavigationTitle = document.createElement("h5");
	mapSectionContentNavigationTitle.innerText = "Required for Navigation";
	mapSectionContentAreaNavigation.appendChild(mapSectionContentNavigationOuter);
	mapSectionContentNavigationOuter.appendChild(mapSectionContentNavigation);
	mapSectionContentNavigation.appendChild(mapSectionContentNavigationContent);
	mapSectionContentNavigationContent.appendChild(mapSectionContentNavigationTitle);
	mapOuter.appendChild(mapSectionSidebar);
	let mapSectionSidebarDescription = document.createElement("div");

	mapSectionSidebar.appendChild(mapSectionSidebarDescription);

	let DescriptionSelector = document.createElement("div");
	mapSectionSidebarDescription.appendChild(DescriptionSelector);

	let mapSectionSidebarDescriptionOview = document.createElement("div");

	mapSectionSidebarDescriptionOview.setAttribute("name", "overview");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionOview);

	let mapSectionSidebarDescriptionOviewHeader = document.createElement("span");
	let mapSectionSidebarDescriptionOviewHeaderText = document.createElement("h6");
	mapSectionSidebarDescriptionOview.appendChild(mapSectionSidebarDescriptionOviewHeader);
	mapSectionSidebarDescriptionOviewHeader.appendChild(mapSectionSidebarDescriptionOviewHeaderText);

	let mapSectionSidebarDescriptionOviewSelectorOuter = document.createElement("div");
	mapSectionSidebarDescriptionOview.appendChild(mapSectionSidebarDescriptionOviewSelectorOuter);

	let mapSectionSidebarDescriptionOviewButtonLeft = document.createElement("span");
	let mapSectionSidebarDescriptionOviewButtonLeftButton = document.createElement("figure");
	let mapSectionSidebarDescriptionOviewButtonLeftButtonText = document.createElement("h3");
	mapSectionSidebarDescriptionOviewButtonLeftButtonText.innerText = "‹";
	mapSectionSidebarDescriptionOviewButtonLeftButton.setAttribute("value",0);
	mapSectionSidebarDescriptionOviewSelectorOuter.appendChild(mapSectionSidebarDescriptionOviewButtonLeft);
	mapSectionSidebarDescriptionOviewButtonLeft.appendChild(mapSectionSidebarDescriptionOviewButtonLeftButton);
	mapSectionSidebarDescriptionOviewButtonLeftButton.appendChild(mapSectionSidebarDescriptionOviewButtonLeftButtonText);
	mapSectionSidebarDescriptionOviewButtonLeftButton.addEventListener("click", function() {overviewMove("left");});

	let mapSectionSidebarDescriptionOviewSelector = document.createElement("ul");
	mapSectionSidebarDescriptionOviewSelector.addEventListener("wheel",function(event){let delta = event.deltaY.toString();if(delta.includes("-")){overviewMove("left")}else if(!delta.includes("-")){overviewMove("right")}});
	mapSectionSidebarDescriptionOviewSelectorOuter.appendChild(mapSectionSidebarDescriptionOviewSelector);

	let mapSectionSidebarDescriptionOviewButtonRight = document.createElement("span");
	let mapSectionSidebarDescriptionOviewButtonRightButton = document.createElement("figure");
	let mapSectionSidebarDescriptionOviewButtonRightButtonText = document.createElement("h3");
	mapSectionSidebarDescriptionOviewButtonRightButtonText.innerText = "›";
	mapSectionSidebarDescriptionOviewButtonRightButton.setAttribute("value",0);
	mapSectionSidebarDescriptionOviewSelectorOuter.appendChild(mapSectionSidebarDescriptionOviewButtonRight);
	mapSectionSidebarDescriptionOviewButtonRight.appendChild(mapSectionSidebarDescriptionOviewButtonRightButton);
	mapSectionSidebarDescriptionOviewButtonRightButton.appendChild(mapSectionSidebarDescriptionOviewButtonRightButtonText);


	
	mapSectionSidebarDescriptionOviewButtonRightButton.addEventListener("click", function() {overviewMove("right");});

	let mapSectionSidebarDescriptionOviewDescription = document.createElement("span");

	mapSectionSidebarDescriptionOview.appendChild(mapSectionSidebarDescriptionOviewDescription);




	let mapSectionSidebarDescriptionPok = document.createElement("div");
	let mapSectionSidebarDescriptionPokHead = document.createElement("span");
	let mapSectionSidebarDescriptionPokHeadText = document.createElement("h5");

	mapSectionSidebarDescriptionPok.setAttribute("name", "pokémon");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionPok);
	mapSectionSidebarDescriptionPok.appendChild(mapSectionSidebarDescriptionPokHead);
	mapSectionSidebarDescriptionPokHead.appendChild(mapSectionSidebarDescriptionPokHeadText);

	let mapSectionSidebarDescriptionItem = document.createElement("div");
	let mapSectionSidebarDescriptionItemHead = document.createElement("span");
	let mapSectionSidebarDescriptionItemHeadText = document.createElement("h5");

	mapSectionSidebarDescriptionItem.setAttribute("name", "items");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionItem);
	mapSectionSidebarDescriptionItem.appendChild(mapSectionSidebarDescriptionItemHead);
	mapSectionSidebarDescriptionItemHead.appendChild(mapSectionSidebarDescriptionItemHeadText);


	let mapSectionSidebarDescriptionShop = document.createElement("div");
	let mapSectionSidebarDescriptionShopHead = document.createElement("span");
	let mapSectionSidebarDescriptionShopHeadText = document.createElement("h5");

	mapSectionSidebarDescriptionShop.setAttribute("name", "shop");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionShop);
	mapSectionSidebarDescriptionShop.appendChild(mapSectionSidebarDescriptionShopHead);
	mapSectionSidebarDescriptionShopHead.appendChild(mapSectionSidebarDescriptionShopHeadText);


	let mapSectionSidebarDescriptionTrainer = document.createElement("div");

	mapSectionSidebarDescriptionTrainer.setAttribute("name", "trainers");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionTrainer);


	let mapSectionSidebarDescriptionTutor = document.createElement("div");

	mapSectionSidebarDescriptionTutor.setAttribute("name", "movetutor");
	mapSectionSidebarDescription.appendChild(mapSectionSidebarDescriptionTutor);

	let mapSectionListOptionsOuter = document.createElement("div");
	let mapSectionListOptions = document.createElement("ol");

	mapSectionListOptionsOuter.setAttribute("name", "0");
	mapSectionList.appendChild(mapSectionListOptionsOuter);
	mapSectionListOptionsOuter.appendChild(mapSectionListOptions);
	for(let q = 0; q < finaldata["Locations"]["Reference"].length; q++) {
		if (getApplicable(finaldata["Locations"]["Reference"][q]["Game"])) {
			let mapSectionListOptionsInput = document.createElement("input");
			let mapSectionListOptionsLabel = document.createElement("label");
			let mapSectionListOptionsText = document.createElement("h5");
			mapSectionListOptionsInput.setAttribute("type", "radio");
			mapSectionListOptionsInput.setAttribute("name", "map-options");
			mapSectionListOptionsInput.setAttribute("id", "map-options-"+q);
			mapSectionListOptionsInput.setAttribute("autocomplete", "off");
			mapSectionListOptionsInput.value = q;
			mapSectionListOptionsLabel.setAttribute("for", "map-options-"+q);
			mapSectionListOptionsLabel.setAttribute("type","medium");
			mapSectionListOptionsLabel.setAttribute("data-name", finaldata["Locations"]["Reference"][q]["Location"].toLowerCase());
			mapSectionListOptionsLabel.setAttribute("data-title", finaldata["Locations"]["Reference"][q]["Location"].toLowerCase());
			let poi = [];
			for(let u = 0; u < finaldata["Locations"]["Point of Interest"].length; u++) {
				if (getApplicable(finaldata["Locations"]["Point of Interest"][u]["Game"])) {
					if (finaldata["Locations"]["Point of Interest"][u]["Location"] == finaldata["Locations"]["Reference"][q]["Location"]) {
						poi.push(finaldata["Locations"]["Point of Interest"][u]["Point of Interest"]);
					}
				}
			}
			if (poi.length > 0) {
				mapSectionListOptionsLabel.setAttribute("data-search-pointofinterest",poi.join(",").toLowerCase());
			}
			else {
				mapSectionListOptionsLabel.setAttribute("data-search-pointofinterest","none");
			}


			let nav = [];
			for(let u = 0; u < finaldata["Locations"]["Navigation"].length; u++) {
				if (finaldata["Locations"]["Navigation"][u]["Location"] == finaldata["Locations"]["Reference"][q]["Location"]) {
					nav.push(finaldata["Locations"]["Navigation"][u]["Location"]);
				}
			}
			if (nav.length > 0) {
				mapSectionListOptionsLabel.setAttribute("data-search-navigation",nav.join(",").toLowerCase());
			}
			else {
				mapSectionListOptionsLabel.setAttribute("data-search-navigation","none");
			}

			mapSectionListOptionsText.innerText = finaldata["Locations"]["Reference"][q]["Location"];
			mapSectionListOptions.appendChild(mapSectionListOptionsInput);
			mapSectionListOptions.appendChild(mapSectionListOptionsLabel);
			mapSectionListOptionsLabel.appendChild(mapSectionListOptionsText);
			mapSectionListOptionsInput.addEventListener("click", mapOptionsSelector);
			mapSectionListOptionsLabel.setAttribute("tabindex",q+10);
			mapSectionListOptionsLabel.addEventListener("keyup",function(event){if(event.which === 13){if(event.target.previousElementSibling.checked == false) {event.target.previousElementSibling.checked = true;mapOptionsSelector(event.target.previousElementSibling.value);}}});
		}
	}

	let searchLis = document.querySelectorAll("#contain > div#map > section[name='list'] ol > label");
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
		if (this.value != undefined) {
			i = this.value;
		}
		let location = finaldata["Locations"]["Reference"][i]["Location"];
		let trainers = getArrDataIndexed(finaldata["Location Trainers"]["Trainers"],"Location",location);
		let shops = getArrDataIndexed(finaldata["Location Pokémon"]["Shop"],"Location",location).concat(getArrDataIndexed(finaldata["Location Items"]["Shop"],"Location",location));
		let items = getArrDataIndexed(finaldata["Location Items"]["Items"],"Location",location);
		let poks = getArrDataIndexed(finaldata["Location Pokémon"]["Pokémon"],"Location",location);
		let tutors = getTutorData(location,"Location");




		let mapImg = document.querySelector("#contain > div#map section[name='content'] *[name='map'] img[usemap]");

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

	

		

		

		let mapDescriptionTitles = ["Overview","Pokémon", "Items", "Shop", "Trainers", "Move Tutor"];

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

		let spans = DescriptionSelector.querySelectorAll(":scope span");
		for(let q = 0; q < spans.length; q++) {
			spans[q].remove();
		}

		let DescriptionSelectorUp = document.createElement("span");
		DescriptionSelector.appendChild(DescriptionSelectorUp);

		if (mapDescriptionTitles.length > 1) {
			let DescriptionSelectorDown = document.createElement("span");
			DescriptionSelector.appendChild(DescriptionSelectorDown);

			for(let q = 0; q < mapDescriptionTitles.length; q++) {
				let DescriptionSelectorInput = document.createElement("input");
				let DescriptionSelectorLabel = document.createElement("label");
	
				DescriptionSelectorInput.setAttribute("type", "radio");
				DescriptionSelectorInput.setAttribute("name", "map-description-selector");
				DescriptionSelectorInput.setAttribute("id", "map-description-selector-"+q);
				DescriptionSelectorInput.setAttribute("autocomplete", "off");
				DescriptionSelectorInput.setAttribute("value", mapDescriptionTitles[q].replaceAll(" ","").toLowerCase());
				DescriptionSelectorLabel.setAttribute("for", "map-description-selector-"+q);
		
	
				if (q == 0) {
					let DescriptionSelectorLabelText = document.createElement("h6");
					DescriptionSelectorLabelText.innerText = mapDescriptionTitles[q];
					DescriptionSelectorUp.appendChild(DescriptionSelectorInput);
					DescriptionSelectorUp.appendChild(DescriptionSelectorLabel);
					DescriptionSelectorLabelText.innerText = location;
					DescriptionSelectorInput.setAttribute("checked","")
					DescriptionSelectorLabel.appendChild(DescriptionSelectorLabelText);
				}
				else {
					let DescriptionSelectorLabelText = document.createElement("p");
					DescriptionSelectorLabelText.innerText = mapDescriptionTitles[q];
					DescriptionSelectorDown.appendChild(DescriptionSelectorInput);
					DescriptionSelectorDown.appendChild(DescriptionSelectorLabel);
					DescriptionSelectorLabel.appendChild(DescriptionSelectorLabelText);
				}
	
				DescriptionSelectorInput.addEventListener("click", mapDescriptionSelector);	  
			}
		}
		else {
			for(let q = 0; q < mapDescriptionTitles.length; q++) {
				let DescriptionSelectorInput = document.createElement("input");
				let DescriptionSelectorLabel = document.createElement("label");

				DescriptionSelectorInput.setAttribute("type", "radio");
				DescriptionSelectorInput.setAttribute("name", "map-description-selector");
				DescriptionSelectorInput.setAttribute("id", "map-description-selector-"+q);
				DescriptionSelectorInput.setAttribute("autocomplete", "off");
				DescriptionSelectorInput.setAttribute("value", mapDescriptionTitles[q].replaceAll(" ","").toLowerCase());
				DescriptionSelectorLabel.setAttribute("for", "map-description-selector-"+q);
		
				let DescriptionSelectorLabelText = document.createElement("h6");
				DescriptionSelectorLabelText.innerText = mapDescriptionTitles[q];
				DescriptionSelectorUp.appendChild(DescriptionSelectorInput);
				DescriptionSelectorUp.appendChild(DescriptionSelectorLabel);
				DescriptionSelectorLabelText.innerText = location;
				DescriptionSelectorInput.setAttribute("checked","")
				DescriptionSelectorLabel.appendChild(DescriptionSelectorLabelText);
			
				DescriptionSelectorInput.addEventListener("click", mapDescriptionSelector);
			}
			
		}


		
		let descs = mapSectionSidebarDescriptionOviewDescription.querySelectorAll(":scope > *");
		for(let q = 0; q < descs.length; q++) {
			descs[q].remove();
		}

		
		let desc = [];
		for(let q = 0; q < finaldata["Locations"]["Description"].length; q++) {
			if (getApplicable(finaldata["Locations"]["Description"][q]["Game"])) {
				if (finaldata["Locations"]["Description"][q]["Location"] == location) {
					desc.push(finaldata["Locations"]["Description"][q]["Description"]);
				}
			}
		}

		for(let q = 0; q < desc.length; q++) {
			let mapSectionSidebarDescriptionOviewDescriptionText = document.createElement("p");
			mapSectionSidebarDescriptionOviewDescriptionText.innerText = desc[q];
			mapSectionSidebarDescriptionOviewDescription.appendChild(mapSectionSidebarDescriptionOviewDescriptionText);
		}

		let poi = [];
		for(let q = 0; q < finaldata["Locations"]["Point of Interest"].length; q++) {
			if (getApplicable(finaldata["Locations"]["Point of Interest"][q]["Game"])) {
				if (finaldata["Locations"]["Point of Interest"][q]["Location"] == location) {
					let areadesc = [];
					let pointdesc = [];
					if (finaldata["Locations"]["Point of Interest"][q]["Area Description"] != undefined) {
						areadesc.push(finaldata["Locations"]["Point of Interest"][q]["Area Description"]);
					}
					if (finaldata["Locations"]["Point of Interest"][q]["Point Description"] != undefined) {
						pointdesc.push(finaldata["Locations"]["Point of Interest"][q]["Point Description"]);
					}

					let obj = new Object();
					obj["Header"] = finaldata["Locations"]["Point of Interest"][q]["Point of Interest"];
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

		for(let q = 0; q < poi.length; q++) {
			if (poi[q]["Point Description"] != undefined) {
				let description = [];
				if (poi[q]["Area Description"] != undefined) {
					description.push(poi[q]["Area Description"]);
				}
				description.push(poi[q]["Point Description"]);

				let span = document.createElement("span");
				let header = document.createElement("h5");
				let desc = document.createElement("p");
				header.innerText = poi[q]["Header"];
				desc.innerHTML = description.join("<br>");
				mapSectionSidebarDescriptionOviewDescription.appendChild(span)
				span.appendChild(header)
				span.appendChild(desc)
			}
		}




	

		mapSectionSidebarDescriptionOviewHeaderText.innerText = "";
		mapSectionSidebarDescriptionOviewSelector.style.removeProperty("transform");
		mapSectionSidebarDescriptionOviewButtonLeftButton.setAttribute("value",0);
		mapSectionSidebarDescriptionOviewButtonRightButton.setAttribute("value",0);
		mapSectionSidebarDescriptionOviewSelector.innerHTML = ""
	



	
		let loadImages = getMedia(false,[location],[PATH_Location_Load]);
		loadImages = loadImages.filter(x => x != null && x != undefined && x != '')
	
		let overviewImages = getMedia(false,[location],[PATH_Location_Overview]);
		overviewImages = overviewImages.filter(x => x != null && x != undefined && x != '')



		let locationImages = loadImages.concat(overviewImages)


		if (locationImages.length <= 1) {
			mapSectionSidebarDescriptionOviewButtonRightButton.classList.add("last");
		}
		else {
			mapSectionSidebarDescriptionOviewButtonRightButton.classList.remove("last");
		}



		for (let q = 0; q < locationImages.length; q++) {
			let overviewLocation = splitStr(locationImages[q],"/");
			overviewLocation = overviewLocation[overviewLocation.length-1];
			overviewLocation = splitStr(overviewLocation,"_");
			overviewLocation = overviewLocation[0];
			overviewLocation = splitStr(overviewLocation,".")[0];


			let overviewArea = splitStr(locationImages[q],"/");
			overviewArea = overviewArea[overviewArea.length-1];

			if (overviewArea.includes("_")) {
				overviewArea = splitStr(overviewArea,"_")
				overviewArea = overviewArea[overviewArea.length-1];
				overviewArea = splitStr(overviewArea,".")[0];
			}
			else {
				overviewArea = undefined;
			}


			let mapSectionSidebarDescriptionOviewImageInner = document.createElement("li");
			let mapSectionSidebarDescriptionOviewImage = document.createElement("img");
			mapSectionSidebarDescriptionOviewImage.src = locationImages[q];
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









		let locimgs = mapSectionSidebarDescriptionOviewSelector.querySelectorAll(":scope img");
		let buttons = mapSectionSidebarDescriptionOviewSelectorOuter.querySelectorAll(":scope figure");
		for (let q = 0; q < locimgs.length; q++) {
			locimgs[q].parentElement.setAttribute("name",q);
			locimgs[q].addEventListener("mousedown", function(event) { if(event.button === 0 || event.button === 1) {fullscreenIMG(locimgs,buttons[0].getAttribute("value"))};});
		}


		for(let q = 0; q < shops.length; q++) {
			let arr = [];
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

		for(let q = 0; q < shops.length; q++) {
			if (shops[q]["Sort"] == "a") {
				shops[q]["Sort"] = location;
			}
		}

		let shopArea = [];
		for(let q = 0; q < shops.length; q++) {
			shopArea.push(shops[q]["Sort"]);
		}
		shopArea = [...new Set(shopArea)];

		let shopuls = mapSectionSidebarDescriptionShop.querySelectorAll(":scope > ul");
		for(let q = 0; q < shopuls.length; q++) {
			shopuls[q].remove();
		}

		for(let q = 0; q < shopArea.length; q++) {
			let ul;
			ul = mapSectionSidebarDescriptionShop.querySelector(':scope > ul[name="'+shopArea[q]+'"]');

			if (ul == null) {
				let mapSectionSidebarDescriptionShopUl = document.createElement("ul");
				mapSectionSidebarDescriptionShopUl.setAttribute("name",shopArea[q])
				mapSectionSidebarDescriptionShop.appendChild(mapSectionSidebarDescriptionShopUl);

				if (shopArea[q] != location) {
					let mapSectionSidebarDescriptionShopUlTitle = document.createElement("h4");
					mapSectionSidebarDescriptionShopUlTitle.innerHTML = shopArea[q];
					mapSectionSidebarDescriptionShopUl.appendChild(mapSectionSidebarDescriptionShopUlTitle);
				}
					
			}
			ul = mapSectionSidebarDescriptionShop.querySelector(':scope > ul[name="'+shopArea[q]+'"]');

			for(let u = 0; u < shops.length; u++) {
				if (shops[u]["Sort"] == shopArea[q]) {
					let quantity = shops[u]["Quantity"];

					let main = undefined;
					let type = undefined;

					if (shops[u]["Item"] != undefined) {
						main = shops[u]["Item"];
						type = "item";
					}
					else if (shops[u]["Pokémon"] != undefined) {
						main = shops[u]["Pokémon"];
						type = "pokémon";
					}

					let mapSectionSidebarDescriptionShopLi = document.createElement("li");

					let mapSectionSidebarDescriptionShopLiInput = document.createElement("input");
					mapSectionSidebarDescriptionShopLiInput.setAttribute("type","checkbox");
					mapSectionSidebarDescriptionShopLiInput.setAttribute("id","location-"+type+"-shop-"+shops[u]["Index"]);
					mapSectionSidebarDescriptionShopLiInput.setAttribute("name","location-"+type+"-shop-"+shops[u]["Index"]);
				
					mapSectionSidebarDescriptionShopLi.appendChild(mapSectionSidebarDescriptionShopLiInput);
					mapSectionSidebarDescriptionShopLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})


					let mapSectionSidebarDescriptionShopIconOuter = document.createElement("span");
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
						let mapSectionSidebarDescriptionShopTitle = document.createElement("small");
						mapSectionSidebarDescriptionShopTitle.innerText = "Lv. "+shops[u]["Level"];
						mapSectionSidebarDescriptionShopIconOuter.appendChild(mapSectionSidebarDescriptionShopTitle);
					}

					let mapSectionSidebarDescriptionShopIconInner = document.createElement("span");
					mapSectionSidebarDescriptionShopIconOuter.appendChild(mapSectionSidebarDescriptionShopIconInner);

					for(let y = 0; y < quantity; y++) {
						let mapSectionSidebarDescriptionShopIcon = document.createElement("img");
						if (type == "item") {
							let itoc = getItemIcon(shops[u]["Item"]);
							if (itoc != undefined) {
								mapSectionSidebarDescriptionShopIcon.src = getMedia(true,[itoc],[PATH_Item_Bag]);
							}
							mapSectionSidebarDescriptionShopIcon.setAttribute("onerror", "this.style.display='none';");
						}
						else if (type == "pokémon") {
							mapSectionSidebarDescriptionShopIcon.src = getMedia(true,[getPokémonPath(getPokémonInt(main))],[PATH_Pokémon_Box_Default_PNG]);
						}
						mapSectionSidebarDescriptionShopIconInner.appendChild(mapSectionSidebarDescriptionShopIcon);
					}

					if (quantity > 1) {
						mapSectionSidebarDescriptionShopIconOuter.title = shops[u]["Quantity"]+"x "+main;
					}
					else {
						mapSectionSidebarDescriptionShopIconOuter.title = main;
					}

	

					let mapSectionSidebarDescriptionShopText = document.createElement("small");
					mapSectionSidebarDescriptionShopText.innerText = main;
					if (shops[u]["Citeria"] != undefined) {
						mapSectionSidebarDescriptionShopText.setAttribute("title",shops[u]["Citeria"]);
					}

					if (getMachineMove(main) != undefined) {
						mapSectionSidebarDescriptionShopText.innerText += " ("+getMachineMove(main)+")";
					}
		
					mapSectionSidebarDescriptionShopIconOuter.appendChild(mapSectionSidebarDescriptionShopText);
		
					

					let mapSectionSidebarCostShopCostOuter = document.createElement("span");
					mapSectionSidebarCostShopCostOuter.setAttribute("name","Cost");
					mapSectionSidebarDescriptionShopLi.appendChild(mapSectionSidebarCostShopCostOuter);
					let mapSectionSidebarCostShopCostTitle = document.createElement("h6");
					let mapSectionSidebarCostShopCost = document.createElement("small");

					if (shops[u]["Currency"].includes("Fossil") || shops[u]["Currency"].includes("Old Amber")) {
						mapSectionSidebarCostShopCostTitle.innerText = "Revive:";
					}
					else {
						mapSectionSidebarCostShopCostTitle.innerText = "Cost:";
					}
				
					let currency = [shops[u]["Currency"]];
					let cost = shops[u]["Cost"];

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


					if(cost == "1x") {
						cost = "";
					}
					else {
						cost = numFormat(cost);
					}

		
					mapSectionSidebarCostShopCost.innerHTML = cost+" ";
					mapSectionSidebarCostShopCostOuter.appendChild(mapSectionSidebarCostShopCostTitle);
					mapSectionSidebarCostShopCostOuter.appendChild(mapSectionSidebarCostShopCost);


					for(let r = 0; r < currency.length; r++) {
						let ic = getItemIcon(currency[r]);
						let icon;
						if (ic != undefined) {
							icon = getMedia(true,[ic],[PATH_Currency_Icon]);
						}
						let abbr = currency[r].replace(/[^A-Z]+/g,"");
						if (icon != undefined && icon != "") {
							let img = document.createElement("img");
							img.src = icon;
							img.setAttribute("data-title",currency[r])
							img.setAttribute("title",currency[r])
							img.setAttribute("onerror","this.removeAttribute('title')")
							mapSectionSidebarCostShopCost.appendChild(img)
						}
						else {
							let span = document.createElement("span");
							span.innerText = abbr;
							span.title = currency[r];
							mapSectionSidebarCostShopCost.appendChild(span)
						}
					}




				}
			}
		}


	
	
		for(let q = 0; q < items.length; q++) {
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

		for(let q = 0; q < items.length; q++) {
			if (items[q]["Sort"] == "a") {
				items[q]["Sort"] = location;
			}
		}

		let itemArea = [];
		for(let q = 0; q < items.length; q++) {
			itemArea.push(items[q]["Sort"]);
		}
		itemArea = [...new Set(itemArea)];

		let itemuls = mapSectionSidebarDescriptionItem.querySelectorAll(":scope > ul");
		for(let q = 0; q < itemuls.length; q++) {
			itemuls[q].remove();
		}

		for(let q = 0; q < itemArea.length; q++) {
			let ul;
			ul = mapSectionSidebarDescriptionItem.querySelector(':scope > ul[name="'+itemArea[q]+'"]');

			if (ul == null) {
				let mapSectionSidebarDescriptionItemUl = document.createElement("ul");
				mapSectionSidebarDescriptionItemUl.setAttribute("name",itemArea[q])
				mapSectionSidebarDescriptionItem.appendChild(mapSectionSidebarDescriptionItemUl);

				if (itemArea[q] != location) {
					let mapSectionSidebarDescriptionItemUlTitle = document.createElement("h4");
					mapSectionSidebarDescriptionItemUlTitle.innerText = itemArea[q];
					mapSectionSidebarDescriptionItemUl.appendChild(mapSectionSidebarDescriptionItemUlTitle);
				}
					
			}
			ul = mapSectionSidebarDescriptionItem.querySelector(':scope > ul[name="'+itemArea[q]+'"]');

			for(let u = 0; u < items.length; u++) {
				if (items[u]["Sort"] == itemArea[q]) {
					let quantity = items[u]["Quantity"];

					let mapSectionSidebarDescriptionItemLi = document.createElement("li");

					let mapSectionSidebarDescriptionItemLiInput = document.createElement("input");
					mapSectionSidebarDescriptionItemLiInput.setAttribute("type","checkbox");
					mapSectionSidebarDescriptionItemLiInput.setAttribute("id","location-item-"+items[u]["Index"]);
					mapSectionSidebarDescriptionItemLiInput.setAttribute("name","location-item-"+items[u]["Index"]);
					mapSectionSidebarDescriptionItemLi.appendChild(mapSectionSidebarDescriptionItemLiInput);
					mapSectionSidebarDescriptionItemLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})


					let mapSectionSidebarDescriptionItemIconOuter = document.createElement("span");
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


					let mapSectionSidebarDescriptionItemIconInner = document.createElement("span");
					mapSectionSidebarDescriptionItemIconOuter.appendChild(mapSectionSidebarDescriptionItemIconInner);

					for(let y = 0; y < quantity; y++) {
	
						let itoc = getItemIcon(items[u]["Item"]);

						let mapSectionSidebarDescriptionItemIcon = document.createElement("img");
						if (itoc != undefined) {
							mapSectionSidebarDescriptionItemIcon.src = getMedia(true,[itoc],[PATH_Item_Bag])
						}

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


					let mapSectionSidebarDescriptionItemText = document.createElement("small");
					mapSectionSidebarDescriptionItemText.innerText = items[u]["Item"];

					if (getMachineMove(items[u]["Item"]) != undefined) {
						mapSectionSidebarDescriptionItemText.innerText += " ("+getMachineMove(items[u]["Item"])+")";
					}
		
					mapSectionSidebarDescriptionItemIconOuter.appendChild(mapSectionSidebarDescriptionItemText);
		

					let mapSectionSidebarDescriptionItemDescriptionOuter = document.createElement("span");
					mapSectionSidebarDescriptionItemDescriptionOuter.setAttribute("name","description");
					mapSectionSidebarDescriptionItemLi.appendChild(mapSectionSidebarDescriptionItemDescriptionOuter);
					let mapSectionSidebarDescriptionItemDescription = document.createElement("small");
					mapSectionSidebarDescriptionItemDescriptionOuter.appendChild(mapSectionSidebarDescriptionItemDescription);

					if (items[u]["Description"] != undefined) {
						mapSectionSidebarDescriptionItemDescription.innerText = items[u]["Description"];
					}
					else {
						mapSectionSidebarDescriptionItemDescription.innerText = "-";
					}

					let itemTime = "";
					let itemDay = [];
					let itemSeason = [];

					let itemTimeResult = [];
	
					if (items[u]["Time"] != undefined) {
						itemTime = items[u]["Time"];
					}

					if (items[u]["Day"] != undefined) {
						if (items[u]["Day"].includes(",")) {
							let daySplit = items[u]["Day"].split(",");
							for(let y = 0; y < daySplit.length; y++) {
								itemDay.push(daySplit[y]);
							}
						}
						else {
							itemDay.push(items[u]["Day"])
						}
					}

					if (items[u]["Season"] != undefined) {
						if (items[u]["Season"].includes(",")) {
							let seasonSplit = items[u]["Season"].split(",");
							for(let y = 0; y < seasonSplit.length; y++) {
								itemSeason.push(seasonSplit[y]);
							}
						}
						else {
							itemSeason.push(items[u]["Season"])
						}
						
					}


					for(let y = 0; y < itemSeason.length; y++) {
						itemTimeResult.push(itemSeason[y]);
					}

					for(let y = 0; y < itemDay.length; y++) {
						itemTimeResult.push(itemDay[y]);
					}

					itemTimeResult = itemTimeResult.map(i => "("+i+" "+itemTime+")");
					itemTimeResult = itemTimeResult.map(i => i.replaceAll(" )",")"));
					let itemTimeResultFinish = "";

					for(let y = 0; y < itemTimeResult.length; y++) {
						itemTimeResultFinish += " "+itemTimeResult[y];
					}
					itemTimeResultFinish = itemTimeResultFinish.replaceAll(") (",", ");
					itemTimeResultFinish = itemTimeResultFinish.replace(/,([^,]*)$/, ' and $1');


					mapSectionSidebarDescriptionItemDescription.innerText += itemTimeResultFinish;
					
			

					if (items[u]["Field"] != undefined) {
						let mapSectionSidebarDescriptionItemRequirementOuter = document.createElement("span");
						let mapSectionSidebarDescriptionItemRequirementTitle = document.createElement("small");
						mapSectionSidebarDescriptionItemRequirementOuter.setAttribute("name","requirement");
						mapSectionSidebarDescriptionItemLi.appendChild(mapSectionSidebarDescriptionItemRequirementOuter);
						mapSectionSidebarDescriptionItemRequirementOuter.appendChild(mapSectionSidebarDescriptionItemRequirementTitle);

						mapSectionSidebarDescriptionItemRequirementTitle.innerText = "Requires:";


						if (items[u]["Field"].includes("/")) {
							for(let y = 0; y < items[u]["Field"].split("/").length; y++) {
								let itemIcon;
								let itm;
								if (getMoveMachine(items[u]["Field"].split("/")[y]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(items[u]["Field"].split("/")[y]));
									itm = getMoveMachine(items[u]["Field"].split("/")[y]);
								}
								else if (getItemIcon(items[u]["Field"].split("/")[y]) != undefined) {
									itemIcon = getItemIcon(items[u]["Field"].split("/")[y]);
									itm = items[u]["Field"].split("/")[y];
								}

								let mapSectionSidebarDescriptionItemField = document.createElement("span");
								let mapSectionSidebarDescriptionItemFieldText = document.createElement("small");
								mapSectionSidebarDescriptionItemFieldText.innerText = items[u]["Field"].split("/")[y];
								mapSectionSidebarDescriptionItemRequirementOuter.appendChild(mapSectionSidebarDescriptionItemField);
								if (itemIcon != undefined) {
									let mapSectionSidebarDescriptionItemFieldImage = document.createElement("img");
									mapSectionSidebarDescriptionItemFieldImage.src = getMedia(true,[itemIcon],[PATH_Item_Bag])
									mapSectionSidebarDescriptionItemFieldImage.title = items[u]["Field"].split("/")[y];
									mapSectionSidebarDescriptionItemField.appendChild(mapSectionSidebarDescriptionItemFieldImage);
									mapSectionSidebarDescriptionItemField.setAttribute("name","item");
									mapSectionSidebarDescriptionItemField.setAttribute("value",itm);
									mapSectionSidebarDescriptionItemField.addEventListener("click",dataRedirect);
									mapSectionSidebarDescriptionItemField.setAttribute("function","dataRedirect");
								}
								mapSectionSidebarDescriptionItemField.appendChild(mapSectionSidebarDescriptionItemFieldText);
								if (y != items[u]["Field"].split("/").length - 1) {
									let mapSectionSidebarDescriptionItemFieldSpace = document.createElement("small");
									mapSectionSidebarDescriptionItemFieldSpace.innerText = " or ";
									mapSectionSidebarDescriptionItemRequirementOuter.appendChild(mapSectionSidebarDescriptionItemFieldSpace)
								}
							}
						}
						else if (items[u]["Field"].includes(",")) {
							for(let y = 0; y < items[u]["Field"].split(",").length; y++) {
								let itemIcon;
								let itm;
								if (getMoveMachine(items[u]["Field"].split(",")[y]) != undefined) {
									itemIcon = getItemIcon(getMoveMachine(items[u]["Field"].split(",")[y]));
									itm = getMoveMachine(items[u]["Field"].split(",")[y]);
								}
								else if (getItemIcon(items[u]["Field"].split(",")[y]) != undefined) {
									itemIcon = getItemIcon(items[u]["Field"].split(",")[y]);
									itm = items[u]["Field"].split(",")[y];
								}

								let mapSectionSidebarDescriptionItemField = document.createElement("span");
								let mapSectionSidebarDescriptionItemFieldText = document.createElement("small");
								mapSectionSidebarDescriptionItemFieldText.innerText = items[u]["Field"].split(",")[y];
								mapSectionSidebarDescriptionItemRequirementOuter.appendChild(mapSectionSidebarDescriptionItemField);
								if (itemIcon != undefined) {
									let mapSectionSidebarDescriptionItemFieldImage = document.createElement("img");
									mapSectionSidebarDescriptionItemFieldImage.src = getMedia(true,[itemIcon],[PATH_Item_Bag])
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
							let itemIcon;
							let itm;
							if (getMoveMachine(items[u]["Field"]) != undefined) {
								itemIcon = getItemIcon(getMoveMachine(items[u]["Field"]));
								itm = getMoveMachine(items[u]["Field"]);
							}
							else if (getItemIcon(items[u]["Field"]) != undefined) {
								itemIcon = getItemIcon(items[u]["Field"]);
								itm = items[u]["Field"];
							}

							let mapSectionSidebarDescriptionItemField = document.createElement("span");
							let mapSectionSidebarDescriptionItemFieldText = document.createElement("small");
							mapSectionSidebarDescriptionItemFieldText.innerText = items[u]["Field"];
							mapSectionSidebarDescriptionItemRequirementOuter.appendChild(mapSectionSidebarDescriptionItemField);
							if (itemIcon != undefined) {
								let mapSectionSidebarDescriptionItemFieldImage = document.createElement("img");
								mapSectionSidebarDescriptionItemFieldImage.src = getMedia(true,[itemIcon],[PATH_Item_Bag])
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

		for(let q = 0; q < poks.length; q++) {
			let arr = [];
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

		for(let q = 0; q < poks.length; q++) {
			if (poks[q]["Sort"] == "a") {
				poks[q]["Sort"] = location;
			}
		}
	
	
		let pokArea = [];
		for(let q = 0; q < poks.length; q++) {
			pokArea.push(poks[q]["Sort"]);
		}
		pokArea = [...new Set(pokArea)];
		

		let pokuls = mapSectionSidebarDescriptionPok.querySelectorAll(":scope > ul");
		for(let q = 0; q < pokuls.length; q++) {
			pokuls[q].remove();
		}

	
		for(let q = 0; q < pokArea.length; q++) {
			let ul;
			ul = mapSectionSidebarDescriptionPok.querySelector(':scope > ul[name="'+pokArea[q]+'"]');

			if (ul == null) {
				let mapSectionSidebarDescriptionPokUl = document.createElement("ul");
				mapSectionSidebarDescriptionPokUl.setAttribute("name",pokArea[q])
				mapSectionSidebarDescriptionPok.appendChild(mapSectionSidebarDescriptionPokUl);

				if (pokArea[q] != location) {
					let mapSectionSidebarDescriptionPokUlTitle = document.createElement("h4");
					mapSectionSidebarDescriptionPokUlTitle.innerHTML = pokArea[q];
					mapSectionSidebarDescriptionPokUl.appendChild(mapSectionSidebarDescriptionPokUlTitle);
				}
			}
			ul = mapSectionSidebarDescriptionPok.querySelector(':scope > ul[name="'+pokArea[q]+'"]');

			for(let u = 0; u < poks.length; u++) {
				if (poks[u]["Sort"] == pokArea[q]) {


					let mapSectionSidebarDescriptionPokLi = document.createElement("li");
					ul.appendChild(mapSectionSidebarDescriptionPokLi);
			
					let mapSectionSidebarDescriptionPokLiInput = document.createElement("input");
					mapSectionSidebarDescriptionPokLiInput.setAttribute("type","checkbox");
					mapSectionSidebarDescriptionPokLiInput.setAttribute("id","location-pokémon-"+poks[u]["Index"]);
					mapSectionSidebarDescriptionPokLiInput.setAttribute("name","location-pokémon-"+poks[u]["Index"]);
					mapSectionSidebarDescriptionPokLi.appendChild(mapSectionSidebarDescriptionPokLiInput);
					mapSectionSidebarDescriptionPokLiInput.addEventListener("change", function() {memory("Save","game",[event.target])})


					let mapSectionSidebarDescriptionPokOuter = document.createElement("span");
					let mapSectionSidebarDescriptionPokLvl = document.createElement("span");
					let mapSectionSidebarDescriptionPokLvlText = document.createElement("small");
					let mapSectionSidebarDescriptionPokWrap = document.createElement("b");
					let mapSectionSidebarDescriptionPokIcon = document.createElement("img");
					let mapSectionSidebarDescriptionPokName = document.createElement("span");
					let mapSectionSidebarDescriptionPokNameText = document.createElement("small");
					mapSectionSidebarDescriptionPokOuter.setAttribute("name","pok");
					mapSectionSidebarDescriptionPokLvlText.innerText = "Lv. "+poks[u]["Level"];
					mapSectionSidebarDescriptionPokIcon.src = getMedia(true,[getPokémonPath(getPokémonInt(poks[u]["Pokémon"]))],[PATH_Pokémon_Box_Default_PNG]);
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

					let mapSectionSidebarDescriptionPokRate = document.createElement("span");
					mapSectionSidebarDescriptionPokLi.appendChild(mapSectionSidebarDescriptionPokRate);

					if (poks[u]["Rate"] != undefined) {
						let mapSectionSidebarDescriptionPokRateText = document.createElement("h6");
						mapSectionSidebarDescriptionPokRate.setAttribute("name","rate")
						mapSectionSidebarDescriptionPokRateText.innerHTML = poks[u]["Rate"].replaceAll("mo:0%,","").replaceAll("mo:0%","").replaceAll("da:0%,","").replaceAll("da:0%","").replaceAll("ni:0%,","").replaceAll("ni:0%","").replaceAll("mo:",'<img src="'+getMedia(true,[`Morning`],[`./media/Images/FinalDex/`])+'" title="Morning">').replaceAll("da:",'<img src="'+getMedia(true,[`Day`],[`./media/Images/FinalDex/`])+'" title="Day">').replaceAll("ni:",'<img src="'+getMedia(true,[`Night`],[`./media/Images/FinalDex/`])+'" title="Night">').replaceAll("sp:0%,",'').replaceAll("sp:0%",'').replaceAll("su:0%,",'').replaceAll("su:0%",'').replaceAll("au:0%,",'').replaceAll("au:0%",'').replaceAll("wi:0%,",'').replaceAll("wi:0%",'').replaceAll("sp:",'<pre name="spring">Spring</pre>').replaceAll("au:",'<pre name="autumn">Autumn</pre>').replaceAll("su:",'<pre name="summer">Summer</pre>').replaceAll("wi:",'<pre name="winter">Winter</pre>').replaceAll("mon:",'<pre name="monday">Monday</pre>').replaceAll("tue:",'<pre name="tuesday">Tuesday</pre>').replaceAll("wed:",'<pre name="wednesday">Wednesday</pre>').replaceAll("thu:",'<pre name="thursday">Thursday</pre>').replaceAll("fri:",'<pre name="friday">Friday</pre>').replaceAll("sat:",'<pre name="saturday">Saturday</pre>').replaceAll("sun:",'<pre name="sunday">Sunday</pre>').replaceAll("extremelyharshsunlight:",'<img src="'+getMedia(true,[`Extremely Harsh Sunlight`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Extremely Harsh Sunlight">').replaceAll("hail:",'<img src="'+getMedia(true,[`Hail`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Hail">').replaceAll("harshsunlight:",'<img src="'+getMedia(true,[`Harsh Sunlight`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Harsh Sunlight">').replaceAll("heavyrain:",'<img src="'+getMedia(true,[`Heavy Rain`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Heavy Rain">').replaceAll("rain:",'<img src="'+getMedia(true,[`Rain`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Rain">').replaceAll("sandstorm:",'<img src="'+getMedia(true,[`Sandstorm`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Sandstorm">').replaceAll("strongwinds:",'<img src="'+getMedia(true,[`Strong Winds`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Strong Winds">').replaceAll("fog:",'<img src="'+getMedia(true,[`Fog`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Fog">').replaceAll("cloudy:",'<img src="'+getMedia(true,[`Cloudy`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Cloudy">').replaceAll("clear:",'<img src="'+getMedia(true,[`Clear`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Clear">').replaceAll("blizzard:",'<img src="'+getMedia(true,[`Blizzard`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Blizzard">').replaceAll("snow:",'<img src="'+getMedia(true,[`Snow`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Snow">').replaceAll("thunderstorm:",'<img src="'+getMedia(true,[`Thunderstorm`],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])+'" title="Thunderstorm">').replaceAll("%,","%");
						mapSectionSidebarDescriptionPokRate.appendChild(mapSectionSidebarDescriptionPokRateText);
					}


					if (Allies) {

						if (poks[u]["Allies"] != undefined) {

							let mapSectionSidebarDescriptionPokAllies = document.createElement("span");
							let mapSectionSidebarDescriptionPokAlliesHeader = document.createElement("h6");
							mapSectionSidebarDescriptionPokAllies.setAttribute("name","allies");
							mapSectionSidebarDescriptionPokAlliesHeader.innerText = "Allies";
							mapSectionSidebarDescriptionPokLi.appendChild(mapSectionSidebarDescriptionPokAllies);
							mapSectionSidebarDescriptionPokAllies.appendChild(mapSectionSidebarDescriptionPokAlliesHeader);

							let ally = poks[u]["Allies"].replaceAll("extremelyharshsunlight:",'').replaceAll("hail:",'').replaceAll("harshsunlight:",'').replaceAll("heavyrain:",'').replaceAll("rain:",'').replaceAll("sandstorm:",'').replaceAll("strongwinds:",'').replaceAll("fog:",'').replaceAll("cloudy:",'').replaceAll("clear:",'').replaceAll("blizzard:",'').replaceAll("snow:",'').replaceAll("thunderstorm:",'');
							let allies = [ally];

							if (ally.includes(",")) {
								allies = ally.split(",");
							}

							for(let r = 0; r < allies.length; r++) {
								let mapSectionSidebarDescriptionPokAlliesIMG = document.createElement("img");
								mapSectionSidebarDescriptionPokAlliesIMG.src = getMedia(true,[getPokémonPath(getPokémonInt(allies[r]))],[PATH_Pokémon_Box_Default_PNG]);
								mapSectionSidebarDescriptionPokAlliesIMG.title = allies[r];
								mapSectionSidebarDescriptionPokAlliesIMG.setAttribute("value",getPokémonInt(allies[r]));
								mapSectionSidebarDescriptionPokAllies.appendChild(mapSectionSidebarDescriptionPokAlliesIMG);
								mapSectionSidebarDescriptionPokAlliesIMG.addEventListener("click",modalData);
								mapSectionSidebarDescriptionPokAlliesIMG.setAttribute("function","modalData");
							}
						}
					}

					let mapSectionSidebarDescriptionPokType = document.createElement("span");
					mapSectionSidebarDescriptionPokType.setAttribute("name","encounter")


					mapSectionSidebarDescriptionPokLi.appendChild(mapSectionSidebarDescriptionPokType);

		

	
					let encounters = [];
					// Encounter
					if (poks[u]["Encounter"] != undefined) {
						if (poks[u]["Encounter"].includes(",")) {
							encounters = poks[u]["Encounter"].split(",");
						}
						else {
							encounters = [poks[u]["Encounter"]];
						}
					}


					let mapSectionSidebarDescriptionPokTypeTxtWrap = document.createElement("span");
					let mapSectionSidebarDescriptionPokTypeEncounterImg = document.createElement("img");
					let mapSectionSidebarDescriptionPokTypeTileText = document.createElement("small");
	
					let val1 = poks[u]["Tile"];
					let val2 = [PATH_Object_Overworld_Tile];
					let val3 = getGames("Generation");
					let val4 = poks[u]["Tile"];

					if (poks[u]["Encounter"] == "Static") {
						pok_int = getPokémonInt(poks[u]["Pokémon"]);
						val1 = ["^"+getPokémonPath(pok_int),"^"+getPokémonPath(pok_int)+"_Male","^"+getPokémonPath(pok_int)+"_Female"]
						val2 = [PATH_Pokémon_Overworld_Default_Front,PATH_Pokémon_Overworld_Shiny_Front]
						val3 = [GameName];
						val4 = poks[u]["Pokémon"];
					}

					mapSectionSidebarDescriptionPokTypeEncounterImg.src = getMedia(true,val1,val2,val3);
					mapSectionSidebarDescriptionPokTypeEncounterImg.title = val4;
					mapSectionSidebarDescriptionPokTypeEncounterImg.alt = val4;



					let encounter_text = poks[u]["Encounter"];
					encounter_text = undDel(encounter_text,"");

					if (encounter_text == "Surfing" || encounter_text.includes("Rod")) {
						encounter_text = poks[u]["Encounter"]+" on "+poks[u]["Tile"];
					}
					else if (poks[u]["Encounter"] == undefined) {
						encounter_text = poks[u]["Tile"];
					}
					if (poks[u]["Mechanic"] != undefined) {
						encounter_text += " ("+poks[u]["Mechanic"]+")";
					}

					mapSectionSidebarDescriptionPokTypeTileText.innerHTML = encounter_text;

					mapSectionSidebarDescriptionPokType.appendChild(mapSectionSidebarDescriptionPokTypeEncounterImg);
					mapSectionSidebarDescriptionPokType.appendChild(mapSectionSidebarDescriptionPokTypeTxtWrap);
					mapSectionSidebarDescriptionPokTypeTxtWrap.appendChild(mapSectionSidebarDescriptionPokTypeTileText);

					if (poks[u]["Mechanic"] != undefined) {
						let mapSectionSidebarDescriptionPokTypeMechanicText = document.createElement("small");
						mapSectionSidebarDescriptionPokTypeMechanicText.innerText = poks[u]["Mechanic"];
						mapSectionSidebarDescriptionPokTypeTxtWrap.appendChild(mapSectionSidebarDescriptionPokTypeMechanicText);
					}


					if (poks[u]["Criteria"] != undefined) {
						mapSectionSidebarDescriptionPokRate.title = poks[u]["Criteria"];
					}

					if (poks[u]["Machine"] != undefined) {
						let machine = poks[u]["Machine"].replace(/,([^,]*)$/, ', and $1').replaceAll(",",", ").replaceAll("/"," or ").replaceAll("  "," ");
						
						if (machine != "") {
							mapSectionSidebarDescriptionPokType.setAttribute("title","Requires: "+machine);
						}
					}

				}
			}
		}

		for(let q = 0; q < tutors.length; q++) {
			if (tutors[q]["Area"] == undefined) {
				tutors[q]["Area"] = "a";
			}
		}

		tutors = sortObjectArray(tutors,"Area",true);

		for(let q = 0; q < tutors.length; q++) {
			if (tutors[q]["Area"] == "a") {
				tutors[q]["Area"] = location;
			}
		}

		let tutorArea = [];
		for(let q = 0; q < tutors.length; q++) {
			tutorArea.push(tutors[q]["Area"]);
		}
		tutorArea = [...new Set(tutorArea)];

		let uls = mapSectionSidebarDescriptionTutor.querySelectorAll(":scope > ul");
		for(let q = 0; q < uls.length; q++) {
			uls[q].remove();
		}

		for(let q = 0; q < tutorArea.length; q++) {
			let ul;
			ul = mapSectionSidebarDescriptionTutor.querySelector(':scope > ul[name="'+tutorArea[q]+'"]');

			if (ul == null) {
				let mapSectionSidebarDescriptionTutorUl = document.createElement("ul");
				mapSectionSidebarDescriptionTutor.appendChild(mapSectionSidebarDescriptionTutorUl);
				mapSectionSidebarDescriptionTutorUl.setAttribute("name",tutorArea[q])

				if (tutorArea[q] != location) {
					let mapSectionSidebarDescriptionTutorUlTitle = document.createElement("h4");
					mapSectionSidebarDescriptionTutorUlTitle.innerText = tutorArea[q];
					mapSectionSidebarDescriptionTutorUl.appendChild(mapSectionSidebarDescriptionTutorUlTitle);
				}


			}
			ul = mapSectionSidebarDescriptionTutor.querySelector(':scope > ul[name="'+tutorArea[q]+'"]');

			for(let u = 0; u < tutors.length; u++) {
				if (tutors[u]["Area"] == tutorArea[q]) {
					let mapSectionSidebarDescriptionTutorLi = document.createElement("li");
					ul.appendChild(mapSectionSidebarDescriptionTutorLi);

					let mapSectionSidebarDescriptionTutorMove = document.createElement("span");
					let mapSectionSidebarDescriptionTutorMoveTrigger = document.createElement("b");
					let mapSectionSidebarDescriptionTutorMoveText = document.createElement("h5");
					mapSectionSidebarDescriptionTutorMoveText.innerText = tutors[u]["Move"];
					mapSectionSidebarDescriptionTutorMoveTrigger.setAttribute("name","move");
					mapSectionSidebarDescriptionTutorMoveTrigger.setAttribute("type","invert");
					mapSectionSidebarDescriptionTutorMoveText.title = formatMoveData(tutors[u]["Move"]);
					mapSectionSidebarDescriptionTutorMoveText.style.color = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],tutors[u]["Move"])+")";
					mapSectionSidebarDescriptionTutorLi.appendChild(mapSectionSidebarDescriptionTutorMove);
					mapSectionSidebarDescriptionTutorMove.appendChild(mapSectionSidebarDescriptionTutorMoveTrigger);
					mapSectionSidebarDescriptionTutorMoveTrigger.appendChild(mapSectionSidebarDescriptionTutorMoveText);
					mapSectionSidebarDescriptionTutorMoveTrigger.addEventListener("click",dataRedirect);
					mapSectionSidebarDescriptionTutorMoveTrigger.setAttribute("function","dataRedirect");

					if (tutors[u]["Pokémon"] != undefined || tutors[u]["Requirement"] != undefined || tutors[u]["Cost"] != undefined || tutors[u]["Rate"] != undefined || tutors[u]["Time"]) {
						let mapSectionSidebarDescriptionTutorAdditional = document.createElement("span");
						mapSectionSidebarDescriptionTutorLi.appendChild(mapSectionSidebarDescriptionTutorAdditional);
					


						if (tutors[u]["Pokémon"] != undefined) {
							let mapSectionSidebarDescriptionTutorPok = document.createElement("span");
							let mapSectionSidebarDescriptionTutorPokHeader = document.createElement("h6");
							let mapSectionSidebarDescriptionTutorPokText = document.createElement("p");
							mapSectionSidebarDescriptionTutorPokHeader.innerText = "Pokémon:"
							mapSectionSidebarDescriptionTutorPokText.innerHTML = "<b type='invert' onclick='modalData()' function='modalData' value='"+getPokémonInt(tutors[u]["Pokémon"])+"'>"+tutors[u]["Pokémon"]+"</b>";
							mapSectionSidebarDescriptionTutorAdditional.appendChild(mapSectionSidebarDescriptionTutorPok);
							mapSectionSidebarDescriptionTutorPok.appendChild(mapSectionSidebarDescriptionTutorPokHeader);
							mapSectionSidebarDescriptionTutorPok.appendChild(mapSectionSidebarDescriptionTutorPokText);
							
						}

						if (tutors[u]["Requirement"] != undefined) {
							let mapSectionSidebarDescriptionTutorReq = document.createElement("span");
							let mapSectionSidebarDescriptionTutorReqHeader = document.createElement("h6");
							let mapSectionSidebarDescriptionTutorReqText = document.createElement("p");
							mapSectionSidebarDescriptionTutorReqHeader.innerText = "Requires:";
							mapSectionSidebarDescriptionTutorReqText.innerText = tutors[u]["Requirement"];
							mapSectionSidebarDescriptionTutorAdditional.appendChild(mapSectionSidebarDescriptionTutorReq);
							mapSectionSidebarDescriptionTutorReq.appendChild(mapSectionSidebarDescriptionTutorReqHeader);
							mapSectionSidebarDescriptionTutorReq.appendChild(mapSectionSidebarDescriptionTutorReqText);
						}

						if (tutors[u]["Time"] != undefined) {
							let mapSectionSidebarDescriptionTutorTime = document.createElement("span");
							let mapSectionSidebarDescriptionTutorTimeHeader = document.createElement("h6");
							let mapSectionSidebarDescriptionTutorTimeText = document.createElement("p");
							mapSectionSidebarDescriptionTutorTimeHeader.innerText = "Time:"
							mapSectionSidebarDescriptionTutorTimeText.innerText = tutors[u]["Time"].replaceAll(","," / ");
							mapSectionSidebarDescriptionTutorAdditional.appendChild(mapSectionSidebarDescriptionTutorTime);
							mapSectionSidebarDescriptionTutorTime.appendChild(mapSectionSidebarDescriptionTutorTimeHeader);
							mapSectionSidebarDescriptionTutorTime.appendChild(mapSectionSidebarDescriptionTutorTimeText);
						}

						if (tutors[u]["Rate"] != undefined) {
							let mapSectionSidebarDescriptionTutorRate = document.createElement("span");
							let mapSectionSidebarDescriptionTutorRateHeader = document.createElement("h6");
							let mapSectionSidebarDescriptionTutorRateText = document.createElement("p");
							mapSectionSidebarDescriptionTutorRateHeader.innerText = "Available:"
							mapSectionSidebarDescriptionTutorRateText.innerText = tutors[u]["Rate"];
							mapSectionSidebarDescriptionTutorAdditional.appendChild(mapSectionSidebarDescriptionTutorRate);
							mapSectionSidebarDescriptionTutorRate.appendChild(mapSectionSidebarDescriptionTutorRateHeader);
							mapSectionSidebarDescriptionTutorRate.appendChild(mapSectionSidebarDescriptionTutorRateText);
						}
						
					

						if (tutors[u]["Cost"] != undefined) {

							let tutor_cost = splitStr(tutors[u]["Cost"],",");
							let tutor_currency = splitStr(tutors[u]["Currency"],",");

							let mapSectionSidebarDescriptionTutorCost = document.createElement("span");
							let mapSectionSidebarDescriptionTutorCostHeader = document.createElement("h6");
							mapSectionSidebarDescriptionTutorCostHeader.innerText = "Cost:";
							mapSectionSidebarDescriptionTutorAdditional.appendChild(mapSectionSidebarDescriptionTutorCost);
							mapSectionSidebarDescriptionTutorCost.appendChild(mapSectionSidebarDescriptionTutorCostHeader);

							if (tutor_cost.length == tutor_currency.length) {
								for (let c = 0; c < tutor_cost.length; c++) {
								
									let mapSectionSidebarDescriptionTutorCostText = document.createElement("p");
									mapSectionSidebarDescriptionTutorCostText.innerText = numFormat(tutor_cost[c]);
									mapSectionSidebarDescriptionTutorCost.appendChild(mapSectionSidebarDescriptionTutorCostText);

									
							
									let currency_icon = getMedia(true,[tutor_currency[c]],[PATH_Item_Bag]);
									if (currency_icon.length > 0) {
										mapSectionSidebarDescriptionTutorCostText.innerHTML += 'x<img src="'+currency_icon+'" name="item" title="'+tutor_currency[c]+'">'
									}
									else {
										mapSectionSidebarDescriptionTutorCostText.innerText += " "+tutor_currency[c];
									}
									
									let costImages = mapSectionSidebarDescriptionTutorCost.querySelectorAll(":scope img");
									for(let y = 0; y < costImages.length; y++) {
										costImages[y].addEventListener("click",dataRedirect);
										costImages[y].setAttribute("function","dataRedirect");
									}
								}
							}
						
							
						}
					}

			
				}
			}
		}





		mapSectionHeaderTitleText.innerText = location;
		mapSectionHeaderFlavorText.innerText = "";
	

		
		for(let q = 0; q < finaldata["Locations"]["Slogan"].length; q++) {
			if(getApplicable(finaldata["Locations"]["Slogan"][q]["Game"])) {
				if(finaldata["Locations"]["Slogan"][q]["Location"] == location) {
					mapSectionHeaderFlavorText.innerHTML = '"'+finaldata["Locations"]["Slogan"][q]["Slogan"]+'"';
				}
			}
		}



		let subs = mapSectionContentAreaContent.querySelectorAll(":scope > p");
		for(let q = 0; q < subs.length; q++) {
			subs[q].remove();
		}
		mapSectionContentAreaTitle.innerText = "Sub Area/Location";

		let areas = getAreasFromLocation(location);
		let locations = getLocationFromArea(location);

		for(let q = 0; q < locations.length; q++) {
			let mapSectionContentAreaText = document.createElement("p");
			mapSectionContentAreaTitle.innerText = "Location";
			mapSectionContentAreaText.innerText = locations[q];
			mapSectionContentAreaContent.appendChild(mapSectionContentAreaText);
			mapSectionContentAreaText.setAttribute("name", "map");
			mapSectionContentAreaText.addEventListener("click", dataRedirect);
			mapSectionContentAreaText.setAttribute("function","dataRedirect");
		}

		for(let q = 0; q < areas.length; q++) {
			let mapSectionContentAreaText = document.createElement("p");
			mapSectionContentAreaTitle.innerText = "Sub Areas";
			mapSectionContentAreaText.innerText = areas[q];
			mapSectionContentAreaContent.appendChild(mapSectionContentAreaText);
			mapSectionContentAreaText.setAttribute("name", "map");
			mapSectionContentAreaText.addEventListener("click", dataRedirect);
			mapSectionContentAreaText.setAttribute("function","dataRedirect");
		}


		let navs = mapSectionContentNavigationContent.querySelectorAll(":scope > span");
		for(let q = 0; q < navs.length; q++) {
			navs[q].remove();
		}
		for(let q = 0; q < finaldata["Locations"]["Navigation"].length; q++) {
			if (getApplicable(finaldata["Locations"]["Navigation"][q]["Game"])) {
				if(finaldata["Locations"]["Navigation"][q]["Location"] == location) {
					for(let u = 0; u < finaldata["Locations"]["Navigation"][q]["Navigation"].split(",").length; u++) {
						let mapSectionContentNavigationInnerContent = document.createElement("span")
						let mapSectionContentNavigationInnerImg = document.createElement("img");
						let mapSectionContentNavigationInnerText = document.createElement("p");
						mapSectionContentNavigationInnerContent.setAttribute("name","item");
						if (getMoveMachine(finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u]) != undefined) {
							mapSectionContentNavigationInnerContent.setAttribute("value",getMoveMachine(finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u]));
						}
						else {
							mapSectionContentNavigationInnerContent.setAttribute("value",finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u]);
						}
						mapSectionContentNavigationInnerText.innerText = finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u];
						if(finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u] == "Cut" || finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u] == "Strength") {
							mapSectionContentNavigationInnerImg.src = getMedia(true,[`HM Normal`],[PATH_Item_Bag])
						} else if(finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u] == "Waterfall" || finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u] == "Surf" || finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u] == "Dive" || finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u] == "Whirlpool") {
							mapSectionContentNavigationInnerImg.src = getMedia(true,[`HM Water`],[PATH_Item_Bag]);
						} else if(finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u] == "Rock Smash" || finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u] == "Rock Climb") {
							mapSectionContentNavigationInnerImg.src = getMedia(true,[`HM Fighting`],[PATH_Item_Bag]);
						} else if(finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u] == "Defog") {
							mapSectionContentNavigationInnerImg.src = getMedia(true,[`HM Flying`],[PATH_Item_Bag]);
						} else {
							mapSectionContentNavigationInnerImg.src = getMedia(true,[finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u]],[PATH_Item_Bag]);
						}
						mapSectionContentNavigationInnerImg.setAttribute("title", finaldata["Locations"]["Navigation"][q]["Navigation"].split(",")[u]);
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


		let mapTop = mapSectionContentMapOuter.querySelector(':scope *[name="Top"]');
		let mapBottom = mapSectionContentMapOuter.querySelector(':scope *[name="Bottom"]');
		let mapLeft = mapSectionContentMapOuter.querySelector(':scope *[name="Left"]');
		let mapRight = mapSectionContentMapOuter.querySelector(':scope *[name="Right"]');
		

		mapTop.setAttribute("title","");
		mapBottom.setAttribute("title","");
		mapLeft.setAttribute("title","");
		mapRight.setAttribute("title","");
		mapTop.firstElementChild.setAttribute("value","");
		mapBottom.firstElementChild.setAttribute("value","");
		mapLeft.firstElementChild.setAttribute("value","");
		mapRight.firstElementChild.setAttribute("value","");

		for(let q = 0; q < finaldata["Locations"]["Connecting"].length; q++) {
			if (getApplicable(finaldata["Locations"]["Connecting"][q]["Game"])) {
				let name = finaldata["Locations"]["Connecting"][q]["Location"];
				let north = finaldata["Locations"]["Connecting"][q]["North"];
				let south = finaldata["Locations"]["Connecting"][q]["South"];
				let west = finaldata["Locations"]["Connecting"][q]["West"];
				let east = finaldata["Locations"]["Connecting"][q]["East"];

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
		

		
	let dvs = document.querySelectorAll("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] > *");
	for(let q = 0; q < dvs.length; q++) {
		dvs[q].remove();
	}

	
	let mapSectionSidebarDescriptionTrainerWrap = document.createElement("div");
	let mapSectionSidebarDescriptionTrainerData = document.createElement("div");
	let mapSectionSidebarDescriptionTrainerDataTop = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataTopLeft = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataTopCenter = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataTopCenterSearch = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput = document.createElement("input");
	let mapSectionSidebarDescriptionTrainerDataTopCenterSearchOl = document.createElement("ol");
	let mapSectionSidebarDescriptionTrainerDataTopCenterCount = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft = document.createElement("input");
	let mapSectionSidebarDescriptionTrainerDataTopCenterCountMiddle = document.createElement("small");
	let mapSectionSidebarDescriptionTrainerDataTopCenterCountRight = document.createElement("input");
	let mapSectionSidebarDescriptionTrainerDataTopRight = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataCenter = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataCenterLeft = document.createElement("b");
	let mapSectionSidebarDescriptionTrainerDataCenterCenter = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataCenterRight = document.createElement("b");
	let mapSectionSidebarDescriptionTrainerDataBottom = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataBottomLeft = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataBottomCenter = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerDataBottomCenterText = document.createElement("h6");
	let mapSectionSidebarDescriptionTrainerDataBottomRight = document.createElement("span");
	let mapSectionSidebarDescriptionTrainerUl = document.createElement("ul");


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
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("name","trainer_value");
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("min",1);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("max",trainers.length);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.value = 1;
	mapSectionSidebarDescriptionTrainerDataTopCenterCountMiddle.innerText = "/";
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("placeholder",1);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("type","number");
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("name","trainer_max");
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("min",trainers.length);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("max",trainers.length);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("placeholder",trainers.length);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountRight.setAttribute("disabled","");
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("onclick","this.select()");
	mapSectionSidebarDescriptionTrainerDataTopCenterSearch.setAttribute("name","search");
	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.setAttribute("type","search");
	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.setAttribute("name","trainer_search");
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

	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.addEventListener("input",trainerSearch)
	mapSectionSidebarDescriptionTrainerDataTopCenterSearchInput.addEventListener("focus",trainerSearch);



	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.addEventListener("change",iMinMax);
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.addEventListener("change",function(){updateTrainer(trainers,undefined)});
	mapSectionSidebarDescriptionTrainerDataTopCenterCountLeft.setAttribute("onwheel",function(){updateTrainer(trainers,undefined)});



	

	mapSectionListOptionsSearch.title = searchOptionsTitle(mapSectionListOptions);

	let searchLis = document.querySelectorAll("#contain > div#map > section[name='list'] ol > label");
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



	let mapdescriptionsel = document.querySelector('#contain > div#map > section[name="sidebar"] input[value="'+mapSelectorVal[0]+'"]');
	let divs = document.querySelectorAll('#contain div#map > section[name="sidebar"] > div > *[name]')

	if (mapdescriptionsel != null) {
		mapdescriptionsel.click();
	}
	else {
		for(let y = 0; y < divs.length; y++) {
			divs[y].style.display = "none";
		}
		divs[0].style.removeProperty("display");
	}


	memory("Restore","game",document.querySelectorAll("#contain div#map > section[name='sidebar'] > div > *[name] input[id][name]"))

	}


	for (let i = 0; i < finaldata["Locations"]["Connecting"].length; i++) {
		if (getApplicable(finaldata["Locations"]["Connecting"][i]["Game"])) {
			let north = finaldata["Locations"]["Connecting"][i]["North"];
			let south = finaldata["Locations"]["Connecting"][i]["South"];
			let west = finaldata["Locations"]["Connecting"][i]["West"];
			let east = finaldata["Locations"]["Connecting"][i]["East"];

			let vals = [north,south,west,east];
			let origin1 = ["North","South","West","East"];
			let origin2 = ["South","North","East","West"];
			for (let q = 0; q < vals.length; q++) {
				let val = vals[q];
				if (val != undefined) {
					if (val.includes(",")) {
						val = val.split(",");
						for (let u = 0; u < val.length; u++) {
							for (let r = 0; r < finaldata["Locations"]["Connecting"].length; r++) {
								if (getApplicable(finaldata["Locations"]["Connecting"][r]["Game"])) {
									if (finaldata["Locations"]["Connecting"][r]["Location"] == val[u]) {
										if (finaldata["Locations"]["Connecting"][r][origin2[q]] != undefined) {
											if (!finaldata["Locations"]["Connecting"][r][origin2[q]].includes(finaldata["Locations"]["Connecting"][i]["Location"])) {
												console.warn(finaldata["Locations"]["Connecting"][i]["Location"]+" is not "+origin2[q]+" of "+finaldata["Locations"]["Connecting"][r]["Location"]+".")
											}
										}
										else {
											console.warn(finaldata["Locations"]["Connecting"][i]["Location"]+" is not "+origin2[q]+" of "+finaldata["Locations"]["Connecting"][r]["Location"]+".")
										}
									}
								}
							}
						}
					}
					else {
						for (let r = 0; r < finaldata["Locations"]["Connecting"].length; r++) {
							if (getApplicable(finaldata["Locations"]["Connecting"][r]["Game"])) {
								if (finaldata["Locations"]["Connecting"][r]["Location"] == val) {
									if (finaldata["Locations"]["Connecting"][r][origin2[q]] != undefined) {
										if (!finaldata["Locations"]["Connecting"][r][origin2[q]].includes(finaldata["Locations"]["Connecting"][i]["Location"])) {
											console.warn(finaldata["Locations"]["Connecting"][i]["Location"]+" is not "+origin2[q]+" of "+finaldata["Locations"]["Connecting"][r]["Location"]+".")
										}
									}
									else {
										console.warn(finaldata["Locations"]["Connecting"][i]["Location"]+" is not "+origin2[q]+" of "+finaldata["Locations"]["Connecting"][r]["Location"]+".")
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
let mapSelectorVal = [0];
function mapDescriptionSelector() {
	let i = this.getAttribute("value").toLowerCase();
	let mapDescriptionOuters = document.querySelectorAll('#contain div#map > section[name="sidebar"] > div > *[name]');
	let mapDescriptionOuter = document.querySelectorAll('#contain div#map > section[name="sidebar"] > div > *[name="'+i+'"]');
	for(let y = 0; y < mapDescriptionOuters.length; y++) {
		mapDescriptionOuters[y].style.display = "none";
	}
	for(let y = 0; y < mapDescriptionOuter.length; y++) {
		mapDescriptionOuter[y].style.display = "flex";
	}
	mapSelectorVal.fill(i)
}
function trainerSearch() {
	let tar = event.target;
	let val = tar.value;
	let base = document.querySelector("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] span[name='search'] ol")
	let count = document.querySelector("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] span[name='count'] input:first-child")
	base.innerHTML = "";

	if (val != undefined) {
		base.classList.add("active");
		let trainers = getLocationTrainers(tar.getAttribute("name"));

		let found = [];
		for(let i = 0; i < trainers.length; i++) {
			let nameVal = [];
			if (trainers[i]["Class"] != undefined) {
				nameVal.push(trainers[i]["Class"])
			}
			if (trainers[i]["Trainer"] != undefined) {
				nameVal.push(trainers[i]["Trainer"])
			}
			nameVal = nameVal.join(" ");
			if (nameVal.toLowerCase().includes(val.toLowerCase())) {
				let obj = new Object();
				obj["Name"] = nameVal;
				obj["Integer"] = i;
				found.push(obj)
			}
		}

		for(let i = 0; i < found.length; i++) {

			let li = document.createElement("li");
			let b = document.createElement("b");
			let txt = document.createElement("small");
			li.setAttribute("name",found[i]["Name"]);
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

	let base = document.querySelector("#contain div#map > section[name='sidebar'] > div > *[name='trainers']");

	let input = base.querySelector(":scope *[name='count'] input[type='number']:first-child")

	let titlePath = base.querySelector(":scope *[name='title']");
	let itemsPath = base.querySelector(":scope *[name='items']");
	let previousPath = base.querySelector(":scope *[name='previous']");
	let currentPath = base.querySelector(":scope *[name='current']");
	let nextPath = base.querySelector(":scope *[name='next']");
	let pokCountPath = base.querySelector(":scope *[name='pokcount']");
	let namePath = base.querySelector(":scope *[name='name']");
	let rewardPath = base.querySelector(":scope *[name='reward']");
	let ulPath = base.querySelector(":scope ul");

	let paths = [titlePath,itemsPath,previousPath,currentPath,nextPath,pokCountPath,namePath,rewardPath,ulPath]
	for(let y = 0; y < paths.length; y++) {
		paths[y].innerHTML = "";
	}

	let q = input.value-1;


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



	let trainerName = trainers[q]["Trainer"];
	let trainerClass = trainers[q]["Class"];
	let trainerImage = trainers[q]["Image"];
	let trainerItem = trainers[q]["Item"];
	let trainerItemCount = trainers[q]["Item Quantity"];
	let trainerReward = trainers[q]["Reward"];
	let trainerRewardCount = trainers[q]["Reward Quantity"];
	let trainerGender = trainers[q]["Gender"];
	let trainerCount =  trainers[q]["Count"];
	let trainerNote = trainers[q]["Note"];
	let trainerArea = trainers[q]["Area"];
	let trainerTitle = trainers[q]["Title"];
	let trainerType = trainers[q]["Type"];

	let trainerInfo = [];

	if (trainerTitle != undefined) {
		trainerInfo.push(trainerTitle)
	}
	if (trainerArea != undefined) {
		trainerInfo.push(trainerArea)
	}
	

	let trainerPrevious = undefined;
	let trainerNext = undefined;

	if (q != 0) {
		trainerPrevious = trainers[q-1];
	}
	if (q != ((trainers.length)-1)) {
		trainerNext = trainers[q+1];
	}

	trainerImage = [trainerImage];
	if (trainerImage[0] == undefined) {
		trainerImage = ["^"+trainerClass]
		if (trainerGender == "Male") {
			trainerImage.unshift(trainerImage[0]+"_Male")
		}
		else if (trainerGender == "Female") {
			trainerImage.unshift(trainerImage[0]+"_Female")
		}
	}
	else {
		trainerImage[0] = "^"+trainerImage;
	}




	let previousImg = document.createElement("img");
	let currentImg = document.createElement("img");
	let nextImg = document.createElement("img");
	let nameText = document.createElement("h6");



	currentImg.src = getMedia(true,trainerImage,[PATH_Character_Battle_Front,PATH_Character_VS])



	if (trainerNote != undefined) {
		currentPath.title = trainerNote;
	}
	else {
		currentPath.removeAttribute("title");
	}

	if(trainerPrevious != undefined) {
		let previmg = [trainerPrevious["Image"]];
		if (previmg[0] == undefined) {
			previmg = ["^"+trainerPrevious["Class"]]
			if (trainerPrevious["Gender"] == "Male") {
				previmg.unshift(previmg[0]+"_Male")
			}
			else if (trainerPrevious["Gender"] == "Female") {
				previmg.unshift(previmg[0]+"_Female")
			}
		}
		else {
			previmg[0] = "^"+previmg;
		}

	

		previousImg.src = getMedia(true,previmg,[PATH_Character_Battle_Front,PATH_Character_VS])
		previousPath.title = trainers[q-1]["Class"]+"\n"+trainers[q-1]["Trainer"];
	}
	else {
		previousImg.style.visibility = "hidden";
		previousImg.style.pointerEvents = "none";
		previousPath.removeAttribute("title");
	}

	if(trainerNext != undefined) {
		let nextimg = [trainerNext["Image"]];
		if (nextimg[0] == undefined) {
			nextimg = ["^"+trainerNext["Class"]]
			if (trainerNext["Gender"] == "Male") {
				nextimg.unshift(nextimg[0]+"_Male")
			}
			else if (trainerNext["Gender"] == "Female") {
				nextimg.unshift(nextimg[0]+"_Female")
			}
		}
		else {
			nextimg[0] = "^"+nextimg;
		}

		nextImg.src = getMedia(true,nextimg,[PATH_Character_Battle_Front,PATH_Character_VS])
		nextPath.title = trainers[q+1]["Class"]+"\n"+trainers[q+1]["Trainer"];
	}
	else {
		nextImg.style.visibility = "hidden";
		nextImg.style.pointerEvents = "none";
		nextPath.removeAttribute("title");
	}




	if (trainerClass != undefined) {
		nameText.innerText = trainerClass+"\n"+trainerName;
	}
	else {
		nameText.innerText = trainerName;
	}


	let el = document.querySelector("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] span[name='search'] li[name='"+(nameText.innerHTML.replaceAll("<br>"," "))+"']");
	if (el != undefined) {
		let el0 = document.querySelector("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] span[name='search'] ol");
		el0.classList.add("active");
		el.scrollIntoView();
		el0.classList.remove("active");
	}



	previousPath.appendChild(previousImg);
	currentPath.appendChild(currentImg);
	nextPath.appendChild(nextImg);
	namePath.appendChild(nameText);


	previousImg.addEventListener("click",function(){updateTrainer(trainers,"remove")});
	nextImg.addEventListener("click",function(){updateTrainer(trainers,"add")});

	if (trainerReward != undefined) {


		let rwcount = trainerRewardCount;
		if (rwcount == undefined) {
			rwcount = 1;
		}
		if (rwcount > 5) {
			rwcount = 5;
		}

		let rewardTitleText = document.createElement("h6");
		rewardTitleText.innerText = "Reward:"
		rewardPath.appendChild(rewardTitleText);


		let rewardWrap = document.createElement("span");
		rewardPath.appendChild(rewardWrap);
		


		let reward_img = getMedia(true,[getItemIcon(trainerReward)],[PATH_Item_Bag,PATH_Currency_Icon]);

		if (reward_img != "") {
			for(let u = 0; u < rwcount; u++) {
				let rewardImg = document.createElement("img");
				rewardImg.src = reward_img;
				if (rwcount != 1) {
					rewardImg.title = trainerRewardCount+"x "+trainerReward;
				}
				else {
					rewardImg.title = trainerReward;
				}
				rewardWrap.appendChild(rewardImg)
				
				rewardImg.addEventListener("click",dataRedirect)
				rewardImg.setAttribute("function","dataRedirect")
				rewardImg.setAttribute("name","item");
				rewardImg.setAttribute("value",trainerReward);
			}
		}
		else {
			let rewardText = document.createElement("h6");
			if (rwcount != 1) {
				rewardText.innerText = trainerRewardCount+" "+trainerReward;
			}
			else {
				rewardText.innerText = trainerReward;
			}
			rewardWrap.appendChild(rewardText);
		}

		

		



	}

	if (trainerInfo.length > 0) {
		let titleText = document.createElement("small");
		titleText.innerText = trainerInfo.join("\n");
		titlePath.appendChild(titleText);
	}



	if (trainerItem != undefined) {
		let itcount = trainerItemCount;
		if (itcount == undefined) {
			itcount = 1;
		}
		if (itcount > 5) {
			itcount = 5;
		}
		
		let itemsWrap = document.createElement("b");
		itemsPath.appendChild(itemsWrap);


		let itemsImgWrap = document.createElement("span");
		itemsWrap.appendChild(itemsImgWrap);

		for(let u = 0; u < itcount; u++) {
			let itemsImg = document.createElement("img");
			itemsImg.src =  getMedia(true,[getItemIcon(trainerItem)],[PATH_Item_Bag]);
			if (itcount != 1) {
				itemsImg.title = trainerItemCount+"x "+trainerItem;
			}
			else {
				itemsImg.title = trainerItem;
			}
			itemsImg.setAttribute("onerror","this.style.display='none';this.parentElement.parentElement.lastChild.style.display='unset';");
			itemsImgWrap.appendChild(itemsImg);
		}

		let itemsText = document.createElement("h6");
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

	let groups = [];
	let datas = [];
	if (trainers[q]["Pokémon"].includes("\n")) {
		datas = trainers[q]["Pokémon"].split("\n");
	}
	else {
		datas = [trainers[q]["Pokémon"]]
	}




	for(let u = 0; u < datas.length; u++) {

		let data = dataStringToObj(datas[u]);
		let pok = data["pok"];
		let item = data["it"];
		let level = data["lv"];
		let gender = data["ge"];
		let move = data["mo"];
		let ability = data["ab"];
		let iv = data["iv"];
		let ev = data["ev"];
		let nature = data["na"];


		let grp = trainers[q]["Grouping"];
		if (u == 0) {
			grp = undDel(grp,"Pokémon");
		}

		if (grp != undefined) {
			if (grp.includes("|")) {
				if (!groups.includes(grp.split("|")[u])) {
					let grpWrap = document.createElement("span");
					let grpTxt = document.createElement("h6");
					grpTxt.innerText = grp.split("|")[u];
					ulPath.appendChild(grpWrap);
					grpWrap.appendChild(grpTxt);
					

					let grpFig = document.createElement("figure");
					let grpFigTxt = document.createElement("small");
					let grpFigLabel = document.createElement("label");
					let grpFigInput = document.createElement("input");
					let grpFigOl = document.createElement("ol");
					grpFig.setAttribute("name","export");
					grpFig.classList.add("drop");
					grpFig.setAttribute("type","rotate-right");
					grpFigTxt.innerText = "⮟";
					grpFigInput.setAttribute("type","checkbox");
					grpFigInput.setAttribute("name","trainer-specific-export-input-"+datas[u]);
					grpFigInput.setAttribute("id","trainer-specific-export-input-"+datas[u]);
					grpFigLabel.setAttribute("for","trainer-specific-export-input-"+datas[u]);
					grpWrap.appendChild(grpFig)
					grpFig.appendChild(grpFigLabel)
					grpFigLabel.appendChild(grpFigTxt)
					grpFigLabel.appendChild(grpFigInput)
					grpFigLabel.appendChild(grpFigOl)
					grpFig.addEventListener("click",dropRelPos);
					grpFig.click();
					let grpFigOpts = ["Copy Data Strings","Send to Damage Calculator"];
					for(let e = 0; e < grpFigOpts.length; e++) {
						let grpFigLi = document.createElement("li");
						let grpFigText = document.createElement("small");
						grpFigLi.setAttribute("name",grpFigOpts[e]);
						grpFigText.innerText = grpFigOpts[e];
						grpFigOl.appendChild(grpFigLi);
						grpFigLi.appendChild(grpFigText);
						grpFigLi.addEventListener("click",grpFigFunction);
					}
				}
		
				groups.push(grp.split("|")[u])
			}
			else {
				if (!groups.includes(grp)) {
					let grpWrap = document.createElement("span");
					let grpTxt = document.createElement("h6");
					grpTxt.innerText = grp;
					ulPath.appendChild(grpWrap);
					grpWrap.appendChild(grpTxt);


					let grpFig = document.createElement("figure");
					let grpFigTxt = document.createElement("small");
					let grpFigLabel = document.createElement("label");
					let grpFigInput = document.createElement("input");
					let grpFigOl = document.createElement("ol");
					grpFig.setAttribute("name","export");
					grpFig.classList.add("drop");
					grpFig.setAttribute("type","rotate-right");
					grpFigTxt.innerText = "⮟";
					grpFigInput.setAttribute("type","checkbox");
					grpFigInput.setAttribute("name","trainer-specific-export-input");
					grpFigInput.setAttribute("id","trainer-specific-export-input");
					grpFigLabel.setAttribute("for","trainer-specific-export-input");
					grpWrap.appendChild(grpFig)
					grpFig.appendChild(grpFigLabel)
					grpFigLabel.appendChild(grpFigTxt)
					grpFigLabel.appendChild(grpFigInput)
					grpFigLabel.appendChild(grpFigOl)
					grpFig.addEventListener("click",dropRelPos);
					grpFig.click();
					let grpFigOpts = ["Copy Data Strings","Send to Damage Calculator"];
					for(let e = 0; e < grpFigOpts.length; e++) {
						let grpFigLi = document.createElement("li");
						let grpFigText = document.createElement("small");
						grpFigLi.setAttribute("name",grpFigOpts[e]);
						grpFigText.innerText = grpFigOpts[e];
						grpFigOl.appendChild(grpFigLi);
						grpFigLi.appendChild(grpFigText);
						grpFigLi.addEventListener("click",grpFigFunction);
					}
				}
		
				groups.push(grp)
			}
			function grpFigFunction() {

			
				const val = this.getAttribute("name");
				const dataStrings = findUpAtt(this,"data-string").getAttribute("data-string");
				const base = findUpAtt(this,"data-string");

				let battleType = document.querySelector("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] > div").getAttribute("data-type");
				battleType = undDel(battleType,"");
	
				let sel = document.querySelector("#contain div#tool div#dmg *[name='header'] > *:first-child select");
				let els = sel.querySelectorAll(":scope option")
				let el = sel.querySelector(":scope option[value='"+sel.getAttribute("value")+"']")


				if (battleType != undefined) {
					for (let t = 0; t < els.length; t++) {
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
					let dmgBoxes = document.querySelectorAll("#contain div#tool div#dmg div[name='result'] > span[name='party'] > span[name]:not([name='team 1'])");

					if (base.firstChild.innerText != undefined) {
						if (base.firstChild.innerText.toLowerCase().includes("player")) {
							dmgBoxes = document.querySelectorAll("#contain div#tool div#dmg div[name='result'] > span[name='party'] > span[name='team 1']");
						}
					}
				
					for (let t = 0; t < dmgBoxes.length; t++) {
						if (dmgBoxes[t].getAttribute("data-string") == "") {
							if (suggestChange) {
								sel.value = el.value;
								const preval = sel.getAttribute("name");
								let x = sel.value;
								let y = sel.querySelector(":scope option[value='"+x+"']");
								let keys = y.getAttributeNames();
								for(let q = 0; q < keys.length; q++) {
									let val1 = keys[q];
									let val2 = y.getAttribute(keys[q]);
									sel.setAttribute(val1,val2);
								}
								buildDMG(preval)
							}
							dmgBoxes[t].setAttribute("data-row","1");
							DMGPartyCreate(dmgBoxes[t],dataStrings);
							SwitchTab("Tools","Damage Calculator");
							return;
						}
					}
				
			
					let ask = confirm("Do you want to replace existing Pokémon in the Party?");
					if (ask) {
						dmgBoxes[0].setAttribute("data-string","")
						dmgBoxes[0].setAttribute("data-row","1");
						DMGPartyCreate(dmgBoxes[0],dataStrings);
						SwitchTab("Tools","Damage Calculator");
						if (suggestChange) {
							sel.value = el.value;
							const preval = sel.getAttribute("name");
							let x = sel.value;
							let y = sel.querySelector(":scope option[value='"+x+"']");
							let keys = y.getAttributeNames();
							for(let q = 0; q < keys.length; q++) {
								let val1 = keys[q];
								let val2 = y.getAttribute(keys[q]);
								sel.setAttribute(val1,val2);
							}
							buildDMG(preval)
						}
						return;
					}

					let ask2 = confirm("Do you want to continue without overriding existing Pokémon?");
					if (ask2) {
						dmgBoxes[0].setAttribute("data-row","1");
						DMGPartyCreate(dmgBoxes[0],dataStrings);
						SwitchTab("Tools","Damage Calculator");
						if (suggestChange) {
							sel.value = el.value;
							const preval = sel.getAttribute("name");
							let x = sel.value;
							let y = sel.querySelector(":scope option[value='"+x+"']");
							let keys = y.getAttributeNames();
							for(let q = 0; q < keys.length; q++) {
								let val1 = keys[q];
								let val2 = y.getAttribute(keys[q]);
								sel.setAttribute(val1,val2);
							}
							buildDMG(preval)
						}
						return;
					}
					
				}
			
				
			}
		}




		let li = document.createElement("li");
		ulPath.appendChild(li);

		let liMain = document.createElement("div");
		li.appendChild(liMain);
		let liAdditional = document.createElement("div");
		li.appendChild(liAdditional);




		

		if (u == 0) {

			for (let t = 0; t < 6; t++) {
				let outer = document.createElement("span");
				pokCountPath.appendChild(outer);

				let empty = document.createElement("div");
				empty.classList.add("empty");
				outer.appendChild(empty);
				
			}

			if (trainerCount != undefined) {
				for (let t = 0; t < trainerCount; t++) {
					let x = t+1;
					let span = pokCountPath.querySelector(":scope > span:nth-child("+x+")");
					span.firstChild.classList.remove("empty");
					span.firstChild.classList.add("pokéball");
				}
			}
			else {
				for (let t = 0; t < 6; t++) {
					let x = t+1;
					let span = pokCountPath.querySelector(":scope > span:nth-child("+x+")");
			
					if (datas[t] != undefined) {
						span.firstChild.classList.remove("empty");
						span.firstChild.classList.add("pokéball");
					}
				}
			}

			
			
		}

		if (nature != undefined || ability != undefined || level != undefined || gender != undefined) {
			let pokLeft = document.createElement("div");
			let pokLeftWrap = document.createElement("span");
			pokLeft.setAttribute("name", "data");
			liMain.appendChild(pokLeft);
			pokLeft.appendChild(pokLeftWrap);

			if (move == undefined && iv == undefined && ev == undefined) {
				pokLeft.style.width = "25%";
			}
		
			if (nature != undefined) {
				let natureText = document.createElement("small");
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
				let desc = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",ability);

				let abilityWrap = document.createElement("b");
				let abilityText = document.createElement("p");
				abilityText.innerText = ability;
				abilityWrap.title = getAbilityPosition(getPokémonInt(pok),ability)+" Ability";
				if (desc.length > 0) {
					abilityWrap.title += "\n"+desc[0]["Description"];
				}
				else {
					console.warn(ability+" is missing description?");
				}
				abilityWrap.setAttribute("name","ability");
				pokLeftWrap.appendChild(abilityWrap);
				abilityWrap.appendChild(abilityText);
				abilityWrap.addEventListener("click", dataRedirect);
				abilityWrap.setAttribute("function","dataRedirect");
			}
			if (level != undefined) {
				let levelText = document.createElement("small");
				if (level.includes("-")) {
					levelText.innerText = "Lvls. "+level;
				}
				else {
					levelText.innerText = "Lvl. "+level;
				}
				pokLeftWrap.appendChild(levelText);
			}
			if (gender != undefined) {
				let genderText = document.createElement("small");
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


		let pokCenter = document.createElement("div");
		let pokCenterWrap = document.createElement("span");
		pokCenter.setAttribute("name", "pokémon");
		liMain.appendChild(pokCenter);
		pokCenter.appendChild(pokCenterWrap);

		if (item != undefined) {
			let heldImg = document.createElement("img");
			heldImg.src = getMedia(true,[getItemIcon(item)],[PATH_Item_Bag]);
			heldImg.setAttribute("title",item);
			heldImg.setAttribute("name","item");
			heldImg.setAttribute("value",item);
			pokCenter.appendChild(heldImg);
			heldImg.addEventListener("click", dataRedirect);
			heldImg.setAttribute("function","dataRedirect");
		}

		let pokImg = document.createElement("img");
		pokImg.src = getMedia(true,[getPokémonPath(getPokémonInt(pok))],[PATH_Pokémon_Battle_Default_Front_PNG]);
		pokImg.setAttribute("title", pok);
		pokCenterWrap.setAttribute("value",getPokémonInt(pok));
		pokCenterWrap.appendChild(pokImg);
		pokCenterWrap.addEventListener("click", modalData);
		pokCenterWrap.setAttribute("function","modalData");

		let pokName = document.createElement("small");
		pokName.innerText = pok;
		pokCenterWrap.appendChild(pokName);

		if (move != undefined || iv != undefined || ev != undefined) {
			let pokRight = document.createElement("div");
			pokRight.setAttribute("name","moves");
			liMain.appendChild(pokRight);

			if (move != undefined) {
				let moves = undefined;


				if (move.includes(",")) {
					moves = move.split(",");
				}
				else {
					moves = move;
				}
				for(let y = 0; y < moves.length; y++) {
					let pokRightMovesWrap = document.createElement("b");
					let pokRightMovesText = document.createElement("p");
					pokRightMovesText.innerText = moves[y];
					pokRightMovesWrap.title = formatMoveData(moves[y]);
					pokRightMovesWrap.style.color = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],moves[y])+")";
					pokRightMovesWrap.setAttribute("name","move");
					pokRight.appendChild(pokRightMovesWrap);
					pokRightMovesWrap.appendChild(pokRightMovesText);
					pokRightMovesWrap.addEventListener("click", dataRedirect);
					pokRightMovesWrap.setAttribute("function","dataRedirect");
					if (moves[y] != "") {
						if(returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],moves[y]) == undefined) {
							console.warn(moves[y]+" needs formatting?");
						}
						
						let moveset = returnMoveSet(getPokémonInt(pok),"onlymoves,noduplicate");
						if (!moveset.includes(moves[y])) {
							console.warn(pok+" cannot learn "+moves[y]+"?");
						}

					}
				}
			}

			if (iv != undefined) {
				let ivs = undefined;
				let pokRightIV = document.createElement("div");
				pokRightIV.setAttribute("name", "ivs");
				liAdditional.appendChild(pokRightIV);
				let pokRightIVTitle = document.createElement("span");
				let pokRightIVTitleText = document.createElement("small");
				pokRightIVTitleText.innerText = "Individual Values:";
				pokRightIV.appendChild(pokRightIVTitle);
				pokRightIVTitle.appendChild(pokRightIVTitleText);


				let pokRightIVMain = document.createElement("span");
				pokRightIV.appendChild(pokRightIVMain);
				if (iv.includes(",")) {
					ivs = iv.split(",");
				}
				else {
					ivs = iv;
				}
				for(let y = 0; y < ivs.length; y++) {
					if (ivs[y] != "") {
						let pokRightIVText = document.createElement("small");
						pokRightIVText.setAttribute("name","iv");
						pokRightIVText.innerHTML = "<span name='"+Stats[y]["Name"]+"'>"+Stats[y]["Name"]+"</span>"+ivs[y];
						pokRightIVMain.appendChild(pokRightIVText);
					}
				}
			}

			if (ev != undefined) {
				let evs = undefined;
				let pokRightEV = document.createElement("div");
				pokRightEV.setAttribute("name", "evs");
				liAdditional.appendChild(pokRightEV);
				let pokRightEVTitle = document.createElement("span");
				let pokRightEVTitleText = document.createElement("small");
				pokRightEVTitleText.innerText = "Effort Values:";
				pokRightEV.appendChild(pokRightEVTitle);
				pokRightEVTitle.appendChild(pokRightEVTitleText);


				let pokRightEVMain = document.createElement("span");
				pokRightEV.appendChild(pokRightEVMain);
				if (ev.includes(",")) {
					evs = ev.split(",");
				}
				else {
					evs = ev;
				}
				for(let y = 0; y < evs.length; y++) {
					if (evs[y] != "") {
						let pokRightEVText = document.createElement("small");
						pokRightEVText.setAttribute("name","ev");
						pokRightEVText.innerHTML = "<span name='"+Stats[y]["Name"]+"'>"+Stats[y]["Name"]+"</span>"+evs[y];
						pokRightEVMain.appendChild(pokRightEVText);
					}
				}
			}

		}

		li.setAttribute("data-string",datas[u]);



		let exportButton = document.createElement("figure");
        let exportButtonTxt = document.createElement("small");
        let exportButtonLabel = document.createElement("label");
        let exportButtonInput = document.createElement("input");
        let exportButtonOl = document.createElement("ol");
        exportButton.setAttribute("name","export");
        exportButton.classList.add("drop");
        exportButton.setAttribute("type","rotate-left");
        exportButtonTxt.innerText = "⮟";
        exportButtonInput.setAttribute("type","checkbox");
        exportButtonInput.setAttribute("name","trainer-export-input-"+datas[u]);
        exportButtonInput.setAttribute("id","trainer-export-input-"+datas[u]);
        exportButtonLabel.setAttribute("for","trainer-export-input-"+datas[u]);
        liMain.appendChild(exportButton)
        exportButton.appendChild(exportButtonLabel)
        exportButtonLabel.appendChild(exportButtonTxt)
        exportButtonLabel.appendChild(exportButtonInput)
        exportButtonLabel.appendChild(exportButtonOl)
        exportButton.addEventListener("click",dropRelPos);
        exportButton.click();
        let exportButtonOpts = ["Copy Data String","Send to Damage Calculator"];
        for(let e = 0; e < exportButtonOpts.length; e++) {
            let exportButtonLi = document.createElement("li");
            let exportButtonText = document.createElement("small");
            exportButtonLi.setAttribute("name",exportButtonOpts[e]);
            exportButtonText.innerText = exportButtonOpts[e];
            exportButtonOl.appendChild(exportButtonLi);
            exportButtonLi.appendChild(exportButtonText);
            exportButtonLi.addEventListener("click",exportButtonFunction);
        }

		function exportButtonFunction() {
			let val = this.getAttribute("name");
			let base = findUpTagAtt(this,"LI","data-string");
			let dataString = base.getAttribute("data-string");

			if (val == "Copy Data String") {
				navigator.clipboard.writeText(dataString);
				console.log(dataString)
				consoleText("Copied Data String!")
			}
			if (val == "Send to Damage Calculator") {
				let dmgSlots = document.querySelectorAll("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > div > span:not([name='team 1']) > div[data-string]");
            
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
                        let dmgBox = document.querySelector("#contain div#tool > section[name='content'] > div[name='dmg'] div[name='result'] > span > span:not([name='team 1'])");
                        DMGPartyCreate(dmgBox,dataString);
                        SwitchTab("Tools","Damage Calculator");
                    }
                }
                
			}
		
		}




		let eles = [];
		let startEle = li;
		for(let y = 0; y < 1000; y++) {
			if (startEle != undefined && startEle.tagName != "SPAN") {
				eles.push(startEle);
				startEle = startEle.previousElementSibling;
			}
			else {
				break;
			}
		}
		startEle = li.nextElementSibling;
		for(let y = 0; y < 1000; y++) {
			if (startEle != undefined && startEle.tagName != "SPAN") {
				eles.push(startEle);
				startEle = startEle.nextElementSibling;
			}
			else {
				break;
			}
		
		}
		eles = eles.reverse();
		for(let y = 0; y < eles.length; y++) {
			eles[y] = eles[y].getAttribute("data-string");
		}
		startEle = li;
		for(let y = 0; y < 1000; y++) {
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
	let timeout = 0,
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
	if(!$(event.target).closest("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] ul li figure[name='export']").length && !$(event.target).is("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] ul li figure[name='export']")) {
		$("#contain div#map > section[name='sidebar'] > div > *[name='trainers'] ul li figure[name='export']").removeClass("active");
	}

});



function updateTitleHeader(what) {


	let id = "#contain div#map > section[name='sidebar'] > div > *[name='"+what.toLowerCase()+"']"
	let thetitle = $(id+' > *:first-child');
	let objects = $(id+' > ul');


	for (let t = 0; t < objects.length; t++) {
		let x = t+2;
		let absoluteTop = $(id).offset().top;
		let relativeTop = $(id+' > ul:nth-child('+x+')').offset().top;
		let atitle = objects.get(t).querySelector(":scope > h4:first-child");

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
	