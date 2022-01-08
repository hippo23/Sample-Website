import "./style.css";
import loadHeader from "./navbar.js";
import { wipeContent } from "./misc.js";
import loadBio from "./aboutMe.js";
import icon from "../assets/doge.png";

wipeContent();

const coverDiv = document.createElement("div");
coverDiv.classList.add("cover-image");
const dogeimage = document.createElement("img");
dogeimage.src = icon;
dogeimage.setAttribute("id", "doge-image");
coverDiv.appendChild(dogeimage);
document.querySelector(".container").appendChild(coverDiv);

loadHeader();
loadBio();
