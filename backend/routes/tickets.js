import express from 'express';
import mongoose from 'mongoose';

import Ticket, { Reply } from '../models/ticket.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let tickets;

        if (req.session.user.level <= 1) {
            tickets = await Ticket.find({ creator: new mongoose.Types.ObjectId(req.session.user._id) });
        }
        else if (req.session.user.level === 2 ) {
            tickets = await Ticket.find().or([{ assign: new mongoose.Types.ObjectId(req.session.user._id) }, { assign: null }]);
        }
        else {
            tickets = await Ticket.find();
        }

        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const tickets = await Ticket.findById(id).populate('creator').populate('responses.creator').populate('assign');
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const ticket = req.body;

    const newTicket = new Ticket({
        creator: new mongoose.Types.ObjectId(req.session.user._id),
        title: ticket.title,
        description: ticket.description
    });

    try {
    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
    } catch (err) {
    res.status(400).json({ message: err.message });
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;

    const ticket = await Ticket.findById(id);

    if (!ticket.responses) {
        ticket.responses = [];
    }

    if (('title' in req.body) && ('description' in req.body)) {
        const title = req.body.title;
        const description = req.body.description;
        const updatedTicket = await Ticket.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        )
        res.json(updatedTicket);
    }
    else if (('status' in req.body) && ('response' in req.body)) {
        if (req.session.user._id !== ticket.creator.toString()) {
            if (ticket.assign && req.session.user._id !== ticket.assign.toString()) {
                if (req.session.user.level <= 2) {
                    res.status(403).json({ message: 'Not allowed' });
                    return;
                }
            }
            else if (!ticket.assign) {
                if (req.session.user.level < 2) {
                    res.status(403).json({ message: 'Not allowed' });
                    return;
                }
            }
        }
    
        const status = req.body.status;
        const response = req.body.response;
        let responses;

        if (response) {
            responses = [
                ...ticket.responses,
                new Reply({
                    creator: new mongoose.Types.ObjectId(req.session.user._id),
                    message: response.message
                })
            ];
        }
        else {
            responses = [
                ...ticket.responses,
            ];
        }

        if (!ticket.assign) {
            if (req.session.user.level === 2) {
                ticket.assign = new mongoose.Types.ObjectId(req.session.user._id);
            }
        }

        const updatedTicket = await Ticket.findByIdAndUpdate(
            id,
            { status, responses, assign: ticket.assign },
            { new: true }
        )
        res.json(updatedTicket);
    }
    else {
        res.status(400).json({ message: 'Params not found' });
    }
});


router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Ticket.findByIdAndDelete(id);
        res.json({ message: 'Ticket deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
