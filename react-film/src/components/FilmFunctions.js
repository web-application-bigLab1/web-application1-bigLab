function FilmFunctions(filmList, setFilmList) {

    this.addFilm = (film) => {
        film.id = this.assignNewId();
        setFilmList((oldFilm) => [...oldFilm, film]);
    }

    this.modifyFilm = (film) => {
        setFilmList((oldFilm) => {
            return oldFilm.map(f => {
                if (f.id === film.id) {
                    f.title = film.title;
                    f.isFavorite = film.isFavorite;
                    f.watchDate = film.watchDate;
                    f.rating = film.rating;
                    return f;
                }
                else
                    return f;
            });
        });
    }

    this.deleteFilm = (title) => {
        setFilmList((fm) => fm.filter(f => f.title !== title));
    }

    this.assignNewId = () => {
        let i = 0;
        while (filmList.map(f => f.id).includes(i)) i++;
        return i;
    }
}
export { FilmFunctions }
