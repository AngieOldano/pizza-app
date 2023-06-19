import React, { Fragment } from 'react';
import onion from '../assets/onion.jpg';
import onionPepperoni from '../assets/onion-pepperoni.jpg';
import onionHam from '../assets/onion-ham.jpg';
import modern from '../assets/modern.jpg';
import veggie from '../assets/veggie.jpg';
import hell from '../assets/hell.jpg';
import german from '../assets/german.jpg';
import pepperoni from '../assets/pepperoni.jpg';
import chesses4 from '../assets/4chesses.jpg';

const Pizzas = ({pizzas,pizza,addPizza,cart}) => {
  
  const {id, name, ingredients} = pizza;

  const addPizzas = (id) => {
    const pizza = pizzas.filter(
        pizza => pizza.id === id
    )[0];
    addPizza([...cart, pizza]);
    console.log(cart); 
};
  
    return ( 
        <Fragment>
          <div>
            <div className='mb-3 row '>          
              <div className='pizzas-container d-flex justify-content-center grid gap-0 column-gap-3'> 
                <div className='col-4 pizza-image-container'>
                  <img className='rounded-4 zoom-pizza' width="400" height="400" src={onion} alt="description of image"/>
                  <div class="overlay">
                    <div class="text-overlay">
                      <p>{pizzas[0].name}</p><p>{pizzas[0].ingredients}</p>
                      <button
                        type="button"
                        onClick={ () => addPizzas(id)}>
                          Comprar </button>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </Fragment>
     );
}
 
export default Pizzas;