
import React from 'react';
import { ChevronDownIcon, MailIcon, SettingsIcon, SearchIcon } from './icons';

const NavLink: React.FC<{ children: React.ReactNode; href?: string; hasDropdown?: boolean; highlight?: boolean }> = ({ children, href = '#', hasDropdown, highlight }) => (
  <a href={href} className={`flex items-center text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium ${highlight ? 'bg-yellow-300 rounded-md' : ''}`}>
    {children}
    {hasDropdown && <ChevronDownIcon className="w-4 h-4 ml-1" />}
  </a>
);

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <a href="#" className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                a
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-2">
              <NavLink href="#" hasDropdown>About</NavLink>
              <NavLink href="#" hasDropdown>Lainnya</NavLink>
              <NavLink href="#" hasDropdown>Tools</NavLink>
              <NavLink href="#">AdSense</NavLink>
              <NavLink href="#" highlight>Read</NavLink>
              <NavLink href="#">Guest</NavLink>
              <NavLink href="#">SEO</NavLink>
              <NavLink href="#">Snippet</NavLink>
              <NavLink href="#">Tips Blogger</NavLink>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-orange-500">
              <MailIcon className="w-6 h-6" />
            </button>
            <button className="text-gray-500 hover:text-orange-500">
              <SettingsIcon className="w-6 h-6" />
            </button>
            <button className="text-gray-500 hover:text-orange-500">
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
