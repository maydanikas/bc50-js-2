import Marvel from './fetchMarvel';
import Handlebars from '../hbs/indexLiRandom.hbs';
import refs from './refs.js';

Marvel.getRandomCharacter('/characters', {
  params: {
    // modifiedSince: '2021-01-01',
    limit: 50,
    // offset: 1,
  },
})
  .then(res => {
    let { results } = res.data.data;
    results = [...results].filter(({ description, thumbnail: { path } }) => {
      // console.log(path);
      // console.log();
      return description.length && !path.includes('not_available');
    });
    // console.log(results);
    const rand = Math.floor(Math.random() * results.length);
    // console.log(respJSONed[rand]);
    // console.log(Handlebars(respJSONed[rand].stories.items));
    refs.IndexRandomCharacter.src =
      results[rand].thumbnail.path + '.' + results[rand].thumbnail.extension;
    refs.IndexRandomCharacter.id = results[rand].id;
    return results;
  })
  .then(res => {
    console.log(refs.indexRandomUlRef);
    refs.indexRandomUlRef.innerHTML = '';
    refs.indexRandomUlRef.insertAdjacentHTML('afterbegin', Handlebars(res));
  })
  .catch(console.log);

// Тест UL на target
// console.log(111);
// console.log(refs.indexRandomUlReg);
// refs.indexRandomUlReg.addEventListener('click', () => {
// console.log('ok');
