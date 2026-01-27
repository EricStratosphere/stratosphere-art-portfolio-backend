import { Router } from "express"; 
import { editMainPageDescription, editMainPageIntroduction, editProfilePicture } from "../controllers/mainpage.controller.js";
const mainPageRouter = Router();

//editMainPageDescription
mainPageRouter.put('/description', editMainPageDescription);
//editMainPageIntroduction
mainPageRouter.put('/introduction', editMainPageIntroduction);
//editProfilePicture
mainPageRouter.put('/pfp', editProfilePicture);

export default mainPageRouter;