import React from 'react';
import './index.css';

const TicketList = () => {

    
    return (
        <div className='ticketlist-container'>
            <div className='title'>
                <h2>Tickets</h2>
            </div>
            <div className='search'>
                <input class="searchbar" type="text" placeholder="Search..." aria-label="searchbar"></input>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Sort By</option>
                    <option value="create-date">Recently created</option>
                    <option value="update-date">Recently updated</option>
                    <option value="title">Title</option>
                    <option value="status">Status</option>
                </select>
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

export default TicketList;