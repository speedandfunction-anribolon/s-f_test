import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/earthquake';

export const initDataBase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};
