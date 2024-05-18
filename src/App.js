import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Storespage from './Pages/Storespage';
import Singlestorepage from './Pages/Singlestorepage';
import Singleproductpage from './Pages/Singleproductpage';
import Register from './Components/Register';
import Login from './Components/Login';
import Panierpage from './Pages/Panierpage';
import Paimentpage from './Pages/Paimentpage';
import ResponsableStore from './Pages/ResponsabePages/ResponsableStore';
import AddProductForm from './Components/ResponsableComponents/AddProductForm';
import ResponsableDashboard from './Pages/ResponsabePages/ResponsableDashboard'; // Correct import
import Header from './Components/Header';
import Footer from './Components/Footer';
import { UserProvider } from './Usercontext';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(localStorage.getItem('userData'));

  useEffect(() => {
    // Update user state when localStorage changes
    const handleStorageChange = () => {
      setUser(localStorage.getItem('userData'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <UserProvider value={{ user, setUser }}>
      <div className="App">
        <Router>
          <Header />
          
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/stores" element={<Storespage />} />
            <Route path="/store" element={<Singlestorepage />} />
            <Route path="/singleproduct" element={<Singleproductpage />} />
            <Route path="/panier" element={<Panierpage />} />
            <Route path="/paiment" element={<Paimentpage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {user && (
              <>
                <Route path="/mystore" element={<ResponsableStore />} />
                <Route path="/productadd" element={<AddProductForm />} />
                <Route path="/responsabledashboard" element={<ResponsableDashboard />} />
              </>
            )}
          </Routes>
          <Footer />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
