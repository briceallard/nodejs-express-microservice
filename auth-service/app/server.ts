import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

import { initializeDatabase } from '../config';

const app = express();
const port = process.env.AUTH_SERVICE_PORT || 3001;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(helmet()); // Add security headers
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

// Database connection
initializeDatabase();

// Routes
app.get('/', (_req, res) => {
  res.send('Auth Service Status: OK');
});

app.listen(port, () => {
  console.log(`Auth Service is running on port ${port}`);
});
