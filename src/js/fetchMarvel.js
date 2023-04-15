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
  // url: 'user',
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    apikey: MARVEL_KEYS.PUBLICK,
    hash: MARVEL_KEYS.MD5,
    ts: 1,
    // limit: 3,
    dateDescriptor: 'thisMonth',
  },
  // onUploadProgress: e => console.log(111),
  // onDownloadProgress: function (progressEvent) {
  //   // Do whatever you want with the native progress event
  //   console.log(222);
  // },
  transformResponse: [
    function (data) {
      const response = JSON.parse(data);
      // console.log(response.data.results);

      return { ...response.data.results, one: 1 };
    },
  ],
});

// class Marvel {
//   getComics('', n)
//   getCharacters
//   getRandomComics
//   getRandomCharacters
// }

export default class Marvel {
  static getLastThreeComics() {
    return instanse('/comics').then(res => {
      return res;
    });
  }
}
