import React from "react";
import { Header } from "../components/ui/header";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";

export const Requests = (): JSX.Element => {
  return (

    <>
      <Header />
    <div className="space-y-8 lg:p-8 pt-16 lg:pt-8">
      <div>
      
        <h1 className="text-2xl font-semibold mb-1">My Requests</h1>
        <p className="text-gray-600">Manage and track your bill requests</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Active Requests</h2>
        <Button className="bg-[#5A3CCA] hover:bg-[#4A32A6]">
          <Plus className="w-4 h-4 mr-2" />
          New Request
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="text-center py-8 text-gray-500">
          No active requests found. Create a new request to get started.
        </div>
      </div>
    </div>
    </>
    
  );
};