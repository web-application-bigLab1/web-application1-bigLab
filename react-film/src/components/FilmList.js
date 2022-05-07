import dayjs from "dayjs";
import { Button, Form } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

function FilmList(props) {
    switch (props.filter) {
        case "All":
            return props.films.map(f => <FilmRow
                film={f}
                key={f.id}
                deleteFilm={props.deleteFilm}
            />
            );
        case "Favorite":
            return props.films.filter(f => f.isFavorite)
                .map(f => <FilmRow
                    film={f}
                    key={f.id}
                    deleteFilm={props.deleteFilm}
                />);
        case "Best Rated":
            return props.films.filter(f => f.rating === 5)
                .map(f => <FilmRow film={f}
                    key={f.id}
                    deleteFilm={props.deleteFilm}
                />);
        case "Seen since Last Month":
            return props.films.filter(f => dayjs(f.watchDate).isAfter(dayjs().subtract(1, 'month')) && f.watchDate !== undefined)
                .map(f => <FilmRow film={f}
                    key={f.id}
                    deleteFilm={props.deleteFilm} />);
        case "Unseen":
            return props.films.filter(f => (f.watchDate === undefined || (!dayjs(f.watchDate).isValid())))
                .map(f => <FilmRow film={f}
                    key={f.id}
                    deleteFilm={props.deleteFilm} />);
        default:
            return props.films.map(f => <FilmRow film={f}
                key={f.id}
                deleteFilm={props.deleteFilm}
            />);
    }
}

function FilmRow(props) {
    return (
        <li className="d-flex justify-content-between list-group-item">
            <div className="col-3">
                {
                    props.film.isFavorite ?
                        <p className="favorite text-start">{props.film.title}</p> :
                        <p className="text-start">{props.film.title}</p>
                }
            </div>
            <div className="col-2">
                <Form.Check type="checkbox" label="Favorite" checked={props.film.isFavorite} />
            </div>
            <div className="col-2">
                {
                    ((props.film.watchDate === undefined) || (!dayjs(props.film.watchDate).isValid())) ? "NEVER" : dayjs(props.film.watchDate).format('YYYY-MM-DD')
                }
            </div>
            <div className="col-2">
                <div dangerouslySetInnerHTML={{ __html: props.film.star }} />
            </div>
            <div className="d-flex col-2 justify-content-end">
                <FilmActions deleteFilm={props.deleteFilm}
                    film={props.film} />
            </div>
        </li>
    );
}
function FilmActions(props) {
    return <>

        <Link to="/edit" state={{ filmToEdit: props.film }}>
            <Button variant="primary">
                <i className='bi bi-pencil-square'></i>
            </Button>
        </Link>
        &nbsp;
        <Button variant='danger' onClick={() => {
            props.deleteFilm(props.film.title)
        }}><i className='bi bi-trash3'></i></Button>

    </>
}

export { FilmList }
