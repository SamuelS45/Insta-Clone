import {AiFillHeart as Heart} from 'react-icons/ai'
import {AiOutlineHeart as HeartOutline} from 'react-icons/ai'
import {BiPaperPlane as Share} from 'react-icons/bi'
import {FaRegComment as Comment} from 'react-icons/fa'
import {BsBookmark as Save} from 'react-icons/bs'
import {BsBookmarkFill as SaveFill} from 'react-icons/bs'
import {BsThreeDotsVertical as Menu} from 'react-icons/bs'
import { useState } from 'react'
import './reel.css'


function Reel({data}){

    const{vidSrc,heartNum,commentNum,save} = data ||{}

    // const[saveIcon,setSaveIcon]=useState(save)
    return(
        <div id='reel'>
            <video controls>
                <source src={vidSrc} type="video/mp4"></source>
                <source src={ vidSrc } type="video/ogg" />
            </video>
            <ul>
                <li id='r-li'>
                    <HeartOutline/>
                    <h5>{heartNum}</h5>
                </li>
                <li id='r-li'>
                    <Comment/>
                    <h5>{commentNum}</h5>
                </li>
                <li id='r-li'><Share/></li>
                <li id='r-li'><Save/></li>
                <li id='r-li'><Menu size={20} style = {{
                    transition:'.1s',
                    transform: 'rotate(90deg)'}}/></li>
            </ul>
            {/* <h5>{save}</h5> */}
        </div>
    )
}


export default Reel