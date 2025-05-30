import React from 'react';
import './index.css';

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
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="staffheading1" data-bs-parent="#staff1">
                        <div className="accordion-body">
                            <div className='dashboard-table'>
                                <table className="table">
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
                                <table className="table">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffManager;