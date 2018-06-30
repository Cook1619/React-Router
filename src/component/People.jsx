import React, { Component, Fragment } from 'react';
import PersonDetails from './PersonDetails';
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
        let peopleList = this.state.people.map((person) =>{
            return <PersonDetails key={person.id} PersonData={person} />
        })
        return (
            <Fragment>
                <div className="jumbotron">
                    <h1 className="text-center display-4">People</h1>
                    <hr className="my-4"/>
                </div>
                {peopleList}
            </Fragment>
        );
    }
}

export default People;