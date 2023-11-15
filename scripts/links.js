const baseURL = "https://joshwoods1.github.io/wdd230"
const linksURL = "https://joshwoods1.github.io/wdd230/data/links.json"

async function getLinks() {
const response = await fetch(linksURL);
const data = await response.json();
displayLinks(data);
}

function displayLinks(weeks) {
    const learningActivities = document.querySelector('.card ul');
  
    weeks.forEach((week) => {
      const listItem = document.createElement('li');
      const weekHeading = document.createElement('h3');
      weekHeading.textContent = week.week;
  
      const linksList = document.createElement('ul');
  
      week.links.forEach((link) => {
        const linkItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = baseURL + link.url;
        anchor.textContent = link.title;
  
        linkItem.appendChild(anchor);
        linksList.appendChild(linkItem);
      });
  
      listItem.appendChild(weekHeading);
      listItem.appendChild(linksList);
      learningActivities.appendChild(listItem);
    });
  }
  
  getLinks();