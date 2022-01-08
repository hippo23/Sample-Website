const wipeContent = () => {
  const container = document.querySelector(".container");
  container.innerHTML = "";
};

const createListItem = (text) => {
  const listItem = document.createElement("li");
  listItem.textContent = text;
  return listItem;
};

const createParagraph = (text) => {
  const paragraphItem = document.createElement("p");
  paragraphItem.textContent = text;
  return paragraphItem;
};

const createButton = (text) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("btn");

  return button;
};

const createList = (...listItemsText) => {
  const list = document.createElement("ul");
  listItemsText.map((x) => {
    const temp = createListItem(x);
    list.appendChild(temp);
  });

  return list;
};

export {
  wipeContent,
  createListItem,
  createParagraph,
  createButton,
  createList,
};
