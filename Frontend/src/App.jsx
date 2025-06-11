import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Newsboard from './components/Newsboard';
import Footer from './components/Footer';

const App = () => {
  const [category, setCategory] = useState('general');

  return (
    <div className="app-dark-bg min-vh-100 d-flex flex-column">
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
      <Footer />
    </div>
  );
};

export default App;
