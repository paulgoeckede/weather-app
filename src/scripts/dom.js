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
  switch (data.time) {
    case 22:
    case 23:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      container.className = "";
      container.classList.add("stars");
      break;
    case 7:
      container.className = "";
      container.classList.add("g7");
      break;
    case 8:
      container.className = "";
      container.classList.add("g8");
      break;
    case 9:
      container.className = "";
      container.classList.add("g9");
      break;
    case 10:
      container.className = "";
      container.classList.add("g10");
      break;
    case 11:
      container.className = "";
      container.classList.add("g11");
      break;
    case 12:
      container.className = "";
      container.classList.add("g12");
      break;
    case 13:
      container.className = "";
      container.classList.add("g13");
      break;
    case 14:
      container.className = "";
      container.classList.add("g14");
      break;
    case 15:
      container.className = "";
      container.classList.add("g15");
      break;
    case 16:
      container.className = "";
      container.classList.add("g16");
      break;
    case 17:
      container.className = "";
      container.classList.add("g17");
      break;
    case 18:
      container.className = "";
      container.classList.add("g18");
      break;
    case 19:
      container.className = "";
      container.classList.add("g19");
      break;
    case 20:
      container.className = "";
      container.classList.add("g20");
      break;
    case 21:
      container.className = "";
      container.classList.add("g21");
      break;
    default:
      break;
  }
}

export function showError() {
  const error = document.createElement("p");
  error.setAttribute("id", "error");
  error.innerHTML = "Please enter a valid city!";

  search.appendChild(error);
}
