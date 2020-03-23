import { Router } from 'express';
import ResidenceController from '../controllers/ResidenceController';

const router = Router();

router.get('/', ResidenceController.getAllResidences);
router.get('/:id', ResidenceController.getAResidence);
router.post('/', ResidenceController.addResidence);
router.post('/:id', ResidenceController.director);

export default router;