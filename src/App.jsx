import React from 'react';
import Header from './Components/Header';
import Contents from './Components/Contents';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header title = "Cloud Number 9"></Header>
      <Contents></Contents>
      <Footer></Footer>
    </div>
  );
};

export default App;