import Marvel from './fetchMarvel';
// import Handlebars from '../hbs/randomCharacter.hbs';
import refs from './refs.js';

Marvel.getRandomCharacter('/characters', {
  params: {
    // modifiedSince: '2021-01-01',
    limit: 5,
    // offset: 1,
  },
})
  .then(res => {
    let rand = Math.floor(Math.random() * res.data.data.results.length);
    // console.log(rand);
    console.log(res.data.data.results[rand]);
    // rand = 19;
    const respJSONed = res.data.data.results;
    console.log(respJSONed[rand]);
    // console.log(Handlebars(respJSONed[rand].stories.items));
    refs.IndexRandomCharacter.src =
      respJSONed[rand].thumbnail.path +
      '.' +
      respJSONed[rand].thumbnail.extension;
    refs.IndexRandomCharacter.id = respJSONed[rand].id;
    console.log(respJSONed[rand]);
  })
  .catch(res => console.dir(res));

// Тест UL на target
console.log(111);
console.log(refs.indexRandomUlReg);
refs.indexRandomUlReg.addEventListener('click', () => {
  console.log('ok');
});
