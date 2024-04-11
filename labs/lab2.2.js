function simulateFall() {
  const coin = document.querySelector(".fallingObject");
  const timerDisplay = document.getElementById("timer");

  // Reset coin position
  coin.style.marginTop = "4vh"; // Set initial margin top

  // Calculate the duration of fall (in seconds) based on distance (1-3 meters)
  const distance = getRandomDistance(); // Function to get a random distance (1-3)
  const duration = Math.sqrt((2 * distance) / 9.8); // Assuming g (gravity) as 9.8 m/s^2

  // Set the falling animation using margin-top
  coin.style.transitionDuration = duration + "s";
  coin.style.marginTop = "35vh"; // Let the coin fall to 80vh from the top (adjust as needed)

  // Start the timer
  let startTime = performance.now();
  let animationFrameId;

  function updateTimer() {
    const elapsedTime = (performance.now() - startTime) / 1000; // in seconds
    timerDisplay.textContent = `Timer: ${elapsedTime.toFixed(2)} seconds`;
    animationFrameId = requestAnimationFrame(updateTimer);
  }

  // Start the timer
  updateTimer();

  // Check for collision with the ground (coin should stop falling when reaching 80vh)
  function checkCollision() {
    const coinTop = parseFloat(getComputedStyle(coin).marginTop);
    if (coinTop >= 80) {
      // Adjust this value based on where you want the coin to stop falling
      // Stop the timer
      cancelAnimationFrame(animationFrameId);
    } else {
      // Continue checking until the coin hits the ground
      requestAnimationFrame(checkCollision);
    }
  }

  // Start checking for collision
  checkCollision();
}

function getRandomDistance() {
  // Generate a random distance between 1 to 3 meters
  return Math.floor(Math.random() * 3) + 1;
}

function changeObject() {
  const object = document.querySelector(".fallingObject");
  object.classList.remove("pingPongBall");
  object.classList.remove("tenge10");
  console.log(document.getElementById("selectOject").label);
}
