import axios from "axios"
import { useContext, useEffect, useState } from "react"
import CommentCard from "./CommentCard"
import './comments.css'
import {AiFillHeart as Heart} from 'react-icons/ai'
import {AiOutlineHeart as HeartOutline} from 'react-icons/ai'
import {BiPaperPlane as Share} from 'react-icons/bi'
import {FaRegComment as Comment} from 'react-icons/fa'
import {BsBookmark as Save} from 'react-icons/bs'
import {BsBookmarkFill as SaveFill} from 'react-icons/bs'
import {BsThreeDotsVertical as Menu} from 'react-icons/bs'
import {MdTagFaces as Face} from 'react-icons/md'
import { Context } from "../Context"
const data = {
    profile_img:'img',
    user_name:'img',
    url:'img',
    caption:"img",
    user_id:"img",
    likes:'20'
}
// export const PostContent=({data})=>{
//     const{url}=data||{}
//     return(
//         <div id="post-content">
//             <img src={url} alt="photo"></img>
//         </div>
//     )
// }
function Comments(){
    // const{profile_img, name ,url, caption, user_id} = data||{}
    const[comments, setComments] = useState()
    const[heart, setHeart] = useState(false)
    const[imgHeart, setImgHeart] = useState('0')
    const[icon, setIcon] = useState()
    const[save, setSave] = useState(false)
    // const[saveIcon, setSaveIcon] = useState()
    const[comment, setComment]=useState()
    const {items, setItems} = useContext(Context)
    const[data, setData] = useState([])
    const[commentData, setCommentData] = useState([])
    const {profile_img, url, user_name, alt, likes, des , created_at, user_id, caption, id} = data[0]||{};

    const getPost=()=>{
        const info = {
            method:'GET',
            url:`http://127.0.0.1:5000/post/${items}`
        }
        axios(info).then((res)=>{setData(res.data)}).catch((err)=>console.log(err))
        console.log(data)
    }
    const getComments=()=>{
        const info = {
            method:'GET',
            url:`http://127.0.0.1:5000/comments/${items}`
        }
        axios(info).then((res)=>setCommentData(res.data)).catch((err)=>console.log(err))
    }

    const heartHandler=()=>{
        // updateHeart(post_id)
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
        // console.log(items)
    }
    const saveHandler =()=>{
        save===false?setSave(save=> !save):setSave(save=> !save)
            // setSaveIcon(<Save size={30}/>)
        
            // setSaveIcon(<SaveFill size={30}/>)
    }
    const commentHandler =(e)=>{
        setComment(e.target.value)
    }
    useEffect(()=>{
        heartHandler()
        saveHandler()
        getPost()
        getComments()
        
    },[])
    // const listComments = comments.map(<CommentCard/>)
    const listComments = commentData.map(items=><CommentCard data={items}/>)
    return(
        <div id="comment-con">
            <div style={{
            backgroundColor:'black',
            opacity:'0.5',
            width:'100vw',
            height:'100vh',
            position:'absolute',
            zIndex:'-1',
            }}>

            </div>
        <div style={{
            
        }} id="comment-pan">
            {/* <PostContent data={data.url}/> */}
            <div id="post-contents">
                <img id="comment-img" src={url} alt="something"></img>
            </div>
            <div id="post-comments">
                <div id="user-section">
            <div id="user-container">
                    {/* <div id="profile-crop">
                    </div> */}
                    <div id="gradient-ring">

                        <div className="profile-crop">
                            <img className="post-profile" src={profile_img} alt={'Profile'}></img>
                        </div>

                    </div>
                    <h5 className="profile-name">{user_name}</h5>
                </div>
                </div>
            <div id="caption">

            <div id="user-container">
                    {/* <div id="profile-crop">
                    </div> */}
                    <div id="gradient-ring">

                        <div className="profile-crop">
                            <img className="post-profile" src={profile_img} alt={'Profile'}></img>
                        </div>

                    </div>
                    <h5 className="profile-name">{user_name}</h5>
                    <h5>{caption}</h5>
                </div>
                </div>
                    
                    {/* {listComments} */}
            <div id="all-comments">
                {/* {items} */}
                {/* <h1>{items}</h1> */}
                {/* <CommentCard/> */}

                {listComments}

            </div>
            <div id="post-tools-con">

            <div id="post-tools">

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
                    {/* <button id="comment-btn-show">View {numComments} comment...</button> */}
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
                </div>
                    </div>
                </div>
            </div>
    )
}

export default Comments