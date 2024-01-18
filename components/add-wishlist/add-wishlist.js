function increaseCounter() {
    var counterElement = document.getElementById("counterValue");
    var currentValue = parseInt(counterElement.innerText);

    if (currentValue < 10) {
        counterElement.innerText = currentValue + 1;
    } 
}

function decreaseCounter() {
    var counterElement = document.getElementById("counterValue");
    var currentValue = parseInt(counterElement.innerText);

    if (currentValue > 1) {
        counterElement.innerText = currentValue - 1;
    }
}

