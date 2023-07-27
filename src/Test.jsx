import React, { useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';

const Test = ({ MenuList }) => {
  const [Index, setIndex] = useState(0);
  const [menuData, setMenuData] = useState(MenuList); // State to hold the pizza data

  // Function to add a new pizza to the menuData state
  const handleAddPizza = (newPizza) => {
    setMenuData((prevData) => [...prevData, newPizza]);
  };

  return (
    <div>
      <Navbar setIndex={setIndex} />
      {Index === 0 ? (
        <Home />
      ) : Index === 1 ? (
        <Menu MenuList={menuData} onAddPizza={handleAddPizza} /> // Pass the onAddPizza function to the Menu component
      ) : Index === 2 ? (
        <About />
      ) : (
        <Contact />
      )}
    </div>
  );
};

export default Test;
