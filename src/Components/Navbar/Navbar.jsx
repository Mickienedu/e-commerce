import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/order.png'
import { Link } from 'react-router-dom' //route. using <Link> on the li
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown.png'

const Navbar = () => {
// usestate for changing of active border line onclick 
const [menu, setMenu] = useState("shop");
const {getTotalCartItems} = useContext(ShopContext);  //from shopcontext.jsx 
const menuRef = useRef();  // for hamburger menu

const dropdown_toggle = (e) =>{
  menuRef.current.classList.toggle('nav-menu-vissible');
  e.target.classList.toggle('open');
}


  return (
    <div className='navbar'>
      <div className="nav-logo">
      <img src={logo} alt="" />
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("shoes")}}><Link style={{textDecoration: 'none'}} to='/shoes'>Shoes</Link> {menu==="shoes"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {/* logout functionality */}
        {localStorage.getItem('auth-token')?
         <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} > Logout</button>
        : <Link to='/login'><button>Login</button></Link>
}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div> 
      </div>
    </div>
  )
}

export default Navbar

// send to App.js file 