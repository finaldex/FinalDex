function create_element({ Tag, Attribute = {}, Parent, Sibling, Event = {}, HTML, Text, Class = [], Data = {}, Position,  }) {

    const namespace = ["svg","path","circle","rect","line","polyline","polygon","text","g"]
    const element = namespace.includes(Tag.toLowerCase()) ? document.createElementNS("http://www.w3.org/2000/svg", Tag) : document.createElement(Tag);

    // Set attribute
    for (const [key, value] of Object.entries(Attribute)) {
        element.setAttribute(key, value);
    }
    
    // Add data attribute
    for (const [key, value] of Object.entries(Data)) {
        element.setAttribute(`data-${key}`, value);
    }
    
    // Add classes
    if (Class.length) {
        element.classList.add(...Class);
    }
    
    // Add event listeners
    for (const [e, l] of Object.entries(Event)) {
        element.addEventListener(e, l);
    }
    
    // Set innerHTML if provided
    if (HTML !== undefined) {
        element.innerHTML = HTML;
    }

	// Set innerText if provided
    if (Text !== undefined) {
        element.innerText = Text;
    }
    
    // Append to parent
    if (Position && Position.toLowerCase() === "top" && Sibling) {
        Sibling.insertAdjacentElement('beforebegin', element); // Insert before the sibling element
    } else if (Position && Position.toLowerCase() === "top") {
        Parent.insertAdjacentElement('afterbegin', element); // Insert at the top of the parent
    } else if (Position && Position.toLowerCase() === "bottom" && Sibling) {
        Sibling.insertAdjacentElement('afterend', element); // Insert after the sibling element
    } else if (Sibling) {
        Sibling.insertAdjacentElement('afterend', element); // Default to inserting after the sibling
    } else {
        Parent.appendChild(element); // Insert at the bottom of the parent
    }


    // Return element
    return element;
}



function parse_levels(Level) {

    // Example Usage: "25-32,35" --> [25,26,27,28,29,30,31,32,35]

    if (typeof Level !== 'string' || /[a-zA-Z]/.test(Level)) return [Level]; // Fallback if Level is not valid

    // Split the input by commas and process each part
    const formattedLevel = Level.split(',').flatMap(part => {
        if (part.includes('-')) {
            const [start, end] = part.split('-').map(num => Number(num.trim()));
            return (!isNaN(start) && !isNaN(end) && start <= end)
                ? Array.from({ length: end - start + 1 }, (_, j) => start + j)
                : [];
        } else {
            const num = Number(part.trim());
            return !isNaN(num) ? [num] : [];
        }
    });

    // Remove duplicates and create a unique sorted array
    return [...new Set(formattedLevel)].sort((a, b) => a - b);
}

function unparse_levels(Level) {

    if (typeof Level[0] === 'string') return Level;

    Level.sort((a, b) => a - b); // Sort the array
    let result = [];
    let start = Level[0];
    let end = Level[0];

    for (let i = 1; i <= Level.length; i++) {
        if (Level[i] === end + 1) {
            end = Level[i]; // Continue the range
        } else {
            result.push(start === end ? `${start}` : `${start}-${end}`); // Add the range or single number
            start = Level[i];
            end = Level[i];
        }
    }

    return result.join(', ');
}





function parse_conjunctionSplit(string) {
    // Split the string by slashes first
    const groups = string.split('/').map(group => {
        // Then split each group by commas and trim whitespace
        return group.split(',').map(item => item.trim());
    });

    return groups;
}

function format_conjunctionSplit(array) {
    return array.map(group => group.join(', ')).join(' / ');
}


function format_arraystring(array, keys) {
    if (array.length === 0) return '';

    // Create an array of strings for each object based on specified keys
    const pairs = array.map(item => {
        // Construct a string based on the keys provided
        return keys.map(key => item[key]).join(' ');
    });

    // Join all but the last element with a comma, and the last with "and"
    const lastElement = pairs.pop();
    const formattedString = pairs.length > 0 
        ? `${pairs.join(', ')}, and ${lastElement}` 
        : lastElement;

    return formattedString;
}


function format_time(ms) { 

	if (typeof ms !== 'number' || isNaN(ms)) { return ms; }

    const milliseconds = ms % 1000;
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const centuries = Math.floor(years / 100);
    const millennia = Math.floor(years / 1000);

    const remainingDays = days % 365;

    // Helper function for pluralization
    const pluralize = (count, label) => `${count} ${label}${count === 1 ? '' : 's'}`;

    let readableTime = '';
    if (millennia > 0) readableTime += `${pluralize(millennia, 'millennium')}, `;
    if (centuries > 0) readableTime += `${pluralize(centuries, 'century')}, `;
    if (years > 0) readableTime += `${pluralize(years, 'year')}, `;
    if (remainingDays > 0) readableTime += `${pluralize(remainingDays, 'day')}, `;
    if (hours > 0) readableTime += `${pluralize(hours, 'hour')}, `;
    if (minutes > 0) readableTime += `${pluralize(minutes, 'minute')}, `;

    // Format total seconds without decimal point for whole numbers
    const totalSeconds = seconds + (milliseconds / 1000);
    const formattedSeconds = totalSeconds % 1 === 0 ? totalSeconds.toFixed(0) : totalSeconds.toFixed(1).replace(/\.0$/, '');
    readableTime += `${formattedSeconds} second${formattedSeconds === '1' ? '' : 's'}`;

    return readableTime.trim().replace(/,\s*$/, ''); // Trim any trailing comma
}


function format_V(str) {
    const vArray = str.split(',').map(Number);
    let vObject = {};

    if (vArray.length === 6) {
        vObject = {
            HP: vArray[0],
            Attack: vArray[1],
            Defense: vArray[2],
            SpAtk: vArray[3],
            SpDef: vArray[4],
            Speed: vArray[5]
        };
    } else if (vArray.length === 5) {
        vObject = {
            HP: vArray[0],
            Attack: vArray[1],
            Defense: vArray[2],
            Special: vArray[3],
            Speed: vArray[4]
        };
    } else {
        throw new Error("Invalid string format");
    }

    return vObject;
}





function toggleVisibility(show, hide) {
    // Hide specified elements
    hide.forEach((element) => {
        if (element) {
            element.classList.remove("active");
        }
    });

    // Show specified elements
    show.forEach(element => {
        if (element) {
            element.classList.add("active");
        }
    });
}