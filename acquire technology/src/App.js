import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './acquirepage/navb/nav';

// import { Navbar } from './acquirepage/navbar/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './acquirepage/homepage/home';
import {Course} from './acquirepage/coursepage/course';
import {Livecls} from './acquirepage/liveclass/classlv';
import {Uswhy} from './acquirepage/whypage/why';
import { Footer } from './acquirepage/footerpage/footer';
import { Contacts } from './acquirepage/contactpage/contact';


function App() {
  return (

    
    <BrowserRouter>
      
         <Navbarr />
      <Routes>
     
        <Route path='/'  element={<Home />} />
        <Route path='/acquirepage/coursepage/course' element={<Course />} />
        <Route path='/acquirepage/liveclass/classlv' element={<Livecls /> }/>
        <Route path='/acquirepage/whypage/why' element={<Uswhy/>} />
        <Route path='/acquirepage/contactpage/contact' element={<Contacts/>} />

      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
