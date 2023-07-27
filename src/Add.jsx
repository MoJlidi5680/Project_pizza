import React, { useState } from 'react';

const Add = ({ onAddPizza }) => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming the onAddPizza function is passed as a prop to handle adding the pizza data
    onAddPizza({ name, image, price });
    // Reset the form fields after submitting
    setName('');
    setImage('');
    setPrice('');
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!show) {
    return null; // Si show est faux, ne rend rien pour masquer le composant
  }

  return (
    <div className='modale'>
      <div className='add'>
      <button className='x' onClick={handleClose}>x</button>
      <h2>Add a New Pizza</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input className='l1'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter pizza name..."
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input className='l2'
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL..."
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input className='l3'
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter pizza price..."
            required
          />
        </div>
        <button type="submit">Add Pizza</button>
      </form>
    </div>
    </div>

  );
};

export default Add;
