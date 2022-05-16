import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from './routes';
import { setupDatabase } from './database';

dotenv.config();
setupDatabase();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export { app };