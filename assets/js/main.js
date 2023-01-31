window.addEventListener("load", () => {
  const nav = document.querySelector(".main-navigation");
  const navOpen = document.querySelector(".mobile-nav-open");
  const navClose = document.querySelector(".mobile-nav-close");
  navOpen.addEventListener("click", () => nav.classList.add("active"));
  navClose.addEventListener("click", () => nav.classList.remove("active"));
});
