import Nav from "./MainNav";
import SmoothScroll from "./SmoothScroll";

document.addEventListener("DOMContentLoaded", () => {
  const mainMenu = document.querySelector(".js-nav");

  if (mainMenu) Nav();

  SmoothScroll();
});
