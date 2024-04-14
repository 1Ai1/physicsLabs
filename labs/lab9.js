document.addEventListener("DOMContentLoaded", () => {
  const leftSide = document.getElementById("leftSide");
  const rightSide = document.getElementById("rightSide");

  // Initialize drag and drop events
  const loads = document.querySelectorAll(".load");
  loads.forEach((load) => {
    load.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", event.target.dataset.mass);
    });
  });

  rightSide.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  rightSide.addEventListener("drop", (event) => {
    event.preventDefault();
    const mass = event.dataTransfer.getData("text/plain");
    const load = document.createElement("div");
    load.className = "load";
    load.textContent = `${mass}g Load`;
    load.draggable = true;
    load.dataset.mass = mass;
    rightSide.appendChild(load);
    calculateMoments();
  });

  function calculateMoments() {
    const leftLoads = leftSide.querySelectorAll(".load");
    const rightLoads = rightSide.querySelectorAll(".load");

    let momentClockwise = 0;
    let momentCounterclockwise = 0;

    leftLoads.forEach((load) => {
      const mass = parseInt(load.dataset.mass);
      const armLength = 10; // Assuming arm length in cm
      momentClockwise += mass * armLength;
    });

    rightLoads.forEach((load) => {
      const mass = parseInt(load.dataset.mass);
      const armLength = 10; // Assuming arm length in cm
      momentCounterclockwise += mass * armLength;
    });

    console.log(`Moment Clockwise: ${momentClockwise} g*cm`);
    console.log(`Moment Counterclockwise: ${momentCounterclockwise} g*cm`);

    const deviation =
      Math.abs(
        (momentClockwise - momentCounterclockwise) /
          ((momentClockwise + momentCounterclockwise) / 2)
      ) * 100;
    console.log(`Deviation from equilibrium: ${deviation.toFixed(2)}%`);
  }
});
