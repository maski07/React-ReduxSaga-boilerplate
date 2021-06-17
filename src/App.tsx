// import React from 'react';
// import logo from './Images/logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import Routes from './Routes/Routes';
import history from './Routes/History';

function App(): JSX.Element {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Router history={history}>
        {/* <MaterialSnackbar /> */}
        {/* <Navbar /> */}
        {<Routes />}
      </Router>
    </div>
  );
}

export default App;
