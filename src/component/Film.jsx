import React from 'react';
import { Link } from 'react-router-dom';

const Film = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.filmData.title}</h5>
                <p className="card-text">{props.filmData.description}</p>
                <Link className="btn btn primary" to={`/films/${props.filmData.id}`}>Read More</Link>
            </div>
        </div>
    )
}

export default Film;