import mongoose from "mongoose";

const mainPageDetailsSchema = mongoose.Schema(
    {
        introduction : {
            type : String,
            required : true,
            minLength : 2,
            maxLength : 150,
        },
        description : {
            type : String,
            required : true,
            minLength : 2,
            maxLength : 150,
        },
        profile_imgurl : {
            type : String,
            required : true,
        }
    }
)

const MainPageDetails = mongoose.model("MainPageDetail", mainPageDetailsSchema); 

export default MainPageDetails;