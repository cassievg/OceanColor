import React from 'react';
import './index.css';

const ApproveTicket = () => {
    return (
        <div className='updateticket-container'>
            <div className='ticketinfo-container'>
                <div className='title text-center'>
                    <h1>
                        Update Ticket
                    </h1>
                </div>
                <div className='update-table'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID: </th>
                                <th scope="col">Date Created: </th>
                                <th scope="col">Status: </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3}>title</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>desc</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='reply-button'>
                <button type="button" className="btn btn-primary ticket-reply">Reply</button>
            </div>

            <div className='replies'>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>name</td>
                        </tr>
                        <tr>
                            <td>reply text</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='approval-buttons'>
                <button type="button" className="btn btn-primary ticket-disapprove">Disapprove</button>
                <button type="button" className="btn btn-primary ticket-approve">Approve</button>
            </div>
        </div>
    )
}

export default ApproveTicket;