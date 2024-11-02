async function load_mediaquery() {
    
    await load_dataset(json_url["Directory"]);

    const dropdowns = document.querySelectorAll('.dropdown');

    document.addEventListener('click', function(event) {
        dropdowns.forEach(dropdown => {
            const input = dropdown.querySelector(":scope > textarea");
            const dropdownContent = dropdown.querySelector(":scope > div");

            if (dropdown.contains(event.target)) {
                if (event.target === input) {
                    dropdown.classList.toggle('active');
                } else {
                    dropdown.classList.add('active');
                }
            } else {
                dropdown.classList.remove('active');
            }
            update_dropdown(dropdown);
           
        });
    });

    dropdowns.forEach(dropdown => {
        update_dropdown(dropdown);
    });
}


function update_dropdown(dropdown) {

    const input = dropdown.querySelector(":scope > textarea");
    const dropdownContent = dropdown.querySelector(":scope > div");

    const checkboxes = dropdownContent.querySelectorAll("input[type='checkbox']");
    const selectedValues = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.nextElementSibling.innerText);
    input.value = selectedValues.join(", ");
    input.title = selectedValues.join("\n");
}
let previousResultEmpty = false;

function mediaquery() {
    const file_input = document.querySelector("#search-file");
    const path_input = document.querySelector("#search-path");
    const source_inputs = document.querySelectorAll("nav .source input:checked");
    const version_inputs = document.querySelectorAll("nav .version input:checked");
    const size_input = document.querySelector("#size_value"); // Define size_input here

    const path = path_input.value.split(/[,]/);
    const file = file_input.value.split(/[,]/);

    
    const source = source_inputs.length > 0 ? Array.from(source_inputs).map(i => i.value) : ["All"];
    const version = version_inputs.length > 0 ? Array.from(version_inputs).map(i => i.value) : [];


    console.log(source)
    console.log(version)
    
    const game = version.length > 0 ? [...source.flatMap(game => version.map(region => `${game}-${region}`))] : source;

    const list = document.querySelector("ol");
    const result = get_directory({FirstMatch: false, Exact: false, File: file, Path: path, Game: game}).filter(v => v.includes("Images"));
    
    list.innerHTML = "";

    // Check if the previous result was empty and the current result is not empty
    if (previousResultEmpty) {
        size_input.value = 50; // Reset to default 50
        size_input.max = 50;
    }

    // Update the flag for the next call
    previousResultEmpty = result.length === 0;

    mediaquery_paginate(result);
}

