import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
function CheackOut({ cart = [], setCart }) {
  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.description));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };
  const handleSuccessClick = () => {
    Swal.fire("Success")
  }
  const list = [
    {
      id: 1,
      title: "Country/Region",
    },
    {
      id: 2,
      title: "Street adrress",
    },
    {
      id: 3,
      title: "State",
    },
    {
      id: 4,
      title: "PIN Code",
    },
    {
      id: 5,
      title: "Phone",
    },
    {
      id: 6,
      title: "Email Addres",
    },
  ];
  return (
    <div className=" lg:px-20  px-3 mt-40">
      <div className=" bg-white">
        <h1 className="md:ml-2 lg:ml-5 p-4 font-bold md:text-5xl lg:text-5xl text-3xl">
          Checkout
        </h1>
        <hr className="border border-black border-b-2 m-2" />
        <div className="lg:flex justify-between col">
          <div>
            <h2 className="px-3 py-6 md:text-2xl lg:text-2xl text-xl text-slate-800 font-bold">
              Billing Details
            </h2>
            <hr className="border border-slate-300 h-px md:w-[620px] lg:w-[620px]" />
            <form>
              <div div className="my-6">
                <div className="text-xl lg:flex justify-between col ">
                  <div>
                    <label for="first name"> First Name </label>
                    <div>
                      <input
                        type="text"
                        name="First Name"
                        id="fname"
                        className="p-2  border border-slate-900 lg:w-[250px] md:w-[100%] w-[101%]"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label for="last name"> Last Name </label>
                    <div>
                      <input
                        type="text"
                        name="last Name"
                        className="p-2 border border-slate-900 lg:w-[250px] md:w-[100%] w-[101%]"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  {list.map((data, id) => (
                    <div className="text-xl mt-5" key={id}>
                      <label for="Country / Region ">{data.title}</label>
                      <div>
                        <div>
                          <input
                            type="text"
                            className="p-2 border border-slate-900 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
          <div className="border border-black h-[720px] lg:w-[500px] lg:h-[830px] md:w-[100%] md:h-[200%] my-[40px]">
            <div>
              <div>
                <h1 className="font-bold text-2xl mx-3 ">Your order</h1>
              </div>
              <div className="flex justify-between mx-4 text-gray-600 text-xl font-semibold">
                <h1>product</h1>
                <h1>Subtotal</h1>
              </div>
              <hr className="border border-gray-500 my-3"></hr>
              <div>
                {cart?.map((item, index) => (
                  <div key={index}>
                    <div className="flex  justify-between  mx-4">
                      <h1 className="lg:text-[18px] md:text-[20px]">
                        {item.title}
                      </h1>
                      <h1 className="lg:text-[18px] md:text-[20px]">
                        {item.description}
                      </h1>
                    </div>
                    <hr className="border border-gray-500 my-3"></hr>
                  </div>
                ))}
                <div className="flex justify-between  mx-4">
                  <h1 className="lg:text-[18px] md:text-[20px]">SubTotal</h1>
                  <h1 className="lg:text-[18px] md:text-[20px]">
                    RS -/{price}
                  </h1>
                </div>
                <hr className="border border-gray-500 my-3"></hr>
                <div className="flex justify-between  mx-4">
                  <h1 className="lg:text-[18px] md:text-[20px]">Total</h1>
                  <h1 className="lg:text-[18px] md:text-[20px]">
                    RS -/{price}
                  </h1>
                </div>
                <hr className="border border-gray-500 my-3"></hr>
              </div>
              <div>
                <div className="flex gap-7 mx-4">
                  <label>
                    <input
                      type="radio"
                      value="option1"
                      checked={selectedOption === "option1"}
                      onChange={() => handleRadioChange("option1")}
                    />
                  </label>
                  <h1 className="lg:text-[18px] md:text-[25px]">
                    Cash on delivery
                  </h1>
                </div>
                <div className="flex gap-7 mx-4">
                  <label>
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption === "option2"}
                      onChange={() => handleRadioChange("option2")}
                    />
                  </label>
                  <h1 className="lg:text-[18px] md:text-[25px]">
                    Pay with card
                  </h1>
                </div>
                {selectedOption === "option1" && (
                  <div>
                    <h1 className="lg:text-xl md:text-2xl text-[90%] mx-[20%] lg:mx-[90px] md:mx-[25%] font-bold my-20 md:my-[10%] ">
                      Pay with cash upon delivery
                    </h1>
                    <button
                      onClick={handleSuccessClick}
                      className="text-white bg-blue-400
                font-bold lg:w-[400px] md:w-[500px] w-[300px] lg:mx-12 md:mx-[20%] mx-5 rounded-2xl text-xl md:my-[3%]"
                    >
                      PLACE ORDER
                    </button>
                  </div>
                )}
                {selectedOption === "option2" && (
                  <div className=" md:mx-[15%] md:my-[10%] lg:mx-8 lg:my-3 mx-4 my-[8%]">
                    <div className="md:my-10 lg:my-10">
                      <div className="md:mx-4 lg:mx-4">
                        <h1 className="font-bold text-xl md:text-[170%] md:my-[3%]">
                          Pay with card
                        </h1>
                      </div>
                      <div className="md:mx-4 lg:mx-4">
                        <label
                          for="email"
                          className="md:text-[140%] lg:text-[100%]"
                        >
                          {" "}
                          Email{" "}
                        </label>
                        <div>
                          <input
                            type="text"
                            name="Email"
                            className="border border-gray-400 rounded-[4px] lg:w-[390px] md:w-[100%] w-[320px]"
                          />
                        </div>
                      </div>
                      <div className="md:mx-4 lg:mx-4">
                        <label
                          for="last name"
                          className="md:text-[140%] lg:text-[100%]"
                        >
                          Card Information
                        </label>
                        <div>
                          <input
                            type="text"
                            name="last Name"
                            className=" border border-gray-400 lg:w-[390px] md:w-[100%] rounded-[4px] md:text-[140%] w-[320px] lg:text-[90%] "
                            placeholder="1234 1234 1234 1234"
                          />
                        </div>
                        <div className=" flex">
                          <input
                            type="text"
                            name="last Name"
                            placeholder="MM/YY"
                            className=" border lg:w-[48.5%] md:w-[100%] w-[137px] border-gray-400 rounded-[4px] md:text-[140%] lg:text-[90%]"
                          />
                          <input
                            type="text"
                            name="last Name"
                            placeholder="CVC"
                            className=" border border-gray-400 rounded-[4px] md:text-[140%] lg:w-[48.5%] lg:text-[90%]"
                          />
                        </div>
                        <div className="">
                          <label
                            for="last name"
                            className="md:text-[140%] lg:text-[100%]"
                          >
                            {" "}
                            Name on Card{" "}
                          </label>
                          <div>
                            <input
                              type="text"
                              name="Email"
                              className=" border border-gray-400 rounded-[4px] lg:w-[390px] md:w-[100%] w-[320px]"
                            />
                          </div>
                        </div>
                        <div className="">
                          <label
                            for="last name"
                            className="md:text-[140%] lg:text-[100%]"
                          >
                            {" "}
                            Country or region{" "}
                          </label>
                          <div>
                            <input
                              type="text"
                              name="Email"
                              className=" border border-gray-400 rounded-[4px] lg:w-[390px] md:w-[100%] w-[320px]"
                            />
                          </div>
                        </div>
                        <button
                          onClick={handleSuccessClick}
                          className="text-white bg-blue-400
                font-bold md:w-[100%] lg:w-[400px] w-[320px]  rounded-[4px] my-5 md:text-[150%] lg:text-[18px]"
                        >
                          Pay
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheackOut;