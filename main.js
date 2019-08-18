import { fetchg } from "./data.js";

function main() {
  console.log("cao drugari");
  const button = document.createElement("button");
  const place = document.querySelector(".container");
  button.innerHTML = "show me galaxy!!!";
  button.addEventListener("click", fretchGalaxy);
  place.appendChild(button);
}

function fretchGalaxy() {
  console.log("galaxy");
  fetchg();
}

export { main };
