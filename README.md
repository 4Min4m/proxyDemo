# Proxy Demo

This project demonstrates how to resolve communication issues between a frontend (Vite + React) and a backend (Node.js/Express) in a GitHub Codespace using a proxy configuration in `vite.config.js`.

---

## Problem
In a Codespace, the frontend and backend run on different ports, causing CORS issues when the frontend tries to communicate with the backend.

---

## Solution
By configuring a proxy in `vite.config.js`, we can redirect API requests from the frontend to the backend without running into CORS issues.

---

## Project Structure
proxy-demo/
├── backend/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
└── README.md

## How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/vite-proxy-demo.git
   cd vite-proxy-demo

2. Start the backend server:
   cd backend
   npm install
   node server.js

3. Start the frontend server:
   cd ../frontend
   npm install
   npm run dev

4. Open the frontend in your browser (usually http://localhost:5173).

Key Files
Backend
backend/server.js: A simple Express server that serves data at /api/data.

Frontend
frontend/src/App.jsx: The main React component that fetches data from the backend.

frontend/src/main.jsx: The entry point for the React app.

frontend/index.html: The HTML file that loads the React app.

frontend/vite.config.js: Configures the proxy to redirect API requests to the backend.



Proxy Configuration
The key part of the solution is the proxy configuration in vite.config.js:

server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001', // Backend server URL
      changeOrigin: true,
      secure: false,
    },
  },
},


License
MIT
