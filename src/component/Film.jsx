import React, { Component, Fragment } from 'react';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films/';

class Film extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: []
        }
    }
    componentDidMount = async () => {
        try {
            let res = await fetch(`${BASE_URL} + props.match.params.id`);
            let data = await res.json();
            console.log(data);
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
                <h1>{this.state.film.title}</h1>
            </Fragment>
        )

    }
}

export default Film;