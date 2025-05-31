import mongoose from 'mongoose';

const ReplySchema = new mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: { type: String, required: true },
  datecreated: { type: Date, required: false, default: Date.now },
})

const TicketSchema = new mongoose.Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: false, default: "pending" },
  responses: [ReplySchema],
  datecreated: { type: Date, required: false, default: Date.now },
  locked: { type: Boolean, required: false, default: false},
});

export default mongoose.model('Ticket', TicketSchema);