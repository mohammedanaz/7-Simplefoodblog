document.addEventListener("DOMContentLoaded", function() {

var verticalSecMenu = document.getElementsByClassName("vertical-sec-menu");
// var verticalSecSearch = document.getElementsByClassName("vertical-sec-search");

var wsY = window.scrollY;
var scrollUp = "20px";

function verticalSecMenuAppear(){
    if(wsY > scrollUp){
        verticalSecMenu.classList.add("appear");
        // verticalSecSearch.style.top = "60";

    }
    else{
        verticalSecMenu.classList.remove("appear");
        // verticalSecSearch.style.top = "30";
    }

}

window.addEventListener("scroll", verticalSecMenuAppear);

});