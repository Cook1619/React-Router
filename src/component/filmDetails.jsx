import React from 'react';
import { Link } from 'react-router-dom';

let FilmDetails = ({ filmData }) => {
    return (
        <div className="card">
            <div className="card-header bg-info m-4 col-8 d-flex mx-auto ">
                <div className="card-body bg-dark text-white">{filmData.title}
                    <Link key={filmData} className="btn btn-info float-right" to={`/film/${filmData.id}`}> More Details</Link>
                </div>
            </div>
        </div>


    )
}

export default FilmDetails;