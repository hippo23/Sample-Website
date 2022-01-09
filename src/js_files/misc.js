const wipeContent = () => {
  const container = document.querySelector(".container");
  container.innerHTML = "";
};

const createListItem = (text, link) => {
  const listItemParent = document.createElement("li");
  const listItem = document.createElement("a");
  listItem.textContent = text;
  listItem.href = link;
  listItemParent.appendChild(listItem);

  return listItemParent;
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

const createList = (listItemsText, listItemLinks) => {
  const list = document.createElement("ul");
  listItemsText.map((x, i) => {
    const listItem = createListItem(x, listItemLinks[i]);
    list.appendChild(listItem);
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
