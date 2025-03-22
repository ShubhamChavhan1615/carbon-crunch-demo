import { useState } from "react";
import { Link } from "wouter";
import LogoIcon from "@/assets/svg/LogoIcon";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <LogoIcon className="h-8 w-8 text-[#0EA5E9]" />
            <span className="ml-2 text-xl font-bold text-[#111827]">Carbon Crunch</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-[#0EA5E9] font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-[#0EA5E9] font-medium">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-[#0EA5E9] font-medium">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-[#0EA5E9] font-medium">
            Pricing
          </a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-[#0EA5E9] font-medium">
            Login
          </a>
          <a 
            href="#" 
            className="bg-[#0EA5E9] text-white px-4 py-2 rounded-lg hover:bg-[#0EA5E9]/90 transition-all font-medium"
          >
            Sign Up
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            type="button" 
            className="text-gray-600 hover:text-[#0EA5E9]"
            onClick={toggleMobileMenu}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden py-4 px-4 border-t border-gray-100 bg-white absolute left-0 right-0`}
      >
        <nav className="flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-gray-600 hover:text-[#0EA5E9] font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-600 hover:text-[#0EA5E9] font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-600 hover:text-[#0EA5E9] font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="text-gray-600 hover:text-[#0EA5E9] font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-[#0EA5E9] font-medium">
              Login
            </a>
            <a
              href="#"
              className="bg-[#0EA5E9] text-white px-4 py-2 rounded-lg hover:bg-[#0EA5E9]/90 transition-all font-medium text-center"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
