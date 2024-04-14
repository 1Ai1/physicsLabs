function simulateFall() {
  const timerDisplay = document.getElementById("timer");

  const object = document.querySelector(".fallingObject");
  var heightSelect = document.getElementById("selectHeight");
  if (heightSelect.selectedOptions[0].value == "3m") {
    object.style.marginTop = "4vh";
  } else if (heightSelect.selectedOptions[0].value == "2m") {
    object.style.marginTop = "14vh";
  } else {
    object.style.marginTop = "24vh";
  }

  // Calculate the duration of fall (in seconds) based on distance (1-3 meters)
  const distance =
    heightSelect.selectedOptions[0].value == "3m"
      ? 3
      : heightSelect.selectedOptions[0].value == "2m"
      ? 2
      : 1;
  const duration = Math.sqrt((2 * distance) / 9.8); // Assuming g (gravity) as 9.8 m/s^2
  console.log(distance + " " + duration);

  // Set the falling animation using margin-top
  object.style.transitionDuration = duration + "s";
  object.style.marginTop = "35vh"; // Let the coin fall to 80vh from the top (adjust as needed)

  // Start the timer
  let startTime = performance.now();
  let animationFrameId;

  function updateTimer(currentTime) {
    const elapsedTime = (currentTime - startTime) / 1000; // in seconds
    timerDisplay.textContent = `Timer: ${elapsedTime.toFixed(2)} seconds`;

    // Check for collision with the ground (object should stop falling when reaching the bottom)
    const objectTop = parseFloat(getComputedStyle(object).marginTop);
    if (objectTop >= window.innerHeight - object.clientHeight) {
      // Stop the timer
      cancelAnimationFrame(animationFrameId);
    } else if (elapsedTime < duration) {
      // Continue updating the timer if still within the animation duration
      animationFrameId = requestAnimationFrame(updateTimer);
    }
  }

  // Start updating the timer
  animationFrameId = requestAnimationFrame(updateTimer);
  // Start updating the timer
  updateTimer();
}

function getRandomDistance() {
  // Generate a random distance between 1 to 3 meters
  return Math.floor(Math.random() * 3) + 1;
}

function changeObject() {
  const object = document.querySelector(".fallingObject");
  object.classList.remove("pingPongBall");
  object.classList.remove("tenge10");
  var objectSelect = document.getElementById("selectOject");
  if (objectSelect.selectedOptions[0].value == "tennisBall") {
    object.classList.add("pingPongBall");
  } else {
    object.classList.add("tenge10");
  }
}

function changeHeight() {
  const object = document.querySelector(".fallingObject");
  var heightSelect = document.getElementById("selectHeight");
  if (heightSelect.selectedOptions[0].value == "3m") {
    object.style.marginTop = "4vh";
  } else if (heightSelect.selectedOptions[0].value == "2m") {
    object.style.marginTop = "14vh";
  } else {
    object.style.marginTop = "24vh";
  }
}
