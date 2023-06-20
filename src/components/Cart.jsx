import React, { Fragment, useState } from 'react';
import Pizzas from './Pizzas';
import { Button, Form, Modal, Col } from 'react-bootstrap';


const Cart = ({ closeCart, showCart, cart, deletePizza, pizza }) => {
    return (
      <Fragment>
        <Modal show={showCart} onHide={closeCart}>
          <Modal.Header closeButton>
            <Modal.Title>Pizzas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {cart.map((pizza, id) => (
                <Pizzas 
                    key={id} 
                    pizza={pizza} />
              ))}
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  };
  
  export default Cart;
  
  