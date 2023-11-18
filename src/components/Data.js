import React, {useEffect, useState} from "react";
// import { json } from "stream/consumers";


function Data(){
    const [data, setData] = useState({
        message: '', 
        text:''
    })

    useEffect(()=>{
        fetch('/api')
        .then((res)=>res.json()).then((data)=>setData({
            ...data, message: data.message, text: data.text
        }))
    },[])
    return(
        <>
        <h1>{data.message}</h1>
        <h1>{data.text}</h1>
        </>
    )
}

export default Data