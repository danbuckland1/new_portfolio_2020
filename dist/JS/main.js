//Select DOM items
const menuBtn = document.querySelector("menu-btn");
const menu = document.querySelector("menu");
const menuNav = document.querySelector("menu-nav");
const menuBranding = document.querySelector("menu-branding");
const navItem = document.querySelectorAll("nav-items");

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.add("show");
    navItem.forEach(item => itemclassList.remove("show"));
  }
}
