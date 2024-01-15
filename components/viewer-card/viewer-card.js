function makeImageGrayscale(clickedImage) {
    var images = document.querySelectorAll('.carousel img');

    images.forEach(function (image) {
        image.classList.remove('grayscale');
    });

    clickedImage.classList.add('grayscale');
}
