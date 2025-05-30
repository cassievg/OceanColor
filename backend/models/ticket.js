import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: false, default: "pending" },
  datecreated: { type: Date, required: false, default: Date.now },
  lastupdated: { type: Date, required: false, default: Date.now  },
  locked: { type: Boolean, required: false, default: false},
});

export default mongoose.model('Ticket', TicketSchema);