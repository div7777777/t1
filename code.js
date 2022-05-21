// mode sombre de thème
function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}
// barre de recherche
function search_icones(){
  let input = document.getElementById('searchbar').value 
  input=input.toLowerCase();
  let x = document.getElementsByClassName('icone');
  for (i=0; i<x.length; i++){
      if (!x[i].innerHTML.toLocaleLowerCase().includes(input)){
          x[i].style.display="none";
      }
      else{
          x[i].style.display="list-item";
      }
  }
}

  // slider responsive
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
