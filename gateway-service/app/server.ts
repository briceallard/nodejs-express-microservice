import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

import { initializeDatabase } from '../config';

const app = express();
const port = process.env.GATEWAY_SERVICE_PORT || 3000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(helmet()); // Add security headers
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

// Database connection
initializeDatabase();

// Proxy Services
app.use(
  '/auth',
  createProxyMiddleware({
    target: `${process.env.AUTH_SERVICE_URL}:${process.env.AUTH_SERVICE_PORT}` || 'http://localhost:3001',
    changeOrigin: true,
  }),
);
app.use(
  '/users',
  createProxyMiddleware({
    target: `${process.env.USER_SERVICE_URL}:${process.env.USER_SERVICE_PORT}` || 'http://localhost:3002',
    changeOrigin: true,
  }),
);

// Routes
app.get('/', (_req, res) => {
  res.send('Gateway Service Status: OK');
});

app.listen(port, () => {
  console.log(`Gateway service is running on port ${port}`);
});
