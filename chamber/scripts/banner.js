// Add this code to your main JavaScript file or a new script file
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
  
    if (today >= 1 && today <= 3) {
      // Monday, Tuesday, or Wednesday
      const banner = document.createElement("div");
      banner.innerHTML = `
        <div id="meetGreetBanner">
          <p>Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.!</p>
          <button onclick="closeBanner()">Close</button>
        </div>
      `;
      document.body.insertBefore(banner, document.body.firstChild);
    }
  });
  
  function closeBanner() {
    const banner = document.getElementById("meetGreetBanner");
    banner.style.display = "none";
  }
  