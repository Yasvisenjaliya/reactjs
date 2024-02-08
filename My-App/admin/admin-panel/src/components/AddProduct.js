import React from "react";
import { MdDriveFolderUpload } from "react-icons/md";

const AddProduct = () => {
  const Product = [
    {
      id: 1,
      title: "Product title",
    },
    {
      id: 2,
      title: "Price",
    },
    {
      id: 3,
      title: "Offer Price",
    },
  ];
  return (
    <div className=" box-border w-[100%] max-w-[800px] pl-32 pt-28 ml-20 mt-20 rounded-2xl bg-slate-600">
      <div>
      {Product.map((item) => (
        <div key={item.id} className="mb-4">
          <p className="mb-2">{item.title}</p>
          <input
            type="text"
            name={item.title.toLowerCase().replace(" ", "-")}
            placeholder={`Type ${item.title.toLowerCase()} here`}
            className="border border-slate-600 rounded p-2"
          />
        </div>
      ))}
        {/* <div>
          <p>Product title</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className=" border border-slate-600 rounded"
          />
        </div>
        <div>
          <p>Price</p>
          <input
            type="text"
            name="old-price"
            placeholder="Type here"
            className=""
          />
        </div>
        <div>
          <p>Offer Price</p>
          <input type="text" name="old-price" placeholder="Type here" />
        </div> */}
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
      <div>
        <label htmlFor="file-input">
          <MdDriveFolderUpload />
        </label>
        <input type="file" name="image" id="file-input" hidden />
      </div>
      <button>ADD</button>
    </div>
  );
};

export default AddProduct;
