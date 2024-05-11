import logo from './logo.svg'
import Header from './Components/Header'
import Homepage from './Pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Storespage from './Pages/Storespage';
import Singlestorepage from './Pages/Singlestorepage';
import Singleproductpage from './Pages/Singleproductpage';
import Register from './Components/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/stores' element={<Storespage/>} />
          <Route path='/store' element={<Singlestorepage/>} />
          <Route path='/product' element={<Singleproductpage/>} />
  </Routes>
  </Router>


    </div>
  )
}

export default App
