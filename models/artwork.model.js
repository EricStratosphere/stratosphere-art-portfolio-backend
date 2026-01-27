import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, 'Artwork name is required!'],
            trim : true,
            minLength : 1,
            maxLength : 200, 
        },

        date_created : {
            type : Date,
            required : true,
            validate : {
                validator : (value) => { return value <= new Date()},
                message : 'Start date must be in the past!'
            },
            default : new Date(),
        },
        
        project_type : {
            type : String,
            enum : ['Personal Project', 'Commission'],
            required : true
        },

        links : [
            {
                type : String,
                required : false,
            }
        ],

        medium : {
            type : String,
            required : [true, 'Please specify an artwork medium.'],
            minLength : 1,
        },
        
        description : {
            type : String,
            required : [true, 'Please specify a description!'],
            minLength : 2,
            maxLength : 500,           
        }
    }
)

const Artwork = mongoose.model("Artwork", artworkSchema);

export default Artwork;