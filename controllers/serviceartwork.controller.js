import ServiceArtwork from "../models/serviceartwork.model.js";
import Artwork from "../models/artwork.model.js";
import Service from "../models/service.model.js";
export const getServiceArtworks = async(req, res, next) => {
    try{
        const serviceArtworks = await ServiceArtwork.find();
        res.status(200).json(
            {
                success : true,
                message : serviceArtworks,
            }
        )
    }
    catch(error){
        next(error);
    }
}
export const getAllArtworksInTheService = async (req, res, next)=>{
    try{
        const artworks = [];
        const artworkIdDocs = await ServiceArtwork.find({service_id : req.params.service_id}).select('artwork_id -_id');
        
        if(artworkIdDocs.length === 0){
            res.status(409).send(
                {
                    success : false,
                    message : "This service currently has no artworks."
                }
            )
        }
        for(const artworkIdDoc of artworkIdDocs){
            const artwork = await Artwork.findOne({_id : artworkIdDoc.artwork_id});
            artworks.push(artwork);
        }
        res.status(200).json(
            {
                success : true,
                data : artworks,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const addServiceArtwork = async(req, res, next)=>{
    
    try{
        const checkIfExists = await ServiceArtwork.findOne({service_id : req.params.service_id, artwork_id : req.params.artwork_id});
        if(checkIfExists){
            res.status(409).json(
                {
                    success : false,
                    message : "Service artwork already exists!",
                }
            )
        }
        const serviceArtwork = await ServiceArtwork.create({service_id : req.params.service_id, artwork_id : req.params.artwork_id});
        res.status(200).json(
            {
                success : true,
                data : serviceArtwork,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const deleteServiceArtwork = async(req, res, next) => {
    try{
        const deleted_data = await ServiceArtwork.deleteMany({artwork_id : req.params.artwork_id, service_id : req.params.service_id});
        if(!deleted_data){
            res.status(404).json(
                {
                    success : false,
                    message : 'Service artwork does not exist.',
                }
            )
        }
        res.status(200).json({
            success : true,
            deleted_data : deleted_data
        })
    }
    catch(error){
        next(error);
    }
} 