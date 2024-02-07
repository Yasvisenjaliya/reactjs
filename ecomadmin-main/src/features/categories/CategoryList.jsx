import React from "react";

const CategoryList = ({ categories, onEditCategory, onDeleteCategory }) => {
  return (
    <table className="border-collapse border border-gray-400 mt-4 w-[90%]">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 px-4 py-2">Category Name</th>
          <th className="border border-gray-400 px-4 py-2">Description</th>
          <th className="border border-gray-400 px-4 py-2 w-10">Quantity</th>
          <th className="border border-gray-400 px-4 py-2 w-40">Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={index} className="bg-gray-100">
            <td className="border border-gray-400 px-4 py-2">{category.name}</td>
            <td className="border border-gray-400 px-4 py-2">{category.description}</td>
            <td className="border border-gray-400 px-4 py-2">{category.quantity}</td>
            <td className="border border-gray-400 px-4 py-2">
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
