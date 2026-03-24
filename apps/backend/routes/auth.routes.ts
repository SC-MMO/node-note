import { Router } from 'express';
import { register, login, logout, getMe, updateMe, updateEmail, deleteMe } from '../controllers/auth.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', authenticate, logout);
router.get('/me', authenticate, getMe);
router.put('/me', authenticate, updateMe);
router.put('/me/email', authenticate, updateEmail);
router.delete('/me', authenticate, deleteMe);

export default router;
