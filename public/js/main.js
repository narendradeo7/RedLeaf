
console.log("js is working");

var audio =document.getElementsByTagName("audio")[0];
var audio2 =document.getElementsByTagName("audio")[1];


var correctfruit = document.querySelector(".fruit1");
var fruitcount=0;

correctfruit.addEventListener('mouseover', (event) => {
    console.log(fruitcount);
if(fruitcount%10==0){
    
audio2.play();
}
else{
    audio.play();
}
   
// setting meter reading 
fruitcount++;
document.querySelector(".meter").innerHTML=fruitcount;});

// working of preloader 

function loading(){
    document.querySelector(".preloader").style.display="none";



}

window.onload = function() {
    loading();
}

// navbar working 

// making nav link active on click of navbar 

document.querySelectorAll(".nav-link").forEach(function(elem){elem.addEventListener("click",function(){
    document.querySelector(".nav-link.active").classList.remove("active");
    document.querySelector(".nav-item.active").classList.remove("active");  

    this.classList.add("active");   
      this.parentElement.classList.add("active");
});});






// // making navlinks active according to the url 
// var path = window.location.pathname;
//     path = path.replace("/", "");

//     // getting path of the route loaded and matching it with the curent nav href 

// document.querySelectorAll(".nav-link").forEach((elem)=>{
//     var href =elem.href.replace("http://localhost:3000/","");

//     if(path==href){
//         document.querySelector(".nav-link.active").classList.remove("active");
//         document.querySelector(".nav-item.active").classList.remove("active");  
    

//         elem.classList.add("active");   
//         elem.parentElement.classList.add("active");
//     }

// })

// // inventory part 

// // making only active slide text visible


// events related to scroll 
var navhead=document.querySelector(".nav_head");
var activenav=document.querySelector(".navbar a.active");
var nav =document.querySelectorAll(".navbar a");

document.addEventListener("scroll",function(){
    if(window.scrollY>250){
        navhead.classList.add("snavhead");
        activenav.classList.add("snavactive");
        nav.forEach((el)=>{el.classList.add("snava")});
    }
    else{
        
        navhead.classList.remove("snavhead");
        activenav.classList.remove("snavactive");
        nav.forEach((el)=>{el.classList.remove("snava")});
        
    }
});

