import React, { useState } from 'react';
import Card from './Card';
import Add from './Add';

const Menu = ({ MenuList, onAddPizza }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  // Filtrer les éléments en fonction du terme de recherche
  const filteredMenuList = MenuList.filter((el) =>
    el.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='menu'>
      <input className='recherche'
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button className='add' onClick={handleAddButtonClick}>
        Add
      </button>
      <h1 className='menutitle'>Our Menu</h1>
      <div className='menulist'>
        {filteredMenuList.map((el) => (
          <Card el={el} key={el.name} />
        ))}
      </div>

      {showModal && <Add onClose={handleModalClose} onAddPizza={onAddPizza} />}
    </div>
  );
};

export default Menu;
