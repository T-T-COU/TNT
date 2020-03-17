import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getAUser);
router.put('/:id', UserController.updateUser);
router.post('/', UserController.addUser);
router.delete('/:id', UserController.deleteUser);

export default router;