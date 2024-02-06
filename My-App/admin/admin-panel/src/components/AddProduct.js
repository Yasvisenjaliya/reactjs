import React from "react";

const AddProduct = () => {
  return (
    <div>
      <div>
      <div>
        <p>Product title</p>
        <input type="text" name="name" placeholder="Type here" className=" border border-slate-600 rounded" />
      </div>
      <div>
        <p>Price</p>
        <input type="text" name="old-price" placeholder="Type here" className="" />
      </div>
      <div>
        <p>Offer Price</p>
        <input type="text" name="old-price" placeholder="Type here" />
      </div>
    </div>
    <div>
      <p>Product Category</p>
      <select>
        <option value="Paintings">Paintings</option>
        <option value="handcraft">Handcraft</option>
        <option value="books">Books</option>
        <option value="plants">Plants</option>
      </select>
    </div>
    </div>
  );
};

export default AddProduct;
