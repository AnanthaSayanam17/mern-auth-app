import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Welcome to a Better Way to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              Connect
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Join thousands of users who have already discovered our platform.
            Create an account or log in to access all the features.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              variant="secondary"
              size="lg"
              className="animate-fadeIn animation-delay-200 transform hover:scale-105 transition-transform"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="animate-fadeIn animation-delay-200 transform hover:scale-105 transition-transform"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center animate-fadeIn animation-delay-300">
            <div className="p-6 rounded-xl bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Experience unparalleled speed and performance.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is encrypted and never shared with third parties.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
              <p className="text-gray-600">
                Join a thriving community of like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
