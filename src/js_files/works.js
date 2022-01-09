import thumb50 from "./../../assets/cs50.jpeg";
import thumbOdin from "./../../assets/theodinproject.png";
import thumbPisay from "./../../assets/pisay.jpeg";
import thumbLinux from "./../../assets/linux.png";
import thumbGit from "./../../assets/git.jpeg";
import thumbML from "./../../assets/ml.jpeg";

const createGridElement = (imagePath, headerText, linkSource = "#") => {
  const gridElement = document.createElement("div");
  gridElement.classList.add("linkbox");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const thumbnail = document.createElement("img");
  thumbnail.classList.add("thumbnail");
  thumbnail.src = imagePath;
  imageContainer.appendChild(thumbnail);
  gridElement.appendChild(imageContainer);

  const headerLink = document.createElement("a");
  headerLink.textContent = headerText;
  headerLink.href = linkSource;

  const header = document.createElement("h3");
  header.appendChild(headerLink);
  gridElement.appendChild(header);

  return gridElement;
};

const createGrid = () => {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("gridContainer");

  const grid = document.createElement("div");
  grid.classList.add("grid");

  const cs50 = createGridElement(thumb50, "Harvard CS50x", "#");
  grid.appendChild(cs50);

  const theOdinProject = createGridElement(thumbOdin, "The Odin Project", "#");
  grid.appendChild(theOdinProject);

  const pisay = createGridElement(thumbPisay, "PSHS-CARC");
  grid.appendChild(pisay);

  const dotfiles = createGridElement(thumbLinux, "Linux Dotfiles");
  grid.appendChild(dotfiles);

  const website = createGridElement(thumbGit, "Portfolio Website (Source)");
  grid.appendChild(website);

  const extracurriculars = createGridElement(
    thumbML,
    "Extracurricular Activities"
  );
  grid.appendChild(extracurriculars);

  gridContainer.appendChild(grid);

  return gridContainer;
};

const loadPortfolio = () => {
  const grid = createGrid();
  const container = document.querySelector(".container");
  container.appendChild(grid);
};

export default loadPortfolio;
