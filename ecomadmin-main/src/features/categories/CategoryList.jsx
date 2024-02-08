import React, { useState } from "react";
import { FaCheck, FaTimes, FaSyncAlt } from 'react-icons/fa'; // Importing FaSyncAlt icon for refresh
import { MdDelete, MdEdit } from "react-icons/md";
import { RiSearchLine } from 'react-icons/ri';

const CategoryList = ({ categories, onEditCategory, onDeleteCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCategories = categories.filter(category => {
    return category.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleRefresh = () => {
    setSearchQuery(''); // Resetting the search query to refresh the category list
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center max-sm:mt-2 p-3 bg-white rounded">
        <div className="flex max-sm:grid gap-[65%] lg:gap-[48%] md:gap-[30%] max-sm:gap-3 w-full items-center mt-4 md:mt-0">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search category"
              className="px-8 py-1 border border-gray-300 rounded-md w-full"
              style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23838E9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>')}")`, backgroundRepeat: 'no-repeat', backgroundPosition: '10px center', paddingLeft: '35px' }}
            />
            <RiSearchLine className="absolute top-2 left-2 text-gray-500" style={{ pointerEvents: 'none' }} />
          </div>
          <div className="mt-4 md:mt-0">Total Categories: {filteredCategories.length}</div>
        </div>
        <div className="mr-4  max-sm:hidden">
          <FaSyncAlt className="text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handleRefresh} />
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 w-20">sr no.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2 w-5">Status</th>
              <th className="px-4 py-2 w-40">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category, index) => (
              <tr key={index} className="bg-white text-center">
                <td className="px-4 py-2">{category.srno}</td>
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">
                  <button onClick={() => toggleStatus(category)}>
                    {category.status === 'active' ? (
                      <FaCheck className="text-black w-10 h-5" />
                    ) : (
                      <FaTimes className="text-red-500 w-10 h-5" />
                    )}
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-slate-700 px-2 py-1 rounded"
                    onClick={() => onEditCategory(category)}
                  >
                    <MdEdit />
                  </button>
                  <button
                    className="text-slate-700 px-2 py-1 ml-2 rounded"
                    onClick={() => onDeleteCategory(category)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryList;
