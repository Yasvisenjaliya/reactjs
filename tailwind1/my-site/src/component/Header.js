import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-gray-800 p-4">
      <div className="max-w-[1240px]  items-center flex justify-between border-black mx-auto">
        <div className="text-3xl font-bold">WsCube Tech</div>
        {toggle ? (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resource</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* responsive */}

    <ul className={ `duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[80px]
    ${toggle ? 'left-[0]' : 'left-[-100%]'}
`}>
          <li className="p-3">Home</li>
          <li className="p-3">Company</li>
          <li className="p-3">Resource</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
