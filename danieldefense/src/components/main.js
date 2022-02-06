import React from 'react'
import aside1 from '../images/aside1.jpg'
import aside2 from '../images/aside2.jpg'
import sport from '../images/sport.jpg'
import defense from '../images/defense.jpg'
import professional from '../images/professional.jpg'
import accessories from '../images/accessories.jpg'
import plus from '../images/plus.svg'
import RIII from '../images/RIII_desktop.jpg'

import pdw from '../images/pdw.jpg'
function content(){
return(
    <div>
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









    </div>   



)








    
}

export default content;