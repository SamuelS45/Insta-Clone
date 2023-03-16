import React from "react";
import {AiFillHeart as Heart} from 'react-icons/ai'


function ExplorePanel({data}){
    const{img,commentNum,imgName} = data ||{}
    return(
        <div id="explore-container">
            <img id="e-img" src={img} alt={imgName}></img>
            <div id="e-overlay-icons">
                <ul id="e-ul">
                    <li id="e-li"><Heart/></li>
                    <li id="e-li"><h5>{commentNum}</h5></li>
                </ul>
            </div>
        </div>
    )
}


export default ExplorePanel