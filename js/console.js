
const create_console = function() {
    const con = create_element({Tag: "div", Attribute: { id: "console", }, Parent: document.body });
}

function console_text(parameters = {}) {

    const options = {
        Text: "",
        Time: 2000,
        Position: ["Top","Right"],
        ...parameters
    };

    let con = document.querySelector("#console");
    con.className = "";

    options.Position.forEach(pos => {
        con.classList.add(pos);
    });

    const txt = create_element({Tag: "span", Text: options.Text, Attribute: {style: "opacity:1;"}, Parent: con });
    setTimeout(function() { txt.style.opacity = "0"; setTimeout(function () { txt.remove(); }, 1000); }, options.Time);
}
    