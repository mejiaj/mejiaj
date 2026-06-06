import Nav from "./MainNav";
import SmoothScroll from "./SmoothScroll";

document.addEventListener("DOMContentLoaded", () => {
  const mainMenu = document.querySelector("[data-primary-nav]");

  if (mainMenu) Nav();

  SmoothScroll();
});
