import React from 'react';
import { Link } from 'react-router-dom';

let filmDetails = ({ filmData }) => {
    return (
        <div className="card">
            <div className="card-header bg-info m-4 col-8 d-flex mx-auto ">
                <div className="card-body bg-dark text-white">{filmData.title}
                    <Link key={filmData} className="text-light float-right" to={`/film/${filmData.id}`}> More Details</Link>
                </div>
            </div>
        </div>


    )
}

export default filmDetails;