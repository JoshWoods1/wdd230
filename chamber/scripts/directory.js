document.addEventListener("DOMContentLoaded", function () {
    const viewToggle = document.querySelectorAll('input[name="view"]');
    const membersContainer = document.getElementById("members-container");
  
    // Load JSON data
    fetch("data/members.json")
      .then(response => response.json())
      .then(data => {
        viewToggle.forEach(input => {
          input.addEventListener("change", () => displayMembers(data.members, input.value));
        });
  
        // Initial display
        displayMembers(data.members, "grid");
      })
      .catch(error => console.error("Error loading JSON:", error));
  });
  
  function displayMembers(members, view) {
    const membersContainer = document.getElementById("members-container");
    membersContainer.innerHTML = "";
  
    members.forEach(member => {
      const memberElement = document.createElement("div");
  
      if (view === "grid") {
        memberElement.className = "member-card";
        memberElement.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}" style="max-width: 100%;">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p>${member.website}</p>
          <p>${member.membershipLevel}</p>
          <p>${member.description}</p>
        `;
      } else if (view === "list") {
        memberElement.className = "member-list-item";
        memberElement.innerHTML = `
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p>${member.website}</p>
          <p>${member.membershipLevel}</p>
          <p>${member.description}</p>
        `;
      }
  
      membersContainer.appendChild(memberElement);
    });
  }
  