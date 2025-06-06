import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import noteRoutes from './routes/noteRoutes.js';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors';

dotenv.config();

const app = express();

//app.use is a middlewares it has two params (path, middleware) if path is blank then it will apply to all routes
app.use(cors()); // applies to ALL routes
app.use(express.json()); // applies to ALL routes
app.use('/api/auth', authRoutes); // applies to /api/auth route
app.use('/api/notes', noteRoutes); // applies to /api/notes route


// get route for Health check route
app.get('/', (req, res) => {
    res.send('API is running... go to /api route');
});



//setup database and server connection
const startServer = async () => {
    try {

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');


        // Start the server
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}



// lastly start the server
startServer();

