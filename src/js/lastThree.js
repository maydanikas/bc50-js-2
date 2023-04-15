import Marvel from './fetchMarvel';
import hbs from 'handlebars';

console.log(111);
Marvel.getLastThreeComics().then(console.log);
