import express from 'express';
import catRouter from './routes/cat-router.js';
import usersRouter from './routes/users.js';

const router = express.Router();

router.use('/cats', catRouter);
router.use('/users', usersRouter);

export default router;
