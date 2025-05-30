import React, { useState } from 'react';
import './ticketManagement.css';

const TicketManagement = () => {
  // Sample tickets data
  const [tickets, setTickets] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      subject: 'Issue with my order',
      message: 'I received the wrong item in my order. Please assist.',
      status: 'Pending',
      response: ''
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      subject: 'Payment failure',
      message: 'My payment didn’t go through, and I was charged.',
      status: 'Pending',
      response: ''
    },
    {
      id: 3,
      customerName: 'Emma Brown',
      subject: 'Product quality concern',
      message: 'The paint I received was not as expected. It was too thick.',
      status: 'Resolved',
      response: 'We’ve processed a replacement for your order.'
    }
  ]);

  const handleChangeResponse = (id, value) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id ? { ...ticket, response: value } : ticket
    ));
  };

  const handleResolveTicket = (id) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id ? { ...ticket, status: 'Resolved' } : ticket
    ));
  };

  return (
    <div className="ticket-mgmt-container">
      <h2>Staff Ticket Management</h2>
      <p>Reply to customer tickets here.</p>

      <div className="ticket-list">
        <h3>Tickets</h3>
        {tickets.map((ticket) => (
          <div key={ticket.id} className="ticket-card">
            <h4>Ticket #{ticket.id} - {ticket.subject}</h4>
            <p><strong>Customer:</strong> {ticket.customerName}</p>
            <p><strong>Message:</strong> {ticket.message}</p>
            <p><strong>Status:</strong> {ticket.status}</p>

            <div className="response-section">
              <textarea
                value={ticket.response}
                onChange={(e) => handleChangeResponse(ticket.id, e.target.value)}
                placeholder="Write your response here..."
                rows="4"
                className="response-textarea"
              />
              <button
                onClick={() => handleResolveTicket(ticket.id)}
                className="resolve-btn"
              >
                Mark as Resolved
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketManagement;
