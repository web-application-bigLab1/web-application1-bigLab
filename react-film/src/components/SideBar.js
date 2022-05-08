import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function SideBar() {
    return (
        <aside className = "collapse d-md-block col-md-3 col-12 bg-light below-nav" id="left-sidebar">
            <div className = "list-group list-group-flush">
                <Link to = "/all"
                    id="filter-all"
                    className = "list-group-item list-group-item-action active"
                >All</Link>
                <Link to = "/favorite"
                    id="filter-favorites"
                    className = "list-group-item list-group-item-action"
                >Favorites</Link>
                <Link to = "/best"
                    id="filter-best"
                    className = "list-group-item list-group-item-action"
                >Best Rated</Link>
                <Link to = "/last"
                    id="filter-seen-last-month"
                    className = "list-group-item list-group-item-action"
                >Seen Last
                    Month</Link>
                <Link to = "/unseen"
                    id="filter-unseen"
                    className = "list-group-item list-group-item-action"
                >Unseen</Link>
            </div>
        </aside>
    );
}

export {SideBar};