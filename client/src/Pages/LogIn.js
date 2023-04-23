import React, { useState } from "react"

function LogIn(){
    const[email,setEmail]= useState()
    const[pass,setPass]= useState()
    return(
        <div>
            <h1>Log In</h1>
            <form>
                <label>Email</label>
                <br></br>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="text" onChange={(e)=>{setPass(e.target.value)}} value={pass}></input>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default LogIn