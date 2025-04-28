import React from "react";
import { Button } from "../components/ui/button";
import { Filter, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import { Header } from "../components/ui/header";
import { DataTable } from "../components/ui/data-table";
import { columns } from "../components/ui/bill-history-table";
import moneyImage from "../assets/images/money3d.png";

export const Dashboard = (): JSX.Element => {
  const stats = [
    {
      label: "Total bills Requested",
      amount: "₦300,480",
      change: "16%",
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#EAFAEE] flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#4CD964] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white" />
          </div>
        </div>
      ),
    },
    {
      label: "Approved Bill Requests",
      amount: "₦200,480",
      change: "16%",
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#F1EDFF] flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#5A3CCA] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white" />
          </div>
        </div>
      ),
    },
    {
      label: "Rejected Bill Requests",
      amount: "₦30,000",
      change: "16%",
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#FFE5E5] flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#FF4D4D] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white" />
          </div>
        </div>
      ),
    },
    {
      label: "Pending Bill Requests",
      amount: "₦70,000",
      change: "16%",
      icon: (
        <div className="w-10 h-10 rounded-full bg-[#FFF8E5] flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#FFB800] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white" />
          </div>
        </div>
      ),
    },
  ];

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
    {
      id: 4,
      request: "DSTV Power b...",
      sponsor: "Father",
      status: "Completed",
      priority: "High",
      created: "Mar 21, 2025",
      dueDate: "Apr 13, 2025",
    },
  ];

  const requestRateData = [
    { name: "Approved", value: 80, color: "#5A3CCA" },
    { name: "Rejected", value: 10, color: "#FF4D4D" },
    { name: "Pending", value: 10, color: "#FFB800" },
  ];

  const [globalFilter, setGlobalFilter] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="space-y-8 p-4 lg:p-8 pt-16 lg:pt-8">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Hi, Caleb</h1>
          <p className="text-gray-600">
            Here's what your Urgent2k dashboard looks like today
          </p>
        </div>

        {/* Banner */}
        <div className="bg-[#1A1A1A] rounded-xl p-8 text-white flex justify-between items-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-2">
              Create New Urgent 2kay Bundle!
            </h2>
            <p className="text-gray-300">
              Combine all your bills into one transparent, easy-to-manage
              request.
              <br />
              We'll handle the rest.
            </p>
          </div>
          <Button className="bg-[#5A3CCA] hover:bg-[#4A32A6] text-white relative z-10">
            Create new bundle
          </Button>
          <div
            className="absolute top-0 right-0 h-full w-1/2"
            style={{
              backgroundImage: `url(${moneyImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.8,
            }}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Overview</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    {stat.icon}
                    <span className="text-gray-500 text-sm font-normal whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[28px] font-semibold text-[#1A1A1A]">
                        {stat.amount}
                      </span>
                      <div className="flex items-center gap-1 text-[#4CD964]">
                        <TrendingUp size={16} />
                        <span className="text-sm">{stat.change}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Increase this month</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Request Rate</h3>
            <div className="flex items-center gap-8">
              <div className="w-[200px] h-[200px]">
                <PieChart width={200} height={200}>
                  <Pie
                    data={requestRateData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {requestRateData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="space-y-4">
                {requestRateData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-600">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.value}%`,
                            backgroundColor: item.color,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {item.value}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bill History */}
        <div className="bg-white rounded-xl">
          <div className="p-6 flex items-center justify-between border-b">
            <h3 className="text-lg font-semibold">Bill request history</h3>
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
              <Button variant="link" className="text-[#5A3CCA]">
                View all
              </Button>
            </div>
          </div>

          <div className="p-6">
            <DataTable
              columns={columns}
              data={billHistory.filter((item) =>
                Object.values(item).some((value) =>
                  value
                    .toString()
                    .toLowerCase()
                    .includes(globalFilter.toLowerCase())
                )
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};
