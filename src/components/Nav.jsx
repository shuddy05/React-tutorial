import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { useAppContext } from "../hooks/useAppContext";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const { user, setUser } = useAppContext();
  const redirect = useNavigate();
  const handleLogout = () => {
    setUser(null);
    redirect("/signin");
  };
  return (
    <div className="bg-black text-white flex items-center justify-between shadow h-20 px-4">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="flex gap-2 items-center">
        <Link to="/about">ABOUT</Link>
        <Link to="/dashboard">DASHBOARD</Link>
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        ) : (
          <Link to="/signin">LOGIN</Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
