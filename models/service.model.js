import mongoose from "mongoose";

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

        service_artworks : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Artwork',
                required : false,
                index : true,
            }
        ],

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

const Service = mongoose.model("Service", serviceSchema);

export default Service;