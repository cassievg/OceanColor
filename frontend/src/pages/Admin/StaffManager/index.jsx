import React, { useState, useEffect, useMemo } from 'react';
import './index.css';
import instance from '../../../libs/request';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import user from '../../../../../backend/models/user';

const StaffManager = () => {
    const [users, setUsers] = useState([]);

    const filteredUsers = useMemo(() => {
        return users.filter((user) => user.level === 2);
    }, [users]);

    useEffect(() => {
        const initUsers = async () => {
            const userRes = await instance.get('/user/');
            const userData = [...userRes.data];
            const mappedUser = userData.map((item) => {
                return {
                    id: item._id,
                    username: item.username,
                    email: item.email,
                    phone: item.phone,
                    pfp: item.pfp,
                    password: item.password,
                    level: item.level,
                    approved: item.approved,
                    disapproved: item.disapproved,
                    waiting: item.waiting,
                    inprogress: item.progress
                }
            });
            
            setUsers(mappedUser);
        }

        initUsers();
    }, []);

    return (
        <div className='staffmanager-container'>
            <div className='title'>
                <h2>Staff Activity</h2>
            </div>
            {
                filteredUsers.map((user) => (
                    <div className='staff-accordion'>
                        <div className="accordion" id="staff1">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="staffheading1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${user.id}`} aria-expanded="true" aria-controls="collapse1">
                                    {user.username}
                                </button>
                                </h2>
                                <div id={user.id} className="accordion-collapse collapse show" aria-labelledby="staffheading1" data-bs-parent="#staff1">
                                <div className="accordion-body">
                                    <div className='dashboard-table'>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td rowSpan={2}>pie chart</td>
                                                </tr>
                                                <tr>
                                                    <td>approved<br></br>{user.approved}</td>
                                                    <td>disapproved<br></br>{user.disapproved}</td>
                                                </tr>
                                                <tr>
                                                    <td>waiting<br></br>{user.waiting}</td>
                                                    <td>in progress<br></br>{user.inprogress}</td>
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
                ))
            }
        </div>
    )
}

export default StaffManager;