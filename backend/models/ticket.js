import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: false },
  creator: { type: String, required: false },
  datecreated: { type: Date, required: false },
  lastupdated: { type: Date, required: false },
  locked: { type: Boolean, required: false},
});

export default mongoose.model('Ticket', TicketSchema);