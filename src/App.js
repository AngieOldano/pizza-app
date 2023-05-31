import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import pizzaimage from './assets/pizzas-image.png';
import onion from './assets/onion.jpg';
import onionPepperoni from './assets/onion-pepperoni.jpg';
import onionHam from './assets/onion-ham.jpg';
import modern from './assets/modern.jpg';
import veggie from './assets/veggie.jpg';
import hell from './assets/hell.jpg';
import german from './assets/german.jpg';
import pepperoni from './assets/pepperoni.jpg';
import chesses4 from './assets/4chesses.jpg';
import easy from './assets/easy.png';
import easy2 from './assets/easy2.png';
import easy3 from './assets/easy3.png';
import { useState } from 'react';

function App() {

  const [pizzas, setPizzas] = useState(
    [
      {id:1,name:"ONION SPECIAL", ingredients:"Sauce, mozzarella, onion cut into feathers, cherry tomatoes confit, black olives"},
      {id:2,name:"VEGGIE ", ingredients:"Sauce, muzza, zucchini, roasted, roasted eggplant, candied cherry tomatoes, black olives, and basil leaves"},
      {id:3,name:"HELL ", ingredients:"Sauce, mozza, sliced bacon, sliced green jalapeños, red jalapeño sauce, red onion, shredded provolone and basil leaves"},
      {id:4,name:"MODERN ", ingredients:"Sauce, mozzarella, arugula, raw ham, dehydrated tomatoes, parmesan"},
      {id:5,name:"ONION HAM ", ingredients:"Sauce, mozzarella, onion cut into feathers, raw ham, parmesan"},
      {id:6,name:"GERMAN ", ingredients:"Sauce, mozzarella, caramelized onion, grill sausage and mustard"},
      {id:7,name:"ONION PEPPERONI ", ingredients:"Sauce, mozzarella, onion cut into feathers, pepperoni"},
      {id:8,name:"4 CHESSES ", ingredients:"Sauce, mozzarella, parmesan, fontina, gorgonzola, black olives"},
      {id:9,name:"PEPPERONI ", ingredients:"Mozzarella, pepperoni, parmesan"}
    ]
  );

  return (
    <div className=''>
      <Header/>
      
      <div className="mt-5 background-image row">

        <div className='col-7'>
        </div>

        <div className='col-5 text-white align-self-center'>
          <div className='mt-5'>
            <h1 className='display-1'>We Make the Best Pizza in Town</h1>
            <h3>Our number one mission is to deliver the best possible pizza for the best possible price for our customers. </h3>
          </div>
        </div> 

      </div>

      <div className='mt-5 mb-5 row container-fluid column-gap-5'>
        <div className='col-7 d-flex justify-content-center pr-1'>
          <article className='align-self-center'>
            <h1>Your Favorite Pizza,on the Way!</h1>
            <h3>Always on time</h3>
            <h5>We care so that our orders arrive as soon as possible in the best conditions</h5>
          </article>
        </div>
        <div className='col-4 d-flex pr-5 justify-content-center'>
          <img className='rounded-4' width="600" height="400" src={pizzaimage} alt="description of image" />
        </div>
      </div>

      <div className='pt-5 mb-5'>
        <div className='d-flex justify-content-center'>
          <article className='text-center'>
            <h1>MORE OFFERS, DEALS, AND DELIGHTS</h1>
            <h3>Discover our current deals and coupons for your favorites Pizzas.</h3>
          </article>
        </div>
        <div className='d-flex justify-content-center '> 
          <div className='mt-4 pizza-gif'>
            <button type="button" className="btn btn-warning rounded-5 m-4">Delivery Now</button>
          </div>
        </div>
      </div>


      <div className='p-5'>
        <div className='d-flex justify-content-center m-4'>
          <article className='text-center'>
            <h1>YOUR FAVORITE PIZZA DELIVERY PARTNER</h1>
          </article>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-4 d-flex justify-content-end text-center'>
             <div>
                <img className='rounded-4' width="200" height="200" src={easy} alt="description of image" />
                <p className='fw-bold'>Easy to Oreder</p>
                <p>You only need a few steps in food ordering</p>
              </div>
          </div>
          <div className='col-4 d-flex justify-content-center text-center'>
              <div>
                <img className='rounded-4' width="200" height="200" src={easy2} alt="description of image" />
                <p className='fw-bold'>Easy to Oreder</p>
                <p>Delivery that is always on time even faster</p>
              </div>
          </div>
          <div className='col-4 d-flex justify-content-start text-center'>
              <div>
                <img className='rounded-4' width="200" height="200" src={easy3} alt="description of image" />
                <p className='fw-bold'>Easy to Oreder</p>
                <p>Not only fast for us, quality is also number one</p>
              </div>
          </div>
        </div>
      </div>


      <div className='mb-5'>
        <div className='d-flex justify-content-center'>
          <article className='mt-5'>
            <h1>OUR PIZZAS</h1>
          </article>
        </div>
        
        <div className=''>

          <div className='mb-3 row '>          
            <div className='pizzas-container d-flex justify-content-center grid gap-0 column-gap-3'> 
              <div className='col-4 pizza-image-container'>
                <img className='rounded-4 zoom-pizza' width="400" height="400" src={onion} alt="description of image"/>
                <div class="overlay">
                  <div class="text-overlay">
                    <p>{pizzas[0].name}</p><p>{pizzas[0].ingredients}</p>
                  </div>
                </div>
              </div>
            
              
          
              <div className='col-4 pizza-image-container'>
                <img className='rounded-4 zoom-pizza' width="400" height="400" src={veggie} alt="description of image" />
                <div class="overlay">
                  <div class="text-overlay">
                    <p>{pizzas[1].name}</p><p>{pizzas[1].ingredients}</p>
                  </div>
                </div>
              </div>
         
              <div className='col-4 pizza-image-container'>
                <img className='rounded-4 zoom-pizza' width="400" height="400" src={hell} alt="description of image"/>
                <div class="overlay">
                  <div class="text-overlay">
                    <p>{pizzas[2].name}</p><p>{pizzas[2].ingredients}</p>
                  </div>
                </div>
              </div>  

            </div> 
          </div>
          <div className='mb-3 row '>          
            <div className='pizzas-container d-flex justify-content-center grid gap-0 column-gap-3'> 
              <div className='col-4 pizza-image-container'>
                <img className='rounded-4 zoom-pizza' width="400" height="400" src={modern} alt="description of image"/>
                <div class="overlay">
                  <div class="text-overlay">
                    <p>{pizzas[3].name}</p><p>{pizzas[3].ingredients}</p>
                  </div>
                </div>
              </div>
            
              
          
              <div className='col-4 pizza-image-container'>
                <img className='rounded-4 zoom-pizza' width="400" height="400" src={onionHam} alt="description of image" />
                <div class="overlay">
                  <div class="text-overlay">
                    <p>{pizzas[4].name}</p><p>{pizzas[4].ingredients}</p>
                  </div>
                </div>
              </div>
         
              <div className='col-4 pizza-image-container'>
                <img className='rounded-4 zoom-pizza' width="400" height="400" src={german} alt="description of image"/>
                <div class="overlay">
                  <div class="text-overlay">
                    <p>{pizzas[5].name}</p><p>{pizzas[5].ingredients}</p>
                  </div>
                </div>
              </div>  

            </div> 
          </div>
          <div className='mb-3 row '>          
            <div className='pizzas-container d-flex justify-content-center grid gap-0 column-gap-3'> 
              <div className='col-4 pizza-image-container'>
                <img className='rounded-4 zoom-pizza' width="400" height="400" src={onionPepperoni} alt="description of image"/>
                <div class="overlay">
                  <div class="text-overlay">
                  <p>{pizzas[6].name}</p><p>{pizzas[6].ingredients}</p>
                  </div>
                </div>
              </div>
            
              
          
              <div className='col-4 pizza-image-container'>
                <img className='rounded-4 zoom-pizza' width="400" height="400" src={chesses4} alt="description of image" />
                <div class="overlay">
                  <div class="text-overlay">
                    <p>{pizzas[7].name}</p><p>{pizzas[7].ingredients}</p>
                  </div>
                </div>
              </div>
         
              <div className='col-4 pizza-image-container'>
                <img className='rounded-4 zoom-pizza' width="400" height="400" src={pepperoni} alt="description of image"/>
                <div class="overlay">
                  <div class="text-overlay">
                    <p>{pizzas[8].name}</p><p>{pizzas[8].ingredients}</p>
                  </div>
                </div>
              </div>  

            </div> 
          </div>



          
        </div>

        
      </div>

      <Footer/>
    </div>
  );
}

export default App;


 