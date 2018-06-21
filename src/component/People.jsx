import React, { Component, Fragment } from 'react';

const Base_URL = 'https://ghibliapi.herokuapp.com/people';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }
    componentDidMount = async () => {
        try {
            let res = await fetch(`${Base_URL}`);
            let data = await res.json();
            this.setState({
                people: data,
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Fragment>
                <h1>People</h1>
                <ul>
                    {this.state.people.map((people) => {
                        return (
                            <li key={people.id}>
                                {people.name}, 
                                {people.age}, 
                                {people.gender}
                            </li>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}

export default People;