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
import{AiOutlineSetting as Setting} from 'react-icons/ai'
import {BsBookmark as Save} from 'react-icons/bs'
import {AiOutlineFieldTime as Activity} from 'react-icons/ai'
import {TbMessageReport as Report} from 'react-icons/tb'
import Create from "../create/Create";
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
    const[menu,setMenu] = useState();
    const[create,setCreate] = useState()
    function searchHandler(){
        toggle?setToggle(toggle=>!toggle):setToggle(toggle=>!toggle)
        width!==18?setWidth(18):setWidth(6)
        console.log(toggle)
    }
        // menu===true?console.log('working?'):window.onclick = ()=>{ setMenu(false)}
    const menuHandler= ()=>{
        setMenu(menu=>!menu)
        console.log(menu)
    }
    const createHandler=()=>{
        setCreate(create=>!create)

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
                    }} onClick={()=>searchHandler()} 
                        className="nav-link" 
                        to={'/search'}>
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
                    <button onClick={()=>createHandler()} className="nav-link" id="menu-btn" >
                        <Plus style={{
                        color:'black',
                        
                        }} size={size}/>
                    
                    <h5 className="nav-title" style={{
                        opacity:`${toggle?'1':'0'}`
                    }}>Create</h5>
                    </button>
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

                    <button onClick={()=>menuHandler()} className="nav-link" id="menu-btn" >
                        <NavLink >
                            <Menu  style={{color:'black',}} size={30} />
                        </NavLink>

                            <h5 className="nav-title" style={{
                                opacity:`${toggle?'1':'0'}`
                            }}>More</h5>
                                
                    </button>
                </li>
                <div style={{
                    display:`${menu?'block':'none'}`,
                    borderRadius: '10px',
                }} className="m-options">
                    <ul className="ul-options">
                        <li>
                            <NavLink to={'/login'}><h5>Log In</h5></NavLink>
                        </li>
                        <li><button style={{
                            borderRadius: '10px 10px 0 0',
                        }} className="option-btn">Settings <Setting/> </button></li>
                        <li><button className="option-btn">Your Activity <Activity/></button></li>
                        <li><button className="option-btn">Saved <Save/></button></li>
                        <li><button className="option-btn">Report A Problem<Report/></button></li>
                        <li><button style={{
                            marginTop:'5px'
                        }} className="option-btn">Switch Accounts</button></li>
                        <li><button style={{
                            borderRadius: '0 0 10px 10px',
                        }} className="option-btn">Log Out</button></li>
                    </ul>
                </div>
            </ul>
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
                <div style={{
                    display:`${create?'block':'none'}`,
                    position:'absolute',
                    zIndex:'2',
                    width:'100vw',
                    height:'100vh',
                    
                }}>
                    <div style={{
                        display:'flex',
                        // justifyContent:'end',
                        justifyContent:'right',
                        width:'100vw',
                        backgroundColor:'black',
                        opacity:'0.5',
                    }}>
                    <button style={{
                        color:'white',
                        border:'none',
                        marginRight:'50px',
                        backgroundColor:'transparent',
                        fontSize:'2rem',
                        cursor:'pointer'
                    }} onClick={()=>createHandler()}>X</button>
                    </div>
                    <div>
                        <Create />
                    </div>

                </div>
        </div>
    )
}

export default memo(Nav)