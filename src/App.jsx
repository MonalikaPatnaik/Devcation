import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import ContactPage from './Pages/Contact'
import ReviewPage from './Pages/Review'
import ChatComponent from './components/Forum';
import ReadingArea from './Pages/ReadingArea';
import Games from './Pages/Games';
import Privacy from './Pages/Privacy';
import Assessment from './Pages/Assessment'
// import Features from './components/Features'

import RouteNotFound from './Pages/RouteNotFound';

function App() {


  return (
    <>
  <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/review" element={<ReviewPage />} />
    <Route path="/forum" element={<ChatComponent />} />
    <Route path='/readingarea' element={<ReadingArea/>} />
    <Route path='/games' element={<Games/>} />
    <Route path='/assessment' element={<Assessment/>} />
    <Route path='/privacy' element={<Privacy/>}/>
    <Route path='*' element={<RouteNotFound/>}/>
    </Routes>
    </Router>
  
    {/* <Features/> */}
    </>
  )
}

export default App
