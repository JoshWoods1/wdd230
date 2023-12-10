document.addEventListener("DOMContentLoaded", function () {
    const jsonData = {
        "members": [
            {
              "name": "ABC Company",
              "address": "123 Main St, Lampasas, Texas",
              "phone": "555-1234",
              "website": "https://www.abc-company.com",
              "image": "abc.jpeg",
              "membershipLevel": "Gold",
              "description": "A leading company in the industry."
            },
            {
              "name": "XYZ Corporation",
              "address": "456 Oak St, Lampasas, Texas",
              "phone": "555-5678",
              "website": "https://www.xyz-corp.com",
              "image": "xyz.png",
              "membershipLevel": "Silver",
              "description": "Innovators in business solutions."
            },
            {
              "name": "123 Enterprises",
              "address": "789 Pine St, Lampasas, Texas",
              "phone": "555-9101",
              "website": "https://www.123-enterprises.com",
              "image": "123.png",
              "membershipLevel": "Bronze",
              "description": "Dedicated to customer satisfaction."
            },
            {
              "name": "Tech Innovators Inc.",
              "address": "987 Maple St, Lampasas, Texas",
              "phone": "555-1122",
              "website": "https://www.tech-innovators.com",
              "image": "ti.png",
              "membershipLevel": "Gold",
              "description": "Pioneers in cutting-edge technology."
            },
            {
              "name": "Green Energy Solutions",
              "address": "321 Elm St, Lampasas, Texas",
              "phone": "555-3344",
              "website": "https://www.green-energy-solutions.com",
              "image": "GE.png",
              "membershipLevel": "Silver",
              "description": "Promoting sustainable energy."
            },
            {
              "name": "Global Logistics Co.",
              "address": "654 Birch St, Lampasas, Texas",
              "phone": "555-5566",
              "website": "https://www.global-logistics.com",
              "image": "GL.png",
              "membershipLevel": "Gold",
              "description": "Connecting the world through logistics."
            },
            {
              "name": "Creative Designs Studio",
              "address": "876 Cedar St, Lampasas, Texas",
              "phone": "555-7788",
              "website": "https://www.creative-designs.com",
              "image": "design.png",
              "membershipLevel": "Bronze",
              "description": "Where creativity meets innovation."
            }
          ]
    };

    const qualifiedMembers = jsonData.members.filter(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");
    const spotlights = getRandomMembers(qualifiedMembers, 2, 3);

    const spotlightContainer = document.getElementById("spotlight-container");
    spotlights.forEach(member => {
        const spotlightElement = document.createElement("div");
        spotlightElement.innerHTML = `
            <div class="spotlight-item">
                <img class="spotlight-image" src="images/${member.image}" alt="${member.name}" />
                <h4>${member.name}</h4>
                <p>${member.description}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `;
        spotlightContainer.appendChild(spotlightElement);
    });
});

function getRandomMembers(members, minCount, maxCount) {
    const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, count);
} 