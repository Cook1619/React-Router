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
                <div className="jumbotron">
                    <h1 className="text-center display-4">People</h1>
                    <hr className="my-4"/>
                </div>
                <ul>
                    {this.state.people.map((people) => {
                        return (
                            <div key={people.id}>
                                <h4 className="my-4">{people.name}</h4>
                                <ul>
                                    <li>{people.age}</li>
                                    <li>{people.gender}</li>
                                </ul>
                            </div>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
}

export default People;