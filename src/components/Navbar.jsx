import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 px-4 text-white flex justify-between items-center h-12">
      <div className="mycontainer">
        <div className="logo font-bold text-white">
          <span>&lt;</span>
          PassMan
          <span>/&gt;</span>
        </div>
        <ul>
          <li>
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
