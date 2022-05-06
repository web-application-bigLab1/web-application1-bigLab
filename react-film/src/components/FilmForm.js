import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import dayjs from 'dayjs';
import { StarForm } from "./StarForm";

function FilmForm(props) {
  const [title, setTitle] = useState(props.filmToEdit ? props.filmToEdit.title : '');
  const [isFavorite, setIsFavorite] = useState(props.filmToEdit ? props.filmToEdit.isFavorite : false);
  const [dateWatched, setDateWatched] = useState(props.filmToEdit ? dayjs(props.filmToEdit.watchDate).format('YYYY-MM-DD') : dayjs());
  const [rating, setRating] = useState(props.filmToEdit ? props.filmToEdit.rating : 5);

  const handleSubmit = (event) => {
    event.preventDefault();
    const film = { id: props.newId, title: title, isFavorite: isFavorite, dateWatched: dayjs(dateWatched).format('YYYY-MM-DD'), rating: rating };
    // VALIDATION!
    if (props.filmToEdit === undefined) {
      props.addFilm(film);
      props.cancel();
    } else
      props.modifyFilm(props.filmToEdit.id, film);
    props.filmToEdit.updateStar();
    props.cancel();
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          required={true}
          minLength={1}
          maxLength={50}
          value={title}
          onChange={event => setTitle(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label={"Favorite?"}
          checked={isFavorite}
          onChange={() => setIsFavorite(!isFavorite)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Watched date</Form.Label>
        <Form.Control type="date"
          value={dayjs(dateWatched).format('YYYY-MM-DD')}
          onChange={event => setDateWatched(dayjs(event.target.value).format('YYYY-MM-DD'))} />
      </Form.Group>
      {/*<Form.Group className="mt-3 mb-3">*/}
      {/*  <Form.Label>Rating</Form.Label>*/}
      {/*  <Form.Control type="number"*/}
      {/*                min={0}*/}
      {/*                max={5}*/}
      {/*                value={rating}*/}
      {/*                onChange={event => {*/}
      {/*                    setRating(event.target.value);*/}
      {/*                }}/>*/}
      {/*</Form.Group>*/}
      <Form.Group className="mt-3 mb-3">
        <Form.Label>Rating</Form.Label>
        <StarForm setRating={setRating} rating={rating} />
      </Form.Group>
      <Button variant="primary" type="submit">Save</Button>
      <Button className="ms-2" variant="danger" onClick={props.cancel}>Cancel</Button>

    </Form>
  )


}

export { FilmForm };