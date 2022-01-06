import "./style.css";

function addDiv() {
  const element = document.createElement("div");

  element.innerHTML = "Hi, im just trying this out!";
  element.classList.add("hello");

  return element;
}

document.body.appendChild(addDiv());
