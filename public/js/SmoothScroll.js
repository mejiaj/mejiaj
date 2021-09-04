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

export default SmoothScroll;
