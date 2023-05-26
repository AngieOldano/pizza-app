import './App.css';
import Header from './components/Header';
import pizzaimage from './assets/pizzas-image.png';
import onion from './assets/onion.jpg';
import onionPepperoni from './assets/onion-pepperoni.jpg';
import onionHam from './assets/onion-ham.jpg';
import modern from './assets/modern.jpg';
import veggie from './assets/veggie.jpg';
import hell from './assets/hell.jpg';
import german from './assets/german.jpg';

function App() {

  return (
    <div className=''>
      <Header/>
      
      <div className="background-image">
        <div className='text-white d-flex justify-content-end text-center'>
          <div className='mt-5'>
            <h1 className=''>We Make the Best Pizza in Town</h1>
            <p className=''>Our number one mission is to deliver the best possible</p>
            <p>pizza for the best possible price for our customers. </p>
          </div>
        </div>   
      </div>

      <div className='mt-5 row container-fluid'>
        <div className='mt-5 col-6'>
          <h1>Your Favorite Pizza,on the Way!</h1>
          <h3>Always on time</h3>
          <p>We care so that our orders arrive as soon as possible in the best conditions</p>
        </div>
        <div className='col-6'>
          <img className='rounded-4' width="400" height="400" src={pizzaimage} />
        </div>
      </div>

      <div className=''>
        <div className='d-flex justify-content-center'>
          <article className='mt-5'>
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

      <div className=''>
        <div className='d-flex justify-content-center'>
          <article className='mt-5'>
            <h1>OUR PIZZAS</h1>
          </article>
        </div>
        
        <div className='row'>
          <div className='col-4'>
            <img className='rounded-4' width="400" height="400" src={onion}/>
          </div>
          <div className='col-4'>
            <img className='rounded-4' width="400" height="400" src={veggie}/>
          </div>
          <div className='col-4'>
            <img className='rounded-4' width="400" height="400" src={hell}/>
          </div>  
        </div>

        <div className='row'>
          <div className='col-4'>
            <img className='rounded-4' width="400" height="400" src={modern}/>
          </div>
          <div className='col-4'>
            <img className='rounded-4' width="400" height="400" src={onionHam}/>
          </div>
          <div className='col-4'>
            <img className='rounded-4' width="400" height="400" src={german}/>
          </div>  
        </div>

        <div className='row'>
          <div className='col-4'>
            <img className='rounded-4' width="400" height="400" src={onionPepperoni}/>
          </div>
          <div className='col-4'>
            <img className='rounded-4' width="400" height="400" src={onionPepperoni}/>
          </div>
          <div className='col-4'>
            <img className='rounded-4' width="400" height="400" src={onionPepperoni}/>
          </div>  
        </div>

        
      </div>

    </div>
  );
}

export default App;


 