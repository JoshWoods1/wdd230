let numVisits = 1;

if (localStorage.getItem('numVisits')) {
    numVisits = parseInt(localStorage.getItem('numVisits'));
    numVisits++;
}

// Set local storage with number of visits
localStorage.setItem('numVisits', numVisits)

// display
let numVisitsElement = document.querySelector('#numVisits')
numVisitsElement.textContent = numVisits;