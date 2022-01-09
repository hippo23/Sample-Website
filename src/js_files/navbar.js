import { createListItem, wipeContent } from "./misc.js";
import { initializeHomepage, initializePortfolio } from "./loadPages.js";

const createNavbar = () => {
  const navbar = document.createElement("div");
  const pageMenu = document.createElement("ul");
  const workButton = createListItem("Works", "#");
  const homeButton = createListItem("Home", "#");
  const sourceButton = createListItem(" Source", "https://github.com/hippo23");
  const logoButton = document.createElement("div");

  logoButton.textContent = "Simon Magleo";

  navbar.classList.add("navbar");
  pageMenu.classList.add("nav-elements");
  logoButton.classList.add("logo");

  sourceButton.setAttribute("id", "github");

  homeButton.classList.add("home");
  workButton.classList.add("work");

  homeButton.addEventListener("click", () => {
    initializeHomepage();
  });

  workButton.addEventListener("click", () => {
    initializePortfolio();
  });

  navbar.appendChild(pageMenu);
  navbar.appendChild(logoButton);
  pageMenu.appendChild(homeButton);
  pageMenu.appendChild(workButton);
  pageMenu.appendChild(sourceButton);

  return navbar;
};

const loadHeader = () => {
  const navbar = createNavbar();
  document.querySelector(".container").appendChild(navbar);
};

export default loadHeader;
