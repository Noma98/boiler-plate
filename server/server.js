
import morgan from 'morgan';
import express from 'express';
import userRouter from './routers/userRouter';
import cookieParser from 'cookie-parser';

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cookieParser());

app.use('/api/user', userRouter);
app.get('/api/hello', (req, res) => {
    res.send("hello~");
})
export default app;
