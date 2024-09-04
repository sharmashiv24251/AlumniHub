import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DonationPortalLayout = () => {
  const navItems = [
    { to: "campaigns", label: "Campaigns" },
    { to: "form", label: "Donate" },
    { to: "history", label: "History" },
  ];

  return (
    <div className="container mx-auto p-6">
      <Card className="mb-6">
        <CardContent className="p-4">
          <Tabs defaultValue="campaigns">
            <TabsList className="w-full justify-start">
              {navItems.map((item) => (
                <TabsTrigger key={item.to} value={item.to} asChild>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "font-semibold text-primary"
                          : "text-muted-foreground hover:text-primary"
                      } px-4 py-2 transition-colors`
                    }
                  >
                    {item.label}
                  </NavLink>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <Outlet />
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationPortalLayout;
