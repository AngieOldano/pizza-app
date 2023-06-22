import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Pizzas from './components/Pizzas';
import pizzaimage from './assets/pizzas-image.png';
import easy from './assets/easy.png';
import easy2 from './assets/easy2.png';
import easy3 from './assets/easy3.png';
import { useEffect, useState } from 'react';
import onion from './assets/onion.jpg';
import onionPepperoni from './assets/onion-pepperoni.jpg';
import onionHam from './assets/onion-ham.jpg';
import modern from './assets/modern.jpg';
import veggie from './assets/veggie.jpg';
import hell from './assets/hell.jpg';
import german from './assets/german.jpg';
import pepperoni from './assets/pepperoni.jpg';
import chesses4 from './assets/4chesses.jpg';


function App() {


  const pizzas = 
    [
      {id:1,price:20,image:onion,name:"ONION SPECIAL", ingredients:"Sauce, mozzarella, onion cut into feathers, cherry tomatoes confit, black olives"},
      {id:2,price:25,image:veggie,name:"VEGGIE ", ingredients:"Sauce, muzza, zucchini, roasted, roasted eggplant, candied cherry tomatoes, black olives, and basil leaves"},
      {id:3,price:30,image:hell,name:"HELL ", ingredients:"Sauce, mozza, sliced bacon, sliced green jalapeños, red jalapeño sauce, red onion, shredded provolone and basil leaves"},
      {id:4,price:25,image:modern,name:"MODERN ", ingredients:"Sauce, mozzarella, arugula, raw ham, dehydrated tomatoes, parmesan"},
      {id:5,price:25,image:onionHam,name:"ONION HAM ", ingredients:"Sauce, mozzarella, onion cut into feathers, raw ham, parmesan"},
      {id:6,price:30,image:german,name:"GERMAN ", ingredients:"Sauce, mozzarella, caramelized onion, grill sausage and mustard"},
      {id:7,price:25,image:onionPepperoni,name:"ONION PEPPERONI ", ingredients:"Sauce, mozzarella, onion cut into feathers, pepperoni"},
      {id:8,price:30,image:chesses4,name:"4 CHESSES ", ingredients:"Sauce, mozzarella, parmesan, fontina, gorgonzola, black olives"},
      {id:9,price:25,image:pepperoni,name:"PEPPERONI ", ingredients:"Mozzarella, pepperoni, parmesan"}
    ]


  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart)
  },[cart]);



  return (
    <div className=''>
      <Header
        cart = {cart}
        setCart={setCart}
      />
      
      <div className="mt-5 background-image row">
        <div className='col-7'></div>
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
        {
          
          <Pizzas
            cart = {cart}
            setCart={setCart}
            pizzas = {pizzas}
            />
          
        }
         
      </div>

      <Footer
        facebook = {"https://www.facebook.com/"}
        whatsapp = {"https://web.whatsapp.com/"}
        tiktok = {"https://www.tiktok.com/"}
        instagram = {"https://www.instagram.com/"}
        twitter = {"https://www.twitter.com/"}
      />

    </div>
  );
}

export default App;


 