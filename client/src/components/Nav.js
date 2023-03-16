import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './nav.css'
import{AiFillHome as Home} from 'react-icons/ai'
import{AiOutlineHome as HomeOutline} from 'react-icons/ai'
import{AiOutlineSearch as Search} from 'react-icons/ai'
import{AiOutlineCompass as CompassOutline} from 'react-icons/ai'
import{AiFillCompass as Compass} from 'react-icons/ai'
import{BiMoviePlay as Reels} from 'react-icons/bi'
import{AiFillMessage as Message} from 'react-icons/ai'
import {AiFillHeart as Heart} from 'react-icons/ai'
import {FiPlusSquare as Plus} from 'react-icons/fi'
import {AiOutlineMenu as Menu} from 'react-icons/ai'
import {CgProfile as Profile} from 'react-icons/cg'

const size = 30

function Nav(){
    return(
        <>
        {/* <h1>Nav</h1> */}
        <div className="nav">
            <ul>
                <li className="logo">
        <img alt="logo" style={{
            width:'100px',
            // height:'10px'
        }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"></img>
        </li>
        </ul>
            <ul>
                {/* <button></button>
                <button></button>
            <button></button> */}
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/'}><Home style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Home</h5>
                    </NavLink>
                    
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/search'}><Search style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Search</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/explore'}><Compass style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Explore</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/search'}><Reels style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Reels</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/search'}><Message style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Message</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/search'}><Heart style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Notification</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/search'}><Plus style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Create</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/search'}><Profile style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Profile</h5>
                    </NavLink>
                </li>
            </ul>
            <ul>

                <li className="nav-li">

                <Menu className="nav-link" style={{color:'black'}} size={size}/>
                    <h5 className="nav-title">More</h5>
                </li>
            </ul>
            <button id="menu-btn">
            </button>
            </div>
                <Outlet/>
        </>
    )
}

export default Nav