import React, { Fragment } from 'react';
import LOGO from '../assets/logo.png';

const HomePage = () => {
    return (
        <Fragment>
            <div className="jumbotron">
                <h1 className="text-center display-4">This is the Home Page!!</h1>
                <hr className="my-4" />
            </div>
            <img className="d-flex mx-auto m-5 p-5" src={LOGO} alt="Gross little bunny"/>
        </Fragment>
    )
}
    export default HomePage;