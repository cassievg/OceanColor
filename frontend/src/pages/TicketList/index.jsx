import React, { useState, useEffect, useMemo } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import instance from '../../libs/request';
import { useAuth } from '../../Context/AuthContext';

const TicketList = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);
    const [selectedSort, setSelectedSort] = useState(null);
    const [search, setSearch] = useState(null);
    const { isAuthenticated, profile } = useAuth();

    const searchTickets = (event) => {
        const {
            target
        } = event;

        setSearch(target.value);
    }

    const filteredTickets = useMemo(() => {
        let result = [...tickets];

        if (selectedSort !== null) {
            result.sort((a, b) => {
                if (a[selectedSort] > b[selectedSort]) {
                    return 1;
                }
                else if (a[selectedSort] < b[selectedSort]) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
        
        if (search !== null) {
            return result.filter((ticket) => (ticket.title.includes(search)));
        }
        else {
            return result;
        }

    }, [tickets, selectedSort, search]);

    const selectSort = (event) => {
        const {
            target
        } = event;

        setSelectedSort(target.value);
    };

    const showStatus = (event) => {
        if (profile.level < 2) {
            
        }
        else {

        }
    }

    useEffect(() => {
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

            <div className='status-table'>
                <table className="table">
                    <tbody>
                        <tr>
                            <td className='status-pending'>Pending {showStatus}</td>
                            <td className='status-progress'>In progress {showStatus}</td>
                            <td className='status-closed'>Closed {showStatus}</td>
                            <td className='status-solved'>Solved {showStatus}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='search'>
                <input className="searchbar col-8" type="text" placeholder="Search..." aria-label="searchbar" onChange={searchTickets}></input>
                <select className="form-select" aria-label="Default select example" onChange={selectSort}>
                    <option selected>Sort By</option>
                    <option value="datecreated">Recently created</option>
                    <option value="lastupdated">Recently updated</option>
                    <option value="title">Title</option>
                    <option value="status">Status</option>
                </select>
            </div>
            <div className='ticket-table'>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col" className='center-text'>ID</th>
                        <th scope="col" className='center-text'>Issue</th>
                        <th scope="col" className='center-text'>Submit Date</th>
                        <th scope="col" className='center-text'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredTickets.map((ticket) => (
                                <tr key={ticket.id} onDoubleClick={() => { navigate('/tickets/edit') }}>
                                    <th scope="row">
                                        {ticket.id}
                                    </th>
                                    <td>
                                        {ticket.title}
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