

let finaldata = [];
let baseurl = "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/";
let baseextension = "json";
let ite = 0;
let datas = ["Directory","Game Dataset"]
for (let i = 0; i < datas.length; i++) {
    loadData(i)
}


function loadData(i) {
    let val = datas[i].replace(" Dataset","")
    let gameRequest = new XMLHttpRequest();
    gameRequest.open('GET', baseurl+datas[i]+"."+baseextension);
    gameRequest.responseType = 'json';
    gameRequest.send();
    gameRequest.onload = function() {
        finaldata[val] = gameRequest.response;
		ite += 1;
		if (ite == datas.length) {
			console.log(finaldata)
			build();
		}
    }
}






let wsrc = ["Home","Games","FAQ","Bug","Dataset","Sources","Changelog"]




function build() {

	let Games = []

	for (let i = 0; i < finaldata["Game"]["Overview"].length; i++) {
		let type = finaldata["Game"]["Overview"][i]["Type"]
		if (type == "Core" || type == "Side") {
			let obj = new Object();
			obj["Name"] = finaldata["Game"]["Overview"][i]["Name"];
			obj["Full"] = finaldata["Game"]["Overview"][i]["Full Name"];
			obj["ID"] = finaldata["Game"]["Overview"][i]["ID"];
			obj["Region"] = finaldata["Game"]["Overview"][i]["Region"];
			obj["Generation"] = finaldata["Game"]["Overview"][i]["Generation"];
			Games.push(obj)
		}
	}

	let objs = [{Name: "Random",Full:"Random",ID:0,Region:"",Generation:0},{Name: "Mediaquery",Full:"Mediaquery",ID:0,Region:"",Generation:0}]


	Games = Games.concat(objs)

	for (let i = 0; i < Games.length; i++) {
		let generation = Games[i]["Generation"];
		let id = Games[i]["ID"];
		let name = Games[i]["Name"];
		let region = Games[i]["Region"];
		let full = Games[i]["Full"];

		let appender = document.querySelector("#Games ul[name='"+generation+"'] > span");

		let data_href = "./Game.html#"+full


		let games = [name];
		let paths = [path_Region,path_Game_Art];

		if (id == 0 && generation == 0) {
			data_href = "./"+name+".html";
			games = AllGames;
			paths = [path_Game_Art];
		}



		if (name == "Random") {
			data_href = "./Game.html#"+name;
		}

		let med = get_directory({MatchFirst: false, File: [], Path: paths, Game: games})
		let ran = parseInt(getRandomInt(0,med.length))
		med = med[ran];
	

		let li = document.createElement("li");
		li.setAttribute("name",id);
		li.addEventListener("keyup",function(event) {if (event.which === 13) {event.target.querySelector(":scope a").click();}});
		appender.appendChild(li);
		li.setAttribute("tabindex","1");




		let art = document.createElement("img");
		art.src = med;
		li.appendChild(art)


		let titlewrap = document.createElement("a");
		let title = document.createElement("img");
		title.src = get_directory({FirstMatch: true, File: ["Title"], Path: [path.Game.Title], Game: [name]});
		title.title = name;
		titlewrap.setAttribute("href",data_href);
		titlewrap.setAttribute("tabindex","-1");
		li.appendChild(titlewrap)
		titlewrap.appendChild(title)


	}
	

	let vids = document.querySelectorAll("video");
	for (let i = 0; i < vids.length; i++) {
		vids[i].playbackRate = 2;
		vids[i].addEventListener("play",vidStart)
		vids[i].addEventListener("ended",vidEnd)
	}


	videoFunc();
}

function vidEnd() {
	event.target.className = "inactive";
	try {
		this.nextElementSibling.play();
	} catch {
		this.parentElement.firstElementChild.play();
	}
}

function vidStart() {
	event.target.className = "active";
	let els = this.parentElement.querySelectorAll(":scope > *");
	let id = 0; for (let i = 0; i < els.length; i++) {
		if (els[i] == this) {
			id = i;break;
		}
	}

	this.parentElement.style.setProperty("--state","-"+id+"00%")
}


function videoFunc() {
	let trigger = document.querySelector("#Home button");
	let vids = document.querySelectorAll("#Home video");

	let playing;

	for (let i = 0; i < vids.length; i++) {
		if (vids[i].playing || vids[i].classList.contains("active")) {
			playing = vids[i];
			break;
		}
	}
	if (playing == undefined) {
		playing = vids[0];
		trigger.innerText = "▶";
	}
	else if (trigger.innerText == "") {
		trigger.innerText = "❙❙";
	}


	if (trigger.innerText == "▶")  { // play
		playing.play();
		trigger.innerText = "❙❙";
	}
	else if (trigger.innerText == "❙❙") {
		playing.pause();
		trigger.innerText = "▶";
	}

	

}

/*
$(window).on('beforeunload', function() {
	$(window).scrollTop(0);
});
*/

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
			if (elements[k].name !== undefined) {
				return elements[k].name;
			// special case for Edge's html collection
			}else if (elements[k].length > 0) {
				return elements[k].item(0).name;
			}
		}).filter(function(item, pos, self) {
			return self.indexOf(item) == pos && item;
		});

		let formData = {};
		fields.forEach(function(name) {
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
	form.parentElement.setAttribute("data-state",action);
	let buttons = form.querySelectorAll(":scope div:first-child button");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].disabled = action;
	}
}

$(document).ready(function() {
	let stickyNavTop = $('#content').offset().top;

	let stickyNav = function() {
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
