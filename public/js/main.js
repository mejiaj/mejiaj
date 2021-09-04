document.addEventListener('DOMContentLoaded', () => {
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
        mainMenu.classList.add(activeClass);
      } else {
        closeNav();
      }
    };

    const closeNav = () => {
      mainTrigger.classList.remove(activeClass);
      mainMenu.classList.add('active-out');
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

    const addListeners = () => {
      mainTrigger.addEventListener('click', toggleNav);
      document.documentElement.addEventListener('click', hideOnUnfocus);
    };

    const init = () => {
      addListeners();
    };

    return init();
  };

  const SmoothScroll = () => {
    let links = document.querySelectorAll("a[href^='#']");

    if (!links.length) {
      return;
    }

    const scrollToElement = e => {
      e.preventDefault();

      let clickedElement = document.querySelector(`${e.currentTarget.hash}`);

      clickedElement.scrollIntoView({
        behavior: 'smooth'
      });

      clickedElement.focus();

      // @TODO: make this work with SmoothScroll.
      // window.location.hash = `${e.target.hash}`;
    };

    const init = () => {
      links.forEach(link => {
        link.addEventListener('click', scrollToElement);
      });
    };

    return init();
  };

  const mainNav = Nav();
  const enableSmoothScroll = SmoothScroll();

  ScrollOut({
    once: true,
    threshold: 0.2
  });
});
