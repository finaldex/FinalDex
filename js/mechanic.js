var createMechanic = function() {
	var mechanicOuter = document.createElement("div");
	var mechanicSection1 = document.createElement("section");
	var mechanicSection1OptionsTitleOuter = document.createElement("div");
	var mechanicSection1OptionsTitle = document.createElement("h2");
	var mechanicSection1OptionsSub = document.createElement("div");
	var mechanicSection2 = document.createElement("section");
	var mechanicSection2Title = document.createElement("h3");
	var mechanicSection3 = document.createElement("section");
	var mechanicSection3Content = document.createElement("div");
	var mechanicSection4 = document.createElement("section");
	var mechanicSection4Icon = document.createElement("div");
	var mechanicSection4IconImage = document.createElement("img");
	mechanicOuter.setAttribute("id", "mechanic");
	mechanicOuter.setAttribute("value","mechanics");
	mechanicSection1.setAttribute("id", "mechanic-section1");
	mechanicSection1OptionsTitleOuter.setAttribute("id", "mechanic-options-title");
	mechanicSection1OptionsTitle.innerText = "Mechanics";
	var mechanicSub = ["Mechanics", "Features"];
	for(var u = 0; u < mechanicSub.length; u++) {
		var x = u + 1;
		var mechanicSection1OptionsSubInput = document.createElement("input");
		var mechanicSection1OptionsSubLabel = document.createElement("label");
		mechanicSection1OptionsSubInput.setAttribute("type", "radio");
		mechanicSection1OptionsSubInput.setAttribute("id", "mechanic-options-sub-selector-" + x);
		mechanicSection1OptionsSubInput.setAttribute("name", "mechanic-options-sub-selector");
		mechanicSection1OptionsSubInput.setAttribute("autocomplete", "off");
		mechanicSection1OptionsSubInput.setAttribute("value", u);
		mechanicSection1OptionsSubLabel.setAttribute("for", "mechanic-options-sub-selector-" + x);
		mechanicSection1OptionsSubLabel.innerText = mechanicSub[u];
		if(u == 0) {
			mechanicSection1OptionsSubInput.setAttribute("checked", "");
		}
		mechanicSection1OptionsSub.appendChild(mechanicSection1OptionsSubInput);
		mechanicSection1OptionsSub.appendChild(mechanicSection1OptionsSubLabel);
		mechanicSection1OptionsSubInput.addEventListener("click", mechanicSubOptionsSelector);

		function mechanicSubOptionsSelector() {
			var mechanicOptionsOuters = document.querySelectorAll("#mechanic-options-outer[name]");
			var mechanicOptionsOuter = document.querySelectorAll('#mechanic-options-outer[name="' + this.value + '"]');
			mechanicSection1OptionsTitle.innerText = mechanicSub[this.value];
			for(var y = 0; y < mechanicOptionsOuters.length; y++) {
				mechanicOptionsOuters[y].style.display = "none";
			}
			for(var y = 0; y < mechanicOptionsOuter.length; y++) {
				mechanicOptionsOuter[y].style.display = "block";
			}
		}
	}
	mechanicSection2.setAttribute("id", "mechanic-section2");
	mechanicSection2Title.setAttribute("id", "mechanic-title");
	mechanicSection3.setAttribute("id", "mechanic-section3");
	mechanicSection3Content.setAttribute("id", "mechanic-content");
	mechanicSection3Content.classList.add("scroll");
	mechanicSection4.setAttribute("id", "mechanic-section4");
	mechanicSection4IconImage.src = "";
	mechanicSection4IconImage.setAttribute("id", "mechanic-descriptioniconimg");
	mechanicSection4IconImage.setAttribute("onerror","if(this.getAttribute('srced') == null){this.src='./media/Images/Misc/FinalDex/Catching.png';this.setAttribute('srced','');}");
	mechanicSection4IconImage.setAttribute("onload","if(this.getAttribute('srced') != null){this.removeAttribute('srced')};");
	document.querySelector("#contain").appendChild(mechanicOuter);
	mechanicOuter.appendChild(mechanicSection1);
	mechanicSection1.appendChild(mechanicSection1OptionsTitleOuter);
	mechanicSection1OptionsTitleOuter.appendChild(mechanicSection1OptionsTitle);
	mechanicSection1.appendChild(mechanicSection1OptionsSub);
	mechanicOuter.appendChild(mechanicSection2);
	mechanicSection2.appendChild(mechanicSection2Title);
	mechanicOuter.appendChild(mechanicSection3);
	mechanicSection3.appendChild(mechanicSection3Content);
	mechanicOuter.appendChild(mechanicSection4);
	mechanicSection4.appendChild(mechanicSection4Icon);
	mechanicSection4Icon.appendChild(mechanicSection4IconImage);

    var mechanicSection2Game = document.createElement("span");
    var mechanicSection2GameImage = document.createElement("img");
    mechanicSection2GameImage.src = "./media/Images/Misc/Title/Text/" + GameFullName.replaceAll(",", "").replaceAll("!", "").replaceAll("'", "").replaceAll(":", "") + ".png";
    mechanicSection2GameImage.setAttribute("onerror","this.display='none'");
    mechanicSection2.appendChild(mechanicSection2Game);
    mechanicSection2Game.appendChild(mechanicSection2GameImage);


	for(var i = 0; i < mechanicOptionsTitle.length; i++) {
		var mechanicSection1OptionsOuter = document.createElement("div");
		var mechanicSection1Options = document.createElement("div");
		mechanicSection1OptionsOuter.setAttribute("id", "mechanic-options-outer");
		mechanicSection1OptionsOuter.classList.add("scroll");
		mechanicSection1OptionsOuter.setAttribute("name", i);
		mechanicSection1Options.setAttribute("id", "mechanic-options");
		mechanicSection1.appendChild(mechanicSection1OptionsOuter);
		mechanicSection1OptionsOuter.appendChild(mechanicSection1Options);
		for(var q = 0; q < mechanicOptionsTitle[i].length; q++) {
			var mechanicSection1OptionsInput = document.createElement("input");
			var mechanicSection1OptionsLabel = document.createElement("label");
			mechanicSection1OptionsInput.setAttribute("type", "radio");
			mechanicSection1OptionsInput.setAttribute("name", "mechanic-options");
			mechanicSection1OptionsInput.setAttribute("id", "mechanic-options-" + i + "-" + q);
			mechanicSection1OptionsInput.setAttribute("autocomplete", "off");
			mechanicSection1OptionsInput.value = q;
			mechanicSection1OptionsInput.alt = i;
			mechanicSection1OptionsLabel.setAttribute("for", "mechanic-options-" + i + "-" + q);
			mechanicSection1OptionsLabel.setAttribute("type","large");
			mechanicSection1OptionsLabel.innerText = mechanicOptionsTitle[i][q];
			mechanicSection1Options.appendChild(mechanicSection1OptionsInput);
			mechanicSection1Options.appendChild(mechanicSection1OptionsLabel);
			mechanicSection1OptionsInput.addEventListener("click", mechanicOptionsSelector);

			function mechanicOptionsSelector() {
				mechanicSection2Title.innerText = mechanicOptionsTitle[this.alt][this.value];
				mechanicSection3Content.innerHTML = mechanicOptions[this.alt][this.value];
				mechanicSection4IconImage.src = "./media/Images/Misc/FinalDex/" + mechanicOptionsTitle[this.alt][this.value] + ".png";
				mechanicSection4IconImage.style.display = "unset";
			}
			if(i == 0 && q == 0) {
				mechanicSection1OptionsLabel.click();
			}
		}
	}
};