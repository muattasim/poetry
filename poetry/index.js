// Get all the line entries
const lineEntries = document.querySelectorAll('.line-entry');

// Add click event listener to each entry
lineEntries.forEach((entry, index) => {
    entry.addEventListener('click', () => {
        // Toggle animation class for the clicked entry
        entry.classList.toggle('clicked');

        const title = entry.querySelector('.line-title').textContent;
        const line = entry.querySelector('.attitude-line').textContent;

        // Show an alert or log the line
        alert(`You clicked on: \n${title}\n"${line}"`);
    });
});
