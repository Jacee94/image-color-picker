var colorInput = document.getElementById("input-color");
var colorInputTwo = document.getElementById("input-color-two");
var outputInput = document.getElementById("input-output");
var pickerTitle = document.getElementById("picker-title");
var pickerBody = document.getElementById("picker");

var colorPickerOne;
var colorPickerTwo;

function setColor(target) {
  var color = target.value;
  return hexToRGB(color);
}

colorInput.addEventListener("input", () => {
  colorPickerOne = setColor(colorInput);
});

colorInputTwo.addEventListener("input", () => {
  colorPickerTwo = setColor(colorInputTwo);
});

// Function based off a stack overflow response: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRGB(hex) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  return [r,g,b];
}