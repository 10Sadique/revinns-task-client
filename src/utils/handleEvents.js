function handleEnter({ event, currentIndex, activeElement }) {
    if (currentIndex === -1) return;

    activeElement.click();
    event.preventDefault();
}

function handleArrowKey({ event, currentIndex, availableElements }) {
    // If the focus isn't in the container, focus on the first thing
    if (currentIndex === -1) availableElements[0].focus();

    // Move the focus up or down
    let nextElement;
    if (event.key === 'ArrowRight') {
        nextElement = availableElements[currentIndex + 1];
    }

    if (event.key === 'ArrowLeft') {
        nextElement = availableElements[currentIndex - 1];
    }

    nextElement && nextElement.focus();
    event.preventDefault();
}

export default function handleEvents({
    event,
    parentNode,
    selectors = 'input',
}) {
    if (!parentNode) return;

    const key = event.key;
    if (!['ArrowRight', 'ArrowLeft', 'Enter'].includes(key)) {
        return;
    }

    const activeElement = document.activeElement;

    // If we're not inside the container, don't do anything
    if (!parentNode.contains(activeElement)) return;

    // Get the list of elements we're allowed to scroll through
    const availableElements = parentNode.querySelectorAll(selectors);

    // No elements are available to loop through.
    if (!availableElements.length) return;

    // Which index is currently selected
    const currentIndex = Array.from(availableElements).findIndex(
        (availableElement) => availableElement === activeElement
    );

    if (key === 'Enter') {
        handleEnter({ event, currentIndex, activeElement });
    }
    handleArrowKey({ event, currentIndex, availableElements });
}
