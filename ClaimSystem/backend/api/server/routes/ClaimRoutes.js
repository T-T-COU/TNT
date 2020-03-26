import { Router } from 'express';
import claimController from '../controllers/claimController';

const router = Router();

router.get('/', claimController.getAllClaims);
router.get('/:id', claimController.getAClaim);
router.post('/:id', claimController.director);
router.post('/', claimController.addClaim);

export default router;