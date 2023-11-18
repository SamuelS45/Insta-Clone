import React, { memo } from "react"

function ProfileN({data}){
    const {name,msg, time,img} = data ||{}
    return(
        <div id="s-space">

            <div className="s-item">
                    <div id="gradient-ring">
                        <div className="story">
                        {/* <img id="post-profile" alt="profile" src={item.profile}></img> */}
                            <img id="post-profile"  src={img} alt={img.toString}></img>
                    </div>
                </div>
            </div>
            <div>

                <div>
                    {name}
                </div>    
                <div>
                    <ul>
                        <li><h5>{msg}</h5></li>
                        <li><h5>{time}</h5></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default memo(ProfileN)