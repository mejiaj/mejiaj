const activeClass = "is-active";
const siteNav = document.querySelector("[data-site-nav]");
const siteMobileNavToggle = document.querySelector("[data-site-nav-toggle]");
const sitePrimaryNav = siteNav.querySelector("[data-primary-nav]");
const FOCUSABLE_ELEMENTS = "a, button";

const focusableElements = [...siteNav.querySelectorAll(FOCUSABLE_ELEMENTS)]
  .filter((el) => !el.disabled)
  .filter((el) => !el.hidden);

const focusTrap = (event) => {
  const firstItem = focusableElements.at(0);
  const lastItem = focusableElements.at(-1);

  if (
    event.key === "Tab" &&
    document.activeElement === lastItem &&
    !event.shiftKey // Needed because we check for reverse tab order later.
  ) {
    event.preventDefault(); // Tabs to 2nd item without this.
    firstItem.tabIndex = 0;
    firstItem.focus();
  }

  if (event.shiftKey && event.key === "Tab") {
    // const activeItem = (element) => element === document.activeElement;
    // const activeItemIndex = focusableElements.findIndex(activeItem);

    // event.preventDefault();
    // focusableElements[activeItemIndex - 1].focus();

    if (document.activeElement === firstItem) {
      event.preventDefault();
      lastItem.focus();
    }
  }

  if (event.key === "Escape") {
    siteMobileNavToggle.focus();
  }
};

const toggleMenu = () => {
  let isExpanded = siteMobileNavToggle.ariaExpanded === "true";
  siteNav.hidden = isExpanded;

  siteMobileNavToggle.setAttribute("aria-expanded", !isExpanded);
};

const toggleCurrent = () => {
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split("/");

  // Homepage check.
  if (currentPath === "/") {
    sitePrimaryNav.firstElementChild.firstElementChild.classList.add(
      activeClass,
    );
  } else {
    const activeItem = sitePrimaryNav.querySelector(
      `[href="/${pathSegments[1]}"]`,
    );
    activeItem.classList.add(activeClass);
  }
};

const init = () => {
  // siteNav.hidden = true;
  toggleCurrent();
};

siteMobileNavToggle.addEventListener("click", toggleMenu);
siteNav.addEventListener("keydown", focusTrap);

export default init;
