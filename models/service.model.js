import mongoose from "mongoose";
import ServiceArtwork from "./serviceartwork.model.js";
const serviceSchema = new mongoose.Schema(
    {
        service_name : {
            type : String,
            required : [true, 'User Name is rqeuired'],
            trim : true,
            minLength : 4,
            maxLength : 100,
        },

        service_img_link : {
            type : String,
            required : [true, 'Image link is required'],
        },

        service_description : {
            type : String,
            required : [true, 'Please define an artwork description.'],
            minLength : 2,
            maxLength : 500,   
        },

        subservices : [
            {
                type : String,
                required : false,
                maxLength : 30,
            }
        ]
    }
)
/*

artwork_id : 6978e5dda269f668457f6ade
service_id : 697b28ef29453a616a79ea21
{
  "service_name" : "Book Cover Design",
  "service_img_link" : "serviceimglink",
  "service_description" : "some description",
  "subservices" : ["service1", "service2"]
} 
 */
serviceSchema.pre('findByIdAndDelete', async function(next){
    try{
        const deleted_service_artwork = await ServiceArtwork.deleteMany({service_id : this._id});
        if(!deleted_service_artwork){
            const error = new Error('service_artwork not deleted!');
            error.statusCode = 400;
            throw error;
        }
        next();
    }
    catch(error){
        next(error);
    }
});


const Service = mongoose.model("Service", serviceSchema);

export default Service;