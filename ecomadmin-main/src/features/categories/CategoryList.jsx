import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { Delete, Edit } from "@mui/icons-material";
import RefreshIcon from "@mui/icons-material/Refresh";

const CategoryList = ({ categories, setCategories, onEditCategory, onDeleteCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [showOnlyActive, setShowOnlyActive] = useState(false);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const handleDeleteButtonClick = (category) => {
    setCategoryToDelete(category);
    setDeleteConfirmationOpen(true);
  };

  const handleConfirmDelete = () => {
    onDeleteCategory(categoryToDelete);
    setCategoryToDelete(null);
    setDeleteConfirmationOpen(false);
  };

  const handleCancelDelete = () => {
    setCategoryToDelete(null);
    setDeleteConfirmationOpen(false);
  };

  const handleSwitchChange = () => {
    setShowOnlyActive(prevState => !prevState);
  };

  const handleRefresh = () => {
    // Here you should fetch the categories again from your data source
    // For example, if you're fetching from an API, you'll make a new API call
    // After fetching, update the state with the new categories
    // For demonstration purposes, I'm assuming categories are fetched from an API called fetchCategories
    fetchCategories()
      .then((refreshedCategories) => {
        // Assuming refreshedCategories is the new list of categories
        setCategories(refreshedCategories);
      })
      .catch((error) => {
        console.error("Error refreshing categories:", error);
      });
  };

  return (
    <>
      {/* Search bar */}
      <div className="flex flex-col md:flex-row md:justify-between  max-sm:mt-2 bg-white rounded">
        <div className="max-sm:grid flex xl:gap-[35%] lg:gap-[10%] md:gap-[0%] max-sm:gap-3 w-full items-center  mt-4 md:mt-0">
          <div>
            <Box sx={{
              bgcolor: "white",
              borderRadius: 2,
              display: "flex",
            }}>
              <div className="xl:flex lg:flex md:flex gap-5">
                <FilterAltOutlinedIcon sx={{ my: 2, mx: 1 }} />
                <TextField label="Search" onChange={(e) => handleSearchChange(e.target.value)} value={searchQuery} className="xl:w-60 lg:w-48 md:w-28 max-sm:w-20" />
                <Switch className="mt-2 ml-5" onChange={handleSwitchChange} />
              </div>
              <h1 className="my-auto xl:w-60 lg:w-58 md:w-40 max-sm:w-20">Active Category</h1>
            </Box>
          </div>
          <div className=" flex gap-3">
            <div className="mt-9 md:mt-0">Total Categories: {categories.length}</div>
            <IconButton onClick={handleRefresh}>
              <RefreshIcon />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Category table */}
      <div className="mt-4">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="px-4 py-2 w-40">Sr no.</TableCell>
                <TableCell className="px-4 py-2 w-[65%] ">Name</TableCell>
                <TableCell className="px-4 py-2">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.filter(category => !showOnlyActive || category.isActive).map((category, index) => (
                <TableRow key={index} className="bg-white text-center">
                  <TableCell className="">{index + 1}</TableCell>
                  <TableCell className="" >
                    {category.name}
                  </TableCell>
                  <TableCell className="">
                    <Button onClick={() => onEditCategory(category)}>
                      <Edit className="text-center text-gray-500" />
                    </Button>
                    <Button onClick={() => handleDeleteButtonClick(category)}>
                      <Delete className="text-center text-gray-500" />
                    </Button>
                    <Switch checked={category.isActive} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Delete confirmation dialog */}
      <Dialog open={deleteConfirmationOpen} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this category?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CategoryList;
