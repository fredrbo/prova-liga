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
