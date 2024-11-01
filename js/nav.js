const create_nav = function() {
    const nav_options = [{text: "Dex", id: "dex"}, {text: "Moves", id: "move"}, {text: "Items", id: "item"}, {text: "Locations", id: "location"}, /*{text: "Tools", id: "tool"}*/];

    if (Config.Ability) { nav_options.splice(2, 0, {text: "Ability", id: "ability"}); }

    const nav = create_element({Tag: "nav", Attribute: { id: "nav", }, Position: "Top", Parent: document.body, });

    const nav_editorButton = create_element({ Tag: "button", Text: "≡", Parent: nav });

    

    nav_options.forEach((opt, index) => {
        const nav_lbl = create_element({ Tag: "label", Parent: nav });
        const nav_input = create_element({ Tag: "input", Attribute: { type: "radio", name: "navigation", id: `nav-${index + 1}`, value: opt.id, ...(opt.id === "dex" && { checked: true }), }, Event: { change: () => { const show = document.querySelectorAll(`#${opt.id}`); const hide = document.querySelectorAll(nav_options.filter(option => option.id !== opt.id).map(option => `#${option.id}`).join(', ')); toggleVisibility(show, hide) } }, Parent: nav_lbl });
        const nav_text = create_element({ Tag: "strong", Text: opt.text, Parent: nav_lbl });
    });

    // Initial call to toggleVisibility based on the checked radio input
    const checkedInput = document.querySelector('#nav input[name="navigation"]:checked');
    const initialShowIds = checkedInput ? document.querySelectorAll(`#${checkedInput.value}`) : []; // Show the checked input's value
    const initialHideIds = document.querySelectorAll(`#${nav_options.map(option => option.id).filter(id => id !== initialShowIds[0])}`); // Hide all others
    toggleVisibility(initialShowIds, initialHideIds);


    const nav_settingButton = create_element({ Tag: "button", Parent: nav });
    const nav_settingSVG = create_element({ Tag: "svg", Attribute:{ viewBox:"0 0 207.139 207.139" }, Parent: nav_settingButton });
    const nav_settingPath = create_element({ Tag: "path", Attribute:{ d:`M202.139,78.988h-23.315c-1.26-3.857-2.82-7.619-4.664-11.245l16.491-16.491c1.953-1.953,1.953-5.119,0-7.071 l-27.693-27.693c-1.953-1.952-5.118-1.952-7.071,0l-16.491,16.491c-3.626-1.844-7.387-3.404-11.245-4.664V5c0-2.761-2.239-5-5-5 H83.988c-2.761,0-5,2.239-5,5v23.315c-3.857,1.26-7.619,2.82-11.245,4.665L51.252,16.488c-0.938-0.938-2.209-1.464-3.536-1.464 c-1.326,0-2.598,0.527-3.536,1.464L16.488,44.181c-1.953,1.953-1.953,5.119,0,7.071l16.491,16.491 c-1.844,3.626-3.404,7.387-4.664,11.245H5c-2.761,0-5,2.239-5,5v39.163c0,2.761,2.239,5,5,5h23.315 c1.26,3.857,2.82,7.619,4.664,11.245l-16.491,16.491c-1.953,1.953-1.953,5.119,0,7.071l27.692,27.693 c1.953,1.952,5.118,1.953,7.071,0l16.491-16.491c3.626,1.844,7.387,3.404,11.245,4.664v23.315c0,2.761,2.239,5,5,5h39.163 c2.761,0,5-2.239,5-5v-23.315c3.857-1.26,7.619-2.82,11.245-4.664l16.491,16.491c1.953,1.952,5.118,1.952,7.071,0l27.693-27.693 c1.953-1.953,1.953-5.119,0-7.071l-16.491-16.491c1.844-3.626,3.404-7.387,4.664-11.245h23.315c2.761,0,5-2.239,5-5V83.988 C207.139,81.227,204.9,78.988,202.139,78.988z M139.531,103.569c0,19.83-16.132,35.962-35.962,35.962s-35.962-16.132-35.962-35.962 s16.132-35.962,35.962-35.962S139.531,83.74,139.531,103.569z` }, Parent: nav_settingSVG });
}
