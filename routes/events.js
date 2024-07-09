import { Router } from "express";
import { addEvents, deleteEvent, getEvent, getEvents, updateEvent } from "../controllers/events.js";
import { remoteUpload } from "../middlewares/event_uploads.js";

const EventRouter = Router();

// Define routes
EventRouter.get('/events', getEvents);

EventRouter.get('/events/:id', getEvent);

EventRouter.post('/events', remoteUpload.single('banner'),  addEvents);

EventRouter.patch('/events/:id', updateEvent);

EventRouter.delete('/events/:id', deleteEvent);

// Export router
export default EventRouter;