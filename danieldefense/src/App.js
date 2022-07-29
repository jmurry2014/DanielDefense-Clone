import './App.css';
import MainNav from './components/mainNav'
import SideNav from './components/sideMenu'

import Home from './components/home'
import SecondaryNav from './components/secondaryNavigation'
import Footer from './components/footer'
import SimpleAccordion from './components/secondaryfooter'

function App() {
  
  return (
    <div className="App">
  
<SecondaryNav />
<MainNav />
<SideNav />
{/* Router */}

<Home />

{/* End of Router */}
<Footer />
<SimpleAccordion/>
    </div>
  );
}

export default App;
