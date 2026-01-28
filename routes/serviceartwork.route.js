import { Router } from "express";
import { addServiceArtwork, deleteServiceArtwork, getAllArtworksInTheService, getServiceArtworks } from "../controllers/serviceartwork.controller.js";
const serviceArtworkRouter = Router();


//getServiceArtworks

serviceArtworkRouter.get('/', getServiceArtworks);
//getAllArtworksInTheService

serviceArtworkRouter.get('/getartworks/:service_id', getAllArtworksInTheService);

//addServiceArtwork

serviceArtworkRouter.post('/:artwork_id/:service_id', addServiceArtwork);

//deleteServiceArtwork

serviceArtworkRouter.delete('/:artwork_id/:service_id', deleteServiceArtwork);

export default serviceArtworkRouter;