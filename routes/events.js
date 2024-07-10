import { Router } from "express";
import { addEvents, deleteEvent, getEvent, getEvents, updateEvent } from "../controllers/events.js";

const EventRouter = Router();

// Define routes
EventRouter.get('/events', getEvents);

EventRouter.get('/events/:id', getEvent);

EventRouter.post('/events', addEvents);

EventRouter.patch('/events/:id', updateEvent);

EventRouter.delete('/events/:id', deleteEvent);

// Export router
export default EventRouter;