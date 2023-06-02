import React, { useState } from "react";
import { Link,useHistory} from "react-router-dom";
import M from 'materialize-css';


const Register = ()=>{
    const history = useHistory()
    const [name,setName]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")

    const PostData = ()=>{
        fetch('/register',{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
        }).then(res=>res.json())
        .then(data=>{
         if(data.error){
            M.toast({html: data.error,classes:"#e53935 red darken-1"})
         }
         else{
            M.toast({html: data.message,classes:"#388e3c green darken-2"})
            history.push('/login')
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
          placeholder="name" 
          value={name}
          onChange= {(e)=>setName(e.target.value)}
          />
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
          <div className="file-field input-field">
          <div className="btn #64b5f6 blue darken-1">
              <span>Upload pic</span>
              <input type="file"/>
          </div>
          <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
          </div>
          </div>
          <button className="btn waves-effect waves-light #64b5f6 blue darken-1" 
            onClick={()=>PostData()}>
              SignUP
          </button>
          <h5>
              <Link to="/login">Already have an account ?</Link>
          </h5>
      </div>
    </div>
    )
}

export default Register