import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';

import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box } from '@mui/material';
import { Add } from '@mui/icons-material';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  // Fetch categories from an API or any other source on component mount
  useEffect(() => {
    // For demonstration, let's assume we're fetching categories from an API
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        // Parse JSON response
        const data = await response.json();
        // Update categories state with the fetched data
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Call fetchData function
    fetchData();
  }, []); // Empty dependency array to run this effect only once on component mount

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return; // Don't add if category name is empty

    const newCategory = {
      id: categories.length + 1, // Assign a unique id
      name: newCategoryName,
    };

    setCategories([...categories, newCategory]);
    setNewCategoryName(''); // Clear input field
    setIsAddingCategory(false); // Hide the add category form after adding
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setNewCategoryName(category.name); // Set the editing category name in the input field
  };

  const handleUpdateCategory = () => {
    const updatedCategories = categories.map((category) =>
      category.id === editingCategory.id ? { ...category, name: newCategoryName } : category
    );
    setCategories(updatedCategories);
    setEditingCategory(null);
    setNewCategoryName(''); // Clear the editing category name
  };

  const handleDeleteCategory = (categoryToDelete) => {
    setCategories(categories.filter((category) => category.id !== categoryToDelete.id));
  };

  const handleAddCategoryButtonClick = () => {
    setIsAddingCategory(true); // Show the add category form when button is clicked
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
    setNewCategoryName(''); // Clear the editing category name
  };

  const handleCloseDialog = () => {
    setIsAddingCategory(false);
  };

  return (
    <div className="mt-6 ml-10 max-sm:ml-2 max-sm:mr-2 mr-10">
      <div className='flex flex-col md:flex-row max-sm:grid  justify-between items-center md:h-16'>
        <h1 className="text-3xl font-bold">Category Manager</h1>
        <Button startIcon={<Add />} variant='outlined' onClick={handleAddCategoryButtonClick}>Add Category</Button>
      </div>
      {isAddingCategory && (
        <Dialog open={isAddingCategory} onClose={handleCloseDialog}>
          <DialogTitle>Add Category</DialogTitle>
          <hr/>
          <DialogContent>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            />
            <div className="">
              <TextField
                id="categoryname"
                type="text"
                variant="outlined"
                value={newCategoryName} // Bind value to the state variable
                onChange={(e) => setNewCategoryName(e.target.value)} // Update state variable on change
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleAddCategory}>Save</Button> {/* Add handleAddCategory to onClick */}
          </DialogActions>
        </Dialog>
      )}
      {editingCategory && (
       <Dialog open={editingCategory !== null} onClose={handleCancelEdit}>
       <DialogTitle>Edit Category</DialogTitle>
       <hr/>
       <DialogContent>
         <Box
           component="form"
           sx={{
             "& .MuiTextField-root": { m: 1, width: "25ch" },
           }}
           noValidate
           autoComplete="off"
         />
         <div className="">
           <TextField
             id="categoryname"
             label="Category Name"
             type="text"
             variant="filled"
             value={newCategoryName} // Bind value to the state variable
             onChange={(e) => setNewCategoryName(e.target.value)} // Update state variable on change
           />
         </div>
       </DialogContent>
       <DialogActions>
         <Button onClick={handleCancelEdit}>Cancel</Button>
         <Button onClick={handleUpdateCategory}>Save</Button>
       </DialogActions>
     </Dialog>
      )}
      <CategoryList
        categories={categories}
        onEditCategory={handleEditCategory}
        onDeleteCategory={handleDeleteCategory}
      />
    </div>
  );
};

export default CategoryManager;
