import React, { Fragment } from 'react';


const Pizzas = ({pizzas,setCart,cart}) => {

  let conditon = true;

 // const {id, image, name, ingredients} = pizza;

  const addPizza = (pizza) => {
    setCart([...cart, pizza]);
    console.log(cart)
  };
  

    return ( 
        <Fragment>

          <div className='row'>
          {pizzas.map(product => (          
            <div className='col'>
              <div className='pizzas-container d-flex justify-content-center grid gap-0' > 
                <div className='pizza-image-container mb-3'key={product.id}>
                  <img className='rounded-4 zoom-pizza' width="400" height="400" src={product.image} alt={product.name}/>
                  <div class="overlay">
                    <div class="text-overlay">
                        <p>{product.ingredients} | {product.price}</p>

                      {
                         <button onClick={() => addPizza(product)}>Comprar</button>

                      }
                    
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            )) }
          </div>

        </Fragment>
     );
}
 

export default Pizzas;


/*

{pizzas.map(product => (          
            <div className='col'>
              <div className='pizzas-container d-flex justify-content-center grid gap-0' > 
                <div className='pizza-image-container 'key={product.id}>
                  <img className='rounded-4 zoom-pizza' width="400" height="400" src={product.image} alt={product.name}/>
                  <div class="overlay">
                    <div class="text-overlay">
                        <p>{product.ingredients} | {product.price}</p>

                      {
                         <button onClick={() => addPizza(id)}>Comprar</button>

                      }
                    
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            )) }
            <p>hfgdhfdhdf</p>
*/