const activeClass = "is-active";
const siteNav = document.querySelector("[data-site-nav]");

const siteMobileNavToggle = document.querySelector("[data-site-nav-toggle]");
const sitePrimaryNav = siteNav.querySelector("[data-primary-nav]");
const FOCUSABLE_ELEMENTS = "a, button";

// Create an array from all focusable, active, elements.
const focusableElements = [...siteNav.querySelectorAll(FOCUSABLE_ELEMENTS)]
  .filter((el) => !el.disabled)
  .filter((el) => !el.hidden);

const focusTrap = (event) => {
  const firstItem = focusableElements.at(0);
  const lastItem = focusableElements.at(-1);
  const tabForward =
    event.key === "Tab" &&
    document.activeElement === lastItem &&
    !event.shiftKey; // Avoid conflict with reverse tab order check.
  const tabBackward = event.shiftKey && event.key === "Tab";

  if (tabForward) {
    event.preventDefault(); // Tabs to 2nd item without this.
    firstItem.focus();
  }

  if (tabBackward && firstItem === document.activeElement) {
    event.preventDefault();
    lastItem.focus();
  }

  if (event.key === "Escape") {
    siteMobileNavToggle.focus();
    if (!siteNav.hidden) toggleMenu();
  }
};

const toggleMenu = () => {
  const isExpanded = siteMobileNavToggle.ariaExpanded === "true";
  siteNav.hidden = isExpanded;

  siteMobileNavToggle.ariaExpanded = `${!isExpanded}`;
};

const setCurrent = () => {
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
    if (activeItem) activeItem.classList.add(activeClass);
  }
};

// Reset nav on desktop.
// Matches `sm` (490px) breakpoint in `_variables`.
const mqTablet = window.matchMedia("(width >= 30.625em)");

const handleMqTablet = () => {
  if (!mqTablet.matches) {
    siteMobileNavToggle.ariaExpanded = "false";
    siteMobileNavToggle.hidden = false;

    siteNav.hidden = true;
    addListeners();
    return;
  }

  siteMobileNavToggle.ariaExpanded = "true";
  siteMobileNavToggle.hidden = true;
  siteNav.hidden = false;

  removeListeners();
};

// Close menu if user clicks outside of nav.
const handleFocusOut = (event) => {
  if (siteNav.hidden) return;
  if (siteMobileNavToggle.contains(event.target)) return;
  if (siteNav.contains(event.target)) return;

  toggleMenu();
};

const addListeners = () => {
  document.body.addEventListener("click", handleFocusOut);
  siteMobileNavToggle.addEventListener("click", toggleMenu);
  siteNav.addEventListener("keydown", focusTrap);
};

const removeListeners = () => {
  document.body.removeEventListener("click", handleFocusOut);
  siteMobileNavToggle.removeEventListener("click", toggleMenu);
  siteNav.removeEventListener("keydown", focusTrap);
};

const init = () => {
  if (!siteNav || !siteMobileNavToggle) return;

  mqTablet.addEventListener("change", handleMqTablet);

  handleMqTablet();
  setCurrent();
};

export default init;
