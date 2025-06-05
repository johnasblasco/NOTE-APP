import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

// Start server
const PORT = process.env.PORT || 5000; // <- use PORT 5000(public) if our PORT in env (private) is not available
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
