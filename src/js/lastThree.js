import Marvel from './fetchMarvel';
import Handlebars from '../hbs/lastThreeComics.hbs';
import HBSmodal from '../hbs/_modalComics.hbs';
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

refs.indexLastComics.addEventListener('click', onClickLastComics, {
  // capture: true,
  // useCapture: true,
});

function onClickLastComics(e) {
  refs.indexComicsModal.classList.remove('is-hidden');
  Marvel.getComicById(e.target.dataset.id)
    .then(
      ({
        data: {
          data: { results },
        },
      }) => results[0]
    )
    .then(res => {
      console.log(res);
      return res;
    })
    .then(
      ({
        id,
        title,
        prices,
        format,
        thumbnail: { path, extension },
        ups,
        digitalId,
        pageCount,
        creators,
        dates,
      }) => ({
        id,
        title,
        prices: prices[0].price,
        format,
        creatorsName: creators.items[0].name,
        creatorsRole: creators.items[0].role,
        // thumbnail,
        path,
        extension,
        ups,
        digitalId,
        pageCount,
        dates: new Date(dates[1].date).getFullYear(),
      })
    )
    .then(res => {
      refs.indexComicsModal.innerHTML = HBSmodal(res);
      return res;
    })
    .then(console.log)
    .then(() => {
      // console.log('theb');
      // console.log('close');
    });
  // console.log('111');
}
