import React from 'react';
import './App.css';
import NavBar from './component/screens/NavBar';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./component/screens/Home";
import Login from './component/screens/Login';
import Register from './component/screens/Register';
import Profile from './component/screens/Profile';
import CreatePost from './component/screens/CreatePost';

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
  <Route path="/createpost">
    <CreatePost/>
  </Route>
  </BrowserRouter>
  );
}

export default App;
