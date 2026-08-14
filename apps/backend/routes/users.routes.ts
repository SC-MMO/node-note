import { Router } from 'express';
import { searchUsers } from '../controllers/users.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/search', searchUsers);

export default router;
