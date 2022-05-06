import './App.css';
import { library } from './components/FilmsLibrary';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Films } from './components/Films';
import { NavBar } from "./widgets/NavBar";
import { SideBar } from "./widgets/SideBar";
import { useState } from "react";
import { FilmFiltersTitle } from "./components/FilmFiltersTitle";


function App() {

  const [filmList, setFilmList] = useState(library.getFilms());
  const [filter, setFilter] = useState("All");
  const filters = FilmFiltersTitle(setFilter);

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <div class="container-fluid">
        <div class="row vheight-100">
          <SideBar filters={filters} />
          <main className="col-md-9 col-12 below-nav">
            <h1 className="mb-2" id="filter-title">{filter}</h1>
            <ul className="list-group list-group-flush">
              <Films films={filmList} setFilmList={setFilmList} filter={filter}></Films>
            </ul>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
