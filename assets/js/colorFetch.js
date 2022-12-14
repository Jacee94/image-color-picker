$("#theme-btn").on("click", buildBoxes);

async function buildBoxes(){
  const newColor = colorPickerOne.slice(1);

  let schemeUrl = `https://www.thecolorapi.com/scheme?hex=${newColor}`;

  $("#theme-box").empty();
  const result = await fetch(schemeUrl);
  const data = await result.json();
  const colorArray = data.colors;

  colorArray.forEach(element => {
    let colorBox = $("<div>")
                  .css(`background-color`, element.hex.value)
                  .text(element.hex.value);
    $("#theme-box").append(colorBox);
  });

  saveColorToStorage(colorPickerOne);
}

function saveColorToStorage(color) {
  const colorHistory = JSON.parse(localStorage.getItem('color-picker-history')) || [];
  const filteredColorHist = colorHistory.filter(item => item != color);
  filteredColorHist.unshift(color);
  if(filteredColorHist.length > 10) {
    filteredColorHist.pop();
  }
  localStorage.setItem('color-picker-history', JSON.stringify(filteredColorHist));
  addColorHistoryButtons();
}

function addColorHistoryButtons() {
  const $colorHist = $('.color-history');
  $colorHist.empty();
  
  const colorHist = JSON.parse(localStorage.getItem('color-picker-history'));
  colorHist.forEach((color) => {
    const newBtn = `<button class='color-history-btn m-2 button'>${color}</button>`;

    $colorHist.append(newBtn);
  })

  $('.color-history-btn').each((ind, el) => {
    $(el).css('background-color', $(el).text())
         .css('color', 'white')
         .css('text-shadow', '2px 2px 2px #000');
  })

  $('.color-history-btn').on('click', (event) => {
    event.preventDefault();
    colorPickerOne = event.target.innerText;
    buildBoxes();
  });
}

addColorHistoryButtons();