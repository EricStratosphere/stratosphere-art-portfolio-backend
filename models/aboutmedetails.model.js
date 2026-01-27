import mongoose from "mongoose";

const aboutMeDetailsSchema = mongoose.Schema(
    {
        brief_introduction : {
            type : String,
            required : true,
            minLength : 10,
            maxLength : 250,
        },

        long_introduction : {
            type : String,
            required : true,
            minLength : 10,
            maxLength : 500,
        },
    }
)

const AboutMeDetails = mongoose.model('AboutMeDetails', aboutMeDetailsSchema);

export default AboutMeDetails;