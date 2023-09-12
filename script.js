// Get the "Now Watching" counter element
const watchingCountElement = document.getElementById("watching-count");

// Initialize the counter
let watchingCount = 0;

// Function to update the counter
function updateWatchingCount() {
    watchingCount++;
    watchingCountElement.textContent = watchingCount;
}

// Call the update function (you can call this function when someone visits the page)
updateWatchingCount();
