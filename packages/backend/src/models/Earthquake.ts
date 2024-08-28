import mongoose from 'mongoose';

const earthquakeSchema = new mongoose.Schema({
  location: { type: String, required: true },
  magnitude: { type: Number, required: true },
  date: { type: Date, required: true },
});

export const Earthquake = mongoose.model('Earthquake', earthquakeSchema);
