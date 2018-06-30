import React, { Component, Fragment } from 'react';

const Base_URL = 'https://ghibliapi.herokuapp.com/people/';

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: []
        }
    }

    componentDidMount = async () => {
        try {
            let res = await fetch(`${Base_URL}` + this.props.match.params.id)
            let data = await res.json();
            this.setState({
                person: data,
            })
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <Fragment>
                <div className="card">
                    <h3 className="card-header bg-info col-12 mt-4 text-center">Name: {this.state.person.name}</h3>
                    <div className="card-body">Gender: {this.state.person.gender}</div>
                    <div className="card-body">Age: {this.state.person.age}</div>
                    <div className="card-body">Eye Color: {this.state.person.eye_color}</div>
                    <div className="card-body">Hair Color: {this.state.person.hair_color}</div>
                </div>
            </Fragment>
        )
    }
}
 export default Person;
