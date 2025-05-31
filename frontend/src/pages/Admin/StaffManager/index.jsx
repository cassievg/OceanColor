import React from 'react';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const StaffManager = () => {
    return (
        <div className='staffmanager-container'>
            <div className='title'>
                <h2>Staff Activity</h2>
            </div>
            <div className='staff-accordion'>
                <div className="accordion" id="staff1">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="staffheading1">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            Staff 1
                        </button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="staffheading1" data-bs-parent="#staff1">
                        <div className="accordion-body">
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
                                Updated Tickets
                            </div>
                            <div className='ticket-table'>
                                <table className="table table-hover">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className='staff-accordion'>
                <div className="accordion" id="staff2">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="staffheading2">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                            Staff 2
                        </button>
                        </h2>
                        <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="staffheading2" data-bs-parent="#staff2">
                        <div className="accordion-body">
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
                                Updated Tickets
                            </div>
                            <div className='ticket-table'>
                                <table className="table">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffManager;