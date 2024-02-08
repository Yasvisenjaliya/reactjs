import { Edit } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { RiSearchLine } from 'react-icons/ri';

const CategoryList = ({ categories, onEditCategory, onDeleteCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [indexedCategories, setIndexedCategories] = useState([]);

  useEffect(() => {
    // Auto index categories when categories change
    const indexed = categories.map((category, index) => ({ ...category, index: index + 1 }));
    setIndexedCategories(indexed);
  }, [categories]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // const filteredCategories = indexedCategories.filter(category => {
  //   return category.name.toLowerCase().includes(searchQuery.toLowerCase());
  // });
  const filteredCategories = indexedCategories.filter(category => {
    // Check if category.name exists before calling toLowerCase()
    return category.name && category.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center max-sm:mt-2 p-3 mt-1 bg-white rounded">
        <div className="flex max-sm:grid xl:gap-[68%] lg:gap-[48%] md:gap-[30%] max-sm:gap-3 w-full items-center mt-4 md:mt-0">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search category"
              className="px-8 py-1 border border-gray-300 rounded-md w-full"
            />
            <RiSearchLine className="absolute top-2 left-2 text-gray-500" style={{ pointerEvents: 'none' }} />
          </div>
          <div className="mt-4 md:mt-0">Total Categories: {filteredCategories.length}</div>
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 w-20">Index</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2 w-40">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category, index) => (
              <tr key={index} className="bg-white text-center">
                <td className="px-4 py-2">{category.index}</td>
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">
                  <button startIcon={<Edit/>} variant='outlined'
                    
                    onClick={() => onEditCategory(category)}
                  >
                    Edit
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
