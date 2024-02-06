import React from "react";
import {Link} from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=" w-[15%] bg-slate-50 gap-5 flex flex-col pt-10 h-[100vh] mt-0 ">
      <Link to='/addproduct'>
      
        <div className=" flex bg-slate-300 ml-3 mr-3 justify-center gap-7 p-3">
          <FaCartShopping className=" w-8 h-8" />
          <p className="">Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct'>
      
        <div className=" flex  bg-slate-300 ml-3 mr-3 justify-center gap-7 p-3">
        <FaClipboardList className=" w-8 h-8" />
          <p>Product List </p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
