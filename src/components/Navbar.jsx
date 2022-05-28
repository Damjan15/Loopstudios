import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between font-bold text-white">
        <img src={logo} alt="Loopstudios Logo" />

        <div className="hidden h-10 font-alata md:flex md:space-x-8">
          <div className="group">
            <a href="/">About</a>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>

          <div className="group">
            <a href="/">Carreers</a>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>

          <div className="group">
            <a href="/">Events</a>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>

          <div className="group">
            <a href="/">Products</a>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>

          <div className="group">
            <a href="/">Support</a>
            <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
        </div>

        {/* @todo -> Hamburger Button */}
        <div className="md:hidden">
          <button
            className={`z-40 block hamburger md:hidden focus:outline-none ${
              open && "open"
            }`}
            onClick={() => setOpen(!open)}
            type="button"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>

      {open && (
        <div className={`absolute top-0 bottom-0 left-0 ${open ? "flex" : "hidden"} flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black`}>
          <a href="/" className="hover:text-pink-500">
            About
          </a>
          <a href="/" className="hover:text-pink-500">
            Careers
          </a>
          <a href="/" className="hover:text-pink-500">
            Events
          </a>
          <a href="/" className="hover:text-pink-500">
            Products
          </a>
          <a href="/" className="hover:text-pink-500">
            Support
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
