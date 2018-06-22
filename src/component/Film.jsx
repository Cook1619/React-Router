import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Base_URL = 'https://ghibliapi.herokuapp.com/films';
class Film extends Component {
    constructor(props) {
        super(props);
        console.log(props.id)
        this.state = {
            film: []
        }
    }
    componentDidMount = async () => {
        try {
            let res = await fetch(`${Base_URL}/id`);
            let data = await res.json();
            this.setState({
                film: data,
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Fragment>
                
            </Fragment>
        );
    }
}

export default Film;