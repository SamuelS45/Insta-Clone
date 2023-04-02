import React from "react";
import ProfileP from "../components/profiles/ProfileP";

const data =
    {
        img:'https://images.pexels.com/photos/16010173/pexels-photo-16010173.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'et tu brutus',
        username:'__from_Rome_w/_love_',
        caption:'loving life without traitors',
        msg:'Come lets go',
        post:'55',
        following:'109',
        followers:'1054'
        // time:'55 min'
        
    }

function Profile(){
    
    return(
        <div>

        <div>
            {/* <h1>Profile</h1> */}
            <ProfileP data={data}/>
        </div>
        <hr></hr>
        <div style={{
            display:'flex',
            justifyContent:'center'
        }}>
            <button>POSTS</button>
            <button>SAVED</button>
            <button>TAGGED</button>
        </div>
        </div>
    )
}

export default Profile