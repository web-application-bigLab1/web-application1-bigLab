import { ListGroupFilters } from "./ListGroupFilters";
import { Button } from "react-bootstrap";
import { FilmForm } from "./FilmForm";
import { useState } from 'react';
import { library } from "./FilmsLibrary";

function Films(props) {

    const [showForm, setShowForm] = useState(false);
    const [filmToEdit, setFilmToEdit] = useState();

    const addFilm = (movie) => {
        props.setFilmList(library.addNewFilmByRow(movie.id, movie.title, movie.isFavorite, movie.dateWatched, movie.rating));
    }

    const modifyFilm = (id, nF) => {
        props.setFilmList(library.updateFilm(id, nF.title, nF.isFavorite, nF.dateWatched, nF.rating));
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
                <Button variant='success'
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