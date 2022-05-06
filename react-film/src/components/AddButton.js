import { FilmForm } from "./FilmForm";

function AddButton(props) {
    return (
        <button type = "button"
                className = "btn btn-lg btn-primary fixed-right-bottom">&#43;
                onClick = {<FilmForm newId={props.newId}
                                     addFilm={props.addFilm}
                                     modifyFilm={props.modifyFilm}
                                     filmToEdit={props.filmToEdit}
                                     setFilmToEdit={props.setFilmToEdit}
                                     cancel={() => props.setShowForm(false)}
                />}
        >&#43;</button>
    );
}

export { AddButton }