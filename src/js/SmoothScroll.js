const SmoothScroll = () => {
  const links = document.querySelectorAll("a[href*='#']");

  if (!links.length) {
    return;
  }

  const scrollToElement = (e) => {
    e.preventDefault();

    const anchorHash = e.currentTarget.hash;
    const clickedElement = document.querySelector(`${anchorHash}`);

    if (!clickedElement) {
      console.error(`Element doesn't exist with id ${anchorHash}`);
      return;
    }

    clickedElement.scrollIntoView({
      behavior: 'smooth',
    });

    clickedElement.focus();
  };

  const init = () => {
    links.forEach((link) => link.addEventListener('click', scrollToElement));
  };

  return init();
};

export default SmoothScroll;
