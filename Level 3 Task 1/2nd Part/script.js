var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.querySelectorAll('.slide');
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = 'block';
  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
