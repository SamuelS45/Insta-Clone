function Notification(){
    return(
            <div className="search-container">
            <div className="s-top">
                <h1>Search</h1>
                <div className="s-center">
                <input className="search-box" placeholder="Search" onChange={(e)=>setText(e.target.value)} type='text' value={text}></input>
                {/* <input></input> */}
                <button className="search-clear"> <Delete style={{color:'grey'}} size={size}/></button>
                </div>
            </div>
        <hr></hr>
        <div>
            <div className="s-bottom-title">
                <h3>Recent</h3>
                <button id="comment-btn" style={{color:'rgb(129, 198, 221)'}}>Clear All</button>
            </div>
        {/* <h5>{recents}</h5> */}
        </div>
        <ul id="s-ul">
            {listRecents}
        </ul>
        </div>
    )
}


export default Notification