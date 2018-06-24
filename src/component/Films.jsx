import React, { Component, Fragment } from 'react';
import Film from './Film'
import { Link } from 'react-router-dom';


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
        let filmList = this.state.films.map((film) => {
            return <Film key={film.id} filmData={film} />
        });
        return (
            <Fragment>
                <div className="jumbotron">
                    <h1 className="text-center display-4">Films</h1>
                    <hr className="my-4" />
                </div>
                <div>{filmList}</div>
            </Fragment>

        )
    }
}

export default Films;