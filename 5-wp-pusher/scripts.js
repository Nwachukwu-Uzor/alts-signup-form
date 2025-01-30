window.addEventListener("DOMContentLoaded", () => {
  const toggleNavBtn = document.querySelector("#toggleMenu");
  const toggleIcon = document.querySelector("#openMenuBtn");
  const navMenuContainer = document.querySelector("#navMenuContainer");

  toggleNavBtn.addEventListener("click", () => {
    const openIconClass = "fa-bars";
    const closeIconClass = "fa-xmark";
    const closeMenuClass = "close";
    const openMenuClass = "open";
    if (toggleIcon.classList.contains(openIconClass)) {
      toggleIcon.classList.remove(openIconClass);
      toggleIcon.classList.add(closeIconClass);
      navMenuContainer.classList.remove(closeMenuClass);
      navMenuContainer.classList.add(openMenuClass);
    } else {
      toggleIcon.classList.remove(closeIconClass);
      toggleIcon.classList.add(openIconClass);
      navMenuContainer.classList.add(closeMenuClass);
      navMenuContainer.classList.remove(openMenuClass);
    }
  });
});
