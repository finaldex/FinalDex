let wsrc = ["Home","Games","FAQ","Bug","Metadata","Sources","Changelog"]

function build() {

	let Games = []

	for (let i = 0; i < finaldata["Game"]["Reference"].length; i++) {
		let type = finaldata["Game"]["Reference"][i]["Type"]
		if (type == "Core" || type == "Side") {
			let obj = new Object();
			obj["Name"] = finaldata["Game"]["Reference"][i]["Name"];
			obj["Full"] = finaldata["Game"]["Reference"][i]["Full Name"];
			obj["ID"] = finaldata["Game"]["Reference"][i]["ID"];
			obj["Region"] = finaldata["Game"]["Reference"][i]["Region"];
			obj["Generation"] = finaldata["Game"]["Reference"][i]["Generation"];
			Games.push(obj)
		}
	}
	
	let ranobj = new Object();
	ranobj["Name"] = "Random";
	ranobj["Full"] = "Random";
	ranobj["ID"] = 0;
	ranobj["Region"] = "";
	ranobj["Generation"] = 0;
	Games.push(ranobj)



	for (let i = 0; i < Games.length; i++) {
		let generation = Games[i]["Generation"];
		let id = Games[i]["ID"];
		let name = Games[i]["Name"];
		let region = Games[i]["Region"];
		let full = Games[i]["Full"];

		let appender = document.querySelector("#Games span ul[name='"+generation+"']");


		let li = document.createElement("li");
		li.setAttribute("name",id);
		li.addEventListener("keyup",function(event){if(event.which === 13){event.target.querySelector(":scope a").click();}});
		appender.appendChild(li);
		li.setAttribute("tabindex","1");




		let art = document.createElement("img");
		art.src = getMedia(true,[""],[PATH_Region_Art_Official],[name]);
		li.appendChild(art)


		let titlewrap = document.createElement("a");
		let title = document.createElement("img");
		title.src = getMedia(true,["Title"],[PATH_Game_Title],[name]);
		title.title = name;
		titlewrap.setAttribute("href","./Game.html#"+full);
		titlewrap.setAttribute("tabindex","-1");
		li.appendChild(titlewrap)
		titlewrap.appendChild(title)


	}


	/*
	let arr1 = [];
  	let arr2 = [];

	for (let i = 0; i < 35; i++) {
		let x = i+1;
		GameID = x;
    	define();
		arr1.push(tempOverviewImages)
    	arr2.push(MEDIAPath_LocationOverview)
	}

  arr1.reverse();
  arr2.reverse();
  
  for (let q = 0; q < 10; q++) {
    for (let i = 0; i < arr1.length; i++) {
      if (i != 0){
        if (arr1[i][0] == arr1[i-1][0]) {
          arr1.splice(i,1)
          arr2.splice(i,1)
        }
      }
    }
  }

  arr1.reverse();
  arr2.reverse();






  if (false) {
    let div = document.createElement("div");
    document.getElementById("Home").append(div)
    let used = [];
    for (let q = 0; q < 0; q++) {
      let ran1 = Math.floor(Math.random() * arr1.length);
      let ran2 = Math.floor(Math.random() * arr1[ran1].length);


      for (let r = 0; r < 20; r++) {
        if (!used.includes(ran1+"-"+ran2)) {
          break;
        }
        else {
          ran1 = Math.floor(Math.random() * arr1.length);
          ran2 = Math.floor(Math.random() * arr1[ran1].length);
        }
      }

      used.push(ran1+"-"+ran2)

      let val1 = arr1[ran1][ran2];
      let val2 = arr2[ran1];
      
      
      let img = document.createElement("img");
      img.src = "./media/Images/Location/Overview/"+val2+"/"+val1+".png";
      img.setAttribute("onerror","this.style.display='none'")
      img.title = val1.replaceAll("_"," ")+"in Pokémon "+val2;
      div.appendChild(img);
    }
  }
*/


}


let finaldata = [];
let baseurl = "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/";
let baseextension = "json";

let datas = ["Directory","Game Metadata"]
for(let i = 0; i < datas.length; i++) {
    loadData(i)
}


