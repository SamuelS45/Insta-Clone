import React, { useEffect, useState, useContext } from "react";
import Post from '../components/post/Post'
// import Test from '../components/Test'
// import Stories from "../components/Stories";
// import ToggleMenu from "../components/ToggleMenu";
// import Com from "../components/post/Comments Test";
import axios from 'axios'
import CommentsModal from "../components/post/comments/Comments";
import { Context, ContextProvider } from '../components/post/Context';
// const Data = {
//     id:{

//     profileImg: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     name:'Olivia Young',
//     post: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     likes:'1600',
//     des:'A day in a life of a barrista',
//     numComments:'2',
//     heart: false,
//     created:'2 HOURS AGO'},
// }
const Data = [
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
// const data = {
//     img:'https://images.pexels.com/photos/12151398/pexels-photo-12151398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     msg:'Hello World'
// }
// const test = [
//     {
//         img:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
//         likes:'10',
        
//     },
//     {
//         img:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
//         likes:'10',

//     }
// ]

function Home(){
    const[data, setData]=useState(Data)
    const[viewComment, setViewComment] = useState(true)
    const fetchFeed= async ()=>{
        const info = {
            method:"GET",
            url:"http://127.0.0.1:5000/post",
            // url:"http://192.168.1.2:3001/feed",
            // responseType:'stream'
        }
        await axios(info).then((res)=>{setData(res.data)}).catch((err)=>{console.log(err)})
    }
    const commentModalHandler=()=>{
        setViewComment(setViewComment=>!setViewComment)
    }
    useEffect(()=>{
        fetchFeed()
        // console.log(data)
    },[])
    const posts = data.map(post=><Post key={post.id} data={post}/>)
    // const list = data.map((post, index)=>

    //     <div key={index}>
    //         <img src={post.img} alt="img"></img>
    //     </div>
        
    // )
    
    return(
        <div id='feed'>
            {posts}
    </div>
    )
}


export default Home