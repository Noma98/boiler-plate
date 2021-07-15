import express from 'express';
import { getAuth, postJoin, postLogin } from '../controllers/userControllers';
import { authMiddleware } from '../middlewares/auth';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.send("Hello world!"));

userRouter.post('/join', postJoin);
userRouter.post('/login', postLogin);
userRouter.get('/auth', authMiddleware, getAuth);
export default userRouter;