import React from "react";
import { CartWidget } from "../";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="mb-6 flex flex-row items-center justify-between flex-wrap bg-gradient-to-r from-cyan-500 to-indigo-500 p-6 shadow-md">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to={"/"}>
          <span className="font-semibold text-xl tracking-tight">
            Aromatic Bliss
          </span>
        </Link>
        <ul className="flex flex-row gap-6 px-6">
          <li>
            <Link to={"/category/women"}>Women</Link>
          </li>
          <li>
            <Link to={"/category/men"}>Men</Link>
          </li>
          <li>
            <Link to={"/category/unisex"}>Unisex</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};
