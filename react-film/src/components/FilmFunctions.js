function FilmFunctions(library, filmList, setFilmList, filmToEdit, setFilmToEdit) {

    this.addFilm = (film) => {
        setFilmList((oldFilm) => [...oldFilm, film]);
    }

    this.modifyFilm = (film) => {
        setFilmList((oldFilm) => {
            return oldFilm.map(f => {
                if (f.id === film.id) {
                    f.id=film.id;
                    f.title=film.title;
                    f.isFavorite=film.isFavorite;
                    f.watchDate=film.watchDate;
                    f.rating=film.rating;
                    f.star=film.star;
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

    return {
        filmList: { filmList },
        setFilmList: { setFilmList },
        filmToEdit: { filmToEdit },
        setFilmToEdit: { setFilmToEdit },
        addFilm: this.addFilm,
        modifyFilm: this.modifyFilm,
        deleteFilm: this.deleteFilm
    };
}

export { FilmFunctions }