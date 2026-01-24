import { Router } from 'express';
import {getAllArtworks, getArtwork, updateArtwork, deleteArtwork} from '../controllers/artwork.controller.js'

const artworkRouter = Router();

artworkRouter.get('/', getAllArtworks);

artworkRouter.get('/:id', getArtwork);

artworkRouter.put('/:id', updateArtwork);

artworkRouter.delete('/:id', deleteArtwork);

export default artworkRouter;