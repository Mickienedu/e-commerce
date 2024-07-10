import './App.css';
import Navbar from './Components/Navbar/Navbar';
// set up route 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/men-banner.jpg'
import women_banner from './Components/Assets/women-banner.png'
import shoe_banner from './Components/Assets/shoe-banner.jpeg'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/shoes' element={<ShopCategory banner={shoe_banner} category='shoe'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

{/* link route to navbar  */}
      </Routes>
      <Footer />
      

      </BrowserRouter>
      
    </div>
  );
}

export default App;
