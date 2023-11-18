import React,{memo} from "react";
import './stories.css'
const story = [
        {
            profile:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            name:'lovesxx'
        },
        {
            profile:'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            name:'es159'
        },
        {
            profile:'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name:'ss__ss159'
        },
]



function Stories(){
    const stories = story.map(item=>
    <div className="st-item">
        <div id="gradient-ring">
            <div className="story">
                <img id="post-profile" alt="profile" src={item.profile}></img>
            </div>
        </div>
        <h5>{item.name}</h5>
    </div>
    )
    return(
        <div className="story-container">
                {stories}
        </div>
    )
}


export default memo(Stories)