import React, { Component } from 'react';

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
                    type: 'movies'
                })
            } catch (e) {
                console.log(e);
            }
        }
    }

    render() {
        return (
            <React.Router>
                <React.Fragment>
                    <h1>Hi</h1>
                </React.Fragment>
            </React.Router>
        )
    }
}

export default Films;