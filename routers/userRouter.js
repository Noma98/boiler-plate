import express from 'express';
import { postJoin, postLogin } from '../controllers/userControllers';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.send("Hello world!"));

userRouter.post('/join', postJoin);
userRouter.post('/login', postLogin);
export default userRouter;