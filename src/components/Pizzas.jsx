import React, { Fragment } from 'react';
import onion from '../assets/hell.jpg';

const Pizzas = ({pizzas,pizza,setCart,cart}) => {

  const {id, image, name, ingredients} = pizza;

  const addPizza = (id) => {
    setCart([...cart, id]);
    console.log(cart)
  };
  
  const deletePizza = (id) => {
    if (cart){
      const newCart = pizzas.filter(pizza => pizza.id!==id);    
      setCart(newCart);
    }
  };
    return ( 
        <Fragment>
          <div className='row'>
            {pizzas.map(product => (          
            <div className='col'>
              <div className='pizzas-container d-flex justify-content-center grid gap-0' > 
                <div className='pizza-image-container 'key={product.id}>
                  <img className='rounded-4 zoom-pizza' width="400" height="400" src={product.image} alt={product.name}/>
                  <div class="overlay">
                    <div class="text-overlay">
                        <p>{product.ingredients} | {product.price}</p>

                      {
                        pizzas
                          ? <button onClick={() => addPizza(id)}>Comprar</button>

                          : <button onClick={() => deletePizza(id)}>Eliminar</button>
                      }
                    
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            ))}
          </div>

        </Fragment>
     );
}
 

export default Pizzas;
