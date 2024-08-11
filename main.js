const form = document.querySelector("form");
const inputAddItem = document.getElementById("add-item");
const list = document.querySelector(".list-wrapper");
const btnDelete = document.querySelector(".btn-delete");
const alert = document.querySelector(".alert-wrapper");
const closeAlert = document.querySelector(".btn-close");

const handleDelete = () => {
  const items = document.querySelectorAll(".item-wrapper");
  items.forEach((item) => {
    if (item.children[0].checked) {
      item.remove();
    }
  });
};

const handleAlert = () => {
  alert.classList.remove("show");
};

closeAlert.onclick = () => {
  handleAlert();
};

form.onsubmit = (event) => {
  event.preventDefault();
  let value = inputAddItem.value;
  if (value === "") return;
  const listItem = document.createElement("li");
  const inputCheckbox = document.createElement("input");
  const label = document.createElement("label");
  const button = document.createElement("button");
  const img = document.createElement("img");

  listItem.classList.add("item-wrapper");
  button.classList.add("btn-delete");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "item" + list.children.length;
  label.htmlFor = "item" + list.children.length;
  img.src = "assets/trash.svg";
  img.alt = "Delete item";

  list.appendChild(listItem);
  listItem.appendChild(inputCheckbox);
  listItem.appendChild(label);
  listItem.appendChild(button);
  button.appendChild(img);

  button.onclick = () => {
    listItem.remove();
    alert.classList.add("show");

    setTimeout(() => {
      if (alert.classList.contains("show")) {
        alert.classList.remove("show");
      }
    }, 3000);
  };

  label.innerText = value;
  inputAddItem.value = "";
};
