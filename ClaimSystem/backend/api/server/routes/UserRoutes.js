import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getAUser);

router.post('/:id', UserController.director); //update, delete
router.post('/', UserController.addUser);
// router.post('/:id', UserController.director);

export default router;