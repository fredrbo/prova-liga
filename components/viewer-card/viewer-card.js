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

function changeImage(image) {
    var selectedCardImage = document.querySelector('.card-selected img');
    selectedCardImage.src = image.src;
}

function selectImage(card) {
    makeImageGrayscale(card);
    changeImage(card);
}


let currentIndex = 0;

function moveImages(direction) {
    const totalImages = document.querySelectorAll('.images img').length;
    const imagesContainer = document.getElementById('imageContainer');
    const imageSize = 120; 
    const maxIndex = totalImages - 3;

    if (direction === 'right' && currentIndex < maxIndex) {
        moveRight(imagesContainer, imageSize);
    } else if (direction === 'left' && currentIndex > 0) {
        moveLeft(imagesContainer, imageSize);
    }

    updateArrowVisibility(maxIndex);
}

function moveRight(container, size) {
    currentIndex++;
    const scrollValue = currentIndex * size;
    container.scrollLeft = scrollValue;
}

function moveLeft(container, size) {
    currentIndex--;
    const scrollValue = currentIndex * size;
    container.scrollLeft = scrollValue;
}

function updateArrowVisibility(maxIndex) {
    const leftArrow = document.querySelector('.carousel button:nth-child(1)');
    const rightArrow = document.querySelector('.carousel button:nth-child(3)');

    leftArrow.style.visibility = currentIndex > 0 ? 'visible' : 'hidden';
    rightArrow.style.visibility = currentIndex < maxIndex ? 'visible' : 'hidden';
}
