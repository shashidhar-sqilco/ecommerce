import Homepage from './Pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Storespage from './Pages/Storespage';
import Singlestorepage from './Pages/Singlestorepage';
import Singleproductpage from './Pages/Singleproductpage';
import Register from './Components/Register';
import Login from './Components/Login';
import Panierpage from './Pages/Panierpage';
import Paimentpage from './Pages/Paimentpage';
import ResponsableStore from './Pages/ResponsabePages/ResponsableStore';
import { UserProvider } from './Usercontext';
import { useState } from 'react';
import AddPfroductForm from './Components/ResponsableComponents/AddPfroductForm';
import ResponsableDashboard from './Pages/ResponsabePages/ResponsableDashboard';



function App() {

  return (
    <UserProvider>
    <div className='App'>
     
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/stores' element={<Storespage/>} />
          <Route path='/store' element={<Singlestorepage/>} />
          <Route path='/product' element={<Singleproductpage/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/panier' element={<Panierpage/>} />
          <Route path='/paiment' element={<Paimentpage/>} />
          <Route path='/mystore' element={<ResponsableStore/>} />
          <Route path='/productadd' element={<AddPfroductForm/>} />
          <Route path='/responsabledashboard' element={<ResponsableDashboard/>} />
        </Routes>
        </Router>
       
  

    </div> </UserProvider>
  )
}

export default App
