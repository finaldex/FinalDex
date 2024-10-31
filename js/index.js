
async function load_index() {
    await load_dataset(json_url["Directory"]);

    game_image()

	document.querySelector("form").addEventListener("submit", form_submit, false);
    
    // Add event listeners to all video elements
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.addEventListener("ended", video_autoplay);
        video.playbackRate = 2;
    });

    document.querySelector(".pause").classList.add("active");
    video_play(videos[0])
}

function game_image() {
    const games = document.querySelectorAll("#Games li[data-game]:has(img)");

    games.forEach(g => {
        const game = g.dataset.game.split(/[,]/);
        const game_art = get_directory({ Path: [Path.Game.Art.base], Game: game});
        const location_art = get_directory({ Path: [Path.Location.Art.Official], Game: game});
        const location_load = get_directory({ Path: [Path.Location.Load], Game: game});
        const location_overview = get_directory({ Path: [Path.Location.Overview], Game: game});
        const pokemon_art = get_directory({ Path: [Path.Pokemon.Art.Default.Front.Official], Game: game});

        let art = [];

        art = adjustArrayLength(art, location_art, 12);    
        art = adjustArrayLength(art, location_load, 8);
        art = adjustArrayLength(art, game_art, 4);
        art = adjustArrayLength(art, location_overview, 1);
        art = adjustArrayLength(art, pokemon_art, 1);
        
        const img = g.querySelector(":scope img");
        img.src = art.length > 0 ? art[Math.floor(Math.random() * art.length)] : "";

        function adjustArrayLength(array, selection, multiplier) {
            const selectionLength = selection.length > 0 ? selection.length : 1;
            const adjustedMultiplier = Math.max(1, Math.ceil(multiplier * (10 / selectionLength)));
        
            for (let i = 0; i < adjustedMultiplier; i++) {
                array = [...array, ...selection];
            }
        
            return array;
        }
             
    })

   

}


function video_play(video) {
    video.play()
    video.classList.add("active");
}
function video_pause(boolean) {

    if (boolean) {
        event.target.classList.remove("active");
        event.target.previousElementSibling.classList.add("active");
        document.querySelector("video.active").pause();
    }
    else {
        event.target.classList.remove("active");
        event.target.nextElementSibling.classList.add("active");
        document.querySelector("video.active").play();
    }

    
}
function video_autoplay(event) {
    const currentVideo = event.target;
    const parent = currentVideo.parentElement;
    const nextVideo = currentVideo.nextElementSibling;

    // Remove 'active' class from all videos and add 'inactive' class
    const allVideos = parent.querySelectorAll('video');
    allVideos.forEach(video => {
        video.classList.remove('active');
    });

    if (nextVideo && nextVideo.tagName === 'VIDEO') {
        nextVideo.classList.add("active");
        nextVideo.play();
    } else {
        // If there is no next sibling or the next sibling is not a video, play the first video in the parent
        const firstVideo = parent.querySelector('video');
        if (firstVideo) {
            firstVideo.classList.add("active");
            firstVideo.play();
        }
    }
}


document.querySelector("main").addEventListener('scroll', function() {
    const scrollPosition = document.querySelector("main").scrollTop;
    const targetElement = document.querySelector('nav div');
    
    if (scrollPosition > 0) {
        targetElement.classList.add('active');
    } else {
        targetElement.classList.remove('active');
    }
});

function form_data(form) {
    const elements = form.elements;

    const fields = Object.keys(elements).filter(function(k) {
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

    const formData = {};
    fields.forEach(function(name) {
        const element = elements[name];
        
        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
            const data = [];
            for (let i = 0; i < element.length; i++) {
                const item = element.item(i);
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
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    return {data: formData};
}

function form_submit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = form_data(form);
    const data = formData.data;
    const textarea = form.querySelector(":scope textarea");

    if (textarea.value == "" || textarea.value == undefined ) {
        form.querySelector(":scope button").animate([{transform: "translateX(0px)"}, {transform: "translateX(2px)"}, {transform: "translateX(0px)"}, {transform: "translateX(-2px)"}, {transform: "translateX(0px)"}, ], {duration: 200,easing: "linear",iterations: 1,});
        return false;
    }
    else {
        const url = form.action;
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                form.reset();
                form.parentElement.classList.add("complete");
                form.querySelector(":scope select").style.removeProperty("color");
            }
        };
        // url encode form data for sending as post data
        const encoded = Object.keys(data).map(function(k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
    }
}