const links = document.querySelectorAll("a[href*='#']");

const scrollToElement = (e) => {
  e.preventDefault();

  const anchorHash = e.currentTarget.hash;
  const clickedElement = document.querySelector(`${anchorHash}`);

  if (!clickedElement) {
    throw new Error(`Element doesn't exist with id ${anchorHash}`);
  }

  clickedElement.scrollIntoView({
    behavior: "smooth",
  });

  clickedElement.focus();
};

const init = () =>
  links.forEach((link) => link.addEventListener("click", scrollToElement));

export default init;
