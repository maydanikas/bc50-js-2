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
    console.log(rand);
    console.log(res.data.data.results);
    // rand = 19;
    const respJSONed = res.data.data.results;
    // console.log(Handlebars(respJSONed[rand].stories.items));
    refs.IndexRandomCharacter.src =
      respJSONed[rand].thumbnail.path +
      '.' +
      respJSONed[rand].thumbnail.extension;
  })
  .catch(res => console.dir(res));
