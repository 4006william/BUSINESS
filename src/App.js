import React from 'react';
import Landing1 from './components/Landing1'
import Landing2 from './components/Landing2'
import LogIn from './components/LogIn'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ProtectedRoute} from './protected.route'
import './App.css';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path = "/" component={Landing1} />
      <ProtectedRoute exact path = "/landing2" component={Landing2} />
      <ProtectedRoute exact path = "/login" component={LogIn} />

      </BrowserRouter>
    </div>
  );
}

export default App;
