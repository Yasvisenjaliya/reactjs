import React, { useState } from 'react';
import CategoryList from './CategoryList';
import AddCategoryForm from './AddCategoryForm';
import EditCategoryForm from './EditCategoryForm';
import { BsPlusLg } from "react-icons/bs";

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
    setIsAddingCategory(false); // Hide the add category form after adding
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
  };

  const handleUpdateCategory = (updatedCategory) => {
    setCategories(categories.map(category =>
      category === editingCategory ? updatedCategory : category
    ));
    setEditingCategory(null);
  };

  const handleDeleteCategory = (categoryToDelete) => {
    setCategories(categories.filter(category => category !== categoryToDelete));
  };

  return (
    <div className=" mt-6 ml-10">
      <div className=' flex gap-[65%] '>
        <h1 className="text-3xl font-bold ">Category Manager</h1>
        <button className='flex w-40 border border-slate-800 justify-center mt-2 p-2 ' onClick={() => setIsAddingCategory(true)}><BsPlusLg />ADD Categories</button>
      </div>
      {isAddingCategory && (
        <AddCategoryForm onAddCategory={handleAddCategory} />
      )}

      <CategoryList
        categories={categories}
        onEditCategory={handleEditCategory}
        onDeleteCategory={handleDeleteCategory}
      />
      {editingCategory !== null && (
        <EditCategoryForm
          category={editingCategory}
          onSave={handleUpdateCategory}
        />
      )}
    </div>
  );
};

export default CategoryManager;
