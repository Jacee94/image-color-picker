var colorOne = [50,43,44]
var colorTwo = [90,83,82]
var palette = []
var url = "http://colormind.io/api/";
var data = {
	model : "default",
	input : [colorOne,colorTwo,"N","N","N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var palette = JSON.parse(http.responseText).result;
        console.log(palette);
        for (var i = 0; i < 5; i++) {
            let currPalette = palette[i]
            console.log(currPalette[0]);
            var finalScheme = `rgb(${currPalette[0]},${currPalette[1]},${currPalette[2]})`
            console.log(finalScheme);
            console.log(typeof finalScheme );
            let colorBox = $('<div>').attr(`id`,`theme${i}`).css(`background-color`, finalScheme)
            console.log(colorBox);
            $('#theme-box').append(colorBox)
        }
            
        
        }
        
	}


    http.open("POST", url, true);
    http.send(JSON.stringify(data)); 

