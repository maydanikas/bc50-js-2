export default {
  IndexLastThreeComics: document.querySelector('.lastComics-list'),
  IndexRandomCharacter: document.querySelector('.characters-image'),
  indexSearch: document.querySelector('.header__input '),
  indexSearchResult: document.querySelector('.characters-page-list'),
  indexLastComics: document.querySelector('#slides-container'),
  //!<=== Modal
  indexComicsModal: document.querySelector('[data-comics-modal]'),
  '#modalCloseBtn': null,
  '.modal-comics-characters .items': null,

  ///!===> Modal
  indexComicsModalOpenRenderHbs: document.querySelector('.modal-comics'),
  indexRandomUlRef: document.querySelector('#characters-list-index-renndom'),
  refresh() {
    const refreshed = Object.entries(this).forEach((key, value) => {
      return (this[key[0]] = key[1] ?? document.querySelector(key[0]));
    });
    return console.warn('Refs was Refreshed!');
  },
};
