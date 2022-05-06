import '../App.css';
import { library } from './FilmsLibrary';
import { Films } from './Films';
import { NavBar } from "../widgets/NavBar";
import { SideBar } from "../widgets/SideBar";
import { useState } from "react";

function AppRoute(props) {

    const [filmList, setFilmList] = useState(library.getFilms());

    return (
        <>
          <header>
            <NavBar/>
          </header>
          <div className = "container-fluid">
            <div className = "row height-100">
              <SideBar/>
              <main className  = "col-md-9 col-12 below-nav">
                <h1 className  = "mb-2" id="filter-title">{ props.filter }</h1>
                <ul className  = "list-group list-group-flush">
                  <Films films = { filmList }
                         setFilmList = { setFilmList }
                         filter = { props.filter }/>
                </ul>
              </main>
            </div>
          </div>
        </>
    );
 }

export { AppRoute }