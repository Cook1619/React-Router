import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Film from './Film';

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
            <div className="jumbotron">
                <h1 className="text-center display-4">Films</h1>
                    <hr className="my-4" />
                </div>
                <ul>
                    {this.state.films.map((film) => {
                        let URLDest = "/film/" + film.id;
                        return (
                            <div>
                                <Link to={URLDest} key={film.id}><h4 className="mt-4">{film.title}</h4></Link>
                                <p>{film.description}</p>
                                <Film movie={film.id} />
                            </div>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}

export default Films;