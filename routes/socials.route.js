import { Router } from "express";
import { getAllSocials, addNewSocial, deleteSocials }from "../controllers/socials.controller.js";
const socialsRouter = Router();

//getAllSocials
socialsRouter.get('/', getAllSocials);

//addNewSocial

socialsRouter.post('/', addNewSocial);


//deleteSocials

socialsRouter.delete('/:id', deleteSocials);

export default socialsRouter;