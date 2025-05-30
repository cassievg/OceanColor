import React, { useState } from 'react';
import './ticket.css';

const Ticket = () => {
  const [ticketDetails, setTicketDetails] = useState({
    branch: '',
    issue: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Ticket Submitted:', ticketDetails);
  };

  return (
    <div className="ticket-container">
      <h2>Customer Ticket Page</h2>
      <p>Please fill in the details below to submit your complaint or issue.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={ticketDetails.branch}
            onChange={handleChange}
            placeholder="Enter the branch name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="issue">Issue Type</label>
          <select
            id="issue"
            name="issue"
            value={ticketDetails.issue}
            onChange={handleChange}
            required
          >
            <option value="">Select an issue</option>
            <option value="Delivery">Delivery Issue</option>
            <option value="Product">Product Quality Issue</option>
            <option value="Payment">Payment Issue</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={ticketDetails.description}
            onChange={handleChange}
            placeholder="Describe your issue in detail"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default Ticket;
