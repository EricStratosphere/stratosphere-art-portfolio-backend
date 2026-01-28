import { Router } from "express"; 
import { editMainPageDescription, editMainPageIntroduction, editProfilePicture, getData } from "../controllers/mainpage.controller.js";
const mainPageRouter = Router();

mainPageRouter.get('/', getData);
//editMainPageDescription
mainPageRouter.put('/description', editMainPageDescription);
//editMainPageIntroduction
mainPageRouter.put('/introduction', editMainPageIntroduction);
//editProfilePicture
mainPageRouter.put('/pfp', editProfilePicture);

export default mainPageRouter;