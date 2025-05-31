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
            <div className='dashboard-table'>
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan={4} className='total-ticket border-2 border-black'>
                                <hr3>Total ticket: </hr3>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={3} className='border-2 border-black'>pie chart</td>
                        </tr>
                        <tr className='border-2 border-black'>
                            <td rowSpan={2} className='text-center border-2 border-black'>approved<br></br>0</td>
                            <td className='text-center border-2 border-black'>waiting<br></br>0</td>
                            <td className='text-center '>unapproved<br></br>0</td>
                        </tr>
                        <tr className='border-2 border-black'>
                            <td className='text-center border-2 border-black'>pending<br></br>0</td>
                            <td className='text-center'>in progress<br></br>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='table-title'>
                <h2>
                    Updated Tickets
                </h2>
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