// CategoryManager.js
import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Box } from '@mui/material';
import { Add, Close } from '@mui/icons-material';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;

    const newCategory = {
      id: categories.length + 1,
      name: newCategoryName,
    };

    setCategories([...categories, newCategory]);
    setNewCategoryName('');
    setIsAddingCategory(false);
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setNewCategoryName(category.name);
  };

  const handleUpdateCategory = () => {
    if (!newCategoryName.trim() || !editingCategory) return;

    const updatedCategories = categories.map((category) =>
      category.id === editingCategory.id ? { ...category, name: newCategoryName } : category
    );
    setCategories(updatedCategories);
    setEditingCategory(null);
    setNewCategoryName('');
  };

  const handleDeleteCategory = (categoryToDelete) => {
    setCategoryToDelete(categoryToDelete);
    setDeleteConfirmationOpen(true);
  };

  const handleCancelDelete = () => {
    setCategoryToDelete(null);
    setDeleteConfirmationOpen(false);
  };

  const handleConfirmDeleteCategory = () => {
    if (categoryToDelete) {
      const updatedCategories = categories.filter((category) => category.id !== categoryToDelete.id);
      setCategories(updatedCategories);
      setCategoryToDelete(null);
      setEditingCategory(null);
      setNewCategoryName('');
      setDeleteConfirmationOpen(false);
    }
  };

  const handleAddCategoryButtonClick = () => {
    setIsAddingCategory(true);
  };

  const handleCloseDialog = () => {
    setIsAddingCategory(false);
    setDeleteConfirmationOpen(false);
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
    setNewCategoryName('');
    setDeleteConfirmationOpen(false);
  };

  return (
    <div className="mt-6 ml-10 max-sm:ml-2 max-sm:mr-2 mr-10">
      <div className='flex flex-col md:flex-row max-sm:grid  justify-between items-center md:h-16'>
        <h1 className="text-3xl font-bold">Category Manager</h1>
        <Button startIcon={<Add />} variant='outlined' onClick={handleAddCategoryButtonClick}>Add Category</Button>
      </div>
      {isAddingCategory && (
        <Dialog open={isAddingCategory} onClose={handleCloseDialog}>
          <div className=' flex'>
            <DialogTitle>Add Category</DialogTitle>
            <Close onClick={handleCloseDialog} className=' mt-6 ml-12'/>
          </div>
          <hr/>
          <DialogContent  dividers>
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
                placeholder='category name'
                variant="outlined"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleAddCategory}>Save</Button>
          </DialogActions>
        </Dialog>
      )}
      {editingCategory && (
        <Dialog open={editingCategory !== null} onClose={handleCancelEdit}>
          <div className='flex'>
            <DialogTitle>Edit Category</DialogTitle>
            <Close onClick={handleCancelEdit} className='mt-6 ml-12'/>
          </div>
          <hr/>
          <DialogContent dividers>
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
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions >
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
      <Dialog open={deleteConfirmationOpen} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this category?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Cancel</Button>
          <Button onClick={handleConfirmDeleteCategory} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategoryManager;
