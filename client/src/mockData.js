export const mockClients = [
  { _id: '1', name: 'John Doe', status: 'Active' },
  { _id: '2', name: 'Jane Smith', status: 'New' },
  { _id: '3', name: 'Peter Jones', status: 'Inactive' },
  { _id: '4', name: 'Mary Williams', status: 'Active' },
  { _id: '5', name: 'David Brown', status: 'New' },
];

export const mockCalendarEvents = [
  { id: '1', title: 'Meeting with John Doe', date: '2025-08-15T10:00:00' },
  { id: '2', title: 'Follow-up with Jane Smith', date: '2025-08-16T14:30:00' },
];

export const mockForms = [
    { _id: 'form1', name: 'Client Intake Form', description: 'Standard form for new clients.' },
    { _id: 'form2', name: 'Service Feedback Form', description: 'Collect feedback on our services.' },
];

export const mockFaqs = [
  {
    _id: 'faq1',
    question: 'What is the purpose of this prototype?',
    answer: 'This prototype is designed to demonstrate the user interface and user experience of the CRM application to a client. It is not connected to a backend and uses mock data.'
  },
  {
    _id: 'faq2',
    question: 'Is my data secure?',
    answer: 'As this is a prototype, no real data is being stored or transmitted. All data you see is for demonstration purposes only.'
  },
  {
    _id: 'faq3',
    question: 'How do I navigate the prototype?',
    answer: 'You can use the navigation bar at the top to visit different pages. Buttons and links are clickable to simulate the application\'s flow.'
  },
];
