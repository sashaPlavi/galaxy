import { fetchg, fetchgprew } from "./data.js";
import { createbutton, renderpic } from "./ui.js";
function main() {
  createbutton();
}
function fretchGalaxy() {
  console.log("galaxy");
  fetchg(getdata);
}
function fretchGalaxyprew() {
  fetchgprew(getdata);
}
function getdata(data) {
  renderpic(data);
}
export { main, fretchGalaxy, fretchGalaxyprew };
