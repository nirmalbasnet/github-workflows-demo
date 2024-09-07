import { startServer } from './server.js';

const PORT = process.env.PORT || 3000;

startServer(PORT).catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start server:', err);
  process.exit(1);
});
