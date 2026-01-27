import { Router } from "express";
import { editBriefIntroduction, editLongIntroduction } from "../controllers/aboutmepage.controller.js";
const aboutMeRouter = Router();

aboutMeRouter.put('/brief-introduction', editBriefIntroduction);

aboutMeRouter.put('/long-introduction', editLongIntroduction);

export default aboutMeRouter;