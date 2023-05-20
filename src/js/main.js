import Nav from "./MainNav";
import SmoothScroll from "./SmoothScroll";
import ScrollOut from "./ScrollOut";
import "./text-balance";

document.addEventListener("DOMContentLoaded", () => {
  const mainMenu = document.querySelector(".js-nav");

  if (mainMenu) Nav();

  SmoothScroll();
  ScrollOut();
});
