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

  const toggleFaqBtns = document.querySelectorAll(".toggle_faq_btn");

  for (const toggleBtn of toggleFaqBtns) {
    // hide close btns
    const closeBtn = toggleBtn.querySelector(".faq_close_btn");

    closeBtn.style.display = "none";
  }
  toggleFaqBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      showFaqInfo(id);
      toggleShowBtnIcon(id);
    });
  });

  const faqTextParagraph = document.querySelectorAll(".faq_info_text");
  for (const faqText of faqTextParagraph) {
    faqText.classList.add("close");
    faqText.classList.remove("open");
  }

  const showFaqInfo = (paragraphId) => {
    for (const el of faqTextParagraph) {
      const id = el.getAttribute("data-id");
      if (
        (id === paragraphId && el.classList.contains("open")) ||
        id !== paragraphId
      ) {
        el.classList.add("close");
        el.classList.remove("open");
        continue;
      }

      el.classList.remove("close");
      el.classList.add("open");
    }
  };
});

const toggleShowBtnIcon = (clickedId) => {
  const toggleFaqBtns = document.querySelectorAll(".toggle_faq_btn");
  for (const btn of toggleFaqBtns) {
    const plusIcon = btn.querySelector(".faq_open_btn");
    const minusIcon = btn.querySelector(".faq_close_btn");
    const id = btn.getAttribute("data-id");

    if (id === clickedId) {
      if (plusIcon.style.display !== "none") {
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline-block";
        console.log("Here 1");
      } else {
        plusIcon.style.display = "inline-block";
        minusIcon.style.display = "none";
        console.log("Here 2");
      }
      continue;
    }
    plusIcon.style.display = "inline-block";
    minusIcon.style.display = "none";
  }
};
