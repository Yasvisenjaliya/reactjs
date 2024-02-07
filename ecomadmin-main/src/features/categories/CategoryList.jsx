import React from "react";
import { FaCheck, FaTimes } from 'react-icons/fa';

const CategoryList = ({ categories, onEditCategory, onDeleteCategory }) => {
  return (
    <table className="border-collapse border border-gray-400 mt-4 w-[90%]">
      <thead>
        <tr className="bg-gray-200">
          <th className=" px-4 py-2">Category Name</th>
          <th className=" px-4 py-2">Description</th>
          <th className=" px-4 py-2 w-10">Quantity</th>
          <th className=" px-4 py-2 w-5">Status</th>
          <th className=" px-4 py-2 w-40">Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={index} className="bg-gray-100">
            <td className=" items-center px-4 py-2">{category.name}</td>
            <td className=" px-4 py-2">{category.description}</td>
            <td className=" px-4 py-2">{category.quantity}</td>
            <td className=" px-4 py-2">
              {category.status === 'active' ? (
                <FaCheck className="text-black w-10 h-5" />
              ) : (
                <FaTimes className="text-red-500 w-10 h-5" />
              )}
            </td>
            <td className=" px-4 py-2">
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded "
                onClick={() => onEditCategory(category)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 ml-2 rounded"
                onClick={() => onDeleteCategory(category)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryList;
