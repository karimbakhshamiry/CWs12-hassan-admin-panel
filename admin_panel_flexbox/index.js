const menuBtn = document.getElementById("toggle_menu");
const navigationMenu = document.querySelector(".side-menu");

menuBtn.addEventListener("click", () => {
  navigationMenu.classList.toggle("show-side-menu");
  if (menuBtn.className.includes("bars")) {
    menuBtn.classList.remove("bars");
    menuBtn.classList.add("cross");
  } else {
    menuBtn.classList.add("bars");
    menuBtn.classList.remove("cross");
  }
});
