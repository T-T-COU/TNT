import { Router } from 'express';
import claimController from '../controllers/claimController';

const router = Router();

router.get('/', claimController.getAllClaims);
router.get('/:id', claimController.getAClaim);
router.put('/:id', claimController.updateClaim);
router.post('/', claimController.addClaim);
router.delete('/:id', claimController.deleteClaim);

export default router;