document.addEventListener('DOMContentLoaded', () => {
  const Nav = () => {
    let mainTrigger = document.querySelector('.js-nav-trigger');
    let mainTarget = document.querySelector('.js-nav');
    let activeClass = 'is-active';
    let active = false;

    const toggleNav = () => {
      let active = document.querySelector(`.js-nav.${activeClass}`);

      if (!active) {
        mainTarget.classList.add(activeClass);
      } else {
        mainTarget.classList.add('active-out');
        mainTarget.addEventListener('transitionend', () => {
          active.classList.remove('active-out');
        });

        setTimeout(() => {
          active.classList.remove(activeClass);
        }, 200);
      }

      mainTrigger.classList.toggle(activeClass);
      // mainTarget.classList.toggle(activeClass);
    };

    const addListeners = () => {
      mainTrigger.addEventListener('click', toggleNav);
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

      let clickedElement = document.querySelector(`${e.target.hash}`);

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
