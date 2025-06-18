import React, { useState } from 'react';
import lumia from '../assets/logo/image.png'; // Adjust the path as necessary
import {
  Menu,
  X,
  Search,
  MessageSquare,
  User,
  Heart,
  ShoppingCart
} from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <nav className="bg-gray-500 text-gray-200 border-b-amber-50 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <img src={lumia} alt="" srcset="" />
          </div>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search by title, sku, type, vendor, description or tags"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-gray-800 placeholder-gray-400 text-gray-200 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <MessageSquare size={20} className="hover:text-white cursor-pointer" />
            <User size={20} className="hover:text-white cursor-pointer" />
            <Heart size={20} className="hover:text-white cursor-pointer" />
            <ShoppingCart size={20} className="hover:text-white cursor-pointer" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Panel */}
        {mobileOpen && (
          <div className="pt-4 pb-2 space-y-4 md:hidden">
            <form onSubmit={handleSearch} className="px-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-gray-800 placeholder-gray-400 text-gray-200 rounded-full pl-4 pr-10 py-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center space-x-6">
              <MessageSquare size={20} className="hover:text-white" />
              <User size={20} className="hover:text-white" />
              <Heart size={20} className="hover:text-white" />
              <ShoppingCart size={20} className="hover:text-white" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
