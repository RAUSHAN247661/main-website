import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

// Layout components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

// Pages
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Support from './pages/Support.jsx';
import Privacy from './pages/Privacy.jsx';
import Products from './pages/Products.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Contact from './pages/Contact.jsx';
import Test from './pages/Test.jsx';

const App = () => {
  return (
    <HashRouter>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/support" element={<Support />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/test" element={<Test />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HashRouter>
  );
};

export default App;


