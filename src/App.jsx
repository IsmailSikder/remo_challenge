import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Auth from './components/Auth';
import Theater from './components/Theater';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Auth} />
          <Route exact={true} path='/theater' component={Theater} />
        </Switch>
      </Router>
  );
};

export default App;
