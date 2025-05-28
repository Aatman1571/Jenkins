import React from 'react';
import { ArrowLeft, Trash2, Archive, AlertOctagon, Shield, ShieldX, MoreHorizontal, Star } from 'lucide-react';
import { Message } from '../types';
import { formatDetailDate } from '../utils/dateUtils';
import { useMessages } from '../context/MessageContext';

interface MessageDetailProps {
  message: Message;
  onClose: () => void;
}

const MessageDetail: React.FC<MessageDetailProps> = ({ message, onClose }) => {
  const { toggleStar, markAsSpam, markAsNotSpam } = useMessages();
  
  const getSpamAnalysis = () => {
    if (message.spamScore >= 0.8) {
      return {
        level: 'High Risk',
        color: 'red',
        icon: AlertOctagon,
        reasons: [
          'Suspicious sender domain',
          'Contains suspicious links',
          'Request for personal information',
          'Urgent action required language'
        ]
      };
    } else if (message.spamScore >= 0.4) {
      return {
        level: 'Medium Risk',
        color: 'yellow',
        icon: ShieldX,
        reasons: [
          'Unusual sender address',
          'Contains formatting issues',
          'Similar to known spam patterns'
        ]
      };
    } else {
      return {
        level: 'Low Risk',
        color: 'green',
        icon: Shield,
        reasons: [
          'Sender is in your contacts',
          'Similar to messages you regularly receive',
          'No suspicious patterns detected'
        ]
      };
    }
  };

  const analysis = getSpamAnalysis();
  const AnalysisIcon = analysis.icon;

  return (
    <div className="w-full md:w-3/5 bg-white dark:bg-gray-800 flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <button 
          onClick={onClose}
          className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => toggleStar(message.id)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Star 
              size={20} 
              className={message.starred ? "fill-yellow-400 text-yellow-400" : ""} 
            />
          </button>
          <button 
            onClick={() => markAsSpam(message.id)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            title="Mark as spam"
          >
            <AlertOctagon size={20} />
          </button>
          <button 
            onClick={() => markAsNotSpam(message.id)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            title="Mark as not spam"
          >
            <Shield size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <Archive size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <Trash2 size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">{message.subject}</h1>
          
          <div className="flex items-start mb-6">
            <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4 flex-shrink-0">
              <span className="font-medium">
                {message.sender.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{message.sender.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{message.sender.email}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDetailDate(message.date)}
                </div>
              </div>
              
              <div className="mt-4">
                <div 
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm
                            bg-${analysis.color}-100 text-${analysis.color}-800 dark:bg-${analysis.color}-900/30 dark:text-${analysis.color}-300 mb-4`}
                >
                  <AnalysisIcon size={16} className="mr-1" />
                  <span>Spam Risk: {analysis.level}</span>
                </div>
                
                <div className="prose dark:prose-invert max-w-none mt-4">
                  {message.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
            <h2 className="text-lg font-medium mb-4">Spam Analysis</h2>
            
            <div className="bg-gray-50 dark:bg-gray-750 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-3">
                <AnalysisIcon size={20} className={`text-${analysis.color}-500 mr-2`} />
                <h3 className="font-medium">
                  {message.spamScore < 0.4 
                    ? 'This message appears to be legitimate' 
                    : message.spamScore < 0.8
                      ? 'This message has some suspicious elements'
                      : 'This message is likely spam'}
                </h3>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Spam confidence</span>
                  <span className={`font-medium text-${analysis.color}-600 dark:text-${analysis.color}-400`}>
                    {Math.round(message.spamScore * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-${analysis.color}-500 rounded-full`} 
                    style={{ width: `${message.spamScore * 100}%` }}
                  />
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Detection reasons:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {analysis.reasons.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={() => markAsNotSpam(message.id)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center"
              >
                <Shield size={16} className="mr-2" />
                Not Spam
              </button>
              <button 
                onClick={() => markAsSpam(message.id)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center"
              >
                <AlertOctagon size={16} className="mr-2" />
                Mark as Spam
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;