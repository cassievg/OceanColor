import React from 'react';
import './index.css';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='title text-center'>
                <h1>
                    Dashboard
                </h1>
                
            </div>
            <div className='status-tables'>
                <table className="table table-bordered border-black">
                    <tbody>
                        <tr className='table-secondary'>
                            <td>icon</td>
                            <td>pending</td>
                            <td className='text-center'>0</td>
                        </tr>
                        <tr className='table-warning'>
                            <td>icon</td>
                            <td>in progress</td>
                            <td className='text-center'>0</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-bordered border-black">
                    <tbody>
                        <tr className='table-danger'>
                            <td>icon</td>
                            <td>waiting</td>
                            <td className='text-center'>0</td>
                        </tr>
                        <tr className='table-success'>
                            <td>icon</td>
                            <td>approved</td>
                            <td className='text-center'>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='ticket-table'>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col" className='text-center' colSpan={4}>Recent Tickets</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                        <th scope="col" className='text-center'>ID</th>
                        <th scope="col" className='text-center'>Issue</th>
                        <th scope="col" className='text-center'>Submit Date</th>
                        <th scope="col" className='text-center'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row" className='text-center'>1</th>
                        <td>help</td>
                        <td className='text-center'>12-21-12</td>
                        <td className='text-center'>pls</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;