import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Register from './Farmer/Register';
import CropPlanning from './Farmer/CropPlanning';
import Recommendation from './Farmer/Recommendation';
import Timeline from './Farmer/Timeline';
import Planning from './Farmer/Planning';
import Govupdate from './Farmer/Govupdate';

import AdminSignin from './Admin/AdminSignin';
import TraderSignin from './Trader/TraderSignin';
import Wholesalerssignin from './wholesalers/Wholesalerssignin'
import CustomerSignin from './Customer/CustomerSignin'
import CropPredictionChart from './Farmer/CropPredictionChart';




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faregister' element={<Register />} />
          <Route path='/facropplan' element={<CropPlanning/>}/>
          <Route path='/farecommendation'element={<Recommendation/>}/>
          <Route path='/fatimeline' element={<Timeline/>}/>
          <Route path='/faplanning' element={<Planning/>}/>
          <Route path='/fagov'element={<Govupdate/>}/>
          

          <Route path='/adminsignin' element={<AdminSignin />} />
          <Route path='/tradersignin' element={<TraderSignin/>}/>
          <Route path='/wholesalersignin' element={<Wholesalerssignin/>}/>
          <Route path='/customersignin' element={<CustomerSignin/>}/>

          <Route path = '/chart' element = {<CropPredictionChart/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
