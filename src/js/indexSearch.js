import refs from './refs';
import Marvel from './fetchMarvel';
import debounce from 'lodash.debounce';
import HBS from '../hbs/indexSearch.hbs';

refs.indexSearch.addEventListener('input', debounce(onSearchInput, 1000));

function onSearchInput(e) {
  e.preventDefault();
  let input = e.target.value;
  console.log(input);
  input &&
    Marvel.getIndexSearch({ nameStartsWith: input })
      .then(res => {
        const { results } = res.data.data;
        const preRender = results.filter(
          ({ thumbnail: { path } }) => !path.includes('image_not_available')
        );
        preRender.length = 16;
        return preRender.map(({ name, thumbnail: { path, extension } }) => ({
          name: name.split('(')[0],
          path,
          extension,
        }));
      })
      .then(res => {
        console.log(res);
        refs.indexSearchResult.innerHTML = HBS(res);
      })
      .then(console.log)
      .catch(console.log);
}
