function partyMemory(action) {
    var action;
    var partySlots = document.querySelectorAll('#pokémon > aside[name="team"] section[name="party"] > div');
    if (action == "Save") {
        var partyMemory = [];
        for(var i = 0; i < partySlots.length; i++) {
            if (partySlots[i].getAttribute("name") != "empty") {
                partyMemory.push(getPartyData(partySlots[i]))
            }
            else {
                partyMemory.push("")
            }
        }
        localStorage.setItem("finaldex-party-"+GameID, partyMemory.join("/"));
    }
    else if (action == "Restore") {
        var tempArr = localStorage.getItem("finaldex-party-"+GameID);
        if (tempArr != undefined) {
            tempArr = localStorage.getItem("finaldex-party-"+GameID).split("/");
            if (tempArr.length == partySlots.length) {
                for(var i = 0; i < tempArr.length; i++) {
                    if (tempArr[i] != "") {
                        createParty(partySlots[i],tempArr[i]);
                        partyShow(partySlots[i]);
                    }
                }
            }
        }
    }
}




function boxMemory(action) {
    var action;

    if (action == "Save") {
        localStorage.setItem("finaldex-box-"+GameID, getAllBoxData());
    }
    else if (action == "Restore") {
        var tempArr = [];
        var tempStr = localStorage.getItem("finaldex-box-"+GameID);

        if (tempStr != "undefined" && tempStr != undefined) {
            if (tempStr.includes("/")) {
                tempArr = tempStr.split("/");
                for(var i = 0; i < tempArr.length; i++) {
                    storeInBox(tempArr[i]);
                }
            }
            else {
                tempArr[0] = tempStr;
                for(var i = 0; i < tempArr.length; i++) {
                    storeInBox(tempArr[i]);
                }
            }
        }
    }

}


function memory(action,suffix,elements) {
	
	var action;
	var elements;
    var suffix

	var tempArr = [];

	tempArr.push("finaldex");
    if (suffix.includes("game")) {
        tempArr.push(GameID);
    }
	

	for(var i = 0; i < elements.length; i++) {
		var setName = tempArr.join("-")+"-"+elements[i].getAttribute("name");
		var setValue;

		if (elements[i].tagName == "INPUT" && elements[i].getAttribute("type") == "checkbox") {
			setValue = elements[i].checked;
		}
		else {
			setValue = elements[i].value;
		}

		if (action == "Save") {
			localStorage.setItem(setName,setValue);
		}
		else if (action == "Restore") {
            if (elements[i].tagName == "INPUT" && elements[i].getAttribute("type") == "checkbox") {
                var item = JSON.parse(localStorage.getItem(setName));
                if (item != null) {
                    elements[i].checked = JSON.parse(localStorage.getItem(setName));
                }
            }
            else {
                var item = localStorage.getItem(setName);
                if (item != null) {
                    elements[i].value = item;
                }
            }
		}
	}

}



function memoryDexSwitch() {
	var radio = document.getElementsByName("finaldex-dexswitch-" + GameID);
	var val = localStorage.getItem("finaldex-dexswitch-" + GameID);


	for(var i = 0; i < radio.length; i++) {
		if(radio[i].value == val) {
			radio[i].click();
		} else if(val == null) {
			radio[radio.length - 1].click();
		}
	}
	$('input[name="finaldex-dexswitch-' + GameID + '"]').on("change", function() {
		localStorage.setItem("finaldex-dexswitch-" + GameID, $(this).val());
	});

	if (val == null) {
		radio[0].nextElementSibling.click();
	}
}
