import React, { useState } from 'react';
import './staffManagement.css';

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'Manager',
      email: 'john@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Sales Assistant',
      email: 'jane@example.com',
    },
    {
      id: 3,
      name: 'Emma Brown',
      role: 'Marketing Lead',
      email: 'emma@example.com',
    },
  ]);

  const [newStaff, setNewStaff] = useState({
    name: '',
    role: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStaff((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddStaff = (e) => {
    e.preventDefault();
    if (newStaff.name && newStaff.role && newStaff.email) {
      setStaffList([
        ...staffList,
        {
          id: staffList.length + 1,
          name: newStaff.name,
          role: newStaff.role,
          email: newStaff.email,
        },
      ]);
      setNewStaff({ name: '', role: '', email: '' });
    }
  };

  const handleRemoveStaff = (id) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  return (
    <div className="staff-mgmt-container">
      <h2>Admin - Staff Management</h2>
      <p>Manage staff members here.</p>

      {/* Staff List */}
      <div className="staff-list">
        <h3>Staff Members</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.name}</td>
                <td>{staff.role}</td>
                <td>{staff.email}</td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveStaff(staff.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Staff Form */}
      <div className="add-staff-form">
        <h3>Add New Staff</h3>
        <form onSubmit={handleAddStaff}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newStaff.name}
              onChange={handleChange}
              placeholder="Enter staff name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={newStaff.role}
              onChange={handleChange}
              placeholder="Enter staff role"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newStaff.email}
              onChange={handleChange}
              placeholder="Enter staff email"
              required
            />
          </div>

          <button type="submit" className="add-btn">
            Add Staff
          </button>
        </form>
      </div>
    </div>
  );
};

export default StaffManagement;
