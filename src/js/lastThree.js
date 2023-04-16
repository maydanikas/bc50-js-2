import Marvel from './fetchMarvel';
import Handlebars from '../hbs/lastThreeComics.hbs';
import refs from './refs';

Marvel.getLastThreeComics('/comics', {
  params: {
    limit: 3,
    dateDescriptor: 'thisMonth',
  },
})
  .then(res => {
    const respJSONed = res.data.data.results;
    // console.log(response.data.results);
    // console.log(respJSONed);
    console.log(respJSONed);
    const hbsObjRandom = respJSONed.map(element => ({
      title: element.title,
      id: element.id,
      urlImg: element.images[0].path + '.' + element.images[0].extension,
      creators: element.creators.items[0].name,
    }));
    // console.log('111', hbsObjRandom);
    // console.log(Handlebars(hbsObjRandom));
    refs.IndexLastThreeComics.innerHTML = Handlebars(hbsObjRandom);
    // // console.log('data', hbsObjRandom);
    // const newRes = Object.entries(response.data.results);
    // console.log(newRes);

    // return hbsObjRandom;

    // console.log(res);
  })
  .catch(res => console.dir(res));
