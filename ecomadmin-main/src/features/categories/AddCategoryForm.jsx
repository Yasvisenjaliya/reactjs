import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const AddCategoryForm = ({ onAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const [srno, setSrno] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSrnoChange = (e) => {
    setSrno(e.target.value);
  };

  const handleStatusClick = () => {
    // Toggle status when clicked
    setStatus(status === 'active' ? 'inactive' : 'active');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim() && srno.trim() && status.trim()) {
      onAddCategory({
        name: categoryName.trim(),
        srno: srno.trim(),
        status: status.trim(),
      });
      setCategoryName('');
      setSrno('');
      setStatus('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="xl:flex lg:flex md:flex xl:gap-20 lg:gap-20 md:gap-5 bg-slate-400 xl:p-5 lg:p-5 md:p-2 xl:h-16 lg:h-16 md:h-12 max-sm:h-28">
      <input
        type="number"
        value={srno}
        onChange={handleSrnoChange}
        placeholder="Enter index number"
        className="h-8 max-sm:h-5 max-sm:ml-2 max-sm:mt-2 text-center"
      />
      <input
        type="text"
        value={categoryName}
        onChange={handleChange}
        placeholder="Enter category name"
        className="h-8 max-sm:h-5 max-sm:ml-2 max-sm:mt-2  text-center"
      />
      {/* Show status icon based on status value */}
      <span onClick={handleStatusClick} className="cursor-pointer">
        <button className='border h-8 max-sm:h-5 max-sm:ml-4  bg-slate-50'>
          {status.trim() === 'active' ? (
            <FaCheck className="text-green-500 xl:m-2 lg:m-2 md:m-2 xl:w-10 lg:w-10 md:w-10 xl:h-5 lg:h-5 md:h-5" />
          ) : (
            <FaTimes className="text-red-500 xl:m-2 lg:m-2 md:m-2 xl:w-10 lg:w-10 md:w-10 xl:h-5 lg:h-5 md:h-5" />
          )}
        </button>
      </span>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 max-sm:mt-4 h-8 max-sm:ml-10 p-2 text-white rounded-md"
      >
        Add Category
      </button>
    </form>
  );
};

export default AddCategoryForm;
