import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const Base_URL = 'https://ghibliapi.herokuapp.com/films';
class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }
    componentDidMount = async () => {
        try {
            let res = await fetch(`${Base_URL}`);
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
                <h1 className="text-center">Films</h1>
                <ul>
                    {this.state.films.map((film) => {
                        let URLDest = "/film/" + film.id;
                        return (
                            <div>
                                <Link to={URLDest} key={film.id}><h4 className="mt-4">{film.title}</h4></Link>
                                <p>{film.description}</p>
                            </div>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}

export default Films;