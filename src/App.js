import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import People from './component/People.jsx'
import Films from './component/Films.jsx'
import HomePage from './component/HomePage.jsx'
import Film from './component/Film.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link to="/"><button className="d-flex mx-auto btn btn-ghost center-block m-4">Home</button></Link>
          <Link to="/films"><button className="d-flex mx-auto btn btn-ghost center-block m-4">View Films</button></Link>
          <Link to="/people"><button className="d-flex mx-auto btn btn-ghost center-block m-4">View People</button></Link>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/people" component={People} />
            <Route exact path="/films/:id" component={Film} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App;
