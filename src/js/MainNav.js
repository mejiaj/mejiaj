const Nav = () => {
  let mainTrigger = document.querySelector('.js-nav-trigger');
  let mainMenu = document.querySelector('.js-nav');
  let activeClass = 'is-active';

  if (!mainMenu) {
    return;
  }

  const toggleNav = () => {
    let active = document.querySelector(`.js-nav.${activeClass}`);

    if (!active) {
      mainTrigger.classList.add(activeClass);
      mainTrigger.setAttribute("aria-expanded", true);
      mainMenu.classList.add(activeClass);
    } else {
      closeNav();
    }
  };

  const closeNav = () => {
    mainTrigger.classList.remove(activeClass);
    mainMenu.classList.add('active-out');
    mainTrigger.setAttribute("aria-expanded", false);
    mainMenu.addEventListener('transitionend', () => {
      mainMenu.classList.remove('active-out');
    });

    setTimeout(() => {
      mainMenu.classList.remove(activeClass);
      clearTimeout();
    }, 200);
  };

  // Hides when menu or body is clicked.
  const hideOnUnfocus = e => {
    if (
      !e.target.classList.contains('js-nav-trigger') &&
      mainTrigger.classList.contains(activeClass)
    ) {
      closeNav();
    }
  };

  const toggleCurrent = () => {
    const currentPath = window.location.pathname;

    if (currentPath == "/") {
      mainMenu
        .firstElementChild
        .firstElementChild
        .classList.add(activeClass);
    } else {
      const activeItem = mainMenu.querySelector(`[href="${currentPath}"]`);
      activeItem.classList.add(activeClass);
    }
  }

  const addListeners = () => {
    mainTrigger.addEventListener('click', toggleNav);
    document.documentElement.addEventListener('click', hideOnUnfocus);
  };

  const init = () => {
    toggleCurrent();
    addListeners();
  };

  return init();
};

export default Nav;
