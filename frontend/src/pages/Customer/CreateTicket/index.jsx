import React, { useState, useEffect } from 'react';
import instance from '../../../libs/request';
import './index.css';

const CreateTicket = () => {
    const [tickets, setTickets] = useState([]);
    const [ticketDetails, setTicketDetails] = useState({})

    const updateDetails = (event) => {
        const {
            target
        } = event;

        setTicketDetails((prevTicketDetails) => ({
            ...prevTicketDetails,
            [target.id]: target.value,
        }));
    }

    const createTicket = async () => {
        await instance.post('/ticket/',
            {
                title: ticketDetails.title,
                description: ticketDetails.description
            }
        )
    }

    return (
        <div className='createticket-container'>
            <div className='title'>
                <h2>Create Ticket</h2>
            </div>
            <div className='form'>
                <div class="mb-3 title">
                    <label for="title" class="form-label">Issue Title</label>
                    <input class="form-control" type="text" aria-label="title" id="title" onChange={updateDetails}></input>
                </div>
                <div class="mb-3 description">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" rows="3" id="description" onChange={updateDetails}></textarea>
                </div>
            </div>
            <div className='buttons'>
                <button onClick={createTicket}>submit</button>
            </div>
        </div>
    )
}

export default CreateTicket;