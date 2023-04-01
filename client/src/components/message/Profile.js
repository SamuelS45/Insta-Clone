import React from "react"
import './profile.css'

function Profile({data}){
    const {name,msg, time,img} = data ||{}
    return(
        <div id="p-c">
            <div id="p-img-c" style={{
                // backgroundImage:`url(${img}`
            }}>

            <img id="p-img" src={img} alt={img}></img>
            </div>
            <div>

            <h5>{name}</h5>
            </div>
            <div>
                <h5>{msg}</h5>
                <h1>{time}</h1>
            </div>
        </div>
    )
}

export default Profile