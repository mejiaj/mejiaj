const mainTrigger = document.querySelector(".js-nav-trigger");
const mainMenu = document.querySelector(".js-nav");
const activeClass = "is-active";

const closeNav = () => {
  mainTrigger.classList.remove(activeClass);
  mainTrigger.setAttribute("aria-expanded", false);
  mainMenu.classList.remove(activeClass);
};

const toggleNav = () => {
  const active = document.querySelector(`.js-nav.${activeClass}`);

  if (!active) {
    mainTrigger.classList.add(activeClass);
    mainTrigger.setAttribute("aria-expanded", true);

    mainMenu.classList.add(activeClass);
  } else {
    closeNav();
  }
};

// Hides when menu or body is clicked.
const hideOnUnfocus = (e) => {
  if (
    !e.target.classList.contains("js-nav-trigger") &&
    mainTrigger.classList.contains(activeClass)
  ) {
    closeNav();
  }
};

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

const addListeners = () => {
  mainTrigger.addEventListener("click", toggleNav);
  document.documentElement.addEventListener("click", hideOnUnfocus);
};

const init = () => {
  toggleCurrent();
  addListeners();
};

export default init;
