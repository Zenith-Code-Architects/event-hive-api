import { Schema, model } from "mongoose";

const collegeSchema = new Schema({
    name: {type: String, required:true},
    description: {type: String, required:true},
    banner: {type: String, required:true},
    location: {type: String, required:true},
    rating: {type: Number, required:true},
},{
    timestamps: true
})


// export const collegeschema = Joi.object({
//         name: Joi.string().required(),
//         description: Joi.string().required(),
//         banner: Joi.string().required(),
//         location: Joi.string().required(),
//         rating: Joi.Number().required()
// });

export const CollegModel = model('College', collegeSchema);