var colorOne = [44, 44, 44];
var colorTwo = [255, 255, 255];
var palette = [];
var url = "http://colormind.io/api/";

function generateScheme() {
var dataE = {
  model: "default",
  input: [colorPickerOne, colorPickerTwo, "N", "N", "N"],
};

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

  http.open("POST", url, true);
  http.send(JSON.stringify(dataE));
}

$("#theme-btn").on("click", generateScheme);
