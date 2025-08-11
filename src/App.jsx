import React, { Suspense } from 'react';
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./pages/Home'));
const Shop = React.lazy(() => import('./pages/Shop'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Products = React.lazy(() => import('./pages/Products'));
const Support = React.lazy(() => import('./pages/Support'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Test = React.lazy(() => import('./pages/Test'));

const App = () => {
  console.log('App: Component rendering...');
  
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <HeroUIProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground flex flex-col">
              <Helmet>
                <title>Q FACT - Educational Resources & Technology Solutions</title>
                <meta name="description" content="Q FACT provides high-quality educational resources and technology solutions for students and educators. Explore our learning kits and educational materials." />
                <meta name="keywords" content="education, learning kits, technology solutions, educational resources, Q FACT" />
                <meta property="og:title" content="Q FACT - Educational Resources & Technology Solutions" />
                <meta property="og:description" content="High-quality educational resources and technology solutions for students and educators." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://qfact.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Helmet>
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-[50vh]">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </HeroUIProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;


