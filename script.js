function updateClock() {
  const now = new Date();

  // Get the current time components
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros if needed (e.g., 01:05:09)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the time by updating the DOM
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately when the page loads
updateClock();
