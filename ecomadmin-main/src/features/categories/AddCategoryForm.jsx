import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const AddCategoryForm = ({ onAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleStatusClick = () => {
    // Toggle status when clicked
    setStatus(status === 'active' ? 'inactive' : 'active');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim() && quantity.trim() && status.trim()) {
      onAddCategory({
        name: categoryName.trim(),
        quantity: parseInt(quantity.trim()),
        description: description.trim(),
        status: status.trim(),
      });
      setCategoryName('');
      setQuantity('');
      setDescription('');
      setStatus('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-20  bg-slate-400 p-5 h-16">
      <input
        type="text"
        value={categoryName}
        onChange={handleChange}
        placeholder="Enter category name"
        className=" h-8 text-center"
      />
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        placeholder="Enter quantity"
        className="h-8 text-center w-10"
      />
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter description"
        className="h-8 text-center"
      />
     
      {/* Show status icon based on status value */}
      <span onClick={handleStatusClick} className="cursor-pointer">
        <button className='border h-8 bg-slate-50'>
        {status.trim() === 'active' ? (
          <FaCheck className="text-green-500 m-2 w-10 h-5" />
        ) : (
          <FaTimes className="text-red-500 ml-2" />
        )}
        </button>
      </span>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 h-8 p-2 text-white  rounded-md"
      >
        Add Category
      </button>
    </form>
  );
};

export default AddCategoryForm;
