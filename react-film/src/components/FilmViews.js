import '../App.css';
import { Films } from './Films';
import { NavBar } from "../widgets/NavBar";
import { SideBar } from "../widgets/SideBar";
import { FilmForm } from "./FilmForm";

function AppRoute(props) {

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
                  <Films films = { props.films }
                         setFilmList = { props.setFilmList }
                         filter = { props.filter }
                         deleteFilm = { props.deleteFilm }
                         setFilmToEdit = { props.setFilmToEdit }/>
                </ul>
              </main>
            </div>
          </div>
        </>
    );
 }

function FilmFormAddRoute(props) {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <div className = "container-fluid d-flex justify-content-center">
                <div id = "ff-np" className = "height-100">
                    <FilmForm
                        newId = { props.newId }
                        addFilm = { props.addFilm }
                    />
                </div>
            </div>
        </>
    );
}

 function FilmFormEditRoute(props) {
     return (
        <>
            <header>
                <NavBar/>
            </header>
            <div className = "container-fluid d-flex justify-content-center">
                <div id = "ff-np" className = "height-100">
                    <FilmForm
                        modifyFilm = { props.modifyFilm }
                        filmToEdit = { props.filmToEdit }
                    />
                </div>
            </div>
        </>
    );
 }

export { AppRoute, FilmFormEditRoute, FilmFormAddRoute }