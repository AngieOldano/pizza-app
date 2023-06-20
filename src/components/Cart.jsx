import React, { Fragment, useEffect, useState } from 'react';
import Pizzas from './Pizzas';
import { Button, Form, Modal, Col } from 'react-bootstrap';


const Cart = ({ cart, closeCart, showCart, setCart }) => {

  const deletePizza = (pizza) => {
    if (cart){
      const newCart = cart.filter(pizzaCart => pizzaCart.id!==pizza.id);    
      setCart(newCart);
    }
  };


    return (
      <Fragment>
        <Modal show={showCart} onHide={closeCart}>
          <Modal.Header closeButton>
            <Modal.Title>Pizzas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            {cart.map((pizza, id) => (
              <div>
                <div>{pizza.name}</div>
                <button onClick={() => deletePizza(pizza)}>Delete</button>
              </div>
                
              ))
              }
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  };
  
  export default Cart;
  
  