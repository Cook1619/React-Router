import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import People from './component/People.jsx'
import Films from './component/Films.jsx'
import HomePage from './component/HomePage.jsx'
import Film from './component/Film.jsx';
import Person from './component/Person.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <nav className="navbar navbar-dark bg-dark">
            <Link className="d-flex mx-auto btn btn-info center-block m-4" to="/">Home Page</Link>
            <Link className="d-flex mx-auto btn btn-info center-block m-4" to="/films">View Films</Link>
            <Link className="d-flex mx-auto btn btn-info center-block m-4" to="/people">View People</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/people" component={People} />
            <Route path="/film/:id" component={Film} />
            <Route path="/person/:id" component={Person} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App;
