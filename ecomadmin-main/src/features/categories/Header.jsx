// header.jsx
import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Box from "@mui/material/Box";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button, Switch, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Add } from "@mui/icons-material";

const Header = ({
  filteredCategories,
  handleOpen,
  searchTerm,
  handleRefresh,
  handleSearch,
  handleSwitch,
  activeUser
}) => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl">Categories</h1>
          <Button size="small" variant="outlined" onClick={handleOpen} startIcon={<Add/>}>
            ADD CATEGORY
          </Button>
        </div>
        <div>
          <Box
            sx={{
              p: 2,
              bgcolor: "white",
              my: 1,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="flex ">
              <FilterAltOutlinedIcon sx={{ my: 2, mx: 1 }} />
              <TextField
                label={
                  <div>
                    <SearchOutlinedIcon />
                    Search
                  </div>
                }
                value={searchTerm}
                onChange={handleSearch}
              />
               <Switch sx={{ my: 1 }} onChange={handleSwitch}
              checked={activeUser} />
              <h1 className="my-auto">Active User</h1>
            </div>
            <div className="my-auto flex gap-3 items-center">
              <h1>Total ({filteredCategories.length}) Categories</h1>
              <IconButton onClick={handleRefresh}>
                <RefreshIcon />
              </IconButton>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Header;