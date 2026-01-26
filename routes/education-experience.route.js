import { Router } from "express";
import { addExperience, deleteExperience, editExperience, getAllExperiences } from "../controllers/experience.controller.js";

const experienceRouter = Router();

//addExperience

experienceRouter.post('/', addExperience);

//getAllExperiences

experienceRouter.get('/', getAllExperiences);

//editExperience

experienceRouter.post('/:id', editExperience);

//deleteExperience

experienceRouter.delete('/:id', deleteExperience);

export default experienceRouter;
