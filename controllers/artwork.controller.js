import Artwork from "../models/artwork.model.js";
export const getAllArtworks = async (req, res, next) => {
    try{
        const artworks = await Artwork.find();
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
        const artwork = await Artwork.findById(req.params.id);
        if(!artwork){
            const error = new Error('Artwork not found!');
            error.statusCode = 404;
            throw error;
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
        const deletedArtwork = await Artwork.findByIdAndDelete(req.params.id);
        if(!deletedArtwork){
            const error = new Error('Artwork not found!');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(
            {
                success : true,
                data : deletedArtwork,
            }
        )
    }
    catch(error){
        next(error);
    }
}