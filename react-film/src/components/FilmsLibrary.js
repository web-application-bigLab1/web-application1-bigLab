import dayjs from 'dayjs';

function Film(id, title, isFavorite = false, dateWatched, rating) {
    this.id = id;
    this.title = title;
    this.isFavorite = isFavorite;
    this.watchDate = dateWatched === undefined ? undefined : dayjs(dateWatched).format('YYYY-MM-DD');
    this.rating = rating;
}

function FilmLibrary() {

    this.list = [];

    this.addNewFilm = ([...films]) => {
        films.forEach(f => {
            this.list.push(f);
        })
    }

    this.getFilms = () => {
        return this.list;
    }
}
const pf = new Film(0, 'Pulp Fiction', true, dayjs('2022-03-10'), 5);
const g21 = new Film(1, '21 Grams', true, dayjs('2022-03-17'), 4);
const sw = new Film(2, 'StarForm Wars', false, undefined, undefined);
const matrix = new Film(3, 'Matrix', false, undefined, undefined);
const shrek = new Film(4, 'Shrek', false, dayjs('2022-03-30'), 3);
const ds1 = new Film(5, 'Doctor Strange1', true, dayjs('2016-10-26'), 4);
const ds2 = new Film(6, 'Doctor Strange2', true, dayjs('2022-05-04'), 5);
const spm = new Film(7, 'Spider-man3', true, dayjs('2021-12-5'), 4);
const thor4 = new Film(8, 'Thor4', false, undefined, undefined);
const fb = new Film(9, 'Fantastic Beasts', false, undefined, undefined);
const lll = new Film(10, 'La La Land', true, dayjs('2020-03-30'), 5);
const ve = new Film(11, 'Venom2', false, dayjs('2021-10-01'), 2);
const library = new FilmLibrary();
library.addNewFilm([pf, g21, sw, matrix, shrek, ds1, ds2, spm, thor4, fb, lll, ve]);
export { library }