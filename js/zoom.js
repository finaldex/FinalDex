
function zoom_move(container,event) {

    if (!container || container.dataset.suspend === "true") { return }

    const scale = parseFloat(container.dataset.scale) || 1; // Get the scale from the data attribute
    const parentRect = container.parentElement.getBoundingClientRect(); // Get dimensions of the parent

    // Calculate the cursor's position within the parent element
    const x = event.clientX - parentRect.left; // Cursor's x position relative to the parent
    const y = event.clientY - parentRect.top; // Cursor's y position relative to the parent

    // Adjust transform-origin based on cursor position
    const originX = (x / parentRect.width) * 100;
    const originY = (y / parentRect.height) * 100;
    container.style.transformOrigin = `${originX}% ${originY}%`;

    // Apply transform directly
    container.style.transform = `scale(${scale})`;
}

function zoom_scale(container, option, event) {
   
    if (!container || container.dataset.suspend === "true") { return }

    let scale = parseFloat(container.dataset.scale) || 1; // Default to 1 if not set

    // Update scale based on the option parameter
    if (option) {
        // Add to scale
        scale += 0.5;
    } else {
        // Remove from scale
        scale -= 0.5;
    }

    // Clamp the scale between 1 and 5
    scale = Math.min(Math.max(scale, 1), 5);

    // Store the updated scale in the dataset
    container.dataset.scale = scale;

    // Call zoom_move to apply the transformation
    zoom_move(container, event);
}

