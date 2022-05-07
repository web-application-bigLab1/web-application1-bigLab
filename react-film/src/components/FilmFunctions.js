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
        let newId;
        let flag=0;
        this.idList=[];
        for(let i=0;i<filmList.length;i++){
            this.idList.push(filmList[i].id);
        }
        for(let j=0;flag===0;j++){
            if(!(this.idList.includes(j))){
             newId= j;
             flag=1;
            }
        }

        return newId;
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