
const list_click = document.getElementById("list-click");
const list_nav = document.getElementById("list-nav");
const main = document.getElementById("main");
list_nav.addEventListener("click", function () {
  if(list_click.style.width== "250px"){
    list_click.style.width= "0px"
    main.style.marginLeft ="0px"
  }else{
    list_click.style.width= "250px"
    main.style.marginLeft ="250px"
  }
});

