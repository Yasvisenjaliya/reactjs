// CategoryManager.js
import React, { useState } from 'react';
import CategoryList from './CategoryList';
import AddCategoryForm from './AddCategoryForm';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState('');

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const handleEditCategory = (category) => {
    setEditCategory(category);
    // Here you can implement further logic, such as opening a modal or updating the category form
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Category Manager</h1>
      <AddCategoryForm onAddCategory={handleAddCategory} />
      <CategoryList categories={categories} onEditCategory={handleEditCategory} />
    </div>
  );
};

export default CategoryManager;
