import React from 'react'
import arrow from '../images/arrow.svg'

function sideMenu(){
function test(){
    let menu=document.getElementById("side-menu");
    let list=document.getElementById("tester");
    list.style.visibility="hidden"
menu.style.width="0"
}
return(
<div id="side-menu" >
<ul id="tester">
        <a href="#" class="btn-close" onClick={test}>&times;</a>

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