import React from 'react';
import logonav from "../assets/logonav.png";

const Footer = () => {
    return (  
        <div className='background-footer'>
            <div className='row'>
                <div className='col-3 m-4'>
                    <img width="200" height="100" src={logonav} alt=""/>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href=""><i className="bi bi-whatsapp text-white m-2"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="bi bi-facebook text-white m-2"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="bi bi-tiktok text-white m-2"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="bi bi-twitter text-white m-2"></i></a></li>
                        <li className="list-inline-item"><a href=""><i className="bi bi-instagram text-white m-2"></i></a></li>
                  </ul>
                </div>
                <div className='col-4 text-center'>
                    <article className='text-center m-2'>
                        <h4>CONTACT US</h4>
                        <p className='font-monospace'>416 533 3311</p>
                        <p className='font-monospace'>@PIZZADELIVERY.COM</p>
                        <p className='font-monospace'>1596 QUEEN STREET WEST TORONTO, ONTARIO</p>
                    </article>
                    <p className='fw-lighter'>Copyright © Pizza Delivery 2023</p>
                </div>
                <div className='col-4'>   
                    <ul className="list-inline text-center m-5">
                        <li className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><a href="">FAQ</a></li>
                        <li className=""><a href="">Privacy Policy</a></li>
                        <li className=""><a href="">Terms & Conditions</a></li>
                        <li className=""><a href="">Our Story</a></li>
                    </ul>                    
                </div>
            </div>
        </div>
    );
}
 
export default Footer;