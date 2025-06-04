 Folder Structure

/mern-notes-app
├── /client           # React Frontend
│   ├── /src
│   │   ├── /pages    # Login, Register, Dashboard
│   │   ├── /components
│   │   ├── /api      # Axios functions
│   │   └── App.js
│   └── tailwind.config.js
├── /server           # Node + Express Backend
│   ├── /controllers  # Auth, Notes logic
│   ├── /models       # User, Note schemas
│   ├── /routes       # authRoutes.js, noteRoutes.js
│   ├── /middleware   # authMiddleware.js
│   └── server.js
├── .env
└── README.md
