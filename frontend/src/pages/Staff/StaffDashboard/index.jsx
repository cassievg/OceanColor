import React from 'react';
import './index.css';

const StaffDashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='title'>
                dashboard
            </div>
            <div className='total-ticket'>
                <hr3>total ticket</hr3>
            </div>
            <div className='dashboard-table'>
                <table class="table">
                    <tbody>
                        <tr>
                            <td rowSpan={2}>pie chart</td>
                        </tr>
                        <tr>
                            <td>approved<br></br>0</td>
                            <td>waiting<br></br>0</td>
                            <td>unapproved<br></br>0</td>
                        </tr>
                        <tr>
                            <td>pending<br></br>0</td>
                            <td>in progress<br></br>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='table-title'>
                Updated Tickets
            </div>
            <div className='ticket-table'>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Issue</th>
                        <th scope="col">Submit Date</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>help</td>
                        <td>12-21-12</td>
                        <td>pls</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StaffDashboard;