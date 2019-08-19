import { fetchg } from "./data.js";

function main() {
  const place = document.querySelector(".container");
  console.log("cao drugari");
  createbutton();
  function createbutton() {
    const button = document.createElement("button");
    //const place = document.querySelector(".container");
    button.innerHTML = "show me galaxy !!!";
    button.addEventListener("click", fretchGalaxy);
    place.appendChild(button);
  }

  function fretchGalaxy() {
    console.log("galaxy");
    fetchg(getdata);
  }

  function getdata(data) {
    const url = data.url;
    console.log(url);
    // console.log(text);

    //const place = document.querySelector(".container");
    const img = document.querySelector("img");
    place.innerHTML = `<img src ='${url}'>  `;
    // img.addEventListener("click", createbutton);
    const button = document.createElement("button");
    // const place = document.querySelector(".container");
    button.innerHTML = "show me description of picture !!!";
    button.addEventListener("click", adddescription);
    place.appendChild(button);
    function adddescription() {
      const text = data.explanation;
      const desctiption = document.createElement("p");
      desctiption.innerHTML = `${text}`;
      place.appendChild(desctiption);
    }
  }
}
export { main };
