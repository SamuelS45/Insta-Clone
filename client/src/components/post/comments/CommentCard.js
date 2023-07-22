
import axios from 'axios'
import './comment-card.css'
// import './com.css'
import { useEffect, useState } from 'react'
import {BsThreeDotsVertical as Menu} from 'react-icons/bs'
function CommentCard({data}){
    const{id,user_id,post_id,comment_text,created_at} = data||{}
    const[userData, setUserData] = useState([])
    const{name,profile_img} = userData[0] || {}
    const getUser=()=>{
        const info = {
            method:'GET',
            url:`http://127.0.0.1:5000/user/${user_id}`
        }
        axios(info).then((res)=>setUserData(res.data)).catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getUser()
    },[])
    return(
        <div id="comment-card-con">
            <div className="comment">
            <div id="user-container">
                <div id="gradient-ring">
                    <div id='profile-crop'>
                        <img className="post-profile" src={profile_img} alt="User Avatar"/>
                    </div>
                </div>
            </div>
                <div className="comment-body">
                    <div className='username-comment'>

                        <p className="username">{name}</p>

                        <p className="text">{comment_text}</p>
                    </div>
                    <div className='username-comment'>
                        <p className="text">{created_at}</p>
                        <p>---</p>
                        <button className='comment-reply'>Reply</button>
                        <p>---</p>
                        <button>
                            <Menu size={20} style = {{
                                            transition:'.1s',
                                            transform: 'rotate(90deg)'}}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard