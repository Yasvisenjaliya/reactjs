import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Delete, Edit } from "@mui/icons-material";

const CategoryList = ({ categories, onEditCategory, onDeleteCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [indexedCategories, setIndexedCategories] = useState([]);

  useEffect(() => {
    // Auto index categories when categories change
    const indexed = categories.map((category, index) => ({ ...category, index: index + 1 }));
    setIndexedCategories(indexed);
  }, [categories]); // Include categories in the dependency array

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const filteredCategories = indexedCategories.filter(category => {
    // Check if category.name exists before calling toLowerCase()
    return category.name && category.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between  max-sm:mt-2 bg-white rounded">
        <div className="max-sm:grid flex xl:gap-[35%] lg:gap-[48%] md:gap-[20%] max-sm:gap-3 w-full items-center  mt-4 md:mt-0">
          <div>
            <Box sx={{
              bgcolor: "white",
              borderRadius: 2,
              display: "flex",
            }}>
              <div className="xl:flex lg:flex md:flex gap-5">
                <FilterAltOutlinedIcon sx={{ my: 2, mx: 1 }} />
                <TextField label="Search" onChange={(e) => handleSearchChange(e.target.value)} value={searchQuery} className="w-60" />
                <Switch className="mt-2 ml-5" />
              </div>
              <h1 className="my-auto w-60">Active Coupon</h1>
            </Box>
          </div>
          <div className="mt-4 md:mt-0">Total Categories: {filteredCategories.length}</div>
        </div>
      </div>
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
              {filteredCategories.map((category, index) => (
                <TableRow key={index} className="bg-white text-center">
                  <TableCell className="">{category.index}</TableCell>
                  <TableCell className="">{category.name}</TableCell>
                  <TableCell className="">
                    <Button  onClick={() => onEditCategory(category)}>
                      <Edit className=" text-center text-slate-950"/>
                    </Button>
                    <Button className=" " onClick={() => onDeleteCategory(category)}>
                      <Delete className=" text-center text-slate-950"/>
                      
                    </Button>
                    <Switch/>
                    
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default CategoryList;
