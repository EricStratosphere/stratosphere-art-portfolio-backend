import { Router } from "express";
import { editBriefIntroduction, editLongIntroduction } from "../controllers/aboutmepage.controller";
const aboutMeRouter = Router();

aboutMeRouter.put('/brief-introduction', editBriefIntroduction);

aboutMeRouter.put('/longer-introduction', editLongIntroduction);