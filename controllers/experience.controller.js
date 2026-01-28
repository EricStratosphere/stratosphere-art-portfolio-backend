import Experience from "../models/education-experience.model.js";
export const addExperience = async(req, res, next)=>{
    try{
        const experience = await Experience.create({...req.body});
        if(!experience){
            const error = new Error('Failed to create Experience');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(
            {
                message : true,
                data : experience,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const editExperience = async (req, res, next)=>{
    try{
        const experience = await Experience.findById(req.params.id);
        if(!experience)
        {
            const error = new Error('Experience not found!');
            error.statusCode = 404;
            throw error;
        }
        if(req.body.institution){
            experience.institution = req.body.institution;
        }
        if(req.body.program){
            experience.program = req.body.program;
        }
        if(req.body.entryType){
            experience.entryType = req.body.entryType;
        }
        if(req.body.startYear){
            experience.startYear = req.body.startYear;
        }
        if(req.body.endYear){
            experience.endYear = req.body.endYear;
        }
        await experience.save();
        res.status(200).json(
            {
                success : true,
                updated_data : experience,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const getAllExperiences = async (req, res, next)=>{
    try{
        const experience = await Experience.find();
        if(!experience){
            const error = new Error('Failed to fetch experiences!');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(
            {
                success : true,
                data : experience,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const deleteExperience = async (req, res, next)=>{
    try{
        const experience = await Experience.findByIdAndDelete(req.params.id);
        if(!experience){
            const error = new Error('No experience found');
            error.statusCode = 400;
            throw error;
        }
        res.status(200).json(
            {
                success : true,
                deleted_data : experience,
            }
        )
    }
    catch(error){
        next(error);
    }
}