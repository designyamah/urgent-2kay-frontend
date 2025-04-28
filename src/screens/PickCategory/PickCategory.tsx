import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { RadioGroup } from "../../components/ui/radio-group";
import beneficiaryIcon from "../../assets/images/moneyicon.png";
import sponsorIcon from "../../assets/images/moneyicon.png";

export const PickCategory = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState<string>("beneficiary");

  const categories = [
    {
      id: "beneficiary",
      title: "Sign up as a Beneficiary",
      description:
        "Send bill requests to benefactors, and remind them of bills.",
      iconSrc: beneficiaryIcon,
    },
    {
      id: "sponsor",
      title: "Sign up as a Sponsor",
      description: "Receive and accept bill requests from beneficiaries.",
      iconSrc: sponsorIcon,
    },
  ];

  const handleContinue = () => {
    const route =
      selectedCategory === "beneficiary"
        ? "/beneficiary-signup"
        : "/sponsor-signup";
    navigate(route);
  };

  return (
    <div className="bg-[#4c4c4c] min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[800px] mx-0 sm:mx-4">
        <div className="bg-white rounded-xl p-4 md:p-6 flex flex-col items-center gap-[45px]">
          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="font-medium text-black text-2xl md:text-3xl text-center tracking-[-0.60px] leading-[33px] [font-family:'Switzer-Medium',Helvetica]">
              How do you want to sign up?
            </h2>
            <p className="text-black text-sm md:text-base text-center tracking-[-0.32px] leading-[17.6px] [font-family:'Switzer-Regular',Helvetica]">
              Choose a category to sign up in
            </p>
          </div>

          <div className="flex flex-col items-center gap-[30px] w-full">
            <RadioGroup
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="flex flex-col md:flex-row items-center gap-4 md:gap-[60px] w-full"
            >
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className={`w-full md:w-[344px] rounded-xl cursor-pointer ${
                    selectedCategory === category.id
                      ? "border border-solid border-[#1d2022]"
                      : "border-[0.5px] border-solid border-[#b7b7b7]"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start p-[30px] relative">
                      <div className="flex flex-col items-start gap-3">
                        <div className="w-10 h-10">
                          <div className="flex w-10 h-10 items-center justify-center gap-2.5 bg-blacklight rounded-[30px]">
                            <div className="relative w-6 h-6">
                              <img
                                className="absolute w-[22px] top-[3px] left-px"
                                alt={
                                  category.id === "beneficiary"
                                    ? "Beneficiary icon"
                                    : "Sponsor icon"
                                }
                                src={category.iconSrc}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-start gap-2 w-full">
                          <h3 className="[font-family:'Switzer-Medium',Helvetica] font-medium text-primary-grey text-sm md:text-base tracking-[0] leading-normal">
                            {category.title}
                          </h3>
                          <p className="[font-family:'Switzer-Regular',Helvetica] font-normal text-[#3a3a3a] text-xs md:text-sm tracking-[0] leading-[21px]">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex absolute right-[30px] w-[22px] h-[22px] items-center justify-center rounded-[11px] border-[1.5px] border-solid ${
                          selectedCategory === category.id
                            ? "border-[#202427]"
                            : "border-[#bbbcbd]"
                        }`}
                      >
                        {selectedCategory === category.id && (
                          <div className="w-[11.85px] h-[11.85px] bg-blacknormal-hover rounded-[5.92px]" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>

            <Button
              onClick={handleContinue}
              className="h-11 w-full bg-[#5a3cca] rounded-lg hover:bg-[#4a32a6] transition-colors"
            >
              <span className="[font-family:'Switzer-Regular',Helvetica] font-normal text-bluelight text-sm tracking-[-0.28px] leading-[15.4px]">
                Continue
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
