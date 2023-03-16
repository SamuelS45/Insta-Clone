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
    const test=['lovesxx','love']
    const listRecents = test.map(item=>
    <li key={item.toString}>{item}
        <button><Delete size={size}/></button>    
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
        <ul>
            {listRecents}
        </ul>
        </div>
    )
}

export default Search