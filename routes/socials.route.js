import { Router } from "express";
import { getAllSocials, addNewSocial, editSocial, deleteSocials } from "../controllers/socials.controller";
const socialsRouter = Router();

//getAllSocials
socialsRouter.get('/', getAllSocials);

//addNewSocial
socialsRouter.post('/', addNewSocial);

//editSocial
socialsRouter.put('/:socialsName', editSocial);

//deleteSocials

socialsRouter.delete('/:socialsName', deleteSocials);
