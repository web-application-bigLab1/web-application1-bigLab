import dayjs from "dayjs";
import { Button, Form } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

function ListGroupFilters(props) {
    switch(props.filter) {
        case "All" :
            return props.films.map(f => <FilmRow
                film = { f }
                key = { f.id }
                deleteFilm={props.deleteFilm}
                setShowForm = { props.setShowForm }
                setFilmToEdit = { props.setFilmToEdit }
                
                
                />
                );
        case "Favorite" :
            return props.films.filter(f => f.isFavorite)
                .map(f => <FilmRow
                    film = { f }
                    key = { f.id }
                    deleteFilm={props.deleteFilm}
                    setShowForm = { props.setShowForm }
                    setFilmToEdit = { props.setFilmToEdit }
                />);
        case "Best Rated" :
            return props.films.filter(f => f.rating === 5)
                .map(f => <FilmRow film = { f }
                                   key = { f.id }
                                   setFilmToEdit = { props.setFilmToEdit }
                                   deleteFilm={props.deleteFilm}
                                   setShowForm = { props.setShowForm }/>);
        case "Seen since Last Month" :
            return props.films.filter(f => dayjs(f.watchDate).isAfter(dayjs().subtract(1, 'month'))&& f.watchDate!==undefined)
                .map(f => <FilmRow film = { f }
                                   key = { f.id }
                                   deleteFilm={props.deleteFilm}
                                   setFilmToEdit = { props.setFilmToEdit }
                                   setShowForm = { props.setShowForm }/>);
        case "Unseen" :
            return props.films.filter(f => (f.watchDate === undefined||(!dayjs(f.watchDate).isValid())))
                .map(f => <FilmRow film = { f }
                                   key = { f.id }
                                   deleteFilm={props.deleteFilm}
                                   setFilmToEdit = { props.setFilmToEdit }
                                   setShowForm = { props.setShowForm }/>);
        default :
            return props.films.map(f => <FilmRow film = { f }
                                                 key = { f.id }
                                                 deleteFilm={props.deleteFilm}
                                                 setFilmToEdit = { props.setFilmToEdit }
                                                 setShowForm = { props.setShowForm }/>);
    }
}

function FilmRow(props) {
    return (
        <li className="d-flex justify-content-between list-group-item">
            <div className="col-3 justify-content-between">
                {
                    props.film.isFavorite ?
                    <p className="favorite text-start col-md-5 col-3">{props.film.title}</p> :
                    <p className="text-start col-md-5 col-3">{props.film.title}</p>
                }
            </div>
            <div className="col-2 justify-content-between">
                <Form.Check type="checkbox" label="Favorite" checked = { props.film.isFavorite }/>
            </div>
            <div className="col-2 justify-content-between">
                {
                   ( (props.film.watchDate === undefined)||(!dayjs(props.film.watchDate).isValid()))? "NEVER" : dayjs(props.film.watchDate).format('YYYY-MM-DD')
                }
            </div>
            <div className="col-2 justify-content-between">
                <div dangerouslySetInnerHTML={{__html: props.film.star}} />
            </div>
            <div className="col-2 justify-content-end">
             <FilmActions deleteFilm={props.deleteFilm}  setShowForm={props.setShowForm} setFilmToEdit={props.setFilmToEdit} film={props.film} />
            </div>
        </li>
    );
}
function FilmActions(props) {
    return <><Button variant='danger' onClick={() => {props.deleteFilm(props.film.title)}}><i className='bi bi-trash3'></i></Button>&nbsp;
           <Button variant = "primary" onClick = {() => {props.setShowForm(true); props.setFilmToEdit(props.film);}}><i className='bi bi-pencil-square'></i></Button></>
  }

export { ListGroupFilters }