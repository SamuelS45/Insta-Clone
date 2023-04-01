import React from "react";
import Post from '../components/Post'
// import Test from '../components/Test'
import Stories from "../components/Stories";
import ToggleMenu from "../components/ToggleMenu";
import Com from "../components/Com";

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
    name:'Olivia Young',
    post: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    likes:'1600',
    des:'A day in a life of a barrista',
    numComments:'2',
    heart: false,
    created:'2 HOURS AGO'},
    {

    profileImg: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name:'Olivia Young',
    post: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    likes:'1600',
    des:'A day in a life of a barrista',
    numComments:'2',
    heart: false,
    created:'2 HOURS AGO'},
    {

    profileImg: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name:'Olivia Young',
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


function Home(){
    const posts = Data.map(post=><Post data={post}/>)
    return(
    <div id='feed'>
        <Stories/>
        {posts}
        {/* <PostD data={Data}/> */}
        {/* <Test data={data}/> */}
        <ToggleMenu/>
        <Com/>
    </div>
    )
}


export default Home