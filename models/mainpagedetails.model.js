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
        }
    }
)

const MainPageDetails = mongoose.model("MainPageDetails", mainPageDetailsSchema); 

export default MainPageDetails;