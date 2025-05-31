import React from 'react';
import './index.css';

const UpdateTicket = () => {
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
            <div className='reply-text'>
                <div class="mb-3">
                    <label for="replybox" class="form-label">Reply</label>
                    <textarea class="form-control" id="replybox" rows="3"></textarea>
                </div>
            </div>
            <div className='status-update'>
                <select className="form-select status-option" aria-label="Default select example">
                    <option selected value="status" >Statuses</option>
                </select>
                <button className='update-status'>Update status</button>
                <button className='update-lock'>Lock</button>
            </div>
            <div className='mb-3 update-buttons'>
                <button className='update-reply'>Reply</button>
                <button className='update-reply-lock'>Reply & Lock</button>
                <button className='update-cancel'>Cancel</button>
            </div>
        </div>
    )
}

export default UpdateTicket;