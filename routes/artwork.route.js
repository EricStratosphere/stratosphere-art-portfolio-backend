import { Router } from 'express';
import {getAllArtworks, getArtwork, updateArtwork, deleteArtwork, addNewArtwork} from '../controllers/artwork.controller.js'

const artworkRouter = Router();

artworkRouter.get('/', getAllArtworks);

artworkRouter.post('/', addNewArtwork);

artworkRouter.get('/:id', getArtwork);

artworkRouter.put('/:id', updateArtwork);

artworkRouter.delete('/:id', deleteArtwork);

export default artworkRouter;