const imgApiKey = 'EydCc54uApCEuvB5fKwcFbRsJyajz3TJVHC2jjZdKhY';
const imgQueryUrl = 'https://api.unsplash.com/photos/random';

function fetchRandomPhoto() {
    fetch(imgQueryUrl, {
        headers: {
            Authorization: `Client-ID ${imgApiKey}`
        }
    })
    .then(res => res.json())
    .then(data => appendImage(data));
}

function appendImage(image) {
    const { urls } = image;
    const randomImg = `<image src='${urls.regular}' style='max-height: 300px'/>`;

    $('#random-photo').empty();
    $('#random-photo').append(randomImg);
}

$('#photo-btn').click(fetchRandomPhoto);