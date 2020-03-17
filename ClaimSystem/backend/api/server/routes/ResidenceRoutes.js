import { Router } from 'express';
import ResidenceController from '../controllers/ResidenceController';

const router = Router();

router.get('/', ResidenceController.getAllResidences);
router.get('/:id', ResidenceController.getAResidence);
router.put('/:id', ResidenceController.updateResidence);
router.post('/', ResidenceController.addResidence);
router.delete('/:id', ResidenceController.deleteResidence);

export default router;