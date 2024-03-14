import './App.css';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import OrderOnline from './pages/OrderOnline'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Menu' element={<Menu />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Order_Online' element={<OrderOnline />}/>
      <Route path='/Reservation' element={<Reservation />}/>
    </Routes>
    <Main />
    <Footer />
    </>
  );
}

export default App;
