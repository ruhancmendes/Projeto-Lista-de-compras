const list = document.getElementById("list");
const newItem = document.getElementById("newItem");
const form = document.querySelector("form");
const itemRemoved = document.getElementById("item-removed");

const initialItems = ["Pão de Forma", "Ovo"];

window.onload = () => {
  initialItems.forEach(item => {
    addItemToList(item);
  })
}

function handleClose(id) {
  const item = document.getElementById(id);
  item.remove();
  itemRemoved.style.visibility = "visible";
  itemRemoved.style.opacity = 1;

  setTimeout(() => {
    itemRemoved.style.visibility = "hidden";
    itemRemoved.style.opacity = 0;
  }, 2000);
}


function addItemToList(itemName) {
  const id = new Date().getTime();
  const div = document.createElement("div");
  div.id = id;
  div.className = "item flex c-content items-center";

  const input = document.createElement("input");
  input.type = "checkbox";

  const p = document.createElement("p");
  p.textContent = itemName;

  const button = document.createElement("button");
  button.className = "close";
  button.onclick = () => handleClose(id);

  const img = document.createElement("img");
  img.src = "assets/trashcan.svg";

  button.appendChild(img);

  div.appendChild(input);
  div.appendChild(p);
  div.appendChild(button);

  list.appendChild(div);
}

form.onsubmit = (event) => {
  event.preventDefault();
  addItemToList(newItem.value);
  form.reset();
};
