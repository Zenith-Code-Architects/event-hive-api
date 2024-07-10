import { EventModel } from "../models/event.js";

// post events
export const addEvents = async (req, res, next) => {
    try {
        const addedEvent = await EventModel.create({
            ...req.body,
            banner: req.file.filename
          });
        // return response
        res.status(200).json(`${req.body.name} added`);
    } catch (error) {
        next(error)
    }
}

// get events
export const getEvents = async (req, res, next) => {
   try {
    const allEvents = await EventModel.find();
    // return response
    res.status(200).json(allEvents);
   } catch (error) {
        next(error);
   }
}

// get an event
export const getEvent = async (req, res, next) => {
    try {
     const oneEvent = await EventModel.findById(req.params.id);
    //  return response
     res.status(200).json(oneEvent);
    } catch (error) {
         next(error);
    }
 }

//  update event
 export const updateEvent = async (req, res, next) => { 
    try {
     // update event
     const updatedEvent = await EventModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
     // return response
     res.status(200).json(updatedEvent);
    } catch (error) {
     next(error);
    }
 }

 // delete event
export const deleteEvent = async (req, res, next) => {
    try {
     // delete event
     const deletedEvent = await EventModel.findByIdAndDelete(req.params.id);
     // return response
      res.status(200).json(`Event ${deletedEvent} with id ${req.params.id} deleted`);
    } catch (error) {
     next(error)
    }
 }
