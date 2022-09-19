import mongoose from 'mongoose';
const kittySchema = new mongoose.Schema({
  name: String,
  deleteCode: String,
});

export const Kitten = mongoose.model('Kitten', kittySchema);
