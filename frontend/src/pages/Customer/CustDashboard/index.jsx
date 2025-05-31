import React from 'react';
import './index.css';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='title text-center'>
                <h2>
                    Dashboard
                </h2>
                
            </div>
            <div className='status-tables'>
                <table className="table table-bordered">
                    <tbody>
                        <tr className='table-secondary border'>
                            <td className='border-2 border-black'>icon</td>
                            <td className='border-2 border-black'>pending</td>
                            <td className='text-center border-2 border-black'>0</td>
                        </tr>
                        <tr className='table-warning border border-2 border-black'>
                            <td className='border-2 border-black'>icon</td>
                            <td className='border-2 border-black'>in progress</td>
                            <td className='text-center border-2 border-black'>0</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-bordered">
                    <tbody>
                        <tr className='table-danger border border-2 border-black'>
                            <td className='border-2 border-black'>icon</td>
                            <td className='border-2 border-black'>waiting</td>
                            <td className='text-center border-2 border-black'>0</td>
                        </tr>
                        <tr className='table-success border border-2 border-black'>
                            <td className='border-2 border-black'>icon</td>
                            <td className='border-2 border-black'>approved</td>
                            <td className='text-center border-2 border-black'>0</td>
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
                        <th scope="col">Issue</th>
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