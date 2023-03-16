import React, { useEffect, useState } from "react"
import './post.css'
import {AiFillHeart as Heart} from 'react-icons/ai'
import {AiOutlineHeart as HeartOutline} from 'react-icons/ai'
import {BiPaperPlane as Share} from 'react-icons/bi'
import {FaRegComment as Comment} from 'react-icons/fa'
import {BsBookmark as Save} from 'react-icons/bs'
import {BsBookmarkFill as SaveFill} from 'react-icons/bs'
import {BsThreeDotsVertical as Menu} from 'react-icons/bs'
import {MdTagFaces as Face} from 'react-icons/md'


function PostProps(props){
    const[heart, setHeart] = useState(false)
    const[imgHeart, setImgHeart] = useState('0')
    const[icon, setIcon] = useState()
    const[save, setSave] = useState(false)
    const[saveIcon, setSaveIcon] = useState()
    const[comment, setComment]=useState()

    const heartHandler=()=>{
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
        if(save===false){
            setSaveIcon(<Save size={30}/>)
            setSave(save=> !save)
        }else{
            setSaveIcon(<SaveFill size={30}/>)
            setSave(save=> !save)

        }

    }
    const commentHandler =(e)=>{
        setComment(e.target.value)
    }
    useEffect(()=>{
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
                    <img id="post-profile" src={props.profileImg} alt={'Profile'}></img>

                    </div>
                    <h5 style={{cursor:'pointer',marginLeft:"1em"}}>{props.name}</h5>
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
                <img  id="post-post" src={props.post} alt={props.alt}></img>
                    </div>
                </div>
            </div>
            <div id="post-btn">
                <div id='post-btn-left'>

                <button onClick={heartHandler} id="post-btn">{icon}</button>
                <button id="post-btn"><Comment size={30}/></button>
                <button id="post-btn"><Share size={30}/></button>
                </div>
                <button onClick={saveHandler} id="post-btn">{saveIcon}</button>
            </div>
            <div id="post-lower-banner">
                <div id="post-cont">
                    <h5>{props.likes} likes</h5>
                    <div id="post-des" >
                        <h5>{props.name}</h5>
                        <p>{props.des}</p>
                    </div>
                    <button id="comment-btn-show">View {props.numComments} comment...</button>
                        <p id="time">{props.created}</p>
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

export default PostProps