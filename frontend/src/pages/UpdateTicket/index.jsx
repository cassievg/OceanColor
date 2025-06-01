import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Context/AuthContext';
import instance from '../../libs/request';
import './index.css';

const UpdateTicket = () => {
    const [tickets, setTickets] = useState([]);
    const [showBox, setShowBox] = useState(false);
    const [reply, setReply] = useState(null);
    const { isAuthenticated, profile } = useAuth();

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

    const updateStatus = (event) => {
        const { target } = event;
        
    }

    const lock = (event) => {

    }

    const submitReply = (event) => {

    }

    return (
        <div className='updateticket-container'>
            <div className='title'>
                <h2>
                    Update Ticket
                </h2>
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
                            <td colSpan={3}>Title Ticket</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>Ticket Description</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className='reply-button' onClick={showReplybox}>Reply</button>

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

            {
                isAuthenticated && profile.level > 1 &&
                <>
                    <div className='status-update'>
                        <select className="form-select status-option" aria-label="Default select example" id="status">
                            <option selected>Status</option>
                            <option value="datecreated">Pending</option>
                            <option value="lastupdated">In Progress</option>
                            <option value="title">Solved</option>
                        </select>
                        <button className='update-status' onChange={updateStatus}>Update status</button>
                        <button className='update-lock' onChange={lock}>Lock</button>
                    </div>
                    <div className='update-buttons'>
                        <button className='update-reply' onChange={submitReply}>Submit Changes</button>
                    </div>
                </>
            }
        </div>
    )
}

export default UpdateTicket;