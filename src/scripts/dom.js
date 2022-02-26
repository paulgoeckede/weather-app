const container = document.getElementById("container");
const search = document.getElementById("search-div");
const card = document.getElementById("card");

// generates the card containing all the weather information
export default function generateCard(data) {
  card.innerHTML = "";
  const error = document.getElementById("error");
  if (error) {
    error.remove();
  }

  const topDiv = document.createElement("div");
  topDiv.setAttribute("id", "top-div");

  const description = document.createElement("h2");
  description.setAttribute("id", "description");
  description.innerHTML = data.description;

  const location = document.createElement("h1");
  location.setAttribute("id", "location");
  location.innerHTML = `${data.name}, ${data.country}`;

  const main = document.createElement("div");
  main.setAttribute("id", "main");

  const temp = document.createElement("p");
  temp.setAttribute("id", "temp");
  temp.innerHTML = `${Math.round(data.temperature)}&#8451;`;

  const info = document.createElement("div");
  info.setAttribute("id", "info");

  const feels = document.createElement("p");
  feels.setAttribute("id", "feels");
  feels.innerHTML = `Feels like: ${Math.round(data.feels)}&#8451;`;

  const humidity = document.createElement("p");
  humidity.setAttribute("id", "humidity");
  humidity.innerHTML = `Humidity: ${data.humidity}%`;

  const wind = document.createElement("p");
  wind.setAttribute("id", "wind");
  wind.innerHTML = `Wind: ${data.wind}km/h`;

  topDiv.appendChild(description);
  topDiv.appendChild(location);

  info.appendChild(feels);
  info.appendChild(humidity);
  info.appendChild(wind);

  main.appendChild(temp);
  main.appendChild(info);

  card.appendChild(topDiv);
  card.appendChild(main);
  container.insertBefore(card, search);
}

export function generateBackground(data) {
  const { time } = data;
  if (time > 21 || time < 6) {
    container.className = "";
    container.classList.add("stars");
  } else if (time > 5 && time < 10) {
    container.className = "";
    container.classList.add("g6");
  } else if (time > 9 && time < 18) {
    container.className = "";
    container.classList.add("g11");
  } else if (time > 17 && time < 22) {
    container.className = "";
    container.classList.add("g19");
  }
}

export function showError() {
  const error = document.createElement("p");
  error.setAttribute("id", "error");
  error.innerHTML = "Please enter a valid city!";

  search.appendChild(error);
}
