import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

// Serve static files for production
app.use(express.static(path.join(__dirname,'..','..','client','dist')));

export default app;