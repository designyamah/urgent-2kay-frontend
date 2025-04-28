import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Users,
  History,
  Settings,
  LogOut,
  SwitchCamera,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/images/logo2kpurple.png";

export const DashboardLayout = (): JSX.Element => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: FileText, label: "My requests", path: "/requests" },
    { icon: Users, label: "Sponsors", path: "/sponsors" },
    { icon: History, label: "Bill history", path: "/history" },
  ];

  const bottomNavItems = [
    { icon: SwitchCamera, label: "Switch to sponsor", path: "/switch" },
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: LogOut, label: "Logout", path: "/logout" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] transition-colors"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] text-white transition-transform duration-300 ease-in-out z-40 
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
      >
        <div className="h-full flex flex-col gap-[30px]">
          <div className="p-6">
            <Link to="/dashboard" className="flex items-center gap-2">
              <img src={logo} alt="Urgent 2kay" className="h-8" />
            </Link>
          </div>

          <nav className="flex-1 px-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActiveRoute(item.path)
                        ? "bg-[#5A3CCA] text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto px-4 pb-6">
            <ul className="space-y-2">
              {bottomNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 lg:ml-64 min-h-screen">
        <Outlet />
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
