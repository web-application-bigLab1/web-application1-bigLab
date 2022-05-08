import '../App.css';
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { FilmForm } from "./FilmForm";
import { FilmList } from "./FilmList";
import {Link} from "react-router-dom";
import {Container, Row} from "react-bootstrap";


function AppRoute(props) {

    return (
        <>
            <header>
                <NavBar />
            </header>
            <div className="container-fluid">
                <div className="row height-100">
                    <SideBar />
                    <main className="col-md-9 col-12 below-nav">
                        <h1 className="ms-3" id="filter-title">{props.filter}</h1>
                        <ul className="list-group list-group-flush" id="list-films">
                            <FilmList
                                films={props.films}
                                filter={props.filter}
                                deleteFilm={props.deleteFilm}
                            />
                        </ul>
                        <Link to="/add">
                            <button type="button"
                                className="btn btn-lg btn-primary fixed-right-bottom">&#43;
                            </button>
                        </Link>
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
                <NavBar />
            </header>
            <div className="container-fluid d-flex justify-content-center">
                <div id="ff-np" className="height-100">
                    <FilmForm
                        newId={props.newId}
                        addFilm={props.addFilm}
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
                <NavBar />
            </header>
            <div className="container-fluid d-flex justify-content-center">
                <div id="ff-np" className="height-100">
                    <FilmForm
                        modifyFilm={props.modifyFilm}
                    />
                </div>
            </div>
        </>
    );
}

function FourOFour() {
    return (
        <Container fluid>
            <Row>
                <h1>No, no, no. This is NOT a 404 Page.</h1>
            </Row>
            <Row className = "mt-2">
                <em>This only means you went out your way to *try* things. Adventurous aint'ya?</em>
            </Row>
            <Row className = "mt-2">
                <b>Here is your <Link to = "/">link</Link> to go back.</b>
            </Row>
        </Container>
    );
}

export { AppRoute, FilmFormEditRoute, FilmFormAddRoute,FourOFour }