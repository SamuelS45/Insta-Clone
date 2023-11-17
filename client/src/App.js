import './App.css';
// import Comments from './components/Comments';
// import { HashRouter, Router, Route } from 'react-router-dom';
// import Post from './components/Post';
import Home from './Pages/Home';
import Nav from './components/nav/Nav';
// import Search from './components/Search Orig';
import Reels from './Pages/Reels'
import{Routes,Route,} from 'react-router-dom';
import Explore from './Pages/Explore';
import Message from './Pages/messages/Messages';
import Profile from './Pages/profile/Profile';
import LogIn from './Pages/login/LogIn';
import Create from './components/create/Create';
import React, { useState } from 'react';

// import Home from './Pages/Home';
export const userProfile = React.createContext()

function App() {
  // const feed = Data.map(post=>{<Post/>})
  const [user, setUser] = useState({
    img:'https://images.pexels.com/photos/16010173/pexels-photo-16010173.jpeg?auto=compress&cs=tinysrgb&w=600',
    name:'Brutus',
    username:'Rome_w/_love',
    caption:'Rome is life, the republic is life',
    msg:'Come lets go',
    post:'55',
    following:'109',
    followers:'1054'
    // time:'55 min'
    
})
  return (
    <userProfile.Provider value={user}>
    <div className="App">
      <div className='nav-container'>
      <Nav/>
      </div>
      <div className='views'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/search' element={<Search/>}/> */}
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/reels' element={<Reels/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<LogIn/>}/>
        
      </Routes>
        {/* <button><Search/></button> */}
      </div>
    </div>
    </userProfile.Provider>
  );
}

export default App;
