document.addEventListener('DOMContentLoaded', () => {
  let mainTrigger = document.querySelector('.js-nav-trigger');
  let mainTarget = document.querySelector('.js-nav');
  let activeClass = 'is-active';

  const toggleNav = () => {
    mainTrigger.classList.toggle(activeClass);
    mainTarget.classList.toggle(activeClass);
  };

  mainTrigger.addEventListener('click', toggleNav);
});
