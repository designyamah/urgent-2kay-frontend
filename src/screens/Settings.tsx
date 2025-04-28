import React from "react";
import { Header } from "../components/ui/header";

export const Settings = (): JSX.Element => {
  return (

    <>
      <Header />
    <div className="space-y-8 lg:p-8 pt-16 lg:pt-8">
      <div>
       
        <h1 className="text-2xl font-semibold mb-1">Hi, Caleb</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-1">Profile Settings</h2>
          <p className="text-gray-500">Update your personal information</p>
        </div>

        <div className="p-6">
          <form className="space-y-6 max-w-2xl">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#5A3CCA] focus:border-[#5A3CCA]"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#5A3CCA] focus:border-[#5A3CCA]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#5A3CCA] focus:border-[#5A3CCA]"
                placeholder="Enter your phone number"
              />
            </div>

            <button
              type="submit"
              className="bg-[#5A3CCA] text-white px-6 py-2 rounded-lg hover:bg-[#4A32A6] transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
         
  );
};