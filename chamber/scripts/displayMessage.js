document.addEventListener("DOMContentLoaded", function () {
    var visitDate = localStorage.getItem("visitDate");
    var visitMessage = document.getElementById("visitMessage");

    if (!visitDate) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        var daysPassed = Math.floor((Date.now() - visitDate) / (1000 * 60 * 60 * 24));
        if (daysPassed === 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = "You last visited " + daysPassed + " days ago.";
            if (daysPassed === 1) {
                visitMessage.textContent = "You last visited 1 day ago.";
            }
        }
    }

    // Update localStorage with the current visit date
    localStorage.setItem("visitDate", Date.now());
});