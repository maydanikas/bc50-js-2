import Marvel from './fetchMarvel';
// import Handlebars from '../hbs/randomCharacter.hbs';
import refs from './refs';

Marvel.getLastThreeComics('/characters', {
  params: {},
})
  .then(res => {
    const rand = Math.floor(Math.random() * res.data.data.results.length);
    const respJSONed = res.data.data.results;
    // console.log(Handlebars(respJSONed[rand].stories.items));
    refs.IndexRandomCharacter.src =
      respJSONed[rand].thumbnail.path +
      '.' +
      respJSONed[rand].thumbnail.extension;
  })
  .catch(res => console.dir(res));
