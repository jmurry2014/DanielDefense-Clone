import React from 'react'
import arrow from '../images/arrow.svg'

function sideMenu(){
    
    
return(
<div id="side-menu" data-show='hidden'>
<ul>
    <li><a href="">Products</a> <span><img src={arrow} alt="Arrow" /></span></li>
    <li><a href="">Usage</a></li>
    <li><a href="">Support</a> <span><img src={arrow} alt="Arrow" /></span></li>
    <li><a href="">Gear</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">About</a> <span><img src={arrow} alt="Arrow" /></span></li>
    <div className="test">
    <li><a href="">Dealer Locator</a></li>
    <li><a href="">Sign In</a></li>
    </div>
   

</ul>


</div>



)








    
}

export default sideMenu;