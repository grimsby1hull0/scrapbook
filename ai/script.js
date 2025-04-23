// Select the body and the toggle button
const body = document.body;
const toggleThemeButton = document.getElementById('toggleTheme');

// Function to apply the saved theme
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme'); // Get the saved theme
  if (savedTheme === 'night') {
    body.classList.add('night'); // Apply the night theme if saved
  } else {
    body.classList.remove('night'); // Default to day theme
  }
}

// Function to toggle the theme and save the preference
function toggleTheme() {
  body.classList.toggle('night'); // Toggle the night class
  const isNight = body.classList.contains('night');
  localStorage.setItem('theme', isNight ? 'night' : 'day'); // Save the user's preference
}

// Add an event listener for manual theme toggling
toggleThemeButton.addEventListener('click', toggleTheme);

// Apply the theme when the page loads
applySavedTheme();
