import './App.css';
// import { library } from './components/FilmsLibrary';
// import { Films } from './components/Films';
// import { NavBar } from "./widgets/NavBar";
// import { SideBar } from "./widgets/SideBar";
// import { useState } from "react";
// import { FilmFiltersTitle } from "./components/FilmFiltersTitle";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { AppRoute } from "./components/FilmRoutes";


function App() {

  // const [filmList, setFilmList] = useState(library.getFilms());
  // const [filter, setFilter] = useState("All");
  // const filters = FilmFiltersTitle(setFilter);
  //   const [filter, setFilter] = useState("All");
    // const filters = FilmFiltersTitle(setFilter);

  return (
    // <>
    //   <header>
    //     <NavBar></NavBar>
    //   </header>
    //   <div class="container-fluid">
    //     <div class="row vheight-100">
    //       <SideBar filters={filters} />
    //       <main className="col-md-9 col-12 below-nav">
    //         <h1 className="mb-2" id="filter-title">{filter}</h1>
    //         <ul className="list-group list-group-flush">
    //           <Films films={filmList} setFilmList={setFilmList} filter={filter}></Films>
    //         </ul>
    //       </main>
    //     </div>
    //   </div>
    // </>
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<AppRoute filter = "All"/>}/>
            <Route path = "/all" element = {<AppRoute filter = "All"/>}/>
            <Route path = "/fav" element = {<AppRoute filter = "Favorite"/>}/>
            <Route path = "/best" element = {<AppRoute filter = "Best rated"/>}/>
            <Route path = "/last" element = {<AppRoute filter = "Seen since Last Month"/>}/>
            <Route path = "/unseen" element = {<AppRoute filter = "Unseen"/>}/>
            {/*<Route path = "/" element = {<AppRoute/>}/>*/}
            {/*<Route path = "/:filter" element = {<AppRoute/>}/>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
