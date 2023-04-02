import React, { memo } from "react"
import './profile.css'
import {TiDeleteOutline as Delete} from 'react-icons/ti'
const size = 30
function ProfileS({data}){
    const {name,caption, following,img} = data ||{}
    return(
        <div id="s-space">

            <div className="s-item">
                <div id="gradient-ring">
                    <div className="story">
                        {/* <img id="post-profile" alt="profile" src={item.profile}></img> */}
                        <img id="post-profile"  src={img} alt={img.toString}></img>
                    </div>
                </div>
            </div>
            <div>

                <div>
                    {name}
                </div>
                <ul>
                    <li>
                        <h5>{caption}</h5>
                        <h5>{following}</h5>
                    </li>
                </ul>
            </div>
            <button id="s-btn-delete"><Delete size={size}/></button>    
            </div>
    )
}

export default memo(ProfileS)