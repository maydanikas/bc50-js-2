import md5 from 'md5';
import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import '../css/notiflix-3.2.6.min.css';
let flag = true;
const PUBLICK = 'f31807a60270db8c1d9152910dc43c3a';
const PRIVAT = 'e096f5c83a35e96c2f1b391e0633321a9c1b55af';
const TS = 1;
const MD5 = md5(TS + PRIVAT + PUBLICK);
let MARVEL_KEYS = {
  PUBLICK,
  PRIVAT,
  MD5,
};

console.log(MARVEL_KEYS);
const instanse = axios.create({
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
  baseURL: 'https://gateway.marvel.com/v1/public',
  // headers: {
  //   Accept: '*/*',
  //   'if-none-match': '55c5b724939cab90eaba75151c431c4a1b1d93cd',
  // },
  params: {
    apikey: MARVEL_KEYS.PUBLICK,
    hash: MARVEL_KEYS.MD5,
    ts: 1,
    // events: 1,
  },
  onDownloadProgress: function (progressEvent) {
    // console.log(progressEvent);
    // Do whatever you want with the native progress event
    // console.log(progressEvent.loaded);
    // console.log(progressEvent.total);
    // console.log(progressEvent);
    if (flag) {
      Loading.dots({
        svgColor: 'rgba(255,0,0)',
        backgroundColor: '#171717ba',
      });
    }
    flag = false;
    Loading.remove(1000);
    // Loading.change(`${Math.round((progressEvent.loaded * 100) / 0)}`);
  },

  // onDownloadProgress: function (progressEvent) {
  // Do whatever you want with the native progress event
  //   console.log(222);
  // },
  // transformResponse: [
  //   function (data) {
  // const response = JSON.parse(data);
  // const responjeJSONed = response.data.results;
  // console.log(response.data.results);
  // const hbsObjRandom = responjeJSONed.map(element => ({
  //   title: element.title,
  //   id: element.id,
  //   urlImg: element.images[0].path + '.' + element.images[0].extension,
  // }));
  // console.log('data', hbsObjRandom);
  // const newRes = Object.entries(response.data.results);
  // console.log(newRes);
  // return hbsObjRandom;
  //     return data;
  //   },
  // ],
});

// class Marvel {
//   getComics('', n)
//   getCharacters
//   getRandomComics
//   getRandomCharacters
// }

export default class Marvel {
  static getLastThreeComics(url = '/comics', options = {}) {
    return instanse(url, options);
  }

  static getRandomCharacter(url = '/characters', options = {}) {
    return instanse(url, options);
  }
  // Marvel.getLastThreeComics('/comics', {
  //   params: {
  //     limit: 3,
  //     dateDescriptor: 'thisMonth',
  //   },
  // })

  static getIndexSearch({ nameStartsWith = '', limit = 32 }) {
    console.log(nameStartsWith);
    return instanse('/characters', {
      params: {
        ...(nameStartsWith && { nameStartsWith }),
        ...(limit && { limit }),
      },
    });
  }
  static getComicById(id = '11111', options = {}) {
    console.log(id);
    return instanse(`/comics/${id}`, options);
  }
  static getComicsCharactersById(id = 'spider', options = {}) {
    console.log(id);
    return instanse(`/comics/${id}/characters`);
  }
}
