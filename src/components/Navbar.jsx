import React from "react";

const Navbar = () => {
  return (
    <nav className=" Navbar bg-base-100 shadow-sm py-3">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex-1">
          <a className="text-xl md:text-2xl font-bold">CS — Ticket System</a>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-4 font-semibold">
          <div className="hidden md:block">
            <ol className="flex justify-between items-center gap-3">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">FAQ</li>
              <li className="hover:underline cursor-pointer">Changelog</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">Download</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ol>
          </div>
          <button className="btn bg-[#6d37e5] text-white">+ New Ticket</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
