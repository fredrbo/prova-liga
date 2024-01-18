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

function showToast() {
    var toast = document.getElementById("toast");
    toast.style.display = "block";

    setTimeout(function() {
        toast.style.display = "none";
    }, 2000);
}

function showHint(elementId) {
    var hintMessage = document.getElementById(elementId);
    hintMessage.style.display = "block";
}

function hideHint(elementId) {
    var hintMessage = document.getElementById(elementId);
    hintMessage.style.display = "none";
}
