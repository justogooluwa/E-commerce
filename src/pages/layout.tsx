import { Outlet } from "react-router-dom";
import  "../index.css"
import logo from "../images/logo.svg"
import menu from "../images/icon-menu.svg"
import avatar from "../images/image-avatar.png"
import cart from "../images/icon-cart.svg"
import deleted from "../images/icon-delete.svg"
import close from "../images/icon-close.svg"
import product1 from "../images/image-product-1.jpg"
import product from "../images/image-product-1-thumbnail.jpg"
import next from "../images/icon-next.svg"
import previous from "../images/icon-previous.svg"
import thumbnail1 from "../images/image-product-1-thumbnail.jpg"
import thumbnail2 from "../images/image-product-2-thumbnail.jpg"
import thumbnail3 from "../images/image-product-3-thumbnail.jpg"
import thumbnail4 from "../images/image-product-4-thumbnail.jpg"
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
import { useState } from "react";

function Layout() {
  const [openMenu, setOpenMenu] = useState(false) 
  const handOpenMenu =() =>{
    setOpenMenu(true)
  }
  const closeOpenMenu =() =>{
    setOpenMenu(false)
  }

  
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState(0); 
  const [cartOpen, setCartOpen] = useState(false)
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
  // Increment item count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Decrement item count
  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };
  const addToCart = () => {
    if (count > 0) {
      setCartItems(prevCartItems => prevCartItems + count);
    } else {
     
    }
  };

  const clearCart = () => {
    setCartItems(0);
  };

 const toggleCart = () => {
    setCartOpen(prev => !prev);
  };

  
  
  const pricePerItem = 125;
  const totalCost = cartItems * pricePerItem;
 
  return (
    <>
    <div className="container">
    {/* navbar */}
      <nav className="navbar">
      <div className="nav-container">
        <div className="nav_left-sec">
          {
            openMenu ?(
             
              <img src={close} alt="" className="close-btn hidden" onClick={closeOpenMenu}/>
            ):
            (
              <img src={menu} alt=""  className="hidden menu" onClick={handOpenMenu}/>
            )
           
          }
      
      <img src={logo} alt="" className="nav_logo"/>
      <div className={`overlay ${openMenu ? 'active' : 'hidden'}`} ></div>
      <ul className={`nav_links ${openMenu ? 'active' : 'hidden'}`} >
      {menuItems.map((item, index) => (
                  <li key={index} className="nav_link">
                    {item}
                  </li>
                ))}
       </ul>
        </div>
        <div className="nav_right-sec">
          {/* cart */}
          <div className="cart-container">
            <button className="cart-btn" onClick={toggleCart}>
              <span className={`indicator ${cartItems > 0 ? 'hidden' : 'visible'}`}>
              {cartItems}
              </span>
              <img src={cart} alt="Cart" className="cart" />
                </button>
                {cartOpen && (
                  <div className={`cart-wrp ${cartItems === 0 ? 'visible' : ''}`}>
                    {cartItems > 0 ? (
                      <div className="cart-content">
                        <p className="cart-heading">Cart</p>
                        <div className="divider"></div>
                        <div className="product">
                          <div>
                            <img src={product} className="product-img" alt="Product" />
                            <div className="product-info">
                              <p className="product-title">Fall Limited Edition Sneakers</p>
                              <p><span>$125.00</span> × <span className="number">{cartItems}</span> <b>${totalCost}</b></p>
                            </div>
                            <button className="delete-btn" onClick={clearCart}>
                              <img src={deleted} alt="Delete" />
                            </button>
                          </div>
                          <button className="checkout-btn">Checkout</button>
                        </div>
                      </div>
                    ) : (
                      <div className="cart-container">
                      <p className="cart-heading">Cart</p>
                      <div className="divider"></div>
                      <div className="cart-content empty">
                        <p className="cartt">Your cart is empty.</p>
                      </div>
                    </div>
                    )}
                  </div>
                )}
              </div>
              <img src={avatar} alt="Avatar" className="avatar" />
            </div>
          </div>
        </nav>
        <main>
          <section className="thumbnails">
          <img src={product1} alt="" className="main-thumbnails invisible-mob" />
          <div className="mobile-thumb hidden">
            <img src={product1} alt="" className="thumb-mob" />
            <button id="next"><img src={next} alt="" /></button>
            <button id="previous"><img src={previous} alt="" /></button>
          </div>
          <div className="preview">
           <img src={thumbnail1} alt="" className="selected"/>
           <img src={thumbnail2} alt="" />
           <img src={thumbnail3} alt="" />
           <img src={thumbnail4} alt="" />
          </div>
          </section>
          <section className="content">
            <p className="company">Sneaker Company </p>
            <h1 className="title">Fall Limited Edition Sneakers</h1>
            <p className="info">
            These low-profile sneakers are your perfect casual wear companion. 
            Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="price">
              <div className="new-price">
                <p className="now">$125.00</p>
                <span>50%</span>
              </div>
              <p className="old-price">$250.00</p>
            </div>
            <div className="buttons">
              <div className="amount-btn">
                <button id="minus">
                  <img src={minus} alt="" onClick={decrement}/>
                </button>
                <p className="amount">{count}</p>
                <button id="plus" onClick={increment}>
                  <img src={plus} alt="" />
                </button>
              </div>
              <button className="add-btn" onClick={addToCart}>
              <img src={cart} alt="" className="carts" />
                Add to cart
              </button>
            
            </div>
          </section>
        </main>
        </div>
         <div className="lightbox invisible">
      <div className="lightbox-container">
        <button className="close-lightbox"><img src={close} alt="close"/></button>
        <img
          src={product1}
          alt="product"
          className="main-thumbnail invisible-mob"
        />
        <div className="preview">
          <img
            className="selected"
            src={thumbnail1}
            alt=""
          />
          <img src={thumbnail2}alt="" />
          <img src={thumbnail3} alt="" />
          <img src={thumbnail4} alt="" />
        </div>
      </div>
    </div>
      <Outlet />
    </>
  )
};


export default Layout;