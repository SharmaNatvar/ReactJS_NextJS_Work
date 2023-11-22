import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Contact from './Component/Contact';
import About from './Component/About';
import Footer from './Component/Footer';




function App() {
  return ( 
    <Router>
      <div> 
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>

        <Footer/>
        
      </div>
    </Router>
  );
}

export default App; 
