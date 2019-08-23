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

function fetchgprew(call) {
  const demokey = "DEMO_KEY";

  let prewdate = new Date().getDate() - 1 || 1;

  console.log(prewdate);

  const date =
    new Date().getFullYear().toString() +
    "-" +
    new Date().getMonth().toString() +
    "-" +
    prewdate;
  console.log(date);
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&&api_key=${demokey}`;
  fetch(url)
    .then(reponse => reponse.json())
    .then(res => {
      call(res);
    });
}

export { fetchg, fetchgprew };
