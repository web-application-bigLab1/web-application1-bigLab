import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "./components/FilmRoutes";


function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<AppRoute filter = "All"/>}/>
            <Route path = "/all" element = {<AppRoute filter = "All"/>}/>
            <Route path = "/fav" element = {<AppRoute filter = "Favorite"/>}/>
            <Route path = "/best" element = {<AppRoute filter = "Best Rated"/>}/>
            <Route path = "/last" element = {<AppRoute filter = "Seen since Last Month"/>}/>
            <Route path = "/unseen" element = {<AppRoute filter = "Unseen"/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
