// first button in header section
let btn = document.getElementById("contact-us-btn");
btn.addEventListener("mouseover", () => {
  btn.classList.add("btn-hover");
});
btn.addEventListener("mouseout", () => {
  btn.classList.remove("btn-hover");
});
document.getElementById("contact-us-btn").classList.add("btnn");

// first outline button in header section
let btnOut = document.getElementById("about-us-outline-btn");
btnOut.addEventListener("click", () => {
  window.location("");
});
btnOut.addEventListener("mouseover", () => {
  btnOut.classList.add("btn-hover");
});
btnOut.addEventListener("mouseout", () => {
  btnOut.classList.remove("btn-hover");
});
document.getElementById("about-us-outline-btn").classList.add("btn-outline");

// second button in header section
let btn2 = document.getElementById("contact-us-btn2");
btn2.addEventListener("mouseover", () => {
  btn2.classList.add("btn-hover");
});
btn2.addEventListener("mouseout", () => {
  btn2.classList.remove("btn-hover");
});
document.getElementById("contact-us-btn2").classList.add("btnn");

// second outline button in header section
let btnOut2 = document.getElementById("about-us-outline-btn2");
btnOut2.addEventListener("mouseover", () => {
  btnOut2.classList.add("btn-hover");
});
btnOut2.addEventListener("mouseout", () => {
  btnOut2.classList.remove("btn-hover");
});
document.getElementById("about-us-outline-btn2").classList.add("btn-outline");

// service button
let sbtn = document.querySelectorAll("div.incart > button");
sbtn.forEach(function (elem) {
  elem.addEventListener("mouseover", () => {
    elem.classList.add("btn-hover");
  });
  elem.addEventListener("mouseout", () => {
    elem.classList.remove("btn-hover");
  });
});

// footer icon
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
