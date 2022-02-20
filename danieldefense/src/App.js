import './App.css';
import MainNav from './components/mainNav'
import SideNav from './components/sideMenu'

import Home from './components/home'
import SecondaryNav from './components/secondaryNavigation'
import Footer from './components/footer'
function App() {
  
  return (
    <div   className="App">
<SecondaryNav />
<MainNav />
<SideNav />
<Home />
<Footer />
    </div>
  );
}

export default App;
