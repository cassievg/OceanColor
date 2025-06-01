import React, { useState, useEffect } from 'react';
import instance from '../../../libs/request';
import './index.css';

const CreateTicket = () => {
    const [tickets, setTickets] = useState([]);
    const [ticketDetails, setTicketDetails] = useState({});
    const [indicator, setIndicator] = useState(false);

    const showIndicator = () => {
        setIndicator((prevIndicator) => !prevIndicator);
    }

    const falseIndicator = (indicator) => {
        setIndicator((indicator) => false);
    }

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

        showIndicator();
        clearInput();
    }

    const clearInput = () => {
        const inputTitle = document.getElementById('title');
        const inputDesc = document.getElementById('description');
        inputTitle.value = ''
        inputDesc.value = ''
    }

    return (
        <div className='createticket-container'>
            <div className='title'>
                <h2>Create Ticket</h2>
            </div>
            <div className='form'>
                <div class="mb-3 title">
                    <label for="title" class="form-label">Issue Title</label>
                    <input class="form-control" type="text" aria-label="title" id="title" required placeholder='What is the issue?' onChange={updateDetails} onClick={falseIndicator}></input>
                </div>
                <div class="mb-3 description">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" rows="3" id="description" required placeholder='Describe the situation and how can we help' onChange={updateDetails} onClick={falseIndicator}></textarea>
                </div>
            </div>
            <div className='buttons'>
                <button className='create-ticket' onClick={createTicket}>Submit</button>
            </div>
            {
                indicator &&
                <div className='success-indicator'>
                    Ticket successfully created!
                </div>

            }
            
        </div>
    )
}

export default CreateTicket;