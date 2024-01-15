function makeImageGrayscale(clickedImage) {
    var images = document.querySelectorAll('.carousel img');
    
    images.forEach(function (image) {
        image.classList.add('grayscale');
    });

    var isGrayscale = clickedImage.classList.contains('grayscale');

    if (isGrayscale) {
        clickedImage.classList.remove('grayscale');
    } else {
        clickedImage.classList.add('grayscale');
    }
}

function changeImage(image){
    var selectedCardImage = document.querySelector('.card-selected img');
    selectedCardImage.src = image.src;
}

function selectImage(card) {
    makeImageGrayscale(card);
    changeImage(card);
}