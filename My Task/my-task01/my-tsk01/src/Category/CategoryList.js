// CategoryList.js
import React from "react";

const CategoryList = ({ categories, onEditCategory }) => {
  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index} className="bg-gray-100 p-2 mb-2 rounded-md">
          {category}
          <button
            className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
            onClick={() => onEditCategory(category)}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
