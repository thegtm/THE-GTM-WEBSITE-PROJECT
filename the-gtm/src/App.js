import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer';
import Body from './Body';
import Placeholder from './placeholder';
// import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Placeholder />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;