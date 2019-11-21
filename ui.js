import { fretchGalaxy, fretchGalaxyprew } from "./main.js";

const place = document.querySelector(".container");

function createbutton() {
  const button = document.createElement("button");

  button.innerHTML = "show me outerspace !!!";
  button.setAttribute("id", "showmebtn");
  button.addEventListener("click", fretchGalaxy);
  place.appendChild(button);
}
function renderpic(data) {
  const url = data.url;
  console.log(data);

  place.innerHTML = `<img id ='galaxy' src ='${url}' alt='galaxy image'>  `;

  const button = document.createElement("button");
  button.innerHTML = "show me description of picture !!!";
  button.addEventListener("click", adddescription);
  button.setAttribute("id", "descriptionbtn");
  place.appendChild(button);
  function adddescription() {
    const text = data.explanation;
    const desctiption = document.createElement("p");
    desctiption.setAttribute("id", "text");
    desctiption.innerHTML = `${text} `;

    place.appendChild(desctiption);
    button.removeEventListener("click", adddescription);
    place.removeChild(button);
    let picday = data.date.split("-");
    let day = new Date().getDate();
    console.log(picday[2]);

    console.log(day);
    console.log(picday[2]);

    if (day == picday[2]) {
      backButton();
    }
    reset();
  }

  function backButton() {
    const button = document.createElement("button");
    button.innerHTML = "previous day !!!";
    button.setAttribute("id", "prewdaybtn");
    button.addEventListener("click", fretchGalaxyprew);

    place.prepend(button);
  }
  function reset() {
    const button = document.createElement("button");
    button.innerHTML = "reset !!!";
    button.setAttribute("id", "prewdaybtn");
    button.addEventListener("click", fretchGalaxy);

    place.prepend(button);
  }
}

export { createbutton, renderpic };
