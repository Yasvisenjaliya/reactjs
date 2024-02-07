// AddCategoryForm.js
import React, { useState } from 'react';

const AddCategoryForm = ({ onAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
      onAddCategory(categoryName.trim());
      setCategoryName('');
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
      type='text'
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
