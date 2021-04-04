var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
showSlides(slideIndex);
setInterval(()=>{
    if(slides.length != slideIndex)
        showSlides(slideIndex++);
    else
        showSlides(slideIndex = 1);
},5000)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
}

  setTimeout(()=>{
    document.getElementById("loader").style.display = "none";}, 3000);


document.getElementById("loader").style.display = "block";

