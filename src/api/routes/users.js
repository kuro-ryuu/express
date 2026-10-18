import { Router } from 'express';
import {
  createUser,
  deleteUser,
  listUsers,
  showUser,
  updateUser,
} from '../controllers/users.js';

const router = Router();

router.get('/', listUsers);
router.get('/:id', showUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
