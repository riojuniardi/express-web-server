import express from 'express';
import {
  createNote,
  getNotes,
  getNoteById,
  editNoteById,
  deleteNoteById
} from '../controller/note-controller.js';
import validate from '../../../middlewares/validate.js';
import { notePayloadSchema } from '../validator/schema.js';
import validateQuery from '../../../middlewares/validate-query.js';

const routes = express.Router();

routes.post('/notes', validate(notePayloadSchema), createNote);
routes.get('/notes', validateQuery(notePayloadSchema), getNotes);
routes.get('/notes/:id', getNoteById);
routes.put('/notes/:id', validate(notePayloadSchema), editNoteById);
routes.delete('/notes/:id', deleteNoteById);

export default routes;
