function StarForm(props) {
    return (<div className = "d-flex">
                <Star setRating = {props.setRating} rating = { props.rating } num = {1}/>
                <Star setRating = {props.setRating} rating = { props.rating } num = {2}/>
                <Star setRating = {props.setRating} rating = { props.rating } num = {3}/>
                <Star setRating = {props.setRating} rating = { props.rating } num = {4}/>
                <Star setRating = {props.setRating} rating = { props.rating } num = {5}/>
            </div>);
}

function Star(props) {
    return ( props.num <= props.rating ?
            <a onClick = {() => {
                props.setRating(props.num);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     fill = "primary"
                     className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            </a> :
            <a onClick = {() => {
                props.setRating(props.num);
            }}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     stroke = "black"
                     fill = "white"
                     className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            </a>
    );
}

export { StarForm }