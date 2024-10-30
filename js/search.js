
function search(options, event) {
    const target = event.currentTarget;
    const searchValue = target.value.trim(); // Get the input value
    const listEntries = options.Entries;

    // Remove "hidden_search" class from all <li>
    listEntries.forEach(entry => entry.classList.remove('hidden_search'));

    // Remove "deep" class from input
    target.classList.remove("deep");

    // Early exit if searchValue is empty
    if (searchValue === "") return;

    // Initialize key and option
    let key = '';
    let option = '';
    let isNegation = false;
    let isRange = false;

    // Check for specific formatting in the search value
    if (searchValue.includes('!:')) {
        [option, key] = searchValue.split('!:').map(s => s.trim());
        isNegation = true;
    } else if (searchValue.includes('::')) {
        [option, key] = searchValue.split('::').map(s => s.trim());
    } else if (searchValue.includes('>:')) {
        [option, key] = searchValue.split('>:').map(s => s.trim());
        isRange = 'greater';
    } else if (searchValue.includes('<:')) {
        [option, key] = searchValue.split('<:').map(s => s.trim());
        isRange = 'less';
    } else {
        // Default to searching for indices
        key = searchValue;
    }

    // Capitalize the first letter of the option
    const formattedOption = option.replace(/\b\w/g, char => char.toUpperCase());

    listEntries.forEach(entry => {
        const index = entry.dataset.index;
        const search = entry.dataset.search.split(/[,]/);
        const data = options.Data[index];
        let match = false;

        // Split the option to check for nested properties
        const optionParts = formattedOption.split('.');
        const firstKey = optionParts[0];
        const secondKey = optionParts[1];

        const hasDeepSearch = secondKey && data[firstKey] && typeof data[firstKey] === 'object';
        const isDirectPropertyDefined = data[formattedOption] !== undefined;

        // If it's a deep search or a direct property, apply the logic for matches
        if (hasDeepSearch || isDirectPropertyDefined) {
            target.classList.add("deep");

            if (hasDeepSearch) {
                let value;
                if (Array.isArray(data[firstKey])) {
                    // Check if the array contains all keys (AND logic)
                    match = key.split(',').every(k => 
                        data[firstKey].some(d => {
                            if (d[secondKey] !== undefined) {
                                const arrayValue = d[secondKey];
                                if (isRange) {
                                    const numericValue = Number(arrayValue);
                                    return (isRange === 'greater' && numericValue >= Number(k)) ||
                                        (isRange === 'less' && numericValue <= Number(k));
                                }
                                return typeof arrayValue === 'string' && arrayValue.toLowerCase().includes(k.trim().toLowerCase());
                            }
                            return false;
                        })
                    );
                } else {
                    // Access nested property (OR logic)
                    value = data[firstKey][secondKey];
                    if (value === undefined) value = "";
                    if (isRange) {
                        const numericValue = Number(value);
                        match = key.split(',').some(k => 
                            (isRange === 'greater' && numericValue >= Number(k)) ||
                            (isRange === 'less' && numericValue <= Number(k))
                        );
                    } else {
                        match = key.split(',').some(k => {
                            if (typeof value === 'string') {
                                return value.toLowerCase().includes(k.trim().toLowerCase());
                            } else if (!isNaN(value)) {
                                return Number(value) === Number(k);
                            }
                            return false;
                        });
                    }
                }
            } else {
                const value = data[formattedOption];
                if (value === undefined) value = "";
                if (isRange) {
                    const numericValue = Number(value);
                    match = key.split(',').some(k => 
                        (isRange === 'greater' && numericValue >= Number(k)) ||
                        (isRange === 'less' && numericValue <= Number(k))
                    );
                } else {
                    match = key.split(',').some(k => {
                        if (typeof value === 'string') {
                            return value.toLowerCase().includes(k.trim().toLowerCase());
                        } else if (!isNaN(value)) {
                            return Number(value) === Number(k);
                        }
                        return false;
                    });
                }
            }

            // Reverse match if negation is true
            if (isNegation) {
                match = !match;
            }

            if (!match) {
                entry.classList.add('hidden_search');
            }
        } else {
            // Normal search logic for indices
            match = key.split(',').every(k => search.some(i => i.toLowerCase().includes(k.trim().toLowerCase())));
            if (!match) {
                entry.classList.add('hidden_search');
            }
        }
    });
}
function search_filter(options, event) {
    const listEntries = options.Entries;
    const target = event.currentTarget;

    if (event.key === 'Enter') {
        target.value = "";
        target.classList.add("filter");
        target.classList.remove("deep");
        listEntries.forEach(entry => {
            if (entry.classList.contains('hidden_search')) {
                entry.classList.add('hidden_filter');
            }
        });
    } else if (event.key === 'Escape') {
        target.value = "";
        target.classList.remove("filter");
        target.classList.remove("deep");
        listEntries.forEach(entry => {
            entry.classList.remove('hidden_filter');
            entry.classList.remove('hidden_search');
        });
    }
}