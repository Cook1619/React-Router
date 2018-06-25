import React, { Component } from react;

class filmDetails extends Component {
    render() {
        return <h1>{this.props.match.params.title}</h1>
    }
}

export default filmDetails;