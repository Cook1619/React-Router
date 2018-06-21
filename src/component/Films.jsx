import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FilmList from './FilmList';

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
            console.log(data);
            this.setState({
                list: data,
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <h1>Films</h1>
                    <ul>
                        {this.state.data.map(data => {
                            <li key={this.state.data.id}>
                            {this.state.data.title}{this.state.data.description}
                            </li>
                        })}
                    </ul>
                </Fragment>
            </Router>
        )
    }
}

export default Films;