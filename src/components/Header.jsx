import React, { useState } from 'react';
import logonav from "../assets/logonav.png";
import OrderForm from './OrderForm';
import Cart from './Cart';

const Header = ({cart, setCart}) => {
    
    const [showForm, setShowForm] = useState(false);
        const openForm = () => {
            setShowForm(true);
        };

    const closeForm = () => {
        setShowForm(false);
    };

    const [showCart, setShowCart] = useState(false);
        const openCart = () => {
            setShowCart(true);
        };

    const closeCart = () => {
        setShowCart(false);
    };

    const cartNumber = (cart) => {
        const amount = cart.length
        return amount
    }

    return (  
        <div>
            <nav class=" navbar navbar-light bg-faded fixed-top bg-body-tertiary">
                <div>
                    <img width="190" height="70" src={logonav} alt=""/>
                </div>
                <div className=''>
                    <ul className='nav nav-navbar pull-xs-right fs-5 fw-normal'>
                        <li>
                            <div className="container-fluid">
                                <form className="d-flex" role="search">
                                  <input className="form-control me-2" type="search" placeholder="" aria-label="Search"></input>
                                  <button className="btn btn-light" type="submit"><i class="bi bi-search"></i></button>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-dark" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-dark" href="">About</a>
                        </li>
                        <li className="nav-item mx-3">
                            <button type="button" className='btn' onClick={openCart}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                <span class=" badge rounded-pill bg-danger">
                                    {
                                        cartNumber(cart) == 0
                                            ? null
                                            : cartNumber(cart)
                                    }
                                </span>
                            </button>
                            
                            {showCart && (
                                <Cart 
                                    cart = {cart}
                                    setCart={setCart}
                                    closeCart={closeCart} 
                                    showCart={showCart}/>
                            )}
                            
                        </li>
                        <li li className="nav-item mx-5">
                            <button type="button" className="btn btn-warning rounded-5" onClick={openForm}>Delivery Now</button>
                            {showForm && (
                                <OrderForm 
                                    closeForm={closeForm} 
                                    showForm={showForm}/>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;