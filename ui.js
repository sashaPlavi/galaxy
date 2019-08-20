import { fretchGalaxy } from "./main.js";

const place = document.querySelector(".container");
function createbutton() {
  const button = document.createElement("button");

  button.innerHTML = "show me outerspace !!!";
  button.addEventListener("click", fretchGalaxy);
  place.appendChild(button);
}
function renderpic(data) {
  const url = data.url;

  const img = document.querySelector("img");
  place.innerHTML = `<img id ='galaxy' src ='${url}'>  `;

  const button = document.createElement("button");
  button.innerHTML = "show me description of picture !!!";
  button.addEventListener("click", adddescription);
  place.appendChild(button);
  function adddescription() {
    const text = data.explanation;
    const desctiption = document.createElement("p");
    desctiption.innerHTML = `${text}`;
    place.appendChild(desctiption);
    place.removeChild(button);
  }
}

export { createbutton, renderpic };
