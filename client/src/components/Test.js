import React from "react";





function Test({data}){
    const{img,msg}=data || {}
    
    
    return(
        <>
        <img src={img} alt='img'></img>
        <h1>{msg}</h1>
        </>
    )
}



export default Test