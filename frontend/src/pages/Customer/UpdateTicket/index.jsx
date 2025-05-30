import React from 'react';
import './index.css';

const UpdateTicket = () => {
    return (
        <div className='updateticket-container'>
            <div className='title'>
                Update Ticket
            </div>
            <div className='update-table'>
                <table class="table">
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
            <div className='status-update'>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Sort By</option>
                    <option value="status">status</option>
                </select>
                <button>Update status</button>
                <button>Lock</button>
            </div>
            <div className='reply-button'>
                <button>Reply</button>
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
        </div>
    )
}

export default UpdateTicket;