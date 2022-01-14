import React from 'react'
import marker from '../images/marker.svg'
import fpp from '../images/FPP.png'
function secondaryNavigation(){
   function componentDidMount() {
        window.onscroll = function() {
          if(window.pageYOffset === 0) {
            document.getElementById("nav2").style.display='inline-block'

          }else{
            document.getElementById("nav2").style.display='none'
          }
        };
      }
      
   
      componentDidMount();
return(

        <nav  className="secondary-nav" id="nav2">
    <div className="secondaryNav-container">
<ul className="fpp">
    <li><img src={fpp} alt="FPP"/></li>
</ul>

<ul className="actions">
    <li><a href="#"><img src={marker} alt=""/><span>Dealer Locator</span> </a></li>
    <li><a href="#">Sign In</a></li>
</ul>
 </div>
</nav>

)








    
}

export default secondaryNavigation;