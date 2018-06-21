import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import People from './component/People.jsx'
import Films from './component/Films.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link to="/">Home</Link>
          <Link to="/films"><button className="d-flex mx-auto btn btn-ghost center-block m-4">Films</button></Link>
          <Link to="/people"><button className="d-flex mx-auto btn btn-ghost center-block m-4">People</button></Link>
          <Switch>
            
            <Route exact path="/films" component={Films} />
            <Route exact path="/people" component={People} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App;
