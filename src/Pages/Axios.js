import { useEffect, useState } from "react"
import axios from 'axios'

function LogIn(){
    const[data, setData]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/user').then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[data])
    return(
        <div>
            <h1>Log In</h1>
            <h1>Message: {data.msg}</h1>
            <form action="" >
                <label>Email</label>
                <input></input>
                <label>Password</label>
                <input></input>
                <input type="submit">Log In</input>
            </form>
        </div>
    )
}

export default LogIn