import React, { useState } from 'react';
import './AddCateForm.css'; // Import the CSS file

const AddCategoryForm = ({ onAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) return; // Don't submit if fields are empty

    const newCategory = {
      id: currentIndex,
      name: categoryName,
    };

    setCategories([...categories, newCategory]);
    onAddCategory(newCategory);

    // Increment index for the next category
    setCurrentIndex(currentIndex + 1);

    // Clear input fields after submission
    setCategoryName('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Category Name:
            <input type="text" value={categoryName} onChange={handleCategoryNameChange} />
          </label>
        </div>
        <button type="submit">Add Category</button>
      </form>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddCategoryForm;
