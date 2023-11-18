import Reel from '../components/storyReel/Reel'

const data = [
    {
        vidSrc:'https://player.vimeo.com/external/353539377.sd.mp4?s=fa4823ac540c8484ddbbcd6b0f8e9128fd2887f5&profile_id=165&oauth2_token_id=57447761',
        heartNum:'4,000',
        commentNum:'20',
        save:'true'
    },
    {
        vidSrc:'https://player.vimeo.com/external/353539377.sd.mp4?s=fa4823ac540c8484ddbbcd6b0f8e9128fd2887f5&profile_id=165&oauth2_token_id=57447761',
        heartNum:'4,000',
        commentNum:'20',
        save:'true'
    },
    {
        vidSrc:'https://player.vimeo.com/external/353539377.sd.mp4?s=fa4823ac540c8484ddbbcd6b0f8e9128fd2887f5&profile_id=165&oauth2_token_id=57447761',
        heartNum:'4,000',
        commentNum:'20',
        save:'true'
    },
]


function Reels(){
    const reels = data.map(item=> <Reel key={item.vidSrc.toString} data={item}/>)
    return(
        <div>
            <h1>Reels</h1>
            <div>
            {reels}
            </div>
        </div>
    )
}

export default Reels