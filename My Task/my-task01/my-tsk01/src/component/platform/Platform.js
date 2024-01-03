import React from "react";


const Platform = () => {
  return (
    <div className="c-1">
      <div>
        <h1 className=" text-4xl text-center font-bold c-2">
          The Everyday Ecommerce Platform
        </h1>
      </div>
      <div>
        <div>
          <div className=" pl-48 flex mt-20 gap-44">
            <div>
              <h1 className=" text-2xl pt-7 font-bold c-2">
                Inventory tracking woes, eliminated
              </h1>
              <p className=" text-xl pt-5 c-3">
                An updated inventory with every sale. Get reminders about low
                stock so you can stay on top of your business.
              </p>
            </div>
            <img src="./assets/image6.jpg" className=" mr-44 w-[90%] c-5" />
          </div>
          <div className=" pl-48 flex mt-20 gap-44">
            <div>
              <h1 className=" text-2xl pt-7 font-bold c-2">
                Run your store. Better.
              </h1>
              <p className=" text-xl pt-5 c-3">
                Keeping track of your orders shouldn't be a source of stress.
                Mark and view status updates for every order from when it's made
                to when it's fulfilled.
              </p>
            </div>
            <img src="./assets/image4.jpg" className=" mr-44 w-[125%] c-5" />
          </div>
          <div className=" pl-48 flex mt-20 gap-44">
            <div>
              <h1 className=" text-2xl pt-7 font-bold c-2">
                Stay analytically ahead
              </h1>
              <p className=" text-xl pt-5 c-3">
                View reports on your store's performance with critical visitor
                and customer data. Turn your store's key stats into profit with
                a dashboard that updates in real time.
              </p>
            </div>
            <img src="./assets/image5.jpg" className=" mr-44 w-[135%] c-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
