document.addEventListener('DOMContentLoaded', () => {
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

  mainTrigger.addEventListener('click', toggleNav);
});
