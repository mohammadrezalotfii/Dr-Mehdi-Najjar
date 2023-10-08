let btn = document.querySelectorAll("button");

btn[1].classList.add("btnn");

btn[1].addEventListener("mouseover", () => {
  btn[1].classList.add("btn-hover");
});

btn[1].addEventListener("mouseout", () => {
  btn[1].classList.remove("btn-hover");
});

// icons hover
let icons = document.querySelectorAll("div.icons > div");

icons.forEach(function (elem) {
  elem.classList.add("icon");

  elem.addEventListener("mouseover", () => {
    elem.classList.add("icon-hover");
  });

  elem.addEventListener("mouseout", () => {
    elem.classList.remove("icon-hover");
  });
});
