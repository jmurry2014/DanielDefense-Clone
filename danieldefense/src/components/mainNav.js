import React from 'react'
import DD from '../images/DD.png'
import search from '../images/search.svg'
import cart from '../images/cart.svg'

function Navigation(){
    
return(
<nav className="navbar" id="nav" >
<div className="nav-container">
    <div className="mobile-container">
    <button>
<div className='hamburger'>
<div></div>
<div></div>
<div></div>
</div>
</button>
<li> 
    <a href="">
    <img src={DD} className='logo' alt=""/>
    </a>
</li>
    </div>

<ul className="nav-left">

<li> 
    <a href="">
    <img src={DD} className='logo' alt=""/>
    </a>
</li>

    
    <li><a href="#">Products</a></li>
    <li><a href="#">Usage</a></li>
    <li><a href="#">Support</a></li>
    <li><a href="#">Gear</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">About</a></li>
</ul>

<ul className="nav-right">

    <li className="XL">
        <a href="">
<img src={cart} alt=""/>
            <span>0</span>
        </a>
    </li>
</ul>
</div>
</nav>
)








    
}

export default Navigation;