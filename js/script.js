// let btn = document.getElementsByTagName("button");
// btn.className.add("btnn");

let menu = document.getElementsByTagName("a");
menu.addEventListener("click", function(){
    menu.classList.remove("menu");
});
console.log(menu);
