import React from "react";
import {AiFillHeart as Heart} from 'react-icons/ai'
import {FaComment as Comment} from 'react-icons/fa'
import './explore.css'
function ExplorePanel({data}){
    const{img,commentNum,imgName,heartNum,} = data ||{}
    return(
        <div style={{
            backgroundImage:`url(${img})`
        }} id="explore-container">
            <div id="e-overlay-icons">
                <ul id="e-ul">
                    <li id="e-li">
                        <Heart fill="white" class="e-icon" />
                        <h5>{heartNum}</h5>
                        </li>
                    <li id="e-li">
                        <Comment fill="white" class="e-icon"/>
                        <h5>{commentNum}</h5>
                        </li>
                </ul>
            </div>
            <div id='img-container'>
            {/* <img id="e-img" src={img} alt={imgName}></img> */}
            </div>
        </div>
    )
}


export default ExplorePanel