import { Router } from 'express';
import {getAllArtworks, getArtwork} from '../controllers/artwork.controller.js'
const artworkRouter = Router();

artworkRouter.get('/', getAllArtworks);
artworkRouter.get('/:id', getArtwork);
export default artworkRouter;