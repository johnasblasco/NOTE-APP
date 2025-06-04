/***
# 📝 MERN Notes App

A full-stack **Note Taking Application** built with the MERN stack — **MongoDB, Express.js, React, and Node.js**. This app supports user authentication, note creation, editing, and deletion with a modern responsive UI.

---

## 📁 Folder Structure
/mern-notes-app<br>
├── /frontend # React Frontend<br>
│ ├── /src<br>
│ │ ├── /pages # Login, Register, Dashboard<br>
│ │ ├── /components # Reusable UI components<br>
│ │ ├── /api # Axios functions for API calls<br>
│ │ └── App.js # Main React app component<br>
│ └── tailwind.config.js<br>
├── /backend # Node + Express Backend<br>
│ ├── /controllers # Business logic (auth, notes)<br>
│ ├── /models # Mongoose schemas (User, Note)<br>
│ ├── /routes # API routes for auth and notes<br>
│ ├── /middleware # Auth middleware for token verification<br>
│ └── server.js # Main Express server file<br>
├── .env # Environment variables (Mongo URI, JWT secret)<br>
└── README.md


---

## 📦 Tech Stack & Essential Libraries

### 🔹 Frontend (React)

| Library             | Usage Location             | Why We Use It                                                |
|---------------------|----------------------------|--------------------------------------------------------------|
| **axios**           | `/src/api`, pages          | For making HTTP requests to the backend.                     |
| **react-router-dom**| `App.js`                   | For client-side routing between login/register/dashboard.    |
| **formik**          | `Login.jsx`, `Register.jsx`| Handles form state and submission easily.                    |
| **yup**             | With Formik                | Provides clean and reusable form validation rules.           |
| **tailwindcss**     | Throughout UI              | Utility-first CSS framework for rapid UI development.        |

---

### 🔸 Backend (Node + Express)

| Library             | Usage Location           | Why We Use It                                                |
|---------------------|--------------------------|--------------------------------------------------------------|
| **express**         | `server.js`, routes      | Sets up the server and routes.                               |
| **mongoose**        | `models/`, `controllers/`| Connects to MongoDB and defines schemas.                     |
| **dotenv**          | `server.js`              | Loads environment variables from `.env`.                     |
| **cors**            | `server.js`              | Enables frontend to talk to backend (Cross-Origin).          |
| **bcryptjs**        | `authController.js`      | For hashing user passwords securely.                         |
| **jsonwebtoken**    | `authController.js`, middleware | Creates and verifies JWT tokens for protected routes.   |
| **nodemon** (dev)   | Dev script only          | Auto-restarts the backend server on file changes.            |
| **concurrently**    | Project root             | Runs both frontend and backend in a single terminal.         |

---

## ✅ Features You’ll Learn
- User registration & login with hashed passwords
- Form validation (Formik + Yup)
- JWT authentication (private routes)
- CRUD for personal notes (Create, Read, Update, Delete)
- Protected API routes using middleware
- Styled UI using Tailwind CSS
- Axios for frontend-backend communication

---
