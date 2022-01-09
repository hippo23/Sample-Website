import createFooter from "./footer.js";
import loadHeader from "./navbar.js";
import { wipeContent } from "./misc.js";
import loadBio from "./aboutMe.js";
import icon from "./../../assets/cover.jpg";
import initializeIcon from "./pageIcon.js";
import loadPortfolio from "./works.js";

const initializeHomepage = () => {
  wipeContent();
  initializeIcon(icon);
  loadHeader();
  loadBio();
  // loadBio();

  const container = document.querySelector(".container");

  const footer = createFooter();
  container.appendChild(footer);

  const workButton = document.querySelector(".work");
  workButton.style.backgroundColor = "transparent";
  workButton.firstChild.style.color = "white";

  const homeButton = document.querySelector(".home");
  homeButton.style.backgroundColor = "#82e5d9";
  homeButton.firstChild.style.color = "black";
};

const initializePortfolio = () => {
  wipeContent();
  initializeIcon(icon);
  loadHeader();
  loadPortfolio();
  // loadBio();

  const container = document.querySelector(".container");

  const footer = createFooter();
  container.appendChild(footer);

  const workButton = document.querySelector(".work");
  workButton.style.backgroundColor = "#82e5d9";
  workButton.firstChild.style.color = "black";

  const homeButton = document.querySelector(".home");
  homeButton.style.backgroundColor = "transparent";
  homeButton.firstChild.style.color = "white";
};

export { initializeHomepage, initializePortfolio };
