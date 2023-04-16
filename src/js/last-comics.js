// const lastComicsModalEl = document.querySelector('.lastComics-item');
// console.log(lastComicsModalEl);

export function sliderGalleryComics() {
  const slidesContainer = document.getElementById('slides-container');
  const slide = document.querySelector('.slide');
  const prevButton = document.getElementById('slide-arrow-prev');
  const nextButton = document.getElementById('slide-arrow-next');

  nextButton.addEventListener('click', () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener('click', () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });
}

sliderGalleryComics();
