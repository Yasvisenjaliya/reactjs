import React, { useState } from 'react';

const EditCategoryForm = ({ category, onSave }) => {
  const [editedName, setEditedName] = useState(category.name);
  const [editedQuantity, setEditedQuantity] = useState(category.quantity);
  const [editedDescription, setEditedDescription] = useState(category.description);

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setEditedQuantity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...category,
      name: editedName,
      quantity: editedQuantity,
      description: editedDescription
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          value={editedName}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
          Quantity:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="quantity"
          type="number"
          value={editedQuantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          value={editedDescription}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditCategoryForm;