function mediaquery_paginate(result) {
    const page_element = document.querySelector("nav .page");
    const size_input = document.querySelector("#size_value");
    const page_input = document.querySelector("#page_value");
    const list = document.querySelector("ol");
    list.innerHTML = "";

    page_element.dataset.size = result.length;

    page_update();
    count_update();

    const pageSize = parseInt(size_input.value, 10);
    const currentPage = parseInt(page_input.value, 10);

    const value_min = (currentPage - 1) * pageSize;
    const value_max = currentPage * pageSize - 1;

    const file_sort = document.querySelector("header .file").dataset.state;
    const path_sort = document.querySelector("header .path").dataset.state;
    const source_sort = document.querySelector("header .source").dataset.state;
    const extension_sort = document.querySelector("header .extension").dataset.state;

    const file_regex = /\/([^\/]+)\.([a-zA-Z0-9]+)$/;
    const path_regex = /^(.*\/[^\/]+)\/[^\/]+\/[^\/]+$/;
    const source_regex = /\/([^\/]+)\/[^\/]+\.([a-zA-Z0-9]+)$/;
    const extension_regex = /\.([a-zA-Z0-9]+)$/;    

    result.sort((a, b) => {
        if (file_sort === "") return 0;
        const extA = (a.match(file_regex) || [])[1] || '';
        const extB = (b.match(file_regex) || [])[1] || '';
        if (file_sort === "true") { return extA.localeCompare(extB); }
        if (file_sort === "false") { return extB.localeCompare(extA); }
    });

    result.sort((a, b) => {
        if (path_sort === "") return 0;
        const extA = (a.match(path_regex) || [])[1] || '';
        const extB = (b.match(path_regex) || [])[1] || '';
        if (path_sort === "true") { return extA.localeCompare(extB); }
        if (path_sort === "false") { return extB.localeCompare(extA); }
    });

    result.sort((a, b) => {
        if (source_sort === "") return 0;
        const extA = (a.match(source_regex) || [])[1] || '';
        const extB = (b.match(source_regex) || [])[1] || '';
        if (source_sort === "true") { return extA.localeCompare(extB); }
        if (source_sort === "false") { return extB.localeCompare(extA); }
    });

    result.sort((a, b) => {
        if (extension_sort === "") return 0;
        const extA = (a.match(extension_regex) || [])[1] || '';
        const extB = (b.match(extension_regex) || [])[1] || '';
        if (extension_sort === "true") { return extA.localeCompare(extB); }
        if (extension_sort === "false") { return extB.localeCompare(extA); }
    });

    result.forEach((r, i) => {
        if (i >= value_min && i <= value_max) {
            const extension = r.match(extension_regex)[1];
            const file = r.match(file_regex)[1];
            const path = r.match(path_regex)[1]
            const source = r.match(source_regex)[1].split(/[_]/);

            const li = create_element({ Tag: "li", Parent: list });

            const image_wrap = create_element({ Tag: "div", Class: ["image"], Parent: li });
            const image = create_element({ Tag: "img", Attribute: { src: r }, Parent: image_wrap });

            const file_wrap = create_element({ Tag: "div", Class: ["file"], Parent: li });
            const file_text = create_element({ Tag: "span", Text: file, Parent: file_wrap });

            const path_wrap = create_element({ Tag: "div", Class: ["path"], Parent: li });
            const path_text = create_element({ Tag: "span", Text: path, Parent: path_wrap });

            const source_wrap = create_element({ Tag: "div", Class: ["source"], Parent: li });
            source.forEach(s => {
                const source_text = create_element({ Tag: "span", Text: s, Parent: source_wrap });
            });

            const extension_wrap = create_element({ Tag: "div", Class: ["extension"], Parent: li });
            const extension_text = create_element({ Tag: "span", Text: extension, Parent: extension_wrap });
        }
    });
}

function page_update() {
    const page_element = document.querySelector("nav .page");
    const size_input = document.querySelector("#size_value");
    const page_input = document.querySelector("#page_value");

    const size_max = 500;

    size_input.max = parseInt(page_element.dataset.size);
    page_input.max = Math.ceil(parseInt(page_element.dataset.size) / parseInt(size_input.value));

    //if (parseInt(page_element.dataset.size) === 0) { return }

    // Ensure page_input.value is within min and max range
    if (parseInt(page_input.value) > parseInt(page_input.max)) {
        page_input.value = page_input.max;
    }
    if (parseInt(page_input.value) < parseInt(page_input.min)) {
        page_input.value = page_input.min;
    }
    if (parseInt(size_input.value) > parseInt(size_input.max)) {
        size_input.value = size_input.max;
    }
    if (parseInt(size_input.value) > size_max) {
        size_input.value = size_max;
    }
    if (parseInt(size_input.value) < (parseInt(size_input.min))) {
        size_input.value = size_input.min;
    }
}

function count_update() {
    const page_element = document.querySelector("nav .page");
    const count_element = document.querySelector("nav .count > *");
    const size_input = document.querySelector("#size_value");
    const page_input = document.querySelector("#page_value");
    
    const pageSize = parseInt(size_input.value, 10) || 1;
    const currentPage = parseInt(page_input.value, 10) || 1;

    const size = page_element.dataset.size ? parseInt(page_element.dataset.size, 10) || 0 : 0;

    const value_min = size > 0 ? (currentPage - 1) * pageSize : 0;
    const value_max = size > 0 ? (value_min + pageSize) : 0;

    count_element.innerHTML = `${(value_max !== 0 ? value_min + 1 : 0)} – ${value_max}<span> / ${size}</span>`;
}