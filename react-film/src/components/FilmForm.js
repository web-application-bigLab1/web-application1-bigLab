import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import dayjs from 'dayjs';
import { Link, useNavigate, useLocation } from "react-router-dom";

function FilmForm(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState(location.state.filmToEdit ? location.state.filmToEdit.title : '');
  const [isFavorite, setIsFavorite] = useState(location.state.filmToEdit ? location.state.filmToEdit.isFavorite : false);
  const [dateWatched, setDateWatched] = useState(location.state.filmToEdit ? dayjs(location.state.filmToEdit.watchDate).format('YYYY-MM-DD') : dayjs());
  const [rating, setRating] = useState(location.state.filmToEdit ? location.state.filmToEdit.rating : 0);

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
    if (!location.state.filmToEdit) {
      const filmAdd = {
        id: location.state.newId,
        title: title,
        isFavorite: isFavorite,
        watchDate: dayjs(dateWatched).format('YYYY-MM-DD'),
        rating: rating,
        star: staricon
      };
      props.addFilm(filmAdd);
    } else {
      const filmEdit = {
        id: location.state.filmToEdit.id,
        title: title,
        isFavorite: isFavorite,
        watchDate: dayjs(dateWatched).format('YYYY-MM-DD'),
        rating: rating,
        star: staricon
      };
      props.modifyFilm(filmEdit);
    }
    navigate('/');
  }


  return (
    <Form onSubmit={handleSubmit}>
      {location.state.filmToEdit ? <h1 className="mb-2">Edit Film Here</h1> : <h1 className="mb-2">Add Film Here</h1>}
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
          label={"Favorite?"}
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
          <Star setRating={setRating} rating={rating} num={1} />
          <Star setRating={setRating} rating={rating} num={2} />
          <Star setRating={setRating} rating={rating} num={3} />
          <Star setRating={setRating} rating={rating} num={4} />
          <Star setRating={setRating} rating={rating} num={5} />
        </div>
      </Form.Group>
      <Button variant="primary" type="submit">Save</Button>
      <Link to="/">
        <Button className="ms-2" variant="danger">Cancel</Button>
      </Link>

    </Form>
  )

}
function Star(props) {
  return (props.num <= props.rating ?
    <a onClick={() => {
      props.setRating(props.num);
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
      props.setRating(props.num);
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

export { FilmForm };