import './App.css';
import MainNav from './components/mainNav'
import Main from './components/main'
import SecondaryNav from './components/secondaryNavigation'
import Footer from './components/footer'
function App() {
  
  return (
    <div className="App">
<SecondaryNav />
<MainNav />
<Main />
<Footer />
    </div>
  );
}

export default App;
