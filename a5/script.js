//image urls, alt descriptions, and captions
var myImages =["/dev109/a5/images/ghibli.jpg", "/dev109/a5/images/figure.jpg", "/dev109/a5/images/cloudScape.jpg", "/dev109/a5/images/cat.jpg", "/dev109/a5/images/strawberry.jpg"]
var altImages =["Ghibli Landscape Painting","Ballet Figure Painting","Cloud Painting","Cat Painting","Strawberry Still Life Painting"];
var captionImages =[];
var index=0; 

//event listeners
var nextButton = getElementById("next");
var previousButton = getElementById("previous");
nextButton.addEventListener('click', next, false); 
previousButton.addEventListener('click', back, false);

//update image function
 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= altImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

//next function
function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 
//previous function
function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 
