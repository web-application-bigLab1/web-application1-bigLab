import { ListGroupFilters } from "./ListGroupFilters";
import {AddButton} from "./AddButton";

function Films(props) {
    return (<>
        <ul className="list-group list-group-flush" id="list-films">
            <ListGroupFilters
                films = { props.films }
                filter = { props.filter }
                deleteFilm = { props.deleteFilm }
                setFilmToEdit = { props.setFilmToEdit }
            />
        </ul>
            <AddButton newId = { props.films.length }
                       addFilm = { props.addFilm }
            />
            </>
    );
}

export { Films }