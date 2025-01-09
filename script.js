// Select the body and the toggle button
const body = document.body;
const toggleThemeButton = document.getElementById('toggleTheme');

// Function to apply the theme based on the current time
function applyTimeBasedTheme() {
  const hour = new Date().getHours();
  const isNightTime = hour >= 18 || hour < 8; // Night theme active between 18:00 and 08:00
  body.classList.toggle('night', isNightTime); // Apply night theme based on time
}

// Function to toggle the theme manually
function toggleTheme() {
  body.classList.toggle('night'); // Toggle the night class
}

// Add a event listener for manual theme toggling
toggleThemeButton.addEventListener('click', toggleTheme);

// Apply the time-based theme when the page loads
applyTimeBasedTheme();

// Optional: Reapply the time-based theme every minute to stay in sync
setInterval(applyTimeBasedTheme, 60000); // Check every minute


const images = ['/assets/dtnn.gif', '/assets/ntdd.gif'];
images.forEach((src) => {
  const img = new Image();
  img.src = src;
});