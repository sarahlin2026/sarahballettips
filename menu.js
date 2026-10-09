const menuDialog = document.querySelector("#mobile-menu");
const menuOpenButton = document.querySelector(".menu-open");
const menuCloseButton = document.querySelector(".menu-close");

menuOpenButton.addEventListener("click", () => {
  menuDialog.showModal();
  menuOpenButton.setAttribute("aria-expanded", "true");
  menuCloseButton.focus();
});

menuCloseButton.addEventListener("click", () => {
  menuDialog.close();
});

menuDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    menuDialog.close();
  }
});

menuDialog.addEventListener("close", () => {
  menuOpenButton.setAttribute("aria-expanded", "false");
  menuOpenButton.focus();
});
