const createFooter = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "@ 2022 Simon Magleo. All Rights Reserved.";

  return footer;
};

export default createFooter;
