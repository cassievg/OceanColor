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
  status: { type: String, required: false, default: "Pending" },
  responses: [ReplySchema],
  datecreated: { type: Date, required: false, default: Date.now },
  assign: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model('Ticket', TicketSchema);

export const Reply = mongoose.model('Reply', ReplySchema);
