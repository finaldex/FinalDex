var wsrc = ["Home","Games","FAQ","Bug","Metadata","Sources","Changelog"]

function build() {

var GamesFull = ["Red Version","Blue Version","Yellow Version","Gold Version","Silver Version","Crystal Version","Ruby Version","Sapphire Version","Colosseum","FireRed Version","LeafGreen Version","Emerald Version","XD: Gale of Darkness","Diamond Version","Pearl Version","Platinum Version","HeartGold Version","SoulSilver Version","Black Version","White Version","Black Version 2","White Version 2","X","Y","Omega Ruby","Alpha Sapphire","Sun","Moon","Ultra Sun","Ultra Moon","Let's Go, Pikachu!","Let's Go, Eevee!","Sword","Shield"];
var GamesSimple = ["Red Version","Blue Version","Yellow Version","Gold Version","Silver Version","Crystal Version","Ruby Version","Sapphire Version","Colosseum","FireRed Version","LeafGreen Version","Emerald Version","XD Gale of Darkness","Diamond Version","Pearl Version","Platinum Version","HeartGold Version","SoulSilver Version","Black Version","White Version","Black Version 2","White Version 2","X","Y","Omega Ruby","Alpha Sapphire","Sun","Moon","Ultra Sun","Ultra Moon","Lets Go Pikachu","Lets Go Eevee","Sword","Shield"];
var GamesArt = ["Kanto_RBY","Kanto_RBY","Kanto_RBY","JohtoKanto_GSC","JohtoKanto_GSC","JohtoKanto_GSC","Hoenn_RS","Hoenn_RS","","Kanto_FRLG","Kanto_FRLG","Hoenn_E","","Sinnoh_DP","Sinnoh_DP","Sinnoh_Pt","JohtoKanto_HGSS","JohtoKanto_HGSS","Unova_BW","Unova_BW","Unova_B2W2","Unova_B2W2","Kalos_XY","Kalos_XY","Hoenn_ORAS","Hoenn_ORAS","Alola_SM","Alola_SM","Alola_USUM","Alola_USUM","Kanto_LGPE","Kanto_LGPE","Galar_SwSh","Galar_SwSh"];
var GamesDescription = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];





for (var i = 0; i < GamesFull.length; i++) {
    var x = i;
    var li = document.createElement("li");
    li.name = x;
    li.addEventListener("keyup",function(event){if(event.which === 13){event.target.querySelector(":scope a").click();}});
    document.querySelector("#Games span ul").appendChild(li);
    li.setAttribute("tabindex","1");


    if (GamesArt[i] != "") {
        var art = document.createElement("img");
        art.src = "./media/Images/Misc/Region/" + GamesArt[i] + ".png";
        art.title = GamesArt[i];
        art.setAttribute("onerror","this.style.display='none'");
        li.appendChild(art)
    }
    else {
        li.classList.add("miss");
    }

    var titlewrap = document.createElement("a");
    var title = document.createElement("img");
    title.src = "./media/Images/Misc/Title/Text/" + GamesSimple[i] + ".png";
    title.title = GamesSimple[i];
    title.setAttribute("onerror","this.style.display='none'");
    titlewrap.setAttribute("href","./Game.html"+"#"+GamesFull[i]);
    titlewrap.setAttribute("tabindex","-1");
    li.appendChild(titlewrap)
    titlewrap.appendChild(title)

}


}

build();

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

(function() {
    // get all data in form and return object
    function getFormData(form) {
      var elements = form.elements;
      var honeypot;
  
      var fields = Object.keys(elements).filter(function(k) {
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
  
      var formData = {};
      fields.forEach(function(name){
        var element = elements[name];
        
        // singular form elements just have one value
        formData[name] = element.value;
  
        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
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
  
    function handleFormSubmit(event) {  // handles form submit without any jquery
      event.preventDefault();           // we are submitting via xhr below
      var form = event.target;
      var formData = getFormData(form);
      var data = formData.data;
      var textarea = form.querySelector(":scope textarea");


  
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
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                form.reset();
                var formElements = form.querySelector(".gform > span")
                if (formElements) {
                formElements.classList.add("hide");
                }
            }
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
      }
    }
    
    function loaded() {
      // bind to the submit event of our form
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);  
})();

function buttonAction(form,action) {
    var action;
    var buttons = form.querySelectorAll(":scope div:first-child button");
    for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = action;
    }
}

$(document).ready(function() {

    var stickyNavTop = $('#content').offset().top;

    var stickyNav = function(){
        var scrollTop = $('#content').scrollTop();
                

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
