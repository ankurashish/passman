import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-around">
        <div className="logo font-bold">PassMan </div>
      <ul>
        <li>
          <a className="hover:font-bold" href="/">Home</a>
          <a className="hover:font-bold" href="#">About</a>
          <a className="hover:font-bold" href="#">Contact</a>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
