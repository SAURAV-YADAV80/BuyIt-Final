import React, { memo } from "react";
import { Link } from "react-router-dom";
import { withUser, withCart } from "./withProvider";

function Header({ countCart, user, setUser }) {
  function handleLogout() {
    localStorage.removeItem("token");
    setUser(undefined);
  }
  countCart = countCart || 0;
  return (
    <div className="fixed w-full bg-gray-100 px-4 py-2 shadow-md z-10">
      <div className="flex max-w-6xl mx-auto justify-between items-center text-gray-800">
        <div className="flex flex-col sm:flex-row items-center">
          <Link to="/" className="flex items-center">
            <img
              className="h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png?20220213013322"
              alt="amazon-icon"
            />
          </Link>
          {user && (
            <h1 className="ml-4 text-xl md:text-2xl text-gray-800">
              Hey, {user.full_name}
            </h1>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {!user ? (
            <Link
              to="/SignUp"
              className="bg-red-500 hover:bg-red-400 text-white rounded-md px-4 py-2 transition"
            >
              SignUp
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-400 text-white rounded-md px-4 py-2 transition"
            >
              Logout
            </button>
          )}
          <Link to="/Catalogue" className="relative flex items-center">
            <svg
              className="w-16 text-gray-600 hover:text-blue-500 transition-colors duration-150"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 4V2h10v2h-1.197L14 4H10L8.197 6H7v2H6V6H4v12h2v-2h10v2h2V6h-2V4h-1.197L14 2H10l-1.803 2H7zm1 10H6v2h2v-2zm8 0h-2v2h2v-2zm-6 0H8v2h2v-2zm1-8h2V4h-2v2zm-4 0h2V4H8v2zm4 6H8v2h4v-2z" />
            </svg>
            {countCart >= 0 && (
              <p className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {countCart}
              </p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

const newHeader = memo(Header);
export default withUser(withCart(newHeader));
