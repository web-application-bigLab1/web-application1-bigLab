import {Link} from "react-router-dom";

function AddButton(props) {
    return (
        <Link to = "/add" state = {{
            newId: props.newId
        }}>
            <button type="button"
                    className="btn btn-lg btn-primary fixed-right-bottom">&#43;
            </button>
        </Link>
    );
}

export { AddButton }