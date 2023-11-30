import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'react-multi-carousel/lib/styles.css';
// import Trending from './components/Trending'

function App() {


  return (
    <div className='App'>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<Login/>} />
          </Routes>
          <Footer/>
      </BrowserRouter >
     </div>
  )
}
export default App


