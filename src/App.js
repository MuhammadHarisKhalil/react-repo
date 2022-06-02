import React from 'react';
import './App.css';
import './component/NavBar';
import NavBar from './component/NavBar';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./component/Home";
import Login from './component/Login';
import Register from './component/Register';
import Profile from './component/Profile';

function App() {
  return (
    <BrowserRouter>
  <NavBar/>
  <Route exact path="/">
  <Home/>
  </Route>
  <Route path="/login">
    <Login/>
  </Route>
  <Route path="/register">
    <Register/>
  </Route>
  <Route path="/profile">
    <Profile/>
  </Route>
  </BrowserRouter>
  );
}

export default App;
