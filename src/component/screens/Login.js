import React, { useState,useContext } from "react";
import { Link,useHistory} from "react-router-dom";
import {UserContext} from '../../App'
import M from 'materialize-css';

const Login = ()=>{

    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")

    const PostData = ()=>{
        console.log("test")
        fetch('/signin',{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
        }).then(res=>res.json())
        .then(data=>{
         if(data.error){
            M.toast({html: data.error,classes:"#e53935 red darken-1"})
         }
         else{
            localStorage.setItem('jwt',data.token)
            localStorage.setItem('user',JSON.stringify(data.user))
            dispatch({type:"USER",payload:data.user})
            M.toast({html: "User Login Successfully",classes:"#388e3c green darken-2"})
           // console.log(data)
            history.push('/')
         }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="mycard">
        <div className="card auth-card input-field">
          <h2>Instagram</h2>
          <input
          type="text"
          placeholder="email"
          value={email}
          onChange= {(e)=>setEmail(e.target.value)}
          />
          <input
          type="password"
          placeholder="password"
          value={password}
          onChange= {(e)=>setPassword(e.target.value)}
          />
          <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
          onClick={()=>PostData()}>
              Login
          </button>
          <h5>
              <Link to="/register">Dont have an account ?</Link>
          </h5>
          
  
      </div>
    </div>
    )
}

export default Login