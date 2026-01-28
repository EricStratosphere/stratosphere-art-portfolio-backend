import mongoose from "mongoose";

const aboutMeDetailsSchema = mongoose.Schema(
    {
        brief_introduction : {
            type : String,
            required : true,
            minLength : 2,
            maxLength : 1000,
        },
        long_introduction : {
            type : String,
            required : true,
            minLength : 2,
            maxLength : 1500,
        },
    }
)

const AboutMeDetails = mongoose.model('AboutMeDetail', aboutMeDetailsSchema);

export default AboutMeDetails;