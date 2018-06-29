import React, { Component, Fragment } from 'react';

const Base_URL = 'https://ghibliapi.herokuapp.com/films/';

class Film extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: []
        }
    }
    componentDidMount = async () => {
        try {
            let res = await fetch(`${Base_URL}` + this.props.match.params.id);
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
                <div class="card">
                    <h3 class="card-header bg-info col-12 mt-4 text-center">Title: {this.state.film.title}</h3>
                    <div class="card-body">Director: {this.state.film.director}</div>
                    <div class="card-body">Release Date: {this.state.film.release_date}</div>
                    <div class="card-body">Producer: {this.state.film.producer}</div>
                    <div class="card-body">Plot: {this.state.film.description}</div>
                </div>
            </Fragment>
        )

    }
}

export default Film;