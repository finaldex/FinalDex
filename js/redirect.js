
function add_redirect(element, options) {
    element.addEventListener("click", redirect)

    options.catalog && (element.dataset.catalog = options.catalog);
    options.entry && (element.dataset.entry = options.entry);
    options.style && (element.classList.add(`redirect_${options.style}`));
}

function remove_redirect(element) {
    element.removeEventListener("click", redirect);

    element.dataset.catalog && delete element.dataset.catalog;
    element.dataset.entry && delete element.dataset.entry;

    // Remove any class that starts with "redirect_"
    Array.from(element.classList).forEach(className => {
        if (className.startsWith('redirect_')) {
            element.classList.remove(className);
        }
    });
}

function redirect(event) {
    const target = event.currentTarget;
    if (!target.dataset.catalog || !target.dataset.entry) { return }

    let catalog = target.dataset.catalog;
    let entry = target.dataset.entry.split(/[,]/);

    // Convert hexadecimal entries to Data.Item[entry].Item[0] if applicable
    let displayEntries = entry.map(e => {
        if (/^(0x)?[0-9A-Fa-f]+$/.test(e) && catalog === "item" && Data.Items[e] !== undefined) {
            return Data.Items[e].Item[0];
        }
        return e;
    });

   // Convert non-hexadecimal entries to their hexadecimal values using get_itemIndex
   entry = entry.map(e => {
        const item_index = get_itemIndex(e)
        if (!/^(0x)?[0-9A-Fa-f]+$/.test(e) && catalog === "item" && item_index) {
            return item_index;
        }
        return e;
    });

    const selection = displayEntries.length > 1 ? prompt(`Choose ${catalog}:\n${displayEntries.map((v, i) => `${i + 1}. ${v}`).join('\n')}`, ``) : 1;

    if (selection === null) {
        return;
    } else if (entry[parseInt(selection) - 1]) {
        entry = entry[parseInt(selection) - 1];
    } else {
        console_text({Text:"Invalid selection."});
        return;
    }

    const navInput = document.querySelector(`#nav input[value="${catalog}"]`);
    const itemLabel = document.querySelector(`#${catalog} .catalog ol li[data-index="${entry}"] label`);

    if (!itemLabel) {
        console_text({Text:`Could not find the ${catalog} "${displayEntries[parseInt(selection) - 1]}".`});
        return;
    }
    if (!navInput) {
        console_text({Text:"Invalid catalog name."});
        return;
    }

    const redirect_confirm = !navInput.checked ? confirm(`Redirecting you to the ${catalog} ${displayEntries[parseInt(selection) - 1]}.\nDo you want to continue?`) : true;

    if (redirect_confirm) {
        !navInput.checked && (navInput.click());
        itemLabel.click();
        itemLabel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}




