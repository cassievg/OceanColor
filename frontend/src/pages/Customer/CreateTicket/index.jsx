import React, { useState, useEffect } from 'react';
import './index.css';

const CreateTicket = () => {
    return (
        <div className='createticket-container'>
            <div className='title'>
                <h2>Create Ticket</h2>
            </div>
            <div className='form'>
                <div class="mb-3 name">
                    <label for="name" class="form-label">Name</label>
                    <input class="form-control" type="text" ria-label="name"></input>
                </div>
                <div class="mb-3 title">
                    <label for="title" class="form-label">Issue Title</label>
                    <input class="form-control" type="text" aria-label="title"></input>
                </div>
                <div class="mb-3 desc">
                    <label for="desc" class="form-label">Description</label>
                    <textarea class="form-control" id="desc" rows="3"></textarea>
                </div>
            </div>
        </div>
    )
}

export default CreateTicket;