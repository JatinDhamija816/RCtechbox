import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import taskRoute from './routes/task';

const app = express()

const corsOptions = {
    origin: ['http://localhost:5173', 'https://r-ctechbox.vercel.app'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/task', taskRoute);

export default app