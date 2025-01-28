# Vite Proxy Demo

This project demonstrates how to resolve communication issues between a **frontend (Vite + React)** and a **backend (Node.js/Express) in a GitHub Codespace using a **proxy configuration** in `vite.config.js`.

---

## Problem
When running a frontend and backend on different ports (e.g., in a GitHub Codespace), the browser blocks requests from the frontend to the backend due to **CORS (Cross-Origin Resource Sharing)** restrictions.

---

## Solution
By configuring a **proxy** in `vite.config.js`, we can redirect API requests from the frontend to the backend without running into CORS issues.

---

## Project Structure
vite-proxy-demo/
├── backend/
│ ├── server.js # Backend server (Node.js/Express)
│ └── package.json # Backend dependencies
├── frontend/
│ ├── src/
│ │ ├── App.jsx # Main React component
│ │ └── main.jsx # Entry point for the React app
│ ├── index.html # HTML file for the frontend
│ ├── vite.config.js # Vite configuration with proxy setup
│ └── package.json # Frontend dependencies
└── README.md # Project documentation


---

## How to Run

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/vite-proxy-demo.git
cd vite-proxy-demo

Step 2: Set Up the Backend
 1. Navigate to the backend folder:
    cd backend
 2.Install dependencies:
    npm install
 3.Start the backend server:
    npm start

The backend will run at http://localhost:3001.

Step 3: Set Up the Frontend
1.Open a new terminal and navigate to the frontend folder:
  cd ../frontend
2.Install dependencies:
  npm install
3.Start the frontend development server:
  npm run dev

The frontend will run at http://localhost:5173.


Step 4: Test the Application

Open your browser and go to http://localhost:5173.

You should see the message: "Data from backend: Hello from the backend!".

Key Files
Backend
backend/server.js: A simple Express server that serves data at /api/data.

backend/package.json: Lists backend dependencies and scripts.

Frontend
frontend/src/App.jsx: The main React component that fetches data from the backend.

frontend/src/main.jsx: The entry point for the React app.

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
This project is licensed under the MIT License.

Contributing
Feel free to open issues or submit pull requests if you find any bugs or have suggestions for improvements.