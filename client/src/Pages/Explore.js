import React from "react";
import ExplorePanel from "../components/explore/ExplorePanel";
import './explorePage.css'
const data = [
    {
        img:'https://images.pexels.com/photos/4065156/pexels-photo-4065156.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',
        heartNum:'16,000'

    },
    {
        img:'https://images.pexels.com/photos/5544049/pexels-photo-5544049.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',
        heartNum:'16,000'

    },
    {
        img:'https://images.pexels.com/photos/7871166/pexels-photo-7871166.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3,004',
        heartNum:'16,000'

    },
    {
        img:'https://images.pexels.com/photos/4065156/pexels-photo-4065156.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',
        heartNum:'16,000'

    },
    {
        img:'https://images.pexels.com/photos/5544049/pexels-photo-5544049.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3004',
        heartNum:'16,000'

    },
    {
        img:'https://images.pexels.com/photos/7871166/pexels-photo-7871166.jpeg?auto=compress&cs=tinysrgb&w=600',
        imgAlt:'black and white photo of man with newspaper',
        commentNum:'3,004',
        heartNum:'16,000'

    },
]

function Explore(){
    const explore = data.map(item=><ExplorePanel key={item.toString} data={item}/>)
    return(
        <div id="feed">

            <h1>Explore</h1>
        <div className="explore-page">
            {explore}
        </div>
        </div>
    )
}

export default Explore