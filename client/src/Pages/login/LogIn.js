import React, { useContext, useState } from "react"
import axios from "axios"
import { Context } from "./Context"
function LogIn(){
    // const[email,setEmail]= useState()
    // const[pass,setPass]= useState()
    // const[name, setName]= useState('Sam')
    // const nameHandler =()=>{
    //     const info = {
    //         method:'POST',
    //         url:`http://127.0.0.1:5000/user/${name}`
    //     }
    //     axios()
    // }
    const {name, setName} = useContext(Context)
    // console.log(name[0])
    return(
        <div>
            
            <h1>{name}</h1>
            <form>
                {/* <label>Email</label>
                <br></br>
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="text" onChange={(e)=>{setPass(e.target.value)}} value={pass}></input>
                <br></br>
                <input type="submit"></input> */}
                {/* <label>{name}</label> */}
                <input type ='text' onChange={(e)=>{setName(e.target.value)}}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default LogIn