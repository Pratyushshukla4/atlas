 let navslide;
 navslide = document.getElementById("navslide");
 let slidebutton = document.getElementById("slidebutton")
 let crossbottun = document.getElementById("crossbottun")

 slidebutton.addEventListener("click",()=>{

    navslide.style.left = "0px"
    slidebutton.style.display="none"
    crossbottun.style.display = "block"

    

 });
 crossbottun.addEventListener("click",()=>{

    navslide.style.left = "-205px"
    slidebutton.style.display="block"
    crossbottun.style.display = "none"

 })