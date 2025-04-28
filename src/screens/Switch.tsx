import React from "react";
import { Header } from "../components/ui/header";
import { Button } from "../components/ui/button";

export const Switch = (): JSX.Element => {
  return (

    <>
        <Header />
      
     <div className="space-y-8 lg:p-8 pt-16 lg:pt-8">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Switch Account Type</h1>
        <p className="text-gray-600">Change your account type between beneficiary and sponsor</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="max-w-2xl">
          <h2 className="text-lg font-semibold mb-4">Switch to Sponsor Account</h2>
          <p className="text-gray-600 mb-6">
            As a sponsor, you'll be able to receive and manage bill requests from beneficiaries.
            You can switch back to your beneficiary account at any time.
          </p>
          <Button className="bg-[#5A3CCA] hover:bg-[#4A32A6]">
            Switch to Sponsor Account
          </Button>
        </div>
      </div>
    </div>
    </>
   
  );
};