import React, { useEffect, createContext,useReducer,useContext } from "react";
import "./App.css";
import NavBar from "./component/screens/NavBar";
import {BrowserRouter,Route,Switch,useHistory} from "react-router-dom";
import Home from "./component/screens/Home";
import Login from "./component/screens/Login";
import Register from "./component/screens/Register";
import Profile from "./component/screens/Profile";
import CreatePost from "./component/screens/CreatePost";
import {reducer,initialState} from './reducers/userReducer';
export const UserContext = createContext();


const Routing = ()=>{
  const history =useHistory()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')
    }else{
      history.push('/login')
    }
  },[])
  return(
    <Switch>
    <Route exact path="/">
    <Home />
  </Route>
  <Route path="/login">
    <Login />
  </Route>
  <Route path="/register">
    <Register />
  </Route>
  <Route path="/profile">
    <Profile />
  </Route>
  <Route path="/createpost">
    <CreatePost />
  </Route>
  </Switch>
  )
}

function App() {
  const [state,dispatch ]= useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
