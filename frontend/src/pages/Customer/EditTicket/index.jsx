import React from 'react';
import './index.css';

const EditTicket = () => {
    return (
        <div className='updateticket-container'>
            <div className='title'>
                Update Ticket
            </div>
            <div className='update-table'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Status</th>
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
            <div className='reply-button'>
                <button type="button" className="btn btn-primary ticket-reply">Reply</button>
            </div>

            <div className='replies'>
                <table className="table">
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

export default EditTicket;