import React from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "FAQ", link: "#" },
    { name: "Changelog", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Download", link: "#" },
    { name: "Contact", link: "#" },
  ];

  const handleNavItemClick = (item) => {
    if (item.link === "#") {
      toast(`${item.name} in Navbar is under development.`);
    }
  };

  return (
    <nav className=" Navbar bg-base-100 shadow-sm py-3">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex-1">
          <a className="text-xl md:text-2xl font-bold">CS — Ticket System</a>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-4 font-semibold">
          <div className="hidden md:block">
            <ol className="flex justify-between items-center gap-3">
              {navItems.map((item, index) => (
                <li key={index} className="hover:underline cursor-pointer">
                  <a onClick={() => handleNavItemClick(item)} href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <button
            className="btn bg-[#6d37e5] text-white"
            onClick={() => toast("New Ticket in Navbar is under development.")}
          >
            + New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
