import { Message } from '../types';

// Helper to generate random dates in the past
const randomPastDate = (daysBack: number) => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysBack));
  date.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
  return date.toISOString();
};

export const mockMessages: Message[] = [
  {
    id: '1',
    subject: 'Your Account Security Update',
    preview: 'We have detected unusual activity on your account. Please verify your identity by clicking the link below...',
    content: `Dear Valued Customer,

We have detected unusual activity on your account. Please verify your identity by clicking the link below to ensure your account remains secure.

**URGENT: Action Required Within 24 Hours**

If you fail to verify your account, it may be temporarily suspended for security reasons.

www.secureverification-account.com/verify?id=12345

Thank you for your prompt attention to this matter.

Security Team`,
    sender: {
      name: 'Account Security',
      email: 'security@banking-secure-alerts.com'
    },
    date: randomPastDate(1),
    read: false,
    starred: false,
    isSpam: true,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.95,
    labels: ['security', 'alert']
  },
  {
    id: '2',
    subject: 'Team Meeting - Project Review',
    preview: 'Hi team, Just a reminder about our project review meeting tomorrow at 2pm. Please prepare your status updates...',
    content: `Hi team,

Just a reminder about our project review meeting tomorrow at 2pm in Conference Room A. Please prepare your status updates and be ready to discuss any blockers or concerns.

Agenda:
1. Sprint review
2. Upcoming deliverables
3. Team announcements
4. Open discussion

Let me know if you have any questions or if you need to join remotely.

Best regards,
Sarah Chen
Project Manager`,
    sender: {
      name: 'Sarah Chen',
      email: 'sarah.chen@company.com'
    },
    date: randomPastDate(2),
    read: true,
    starred: true,
    isSpam: false,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.05,
    labels: ['work', 'meeting']
  },
  {
    id: '3',
    subject: 'URGENT: You Won $5,000,000 in International Lottery',
    preview: 'Congratulations! Your email has been selected as the winner of the International Lottery. To claim your prize...',
    content: `CONGRATULATIONS!!!

Your email has been selected as the winner of the International Lottery. You have won $5,000,000 USD.

To claim your prize, please respond with the following information:
- Full Name
- Address
- Phone Number
- Bank Account Details
- Copy of ID

A processing fee of $499 is required to release your funds. Please send this via Western Union to our claims agent.

Reply immediately to claim your prize!

Best Regards,
Dr. James Williams
International Lottery Commission`,
    sender: {
      name: 'International Lottery',
      email: 'claims@intl-lottery-wins.org'
    },
    date: randomPastDate(3),
    read: false,
    starred: false,
    isSpam: true,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.98,
    labels: ['lottery']
  },
  {
    id: '4',
    subject: 'Invoice #INV-2023-10-15',
    preview: 'Please find attached the invoice for services rendered in October 2023. Payment is due within 30 days...',
    content: `Dear Client,

Please find attached the invoice #INV-2023-10-15 for services rendered in October 2023.

Invoice Details:
- Amount: $1,250.00
- Due Date: November 15, 2023
- Payment Methods: Bank Transfer, Credit Card

Please let me know if you have any questions regarding this invoice.

Thank you for your business!

Best regards,
Financial Department
Tech Solutions Inc.`,
    sender: {
      name: 'Tech Solutions',
      email: 'billing@techsolutions.com'
    },
    date: randomPastDate(5),
    read: true,
    starred: false,
    isSpam: false,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.15,
    labels: ['invoice', 'finance']
  },
  {
    id: '5',
    subject: 'Your Netflix Subscription Expired',
    preview: 'Your Netflix subscription has expired. Click here to renew your subscription and continue enjoying unlimited streaming...',
    content: `Dear Customer,

Your Netflix subscription has expired. To continue enjoying unlimited streaming of movies and TV shows, please renew your subscription by clicking the link below:

www.netflixx-account-renewal.com/renew?id=user12345

If you do not renew within 24 hours, your account will be permanently deleted.

Netflix Customer Service Team`,
    sender: {
      name: 'Netflix Service',
      email: 'customer-support@netflixx-renew.com'
    },
    date: randomPastDate(2),
    read: false,
    starred: false,
    isSpam: true,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.92,
    labels: ['subscription']
  },
  {
    id: '6',
    subject: 'Family Dinner This Weekend',
    preview: 'Hi everyone, Mom and Dad are coming to town this weekend and we thought it would be nice to have a family dinner on Saturday...',
    content: `Hi everyone,

Mom and Dad are coming to town this weekend, and we thought it would be nice to have a family dinner on Saturday at 6pm at our place.

I'm planning to make lasagna and salad, but feel free to bring a side dish or dessert if you'd like. Let me know if you can make it!

Looking forward to seeing everyone!

Love,
Emily`,
    sender: {
      name: 'Emily Johnson',
      email: 'emily.johnson@gmail.com'
    },
    date: randomPastDate(4),
    read: true,
    starred: true,
    isSpam: false,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.02,
    labels: ['family', 'personal']
  },
  {
    id: '7',
    subject: 'Purchase Confirmation - Order #12345',
    preview: 'Thank you for your purchase! Your order #12345 has been confirmed and is being processed...',
    content: `Thank you for your purchase!

Your order #12345 has been confirmed and is being processed.

Order Details:
- Date: October 15, 2023
- Total: $78.95
- Shipping: Standard (3-5 business days)
- Shipping Address: 123 Main St, Anytown, CA 12345

You will receive another email with tracking information once your order ships.

Thank you for shopping with us!

Customer Service Team
Online Store`,
    sender: {
      name: 'Online Store',
      email: 'orders@online-store.com'
    },
    date: randomPastDate(7),
    read: true,
    starred: false,
    isSpam: false,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.08,
    labels: ['shopping', 'receipt']
  },
  {
    id: '8',
    subject: 'Exclusive Discount: 80% Off Limited Time Offer',
    preview: 'Don\'t miss this EXCLUSIVE offer! 80% OFF all products for the next 24 hours ONLY. Click now to shop...',
    content: `DON'T MISS THIS EXCLUSIVE OFFER!!!

80% OFF ALL PRODUCTS FOR THE NEXT 24 HOURS ONLY!!!

OUR BIGGEST SALE OF THE YEAR!

Click here to shop now: www.amazingsuperdiscounts.com/offer?ref=80off

Limited stock available! First come, first served!

BUY NOW BEFORE IT'S TOO LATE!`,
    sender: {
      name: 'Amazing Discounts',
      email: 'offers@amazingsuperdiscounts.com'
    },
    date: randomPastDate(1),
    read: false,
    starred: false,
    isSpam: true,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.85,
    labels: ['discount', 'offer']
  },
  {
    id: '9',
    subject: 'Your Flight Confirmation - NYC to LAX',
    preview: 'Thank you for booking with us. Your flight from NYC to LAX on November 15 has been confirmed...',
    content: `Dear Passenger,

Thank you for booking with us. Your flight has been confirmed.

Flight Details:
- Flight Number: AA1234
- Date: November 15, 2023
- Departure: JFK International Airport, 10:30 AM
- Arrival: Los Angeles International Airport, 1:45 PM
- Passenger: John Doe
- Confirmation Code: ABCDEF

Please arrive at the airport at least 2 hours before your scheduled departure.

Safe travels!

Airline Booking Team`,
    sender: {
      name: 'Airline Bookings',
      email: 'bookings@airline.com'
    },
    date: randomPastDate(10),
    read: true,
    starred: true,
    isSpam: false,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.05,
    labels: ['travel', 'booking']
  },
  {
    id: '10',
    subject: 'Action Required: Suspicious Activity Detected',
    preview: 'We have detected suspicious login attempts to your account. Please verify your account immediately...',
    content: `URGENT: Suspicious Activity Detected

We have detected suspicious login attempts to your account from an unrecognized device in [Foreign Country].

To secure your account, please verify your identity immediately by clicking the link below:

www.account-verification-secure.com/verify?user=12345

If you do not verify your account within 24 hours, it will be temporarily locked for security reasons.

Security Team`,
    sender: {
      name: 'Account Protection',
      email: 'security-alerts@account-protection-team.com'
    },
    date: randomPastDate(1),
    read: false,
    starred: false,
    isSpam: true,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.94,
    labels: ['security', 'alert']
  },
  {
    id: '11',
    subject: 'Software Update Available',
    preview: 'A new software update is available for your device. This update includes important security patches and new features...',
    content: `Dear User,

A new software update (version 14.2) is available for your device. This update includes important security patches and new features that enhance your user experience.

Key updates:
- Security vulnerability fixes
- Performance improvements
- New messaging features
- Battery optimization

To update your device, go to Settings > General > Software Update.

Thank you for using our products!

Software Update Team`,
    sender: {
      name: 'Software Updates',
      email: 'updates@software-company.com'
    },
    date: randomPastDate(3),
    read: false,
    starred: false,
    isSpam: false,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.10,
    labels: ['update', 'software']
  },
  {
    id: '12',
    subject: 'Weekly Team Updates - Engineering',
    preview: 'Here\'s a summary of this week\'s progress and upcoming milestones for the engineering team...',
    content: `Hi Engineering Team,

Here's a summary of this week's progress and upcoming milestones:

Accomplishments:
- Backend API performance improvements - 15% faster response times
- Fixed 12 critical bugs in the production environment
- Completed user authentication module refactoring

Upcoming:
- Database migration scheduled for next Tuesday
- New feature development kickoff on Thursday
- Code review session on Friday at 2pm

Please make sure to update your tasks in the project management system.

Thanks everyone for your hard work!

Alex Wong
Engineering Manager`,
    sender: {
      name: 'Alex Wong',
      email: 'alex.wong@company.com'
    },
    date: randomPastDate(6),
    read: true,
    starred: false,
    isSpam: false,
    isArchived: false,
    isDeleted: false,
    spamScore: 0.01,
    labels: ['work', 'engineering']
  }
];