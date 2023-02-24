var createExclusive = function() {
	var exclusiveOuter = document.createElement("div");
	var exclusiveSection1 = document.createElement("section");
	var exclusiveSection1OptionsTitleOuter = document.createElement("div");
	var exclusiveSection1OptionsTitle = document.createElement("h2");
	var exclusiveSection1OptionsOuter = document.createElement("div");
	var exclusiveSection1Options = document.createElement("div");
	var exclusiveSection2 = document.createElement("section");
	var exclusiveSection2Title = document.createElement("h1");
	var exclusiveSection3 = document.createElement("section");
	var exclusiveSection3PokOuter = document.createElement("div");
	var exclusiveSection3ItemOuter = document.createElement("div");
	var exclusiveSection3FeatureOuter = document.createElement("div");
	exclusiveOuter.setAttribute("id", "exclusive-outer");
	exclusiveOuter.setAttribute("value","exclusives");
	exclusiveSection1.setAttribute("id", "exclusive-section1");
	exclusiveSection1OptionsTitleOuter.setAttribute("id", "exclusive-options-title");
	exclusiveSection1OptionsTitle.innerText = "Version Exclusive";
	exclusiveSection1OptionsOuter.setAttribute("id", "exclusive-options-outer");
	exclusiveSection1OptionsOuter.classList.add("scroll");
	exclusiveSection1Options.setAttribute("id", "exclusive-options");
	exclusiveSection2.setAttribute("id", "exclusive-section2");
	exclusiveSection2Title.innerText = "Exclusive Pokémon";
	exclusiveSection3.setAttribute("id", "exclusive-section3");
	exclusiveSection3PokOuter.setAttribute("name", "0");
	exclusiveSection3ItemOuter.setAttribute("name", "1");
	exclusiveSection3FeatureOuter.setAttribute("name", "2");
	document.querySelector("#contain").appendChild(exclusiveOuter);
	exclusiveOuter.appendChild(exclusiveSection1);
	exclusiveSection1.appendChild(exclusiveSection1OptionsTitleOuter);
	exclusiveSection1OptionsTitleOuter.appendChild(exclusiveSection1OptionsTitle);
	exclusiveSection1.appendChild(exclusiveSection1OptionsOuter);
	exclusiveSection1OptionsOuter.appendChild(exclusiveSection1Options);
	exclusiveOuter.appendChild(exclusiveSection2);
	exclusiveSection2.appendChild(exclusiveSection2Title);
	exclusiveOuter.appendChild(exclusiveSection3);
	exclusiveSection3.appendChild(exclusiveSection3PokOuter);
	exclusiveSection3.appendChild(exclusiveSection3ItemOuter);
	exclusiveSection3.appendChild(exclusiveSection3FeatureOuter);

    var exclusiveSection2Game = document.createElement("span");
    var exclusiveSection2GameImage = document.createElement("img");
    exclusiveSection2GameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
    exclusiveSection2GameImage.setAttribute("onerror","this.display='none'");
    exclusiveSection2.appendChild(exclusiveSection2Game);
    exclusiveSection2Game.appendChild(exclusiveSection2GameImage);

	var exclusiveOptions = [];
	var ExclusivePokémonExist = "";
	for(var i = 0; i < JSONPath_ExclusivePokémon.length; i++) {
		for(var q = 0; q < finaldataExclusivePokémon.length; q++) {
			if(finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]] != undefined) {
				ExclusivePokémonExist += "true";
			}
		}
	}
	if(ExclusivePokémonExist.includes("true")) {
		exclusiveOptions.push("Pokémon");
		for(var i = 0; i < JSONPath_ExclusivePokémon.length; i++) {
			var exclusiveSection3Pok = document.createElement("div");
			var exclusiveSection3PokTitle = document.createElement("div");
			var exclusiveSection3PokTitleImg = document.createElement("img");
			var exclusiveSection3PokContent = document.createElement("ul");
			exclusiveSection3PokTitleImg.src = "./media/Images/Misc/Title/Text/" + getFullGameName(JSONPath_ExclusivePokémon[i]).replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
			exclusiveSection3PokTitleImg.title = "Pokémon Exclusive to " + getFullGameName(JSONPath_ExclusivePokémon[i]);
			exclusiveSection3PokContent.classList.add("scroll");
			exclusiveSection3PokOuter.appendChild(exclusiveSection3Pok);
			exclusiveSection3Pok.appendChild(exclusiveSection3PokTitle);
			exclusiveSection3PokTitle.appendChild(exclusiveSection3PokTitleImg);
			exclusiveSection3Pok.appendChild(exclusiveSection3PokContent);
			for(var q = 0; q < finaldataExclusivePokémon.length; q++) {
				if(finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]] != undefined) {
					var Exclusive = document.createElement("li");
					var ExclusiveImg = document.createElement("img");
					ExclusiveImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(getPokémonInt(finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]]),"Box") + ".png";
					ExclusiveImg.setAttribute("title", finaldataExclusivePokémon[q][JSONPath_ExclusivePokémon[i]]);
					ExclusiveImg.setAttribute("onerror","if(this.getAttribute('srced') == null){this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';this.setAttribute('srced','');}");
					ExclusiveImg.setAttribute("onload","if(this.getAttribute('srced') != null){this.removeAttribute('srced')};");
					exclusiveSection3PokContent.appendChild(Exclusive);
					Exclusive.appendChild(ExclusiveImg);
				}
			}
		}
	}
	var ExclusiveItemExist = "";
	for(var i = 0; i < JSONPath_ExclusiveItem.length; i++) {
		for(var q = 0; q < finaldataExclusiveItem.length; q++) {
			if(finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]] != undefined) {
				ExclusiveItemExist += "true";
			}
		}
	}
	if(ExclusiveItemExist.includes("true")) {
		exclusiveOptions.push("Items");
		for(var i = 0; i < JSONPath_ExclusiveItem.length; i++) {
			var exclusiveSection3Item = document.createElement("div");
			var exclusiveSection3ItemTitle = document.createElement("div");
			var exclusiveSection3ItemTitleImg = document.createElement("img");
			var exclusiveSection3ItemContent = document.createElement("ul");
			exclusiveSection3ItemTitleImg.src = "./media/Images/Misc/Title/Text/" + getFullGameName(JSONPath_ExclusiveItem[i]).replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
			exclusiveSection3ItemTitleImg.title = "Items exclusive to " + getFullGameName(JSONPath_ExclusiveItem[i]);
			exclusiveSection3ItemContent.classList.add("scroll");
			exclusiveSection3ItemOuter.appendChild(exclusiveSection3Item);
			exclusiveSection3Item.appendChild(exclusiveSection3ItemTitle);
			exclusiveSection3ItemTitle.appendChild(exclusiveSection3ItemTitleImg);
			exclusiveSection3Item.appendChild(exclusiveSection3ItemContent);
			for(var q = 0; q < finaldataExclusiveItem.length; q++) {
				if(finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]] != undefined) {
					var Exclusive = document.createElement("li");
					var ExclusiveImg = document.createElement("img");
					ExclusiveImg.src = "./media/Images/Item/Bag/" + MEDIAPath_ExclusiveItem[i] + "/" + finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]] + ".png";
					ExclusiveImg.setAttribute("title", finaldataExclusiveItem[q][JSONPath_ExclusiveItem[i]]);
					ExclusiveImg.setAttribute("onerror","if(this.getAttribute('srced') == null){this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';this.setAttribute('srced','');}");
					ExclusiveImg.setAttribute("onload","if(this.getAttribute('srced') != null){this.removeAttribute('srced')};");
					exclusiveSection3ItemContent.appendChild(Exclusive);
					Exclusive.appendChild(ExclusiveImg);
				}
			}
		}
	}
	var ExclusiveFeatureExist = "";
	for(var i = 0; i < JSONPath_ExclusiveFeature.length; i++) {
		for(var q = 0; q < finaldataExclusiveFeature.length; q++) {
			if(finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]] != undefined) {
				ExclusiveFeatureExist += "true";
			}
		}
	}
	if(ExclusiveFeatureExist.includes("true")) {
		exclusiveOptions.push("Features");
		for(var i = 0; i < JSONPath_ExclusiveFeature.length; i++) {
			var exclusiveSection3Feature = document.createElement("div");
			var exclusiveSection3FeatureTitle = document.createElement("div");
			var exclusiveSection3FeatureTitleImg = document.createElement("img");
			var exclusiveSection3FeatureContent = document.createElement("ul");
			exclusiveSection3FeatureTitleImg.src = "./media/Images/Misc/Title/Text/" + getFullGameName(JSONPath_ExclusiveFeature[i]).replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
			exclusiveSection3FeatureTitleImg.title = "Features exclusive to " + getFullGameName(JSONPath_ExclusiveFeature[i]);
			exclusiveSection3FeatureContent.classList.add("scroll");
			exclusiveSection3FeatureOuter.appendChild(exclusiveSection3Feature);
			exclusiveSection3Feature.appendChild(exclusiveSection3FeatureTitle);
			exclusiveSection3FeatureTitle.appendChild(exclusiveSection3FeatureTitleImg);
			exclusiveSection3Feature.appendChild(exclusiveSection3FeatureContent);
			for(var q = 0; q < finaldataExclusiveFeature.length; q++) {
				if(finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]] != undefined) {
					var Exclusive = document.createElement("li");
					Exclusive.innerText = finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]];
					Exclusive.setAttribute("title", finaldataExclusiveFeature[q][JSONPath_ExclusiveFeature[i]]);
					exclusiveSection3FeatureContent.appendChild(Exclusive);
				}
			}
		}
	}
	for(var q = 0; q < exclusiveOptions.length; q++) {
		var exclusiveSection1OptionsInput = document.createElement("input");
		var exclusiveSection1OptionsLabel = document.createElement("label");
		exclusiveSection1OptionsInput.setAttribute("type", "radio");
		exclusiveSection1OptionsInput.setAttribute("name", "exclusive-options");
		exclusiveSection1OptionsInput.setAttribute("id", "exclusive-options-" + q);
		exclusiveSection1OptionsInput.setAttribute("autocomplete", "off");
		exclusiveSection1OptionsInput.value = q;
		exclusiveSection1OptionsLabel.setAttribute("for", "exclusive-options-" + q);
		exclusiveSection1OptionsLabel.setAttribute("type","large");
		exclusiveSection1OptionsLabel.innerText = exclusiveOptions[q];
		exclusiveSection1Options.appendChild(exclusiveSection1OptionsInput);
		exclusiveSection1Options.appendChild(exclusiveSection1OptionsLabel);
		exclusiveSection1OptionsInput.addEventListener("click", exclusiveOptionsSelector);

		function exclusiveOptionsSelector() {
			exclusiveSection2Title.innerText = "Exclusive " + exclusiveOptions[this.value];
			var exclusiveContents = document.querySelectorAll(".exclusive-content-outer[name]");
			var exclusiveContent = document.querySelectorAll(".exclusive-content-outer[name='" + this.value + "']");
			for(var q = 0; q < exclusiveContents.length; q++) {
				exclusiveContents[q].style.display = "none";
			}
			for(var q = 0; q < exclusiveContent.length; q++) {
				exclusiveContent[q].style.display = "flex";
			}
		}
		if(q == 0) {
			exclusiveSection1OptionsLabel.click();
		}
	}
};