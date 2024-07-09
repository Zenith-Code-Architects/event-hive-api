import { Router } from "express";
import { addCollege, deleteCollege, getCollege, updateCollege } from "../controllers/college.js";



const college =  Router()

college.get('/college', getCollege)

college.get('/college/:id', getCollege )

college.post('/college', addCollege )

college.patch('/college/:id', updateCollege)

college.delete('/college/:id',deleteCollege )


export default college;