
import morgan from 'morgan';
import express from 'express';
import authRouter from './routers/authRouter';

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());

app.use('/api/auth', authRouter);

export default app;
