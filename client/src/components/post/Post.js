
import React, { useEffect, useState, memo, useContext } from "react"
import './post.css'
import {AiFillHeart as Heart} from 'react-icons/ai'
import {AiOutlineHeart as HeartOutline} from 'react-icons/ai'
import {BiPaperPlane as Share} from 'react-icons/bi'
import {FaRegComment as Comment} from 'react-icons/fa'
import {BsBookmark as Save} from 'react-icons/bs'
import {BsBookmarkFill as SaveFill} from 'react-icons/bs'
import {BsThreeDotsVertical as Menu} from 'react-icons/bs'
import {MdTagFaces as Face} from 'react-icons/md'
// import axios from 'axios'
// import CommentsModal from "./comments/Comments"
import { Context } from "./Context"
//Note: This component can be rewritten utlising inline jsx triggers with toggle triggers for each animation and not using if else statements 



const data = [
    {
    id:1,
    user_id:1,
    alt:'profile',
    profile_img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    user_name:'Olivia__LAla',
    url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    likes:'1600',
    des:'A day in a life of a barrista',
    numComments:'2',
    heart: false,
    created_at:'2 HOURS AGO'},
    {
    id:1,
    user_id:2,
    alt:'profile',
    profile_img: 'https://plus.unsplash.com/premium_photo-1698046365908-661e92b51332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
    user_name:'Kiko__',
    url: 'https://images.unsplash.com/photo-1682686580433-2af05ee670ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    likes:'1600',
    des:'A day in a life of a barrista',
    numComments:'2',
    heart: false,
    created_at:'12/10/2023'},
    {
    id:1,
    user_id:3,
    alt:'profile',
    profile_img: 'https://images.unsplash.com/photo-1699459607033-ad9dd4df7021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
    user_name:'Song_Kind',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    likes:'1600',
    des:'A day in a life of a barrista',
    numComments:'2',
    heart: false,
    created_at:'10/10/2023'},
    ]


function Post({data}){
    const {profile_img, url, user_name, alt, likes, des , numComments, created_at, id} = data||{};
    const[heart, setHeart] = useState(false)
    const[imgHeart, setImgHeart] = useState('0')
    const[icon, setIcon] = useState()
    const[save, setSave] = useState(false)
    // const[saveIcon, setSaveIcon] = useState()
    const[comment, setComment]=useState()
    const[commentModal, setCommentModaL]=useState(false)
    
    // console.log(data)
    
    const {items, setItems} = useContext(Context)
    
    const updateHeart = ()=>{
    }

    const heartHandler=()=>{
        updateHeart(id)
        if(heart===false){
            setIcon(<HeartOutline size={30} style={{ }}/>)
            // setIcon('Fuck you')
            setHeart(heart=>!heart)
        }else{
            setHeart(heart=>!heart)
            setIcon(<Heart size={30} style={{color:"red"}}/>)
        }
    }
    const heartImgHandler=()=>{
        if(heart===true){
            setImgHeart('1')
            setTimeout(()=>setImgHeart('0'),1000)
            heartHandler()
            // setTimeout(()=>setImgHeart('0'),1200)
        }else{
            setImgHeart('1')
            setTimeout(()=>setImgHeart('0'),1000)
            // heartHandler()
            // heartHandler()
            // setImgHeart()
        }

    }
    const saveHandler =()=>{
        save===false?setSave(save=> !save):setSave(save=> !save)
            // setSaveIcon(<Save size={30}/>)
        
            // setSaveIcon(<SaveFill size={30}/>)
    }
    const commentHandler =(e)=>{
        setComment(e.target.value)
    }

    const commentContextHandler =()=>{
        // setCommentModaL(commentModal=>!commentModal)
        setItems(id)
        // console.log(data)
    }
    useEffect(()=>{
        // console.log(profile_img)
        // console.log(user_name)
        heartHandler()
        saveHandler()
        // heartImgHandler()
    },[])
    return(
        <>
        <div id="post">

            <div id="post-banner">
                <div id="profile-container">
                    {/* <div id="profile-crop">
                    </div> */}
                    <div id="gradient-ring">

                        <div className="profile-crop">
                            <img className="post-profile" src={profile_img} alt={'Profile'}></img>
                        </div>

                    </div>
                    <h5 className="profile-name">{user_name}</h5>
                </div>
                <button id="menu-btn" ><Menu size={20} style = {{
                    transition:'.1s',
                    transform: 'rotate(90deg)'}}/></button>
            </div>

            <div onDoubleClick={heartImgHandler}>
                <div>
                    <div id="heart-center">

                    <div id="img-heart" style={{transform: `scale(${imgHeart})`}}>
                        {<Heart size={80} style={{
                            color:"grey"}}/>}
                    </div>
                <div className="post-crop">
                <img  id="post-img" src={url} alt={alt}></img>
                    </div>
                    </div>
                </div>
            </div>

            <div id="post-btn">
                <div id='post-btn-left'>

                    <button onClick={heartHandler} id="post-btn">{icon}</button>
                    <button id="post-btn"><Comment size={30}/></button>
                    <button id="post-btn"><Share size={30}/></button>
                </div>
                <button onClick={saveHandler} id="post-btn">{
                // saveIcon
                        save?<Save size={30}/>:<SaveFill size={30}/>
                }</button>
            </div>

            <div id="post-lower-banner">
                <div id="post-cont">
                    <h5>{likes} likes</h5>
                    <div id="post-des" >
                        <h5 className="post-name">{user_name}</h5>
                        <p className="post-des">{des}</p>
                    </div>

                    <button onClick={commentContextHandler} id="comment-btn-show">View {numComments} comment...</button>


                        <p id="time">{created_at}</p>
                </div>
                <div id="comment-cont">
                    {/* <h1>{comment}</h1> */}
                    <button id="comment-btn"><Face size={30}/></button>
                    <input value={comment} onChange={commentHandler} id="comment" placeholder={'Add a comment'}></input>
                    <button id="comment-btn" style={{color:'rgb(129, 198, 221)'}}>Post</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default memo(Post)