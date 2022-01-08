import { createListItem } from "./misc.js";

const createNavbar = () => {
  const navbar = document.createElement("div");
  const pageMenu = document.createElement("ul");
  const workButton = createListItem("Works");
  const homeButton = createListItem("Home");
  const sourceButton = createListItem(" Source");
  const logoButton = document.createElement("div");

  logoButton.textContent = "Simon Magleo";

  navbar.classList.add("navbar");
  pageMenu.classList.add("nav-elements");
  logoButton.classList.add("logo");

  sourceButton.setAttribute("id", "github");

  navbar.appendChild(pageMenu);
  navbar.appendChild(logoButton);
  pageMenu.appendChild(workButton);
  pageMenu.appendChild(homeButton);
  pageMenu.appendChild(sourceButton);

  return navbar;
};

const loadHeader = () => {
  const navbar = createNavbar();
  document.querySelector(".container").appendChild(navbar);
};

export default loadHeader;
