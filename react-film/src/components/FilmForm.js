import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import dayjs from 'dayjs';
import { Link, useNavigate, useLocation } from "react-router-dom";
import {StarForm} from "./StarForm";

function FilmForm(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState(location.state ? location.state.filmToEdit.title : '');
  const [isFavorite, setIsFavorite] = useState(location.state ? location.state.filmToEdit.isFavorite : false);
  const [dateWatched, setDateWatched] = useState(location.state ? dayjs(location.state.filmToEdit.watchDate).format('YYYY-MM-DD') : undefined);
  const [rating, setRating] = useState(location.state ? location.state.filmToEdit.rating : 0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!location.state) {
      const filmAdd = {
        id: undefined,
        title: title,
        isFavorite: isFavorite,
        watchDate: dayjs(dateWatched).format('YYYY-MM-DD'),
        rating: rating
      };
      props.addFilm(filmAdd);
    } else {
      const filmEdit = {
        id: location.state.filmToEdit.id,
        title: title,
        isFavorite: isFavorite,
        watchDate: dayjs(dateWatched).format('YYYY-MM-DD'),
        rating: rating
      };
      props.modifyFilm(filmEdit);
    }
    navigate('/');
  }

  return (
    <Form onSubmit={handleSubmit}>
      {location.state ? <h1 className="mb-2">Edit Film Here</h1> : <h1 className="mb-2">Add Film Here</h1>}
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          size="lg"
          required={true}
          minLength={1}
          maxLength={50}
          value={title}
          onChange={event => setTitle(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label={"Favorite"}
          checked={isFavorite}
          onChange={() => setIsFavorite(!isFavorite)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Watched date</Form.Label>
        <Form.Control
          type="date"
          size="lg"
          value={dayjs(dateWatched).format('YYYY-MM-DD')}
          onChange={event => setDateWatched(dayjs(event.target.value).format('YYYY-MM-DD'))} />
      </Form.Group>
      <Form.Group className="mt-3 mb-3">
        <Form.Label>Rating</Form.Label>
        <div className="d-flex">
          <StarForm setRating={ setRating } rating={ rating }/>
        </div>
      </Form.Group>
      <Button variant="primary" type="submit">Save</Button>
      <Link to="/">
        <Button className="ms-2" variant="danger">Cancel</Button>
      </Link>

    </Form>
  )
}

export { FilmForm };