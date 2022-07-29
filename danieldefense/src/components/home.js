import React from 'react'
import aside1 from '../images/aside1.jpg'
import aside2 from '../images/aside2.jpg'
import sport from '../images/sport.jpg'
import defense from '../images/defense.jpg'
import magazine from '../images/magazine.jpg'

import professional from '../images/professional.jpg'
import accessories from '../images/accessories.jpg'
import plus from '../images/plus.svg'
import RIII from '../images/RIII_desktop.jpg'

import pdw from '../images/pdw.jpg'
function content(){
    console.log(window.innerWidth)

return(
    <div >
<header>
    <img src={RIII} alt=""/>


</header>


<section className="promo">
    
    <div className="promo-wrapper">
        <img src={aside1} alt=""/>
        <div className="promo-banner">
            <h2>NO TRANSFER FEE</h2>
        <p>Select a Dealer with “Preferred” by Their Name at Checkout.</p>
        <button>Learn More</button>      
        </div>   
  </div>
  <div className="promo-wrapper">
        <img src={aside2} alt=""/>
        <div className="promo-banner">
            <h2>END OF YEAR SALE</h2>
        <p>25% OFF OUTERWEAR & HOODIES</p>
        <button>Learn More</button>      
        </div>
  </div>
</section>


   <div className="accessories">
       <div className="wrapper">
       <img src={accessories} alt="" />
       <div className="accessories-btn">
           <span>Accessories</span>
       </div>
       </div>
   </div>
   

<div className='showcase'>
    <div className="showcase-container">
    <div className="showcase-wrapper">
        <img src={sport} alt=""/>
        <div className="showcase-banner">
            <h2>Sport Shooter</h2>
        </div>   
  </div>

  <div className="showcase-wrapper">
        <img src={defense} alt=""/>
        <div className="showcase-banner">
            <h2>Personal Defense</h2>
        </div>   
  </div>

  <div className="showcase-wrapper">
        <img src={professional} alt=""/>
        <div className="showcase-banner">
            <h2>Professional Arms</h2>
        </div>   
  </div>

    </div>
</div>

<div className="info-container">
<div className="spotlight-block">
<div className="spotlight">
<img src={magazine} alt="DD MAGAZINE 12-PACK" />
</div>
<div className="product-info">
<h4>Product Spotlight</h4>
<h1>DD MAGAZINE 12-PACK</h1>
<p>Its 32-round capacity is the most notable enhancement while maintaining the same size as industry-standard 30-round magazines.</p>
<ul className='mag-facts'>
<li>Lightweight carbon-fiber-reinforced polymer construction</li>
<li>Surface grip feature for performance-driven control in all situations</li>
<li>Improved feed lip design for optimized feeding and reliability</li>
<li>Impact absorbing baseplate design for long-lasting durability</li>
<li>Enhanced anti-tilt follower for reliable feeding</li>
</ul>
<button>Buy Now</button>




</div>


</div>



</div>







    </div>   



)








    
}

export default content;