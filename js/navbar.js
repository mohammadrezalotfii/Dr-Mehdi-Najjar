let menu = document.querySelectorAll("a");
menu.forEach((elem) => {
  elem.classList.add("menu");
  elem.addEventListener("mouseover", () => {
    elem.classList.add("menu-hover");
  });
  elem.addEventListener("mouseout", () => {
    elem.classList.remove("menu-hover");
  });
});
