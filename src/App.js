
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Page/Home/Home/Home';
import Video from './Page/Video/Video';
import { useState } from 'react';
import Form from './Component/Fom/Form';


function App() {
 const[sidebar,setSidebar]=useState(true);
  return (  
   <>
<div>
 <Navbar setSidebar={setSidebar}/>
 <Routes>
  <Route path='/' element={<Home sidebar={sidebar}/>}/>
 <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
 <Route path='/form/:categoryId/:formId' element={<Form/>}/>
 </Routes>
</div>
   </>  
  );
}

export default App;
