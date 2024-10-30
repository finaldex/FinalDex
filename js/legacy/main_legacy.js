(function() {

    function openModal() {

        let modalTrigger = document.getElementsByClassName('bug-modal-open');


        for (let i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function() {
                let modalWindow = document.getElementById("bug-modal");

                $("body").addClass("modal-open");

                modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
            }
        }
    }

    function closeModal() {

        let closeButton = document.getElementsByClassName('bug-modal-close');
        let closeOverlay = document.getElementsByClassName('bug-modal-overlay');

        for (let i = 0; i < closeButton.length; i++) {
            closeButton[i].onclick = function() {
                let modalWindow = this.parentNode.parentNode;

                $("body").removeClass("modal-open");

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

        for (let i = 0; i < closeOverlay.length; i++) {
            closeOverlay[i].onclick = function() {
                let modalWindow = this.parentNode;

                $("body").removeClass("modal-open");

                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

    }


    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }


    ready(openModal);
    ready(closeModal);
}());


(function() {
    // get all data in form and return object
    function getFormData(form) {
      let elements = form.elements;
      let honeypot;
  
      let fields = Object.keys(elements).filter(function(k) {
        if (elements[k].name === "honeypot") {
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
  
    function handleFormSubmit(event) {  // handles form submit without any jquery
      event.preventDefault();           // we are submitting via xhr below
      let form = event.target;
      let formData = getFormData(form);
      let data = formData.data;
  
      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        return false;
      }
  
      disableAllButtons(form);
      let url = form.action;
      let xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            form.reset();
            let formElements = form.querySelector(".form-elements")
            if (formElements) {
              formElements.style.display = "none"; // hide form
            }
            let thankYouMessage = form.querySelector(".thankyou_message");
            if (thankYouMessage) {
              thankYouMessage.style.display = "flex";
            }
          }
      };
      // url encode form data for sending as post data
      let encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
    }
    
    function loaded() {
      // bind to the submit event of our form
      let forms = document.querySelectorAll("form.gform");
      for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);
  
    function disableAllButtons(form) {
      let buttons = form.querySelectorAll("button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  })();
  