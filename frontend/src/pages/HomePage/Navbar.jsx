import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              Brand
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Pricing
            </a>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/login")}
                className="cursor-pointer"
              >
                Log in
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/signup")}
                className="cursor-pointer"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-4 animate-fadeIn">
          <div className="container mx-auto px-4 space-y-3">
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-500"
            >
              Features
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 text-gray-700 hover:text-blue-500"
            >
              Pricing
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="ghost" fullWidth>
                Log in
              </Button>
              <Button variant="primary" fullWidth>
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
