import React, { Component } from 'react';
import People from './component/People'
import Films from './component/Films'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link to="/">Home</Link>
          <Link to="/films">Films</Link>
          <Link to="/people">People</Link>
          <Switch>
           
            <Route exact path="/films" component={Films}/>
            <Route exact path="/people" component={People}/>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App;
