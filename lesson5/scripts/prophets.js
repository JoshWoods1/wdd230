const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

getProphetData();

function displayProphets(prophets) {
  prophets.forEach((prophet) => {
    const card = document.createElement("section");

    const fullName = document.createElement("h2");
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    const portrait = document.createElement("img");
    const birtday = document.createElement('p');
    birtday.textContent = `Date of Birth: ${prophet.birthdate}`
    const birthplace = document.createElement('p');
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`

    card.appendChild(fullName);
    card.appendChild(birtday);
    card.appendChild(birthplace)
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', "440");
    card.appendChild(portrait)
    
    cards.appendChild(card);
  });
}
