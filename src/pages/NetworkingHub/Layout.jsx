import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaSearch, FaRegComment, FaTh, FaUserFriends } from "react-icons/fa"; // Importing icons from react-icons

export default function NetworkingHubLayout() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <nav className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md bg-background/80 shadow-sm border-t px-4 py-3 flex items-center justify-between md:hidden">
        <NavLink
          to="search"
          className={({ isActive }) =>
            `text-muted-foreground hover:text-foreground ${
              isActive ? "font-bold text-black" : ""
            }`
          }
        >
          <FaSearch className="w-6 h-6" />
        </NavLink>
        <NavLink
          to="messages"
          className={({ isActive }) =>
            `text-muted-foreground hover:text-foreground ${
              isActive ? "font-bold text-black" : ""
            }`
          }
        >
          <FaRegComment className="w-6 h-6" />
        </NavLink>
        <NavLink
          to="groups"
          className={({ isActive }) =>
            `text-muted-foreground hover:text-foreground ${
              isActive ? "font-bold text-black" : ""
            }`
          }
        >
          <FaTh className="w-6 h-6" />
        </NavLink>
        <NavLink
          to="posts"
          className={({ isActive }) =>
            `text-muted-foreground hover:text-foreground ${
              isActive ? "font-bold text-black" : ""
            }`
          }
        >
          <FaUserFriends className="w-6 h-6" />
        </NavLink>
      </nav>
    </div>
  );
}
