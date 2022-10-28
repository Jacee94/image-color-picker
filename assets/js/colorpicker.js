var colorInput = document.getElementById("input-color");
var outputInput = document.getElementById("input-output");
var pickerTitle = document.getElementById("picker-title");
var pickerBody = document.getElementById("picker");

var colorPickerOne;


function setColor(target) {
  var color = target.value;
  return (color)
}

colorInput.addEventListener("input", () => {
  colorPickerOne = setColor(colorInput);
});


