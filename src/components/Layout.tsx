import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MessageList from './MessageList';
import MessageDetail from './MessageDetail';
import Header from './Header';
import { MessageProvider } from '../context/MessageContext';
import { Message } from '../types';

const Layout: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <MessageProvider>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header 
          toggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} 
        />
        
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />
          
          <div className="flex flex-1 overflow-hidden">
            <MessageList 
              onSelectMessage={setSelectedMessage}
              selectedMessageId={selectedMessage?.id}
            />
            
            {selectedMessage ? (
              <MessageDetail 
                message={selectedMessage} 
                onClose={() => setSelectedMessage(null)} 
              />
            ) : (
              <div className="hidden md:flex flex-1 items-center justify-center bg-white dark:bg-gray-800">
                <p className="text-gray-500 dark:text-gray-400">Select a message to view its details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MessageProvider>
  );
};

export default Layout;