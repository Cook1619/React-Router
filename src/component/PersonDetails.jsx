import React from 'react';
import { Link} from 'react-router-dom';

let PersonDetails = ({PersonData}) => {
    return(
        <div className="card">
            <div className="card-header bg-info m-4 col-8 d-flex mx-auto ">
                <div className="card-body bg-dark text-white">{PersonData.name}
                    <Link key={PersonData} className="btn btn-info float-right" to={`/person/${PersonData.id}`}> More Details</Link>
                </div>
            </div>
        </div>
    )
}

export default PersonDetails;