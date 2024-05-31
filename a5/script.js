var myImages =["/dev109/a5/images/ghibli.jpg", "/dev109/a5/images/figure.jpg", "/dev109/a5/images/cloudScape.jpg", "/dev109/a5/images/cat.jpg", "/dev109/a5/images/strawberry.jpg"]

var captionImages =["Ghibli Landscape Painting","Ballet Figure Painting","Cloud Painting","Cat Painting","Strawberry Still Life Painting"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); //test

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
