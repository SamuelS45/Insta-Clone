import React, { memo, useEffect, useState } from "react"
import ProfileM from '../../components/profiles/ProfileM'
import './message.css'
import {AiOutlineHeart as HeartOutline} from 'react-icons/ai'
import {MdTagFaces as Face} from 'react-icons/md'
import {SlPicture as Pic} from 'react-icons/sl'
import{IoCallOutline as Call} from 'react-icons/io5'
import{BiVideo as Video} from 'react-icons/bi'
import{ImInfo as Info} from 'react-icons/im'
import{BsChevronCompactDown as Options} from 'react-icons/bs'
import{MdOutlineNoteAlt as NewChat} from 'react-icons/md'
import axios from 'axios'
const chats =[
    {
        img:'https://images.pexels.com/photos/16010173/pexels-photo-16010173.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Samuel',
        msg:'Come lets go',
        time:'55 min',
        id:'John'
        
    },
    {
        img:'https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name:'Samuel',
        msg:'Come lets go',
        time:'55 min',
        id:'Matthew'
        
    },
]

const message = [
    {
        id: 'John',
        msg:[
            {
                id:'John Swede',
                message:'hello',
                time:'11:59 3/5/2021'
            },
            {
                id:'Brutus',
                message:'hi',
                time:'12:05 3/5/2021'
            },
        ]
    }
]

const size = 30
function Message(){
    const [data, setData] = useState([])
    const [text, setText] = useState([])
    // const [name, setName] = useState()
    const [id, setId] = useState()
    const profile = data.map(item=>
        <li className="chat-li">
            <button className="chat-btn" onClick={()=>msgHandler(item.id)}>
            <ProfileM data={item}/>
            </button>
        </li>)
    const msgHandler=(idPass)=>{
        
        setId(idPass)

    }
    // const fetchChats = ()=>{

    // }
    // const fetchMsg=()=>{

    // }
    // const postChats = ()=>{

    // }

    console.log(id)
    useEffect(()=>{
        setData(chats)
        const info = {
            method:'GET',
            id:`localhost:3000/${id}`
        }
        axios(info).then((res)=>{setData(res.data)}).catch((err)=>{
            console.log('Error in Retriving Data')
        })
    },[])
    
    return(
        <div id="feed">
            <div className="m-c">
                <div className="top-box">

                    <div className="box-1">
                        <div className="box-1-1">
                            <h5>Rome_w/_love</h5>
                            <button className="m-btn-top"><Options size={size}/></button>
                        </div>
                        <div className="box-1-2">
                            <button className="m-btn-top"><NewChat size={size}/></button>
                        </div>
                        <div>
                        <h3>Messages</h3>
                        <h3>Requests</h3>
                        </div>
                    </div>
                    <div className="box-2">
                        <div className="box-2-1">
                        <h5>{id}</h5>
                        </div>
                        <div className="box-2-2">
                            <button className="m-btn-top"><Call size={size}/></button>
                            <button className="m-btn-top"><Video size={size}/></button>
                            <button className="m-btn-top"><Info size={size}/></button>
                        </div>
                    </div>
                </div>
        <div id="bottom-boxes">
            {/* <h1>Message</h1> */}
            <div id="m-chat">
                <ul className="chat-ul">
                    {profile}
                </ul>
            </div>
            <div id="m-text">
                <div id="m-icon-input">

                <Face size={size}/>
                <input className="m-input" placeholder="Message" onChange={(e)=>{
                    e.preventDefault()
                    setText(e.target.value)
                    }} value={text}></input>
                    <div style={{
                        display:`${text.length===0?'block':'none'}`
                    }}>

                <Pic size={size}/>
                <HeartOutline size={size}/>
                    </div>
                    <div style={{
                        display:`${text.length!==0?'block':'none'}`
                    }}>
                        <button className="m-send">Send</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}

export default memo(Message)