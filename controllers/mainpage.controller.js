import MainPageDetails from "../models/mainpagedetails.model.js";

export const getData = async (req, res, next) => {
    try{
        const dataArray = await MainPageDetails.find();
        if(!dataArray){
            const error = new Error('Failed to fetch data!');
            error.statusCode = 400;
            throw error;
        }
        const data = dataArray[0];
        res.status(200).json(
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
export const editMainPageDescription = async (req, res, next)=>{
    try{
        const dataArray = await MainPageDetails.find();
        if(!dataArray){
            const error = new Error('Failed to fetch data!');
            error.statusCode = 400;
            throw error;
        }
        const data = dataArray[0];
        data.description = req.body.description;
        await data.save();
        res.status(200).json(
            {
                success : true,
                edited_data : data,
            }
        );
    }
    catch(error){
        next(error);
    }
}

export const editMainPageIntroduction =  async(req, res, next) => {
    try{
        const dataArray = await MainPageDetails.find();
        if(!dataArray){
            const error = new Error('Failed to fetch data!');
            error.statusCode = 400;
            throw error;
        }
        const data = dataArray[0];
        data.introduction = req.body.introduction;
        await data.save();
        res.status(200).json(
            {
                success : true,
                edited_data : data,
            }
        );
    }
    catch(error){
        next(error);
    }
}
export const editProfilePicture = async (req, res, next) => {
    try{
        const dataArray = await MainPageDetails.find();
        if(!dataArray){
            const error = new Error('Failed to fetch data!');
            error.statusCode = 400;
            throw error;
        }
        const data = dataArray[0];
        data.profile_imgurl = req.body.profile_imgurl;
        await data.save();
        res.status(200).json(
            {
                success : true,
                edited_data : data,
            }
        );
    }
    catch(error){
        next(error);
    }
}