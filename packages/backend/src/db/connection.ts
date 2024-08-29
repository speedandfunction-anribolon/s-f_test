import mongoose from 'mongoose';

export const initDataBase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/earthquake');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};
