import React, { useState, useEffect } from 'react';
import instance from '../../../libs/request';
import './index.css';

const EditTicket = () => {
    const [tickets, setTickets] = useState([]);
    const [showBox, setShowBox] = useState(false);
    const [reply, setReply] = useState(null);

    const showReplybox = () => {
        setShowBox((prevShowBox) => !prevShowBox);
    }

    const updateReply = (event) => {
        const {
            target
        } = event;

        setReply((prevReply) => ({
            ...prevReply,
            [target.id]: target.value,
        }));
    }

    return (
        <div className='updateticket-container'>
            <div className='title text-center'>
                <h1>
                    Update Ticket
                </h1>
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
                            <td colSpan={3}>Title</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>Description</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='reply-button'>
                <button type="button" className="btn btn-primary ticket-reply" onClick={showReplybox}>Reply</button>
            </div>

            {
                showBox &&
                <>
                    <div class="mb-3 description">
                        <label for="description" class="form-label">Reply</label>
                        <textarea class="form-control" rows="3" id="description" onChange={updateReply}></textarea>
                    </div>
                    <button>Submit Reply</button>
                </>
            }

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
                <button type="button" className="btn btn-primary ticket-disapprove">Close</button>
            </div>
        </div>
    )
}

export default EditTicket;