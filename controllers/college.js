import { CollegModel } from "../models/college.js";



//Function to retrieve all data/ a single data
export const getCollege = async (req, res, next) => {
    try {
        const idCollege = req.param.id
       if (idCollege) {
         //Get filtered  statement from database
         const allColleges = await CollegModel.findById(idCollege)
         //Return all filtered statements
        return res.send(allStatements)
       } else {
        const allColleges = await CollegModel.find()
        //Return all recipes
       return res.send(allColleges)
       }
    } catch (error) {
        next(error);
    }
}

export const addCollege = async (req, res, next) => {

    try {
        const addedCollege = await CollegModel.create(req.body);
        res.status(200).send(addedCollege)
    } catch (error) {
      next(error)  
        console.log(error)
    }
}

export const updateCollege = async (req, res, next) => {

    try {
        //Update recipe by id
        const updatedCollege = await CollegModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        //Return response
        res.json(updatedCollege)
    } catch (error) {
        next(error)
    }
}

export const deleteCollege = async (req, res, next) => {
    try {
        //Delete college by ID
        const deletedCollege = await CollegModel.findByIdAndDelete(req.params.id)
        //Return response
        res.json(deletedCollege)

    } catch (error) {
        next(error)
    }
}