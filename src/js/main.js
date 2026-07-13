import Nav from "./MainNav";

document.addEventListener("DOMContentLoaded", () => {
  const mainMenu = document.querySelector("[data-primary-nav]");

  if (mainMenu) Nav();
});
