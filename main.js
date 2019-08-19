import { fetchg } from "./data.js";

function main() {
  console.log("cao drugari");
  createbutton();
  function createbutton() {
    const button = document.createElement("button");
    const place = document.querySelector(".container");
    button.innerHTML = "show me galaxy!!!";
    button.addEventListener("click", fretchGalaxy);
    place.appendChild(button);
  }

  function fretchGalaxy() {
    console.log("galaxy");
    fetchg(getdata);
  }

  function getdata(data) {
    const url = data.url;
    const text = data.explanation;
    console.log(url);
    console.log(text);

    const place = document.querySelector(".container");
    place.innerHTML = `<img src ='${url}'> <p>${text}</p>`;
    const img = document.querySelector("img");
    img.addEventListener("click", createbutton);
  }
}
export { main };
