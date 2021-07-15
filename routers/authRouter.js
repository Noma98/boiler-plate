import express from 'express';
import { postJoin } from '../controllers/userControllers';

const authRouter = express.Router();

authRouter.get('/', (req, res) => res.send("Hello world!"));

authRouter.post('/join', postJoin);
export default authRouter;