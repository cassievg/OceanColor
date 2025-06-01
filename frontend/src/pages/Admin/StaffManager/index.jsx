import React, { useState, useEffect, useMemo } from 'react';
import './index.css';
import instance from '../../../libs/request';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import user from '../../../../../backend/models/user';

const StaffManager = () => {
    const [users, setUsers] = useState([]);
    const [tickets, setTickets] = useState([]);

    const filteredUsers = useMemo(() => {
        return users.filter((user) => user.level === 2);
    }, [users]);

    const countStatus = (status, staff) => {
        let result = [...tickets];

        if (status) {
            return result.filter((ticket) => (ticket.assign === staff.id && ticket.status === status)).length;
        }
        else {
            return result.filter((ticket) => (ticket.assign === staff.id)).length;
        }
    }

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
                    password: item.password,
                    level: item.level,
                    closed: item.closed,
                    progress: item.progress,
                    solved: item.solved,
                }
            });
            
            setUsers(mappedUser);
        }

        const initTickets = async () => {
            const ticketRes = await instance.get('/ticket/');
            const ticketData = [...ticketRes.data];
            const mappedTicket = ticketData.map((item) => {
                return {
                    id: item._id,
                    creator: item.creator,
                    title: item.title,
                    description: item.description,
                    status: item.status,
                    datecreated: item.datecreated,
                    assign: item.assign,
                }
            });
            
            setTickets(mappedTicket);
        }

        initUsers();
        initTickets();
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
                                            <thead>
                                                <tr className='total-assigned'>Total tickets assigned: {countStatus(null, user)}</tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='status-pending'>Pending: {countStatus("pending", user)}</td>
                                                    <td className='status-progress'>In progress: {countStatus("progress", user)}</td>
                                                    <td className='status-solved'>Solved: {countStatus("solved", user)}</td>
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