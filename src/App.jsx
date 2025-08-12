import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const SimpleHome = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>Welcome to Q FACT</h1>
    <p>Your trusted partner for quality solutions.</p>
  </div>
);

const SimpleTest = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>✅ Test Page Working!</h1>
    <p>If you can see this, routing is working!</p>
  </div>
);

const App = () => {
  console.log('App: Component rendering...');
  
  return (
    <HashRouter>
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
        <Routes>
          <Route path="/" element={<SimpleHome />} />
          <Route path="/test" element={<SimpleTest />} />
          <Route path="*" element={<SimpleHome />} />
        </Routes>
      </div>
    </Router>
    </HashRouter>
  );
};

export default App;


