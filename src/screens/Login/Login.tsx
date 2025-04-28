import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { PasswordInput } from "../../components/ui/password-input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import logo from "../../assets/images/logo2k.png";
import dashboard from "../../assets/images/signupDashboard.png";
import googleIcon from "../../assets/images/google.png";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Handle login logic here once backend endpoint is provided
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 sm:p-8">
      {/* Left Section */}
      <div className="hidden md:block w-full md:w-1/2 bg-[#5A3CCA] p-8 rounded-[20px]">
        <div className="flex items-center gap-2 mb-8 md:mb-16">
          <img src={logo} alt="Urgent 2kay" className="h-6 md:h-8" />
        </div>

        <div className="max-w-[500px]">
          <h1 className="text-[28px] md:text-[40px] leading-[36px] md:leading-[48px] font-medium mb-4 text-white">
            Bundle all your bills in one app — Bill payment made easy
          </h1>
          <p className="text-[#F1EDFF] text-base md:text-lg opacity-80">
            We simplify financial support by bundling bills into one clear
            request and sending payments directly to service providers.
          </p>
        </div>

        <div className="mt-8 md:mt-16 hidden md:block">
          <img
            src={dashboard}
            alt="Dashboard Preview"
            className="w-full max-w-[500px] rounded-lg"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-white p-4 sm:p-8 flex items-center">
        <div className="max-w-[360px] mx-auto">
          <h2 className="text-2xl md:text-[32px] font-medium text-[#2A2A2A] mb-2">
            Log in
          </h2>
          <p className="text-sm md:text-base text-[#2A2A2A] mb-6 md:mb-8">
            Bundle your bills the easy way, all in one app
          </p>

          <button className="w-full h-12 border border-gray-300 rounded-lg mb-6 flex items-center justify-center gap-2">
            <img src={googleIcon} alt="Google" className="w-5 h-5" />
            <span className="text-sm md:text-base">Sign in with Google</span>
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-gray-500 text-sm">Or sign in with</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter email address"
                {...register("email")}
                className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm md:text-base"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <PasswordInput
                placeholder="Enter password"
                {...register("password")}
                className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm md:text-base"
                error={errors.password?.message}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#5A3CCA] hover:bg-[#4A32A6] text-white rounded-lg mt-6"
            >
              Log in
            </Button>

            <p className="text-center mt-4 text-sm">
              Don't have an account?{" "}
              <Link to="/" className="text-[#5A3CCA] hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
