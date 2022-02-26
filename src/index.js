import API from "./scripts/api";
import * as DOM from "./scripts/dom";
import "./style.css";

const search = document.getElementById("search");

async function generateDOM(city) {
  const data = await API(city);
  if (data instanceof Error) {
    DOM.showError();
  } else {
    DOM.default(data);
    DOM.generateBackground(data);
  }
}

search.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    generateDOM(search.value);
    search.value = "";
  }
});

generateDOM("New York");
