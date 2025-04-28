import React from "react";
import { Bell, MessageSquare, LayoutDashboard } from "lucide-react";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  walletAddress?: string;
}

export const Header = ({ walletAddress = "0x4A...03DC" }: HeaderProps): JSX.Element => {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const formattedPath = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div className="sticky top-0 z-20 bg-white border-b">
      <div className="flex items-center justify-between py-4 px-8">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <LayoutDashboard size={16} />
          <span>{formattedPath}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Wallet</span>
            <span className="font-medium">{walletAddress}</span>
          </div>
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell size={20} className="text-gray-600" />
            </button>
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#5A3CCA] rounded-full"></div>
          </div>
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MessageSquare size={20} className="text-gray-600" />
            </button>
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#5A3CCA] rounded-full"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};