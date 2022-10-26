var colorOne = [44, 44, 44];
var colorTwo = [255, 255, 255];
var palette = [];
var genUrl = "http://colormind.io/api/";
var data = {
  model: "default",
  input: [colorOne, colorTwo, "N", "N", "N"],
};

function generateScheme() {
  //colorOne = colorPickerOne
  //colorTwo = colorPickerTwo
  $("#theme-box").empty();
  var http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var palette = JSON.parse(http.responseText).result;
      for (var i = 0; i < 5; i++) {
        let currPalette = palette[i];
        var finalScheme = `rgb(${currPalette[0]},${currPalette[1]},${currPalette[2]})`;
        let colorBox = $("<div>")
          .attr(`id`, `theme${i}`)
          .css(`background-color`, finalScheme)
          .text(finalScheme);
        $("#theme-box").append(colorBox);
      }
    }
  };

  http.open("POST", genUrl, true);
  http.send(JSON.stringify(data));
}

$("#theme-btn").on("click", generateScheme);
