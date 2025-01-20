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
setInterval(applyTimeBasedTheme, 120000); // Check every minute aka 60000





// Function find events from previous month and display them (on this day in my own personal history)
let outputElement = document.getElementById("OTMoutput");

function OTMpuller() {
  const month = new Date().getMonth() + 1; // (Jan = 0) if not
  if (month === 1) {
    outputElement.innerHTML = "<div w3-include-html='OTM/1jan.html'></div>";
  } else if (month === 2) {
    outputElement.innerHTML = "<div w3-include-html='OTM/2.html'></div>";
  } else if (month === 3) {
    outputElement.innerHTML = "<div w3-include-html='OTM/3.html'></div>";
  } else if (month === 4) {
    outputElement.innerHTML = "<div w3-include-html='OTM/4.html'></div>";
  } else if (month === 5) {
    outputElement.innerHTML = "<div w3-include-html='OTM/5.html'></div>";
  } else if (month === 6) {
    outputElement.innerHTML = "<div w3-include-html='OTM/6.html'></div>";
  } else if (month === 7) {
    outputElement.innerHTML = "<div w3-include-html='OTM/7.html'></div>";
  } else if (month === 8) {
    outputElement.innerHTML = "<div w3-include-html='OTM/8.html'></div>";
  } else if (month === 9) {
    outputElement.innerHTML = "<div w3-include-html='OTM/9.html'></div>";
  } else if (month === 10) {
    outputElement.innerHTML = "<div w3-include-html='OTM/10.html'></div>";
  } else if (month === 11) {
    outputElement.innerHTML = "<div w3-include-html='OTM/11.html'></div>";
  } else if (month === 12) {
    outputElement.innerHTML = "<div w3-include-html='OTM/12.html'></div>";
  } else {
    outputElement.innerHTML = "<p>you have more than 12 months wowza!</p>";
  }
  

  
}

// Call the function to update the content
OTMpuller();