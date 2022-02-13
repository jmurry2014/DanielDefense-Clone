import React from 'react'
import DD from '../images/DD.png'
import search from '../images/search.svg'
import cart from '../images/cart.svg'

function Navigation(){
    
return(
<nav className="navbar" id="nav" >
<div className="nav-container">

    {/* Mobile navigation Menu */}
<div className="mobile-container">

    <button>
        <div className='hamburger'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </button>
    <ul>
        <li>Test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
    </ul>

<li> <a href=""><img src={DD} className='logo' alt=""/></a></li>
    </div>
{/* End of Mobile navigation Menu */}


<ul className="nav-left">
    <li className='link'><a href=""><img src={DD} className='logo' alt=""/></a></li>
    <li className='link'><a href="#">Products</a></li>
    <li className='link'><a href="#">Usage</a></li>
    <li className='link'><a href="#">Support</a></li>
    <li className='link'><a href="#">Gear</a></li>
    <li className='link'><a href="#">Blog</a></li>
    <li className='link'><a href="#">About</a></li>
    <li className="XL"> <a href=""><img src={cart} alt=""/> <span>0</span></a></li>
</ul>
{/* <ul className="nav-right">
    <li className="XL"> <a href=""><img src={cart} alt=""/> <span>0</span></a></li>
</ul> */}
</div>
</nav>
)








    
}

export default Navigation;