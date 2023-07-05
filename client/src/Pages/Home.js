import React, { useEffect, useState } from "react";
import Post from '../components/post/Post'
// import Test from '../components/Test'
import Stories from "../components/Stories";
import ToggleMenu from "../components/ToggleMenu";
import Com from "../components/post/Comments";
import axios from 'axios'
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

    profileImg: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name:'Olivia LAla',
    post: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    likes:'1600',
    des:'A day in a life of a barrista',
    numComments:'2',
    heart: false,
    created:'2 HOURS AGO'},
    {

    profileImg: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name:'Olivia Bi',
    post: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    likes:'1600',
    des:'A day in a life of a barrista',
    numComments:'2',
    heart: false,
    created:'2 HOURS AGO'},
    {

    profileImg: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name:'Olivia Kind',
    post: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    likes:'1600',
    des:'A day in a life of a barrista',
    numComments:'2',
    heart: false,
    created:'2 HOURS AGO'},
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
    const[data, setData]=useState([])
    const fetchFeed= async ()=>{
        const info = {
            method:"GET",
            url:"http://192.168.1.4:3001/feed",
            // responseType:'stream'
        }
        await axios(info).then((res)=>{setData(res.data)}).catch(
            (err)=>{
                console.log(err)
            })
    }
    useEffect(()=>{
        fetchFeed()
        // console.log(data)
    },[data])
    const posts = data.map(post=><Post key={post.id} data={post}/>)
    // const list = data.map((post, index)=>

    //     <div key={index}>
    //         <img src={post.img} alt="img"></img>
    //     </div>
        
    // )
    return(
    <div id='feed'>
        {/* <Stories/> */}
        {posts}
        {/* <PostD data={Data}/> */}
        {/* <Test data={data}/> */}
        {/* <ToggleMenu/> */}
        {/* <Com/> */}
        {/* {list} */}
        {/* {} */}
    </div>
    )
}


export default Home