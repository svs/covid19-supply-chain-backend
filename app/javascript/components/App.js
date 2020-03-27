import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HelloWorld from './HelloWorld'


class App extends React.Component {
  render () {
    return (
        <Router>
          <Switch>
            <Route exact path="/" render={() => ("Home!")} />
            <Route exact path="/hello" render={() => <HelloWorld greeting="Friend" />} />
          </Switch>
        </Router> 
    );
  }
}

export default App
