import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute, FilmFormAddRoute, FilmFormEditRoute, FourOFour } from "./components/FilmViews";
import { library } from "./components/FilmsLibrary";
import { FilmFunctions } from "./components/FilmFunctions";
import { useState } from "react";


function App() {

  const [filmList, setFilmList] = useState(library.getFilms());
  let filmFunctions = new FilmFunctions(filmList, setFilmList);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRoute filter="All"
          films={filmList}
          deleteFilm={filmFunctions.deleteFilm}
          favoriteChange={filmFunctions.favoriteChange}
          ratingChange={filmFunctions.ratingChange} />} />

        <Route path="/all" element={<AppRoute filter="All"
          films={filmList}
          deleteFilm={filmFunctions.deleteFilm}
          favoriteChange={filmFunctions.favoriteChange}
          ratingChange={filmFunctions.ratingChange} />} />

        <Route path="/favorite" element={<AppRoute filter="Favorite"
          films={filmList}
          deleteFilm={filmFunctions.deleteFilm}
          favoriteChange={filmFunctions.favoriteChange}
          ratingChange={filmFunctions.ratingChange} />} />

        <Route path="/best" element={<AppRoute filter="Best Rated"
          films={filmList}
          deleteFilm={filmFunctions.deleteFilm}
          favoriteChange={filmFunctions.favoriteChange}
          ratingChange={filmFunctions.ratingChange} />} />

        <Route path="/last" element={<AppRoute filter="Seen since Last Month"
          films={filmList}
          deleteFilm={filmFunctions.deleteFilm}
          favoriteChange={filmFunctions.favoriteChange}
          ratingChange={filmFunctions.ratingChange} />} />

        <Route path="/unseen" element={<AppRoute filter="Unseen"
          films={filmList}
          deleteFilm={filmFunctions.deleteFilm}
          favoriteChange={filmFunctions.favoriteChange}
          ratingChange={filmFunctions.ratingChange} />} />

        <Route path="/add" element={<FilmFormAddRoute newId={filmFunctions.assignNewId()}
          addFilm={filmFunctions.addFilm} />} />

        <Route path="/edit" element={<FilmFormEditRoute modifyFilm={filmFunctions.modifyFilm} />} />

        <Route path="*" element={<FourOFour />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
