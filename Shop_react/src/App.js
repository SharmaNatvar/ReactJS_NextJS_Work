import './App.css';
import Navbar_head from './Component/Navbar_head';
import Home from './Component/Home';
import {Routes , Route} from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';
// import { useNavigate } from 'react-router-dom';




function App() {
  return (
    <>
      <Navbar_head/>
      <Routes>
      {/* new solution code */}
        <Route exact path="/" Component={Home}/>
        <Route exact path="/products" Component={Products}/>
        <Route exact path="/products/:id" Component={Product}/>
      </Routes>
    </>
  );
}

export default App;
