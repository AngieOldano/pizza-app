import React from 'react';
import logonav from "../assets/logonav.png";

const Footer = () => {
    return (  
        <div className='background-footer'>
            <div className='row'>
                <div className='col-4'>
                    <img width="200" height="100" src={logonav} alt=""/>
                </div>
                <div className='col-4 d-flex aling-items-center'>
                    <article className=''>
                        <h4>CONTACT US</h4>
                        <p>416 533 3311</p>
                        <p>@PIZZADELIVERY.COM</p>
                        <p>1596 QUEEN STREET WEST TORONTO, ONTARIO</p>
                    </article>
                </div>
                <div className='col-4'>   
                    <article className=''>
                        <h4>SOCIAL NETWORKS</h4>
                        <p>416 533 3311</p>
                        <p>@PIZZADELIVERY.COM</p>
                        <p>1596 QUEEN STREET WEST TORONTO, ONTARIO</p>
                    </article>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;