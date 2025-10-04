import React from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
const DashboardLayout = () => {
  console.log(useLocation());
  const isProfile = useLocation().pathname === "/dashboard/profile";

  return (
    <div>
      <div className="flex gap-2">
        <div className="w-56 bg-black text-white p-4 h-screen">
          <h1 className="text-lg font-bold mb-4">Shuddy Store</h1>
          <nav className="flex flex-col gap-3">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
              to="/dashboard"
              end
            >
              DASHBOARD
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
              to="/dashboard/profile"
            >
              PROFILE
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
              to="/dashboard/settings"
            >
              SETTINGS
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
              to="/dashboard/account"
            >
              ACCOUNT
            </NavLink>
            {isProfile && (
              <button className="bg-red-500 text-white rounded-lg p-2">
                Log out
              </button>
            )}
          </nav>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
