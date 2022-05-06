import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainPage,DefaultRouter,EditRouter,FavoutiteRouter,BestRatedRouter,SeenLastMonthRouter,UnSeenRouter} from './components/Page';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { library } from './components/FilmsLibrary';
import {useState} from "react";
import { FilmFiltersTitle } from "./components/FilmFiltersTitle";


function App(prop){
  const [filmList, setFilmList] = useState(library.getFilms());
  const [filter, setFilter] = useState("All");
  const filters = FilmFiltersTitle(setFilter);
  let data=[[filmList, setFilmList],[filter, setFilter],filters];
  const edit = (data)=>{EditRouter(data);}
return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='*' element={<DefaultRouter/>}/>
    <Route path='edit' element={<EditRouter edit='data'/>}/>
    <Route path='/favourite' element={<FavoutiteRouter favourite='data'/>}/>
    <Route path='/bestRated' element={<BestRatedRouter bestRated='data'/>}/>
    <Route path='/seenLastMonth' element={<SeenLastMonthRouter seenLastMonth='data'/>}/>
    <Route path='/unSeen' element={<UnSeenRouter unSeen='data'/>}/>
  </Routes>
  </BrowserRouter>
);
}
export default App;

