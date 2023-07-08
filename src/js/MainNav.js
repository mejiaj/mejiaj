const mainMenu = document.querySelector(".js-nav");
const activeClass = "is-active";

const toggleCurrent = () => {
  const currentURL = window.location.pathname;
  const currentPath = currentURL.split("/");

  // If we're on the homepage
  if (currentURL === "/") {
    mainMenu.firstElementChild.firstElementChild.classList.add(activeClass);
  } else {
    const activeItem = mainMenu.querySelector(`[href="/${currentPath[1]}"]`);
    activeItem.classList.add(activeClass);
  }
};

const init = () => toggleCurrent();

export default init;
