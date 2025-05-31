import express from 'express';
import mongoose from 'mongoose';

import Ticket from '../models/ticket.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let tickets;

        console.log(req.session.user)

        if (req.session.user.level <= 1) {
            tickets = await Ticket.find({ creator: new mongoose.Types.ObjectId(req.session.user._id) });
        }
        else {
            tickets = await Ticket.find().exec();
        }

        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const tickets = await Ticket.find({ id });
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
    const { title, description, status } = req.body;

    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(
        id,
        { title, description, status },
        { new: true }
        );
        res.json(updatedTicket);
    } catch (err) {
        res.status(400).json({ message: err.message });
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
