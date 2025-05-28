export interface Sender {
  name: string;
  email: string;
}

export interface Message {
  id: string;
  subject: string;
  preview: string;
  content: string;
  sender: Sender;
  date: string;
  read: boolean;
  starred: boolean;
  isSpam: boolean;
  isArchived: boolean;
  isDeleted: boolean;
  spamScore: number; // 0.0 to 1.0 (0% to 100% likelihood of being spam)
  labels?: string[];
}