function loadData(i) {
    let val = datas[i].replace(" Metadata","")
    let gameRequest = new XMLHttpRequest();
    gameRequest.open('GET', baseurl+datas[i]+"."+baseextension);
    gameRequest.responseType = 'json';
    gameRequest.send();
    gameRequest.onload = function() {
        finaldata[val] = gameRequest.response;
		if (i == datas.length-1) {
			build();
		}
    }
}




$(window).on('beforeunload', function() {
	$(window).scrollTop(0);
});

(function() {
	// get all data in form and return object
	function getFormData(form) {
		let elements = form.elements;
		let honeypot;

		let fields = Object.keys(elements).filter(function(k) {
			if (elements[k].name === "hp") {
				honeypot = elements[k].value;
				return false;
			}
			return true;
		}).map(function(k) {
			if(elements[k].name !== undefined) {
				return elements[k].name;
			// special case for Edge's html collection
			}else if(elements[k].length > 0){
				return elements[k].item(0).name;
			}
		}).filter(function(item, pos, self) {
			return self.indexOf(item) == pos && item;
		});

		let formData = {};
		fields.forEach(function(name){
			let element = elements[name];
			
			// singular form elements just have one value
			formData[name] = element.value;

			// when our element has multiple items, get their values
			if (element.length) {
				let data = [];
				for (let i = 0; i < element.length; i++) {
					let item = element.item(i);
					if (item.checked || item.selected) {
						data.push(item.value);
					}
				}
				formData[name] = data.join(', ');
			}
		});
		// add form-specific values into the data
		formData.formDataNameOrder = JSON.stringify(fields);
		formData.formGoogleSheetName = form.dataset.sheet || "reports"; // default sheet name
		formData.formGoogleSendEmail
			= form.dataset.email || ""; // no email by default

		return {data: formData, honeypot: honeypot};
	}

	function handleFormSubmit(event) {	// handles form submit without any jquery
		event.preventDefault();					 // we are submitting via xhr below
		let form = event.target;
		let formData = getFormData(form);
		let data = formData.data;
		let textarea = form.querySelector(":scope textarea");



		// If a honeypot field is filled, assume it was done so by a spam bot.
		if (formData.honeypot) {
			return false;
		}
		else if (textarea.value == "" || textarea.value == undefined ) {
			form.querySelector(":scope button").animate([{transform: "translateX(0px)"}, {transform: "translateX(2px)"}, {transform: "translateX(0px)"}, {transform: "translateX(-2px)"}, {transform: "translateX(0px)"}, ], {duration: 200,easing: "linear",iterations: 1,});
			return false;
		}
		else {
			buttonAction(form,true);
			let url = form.action;
			let xhr = new XMLHttpRequest();
			xhr.open('POST', url);
			// xhr.withCredentials = true;
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.onreadystatechange = function() {
					if (xhr.readyState === 4 && xhr.status === 200) {
							form.reset();
							let formElements = form.querySelector(".gform > span")
							if (formElements) {
							formElements.classList.add("hide");
							}
					}
			};
			// url encode form data for sending as post data
			let encoded = Object.keys(data).map(function(k) {
					return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
			}).join('&');
			xhr.send(encoded);
		}
	}
	
	function loaded() {
		// bind to the submit event of our form
		let forms = document.querySelectorAll("form.gform");
		for (let i = 0; i < forms.length; i++) {
			forms[i].addEventListener("submit", handleFormSubmit, false);
		}
	};
	document.addEventListener("DOMContentLoaded", loaded, false);	
})();

function buttonAction(form,action) {
	let buttons = form.querySelectorAll(":scope div:first-child button");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].disabled = action;
	}
}

$(document).ready(function() {
	let stickyNavTop = $('#content').offset().top;

	let stickyNav = function(){
			let scrollTop = $('#content').scrollTop();
							

			if (scrollTop > stickyNavTop) {
					$('nav').addClass('sticky');
			} else {
					$('nav').removeClass('sticky');
			}
	};

	stickyNav();

	$('#content').scroll(function() {
			stickyNav();
	});
});
