import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import dayjs from 'dayjs';
import { StarForm } from "./StarForm";

function FilmForm(props) {
  const [title, setTitle] = useState(props.filmToEdit ? props.filmToEdit.title : '');
  const [isFavorite, setIsFavorite] = useState(props.filmToEdit ? props.filmToEdit.isFavorite : false);
  const [dateWatched, setDateWatched] = useState(props.filmToEdit ? dayjs(props.filmToEdit.watchDate).format('YYYY-MM-DD') : dayjs());
  const [rating, setRating] = useState(props.filmToEdit ? props.filmToEdit.rating : 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // VALIDATION!
    const starEmpty = '<svg id="empty-star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg> ';
    const starFilled = '<svg id="filled-star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg> ';
    let staricon = '';
    for (let i = 0; i < 5; i++) {
      const starNow = (i < rating) ? starFilled : starEmpty;
      staricon += starNow;
  }
    if (props.filmToEdit === undefined) {
      const filmAdd = { id: props.newId, title: title, isFavorite: isFavorite, watchDate: dayjs(dateWatched).format('YYYY-MM-DD'), rating: rating, star: staricon };
      props.addFilm(filmAdd);
      props.cancel();
    } else {
      const filmEdit = { id: props.filmToEdit.id, title: title, isFavorite: isFavorite, watchDate: dayjs(dateWatched).format('YYYY-MM-DD'), rating: rating, star: staricon };
      props.modifyFilm(filmEdit);
      props.cancel();

    }
  }


  return (
    <Form onSubmit={handleSubmit}>
     <h1 className="mb-2">Add film here:</h1> 
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