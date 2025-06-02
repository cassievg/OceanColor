import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../Context/AuthContext';
import instance from '../../libs/request';
import './index.css';

const UpdateTicket = () => {
    const { state } = useLocation();
    const { id } = state;
    const navigate = useNavigate();
    

    const [ticket, setTicket] = useState({});
    const [showBox, setShowBox] = useState(false);
    const [reply, setReply] = useState(null);
    const [status, setStatus] = useState({status: "Pending"});
    const [indicator, setIndicator] = useState(false);
    const { isAuthenticated, profile } = useAuth();

    const showIndicator = () => {
        setIndicator((prevIndicator) => !prevIndicator);
    }

    const falseIndicator = (indicator) => {
        setIndicator((indicator) => false);
    }

    const clearInput = () => {
        const inputMessage = document.getElementById('message');
        inputMessage.value = ''
    }

    const initTicket = useCallback(async () => {
        const ticketRes = await instance.get('/ticket/' + id);
        const ticketData = ticketRes.data;
        const mappedTicket = {
            id: ticketData._id,
            creator: ticketData.creator,
            title: ticketData.title,
            description: ticketData.description,
            status: ticketData.status,
            responses: ticketData.responses,
            datecreated: ticketData.datecreated,
            locked: ticketData.locked
        }
        
        setTicket(mappedTicket);
    }, [id]);

    const showReplybox = () => {
        setShowBox((prevShowBox) => !prevShowBox);
    }

    const updateStatus = (event) => {
        const {target} = event;

        setStatus((prevStatus) => ({
            ...prevStatus,
            [target.id]: target.value,
        }));
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

    const submitChanges = async () => {
        console.log(id, status, reply)
        await instance.put('/ticket/' + id, {
            status: status.status,
            response: reply,
        })
        await initTicket();
        clearInput();
        showIndicator();
    }
    
    useEffect(() => {
        initTicket();
    }, [initTicket]);

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
                            <th scope="col">ID: {ticket.id}</th>
                            <th scope="col">Date Created: {ticket.datecreated}</th>
                            <th scope="col">Status: {ticket.status}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={3}>{ticket.title}</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>{ticket.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='reply-back-button'>
                <button className='reply-button' onClick={showReplybox}>Open</button>
                <button className='update-back' onClick={ () => navigate('/tickets') }>Back</button>
            </div>
            {
                showBox &&
                <>
                    <div class="mb-3 message">
                        <label for="message" class="form-label">Message:</label>
                        <textarea class="form-control" rows="3" id="message" onChange={updateReply} onClick={falseIndicator}></textarea>
                    </div>
                    {
                    !(isAuthenticated && profile.level > 1) &&
                        <>
                        <button className='update-reply' onClick={submitChanges}>Reply</button>
                        {
                            indicator &&
                            <div className='success-indicator'>
                                Succesfully replied!
                            </div>
                        }
                        </> 
                    }
                </>
            }


            {
                isAuthenticated && profile.level > 1 &&
                <>
                    <div className='status-update'>
                        <select className="form-select status-option pointer" aria-label="Default select example" id="status" onChange={updateStatus}>
                            <option value="Pending">Pending</option>
                            <option value="Progress">In Progress</option>
                            <option value="Solved">Solved</option>
                        </select>
                    </div>
                    <div className='update-buttons'>
                        <button className='update-reply' onClick={submitChanges}>Submit Changes</button>
                    </div>
                        {
                            indicator &&
                            <div className='success-indicator'>
                                Changes succesfully applied!
                            </div>
                        }
                </>
            }

            {
                ticket.responses?.map((response) => (
                    <table class="table" key={response.datecreated}>
                        <thead>
                            <tr>
                                <th scope="col">From: {response.creator.username}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={3}>{response.message}</td>
                            </tr>
                        </tbody>
                    </table>
                ))
            }

        </div>
    )
}

export default UpdateTicket;