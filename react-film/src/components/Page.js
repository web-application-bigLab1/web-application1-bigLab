import '../App.css';
import { library } from './FilmsLibrary';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Films } from './Films';
import { NavBar} from "../widgets/NavBar";
import {SideBar} from "../widgets/SideBar";
import {useState} from "react";
import { FilmFiltersTitle } from "./FilmFiltersTitle";

function MainPage(data) {

  const [filmList, setFilmList] = useState(library.getFilms());
  const [filter, setFilter] = useState("All");
  const filters = FilmFiltersTitle(setFilter);

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <div className = "container-fluid">
        <div className = "row vheight-100">
          <SideBar filters={filters} />
          <main className = "col-md-9 col-12 below-nav">
            <h1 className = "mb-2" id="filter-title">{filter}</h1>
            <ul className = "list-group list-group-flush">
              <Films films={filmList} setFilmList={setFilmList} filter={filter}></Films>
            </ul>
          </main>
        </div>
      </div>
    </>
  );
}
function BestRatedRouter(bestReated){
    return(MainPage(bestReated));
}
function SeenLastMonthRouter(seenLastMonth){
    return(MainPage(seenLastMonth));
}
function UnSeenRouter(unSeen){
    return(MainPage(unSeen));
}
function DefaultRouter(unSeen){
  return(MainPage(unSeen));
}
function EditRouter(data){
  return(MainPage(data));
}
function FavoutiteRouter(data){
  return(MainPage(data));
}
export {MainPage,DefaultRouter,EditRouter,FavoutiteRouter,BestRatedRouter,SeenLastMonthRouter,UnSeenRouter};