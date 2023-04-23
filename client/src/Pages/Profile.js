import React, { useState } from "react";
import ProfileP from "../components/profiles/ProfileP";
import ExplorePanel from "../components/explore/ExplorePanel";
import {BsBookmark as Save} from 'react-icons/bs'
import {BsPersonBadge as Tag} from 'react-icons/bs'
import {GrGrid as Grid} from 'react-icons/gr'
import './profilePage.css'
import { NavLink } from "react-router-dom";
const dataUser =
    {
        img:'https://images.pexels.com/photos/16010173/pexels-photo-16010173.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'et tu brutus',
        username:'_Rome_w/_love_',
        caption:'loving life without traitors',
        msg:'Come lets go',
        post:'55',
        following:'109',
        followers:'1054'
        // time:'55 min'
        
    }

const data = [
    {
        img:'https://images.pexels.com/photos/4065156/pexels-photo-4065156.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',
        heartNum:'16,000'

    },
    {
        img:'https://images.pexels.com/photos/5544049/pexels-photo-5544049.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',
        heartNum:'16,000'

    },
    {
        img:'https://images.pexels.com/photos/7871166/pexels-photo-7871166.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3,004',
        heartNum:'16,000'

    },
    {
        img:'https://images.pexels.com/photos/4065156/pexels-photo-4065156.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',
        heartNum:'16,000'

    },
    {
        img:'https://images.pexels.com/photos/5544049/pexels-photo-5544049.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',
        heartNum:'16,000'

    },
    {
        img:'https://images.pexels.com/photos/7871166/pexels-photo-7871166.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3,004',
        heartNum:'16,000'

    },
]
const taggedData = [
    {
        img:'https://images.pexels.com/photos/7871166/pexels-photo-7871166.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3,004',
        heartNum:'16,000'
    },
]
const savedData = [
    {
        img:'https://images.pexels.com/photos/4065156/pexels-photo-4065156.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',
        heartNum:'16,000'
    },
]
function Profile(){
    const post = data.map(item=><ExplorePanel key={item.toString} data={item}/>)
    const saved = savedData.map(item=><ExplorePanel key={item.toString} data={item}/>)
    const tagged = taggedData.map(item=><ExplorePanel key={item.toString} data={item}/>)
    const[page, setPage] = useState(post)
    const[toggle, setToggle]=useState(1)
    const isActive = (activePage)=>{
        switch(activePage){
            case post:
                return setToggle(1);
            case saved:
                return setToggle(2);
            case tagged:
                return setToggle(3);
            default:
                return null
        }
    }
    return(
        <div id="feed">

        <div>
            {/* <h1>Profile</h1> */}
            <ProfileP data={dataUser}/>
        </div>
        {/* <hr></hr> */}
        <div style={{
            width:'80%',
            backgroundColor:'lightgray',
            height:'2px'
        }} ></div>
        <div style={{
            display:'flex',
            justifyContent:'center'
        }}>
            <button style={{
                borderTop:`${toggle===1?'2px solid black':'none'}`
            }} 
            className={'p-btn'} 
            onClick={()=>{
                setPage(post);
                isActive(post)
                }}><Grid/> POSTS </button>
            <button style={{
                borderTop:`${toggle===2?'2px solid black':'none'}`
            }} 
            className={'p-btn'} 
            onClick={()=>{
                setPage(saved);
                isActive(saved)
                }}><Save/> SAVED </button>
            <button style={{
                borderTop:`${toggle===3?'2px solid black':'none'}`
            }} 
            className={'p-btn'} 
            onClick={()=>{
                setPage(tagged);
                isActive(tagged)
                }}><Tag/> TAGGED </button>
        </div >
        <div className="explore-page">
            {page}
        </div>
        </div>
    )
}

export default Profile