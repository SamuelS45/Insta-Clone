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
// const data = [
//     {
//     profile_img:'img',
//     user_name:'img',
//     url:'img',
//     caption:"img",
//     user_id:"img",
//     likes:'20'
//     }
// ];

const commentData = [
    {
        id:1,
        name:'Jake',
        profile_img:'https://images.unsplash.com/photo-1699871128680-70d26ce4d3d8?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        user_id:1,
        post_id:1,
        comment_text:'Lorem.........................',
        created_at:'15/10/2023',
    }
]
// export const PostContent=({data})=>{
//     const{url}=data||{}
//     return(
//         <div id="post-content">
//             <img src={url} alt="photo"></img>
//         </div>
//     )
// }
function Comments({postData}){
    // const{profile_img, name ,url, caption, user_id} = data||{}
    const[comments, setComments] = useState()
    const[heart, setHeart] = useState(false)
    const[imgHeart, setImgHeart] = useState('0')
    const[icon, setIcon] = useState()
    const[save, setSave] = useState(false)
    // const[saveIcon, setSaveIcon] = useState()
    const[comment, setComment]=useState()
    // const {profile_img, url, user_name, alt, likes, des , numComments, created_at, id} = postData||{};
    
    const[data, setData] = useState([
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
    ])
    // When using Server delete commentData and add and array
    // const[commentData, setCommentData] = useState([])
    const[commentData, setCommentData] = useState([
        {
            id:1,
            name:'Jake',
            profile_img:'https://images.unsplash.com/photo-1699871128680-70d26ce4d3d8?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            user_id:1,
            post_id:1,
            comment_text:'Lorem.........................',
            created_at:'15/10/2023',
        }
    ])
    const {items, setItems} = useContext(Context)
    const {profile_img, url, user_name, alt, likes, des , created_at, user_id, caption, id} = data[1-items]||{};
    
    
    const getPost=()=>{
        const info = {
            method:'GET',
            url:`http://127.0.0.1:5000/post/${items}`
        }
        // axios(info).then((res)=>{setData(res.data)}).catch((err)=>console.log(err))
        console.log(data)
    }
    const getComments=()=>{
        const info = {
            method:'GET',
            url:`http://127.0.0.1:5000/comments/${items}`
        }
        // Uncomment thhis line when 
        // axios(info).then((res)=>setCommentData(res.data)).catch((err)=>console.log(err))
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
    // With a server add items context for RestAPI retrival of data
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