import AboutMeDetails from "../models/aboutmedetails.model.js";
export const getAboutMeDetails = async(req, res, next) => {
    try{
        const dataArray = await AboutMeDetails.find();
        if(!dataArray){
            const error = new Error('No data fetched!');
            error.statusCode = 400;
            throw error;
        }
        const data = dataArray[0];
        res.status(200).send(
            {
                success : true,
                data : data,
            }
        )
    }
    catch(error){
        next(error);
    }
} 

export const editBriefIntroduction = async (req, res, next) => {
    try{
        const dataArray = await AboutMeDetails.find();
        if(!dataArray){
            const error = new Error('No data fetched!');
            error.statusCode = 400;
            throw error;
        }
        const data = dataArray[0];
        data.brief_introduction = req.body.brief_introduction;
        data.save();
        res.status(200).send(
            {
                success : true,
                data : data,
            }
        )
    }
    catch(error){
        next(error);
    }
}

export const editLongIntroduction = async (req, res, next) => {
    try{
        const dataArray = await AboutMeDetails.find();
        if(!dataArray){
            const error = new Error('No data fetched!');
            error.statusCode = 400;
            throw error;
        }
        const data = dataArray[0];
        data.long_introduction = req.body.long_introduction;
        data.save();
        res.status(200).send(
            {
                success : true,
                data : data,
            }
        )
    }
    catch(error){
        next(error);
    }
}