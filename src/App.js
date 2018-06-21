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
          <Link to="/films">Films</Link>
          <Link to="/people">People</Link>
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
