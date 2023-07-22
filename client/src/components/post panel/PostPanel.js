import React from "react";
import {AiFillHeart as Heart} from 'react-icons/ai'
import {FaComment as Comment} from 'react-icons/fa'
import './explore.css'
function PostPanel({data}){
    const{url,commentNum,imgName,heartNum,} = data ||{}
    return(
        <div style={{
            backgroundImage:`url(${url})`
        }} id="explore-container">
            <div id="e-overlay-icons">
                <ul id="e-ul">
                    <li id="e-li">
                        <Heart fill="white" className="e-icon" />
                        <h5>{heartNum}</h5>
                        </li>
                    <li id="e-li">
                        <Comment fill="white" className="e-icon"/>
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


export default PostPanel