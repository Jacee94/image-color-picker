
$("#theme-btn").on("click", buildBoxes);
async function buildBoxes(){
  const newColor = colorPickerOne.slice(1)
  console.log(newColor);
  let schemeUrl = `https://www.thecolorapi.com/scheme?hex=${newColor}`
  console.log(schemeUrl);
  $("#theme-box").empty();
  const result = await fetch(schemeUrl)
  const data = await result.json()
  const colorArray = data.colors
  console.log(colorArray);
  colorArray.forEach(element => {
    let colorBox = $("<div>")
      .css(`background-color`, element.hex.value)
      .text(element.hex.value);
    $("#theme-box").append(colorBox)
  });
}
