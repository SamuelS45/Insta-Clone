import React from "react";
import ExplorePanel from "../components/explore/ExplorePanel";

const data = [
    {
        img:'https://images.pexels.com/photos/12151398/pexels-photo-12151398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',

    },
    {
        img:'https://images.pexels.com/photos/12151398/pexels-photo-12151398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',

    },
    {
        img:'https://images.pexels.com/photos/12151398/pexels-photo-12151398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',

    }
]

function Explore(){
    const explore = data.map(item=><ExplorePanel data={item}/>)
    return(
        <div>
            <h1>Explore</h1>
            {explore}
        </div>
    )
}

export default Explore