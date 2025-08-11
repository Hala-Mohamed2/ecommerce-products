import logo from '../images/logo.svg';
import { Form, Link } from 'react-router-dom';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png'
import { useState } from 'react';
import deleteicon from '../images/icon-delete.svg';
import { RiDeleteBin6Line } from "react-icons/ri";



const Header = ({cartItems , onDelete}) =>{
  const itemCount = cartItems.reduce((sum,item) => sum + item.quantity,0);
  const [showCart , setShowCart] = useState(false)
  return(
    <div className="header">
      <div className="navbar">
        <img src={logo}/>
        <div className='nav'>
          <Link to="">Collections</Link>
          <Link to="">Men</Link>
          <Link to="">Women</Link>
          <Link to="">About</Link>
          <Link to="">Contact</Link>
        </div>
      </div>
      <div className='header-cart'>
        <img src={cart} onClick={()=> setShowCart(!showCart)}/>

        {showCart && (
  <div className="cart-preview">
    <h4>Cart</h4>
    <hr />
    {cartItems.length === 0 ? (
      <p className='empty'>Your cart is empty.</p>
    ) : (
      cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt="product" className="cart-thumb" />
          <div className="cart-details">
            <p>{item.title}</p>
            <p>
              ${item.price} x {item.quantity}{" "}
              <strong>${item.price * item.quantity}</strong>
            </p>
          </div>
          <RiDeleteBin6Line onClick={() => onDelete(index)}/>
        </div>
      ))
    )}
    {cartItems.length > 0 && <button className="checkout-btn">Checkout</button>}
  </div>
)}

        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        <img className='avat' src={avatar}/>
      </div>
    </div>
  )
}


export default Header;