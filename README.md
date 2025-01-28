# Vite Proxy Demo

This project demonstrates how to resolve communication issues between a frontend (Vite + React) and a backend (Node.js/Express) in a GitHub Codespace using a proxy configuration in `vite.config.js`.

## Problem
In a Codespace, the frontend and backend run on different ports, causing CORS issues when the frontend tries to communicate with the backend.

## Solution
By configuring a proxy in `vite.config.js`, we can redirect API requests from the frontend to the backend without running into CORS issues.

## How to Run
1. Clone this repository.
2. Start the backend server:
   ```bash
   cd backend
   npm install
   node server.js
3. Start the frontend server:
    cd frontend
    npm install
    npm run dev
4. Open the frontend in your browser (usually http://localhost:5173).

Proxy Configuration
The key part of the solution is the proxy configuration in vite.config.js:
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
    },
  },
},

License
MIT
