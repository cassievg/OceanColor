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
                            <td colSpan={3}>title</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>desc</td>
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
                <select class="form-select" aria-label="Default select example">
                    <option selected value="status">Statuses</option>
                </select>
                <button>Update status</button>
                <button>Lock</button>
            </div>
            <div className='update-buttons'>
                <button className='btn btn-primary update-reply'>reply</button>
                <button className='btn btn-primary update-reply-lock'>reply & lock</button>
                <button className='btn btn-primary update-cancel'>cancel</button>
            </div>
        </div>
    )
}

export default UpdateTicket;