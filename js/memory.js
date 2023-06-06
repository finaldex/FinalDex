function partyMemory(action) {
    let partySlots = document.querySelectorAll('#pokémon > aside[name="team"] section[name="party"] > div');
    if (action == "Save") {
        let partyMemory = [];
        for(let i = 0; i < partySlots.length; i++) {
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
        let tempArr = localStorage.getItem("finaldex-party-"+GameID);
        if (tempArr != undefined) {
            tempArr = localStorage.getItem("finaldex-party-"+GameID).split("/");
            if (tempArr.length == partySlots.length) {
                for(let i = 0; i < tempArr.length; i++) {
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

    if (action == "Save") {
        localStorage.setItem("finaldex-box-"+GameID, getAllBoxData());
    }
    else if (action == "Restore") {
        let tempArr = [];
        let tempStr = localStorage.getItem("finaldex-box-"+GameID);

        if (tempStr != "undefined" && tempStr != undefined) {
            if (tempStr.includes("/")) {
                tempArr = tempStr.split("/");
                for(let i = 0; i < tempArr.length; i++) {
                    storeInBox(tempArr[i]);
                }
            }
            else {
                tempArr[0] = tempStr;
                for(let i = 0; i < tempArr.length; i++) {
                    storeInBox(tempArr[i]);
                }
            }
        }
    }

}


function memory(action,suffix,elements) {

	let tempArr = [];

	tempArr.push("finaldex");
    if (suffix.includes("game")) {
        tempArr.push(GameID);
    }
	

	for(let i = 0; i < elements.length; i++) {
		let setName = tempArr.join("-")+"-"+elements[i].getAttribute("name");
		let setValue;

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
                let item = JSON.parse(localStorage.getItem(setName));
                if (item != null) {
                    elements[i].checked = JSON.parse(localStorage.getItem(setName));
                }
            }
            else {
                let item = localStorage.getItem(setName);
                if (item != null) {
                    elements[i].value = item;
                }
            }
		}
	}

}



function memoryDexSwitch() {
	let radio = document.getElementsByName("finaldex-dexswitch-" + GameID);
	let val = localStorage.getItem("finaldex-dexswitch-" + GameID);


	for(let i = 0; i < radio.length; i++) {
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
