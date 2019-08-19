import { main } from "./main.js";

function fetchg(call) {
  //console.log("cao 2!!!");
  const demokey = "DEMO_KEY";

  const date =
    new Date().getFullYear().toString() +
    "-" +
    new Date().getMonth().toString() +
    "-" +
    new Date().getDate().toString();
  console.log(date);
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&&api_key=${demokey}`;
  fetch(url)
    .then(reponse => reponse.json())
    .then(res => {
      call(res);
    });
}

export { fetchg };
