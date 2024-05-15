ml = 0;
mr = 0;

function change500() {
  let gira = document.querySelector(".gira05");
  if (gira.classList.contains("hide")) {
    gira.classList.remove("hide");
    mr += 2;
  } else {
    gira.classList.add("hide");
    mr -= 2;
  }
  updateScale();
}
function change1() {
  let gira = document.querySelector(".gira1");
  if (gira.classList.contains("hide")) {
    gira.classList.remove("hide");
    mr += 4;
  } else {
    gira.classList.add("hide");
    mr -= 4;
  }
  updateScale();
}
function change2() {
  let gira = document.querySelector(".gira2");
  if (gira.classList.contains("hide")) {
    gira.classList.remove("hide");
    mr += 8;
  } else {
    gira.classList.add("hide");
    mr -= 8;
  }
  updateScale();
}
function change3() {
  let gira = document.querySelector(".gira3");
  if (gira.classList.contains("hide")) {
    gira.classList.remove("hide");
    mr += 12;
  } else {
    gira.classList.add("hide");
    mr -= 12;
  }
  updateScale();
}
function changeu1() {
  let undefinedObject = document.querySelector(".undefined1");
  if (undefinedObject.classList.contains("hide")) {
    undefinedObject.classList.remove("hide");
    ml += 6;
  } else {
    undefinedObject.classList.add("hide");
    ml -= 6;
  }
  updateScale();
}
function changeu2() {
  let undefinedObject = document.querySelector(".undefined2");
  if (undefinedObject.classList.contains("hide")) {
    undefinedObject.classList.remove("hide");
    ml += 10;
  } else {
    undefinedObject.classList.add("hide");
    ml -= 10;
  }
  updateScale();
}
function changeu3() {
  let undefinedObject = document.querySelector(".undefined3");
  if (undefinedObject.classList.contains("hide")) {
    undefinedObject.classList.remove("hide");
    ml += 8;
  } else {
    undefinedObject.classList.add("hide");
    ml -= 8;
  }
  updateScale();
}
var canvas = document.createElement("canvas");

function updateScale() {
  document.querySelector(".scaleDefiend").style.marginBottom = ml + "vh";
  document.querySelector(".scaleUndefined").style.marginBottom = mr + "vh";
  canvas.parentNode.removeChild(canvas);
  // Get the elements
  var scalePart = document.querySelector(".scalePart");
  var scaleDefiend = document.querySelector(".scaleDefiend");
  var scaleUndefined = document.querySelector(".scaleUndefined");

  // Get the positions of scaleDefiend and scaleUndefined
  var scaleDefiendRect = scaleDefiend.getBoundingClientRect();
  var scaleUndefinedRect = scaleUndefined.getBoundingClientRect();

  var startX = scalePart.offsetLeft + scalePart.offsetWidth / 2;
  var startY = scalePart.offsetTop;
  var endXDefiend = scaleDefiendRect.left + scaleDefiendRect.width / 2;
  var endYDefiend = scaleDefiendRect.bottom;
  var endXUndefined = scaleUndefinedRect.left + scaleUndefinedRect.width / 2;
  var endYUndefined = scaleUndefinedRect.bottom;

  // Create a canvas element and draw the wire
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none"; // So the wire doesn't interfere with mouse events
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endXDefiend, endYDefiend);
  startX = scalePart.offsetLeft + scalePart.offsetWidth * 1.5 + 15;
  ctx.moveTo(startX, startY);
  ctx.lineTo(endXUndefined, endYUndefined);
  ctx.strokeStyle = "#000"; // Color of the wire
  ctx.lineWidth = 2;
  ctx.stroke();
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  var scalePart = document.querySelector(".scalePart");
  var scaleDefiend = document.querySelector(".scaleDefiend");
  var scaleUndefined = document.querySelector(".scaleUndefined");

  // Get the positions of scaleDefiend and scaleUndefined
  var scaleDefiendRect = scaleDefiend.getBoundingClientRect();
  var scaleUndefinedRect = scaleUndefined.getBoundingClientRect();

  var startX = scalePart.offsetLeft + scalePart.offsetWidth / 2;
  var startY = scalePart.offsetTop;
  var endXDefiend = scaleDefiendRect.left + scaleDefiendRect.width / 2;
  var endYDefiend = scaleDefiendRect.bottom;
  var endXUndefined = scaleUndefinedRect.left + scaleUndefinedRect.width / 2;
  var endYUndefined = scaleUndefinedRect.bottom;

  // Create a canvas element and draw the wire
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none"; // So the wire doesn't interfere with mouse events
  document.body.appendChild(canvas);

  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endXDefiend, endYDefiend);
  startX = scalePart.offsetLeft + scalePart.offsetWidth * 1.5 + 15;
  ctx.moveTo(startX, startY);
  ctx.lineTo(endXUndefined, endYUndefined);
  ctx.strokeStyle = "#000"; // Color of the wire
  ctx.lineWidth = 2;
  ctx.stroke();
});
