import { ListGroupFilters } from "./ListGroupFilters";
import { Button } from "react-bootstrap";
import { FilmForm } from "./FilmForm";
import { useState } from 'react';
import { library } from "./FilmsLibrary";

function Films(props) {

    const [showForm, setShowForm] = useState(false);
    const [filmToEdit, setFilmToEdit] = useState();

    const addFilm = (film) => {
        props.setFilmList((oldFilm) => [...oldFilm, film]);
    }

    const modifyFilm = (film) => {
        props.setFilmList((oldFilm) => {
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

    const deleteFilm = (title) => {
        props.setFilmList((fm) => fm.filter(f => f.title !== title));
    }

    return (
        <ul className="list-group list-group-flush" id="list-films">
            <ListGroupFilters
                films={props.films}
                filter={props.filter}
                deleteFilm={deleteFilm}
                setFilmToEdit={setFilmToEdit}
                setShowForm={setShowForm}
            />
            {showForm ? <FilmForm newId={props.films.length}
                addFilm={addFilm}
                modifyFilm={modifyFilm}
                filmToEdit={filmToEdit}
                setFilmToEdit={setFilmToEdit}
                setShowForm={setShowForm}
                cancel={() => setShowForm(false)} /> :
                <Button variant='primary'
                    className="btn btn-lg btn-primary"
                    onClick={() => {
                        setFilmToEdit();
                        setShowForm(true);
                    }
                    }>&#43;</Button>
            }
        </ul>);
}

export { Films };