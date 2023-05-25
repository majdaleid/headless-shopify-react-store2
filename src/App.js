import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NavMenu from './components/NavMenu';
import Home from './pages/Home'
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <NavMenu />
          <Cart />
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:handle" element={<ProductPage />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
