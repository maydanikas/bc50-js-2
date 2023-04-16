import md5 from 'md5';
import axios from 'axios';

const PUBLICK = 'd2e2b1d23bf2e2b9b5d5d8680b0991ef';
const PRIVAT = '34a66ff63aaa72e5c7be28541438f8f13058553b';
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
  baseURL: 'http://gateway.marvel.com/v1/public',
  // headers: {
  //   Accept: '*/*',
  //   'if-none-match': '55c5b724939cab90eaba75151c431c4a1b1d93cd',
  // },
  params: {
    apikey: MARVEL_KEYS.PUBLICK,
    hash: MARVEL_KEYS.MD5,
    ts: 1,
  },
  // onUploadProgress: e => console.log(111),
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
}
