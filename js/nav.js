let createNav = function() {
	let navOptions = ["Pokémon","Moves","Abilities","Items","Map","Mechanics","Type Advantage","Tools"];
	if(Ability.length <= 0) {
		for(let q = 0; q < navOptions.length; q++) {
			if(navOptions[q].includes("Abilities")) {
				navOptions.splice(q, 1);
			}
		}
	}

	for(let q = 0; q < navOptions.length; q++) {
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

	for(let q = 0; q < navOptions.length; q++) {
		let x = q + 1;
		let navigationInput = document.createElement("input");
		let navigationLabel = document.createElement("label");
		let navigationLabelText = document.createElement("h6");
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

	let fullscreenButtonLeft = document.createElement("figure");
	let fullscreenButtonLeftText = document.createElement("strong");
	let fullscreenOverlay = document.createElement("span");
	let fullscreenDiv = document.createElement("div");
	let fullscreenUl = document.createElement("ul");
	let fullscreenButtonRight = document.createElement("figure");
	let fullscreenButtonRightText = document.createElement("strong");
	fullscreenButtonLeftText.innerText = "«";
	fullscreenButtonRightText.innerText = "»";
	fullscreenButtonLeft.setAttribute("value",0);
	fullscreenButtonRight.setAttribute("value",0);
	let fullscreen = document.querySelector("#fullscreen");
    fullscreen.setAttribute("tabindex","0");
	fullscreen.appendChild(fullscreenButtonLeft);
	fullscreenButtonLeft.appendChild(fullscreenButtonLeftText);
	fullscreen.appendChild(fullscreenOverlay);
	fullscreen.appendChild(fullscreenDiv);
	fullscreenDiv.appendChild(fullscreenUl);
	fullscreen.appendChild(fullscreenButtonRight);
	fullscreenButtonRight.appendChild(fullscreenButtonRightText);


	fullscreen.addEventListener("keyup",function(event){if(event.which === 37){fullscreenMove("left")}else if(event.which === 39){fullscreenMove("right")}});
	fullscreen.addEventListener("wheel",function(event){let delta = event.deltaY.toString();if(delta.includes("-")){fullscreenMove("left")}else if(!delta.includes("-")){fullscreenMove("right")}});

	fullscreenOverlay.addEventListener("click",exitFullscreen);

	fullscreenButtonLeft.addEventListener("click",function(){fullscreenMove("left")});
	fullscreenButtonRight.addEventListener("click",function(){fullscreenMove("right")});
}

function navSelector() {
	let val = (this.value).toLowerCase();
    let navContents = document.querySelectorAll('#contain > div');
    let navContent = document.querySelectorAll('#contain > div[value="'+val+'"]');

	let mapOuter = document.querySelector("#contain > div#map > section[name='content'] > *[name='map'] > div > div > div");
	let mapImg = mapOuter.querySelector(":scope img[usemap]");

	let itemOuter = document.querySelector("#contain div#item > section[name='sidebar'] > * > div:first-child > div");
	let itemImg = itemOuter.querySelector(":scope img[usemap]");


    for(let u = 0; u < navContents.length; u++) {
        navContents[u].style.display = "none";
    }
    for(let u = 0; u < navContent.length; u++) {
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

