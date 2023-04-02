import React from "react"
import{AiOutlineSetting as Setting} from 'react-icons/ai'
function ProfileP({data}){
    const{img,name,caption,post,followers,following,username} = data||{}
    return(
        <div style={{
            display:'flex'
        }}>

        <div style={{
            borderRadius:'100%',
            overflow:'hidden',
            width: '500px',
            height: '500px'
        }}>

        <img src={img} alt={img.toString}></img> 
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column'
        }}>
            <div>
                <div style={{
                    display:'flex'
                }}>

                    <h1>{username}</h1>
                    <button>Edit Profile</button>
                    <button><Setting/></button>
                </div>
                <div style={{
                    display:'flex'
                }}>
                    <h1>{post}posts</h1>
                    <h1>{followers}followers</h1>
                    <h1>{following}following</h1>
                </div>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'column'
            }}>

            <h1>{name}</h1>
            <h1>{caption}</h1>
            </div>
        </div>
                </div>
    )
}


export default ProfileP