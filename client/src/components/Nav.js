import React, { useState, memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import './nav.css'
// import Search from "./Search";
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
import {CgProfile as Profile} from 'react-icons/cg'
import './search.css'
import {TiDeleteOutline as Delete} from 'react-icons/ti'

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
        const[text,setText]= useState()
        return(
            <div style={{
                display:`${display}`,
                width:`${width}`,
                opacity:`${opacity}`
            }} className="search-container">
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
// The Animation in the bellow function has to many working components that causes a lagging in the application when clicking on the search button, an easier animation would be to just move the position of the search componenet from left to right, instead of triggering opacities and widths
const[width,setWidth] = useState('0px')
    const[display,setDisplay] = useState('none')
    const[opacity,setOpacity] = useState('0')
    function searchHandler(){
        if(display==='none'){
            async function ani(){
                setDisplay('')
            }
            ani().then(
                
                setTimeout(()=>{
                    setWidth('350px')
                    
                },100),
                setTimeout(()=>{
                    setOpacity('1')
                    // setWidth('200px')
                    
                },200)
                )
                // setOpacity(appear=>!appear)
                console.log('Click works')
                
            }else if(display===''){
                async function ani(){
                    
                setOpacity('0')
            }
            ani().then(
                setWidth('0px'),
                
                setTimeout(()=>{
                    
                    setDisplay('none')
                    
                },200)
                )
                // setOpacity(appear=>!appear)
            }
            
            
            

    }
    
    return(
        <div id="n-con">
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
                    <button style={{
                        background:'none',
                        border:'none',
                        cursor:'pointer'
                    }} onClick={()=>searchHandler()} className="nav-link" to={'/search'}><SearchIcon style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Search</h5>
                    </button>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/explore'}><Compass style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Explore</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/reels'}><Reels style={{color:'black'}} size={size}/>
                    
                    <h5 className="nav-title">Reels</h5>
                    </NavLink>
                </li>
                <li className="nav-li">
                    <NavLink className="nav-link" to={'/message'}><Message style={{color:'black'}} size={size}/>
                    
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
            {Search()}
        </div>
    )
}

export default memo(Nav)