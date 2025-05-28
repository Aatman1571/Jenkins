import React, { useState } from 'react';
import { useMessages } from '../context/MessageContext';
import { Shield, ShieldOff, Star, Clock, MoreVertical } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';

interface MessageListProps {
  onSelectMessage: (message: any) => void;
  selectedMessageId: string | undefined;
}

const MessageList: React.FC<MessageListProps> = ({ onSelectMessage, selectedMessageId }) => {
  const { messages, toggleStar, activeFolder } = useMessages();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getSpamIndicator = (spamScore: number) => {
    if (spamScore >= 0.8) {
      return (
        <div className="flex items-center text-red-500 font-medium text-xs">
          <Shield size={14} className="mr-1" />
          <span>High</span>
        </div>
      );
    } else if (spamScore >= 0.4) {
      return (
        <div className="flex items-center text-yellow-500 font-medium text-xs">
          <ShieldOff size={14} className="mr-1" />
          <span>Medium</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-green-500 font-medium text-xs">
          <Shield size={14} className="mr-1 opacity-50" />
          <span>Low</span>
        </div>
      );
    }
  };

  const folderTitle = {
    'inbox': 'Inbox',
    'spam': 'Spam',
    'starred': 'Starred',
    'archived': 'Archived',
    'trash': 'Trash'
  }[activeFolder] || 'Messages';

  return (
    <div className="w-full md:w-2/5 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="font-semibold text-lg">{folderTitle}</h2>
        <div className="flex space-x-2">
          <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400 p-8">
            <Shield size={48} className="mb-4 opacity-50" />
            <p className="text-center">No messages found in this folder</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {messages.map((message) => (
              <li 
                key={message.id}
                className={`hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors relative
                          ${selectedMessageId === message.id 
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500' 
                            : 'border-l-4 border-transparent'}`}
                onMouseEnter={() => setHoveredId(message.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectMessage(message)}
              >
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className={`h-10 w-10 rounded-full flex items-center justify-center
                                  ${message.read 
                                    ? 'bg-gray-200 dark:bg-gray-700' 
                                    : 'bg-blue-100 dark:bg-blue-900'}`}
                      >
                        <span className="font-medium text-sm">
                          {message.sender.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className={`font-medium ${!message.read && 'text-blue-600 dark:text-blue-400'}`}>
                          {message.sender.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {message.sender.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                        {message.read ? (
                          <span>{formatDate(message.date)}</span>
                        ) : (
                          <div className="flex items-center">
                            <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                            <span>{formatDate(message.date)}</span>
                          </div>
                        )}
                      </div>
                      {getSpamIndicator(message.spamScore)}
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <h3 className={`${!message.read && 'font-semibold'}`}>{message.subject}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {message.preview}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="space-x-1">
                      {message.labels?.map((label) => (
                        <span 
                          key={label}
                          className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`flex space-x-2 ${hoveredId === message.id ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStar(message.id);
                        }}
                        className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <Star 
                          size={16} 
                          className={message.starred ? "fill-yellow-400 text-yellow-400" : "text-gray-400"} 
                        />
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <Clock size={16} className="text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Spam score indicator */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 dark:bg-gray-700"
                >
                  <div 
                    className={`h-full ${
                      message.spamScore >= 0.8 
                        ? 'bg-red-500' 
                        : message.spamScore >= 0.4 
                          ? 'bg-yellow-500' 
                          : 'bg-green-500'
                    }`} 
                    style={{ width: `${message.spamScore * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MessageList;