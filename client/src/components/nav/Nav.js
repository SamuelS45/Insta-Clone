import React, { useState, memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import './nav.css'
// import Search from "./Search";
import Search from '../search/Search'
import{AiFillHome as Home} from 'react-icons/ai'
import{AiOutlineHome as HomeOutline} from 'react-icons/ai'
import{AiOutlineSearch as SearchIcon} from 'react-icons/ai'
import{AiOutlineCompass as CompassOutline} from 'react-icons/ai'
import{AiFillCompass as Compass} from 'react-icons/ai'
import{BiMoviePlay as Reels} from 'react-icons/bi'
import{AiFillMessage as Message} from 'react-icons/ai'
import {AiFillHeart as Heart} from 'react-icons/ai'
import {FiPlusSquare as Plus} from 'react-icons/fi'
import {AiOutlineMenu as Menu} from 'react-icons/ai'
import {CgProfile as ProfileIcon} from 'react-icons/cg'
// import './search.css'

// const size = 30



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
function Nav(){
    
// The Animation in the bellow function has to many working components that causes a lagging in the application when clicking on the search button, an easier animation would be to just move the position of the search componenet from left to right, instead of triggering opacities and widths
    const[width,setWidth] = useState(18);
    const[toggle,setToggle] = useState(true);
    function searchHandler(){
        toggle?setToggle(toggle=>!toggle):setToggle(toggle=>!toggle)
        width!==18?setWidth(18):setWidth(6)
        console.log(toggle)
    }
    
    return(
        <div id="n-con">
        {/* <h1>Nav</h1> */}
        <div style={{
            width:`${width}vw`
        }} className="nav">
            <ul>
                <li className="logo">
                    <img alt="logo" style={{
                        width:'100px',
                        opacity:`${toggle?'1':'0'}`
                        // height:'10px'
                    }} 
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"}
                    ></img>
                </li>
                <li className="logo-icon">

                    <img alt="logo-icon" 
                    style={{
                        width:'30px',
                        transition:'.5s',
                        transform:`${toggle?'scale(0)':'scale(1)'}`
                        // height:'10px'
                    }} 
                    src={"https://cdn-icons-png.flaticon.com/512/87/87390.png"}
                    ></img>
                </li>
        </ul>
            <ul>
                {/* <button></button>
                <button></button>
            <button></button> */}
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/'}>
                        <Home style={{
                        color:'black',
                        }} size={size}/>
                    
                    <h5 className="nav-title" style={{
                        opacity:`${toggle?'1':'0'}`
                    }}>Home</h5>
                    </NavLink>
                    
                </li>
                <li className="nav-li">
                    <button style={{
                        background:'0',
                        border:'0',
                        cursor:'pointer'
                    }} onClick={()=>searchHandler()} className="nav-link" to={'/search'}>
                        <SearchIcon style={{
                        color:'black'
                        }} size={size}/>
                    
                    <h5 className="nav-title" style={{
                        opacity:`${toggle?'1':'0'}`
                    }}>Search</h5>
                    </button>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/explore'}>
                        <Compass style={{
                        color:'black',
                        }} size={size}/>
                    
                    <h5 className="nav-title" style={{
                        opacity:`${toggle?'1':'0'}`
                    }}>Explore</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/reels'}>
                        <Reels style={{
                        color:'black'
                        }} size={size}/>
                    
                    <h5 className="nav-title" style={{
                        opacity:`${toggle?'1':'0'}`
                    }}>Reels</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/message'}>
                        <Message style={{
                        color:'black'
                        }} size={size}/>
                    
                    <h5 className="nav-title" style={{
                        opacity:`${toggle?'1':'0'}`
                    }}>Message</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <button style={{
                        background:'0',
                        border:'0',
                        cursor:'pointer'
                    }} onClick={()=>searchHandler()} className="nav-link" to={'/search'}>
                        <Heart style={{
                        color:'black'
                        }} size={size}/>
                    
                    <h5 className="nav-title" style={{
                        opacity:`${toggle?'1':'0'}`
                    }}>Notification</h5>
                    </button>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/search'}>
                        <Plus style={{
                        color:'black'
                        }} size={size}/>
                    
                    <h5 className="nav-title" style={{
                        opacity:`${toggle?'1':'0'}`
                    }}>Create</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/profile'}>
                        <ProfileIcon style={{
                        color:'black'
                        }} size={size}/>
                    
                    <h5 className="nav-title" style={{
                        opacity:`${toggle?'1':'0'}`
                    }}>Profile</h5>
                    </NavLink>
                </li>
            </ul>
            <ul>

                <li className="nav-li">
                <NavLink className="nav-link">

                <Menu  style={{
                    color:'black',
                    
                    
                }} size={30} />
                </NavLink>
                    <h5 className="nav-title" style={{
                        opacity:`${toggle?'1':'0'}`
                    }}>More</h5>
                </li>
            </ul>
            <button id="menu-btn">
            </button>
            </div>
                <Outlet/>
            {<div className="search-nav" style={{
                    position:'absolute',
                    left:`${toggle?'-350px':'6vw'}`,
                    zIndex:'-1',
                    transition:'.5s'
                }}>

                <Search />
                </div>
                }
        </div>
    )
}

export default memo(Nav)