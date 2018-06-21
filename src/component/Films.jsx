import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
const Base_URL = 'https://ghibliapi.herokuapp.com/films';
class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }

        this.componentDidMount = async () => {
            fetch("https://ghibliapi.herokuapp.com/films")
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

export default Films;