import "./style/index.scss";
import { getInformation, getEducation } from "./request";

const pathname = window.location.pathname;
const index = pathname.split("/");
if (index[1] === "users") {
  getInformation(index[2]);
  getEducation(index[2]);
}