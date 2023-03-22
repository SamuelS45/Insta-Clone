import React, { useEffect, useState } from "react";
import './search.css'


import {TiDeleteOutline as Delete} from 'react-icons/ti'
// const recentsData=[
//     {
//         userID:'loveyouxxx',
//     },
//     {

//         userId:'loveyouxxx',
//     },
//     {
//         userID:'loveyouxxx',
//     },
// ]

const size = 30
function Search(){
    // const[data, setData]=useState([])
    // useEffect(()=>{
    //     setData({})
    // },[])
    const test=[
        {
            name:'lovesxx',
            img:'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name:'love',
            img:'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ]
    const listRecents = test.map(item=>
    <li id="s-li" key={item.toString}>
        <div id="s-space">

        <div className="s-item">
            <div id="gradient-ring">
                <div className="story">
                {/* <img id="post-profile" alt="profile" src={item.profile}></img> */}
                    <img id="post-profile"  src={item.img} alt={item.img.toString}></img>
            </div>
        </div>
        </div>
        <div>

        {item.name}
        </div>
        <button id="s-btn-delete"><Delete size={size}/></button>    
        </div>
    </li>
    )
    return(
        <div className="search-container">
            <div className="s-top">
                <h1>Search</h1>
                <div className="s-center">
                <input className="search-box" placeholder="Search"></input>
                <button className="search-clear"> <Delete style={{color:'grey'}} size={size}/></button>
                </div>
            </div>
        <hr></hr>
        <div>
            <div className="s-bottom-title">
                <h3>Recent</h3>
                <button id="comment-btn" style={{color:'rgb(129, 198, 221)'}}>Clear All</button>
            </div>
        {/* <h5>{recents}</h5> */}
        </div>
        <ul id="s-ul">
            {listRecents}
        </ul>
        </div>
    )
}

export default Search