import React from 'react';
import './index.css';

const StaffDashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='title text-center'>
                <h1>
                    Dashboard
                </h1>
            </div>
            <div className='total-ticket'>
                <hr3><b>Total ticket </b></hr3>
                <hr3 className='ticket-count'>0</hr3>
            </div>

            <div className='dashboard-table'>
                <table className="table">
                    <tbody>
                        <tr>
                            <td rowSpan={3} className=''>pie chart</td>
                        </tr>
                        <tr className=''>
                            <td colSpan={2} className='text-center status-approved'><b>Approved</b><br></br>0</td>
                            <td colSpan={2} className='text-center status-waiting'><b>Waiting</b><br></br>0</td>
                            <td colSpan={2} className='text-center status-unapproved'><b>Unapproved</b><br></br>0</td>
                        </tr>
                        <tr className=''>
                            <td colSpan={3} className='text-center status-pending'><b>Pending</b><br></br>0</td>
                            <td colSpan={3} className='text-center status-progress'><b>In progress</b><br></br>0</td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
            <div className='table-title'>
                <h3>
                    Updated Tickets
                </h3>
            </div>
            <div className='ticket-table'>
                <table className="table">
                    <thead>
                        <tr className=''>
                        <th scope="col" className='text-center'>ID</th>
                        <th scope="col" className=''>Issue</th>
                        <th scope="col" className='text-center '>Submit Date</th>
                        <th scope="col" className='text-center'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row" className='text-center '>1</th>
                        <td className=''>help</td>
                        <td className='text-center '>12-21-12</td>
                        <td className='text-center '>pls</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StaffDashboard;