import React, {useState} from "react"
import {TiDeleteOutline as Delete} from 'react-icons/ti'
import './search.css'
import ProfileS from '../profiles/ProfileS'
const size = 30
function Search(){
    // const[data, setData]=useState([])
    // useEffect(()=>{
    //     setData({})
    // },[])
    const data=[
        {
            name:'loves_u',
            img:'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600',
            following:'Following',
            caption:'princess'
        },
        {
            name:'pretty_gurl',
            img:'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600',
            following:'Following',
            caption:'live life yeah'
        }
    ]
    const listRecents = data.map(item=>
        <li id="s-li" key={item.name}>
            <ProfileS data={item}/>
        </li>
    )
    const[text,setText]= useState()
    return(
        <div className="search-container">
            <div className="s-top">
                <h1>Search</h1>
                <div className="s-center">
                <input className="search-box" placeholder="Search" onChange={(e)=>setText(e.target.value)} type='text' value={text}></input>
                {/* <input></input> */}
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