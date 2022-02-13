import React from 'react'
import DD from '../images/DD.png'
import search from '../images/search.svg'
import cart from '../images/cart.svg'

function Navigation(){
    function openSide() {
        // document.getElementById("side-menu").style.display='inline-block'
        // document.getElementById("side-menu").style.width='250px'
        // document.getElementById("side-menu").style.marginLeft='250px'

    }
return(
<nav className="navbar" id="nav" >
<div className="nav-container">

    {/* Mobile navigation Menu */}
<div className="mobile-container">

    <button onClick={openSide} id='burger-menu' >
        <div className='hamburger'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </button>

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
</div>
</nav>




)








    
}

export default Navigation;