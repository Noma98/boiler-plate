import express from 'express';
import { getAuth, getLogout, postJoin, postLogin } from '../controllers/userControllers';
import { authMiddleware } from '../middlewares/auth';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.send("Hello world!"));

userRouter.post('/join', postJoin);
userRouter.post('/login', postLogin);
userRouter.get('/auth', authMiddleware, getAuth);
userRouter.get('/logout', authMiddleware, getLogout);
export default userRouter;