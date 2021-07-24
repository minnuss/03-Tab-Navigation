import React from 'react';

// React Router explanation on link:
// https://reactrouter.com/web/guides/quick-start
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './Header'
import Routes from './Routes'

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />

          <div className="viewport">
            <Routes />
          </div>
        </div >
      </div >
    </Router >
  );
}

export default App;
