import React from "react";
import { Header } from "../components/ui/header";
import { DataTable } from "../components/ui/data-table";
import { columns } from "../components/ui/bill-history-table";
import { Filter } from "lucide-react";
import { Button } from "../components/ui/button";

export const History = (): JSX.Element => {
  const [globalFilter, setGlobalFilter] = React.useState("");

  const billHistory = [
    {
      id: 1,
      request: "DSTV Power b...",
      sponsor: "Father",
      status: "Completed",
      priority: "High",
      created: "Mar 21, 2025",
      dueDate: "Apr 13, 2025",
    },
    {
      id: 2,
      request: "Cloth, shoes...",
      sponsor: "Friend",
      status: "Completed",
      priority: "Medium",
      created: "Mar 21, 2025",
      dueDate: "Apr 13, 2025",
    },
    {
      id: 3,
      request: "Airtime & Data",
      sponsor: "Mother",
      status: "Completed",
      priority: "High",
      created: "Mar 21, 2025",
      dueDate: "Apr 13, 2025",
    },
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(event.target.value);
  };

  return (
    <>
        <Header />
        <div className="space-y-8 p-4 lg:p-8 pt-16 lg:pt-8">
      <div>
        
        <h1 className="text-2xl font-semibold mb-1">Bill History</h1>
        <p className="text-gray-600">View and track all your bill requests</p>
      </div>

      <div className="bg-white rounded-xl">
        <div className="p-6 flex items-center justify-between border-b">
          <h3 className="text-lg font-semibold">All bill requests</h3>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter by
            </Button>
            <input
              type="search"
              placeholder="Search"
              className="border rounded-lg px-4 py-2"
              value={globalFilter}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="p-6">
          <DataTable 
            columns={columns} 
            data={billHistory.filter(item => 
              Object.values(item).some(value => 
                value.toString().toLowerCase().includes(globalFilter.toLowerCase())
              )
            )} 
          />
        </div>
      </div>
    </div>
    </>
   
  );
};