import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Register from './Farmer/Register';
import AdminSignin from './Admin/AdminSignin';
import TraderSignin from './Trader/TraderSignin';
import Wholesalerssignin from './wholesalers/Wholesalerssignin'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faregister' element={<Register />} />
          <Route path='/adminsignin' element={<AdminSignin />} />
          <Route path='/tradersignin' element={<TraderSignin/>}/>
          <Route path='/wholesalersignin' element={<Wholesalerssignin/>}/>
          

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
