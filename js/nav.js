var createNav = function() {
	var navOptions = ["Pokémon","Moves","Abilities","Items","Map","Mechanics","Type Advantage","Tools"];
	if(Ability.length <= 0) {
		for(var q = 0; q < navOptions.length; q++) {
			if(navOptions[q].includes("Abilities")) {
				navOptions.splice(q, 1);
			}
		}
	}

	for(var q = 0; q < navOptions.length; q++) {
		if(navOptions[q].includes("Mechanics")) {
			navOptions.splice(q, 1);
		}
		if(navOptions[q].includes("Type Advantage")) {
			navOptions.splice(q, 1);
		}
		if(navOptions[q].includes("Type Advantage")) {
			navOptions.splice(q, 1);
		}
	}

	for(var q = 0; q < navOptions.length; q++) {
		var x = q + 1;
		var navigationInput = document.createElement("input");
		var navigationLabel = document.createElement("label");
		var navigationLabelText = document.createElement("h6");
		navigationInput.setAttribute("type", "radio");
		navigationInput.setAttribute("name", "navigation");
		navigationInput.setAttribute("id", "navigation-" + x);
		navigationInput.setAttribute("value", navOptions[q]);
		navigationInput.setAttribute("autocomplete", "off");
		navigationLabel.setAttribute("for", "navigation-" + x);
		navigationLabelText.innerText = navOptions[q];
		document.querySelector("#navigation").appendChild(navigationInput);
		document.querySelector("#navigation").appendChild(navigationLabel);
		navigationLabel.appendChild(navigationLabelText);
		if(q == 0) {
			navigationInput.setAttribute("checked", "");
		}
		navigationInput.addEventListener("change", navSelector);
	}

	var fullscreenButtonLeft = document.createElement("figure");
	var fullscreenButtonLeftText = document.createElement("strong");
	var fullscreenOverlay = document.createElement("span");
	var fullscreenDiv = document.createElement("div");
	var fullscreenUl = document.createElement("ul");
	var fullscreenButtonRight = document.createElement("figure");
	var fullscreenButtonRightText = document.createElement("strong");
	fullscreenButtonLeftText.innerText = "«";
	fullscreenButtonRightText.innerText = "»";
	fullscreenButtonLeft.setAttribute("value",0);
	fullscreenButtonRight.setAttribute("value",0);
	var fullscreen = document.querySelector("#fullscreen");
    fullscreen.setAttribute("tabindex","0");
	fullscreen.appendChild(fullscreenButtonLeft);
	fullscreenButtonLeft.appendChild(fullscreenButtonLeftText);
	fullscreen.appendChild(fullscreenOverlay);
	fullscreen.appendChild(fullscreenDiv);
	fullscreenDiv.appendChild(fullscreenUl);
	fullscreen.appendChild(fullscreenButtonRight);
	fullscreenButtonRight.appendChild(fullscreenButtonRightText);


	fullscreen.addEventListener("keyup",function(event){if(event.which === 37){fullscreenMove("left")}else if(event.which === 39){fullscreenMove("right")}});
	fullscreen.addEventListener("wheel",function(event){var delta = event.deltaY.toString();if(delta.includes("-")){fullscreenMove("left")}else if(!delta.includes("-")){fullscreenMove("right")}});

	fullscreenOverlay.addEventListener("click",exitFullscreen);

	fullscreenButtonLeft.addEventListener("click",function(){fullscreenMove("left")});
	fullscreenButtonRight.addEventListener("click",function(){fullscreenMove("left")});
}

function navSelector() {
	var val = (this.value).toLowerCase();
    var navContents = document.querySelectorAll('#contain > div');
    var navContent = document.querySelectorAll('#contain > div[value="'+val+'"]');

	var mapOuter = document.querySelector("#contain > div#map > section[name='content'] > *[name='map'] > div > div > div");
	var mapImg = mapOuter.querySelector(":scope img[usemap]");

	var itemOuter = document.querySelector("#contain div#item > section[name='sidebar'] > * > div:first-child > div");
	var itemImg = itemOuter.querySelector(":scope img[usemap]");


    for(var u = 0; u < navContents.length; u++) {
        navContents[u].style.display = "none";
    }
    for(var u = 0; u < navContent.length; u++) {
        navContent[u].style.display = "block";
    }

	if (this.value == "Map") {
		if (document.querySelectorAll("#contain > div#map ol input:checked").length == 0) {
			if (mapImg.naturalWidth == 0) {
				mapImg.addEventListener("load", event => {
					mapifyMap(mapOuter);
				});
			}
			else {
				mapifyMap(mapOuter);
			}
			document.querySelector("#contain > div#map ol input:first-child").click();
		}
		
	}
	if (this.value == "Items") {
		if (document.querySelectorAll("#contain > div#item ol input:checked").length == 0) {
			if (itemImg.naturalWidth == 0) {
				itemImg.addEventListener("load", event => {
					mapifyMap(itemOuter);
				});
			}
			else {
				mapifyMap(itemOuter);
			}
			document.querySelector("#contain > div#item ol input:first-child").click();
		}
	}
}

