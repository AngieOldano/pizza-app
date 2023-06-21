import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

const Pizzas = ({pizzas,setCart,cart}) => {

  let conditon = true;

  const addPizza = (pizza) => {
    setCart([...cart, pizza]);
    console.log(cart)
  };
  
    return ( 
        <Fragment>
          <Row>
            {pizzas.map(product => (          
              <Col className='pizzas-container'>
                <div> 
                  <div className='pizza-image-container mb-4'key={product.id}>
                    <img className='rounded-4 zoom-pizza' width="400" height="400" src={product.image} alt={product.name}/>
                    <div class="overlay">
                      <div class="text-overlay">
                          <p>{product.ingredients} </p><p> $ {product.price}</p>
                          {
                            <button type="button" className="btn btn-light rounded-5" onClick={() => addPizza(product)}>Add to cart</button>
                          }
                      </div>
                    </div>
                  </div>
                </div>
              </Col> 
            ))}
          </Row>
        </Fragment>
     );
}
 

export default Pizzas;


