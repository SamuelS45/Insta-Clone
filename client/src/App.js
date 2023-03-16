import './App.css';
import Comments from './components/Comments';
// import { HashRouter, Router, Route } from 'react-router-dom';
// import Post from './components/Post';
import Home from './Pages/Home';
import Nav from './components/Nav';
import Search from './components/Search';

import{Routes,Route,} from 'react-router-dom';
import Explore from './Pages/Explore';
// import Home from './Pages/Home';

function App() {
  // const feed = Data.map(post=>{<Post/>})
  return (
    <div className="App">
      <div className='nav-container'>
      <Nav/>
      </div>
      <div className='views'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
