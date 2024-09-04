import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  FaGraduationCap,
  FaSearch,
  FaRegComment,
  FaTh,
  FaUserFriends,
} from "react-icons/fa";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/80 shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold"
            prefetch={false}
          >
            <FaGraduationCap className="h-6 w-6" />
            <span>AlumniHub</span>
          </Link>
          {/* Only show these links if the path starts with /networking */}
          {location.pathname.startsWith("/networking") && (
            <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
              <NavLink
                to="networking/search"
                className={({ isActive }) =>
                  `text-muted-foreground hover:text-foreground ${
                    isActive ? "font-bold text-black" : ""
                  }`
                }
              >
                <FaSearch className="w-6 h-6" />
              </NavLink>
              <NavLink
                to="networking/messages"
                className={({ isActive }) =>
                  `text-muted-foreground hover:text-foreground ${
                    isActive ? "font-bold text-black" : ""
                  }`
                }
              >
                <FaRegComment className="w-6 h-6" />
              </NavLink>
              <NavLink
                to="networking/posts"
                className={({ isActive }) =>
                  `text-muted-foreground hover:text-foreground ${
                    isActive ? "font-bold text-black" : ""
                  }`
                }
              >
                <FaTh className="w-6 h-6" />
              </NavLink>
              <NavLink
                to="networking/groups"
                className={({ isActive }) =>
                  `text-muted-foreground hover:text-foreground ${
                    isActive ? "font-bold text-black" : ""
                  }`
                }
              >
                <FaUserFriends className="w-6 h-6" />
              </NavLink>
            </div>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>John Doe</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <div className="pt-16">
        {/* Add padding to the top of the content */}
        <Outlet />
      </div>
    </>
  );
}
