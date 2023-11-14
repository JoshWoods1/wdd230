const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=43.82335553090672&lon=-111.79316220288682&appid=84fbae873dbd4636931d58506b2216a2&units=imperial"

  
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      displayResults(data)
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log("Error");
  }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconCode = data.weather[0].icon
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}
