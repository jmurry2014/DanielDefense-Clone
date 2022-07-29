import React from 'react'
import arrow from '../images/arrow.svg'

function sideMenu(){
function menuClose(){
    let menu=document.getElementById("side-menu");
    menu.style.display="none"
    if(menu.style.display="none"){
        menu.style.width=0;
    }
}
return(
<div id="side-menu" >
<ul id="side-nav">
        <a href="#" class="btn-close" onClick={menuClose}>&times;</a>

    <li><a href="">Products</a> <span><img src={arrow} alt="Arrow" /></span></li>
    <li><a href="">Usage</a></li>
    <li><a href="">Support</a> <span><img src={arrow} alt="Arrow" /></span></li>
    <li><a href="">Gear</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">About</a> <span><img src={arrow} alt="Arrow" /></span></li>
    <div className="menuClose">
    <li><a href="">Dealer Locator</a></li>
    <li><a href="">Sign In</a></li>
    </div>
   

</ul>


</div>



)








    
}

export default sideMenu;