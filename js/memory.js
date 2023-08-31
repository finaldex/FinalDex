function partyMemory(action) {
    let partySlots = document.querySelectorAll('#pokémon > aside[name="team"] section[name="party"] > div');
    if (action == "Save") {
        let partyMemory = [];
        for(let i = 0; i < partySlots.length; i++) {
            partyMemory.push(partySlots[i].getAttribute("data-string"))
        }
        localStorage.setItem("finaldex-party-"+GameID, partyMemory.join("/"));
    }
    else if (action == "Restore") {
        let tempData = localStorage.getItem("finaldex-party-"+GameID);
        if (tempData != undefined) {
            let tempArr = localStorage.getItem("finaldex-party-"+GameID).split("/");
            if (tempArr.length == partySlots.length) {
                for(let i = 0; i < tempArr.length; i++) {
                    if (tempArr[i] != "") {
                        partySlots[i].setAttribute("data-string",tempArr[i])
                        partyApply(partySlots[i]);
                    }
                }
            }
        }
    }
}




function boxMemory(action) {

    if (action == "Save") {
        let els = document.querySelectorAll("#pokémon > aside section[name='box'] ul > li");
        let data = [];
        for (let i = 0; i < els.length; i++) {
            let data_str = els[i].getAttribute("data-string")
            if (data_str != undefined && data_str != "") {
                data.push(data_str);
            }
        }
        localStorage.setItem("finaldex-box-"+GameID, JSON.stringify(data));
    }
    else if (action == "Restore") {
        let data = localStorage.getItem("finaldex-box-"+GameID);
        if (data != undefined && data != "") {
            try {
                data = JSON.parse(data)
                for (let i = 0; i < data.length; i++) {
                    createBox(data[i]);
                }
            }
            catch {
                console.log(data)
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

        if (setName.includes("null")) {
            console.warn("Element is missing unique name for memory.")
            return;
        }

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
