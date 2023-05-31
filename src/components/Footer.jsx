import React from 'react';
import logonav from "../assets/logonav.png";

const Footer = () => {

    const anio = new Date().getFullYear();

    return (  
        <div className='background-footer'>
            <div className='row'>
                <div className='col-3 m-4'>
                    <div className='mb-3'>
                        <img width="200" height="100" src={logonav} alt=""/>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href=""><i className="bi bi-whatsapp text-white m-2"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="bi bi-facebook text-white m-2"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="bi bi-tiktok text-white m-2"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="bi bi-twitter text-white m-2"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="bi bi-instagram text-white m-2"></i></a></li>
                  </ul>
                </div>
                <div className='col-4 text-center'>
                    <article className='text-center m-4'>
                        <h4 className='text-white'>CONTACT US</h4>
                        <h6 className='text-white'>416 533 3311</h6>
                        <h6 className='text-white'>@pizzadelivery.com</h6>
                        <h6 className='text-white'>1596 Queen Street West Toronto, Ontario</h6>
                    </article>
                    <p className='fw-lighter'>Copyright © Pizza Delivery {anio}</p>
                </div>
                <div className='col-4'>   
                    <ul className="list-inline text-center">
                        <li className="m-3"><a className='text-decoration-none text-white' href="">FAQ</a></li>
                        <li className="m-3"><a className='text-decoration-none text-white' href="">Privacy Policy</a></li>
                        <li className="m-3"><a className='text-decoration-none text-white' href="">Terms & Conditions</a></li>
                        <li className="m-3"><a className='text-decoration-none text-white' href="">Our Story</a></li>
                    </ul>                    
                </div>
            </div>
        </div>
    );
}
 
export default Footer;