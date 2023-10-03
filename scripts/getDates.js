const today = new Date();
let year = today.getFullYear();

let yearElement = document.querySelector("#year");

yearElement.innerHTML = '&copy; ' + year.toString();

let lastModified = document.lastModified;
let lastModifiedElement = document.querySelector("#lastModified");

if (lastModifiedElement)
{
    lastModifiedElement.textContent = `${lastModified}`;
}

// Hamburger response menu
const hamButton = document.querySelector('#menu');
const heading = document.querySelector('.heading');

hamButton.addEventListener('click', () => {
	heading.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Dark Mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");
const links = document.querySelectorAll("section li a")
modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) {
        // Dark mode
        main.style.background = "#121212"; // Dark background color
        main.style.color = "#fff"; // Light text color
        cards.forEach(card => {
            card.style.background = "#333"; // Dark card background color
            card.style.color = "white"; // Light card text color
        });
        modeButton.textContent = "❎";
    } else {
        // Light mode
        main.style.background = "#a3b4a2"; // Light background color
        main.style.color = "#000"; // Dark text color
        cards.forEach(card => {
            card.style.background = "#cdc6ae"; // Light card background color
            card.style.color = "#000"; // Dark card text color
        });
        modeButton.textContent = "☑️";
    }
});

