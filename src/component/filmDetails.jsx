import React, { Component } from 'react';

class filmDetails extends Component {
    constructor(props){
        super(props)
    }
    
    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.match.params.title}</h5>
                    <p className="card-text">{this.props.match.params.description}</p>
                </div>
            </div>
        )
    }
}

export default filmDetails;