console.log("var is working");

var vimg=document.querySelector(".vimg");

document.addEventListener("scroll",function(){
    if(window.scrollY>106){
        document.querySelector(".vfname").classList.add("rightslide");
    vimg.classList.add("shake");
    }
    else{
        document.querySelector(".vfname").classList.remove("rightslide");
        vimg.classList.remove("shake");
    
    }});