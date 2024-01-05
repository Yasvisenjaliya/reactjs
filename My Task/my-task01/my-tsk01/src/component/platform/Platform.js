import React from "react";

const Platform = () => {
  return (
    <div className="c-1 text-white">
      
        <div>
          <h1 className=" xl:text-4xl md:text-4xl lg:text-4xl max-md:text-2xl text-center font-bold c-2">
            The Everyday Ecommerce Platform
          </h1>
        </div>
        <div className=" md:pl-10 md:pr-10 max-sm:pl-2 max-sm:pr-2">
          <div>
            <div className="xl:pl-48 xl:flex md:flex lg:flex xl:mt-20 md:mt-5 xl:gap-44">
              <div>
                <h1 className=" xl:text-2xl lg:text-2xl md:text-2xl max-sm:text-xl pt-7 font-bold c-2">
                  Inventory tracking woes, eliminated
                </h1>
                <p className=" xl:text-xl lg:text-xl md:text-xl pt-5 c-3">
                  An updated inventory with every sale. Get reminders about low
                  stock so you can stay on top of your business.
                </p>
              </div>
              <img
                src="./assets/image6.jpg"
                className="xl:mr-44 lg:mr-44 max-sm:w-[20rem] max-sm:p-2 w-[90%] c-5"
              />
            </div>
            <div className="xl:pl-48 xl:flex md:flex lg:flex xl:mt-20 lg:mt-20 md:mt-20 xl:gap-44">
              <div>
                <h1 className="  xl:text-2xl lg:text-2xl md:text-2xl max-sm:text-xl pt-7 font-bold c-2">
                  Run your store. Better.
                </h1>
                <p className=" xl:text-xl lg:text-xl md:text-xl pt-5 c-3">
                  Keeping track of your orders shouldn't be a source of stress.
                  Mark and view status updates for every order from when it's
                  made to when it's fulfilled.
                </p>
              </div>
              <img
                src="./assets/image4.jpg"
                className="xl:mr-44 lg:mr-44 max-sm:w-[20rem] max-sm:p-2 xl:w-[125%] c-5"
              />
            </div>
            <div className="xl:pl-48 xl:flex md:flex lg:flex mt-20 xl:gap-44">
              <div>
                <h1 className=" xl:text-2xl lg:text-2xl md:text-2xl max-sm:text-xl pt-7 font-bold c-2">
                  Stay analytically ahead
                </h1>
                <p className=" xl:text-xl lg:text-xl md:text-xl pt-5 c-3">
                  View reports on your store's performance with critical visitor
                  and customer data. Turn your store's key stats into profit
                  with a dashboard that updates in real time.
                </p>
              </div>
              <img
                src="./assets/image5.jpg"
                className="xl:mr-44 lg:mr-44 max-sm:w-[20rem] max-sm:p-2 xl:w-[135%] c-5"
              />
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Platform;
