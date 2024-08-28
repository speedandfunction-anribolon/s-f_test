import { initDataBase } from './db/connection';

const startServer = async () => {
  try {
    await initDataBase();
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();
