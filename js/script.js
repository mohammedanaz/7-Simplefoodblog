// var verticalSecMenu = document.getElementsByClassName("vertical-sec-menu");
// // var verticalSecSearch = document.getElementsByClassName("vertical-sec-search");

// var wsY = window.scrollY;
// var scrollUp = "20px";

// window.addEventListener("scroll", verticalSecMenuAppear);

// function verticalSecMenuAppear(){
//     if(wsY > scrollUp){
//         verticalSecMenu.classList.add("appear");
//         // verticalSecSearch.style.top = "60";

//     }
//     else{
//         verticalSecMenu.classList.remove("appear");
//         // verticalSecSearch.style.top = "30";
//     }

// }




let verticalsecMenu = document.querySelector(".vertical-sec-menu");

let verticalsecSearch = document.querySelector(".vertical-sec-search");

verticalsecSearch.addEventListener("click",menuAppear());

function menuAppear(){
    verticalsecMenu.classList.toggle(".appear");
    }
