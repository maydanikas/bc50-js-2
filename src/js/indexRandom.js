import Marvel from './fetchMarvel';
// import Handlebars from '../hbs/randomCharacter.hbs';
import refs from './refs';

Marvel.getRandomCharacter('/characters', {
  params: {
    // modifiedSince: '2021-01-01',
    limit: 5,
    // offset: 1,
  },
})
  .then(res => {
    let rand = Math.floor(Math.random() * res.data.data.results.length);
    const respJSONed = res.data.data.results;
    console.log(respJSONed[rand]);
    refs.IndexRandomCharacter.src =
      respJSONed[rand].thumbnail.path +
      '.' +
      respJSONed[rand].thumbnail.extension;
  })
  .catch(res => console.dir(res));
