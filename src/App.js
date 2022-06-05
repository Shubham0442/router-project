
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ ';
import Home from './components/Home';
import MenPage from './components/MenPage';
import Navbar from './components/Navbar';
import Womens from './components/Womens';
import style from "./components/cart.module.css"
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className={style.container}>
      <Routes>
             <Route path='/' element={<Home/>} ></Route>
             <Route path='/menspage' element={<MenPage/>}></Route>
             <Route path='/womenspage' element={<Womens/>}></Route>
             <Route path='/contactus' element={<ContactUs/>}></Route>
             <Route path='/aboutus' element={<AboutUs/>}></Route>
             <Route path='/faq' element={<FAQ/>}></Route>
             <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
