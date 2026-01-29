import Artwork from "../models/artwork.model.js";
import ServiceArtwork from "../models/serviceartwork.model.js";
export const getAllArtworks = async (req, res, next) => {
    try{
        const artworks = await Artwork.find();
        if(artworks.length === 0){
            res.status(409).json(
                {
                    success : false,
                    message : "You have no artworks added."
                }
            )
        }
        res.status(200).json(
            {
                success : true,
                data : artworks
            }
        );
    }
    catch(error){
        next(error)
    }
}

export const getArtwork = async(req, res, next) => {
    try{
        const artwork = await Artwork.findOne({_id : req.params.id});
        if(!artwork){
            res.status(409).json(
                {
                    success : false,
                    message : "This artwork does not exist",
                }
            )
        }
        res.status(200).json(
            {
                success : true,
                data : artwork,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const addNewArtwork = async(req, res, next) => {
    try{
        const artwork = await Artwork.create(
            {...req.body}
        )
        res.status(201).json(
            {
                success : true,
                data : artwork,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const updateArtwork = async(req, res, next) => {
    try{
        const artwork = await Artwork.findById(req.params.id);
        if(!artwork){
            const error = new Error('Artwork does not exist');
            error.statusCode = 404;
            throw error;
        }
        if(req.body.name){
            artwork.name = req.body.name;
        }
        if(req.body.date_created){
            artwork.date_created = req.body.date_created;
        }
        if(req.body.project_type){
            artwork.project_type = req.body.project_type;
        }
        if(req.body.links){
            artwork.links = req.body.links;
        }
        if(req.body.medium){
            artwork.medium = req.body.medium;
        }
        if(req.body.description){
            artwork.description = req.body.description;
        }
        if(req.body.img_url){
            artwork.img_url = req.body.img_url;
        }
        
        artwork.save();
        res.status(200).send(
            {
                success : true,
                data : artwork
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const deleteArtwork = async(req, res, next) => {
    
    try{
        const deleted_service_artwork = await ServiceArtwork.deleteMany({artwork_id : req.params.id});
        const deletedArtwork = await Artwork.findByIdAndDelete(req.params.id);
        if(!deletedArtwork){
            const error = new Error('Artwork not found!');
            error.statusCode = 404;
            throw error;
        }
        const responseJSON = {
            success : true,
            deleted_data : deletedArtwork,
        }
        if(deleted_service_artwork.deletedCount > 0){
            responseJSON.deleted_service_artwork = deleted_service_artwork;
        }
        res.status(200).json(responseJSON);
    }
    catch(error){
        next(error);
    }
}