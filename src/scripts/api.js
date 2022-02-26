/* eslint-disable comma-dangle */
const KEY = "25aa13866b15eae9321160170367f215";

// grabs weather data for city using openweathermap api
async function fetchData(city) {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`,
      { mode: "cors" }
    );
    if (data.ok) {
      const response = data.json();
      return response;
    }
    throw new Error("Wasn't able to find city");
  } catch (error) {
    return error;
  }
}

function getLocalTime(city) {
  const date = new Date(Date.now());
  let time = Math.floor(date.getHours() + city.timezone / 60 / 60);
  if (time < 0) {
    time = 23 + time;
  } else if (time > 23) {
    time = 0 + (time - 23);
  }
  return time;
}

// filters fetched data and returns an object with all for this project necessary info
export default async function filterData(city) {
  const data = await fetchData(city);
  if (data instanceof Error) {
    return data;
  }
  const weather = {
    name: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feels: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    description: data.weather[0].description,
    time: getLocalTime(data),
  };
  return weather;
}
