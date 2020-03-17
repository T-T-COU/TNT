import { Router } from 'express';
import HouseController from '../controllers/HouseController';

const router = Router();

router.get('/', HouseController.getAllhouses);
router.get('/:id', HouseController.getAhouse);
router.put('/:id', HouseController.updatehouse);
router.post('/', HouseController.addhouse);
router.delete('/:id', HouseController.deletehouse);

export default router;