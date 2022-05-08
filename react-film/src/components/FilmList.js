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
                favoriteChange={props.favoriteChange}
                ratingChange={props.ratingChange}
                
            />
            );
        case "Favorite":
            return props.films.filter(f => f.isFavorite)
                .map(f => <FilmRow
                    film={f}
                    key={f.id}
                    deleteFilm={props.deleteFilm}
                    favoriteChange={props.favoriteChange}
                    ratingChange={props.ratingChange}
                />);
        case "Best Rated":
            return props.films.filter(f => f.rating === 5)
                .map(f => <FilmRow 
                    film={f}
                    key={f.id}
                    deleteFilm={props.deleteFilm}
                    favoriteChange={props.favoriteChange}
                    ratingChange={props.ratingChange}
                />);
        case "Seen since Last Month":
            return props.films.filter(f => dayjs(f.watchDate).isAfter(dayjs().subtract(1, 'month')) && f.watchDate !== undefined)
                .map(f => <FilmRow film={f}
                    key={f.id}
                    deleteFilm={props.deleteFilm}
                    favoriteChange={props.favoriteChange}
                    ratingChange={props.ratingChange}
                     />);
        case "Unseen":
            return props.films.filter(f => (f.watchDate === undefined || (!dayjs(f.watchDate).isValid())))
                .map(f => <FilmRow film={f}
                    key={f.id}
                    deleteFilm={props.deleteFilm}
                    favoriteChange={props.favoriteChange}
                    ratingChange={props.ratingChange}
                     />);
        default:
            return props.films.map(f => <FilmRow film={f}
                key={f.id}
                deleteFilm={props.deleteFilm}
                favoriteChange={props.favoriteChange}
                ratingChange={props.ratingChange}
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
                <Form.Check
                    type="checkbox"
                    label={"Favorite"}
                    checked={props.film.isFavorite}
                    onChange={() => props.favoriteChange(props.film.id, !props.film.isFavorite)} >
                </Form.Check>
            </div>

            <div className="col-2">
                {
                    ((props.film.watchDate === undefined) || (!dayjs(props.film.watchDate).isValid())) ? "NEVER" : dayjs(props.film.watchDate).format('YYYY-MM-DD')
                }
            </div>

            {/*<div className="col-2">
                <div dangerouslySetInnerHTML={{ __html: props.film.star }} />
            </div>*/}
            <div className="col-2">
                <Star ratingChange={props.ratingChange} id={props.film.id} rating={props.film.rating} num={1} />
                <Star ratingChange={props.ratingChange} id={props.film.id} rating={props.film.rating} num={2} />
                <Star ratingChange={props.ratingChange} id={props.film.id} rating={props.film.rating} num={3} />
                <Star ratingChange={props.ratingChange} id={props.film.id} rating={props.film.rating} num={4} />
                <Star ratingChange={props.ratingChange} id={props.film.id} rating={props.film.rating} num={5} />
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

function Star(props) {
    return (props.num <= props.rating ?
        <a onClick={() => {
            props.ratingChange(props.id,props.num);
        }}>
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="primary"
                className="bi bi-star-fill" viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
        </a> :
        <a onClick={() => {
            props.ratingChange(props.id,props.num);
        }}>
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                stroke="black"
                fill="white"
                className="bi bi-star-fill" viewBox="0 0 16 16">
                <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
        </a>
    );
}

export { FilmList }