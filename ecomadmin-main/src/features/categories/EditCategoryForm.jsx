// EditCategoryForm.js

import React, { useState } from 'react';

const EditCategoryForm = ({ category, onSave, onCancel }) => {
  const [editedCategoryName, setEditedCategoryName] = useState(category.name);

  const handleCategoryNameChange = (e) => {
    setEditedCategoryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...category, name: editedCategoryName });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Category Name:
            <input type="text" value={editedCategoryName} onChange={handleCategoryNameChange} />
          </label>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditCategoryForm;
