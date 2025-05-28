import React from 'react';
import { Menu, Search, Bell, Moon, Sun, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="md:hidden mr-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-medium">SP</span>
          </div>
          <h1 className="text-xl font-semibold hidden sm:block">Capston Project CSFC</h1>
        </div>
      </div>
      
      <div className="relative flex-1 max-w-xl mx-8 hidden md:block">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="search"
          className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-transparent rounded-lg focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-blue-500 transition-colors"
          placeholder="Search messages..."
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        <button 
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>
        
        <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center ml-2">
          <span className="text-white text-sm font-medium">JD</span>
        </div>
      </div>
    </header>
  );
};

export default Header;