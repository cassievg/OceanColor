import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 60000,
});

async function getAllTickets() {
    return await instance.get('/ticket/');
}

async function getTicket(id) {
    return await instance.get('/ticket/' + id);
}

const TicketList = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const initTickets = async () => {
            const ticketRes = await getAllTickets();
            const ticketData = [...ticketRes.data];
            const mappedTicket = ticketData.map((item) => {
                return {
                    id: item._id,
                    title: item.title,
                    description: item.description,
                    status: item.status,
                    datecreated: item.datecreated,
                    lastupdated: item.lastupdated,
                    locked: item.locked,
                }
            });
            
            setTickets(mappedTicket);
        }

        initTickets();
    }, []);

    return (
        <div className='ticketlist-container'>
            <div className='title'>
                <h2>Tickets</h2>
            </div>
            <div className='search'>
                <input className="searchbar" type="text" placeholder="Search..." aria-label="searchbar"></input>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Sort By</option>
                    <option value="create-date">Recently created</option>
                    <option value="update-date">Recently updated</option>
                    <option value="title">Title</option>
                    <option value="status">Status</option>
                </select>
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
                        {
                            tickets.map((ticket) => (
                                <tr key={ticket.id} onDoubleClick={() => { navigate('/tickets/edit') }}>
                                    <th scope="row">
                                        {ticket.id}
                                    </th>
                                    <td>
                                        {ticket.title}<br></br>
                                        {ticket.description}
                                    </td>
                                    <td>
                                        {ticket.datecreated}
                                    </td>
                                    <td>
                                        {ticket.status}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TicketList;