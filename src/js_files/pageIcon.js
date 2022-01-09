const initializeIcon = (iconPath) => {
  const coverDiv = document.createElement("div");
  coverDiv.classList.add("cover-image");
  const dogeimage = document.createElement("img");
  dogeimage.src = iconPath;
  dogeimage.setAttribute("id", "doge-image");
  coverDiv.appendChild(dogeimage);
  document.querySelector(".container").appendChild(coverDiv);
};

export default initializeIcon;
