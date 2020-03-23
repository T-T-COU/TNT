import { Router } from 'express';
import HouseController from '../controllers/HouseController';

const router = Router();

router.get('/', HouseController.getAllhouses);
router.get('/:id', HouseController.getAhouse);
router.post('/', HouseController.addhouse);
router.post('/:id', HouseController.director);

export default router;