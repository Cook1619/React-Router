import React, { Component, Fragment } from 'react';

const BASE_URL = 'https://ghibliapi.herokuapp.com/films';

class Film extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: []
        }
    }
    componentDidMount = async () => {
        try {
            let res = await fetch(`${Base_URL} + props.match.params.id`);
            let data = await res.json();
            this.setState({
                films: data,
            })
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <Fragment>
            {this.state.film.title}
            </Fragment>
        )

    }
}
