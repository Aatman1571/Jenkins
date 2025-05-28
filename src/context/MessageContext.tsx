import React, { createContext, useState, useContext, useEffect } from 'react';
import { Message } from '../types';
import { mockMessages } from '../data/mockMessages';

interface FolderCounts {
  inbox: number;
  spam: number;
  starred: number;
  archived: number;
  trash: number;
}

interface MessageContextType {
  messages: Message[];
  activeFolder: string;
  setActiveFolder: (folder: string) => void;
  toggleStar: (id: string) => void;
  markAsRead: (id: string) => void;
  markAsSpam: (id: string) => void;
  markAsNotSpam: (id: string) => void;
  folders: string[];
  counts: FolderCounts;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allMessages] = useState<Message[]>(mockMessages);
  const [activeFolder, setActiveFolder] = useState<string>('inbox');
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const folders = ['inbox', 'spam', 'starred', 'archived', 'trash'];
  
  // Calculate counts for each folder
  const calculateCounts = (): FolderCounts => {
    return {
      inbox: allMessages.filter(m => !m.isSpam && !m.isArchived && !m.isDeleted).length,
      spam: allMessages.filter(m => m.isSpam && !m.isDeleted).length,
      starred: allMessages.filter(m => m.starred && !m.isDeleted).length,
      archived: allMessages.filter(m => m.isArchived && !m.isDeleted).length,
      trash: allMessages.filter(m => m.isDeleted).length,
    };
  };
  
  const counts = calculateCounts();
  
  // Filter messages based on active folder
  useEffect(() => {
    let filtered;
    
    switch (activeFolder) {
      case 'inbox':
        filtered = allMessages.filter(m => !m.isSpam && !m.isArchived && !m.isDeleted);
        break;
      case 'spam':
        filtered = allMessages.filter(m => m.isSpam && !m.isDeleted);
        break;
      case 'starred':
        filtered = allMessages.filter(m => m.starred && !m.isDeleted);
        break;
      case 'archived':
        filtered = allMessages.filter(m => m.isArchived && !m.isDeleted);
        break;
      case 'trash':
        filtered = allMessages.filter(m => m.isDeleted);
        break;
      default:
        filtered = allMessages.filter(m => !m.isSpam && !m.isArchived && !m.isDeleted);
    }
    
    setFilteredMessages(filtered);
  }, [activeFolder, allMessages]);
  
  // Toggle star status
  const toggleStar = (id: string) => {
    const updatedMessages = allMessages.map(message => 
      message.id === id 
        ? { ...message, starred: !message.starred }
        : message
    );
    
    // This is a mock implementation - in a real app, we would update the state with new messages
    // and potentially save to a backend
    console.log('Toggled star for message:', id);
  };
  
  // Mark message as read
  const markAsRead = (id: string) => {
    const updatedMessages = allMessages.map(message => 
      message.id === id 
        ? { ...message, read: true }
        : message
    );
    
    console.log('Marked message as read:', id);
  };
  
  // Mark as spam
  const markAsSpam = (id: string) => {
    const updatedMessages = allMessages.map(message => 
      message.id === id 
        ? { ...message, isSpam: true, spamScore: 0.95 }
        : message
    );
    
    console.log('Marked message as spam:', id);
  };
  
  // Mark as not spam
  const markAsNotSpam = (id: string) => {
    const updatedMessages = allMessages.map(message => 
      message.id === id 
        ? { ...message, isSpam: false, spamScore: 0.05 }
        : message
    );
    
    console.log('Marked message as not spam:', id);
  };
  
  return (
    <MessageContext.Provider 
      value={{ 
        messages: filteredMessages, 
        activeFolder, 
        setActiveFolder,
        toggleStar,
        markAsRead,
        markAsSpam,
        markAsNotSpam,
        folders,
        counts
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export const useMessages = (): MessageContextType => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessages must be used within a MessageProvider');
  }
  return context;
};