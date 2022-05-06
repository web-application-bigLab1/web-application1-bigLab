import 'bootstrap/dist/css/bootstrap.min.css';

function SideBar(props) {
    return (
        <aside class="collapse d-md-block col-md-3 col-12 bg-light below-nav" id="left-sidebar">
            <div class="list-group list-group-flush">
                <a
                    href="#"
                    id="filter-all"
                    class="list-group-item list-group-item-action active"
                    onClick={props.filters[0]}
                >All</a>
                <a
                    href="#"
                    id="filter-favorites"
                    class="list-group-item list-group-item-action"
                    onClick={props.filters[1]}
                >Favorites</a>
                <a
                    href="#"
                    id="filter-best"
                    class="list-group-item list-group-item-action"
                    onClick = { props.filters[2] }
                >Best Rated</a>
                <a
                    href="#"
                    id="filter-seen-last-month"
                    class="list-group-item list-group-item-action"
                    onClick = { props.filters[3] }
                >Seen Last
                    Month</a>
                <a
                    href="#"
                    id="filter-unseen"
                    class="list-group-item list-group-item-action"
                    onClick = { props.filters[4] }
                >Unseen</a>
            </div>
        </aside>
    );
}

export {SideBar};