import React from 'react';
import { Inbox, AlertCircle, Trash2, Archive, Filter, Star, X } from 'lucide-react';
import { useMessages } from '../context/MessageContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { folders, activeFolder, setActiveFolder, counts } = useMessages();
  
  const sidebarItems = [
    { id: 'inbox', name: 'Inbox', icon: Inbox, count: counts.inbox },
    { id: 'spam', name: 'Spam', icon: AlertCircle, count: counts.spam },
    { id: 'starred', name: 'Starred', icon: Star, count: counts.starred },
    { id: 'archived', name: 'Archived', icon: Archive, count: counts.archived },
    { id: 'trash', name: 'Trash', icon: Trash2, count: counts.trash },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={onClose}
        />
      )}
    
      {/* Sidebar */}
      <aside 
        className={`w-64 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 flex flex-col h-full
                  md:relative md:translate-x-0 fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 md:hidden flex justify-between items-center">
          <h2 className="font-semibold text-lg">SpamShield</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center">
              <Filter size={18} className="mr-2" />
              Scan for Spam
            </button>
          </div>
          
          <nav className="px-2">
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveFolder(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors
                              ${activeFolder === item.id 
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' 
                                : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                  >
                    <div className="flex items-center">
                      <item.icon size={18} className="mr-3" />
                      <span>{item.name}</span>
                    </div>
                    {item.count > 0 && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium
                                      ${activeFolder === item.id 
                                        ? 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-100' 
                                        : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                        {item.count}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="rounded-lg bg-gray-200 dark:bg-gray-700 p-3">
            <h3 className="font-medium text-sm">Spam Detection Stats</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Protected from 187 spam messages this month
            </p>
            <div className="mt-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }} />
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>85% accuracy</span>
              <span>Updated 2h ago</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;