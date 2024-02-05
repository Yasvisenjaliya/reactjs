import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-40 md:ml-20 md:mr-10 sm:mr-5 sm:ml-5 max-sm:ml-5 max-sm:mr-5 gap-8 md:gap-16">
      <div className="text-white">
        <h1 className="font-bold text-3xl">Contact us</h1>
        <p className="mt-6 md:mt-10">
          Need to get in touch with us? Either fill out the form with your
          inquiry or find the department email you'd like to contact below.
        </p>
      </div>
      <div className="text-white bg-slate-700 rounded">
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Your First Name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Your Last Name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mt-4 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mt-4 font-medium">
              What can we help you with?
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 mt-4 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
