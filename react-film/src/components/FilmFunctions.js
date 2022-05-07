function FilmFunctions(filmList, setFilmList) {

    this.addFilm = (film) => {
        setFilmList((oldFilm) => [...oldFilm, film]);
    }

    this.modifyFilm = (film) => {
        setFilmList((oldFilm) => {
            return oldFilm.map(f => {
                if (f.id === film.id) {
                    f.id = film.id;
                    f.title = film.title;
                    f.isFavorite = film.isFavorite;
                    f.watchDate = film.watchDate;
                    f.rating = film.rating;
                    f.star = film.star;
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



   

    return {
        filmList: { filmList },
        setFilmList: { setFilmList },
        addFilm: this.addFilm,
        modifyFilm: this.modifyFilm,
        deleteFilm: this.deleteFilm,
        assignNewId:this.assignNewId
    };

}
export { FilmFunctions }
