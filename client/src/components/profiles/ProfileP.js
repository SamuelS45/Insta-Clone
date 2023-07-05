import React from "react"
import{AiOutlineSetting as Setting} from 'react-icons/ai'
import './profileP.css'
function ProfileP({data}){
    const{img,name,caption,post,followers,following,username} = data||{}
    return(
        <div className="c" style={{
            display:'flex',
        }}>

        <div className="img-c" style={{
            
        }}>

        <img className="p-img" style={{
            // width:'200px'
        }} src={img} alt={img.toString}></img> 
        </div>
        <div className="profile-c">
            
                <div className="first-p" style={{
                }}>

                    <h4 className="user-name">{username}</h4>
                    <button className="edit-btn">Edit Profile</button>
                    <button className="settings-btn"><Setting size={30}/></button>
                </div>
                <div className="second-p">
                    <div className="p-h1"><p className="p-bold">{post} </p> &nbsp;posts</div>
                    <div className="p-h1"><p className="p-bold">{followers}</p>&nbsp;followers</div>
                    <div className="p-h1"><p className="p-bold">{following} </p>&nbsp;following</div>
                </div>
            
            <div className="third-p" style={{
                display:'flex',
                flexDirection:'column'
            }}>
            <p className="name">{name}</p>
            <p className="captions">{caption}</p>
            </div>
        </div>
                </div>
    )
}


export default ProfileP