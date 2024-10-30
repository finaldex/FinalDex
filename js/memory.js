// Function to save input status to memory and localStorage
function memory_save({ Elements, Group }) {
    // Navigate to the correct nested memory object
    let target = memory;
    Group.forEach(g => {
        if (!target[g]) {
            target[g] = {};
        }
        target = target[g];
    });

    Elements.forEach(element => {
        const id = element.id;
        const type = element.type;
        const value = element.value;

        if (type === "checkbox") {
            target[id] = element.checked; // Save checked status
        } else if (type === "radio" && element.checked) {
            target[id] = value; // Save the checked radio value
        } else if (type === "number" || type === "text") {
            target[id] = value; // Save the value for number and text inputs
        }
    });

    // Update localStorage
    localStorage.setItem('finaldex-memory', JSON.stringify(memory));
}

// Function to restore input states from memory
function memory_restore({ Elements, Group }) {
    // Navigate to the correct nested memory object
    let target = memory;
    Group.forEach(g => {
        if (!target[g]) {
            target[g] = {};
        }
        target = target[g];
    });

    Elements.forEach(element => {
        const id = element.id;
        const type = element.type;

        if (target[id] !== undefined) {
            if (type === "checkbox") {
                element.checked = target[id]; // Set checked status based on memory
            } else if (type === "radio") {
                element.checked = (target[id] === element.value); // Set checked for the saved radio value
            } else if (type === "number" || type === "text") {
                element.value = target[id]; // Restore value for number and text inputs
            }
        }
    });
}

const create_memory = function() {
    // Initialize memory from localStorage or set default
    memory = JSON.parse(localStorage.getItem('finaldex-memory')) || {};

    if (!memory[config.Game]) memory[config.Game] = {};
    if (!memory[config.Game].Dex) memory[config.Game].Dex = {};

    const pokemon = document.querySelectorAll('#dex .dex_list li input'); // Select all relevant inputs

    pokemon.forEach(input => {
        input.addEventListener('change', () => memory_save({ Elements: pokemon, Group: [config.Game, 'Dex'] })); // Save status on change
    });

    memory_restore({ Elements: pokemon, Group: [config.Game, 'Dex'] }); // Restore state
}