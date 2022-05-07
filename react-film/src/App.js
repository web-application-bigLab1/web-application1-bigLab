import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute, FilmFormAddRoute, FilmFormEditRoute } from "./components/FilmViews";
import { library } from "./components/FilmsLibrary";
import { FilmFunctions } from "./components/FilmFunctions";
import { useState } from "react";
import {FourOFour} from "./components/404";

function App() {

    const [filmList, setFilmList] = useState(library.getFilms());
    const [filmToEdit, setFilmToEdit] = useState();
    let filmFunctions = new FilmFunctions(library, filmList, setFilmList, filmToEdit, setFilmToEdit);

  return (
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<AppRoute filter = "All"
                                                   films = { filmList }
                                                   deleteFilm = { filmFunctions.deleteFilm }/>}/>
            <Route path = "/all" element = {<AppRoute filter = "All"
                                                      films = { filmList }
                                                      deleteFilm = { filmFunctions.deleteFilm }/>}/>
            <Route path = "/fav" element = {<AppRoute filter = "Favorite"
                                                      films = { filmList }
                                                      deleteFilm = { filmFunctions.deleteFilm }/>}/>
            <Route path = "/best" element = {<AppRoute filter = "Best Rated"
                                                       films = { filmList }
                                                       deleteFilm = { filmFunctions.deleteFilm }/>}/>
            <Route path = "/last" element = {<AppRoute filter = "Seen since Last Month"
                                                       films = { filmList }
                                                       deleteFilm = { filmFunctions.deleteFilm }/>}/>
            <Route path = "/unseen" element = {<AppRoute filter = "Unseen"
                                                         films = { filmList }
                                                         deleteFilm = { filmFunctions.deleteFilm }/>}/>
            <Route path = "/add" element = {<FilmFormAddRoute newId = { filmList.length }
                                                               addFilm = { filmFunctions.addFilm }/>}/>
            <Route path = "/edit" element = {<FilmFormEditRoute modifyFilm = { filmFunctions.modifyFilm }
                                                                filmToEdit = { filmToEdit }/>}/>
            <Route path = "*" element = {<FourOFour />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
