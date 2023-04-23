import React from "react"
import{AiOutlineSetting as Setting} from 'react-icons/ai'
import './profileP.css'
function ProfileP({data}){
    const{img,name,caption,post,followers,following,username} = data||{}
    return(
        <div className="c" style={{
            display:'flex',
        }}>

        <div id="p-img-c" style={{
            
        }}>

        <img style={{
            width:'200px'
        }} src={img} alt={img.toString}></img> 
        </div>
        <div className="p-c">
            
                <div className="name-p" style={{
                }}>

                    <h2>{username}</h2>
                    <button className="edit-btn">Edit Profile</button>
                    <button><Setting/></button>
                </div>
                <div className="info-p">
                    <h1>{post}posts</h1>
                    <h1>{followers}followers</h1>
                    <h1>{following}following</h1>
                </div>
            
            <div style={{
                display:'flex',
                flexDirection:'column'
            }}>

            <h3>{name}</h3>
            <h3>{caption}</h3>
            </div>
        </div>
                </div>
    )
}


export default ProfileP