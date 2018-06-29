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
                <div class="card">
                    <h3 class="card-header bg-info col-12 mt-4 text-center">Name: {this.state.person.name}</h3>
                    <div class="card-body">Gender: {this.state.person.gender}</div>
                    <div class="card-body">Age: {this.state.person.age}</div>
                    <div class="card-body">Eye Color: {this.state.person.eye_color}</div>
                    <div class="card-body">Hair Color: {this.state.person.hair_color}</div>
                </div>
            </Fragment>
        )
    }
}
 export default Person;
