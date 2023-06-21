import React, { Fragment, useEffect, useState } from 'react';
import Pizzas from './Pizzas';
import { Button, Form, Modal, Col, ModalFooter } from 'react-bootstrap';


const Cart = ({ cart, closeCart, showCart, setCart }) => {

  const deletePizza = (pizza) => {
    const index = cart.findIndex(pizzaCart => pizzaCart === pizza);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  const totalCart = (cart) => {
    const total = cart.reduce((partialSum, pizza) => partialSum + pizza.price, 0)
    return(total)
  }

  const deleteAll = () => {
    const newCart = [];
    setCart(newCart);
  }


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
                <div>
                  {pizza.name}  | $ {pizza.price}
                  <button type="button" className="btn btn-danger rounded-5 m-2" onClick={() => deletePizza(pizza)}>Delete</button>
                </div>
              </div> 
              ))
              }
            </div>
          </Modal.Body>
          <ModalFooter className='row'>
            <div className='col-6 d-flex justify-content-start'><button type="button" className="btn btn-danger rounded-5 m-2 " onClick={deleteAll}>Delete All</button></div>
            <div className='col-2'><button type="button" className="btn btn-warning rounded-5 m-2 ">Buy</button></div>
            <div className='col-3'>Total: ${totalCart(cart)}</div>          
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  };
  
  export default Cart;