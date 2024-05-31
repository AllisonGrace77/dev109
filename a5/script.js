var body = getElementsByTagName('body')[0];
body.onload = updateImage;

//image urls, alt descriptions, and captions
var myImages =["/dev109/a5/images/ghibli.jpg", "/dev109/a5/images/figure.jpg", "/dev109/a5/images/cloudScape.jpg", "/dev109/a5/images/cat.jpg", "/dev109/a5/images/strawberry.jpg"]
var altImages =["Ghibli Landscape Painting","Ballet Figure Painting","Cloud Painting","Cat Painting","Strawberry Still Life Painting"];
var captionImages =["Ghibli Landscape Painting - 2024","Ballet Figure Painting - 2023","Cloud Painting - 2022","Cat Painting - 2023","Strawberry Still Life Painting - 2023"];
var index=0; 
var auto=false;
var intervalId = clearInterval();

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
 if(auto===true){
   intervalId = clearInterval();
   intervalId = setInterval(next, 3000);
 }
} 
 
//previous function
function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;

 updateImage();
 if(auto===true){
   intervalId = clearInterval();
   intervalId = setInterval(next, 3000);
 }
} 

//section for checkbox
var checkbox = getElementById("auto");
checkbox.addEventListener('click', isAuto, false);

function isAuto() {
 if(checkbox.checked){
   auto=true;
   intervalId = setInterval(next, 3000);
 }
 else{
   auto=false;
  intervalId = clearInterval();
}
}


