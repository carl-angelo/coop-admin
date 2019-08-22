import React from 'react';
import Home from './views/home';
import Login from './components/login';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
