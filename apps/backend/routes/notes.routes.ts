import { Router } from "express";
import {
  getMyNotes,
  getGroupNotes,
  getSharedNotes,
  searchNotes,
  createNote,
  updateNote,
  deleteNote,
  shareNoteWithUser,
  shareNoteWithGroup,
} from "../controllers/notes.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.use(authenticate);

router.get("/", getMyNotes);
router.get("/group", getGroupNotes);
router.get("/shared", getSharedNotes);
router.get("/search", searchNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.post("/:id/share/user", shareNoteWithUser);
router.post("/:id/share/group", shareNoteWithGroup);

export default router;
