import { Router } from 'express';
import {
  getMyGroups,
  searchGroups,
  getGroupMembers,
  createGroup,
  deleteGroup,
  inviteUser,
  removeMember,
} from '../controllers/groups.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/', getMyGroups);
router.get('/search', searchGroups);
router.get('/:id/members', getGroupMembers);
router.post('/', createGroup);
router.delete('/:id', deleteGroup);
router.post('/:id/invite', inviteUser);
router.delete('/:id/members/:userId', removeMember);

export default router;
