import React, { memo } from "react"
import ProfileM from '../components/profiles/ProfileM'
import './message.css'
import {AiOutlineHeart as HeartOutline} from 'react-icons/ai'
import {MdTagFaces as Face} from 'react-icons/md'
import {SlPicture as Pic} from 'react-icons/sl'
const data =[
    {
        img:'https://images.pexels.com/photos/16010173/pexels-photo-16010173.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Samuel',
        msg:'Come lets go',
        time:'55 min'
        
    },
    {
        img:'https://images.pexels.com/photos/16010173/pexels-photo-16010173.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Samuel',
        msg:'Come lets go',
        time:'55 min'
        
    },
    {
        img:'https://images.pexels.com/photos/16010173/pexels-photo-16010173.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Samuel',
        msg:'Come lets go',
        time:'55 min'
        
    }
]


function Message(){
    const profile = data.map(item=><li>
        <ProfileM data={item}/>
        </li>)
    return(
        <div id="m-c">
            {/* <h1>Message</h1> */}
            <div id="m-chat">
                <ul>
                    {profile}
                </ul>
            </div>
            <div id="m-text">
                <div id="m-icon-input">

                <Face/>
                <input placeholder="msg"></input>
                <Pic/>
                <HeartOutline/>
                </div>
            </div>
        </div>
    )
}

export default memo(Message)