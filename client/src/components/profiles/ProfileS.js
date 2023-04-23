import React, { memo } from "react"
import './profileS.css'
import {TiDeleteOutline as Delete} from 'react-icons/ti'
import {BsDot as Dot } from 'react-icons/bs'
const size = 30
function ProfileS({data}){
    const {name,caption, following,img} = data ||{}
    return(
        <div id="s-container">

            <div className="s-item">
                <div id="gradient-ring">
                    <div className="story">
                        {/* <img id="post-profile" alt="profile" src={item.profile}></img> */}
                        <img id="post-profile"  src={img} alt={name}></img>
                    </div>
                </div>
                <div className="s-details-container">
                    <strong>
                        {name}
                    </strong>
                    
                    <div className="s-details">
                            <h5>{caption}</h5>
                            {/* <div></div> */}
                            <Dot/>
                            <h5>{following}</h5>
                    </div>
                </div>
            </div>
            <div className="s-delete-container">
            <button id="s-btn-delete"><Delete size={size}/></button>    
            </div>
            </div>
    )
}

export default memo(ProfileS)