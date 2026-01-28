import { Router } from "express";
import { editBriefIntroduction, editLongIntroduction, getAboutMeDetails } from "../controllers/aboutmepage.controller.js";
const aboutMeRouter = Router();

aboutMeRouter.get('/', getAboutMeDetails)
aboutMeRouter.put('/brief-introduction', editBriefIntroduction);

aboutMeRouter.put('/long-introduction', editLongIntroduction);

export default aboutMeRouter;