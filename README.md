# BlockAI-MERN

BlockAI-MERN is a full-stack MERN (MongoDB, Express, React, Node.js) application that integrates blockchain technology with AI to provide blockchain anomaly detection and user authentication features. The project leverages neural networks for blockchain analysis and anomaly detection.

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
- [Frontend Setup](#frontend-setup)
- [License](#license)

---

## Project Structure
```
me-safwan-07-BlockAI-MERN/
├── package.json
├── backend/
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   ├── .env
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── ai.controller.js
│   │   ├── auth.controller.js
│   │   └── block.controller.js
│   ├── models/
│   │   ├── block.js
│   │   └── user.js
│   ├── routes/
│   │   ├── aiRoutes.js
│   │   ├── authRoutes.js
│   │   └── blockRoutes.js
└── frontend/
    ├── README.md
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   │   ├── Blockchain.jsx
    │   │   ├── CreateBlock.jsx
    │   │   ├── DetectAnomalies.jsx
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Navbar.jsx
    │   │   └── Register.jsx
```

---

## Features
- **Blockchain with AI Anomaly Detection**
- **User Authentication** (Register/Login)
- **REST API** for blockchain and AI interactions
- **Frontend** built with React and Tailwind CSS
- **Backend** powered by Express and Mongoose
- **AI Neural Network** implemented with Synaptic.js

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- Vite (for frontend development)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/username/BlockAI-MERN.git
   ```
2. Install dependencies for backend:
   ```bash
   cd backend
   npm install
   ```
3. Install dependencies for frontend:
   ```bash
   cd frontend
   npm install
   ```

---

## Usage

### Backend
Start the backend server:
```bash
cd backend
npm run dev
```

### Frontend
Start the frontend server:
```bash
cd frontend
npm run dev
```

---

## Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/BlockAI-MERN
JWT_SECRET=BlockAI-JWT-SECRET
```

---

## Endpoints

### Authentication
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - User login

### Blockchain
- **POST /api/blockchain** - Create a new block
- **GET /api/blockchain** - Get entire blockchain

### AI
- **GET /api/ai/detect** - Detect anomalies in the blockchain

---

## Frontend Setup
- **Home Page** - Displays blockchain data
- **Login/Register** - User authentication forms
- **Create Block** - Form to add a new block
- **Anomaly Detection** - Triggers AI-based anomaly detection

---

## License
This project is licensed under the ISC License.

