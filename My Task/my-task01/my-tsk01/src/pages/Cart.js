
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Cart = ({ cart, setCart, handleChange, size,  }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.Price));

    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      <div className=" text-white ml-[15rem] mr-[15rem] bg-slate-800 mt-4">
        <div>
          <div className=" bg-slate-700 h-[60px] text-white flex justify-between rounded-[4px]">
            <h1 className="font-bold lg:text-xl my-3 mx-2 md:text-2xl text-[15px]">
              Cart Calculation
            </h1>
            <button className="bg-red-600 lg:w-[9%] md:w-[15%] w-[22%] rounded-[3px] h-[60%] my-3 mx-2 lg:text-[18px] md:text-[20px] text-[15px] ">
              Emptycart
            </button>
          </div>
        </div>
        {cart?.map((item) => (
          <div
            key={item.id}
            className=" flex gap-20 border-b-2 border-green-200 "
          >
            <div className=" flex gap-14">
              <img
                className="w-[10rem] h-24 m-2 ml-[5rem] "
                src={item.img}
                alt={item.title}
              />
              <p className=" m-2">{item.title}</p>
            </div>
            <div className=" m-2">
              <button
                onClick={() => handleChange(item, +1)}
                className=" border p-1 "
              >
                +
              </button>
              <button className="ml-2">{item.amount} </button>
              <button
                onClick={() => handleChange(item, -1)}
                className=" border ml-4 p-1"
              >
                -
              </button>
            </div>
            <div className=" m-2">
              <span>{item.Price * item.amount} </span>
              <button onClick={() => handleRemove(item.id)} className="">
                Remove
              </button>
            </div>
          </div>
        ))}
        <div>
          <span>Total price of your Cart</span>
          <span>Rs - {price} </span>
        </div>
      </div>
      <div className="flex justify-between text-white bg-slate-800 ml-[15rem] mr-[15rem] ">
        <div></div>
        <div></div>
        <div className="font-bold my-3 mx-2 lg:text-[18px] md:text-[20px] text-[14px]">
          Item In Cart : <mark className=" bg-slate-800 text-white"> {size}</mark>
        </div>
        <div className="font-bold my-3 mx-2 lg:text-[18px] md:text-[20px] text-[13px]">
          Total Price : <mark className=" bg-slate-800 text-white">{price}</mark>
        </div>
       
          <Link to="/CheackOut">
          <button className="bg-green-600 rounded-[3px] mr-10 my-3 text-white  lg:text-[18px] md:text-[20px] text-[15px] w-[8rem] hover:bg-black">
            CheackOut
          </button>
          </Link>
   
      </div>
    </article>
  );
};

export default Cart;
