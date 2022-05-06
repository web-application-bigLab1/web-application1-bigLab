import dayjs from 'dayjs';
const starEmpty = '<svg id="empty-star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg> ';
const starFilled = '<svg id="filled-star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg> ';


function Film(id, title, isFavorite = false, dateWatched, rating, star) {
    this.id = id;
    this.title = title;
    this.isFavorite = isFavorite;
    this.watchDate = dateWatched === undefined ? undefined : dayjs(dateWatched).format('YYYY-MM-DD');
    this.rating = rating;
    //Star icons
    if(star==null){
    this.star = '';
    for (let i = 0; i < 5; i++) {
        let starNow = (i < this.rating) ? starFilled : starEmpty;
        this.star += starNow;
    }}
    else{
        this.star=star;
    }
   
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
/*const pf = new Film(0, 'Pulp Fiction', true, dayjs('2022-03-10'), 5);
const g21 = new Film(1, '21 Grams', true, dayjs('2022-03-17'), 4);
const sw = new Film(2, 'Star Wars', false, undefined, undefined);
const matrix = new Film(3, 'Matrix', false, undefined, undefined);
const shrek = new Film(4, 'Shrek', false, dayjs('2022-03-30'), 3);*/
const ds1 = new Film(0, 'Doctor Strange1', true, dayjs('2016-10-26'), 4);
const ds2 = new Film(1, 'Doctor Strange2', true, dayjs('2022-05-04'), 5);
const spm = new Film(2, 'Spider-man3', true, dayjs('2022-12-5'), 4);
const thor4 = new Film(3, 'Thor4', false, undefined, undefined);
const fb = new Film(4, 'Fantastic Beasts', false, undefined, undefined);
const lll = new Film(5, 'La La Land', true, dayjs('2020-03-30'), 5);
const ve = new Film(6, 'Venom2', false, dayjs('2021-10-01'), 2);
const library = new FilmLibrary();
library.addNewFilm([ds1, ds2, spm, thor4, fb, lll, ve]);
export { library }