let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName('my-slides');
  let slidesText = document.getElementsByClassName('characters-item');
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slideIndex += 1;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < slidesText.length; i += 1) {
    slidesText[i].className = slidesText[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  slidesText[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 3500);
}
