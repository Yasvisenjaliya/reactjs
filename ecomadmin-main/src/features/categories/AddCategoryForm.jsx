// AddCategoryForm.js
import React, { useState } from 'react';

const AddCategoryForm = ({ onAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim() && quantity.trim()) {
      onAddCategory({ name: categoryName.trim(), quantity: parseInt(quantity.trim()), description: description.trim()  });
      setCategoryName('');
      setQuantity('');
      setDescription('');
    }
  };

  
  

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={categoryName}
        onChange={handleChange}
        placeholder="Enter category name"
        className="border border-gray-300 px-4 py-2 rounded-md w-64"
      />
      <input 
      type='number'
      value={quantity}
        onChange={handleQuantityChange}
        placeholder="Enter quantity"
        className="border border-gray-300 px-4 py-2 rounded-md ml-2 w-24"
      />
        <input 
        type='text'
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter description"
        className="border border-gray-300 px-4 py-2 rounded-md ml-2 w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-2 rounded-md"
      >
        Add Category
      </button>
    </form>
  );
};

export default AddCategoryForm;
