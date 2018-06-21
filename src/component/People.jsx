import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class People extends Component {

    componentDidMount = () => {

    }
    render() {
        return (
            <Router>
                <Fragment>
                    <h1>Hi</h1>
                </Fragment>
            </Router>
        )
    }
}

export default People;