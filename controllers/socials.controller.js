import Social from "../models/socials.model.js";

export const addNewSocial = async (req, res, next) => {
    try{
        const social = await Social.create({...req.body});
        if(!social){
            const error = new Error('Failed to create social!');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(
            {
                message : "new social added",
                data : social,
            }
        )   
    }
    catch(error){
        next(error);
    }
}

export const getAllSocials = async (req, res, next) => {
    try{
        const socials = await Social.find();
        if(!socials){
            const error = new Error('Failed to find error');
            error.statusCode(404);
            throw error;
        }
        res.status(200).send(
            {
                success : true,
                data : socials,
            }
        )
    }   
    catch(error){
            next(error);
    }
}

export const deleteSocials = async (req, res, next) =>{
    try{
        const social = await Social.findByIdAndDelete(req.params.id);
        if(!social){
            const error = new Error('Social does not exist!');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(
            {
                success : true,
                deleted_social : social,
            }
        )
    }
    catch(error){
        next(error);
    }
}