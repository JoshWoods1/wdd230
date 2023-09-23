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