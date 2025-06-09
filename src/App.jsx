// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Newsboard from './components/Newsboard';
import Footer from './components/Footer';

const App = () => {
  const [category, setCategory] = useState('general');

  return (
    <>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
      <Footer />
    </>
  );
};

export default App;
